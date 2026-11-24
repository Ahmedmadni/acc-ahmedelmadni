# CMA Unit 15 — Arabic Wave 7, Source Variance and PDF Table Audit

**Date:** 24 November 2026

## Release scope

Sixteen complete Arabic educational drafts were added to Gleim 2025 Part 1 Vol. 2 Unit 15 §3, covering Q27–31, Q33–36 and Q40–46. Each includes original-order four-option Arabic choices, an Arabic stem, and a worked Arabic explanation. English remains the default language; the original English content, keyed answer, answer status, pagination and ordered numerical tokens were not altered.

| Section | Arabic translations | Total source questions |
|---|---:|---:|
| §1 | 16 | 16 |
| §2 | 37 | 39 |
| §3 | 42 | 46 |
| §§4–8 | 0 | 163 |
| **Total** | **95 (36.0%)** | **264** |

A total of **169 source items** remain English-first.

## Source quality gates

The following §3 source items were intentionally **not translated** and were added to the existing `sourceLayoutReview` flag, which blocks them from ordinary scored tests:

- **Q32, page 645** — an imported table labels an unfavorable **$1,200 material price variance** based on $13,200 actual material costs minus $12,000 standard costs at different input quantities. However, actual material unit cost $13,200/3,300 lb = **$4/lb**, which equals the stated $4/lb standard; that implies **zero price variance** and a $1,200 **usage** variance [(3,300 − 3,000) × $4]. Moreover, its rationale changes perspective on who is dissatisfied. Original source page and expected scoring need direct verification; *do not silently change the original keyed response*.
- **Q37/Q38, page 652** — Jackson Industries' tabular standards are flattened across columns and rows in imported English. Correct numerical values appear in source and solutions, but original table orientation and display fidelity must be confirmed visually.
- **Q39, page 654** — Arrow Industries standard-cost column headings are visibly truncated to `Sta` and `C`. Do not show this as a dependable graded exam until restored from the original source page.

Earlier **§2 Q25, page 596**, and **§2 Q32, page 607**, remain English-first and blocked. The 25 existing Unit 14 source-review holds are unaffected. None of these blockers is an assertion that the licensed publisher itself made an error; most visible defects are consistent with text/PDF extraction.

## Independently checked examples

The Wave 7 numerical tests recompute, independently of the original answer key:

- Q27: $300 favorable price variance on 3,000 bundles.
- Q28: $10,000 unfavorable variance based on **500,000 purchased** lb, not used lb.
- Q29: material flexible budget $18,000 versus actual $20,000 gives $2,000 unfavorable.
- Q34: (130,000 − 31,000 × 4) × $5 = $30,000 unfavorable usage.
- Q35: 80,000 standard cloth yards + (1,240 / 1.55) 800 excess used + 2,100 ending inventory = 82,900 yards **purchased**.
- Q36: (155,000 standard − 148,800 actual) × $0.75 = $4,650 favorable.
- Q40: 190,000 × ($28 − $24) = $760,000 unfavorable price.
- Q41: (20,000 × 10 − 190,000) × $24 = $240,000 favorable usage.
- Q42: (25,000 actual − 48,000 × 0.5 allowed) × $4 = $4,000 unfavorable.
- Q44: $3,920 favorable usage less $1,700 unfavorable price gives $2,220 net favorable.
- Q45: 9 ounces remaining after 4% **normal** evaporation needs 9 / 96% = 9.375 input ounces. Including inbound freight $2.20 per ounce, the standard materials cost is $20.625, or **$20.63** when rounded to the nearest cent using ordinary half-up rounding.

## Release validation and limitations

- `scripts/tests/cma-unit15-arabic-wave7.test.mjs` verifies the immutable English stem, choices, explanation, original answer index and exact source-page fingerprint on all 16 additions and validates the ordered numeric tokens in every Arabic field.
- The global CMA content checker enforces **exactly 95 bilingual Unit 15 drafts** and the four new §3 source review flags. Wave 1–6 tests still protect their earlier questions.
- CI runs content integrity, translation validation, release math fixtures, production build, TypeScript, ESLint and the existing IFRS and on-site exam tests.
- Arabic drafts are educational; successful code/number checks do **not** substitute for visual audit of the authorized 2025 book, specialist editorial review of accounting wording, or manual device/browser testing.

## Next

Continue Unit 15 §4–8 after reviewing their source tables and explanations for numerical consistency. The four §3 and two §2 held source records must stay unscored until publisher-page comparison is possible.
