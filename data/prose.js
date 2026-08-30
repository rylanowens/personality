// Result prose. Written to the contract in docs/quiz-design.md:
//  - verb-form only ("you tend to…"), never noun-form identity claims;
//  - specific enough to fail for the opposite band (the Barnum test);
//  - band prose speaks to the band actually landed in, and the low/high
//    bands name real costs, not only flattery.
// Bands are chosen by percentile: low <= 30, high >= 70, mid between.
// Facet band prose and growth notes are in the `facets` section below;
// domain-pole blocks (`poles`) are reused by the archetype writeups and the
// development section.

window.QUIZ_PROSE = {
  version: 1,

  domains: {
    N: {
      bands: {
        low: "You report being hard to rattle. Setbacks that keep others up at night tend to pass through you quickly, and you rarely spend energy rehearsing what could go wrong. That steadiness is a genuine resource under pressure — and it has a blind spot: distress is information, and you tend to get less of it than other people do. Risks that announce themselves through worry can reach you late, and people in real trouble may read your calm as not caring.",
        mid: "You report an ordinary amount of emotional weather — real stress reactions when life supplies real stressors, and reasonable recovery when it stops. You likely recognize both the person who frets over a mistake for days and the person who shrugs off nearly anything, without fully being either. In practice this means your mood usually tracks your circumstances, so when you do feel persistently bad, it is more likely to mean something than to be background noise.",
        high: "You report feeling negative emotions readily and strongly — worry, frustration, or self-doubt arrive faster and stay longer than they do for most people. That is costly in comfort and it is not only cost: sensitivity to what could go wrong is an early-warning system, and people who score here often catch problems, including interpersonal ones, that steadier people miss. The practical risk is spending alarm on things that never happen and trusting a feeling as if it were a fact.",
      },
    },
    E: {
      bands: {
        low: "You tend to run on a quieter social metabolism. Time alone restores you, groups drain faster than they feed, and you rarely feel an itch to fill silence. You likely do your best thinking and working without an audience. The cost side is visibility: opportunities, allies, and credit flow disproportionately to people who are present and audible, and your default is to be neither. Absence reads as disinterest to people who do not know you well.",
        mid: "You tend to move between company and solitude without much friction — sociable when the situation invites it, content alone when it doesn't. Neither a full calendar nor an empty one feels like a crisis. This flexibility means your energy depends more on which people and what kind of occasion than on the sheer fact of company, so it is worth knowing specifically which social settings feed you rather than assuming they all do or all don't.",
        high: "You tend to draw energy from other people and to seek them out — talking, hosting, jumping into whatever is happening. You probably think out loud and reach for company almost reflexively when something good or bad happens. The strengths are obvious to everyone around you. The costs are quieter: solitude skills atrophy, reflection gets crowded out by conversation, and quieter people can find you exhausting or feel talked over long before you notice.",
      },
    },
    O: {
      bands: {
        low: "You tend to prefer the concrete, the familiar, and the proven. Abstract theorizing feels like stalling, and novelty for its own sake holds little charm — you'd rather do a known thing well than a new thing badly. This makes you dependable in domains that reward consistency. The cost is adaptation: when the rules of a domain genuinely change, your first instinct is to double down on the old ones, and you may dismiss useful ideas because of the unfamiliar way they arrive.",
        mid: "You tend to be selectively curious — open to new ideas and experiences when they connect to something you already care about, unmoved by novelty as an end in itself. You can work with abstractions without preferring them to results. In practice, your openness likely varies a lot by domain — adventurous in some (food, music, ideas) and firmly conventional in others — so a single 'openness' summary fits you less well than the facet detail below.",
        high: "You tend to be pulled toward the new and the abstract — ideas, aesthetics, unfamiliar experiences, questions with no immediate use. Routine registers as a cost to you in a way steadier people do not feel. This is where imagination and pattern-finding live, and it has real prices: follow-through on the no-longer-novel, patience with necessary routine, and credibility with practical people who notice how many of your enthusiasms have a short half-life.",
      },
    },
    A: {
      bands: {
        low: "You tend to lead with skepticism rather than warmth — questioning motives, saying the uncomfortable thing, competing where others accommodate. You are likely hard to manipulate and willing to be disliked, which makes you valuable in negotiations and honest in ways agreeable people cannot afford to be. The bill arrives in relationships: allies feel unsupported, conflicts escalate that didn't need to, and people stop bringing you things because the toll for disagreement is too high.",
        mid: "You tend to cooperate first but keep your skepticism within reach — generous with people who have earned it, guarded with people who haven't. You can compete without needing to win every exchange and accommodate without feeling erased. This middle position means your warmth is more conditional than a highly agreeable person's, and whether that conditionality is well-calibrated — trusting the right people — matters more for you than raw niceness would.",
        high: "You tend to extend trust, sympathy, and cooperation as defaults — smoothing conflicts, giving people the benefit of the doubt, putting the relationship above the point being argued. People likely experience you as easy to work with and safe to confide in. The costs are specific: you absorb bad deals rather than fight them, harsh-but-necessary feedback goes unsaid, and the occasional bad actor gets remarkably far before your skepticism engages.",
      },
    },
    C: {
      bands: {
        low: "You tend to travel light on structure — plans stay loose, deadlines are approached with a sprint rather than a schedule, and tidiness ranks low among your priorities. You adapt quickly precisely because there is no plan to defend. The costs compound quietly: long projects that reward steady increments punish improvisation, other people pay for what you don't finish, and your talents can stay potential for years while more organized peers convert theirs into results.",
        mid: "You tend to supply discipline when something matters to you and let the rest slide — organized about your priorities, relaxed about everything else. You can run on a plan without needing one everywhere. Because your conscientiousness is selective, its value depends almost entirely on whether the things you're disciplined about are actually the important ones; drift shows up not as visible chaos but as effort quietly aimed at the wrong targets.",
        high: "You tend to run on order, follow-through, and standards — plans made, lists kept, work finished to spec whether or not anyone is watching. This is the trait complex that most reliably converts ability into results, and people around you know they can build on what you commit to. The costs are rigidity and its relatives: difficulty dropping a plan that events have invalidated, harsh judgment of less structured people, and rest that never quite feels earned.",
      },
    },
  },

  // Domain-pole blocks: reused inside the archetype writeups and the
  // development section. `costs` = what the pole pays for its strengths;
  // `growth` = where leverage usually is for people at this pole.
  poles: {
    "N+": {
      label: "high Negative Emotionality",
      costs: "Strong emotional reactions consume energy whether or not they change anything, and they can be persuasive out of proportion to the evidence — a bad feeling about a plan is data, but you tend to experience it as a verdict.",
      growth: "The leverage is usually not in feeling less but in trusting feelings more selectively: treating a spike of worry as a prompt to check something once, not a fact about how it will go. People with this pattern often gain the most from anything that shortens recovery time — the reaction arrives regardless; how long it stays is more trainable.",
    },
    "N-": {
      label: "low Negative Emotionality",
      costs: "Calm this deep filters out real signals along with the noise. Problems that announce themselves through dread reach you late, and people in distress can read your steadiness as indifference exactly when they need evidence you care.",
      growth: "The leverage is usually in building deliberate checks to replace the alarm system you don't have — asking what a more anxious colleague would worry about here, and visibly naming others' distress even when you don't share it.",
    },
    "E+": {
      label: "high Extraversion",
      costs: "Reaching for company and stimulation by default crowds out reflection, and a strong social presence has a shadow: quieter people get talked over, and you can mistake an audience's energy for agreement.",
      growth: "The leverage is usually in subtraction: protected solitude where your thinking can finish, and deliberately measured airtime in groups — asking the quietest competent person in the room what they think, and waiting.",
    },
    "E-": {
      label: "low Extraversion",
      costs: "Staying out of the room has compounding costs — opportunities, allies, and credit flow toward the visible, and your absence gets narrated by others as disinterest or aloofness whether or not it is.",
      growth: "The leverage is usually in narrow, chosen visibility rather than general sociability: a few deliberate appearances where stakes are real — claiming your own work, one-on-ones with people who matter — buys most of what constant presence buys, at a price you can actually pay.",
    },
    "O+": {
      label: "high Openness",
      costs: "Appetite for the new taxes finishing the old: enthusiasm has a short half-life, necessary routine feels like sandpaper, and practical people quietly discount your next idea because of what happened to the last four.",
      growth: "The leverage is usually a finishing mechanism you don't have to feel like honoring — external deadlines, a partner who ships things, a hard cap on concurrent projects — so that your best ideas end as results instead of as openings.",
    },
    "O-": {
      label: "low Openness",
      costs: "Preferring the proven means your methods age with you. When a domain genuinely shifts, doubling down on what has always worked stops being prudence and starts being the risk, and useful ideas get dismissed for arriving in unfamiliar clothes.",
      growth: "The leverage is usually a small, scheduled exposure to the unfamiliar on your own terms — one new method, tool, or viewpoint at a time, evaluated by the practical standards you already trust, so that change arrives as a series of upgrades rather than a crisis.",
    },
    "A+": {
      label: "high Agreeableness",
      costs: "Defaulting to accommodation means bad deals get absorbed rather than contested, necessary criticism goes unsaid until it is too late to be useful, and the rare bad actor gets remarkably far on your extended credit.",
      growth: "The leverage is usually in learning that clean conflict is a service: the honest 'no' delivered early, the uncomfortable feedback given while it can still help. People with this pattern rarely need to be warmer; they need their warmth to stop underwriting things they don't actually agree to.",
    },
    "A-": {
      label: "low Agreeableness",
      costs: "Leading with skepticism and competition wins points and loses rooms: allies feel unsupported, conflicts escalate that didn't need to exist, and people quietly stop bringing you information because disagreement with you is expensive.",
      growth: "The leverage is usually in making the toll cheaper for others, not in softening your judgment: conceding visibly when you're wrong, letting small points go unfought, and telling the people you rate that you rate them — skepticism lands differently from someone who demonstrably keeps score fairly.",
    },
    "C+": {
      label: "high Conscientiousness",
      costs: "Order and follow-through harden into rigidity: plans survive the events that invalidated them, less structured people get judged rather than used well, and rest keeps its place at the bottom of a list that never empties.",
      growth: "The leverage is usually in building revision into the system itself — scheduled points where the plan must justify its own continuation — and in treating recovery as a commitment with the same standing as the others, because your failure mode is not sloth; it is running a good engine until it seizes.",
    },
    "C-": {
      label: "low Conscientiousness",
      costs: "Improvisation quietly bills other people — the unfinished thing becomes someone else's emergency — and it caps your own ceiling: long games that reward boring increments go to more organized players, however much less talented.",
      growth: "The leverage is usually external structure, not summoned willpower: deadlines owned by other people, visible commitments, environments where the default action is the right one. People with this pattern do their best work inside scaffolding someone else maintains — building that scaffolding deliberately is the move.",
    },
  },

  // Facet prose. Same contract as domains; growth notes are used by the
  // development section when a facet is among the profile's most extreme.
  // Note on N facets: these measure ordinary trait variation in emotional
  // style, not clinical conditions — the wording below is deliberately
  // non-diagnostic, and about.html states the boundary explicitly.
  facets: {
    N1: { // Anxiety
      bands: {
        low: "You rarely rehearse disasters. Where others scan for what could go wrong, you tend to wait until something actually does — which saves enormous energy and occasionally means the smoke alarm stays silent while something smolders.",
        mid: "You tend to worry when there is something concrete to worry about and stop when it resolves. Anticipation of real threats works roughly as designed, without much free-floating dread left over between them.",
        high: "You tend to live with the volume up on what could go wrong — worry arrives early, attaches to specifics, and is hard to dismiss with reassurance. It makes you thorough about risks, at the price of paying alarm on many things that never happen.",
      },
      growthLow: "Borrow other people's caution deliberately: before committing, ask what the most anxious competent person you know would flag, since your own alarm rarely rings early.",
      growthHigh: "Practice converting worry into one concrete check, then closing the file. The worry will return; the skill is making each visit shorter, not preventing the knock.",
    },
    N2: { // Anger
      bands: {
        low: "Frustrations tend to slide off you — being cut off, contradicted, or shortchanged rarely raises your temperature. People experience you as unprovokable, and sometimes take advantage of exactly that.",
        mid: "You tend to get angry in proportion to the offense — irritation at real obstruction, quickly spent. Neither a fuse people tiptoe around nor a doormat; how you use the anger matters more than its amount.",
        high: "You tend to run hot: unfairness, incompetence, and obstruction register fast and physically. That heat can power real advocacy — anger is the emotion that notices injustice — but people around you learn to manage you, and that management has a price you don't always see.",
      },
      growthLow: "Notice when equanimity underprices real violations. Some situations deserve visible objection; supplying it protects people who cannot afford to object themselves.",
      growthHigh: "Delay expression, not the noticing: the first sentence composed after sixty seconds is usually the one that gets the grievance actually fixed.",
    },
    N3: { // Depression (trait gloom, not the clinical condition)
      bands: {
        low: "Your outlook tends to spring back — discouragement visits briefly and leaves. You rarely doubt that effort will pay off, which makes persistence cheap for you and can make you puzzled by people for whom it is expensive.",
        mid: "You tend toward an ordinary mix: stretches of fine punctuated by genuinely flat patches when things go badly, lifting as circumstances do. Your outlook mostly follows events rather than leading them.",
        high: "You tend toward a gray filter — discouragement comes easily, satisfaction quickly fades, and your own efforts look smaller to you than they look to others. (This measures an ordinary trait disposition, not a diagnosis.) The realistic edge: you're rarely blindsided by disappointment others didn't see coming.",
      },
      growthLow: "Your optimism is load-bearing for people around you — but check it before dismissing someone's discouragement as attitude; their forecast may contain information yours filtered out.",
      growthHigh: "Track outcomes against your forecasts on paper. People with this pattern systematically under-predict their own results, and the written record becomes a counterweight the mood cannot argue with. If low mood is persistent and heavy, talking to a professional is a better tool than any quiz.",
    },
    N4: { // Self-Consciousness
      bands: {
        low: "Being watched, judged, or introduced barely registers — you tend to walk into rooms of strangers without composing yourself first. The blind spot: you can miss how exposed a situation feels to others, and occasionally how you're actually landing.",
        mid: "You tend to feel the eyes of the room in proportion to the stakes — composed in routine company, keyed up when judgment is real. Awkwardness visits but doesn't move in.",
        high: "You tend to feel observed even when attention is elsewhere — replaying remarks, anticipating embarrassment, editing yourself before speaking. That radar makes you genuinely considerate and rarely oblivious; it also spends a lot of your bandwidth on an audience that is mostly imaginary.",
      },
      growthLow: "Ask for candid feedback on how you come across; your comfort means your self-model gets fewer automatic updates than most people's.",
      growthHigh: "Run the experiment of doing the mildly embarrassing thing and counting actual consequences. The radar recalibrates on evidence, and the evidence is almost always gentler than the forecast.",
    },
    N5: { // Immoderation
      bands: {
        low: "Cravings tend to ask you politely — you can leave the dessert, the sale, the third episode without a struggle. Delayed gratification is cheap for you, which can make you quietly judgmental about people for whom it visibly isn't.",
        mid: "You tend to resist temptation when it matters and indulge when it doesn't cost much, with occasional lapses you notice but don't spiral over. Willpower is a usable if imperfect tool.",
        high: "You tend to feel wants at full volume — food, purchases, distractions, one-more of whatever is good — and the argument between impulse and intention gets loud. You likely bring real appetite and spontaneity to life; the tax is paid later, and usually by you.",
      },
      growthLow: "Your discipline scales when you stop moralizing it: designing environments for others (and yourself) beats admiring your own restraint.",
      growthHigh: "Stop negotiating with impulses in the moment — you lose at that table. Arrange the environment so the default is the intended choice: what isn't in the house can't be eaten at midnight.",
    },
    N6: { // Vulnerability
      bands: {
        low: "Under real pressure you tend to get calmer and more mechanical — triage first, feelings later, if at all. You're who people look at when things break. The cost: you can underestimate loads (your own and others') until something actually cracks.",
        mid: "You tend to cope with ordinary crises and wobble in extraordinary ones — pressure narrows your thinking somewhat but rarely swamps it. With preparation, your steadiness under stress is buildable.",
        high: "You tend to feel overwhelmed when several things go wrong at once — pressure scatters your thinking, and needing help arrives faster than for most. The honest edge: you ask for help earlier, which often beats the confident person who asks too late.",
      },
      growthLow: "Your capacity invites overload — build gauges you'll believe (sleep, error rate) since strain won't announce itself through feelings first.",
      growthHigh: "Rehearse crises in advance: checklists and pre-decided first moves hold up when composure doesn't. Preparation is the version of calm you can build by hand.",
    },
    E1: { // Friendliness
      bands: {
        low: "Warmth, for you, tends to be earned rather than issued at the door — you make few overtures and take your time with new people. Those inside the wall get a durable loyalty; those outside often misread the wall as dislike.",
        mid: "You tend to warm at a moderate rate — friendly on contact without instant intimacy, letting closeness grow where it's reciprocated. Few doors slammed, few flung open.",
        high: "You tend to like people on sight and show it — warmth arrives before evidence, and strangers leave conversations with you feeling chosen. The exposure: your warmth reads as deep friendship to people you consider acquaintances, and the gap eventually surprises them.",
      },
      growthLow: "Tell the people inside the wall that they're inside it. Your warmth is real but under-broadcast, and unspoken loyalty does less good than spoken.",
      growthHigh: "Mind the promises your warmth implies. Affection issued this freely creates expectations of time you may not have; clarity about capacity protects the friendships that matter.",
    },
    E2: { // Gregariousness
      bands: {
        low: "Crowds spend your energy rather than paying it — you tend to leave parties early, decline more than you accept, and prefer people in ones and twos. Nothing about this needs fixing; it only becomes a cost when belonging is decided in rooms you skipped.",
        mid: "You tend to enjoy gatherings that have a point and people you know, while pure milling-around leaves you checking the time. Group appetite: present, finite.",
        high: "You tend to seek the throng — the party, the packed table, the group chat that never sleeps. Being among many is its own food for you. The trade: crowds are where you're fed but rarely where you're known, and depth requires leaving them sometimes.",
      },
      growthLow: "Attend the occasional gathering as infrastructure — fifteen deliberate minutes at the thing you'd skip keeps you in networks that quietly decide things.",
      growthHigh: "Convert a fraction of crowd-time into pairs. The crowd loves you back diffusely; individual attention is where your social energy compounds.",
    },
    E3: { // Assertiveness
      bands: {
        low: "You tend to let others set direction — speaking when asked, leading only when no one else will. Your influence travels through quality and quiet persistence instead. The cost is decisions made without your input that you were right about.",
        mid: "You tend to step forward when you know the terrain and step back when you don't — comfortable directing within your competence without needing the wheel everywhere.",
        high: "You tend to take charge reflexively — speaking first, deciding fast, filling leadership vacuums before others notice one. Groups move because you're in them. The shadow: your certainty can outrun your evidence, and quieter, better-informed people learn it's easier to let you drive.",
      },
      growthLow: "Pick the few decisions where you're demonstrably the best-informed person, and practice stating a position first there — influence is a skill trained on small stakes.",
      growthHigh: "Measure your airtime and cut it deliberately. Ask the quietest competent person for their view before giving yours; your influence grows when it's visibly steerable.",
    },
    E4: { // Activity Level
      bands: {
        low: "You tend to run at a deliberate pace — few things scheduled, full engagement with each, real recovery between. A packed calendar reads to you as a design flaw. Fast-paced settings will read your pace as a lack of hunger; it usually isn't.",
        mid: "You tend to keep a sustainable load — busy without buzzing, capable of sprints without living in one. Pace is one of your adjustable dials rather than a fixed trait.",
        high: "You tend to run full — a schedule that alarms other people feels like traction to you, and empty hours get filled almost immediately. You get a lot done. The failure mode is confusing motion with progress and starving the slow work (thinking, recovering, noticing) that doesn't feel like doing.",
      },
      growthLow: "Protect your pace but declare it — commitments with explicit timelines read as reliability, while an undeclared slow pace reads as neglect.",
      growthHigh: "Schedule emptiness like a meeting. The instinct to fill every hour is exactly why the unfilled ones — where thinking happens — need infrastructure.",
    },
    E5: { // Excitement-Seeking
      bands: {
        low: "Thrill has little pull on you — you tend to find crowds, noise, and risk-for-fun tiring rather than enlivening, and your good time is usually calmer than the advertised one. The mild cost: novelty-rich experiences that would actually suit you get declined by reflex.",
        mid: "You tend to enjoy a jolt of intensity within margins — the occasional adventure, chosen and bounded, without needing stimulation as a steady diet.",
        high: "You tend to need voltage — noise, speed, risk, the plan that might not work. Flat calm reads as boredom, and boredom is genuinely aversive to you. You say yes to experiences most people only talk about; the actuarial cost is that some of those yeses were the table's worst bet.",
      },
      growthLow: "Once in a while, say yes to the mildly-too-loud thing on purpose — your forecast of 'tiring' is occasionally just unfamiliarity wearing a disguise.",
      growthHigh: "Route the appetite into channels with a floor: chosen risks that can fail without ruin. The need for voltage isn't going anywhere; where it discharges is up to you.",
    },
    E6: { // Cheerfulness
      bands: {
        low: "Your baseline tends toward even rather than up — enthusiasm is real but rarely loud, and relentless positivity reads to you as noise. People learn your rare delight means something; they may also under-read how much you're actually enjoying.",
        mid: "You tend to run on ordinary sunshine — genuinely lifted by good things, not required to perform lift when it isn't there. Your cheer is believable because it's conditional.",
        high: "You tend to run warm — laughter comes easily, good moods are your resting state, and you notice delight where others walk past it. Rooms are lighter with you in them. The blind spot: your buoyancy can read as not taking pain seriously, especially to people mid-struggle.",
      },
      growthLow: "Report your enjoyment occasionally in words, since your face isn't doing it — people calibrate to signals, and yours under-transmit.",
      growthHigh: "In others' hard moments, lead with gravity and save the silver lining. Your instinct to lift can land as dismissal precisely when stakes are highest.",
    },
    O1: { // Imagination
      bands: {
        low: "Your attention tends to stay with what's actually in front of you — daydreams are rare and fantasy holds little pull. You're hard to distract with hypotheticals; you can also be slow to entertain the scenario that hasn't happened yet but will.",
        mid: "You tend to imagine in service of something — rehearsing conversations, picturing plans — without the inner world competing against the outer one for residency.",
        high: "You tend to live with a second world running — vivid what-ifs, elaborate inner narratives, attention that slides from the meeting to somewhere better. It's where your originality comes from, and it has rent: the present moment is chronically underattended.",
      },
      growthLow: "When planning, force one deliberately unrealistic scenario into consideration — your realism filters out futures that occasionally happen anyway.",
      growthHigh: "Give the inner world scheduled time and the outer world protected time. Capture systems (write it down, return later) let you stay in the room you're in.",
    },
    O2: { // Artistic Interests
      bands: {
        low: "Aesthetics tend to rank low in your budget — art, music, and beauty are pleasant enough but rarely move you, and effort spent on how things look strikes you as effort misdirected from how they work.",
        mid: "You tend to respond to beauty when it crosses your path without organizing your life around pursuing it — moved by the sunset, not planning trips for one.",
        high: "You tend to be porous to beauty — music, light, proportion, the well-made thing — and starved in environments that ignore it. This is real perceptual equipment, not decoration. The friction: budgets and schedules are set by people who can't see what you see, and 'it matters aesthetically' rarely wins those arguments unaided.",
      },
      growthLow: "Borrow aesthetic judgment where it carries function — design, writing, presentation — the way you'd hire any expertise you don't keep in stock.",
      growthHigh: "Learn to translate aesthetic judgment into consequence language — 'this confuses users', 'this reads as cheap' — so what you perceive can survive contact with a spreadsheet.",
    },
    O3: { // Emotionality (attunement to one's own feelings)
      bands: {
        low: "Your feelings tend to run backstage — present, but not narrated. You often know something's off before knowing what, and 'how do you feel about it' is a genuinely hard question rather than an invitation.",
        mid: "You tend to read your own weather adequately — aware of feelings as they happen, able to name the big ones, without emotion becoming the main text of your life.",
        high: "You tend to receive your inner life in high resolution — feelings arrive labeled, layered, and significant, and you treat them as information worth consulting. That fluency deepens relationships; the risk is upgrading every feeling into a fact that must mean something.",
      },
      growthLow: "Practice naming the feeling once a day, badly. The vocabulary comes with use, and unnamed feelings still steer — just without your oversight.",
      growthHigh: "Distinguish signal from significance: every feeling is real; not every feeling is about what it claims to be about. Sometimes irritation is just hunger.",
    },
    O4: { // Adventurousness
      bands: {
        low: "You tend to like your routines because they're yours and they work — the usual order, the known route, the restaurant where you have a dish. Novelty is a cost paid, not a good bought. When change comes anyway, it hits you harder for being un-rehearsed.",
        mid: "You tend to mix staples with experiments — new things attempted from a stable base, at a rate you control. Change is tolerable when it's chosen.",
        high: "You tend to treat unfamiliarity as an invitation — new places, new methods, new food, preferably soon. Repetition wears on you faster than risk does. You accumulate genuinely broad experience; what you struggle to accumulate is the compounding returns of staying anywhere long.",
      },
      growthLow: "Schedule small, reversible novelty — a different route, a new tool for one week. Variety in low doses is insurance against the change you don't choose.",
      growthHigh: "Pick one or two domains to deliberately not vary — depth is bought with repetition, and some returns only arrive in year three.",
    },
    O5: { // Intellect (appetite for ideas — not ability)
      bands: {
        low: "You tend to want ideas that cash out — theory without application reads as stalling, and philosophical conversation as a game other people enjoy. (This measures appetite for abstraction, not ability.) Your thinking stays usefully concrete; occasionally the useful abstraction gets dismissed with the useless ones.",
        mid: "You tend to enjoy ideas with a purpose — following theory when it leads somewhere, dropping it when it circles. Abstraction is a tool you pick up and put down.",
        high: "You tend to chase ideas for the pleasure of it — arguments, models, thought experiments, the why under the why. (This measures appetite, not ability.) You'll understand things nobody asked you to understand; the tax is that understanding can substitute for acting, indefinitely, while feeling like work.",
      },
      growthLow: "When experts insist an abstraction matters, rent it for an afternoon — some concrete-looking problems are abstract problems wearing overalls.",
      growthHigh: "Attach a 'so what' deadline to intellectual rabbit holes: understanding that never touches a decision is entertainment — fine, as long as it's budgeted as entertainment.",
    },
    O6: { // Liberalism (in the IPIP sense: challenge vs. tradition)
      bands: {
        low: "You tend to give standing arrangements the benefit of the doubt — rules, customs, and authorities earned their place, and proposals to overturn them carry the burden of proof. You conserve real accumulated wisdom; occasionally you defend a fence nobody remembers the reason for.",
        mid: "You tend to take conventions case by case — respecting what demonstrably works, questioning what demonstrably doesn't, uncomfortable with both reflexive rebellion and reflexive deference.",
        high: "You tend to treat 'we've always done it this way' as an opening bid — authority gets questioned, defaults get challenged, and sacred cows look to you like cows. You catch genuinely outdated arrangements early; the cost is spending credibility on fights where the fence was, in fact, load-bearing.",
      },
      growthLow: "Before defending an arrangement, try stating what it protects in one sentence. If you can't, you've found either a fence worth studying or one worth removing.",
      growthHigh: "Apply Chesterton's rule: earn the removal by explaining why the fence was built. Your challenges land harder when the occasional one concludes 'actually, keep it.'",
    },
    A1: { // Trust
      bands: {
        low: "You tend to price in the possibility that people are performing — motives get audited, stories get checked, and confidence is extended on evidence, not manner. You're rarely conned; you also tax every honest person with the screening built for the dishonest few.",
        mid: "You tend to open with provisional trust and adjust on data — neither an easy mark nor a fortress. Mostly this calibration runs quietly and works.",
        high: "You tend to assume good faith until shown otherwise — people read as basically honest, and suspicion feels like a foreign language. This makes cooperation cheap and fast around you; it also means the rare bad actor operates on generous credit, and the disillusionment, when it comes, goes deep.",
      },
      growthLow: "Extend calibrated trust on purpose — small, bounded, observed. Trust is also a signal that recruits trustworthiness; permanent audit recruits performance instead.",
      growthHigh: "Keep the warmth and add verification for stakes that matter — references checked, terms written. Trust plus paperwork is still trust; it's just trust that survives.",
    },
    A2: { // Morality (candor vs. strategic self-presentation)
      bands: {
        low: "You tend to treat self-presentation as a legitimate tool — information gets released strategically, flattery gets deployed, and you're comfortable letting people believe convenient things. It's effective, and it compounds into a reputation that arrives before you do.",
        mid: "You tend to run honest-by-default with tactical exceptions — straightforward in substance, diplomatic in packaging, drawing a line at outright deception.",
        high: "You tend toward the unvarnished version — what you say maps closely onto what you think, manipulation feels physically uncomfortable, and you'd rather lose a point than shade the truth. People bank on your word. The cost: candor this reliable is exploitable by anyone who knows you'll show your cards.",
      },
      growthLow: "Pick a few relationships to run fully straight, no management. Strategic presentation everywhere means nobody's endorsement of you is quite real — including the ones you'd want.",
      growthHigh: "Candor doesn't require completeness on demand. 'I'm not ready to say' is honest; learning it protects you from people who weaponize your transparency.",
    },
    A3: { // Altruism
      bands: {
        low: "Your help tends to be transactional or scheduled rather than reflexive — you notice needs without feeling automatically drafted, and guard your time accordingly. Nothing burned out, nothing resented; occasionally, someone who needed you reads the ledger and goes elsewhere.",
        mid: "You tend to help readily inside your circle and by decision outside it — generous without being conscripted by every need that walks past.",
        high: "You tend to experience others' needs as assignments — helping is reflexive, saying no feels like a moral event, and your time is common property in ways you didn't exactly agree to. People genuinely rely on you. The books don't balance: reflexive givers are systematically over-drawn by whoever asks most.",
      },
      growthLow: "Automate some generosity — recurring commitments that don't renegotiate themselves each time. It removes the per-instance decision where your default is no.",
      growthHigh: "Notice who never asks. Reflexive helping allocates you by loudness, and the quiet person drowning politely gets missed while the squeaky wheel gets you again.",
    },
    A4: { // Cooperation
      bands: {
        low: "You tend to hold your position under social pressure — disagreement doesn't scare you, and being outnumbered isn't an argument. Groups with you avoid bad consensus; they also revisit some questions that were, honestly, fine as decided.",
        mid: "You tend to yield on preferences and hold on principles — a distinction that keeps most of your conflicts short and most of your concessions cheap.",
        high: "You tend to defuse rather than contest — softening disagreements, finding the version everyone can sign, absorbing small losses to keep the peace. Groups run smoothly with you in them. The invoice: positions you quietly abandoned that were right, and a 'fine' that people eventually learn means nothing.",
      },
      growthLow: "Concede something visible occasionally — not the principle, the point. It buys back credibility that makes your stands more expensive to dismiss.",
      growthHigh: "Practice sustaining one open disagreement per week without smoothing it. Conflict held calmly is a skill, and 'agreeable' people who learn it become genuinely formidable.",
    },
    A5: { // Modesty
      bands: {
        low: "You tend to state your worth at market rate or above — comfortable claiming credit, unembarrassed by self-promotion, unwilling to pretend the work wasn't yours. Nothing of yours goes unnoticed; some of it gets discounted precisely because you appraised it yourself.",
        mid: "You tend to let the work speak while making sure it's audible — accurate about your contributions without needing them relitigated at every meeting.",
        high: "You tend to round yourself down — deflecting praise, crediting the team, describing hard-won results as luck. It reads as graciousness, and it is. It's also, in aggregate, misinformation: decision-makers act on stated records, and yours is understated by its own author.",
      },
      growthLow: "Credit specific others in specific terms, on the record. Generosity with attribution costs you little and rehabilitates how your self-advocacy is heard.",
      growthHigh: "Report your work in flat, factual sentences — not brags, records. 'I built X; it did Y' isn't immodest; it's the minimum viable accuracy your results are owed.",
    },
    A6: { // Sympathy
      bands: {
        low: "You tend to meet suffering with policy questions rather than feelings — what's effective, what's deserved, what incentives this creates. Your compassion is administrated, not felt, which makes you clear-eyed in triage and cold-reading in person.",
        mid: "You tend to feel for people in proportion and context — moved by need, still able to ask whether the help helps. Heart engaged, head retained.",
        high: "You tend to feel others' pain at close to first-person volume — suffering recruits you, hard-luck stories get through, and 'they brought it on themselves' has never once settled the matter for you. You're who people find in disaster. The exposure: sympathy this available is a resource others will spend, some of them strategically.",
      },
      growthLow: "In person, lead with acknowledgment before analysis — 'that's hard' costs three words and determines whether your excellent advice gets heard at all.",
      growthHigh: "Let sympathy set the direction and evidence set the route — the feeling that recruits you is a compass, not a map, and effectiveness is how care keeps its promises.",
    },
    C1: { // Self-Efficacy
      bands: {
        low: "You tend to under-rate your own machinery — approaching tasks braced for failure, surprised by your successes, deferring to confidence in others that isn't always better founded. The one asset: you prepare for problems the confident never see coming.",
        mid: "You tend to trust yourself on familiar ground and doubt yourself honestly past its edge — a self-assessment that mostly tracks the evidence, which is rarer than it sounds.",
        high: "You tend to assume you'll figure it out — obstacles read as puzzles, not verdicts, and 'can you handle this?' has a standing answer. That assumption is self-fulfilling often enough to be an asset. Its edge: overcommitment, and a quiet impatience with people who need convincing they can do things.",
      },
      growthLow: "Keep a plain record of what you attempted and how it went. Your self-forecast runs below your actual hit rate, and only evidence — not encouragement — closes that gap.",
      growthHigh: "Before big commitments, ask what would have to be true for this to fail, and who has seen it fail before. Confidence does your best work with a designated skeptic on retainer.",
    },
    C2: { // Orderliness
      bands: {
        low: "Your systems tend to be archaeological — piles with strata, tabs beyond counting, a filing method best described as 'somewhere.' You function anyway, sometimes brilliantly; the tax is paid in searching time and in other people's inability to interface with your setup.",
        mid: "You tend to keep order where order pays — the shared calendar maintained, the sock drawer left to fate. Tidiness as a tool rather than a virtue or a struggle.",
        high: "You tend to need things in their places — labeled, sorted, findable in the dark. Your environments run on visible logic, and everyone benefits from it. The over-run: sorting can impersonate working, and disorder in others can register as a character flaw when it's usually just a different filing system.",
      },
      growthLow: "Buy order at the interfaces only — the shared drive, the handoff document. Full personal reform is unnecessary; legibility where others depend on you is not.",
      growthHigh: "Timebox maintenance and check what the system is for. When tidying starts displacing the work it was meant to serve, the system has quietly become the client.",
    },
    C3: { // Dutifulness
      bands: {
        low: "You tend to treat obligations as opening positions — rules bind insofar as they make sense, promises flex under changed circumstances, and guilt has little leverage on you. You're immune to duty-based manipulation; others learn to get your commitments in writing.",
        mid: "You tend to keep your word with sensible exceptions — reliable on real commitments, unwilling to let 'but you said' override 'but everything changed.'",
        high: "You tend to experience your word as binding — obligations weigh physically, rules apply to you even when unenforced, and letting someone down costs sleep. People build on your commitments without checking. The exploit: duty this reliable gets loaded by exactly the people who track who can't say no.",
      },
      growthLow: "Flag your flexibility in advance — 'I'll aim for this, and tell you early if it moves' keeps your adaptiveness from being experienced as betrayal.",
      growthHigh: "Audit your obligations annually: which did you choose, which merely accumulated? Duty is honorable toward chosen commitments; toward accumulated ones it's just unpaid staffing.",
    },
    C4: { // Achievement-Striving
      bands: {
        low: "You tend to work to live — 'good enough' arrives early and honestly, ambition-as-lifestyle looks exhausting from where you sit, and your definition of enough is actually yours. The friction is external: institutions run by strivers keep mistaking your contentment for a defect.",
        mid: "You tend to push hard for goals you've adopted and coast honestly between them — driven in bursts, at peace with plateaus, suspicious of treadmills.",
        high: "You tend to run on a next thing — goals stack, standards ratchet, and rest has to justify itself before a committee that keeps minutes. You accomplish a great deal. The fine print: 'enough' recedes at exactly your walking speed, and arrival keeps getting rescheduled.",
      },
      growthLow: "Defend your 'enough' out loud occasionally — articulated contentment reads as philosophy; silent contentment gets misread as drift, including sometimes by you.",
      growthHigh: "Write down what 'done' looks like before starting, and honor it at arrival. A finish line that moves when you approach isn't a standard; it's a treadmill with paperwork.",
    },
    C5: { // Self-Discipline
      bands: {
        low: "Starting tends to be your expensive step — the task waits while adjacent, easier things get strangely attractive, and deadlines end up doing the ignition your intentions couldn't. Your sprints can be spectacular; the schedule they arrive on is the problem.",
        mid: "You tend to grind when it counts and drift when it doesn't — capable of unglamorous follow-through for real stakes, honest about coasting otherwise.",
        high: "You tend to just start — the report, the workout, the tedious middle of things, carried by some internal flywheel that doesn't require mood. It's the least glamorous trait and the one that compounds hardest. The blind spot: machinery this good rarely asks whether the thing being ground through still deserves it.",
      },
      growthLow: "Shrink the ignition, not the task: two minutes, worst part first, somebody expecting output. Discipline you don't have can be borrowed from structure you can build.",
      growthHigh: "Point the flywheel deliberately — review the target before adding effort, since your follow-through will faithfully finish things not worth finishing.",
    },
    C6: { // Cautiousness
      bands: {
        low: "You tend to decide at speed — options get committed to while others are still listing them, and your relationship with consequences is pay-as-you-go. You capture opportunities that deliberation would have watched expire; you also own a museum of decisions a weekend's thought would have vetoed.",
        mid: "You tend to size deliberation to stakes — quick on the reversible, slow on the permanent, mostly not confusing which is which.",
        high: "You tend to think in consequences — second-order effects, worst cases, the question behind the question, all consulted before you move. Your decisions age well. Their timing doesn't always: some options are only open briefly, and 'still deciding' is itself a decision with a price tag.",
      },
      growthLow: "Install one speed bump for irreversible calls only — a 24-hour rule, a phone-a-skeptic. Keep your speed everywhere else; it's an asset with better brakes.",
      growthHigh: "Set decision deadlines with defaults — 'by Friday, else option A.' Your analysis is excellent; giving it a closing bell converts quality into actual outcomes.",
    },
  },
};
