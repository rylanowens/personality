// Share-code codec. A result travels as a short string in the URL fragment
// (#r=<code>) so nothing is ever sent to a server. The code carries only the
// 30 facet raw scores plus the date and quality flags; z-scores, percentiles,
// and the archetype are always recomputed against the *current* norms table,
// so a future norms revision keeps old links interpretable (the version
// character marks which encoding a code uses).
//
// Layout (35 chars): [version:1][flags:1][date:3][facets:30]
//   version : "1"
//   flags   : base-36 digit of a 3-bit mask (1 attention, 2 straight-line, 4 fast)
//   date    : days since 2026-01-01 in base 36, 3 chars, zero-padded
//   facets  : one char per facet in canonical order (N1..N6,E1..E6,O1..O6,
//             A1..A6,C1..C6); raw 4..20 mapped to 0..16 as letters "a".."q"

window.Encode = (function () {
  "use strict";

  var EPOCH_UTC = Date.UTC(2026, 0, 1);
  var A_CODE = "a".charCodeAt(0);

  function flagsToMask(flags) {
    if (!flags) return 0;
    return (
      (flags.attentionFailed > 0 ? 1 : 0) |
      (flags.straightLining ? 2 : 0) |
      (flags.tooFast ? 4 : 0)
    );
  }

  function maskToFlags(mask) {
    return {
      attentionFailed: (mask & 1) !== 0,
      straightLining: (mask & 2) !== 0,
      tooFast: (mask & 4) !== 0,
      flagged: mask !== 0,
    };
  }

  function encode(facetRaws, takenAt, flags) {
    var days = Math.max(
      0,
      Math.floor(((takenAt || Date.now()) - EPOCH_UTC) / 86400000)
    );
    var date = days.toString(36);
    while (date.length < 3) date = "0" + date;
    if (date.length > 3) throw new Error("Date out of encodable range");

    var body = window.Scoring.FACET_ORDER.map(function (key) {
      var raw = facetRaws[key];
      if (!(raw >= 4 && raw <= 20)) {
        throw new Error("Facet raw out of range for " + key + ": " + raw);
      }
      return String.fromCharCode(A_CODE + (raw - 4));
    }).join("");

    return "1" + flagsToMask(flags).toString(36) + date + body;
  }

  // Returns {facetRaws, takenAt, flags} or null if the code is not valid.
  function decode(code) {
    if (typeof code !== "string") return null;
    code = code.trim();
    if (code.length !== 35 || code.charAt(0) !== "1") return null;

    var mask = parseInt(code.charAt(1), 36);
    if (isNaN(mask) || mask > 7) return null;

    var days = parseInt(code.slice(2, 5), 36);
    if (isNaN(days)) return null;

    var facetRaws = {};
    var order = window.Scoring.FACET_ORDER;
    for (var i = 0; i < 30; i++) {
      var v = code.charCodeAt(5 + i) - A_CODE;
      if (v < 0 || v > 16) return null;
      facetRaws[order[i]] = v + 4;
    }

    return {
      facetRaws: facetRaws,
      takenAt: EPOCH_UTC + days * 86400000,
      flags: maskToFlags(mask),
    };
  }

  return { encode: encode, decode: decode };
})();
