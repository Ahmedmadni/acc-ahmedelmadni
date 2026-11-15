# IFRSQuiz integration status — 15 November 2026

## Source and access

- **Source:** https://ifrsquiz.com/
- **Publicly advertised catalogue:** **665 interactive questions across 39 named IAS/IFRS Standards**, counted directly from the site's published selection list on 15 November 2026.
- **Question bodies copied into this project:** **zero**. The public HTML catalogue does not expose question text or answer keys in static markup. Direct HTTP requests, source JSON path checks and normal headless Chrome all encountered an interactive Cloudflare security challenge (HTTP 403 / `Just a moment` / Turnstile); we did not circumvent it or infer answers.
- **Actual local IFRS bank:** remains at the previously validated **1,158 questions**. The 665 source questions must **not** be added to the local count until each original record is available, permission-backed, translated and reviewed.

The public catalogue is held in `src/data/ifrsquiz-public-catalogue.ts`. Each standard page links directly to the corresponding external website and clearly marks its source-only count as *not imported*. There is no login or paid API requirement for this implementation.

## New sources integrated into the guides

### IFRS Skill

- **Repository:** https://github.com/ramyatrouny/ifrs-skill
- **Reuse basis:** **MIT**. The exact licence and copyright notice are kept in `docs/third-party/ifrs-skill-LICENSE.txt`.
- **Extract:** three original English common-pitfall bullets for each of the **43** standards in the site's current catalogue: **129 attributed excerpts**. Each page presents these as an optional, clearly labelled external source, not as verified authoritative financial-reporting guidance.
- **Source currency:** August 2026, per upstream documentation. Technical accuracy and effective dates must always be reconciled with the official IFRS Foundation publication.
- **Local learning additions:** five independently written bilingual worked examples for IAS 2, IAS 36, IFRS 9, IFRS 15 and IFRS 16.

### Systemorph IFRS 17 Calculation Engine

- **Repository:** https://github.com/Systemorph/IFRS17CalculationEngine
- **Nature:** source notebooks, calculation imports, present-value and analysis-of-change workflows. This is **not** a ready-made multiple-choice question bank.
- **Use on the website:** a separately authored bilingual discounting example on the IFRS 17 learning page and a link to the engine and its original notebooks.
- **Licence boundary:** no repository-root `LICENSE` file was found in the material inspected. We therefore did **not** copy the implementation code or proprietary example tables into this website, and we do not claim it runs on our infrastructure.

## Ready-to-publish source import

`scripts/normalize-ifrs-questions.mjs` can normalize the original source's machine-readable questions when the authorized data is obtainable. The new `scripts/publish-ifrsquiz-questions.mjs` takes a **reviewed** normalized JSON export and emits a static TypeScript bank module, preserving original answer positions and per-question provenance.

Requirements for **every** imported question:

1. An original source item ID, source URL on `ifrsquiz.com`, original source SHA-256 fingerprint, source revision/edition and explicit permission basis.
2. Exact original English question and four answer options in the original order, with unambiguous zero-based correct-answer index.
3. Faithful, reviewed Arabic question and four parallel Arabic answer options; English and Arabic explanations.
4. An existing IFRS/IAS standard code, with no duplicate original ID, no already-published duplicate question, and no invalid/empty choice.
5. Technical accounting review before publishing. Passing code tests alone does not prove an answer is correct.

Example workflow **only after obtaining the authorized source data**:

```bash
node scripts/normalize-ifrs-questions.mjs --input ./authorized-source/questions.json --output ./tmp/ifrsquiz.normalized.json --numeric-answer-base 0 --source-url https://ifrsquiz.com/ --source-revision VERIFIED_SOURCE_VERSION --source-license EXPLICIT_PERMISSION_BASIS
# Review every Arabic translation, explanation, original option order and answer key.
node scripts/publish-ifrsquiz-questions.mjs --input ./tmp/ifrsquiz.reviewed.json --dry-run true
node scripts/publish-ifrsquiz-questions.mjs --input ./tmp/ifrsquiz.reviewed.json
npm run ifrs:check-content
```

The generated module `src/data/ifrsquiz-imported-questions.ts` is already wired to the on-site local IFRS bank and will work **without a database or account** once legitimate, verified records populate it.

## Automated controls

`scripts/check-ifrs-external-resources.mjs` verifies source inventory (665/39), 43/129 MIT extracts and six bilingual demonstrations with independent arithmetic fixtures. `scripts/tests/ifrsquiz-import.test.mjs` checks answer/choice integrity, source identity, permission metadata, duplicate protection and Arabic completeness.

**Important:** No access-bypass code or recurring source scraping workflow is kept in the final branch. Site owner/editor supplied permission alone does not make protected question data available through technical means; an authorized original export or accessible question-level records are still needed to complete the 665-question import.
