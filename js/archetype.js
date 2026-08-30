// Archetype assignment. The label names what is actually distinctive in a
// profile instead of dichotomizing all five dimensions at their midpoints
// (the mechanism docs/criticisms.md §4.1 identifies as manufacturing retest
// instability). Rules, disclosed on about.html:
//
//   - Rank the five domain z-scores by |z|.
//   - Two domains at |z| >= 0.4  -> pair archetype (the top two, with signs).
//   - One domain at |z| >= 0.4   -> single-pole archetype.
//   - None                       -> the balanced archetype.
//
// 51 archetypes total: 40 signed pairs + 10 single poles + 1 balanced.
// Every assignment also computes its *neighbors* — the archetypes a retake
// could plausibly land on — with the score gap that separates them, so a
// label change on retest is pre-explained rather than hidden.

window.Archetype = (function () {
  "use strict";

  var THRESHOLD = 0.4;
  var DOMAINS = ["N", "E", "O", "A", "C"];

  function signChar(z) {
    return z >= 0 ? "+" : "-";
  }

  // Canonical pair id: domains ordered N,E,O,A,C, each with its sign.
  function pairId(a, b) {
    var list = [a, b].sort(function (x, y) {
      return DOMAINS.indexOf(x.domain) - DOMAINS.indexOf(y.domain);
    });
    return list[0].domain + list[0].sign + list[1].domain + list[1].sign;
  }

  function rank(z) {
    return DOMAINS.map(function (d) {
      return { domain: d, z: z[d], abs: Math.abs(z[d]), sign: signChar(z[d]) };
    }).sort(function (a, b) {
      return b.abs - a.abs || DOMAINS.indexOf(a.domain) - DOMAINS.indexOf(b.domain);
    });
  }

  function assign(z) {
    var ranked = rank(z);
    var qualifying = ranked.filter(function (r) {
      return r.abs >= THRESHOLD;
    });

    var kind, id, defining;
    if (qualifying.length >= 2) {
      kind = "pair";
      defining = [ranked[0], ranked[1]];
      id = pairId(defining[0], defining[1]);
    } else if (qualifying.length === 1) {
      kind = "single";
      defining = [ranked[0]];
      id = ranked[0].domain + ranked[0].sign;
    } else {
      kind = "balanced";
      defining = [];
      id = "BAL";
    }

    return {
      kind: kind,
      id: id,
      defining: defining.map(function (d) {
        return { domain: d.domain, sign: d.sign === "+" ? 1 : -1, z: d.z };
      }),
      ranked: ranked,
      neighbors: neighbors(kind, ranked),
    };
  }

  // Neighbors: alternative labels a nearby profile would earn, each with the
  // z-gap that separates this result from them (smaller gap = closer call).
  function neighbors(kind, ranked) {
    var out = [];
    var seen = {};
    function push(id, gapZ, reason) {
      if (seen[id]) return;
      seen[id] = true;
      out.push({ id: id, gapZ: Math.max(0, gapZ), reason: reason });
    }

    var r0 = ranked[0], r1 = ranked[1], r2 = ranked[2];

    if (kind === "pair") {
      // The third-ranked domain could displace the weaker defining domain.
      push(
        pairId(r0, r2),
        r1.abs - r2.abs,
        r2.domain + " could displace " + r1.domain + " as your second-most distinctive dimension"
      );
      // The weaker defining domain could fall under threshold -> single pole.
      push(
        r0.domain + r0.sign,
        r1.abs - THRESHOLD,
        r1.domain + " is close to the distinctiveness threshold"
      );
      // The two defining domains could swap prominence (relevant to naming order
      // only when it changes the id — pairId is order-free, so skip).
    } else if (kind === "single") {
      // The runner-up could clear the threshold -> pair.
      push(
        pairId(r0, r1),
        THRESHOLD - r1.abs,
        r1.domain + " is close to joining as a second defining dimension"
      );
      // The single defining domain could fall under threshold -> balanced.
      push(
        "BAL",
        r0.abs - THRESHOLD,
        r0.domain + " is close to the distinctiveness threshold"
      );
    } else {
      // Balanced: the top-ranked domain is nearest to clearing the threshold.
      push(
        r0.domain + r0.sign,
        THRESHOLD - r0.abs,
        r0.domain + " is your nearest-to-distinctive dimension"
      );
      if (r1) {
        push(
          r1.domain + r1.sign,
          THRESHOLD - r1.abs,
          r1.domain + " is also close to the distinctiveness threshold"
        );
      }
    }

    out.sort(function (a, b) { return a.gapZ - b.gapZ; });
    return out.slice(0, 3);
  }

  return { assign: assign, THRESHOLD: THRESHOLD, pairId: pairId };
})();
