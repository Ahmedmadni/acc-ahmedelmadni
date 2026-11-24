# CMA Part 1 · Gleim 2025 Volume 2 · Unit 15 Arabic Wave 1

**Date:** 24 November 2026  
**Scope:** Section 1 — introductory variance analysis, management by exception, responsibility accounting and flexible budgets.

## New educational Arabic drafts

14 source-specific records: **15.1.1–8 and 15.1.10–15**.

The repository keeps the publisher-source **English stem, four original choices, explanation, answer index, source page and answer status untouched**; the new `stemAr`, four-option `choicesAr`, and `explanationAr` fields are independent educational translations (not publisher-certified). The site's existing question mapper automatically serves complete bilingual drafts in the CMA study library and ExamPrep without adding database calls, Lovable translation credits or external AI translation at runtime.

| Unit 15 section | Arabic / source questions |
|---|---:|
| §1 — Introductory variance analysis | **14 / 16** |
| §2 — Material variance topics | 0 / 39 |
| §3 | 0 / 46 |
| §4 | 0 / 35 |
| §5 | 0 / 12 |
| §6 | 0 / 67 |
| §7 | 0 / 18 |
| §8 | 0 / 31 |
| **Unit 15 total** | **14 / 264 (5.3%)** |

**Held back:** §1 Q9 concerns writing significant favorable standard-cost variances to cost of goods sold vs allocating them to inventories; its financial reporting treatment needs a more detailed source and accounting presentation review. §1 Q16 and the remaining sections are English-first pending subsequent educational and numeric review. A missing Arabic draft does **not** imply the question is technically wrong.

## Source handling and verification

- No publisher-source English, answer index, source page, original choice order, or question count changed. Numeric tokens within each new question, choice and solution must remain exactly aligned, including `10%` in §1 Q6.
- Answer positions and publisher text fingerprints for all fourteen original English source items are pinned by `scripts/tests/cma-unit15-arabic-wave1.test.mjs`. In particular, §1 Q4 and §1 Q11 explain why favorable deviations also warrant review; §1 Q8 protects controllability as a core principle, and §1 Q15 retains variable-per-unit / fixed-in-total budget logic.
- Coverage and complete four-option Arabic translations are enforced by `scripts/check-cma-content.mjs`; no unlisted Volume 2 record can be silently marked as translated.
- Source-validation limits: the 2025 Gleim Part 1 Volume 2 original PDF pages for publisher-line visual matching are not held in the available ChatGPT Library; the available `CMA P2 GLIME.pdf` is a different 2019 Part 2 text. Therefore these new educational translations do **not** imply that each imported English source question has been visually verified against the licensed book.
- For official exam context, IMA confirms that CMA Part 1 includes Planning, Budgeting and Forecasting and that English CMA exams moved to case-based items in the September/October 2026 window in most regions. The source is **curriculum context, not a license to copy or an endorsement of our draft translation**:
  - https://www.imanet.org/ima-certifications/cma-certification
  - https://prod.imanet.org/cma-case-based-questions

## Release check

`node --test scripts/tests/cma-unit15-arabic-wave1.test.mjs`, `npm run cma:check-content`, TypeScript, build and ESLint code-quality checks are blocking in CI. Passing them establishes structure and unchanged pinned source fields, not specialist editorial certification or pixel-perfect tablet/browser behavior.

**Next tranche:** investigate §1 Q9/Q16; then translate verified standalone §2 items with numerical worked fixtures. Keep the 25 Unit 14 review-only cases blocked until original 2025 source-page comparisons are possible.
