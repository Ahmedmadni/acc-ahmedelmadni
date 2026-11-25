# CMA Part 1 — Imported source coverage audit (25 November 2026)

Scope: local Gleim 2025 Volume 1 and 2 JSON source records only. Counts reflect complete static Arabic stems, four ordered options and explanations, not publication rights, user-generated/cache translations, visual source certification or scoring eligibility. English remains canonical. A record without Arabic may be unreviewed, duplicated or review-held; do not equate English-only count with required new translations.

| Unit | Source records | Complete Arabic | English-only | Coverage |
|---:|---:|---:|---:|---:|
| 1 | 217 | 148 | 69 | 68.2% |
| 2 | 107 | 0 | 107 | 0.0% |
| 3 | 125 | 0 | 125 | 0.0% |
| 4 | 86 | 0 | 86 | 0.0% |
| 5 | 75 | 0 | 75 | 0.0% |
| 6 | 61 | 0 | 61 | 0.0% |
| 7 | 131 | 0 | 131 | 0.0% |
| 8 | 84 | 0 | 84 | 0.0% |
| 9 | 115 | 0 | 115 | 0.0% |
| 10 | 59 | 0 | 59 | 0.0% |
| 11 | 58 | 58 | 0 | 100.0% |
| 12 | 155 | 136 | 19 | 87.7% |
| 13 | 123 | 121 | 2 | 98.4% |
| 14 | 175 | 160 | 15 | 91.4% |
| 15 | 264 | 217 | 47 | 82.2% |
| 16 | 166 | 143 | 23 | 86.1% |
| 17 | 93 | 71 | 22 | 76.3% |
| 18 | 149 | 115 | 34 | 77.2% |
| 19 | 110 | 78 | 32 | 70.9% |
| 20 | 90 | 54 | 36 | 60.0% |

| Scope | Total | Complete Arabic | English-only | Coverage |
|---|---:|---:|---:|---:|
| Volume 1 | 1060 | 148 | 912 | 14.0% |
| Volume 2 | 1383 | 1153 | 230 | 83.4% |
| Combined | 2443 | 1301 | 1142 | 53.3% |

Audit findings: no partial Arabic records observed; Volume 1 Units 2–10 have no static Arabic translations. Unit 1 has 69 English-only records. Volume 2 Unit 20 final ledger includes 36 held records. Coverage is not equivalent to independent verification. Existing checks retain original answer keys and scoring gates. New `node scripts/audit-cma-source-coverage.mjs` verifies record counts, IDs, complete English/Arabic structure, answer-index bounds, and per-unit Arabic coverage floors, and reports inferred keys and layout issues separately. An intentional quarantine requires an explicit baseline adjustment. Next: Unit 1 residual review; prioritize missing Volume 1 translation coverage rather than forcing unresolved Volume 2 holds into scored practice.
