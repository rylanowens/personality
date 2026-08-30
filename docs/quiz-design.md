# Quiz design: decisions and the criticisms they answer

Design record for the Trait Compass web quiz (`index.html` and the `js/`,
`data/`, `css/` directories at the repository root). The quiz is built directly
on this repo's research: [`personality-assessments.md`](personality-assessments.md)
for what exists and [`criticisms.md`](criticisms.md) for what fails. This
document records what was built, why, and which documented criticism each
feature answers — including the ones the quiz cannot fix.

Last updated: 2026-08-30.

## Summary of the design

A static, dependency-free web quiz (plain HTML/CSS/JS, no build step, no
server) administering the public-domain **IPIP-NEO-120** (Johnson, 2014):
120 items, 5 domains × 6 facets, 5-point Likert, ~25–30 minutes. Scoring is
client-side against Johnson's published norms; results show continuous
percentiles with confidence bands for all 35 scales, plus a **shareable
archetype** derived only from the profile's genuinely distinctive dimensions,
with boundary proximity to neighboring archetypes always displayed. Results
persist only in the browser (localStorage) and in user-controlled share codes;
nothing is transmitted anywhere.

The stated compromise from `personality-assessments.md` §7 is implemented
literally: *"measure on validated continuous dimensions, present as a type,
and keep the scores visible underneath."*

## Feature → criticism answered

| Design feature | Criticism it answers (from `criticisms.md`) |
|---|---|
| Continuous percentiles always shown; archetype never appears without its underlying scores on the same card | §4.1 dichotomization destroys information; §10 warning sign "reports a type without underlying continuous scores" |
| Archetype names only dimensions with \|z\| ≥ 0.4 — top two, one, or none ("balanced") — instead of splitting all five at midpoints | §4.1 midpoint cuts manufacture retest instability; §4.2 no natural clusters exist to find |
| Neighboring archetypes displayed with the score gap that separates them | §10 "report confidence and boundary proximity rather than bare labels"; §1.1 retest instability — a label flip is pre-explained |
| SEM-based confidence bands on every scale, wide for 4-item facets | §1.2 internal-consistency limits of short scales, surfaced instead of hidden |
| Verb-form prose throughout ("you tend to…"); results dated ("as of…"); explicit retest-drift framing | §6.1 noun-form essentialism and self-limiting identity claims; §10 "type as permanent identity" |
| History + compare view showing then-vs-now drift per dimension, with label-change explanation | §1.1 retest instability measured and explained rather than concealed |
| Every band/archetype writeup includes specific costs; no double-ended descriptions; opposite-profile test applied in review | §5.1 Barnum effect; §5.2 unfalsifiable double-ended prose |
| No user-satisfaction "accuracy" claims anywhere; about.html says why | §5.1 "user-reported accuracy is nearly worthless as validation" |
| Items, keying, norms, scoring math, thresholds, and reliabilities all published (about.html + readable source) | §1.5 questionable measurement practices; §7.1 trade-secret evidence bases; §10 "norm groups, item pools, or scoring undisclosed" |
| Public-domain IPIP items only; no proprietary items or protected marks | `personality-assessments.md` §6 licensing constraints |
| Explicit "not for hiring/selection" on intro, results, and about pages | §3.2 selection validity dispute; §6.3 legal exposure (ADA, EEOC cases) |
| No clinical/medical item content; N-domain framed as normal-range emotional style; N3 prose includes a see-a-professional note | §6.3 *Karraker* ADA line; `personality-assessments.md` §5 clinical boundary |
| 55 reverse-keyed items retained from Johnson's form; keying mix disclosed | §1.3 acquiescence bias |
| Two instructed reading checks + straight-lining and speed flags, surfaced honestly and never blocking | §1.3 low-effort protocols; honesty over silent discarding |
| Facet-level measurement and display (30 facets) | §2.5 / §3.1 facets out-predict domains |
| Development sections keyed to actual scores ("where this tends to go next") | The Enneagram's genuine appeal (motivation + direction) delivered without its unfalsifiable apparatus |
| Everything client-side; no data leaves the browser; share codes carry scores only | §6.4 privacy of inferred/stored trait data |

## What the quiz deliberately does *not* fix

Honesty requires listing the criticisms that still apply:

- **Self-report only** (§1.3): there is no observer-report form; scores measure
  self-concept where self-insight is limited. A future observer version is the
  single highest-value addition.
