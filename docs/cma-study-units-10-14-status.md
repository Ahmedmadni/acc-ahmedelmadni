# CMA outlines 10–14: coverage and verification

This change covers the five user-supplied **Gleim CMA Part 1, 2024 study outlines** for units 10–14. All 20 numbered sections now have an original Arabic/English study guide, titled lessons, an application workflow, pitfalls, a worked practical case and associated practice questions. The source outlines were checked against their contents pages and numbered example families. The explanations and new numerical cases are independently written teaching adaptations, not verbatim textbook reproductions.

The preceding unit 7–9 guides also gain 22 detailed bilingual lessons across all 11 sections. Those additions expand the existing concepts and worked cases; their 44 previously added bilingual questions are retained.

| Unit | Outline pages | Guided sections | Detailed lessons | New bilingual MCQs | New linked case tasks | Existing 2025 source MCQs retained |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 10 — Supply Chain Management | 13 | 3/3 | 8 | 12 | 3 | 59 |
| 11 — Business Process Improvement | 12 | 2/2 | 6 | 8 | 3 | 58 |
| 12 — Forecasting Methods | 24 | 5/5 | 15 | 20 | 3 | 155 |
| 13 — Budgeting Concepts and Methodologies | 18 | 4/4 | 10 | 16 | 3 | 123 |
| 14 — Budget Calculations and Pro Forma Statements | 20 | 6/6 | 15 | 24 | 4 | 175 |
| **Total** | **87** | **20/20** | **54** | **80** | **16** | **570** |

Every section has at least two detailed lessons in addition to its overview, workflow, pitfalls and practical case. The five linked cases supplement the 20 individual practical cases. The library route renders the new lessons in both language modes, exposes outline pages separately from the 2025 MCQ-bank pages, and registers all 80 new questions through the shared bank already used by ExamPrep.

## Section and example-family audit

| Source section / printed pages | Concepts and methods covered | Numbered source example families addressed by original applications |
| --- | --- | --- |
| 10.1 / 2–4 | Pull/JIT, cells, suppliers, setup frequency, five lean principles, quality, interruption risk | No numbered example in this section; JIT savings and takt applications added |
| 10.2 / 5–11 | Multilevel BOM explosion, net material needs and lead times, MRP/MRP II/ERP/ERP II, implementation risks, relevant make-or-buy and opportunity costs | 10-1: material requirements and order timing |
| 10.3 / 12–13 | Theoretical/practical/normal capacity, unused cost, denominator effects, constraints and investment | No numbered example; capacity rates and unused resource cost added |
| 11.1 / 2–5 | Customer value, value/supply chains, value-added versus necessary/nonvalue activities, engineering and life-cycle cost | No numbered example; target cost and redesign applications added |
| 11.2 / 6–12 | Process interdependence, bottlenecks, activity analysis, continuous improvement, BPR, benchmarking, four quality-cost categories | 11-1: implementation cost versus recurring BPR savings |
| 12.1 / 2–5 | Correlation, simple/multiple regression, R², least-squares coefficients, assumptions and extrapolation | 12-1 and 12-2: explained variation and regression computation |
| 12.2 / 6–7 | Cumulative average, doubling, total/incremental time, general equation, learning limits | 12-3 and 12-4: learning rates and cumulative/incremental work |
| 12.3 / 8–12 | Payoff tables, expected value, salvage, risk aversion, unattainable average outcomes, joint/conditional probability, perfect information and sensitivity | 12-5 through 12-9: expected outcomes, scrap, risk, possible outcomes and probability combinations |
| 12.4 / 13–21 | Strategic process, SWOT/PEST, five forces, broad/narrow cost and differentiation, relative share and growth matrix | No numbered examples; strategy classification and BCG calculations added |
| 12.5 / 22–24 | Vision/mission, measurable objectives, strategic/operational links, effectiveness/efficiency, goal congruence, scenarios and contingency triggers | No numbered examples; SWOT and goal alignment applications added |
| 13.1 / 2–9 | Budget roles, participation, governance/calendar, horizons, external assumptions, controllability, slack, revisions and limitations | No numbered examples; participation and responsibility scenarios added |
| 13.2 / 10–11 | Developing standards, practical versus ideal, allowed inputs for actual output, revision and cost reconciliation | No numbered examples; materials, normal yield and labor standards added |
| 13.3 / 12–13 | Master-budget dependencies, operating/financial schedules, inventory and cash bridges | No numbered examples; production and profit/cash links added |
| 13.4 / 14–18 | Project, incremental, indirect allocation, activity-based, zero-based, rolling and flexible/static distinction | 13-1 through 13-5: project, traditional allocation, activity drivers and rolling horizon |
| 14.1 / 3 | Sales units, prices, mix and separate cash timing | 14-1: product/month sales budget |
| 14.2 / 4–5 | Production, next-period finished stock, material usage versus purchases, changing efficiency and price | 14-2 and 14-3: production and materials schedules |
| 14.3 / 6–11 | Labor and benefits, variable/fixed factory overhead, unit cost and inventory layers, COGS, contribution, nonmanufacturing expenses and operating profit | 14-4 through 14-11: labor, benefits, overhead, unit cost, COGS, selling/admin and income |
| 14.4 / 12–13 | Capital-payment timing, collection cohorts, discounts and receivables | 14-12 and 14-13: capital spending and collection schedules |
| 14.5 / 14–16 | Supplier-payment cohorts, noncash exclusions, minimum cash, borrowing, interest/principal and rollforward | 14-14 through 14-16: disbursements and cash budgets |
| 14.6 / 17–20 | Projected income/position/cash flow, gross-margin changes, percentage-of-sales assumptions, retained earnings and ratio interpretation | 14-17 through 14-19: forecast income, margin and percentage-of-sales methods |

