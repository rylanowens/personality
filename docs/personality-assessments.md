# Major Personality Assessments: A Research Survey

Research notes on the personality frameworks and quizzes in widest use, covering
what each one measures, how it is structured and scored, and how well the
evidence supports it.

Last updated: 2026-08-30

---

## 1. The one distinction that organizes everything

Almost every instrument below falls into one of two camps, and confusing them is
the single most common source of bad reasoning about personality tests.

**Trait (dimensional) models** place you somewhere on a set of continuous scales.
There is no "kind of person" you are — only a score, usually reported as a
percentile against a norm group. Big Five, HEXACO, 16PF, and the Hogan suite are
trait models. These dominate academic psychology.

**Type (categorical) models** sort you into one of N discrete boxes. MBTI (16
types), Enneagram (9 types), DISC (4 styles), True Colors (4 colors) are type
models. These dominate the consumer and corporate-training market.

The catch: type models are almost always built on underlying continuous scales
that get dichotomized at a cut point. When researchers look for natural clusters
in personality data — taxometric analysis, unsupervised clustering — they
generally do not find them. Scores on the MBTI's four dichotomies are roughly
normally distributed, not bimodal, so a large share of people sit near the
midpoint where a handful of answers flips the letter. This is the mechanical
reason type instruments have poor retest stability while the trait instruments
they are built from do not.

Type output is more memorable, more shareable, and better for building community
around ("I'm an INFP"). Trait output is more accurate and more predictive. That
tradeoff is the central design question for anything built in this space.

---

## 2. Comparison at a glance

| Instrument | Structure | Output | Length | Cost | Evidence base |
|---|---|---|---|---|---|
| **Big Five / FFM** | 5 continuous traits (+30 facets) | Percentile scores | 44–300 items | Free (IPIP, BFI) to paid (NEO-PI-R) | Strong — academic standard |
| **HEXACO** | 6 continuous traits (+25 facets) | Percentile scores | 60–200 items | Free (hexaco.org) | Strong, growing |
| **MBTI** | 4 dichotomies → 16 types | 4-letter type | 93–144 items | ~$50–$60 + certified practitioner | Weak on reliability/prediction |
| **16Personalities** | 5 dimensions → 32 subtypes | 4-letter + A/T | ~60 items | Free (paid reports) | Big Five–based, largely unpublished |
| **Enneagram (RHETI)** | 9 types + wings + arrows | 1 type, 9 scores | 144 pairs | ~$12–$20 | Weak / contested |
| **DISC** | 4 behavioral styles | Style profile | 24–80 items | ~$25–$100 (varies by vendor) | Mixed; weak for prediction |
| **CliftonStrengths** | 34 talent themes | Ranked top 5 or 34 | 177 pairs | ~$25–$70 | Mixed; internal consistency issues |
| **Hogan (HPI/HDS/MVPI)** | 7 + 11 + 10 scales | Percentile scores | ~200+ items | Paid, practitioner-gated | Strong for selection |
| **16PF** | 16 primary + 5 global factors | Percentile scores | 185 items | Paid, practitioner-gated | Strong, historically important |

---

## 3. Trait models

### 3.1 Big Five / Five-Factor Model (OCEAN)

**The five dimensions**

- **Openness to Experience** — imagination, aesthetic sensitivity, intellectual
  curiosity, preference for novelty. Sometimes split into Openness proper and
  Intellect.
- **Conscientiousness** — organization, persistence, impulse control, goal-directed
  motivation. Splits into Industriousness and Orderliness.
- **Extraversion** — quantity and intensity of energy directed outward; splits into
  Enthusiasm (sociability, positive affect) and Assertiveness (drive, dominance).
- **Agreeableness** — compassion vs. tough-mindedness in interpersonal dealings.
- **Neuroticism** — proneness to negative emotion and psychological distress.
  Often reverse-scored and labeled Emotional Stability.

