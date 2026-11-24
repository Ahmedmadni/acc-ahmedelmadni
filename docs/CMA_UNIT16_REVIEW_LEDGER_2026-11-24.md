# CMA Unit 16 — Wave 12 review ledger (24 November 2026)

All 166 imported records reviewed; 143 complete Arabic educational drafts (86.1%), 23 held and zero unreviewed. Section coverage: 49/53, 11/12, 48/55, 11/12, 24/34. English default. No source correction, original-page certification or scoring release claimed.

Wave 11 PR #393 passed CI but conflicts with independent website updates in main. Reconciled the 14 Arabic drafts, scoring gates, regression tests and report onto current main; preserved unrelated changes and roadmap entries. Added src/lib/cma-unit16-source-review.ts with 23 question-specific bilingual messages and source pages. Study library and ExamPrep use these messages only when the existing source-review flag is present. The adapter remains the source of scoring eligibility. Automated regression verifies exact hold membership, page locators, Arabic completeness for other rows, bilingual non-scoring notices, and integration in both surfaces.

Hold inventory: §1 Q4,19,42,46; §2 Q10; §3 Q9,10,11,26,30,43,53; §4 Q9; §5 Q1,2,3,13,21,22,25,28,33,34. Authorized source/assumption review required before release. Next: Unit 17.
