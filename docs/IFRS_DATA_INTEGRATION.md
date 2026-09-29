# IFRS / IAS Content & Question Bank Integration

## Goal

The IFRS section uses one standard code (for example `IAS 2` or `IFRS 16`) as the stable join key between:

- explanatory articles in `kb_articles`
- quiz questions in `exam_questions`
- standard metadata in `ifrs_standards`
- source/licence provenance in `ifrs_content_sources`

The public UI exposes two interconnected tabs:

1. **مقالات الشرح** — standard summaries, practical articles, calculators, checklists
2. **بنك الأسئلة والاختبارات** — standard-specific MCQs with instant feedback and simplified explanations

## Source policy

| Source | Verified status | Usage |
| --- | --- | --- |
| IFRS Foundation | authoritative, proprietary publication | link + independent summary only; do not republish full standard text |
| `ramyatrouny/ifrs-skill` | MIT | may be reused/derived with MIT attribution; still verify time-sensitive requirements against official IFRS sources |
| `ramyatrouny/ifrs-quiz` | not publicly resolvable under this name on 2026-09-29 | ingestion disabled until repository identity and licence are verified |
| `api-evangelist/accounting-standards` | public repository, no explicit repository licence found during review | reference/index only unless reuse permission is established |
| `CharlesHoffmanCPA/fac-ifrs` | GPL-3.0 | structural/taxonomy reference only in this website implementation unless GPL distribution obligations are intentionally accepted |
| ACCA / other education providers | layouts and learning patterns may inform UX | do not copy proprietary exam questions, explanations, or paid study-bank content |

## Canonical data flow

```text
source repo/export
   ↓
licence gate
   ↓
raw snapshot + source revision
   ↓
normalizer
   ↓
canonical English question JSON
   ↓
duplicate / structure / answer validation
   ↓
Arabic translation
   ↓
professional accounting review
   ↓
Supabase staging/import
   ↓
status=approved + is_public=true
   ↓
Question Bank UI
```

No question should become public directly after machine translation.

## Canonical standard bundle

See `docs/ifrs-standard-bundle.sample.json`.

The bundle format is a transport/staging format. Production storage remains normalized:

- `ifrs_standards.code` → standard metadata
- `kb_articles.standard_code` → article relationship
- `exam_questions.standard_code` → question relationship
- `exam_questions.source_key/source_revision/source_item_id` → provenance and idempotent imports

## Question import fields

Minimum required normalized question record:

```json
{
  "track": "IFRS",
  "standard_code": "IAS 2",
  "topic": "IAS 2 — Inventories",
  "question_en": "Question text",
  "question_ar": "",
  "choices_en": ["A", "B", "C", "D"],
  "choices_ar": [],
  "answer_index": 1,
  "question_type": "MCQ",
  "difficulty": "intermediate",
  "exam_domain": "measurement",
  "explanation_en": "Why the answer is correct",
  "explanation_ar": "",
  "reference": "IAS 2",
  "source_path": "MCQs/IAS2.json",
  "source_item_id": "ias2-001",
  "translation_status": "original"
}
```

## Cleaning rules

The normalizer must reject a record when:

- no IFRS/IAS code can be detected
- fewer than two options exist
- the correct answer cannot be resolved to a zero-based option index
- question text is empty

Before database import:

- normalize `IFRS16`, `IFRS-16`, and `IFRS_16` to `IFRS 16`
- preserve source option order
- never infer a correct answer from explanation text
- de-duplicate on `standard_code + normalized English question`
- store source revision/commit so re-imports are reproducible
- keep the raw source payload when licensing allows it

Run:

```bash
node scripts/normalize-ifrs-questions.mjs \
  --input ./vendor/ifrs-quiz/MCQs \
  --output ./tmp/ifrs-questions.normalized.json
```

## Arabic localization pipeline

Arabic is the public-language priority. Translation must preserve accounting meaning rather than translate literally.

The translation script uses a fixed accounting glossary and an OpenAI-compatible translation endpoint:

