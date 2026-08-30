// Pure scoring engine. No DOM access, no storage access — everything here is
// a function of its inputs, so tests/scoring.test.html can verify it directly.
//
// Pipeline (disclosed in full on about.html):
//   response (1-5) -> reverse-key if needed -> facet raw (sum of 4, range 4-20)
//   -> domain raw (sum of 6 facets, range 24-120)
//   -> z = (raw - norm.mean) / norm.sd -> percentile = Phi(z)
//   Confidence band: SEM = sd * sqrt(1 - alpha); band = Phi(z +/- SEM/sd).
// Percentiles assume approximate normality of scale scores in the norm
// sample — an approximation, and stated as such on the About page.

window.Scoring = (function () {
  "use strict";

  var FACET_ORDER = (function () {
    var order = [];
    ["N", "E", "O", "A", "C"].forEach(function (d) {
      for (var f = 1; f <= 6; f++) order.push(d + f);
    });
    return order; // N1..N6, E1..E6, O1..O6, A1..A6, C1..C6
  })();

  // Standard normal CDF via the Abramowitz & Stegun 7.1.26 erf approximation
  // (max abs error ~1.5e-7) — no dependencies.
  function phi(z) {
    var x = z / Math.SQRT2;
    var sign = x < 0 ? -1 : 1;
    x = Math.abs(x);
    var t = 1 / (1 + 0.3275911 * x);
    var y =
      1 -
      (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t -
        0.284496736) *
        t +
        0.254829592) *
        t *
        Math.exp(-x * x);
    return 0.5 * (1 + sign * y);
  }

  // answers: map of item n -> response 1..5 (all 120 present)
  function scoreFacets(answers, items) {
    var raws = {};
    FACET_ORDER.forEach(function (key) {
      raws[key] = 0;
    });
    items.forEach(function (it) {
      var r = answers[it.n];
      if (!(r >= 1 && r <= 5)) {
        throw new Error("Missing or invalid response for item " + it.n);
      }
      var scored = it.keyed === 1 ? r : 6 - r;
      raws[it.domain + it.facet] += scored;
    });
    return raws;
  }

  function scoreDomains(facetRaws) {
    var domains = { N: 0, E: 0, O: 0, A: 0, C: 0 };
    FACET_ORDER.forEach(function (key) {
      domains[key.charAt(0)] += facetRaws[key];
    });
    return domains;
  }

  function scaleScore(raw, norm, alpha) {
    var z = (raw - norm.mean) / norm.sd;
    var semZ = Math.sqrt(1 - alpha); // SEM expressed in z units (SEM / sd)
    return {
      raw: raw,
      z: z,
      pct: 100 * phi(z),
      band: [100 * phi(z - semZ), 100 * phi(z + semZ)],
    };
  }

  // Quality flags. Honest, never blocking: surfaced on the results page so the
  // user can judge their own protocol, never silently discarded.
  // attentionResponses: array of {expected, given} for the instructed items.
  function qualityFlags(answers, items, attentionResponses, durationMs) {
    var seq = items.map(function (it) {
      return answers[it.n];
    });

    var attentionFailed = 0;
    (attentionResponses || []).forEach(function (a) {
      if (a.given !== a.expected) attentionFailed++;
    });

    var longestRun = 1,
      run = 1;
    for (var i = 1; i < seq.length; i++) {
      run = seq[i] === seq[i - 1] ? run + 1 : 1;
      if (run > longestRun) longestRun = run;
    }
    var mean =
      seq.reduce(function (a, b) {
        return a + b;
      }, 0) / seq.length;
    var sd = Math.sqrt(
      seq.reduce(function (a, b) {
        return a + (b - mean) * (b - mean);
      }, 0) / seq.length
    );
    var straightLining = longestRun >= 15 || sd < 0.5;

    var tooFast = typeof durationMs === "number" && durationMs < 6 * 60 * 1000;

    var reasons = [];
    if (attentionFailed > 0)
      reasons.push(
        attentionFailed + " of 2 reading-check items answered as instructed" +
          (attentionFailed === 2 ? " were missed" : " was missed")
      );
    if (straightLining)
      reasons.push("long runs of identical answers (pattern suggests low engagement)");
    if (tooFast) reasons.push("finished faster than careful reading usually allows");

    return {
      attentionFailed: attentionFailed,
      straightLining: straightLining,
      tooFast: tooFast,
      longestRun: longestRun,
      responseSd: sd,
      flagged: reasons.length > 0,
      reasons: reasons,
    };
  }

  // Main entry: answers map + optional {attentionResponses, durationMs}.
  // Returns everything the results page needs, computed from raws + norms.
  function computeResult(answers, meta) {
    meta = meta || {};
    var items = window.QUIZ_ITEMS.items;
    var norms = window.QUIZ_NORMS;
    var facetRaws = scoreFacets(answers, items);
    return resultFromFacetRaws(facetRaws, {
      flags: qualityFlags(
        answers,
        items,
        meta.attentionResponses,
        meta.durationMs
      ),
    });
  }

  // Shared with decoded share-links: scores are always recomputed from facet
  // raws against the current norms table (share codes carry raws only).
  function resultFromFacetRaws(facetRaws, extra) {
    var norms = window.QUIZ_NORMS;
    var domainRaws = scoreDomains(facetRaws);
    var facets = {};
    FACET_ORDER.forEach(function (key) {
      facets[key] = scaleScore(
        facetRaws[key],
        norms.facets[key],
        norms.assumedAlpha.facet
      );
    });
    var domains = {};
    ["N", "E", "O", "A", "C"].forEach(function (d) {
      domains[d] = scaleScore(
        domainRaws[d],
        norms.domains[d],
        norms.assumedAlpha.domain
      );
    });
    var result = {
      facetRaws: facetRaws,
      domainRaws: domainRaws,
      facets: facets,
      domains: domains,
      flags: (extra && extra.flags) || null,
    };
    return result;
  }

  return {
    FACET_ORDER: FACET_ORDER,
    phi: phi,
    scoreFacets: scoreFacets,
    scoreDomains: scoreDomains,
    scaleScore: scaleScore,
    qualityFlags: qualityFlags,
    computeResult: computeResult,
    resultFromFacetRaws: resultFromFacetRaws,
  };
})();
