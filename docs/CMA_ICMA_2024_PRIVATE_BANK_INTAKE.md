# ICMA CMA Exam Support Package 2024 — Part 2 Publication Record

## Status (10 November 2026)

The website owner confirmed in this conversation that they **obtained permission to republish** the question material on their public education website. The existence and precise contractual scope of that permission have **not been independently verified in the repository**. ICMA retains copyright in the underlying questions. No claim of ICMA/IMA endorsement or website affiliation is made.

At the owner's explicit request, the **369 published ICMA 2024 Part 2 retired multiple-choice practice questions** from the user-supplied 669-page `CMA Exam Support Package 2024(1).pdf` are included **directly in the site's versioned source**. Students do not need any download/upload, database account or paid AI gateway to open them.

The package itself states that its material should not be disclosed or shared. The owner's statement represents a claim of separate republication permission, not that the original package's default terms allow unrestricted sharing. Preserve permission records privately with the website owner.

## Published scope and provenance

| Part 2 domain | Official ICMA questions | Original PDF question pages | Original PDF answer pages |
| --- | ---: | --- | --- |
| A — Financial Statement Analysis | 91 | 186–218 | 219–230 |
| B — Corporate Finance | 93 | 231–257 | 258–268 |
| C — Business Decision Analysis | 98 | 269–310 | 311–324 |
| D — Enterprise Risk Management | 6 | 325–326 | 327 |
| E — Capital Investment Decisions | 71 | 328–360 | 361–372 |
| F — Professional Ethics | 10 | 373–375 | 376 |
| **Total ICMA 2024 Part 2** | **369** | | |

All items include original English question text, four options, the official answer index, English explanation, original PDF page, and CSO/LOS codes. They are mapped to the **56 existing Part 2 curriculum topics** via a code-based editorial crosswalk, without renumbering the source questions or confusing them with independently authored practice.

The **369 ICMA questions** are additional to **416 independently authored Part 2 questions**, for **785 available Part 2 MCQs**. The entire CMA bank has **3,752 questions** after this update, including **2,443 existing English Part 1 Gleim source items** and 860 earlier bilingual original questions across both parts.

## Website workflow

- Students choose **Part 2**, open **All Part 2 questions — online**, and filter by domain A–F, curriculum topic or keyword.
- Correct answer and full explanation are shown after choosing an option; 12 questions per page.
- An attribution label `ICMA © 2024`, domain, item number, CSO, LOS and source PDF page are attached to each source question. The website is independently operated.
- English is canonical. The previously deployed on-device browser Arabic translation feature remains optional on supported desktop Chrome/Edge, with an explicit user-initiated external service fallback on unsupported devices. No server-side translation API or Supabase database is required for these questions.
- 71 table-heavy / complex source text items are specifically flagged to ask the learner to cross-check the numerical table layout with the original PDF. Automated answer-matching **does not establish that every extracted table is visually equivalent** to the source; these items need editorial PDF-page verification.
- This update concerns only the **primary 2024 Part 2 369-question section**. Historic 2022 and 2016 supplemental question sets and practice essays were **not imported**, and must not be counted in this release.

## Integrity checks

The CI `scripts/check-cma-content.mjs` requires:
1. Exactly 369 official ICMA 2024 items with source counts A91/B93/C98/D6/E71/F10.
2. Unique question IDs and text, valid 4-option answer keys and non-empty English explanations.
3. Full preservation of original English stem, choices, correct answer and explanation after topic mapping.
4. Source PDF page, CSO/LOS, curriculum domain/unit and publisher credit.
5. Exactly 71 flagged complex-layout records.
6. All previous CMA questions retained and correct total 3,752.

**Copyright © 2024 Institute of Certified Management Accountants. All source content credited to ICMA.**