**Origins.** The Big Five was *discovered*, not designed. It grew from the lexical
hypothesis: important individual differences get encoded in everyday language, so
factor-analyzing trait adjectives should reveal the underlying structure. Allport
and Odbert catalogued ~18,000 trait words from an English dictionary in 1936;
Cattell reduced the set; Tupes and Christal found the recurring five-factor
solution in 1961; Goldberg named it the "Big Five" in 1981 and consolidated it
through the 1990s. Costa and McCrae independently arrived at the same five from
questionnaire research and formalized the modern six-facets-per-domain structure
in the NEO-PI-R (1992).

The critical point is convergence: two research programs starting from different
data — dictionary adjectives and questionnaire items — landed on the same five
factors, and the structure replicates across dozens of languages and cultures.

**Instruments.**

- **NEO-PI-R / NEO-PI-3** — 240 items, 5 domains × 6 facets. The commercial gold
  standard. Paid, published by PAR.
- **BFI-2** (Soto & John, 2017) — 60 items, 5 domains × 3 facets. Free for
  research use; the best short-form option.
- **IPIP-NEO** — public-domain item pool (Goldberg). The 300-item version and
  Johnson's 120-item version both give full 30-facet profiles. Free, no licensing.
  This is the practical choice for anyone building a tool.
- **BFAS** (Big Five Aspect Scales, DeYoung et al. 2007) — 100 items resolving
  each domain into exactly two aspects; useful middle resolution between 5 domains
  and 30 facets.
- **TIPI** — 10 items. Fast but crude; acceptable only when questionnaire space is
  genuinely scarce.

**Evidence.** Heritability of each trait runs roughly 40–60% in twin studies.
Traits are moderately stable in adulthood but not fixed — the normative pattern
is rising Conscientiousness and Agreeableness and falling Neuroticism through
midlife ("maturation"). Predictive validity is real but modest in the way most
psychology effects are: Barrick and Mount's 1991 meta-analysis of 117 studies
found Conscientiousness the only trait predicting performance across all
occupational groups (ρ ≈ .31 corrected, higher for complex self-directed roles).
Neuroticism predicts mental and physical health outcomes; Conscientiousness
predicts longevity, academic achievement, and financial outcomes.

**Limitations.** Five broad factors leave real variance unexplained — facet-level
scores often predict better than domains. The factors are not perfectly orthogonal
(Agreeableness and Conscientiousness correlate, feeding "Big Two"/GFP arguments).
It describes structure without explaining mechanism. And it inherits every
self-report weakness listed in §6.

### 3.2 HEXACO

Kibeom Lee and Michael Ashton ran lexical studies in more than a dozen languages
in the late 1990s and 2000s and repeatedly recovered **six** factors, not five:
**H**onesty-Humility, **E**motionality, e**X**traversion, **A**greeableness,
**C**onscientiousness, **O**penness. Each has four facets, plus an interstitial
Altruism facet.

The addition is **Honesty-Humility**: sincerity, fairness, greed-avoidance,
modesty. It captures the tendency to be genuine and non-exploitative when nobody
is watching, and it is the strongest single trait predictor of counterproductive
work behavior, delinquency, and unethical decision-making — precisely the variance
the Big Five handles poorly. Low Honesty-Humility is also where the Dark Triad
(Machiavellianism, narcissism, psychopathy) largely lives. HEXACO's Emotionality
and Agreeableness are rotated relative to Big Five Neuroticism and Agreeableness:
anger loads on low Agreeableness in HEXACO rather than on Neuroticism.

**Instruments.** HEXACO-PI-R in 200-, 100-, and 60-item forms, with self- and
observer-report versions. Free for research at hexaco.org.

**Status.** Increasingly favored in academic personality research, especially for
anything touching ethics, integrity, or exploitation. Less commercial adoption
than Big Five, and a smaller accumulated evidence base simply because it is
younger.

### 3.3 16PF

