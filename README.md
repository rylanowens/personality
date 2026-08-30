# personality

Research on personality assessment, and a quiz built from it.

**Trait Compass** is a free, facet-level personality quiz that runs entirely in
the browser: the public-domain IPIP-NEO-120 (Big Five, 30 facets), scored
against published norms, with confidence bands, an honestly-derived shareable
archetype, boundary proximity to neighboring archetypes, and a retest compare
view. No server, no accounts, no data leaves the browser. Open `index.html`
locally or serve the repository root (e.g., via GitHub Pages) to run it;
`about.html` discloses the full methodology.

- [`docs/`](docs/) — the research: a survey of major personality assessments,
  the criticisms of them, and the quiz's design record mapping features to the
  criticisms they answer.
- [`data/`](data/) — items, norms, prose, and archetype content.
- [`js/`](js/) — scoring, archetype assignment, share-code, and UI modules.
- [`tests/scoring.test.html`](tests/scoring.test.html) — in-browser test
  harness for the scoring engine.

Not a hiring tool, not a clinical instrument — see `about.html` for what that
means and why it matters.
