# CMA: zero-database, no-Lovable-AI translation and Part 2 intake

## Decision — 9 November 2026

The site owner requested an alternative that **does not rely on Supabase database usage or charge Lovable AI credits for CMA question translation**. The previous Supabase + server-side Gemini workflow was replaced with **client-only, on-device translation where supported**, plus a voluntary external translation link.

### Runtime behavior

- The original English question, choice order, explanation and answer index remain unchanged.
- Pre-authored Arabic questions and the source-bank translations already checked into the repository remain available with no device translator and no backend.
- When the learner selects Arabic for an untranslated source item, the browser checks the *built-in Translator API* for the `en` → `ar` pair.
- **Supported devices:** Chrome 138+ or Edge 148+ **on eligible desktop computers**, with sufficiently capable hardware and available disk space. A language pack may need to be downloaded once to the learner's machine. Mobile Chrome, iOS, Firefox and Safari do **not** support this API as documented in November 2026.
- A translation is created by the browser itself after user action. The client translates the question, four choices and explanation separately; all numeric tokens and choice counts are checked. Rejected translations never replace the original.
- Successful translations are kept **in this browser's localStorage**, scoped by question ID and source-content hash, so they are reused on this device. Clearing site data, using another device or private browsing may remove the cache. **There is no shared database cache.**
- All learners have a **user-initiated** external Google Translate link. It opens an external website, and the question/choices may be sent to that provider if the learner chooses to open the link. Explanations are not included until the answer has been revealed. Long text offers a copy/paste fallback instead of truncating the question.
- The external translator does not automatically return translated text to the question UI. A learner may now paste the translated prompt, choices and explanation in the on-page editor; the app validates and keeps this translation locally. Answers and scoring stay anchored to the original. It is outside the site and subject to that provider's availability and policies.
- Translators are not accounting auditors. A successful numeric check does not guarantee correct financial terminology or interpretation, and the UI labels machine results accordingly.

### Costs / dependencies

**CMA translation now requires none of:** Supabase tables, a service-role key, login, `LOVABLE_API_KEY`, a server endpoint, cloud generation or paid Lovable AI credits.

**Important distinction:** The rest of this website still uses Lovable hosting, Supabase for some features and separate AI endpoints. Avoiding a database does **not** automatically eliminate hosting costs or other Lovable AI usage. Only this CMA translation workflow is made backend-free.

Official browser reference: https://developer.chrome.com/docs/modern-web-guidance/guides/built-in-ai/translator

### Database migration left as history (not required)

The previously merged `supabase/migrations/20261109103000_cma_translation_cache.sql` is **not needed for this replacement** and must not be manually applied for the purpose of CMA translation. The migration file is retained as a historical record to avoid damaging migration history in already connected databases. Existing tables, if previously created, are neither queried nor deleted by the new client. Removing pre-existing tables requires verifying their data/usage and is **not** silently performed here.

### Verification

```sh
npm ci
npm run ifrs:check-content
npm run cma:check-content
node --test scripts/tests/cma-translation.test.mjs
node --test scripts/tests/cma-translation-browser.test.mjs
node scripts/audit-cma-part2-intake.mjs --self-test
npm run build
npx tsc --noEmit
npx eslint . --rule 'prettier/prettier: off'
```

Device/browser acceptance still needs user testing: desktop supported with downloaded language model, unsupported Android/iOS fallback, numeric-rejection warning, browser cache reuse, question and answer scoring, and long-explanation copy behavior. CI cannot make a browser lacking the feature support local translation.

## CMA Part 2 status and next source intake

- Part 2 guides: 15 units, 56 sections.
- Original bilingual training: 336 MCQs (six per section) plus 15 linked cases.
- The 2,443 imported publisher-source MCQs are **Part 1 only**.
- No complete **Part 2 publisher MCQ bank** is present in the repository's documented files. Do not imply the 336 original practice items are a full official publisher bank.

