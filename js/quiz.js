// Quiz screen: one statement at a time, 5-point Likert, keyboard-first.
// Owns the display sequence (120 scored items + interleaved reading checks)
// and reports answers back to App, which owns state and autosave.

window.Quiz = (function () {
  "use strict";

  var seq = null; // [{type:'item', item} | {type:'attention', att}]
  var advanceTimer = null;

  function buildSequence() {
    if (seq) return seq;
    seq = window.QUIZ_ITEMS.items.map(function (it) {
      return { type: "item", item: it };
    });
    // Insert reading checks at their 1-based display positions, in order, so
    // positions stay accurate after earlier insertions.
    window.QUIZ_ITEMS.attention
      .slice()
      .sort(function (a, b) { return a.position - b.position; })
      .forEach(function (att) {
        seq.splice(att.position - 1, 0, { type: "attention", att: att });
      });
    return seq;
  }

  function entryAnswer(state, entry) {
    return entry.type === "item"
      ? state.answers[entry.item.n]
      : state.attention[entry.att.position];
  }

  function setEntryAnswer(state, entry, value) {
    if (entry.type === "item") state.answers[entry.item.n] = value;
    else state.attention[entry.att.position] = value;
  }

  function render() {
    var state = window.App.state;
    var s = buildSequence();
    var idx = Math.min(state.idx, s.length - 1);
    var entry = s[idx];

    document.getElementById("item-text").textContent =
      entry.type === "item" ? entry.item.text : entry.att.text;

    document.getElementById("progress-text").textContent =
      "Statement " + (idx + 1) + " of " + s.length;
    document.getElementById("progress-fill").style.width =
      Math.round((idx / s.length) * 100) + "%";

    var current = entryAnswer(state, entry);
    var likert = document.getElementById("likert");
    likert.innerHTML = "";
    window.QUIZ_ITEMS.scale.forEach(function (label, i) {
      var value = i + 1;
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("role", "radio");
      b.setAttribute("aria-checked", current === value ? "true" : "false");
      b.innerHTML = '<span class="key" aria-hidden="true">' + value + "</span>" + label;
      b.addEventListener("click", function () { answer(value); });
      likert.appendChild(b);
    });

    document.getElementById("btn-back").disabled = idx === 0;
  }

  function answer(value) {
    if (advanceTimer) return; // ignore double-answers during the flash
    var state = window.App.state;
    var s = buildSequence();
    var entry = s[state.idx];
    setEntryAnswer(state, entry, value);
    window.App.save();

    var buttons = document.querySelectorAll("#likert button");
    var chosen = buttons[value - 1];
    if (chosen) chosen.classList.add("flash");

    advanceTimer = setTimeout(function () {
      advanceTimer = null;
      if (state.idx >= s.length - 1) {
        window.App.finish();
      } else {
        state.idx++;
        window.App.save();
        render();
      }
    }, 220);
  }

  function back() {
    var state = window.App.state;
    if (state.idx > 0) {
      state.idx--;
      window.App.save();
      render();
    }
  }

  function onKey(e) {
    if (document.getElementById("screen-quiz").hidden) return;
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    if (e.key >= "1" && e.key <= "5") {
      e.preventDefault();
      answer(Number(e.key));
    } else if (e.key === "ArrowLeft" || e.key === "Backspace") {
      e.preventDefault();
      back();
    }
  }

  function init() {
    document.getElementById("btn-back").addEventListener("click", back);
    document.addEventListener("keydown", onKey);
  }

  return {
    init: init,
    render: render,
    buildSequence: buildSequence,
    sequenceLength: function () { return buildSequence().length; },
  };
})();
