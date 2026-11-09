# CMA Part 2 Question Source Discovery and Expansion (9 Nov 2026)

## Request and rights decision
The user asked to obtain actual Part 2 question sources and add/classify questions in the study website, keeping English canonical and Arabic optional with no Supabase database or Lovable AI consumption.

This research located relevant question-bearing sources, **not a verified license to reproduce their question text**. We therefore publish **links to third-party question sources** and add **36 independently written English-first practice questions** aligned to the official IMA six-domain specification. No official or commercial question stems, answer options, explanation text or answer keys were copied into the repository.

## Sources verified

| Source | URL | Questions | Access and copyright |
|---|---|---|---|
| IMA practice resources (official) | https://prod.in.imanet.org/ima-certifications/cma-certification/prepare/resources | Official CMA samples, quizzes and simulator | Website offers practice access; no republication authorization verified |
| IMA community support package (community post, not necessarily an official edition release) | https://myimanetwork.imanet.org/viewdocument/re-support-packagestudy-partner?CommunityKey=538b6443-38cb-4957-9a03-9d7acca007f1&MessageKey=7da0695d-ea9c-430a-afce-019197c2a765&ssopc=1&tab=librarydocuments | 2024 CMA support-package PDF attachment | Download is subject to acceptance of the attachment's copyright terms; **not imported** |
| Gleim | https://www.gleim.com/cma-review/cma-exam-questions/ | Free sample questions for Part 2 with explanations | Free account; publisher questions remain with Gleim |
| SchoolRegistry Academy | https://schoolregistry.ng/certifications/cma-part2 | 300 unofficial Part 2 practice MCQs in three mock tests | Free 10-question quick test; account required for other practice; no permission to copy |

The links are classified as **external practice resources**, not questions already integrated into the site's own MCQ bank. These resources cover CMA Part 2 generally, so do **not** attribute a particular third-party question to a specific module without actually examining the question and having republication authorization.

## IMA official Part 2 domain weights

Source: https://prodcm.imanet.org/-/media/IMA/Files/Home/IMA-Certifications/CMA-Certification/2024-CMA-Content-Specification-Outlines-Final.ashx

| Domain | Exam weighting | Independent questions added | Site domain |
|---|---:|---:|---|
| Financial Statement Analysis | 20% | 7 | `financial-statement-analysis` |
| Corporate Finance | 20% | 7 | `corporate-finance` |
| Business Decision Analysis | 25% | 9 | `decision-analysis` |
| Enterprise Risk Management | 10% | 4 | `risk-mgmt` |
| Capital Investment Decisions | 10% | 4 | `investment-decisions` |
| Professional Ethics | 15% | 5 | `professional-ethics` |
| **Total** | **100%** | **36** | **6 domains** |

These integer allocations approximate rather than exactly reproduce the weighting percentages. The lessons and practice categories are not an official IMA exam simulator.

## Implementation and data integrity
- The 36 new originals are held in `src/data/cma-part2-2026-independent-practice.ts`; identifiers `cma-p2-2026-independent-q001` through `q036`.
- Every new record is mapped to an existing Part 2 topic, domain, and current study-unit ID. All question and explanation fields are canonically English and carry `sourceLanguage: "en"`.
- The existing browser-local/external Arabic translation UI is retained. In unsupported browsers a user may choose a third-party translation link; the site makes no paid translation requests.
- Correct-answer positions are permuted deterministically to distribute 9 keys to each of options A–D, with option and key moved together.
- `scripts/check-cma-content.mjs` requires 36 unique question IDs, no normalized duplicate stems against existing bank, 6 weighted domains, 4-choice validity, preserved English-first text, curated HTTPS source URLs and numeric answer-key spot checks.
- Existing Part 2 original practice before this batch: 336 bilingual + 44 English-first originals = **380**.
- After this batch: **416 Part 2 original MCQs** (336 bilingual + 80 English-first). Total CMA question count: **3,383**, including 2,443 pre-existing Part 1 publisher-bank MCQs.
- No Supabase migration, key, paid translation API, user data write or new database has been introduced.

## Further source-bank import
1. Obtain written authorization before reproducing IMA, Gleim, HOCK or third-party practice texts, explanations or answer keys.
2. If granted, record rights, edition, question/answer provenance, topic, page and any answer ambiguities in a dedicated metadata manifest.
3. Run structural, numerical, copyright/provenance, uniqueness and translation checks before publishing.
4. Keep editions and "original practice" vs "official retired question" labels distinct. Never claim that independent practice items are official IMA questions.
