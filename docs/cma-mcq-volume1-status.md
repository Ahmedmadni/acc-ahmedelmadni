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

The importer checks the book's table of contents against all 40 sections and their sequential question numbers. The content check also verifies 1,060 distinct records, nonempty stems, four choices, answer explanations, and selected shared fact patterns. It guards against carrying a previous case into unrelated questions. The PDF's shared data for Metro, Pell, Big, and Catus are attached to the questions that depend on them.

An independent, question-by-question audit using PyMuPDF checks all 1,060 records against the printed contents, 8 source-text excerpts per record (stem opening/ending, each choice, rationale opening/ending), and all 1,059 printed answer markers. It matches **8,459 of 8,480** excerpts exactly; the remaining 21 are accounted for: 18 table choices were reflowed manually from their corresponding PDF pages, one clipped answer-table cell in Unit 7 §2 Question 20 was reconstructed from the visible chart and rationale, and Unit 9 §3 Question 1 has no printed answer or rationale (two excerpts). The clipped choice is labeled in the UI. Fifteen question-number labels wrap awkwardly or contain a publisher typo in the PDF; the audit checks their text on their recorded pages and confirms sequential records.

Run `python scripts/audit-cma-mcq-vol1.py /path/to/volume-1.pdf` to repeat the independent review. This automated audit establishes coverage and textual correspondence; it does not replace visual review of the book's multi-column figures and tables.

**Remaining editorial review:** the supplied questions are English. Their `ar` fields currently carry the English source verbatim so the application can render them with an explicit language notice; they are not counted as Arabic translations. Multi-column tables and shared fact patterns in the PDF also require visual comparison with the original pages. The six existing guides and 308 original bilingual questions remain unchanged.

Regenerate the source records from the user's PDF with `python scripts/import-cma-mcq-vol1.py /path/to/volume-1.pdf`. The coverage checker enforces every exact subunit count and sequential question number.
