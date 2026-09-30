# IFRS Phase 5 — Full Standard Guides & 540-Question Coverage

Date: 2026-09-30

## Why this phase was required

A review of the current `main` branch found three user-facing gaps:

1. **The standards page mostly showed short summary cards.**
   - Only a small subset of standards linked to long-form knowledge articles.
   - The remaining standards had useful one-paragraph summaries but no substantial in-page explanation.

2. **The question bank was isolated behind a separate tab.**
   - A user reading a specific standard could not directly open that standard's practice questions.
   - The question bank defaulted to IAS 2 instead of inheriting the standard the user was reading.

3. **A malformed local IFRS seed array was present in `src/lib/exam-bank.ts`.**
   - One question boundary contained a double comma (`},,`).
   - This was corrected because it can break a TypeScript/Vite build and therefore prevent recent question-bank changes from reaching the deployed site.

## Phase 5 content result

### Full explanations

- Indexed standards: **43**
- Standards with a structured full guide: **43 / 43**
- Missing guides: **0**

Every standard now has six structured explanation areas:

1. Scope & objective
2. Recognition & measurement
3. Presentation & disclosure
4. Practical implementation workflow
5. Common pitfalls
6. Simplified practical example

The guides are bilingual (Arabic / English) and independently rewritten educational content.

New source file:

`src/data/ifrs-standard-guides.ts`

## Question bank result

- Total local IFRS / IAS questions: **540**
- Standards with questions: **43 / 43**
- Minimum questions for any standard: **10**
- Maximum questions for a standard: **20**
- Duplicate question IDs: **0**
- Unmapped questions: **0**

Difficulty distribution:

- Easy: **163**
- Intermediate: **218**
- Hard: **159**

### Depth tiers

**20 questions each**
- IFRS 9
- IFRS 15
- IFRS 16
- IFRS 18
- IAS 2
- IAS 12
- IAS 16
- IAS 21
- IAS 24
- IAS 36
- IAS 37

**10 questions each**
- Every other indexed IFRS / IAS standard.

This means there is no longer a five-question-only or empty standard.

## User-facing standards page changes

Each standard card now displays its actual local question count.

Each standard contains an expandable **Full Standard Guide** directly inside the standards page.

The expanded guide shows the six sections listed above.

Each expanded standard also contains a direct CTA:

**Practice this Standard / ابدأ أسئلة هذا المعيار**

When clicked:

- the interface switches to the Question Bank tab;
- the selected standard is passed directly to the question engine;
- the quiz no longer always starts at IAS 2.

The top of the page also displays the total local question count.

The previous tab title **Explanatory Articles / مقالات الشرح** has been changed to:

**Detailed Standard Guides / شرح المعايير بالتفصيل**

This better reflects what is actually available.

## Question catalogue architecture

New central catalogue:

`src/data/ifrs-question-bank.ts`

It merges all local IFRS question layers into one canonical local catalogue and exports:

- `IFRS_LOCAL_QUESTIONS`
- `IFRS_LOCAL_QUESTION_COUNTS`
- `IFRS_LOCAL_QUESTION_TOTAL`
- standard-code detection

The interactive question bank now consumes this catalogue before merging any approved public database questions.

Therefore an empty or unavailable Supabase `exam_questions` table does **not** remove the local 540-question bank from the user interface.

## New Phase 5 question batches

- `src/data/ifrs-quiz-phase5-a.ts` — 70 questions
- `src/data/ifrs-quiz-phase5-b.ts` — 70 questions

These add five additional original questions to each of the 28 standards that previously had only five questions.

All new questions are independently authored educational questions and are not copied from commercial or proprietary question banks.

## Coverage guardrails

### Question coverage

`npm run ifrs:check-coverage`

Now enforces:

- exactly 43 indexed standards
- no duplicate question IDs
- no unmapped IFRS questions
- **minimum 10 questions for every standard**
- minimum 20 questions for the 11 deep-priority standards

### Guide coverage

New:

`npm run ifrs:check-guides`

Validates:

- 43 indexed standards
- 43 guide entries
- no missing standard guides
- no unknown guide codes
- no duplicate guide entries

### Combined content check

New:

`npm run ifrs:check-content`

Runs both question and guide coverage checks.

## Recent-standard verification

The recent standards used in new guides/questions were checked against current IFRS Foundation information, including:

- IFRS 14 as a limited interim standard for qualifying first-time adopters.
- IFRS 19 eligibility, reduced-disclosure model and 1 January 2027 effective date.
- IFRS 20 regulatory timing-difference model and 1 January 2029 effective date, replacing IFRS 14.

## Deployment / validation note

The GitHub connector can statically review and update the repository but cannot execute the project checkout.

Before or during deployment, the normal environment should run:

```bash
npm run ifrs:check-content
npx tsc --noEmit
npm run lint
npm run build
```

The malformed seed-array syntax found in this phase was fixed before the new content work was added.
