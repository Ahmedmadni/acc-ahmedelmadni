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
- The external translator does **not** return translated text to the question UI; answers and scoring stay anchored to the original. It is outside the site and subject to that provider's availability and policies.
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
