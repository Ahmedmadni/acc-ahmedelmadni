# CMA Unit 15 — Wave 8: Direct labor rate and efficiency Arabic drafts

**Date:** 24 November 2026

## Delivered

Added **19 complete Arabic educational drafts** from Gleim CMA Part 1 2025 Volume 2 Unit 15 §4: **Q3–Q8, Q11, Q14–Q18, Q23, Q26–Q28, Q33–Q35**. Every original English question, four choices, explanation, answer index, source PDF page, source status and ordered numeric tokens remain unchanged.

| Section | Arabic | Total |
|---|---:|---:|
| §1 | 16 | 16 |
| §2 | 37 | 39 |
| §3 | 42 | 46 |
| §4 | **19** | **35** |
| §§5–8 | 0 | 128 |
| **Total Unit 15** | **114 (43.2%)** | **264** |

**150** items remain English-first.

## Accounting verification

New standalone arithmetic tests in `scripts/tests/cma-unit15-arabic-wave8.test.mjs` recalculate:
- §4 Q3: planned labor $81,000 / 9,000 units = $9 per unit; actual 8,500 units at unchanged **45-minute** time standard imply flexible labor $76,500; actual $77,775 → **$1,275 unfavorable rate variance**, **zero efficiency variance**.
- §4 Q5: labor hours at standard rates $9,800 vs standard hours at standard rate $8,820 → **$980 efficiency variance**.
- §4 Q8: 9,500 articles × 20 allowed hours per article = 190,000 hours; actual 192,000 hours at $50 standard rate → **$100,000 unfavorable efficiency variance**.
- §4 Q11: 2,000 standard hours + ($1,600 unfavorable / $8 standard rate) = **2,200 actual hours**.
- §4 Q14/Q15: 3,200 actual hours for $27,840 implies $8.70 actual hourly rate, giving **$2,240 unfavorable rate** versus $8 standard and **$5,600 unfavorable efficiency** versus 2,500 allowed hours.
- §4 Q16: 5,200 actual units × 1.25 hour = 6,500 standard hours; 6,600 worked at $12 → **$1,200 unfavorable efficiency**.
- §4 Q17: standard rate for actual 1,230 hours × $6 = $7,380; plus **$246 unfavorable rate** = **$7,626 actual labor cost**.
- §4 Q18: (3,200 worked − 1,500 units × 2 allowed hours) × $10 = **$2,000 unfavorable efficiency**.
- §4 Q27: **$33,000 favorable rate**, offset by **$18,000 unfavorable efficiency**, yields **$15,000 total favorable**.

§4 Q4, Q6–Q7, Q23, Q26, Q28 and Q33–Q35 cover supervision and cost-controllability, productivity vs quality, interpretation of favorable labor prices, component variance attribution and cause analysis.

## Source-review exclusions

The following **8 records from §4** remain original-English-only and are now excluded from **scored practice** using the existing `sourceLayoutReview` safeguard:

- **Q1/Q2, page 663:** Jackson's standard cost table extracted across columns, requiring visual source page reconciliation
- **Q9/Q10, page 671:** Arrow's original standard cost column headings truncated to `Sta` and `C`
- **Q12, page 673:** five-job, three-column wages table needs visually verified column layout before scored use
- **Q19, page 680:** source solution prints `$3,840 / (41,200 – 42,000) = $4.80`, although the signed expression equals **−$4.80**; original result/key untouched pending clarification
- **Q24, page 685:** source algebra writes `($7.00 – AP) = .5` despite describing a $19 **unfavorable** rate variance on 38 hours; algebra sign conflicts with keyed $7.50 answer. Hold until licensed source reviewed.
- **Q32, page 693:** source treats 4,200 units **sold** as direct labor hours and uses product sales standard price as labor rate without independent labor input data; the labor rate is underdetermined as written.

Earlier source holds remain unchanged: Unit 15 §2 Q25 and Q32 and §3 Q32/Q37/Q38/Q39, for **14 total Unit 15 review holds**. Unit 14's 25 source-review holds remain in place. These findings do **not** assert that the original licensed publisher document is erroneous: the extracted text or display may be corrupted.

## Quality gates and next step

- Immutable-source fingerprints and exact numeric-token comparisons cover all 19 new drafts; regression tests for Wave 1–7 continue to assert earlier drafts.
- The global CMA bilingual source allowlist permits exactly 114 Unit 15 Arabic drafts; the review status is checked through the same quiz integration used for scored practice.
- CI includes content checks, language/default regression, IFRS checks, production build, TypeScript and ESLint.
- Educational translations await original **licensed 2025** book page visual reconciliation and accounting-editorial review; automated checks are not publisher certification.

**Next:** translate the remaining safe §4 questions Q13, Q20–22, Q25, Q29–31; continue §§5–8, separately review the eight held §4 questions against the original authorized source PDF.
