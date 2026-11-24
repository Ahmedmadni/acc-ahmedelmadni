# CMA Part 1 — Gleim 2025 Volume 2 · Unit 15 Wave 6

**Date:** 24 November 2026

## Delivered

Added **13 complete Arabic educational drafts** for Unit 15 §3 **Q10–Q11, Q14–Q15 and Q18–Q26**. Each includes an Arabic stem, four Arabic options preserving source choice order, and an Arabic answer explanation. The original English text, source pages, source answer status, and answer indexes were **not** modified.

**Coverage after this release:**

| Unit 15 section | Drafts translated | Questions |
|---|---:|---:|
| §1 | 16 | 16 |
| §2 | 37 | 39 |
| §3 | 26 | 46 |
| §§4–8 | 0 | 163 |
| **Total** | **79 (29.9%)** | **264** |

**185** original source records remain English-first. Unit 15 §2 Q25 (p.596) and Q32 (p.607) remain unscored due to malformed imported PDF tables and must not be released before authorized visual publisher-page inspection.

## Independent numerical quality gates

`scripts/tests/cma-unit15-arabic-wave6.test.mjs` pins 13 original source hashes, pages, keys and exact numeric-token order, and independently computes:

- **Blaster §3 Q10:** 12,000 **purchased**, not 10,000 used, parts at an actual unit price of $18,000 ÷ 12,000 = $1.50 against standard $1.45: **$600 unfavorable purchase price variance**.
- **Blaster §3 Q11:** Standard allowed for 3,000 radios at three parts each = 9,000; actual parts used 10,000, standard $1.45: **$1,450 unfavorable quantity variance**.
- **Durham §3 Q14/Q15:** Unit cost $60,025 ÷ 4,900 = **$12.25**, and 4,900 × ($12.25 − $12.00) = **$1,225 unfavorable price variance**.
- **Mill §3 Q21:** 28,000 materials at actual $2.00 vs standard $2.20: **$5,600 favorable price variance**.
- **Scarf spoilage §3 Q22:** 1.5 yards of good finished output per unit at 25% input loss requires 1.5 ÷ 75% = 2 input yards: **$4.00 per finished scarf**.
- **Radio parts §3 Q23/Q24:** 3,000 radios need 9,000 standard parts; 10,000 used at $2.90 gives **$2,900 unfavorable usage variance**, whereas static-budget standard usage is 9,000 × $2.90 = **$26,100**.
- **§3 Q26:** Standard materials price per raw input = $16.50 ÷ 3 = $5.50; actual **purchased** unit price = $583,200 ÷ 108,000 = $5.40; purchase price variance = 108,000 × $0.10 = **$10,800 favorable**.

The test calculates currency as integer cents where applicable to avoid floating-point test failures.

## Integrity, caveats and next release

- Existing Wave 1–5 regression tests still pin their earlier translated source records; Wave 5 coverage became a **permanent approved subset**, not a stale global count that rejects later waves.
- The global CMA allowlist permits exactly **79** Arabic Unit 15 records. `src/data/cma-questions-gleim-2025-vol2.ts` still excludes the two damaged imported PDF layouts from scored practice; the prior Unit 14 25 holds remain unchanged.
- These translations are **educational drafts**, not publisher-approved translations. The licensed original 2025 Part 1 Volume 2 page images were not available for independent visual source reconstruction, so automated checks cannot certify typography, PDF table layouts, or accounting editorial accuracy. English stays the default, Arabic is available on demand.

**Next:** review §3 **Q27–Q46** carefully (tables, production control, abnormal loss and numerical variance questions), translating only those whose original data and answers are internally consistent. Continue into §§4–8 after that.