Raymond Cattell's 1949 instrument, now in its Fifth Edition (185 items). Measures
16 primary factors (Warmth, Reasoning, Emotional Stability, Dominance, Liveliness,
Rule-Consciousness, Social Boldness, Sensitivity, Vigilance, Abstractedness,
Privateness, Apprehension, Openness to Change, Self-Reliance, Perfectionism,
Tension) that themselves factor into five global factors closely mirroring the
Big Five. Historically important as the direct ancestor of the lexical work that
produced the Big Five, and still used in clinical, counseling, and selection
settings. Practitioner-gated and paid.

### 3.4 The Hogan suite

Three separate inventories, designed from the start for workplace prediction and
grounded in socioanalytic theory (personality as reputation, not identity):

- **HPI** — the "bright side": Adjustment, Ambition, Sociability, Interpersonal
  Sensitivity, Prudence, Inquisitive, Learning Approach. Broadly FFM-aligned.
- **HDS** — the "dark side": 11 derailers (Excitable, Skeptical, Cautious,
  Reserved, Leisurely, Bold, Mischievous, Colorful, Imaginative, Diligent,
  Dutiful) modeled on DSM personality-disorder dimensions, describing what breaks
  down under stress or when guard is down. This is Hogan's genuinely distinctive
  contribution — no other mainstream instrument measures it.
- **MVPI** — values and motives: 10 scales covering what a person wants and what
  culture they will fit.

Hogan's validity claims rest on hundreds of criterion-validity studies, and the
suite is one of the few defensible choices for personality-based selection.
Restricted to certified practitioners; expensive.

---

## 4. Type models

### 4.1 Myers-Briggs Type Indicator (MBTI)

**Structure.** Four dichotomies producing 16 types:

- **E/I** — Extraversion / Introversion
- **S/N** — Sensing / Intuition
- **T/F** — Thinking / Feeling
- **J/P** — Judging / Perceiving

Official theory adds *cognitive functions*: eight functions (Ni, Ne, Si, Se, Ti,
Te, Fi, Fe) arranged in a four-deep stack per type — this is where MBTI's Jungian
inheritance actually lives, and it is what most free online "MBTI tests" ignore
entirely.

**Origins.** Katharine Cook Briggs and her daughter Isabel Briggs Myers built it
from Jung's *Psychological Types* (1921), beginning in the 1940s; published 1962.
Neither had formal training in psychometrics. Current forms: Form M (93 items,
standard) and Form Q (144 items, adds 20 facet scales).

**The evidence problem.** Two findings do most of the damage:

1. **Retest instability.** Depending on the study and interval, somewhere between
   39% and 76% of people get a different four-letter type on retest within about
   five weeks. The cause is structural: scores cluster around the midpoint of each
   dichotomy, so people near the cut line flip.
2. **No predictive validity for performance.** The Myers-Briggs Company itself
   states the instrument should not be used for hiring or selection and has no
   predictive value there — an unusually direct disclaimer from a publisher.

Also relevant: the four dichotomies are not independent constructs. E/I maps
closely onto Extraversion, S/N onto Openness, T/F onto Agreeableness, and J/P onto
Conscientiousness. The MBTI is, empirically, a coarse four-of-the-five Big Five
that discards Neuroticism and throws away the scale information by dichotomizing.

**What it is defensibly good for.** A shared, non-pathologizing vocabulary for
self-reflection and team conversation. The Myers-Briggs Company's own framing is
self- and other-awareness, not prediction. Its enormous cultural reach — the
common language, the community, the 80+ years of accumulated type descriptions —
is a real asset even where the psychometrics are not.

### 4.2 16Personalities (NERIS Type Explorer)

The most-taken personality quiz on the internet, and *not* the MBTI, despite using
the same four letters. NERIS built a hybrid: Big Five dimensions underneath, MBTI
letter labels on top, no cognitive functions, plus a fifth dimension —
**Assertive (-A) / Turbulent (-T)** — which is essentially inverted Neuroticism,
the trait MBTI omits. That yields 32 subtypes. Types are also grouped into four
role families (Analysts, Diplomats, Sentinels, Explorers).

