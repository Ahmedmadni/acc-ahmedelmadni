# CMA: cached Arabic translation rollout and Part 2 MCQ intake

## What is implemented in the feature branch
- On-demand Arabic translations for the English-only **Part 1 source-bank** questions in both `/library/cma` and the ExamPrep tool.
- English source text, identifiers, four choice positions, original answers and explanations remain immutable. Translation only affects presentation.
- Numeric tokens are checked field-by-field; bad model output is rejected.
- Generated translations are visibly tagged as **machine translations, not technically approved**. Learners can display the original English at any point.
- Previously translated questions are reused via a shared Supabase cache and local browser cache. The source fingerprint invalidates cached translations when English source text changes.
- New generation requires login, usage quotas and the server-side Lovable AI gateway. Cache reads are public.

## Production activation checklist
1. **Completed 9 Nov 2026:** dependency/build fix [PR #296](https://github.com/Ahmedmadni/acc-ahmedelmadni/pull/296) was merged into `main`; [PR #297](https://github.com/Ahmedmadni/acc-ahmedelmadni/pull/297) now directly targets `main`.
2. **Before enabling new translations**, apply `supabase/migrations/20261109103000_cma_translation_cache.sql` to the production Supabase project.
3. In the secure **server-side** deployment secrets, configure `SUPABASE_SERVICE_ROLE_KEY` (or supported `SUPABASE_SECRET_KEY`). **Never place a service secret in the repo, `.env` commit or a `VITE_` variable.**
4. Confirm existing server-side `LOVABLE_API_KEY` and public `SUPABASE_URL` / `SUPABASE_PUBLISHABLE_KEY`.
5. Smoke-test: logged-out learner reads English, a signed-in learner translates one uncached item, a second learner reuses the cached translation, toggling English restores original options, the answer key and score remain identical, invalid/expired sessions cannot trigger a paid translation.
6. Verify the new table is publicly readable but anonymous/authenticated clients cannot insert or update machine translations.
7. Inspect translation quotas and gateway cost; current limits are 15 new questions/user/day and 200 globally/day. These checks are best-effort counts rather than transactionally atomic and should be hardened before large public usage.
8. Monitor errors and manually review selected quantitative and technical translations. Do not imply that translation validation proves accounting correctness.

**Degraded mode:** Without the migration and server secret, existing English questions continue to work; on-demand translation requests return an explicit configuration error. No silently fabricated fallback translation is served.

## Current CMA Part 2 inventory
- Part 2 guides: 15 supplied study units covering 56 topics.
- Original bilingual practice: 336 MCQs (6 per topic), plus 15 linked three-task cases.
- The 2,443 imported publisher-bank questions in the repository are **Part 1 only**.
- No complete, separately supplied **Part 2 MCQ source bank** is recorded in the repository's content status reports. Existing Part 2 practice should not be counted as a complete publisher bank.

## Safe next-phase intake
1. Obtain the owner's Part 2 source bank and a clear rights/licence basis for hosting any reproduced questions. A teaching outline is not a publisher question bank.
2. Audit edition, pages, chapter/unit tables of contents, question numbers, original answer keys, and shared-data/table cases.
3. Deduplicate against the 336 original Part 2 practice questions and any already imported candidates by normalized question fingerprint.
4. Assign every new source question to exactly one `p2-N` study unit, an existing Part 2 topic ID, source page, identifier, and answer provenance. Keep 'missing source answer' explicitly marked; do not invent a publisher answer.
5. Import in bounded batches, never mixing `p2-N` with numeric Part 1 units. Maintain bilingual status accurately; the translation system should later support Part 2 source records after a separate integrity test.
6. Run `npm run cma:check-content`, answer-index/choice-count checks, TypeScript, build and mobile/desktop quiz smoke tests.
7. Reconcile question counts from code and publish an acceptance report before any claim of complete Part 2 coverage.

## Important content rights and terminology
The current platform contains Gleim Part 1 question-bank records. Before any further verbatim import or public redistribution, confirm that the relevant licence permits it. The IMA examination questions, original study questions, and publisher exercises are different types of content and must be labeled distinctly.