- **Convenience-sample norms** (§2.2): Johnson's internet sample is large but
  not representative, and one combined adult (21–40, sexes averaged) table is
  used for everyone; this is disclosed rather than solved.
- **Assumed reliabilities**: confidence bands use assumed alphas (facet .75,
  domain .88, near Johnson's published means), not values re-estimated on this
  quiz's users — no user data is collected with which to estimate them.
- **No local validation**: no criterion or retest study has been run on this
  implementation. Claims are inherited from the IPIP-NEO literature and
  labeled as such.
- **Lexical-model limits** (§2.1–2.2): the Big Five itself maps how trait
  language describes people; the quiz cannot transcend its instrument's
  construct-level critiques (e.g., no Honesty-Humility dimension — HEXACO's
  items are research-use-only and could not be embedded).
- **Normality approximation**: percentiles assume normal scale distributions;
  extreme percentiles are directional, not precise.

## The archetype layer, justified

40 signed pairs (C(5,2) × 4 sign combinations) + 10 single poles + 1 balanced
= **51 archetypes**. The pair set is the smallest labeling scheme in which a
name can reflect *both* genuinely distinctive facts about a typical profile;
the single-pole and balanced archetypes are what makes the scheme honest at
the boundaries — a person with one (or no) strong dimension gets a label that
says exactly that, instead of a second axis hallucinated from noise. The
threshold (|z| ≥ 0.4, ≈ beyond the 34th–66th percentile band) is arbitrary in
the way all thresholds are; it is disclosed, and proximity to it is always
displayed.

Names were checked against a blocklist of protected or borrowed identities:
the 16Personalities type and role names, Keirsey temperaments, Enneagram type
names, DISC style labels, and the color-system labels. No trademarked
framework names (MBTI, Myers-Briggs, DiSC, CliftonStrengths, StrengthsFinder)
appear anywhere in the product.

Writeup contract, applied to all 51: specific falsifiable claims (the
opposite profile should reject the description); a mandatory costs section
("what this profile pays"); a growth section framed as leverage, not destiny;
verb-form language throughout.

## Data provenance

- **Items**: `data/items.js`. IPIP-NEO-120 (public domain). Cross-checked
  2026-08-30 between two independent packagings of Johnson's instrument:
  `@alheimsins/b5-johnson-120-ipip-neo-pi-r` v6.0.13 (npm, MIT packaging) and
  `five-factor-e` v1.13.1 (PyPI, MIT; the Kholia/NeuroQuest port of Johnson's
  scoring program, credited to Johnson). Agreement: 120/120 facet assignments
  and keying directions; 119/120 item texts byte-identical (item 58 differs
  "and"/"or" between packagings; IPIP original wording used). Direct fetches
  of ipip.ori.org and osf.io were blocked by the build environment's network
  policy, hence the two-mirror cross-check.
- **Norms**: `data/norms.js`. Johnson's IPIP-NEO norm tables as shipped with
  his scoring program (via `five-factor-e` v1.13.1): ages 21–40 cohort, M and
  F tables averaged. Norm sample described in Johnson (2014): N = 619,150.
- **Attention-check items**: written for this quiz; never scored.
- **All prose** (band descriptions, archetypes): written for this project
  under the contract above; no text reproduced from any proprietary
  instrument.

## Implementation notes

- No build step, no dependencies, classic `<script>` globals — works
  identically from `file://` and GitHub Pages.
- `js/scoring.js`, `js/archetype.js`, `js/encode.js` are pure-function
  modules covered by `tests/scoring.test.html` (in-browser, zero-dependency
  harness; also run headlessly in CI-style verification via Playwright).
- Share codes: 35 characters — version, flags, date, and 30 facet raws
  (base-17 letters). Decoding recomputes all derived scores against the
  *current* norms table, so norm updates keep old links interpretable.
- localStorage keys are versioned (`traitcompass.v1.*`).

## Sources

- Johnson, J. A. (2014). Measuring thirty facets of the Five Factor Model with
  a 120-item public domain inventory: Development of the IPIP-NEO-120.
  *Journal of Research in Personality, 51*, 78–89.
- Goldberg, L. R., Johnson, J. A., Eber, H. W., Hogan, R., Ashton, M. C.,
  Cloninger, C. R., & Gough, H. G. (2006). The International Personality Item
  Pool and the future of public-domain personality measures. *Journal of
  Research in Personality, 40*, 84–96. https://ipip.ori.org/
- This repo: [`personality-assessments.md`](personality-assessments.md),
  [`criticisms.md`](criticisms.md) (and the sources cited therein).