All **35 numbered example families** in these five outlines are mapped above. This is a method-coverage audit: the new 80 MCQs and worked cases are original practice, not a claim to reproduce a separate 80-question source bank. The 2025 numbered MCQs are a different dataset and retain their original IDs and page references.

## Resulting library totals

- 80 topic sections for units 1–20, of which **57 have study guides for units 1–14**.
- 2,875 registered MCQs: **432 original bilingual** and **2,443 English source questions**.
- The source totals stay 1,060 for Volume 1 and 1,383 for Volume 2; the checker enumerates every section/question number, including all 217 source questions in Unit 1.
- 14 linked unit cases. Units 15–20 remain question-bank sections awaiting their teaching outlines.
- Source-bank Arabic translations and previously marked inferred answers/reconstructed PDF tables remain pending from the earlier import drafts. Their flags are preserved. This change does not claim those separate reviews are complete.

## Verification

`npm run cma:check-content` verifies all topic/guide/question associations, source-bank numbering and provenance flags, four new bilingual questions per section, detailed bilingual lessons for units 7–14, unique lesson headings and one linked case per guided unit. It independently recomputes **54 numerical exercises** and checks the keyed answer in both languages. TypeScript, targeted ESLint and the production build are required before raising the change for review.

This change follows `feat/cma-guides-units-7-9` / PR #287. That draft in turn follows the source-bank imports. A draft branch upload is not a deployment to the live website.

## Source identity

| Supplied filename | SHA-256 |
| --- | --- |
| `CMA_CMA1_BookOnline_SU10_Outline.pdf` | `28bc8fca5286d0dc8662cf6902d634f64e1c24ce073e6f8c6b982417479f7797` |
| `CMA_CMA1_BookOnline_SU11_Outline.pdf` | `1db0776180d605148c29b264a1f696d159adcd1168420584863219dc5a4db331` |
| `CMA_CMA1_BookOnline_SU12_Outline.pdf` | `53b9ca8de6aecb6c2f5dc3ff4da04c59fb3f67a8b093442a117077ff65bc3bb8` |
| `CMA_CMA1_BookOnline_SU13_Outline.pdf` | `47b45f38a957c0cbf974351bda010476d8ce2a5a2e9a10ba262ff5901c8b7ed4` |
| `CMA_CMA1_BookOnline_SU14_Outline.pdf` | `c75de6d42120c1d05bbcfc27e84481c2aec9bd8b4147e7a172fc4750db7cb689` |
