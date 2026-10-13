# Dip IFRS 2025 (book 2): editorial audit ledger

Internal working record only. This file is not imported by the website and must not be shown as a learner-facing citation. Learner pages cite the relevant IFRS/IAS requirements.

## Source and completion boundary

- Source: scanned `D:\IFRS\Dip IFRS 2025 BOOK  (2).pdf` (582 PDF pages). Rendered pages and the older working log are under `D:\IFRS\_codex_analysis`; that log stopped around PR #120 and is **not** the latest state.
- The source PDF is still needed. Do **not** claim the book is complete or safe to delete until every page containing instructional material, numerical examples, and questions has been reviewed against the published site or an explicit exclusion reason.
- The `/library/standards` library has 43 indexed accounting standards. IFRS for SMEs, IFRS S1/S2, IFRS governance and the Conceptual Framework need separate editorial placement, not automatic assignment to one of the 43.
- A green CI run checks structure, TypeScript and build. It does **not** prove accounting answers or standard citations are correct.

## Integrated material verified in the October 13 pass

- PR #181–#199 added and validated remaining quick-quiz items from chapters 1–18 and 20; chapter 19 (IFRS for SMEs) had separate treatment in PR #180.
- PR #200 added the last chapter-21 inventory-profit question after checking the source image and recalculating the parent/NCI effect.
- PR #201 added the missing chapter-22 non-current-asset transfer exercise. The source's net $75,000 charge relies on straight-line depreciation and zero residual value that are not stated; the public answer labels those assumptions and does not mechanically apportion that net amount 75/25.
- Chapter-23 five-question quiz already mapped to the current practice cases; the J/P/S full consolidation exercise is present as `ifrs-book2-ifrs10-j-p-s-group-position`.
- Chapter-24 five-question quiz and its joint-arrangement worked examples already mapped to the current practice cases.
- PR #202 added the integrated Alpha/Beta/Gamma group statement from question-bank Q25. The printed answer includes a contingent lawsuit asset at acquisition despite IFRS 3.23A. The corrected goodwill is $30.5m and corrected NCI is $24.9m. The corrected statement balances at $457.74m with gross deferred-tax presentation; a $456.42m net-tax presentation is conditional on IAS 12.74 offset criteria. The case notes the assumptions required for deferred tax on the associate and eliminated profit.

All these PRs were merged only after the repository's content check, `tsc --noEmit`, and build passed. Do not assume older PR numbers in a recurring task's prompt are current; inspect GitHub `main` and open PRs on every run.

## Practice bank inventory and mapping

The scanned question-bank prompts on PDF pp. 506–525 contain Q1–Q29. On October 13 their titles/requirements were compared visually with the unified practice-case IDs (not OCR alone):

| Bank items | Status in standard library |
| --- | --- |
| Q1 IFRS Foundation governance; Q2 sustainability disclosure; Q3–Q4 Conceptual Framework | Not members of the 43 accounting-standard pages. Need separate placement/exclusion review. |
| Q5 Jenson; Q6 Gains; Q7 Lis; Q8 Eastway; Q9 Biogenics; Q10 Extract; Q11 Jerzy; Q12 PQR; Q13 Sirus; Q14 DT Group; Q15 Courtney; Q16 biological assets; Q17 Vident; Q18 Polymer; Q19 Hewlett; Q20 Pilum; Q21 Ace | Mapped to existing open practice cases, often split across standards. Conditional answers remain conditional where source facts are insufficient. |
| Q22 IFRS for SMEs | Separate standard, not one of the 43; verify current SME edition/effective date before any dedicated placement. |
| Q23 Barcelona/Madrid; Q24 Reprise/Encore; Q25 Alpha Group; Q26 Fallowfield/Rusholme; Q27 Panther Group; Q28 Hever; Q29 Smith Group | Mapped to open practice cases. Q25 now also has a full corrected consolidated statement in PR #202. |

The inventory above confirms **prompt presence**, not final line-by-line validation of every solution. The answer-bank pages 528–566 still require a comprehensive image-by-image audit, including reconciliation with cases on the site. The prior targeted checks of Q25's printed answer used PDF pp. 558–560.

## Remaining work before completion

1. Build a page-level register for the full 582-page PDF. Mark each substantive worked example, end-of-chapter question, quick quiz, bank question and answer as: published and independently verified; incorporated into an existing case; corrected with rationale; or excluded with reason. Record chapter and PDF page.
2. Reconcile bank answers pp. 528–566 against the mapped cases, visually verify all amounts and options, recalculate the entries, and correct any proven error. Do not invent MCQ options, numeric assumptions or definitive answers where the source is indeterminate.
3. Re-audit worked examples and technical commentary throughout the earlier chapters, not just the quick quizzes and bank prompts; verify classification to the correct standard and split cross-standard examples.
4. Revisit conditional cases, especially Gains' $25,000 impairment in reported profit, Biogenics' pre-/post-recognition development spend, PQR's hedge-designation and NRV facts, and Panther's undated intragroup inventory transfers. Keep uncertainty explicit unless evidence resolves it.
5. Run content/coverage, TypeScript and build checks for each small PR, verify GitHub CI and mergeability, then merge. Do not delete or move source/user files.

