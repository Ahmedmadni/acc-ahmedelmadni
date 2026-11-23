# CMA Unit 14 — Source-review ledger and release gate (23 November 2026)

## What changed
The repository contains **160/175** complete Arabic educational drafts in Part 1, Volume 2, Unit 14 (91.4%). This is newer than the Wave 13 snapshot that showed 150/175. The remaining **15 original publisher-source records** are English-first for a reason: their PDF-extracted text, answer rounding, solution tables, or choice boundaries need the **authorized 2025 Part 1 Volume 2 publisher pages**.

This milestone **does not** invent translations, correct publisher questions, unflag answers, or claim these source pages were inspected. It adds `src/lib/cma-unit14-source-review.ts` — a version-controlled, bilingual 25-item reviewer checklist with exact publisher-page locators and specific reason categories. Learners see the relevant reason in both the CMA study view and scored exam tool. Questions remain **review-only/unscored** wherever the existing adapter marks `sourceLayoutReview`.

## Current exact counts
| Status | Number | Notes |
|---|---:|---|
| All source questions | 175 | 6 sections |
| Complete Arabic drafts | 160 | Includes 10 review-held translated drafts |
| English-first pending review | 15 | No Arabic draft may be certified without original pages |
| Arabic drafts that remain review-only | 10 | 9 reconstructed/reflowed source tables or choices, 1 dependent Montero case |
| **Total source review holds** | **25** | No change to source answers or scoring eligibility |
| Drafts not on the source-review hold list | 150 | Still educational drafts, not expert/publisher certified |

## Original-page review queue

| Category | Source IDs | Original PDF pages |
|---|---|---|
| Digit fragments / split financial tables | 14.1.4–6, 14.3.9, 14.4.15, 14.6.3–4 | 328, 330, 333, 410, 443, 529–530 |
| Damaged explanation / equation | 14.2.14, 14.4.30, 14.6.10 | 356, 464, 539 |
| Interleaved columns | 14.4.5–6 | 428–429 |
| Ambiguous source rounding / answer | 14.2.23, 14.6.21 | 369, 551 |
| Choice boundary corruption | 14.6.31 | 561 |
| Previously reconstructed/reflowed Arabic drafts | 14.4.2, 14.4.31–32, 14.5.3–4, 14.6.5–7, 14.6.12 | 425, 468–469, 484–485, 533–535, 543 |
| Montero dependent follow-up (Arabic draft) | 14.5.10 | 492 |

The full per-question ledger (including exact pages and reasons) is the `CMA_UNIT14_REVIEW_HOLDS` export in `src/lib/cma-unit14-source-review.ts`. Its consistency with the exact 175 source records, actual Arabic coverage, scoring adapter and both presentation routes is checked by `scripts/tests/cma-unit14-review.test.mjs` in CI.

## Source evidence boundary and acceptance gate

The available Library item `CMA P2 GLIME.pdf` is a **2019 Part 2** reference, not the **2025 Part 1 Volume 2** question source. It cannot validate the original pages listed above. The published CMA Question Bank is not a substitute for visual/authorized primary-source verification where its imported tables are corrupted.

Before clearing **each** hold:
1. Open the matching original 2025 Part 1 Volume 2 page from a rights-cleared source and compare source stem, table, each choice, official key, solution and edition.
2. Record precisely what was visually verified; correct source transcription only after confirming it, with the corresponding independently checked calculation.
3. Provide a full Arabic question, four parallel ordered choices and explanation, and validate all numeric quantities and terminology.
4. Add a test for the source identifier, original key, source-page provenance, numeric fidelity, Arabic completeness and restored scoring eligibility, then remove that specific hold from this manifest **and** its original gating condition in the adapter.
5. Verify the live CMA study route and ExamPrep on mobile/tablet. Automated code checks do not replace original-page/accounting or device review.

Until then, keep the 25 review holds unscored. **The primary milestone is a safer, more transparent review workflow, not an increase in translated-question count.**
