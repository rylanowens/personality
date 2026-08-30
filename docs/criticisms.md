# Criticisms of Personality Assessment

A companion to [`personality-assessments.md`](personality-assessments.md). That
document describes what each instrument is; this one collects the case against
them — organized by *kind* of criticism rather than by instrument, because the
same handful of structural problems recur across frameworks that otherwise look
nothing alike.

Two framing notes before the substance.

**Criticism is not uniform.** "Personality tests don't work" is a slogan, not a
finding. The Big Five's problems are mostly about how much variance it leaves
unexplained; the MBTI's are about whether its central claim is true at all; DISC's
are about vendor quality control; CliftonStrengths' are about whether standard
psychometrics even apply. Collapsing these into one verdict makes it impossible to
reason about which instrument to use for what.

**Some criticisms are fatal and some are survivable.** Section 9 sorts them. A
criticism that applies equally to all of psychology (self-report is imperfect) is
not a reason to reject a specific instrument; a criticism that undermines an
instrument's own core claim (MBTI types are not stable) is.

Last updated: 2026-08-30

---

## 1. Measurement criticisms

These attack whether the instruments measure anything consistently.

### 1.1 Retest instability in type instruments

The most-cited empirical strike against the MBTI: between roughly 39% and 76% of
people receive a different four-letter type when retaking within about five weeks,
depending on the study and interval. The Enneagram has a milder version of the
same problem — categorical type agreement on retest often falls in the .50–.70
range, meaning a substantial minority get reassigned.

This is not sloppiness in test construction. It is the arithmetic consequence of
cutting a normally distributed continuous score at its midpoint (see §4.1). The
underlying *scale* scores are considerably more stable than the *type* labels
derived from them, which tells you the instability is manufactured by the type
layer, not present in the measurement.

The practical implication is severe for anything identity-shaped: if a user's type
changes on retest, either the first result or the second was wrong, and the
product has no way to tell them which.

### 1.2 Internal consistency failures

For CliftonStrengths, independent analysis found that in a large general-population
sample only 16 of the 34 themes (47%) reached the conventional α ≥ .70 threshold
for internal consistency, with worse results in a college-student sample. Gallup's
own technical reports present supportive evidence, which is itself part of the
criticism (see §7.1) — the bulk of the favorable psychometric literature is
publisher-produced.

DISC has no single answer here because there is no single DISC: Everything DiSC,
Extended DISC, Assessments 24x7, TTI and others sell different instruments under
the same four letters, with different items and very different quality. "We use
DISC" is roughly as informative as "we use a questionnaire."

### 1.3 Self-report is the only channel

Almost every instrument in wide consumer use is exclusively self-report, which
imports a stack of known biases: social desirability, limited self-insight,
reference-group effects (you rate yourself against your peers, not the
population), acquiescence bias, and mood-state contamination at the time of
taking.

The standard fix is observer report — having people who know the respondent rate
them independently. HEXACO and Hogan offer observer forms; the MBTI does not, and
this is a routine criticism of it. Self–observer agreement is itself informative:
where it is low, self-report is measuring self-concept rather than behavior.

### 1.4 Faking under high stakes

In selection settings the self-report problem becomes deliberate. Conservative
estimates put the share of applicants who fake at 30–50%. Meta-analytic work
comparing matched samples under high- and low-stakes conditions found criterion
validity declining by roughly a third under high stakes.

Faking inflates means on exactly the traits employers screen for —
Conscientiousness and Emotional Stability — and, more damagingly, *reorders*
candidates, so the applicants who are best at impression management rise. Faking
warnings have limited effect. Social-desirability correction scales are contested
and can remove real variance along with the distortion.

Note the sharpest version of the argument, from Morgeson et al. (2007): faking is
not even the main problem. The main problem is that validity is low *to begin
with* (§3.2).

### 1.5 Questionable measurement practices

Flake and Fried's "Measurement Schmeasurement" (2020) argues that a neglected
driver of psychology's replication crisis is measurement itself: researchers
invent scales for single studies, modify existing scales without reporting it,
select items post hoc, and rarely justify why a construct is operationalized the
way it is. Their point cuts deeper than replication — "even if a finding is
replicable, we are still not sure exactly what is being replicated."

