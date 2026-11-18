# CMA Unit 14 Arabic Drafts — Wave 2 delivery and remaining QA

**Date:** 18 November 2026  
**Repository:** `Ahmedmadni/acc-ahmedelmadni`  
**Base:** `main` after PR #344 (`6036944b8af9737651de15b0af1020bf2e99f610`)

## Completed in Wave 2

Added **21 complete Arabic educational draft translations** (question, four ordered options, full explanation), retaining original English, source page, answer index, source status and metadata:

| Area | New question IDs | New |
| --- | --- | ---: |
| §4 Capital budgeting | Q1, Q33–34 | 3 |
| §5 Cash budgeting | Q16, Q18, Q21, Q26–30 | 8 |
| §6 Pro forma statements | Q11, Q13–14, Q20, Q22–24, Q26–28 | 10 |
| **Total** | | **21** |

The new content covers capital expenditure planning, cash collection/disbursement assumptions, cash budget dependencies, financial forecast ordering, production-cost schedules and the distinction between projected and historical covenant compliance.

## Cumulative source-question coverage

| Unit 14 section | Arabic drafts / total | Remaining |
| --- | ---: | ---: |
| §1 Sales budget | 4/8 | 4 |
| §2 Production/materials | 3/43 | 40 |
| §3 Manufacturing/selling costs | 3/19 | 16 |
| §4 Capital budget | 3/40 | 37 |
| §5 Cash budget | 8/34 | 26 |
| §6 Pro forma | 10/31 | 21 |
| **Unit 14** | **31/175 (17.7%)** | **144** |

Units 11–13 retain **315** Arabic drafts. Total Arabic educational source drafts across Units 11–14: **346** (58 + 136 + 121 + 31).

## Integrity and release gate

- Source records retain all original fields, including English wording/choices/explanations and the original correct-answer indexes.
- Expanded the strict Arabic source-ID allowlist to the exact 31 approved draft IDs, and added a separate regression test with **21 fixed original answer keys**, source-ordered numerical-token validation, and complete option/translation checks.
- The 9 existing `sourceTextStatus` flags in Unit 14 remain unchanged and **untranslated**.
- Source §1 Q2/Q4–Q6 remain English-first despite independent arithmetic checks. Recomputed values do **not** certify original PDF row/column layout.
- Unit 12's 19 and Unit 13's 2 source-layout blockers remain unchanged and unscored in graded practice.
- CI (CMA, IFRS, translation, production build, TypeScript, ESLint) must pass before merging to `main`.

## Caveats and next steps

1. **Original PDF not visually audited:** The currently accessible `CMA P2 GLIME.pdf` is 2019 Part 2, not the required 2025 Part 1 Volume 2 book. Do not treat imported tables as publisher-certified.
2. **Arabic copy remains a draft:** Professional accountant and editorial review is outstanding. Tests show structural/numeric fidelity, not semantic certification.
3. **Deployment is separate:** GitHub CI, merge, Lovable code sync, actual production publication and mobile/tablet validation must be checked independently.
4. **Next working tranche:** Prioritize source-visible numeric schedules in Unit 14 §1–3 and relevant independent calculations; use the original PDF before repairing reflowed tables, and keep the source-review ledger in GitHub issue #345 current.

This milestone introduces no new database, authentication requirement or paid translation dependency.
