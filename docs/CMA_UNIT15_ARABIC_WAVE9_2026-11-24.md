# CMA Unit 15 — Arabic Wave 9 · Complete safe §4 labor questions and begin §5 Mix & Yield

**24 November 2026** — Based on imported Gleim 2025 CMA Part 1, Volume 2 educational content.

## Delivery

This release adds **13 full Arabic educational question drafts**:

- Unit 15 §4 **Q13, Q20–Q22, Q25, Q29–Q31** — eight rate, hours, flexible-budget and direct-labor standard-cost calculations.
- Unit 15 §5 **Q1, Q4, Q10–Q12** — five mix/yield variance definitions and the first self-contained materials-yield case.
- Each question has a complete Arabic stem, exactly four original-ordered Arabic options and an Arabic explanation, preserving all numerical tokens in their original order in each field.
- **No changes** to canonical original English texts, publisher keyed answers, page references or source statuses. English remains the default language.

| Unit 15 subsection | Arabic educational drafts | Questions |
|---|---:|---:|
| §1 | 16 | 16 |
| §2 | 37 | 39 |
| §3 | 42 | 46 |
| §4 | **27** | **35** |
| §5 | **5** | **12** |
| §§6–8 | 0 | 116 |
| **Entire unit** | **127 (48.1%)** | **264** |

**137 questions** remain English-first, including source-review holds described below.

## Independently verified accounting

The new `scripts/tests/cma-unit15-arabic-wave9.test.mjs` calculates, without trusting a source answer index:

- §4 Q13: 78,000 actual hours × ($20 standard − $18 actual) = **$156,000 favorable labor rate variance**.
- §4 Q20: 10,000 actual hours, $8.25 actual hourly rate, $5,600 favorable rate variance → **$8.81 standard hourly rate**.
- §4 Q21: 3,000 standard hours + ($1,870 unfavorable ÷ $8.50 standard rate) = **3,220 actual hours**.
- §4 Q22: 32,000 actual hours × $5.04 standard hourly rate − $6,720 favorable rate variance = **$154,560 actual direct labor payroll**.
- §4 Q25: (10,000 standard budget hours ÷ 5,000 budget units) × 6,000 actual units = 12,000 standard allowed hours; $1,500 unfavorable efficiency ÷ $15 standard rate = 100 additional hours; **12,100 actual hours**.
- §4 Q29: $90,000 actual direct wages ÷ 3,000 hours = $30 actual hourly wage; $30 − $25 standard wage, times 3,000 hours → **$15,000 unfavorable rate variance**.
- §4 Q30: $144,000 annual budget ÷ 12 months ÷ 5,000 monthly units = $2.40 per unit; flexible cost for 4,500 units is $10,800 vs actual $10,100 → **$700 favorable variable indirect labor variance**.
- §4 Q31: 22,000 standard hours ÷ 11,000 budget units = 2 hours per finished unit; for 10,000 actual output × 2 hours × $20 standard hourly rate = **$400,000 charged to production at standard cost**, not based on the 21,000 actual hours.
- §5 Q11: **$500 unfavorable yield + $320 unfavorable mix = $820 unfavorable total labor efficiency**.
- §5 Q12: For 25,000 finished goods, standard input is (4 + 6) × 25,000 = **250,000 ounces**; actual input 105,000 + 145,000 = **250,000 ounces**; yield variance = **$0**, regardless of whether the material mix changed.

## Safeguards for incomplete imported publisher tables

The **five Unit 15 §5 source records** Q2 (p.700), Q3 (p.702), Q5 (p.706), Q6 (p.707) and Q7 (p.709) were **not translated**. They were added to `pendingSourceLayouts` and are excluded from scored quizzes pending visual check against the original licensed 2025 publisher pages:

- Q2/Q3: Mack Fuels standard mix and materials purchased/used tables are interleaved horizontally, with visibly split chemical purchase-price and quantity columns.
- Q5/Q6/Q7: Mountain View Hospital DRG patient/staffing tables mix RN/LPN/aide hour columns and split patient counts. Their numerical answers may be derivable from the solution, but the question table should not be presented as reliably formatted without a visual review.

This builds on **14 previous Unit 15 §2/§3/§4 source-review holds** (total **19**). The 25 known Unit 14 source-review cases are unchanged. No original answer key was rewritten, and source-image verification or editorial publisher approval has **not** been asserted.

## Test and release policy

The source-checker allowlist now covers **exactly 127 complete Arabic drafts**; the 13 new records are locked by original English source fingerprints, original page number and answer position, and numeric-token sequences. The Wave 8 regression ensures all 114 earlier translations remain complete. Release-gate checks include content integrity, CMA/IFRS bilingual language behavior, all earlier Arabic wave tests, new accounting math fixtures, production build, TypeScript and ESLint.

**Next:** inspect and translate §5 Q8–Q9 if their source tables can be validated; then review §§6–8 in batches. Existing source-review holds must remain unscored pending original 2025 page inspection.
