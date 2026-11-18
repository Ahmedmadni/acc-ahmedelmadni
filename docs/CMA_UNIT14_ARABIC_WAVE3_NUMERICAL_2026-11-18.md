# CMA Unit 14 — Numerical budget translations, independent checks and source-answer rounding gate
**Date:** 2026-11-18  
**Base:** `main` after PR #346; source 2025 Part 1 Volume 2 Unit 14 (`175` MCQs).

## Scope implemented
Added **22 complete Arabic educational draft translations** to existing English original records, preserving stems, source answers, source pages, original explanations and option order:

- **§2 Production and direct-material budgets (14):** Q6, Q7, Q10, Q19, Q20, Q21, Q24, Q25, Q29, Q30, Q31, Q32, Q36, Q39.
- **§3 Labor, cost-of-goods, commissions, and contribution margin (8):** Q6, Q7, Q8, Q11, Q12, Q14, Q16, Q17.
- Each has Arabic stem, four answers in source order, and a worked Arabic explanation (no paywall, database, translation API or local device-side import required).

### Coverage after Wave 3

| Unit 14 section | Draft Arabic / total | Untranslated |
| --- | ---: | ---: |
| §1 Sales budget | 4/8 | 4 |
| §2 Production/material budgets | 17/43 | 26 |
| §3 Labor/overhead/operating cost | 11/19 | 8 |
| §4 Capital budget | 3/40 | 37 |
| §5 Cash budget | 8/34 | 26 |
| §6 Pro forma statements | 10/31 | 21 |
| **Total** | **53/175 (30.3%)** | **122** |

Units 11–13: **315 Arabic drafts**; Units 11–14 aggregate **368 source-specific Arabic educational drafts**.

## Quality controls
- **22 independent arithmetic assertions** recompute the monetary and unit outcomes from question inputs, in addition to original correct-answer index pinning and a four-choice source-order check.
- Per-field numeric token identity must hold across each original stem, its Arabic text, all corresponding choices, and the solution.
- No pre-existing original English question, choice, explanation, answer index, page, source-provenance field or pre-existing source-review flag was modified.
- The nine original Unit 14 source-layout flags remain untouched; original source-table review is still outstanding, and tests cannot certify visual PDF fidelity.

### Newly detected answer-integrity issue: §2 Q23, source p369
The imported source states expected good-unit requirements of `6,300 + 590 - 470 = 6,420`, with `10%` defective output. The mathematically exact required production is `6,420 / 0.9 = 7,133.333…`. If **whole units** are needed to ensure at least `6,420` good units under the fractional 90% yield model, round *up* to **7,134**; the recorded original correct answer is **7,133 (option C)**, which is the nearest integer but gives only `7,133 * 0.9 = 6,419.7` expected good units.

**Decision:** Do not silently change the publisher's answer, source text or choices; do not translate the question or count it as reliable scored practice until the correct source edition's original answer rationale and rounding convention are reviewed. The mapped `sourceLayoutReview` compatibility flag is set by a dedicated `pendingAnswerRoundingReviews` ID list for **14.2.23**, so all existing scored quiz paths using `splitCmaQuizSourceReview` exclude it by default. This is an answer-accuracy review, **not evidence of defective PDF table reflow**, despite reuse of the historical review flag. An opt-in preview may still show the imported source text and its stored answer, unscored.

## Pending and handoff
1. Original 2025 Gleim Part 1 Volume 2 PDF still needed for source visual verification of Unit 12 19, Unit 13 two, and Unit 14 nine flagged records, as well as original row/column structure for unflagged §1 table-heavy Q2/Q4–Q6.
2. Recheck the Unit 14 §2 Q23 complete original and publisher's rounding policy before allowing scored practice.
3. Translate remaining Unit 14 122 English-first questions in smaller source-verified accounting tranches, starting with clear cash collection and COGS cases.
4. Obtain independent accountant/Arabic editorial review. Numeric identity and arithmetic recomputation cannot guarantee translation semantics or textbook authorization.
5. Run GitHub Actions for CMA/IFRS content, translation, production build, TypeScript and ESLint before merging. Independently confirm Lovable code sync, production deploy and phone/tablet UI.

The 22 numerical answers are reproducible from the imported numbers, **not proof of publisher PDF visual verification**. All Arabic content is still an educational draft.
