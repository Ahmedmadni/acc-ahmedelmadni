# CMA Part 2 — Private Local Bank Intake (ICMA 2024)

## Source and redistribution restrictions

User supplied the 669-page **CMA Exam Support Package 2024** published by the Institute of Certified Management Accountants (ICMA). Its opening page explicitly states that individuals must not disclose the package contents, which are protected by copyright and should not be shared.

**Do not commit, copy, publish or host any question, option, answer, explanation, extracted JSON or the PDF itself in this public repository.** No republication license has been established. The private JSON transformation of the user's provided file is supplied **only to the uploader**, outside this repository, for personal local use. It must not be included in website assets, server logs, hosted storage, or shared browser caches.

The only committed additions are **generic, copyright-neutral import code**, format validation, and this factual inventory.

## Verified document inventory

The main Part 2 section begins at **PDF page 185**, followed by its question pages and section-specific explanations:

| Domain | PDF question pages | Answer pages | MCQs | English section |
|---|---|---|---:|---|
| A | 186–218 | 219–230 | 91 | Financial Statement Analysis |
| B | 231–257 | 258–268 | 93 | Corporate Finance |
| C | 269–310 | 311–324 | 98 | Business Decision Analysis |
| D | 325–326 | 327 | 6 | Enterprise Risk Management |
| E | 328–360 | 361–372 | 71 | Capital Investment Decisions |
| F | 373–375 | 376 | 10 | Professional Ethics |
| **Total** | | | **369** | |

The PDF also contains Part 1 questions, practice essays and their answers, plus additional 2022 and 2016 practice collections. The table above covers **only the main 2024 Part 2 MCQ section**. It should not be presented as all Part 2 questions in the entire package.

All 369 main Part 2 question numbers were identified, and the matching letter answers were located in the corresponding answer sections. The user-provided private local extract preserves CSO/LOS, source PDF page, English question/choices, answer position and explanation. One section includes source typos in CSO labels (e.g. `COS` rather than `CSO`) handled for extraction. No exact stem is duplicated.

**Layout limitation:** At least 71 text-heavy questions have 13+ lines in their extracted stems and are flagged for manual checking because tabular layouts may be flattened by text extraction. Automatic structural matching does not establish numerical transcription accuracy; source PDF remains authoritative.

## How the optional local workflow operates

1. In the site's CMA library select **Part 2** and the new **Private question bank — on your device** section.
2. Select the user's *private* `CMA_Part2_2024_PRIVATE_LOCAL_ONLY.json` file, previously prepared from their supplied PDF and **not stored in GitHub**.
3. The client parses the file in the browser, validates its structure and category codes, and holds content **only in React memory**. Nothing is submitted to a site endpoint, Supabase or analytics.
4. Use filters A–F, one-question-at-a-time navigation, original English multiple-choice answers and English explanations. The correct answer comes from the provided file, not machine inference.
5. Arabic may be requested through Chrome/Edge's supported on-device translator only. **Third-party translation fallback is disabled for the private file**, and localStorage caching is disabled, so protected content is never sent to an outside translation service or persisted by this feature.
6. Refreshing/closing the page clears the private question bank and the quiz answers. Load the local file again for another session.

On devices without native on-device English→Arabic translation, the original English is displayed. This is an intentional copyright/privacy constraint, not a bug. The publicly authored CMA questions still retain their prior external-translation fallback.

## Deployment/security checks

- No private PDF or JSON in the source tree, static assets, tests, workflow logs, GitHub issue or PR descriptions.
- Client import must only use `File.text()`, never fetch/upload or server actions.
- HTML rendering relies on React text escaping.
- Source IDs and domain categories validated; unknown JSON files and invalid answer indexes are rejected.
- Private mode disables `allowExternalTranslation` and `cacheLocally`.
- No license to post ICMA questions or the private source bank publicly is implied.
- Repeat a production mobile/desktop smoke test once the app is deployed.