Roughly 60 items, free, immediate results, unusually well-written type
descriptions. Its methodology is only partially published, so it cannot be
independently evaluated the way an academic instrument can. Best understood as a
Big Five test with a type-flavored presentation layer — which, notably, is a
sounder design than MBTI itself, since it retains Neuroticism.

For anyone studying why some personality products spread and others don't,
16Personalities is the case study: free, fast, flattering, memorable output,
shareable identity label.

### 4.3 Keirsey Temperament Sorter

David Keirsey encountered MBTI in 1956 and built an alternative that shares the
four letters but rejects Jungian functions in favor of observable behavior. 70
items. Groups the 16 types into four temperaments — **Artisan** (SP), **Guardian**
(SJ), **Idealist** (NF), **Rational** (NT) — each with four role variants.
Popularized by *Please Understand Me* (1978) and its 1998 sequel. Keirsey's
sorting into four temperaments has been more culturally durable than his test.

### 4.4 Enneagram

**Structure.** Nine types arranged on a nine-pointed figure:

1. Reformer / Perfectionist
2. Helper
3. Achiever
4. Individualist
5. Investigator
6. Loyalist
7. Enthusiast
8. Challenger
9. Peacemaker

Layered on top: **wings** (influence from an adjacent number), **arrows** (which
type you move toward in stress vs. growth), **instinctual variants** (self-pres /
social / sexual), **levels of development** (health within a type), and **centers**
(Gut 8-9-1, Heart 2-3-4, Head 5-6-7). Each type is defined by a core motivation,
a basic fear, and a characteristic vice/passion — motivation-based rather than
behavior-based, which is what distinguishes it from every other framework here.

**Origins.** The symbol comes from Gurdjieff (who attached no personality theory
to it). Oscar Ichazo mapped nine ego-fixations onto it in Chile in the late 1960s;
Claudio Naranjo brought it to Berkeley in 1970 and merged it with psychology by
intuition rather than data; Don Riso and Russ Hudson turned it into the modern
book-and-test industry. There is no empirical derivation anywhere in that lineage.

**Instruments.** RHETI (Riso-Hudson, 144 forced-choice pairs, the best-known
paid option), the Enneagram Institute's shorter QUEST, Integrative Enneagram's
iEQ9, and many free variants of unknown quality.

**Evidence.** The largest review to date (Hook et al., 2021, 104 samples) found
mixed support. Factor analyses of Enneagram instruments typically recover fewer
than nine factors, and the factors that emerge look more like Big Five dimensions
than like the nine types. No study has derived the nine types by clustering
personality data from scratch. Wings and stress/growth arrows have little
empirical support. Categorical retest agreement is often in the .50–.70 range,
meaning a large minority get a different type on retake. Test-retest reliability
of the *continuous* scale scores is better than the type assignment — the same
dichotomization problem as MBTI.

