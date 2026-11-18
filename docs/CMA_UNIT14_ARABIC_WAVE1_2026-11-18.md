# CMA Unit 14 — Arabic draft wave 1 handoff (2026-11-18)

## Scope and baseline
- Repository: `Ahmedmadni/acc-ahmedelmadni`; source English question bank: Gleim 2025 Part 1 Volume 2, Unit 14, 175 MCQs.
- First conservative cohort: **10 complete Arabic educational drafts**, each with stem, four ordered choices and explanation. Section 1: Q1, Q3, Q7, Q8; Section 2: Q41–Q43; Section 3: Q4, Q18, Q19.
- Remaining untranslated: **165/175**; coverage **10/175 (5.7%)**. Sections: §1 4/8, §2 3/43, §3 3/19, §4 0/40, §5 0/34, §6 0/31.
- Added `stemAr`, `choicesAr`, and `explanationAr`; unchanged source fields `stem`, `choices`, `answerIndex`, `explanation`, `page`, `topicId`, `sourceTextStatus`, and answer provenance.
- This is **repository-contained translation**, not a publisher-verified/certified translation.

## Why a selective cohort?
Unit 14 includes many multi-row numeric schedules and imported PDF tables. Several are visibly line-wrapped or have broken table layouts. A source-text-derived Arabic version could faithfully preserve tokens but still misunderstand row/column correspondence. The initial cohort therefore prioritizes independently readable conceptual questions on sales budgets, production schedules, selling/administrative costs, manufacturing overhead and exclusions from COGS.

## Existing flagged source layout items (do not certify without the original PDF)

| ID | Source page | Stored metadata |
|---|---:|---|
| 14.4.2 | 425 | `reconstructed` |
| 14.4.31 | 468 | `table-reflowed` |
| 14.4.32 | 469 | `table-reflowed` |
| 14.5.3 | 484 | `table-reflowed` |
| 14.5.4 | 485 | `table-reflowed` |
| 14.6.5 | 533 | `table-reflowed` |
| 14.6.6 | 534 | `table-reflowed` |
| 14.6.7 | 535 | `table-reflowed` |
| 14.6.12 | 543 | `table-reflowed` |

Extra visually complex but **unflagged** Unit 14 §1 Q2, Q4, Q5 and Q6 (pages 324, 328, 330, 333) are deliberately **not localized in this wave** pending source row/column alignment and recalculation. These have no stored source-review flag in the current baseline; do not claim existing quiz scoring safeguards protect them. Add explicit source-review flags only after a controlled source audit confirms transcription risk.

## Quality gates
1. Complete Arabic question, four translated choices and explanation, with the same ordered numeric tokens as the source in every corresponding field.
2. Source answer indexes pinned to independent expected values for ten items.
3. No modification to original English/source metadata or any original flagged problem.
4. A strict translated-ID allowlist must reject partial or unexpectedly added translations.
5. GitHub Actions must pass content/translation regression, TypeScript, ESLint, and production build **before merge**.
6. Lovable code sync after merge and separate production publishing/phone/tablet review must be verified, not inferred from GitHub status.

## Proposed next phase
- P0: source-verify visually all Unit 13 flagged Q13.1.34 p248, Q13.3.23 p287 and Unit 12 19 flagged problems when correct publisher PDF is provided. **The currently accessible file `CMA P2 GLIME.pdf` is a different Part 2 / 2019 source, not this 2025 Volume 2 original.**
- P1: audit Unit 14 table column integrity (especially §1 Q2/Q4–Q6 and §2/Q3 long schedules) before drafting numeric Arabic text; independently reproduce calculations.
- P2: translate remaining verified Unit 14 questions by section, preserving original keys and warning state.
- P3: expert accounting and Arabic editorial review, followed by Arabic/English UI checks on mobile/tablet and confirmation of public Lovable deployment.
