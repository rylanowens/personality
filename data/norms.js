// Norms for converting raw IPIP-NEO-120 scale scores to z-scores/percentiles.
//
// Provenance: John A. Johnson's IPIP-NEO norm tables as distributed with his
// scoring program (via five-factor-e v1.13.1, MIT, credited to Johnson;
// retrieved 2026-08-30). Table used: adult cohort ages 21-40, male and female
// norms averaged ("combined"). Johnson's norm sample is a large internet
// convenience sample (Johnson 2014, J. Research in Personality 51:78-89,
// N = 619,150 for the 120-item form).
//
// Caveats (also disclosed on the About page):
//  - Internet convenience sample, not census-representative.
//  - Single combined-sex, ages-21-40 table; mean levels differ somewhat by
//    sex and age, so percentiles are approximate for other groups.
//  - alphas are ASSUMED working values (facet 0.75, domain 0.88), in line
//    with typical published reliabilities for the IPIP-NEO-120 (Johnson 2014
//    reports mean facet alpha ~.76); they drive the confidence bands only.
// Facet raw range: 4-20 (four 1-5 items). Domain raw range: 24-120.

window.QUIZ_NORMS = {
  version: 1,
  provenance: "Johnson IPIP-NEO norms, adult 21-40, combined sexes (via five-factor-e 1.13.1)",
  assumedAlpha: { facet: 0.75, domain: 0.88 },
  domains: {
    N: { mean: 69.56, sd: 16.32 },
    E: { mean: 79.84, sd: 14.93 },
    O: { mean: 87.38, sd: 12.4 },
    A: { mean: 88.06, sd: 12.25 },
    C: { mean: 86.53, sd: 14.07 },
  },
  facets: {
    N1: { mean: 12.26, sd: 3.72 },
    N2: { mean: 12.23, sd: 4.21 },
    N3: { mean: 10.58, sd: 4.1 },
    N4: { mean: 12.15, sd: 3.8 },
    N5: { mean: 12.45, sd: 3.55 },
    N6: { mean: 9.91, sd: 3.56 },
    E1: { mean: 13.68, sd: 3.73 },
    E2: { mean: 11.63, sd: 4.02 },
    E3: { mean: 14.41, sd: 3.59 },
    E4: { mean: 12.42, sd: 3.24 },
    E5: { mean: 13.09, sd: 3.48 },
    E6: { mean: 14.63, sd: 3.42 },
    O1: { mean: 15.79, sd: 3.26 },
    O2: { mean: 15.46, sd: 3.46 },
    O3: { mean: 15.5, sd: 2.94 },
    O4: { mean: 12.99, sd: 3.42 },
    O5: { mean: 15.7, sd: 3.36 },
    O6: { mean: 11.86, sd: 3.59 },
    A1: { mean: 12.98, sd: 3.7 },
    A2: { mean: 16.63, sd: 2.9 },
    A3: { mean: 16.09, sd: 2.72 },
    A4: { mean: 15.07, sd: 3.6 },
    A5: { mean: 12.21, sd: 3.57 },
    A6: { mean: 14.64, sd: 3.08 },
    C1: { mean: 15.91, sd: 2.39 },
    C2: { mean: 12.36, sd: 4.38 },
    C3: { mean: 16.02, sd: 2.65 },
    C4: { mean: 15.73, sd: 3.22 },
    C5: { mean: 13.41, sd: 3.27 },
    C6: { mean: 13.11, sd: 4.11 },
  }
};