**Why it persists anyway.** The motivational framing ("why you do it," not "what
you do") produces insight that trait percentiles do not, and it comes with a
built-in developmental path — most frameworks describe you, the Enneagram tells you
where to go next. It is best treated as a contemplative/coaching tradition rather
than a measurement instrument.

### 4.5 DISC

**Structure.** Four behavioral styles, usually plotted on two axes (task vs.
people focus × fast vs. moderate pace):

- **D — Dominance:** direct, results-driven, forceful
- **i — Influence:** outgoing, enthusiastic, persuasive
- **S — Steadiness:** patient, cooperative, stable
- **C — Conscientiousness:** analytical, precise, systematic

Most people are described by a primary and secondary style.

**Origins.** William Moulton Marston proposed the four-quadrant model in *Emotions
of Normal People* (1928) — Marston never built an assessment, and was better known
for inventing an early polygraph and creating Wonder Woman. Walter Clarke built
the first DISC instrument in the 1950s. There is no single DISC: Everything DiSC
(Wiley), Assessments 24x7, Extended DISC, TTI and others all sell different
instruments under the name, with different item pools and very different
psychometric quality. "We use DISC" says less than people assume.

**Evidence.** Better-constructed versions show reasonable internal consistency and
recover four factors that correspond to the styles. Predictive validity for job
performance is limited and thinly documented in peer-reviewed literature. The
model maps roughly onto Extraversion (D and i high, S and C low) and Agreeableness
(S and i high, D low), i.e. two of the Big Five. Its defensible use is as a
communication and team-style vocabulary, not as a selection tool.

**Why it's everywhere.** Four categories are learnable in a single workshop, the
language is neutral and non-clinical, and it is explicitly framed as behavior
(changeable, situational) rather than identity — which makes it far more palatable
in corporate settings than anything that sounds like a personality diagnosis.

### 4.6 True Colors and the Color Code

Two different color systems that get confused constantly.

**True Colors** (Don Lowry, 1978) is a simplification of Keirsey's four
temperaments into Blue (people-oriented, harmony), Gold (pragmatic planner, duty),
Green (independent thinker, competence), and Orange (action-oriented, freedom).
Card-sort or ranking format; output is a dominant color with relative intensities.
Popular in education and youth programs.

**The Color Code** (Taylor Hartman, 1987) is unrelated in lineage and sorts by
*core driving motive* rather than behavior style: Red (power), Blue (intimacy),
White (peace), Yellow (fun). Motivation-based, closer in spirit to the Enneagram.

Both are best regarded as workshop and icebreaker tools; neither has a meaningful
independent research base.

### 4.7 CliftonStrengths (StrengthsFinder)

**Structure.** 34 "talent themes" — Achiever, Learner, Strategic, Empathy,
Woo, Input, and so on — grouped into four domains: Executing, Influencing,
Relationship Building, Strategic Thinking. 177 paired statements with 20 seconds
per item. Standard output is your top 5; the full 34 ranking costs more.

**The deliberate design choice.** CliftonStrengths is ipsative and intentionally
non-normative: it ranks your themes against each other, not against other people.
Don Clifton's premise — deriving from his study of high performers at Selection
Research Inc. and then Gallup — was that development effort returns more when
invested in existing strengths than in remediating weaknesses. That premise is a
philosophy of development, and the instrument is built to serve it.

**Evidence.** This is also its psychometric problem. Because scores are relative
within a person, ordinary reliability and validity statistics do not apply
cleanly, and comparisons across people are not really licensed. Independent
analyses have found weak internal consistency: in one large sample only 16 of the
34 themes (47%) reached the conventional α ≥ .70 threshold, and fewer still in a
college-student sample. Gallup's own technical reports present supportive cluster
analyses of the 34-theme structure. Practically: excellent as a vocabulary for
coaching conversations and self-directed development, weak as a measurement
instrument, and inappropriate for selection.

### 4.8 Predictive Index

A 1955 instrument (Arnold Daniels) using a free-choice adjective checklist — you
pick words that describe how others see you, then how you see yourself. Yields
four factors (Dominance, Extraversion, Patience, Formality) that are essentially
DISC's quadrants under different names, plus a response-level factor. Fast
(5–10 minutes), heavily used in hiring and team-building, sold with consulting.

### 4.9 Dark Triad measures

Not a general personality framework but frequently paired with one:
**Machiavellianism**, **narcissism**, and **subclinical psychopathy**. Measured by
the Short Dark Triad (SD3, 27 items) or the Dirty Dozen (12 items). Most of this
variance is captured by low HEXACO Honesty-Humility, which is a strong argument
for HEXACO over Big Five when antagonistic traits matter. Some researchers add
sadism for a "Dark Tetrad."

---

## 5. Clinical instruments (mentioned for boundary-setting)

The **MMPI-2/MMPI-3** and **PAI** are clinical inventories for psychopathology,
not personality quizzes. They require licensed administration, and using them for
employment screening carries legal exposure — in *Karraker v. Rent-A-Center*
(7th Cir., 2005) the MMPI was held to constitute a medical examination under the
ADA. Any product touching this space needs to stay clearly on the non-clinical
side of the line.

---

## 6. Cross-cutting problems

These apply to nearly everything above and are worth internalizing before
building anything. See [`criticisms.md`](criticisms.md) for the full treatment.

**The Barnum/Forer effect.** Forer (1949) gave students an identical vague
personality description and had them rate its accuracy for themselves; the average
rating was 4.3/5. Generic, flattering, double-ended statements ("you have a great
deal of unused capacity") read as personally accurate to almost everyone. This
means *user-reported accuracy is nearly worthless as evidence that an instrument
works* — and it means a well-written but empty description will outperform an
accurate but blunt one on satisfaction metrics. Every consumer personality product
is under constant commercial pressure toward Barnum text.

**Self-report ceilings.** Everything here except observer-report forms depends on
accurate, honest self-knowledge. That fails under social desirability, faking-good
in high-stakes settings, limited self-insight, reference-group effects (you rate
yourself against your peers, not the population), and acquiescence bias. Observer
reports typically add real predictive validity — this is why HEXACO and Hogan
offer them and why their absence is a standard criticism of MBTI.

**Dichotomization discards information.** Converting a continuous score into a
letter throws away most of the signal and manufactures the retest instability seen
in MBTI, the Enneagram, and DISC. If a product must show a type, keep the
underlying continuous scores and show how close to the boundary the user actually
is. "You're 52% Thinking" is honest; "You are a T" is not.

**Stability vs. change.** Traits are moderately stable but not immutable; rank-order
stability rises with age and mean levels shift predictably through adulthood. A
product that presents type as permanent identity is making a claim the data does
not support.

**Cross-cultural validity.** The Big Five replicates broadly but not perfectly —
the structure is less clean in some non-WEIRD samples, and translation changes
item meaning. Norm groups matter and are often undisclosed.

**Selection use is a legal and ethical minefield.** Personality testing in hiring
raises adverse-impact, ADA, and privacy questions. Publishers vary from explicit
warnings (Myers-Briggs Company) to validated selection systems built for it
(Hogan). Do not treat these as interchangeable.

---

## 7. Practical takeaways

If the goal is **accuracy**: use HEXACO-PI-R or an IPIP-NEO form. Both are free,
both give facet-level detail, both have published psychometrics. HEXACO if
integrity/ethics variance matters; IPIP-NEO if comparability to the broader
literature matters.

If the goal is **engagement and shareability**: the type frameworks win, and
16Personalities shows the working formula — free, ~60 items, under 15 minutes, a
memorable label, generous and specific prose, and an identity worth posting.

If the goal is **both**: the 16Personalities approach is the honest version of the
compromise — measure on validated continuous dimensions, present as a type, and
keep the scores visible underneath. Presenting a type without retaining the
dimensions is where products cross from simplification into misrepresentation.

For **workplace** use: Hogan or 16PF for anything selection-adjacent; DISC or
CliftonStrengths for development and team conversation only, never for hiring.

**Licensing note for anything we build:** IPIP items are public domain with no
licensing requirement, and HEXACO is free for research use — these are the only
two families that can be embedded without negotiating rights. MBTI, DISC (all
vendors), CliftonStrengths, RHETI, Hogan, and 16PF are proprietary; their items
cannot be reproduced. "MBTI," "Myers-Briggs," "DiSC," "CliftonStrengths," and
"StrengthsFinder" are protected marks, which is why free online clones use
circumlocutions like "16 types test."

---

## Sources

- [Reliability and Validity of the MBTI Instrument — The Myers-Briggs Company](https://www.myersbriggs.org/research-and-library/validity-reliability/)
- [Evaluating the validity of Myers-Briggs Type Indicator theory (Stein & Swan, 2019)](https://swanpsych.com/publications/SteinSwanMBTITheory_2019.pdf)
- [Validity of the MBTI: Is the MBTI Scientific? — Truity](https://www.truity.com/blog/myers-briggs/mbti-validity-challenges)
- [Assessing the Structure of the Five Factor Model of Personality (IPIP-NEO-120) in the Public Domain — PMC](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7871748/)
- [IPIP-NEO-120 overview — NovoPsych](https://novopsych.com/assessments/formulation/international-personality-item-pool-neo-120-item-version-ipip-neo-120/)
- [The Big Five Personality Dimensions and Job Performance: A Meta-Analysis (Barrick & Mount, 1991)](https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1744-6570.1991.tb00688.x)
- [Personality and Performance at the Beginning of the New Millennium (Barrick, Mount & Judge, 2001)](https://home.ubalt.edu/tmitch/645/articles/Barrick%20&%20mount%20Pers%20and%20perf%20new%20millennium%202001.pdf)
- [Empirical, Theoretical, and Practical Advantages of the HEXACO Model (Ashton & Lee, 2007)](https://journals.sagepub.com/doi/10.1177/1088868306294907)
- [HEXACO model of personality structure — Wikipedia](https://en.wikipedia.org/wiki/HEXACO_model_of_personality_structure)
- [Honesty-humility factor of the HEXACO model — Wikipedia](https://en.wikipedia.org/wiki/Honesty-humility_factor_of_the_HEXACO_model_of_personality)
- [The Enneagram: What the Scientific Evidence Actually Shows — Cogn-IQ](https://www.cogn-iq.org/blog/enneagram-validity/)
- [The Riso-Hudson Enneagram Type Indicator (RHETI) — Statistics Solutions](https://www.statisticssolutions.com/free-resources/directory-of-survey-instruments/the-riso-hudson-enneagram-type-indicator-rheti/)
- [The History of the Enneagram: From Ancient Symbol to Modern Framework](https://jobcannon.io/blog/history-of-enneagram)
- [Science behind DiSC — DiSC Profile](https://www.discprofile.com/what-is-disc/research-reliability-and-validity)
- [DISC assessment — Wikipedia](https://en.wikipedia.org/wiki/DISC_assessment)
- [The True Story Behind the DISC Model](https://elmlearning.com/blog/the-true-story-behind-the-disc-model-how-a-negative-assessment-morphed-into-a-tool-for-collaboration/)
- [The CliftonStrengths Technical Report: Development and Validation — Gallup](https://www.gallup.com/file/services/176321/Clifton%20StrengthsFinder%202.0%20Technical%20Report.pdf)
- [Psychometric Properties of the Clifton StrengthsFinder — Villanova](https://www.villanova.edu/content/dam/villanova/provost/teaching-learning/ignite-your-strengths/faculty-student-resources/clifton-strengths-technical-report.pdf)
- [What Are the 34 CliftonStrengths Themes? — Gallup](https://www.gallup.com/cliftonstrengths/en/253715/34-cliftonstrengths-themes.aspx)
- [Validity of the Hogan Personality Inventory, HDS and MVPI — Hogan Assessments](http://www.hoganassessments.com/sites/default/files/uploads/Sample_Tech%20Report_2016-07-06_FINAL.pdf)
- [Hogan Assessments (HPI, HDS, MVPI) — Peter Berry Consultancy](https://peterberryconsultancy.com/assessment/hogan-assessments-hpi-hds-mvpi/)
- [MBTI vs 16Personalities — an honest comparison](https://mbtiusa.com/blog/mbti-vs-16personalities)
- [16Personalities NERIS Type Explorer — Personality Metrics](https://www.personalitymetrics.com/posts/fun-16personalities)
- [Keirsey Temperament Sorter — Wikipedia](https://en.wikipedia.org/wiki/Keirsey_Temperament_Sorter)
- [True Colors (personality) — Wikipedia](https://en.wikipedia.org/wiki/True_Colors_(personality))
- [Color Wheel Personality Assessments compared](https://pigment.is/blogs/blogs/color-wheel-personality-assessment-what-it-is-which-system-youre-using-and-how-to-use-your-results)
