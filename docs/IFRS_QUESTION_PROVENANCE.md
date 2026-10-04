# IFRS/IAS question provenance and review

The local bank currently contains 1,158 practice questions across 43 full IFRS/IAS Standards. The `reference` field describes the accounting topic or technical basis; it is **not** evidence that the wording, options, and answer key were copied from that source.

| Existing group                     | Count | Provenance status                                             |
| ---------------------------------- | ----: | ------------------------------------------------------------- |
| Phase 6 guide-mastery questions    |   320 | Generated from this site's guides                             |
| Phase 8 enrichment questions       |   215 | Generated from this site's worked cases                       |
| Phase 9 applied questions          |    42 | Original applied scenarios                                    |
| Earlier questions                  |   540 | Site/legacy wording; no question-level verbatim source record |
| Verbatim source-verified questions |    41 | Reviewed wording, choices and answer key                      |

The 41 source-verified items preserve reviewed question wording, choices and answer keys, with a faithful Arabic translation and an IFRS/IAS technical citation. IFRS for SMEs module quizzes must not be relabelled as full IFRS/IAS questions. Historical questions require a version and applicability check before reuse. Public-facing references cite the IFRS Foundation.

## Current review boundary

`scripts/check-ifrs-question-integrity.mjs` loads the local bank shipped with the website, including pre-merge source items, and checks question shape, answer-index bounds, distinct choices, bilingual presence, standard mapping, duplicate IDs and prompts, and preservation of the correct choice after display reordering. Account-specific remote questions returned at runtime are not covered. `scripts/check-ifrs-question-coverage.mjs` checks counts and IDs. Neither script can prove the technical answer or cited paragraph is correct. The 42 Phase 9 scenarios have had their arithmetic and marked answers reviewed; selected older questions have been reviewed against primary IFRS materials. The remaining older questions must not be described as individually verified until they receive a question-level review.

## Rule for new imports

Do not add another site-authored question under the current editorial instruction. An imported item must retain the source URL, edition or commit, original item/page identifier, original wording and options, original answer key, licence or permission basis, and a fingerprint of the source text. Record a faithful Arabic translation separately. Confirm that the item tests the full IFRS/IAS Standard and the version applicable on the site; a related SME or superseded requirement is insufficient. `scripts/normalize-ifrs-questions.mjs` now requires source URL, revision and licence metadata and an explicit numeric answer-key base before producing import data. Normalization alone does not publish questions.

Keep existing questions unless a specific item is demonstrably wrong. Correct its facts, marked answer, or explanation with a primary-source citation and preserve its ID where possible so learner progress is not lost.
