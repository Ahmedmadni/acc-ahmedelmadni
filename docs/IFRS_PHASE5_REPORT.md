# IFRS Phase 5 — Complete Standard Guides & 540-Question Bank

Date: 2026-09-30

## Why this phase was needed

A review of the public-facing architecture showed two discoverability/content-depth problems:

1. The **Articles** tab rendered a short summary card for most standards. Only a small subset of standards had a separate detailed article link.
2. The **Question Bank** existed as a separate tab, so a user browsing standard cards could reasonably conclude that a standard had no questions unless they explicitly switched tabs and selected it.

Phase 5 fixes both the content gap and the discoverability gap.

## Comprehensive explanation coverage

There are now **43 comprehensive guide records — one for every indexed IFRS/IAS standard**.

Every guide contains, in Arabic and English:

- scope / when the standard applies
- core principle
- recognition, measurement and accounting treatment
- presentation and disclosure
- practical application steps
- common pitfalls
- simplified worked/conceptual example

The standard card now shows the scope and core principle immediately, with an expandable **Complete Standard Guide / الشرح الشامل** section for the deeper material.

Existing long-form knowledge articles remain available as additional reading where they already exist.

## Question bank milestone

Static question inventory after Phase 5:

- **540 questions total**
- **43 / 43 standards covered**
- **minimum 10 questions per standard**
- **0 duplicate question IDs**
- **0 unmapped IFRS/IAS questions**

Difficulty distribution:

- Easy: **143**
- Intermediate: **223**
- Hard: **174**

Depth tiers:

### 20 questions each

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

### 10 questions each

Every other indexed standard, including:

- IFRS 1, 2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 14, 17, 19, 20
- IAS 1, 7, 8, 10, 19, 20, 23, 26, 27, 28, 29, 32, 33, 34, 38, 40, 41

## Public UX improvements

Each standard card now exposes:

- the standard code and topic
- visible question count, e.g. `20 سؤال`
- immediate **When does it apply? / متى يطبق؟** explanation
- immediate **Core principle / الفكرة الأساسية**
- expandable comprehensive guide
- a direct **Practice X questions / تدرّب على X سؤال** action
- official IFRS source link
- existing detailed article link where available
- practical calculator/tool links where available

Selecting **Practice** automatically:

1. switches to the Question Bank tab,
2. selects the exact standard,
3. scrolls to the quiz engine,
4. retains Learn / Exam / Adaptive modes.

The main Question Bank tab also displays the total local bank size so users can see that questions are available before opening it.

## Search

Search now indexes the complete guide content, not just the old one-paragraph summary.

A user can therefore search for concepts found in:

- scope
- core principles
- recognition/measurement
- disclosures
- application steps
- pitfalls
- examples

## Question architecture

`src/data/ifrs-question-bank.ts` is now the single local question-bank registry.

It merges and deduplicates all local editorial seeds and exposes:

- `IFRS_LOCAL_QUESTION_BANK`
- `IFRS_LOCAL_QUESTION_COUNTS`
- `IFRS_LOCAL_QUESTION_TOTAL`
- `detectIfrsStandardCode()`

The quiz engine then overlays approved public database questions by ID, preserving the existing database-override behaviour.

## Content-quality guardrail

`npm run ifrs:check-coverage` now verifies both questions and explanations.

It fails if:

- indexed standard count is not 43
- a question ID is duplicated
- a question cannot be mapped to a standard
- any standard has fewer than **10** questions
- any Phase 3 priority standard has fewer than **20** questions
- a comprehensive guide is missing
- a guide code is duplicated
- a guide lacks the required minimum explanation sections

Guide completeness requires, per standard:

- Arabic + English scope
- Arabic + English core principle
- at least 3 accounting-treatment bullets in each language
- at least 2 disclosure bullets in each language
- at least 3 practical steps in each language
- at least 3 common pitfalls in each language
- Arabic + English simplified example

## CI added

A new GitHub Actions workflow is included:

`.github/workflows/ifrs-quality.yml`

For IFRS-related pull requests it runs:

1. `npm ci`
2. `npm run ifrs:check-coverage`
3. `npx tsc --noEmit`
4. `npm run lint`
5. `npm run build`

This closes an important validation gap from earlier phases where GitHub had no visible CI workflow.

## Source and copyright approach

The expanded guides are independently written educational summaries.

Research inputs include:

- IFRS Foundation for authoritative/current requirements
- `ramyatrouny/ifrs-skill` for MIT-licensed structured research/workflow reference
- existing internal accounting knowledge and linked project sources

The website does **not** reproduce the full copyrighted text of IFRS Accounting Standards.

## Recent standards

Current official IFRS Foundation information was checked before finalising the recent-standard guides/questions, particularly:

- IFRS 18
- IFRS 19
- IFRS 20
- IFRS 14 transition context

## Deployment verification

The repository content can only be considered ready to merge after the new IFRS Quality workflow passes.

After merge, the public site still depends on the hosting/deployment pipeline publishing the latest `main` build. A repository merge alone must not be treated as proof that the public URL is already showing the new release.
