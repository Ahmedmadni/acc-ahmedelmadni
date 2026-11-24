# CMA Part 1 · Gleim 2025 Volume 2 · Unit 15 Wave 2

**Release date:** 24 November 2026

## Scope and status

This increment adds **14 full Arabic educational drafts** for §1 Q9/Q16 and §2 Q1–Q12, including the original-order four choices and a written solution for each. The current Unit 15 total is **28/264 (10.6%)**: §1 **16/16**, §2 **12/39**, §§3–8 **0**. The other **236** records remain English-first. No original source English fields, answer indexes, source pages, or source status were changed.

The new questions explain standard-cost variance closing, standard-setting participation, static versus flexible budgets, allocation of fixed costs within a relevant activity range, supervision overhead, variable expenses, and performance evaluation. Six computational questions have independently recomputed answer fixtures.

| ID | Calculation independent of the translated explanation | Original keyed result |
|---|---|---|
| 15.2.2 | Annual fixed depreciation $258,000 ÷ 12 | $21,500 |
| 15.2.3 | $225,000 + (180,000 − 150,000) × ($975,000 / 150,000) | $420,000 |
| 15.2.5 | 80,000 × $4 + 100,000 × $2 − $515,000 | $5,000 favorable |
| 15.2.8 | $16,000 + 12,300 × $0.50 | $22,150 |
| 15.2.11 | $28,000 − ($324,000 ÷ 12) | $1,000 unfavorable |
| 15.2.12 | ($180,000 ÷ 144,000) × 10,800 | $13,500 |

## Important accounting distinction: Unit 15 §1 Q9

The original question asks **which treatment, among four hypothetical options, yields the greatest reported net income**, and keys a full favorable-variance write-off against cost of goods sold. The educational Arabic explanation keeps that comparative answer **without treating it as a generally permissible financial-reporting policy**.

IAS 2 *Inventories* governs carrying amount and recognition of inventory costs and permits standard-cost techniques only where they approximate actual cost. A material favorable production variance cannot automatically be expensed against cost of sales solely to maximize current profit, without considering applicable measurement requirements. The textbook's answer to its hypothetical choice question must **not** be interpreted as standalone IFRS accounting guidance.

Official external reference: https://www.ifrs.org/issued-standards/list-of-standards/ias-2-inventories/

## Release controls

- The exact 14 publisher-record fingerprints, page locators and answer indexes are locked by `scripts/tests/cma-unit15-arabic-wave2.test.mjs`.
- The validator checks each translated Arabic stem, each option and each explanation against its source in *original numeric token order*, not just by total amounts.
- `scripts/check-cma-content.mjs` explicitly allowlists the exact **28** Unit 15 bilingual drafts; every other record must remain English-first.
- Existing Wave 1 tests still verify the original 14 §1 questions but no longer falsely assume additional new translations are forbidden. Both waves and general library/quiz safety tests are blocking in GitHub Actions.
- The actual 2025 publisher PDF, accountant review of all 28 translations, and on-device visual acceptance testing remain separate gates. The available older 2019 Part 2 PDF cannot certify these source pages.
- Unit 14's 25 review holds remain blocked from scored practice.

## Next

Finish **§2 Q13–39** with source and worked-answer checks, then move through the remaining Unit 15 variance topics. Avoid guessing missing source details and avoid representing any educational translation as publisher-certified.
