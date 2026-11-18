# CMA Unit 14 — Wave 9: manufacturing, budget and cash collection translations

**Date:** 18 November 2026  
**Base:** `main` after PR #352, SHA `03834fcfd0326e138af50201b648ad7abeacae31`.

## New source-specific Arabic educational drafts

This wave adds exactly **8 complete Arabic draft translations**, consisting of the stem, four original-order multiple-choice options, and an explanation, from the established 2025 Gleim CMA Part 1 Vol 2 Unit 14 source:

| Source ID | Subject | Source answer |
|---|---|---|
| 14.2.22 | Flexible budget: batch setup, fixed and variable manufacturing cost | B — $3,930,000 |
| 14.2.27 | Tidwell February units to purchase using March demand and inventory policy | C — 6,100 |
| 14.2.40 | Alternate standalone February purchases question using the same data | C — 6,100 units |
| 14.4.19 | November credit receivables collected in December, net of writeoffs | D — $91,200 |
| 14.4.20 | Total January cash receipts from Noskey cash and credit sales | C — $299,400 |
| 14.4.24 | Net December 31 accounts receivable with lagged collection percentages | B — $294,000 |
| 14.5.12 | December supplier disbursements based on forward inventory purchasing | B — $283,500 |
| 14.5.13 | Cooper quarterly change in cash with initial A/R and A/P | C — $112,500 |

### Coverage

| Section | Arabic educational drafts | Total | Remaining |
|---|---:|---:|---:|
| §1 Sales | 4 | 8 | 4 |
| §2 Production/materials | 27 | 43 | 16 |
| §3 Manufacturing S&A | 14 | 19 | 5 |
| §4 Collections/capital | 30 | 40 | 10 |
| §5 Cash budget | 29 | 34 | 5 |
| §6 Pro forma | 19 | 31 | 12 |
| **Unit 14** | **123 (70.3%)** | **175** | **52** |

Cumulative Units 11–14: **438 complete Arabic educational draft questions** (315 in 11–13 + 123 in 14). They are independent drafts, **not** official or professionally validated publisher translations.

## Independently audited numeric and answer integrity

A full array-level comparison of 175 source records against `main` found **zero changes to any original field**, including `stem`, `choices`, `answerIndex`, `explanation`, `page`, and review markers. The only new fields are `stemAr`, `choicesAr`, and `explanationAr` in the 8 records listed above. Each Arabic stem, option and explanation preserves every original numeric token *in its original order*, without introducing numeric mismatches.

Source-independent accounting fixtures verify:
- September batch setup budget: $1,664,000 variable + $1,056,000 setups + $1,210,000 fixed = **$3,930,000**.
- February units to purchase: 5,500 × 70% + 7,500 × 30% = **6,100** (both questions).
- November credit sales collectible in December: $240,000 × 95% × 40% = **$91,200**.
- January cash receipts: $360,000 × 95% × 40% + $180,000 × 95% × 60% + $60,000 = **$299,400**.
- December 31 gross/net collectible A/R: $480,000 × 80% × 25% + $450,000 × 80% × 55% = **$294,000**.
- December supplier cash outflows: ($460,000 × 70% × 75%) + ($240,000 × 70% × 25%) = **$283,500**.
- Cooper quarter cash change: $2,000,000 collections less $1,387,500 inventory payments and $500,000 operating expenses = **$112,500**.

All eight original answer indexes are pinned in translation regressions and the exact Arabic source-ID allowlist.

## Newly blocked extraction defects

Two imported English questions contain **visibly garbled solution content**. Their source records and answer indexes remain untouched, Arabic translations are withheld, and the shared `sourceLayoutReview` adapter gate excludes them from **scored CMA quizzes by default**:

- `14.4.30` (p. 464): a multi-column collections schedule is split into disjoint text and numeric fragments (e.g. `Tota Cred`, `$700,0`). Key is B, but readable source/table verification is still needed.
- `14.6.10` (p. 539): a ratio equation is malformed (`($46,000,000 + = .15`) from PDF flattening. Its numeric key is plausible, but no fully readable verified explanation exists in imported English source.

These are **additional** to the nine existing Unit 14 `sourceTextStatus` flags and four already blocked source rounding/option/context cases (§2 Q23, §5 Q10, §6 Q21/Q31). English originals and historical page anchors remain intact; only mapping-level scored eligibility is changed. Issue #345 tracks the pending review. Professional Arabic and accounting review, original authorized 2025 PDF/errata comparisons and tablet/live QA remain outstanding.

## Release checklist

- Full GitHub CI success: CMA/IFRS source checks, translation, build, TypeScript and ESLint.
- Confirm post-merge main push CI.
- Confirm Lovable sync to exact merged SHA; request deploy separately. A `pending` deploy result does **not** prove the live site is updated.
- No database usage, paid API, or external content importer was added.
