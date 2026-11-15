/**
 * Excerpts: Rami Atrouni, IFRS Skill (MIT), © 2026.
 * Repository: https://github.com/ramyatrouny/ifrs-skill
 * Source: ifrs/standards-reference.md; content blob: 7e423d0c2178c2eb0b348c61af676406358c44b1.
 * License notice: docs/third-party/ifrs-skill-LICENSE.txt
 * This is unverified third-party reference content (currency: August 2026).
 * Do NOT treat these points as the complete or authoritative IFRS Standard.
 */
export const IFRS_SKILL_COMMON_PITFALLS: Readonly<Record<string, readonly string[]>> = {
  "IFRS 1": [
    "Failing to identify the correct transition date, particularly where comparative periods extend further back than expected",
    "Applying estimates with hindsight — IFRS 1 prohibits using information available after the transition date to revise estimates",
    "Overlooking mandatory exceptions while focusing on elective exemptions"
  ],
  "IFRS 2": [
    "Remeasuring equity-settled awards after grant date (prohibited — only the number is revised, not fair value)",
    "Failing to recognise an expense when vesting conditions are not met due to market conditions (market-based conditions are embedded in fair value — expense is recognised regardless of whether target is met)",
    "Ignoring non-vesting conditions in the fair value model"
  ],
  "IFRS 3": [
    "Failing to identify and separately value intangible assets (particularly customer relationships and technology)",
    "Expensing acquisition-related costs but then capitalising post-acquisition integration costs that should also be expensed",
    "Incorrect treatment of contingent consideration — reclassification between liability and equity after initial recognition is not permitted"
  ],
  "IFRS 5": [
    "Premature classification — the 12-month criterion and commitment criteria must all be met simultaneously; intent alone is insufficient",
    "Continuing to depreciate assets after held-for-sale classification",
    "Misidentifying a discontinued operation — cessation of a product line that is not a separate major line of business does not qualify"
  ],
  "IFRS 6": [
    "Capitalising pre-licence costs that must be expensed under the Conceptual Framework",
    "Continuing to carry E&E assets after technical feasibility is demonstrated without reclassifying under IAS 16 or IAS 38",
    "Applying an inconsistent capitalisation threshold across licences or regions"
  ],
  "IFRS 7": [
    "Inadequate description of ECL methodology — disclosures must explain forward-looking macroeconomic factors, not just state that they are used",
    "Omitting the reconciliation of loss allowances (movement table from opening to closing)",
    "Insufficient granularity in the maturity analysis for liquidity risk — using contractual maturities only, without also providing behavioural maturities where relevant"
  ],
  "IFRS 8": [
    "Misidentifying the CODM — leads to incorrect segment identification; the CODM function is key, not the individual's title",
    "Aggregating segments that have different economic characteristics without sufficient justification",
    "Reporting segment information in a way that does not match what the CODM actually reviews — the management approach should be applied faithfully, not rationalised after the fact"
  ],
  "IFRS 9": [
    "Classification: Applying SPPI at entity level rather than instrument level; failing to assess modified time value of money features; incorrectly treating equity investments as debt (e.g., preference shares with mandatory redemption)",
    "Business model: Using the wrong level of aggregation; changing classification based on a single sale rather than a genuine business model change; confusing intent (SPPI concern) with business model",
    "ECL — SICR: Using only backward-looking or lagging indicators; failing to incorporate macroeconomic forecasts; mechanically applying the 30-day presumption without considering lead indicators"
  ],
  "IFRS 10": [
    "Failing to consolidate entities where control exists without a majority of voting rights (de facto control)",
    "Overlooking substantive removal rights held by other parties (which could negate power)",
    "Incorrect assessment of relevant activities in structured entities — focusing on legal form rather than economic substance"
  ],
  "IFRS 11": [
    "Applying equity method to joint operations (must use line-by-line recognition)",
    "Classifying a joint venture as a joint operation based solely on legal form without considering contractual terms and other facts",
    "Assuming that a separate vehicle automatically creates a joint venture — substance over form analysis is required"
  ],
  "IFRS 12": [
    "Treating IFRS 12 as a standalone standard — it requires cross-referencing with IFRS 10, 11, and IAS 28",
    "Providing boilerplate disclosures rather than entity-specific judgements and risks",
    "Omitting disclosures for non-material interests in aggregate"
  ],
  "IFRS 13": [
    "Confusing fair value (exit price) with transaction price or entry price",
    "Using entity-specific inputs rather than market participant assumptions",
    "Applying blockage discounts to Level 1 inputs"
  ],
  "IFRS 14": [
    "Misapplying the standard to entities already reporting under IFRS (it is exclusively for first-time adopters)",
    "Treating regulatory deferral accounts as financial instruments",
    "Presenting regulatory deferral balances within other asset/liability line items rather than separately"
  ],
  "IFRS 15": [
    "Bundling distinct goods/services into a single performance obligation",
    "Failing to apply the variable consideration constraint, leading to premature revenue recognition",
    "Incorrectly assessing over-time vs. point-in-time criteria — especially the alternative use and enforceable right to payment test"
  ],
  "IFRS 16": [
    "Incorrectly identifying whether a contract contains a lease — particularly in service agreements with dedicated assets and substitution clauses",
    "Using the incremental borrowing rate without rigorous estimation (especially for entities without direct borrowing)",
    "Forgetting to include extension option payments in the lease liability when reasonably certain to exercise"
  ],
  "IFRS 17": [
    "Contract boundary set by cancellation rights rather than repricing rights. ¶34 turns on the *practical ability to reassess risk and reprice to fully reflect it* — at individual or portfolio level — not on whether the policyholder can lapse. Portfolio-level repricing only closes the boundary if premiums up to the reassessment date also ignore post-reassessment risks.",
    "Reassessing the level of aggregation after inception. Groups are fixed at initial recognition and are never re-composed (IFRS 17.24) — even if a profitable group later becomes onerous.",
    "Treating ¶20 (law or regulation constraining pricing) as a general grouping relief. The standard expressly forbids applying it by analogy."
  ],
  "IFRS 18": [
    "Treating the operating category as a definition of \"operations\". It is the residual (para 52). The only way to determine it is to work through investing, financing, income taxes and discontinued operations first.",
    "Assuming operating profit under IFRS 18 equals the entity's previously reported operating profit. Interest on lease liabilities, IAS 19 net interest and IAS 37 discount unwinding sit in financing; current and past service cost, and the expense for goods and services bought on credit, stay in operating. Legacy \"EBIT\"-style measures rarely map across cleanly.",
    "Presenting 'profit before financing and income taxes' when para 73 prohibits it — or labelling a para 73 substitute subtotal 'profit before financing' contrary to para 74."
  ],
  "IFRS 19": [
    "Assuming eligibility is a group-level determination. Each entity assesses itself at each reporting date; an intermediate parent assesses its own separate financial statements regardless of whether other group entities or the group as a whole have public accountability (IFRS 19.9), and may apply IFRS 19 in its separate statements while not applying it in its consolidated statements (IFRS 19.10).",
    "Assuming a listed parent's compliance is enough. Condition (c) requires the parent's consolidated statements to be available for public use and to comply with IFRS Accounting Standards.",
    "Applying IFRS 19 to change recognition or measurement. It changes nothing but disclosure."
  ],
  "IFRS 20": [
    "Assuming IFRS 20 is available now. It is effective 1 January 2029; until then an entity applies IFRS 14 only if it was already doing so as a first-time adopter, and otherwise recognises nothing for regulatory timing differences.",
    "In the EU, treating IFRS 20 as a change of accounting model. The Commission deliberately never endorsed IFRS 14, so EU rate-regulated entities have no existing regulatory deferral account balances to carry forward — IFRS 20 will be a first-time recognition event there, not a transition from one model to another.",
    "Applying IFRS 20 before IFRIC 12 to a service concession arrangement. The order is IFRIC 12 first, then IFRS 20 to what remains."
  ],
  "IAS 1": [
    "Failing to distinguish between material judgements (IAS 1.122) and estimation uncertainty (IAS 1.125) — they require separate disclosures. *(From 1 January 2027 these become IAS 8.27G and IAS 8.31A respectively.)*",
    "Classifying a breach-of-covenant liability as non-current when the waiver was obtained after period end",
    "Presenting a single OCI line without splitting items that will vs. will not be reclassified"
  ],
  "IAS 2": [
    "Using LIFO (explicitly prohibited under IFRS; common US GAAP divergence)",
    "Allocating fixed overheads based on actual production rather than normal capacity, overstating inventory in low-production periods",
    "Including selling and distribution costs in inventory cost"
  ],
  "IAS 7": [
    "Classifying bank overdrafts as financing rather than as a component of cash and cash equivalents (when part of cash management)",
    "Presenting investing/financing cash flows on a net basis when gross presentation is required",
    "Incorrect classification of interest and dividends (particularly when the entity has not established a clear accounting policy)"
  ],
  "IAS 8": [
    "Misclassifying a change in accounting estimate as a change in accounting policy (or vice versa), leading to incorrect retrospective vs. prospective treatment",
    "Applying new IFRS standards using full retrospective restatement when the transitional provisions specify modified retrospective (no restatement of comparatives)",
    "Correcting immaterial current-year errors through restatement when prospective correction is sufficient"
  ],
  "IAS 10": [
    "Treating a post-balance sheet event as adjusting when it reflects new conditions rather than confirming conditions at period end (e.g., treating a decline in listed share price as adjusting)",
    "Recognising dividends declared after period end as a liability at period end",
    "Failing to identify or disclose the authorisation date"
  ],
  "IAS 12": [
    "Recognising a DTA for tax losses without sufficient evidence of probable future taxable profits",
    "Using a rate that is neither enacted nor substantively enacted at the reporting date — for example an announced but not substantively enacted future rate. Note that IAS 12.47 permits either enacted or substantively enacted rates; there is no hierarchy between them. The related error is failing to reflect the expected manner of recovery or settlement (IAS 12.51, 51A)",
    "Incorrectly applying the initial recognition exemption to subsequent changes in temporary differences (it applies only at initial recognition)"
  ],
  "IAS 16": [
    "Failing to componentise significant parts with different useful lives",
    "Revaluing selected assets within a class rather than the entire class",
    "Not updating residual values and useful lives at least annually"
  ],
  "IAS 19": [
    "Recognising actuarial gains and losses in profit or loss rather than OCI (the \"corridor method\" is no longer permitted under IAS 19 Revised 2011)",
    "Deferring past service cost amortisation (no longer permitted; past service cost is now immediate)",
    "Using an incorrect discount rate (e.g., using a government bond rate when a deep corporate bond market exists)"
  ],
  "IAS 20": [
    "Recognising a grant on receipt of cash rather than when reasonable assurance criteria are met",
    "Applying the deferred income method but failing to update the amortisation pattern when the asset's useful life changes",
    "Inconsistently applying the two presentation methods across similar grants"
  ],
  "IAS 21": [
    "Treating functional currency as a free choice (it is determined by economic facts, not management preference)",
    "Retranslating non-monetary items carried at historical cost at the closing rate",
    "Failing to retranslate monetary items at the closing rate and recognising the exchange difference"
  ],
  "IAS 23": [
    "Continuing to capitalize during genuine suspension of active development",
    "Failing to move a specific borrowing into the general pool once its qualifying asset is substantially complete (IAS 23.14, 2017 amendment)",
    "Failing to deduct investment income on the temporary investment of specific borrowings from the eligible amount, which IAS 23.12 requires"
  ],
  "IAS 24": [
    "Omitting transactions with entities under common control of KMP's family members",
    "Disclosing only net amounts rather than gross transaction amounts",
    "Asserting arm's length terms without substantiation"
  ],
  "IAS 26": [
    "Confusing IAS 26 (plan's own financial statements) with IAS 19 (employer accounting)",
    "Using cost rather than fair value for plan investments",
    "Omitting the actuarial present value disclosure or failing to cross-reference an actuarial report"
  ],
  "IAS 27": [
    "Using different measurement methods for different subsidiaries within the same category",
    "Recognizing dividends from subsidiaries as income under cost method without assessing whether they indicate impairment",
    "Confusing cost method with equity method treatment"
  ],
  "IAS 28": [
    "Continuing to recognize losses once the carrying amount reaches zero without legal/constructive obligations",
    "Failing to eliminate unrealized profits on intercompany transactions",
    "Using the associate's unadjusted financial statements when accounting policies differ"
  ],
  "IAS 29": [
    "Failing to identify hyperinflation early — waiting for the 100% threshold rather than using qualitative indicators",
    "Restating monetary items (which are already in current units)",
    "Using an exchange rate instead of a domestic price index for restatement"
  ],
  "IAS 32": [
    "Classifying preference shares as equity merely because they are called \"shares\" — must assess contractual obligations",
    "Forgetting to split compound instruments at inception and not tracking the unamortized discount on the liability component",
    "Assuming a master netting agreement permits offsetting — it only does if real-time simultaneous settlement is intended or the legal right is currently enforceable in all circumstances"
  ],
  "IAS 33": [
    "Including anti-dilutive instruments in diluted EPS calculations (this increases EPS, which is not \"dilution\")",
    "Failing to adjust the prior period comparatives for bonus issues or share splits",
    "Incorrect treatment of the bonus element in a rights issue (using full proceeds rather than theoretical ex-rights price)"
  ],
  "IAS 34": [
    "Deferring costs in early interim periods that are expected to benefit later periods (not permitted — costs expensed when incurred)",
    "Anticipating revenues not yet earned at interim date to smooth annual results",
    "Using year-to-date materiality rather than interim period materiality"
  ],
  "IAS 36": [
    "Using post-tax cash flows with a post-tax discount rate inconsistently (IAS 36 requires pre-tax; the pre-tax and post-tax approaches should give the same answer only if applied correctly)",
    "Using a growth rate in the terminal value that exceeds the long-term average",
    "Failing to test goodwill annually and only testing on indicators"
  ],
  "IAS 37": [
    "Recognizing provisions for future operating losses (not permitted — no obligation until loss is incurred)",
    "Recognizing provisions based on management intent rather than past obligating events",
    "Netting reimbursements against provisions on the balance sheet"
  ],
  "IAS 38": [
    "Capitalizing research expenditure or failing to separate research from development phases",
    "Capitalizing internally generated brands or customer lists",
    "Applying the revaluation model without an active market for the asset"
  ],
  "IAS 40": [
    "Classifying hotel properties or student accommodation as investment property (they are owner-occupied if the services provided are significant)",
    "Failing to recognize fair value changes in P&L under the fair value model (some entities incorrectly recognize in OCI)",
    "Incorrectly accounting for transfers — particularly the IAS 16 revaluation treatment required on transfer from owner-occupied to investment property"
  ],
  "IAS 41": [
    "Continuing to apply IAS 41 to bearer plants (post-2014 amendment these are within IAS 16)",
    "Applying IAS 41 to agricultural land (IAS 16 or IAS 40)",
    "Applying IAS 41 after harvest — post-harvest produce is within IAS 2"
  ]
};
