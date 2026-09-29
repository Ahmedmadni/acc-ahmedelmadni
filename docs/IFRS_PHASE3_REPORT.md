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

- Total IFRS/IAS questions: **162**
- Standards with at least one question: **43 / 43**
- Standards with zero questions: **0**
- Difficulty distribution:
  - Easy: **51**
  - Intermediate: **79**
  - Advanced/Hard: **32**

## Current question depth by standard

| Standard | Questions |
| --- | ---: |
| IAS 2 | 13 |
| IFRS 15 | 10 |
| IFRS 16 | 10 |
| IFRS 9 | 9 |
| IFRS 18 | 9 |
| IAS 16 | 9 |
| IAS 24 | 9 |
| IAS 36 | 9 |
| IAS 12 | 8 |
| IAS 21 | 8 |
| IAS 37 | 8 |
| IFRS 1 | 2 |
| IFRS 2 | 2 |
| IFRS 5 | 2 |
| IFRS 6 | 2 |
| IFRS 7 | 2 |
| IFRS 8 | 2 |
| IFRS 11 | 2 |
| IFRS 12 | 2 |
| IFRS 14 | 2 |
| IFRS 17 | 2 |
| IFRS 19 | 2 |
| IFRS 20 | 2 |
| IAS 1 | 2 |
| IAS 8 | 2 |
| IAS 10 | 2 |
| IAS 19 | 2 |
| IAS 20 | 2 |
| IAS 23 | 2 |
| IAS 26 | 2 |
| IAS 27 | 2 |
| IAS 28 | 2 |
| IAS 29 | 2 |
| IAS 32 | 2 |
| IAS 33 | 2 |
| IAS 34 | 2 |
| IAS 38 | 2 |
| IAS 40 | 2 |
| IAS 41 | 2 |
| IFRS 3 | 1 |
| IFRS 10 | 1 |
| IFRS 13 | 1 |
| IAS 7 | 1 |

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

The target for mature standards remains **20–50 reviewed questions per standard**. The current architecture now supports that target without further frontend redesign. The immediate priority for depth is:

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
