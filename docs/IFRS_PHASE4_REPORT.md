# IFRS Phase 4 — Adaptive Learning & Synced Progress

Date: 2026-09-30

## Starting point

Phase 3 left the IFRS learning section with:

- 43 indexed IFRS/IAS standards
- 284 questions
- 11 priority standards at 20 questions each
- 4 important standards at a two-question baseline
- the remaining standards at a two-question baseline
- Learn Mode, Exam Mode and local weakness analytics

## Phase 4 result

### Question bank

- Total questions: **400**
- Standards covered: **43 / 43**
- Minimum questions per standard: **5**
- Duplicate question IDs: **0**
- Unmapped IFRS questions: **0**
- Difficulty mix:
  - Easy: **115**
  - Intermediate: **167**
  - Hard: **118**

Depth tiers:

- **20 questions each**:
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
- **10 questions each**:
  - IFRS 3
  - IFRS 10
  - IFRS 13
  - IAS 7
- **5 questions each**:
  - all remaining 28 indexed standards

## Adaptive Practice

A third learning mode has been added beside Learn Mode and Exam Mode.

Adaptive Practice:

- selects up to 10 questions for the chosen standard
- ranks previously weak domains first
- uses the user's historical accuracy by domain
- prioritises harder questions when domain accuracy is equal
- falls back to balanced unseen-domain questions for new users
- provides immediate explanation/feedback like Learn Mode
- records adaptive attempts separately from Learn and Exam attempts

## Exam randomisation

Exam Mode now uses a stable per-session ordering and changes the order when a session is reset.

This avoids repeatedly presenting the same first ten questions in the same order while avoiding hydration-time randomness.

## Cross-device progress

New migration:

`supabase/migrations/20260930121500_ifrs_learning_attempts.sql`

New table:

`public.ifrs_learning_attempts`

Stored fields include:

- user_id
- client_attempt_id
- question_id
- standard_code
- domain
- difficulty
- mode
- is_correct
- answered_at

### RLS

Authenticated users can:

- read only their own IFRS attempts
- insert only attempts assigned to their own user ID
- delete only their own attempts

There is no public/anonymous database access to learning histories.

## Offline/local fallback

Local storage remains the resilient baseline:

- guests keep their learning history on the current device
- signed-in users merge local history with account history
- legacy local attempts are upgraded with deterministic IDs
- every new attempt receives a unique client ID
- account sync uses the unique `(user_id, client_attempt_id)` constraint to avoid duplicates
- if Supabase sync is unavailable or the migration has not yet been applied, quiz sessions continue to work locally

The latest 1,200 attempts are retained in the local analytics dataset.

## Sync UX

The question bank now shows one of four states:

- syncing progress
- synced to account
- local-only guest progress with a sign-in link
- sync unavailable with local fallback still active

Clearing learning history deletes local history and, for a signed-in user, also attempts to clear the account history.

## Current-standard intelligence

Weakness analysis continues to calculate:

- current-standard accuracy
- overall accuracy
- weakest domains
- attempts and correctness by domain

Adaptive Practice consumes the same statistics directly.

## Coverage guardrail

`npm run ifrs:check-coverage` now enforces:

- 43 indexed standards
- no duplicate question IDs
- no unmapped IFRS questions
- **minimum five questions for every standard**
- minimum 20 questions for the 11 Phase 3 priority standards
- minimum 10 questions for IFRS 3, IFRS 10, IFRS 13 and IAS 7

The checker also understands both explicit question-object files and the compact Phase 4 `q(...)` authoring format.

## Current-standard verification

Before adding the Phase 4 questions for recent standards, current IFRS Foundation materials were checked for:

- IFRS 14 scope and treatment as an interim first-time-adopter standard
- IFRS 19 eligibility and its reduced-disclosure-only model
- IFRS 20 timing-difference model, regulatory assets/liabilities, measurement approach and 2029 effective date

## Deployment notes

1. Apply the new Supabase migration.
2. Regenerate Supabase TypeScript types in the normal deployment workflow after the migration.
3. Run:
   - `npm run ifrs:check-coverage`
   - `npx tsc --noEmit`
   - `npm run lint`
   - `npm run build`
4. Test as:
   - anonymous guest
   - signed-in user with existing local attempts
   - signed-in user on a second browser/device
   - account with no prior attempts

## Next content milestone

The architecture can now support a second depth wave without another quiz-engine redesign.

Recommended next depth targets:

- IFRS 17: 5 → 15+
- IFRS 19: 5 → 10+
- IFRS 20: 5 → 10+
- IAS 1 / IAS 8 / IAS 10: 5 → 10+
- IAS 19 / IAS 23 / IAS 28 / IAS 32 / IAS 38 / IAS 40 / IAS 41: 5 → 10+

The longer-term mature target remains 20–50 reviewed questions for each high-traffic standard.
