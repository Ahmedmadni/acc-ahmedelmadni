# CMA Unit 14 — Wave 6 source-preserving Arabic drafts, numeric fixtures and answer-integrity gate

**Date:** 18 November 2026  
**Repository:** `Ahmedmadni/acc-ahmedelmadni`  
**Baseline:** `main`, squash commit for PR #349 (`9b3bfef8522f24714407856be64f71d31efbca3d`).

## Scope implemented

Added **16 complete educational Arabic source-specific draft translations** to Gleim CMA Part 1 (2025) Volume 2 Unit 14, retaining the canonical English questions, original page locators, four options in order, original answer indexes and original explanations.

| Section | Newly localized question IDs | Count |
| --- | --- | ---: |
| §2 Production, direct materials | 11, 12, 16 | 3 |
| §3 Cash-based sales commission | 1 | 1 |
| §4 Cash collection and discounted receivables | 3, 7, 17, 25, 27 | 5 |
| §5 Net cash, short-term financing, seasonal liquidity | 7, 17, 23, 24 | 4 |
| §6 Pro forma income and gross profit | 15, 16, 18 | 3 |
| **Total** | | **16** |

Each newly translated question has `stemAr`, `choicesAr[4]`, `explanationAr`. Accounting language remains independent of locale: Western numerals and currency/percentage inputs preserve original source tokens exactly.

## Coverage after this wave

| Section | Arabic drafts | Source questions | Remaining |
| --- | ---: | ---: | ---: |
| §1 | 4 | 8 | 4 |
| §2 | 21 | 43 | 22 |
| §3 | 14 | 19 | 5 |
| §4 | 18 | 40 | 22 |
| §5 | 20 | 34 | 14 |
| §6 | 18 | 31 | 13 |
| **Unit 14** | **95 / 175 (54.3%)** | **175** | **80** |

Units 11–13 remain at 315 Arabic draft records; **410** source-specific Arabic educational drafts across Units 11–14 (315 + 95). These are **draft translations, not verified publisher translations**.

## Integrity and numerical regression

- Independent GitHub main-vs-branch audit of all 175 records found **zero modifications to any pre-existing source field** (English stems, English four options, answer keys, explanations, page provenance, review markers).
- Every new Arabic text and answer option has **exact same ordered numeric tokens** as its corresponding original, including USD, EUR, percentages and dates.
- Translation tests pin **16 canonical source answer indexes** and independently recompute numerical answers including:
  - Paradise manufacturing 450,000 units and raw materials 1,010,000 units;
  - Berol production 665,720 units;
  - October commission $13,500;
  - cash collections $414,000, $110,800, $84,400, $343,300, $735,000;
  - cash movement +$54,000 and required financing $2 million;
  - seasonal cash borrowing $100,000 and projected liquidity gap $10,000;
  - manufactured goods cost $2,439,490, revised operating income $4,600,000, and pro forma operating income €1,530,000.
- The original **9 Unit 14 `sourceTextStatus` markers** are unmodified. Original PDF visual source verification is **not yet complete**.

## Newly found source-answer integrity conflict: §6 Q21, printed p551

The source **asks for forecast EBIT rounded to the nearest thousand**. The imported solution calculates `$2,163,000 − $1,285,200 − $416,000 = $461,800`, then explicitly states the rounded result is **$462,000**. But the original answer key chooses **option B $461,800**, and none of the four options offers $462,000. This is an answer/prompt consistency issue, not a proved defective PDF table.

**Disposition:** Preserve the original source and answer index **unchanged**, leave the question **untranslated**, and exclude it from graded CMA practice pending comparison with the original 2025 publisher PDF/possible errata. The source adapter now includes `14.6.21` in a separate `pendingAnswerConsistencyReviews` ID set, mapped to the existing `sourceLayoutReview` compatibility gate. A regression pins the source, recomputes the numerical and rounded results, and tests exclusion by the shared scoring filter.

Existing safeguards remain intact:
- `14.2.23` defective-production whole-unit rounding ambiguity (p369);
- `14.6.31` badly split imported options (p561);
- 9 explicitly source-flagged Unit 14 items;
- 19 Unit 12 / 2 Unit 13 review items.

Source review issue: [#345](https://github.com/Ahmedmadni/acc-ahmedelmadni/issues/345).

## Release and next steps

1. Pass GitHub Actions CMA/IFRS content integrity, translation tests, production build, TypeScript and ESLint **before merging**.
2. Independently verify post-merge CI and Lovable project's synchronized SHA. Production deployment request `pending` does not confirm a live release; actual page and mobile/tablet RTL testing remain distinct.
3. Continue the **80 Unit 14 untranslated** source records, focusing on unambiguous calculations. Verify source tables visually and do not imply publisher-reviewed content until that process is complete.
4. This change introduces no new database, subscription/translation API, authentication requirement or desktop import workflow.