Use the read-only `scripts/audit-cma-part2-intake.mjs` when a **rights-cleared** Part 2 source or independently authored additional questions become available. The audit checks edition/source ID, reuse rights, topic/unit matching, duplicate stems, choice/answer validity and page provenance. It never imports or publishes on its own. Keep all question source data under version control, not an additional paid cloud database.

### Publishing rights

Before further verbatim import or public redistribution of Gleim or IMA question text, verify that permission covers that use. Independent original practice questions and publisher/official questions must remain distinct.


## Arabic translation troubleshooting and on-page fallback — 16 November 2026

The issue was that the Arabic study-language toggle could not automatically translate English-only source questions on browsers without the experimental Translator API. This is a content-coverage and device-compatibility limitation, not a simple CSS localization bug. The existing no-server/no-paid-API design cannot guarantee one-tap translation on every mobile browser.

The following no-backend improvements were implemented:

- Browser-generated Arabic-Indic and Persian digit shapes (٠–٩ / ۰–۹), plus Arabic thousands, decimal, percent and per-mille symbols, are normalized **for integrity checks only**. English source figures, answer order and the original answer index are never changed. Numeric value changes still fail validation.
- English-only CMA question cards now offer **"Enter Arabic translation inside the site"**, even on unsupported browsers. Users can open a voluntary external translator, then enter the Arabic question, all answer choices and explanation into labeled fields. The app checks Arabic content, all choices and the figures before displaying it in-place. The external provider never automatically writes into the website.
- User-entered translations are tagged **pasted / not editorially reviewed**. They are saved in the same source-hash-keyed browser cache when local storage is allowed, or remain temporary for sources that prohibit such caching. Users can correct their saved Arabic copy. There is no translation-specific server, login, database or use of Lovable AI credits.
- Actual Arabic content displays RTL; English source stays LTR even if the rest of the curriculum is Arabic. The translated presentation does not change answer correctness or reveal the correct answer before submission.
- Pre-authored editorially reviewed Arabic translations remain in the original content. The fallback editor is for English-only questions, not a replacement for professionally reviewed bilingual content.
- **Remaining limitation:** neither the new editor nor the language toggle translates the entire source bank automatically. Mobile browsers without the Translator API need manual copy/paste or a browser/external translation service. Zero-click translation for all devices requires approved backend/provider access or a reviewed Arabic source corpus, which would entail separate cost/privacy/licensing review.

Regression tests cover localized number equivalence, rejection of changed financial values, source hashes, fallback UI, the original answer index and no accidental backend calls.


## First static Arabic CMA source-bank cohort — 16 November 2026

Arabic is no longer dependent on the browser Translator API for the **first twelve questions of Volume 2, Study Unit 11, Section 1 (Q001–Q012)**. The original English stem, all four choices, explanation, answer index, source page and transcription status remain intact in src/data/cma-gleim-2025-vol2-unit-11.json; new fields stemAr, choicesAr, and explanationAr supply the Arabic presentation. The existing Volume 2 mapper reads these fields only when the entire translation is present, and leaves the other 1,371 Volume 2 records English-first. Previously integrated Volume 1 translations are unaffected.

**Coverage for this increment:** 12 of the 58 questions in Unit 11; 12 of 1,383 in Volume 2. This is a **small initial content batch**, not full automatic translation of the 2,443 imported Part 1 source questions. The CMA library hero now states the number of publisher-source questions with built-in Arabic independently from the number of original bilingual practice questions; untranslated source items remain clearly counted.

A CI audit requires exactly these twelve source IDs to have complete Arabic stem, choices and explanation. Numeric integrity tests compare translated and English figures in every field and reject altered figures, numeric sequences or missing choices. The content audit also confirms the canonical English records and original answer indices never change and all other Volume 2 items retain their untranslated flag. The Arabic wording is an **initial educational translation**; specialist editorial review of terminology, applicability and source tables is still needed before calling it professionally certified.

