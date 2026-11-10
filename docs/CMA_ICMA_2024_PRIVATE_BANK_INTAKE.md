# ICMA 2024 Part 2 support package — inventory and publication decision

## Status (10 November 2026)
**Local JSON import has been removed from the website.** The owner requested that learners access all published Part 2 practice questions directly through the website, without selecting any local files.

The public CMA Part 2 page now includes an integrated, searchable online question bank using the already published, independently authored questions in `src/data/cma-question-bank.ts`. It needs no database or backend translation credits. Learners filter by official A–F domain and curriculum topic, submit responses, view explanations and navigate pages of 12 questions.

## ICMA 2024 package
The owner-supplied 669-page PDF contains 369 multiple-choice questions in the principal CMA Part 2 section, grouped across six domains (A: 91, B: 93, C: 98, D: 6, E: 71, F: 10). The package also has additional historical question and essay sections.

The cover explicitly forbids disclosure, reproduction and sharing of the package's protected contents. No permission to republish was established. **Do not include its questions, choices, explanations, answer keys or extracted JSON in public GitHub files, deployed website assets, database, public logs or any client bundle.** Simply making the public site membership-only would not remove this redistribution restriction.

The previous private-file importer was developed as an interim workflow in PR #301, but was not consistent with the owner's preferred experience. It was removed in the follow-up online-bank update. This document preserves only non-copyright textual inventory metadata.

## Real distinction
- **Already published on the website:** 416 independent Part 2 practice questions, including 336 original bilingual exercises and 80 English-first independent exercises. They are not ICMA 2024 exam-package question transcriptions.
- **Contained in the restricted PDF:** 369 original ICMA Part 2 package questions. They are NOT on the website. An explicit written republication license would be required before the specific texts can be hosted.
- **Additional expansion:** Independently write and professionally check new CMA practice questions against the permitted concepts, IMA Content Specification and category coverage, without copying or thinly paraphrasing the protected question bank.

The English source for independent English-first practice stays canonical. On-site Arabic translation remains optional via supported device/browser and explicit external services for content without third-party restrictions. The original correct answer positions must not change.

## Security/verification
- No file-upload UI or local JSON reader.
- All publicly licensed/independently authored practice is in versioned site source code, with no Supabase requirement.
- Existing part-one practice and its topic navigation remain intact.
- The site must not claim that 369 restricted ICMA questions were imported into the public bank.
- Run `npm run cma:check-content`, online bank regression test, build, typecheck and code-quality checks before merge.
