# CMA Unit 14 Arabic Wave 7 — 10 numerical cash/materials cases

**Date:** 18 November 2026  
**Baseline:** main after PR #350, `800507eecd1e72f214a7a1efbeff058f301570e9`

## Implemented content

Added ten complete Arabic educational draft translations (`stemAr`, four `choicesAr` in source order, `explanationAr`) for the existing Gleim CMA 2025 Part 1 Volume 2 Unit 14 questions:

| Section | Source question | Subject | Original answer index |
| --- | --- | --- | ---: |
| §2 | 17 | Direct-material purchases with quarterly production and desired ending stock | C |
| §2 | 18 | Finished-goods and materials inventory reconciliation | C |
| §2 | 28 | Budgeted materials G/C purchases and prices | B |
| §4 | 22 | Accounts receivable under early-payment discounts | C |
| §4 | 29 | Credit/cash sales collection schedule | C |
| §4 | 37 | Early-payment discounts and March receipts | B |
| §4 | 38 | Freight company collections by monthly cohort | C |
| §5 | 14 | Cash budget and short-term borrowing at end of February | B |
| §5 | 15 | Minimum-quarterly-cash and loan covenant borrowing | C |
| §6 | 30 | Incremental operating profit under direct labor/material cost shocks | B |

### Coverage after Wave 7

| Unit 14 section | Arabic educational drafts / total | Remaining |
| --- | ---: | ---: |
| §1 | 4/8 | 4 |
| §2 | 24/43 | 19 |
| §3 | 14/19 | 5 |
| §4 | 22/40 | 18 |
| §5 | 22/34 | 12 |
| §6 | 19/31 | 12 |
| **Total** | **105/175 (60%)** | **70** |

**Units 11–14 cumulative: 420** source-specific Arabic educational drafts (315 from Units 11–13 + 105 from Unit 14).

## Source fidelity and independent checking

The branch-to-main audit checked all 175 source records: **no pre-existing field** was changed, including original English wording, original option order, original answer index, original explanations, printed page numbers and source-review flags. The ten new drafts use complete Arabic wording and preserve the exact numeric-token sequence in each source stem, corresponding answer option and explanation. A test suite pins original answer positions and checks Arabic completeness and translation numeric fidelity.

Independent arithmetic fixtures recompute the following results from the question conditions rather than merely trusting the stored answer index:

- §2 Q17: **$2,640,000** direct-material purchases.
- §2 Q18: **92,000 pounds** purchased.
- §2 Q28: **$675,000** material G and **$300,000** material C purchases.
- §4 Q22: **$146,000** end-of-April receivables on a gross basis; early-payment discount does not change the remaining gross receivable balance.
- §4 Q29: **$242,000** March receipts.
- §4 Q37: **$449,480** March receipts after applicable 2% discounts.
- §4 Q38: **$79,375** May receipts.
- §5 Q14: **$70,000** forecast February borrowing after maintaining minimum cash.
- §5 Q15: **$10,000** quarter-end borrowing to satisfy the minimum cash covenant.
- §6 Q30: **$93,000** incremental decline in operating income.

## Audit limitation and non-scored source items

A source-structure-heavy §5 Q25 case was **not translated in this wave** because its imported multi-column explanation mixes numeric lines and may require visual comparison with the original authorized 2025 publisher PDF. The nine existing Unit 14 `sourceTextStatus` warnings remain untouched; unflagged multi-column rows also require source-page verification. Three additional known source/prompt defects are still excluded from scored practice: §2 Q23 whole-unit production rounding (p369), §6 Q21 rounded EBIT answer inconsistency (p551), and §6 Q31 broken source-option boundaries (p561). No original source key was silently altered.

Draft translations require an independent accountant/editorial review before being called final or publisher verified. All prior IFRS and CMA learning/notebook sections are unaffected. No database or cloud translation API was introduced.

## Next verification

- GitHub Actions CI green for CMA/IFRS checks, translation validation, production build, TypeScript and ESLint before merge.
- Post-merge main SHA and CI success, Lovable synchronization, deployment request; `pending` publish is not confirmation that the latest version is publicly live.
- Next safe tranche among 70 English-first Unit 14 records; original PDF layout and errata verification is the higher priority for any table-heavy or inconsistent case.
