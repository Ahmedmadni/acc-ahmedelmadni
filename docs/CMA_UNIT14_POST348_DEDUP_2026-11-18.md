# CMA Unit 14 — Post-PR #348 translation deduplication and scored-source integrity
**Date:** 2026-11-18  
**Baseline:** `main` after PR #348, merge `44d6bf64856b6e66c0b608422c523b4a9e9fc637`.

## Concurrent change reconciliation

PR #348 introduced **18 complete Arabic source-draft translations** into Unit 14 while another development branch was in progress. Its 18 records were **not overwritten**: 17 overlapping translations had wording differences and one (14.4.40) was entirely absent in the old branch, so replaying the outdated JSON would have lost merged work.

Instead, a fresh branch was created from the latest `main`, and exactly **8 previously untranslated** source records were added to the 71 existing records:

| Source ID | Subject | Added |
| --- | --- | --- |
| `14.2.33` | Merchandising inventory purchases, percentage of sales | ✓ |
| `14.3.13` | Step-cost sales force and S&A budget, price cut | ✓ |
| `14.3.15` | Flexible advertising budget / incremental operating income | ✓ |
| `14.5.1` | Cash receipts and loan proceeds timing | ✓ |
| `14.5.6` | Free cash movement: income, working capital, CAPEX and depreciation | ✓ |
| `14.5.22` | Payroll tax withholdings, period of cash outflow | ✓ |
| `14.6.9` | Three pro forma statements affected by financed equipment purchase | ✓ |
| `14.6.25` | Production worker fringe-benefit allocation | ✓ |

**No existing English source, answer key, page or publisher-source-review flag was modified.** New fields are only `stemAr`, `choicesAr`, `explanationAr`. Numeric-token validation applies to each source/Arabic field and every option. Updated source-ID allowlist and regression tests pin all eight answer indexes and independently recompute the nontrivial numerical items.

## Coverage after deduplicated wave

| Section | Arabic drafts | Total | Remaining |
| --- | ---: | ---: | ---: |
| 14.1 Sales | 4 | 8 | 4 |
| 14.2 Production/material | 18 | 43 | 25 |
| 14.3 Manufacturing/S&A | 13 | 19 | 6 |
| 14.4 Capital/cash collections | 13 | 40 | 27 |
| 14.5 Cash budget | 16 | 34 | 18 |
| 14.6 Pro forma | 15 | 31 | 16 |
| **Unit 14** | **79 (45.1%)** | **175** | **96** |

Units 11–13 still have 315 complete Arabic drafts; Units 11–14 cumulative = **394 source-specific Arabic educational drafts**. These are draft translations, **not** the publisher's verified Arabic editions or an independent professional review.

## Newly isolated PDF source issue: `14.6.31`, printed page 561

The imported English multiple-choice array has four elements but choices C/D have visibly broken boundaries: B contains `Cash Either`, C starts `budget payments` and D starts `cash `. This is a **source extraction/layout defect**, not a translation issue. To avoid invalid graded answers, the existing mapped `sourceLayoutReview` flag now includes this ID via `pendingSourceLayouts`. The question remains in the English source bank for comparison but is **excluded from scored CMA practice** by the shared source-review filter until the exact authorized publisher source page is visually checked and its option columns are repaired.

This is in addition to:
- 9 original Unit 14 `sourceTextStatus` warnings;
- Unit 14 §2 Q23 whole-unit defective-production rounding ambiguity (already excluded);
- Unit 12 19 and Unit 13 2 unresolved source-layout records;
- other unflagged multi-column imports that still require PDF visual comparison (e.g. Unit 14 §1 Q2/Q4–Q6).

## Release safeguards

- `scripts/check-cma-content.mjs` maintains an exact allowlist of 79 Arabic source IDs and asserts 14.6.31 remains unscored and untranslated.
- `scripts/tests/cma-translation.test.mjs` pins the 8 new source answers, Arabic completeness, numeric tokens, source-flag preservation and independently calculates merchandise purchases **$364,500**, September S&A **$652,760**, advertising incremental operating income **−$275,000**, and the change in cash **$40,000**.
- **Before merge:** GitHub CI CMA/IFRS, translation, TypeScript, ESLint, production build must all pass. **After merge:** Lovable GitHub sync and separate publish request; user-facing live update and tablet RTL quality still need explicit verification.

See issue #345 for pending publisher PDF reviews. No new database or paid translation API was added.