The translations ship with the site's static content bundle. They require no login, database reads, Lovable AI credits, local browser translation support or manual copy/paste on the learner's device. Later batches must extend the source-ID coverage list and tests rather than silently marking untranslated records as translated.


## Unit 11 full bilingual draft — 17 November 2026

The **entire Volume 2 Unit 11 question set is now available as static bilingual educational content**:

- Section 1 (value-chain analysis): **26/26** source MCQs have Arabic stems, four choices, and explanations. The previous twelve translations remain unchanged.
- Section 2 (process analysis, quality costs and benchmarking): **32/32** source MCQs now have Arabic stems, four choices, and explanations.
- Total: **58/58 Unit 11 questions**. This adds 46 translations in the present increment; all are shipped in the versioned source JSON and displayed by the existing CMA library and exam preparation routes. The English original remains the primary, unchanged answer key for all questions. Other Units 12–20 and their untranslated source banks have not been marked as bilingual.

**Source-table caveat:** Questions **Unit 11 §2 Q12 and Q13** were imported with the *same* line-wrapped and broken cost table (e.g., split figure "275,0 / 00" and broken words). The table is now **reflowed** in both English and Arabic with internally consistent amounts. Source text status is set to table-reflowed, and the question UI shows a source PDF layout warning. The preventive-cost calculation in Q12 uses 275,000 + 180,000 + 90,000 + 156,000 = 701,000, consistent with its unchanged explanation and keyed answer. **The original publisher PDF has not been visually re-verified in this release**; both questions require page-level source comparison and specialist review before their reconstructed table can be treated as definitive.

**Quality gates:** The translation tests check all 58 records for complete Arabic text, four ordered options, a hardcoded fingerprint of original answer indices by section and preservation of every numeric token in each stem, option and explanation. The content checker refuses partial/undeclared translations, proves each complete question is mapped to Arabic on every browser, and requires an explicit draft review status. The sourceLayoutReview flag identifies the two reconstructed tables and other similarly reflowed source items for visual checking.

The site labels these static Arabic translations as **educational drafts pending specialist accounting/editorial verification**. Numerical invariance does not itself establish that every conceptual translation is correct, and a source answer can also be questionable. The translation layer does not post results or change scoring. No additional database, login, Lovable translation credits or remote language model is required to read this Unit 11 Arabic content. Continue with Unit 12 after the specialist/rights review for Unit 11 is arranged.


## Unit 12 first Arabic question cohort — 17 November 2026

The first **23 of 155 Unit 12** CMA Part 1 source questions are now delivered as static Arabic educational drafts, covering the introductory regression-analysis, cost-estimation and forecasting concepts from Volume 2, Section 1. English remains the canonical source and the correct choice index is unchanged. Arabic stems, four choices and explanations are committed in src/data/cma-gleim-2025-vol2-unit-12.json, using the existing mapper and draft-review labels. No cloud translation, sign-in or backend is needed to read this cohort.

Section 1 contains 28 items; the following **five are intentionally still English-first**: Q8, Q9, Q13, Q14 and Q28. These questions contain long source tables, multi-column extracted data or dense formula blocks. Their table layout and figure-to-label relationships require source-page review before publishing a confident Arabic translation. The other four sections of Unit 12 remain English-first. Therefore **23/28 Section 1**, **23/155 Unit 12** (not 100%) have built-in Arabic. Together with the previously completed 58 source questions in Unit 11, this increment brings Volume 2 to 81 static Arabic source questions, subject to editorial review.

The content checker requires exactly these 23 additional source IDs to have complete Arabic fields. Regression tests assert all 23 original answer indexes, same ordered numerical tokens in each stem, each option and explanation, and no partial translations on the five skipped source-table cases. Numeric checks cannot verify nuanced terminology or interpretive correctness; the interface continues to show the clear educational-draft / pending-specialist-review label.

Next: verify the five complex English tables against the publisher source before translating them, then continue with Unit 12 Section 2 and beyond. Do not assert that all CMA source questions are translated or professionally certified, and confirm publication and device rendering separately from CI.
