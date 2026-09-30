# IFRS Phase 6 — 860-Question Deep Coverage

Date: 2026-10-01

## Goal

Phase 5 established:

- 43 / 43 structured IFRS and IAS guides
- original practical explanations authored for the site under accountant Ahmed Elmadani's name
- 540 local questions
- minimum 10 questions per standard
- 20 questions for the original 11 priority standards

Phase 6 raises the question-bank depth so that **every indexed Standard has at least 20 local questions**.

## Final coverage

- Indexed standards: **43**
- Standards with questions: **43 / 43**
- Total local questions: **860**
- Minimum questions per standard: **20**
- Maximum questions per standard: **20**
- Duplicate question IDs: **0**
- Unmapped IFRS questions: **0**

Difficulty distribution:

- Easy: **259**
- Intermediate: **346**
- Hard: **255**

## Phase 6 question layer

New file:

`src/data/ifrs-quiz-phase6-guide-mastery.ts`

Phase 6 adds **320 questions**:

- 32 standards entered the phase with 10 questions
- each receives 10 additional guide-mastery questions
- 32 × 10 = 320 new questions
- 540 + 320 = 860 total questions

The 11 standards that already had 20 questions are not padded with additional Phase 6 questions.

## What the new 10 questions test

For each target Standard, the new layer covers:

1. Scope and objective
2. Recognition and measurement
3. Presentation and disclosure
4. Implementation workflow
5. Common pitfalls
6. Practical example
7. Identify the Standard from its scope
8. Identify the Standard from its accounting principle
9. Identify the Standard from its practical example
10. Match the Standard with the correct accounting principle

These questions are designed as a **revision and comprehension layer** on top of the existing technical question bank.

They do not replace the previously authored technical, scenario and calculation-oriented questions.

## Editorial source

The Phase 6 questions are generated from the site's own structured guide content in:

`src/data/ifrs-standard-guides.ts`

That guide content is original editorial material authored specifically for the website under the name of **accountant Ahmed Elmadani**.

External IFRS Foundation pages and research repositories remain verification references for:

- scope
- terminology
- effective dates
- amendments and current status

The published explanation and the guide-mastery questions are not copied from those sources.

## User experience impact

The existing standards page already displays:

- the structured guide for every Standard
- the local question count on every Standard card
- a visible CTA such as:
  - `حل 20 سؤال عن IAS 40`
  - `Practice 20 IAS 40 questions`
- direct switching from the selected Standard into its question bank

Because the displayed count comes from the canonical local catalogue, the page will now show **20 questions for every Standard**.

## Question-bank architecture

`src/data/ifrs-question-bank.ts` now includes:

`IFRS_PHASE6_GUIDE_QUESTIONS`

The local question bank remains available independently of Supabase.

Database-approved questions can still be merged on top of the local catalogue at runtime.

## Guardrail

`npm run ifrs:check-coverage` now enforces:

- exactly 43 indexed standards
- exactly 860 local IFRS/IAS questions for this milestone
- no duplicate IDs
- no unmapped questions
- minimum **20 questions for every Standard**

The checker understands the Phase 6 generated layer and reconstructs its stable IDs and difficulty distribution from the target list.

## Static verification result

Verified from repository content:

- total: **860**
- Phase 6 targets: **32**
- unique Phase 6 targets: **32**
- indexed standards: **43**
- standards below 20 questions: **0**
- duplicate IDs: **0**
- unmapped questions: **0**

## Validation commands

The repository execution environment should run:

```bash
npm run ifrs:check-content
npx tsc --noEmit
npm run lint
npm run build
```

The GitHub connector can verify repository structure and static inventories but does not execute the project toolchain.
