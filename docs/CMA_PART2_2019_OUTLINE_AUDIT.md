# CMA Part 2 — 2019 Outline Review and Original MCQ Batch

## Uploaded file assessment (9 November 2026)

- User supplied: `CMA P2 GLIME.pdf`; 241 PDF pages.
- The document is a **Gleim Publications 2019 Part 2 study outline**, not a multiple-choice question bank.
- All 241 pages were examined as text, with the first page visually verified. No labeled multiple-choice question collection or official answer key was present. Occasional discussion of how the CMA exam asks questions is not an MCQ bank.
- Each page bears a publisher copyright notice and expressly prohibits duplication.
- Therefore **no publisher question text, distractors or answer keys were copied from this file**. The 44 additions in this PR are *independently written application questions*, guided by its topics and checked against current platform topics, not "Gleim questions."
- The outline uses a **2019 eleven-unit sequence**, while the site's Part 2 curriculum uses **15 units**. The 2019 section numbers must never be imported as the current site's study-unit IDs.

## Source-to-application coverage

| PDF pages | Historical 2019 outline unit | New original MCQs | Example site topic mapping |
| --- | --- | ---: | --- |
| 1–20 | 1. Ethics | 4 | `p2-su14-business-ethics`, `p2-su14-ima-ethics`, `p2-su15-legislation`, `p2-su15-responsibility` |
| 21–45 | 2. Fraud and Risk Management | 4 | `p2-su14-fraud`, `p2-su12-risk-management`, `p2-su12-coso-erm` |
| 46–69 | 3. Financial Markets and Types of Securities | 4 | `p2-su5-markets`, `p2-su4-bonds`, `p2-su4-stock`, `p2-su5-portfolio` |
| 70–91 | 4. Valuation Methods and Cost of Capital | 4 | `p2-su6-stock-value`, `p2-su6-derivatives`, `p2-su6-current-capital`, `p2-su6-new-capital` |
| 92–114 | 5. Managing Current Assets | 4 | `p2-su7-working-capital`, `p2-su7-cash`, `p2-su7-receivables`, `p2-su7-inventory` |
| 115–142 | 6. Corporate Restructuring and International Finance | 4 | `p2-su8-mergers`, `p2-su8-exchange-systems`, `p2-su8-fx-risk`, `p2-su8-fx-effects` |
| 143–169 | 7. Ratio Analysis | 4 | `p2-su1-common-size`, `p2-su1-liquidity`, `p2-su2-profitability`, `p2-su2-reported-profit` |
| 170–184 | 8. Activity Measures and Financing | 4 | `p2-su3-activity`, `p2-su3-earnings-quality`, `p2-su5-short-financing`, `p2-su5-long-financing` |
| 185–205 | 9. Investment Decisions | 4 | `p2-su13-capital-budgeting`, `p2-su13-risk-real-options`, `p2-su13-discounted-cash`, `p2-su13-payback` |
| 206–219 | 10. CVP Analysis | 4 | `p2-su9-cvp`, `p2-su9-target-income`, `p2-su9-multi-product` |
| 220–241 | 11. Marginal Analysis and Pricing | 4 | `p2-su10-relevant-costs`, `p2-su10-special-orders`, `p2-su10-make-buy`, `p2-su11-elasticity` |
| **Total** | **11 historical units** | **44 original MCQs** | **Mapped to existing Part 2 topics** |

## Language, access and licensing

- Canonical new-question fields are **English**: `question.en`, `choices.en`, `explanation.en`. Before optional translation, the `ar` fields intentionally show the original English verbatim and `sourceLanguage: "en"`.
- A learner who has selected Arabic may use the browser-local translation control or the explicit external translation link. The English original and answer index remain canonical, and translation does not incur Lovable AI credits or database writes.
- No PDF or publisher-owned MCQs were added to the repository. Concept-page references are **not claims that an original publisher question appears at that page**.
- The 44 new items are distinguished from the existing **336 bilingual Part 2 original questions** (380 Part 2 originals total after addition).
- The existing 2,443 Gleim 2025 source-bank MCQs are **Part 1** and are not part of this new set. Questions in the newer 2024/2026 curricula may use different sequencing and updated laws. Do not market the 2019 outline as an official current exam question bank.
- The 2019 outline is not a complete source for all 15 current Part 2 study units; other current curriculum sections retain their existing questions.

## Quality gates

- Unique IDs `cma-p2-2019-concept-q001` to `q044`.
- Every item has a valid current Part 2 `topicId` / `studyUnit`, four non-empty English choices, one answer key (index 0–3), an independently authored explanation, and a concept-page reference explicitly labeled as **not a Gleim question**.
- Existing questions and explanations are unchanged; no changes to scoring, databases or authentication.
- `npm run cma:check-content`, translation tests, build, TypeScript and ESLint are required before merge.
- Automated checks cannot replace a professional review of every scenario, especially jurisdiction-sensitive legal/ethical material and the historical age of the outline.
