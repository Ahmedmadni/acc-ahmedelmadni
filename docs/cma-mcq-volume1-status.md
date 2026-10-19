# CMA Part 1 MCQ Volume 1 — import status

The supplied Gleim 2025 PDF contains **1,060 numbered MCQs** across 40 subunits. The site now retains all 1,060 source-language records separately from the 308 original bilingual practice questions.

| Study unit | Source MCQs |
| --- | ---: |
| 1 — External financial statements | 217 |
| 2 — Short-term assets | 107 |
| 3 — Long-term assets | 125 |
| 4 — Liabilities | 86 |
| 5 — Revenue and impairment | 75 |
| 6 — Integrated reporting | 61 |
| 7 — Cost management concepts | 131 |
| 8 — Cost accumulation systems | 84 |
| 9 — Cost allocation techniques | 115 |
| 10 — Supply chain management | 59 |
| **Total** | **1,060** |

Each record has a stable unit, section, question number, and printed PDF page; four choices and an explanation are present. The source explicitly marks the correct answer for 1,059 items. Study Unit 9, Subunit 3, Question 1 has no answer marking or rationale in the supplied PDF; its answer is separately marked as inferred.

**Remaining editorial review:** the supplied questions are English. Their `ar` fields currently carry the English source verbatim so the application can render them with an explicit language notice; they are not counted as Arabic translations. Multi-column tables and shared fact patterns in the PDF also require visual comparison with the original pages. The six existing guides and 308 original bilingual questions remain unchanged.

Regenerate the source records from the user's PDF with `python scripts/import-cma-mcq-vol1.py /path/to/volume-1.pdf`. The coverage checker enforces every exact subunit count and sequential question number.