```bash
export IFRS_TRANSLATION_API_URL="https://your-provider.example/v1/chat/completions"
export IFRS_TRANSLATION_API_KEY="..."
export IFRS_TRANSLATION_MODEL="..."

node scripts/translate-ifrs-questions.mjs \
  --input ./tmp/ifrs-questions.normalized.json \
  --output ./tmp/ifrs-questions.ar.json
```

Every translated item is saved as:

```text
translation_status = review_required
```

A qualified reviewer should verify:

- Arabic accounting term accuracy
- no answer-order drift
- numbers/currencies unchanged
- standard code and paragraph references preserved
- explanation supports the keyed answer
- no unsupported statement was added by the translation model

Only reviewed records should be marked `reviewed`, then approved/published.

### Preferred Arabic terminology

| English | Arabic |
| --- | --- |
| Inventory | المخزون |
| Net realisable value | صافي القيمة القابلة للتحقق |
| Expected credit losses | الخسائر الائتمانية المتوقعة |
| Performance obligation | التزام الأداء |
| Right-of-use asset | أصل حق الاستخدام |
| Lease liability | التزام الإيجار |
| Recoverable amount | القيمة القابلة للاسترداد |
| Value in use | القيمة الاستخدامية |
| Cash-generating unit | وحدة مولدة للنقد |
| Goodwill | الشهرة |
| Related party | طرف ذو علاقة |
| Statement of financial position | قائمة المركز المالي |
| Statement of profit or loss | قائمة الربح أو الخسارة |
| Other comprehensive income | الدخل الشامل الآخر |

## Article ingestion

`ramyatrouny/ifrs-skill` should be treated as structured research material, not as the only authority.

For each standard:

1. locate its section in `standards-reference.md`
2. extract facts into structured fields: scope, core principle, key rules, disclosures, pitfalls, related standards
3. use `workflows.md` only where a practical workflow or journal-entry example is useful
4. use `compliance-templates.md` for checklist structure
5. independently rewrite the Arabic/English article
6. link the article to `standard_code`
7. retain source attribution when material is derived from MIT content
8. verify effective dates/amendments against IFRS Foundation before publication

## API Evangelist and FAC-IFRS

These sources are valuable primarily for machine-readable mapping:

- API Evangelist: schema/property discovery, XBRL/IFRS API pointers
- FAC-IFRS: concept relationships, XBRL mappings, roll-ups and validation ideas

They should not be used as the public article body. Map their concepts into internal identifiers only when the applicable licence permits the intended distribution.

## Frontend architecture

The production site is React + TanStack Start + Tailwind, so the requested HTML5/Tailwind/Vanilla-JS behaviour is implemented using native semantic HTML elements inside React rather than adding a parallel vanilla application.

`/library/standards`:

- tab state: `articles | questions`
- Articles tab: the 43-standard searchable navigator and links to existing knowledge articles/tools
- Questions tab: `IfrsQuestionBank`
- question source: public approved `exam_questions` plus a small editorial fallback seed
- standard mapping: canonical IFRS/IAS code
- answer feedback: immediate, client-side after load
- explanation: shown only after answering
- article ↔ quiz cross-link: same standard code

## Performance

For the current bank size, the quiz fetch is cached for five minutes and merged/deduplicated client-side.

When the database grows beyond a few thousand IFRS questions, move to:

- server filtering by `standard_code`
- paginated/randomized question batches (for example 20–50 questions)
- a lightweight count endpoint per standard
- database indexes included in the IFRS migration

## Deployment order

1. review and apply `supabase/migrations/20260929153000_ifrs_standard_content_links.sql`
2. regenerate Supabase TypeScript types if your deployment workflow requires checked-in generated types
3. deploy application code
4. normalize/import source content
5. translate and review Arabic content
6. publish only `status='approved' AND is_public=true` questions

## Important content boundary

Open-source code does not make the official IFRS Standard text or commercial exam-bank content freely republishable. Keep official standards as authoritative links and independently written summaries unless a separate content licence explicitly permits reproduction.
