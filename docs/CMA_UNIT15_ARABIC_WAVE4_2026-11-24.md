# CMA Unit 15 — Arabic Wave 4 (24 November 2026)

## Delivered

This tranche adds **10 complete Arabic educational drafts** for source questions **§2 Q29–Q31 and Q33–Q39**. All 10 preserve the original English questions, choices, answer indexes, page references and source answer statuses. The new fields are `stemAr`, four ordered `choicesAr` and `explanationAr`.

### Current coverage

| Section | Arabic / source items |
|---|---:|
| Unit 15 §1 | **16 / 16** |
| Unit 15 §2 | **37 / 39** |
| Unit 15 §§3–8 | **0 / 209** |
| **Unit 15 overall** | **53 / 264 (20.1%)** |

Exactly **211 records** remain English-first. The two untranslated §2 records, **Q25 (p. 596)** and **Q32 (p. 607)**, have already been protected with `sourceLayoutReview` because PDF-extracted source tables contain broken total variance notation and interleaved side-by-side columns, respectively. They remain excluded from ordinary scored practice until visually reconciled against the licensed 2025 original book. No original answer key was changed and neither hold was lifted.

## Accounting verification

In addition to token-by-token source numerical checks, `scripts/tests/cma-unit15-arabic-wave4.test.mjs` independently recomputes:

- **§2 Q29:** With 200 actual residents, the flexible-budget variances are Housekeeping $29,800 unfavorable, Maintenance $24,600 unfavorable, Nursing $100 favorable and Dietary $200 favorable. Actual operating profit is $22,300.
- **§2 Q31:** 27,500 units at the original $10 selling price; variable production cost $3.20 per unit, fixed manufacturing $40,000 and other fixed operating $100,000; flexible operating profit **$47,000**.
- **§2 Q33:** Actual operating profit $225,000 versus original static-budget operating profit $210,000; favorable static-budget variance **$15,000**.
- **§2 Q34:** Straight-line annual depreciation $516,000 / 12 months = **$43,000** for March. The publisher's per-unit allocation happens to produce the same result because planned production is uniform; the new Arabic educational explanation clarifies that straight-line depreciation is **not** thereby a per-unit variable cost.
- **§2 Q35:** 70 units × ($100 price − $50 variable cost) − $2,000 fixed costs = **$1,500**.
- **§2 Q36:** 1,750 × (€500,000 − €350,000)/2,000 − €45,000 = **€86,250**.
- **§2 Q37:** 9,500 articles × (200 standard hours / 10 articles) × $50/hour + $600,000 fixed = **$10,100,000**.
- **§2 Q39:** 12 offices × ($1,000,000 − $140,000)/10 + $140,000 = **$1,172,000**.

## Validation and quality boundary

- All 10 source records are locked to their existing English stem, all choices, explanation, page and answer via deterministic fingerprints and the existing immutable-source checks. Numerical tokens in every Arabic question, choice and explanation must appear in the same order as the original English record.
- The earlier Wave 1, Wave 2 and Wave 3 tests keep enforcing their original verified educational draft source fingerprints.
- The global CMA translation allowlist now permits **exactly 53** Unit 15 Arabic source drafts. The two pending §2 table layouts stay English-first and unscored. No new database, paid translation API, or browser runtime dependency is introduced.
- GitHub Actions run IFRS checks, all CMA translations and content/regression checks, production build, TypeScript, and ESLint before acceptance. Passing automated checks **does not** certify the publisher's original PDF page layout, a specialist review of translation wording, or real-device UI behavior.

## Next phase

Unit 15 §§3–8 contain **209** additional English-first source records. Advance section by section after evaluating the original source layout, source-answer consistency, financial calculations and complete Arabic translation. Keep original English as the default study language, with Arabic enabled on demand.