Applied to the commercial assessment market, where item pools are trade secrets
and validation is done in-house, the transparency conditions Flake and Fried ask
for are largely unmeetable by design.

---

## 2. Construct criticisms

These attack whether the things being measured are the right things — or real
things.

### 2.1 The lexical hypothesis has limits

The Big Five's main claim to legitimacy is that it was discovered rather than
invented: factor-analyze the trait adjectives in a natural language and five
factors fall out. But that method can only recover what a language happens to
encode in single words. Traits that matter but lack adjective vocabulary are
invisible to it, and the resulting structure inherits the culture's folk
psychology rather than transcending it. The Big Five may be a good map of how
English speakers describe each other, which is not the same as a good map of how
people actually differ.

HEXACO's existence is itself evidence for this criticism: more careful lexical
work in more languages recovered *six* factors, not five, meaning the canonical
model had been missing a major dimension (Honesty-Humility) for decades.

### 2.2 Cross-cultural generalization is weaker than advertised

The Big Five replicates well across industrialized, literate, urban populations —
which is a narrower claim than "universal." Gurven et al. (2013) administered a
translated Big Five instrument to 632 Tsimane forager-horticulturalists in the
Bolivian Amazon and found little support for the five-factor structure; two
factors emerged instead, which the authors argue may reflect socioecological
features common to small-scale societies.

That single study does not overturn the model, but it undercuts the universality
claim specifically. Populations like the Tsimane are closer to the conditions
under which human personality actually evolved than any WEIRD sample is, so
finding a different structure there is not a minor exception.

### 2.3 Jingle and jangle

The **jingle fallacy** is assuming two things with the same name are the same
construct; the **jangle fallacy** is assuming two things with different names are
different constructs. Personality assessment is riddled with both.

The canonical recent case: Credé et al.'s meta-analysis found grit correlating
r ≈ .84 with conscientiousness across 22 studies — a construct marketed as new,
carrying its own book and TED talk, that is largely a rebranding of an existing
one. The commercial frameworks are worse offenders. DISC's four styles are
substantially Extraversion and Agreeableness under new names. The MBTI's four
dichotomies are four of the Big Five. Many of CliftonStrengths' 34 themes are
facet-level Big Five content with proprietary labels.

This matters practically: an organization running DISC, CliftonStrengths, and MBTI
workshops believes it has triangulated on three independent views of a person. It
has mostly measured Extraversion three times.

### 2.4 Description without explanation

Trait models describe covariance in behavior; they do not explain it. Saying
someone scores high on Conscientiousness because they are conscientious is
circular. The Big Five names regularities without specifying mechanism — what
cognitive, motivational, or neural processes produce the covariation — which is
why it has been called a taxonomy in search of a theory.

This is a real limitation, though a common overreach follows from it: "it's
circular, therefore useless." Descriptive taxonomies without mechanism were
scientifically productive for a century in biology. Prediction does not require
explanation.

### 2.5 What the models leave out

Five or six broad factors capture a minority of what varies between people.
Missing or poorly handled: values and motives (Hogan's MVPI and the Enneagram both
target this gap), abilities, interests, narrative identity, characteristic
adaptations, and situational contingency (§3.1). Facet-level scores routinely
out-predict domain scores, which is direct evidence that aggregating to five
factors throws away useful signal.

---

## 3. Predictive validity criticisms

These grant that the instruments measure *something* and attack whether it
predicts anything worth knowing.

### 3.1 The personality coefficient and the person-situation debate

Mischel's *Personality and Assessment* (1968) observed that correlations between
personality questionnaires and actual behavior rarely exceed .20–.30 — he called
this the "personality coefficient," derisively — and argued that situational
variables generally do more work. This detonated the field for two decades.

The debate resolved into a middle position rather than a victory: aggregated
across situations and occasions, traits predict behavior reasonably well;
single-instance behavior is heavily situational. Mischel himself later objected
that he had never claimed personality does not exist. Nisbett revised the ceiling
up to about r = .40.

The criticism survives in weakened but real form. A correlation of .30 means
roughly 9% of variance explained. That is a genuine effect and a poor basis for
any decision about an individual — which is exactly the use case most commercial
products are sold for.

### 3.2 The selection debate: Morgeson et al. (2007)

