// Results rendering. Everything here is display logic over the pure outputs
// of scoring.js / archetype.js; the design rules it implements are from
// docs/quiz-design.md: continuous scores always visible, confidence bands on
// every scale, boundary proximity shown rather than hidden, verb-form
// language, results framed as a dated estimate.

window.Results = (function () {
  "use strict";

  var DOMAINS = ["N", "E", "O", "A", "C"];

  function el(tag, className, text) {
    var e = document.createElement(tag);
    if (className) e.className = className;
    if (text != null) e.textContent = text;
    return e;
  }

  function ordinal(n) {
    n = Math.round(n);
    var t = n % 10, h = n % 100;
    var suf = t === 1 && h !== 11 ? "st" : t === 2 && h !== 12 ? "nd" : t === 3 && h !== 13 ? "rd" : "th";
    return n + suf;
  }

  function band(pct) {
    return pct <= 30 ? "low" : pct >= 70 ? "high" : "mid";
  }

  function fmtDate(ts) {
    return new Date(ts).toLocaleDateString(undefined, {
      year: "numeric", month: "long", day: "numeric",
    });
  }

  function shareUrl(code) {
    return location.origin + location.pathname + "#r=" + code;
  }

  // A percentile track with the confidence band shaded and a dot at the score.
  function scaleTrack(score, small) {
    var wrap = el("div", small ? "scale-track small" : "scale-track");
    var bandEl = el("div", "scale-band");
    var lo = Math.max(0, score.band[0]);
    var hi = Math.min(100, score.band[1]);
    bandEl.style.left = lo + "%";
    bandEl.style.width = (hi - lo) + "%";
    var dot = el("div", "scale-dot");
    dot.style.left = Math.min(100, Math.max(0, score.pct)) + "%";
    wrap.appendChild(bandEl);
    wrap.appendChild(dot);
    return wrap;
  }

  function domainLongName(d) {
    return window.QUIZ_ITEMS.domainNames[d];
  }

  // ---------- sections ----------

  function archetypeCard(assigned, bundle) {
    var a = window.QUIZ_ARCHETYPES.byId[assigned.id];
    var card = el("div", "result-card archetype-card");

    card.appendChild(el("p", "quiet reads-as",
      (bundle.shared ? "This shared profile currently reads as" : "As of " + fmtDate(bundle.takenAt) + ", your profile reads as")));
    card.appendChild(el("h1", null, a.name));
    if (a.summary) card.appendChild(el("p", "summary", a.summary));

    var chips = el("div", "defining-chips");
    if (assigned.defining.length) {
      assigned.defining.forEach(function (d) {
        var domScore = bundle.result.domains[d.domain];
        chips.appendChild(el("span", "chip",
          (d.sign > 0 ? "High " : "Low ") + domainLongName(d.domain) +
          " · " + ordinal(domScore.pct) + " percentile"));
      });
    } else {
      chips.appendChild(el("span", "chip", "No dimension far from typical — that is the profile"));
    }
    card.appendChild(chips);

    var row = el("div", "share-row");
    var copy = el("button", "primary", "Copy share link");
    copy.addEventListener("click", function () {
      var url = shareUrl(bundle.code);
      var done = function () { window.App.toast("Link copied — it contains only your scores, nothing else"); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(done, function () { window.prompt("Copy this link:", url); });
      } else {
        window.prompt("Copy this link:", url);
      }
    });
    row.appendChild(copy);
    var retake = el("a", null, bundle.shared ? "Take the quiz yourself" : "Retake the quiz");
    retake.href = "#intro";
    retake.className = "quiet";
    row.appendChild(retake);
    card.appendChild(row);

    return card;
  }

  function flagNotice(flags) {
    if (!flags || !flags.flagged) return null;
    var box = el("div", "flag-notice");
    box.appendChild(el("strong", null, "Read this result with extra salt. "));
    var reasons = [];
    if (flags.attentionFailed) reasons.push("one or more reading-check statements were missed");
    if (flags.straightLining) reasons.push("long runs of identical answers suggest low engagement");
    if (flags.tooFast) reasons.push("the quiz was finished faster than careful reading usually allows");
    box.appendChild(document.createTextNode(
      "This session's response pattern (" + reasons.join("; ") + ") means the scores may not reflect the person answering. " +
      "Nothing is hidden or discarded — but a relaxed, unhurried retake would deserve more trust."));
    return box;
  }

  function neighborStrip(assigned, bundle) {
    var card = el("div", "result-card neighbor-strip");
    card.appendChild(el("h2", null, "How settled is this label?"));

    var p = el("p", "quiet");
    p.textContent =
      "The archetype names only your most distinctive dimensions (those beyond " +
      "the disclosed threshold), so nearby scores mean nearby labels. A retake " +
      "landing on a neighbor is expected movement, not a contradiction — the " +
      "continuous scores below move far less than the label can.";
    card.appendChild(p);

    assigned.neighbors.forEach(function (nb) {
      var n = window.QUIZ_ARCHETYPES.byId[nb.id];
      if (!n) return;
      // Local conversion of the z-gap into percentile points near the
      // threshold — approximate by construction, and labeled as such.
      var pctGap = Math.max(1, Math.round(100 * (window.Scoring.phi(window.Archetype.THRESHOLD + nb.gapZ) - window.Scoring.phi(window.Archetype.THRESHOLD))));
      var closeness = nb.gapZ < 0.15 ? "a very close call" : nb.gapZ < 0.35 ? "close" : "not close today";
      var line = el("p");
      line.appendChild(el("strong", null, n.name));
      line.appendChild(document.createTextNode(
        " — " + closeness + " (roughly " + pctGap + " percentile point" + (pctGap === 1 ? "" : "s") + " away): " + nb.reason + "."));
      card.appendChild(line);
    });

    var all = el("p", "quiet");
    var link = el("a", null, "Browse all 51 archetypes");
    link.href = "archetypes.html";
    all.appendChild(link);
    all.appendChild(document.createTextNode(" — including the neighbors above."));
    card.appendChild(all);
    return card;
  }

  function domainSection(bundle) {
    var frag = document.createDocumentFragment();
    frag.appendChild(el("h2", "result-section-title", "The five dimensions"));
    frag.appendChild(el("p", "quiet",
      "Percentiles are against a large adult norm sample (see the methods page). " +
      "The shaded band is the measurement-error range: scores inside it are " +
      "indistinguishable from yours."));

    DOMAINS.forEach(function (d) {
      var score = bundle.result.domains[d];
      var row = el("div", "scale-row");
      var head = el("div", "scale-head");
      head.appendChild(el("strong", null, domainLongName(d)));
      head.appendChild(el("span", "pct", ordinal(score.pct) + " percentile"));
      row.appendChild(head);
      row.appendChild(scaleTrack(score));
      var prose = window.QUIZ_PROSE.domains[d].bands[band(score.pct)];
      row.appendChild(el("p", "scale-prose", prose));
      frag.appendChild(row);
    });
    return frag;
  }

  function facetSection(bundle) {
    var frag = document.createDocumentFragment();
    frag.appendChild(el("h2", "result-section-title", "The 30 facets"));
    frag.appendChild(el("p", "quiet",
      "Facets are measured by only four statements each, so their bands are " +
      "wide on purpose — that width is the honest amount of certainty four " +
      "answers can buy. Facets often tell you more than the domain totals: " +
      "two people with the same domain score can differ a lot underneath."));

    DOMAINS.forEach(function (d) {
      var group = document.createElement("details");
      group.className = "facet-group";
      var summary = document.createElement("summary");
      summary.appendChild(el("span", null, domainLongName(d) + " facets"));
      group.appendChild(summary);

      for (var f = 1; f <= 6; f++) {
        var key = d + f;
        var score = bundle.result.facets[key];
        var wrap = el("div", "facet-scale");
        var head = el("div", "scale-head");
        head.appendChild(el("span", null, window.QUIZ_ITEMS.facetNames[d][f - 1]));
        head.appendChild(el("span", "pct", ordinal(score.pct)));
        wrap.appendChild(head);
        wrap.appendChild(scaleTrack(score, true));
        var fp = window.QUIZ_PROSE.facets[key];
        if (fp && fp.bands) {
          wrap.appendChild(el("p", "scale-prose", fp.bands[band(score.pct)]));
        }
        group.appendChild(wrap);
      }
      frag.appendChild(group);
    });
    return frag;
  }

  function developmentSection(assigned, bundle) {
    var card = el("div", "result-card");
    card.appendChild(el("h2", null, "Where this tends to go next"));
    card.appendChild(el("p", "quiet",
      "Not a prescription — a note on where people with scores like yours " +
      "usually find leverage. Average trait levels genuinely shift across " +
      "adulthood, so 'where to go next' is a real question, not a sales pitch."));

    var a = window.QUIZ_ARCHETYPES.byId[assigned.id];
    if (a.growth) card.appendChild(el("p", null, a.growth));

    // Per-pole leverage notes for the defining dimensions (reused blocks).
    assigned.defining.forEach(function (d) {
      var pole = window.QUIZ_PROSE.poles[d.domain + (d.sign > 0 ? "+" : "-")];
      if (!pole) return;
      var p = el("p");
      p.appendChild(el("strong", null, "On " + pole.label + ": "));
      p.appendChild(document.createTextNode(pole.growth));
      card.appendChild(p);
    });

    // Growth notes for the two most extreme facets (highest |z|).
    var extremes = window.Scoring.FACET_ORDER
      .map(function (k) { return { key: k, z: bundle.result.facets[k].z }; })
      .sort(function (x, y) { return Math.abs(y.z) - Math.abs(x.z); })
      .slice(0, 2);
    extremes.forEach(function (e) {
      var fp = window.QUIZ_PROSE.facets[e.key];
      if (!fp) return;
      var note = e.z >= 0 ? fp.growthHigh : fp.growthLow;
      if (!note) return;
      var d = e.key.charAt(0);
      var name = window.QUIZ_ITEMS.facetNames[d][Number(e.key.charAt(1)) - 1];
      var p = el("p");
      p.appendChild(el("strong", null, name + " (" + ordinal(bundle.result.facets[e.key].pct) + " percentile): "));
      p.appendChild(document.createTextNode(note));
      card.appendChild(p);
    });
    return card;
  }

  function retestCard(bundle) {
    var card = el("div", "result-card");
    card.appendChild(el("h2", null, "This is an estimate, dated " + fmtDate(bundle.takenAt)));
    card.appendChild(el("p", null,
      "Trait scores are stable enough to be meaningful and loose enough to move: mood, " +
      "recent events, and plain measurement error shift them between sittings, and " +
      "average levels drift slowly with age. A retake in six months that lands a few " +
      "percentile points away — or on a neighboring archetype — is the instrument " +
      "working as designed, not a mistake needing an explanation. Treat these numbers " +
      "as a good current estimate, never as a verdict on what you can become."));
    return card;
  }

  function archetypeBody(assigned) {
    var a = window.QUIZ_ARCHETYPES.byId[assigned.id];
    if (!a.body && !a.costs) return null;
    var card = el("div", "result-card");
    card.appendChild(el("h2", null, "Reading this profile"));
    if (a.body) card.appendChild(el("p", null, a.body));
    if (a.costs) {
      var p = el("p");
      p.appendChild(el("strong", null, "What this profile pays for its strengths: "));
      p.appendChild(document.createTextNode(a.costs));
      card.appendChild(p);
    }
    return card;
  }

  // ---------- history / compare ----------

  function describeCode(code) {
    var decoded = window.Encode.decode(code);
    if (!decoded) return null;
    var result = window.Scoring.resultFromFacetRaws(decoded.facetRaws, {});
    var z = {};
    DOMAINS.forEach(function (d) { z[d] = result.domains[d].z; });
    return { result: result, assigned: window.Archetype.assign(z), takenAt: decoded.takenAt };
  }

  function compareTable(thenInfo, nowInfo, thenLabel) {
    var card = el("div", "result-card");
    card.appendChild(el("h2", null, "Then vs. now"));

    var thenA = window.QUIZ_ARCHETYPES.byId[thenInfo.assigned.id];
    var nowA = window.QUIZ_ARCHETYPES.byId[nowInfo.assigned.id];
    var intro = el("p");
    if (thenInfo.assigned.id === nowInfo.assigned.id) {
      intro.textContent = "Same archetype both times (" + nowA.name + "). The table shows how much the underlying scores moved anyway.";
    } else {
      intro.textContent =
        "The label changed (" + thenA.name + " → " + nowA.name + ") because a score crossed " +
        "the naming threshold — check the table: the continuous scores usually move much " +
        "less than a changed label suggests. This is why the numbers, not the name, are the result.";
    }
    card.appendChild(intro);

    var table = el("table", "compare-table");
    var thead = document.createElement("thead");
    var hr = document.createElement("tr");
    ["Dimension", thenLabel, "Now", "Change"].forEach(function (h) {
      hr.appendChild(el("th", null, h));
    });
    thead.appendChild(hr);
    table.appendChild(thead);
    var tbody = document.createElement("tbody");
    DOMAINS.forEach(function (d) {
      var was = thenInfo.result.domains[d].pct;
      var now = nowInfo.result.domains[d].pct;
      var delta = Math.round(now) - Math.round(was);
      var tr = document.createElement("tr");
      tr.appendChild(el("td", null, domainLongName(d)));
      tr.appendChild(el("td", null, ordinal(was)));
      tr.appendChild(el("td", null, ordinal(now)));
      var td = el("td", delta > 0 ? "delta-up" : delta < 0 ? "delta-down" : null,
        (delta > 0 ? "+" : "") + delta + " pts");
      tr.appendChild(td);
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    card.appendChild(table);
    return card;
  }

  function historySection(bundle) {
    var frag = document.createDocumentFragment();
    var entries = window.History.all();
    var card = el("div", "result-card");
    card.appendChild(el("h2", null, "Past results on this device"));

    if (entries.length <= 1 && !bundle.shared) {
      card.appendChild(el("p", "quiet",
        "When you retake the quiz later, past results appear here so you can see " +
        "the drift instead of wondering about it. You can also paste a share code " +
        "below to compare against a result from another device."));
    }

    if (entries.length > 1) {
      var list = el("ul", "history-list");
      entries.slice().reverse().forEach(function (e) {
        var info = describeCode(e.code);
        if (!info) return;
        var li = document.createElement("li");
        var label = el("span", null,
          fmtDate(e.takenAt) + " — " + window.QUIZ_ARCHETYPES.byId[info.assigned.id].name);
        li.appendChild(label);
        if (e.code !== bundle.code) {
          var btn = el("button", "secondary", "Compare with current");
          btn.addEventListener("click", function () {
            renderCompare(bundle, e.code, fmtDate(e.takenAt));
          });
          li.appendChild(btn);
        } else {
          li.appendChild(el("span", "quiet", "shown above"));
        }
        list.appendChild(li);
      });
      card.appendChild(list);
    }

    // Paste-a-code compare (works across devices).
    var pasteWrap = el("p");
    var input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Paste a share code or link to compare";
    input.style.cssText = "width:100%;max-width:22rem;padding:0.5rem;border:1px solid var(--line);border-radius:8px;background:var(--bg);color:var(--ink);";
    var go = el("button", "secondary", "Compare");
    go.style.marginLeft = "0.5rem";
    go.addEventListener("click", function () {
      var v = input.value.trim();
      var m = v.match(/#r=([a-z0-9]+)/i);
      var code = m ? m[1] : v;
      if (window.Encode.decode(code)) {
        renderCompare(bundle, code, "Pasted result");
      } else {
        window.App.toast("That code doesn't decode — check it was copied whole");
      }
    });
    pasteWrap.appendChild(input);
    pasteWrap.appendChild(go);
    card.appendChild(pasteWrap);

    frag.appendChild(card);
    return frag;
  }

  var compareMount = null;
  function renderCompare(bundle, thenCode, thenLabel) {
    var thenInfo = describeCode(thenCode);
    var z = {};
    DOMAINS.forEach(function (d) { z[d] = bundle.result.domains[d].z; });
    var nowInfo = { result: bundle.result, assigned: window.Archetype.assign(z) };
    if (compareMount) compareMount.remove();
    compareMount = compareTable(thenInfo, nowInfo, thenLabel);
    var anchor = document.getElementById("history-anchor");
    anchor.parentNode.insertBefore(compareMount, anchor);
    compareMount.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // ---------- entry ----------

  function render(root, bundle) {
    root.innerHTML = "";
    compareMount = null;

    var z = {};
    DOMAINS.forEach(function (d) { z[d] = bundle.result.domains[d].z; });
    var assigned = window.Archetype.assign(z);

    root.appendChild(archetypeCard(assigned, bundle));
    var notice = flagNotice(bundle.sharedFlags);
    if (notice) root.appendChild(notice);
    var body = archetypeBody(assigned);
    if (body) root.appendChild(body);
    root.appendChild(neighborStrip(assigned, bundle));
    root.appendChild(domainSection(bundle));
    root.appendChild(facetSection(bundle));
    root.appendChild(developmentSection(assigned, bundle));
    root.appendChild(retestCard(bundle));

    var anchor = el("div");
    anchor.id = "history-anchor";
    root.appendChild(anchor);
    root.appendChild(historySection(bundle));
  }

  return { render: render };
})();
