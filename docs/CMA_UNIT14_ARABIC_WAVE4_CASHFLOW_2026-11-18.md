# CMA Unit 14 — Arabic Draft Wave 4: Cash Collections, Disbursements and Pro Forma Forecasts

**Date:** 2026-11-18  
**Branch:** `codex/cma-unit14-cashflow-numerical-wave4-20261118`  
**Base:** PR #347 merged into main (`3c91f3b98b6a936dcee7dbe040fd9987b841bb69`).

## Completed changes

Added **18 complete Arabic educational draft source questions** (translated stem, four source-ordered choices, and worked explanation) in the on-site static CMA Unit 14 bank:

| Unit 14 section | New question numbers | New drafts |
| --- | --- | ---: |
| §4 (cash collection schedules / capital planning) | 4, 9, 11, 12, 21, 23, 28, 35, 36, 40 | 10 |
| §5 (cash budget and supplier payments) | 5, 8, 19, 33, 34 | 5 |
| §6 (pro forma A/R, operating income and tax) | 17, 19, 29 | 3 |
| **Total** | | **18** |

The Arabic text retains the same original numeric tokens *in their original order in each respective stem/choice/explanation*, while explaining each calculation in idiomatic professional Arabic. The question is kept English-first in Arabic mode if no complete Arabic translation exists. No new database, login, cloud translator or local device requirement.

## Coverage

| Section | Arabic / source total | Remaining |
| --- | ---: | ---: |
| §1 Sales budget | 4/8 | 4 |
| §2 Production / direct materials | 17/43 | 26 |
| §3 Labor / overhead | 11/19 | 8 |
| §4 Capital and collections | 13/40 | 27 |
| §5 Cash budget | 13/34 | 21 |
| §6 Pro forma | 13/31 | 18 |
| **Unit 14** | **71/175 (40.6%)** | **104** |

Units 11–13 remain at **315** complete educational Arabic drafts. Combined Units 11–14: **386** source-specific Arabic educational drafts.

## New quality controls

- Independent calculations for all 18 source-keyed answers, including §4 Q21 (compare four month collections to determine October as the maximum).
- Confirmed original answer keys, correct-option values, four-option order and Arabic numeric token consistency for every new item.
- Strict Arabic source-ID allowlist updated only for the 18 selected records.
- Direct before/after repository audit: **zero mutations to all original question fields** across the full 175 Unit 14 source records, including source English explanations, source answer keys, metadata, page numbers and existing source flags.
- Original nine Unit 14 source-layout flags remain untranslated. The additional ID-based scoring hold for §2 Q23 (whole-unit defective-output rounding discrepancy) remains active and untranslated.
- CI for CMA/IFRS integrity, translation regression, TypeScript, ESLint and production build must succeed before merge.

### Accounting caveats

- The numeric tests independently reproduce values **from imported text**; they do not certify that the OCR/PDF import preserved original table column alignment, or that the educational translation received external specialist review.
- Three related 2025 Part 1 Volume 2 source table questions (§1 Q2, Q4–Q6) remain English-first until original PDF visual audit. Previously flagged Units 12–13 source layouts and their scoring gates remain unchanged.
- Numeric-check success does not authorize a claim of publisher or official CMA translation approval.

## Next recommended work
1. Translate the remaining **104** Unit 14 MCQs in verified batches, with emphasis on cash forecasting and income/cost cases that have independent source calculations.
2. Reconcile the original publisher PDF for 21 flagged Unit 12–13 questions, nine Unit 14 source layouts, and the separate Unit 14 §2 Q23 answer-rounding ambiguity; all tracked by GitHub issue **#345**.
3. Have an accountant/editor review Arabic logic and terminology. Verify mobile/tablet layout for tables and mixed-direction numbers.
4. Confirm separate main-branch CI completion, Lovable source sync, deployment status and publicly visible production content. GitHub merge does not prove Lovable publication.