The most serious insider critique of workplace personality testing. Morgeson,
Campion, Dipboye, Hollenbeck, Murphy, and Schmitt — senior I–O psychologists and
former editors of the field's leading journals, with no commercial stake —
published two papers in *Personnel Psychology* arguing that self-report
personality tests show validity too low to justify their use in personnel
selection, and that the field should reconsider the practice. Their framing was
pointed: the problem is not faking, it is that the tests barely predict.

Ones, Dilchert, Viswesvaran and Judge (2007) and Tett and Christiansen (2007)
responded that the critique understated validity by ignoring confirmatory
designs — when traits are selected via job analysis and hypothesized
trait–performance links are directional and specified in advance, validity
estimates are usefully higher.

Both sides are partly right, and the synthesis is the practical lesson:
*off-the-shelf, undirected personality testing in hiring is weakly defensible;
job-analysis-driven, confirmatory use of a validated instrument is defensible.*
Almost all commercial practice is the former.

### 3.3 Incremental validity over cheaper predictors

Personality measures must justify themselves against what they add over general
mental ability, structured interviews, work samples, and past performance — all of
which typically predict job performance better. The increment is often small.
Personality's better argument in selection is not performance prediction but
counterproductive-behavior prediction (where Honesty-Humility and integrity
measures do real work) and turnover.

### 3.4 Effect sizes are routinely oversold in marketing

Conscientiousness at ρ ≈ .31 with job performance is one of the more robust
findings in applied psychology *and* explains under 10% of variance. Vendor
material tends to translate this into language implying near-determinism. The gap
between "statistically robust across studies" and "informative about this
individual candidate" is where most commercial overclaiming lives.

---

## 4. Criticisms specific to type models

### 4.1 Dichotomization destroys information and manufactures instability

Splitting a continuous score at a cut point discards most of its information.
Worse, because scores on MBTI dichotomies are approximately normally distributed —
not bimodal, as a genuine type theory would predict — a large fraction of
respondents sit near the boundary where a few item responses flip the letter.

The bimodality point is the important one. If the world really contained two kinds
of people on a dimension, the distribution would show two humps. It doesn't. The
types are administrative conveniences imposed on a continuum, and every downstream
problem — retest instability, the arbitrariness of near-boundary assignments, the
absurdity of treating a 51/49 split as categorical — follows from that.

### 4.2 No natural clusters have been found

The stronger version: when researchers look for discrete personality categories
using taxometric methods or unsupervised clustering, they generally do not find
them. For the Enneagram specifically, no study has derived the nine types by
clustering personality data from scratch; factor analyses of Enneagram instruments
typically recover fewer than nine factors, and those factors resemble Big Five
dimensions more than they resemble the nine types.

### 4.3 MBTI type dynamics has essentially no empirical support

Beyond the four letters, official MBTI theory posits *type dynamics*: eight
cognitive functions in a four-deep ordered stack per type, with dominant,
auxiliary, tertiary and inferior positions. This is the theoretically rich part of
the framework and the part most beloved by online type communities.

Reynierse's analyses of the supporting literature reported that the 1998 MBTI
Manual cited only eight studies for type dynamics — six failed, one rested on
questionable interpretation, and one offered contradictory evidence as support —
and that the predicted function order appeared in only 1 of 540 test results.
Reynierse and Harker (2008) argued that straightforward four-dichotomy scoring
outpredicts function-stack models, i.e. the elaborate theory adds complexity with
no empirical payoff.

*(Sourcing caveat: I reached these figures through secondary summaries of
Reynierse's work in the Journal of Psychological Type rather than the primary
papers. The direction of the finding is well established; treat the exact counts
as needing verification if they become load-bearing.)*

### 4.4 Ipsative scoring breaks comparison

Forced-choice and ranking formats — RHETI's 144 paired statements,
CliftonStrengths' 177 pairs, the Predictive Index's adjective checklist — produce
*ipsative* data: scores are relative within a person and sum to a constant. This
has a legitimate purpose (it suppresses social-desirability response bias) and a
serious cost: between-person comparisons are not licensed, ordinary reliability
and validity statistics do not apply cleanly, and factor analysis of ipsative data
produces artifacts. A person whose top theme is Achiever and one whose fifth theme
is Achiever cannot be meaningfully compared on Achiever.

---

## 5. Epistemic criticisms

These attack why the tests *feel* accurate regardless of whether they are.

