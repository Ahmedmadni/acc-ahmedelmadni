# IFRS Phase 3 — Coverage Report

Date: 2026-09-30

## Baseline after Phase 2 merge

- Standards indexed: **43**
  - IFRS: **19**
  - IAS: **24**
- Detailed IFRS/IAS articles/reports found in migrations: **7**
- IFRS questions available before Phase 3: **18**
- Standards with questions before Phase 3: **12 / 43**

## Phase 3 current state

- Total IFRS/IAS questions: **284**
- Standards with at least one question: **43 / 43**
- Standards with zero questions: **0**
- Difficulty distribution:
  - Easy: **83**
  - Intermediate: **121**
  - Advanced/Hard: **80**

## Current question depth by standard

The first deep-coverage milestone is complete:

- **20 questions each** for IFRS 9, IFRS 15, IFRS 16, IFRS 18, IAS 2, IAS 12, IAS 16, IAS 21, IAS 24, IAS 36 and IAS 37.
- **At least 2 questions** for every other indexed IFRS/IAS standard.
- No indexed standard is left without a question.

| Standard | Questions |
| --- | ---: |
| IFRS 9 | 20 |
| IFRS 15 | 20 |
| IFRS 16 | 20 |
| IFRS 18 | 20 |
| IAS 2 | 20 |
| IAS 12 | 20 |
| IAS 16 | 20 |
| IAS 21 | 20 |
| IAS 24 | 20 |
| IAS 36 | 20 |
| IAS 37 | 20 |
| All remaining 32 standards | 2 each |

## Phase 3 features implemented

### Learn Mode
- immediate correct/incorrect feedback
- correct-answer reveal
- simplified explanation
- source/reference display
- running score
- difficulty filtering
- domain metadata

### Exam Mode
- up to 10 questions per selected standard
- no answer reveal while taking the exam
- answer changes allowed before submission
- result calculated only on submission
- post-submission answer review
- exam score and percentage

### Weakness analytics
- records standard, domain, difficulty and correctness
- calculates current-standard accuracy
- calculates overall accuracy
- ranks weakest domains by accuracy
- persists up to the latest 1,200 attempts in localStorage
- can be cleared by the user

## Content architecture

Question sources are merged and deduplicated in this order:

1. existing `SEED_QUESTIONS`
2. Phase 2 editorial IFRS seed
3. Phase 3 deep question seed
4. baseline all-standard coverage seed
5. approved public database questions

Database questions override a matching local seed ID.

## Content quality boundary

All new Phase 3 questions are independently authored educational questions. They are not copied from commercial ACCA, CPA, CMA, or proprietary IFRS exam banks.

The target for mature standards remains **20–50 reviewed questions per standard**. The first 11 priority standards have now reached the minimum target of **20 each**. The next depth wave can move the remaining 32 standards from the two-question baseline toward 20–50 questions each. Completed priority set:

1. IFRS 9
2. IFRS 15
3. IFRS 16
4. IFRS 18
5. IAS 2
6. IAS 12
7. IAS 16
8. IAS 21
9. IAS 24
10. IAS 36
11. IAS 37

## Detailed articles/reports baseline

The seven IFRS-category article/report slugs currently found in repository migrations are:

1. `ifrs-18-alternative-taxes-eba-august-2026`
2. `ifrs-9-expected-credit-loss-guide`
3. `ifrs-10-consolidated-financial-statements-guide`
4. `ias-24-related-party-disclosures-guide`
5. `ifrs-15-revenue-recognition-five-step-model`
6. `ifrs-18-financial-statements-practical-guide`
7. `iasb-ifrs-august-2026-ifrs-18-20`

This count is based on repository migrations, not a live Supabase production query.
