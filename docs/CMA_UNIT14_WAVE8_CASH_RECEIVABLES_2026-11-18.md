# CMA Unit 14 — Wave 8 Arabic Cash Budgets and Receivables

**Date:** 18 November 2026
**Baseline:** main after PR #351, `e37d884a05104610b6b08967ac12649a7573859d`.

## Completed work

Added **10 complete Arabic educational draft translations** for original 2025 Gleim CMA Part 1 Vol. 2 Unit 14 questions, including question, four source-order options and full explanation:

| ID | Topic | Original key |
|---|---|---|
| 14.4.8 | Quarter cash collection for same-quarter credit sales | A |
| 14.4.13 | Gross accounts receivable receipts vs write-offs | D |
| 14.4.18 | Quarter cash collection with lagged receipts | C |
| 14.4.26 | Current-quarter cash receipts with 50-day collection lag | A |
| 14.4.39 | Montero customer cash receipts | D |
| 14.5.2 | Quarter-end cash projection with payables/depreciation/asset sale | D |
| 14.5.9 | Supplier prompt-payment discount and cash disbursements | C |
| 14.5.20 | January financing rounded up to permitted loan increments | C |
| 14.5.31 | Supplier payments, payroll and operating costs | D |
| 14.5.32 | Alternative supplier-payment pattern, wages and costs | D |

### Exact coverage after Wave 8

| Section | Arabic educational draft records | Total | English-first remaining |
|---|---:|---:|---:|
| §1 | 4 | 8 | 4 |
| §2 | 24 | 43 | 19 |
| §3 | 14 | 19 | 5 |
| §4 | 27 | 40 | 13 |
| §5 | 27 | 34 | 7 |
| §6 | 19 | 31 | 12 |
| **Unit 14** | **115** | **175** | **60** |

Overall Units 11–14: **430 complete Arabic educational source-draft MCQs**, assuming unchanged 315 translations across Units 11–13.

## Fidelity and verification

- GitHub main-vs-branch audit: **zero modifications to any pre-existing field in 175 original source records**. The new fields are solely `stemAr`, `choicesAr`, and `explanationAr` for exactly ten questions.
- **Zero numeric-token mismatches** from corresponding English original source fields, including option order and historical percentages.
- `scripts/check-cma-content.mjs`: updated strict source-translation allowlist and section counts (115 total) and safeguards the new dependent-case question.
- `scripts/tests/cma-translation.test.mjs`: all ten canonical answer positions pinned and independent recomputations added:
  - 14.4.8 $262,000
  - 14.4.13 $255,000
  - 14.4.18 $230,000
  - 14.4.26 $811,000
  - 14.4.39 $67,200
  - 14.5.2 $95,000
  - 14.5.9 $67,320
  - 14.5.20 $11,000 after rounding up the $10,600 cash shortage to a $1,000 increment
  - 14.5.31 $254,000
  - 14.5.32 $235,000

## Newly isolated source context dependency — 14.5.10 (p492)

The 117-character English question `What was Montero’s cash balance on April 1 ...` assumes collection and expense data from the preceding Montero case that **are not included in its own standalone stem**. The original solution relies on preceding-case sales and opening May cash information. Without that data, a learner shown only Q10 cannot independently solve the problem.

**Disposition:** Source question and canonical answer unchanged, Arabic withheld; add `pendingStandaloneContextReviews` gate `14.5.10` (mapped to existing `sourceLayoutReview` exclusion flag for compatibility with every scored-quiz entry). Add exact source-page, original answer and scored-source filter regressions. To release, either provide the missing source case context in a visibly linked compound-question view or author a legally sourced, fully audited standalone variant; do **not** modify the imported original silently.

All nine existing Unit 14 `sourceTextStatus` questions remain flagged and English-first. The previous answer/rounding/source defects 14.2.23 (p369), 14.6.21 (p551) and 14.6.31 (p561) remain excluded. Publisher source-page validation and accounting/Arabic editorial review are still required for these drafts.

## Deployment discipline

Merge only if GitHub CI passes CMA/IFRS checks, translation regressions, production build, TypeScript and ESLint. Confirm GitHub main post-merge CI and Lovable SHA sync; a Lovable deployment request returning `pending` is not confirmation of successful live publication. No new database dependence or paid translation service.
