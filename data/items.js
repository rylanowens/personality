// IPIP-NEO-120 item data (public domain items from the International Personality
// Item Pool; 120-item form assembled by John A. Johnson, 2014).
//
// Provenance (retrieved 2026-08-30, cross-checked between two independent
// packagings of Johnson's instrument):
//   1. @alheimsins/b5-johnson-120-ipip-neo-pi-r v6.0.13 (npm, MIT-licensed
//      packaging of the public-domain items) — item texts, facet map, keying.
//   2. five-factor-e v1.13.1 (PyPI, MIT; Johnson's program ported by
//      D. Kholia / NeuroQuest, credited to J. A. Johnson) — administration
//      order, reverse-keyed item table, facet slot structure.
// Agreement: 120/120 facet assignments and keying identical; 119/120 texts
// byte-identical (item 58 differs "and"/"or" between packagings; the IPIP
// original wording "and" is used here).
//
// Order is Johnson's administration order: items cycle through the 30 facets
// (N1, E1, O1, A1, C1, N2, ...), so item n belongs to facet slot ((n-1) % 30).
// keyed: 1 = agreement raises the facet score; -1 = reverse-keyed (6 - response).
// IPIP items are public domain; see about.html and docs/quiz-design.md.

window.QUIZ_ITEMS = {
  version: 1,
  scale: [
    "Very inaccurate",
    "Moderately inaccurate",
    "Neither accurate nor inaccurate",
    "Moderately accurate",
    "Very accurate"
  ],
  domainOrder: ["N", "E", "O", "A", "C"],
  domainNames: {
    "N": "Negative Emotionality",
    "E": "Extraversion",
    "O": "Openness",
    "A": "Agreeableness",
    "C": "Conscientiousness"
},
  facetNames: {
    "N": [
        "Anxiety",
        "Anger",
        "Depression",
        "Self-Consciousness",
        "Immoderation",
        "Vulnerability"
    ],
    "E": [
        "Friendliness",
        "Gregariousness",
        "Assertiveness",
        "Activity Level",
        "Excitement-Seeking",
        "Cheerfulness"
    ],
    "O": [
        "Imagination",
        "Artistic Interests",
        "Emotionality",
        "Adventurousness",
        "Intellect",
        "Liberalism"
    ],
    "A": [
        "Trust",
        "Morality",
        "Altruism",
        "Cooperation",
        "Modesty",
        "Sympathy"
    ],
    "C": [
        "Self-Efficacy",
        "Orderliness",
        "Dutifulness",
        "Achievement-Striving",
        "Self-Discipline",
        "Cautiousness"
    ]
},
  // Instructed-response attention checks, interleaved by quiz.js at these
  // 1-based display positions. Never scored; used only for the honesty flag.
  attention: [
    { position: 45, text: "To show you are reading each statement, answer \"Moderately inaccurate\" here.", expected: 2 },
    { position: 90, text: "This statement is a reading check. Answer \"Very accurate\" here.", expected: 5 }
  ],
  items: [
    { n: 1, text: "Worry about things.", domain: "N", facet: 1, keyed: 1 },
    { n: 2, text: "Make friends easily.", domain: "E", facet: 1, keyed: 1 },
    { n: 3, text: "Have a vivid imagination.", domain: "O", facet: 1, keyed: 1 },
    { n: 4, text: "Trust others.", domain: "A", facet: 1, keyed: 1 },
    { n: 5, text: "Complete tasks successfully.", domain: "C", facet: 1, keyed: 1 },
    { n: 6, text: "Get angry easily.", domain: "N", facet: 2, keyed: 1 },
    { n: 7, text: "Love large parties.", domain: "E", facet: 2, keyed: 1 },
    { n: 8, text: "Believe in the importance of art.", domain: "O", facet: 2, keyed: 1 },
    { n: 9, text: "Use others for my own ends.", domain: "A", facet: 2, keyed: -1 },
    { n: 10, text: "Like to tidy up.", domain: "C", facet: 2, keyed: 1 },
    { n: 11, text: "Often feel blue.", domain: "N", facet: 3, keyed: 1 },
    { n: 12, text: "Take charge.", domain: "E", facet: 3, keyed: 1 },
    { n: 13, text: "Experience my emotions intensely.", domain: "O", facet: 3, keyed: 1 },
    { n: 14, text: "Love to help others.", domain: "A", facet: 3, keyed: 1 },
    { n: 15, text: "Keep my promises.", domain: "C", facet: 3, keyed: 1 },
    { n: 16, text: "Find it difficult to approach others.", domain: "N", facet: 4, keyed: 1 },
    { n: 17, text: "Am always busy.", domain: "E", facet: 4, keyed: 1 },
    { n: 18, text: "Prefer variety to routine.", domain: "O", facet: 4, keyed: 1 },
    { n: 19, text: "Love a good fight.", domain: "A", facet: 4, keyed: -1 },
    { n: 20, text: "Work hard.", domain: "C", facet: 4, keyed: 1 },
    { n: 21, text: "Go on binges.", domain: "N", facet: 5, keyed: 1 },
    { n: 22, text: "Love excitement.", domain: "E", facet: 5, keyed: 1 },
    { n: 23, text: "Love to read challenging material.", domain: "O", facet: 5, keyed: 1 },
    { n: 24, text: "Believe that I am better than others.", domain: "A", facet: 5, keyed: -1 },
    { n: 25, text: "Am always prepared.", domain: "C", facet: 5, keyed: 1 },
    { n: 26, text: "Panic easily.", domain: "N", facet: 6, keyed: 1 },
    { n: 27, text: "Radiate joy.", domain: "E", facet: 6, keyed: 1 },
    { n: 28, text: "Tend to vote for liberal political candidates.", domain: "O", facet: 6, keyed: 1 },
    { n: 29, text: "Sympathize with the homeless.", domain: "A", facet: 6, keyed: 1 },
    { n: 30, text: "Jump into things without thinking.", domain: "C", facet: 6, keyed: -1 },
    { n: 31, text: "Fear for the worst.", domain: "N", facet: 1, keyed: 1 },
    { n: 32, text: "Feel comfortable around people.", domain: "E", facet: 1, keyed: 1 },
    { n: 33, text: "Enjoy wild flights of fantasy.", domain: "O", facet: 1, keyed: 1 },
    { n: 34, text: "Believe that others have good intentions.", domain: "A", facet: 1, keyed: 1 },
    { n: 35, text: "Excel in what I do.", domain: "C", facet: 1, keyed: 1 },
    { n: 36, text: "Get irritated easily.", domain: "N", facet: 2, keyed: 1 },
    { n: 37, text: "Talk to a lot of different people at parties.", domain: "E", facet: 2, keyed: 1 },
    { n: 38, text: "See beauty in things that others might not notice.", domain: "O", facet: 2, keyed: 1 },
    { n: 39, text: "Cheat to get ahead.", domain: "A", facet: 2, keyed: -1 },
    { n: 40, text: "Often forget to put things back in their proper place.", domain: "C", facet: 2, keyed: -1 },
    { n: 41, text: "Dislike myself.", domain: "N", facet: 3, keyed: 1 },
    { n: 42, text: "Try to lead others.", domain: "E", facet: 3, keyed: 1 },
    { n: 43, text: "Feel others' emotions.", domain: "O", facet: 3, keyed: 1 },
    { n: 44, text: "Am concerned about others.", domain: "A", facet: 3, keyed: 1 },
    { n: 45, text: "Tell the truth.", domain: "C", facet: 3, keyed: 1 },
    { n: 46, text: "Am afraid to draw attention to myself.", domain: "N", facet: 4, keyed: 1 },
    { n: 47, text: "Am always on the go.", domain: "E", facet: 4, keyed: 1 },
    { n: 48, text: "Prefer to stick with things that I know.", domain: "O", facet: 4, keyed: -1 },
    { n: 49, text: "Yell at people.", domain: "A", facet: 4, keyed: -1 },
    { n: 50, text: "Do more than what's expected of me.", domain: "C", facet: 4, keyed: 1 },
    { n: 51, text: "Rarely overindulge.", domain: "N", facet: 5, keyed: -1 },
    { n: 52, text: "Seek adventure.", domain: "E", facet: 5, keyed: 1 },
    { n: 53, text: "Avoid philosophical discussions.", domain: "O", facet: 5, keyed: -1 },
    { n: 54, text: "Think highly of myself.", domain: "A", facet: 5, keyed: -1 },
    { n: 55, text: "Carry out my plans.", domain: "C", facet: 5, keyed: 1 },
    { n: 56, text: "Become overwhelmed by events.", domain: "N", facet: 6, keyed: 1 },
    { n: 57, text: "Have a lot of fun.", domain: "E", facet: 6, keyed: 1 },
    { n: 58, text: "Believe that there is no absolute right and wrong.", domain: "O", facet: 6, keyed: 1 },
    { n: 59, text: "Feel sympathy for those who are worse off than myself.", domain: "A", facet: 6, keyed: 1 },
    { n: 60, text: "Make rash decisions.", domain: "C", facet: 6, keyed: -1 },
    { n: 61, text: "Am afraid of many things.", domain: "N", facet: 1, keyed: 1 },
    { n: 62, text: "Avoid contacts with others.", domain: "E", facet: 1, keyed: -1 },
    { n: 63, text: "Love to daydream.", domain: "O", facet: 1, keyed: 1 },
    { n: 64, text: "Trust what people say.", domain: "A", facet: 1, keyed: 1 },
    { n: 65, text: "Handle tasks smoothly.", domain: "C", facet: 1, keyed: 1 },
    { n: 66, text: "Lose my temper.", domain: "N", facet: 2, keyed: 1 },
    { n: 67, text: "Prefer to be alone.", domain: "E", facet: 2, keyed: -1 },
    { n: 68, text: "Do not like poetry.", domain: "O", facet: 2, keyed: -1 },
    { n: 69, text: "Take advantage of others.", domain: "A", facet: 2, keyed: -1 },
    { n: 70, text: "Leave a mess in my room.", domain: "C", facet: 2, keyed: -1 },
    { n: 71, text: "Am often down in the dumps.", domain: "N", facet: 3, keyed: 1 },
    { n: 72, text: "Take control of things.", domain: "E", facet: 3, keyed: 1 },
    { n: 73, text: "Rarely notice my emotional reactions.", domain: "O", facet: 3, keyed: -1 },
    { n: 74, text: "Am indifferent to the feelings of others.", domain: "A", facet: 3, keyed: -1 },
    { n: 75, text: "Break rules.", domain: "C", facet: 3, keyed: -1 },
    { n: 76, text: "Only feel comfortable with friends.", domain: "N", facet: 4, keyed: 1 },
    { n: 77, text: "Do a lot in my spare time.", domain: "E", facet: 4, keyed: 1 },
    { n: 78, text: "Dislike changes.", domain: "O", facet: 4, keyed: -1 },
    { n: 79, text: "Insult people.", domain: "A", facet: 4, keyed: -1 },
    { n: 80, text: "Do just enough work to get by.", domain: "C", facet: 4, keyed: -1 },
    { n: 81, text: "Easily resist temptations.", domain: "N", facet: 5, keyed: -1 },
    { n: 82, text: "Enjoy being reckless.", domain: "E", facet: 5, keyed: 1 },
    { n: 83, text: "Have difficulty understanding abstract ideas.", domain: "O", facet: 5, keyed: -1 },
    { n: 84, text: "Have a high opinion of myself.", domain: "A", facet: 5, keyed: -1 },
    { n: 85, text: "Waste my time.", domain: "C", facet: 5, keyed: -1 },
    { n: 86, text: "Feel that I'm unable to deal with things.", domain: "N", facet: 6, keyed: 1 },
    { n: 87, text: "Love life.", domain: "E", facet: 6, keyed: 1 },
    { n: 88, text: "Tend to vote for conservative political candidates.", domain: "O", facet: 6, keyed: -1 },
    { n: 89, text: "Am not interested in other people's problems.", domain: "A", facet: 6, keyed: -1 },
    { n: 90, text: "Rush into things.", domain: "C", facet: 6, keyed: -1 },
    { n: 91, text: "Get stressed out easily.", domain: "N", facet: 1, keyed: 1 },
    { n: 92, text: "Keep others at a distance.", domain: "E", facet: 1, keyed: -1 },
    { n: 93, text: "Like to get lost in thought.", domain: "O", facet: 1, keyed: 1 },
    { n: 94, text: "Distrust people.", domain: "A", facet: 1, keyed: -1 },
    { n: 95, text: "Know how to get things done.", domain: "C", facet: 1, keyed: 1 },
    { n: 96, text: "Am not easily annoyed.", domain: "N", facet: 2, keyed: -1 },
    { n: 97, text: "Avoid crowds.", domain: "E", facet: 2, keyed: -1 },
    { n: 98, text: "Do not enjoy going to art museums.", domain: "O", facet: 2, keyed: -1 },
    { n: 99, text: "Obstruct others' plans.", domain: "A", facet: 2, keyed: -1 },
    { n: 100, text: "Leave my belongings around.", domain: "C", facet: 2, keyed: -1 },
    { n: 101, text: "Feel comfortable with myself.", domain: "N", facet: 3, keyed: -1 },
    { n: 102, text: "Wait for others to lead the way.", domain: "E", facet: 3, keyed: -1 },
    { n: 103, text: "Don't understand people who get emotional.", domain: "O", facet: 3, keyed: -1 },
    { n: 104, text: "Take no time for others.", domain: "A", facet: 3, keyed: -1 },
    { n: 105, text: "Break my promises.", domain: "C", facet: 3, keyed: -1 },
    { n: 106, text: "Am not bothered by difficult social situations.", domain: "N", facet: 4, keyed: -1 },
    { n: 107, text: "Like to take it easy.", domain: "E", facet: 4, keyed: -1 },
    { n: 108, text: "Am attached to conventional ways.", domain: "O", facet: 4, keyed: -1 },
    { n: 109, text: "Get back at others.", domain: "A", facet: 4, keyed: -1 },
    { n: 110, text: "Put little time and effort into my work.", domain: "C", facet: 4, keyed: -1 },
    { n: 111, text: "Am able to control my cravings.", domain: "N", facet: 5, keyed: -1 },
    { n: 112, text: "Act wild and crazy.", domain: "E", facet: 5, keyed: 1 },
    { n: 113, text: "Am not interested in theoretical discussions.", domain: "O", facet: 5, keyed: -1 },
    { n: 114, text: "Boast about my virtues.", domain: "A", facet: 5, keyed: -1 },
    { n: 115, text: "Have difficulty starting tasks.", domain: "C", facet: 5, keyed: -1 },
    { n: 116, text: "Remain calm under pressure.", domain: "N", facet: 6, keyed: -1 },
    { n: 117, text: "Look at the bright side of life.", domain: "E", facet: 6, keyed: 1 },
    { n: 118, text: "Believe that we should be tough on crime.", domain: "O", facet: 6, keyed: -1 },
    { n: 119, text: "Try not to think about the needy.", domain: "A", facet: 6, keyed: -1 },
    { n: 120, text: "Act without thinking.", domain: "C", facet: 6, keyed: -1 },
  ]
};
