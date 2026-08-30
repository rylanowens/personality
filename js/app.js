// App shell: screen routing, quiz state, autosave/resume, finish pipeline.
// Storage layout (this device only; nothing leaves the browser):
//   traitcompass.v1.inProgress — {answers, attention, idx, startedAt}
//   traitcompass.v1.history    — managed by history.js

window.App = (function () {
  "use strict";

  var SAVE_KEY = "traitcompass.v1.inProgress";

  var app = {
    state: null,
  };

  function freshState() {
    return { answers: {}, attention: {}, idx: 0, startedAt: Date.now() };
  }

  function loadSaved() {
    try {
      var raw = localStorage.getItem(SAVE_KEY);
      if (!raw) return null;
      var s = JSON.parse(raw);
      if (!s || typeof s !== "object" || !s.answers) return null;
      // JSON round-trips object keys as strings; normalize answer keys to numbers.
      var answers = {};
      Object.keys(s.answers).forEach(function (k) { answers[Number(k)] = s.answers[k]; });
      var attention = {};
      Object.keys(s.attention || {}).forEach(function (k) { attention[Number(k)] = s.attention[k]; });
      return {
        answers: answers,
        attention: attention,
        idx: Number(s.idx) || 0,
        startedAt: Number(s.startedAt) || Date.now(),
      };
    } catch (e) {
      return null;
    }
  }

  app.save = function () {
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(app.state));
    } catch (e) {
      /* storage unavailable (private mode etc.) — quiz still works, just no resume */
    }
  };

  function clearSaved() {
    try { localStorage.removeItem(SAVE_KEY); } catch (e) {}
  }

  function show(screen) {
    ["intro", "quiz", "results"].forEach(function (name) {
      document.getElementById("screen-" + name).hidden = name !== screen;
    });
    window.scrollTo(0, 0);
  }

  app.finish = function () {
    var state = app.state;
    var attentionResponses = window.QUIZ_ITEMS.attention.map(function (att) {
      return { expected: att.expected, given: state.attention[att.position] };
    });
    var result = window.Scoring.computeResult(state.answers, {
      attentionResponses: attentionResponses,
      durationMs: Date.now() - state.startedAt,
    });
    var takenAt = Date.now();
    var code = window.Encode.encode(result.facetRaws, takenAt, result.flags);
    window.History.add({ takenAt: takenAt, code: code });
    clearSaved();
    app.state = null;
    location.hash = "#results";
  };

  function startQuiz(resume) {
    app.state = (resume && loadSaved()) || freshState();
    location.hash = "#quiz";
    // If already on #quiz (restart), hashchange won't fire — render directly.
    route();
  }

  function renderResults() {
    var root = document.getElementById("results-root");
    var hash = location.hash || "";
    var m = hash.match(/^#r=([a-z0-9]+)$/i);
    if (m) {
      var decoded = window.Encode.decode(m[1]);
      if (!decoded) {
        root.innerHTML =
          '<div class="result-card"><h1>That link doesn’t decode</h1>' +
          "<p>The share code seems damaged or from a newer version. " +
          'Ask for a fresh link, or <a href="#intro">take the quiz</a>.</p></div>';
        return true;
      }
      window.Results.render(root, {
        result: window.Scoring.resultFromFacetRaws(decoded.facetRaws, { flags: null }),
        sharedFlags: decoded.flags,
        takenAt: decoded.takenAt,
        code: m[1],
        shared: true,
      });
      return true;
    }

    var latest = window.History.latest();
    if (!latest) return false; // nothing to show — fall back to intro
    var decodedOwn = window.Encode.decode(latest.code);
    window.Results.render(root, {
      result: window.Scoring.resultFromFacetRaws(decodedOwn.facetRaws, { flags: null }),
      sharedFlags: decodedOwn.flags,
      takenAt: latest.takenAt,
      code: latest.code,
      shared: false,
    });
    return true;
  }

  function renderIntro() {
    var saved = loadSaved();
    var answered = saved ? Object.keys(saved.answers).length : 0;
    var resumeBtn = document.getElementById("btn-resume");
    resumeBtn.hidden = !saved || answered === 0;
    if (saved && answered > 0) {
      resumeBtn.textContent =
        "Resume where you left off (" + answered + " of 120 answered)";
    }
    var note = document.getElementById("intro-history-note");
    var n = window.History.all().length;
    if (n > 0) {
      note.hidden = false;
      note.innerHTML =
        'You have ' + n + " saved result" + (n > 1 ? "s" : "") +
        ' on this device — <a href="#results">view the latest</a>.';
    } else {
      note.hidden = true;
    }
  }

  function route() {
    var hash = location.hash || "#intro";
    if (hash === "#quiz") {
      if (!app.state) app.state = loadSaved() || freshState();
      show("quiz");
      window.Quiz.render();
    } else if (hash === "#results" || /^#r=/.test(hash)) {
      if (renderResults()) {
        show("results");
      } else {
        location.hash = "#intro";
      }
    } else {
      renderIntro();
      show("intro");
    }
  }

  app.toast = function (msg) {
    var t = document.createElement("div");
    t.className = "toast";
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 2200);
  };

  document.addEventListener("DOMContentLoaded", function () {
    window.Quiz.init();
    document.getElementById("btn-start").addEventListener("click", function () {
      clearSaved();
      startQuiz(false);
    });
    document.getElementById("btn-resume").addEventListener("click", function () {
      startQuiz(true);
    });
    window.addEventListener("hashchange", route);
    route();
  });

  return app;
})();