### 5.1 The Barnum/Forer effect

Forer (1949) gave 39 students what they believed were individualized personality
profiles from a test they had taken. Every student received the identical text,
assembled from a newsstand astrology book. Mean rated accuracy: 4.3 out of 5.

This is the single most important thing to understand about the consumer
personality market. Vague, double-ended, mildly flattering statements ("you have a
great deal of unused capacity which you have not turned to your advantage") read
as strikingly personal to nearly everyone. The effect explains the durability of
astrology, cold reading, and a great deal of the personality-quiz industry, and it
generalizes: people accept almost any plausible-sounding personality feedback
about themselves.

Two consequences follow, and both are uncomfortable for anyone building in this
space:

1. **User-reported accuracy is nearly worthless as validation.** "97% of users say
   their results were accurate" is a claim a random-text generator can meet.
2. **There is constant commercial pressure toward emptiness.** Barnum-style prose
   outperforms accurate-but-specific prose on satisfaction metrics, because
   specific descriptions are sometimes wrong and vague ones never are. Products
   optimizing for user delight will drift toward horoscopes.

### 5.2 Confirmation bias and unfalsifiability in practice

Type descriptions are typically written so that a trait and its opposite can both
be accommodated ("Type 4s can appear either dramatic or withdrawn"). Once someone
adopts a type identity, they preferentially notice confirming behavior, reinterpret
disconfirming behavior as a wing/stress-arrow/shadow-function expression, and
recruit the framework's own vocabulary to explain away every counterexample. The
richer the framework's apparatus — wings, arrows, instinctual variants, levels of
development, function stacks — the more effectively it absorbs contradiction.

This is not a criticism of the measurement; it is a criticism of the *system as
used*. But it is why elaborate frameworks feel more accurate than simple ones
while predicting less.

---

## 6. Ethical and social criticisms

### 6.1 Essentialism and self-limiting beliefs

Type labels invite psychological essentialism — treating a category as reflecting
a deep, fixed, causally powerful underlying nature. Essentialist beliefs are
associated with stronger stereotype endorsement, preference for
stereotype-consistent information, and stigmatization.

The linguistic form matters. Research on mental-health labels shows that noun-form
labels ("she is a schizophrenic") versus verb/possession form ("she has
schizophrenia") lead observers to judge the condition as more permanent, less
alterable, and more totalizing, and to under-notice attributes outside the
stereotype. Personality typing is almost entirely noun-form: "I *am* an INTJ,"
"he's a High D," "she's a Three." That grammar does predictable work.

The self-directed version is the self-limiting belief: "I'm an introvert, so I
can't do sales." Traits are moderately stable, not fixed — mean levels shift
predictably across adulthood — so the permanence the labels imply is not a fact
about personality but an artifact of how it was packaged.

### 6.2 Stereotyping and interpersonal harm

Once a type is known, it functions as a legitimized stereotype: a socially
acceptable basis for prejudgment that would be recognized as bias if the category
were demographic. In teams this shows up as attributing disagreement to type
rather than to the substance of the disagreement, assigning work by type rather
than by demonstrated skill, and excusing behavior ("that's just how Eights are").

### 6.3 Employment discrimination and legal exposure

The legal record is not hypothetical:

- ***Karraker v. Rent-A-Center*** (7th Cir. 2005): Rent-A-Center's management
  test battery included the MMPI, which inquired into areas including sexual
  orientation, religious belief, and medical conditions. The Seventh Circuit held
  the MMPI constituted a **medical examination** under the ADA, making its
  pre-offer use unlawful. The court ordered the results purged and barred from
  employment decisions.
- **Target** paid $2.8 million to settle EEOC charges that its pre-employment
  assessments had disparate impact by race and sex, disproportionately screening
  out African-American, Asian-American, and women applicants.
- **CVS** and **Best Buy** both reached EEOC settlements over personality tests
  with disparate impact by race and national origin.

The general framework: if a selection procedure produces adverse impact, the
employer must show it is job-related and consistent with business necessity — a
burden that a test with ρ ≈ .3 validity and no job analysis behind it is poorly
positioned to meet. Instruments that probe emotional stability or distress edge
toward the ADA's medical-examination line.

### 6.4 Privacy and inferred-personality targeting

Kosinski et al. (2013) showed that Facebook Likes alone predict personality,
sexual orientation, political views, and other sensitive attributes; on the order
of 300 likes, model predictions approached spouse-level accuracy on personality.
Cambridge Analytica built on this line of work to construct psychographic profiles
of more than 100 million US voters for micro-targeted political persuasion.

The criticism here is not that the models were accurate — the evidence on how well
psychographic targeting actually worked is mixed, and later meta-analytic work on
digital-footprint prediction is based on a small and linguistically narrow study
pool. The criticism is that personality inference requires no consent and no
questionnaire, so the ethical questions apply to any system that derives or stores
trait estimates, not just to tests people knowingly take.

---

## 7. Commercial and institutional criticisms

### 7.1 The evidence base is largely vendor-produced

For MBTI, DISC, CliftonStrengths, Predictive Index and most of the corporate
market, the bulk of favorable psychometric evidence appears in publisher technical
manuals rather than independent peer-reviewed journals. Item pools are trade
secrets, so external researchers cannot fully audit the instruments. Independent
analyses, when they happen, are consistently less favorable than in-house ones —
the CliftonStrengths internal-consistency finding in §1.2 is a clean example of the
gap.

This is not an accusation of fraud. It is a structural conflict of interest that
would be disqualifying in any other evidence-based field.

### 7.2 The certification economy

MBTI, DISC, Hogan and CliftonStrengths all operate practitioner-certification
programs. These create a professional constituency with financial and identity
investment in the instrument's credibility — people who have paid for training,
built consultancies, and staked their expertise on it. Certification is presented
as quality control, and partly is; it also functions as a moat and a lobby, and it
systematically dampens internal criticism.

### 7.3 The MBTI's origin story

Both Annie Murphy Paul's *The Cult of Personality Testing* (2004) and Merve Emre's
*The Personality Brokers* (2018) document the history: Katharine Cook Briggs and
Isabel Briggs Myers had no training in psychology, psychiatry, or psychometrics,
never worked in a laboratory or academic institution, and built the instrument
from an untested reading of Jung's *Psychological Types* — a book that was itself
speculative rather than empirical. Emre's archival work traces how the instrument
acquired the trappings of science through commercial adoption rather than through
validation.

Origin is not destiny — a well-validated instrument with an amateur origin would
be fine. The force of the historical criticism is that in this case the
validation never arrived, and the appearance of scientific standing was
manufactured downstream.

### 7.4 Popular products are not the instruments they invoke

Most free online "MBTI tests" are not the MBTI, which is proprietary and
practitioner-gated. 16Personalities is a Big Five instrument wearing MBTI letters.
"DISC" names a family of unrelated commercial products of varying quality. This
means the public's experience of these frameworks is mediated almost entirely by
unvalidated clones, and criticism aimed at the official instrument frequently
misses what people actually took — in some cases unfairly, since 16Personalities'
Big Five underpinnings make it psychometrically *better* than the thing it
imitates.

---

## 8. Criticism scorecard by instrument

| Instrument | Most serious criticism | Severity |
|---|---|---|
| **Big Five** | Descriptive without mechanism; leaves most variance unexplained; universality overstated (Tsimane) | Survivable — limits scope, not validity |
| **HEXACO** | Younger, smaller evidence base; less workplace validation | Minor |
| **16PF** | Primary-factor structure has not replicated cleanly; largely superseded by FFM | Moderate |
| **Hogan** | Validity evidence heavily publisher-produced; expensive gatekeeping | Moderate |
| **MBTI** | Type assignment is unstable on retest; type dynamics unsupported; no predictive validity for performance | Fatal to its core claims |
| **16Personalities** | Methodology unpublished and unauditable; MBTI branding oversells the type layer | Moderate |
| **Keirsey** | Inherits MBTI's dichotomization problems; little independent validation | Serious |
| **Enneagram** | Nine-type structure never empirically derived; wings and arrows unsupported; unstable typing | Fatal as measurement; survives as a coaching tradition |
| **DISC** | No single instrument; weak predictive validity; measures ~2 Big Five factors under new names | Serious for prediction, fine for vocabulary |
| **CliftonStrengths** | Ipsative scoring blocks comparison; under half of themes reach α ≥ .70 | Serious as measurement; coherent as a development philosophy |
| **Predictive Index** | DISC's problems plus heavy selection use | Serious given how it's deployed |

---

## 9. What survives

An honest accounting has to include what the criticisms *don't* touch, or the
document becomes its own kind of overclaim.

**Traits are real and measurable.** The Big Five and HEXACO replicate across
samples and methods, show heritability around 40–60% in twin studies, predict
outcomes prospectively, and converge between self- and observer report. The
critique of *type* instruments does not transfer to *trait* instruments, and
people routinely make that leap.

**Modest effects are still effects.** ρ ≈ .31 is small for judging an individual
and meaningful across a population. Conscientiousness predicts academic
achievement, job performance, health behavior, and longevity. Neuroticism predicts
mental and physical health outcomes. These are among the more durable findings in
psychology.

**The person-situation debate resolved toward the middle.** Traits predict
aggregated behavior well and single instances poorly. That is a scoping
restriction, not a refutation, and Mischel himself resisted the strong reading.

**Non-predictive uses are legitimate.** A shared vocabulary for talking about
difference has value even when the underlying taxonomy is loose. The MBTI's own
publisher makes exactly this claim and explicitly disclaims predictive use — which
is more epistemic honesty than most of the market offers. The failure mode is not
using these frameworks for reflection; it is using reflection-grade instruments
for consequential decisions.

**Some criticisms prove too much.** Self-report limitations, modest effect sizes,
and the description/explanation gap apply across the behavioral sciences. Deployed
selectively against personality testing, they are isolated demands for rigor.

---

## 10. Practical checklist

Warning signs that a personality product is on the wrong side of these criticisms:

- [ ] Reports a **type** without showing the underlying continuous scores or how
      close to a boundary the user landed
- [ ] Presents type as **permanent identity** rather than a current estimate
- [ ] Cites **user-reported accuracy** as evidence of validity
- [ ] Descriptions are **universally flattering** and double-ended (Barnum test:
      would a different type's description also fit?)
- [ ] All validation evidence is **publisher-produced**
- [ ] Norm groups, item pools, or scoring are **undisclosed**
- [ ] Recommended for **hiring or selection** without job analysis and local
      validation
- [ ] Asks items that probe **clinical or medical** territory (ADA exposure)
- [ ] Claims **independence** from other frameworks it substantially duplicates
- [ ] No **retest** data published, or retest reported only for scale scores while
      the product outputs types

Design implications for anything built here, following directly from the above:
measure on continuous validated dimensions and keep them visible; report
confidence and boundary proximity rather than bare labels; use verb-form language
("you tend toward…") rather than noun-form identity claims; validate against
behavioral or observer criteria rather than user satisfaction; and if the product
is fun rather than diagnostic, say so plainly instead of borrowing scientific
credibility it doesn't have.

---

## Note on sourcing

These notes were assembled primarily from web sources — journal abstracts,
publisher documents, court records, and secondary summaries — rather than from
full primary texts in every case. The overall picture is well-corroborated across
independent sources, but specific figures (Reynierse's function-order counts, the
CliftonStrengths alpha tallies, faking prevalence estimates) came through
secondary channels and should be checked against the primary literature before
being relied on for anything consequential. Points flagged inline carry the same
caveat.

## Sources

- [Reconsidering the Use of Personality Tests in Personnel Selection Contexts (Morgeson et al., 2007)](https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1744-6570.2007.00089.x)
- [Are We Getting Fooled Again? Coming to Terms with Limitations in the Use of Personality Tests (Morgeson et al., 2007)](http://www.morgeson.com/downloads/morgeson_campion_dipboye_hollenbeck_murphy_schmitt_2007b.pdf)
- [Personality tests at the crossroads: A response to Morgeson et al. (Tett & Christiansen, 2007)](https://www.researchgate.net/publication/229660578_Personality_tests_at_the_crossroads_A_response_to_Morgeson_Campio_2007)
- [Person–situation debate — Wikipedia](https://en.wikipedia.org/wiki/Person%E2%80%93situation_debate)
- [The Person-Situation Debate and the Assessment of Situations (Funder et al.)](https://rap.ucr.edu/JJPFunderetal.pdf)
- [How Universal Is the Big Five? Testing the FFM Among Forager–Farmers in the Bolivian Amazon (Gurven et al., 2013)](https://digitalcommons.chapman.edu/cgi/viewcontent.cgi?article=1216&context=esi_pubs)
- [Grit and conscientiousness: Another jangle fallacy](https://www.sciencedirect.com/science/article/abs/pii/S0092656620301100)
- [Measurement Schmeasurement: Questionable Measurement Practices and How to Avoid Them (Flake & Fried, 2020)](https://journals.sagepub.com/doi/full/10.1177/2515245920952393)
- [Psychological Measurement and the Replication Crisis: Four Sacred Cows (Lilienfeld)](https://gwern.net/doc/statistics/bias/2020-lilienfeld.pdf)
- [Faking on personality assessments in high-stakes settings: A critical review](https://www.sciencedirect.com/science/article/pii/S2352250X25000703)
- [Applicant Faking on Personality Tests: Good or Bad and Why Should We Care?](https://scholarworks.bgsu.edu/cgi/viewcontent.cgi?article=1165&context=pad)
- [Barnum effect — Wikipedia](https://en.wikipedia.org/wiki/Barnum_effect)
- [The 'Barnum Effect' in Personality Assessment: A Review of the Literature](https://www.researchgate.net/publication/232554639_The_'Barnum_Effect'_in_Personality_Assessment_A_Review_of_the_Literature)
- [Psychological essentialism and stereotype endorsement](https://www.sciencedirect.com/science/article/abs/pii/S0022103105000478)
- [Essentialist beliefs, stigmatizing attitudes, and noun labels applied to people with mental disorders](https://www.sciencedirect.com/science/article/abs/pii/S0191886914001676)
- [Karraker v. Rent-A-Center, Inc., 411 F.3d 831 (7th Cir. 2005)](https://caselaw.findlaw.com/court/us-7th-circuit/1384254.html)
- [Karraker v. Rent-A-Center — Civil Rights Litigation Clearinghouse](https://clearinghouse.net/case/10675/)
- [Employment Tests and Selection Procedures — U.S. EEOC](https://www.eeoc.gov/laws/guidance/employment-tests-and-selection-procedures)
- [Be careful what you ask on pre-employment tests to avoid a multimillion dollar EEOC action](https://www.employerlawreport.com/2015/09/articles/eeo/be-careful-what-you-ask-on-pre-employment-tests-to-avoid-a-multimillion-dollar-eeoc-action/)
- [Pre-Employment Personality Tests, Algorithmic Bias, and the ADA (Penn State Law Review)](https://www.pennstatelawreview.org/wp-content/uploads/2021/03/Article-2-Timmons-Pre-Employment-Personality-Tests.pdf)
- [Psychological Operations in Digital Political Campaigns: Assessing Cambridge Analytica's Psychographic Profiling and Targeting](https://www.frontiersin.org/journals/communication/articles/10.3389/fcomm.2020.00067/full)
- [Michal Kosinski — Wikipedia](https://en.wikipedia.org/wiki/Michal_Kosinski)
- [The Personality Brokers: The Strange History of Myers-Briggs (Merve Emre, 2018)](https://www.penguinrandomhouse.com/books/546958/the-personality-brokers-by-merve-emre/)
- [The Cult of Personality Testing (Annie Murphy Paul, 2004)](https://booksrun.com/9780743280723-the-cult-of-personality-testing-how-personality-tests-are-leading-us-to-miseducate-our-children-mismanage-our-companies-and-misunderstand-ourselves)
- [Cognitive Functions and Type Dynamics — discussion of Reynierse's critique](https://www.typologycentral.com/threads/cognitive-functions-and-type-dynamics-a-failed-theory.59049/)
- [MBTI Cognitive Functions Guide — what's solid vs. shaky](https://mbtiusa.com/blog/mbti-cognitive-functions-guide)
- [Psychometric Properties of the Clifton StrengthsFinder — Villanova](https://www.villanova.edu/content/dam/villanova/provost/teaching-learning/ignite-your-strengths/faculty-student-resources/clifton-strengths-technical-report.pdf)
- [Reliability and Validity of the MBTI Instrument — The Myers-Briggs Company](https://www.myersbriggs.org/research-and-library/validity-reliability/)
- [The Enneagram: What the Scientific Evidence Actually Shows](https://www.cogn-iq.org/blog/enneagram-validity/)
