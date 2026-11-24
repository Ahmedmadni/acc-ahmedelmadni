# CMA Part 1 (Gleim 2025 Volume 2) — Unit 15 Arabic Wave 5

**Date:** 24 November 2026

## Completed scope

Added **13 original-source-aligned Arabic educational drafts** for Unit 15 §3 **Q1–Q9, Q12–Q13 and Q16–Q17**. Each has a complete Arabic stem, original-ordered four Arabic options, and a worked Arabic explanation. Every canonical English question, option, explanation, answer index, source page and answer status is unchanged.

| Unit 15 section | Arabic drafts | Original source questions |
|---|---:|---:|
| §1 | 16 | 16 |
| §2 | 37 | 39 |
| §3 | **13** | 46 |
| §§4–8 | 0 | 163 |
| **Entire unit** | **66** | **264 (25.0%)** |

**198** records remain English-first. Unit 15 §2 Q25 (p.596) and Q32 (p.607) continue under `sourceLayoutReview` and are excluded from scored practice until the original authorized 2025 source pages can be inspected.

## Accounting calculation fixtures

The ChemKing source question group §3 Q1–Q3 uses a common case whose three stems each repeat the requisite inputs. Independent arithmetic in `scripts/tests/cma-unit15-arabic-wave5.test.mjs` verifies:

- Standard direct-material input: **12,000 finished units × 2 input units = 24,000**.
- Standard material input price: **$60,000 ÷ 24,000 = $2.50**.
- Excess material consumption: **$2,500 unfavorable ÷ $2.50 = 1,000 input units**.
- Actual input used: **24,000 + 1,000 = 25,000**.
- Actual purchase price: **$105,000 ÷ 35,000 purchased input units = $3.00**.
- Price variance on the **25,000 used** input units: **25,000 × ($3.00 − $2.50) = $12,500 unfavorable**. This particular source question explicitly requests the variance for *units used*, as opposed to variance measured on total purchases.
- §3 Q5 purchase price variance: **4,500 purchased pounds × ($0.75 − $0.72) = $135 unfavorable**. Do not substitute the 4,100 pounds *used*.

§3 Q4/Q6–Q9/Q12–Q13/Q16–Q17 cover material quality and waste, purchasing versus production controllability, engineering design and favorable/unfavorable variance interpretation.

## Release and evidence limits

- The Wave 5 regression locks all 13 original source fingerprints, original choice positions and page numbers, plus the order of every source numeric token in the Arabic question, choices and answer explanations.
- The global CMA source allowlist now permits exactly **66** bilingual Unit 15 records; earlier Wave 1–4 tests protect their previous translated questions, and §§4–8 remain English-first.
- The imported English and publisher answer keys have **not** been re-certified against the rights-cleared original 2025 Gleim Part 1 Volume 2 PDF; that specific primary source is unavailable here. These translations are educational drafts, not publisher-approved or accountant-editorially certified.
- Unit 14's 25 source-review holds and Unit 15's two blocked malformed-table records remain unchanged. Build, lint and TypeScript checks do not substitute for live mobile/tablet study-view inspection.

## Next step

Review §3 **Q10–Q11, Q14–Q15, Q18–Q46** with emphasis on compound case statements, document-origin numeric tables, source answer calculations, and new Arabic options. Flag and quarantine any source extraction ambiguity before translating or scoring.
