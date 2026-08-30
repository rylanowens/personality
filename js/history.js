// Result history on this device (localStorage only). Each entry stores the
// share code — the single source of truth for a past result — plus the
// timestamp; scores are always recomputed from the code on display.

window.History = (function () {
  "use strict";

  var KEY = "traitcompass.v1.history";
  var LIMIT = 50;

  function all() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return [];
      var list = JSON.parse(raw);
      if (!Array.isArray(list)) return [];
      return list.filter(function (e) {
        return e && typeof e.code === "string" && window.Encode.decode(e.code);
      });
    } catch (e) {
      return [];
    }
  }

  function add(entry) {
    try {
      var list = all();
      list.push({ takenAt: entry.takenAt, code: entry.code });
      if (list.length > LIMIT) list = list.slice(list.length - LIMIT);
      localStorage.setItem(KEY, JSON.stringify(list));
    } catch (e) {
      /* storage unavailable — result still shows, just isn't kept */
    }
  }

  function latest() {
    var list = all();
    return list.length ? list[list.length - 1] : null;
  }

  return { all: all, add: add, latest: latest };
})();
