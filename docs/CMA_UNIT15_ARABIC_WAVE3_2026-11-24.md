# CMA Unit 15 — Arabic Wave 3: Flexible budgeting and source-layout safety

**Date:** 24 November 2026

## Delivered

This wave adds **15 complete Arabic educational drafts** to original Gleim CMA Part 1 2025 Volume 2 Unit 15 **§2 Q13–Q24 and Q26–Q28**. Each draft includes a question, four options in the original order, and a reasoned answer. The source English, publisher page, exact choice order and original answer index remain unchanged.

Unit 15 Arabic coverage is now **43/264 (16.3%)**: §1 **16/16**, §2 **27/39**, §§3–8 **0**; **221** original source records remain English-first. Unit 14's 25 preexisting source-review holds remain unchanged.

Topics include flexible vs static budgeting, use of expected activity vs actual activity in performance assessment, comparative variance direction, seasonal sales, employee participation in standard costs, and revenue measured at original budgeted prices. In §2 Q17, independently calculated flexible sales revenue is **120 actual canoes × $600 originally budgeted price = $72,000**. Midmonth forecasts of 130 units at $595 and actual selling price $590 are *not* substitutions for the initial budget unit price.

## Two original-source extraction defects discovered

- **§2 Q25, page 596:** the imported departmental cost comparison contains a garbled total variance shown as `$1.360 U`, and a table that requires publisher-page verification.
- **§2 Q32, page 607:** the original PDF was flattened from two side-by-side text/table columns, interleaving the Nash Glassworks narrative with capacity and overhead rate data.

These two records retain their original English text and keys, are **not translated**, and now explicitly carry the shared `sourceLayoutReview` safety flag, excluding them from default scored CMA exams. They may be shown only as unscored source-review exercises if the user opts in. Do not assume the original source is incorrect: the issue is the *imported PDF text/layout*, not a verified erratum. Do not lift the hold until the authorized 2025 edition pages are visually compared and corrections are independently audited.

## Release gates

- `scripts/tests/cma-unit15-arabic-wave3.test.mjs` pins the original source fingerprints, answer indexes and PDF page numbers for all 15 translated questions, checks complete Arabic fields and exact numerical token order.
- The prior Wave 1 and Wave 2 tests continue protecting the 28 earlier draft translations without falsely forbidding later additions.
- The repository-wide CMA content gate now allowlists exactly 43 Unit 15 source translations, and confirms both newly identified table problems remain English-first and excluded from scored practice.
- Production compilation, TypeScript type checking and ESLint remain GitHub Actions merge gates.
- These are *educational draft translations*. Successful automated validation does not represent publisher-certification, complete textbook visual source reconciliation, specialist Arabic/accounting editorial sign-off, or real-device testing.

## Next

Continue source-specific review and numerical audit of **§2 Q29–Q39**, translating safe cases and keeping complex table cases quarantined until original source pages can be verified. Then proceed with Unit 15 §§3–8. The available Library `CMA P2 GLIME.pdf` is a different 2019 Part 2 resource and cannot validate this 2025 Part 1 Volume 2 section.
