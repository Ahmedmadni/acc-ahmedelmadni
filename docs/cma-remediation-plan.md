# CMA Part 1 & Part 2 — Remediation and Acceptance Plan

**Baseline reviewed:** `main` at `7dfe9e50c65f0a32f761c014ba55ef1cb2da10a6` (2026-10-24).  
**Purpose:** close the remaining editorial, source-verification, and release-validation gaps without rebuilding completed curriculum content.

## Current documented inventory

- Part 1: Study Units 1–20; 80 guided sections/topics and 20 linked cases.
- Part 2: Study Units 1–15; 56 guided sections/topics and 15 linked cases.
- Combined curriculum guides: 136 sections and 35 linked cases.
- Question inventory documented in project status reports: 3,303 total; includes 2,443 English source-bank questions from Gleim 2025 Part 1 and separately authored bilingual practice questions. Counts must be reconciled against the current checker before release; do not assume all source questions are translated.
- Part 2 content was authored from supplied Gleim 2024 teaching outlines; no complete Part 2 publisher MCQ bank is documented as supplied.

## Priority backlog

### P0 — Reproducible build and test evidence
- [ ] Compare `package.json` and `package-lock.json`; resolve the reported lockfile/dependency mismatch in a dedicated change.
- [ ] Run clean dependency installation in CI, then TypeScript checks (if configured), lint, `npm run cma:check-content`, and production build.
- [ ] Record exact command, result, commit SHA, and workflow URL; distinguish locally reported checks from CI evidence.
- [ ] Do not label the release build verified until a clean install and production build pass on the same commit.

**Acceptance:** clean install succeeds from the committed lockfile; CMA content checker and configured quality gates pass; production build passes, or each blocker is explicitly documented with a reproducible log.

### P1 — Arabic translation of the Part 1 source MCQ bank
- [ ] Treat all 2,443 source questions as untranslated until reviewed; an `ar` field containing the English stem is not an Arabic translation.
- [ ] Translate in bounded batches, preserving stable IDs, source unit/section/question number, correct answer, numerical values, table relationships, and rationale meaning.
- [ ] Translate stem, all four options, and explanation together. Keep accounting terms consistent and use Arabic numerals/formatting only where this does not change calculations.
- [ ] Add a checker/report that identifies English-identical `ar` fields and missing/partial translations.
- [ ] Have a reviewer verify every translated answer against the unchanged source answer key; do not “correct” publisher answers silently.

**Acceptance per batch:** zero missing Arabic fields; zero stem/option/explanation left untranslated without an explicit exception; stable answer key; checker passes; reviewed sample and exception list recorded. Do not report the entire bank as translated until all 2,443 records pass.

### P1 — Source exceptions and table verification
- [ ] Review Volume 1 exception: SU9 §3 Q1 has no printed answer/rationale; preserve the inferred status and verify it against any additional supplied source if available.
- [ ] Review Volume 1: SU7 §2 Q20 has a reconstructed clipped option; compare the recorded source page/chart/rationale and keep the reconstruction visibly labeled.
- [ ] Review Volume 2 inferred answers: 16.1.19, 18.2.4, 18.3.5, 19.2.28, 20.2.26. Keep them marked as inferred unless a printed key is located.
- [ ] Review Volume 2 reconstructed distractors: 14.4.2, 15.8.23, 17.2.15, 17.2.25, 19.2.12. Keep reconstructed source-text status visible in audit metadata.
- [ ] Visually compare shared-data cases and multi-column tables against the original PDF pages, focusing on row/column alignment, signs, units, dates, and which questions reference each fact pattern.
- [ ] Record each reviewed exception as verified / corrected / unresolved, with PDF page and reviewer note.

**Acceptance:** no inferred or reconstructed item is silently presented as fully source-verified; all exceptions have a traceable status; table/case checks are logged against the actual source pages.

### P2 — Curriculum and bilingual practice integrity
- [ ] Run `npm run cma:check-content` against the final branch.
- [ ] Confirm Part 1 and Part 2 unit identifiers remain separate in question selection, filters, and exam mode.
- [ ] Recalculate numerical questions in both languages and compare answer keys and explanations.
- [ ] Spot-check each of the 35 linked cases for correct question linkage and no accidental fact-pattern leakage between cases.
- [ ] Reconcile totals in status documents with the checker output; distinguish source MCQs from original practice questions and do not double-count imported records.

**Acceptance:** content checker passes; all inventory totals reconcile; answer-key and case-linkage exceptions are explicitly listed.

### P2 — UI and release smoke test
- [ ] Test question bank, study guides, filters, random practice, exam mode, answer explanations, language switching, and RTL layout.
- [ ] Confirm inferred/reconstructed-source warnings are legible in Arabic and English.
- [ ] Test at desktop and mobile widths; verify no question/option/table content is clipped.
- [ ] Capture screenshots or test logs for each major flow and record browser/device.

**Acceptance:** no blocker affecting selecting a unit, answering questions, reading explanations, or switching language; any lower-severity UI issue has a tracked follow-up.

## Suggested execution sequence

1. Fix dependency reproducibility and establish CI/build evidence.
2. Verify all existing content checker counts and publish a reconciled inventory.
3. Resolve or formally log the listed source exceptions and visually inspect source tables.
4. Translate the Part 1 source bank in small, reviewable batches with an automated completeness check.
5. Run full bilingual, case-linkage, and UI smoke tests; update the final delivery report only from recorded evidence.

## Guardrails

- Do not delete or regenerate existing content simply to make totals look consistent.
- Do not invent missing publisher answers or represent inferred answers as printed answers.
- Do not claim visual PDF verification unless the original PDF and page were actually inspected.
- Do not claim CI/build success from static code inspection alone.
- Keep each translation or dependency fix isolated and reviewable; merge only after its own acceptance checks pass.

## Evidence links

- [Part 1 Volume 1 import status](cma-mcq-volume1-status.md)
- [Part 1 Volume 2 import status](cma-mcq-volume2-status.md)
- [Part 2 Units 1–7 status](cma-part2-units-1-7-status.md)
- [Part 2 Units 8–15 status](cma-part2-units-8-15-status.md)
- [Part 1 Units 7–9 status](cma-study-units-7-9-status.md)
- [Part 1 Units 10–14 status](cma-study-units-10-14-status.md)
- [Part 1 Units 15–20 status](cma-study-units-15-20-status.md)
