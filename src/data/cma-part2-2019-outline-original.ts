import { CMA_TOPICS } from "@/data/cma-topics";
import type { CmaLocalQuestion } from "@/data/cma-question-bank";

/**
 * Original English-language practice questions inspired by the accounting concepts
 * covered in the user's Gleim 2019 CMA Part 2 OUTLINE (241-page PDF).
 *
 * The PDF does not contain an MCQ question bank or answer key. None of these
 * stems, option sets, answers or explanations are transcribed from the book.
 *
 * The 2019 book's 11 units are NOT the site's 2024 Part 2 study-unit scheme.
 * Each record explicitly maps its concept to an existing site topic.
 * PDF pages are learning-concept references, NOT original question locations.
 */
type Spec = readonly [
  outlineUnit: number, pdfPage: number, topicId: string,
  stem: string, choices: readonly [string, string, string, string],
  answerIndex: 0 | 1 | 2 | 3, explanation: string,
];

const specs: Spec[] = [
  // 2019 outline SU 1: Ethics — PDF pp. 1–20.
  [1, 3, "p2-su14-business-ethics",
    "A manager discovers a safety defect that is legal to leave unreported under a narrow local rule. Which action best reflects ethical responsibility?",
    ["Hide the problem until a customer complains", "Wait for a competitor to issue a recall", "Evaluate the harm and disclose the risk through appropriate channels", "Exclude the defect from management reports"],
    2, "Ethical decisions require consideration of stakeholder harm and integrity, not just minimal legal compliance."],
  [1, 7, "p2-su14-ima-ethics",
    "A controller learns that a forecast used by lenders excludes a major known cash commitment. Which IMA ethical standard most directly requires full relevant disclosure?",
    ["Confidentiality", "Credibility", "Technical competence only", "Cost leadership"],
    1, "Credibility requires objective communication and disclosure of information relevant to the intended user's understanding."],
  [1, 10, "p2-su15-legislation",
    "An intermediary requests that a questionable payment to a foreign official be booked as a consulting fee. What is the appropriate accounting response?",
    ["Reject misleading classification and request documented compliance review", "Record it as consulting because the amount is immaterial", "Split the payment across accounts", "Pay in cash so the ledger stays clean"],
    0, "Financial records must describe transactions faithfully, and suspicious payments require escalation rather than concealment."],
  [1, 19, "p2-su15-responsibility",
    "A producer obeys pollution limits but identifies an affordable process that would substantially reduce harm to its surrounding community. Which response best reflects corporate social responsibility?",
    ["Ignore impacts that are not legally prohibited", "Evaluate only the current quarter's accounting profit", "Issue a marketing announcement without changing operations", "Consider the reduction alongside economic and stakeholder consequences"],
    3, "Corporate social responsibility involves assessing social and environmental effects beyond mechanical legal compliance."],

  // 2019 outline SU 2: Fraud and Risk Management — PDF pp. 21–45.
  [2, 24, "p2-su14-fraud",
    "An employee faces personal financial pressure, can approve and post supplier payments, and believes the company underpays them. Which combination is illustrated?",
    ["Liquidity, leverage, and solvency", "Pressure, opportunity, and rationalization", "Cost, volume, and profit", "Prevention, detection, and recovery"],
    1, "The fraud triangle consists of pressure or incentive, opportunity, and rationalization."],
  [2, 29, "p2-su14-fraud",
    "A small company allows one clerk to create vendors, approve invoices, and release payments. Which change best reduces the opportunity for payment fraud?",
    ["Increase the payment limit for the clerk", "Let the clerk reconcile their own approvals", "Separate vendor setup, approval, and cash disbursement responsibilities", "Move the invoice files to a larger cabinet"],
    2, "Segregation of incompatible duties reduces opportunities to create and conceal unauthorized payments."],
  [2, 34, "p2-su12-risk-management",
    "An equipment shutdown has an estimated loss of 300,000 if it occurs and a 8% probability over the planning period. What is the unmitigated expected loss?",
    ["24,000", "8,000", "276,000", "300,000"],
    0, "Expected loss = probability × impact = 0.08 × 300,000 = 24,000. This is an expectation, not the worst-case loss."],
  [2, 38, "p2-su12-coso-erm",
    "Leadership regularly overrides controls while publicly promoting risk awareness. Which part of effective enterprise risk management most clearly needs strengthening?",
    ["Market capitalization", "The inventory reorder point", "An option's exercise price", "Governance and risk culture"],
    3, "ERM must be supported by actual leadership behavior, governance and culture rather than statements alone."],

  // 2019 outline SU 3: Financial Markets and Types of Securities — PDF pp. 46–69.
  [3, 48, "p2-su5-markets",
    "An investor buys shares directly from an existing shareholder through an exchange. Which market is involved?",
    ["Primary issuance market", "Secondary market", "Direct private placement to the issuer", "Initial public offering"],
    1, "A secondary market transfers previously issued securities between investors; it does not raise new cash for the issuer."],
  [3, 58, "p2-su4-bonds",
    "Two otherwise identical fixed-rate bonds differ only in credit quality. If investors demand more compensation for default risk, which bond should ordinarily offer the higher yield?",
    ["The lower-credit-quality bond", "The bond with the stronger guarantee", "Both must have the same yield", "Only the bond with a larger face value"],
    0, "Greater perceived credit risk generally increases the required yield, holding other terms constant."],
  [3, 62, "p2-su4-stock",
    "A company is liquidated with insufficient assets to satisfy every claim. Which security normally has a priority claim before ordinary shareholders?",
    ["Common shares with voting rights", "Treasury shares", "Preferred shares under their stated liquidation preference", "Unissued ordinary shares"],
    2, "Preferred shareholders ordinarily have a specified priority relative to common shareholders, though creditors rank ahead of equity."],
  [3, 66, "p2-su5-portfolio",
    "A diversified fund holds shares in many industries. Which risk is least likely to disappear merely by adding more unrelated stocks?",
    ["An individual supplier's bankruptcy", "A single plant's production failure", "An isolated product recall", "Economy-wide interest-rate shocks"],
    3, "Diversification reduces company-specific risk, but broad systematic market risk remains."],

  // 2019 outline SU 4: Valuation Methods and Cost of Capital — PDF pp. 70–91.
  [4, 73, "p2-su6-stock-value",
    "A share is expected to pay a dividend of 4.50 next year. If the required return is 13% and dividends grow perpetually at 4%, what is the constant-growth value?",
    ["37.50", "56.25", "50.00", "112.50"],
    2, "Gordon growth value = next dividend ÷ (required return − growth) = 4.50 ÷ 0.09 = 50.00."],
  [4, 79, "p2-su6-derivatives",
    "A call option has an exercise price of 50, premium paid of 3, and underlying price at expiration of 55. What is the buyer's profit per share, ignoring fees?",
    ["2", "5", "3", "8"],
    0, "The payoff is max(55 − 50, 0) = 5, less the premium of 3, giving a profit of 2."],
  [4, 86, "p2-su6-current-capital",
    "A firm finances itself with 40% debt at an 8% pretax cost and 60% equity at a 14% cost. With a 25% marginal income tax rate, what is WACC?",
    ["11.6%", "10.8%", "9.6%", "14.0%"],
    1, "WACC = 0.40 × 8% × (1 − 0.25) + 0.60 × 14% = 2.4% + 8.4% = 10.8%."],
  [4, 90, "p2-su6-new-capital",
    "A new common share issue entails significant flotation costs but provides the same expected dividends to shareholders. Holding the issue price and growth forecast fixed, what happens to the company's effective cost of new equity?",
    ["It necessarily falls because expenses are capitalized", "It is unaffected because issue costs are paid only once", "It becomes identical to the after-tax cost of debt", "It generally rises because net proceeds to the issuer are lower"],
    3, "Flotation costs reduce the net proceeds received for a given dividend commitment, increasing the effective financing cost."],

  // 2019 outline SU 5: Managing Current Assets — PDF pp. 92–114.
  [5, 94, "p2-su7-working-capital",
    "A manufacturer holds inventory for 40 days, collects receivables in 30 days, and pays suppliers after 20 days. What is its cash conversion cycle?",
    ["90 days", "30 days", "50 days", "70 days"],
    2, "Cash conversion cycle = inventory days + receivable days − payable days = 40 + 30 − 20 = 50 days."],
  [5, 98, "p2-su7-cash",
    "A cash forecast starts with 12,000, expects collections of 85,000 and payments of 94,000, and requires minimum ending cash of 8,000. How much additional financing is needed?",
    ["3,000", "5,000", "8,000", "9,000"],
    1, "Cash before financing is 12,000 + 85,000 − 94,000 = 3,000; required borrowing is 8,000 − 3,000 = 5,000."],
  [5, 106, "p2-su7-receivables",
    "A company plans to tighten credit standards to reduce bad debts. Which possible effect should management evaluate before adopting the policy?",
    ["The loss of profitable sales from customers who no longer qualify", "An automatic elimination of all collection expenses", "A required increase in receivables turnover days", "An unavoidable increase in inventory valuation"],
    0, "Stricter credit can lower default losses while also reducing sales and contribution margins; the net effect matters."],
  [5, 110, "p2-su7-inventory",
    "A distributor uses 12,000 units annually, incurs ordering costs of 200 per order, and annual carrying costs of 3 per unit. Approximately what is EOQ?",
    ["800 units", "1,000 units", "2,000 units", "1,265 units"],
    3, "EOQ = sqrt(2 × 12,000 × 200 ÷ 3) = sqrt(1,600,000), or approximately 1,265 units."],

  // 2019 outline SU 6: Corporate Restructuring and International Finance — PDF pp. 115–142.
  [6, 118, "p2-su8-mergers",
    "A target is worth 30 million alone. The acquirer expects synergies worth 8 million and integration costs worth 3 million. What is the maximum acquisition price that leaves the acquirer with zero net gain?",
    ["38 million", "35 million", "27 million", "33 million"],
    1, "Maximum price = target standalone value + net synergies = 30 + 8 − 3 = 35 million."],
  [6, 125, "p2-su8-exchange-systems",
    "If the spot exchange rate is SAR 3.75 per USD, how many Saudi riyals are needed to purchase USD 6,400, ignoring bank fees?",
    ["24,000", "1,706.67", "6,400", "17,066.67"],
    0, "Domestic currency required = foreign currency amount × SAR/USD = 6,400 × 3.75 = SAR 24,000."],
  [6, 130, "p2-su8-fx-risk",
    "A Saudi exporter will receive EUR 100,000 and locks in SAR 4.00/EUR with a forward. The spot rate at settlement falls to SAR 3.80/EUR. Relative to remaining unhedged, how does the forward affect receipts?",
    ["Receipts fall by SAR 20,000", "Receipts remain equal at the spot rate", "Receipts are SAR 20,000 higher before transaction costs", "The exporter owes EUR 20,000"],
    2, "Forward receipts are SAR 400,000 instead of SAR 380,000 at spot, a SAR 20,000 advantage before costs."],
  [6, 137, "p2-su8-fx-effects",
    "A company records a USD 10,000 payable at SAR 3.75 per dollar and pays it when the rate is SAR 3.90. What is the settlement-date foreign exchange result?",
    ["SAR 1,500 gain", "No gain or loss", "SAR 15,000 loss", "SAR 1,500 loss"],
    3, "The payable increases from SAR 37,500 to SAR 39,000. The importer recognizes a SAR 1,500 exchange loss."],

  // 2019 outline SU 7: Ratio Analysis — PDF pp. 143–169.
  [7, 146, "p2-su1-common-size",
    "A company reports cost of goods sold of 720,000 on sales of 1,800,000. What is the common-size cost-of-sales percentage?",
    ["60%", "40%", "25%", "72%"],
    1, "Common-size COGS = 720,000 ÷ 1,800,000 × 100 = 40% of sales."],
  [7, 151, "p2-su1-liquidity",
    "A company collects a trade receivable in cash at its full carrying value. Assuming nothing else changes, what happens to its current ratio?",
    ["It always doubles", "It increases because cash is more liquid", "It decreases due to a lower receivable balance", "It remains unchanged because total current assets and liabilities do not change"],
    3, "Cash replaces an equal amount of receivables, leaving aggregate current assets and current liabilities unchanged."],
  [7, 158, "p2-su2-profitability",
    "A company has a 12% net profit margin, total asset turnover of 2.0, and an equity multiplier of 1.5. Under the DuPont identity, what is ROE?",
    ["36%", "16%", "24%", "30%"],
    0, "DuPont ROE = 12% × 2.0 × 1.5 = 36%."],
  [7, 161, "p2-su2-reported-profit",
    "A company reports strong net income partly because it sold land at a large one-time gain. What is the best initial adjustment when evaluating recurring profitability?",
    ["Treat the gain as recurring cash from customers", "Exclude all depreciation from future profits", "Separate the nonrecurring gain from core operating results", "Replace the gain with forecasted land sales"],
    2, "One-time gains may distort a period's sustainable earnings and should be assessed separately from recurring operations."],

  // 2019 outline SU 8: Activity Measures and Financing — PDF pp. 170–184.
  [8, 172, "p2-su3-activity",
    "Net credit sales total 1,250,000 and average accounts receivable is 125,000. What is receivables turnover?",
    ["5 times", "8 times", "12.5 times", "10 times"],
    3, "Receivables turnover = net credit sales ÷ average receivables = 1,250,000 ÷ 125,000 = 10."],
  [8, 178, "p2-su3-earnings-quality",
    "A profitable business reports rising net earnings while cash from operations is consistently negative. Which analytical concern is most reasonable?",
    ["Liquidity is guaranteed by accounting profit", "Earnings quality and collection timing require closer examination", "All noncash revenues must be fraudulent", "Debt automatically decreases"],
    1, "Persistent divergence between accounting profit and operating cash flow can indicate working-capital pressure or weak cash conversion."],
  [8, 181, "p2-su5-short-financing",
    "A supplier offers terms of 2/10, net 40. Using a 365-day year, what is the approximate annualized cost of forgoing the discount?",
    ["12.2%", "18.6%", "24.8%", "2.0%"],
    2, "Annualized trade-credit cost ≈ (0.02 ÷ 0.98) × (365 ÷ 30) = 24.83%."],
  [8, 183, "p2-su5-long-financing",
    "A firm replaces a portion of long-term fixed-rate financing with short-term floating-rate debt. What additional financing exposure should it monitor?",
    ["Refinancing and interest-rate risk", "A guaranteed reduction in its cost of capital", "Permanent elimination of liquidity risk", "An immediate decrease in its contractual obligations"],
    0, "Shorter maturities and floating rates increase refinancing uncertainty and sensitivity to market interest rates."],

  // 2019 outline SU 9: Investment Decisions — PDF pp. 185–205.
  [9, 187, "p2-su13-capital-budgeting",
    "A project needs equipment costing 90,000, installation of 3,000 and an initial working-capital investment of 12,000. What is its initial cash outflow?",
    ["90,000", "93,000", "102,000", "105,000"],
    3, "Initial outflow includes equipment, installation and working capital: 90,000 + 3,000 + 12,000 = 105,000."],
  [9, 191, "p2-su13-risk-real-options",
    "A proposed investment can be abandoned after an initial pilot if demand is weak. What type of strategic flexibility is represented?",
    ["An abandonment real option", "A higher book depreciation rate", "A mandatory sunk cost increase", "A guaranteed positive NPV"],
    0, "The ability to cease an unprofitable project after new information arrives is an abandonment option and can have economic value."],
  [9, 195, "p2-su13-discounted-cash",
    "A project costs 80,000 now and generates 50,000 at the end of each of the next two years. With a 10% discount rate and zero terminal value, approximately what is NPV?",
    ["Negative 3,223", "Positive 6,777", "Positive 20,000", "Positive 86,777"],
    1, "NPV = −80,000 + 50,000/1.10 + 50,000/1.10² ≈ 6,777, so the value is positive."],
  [9, 201, "p2-su13-payback",
    "A machine requires an initial investment of 150,000 and is expected to generate a constant 60,000 in annual cash inflows. What is its simple payback period?",
    ["1.5 years", "3.0 years", "2.5 years", "4.0 years"],
    2, "Simple payback equals initial investment divided by constant annual inflow: 150,000 ÷ 60,000 = 2.5 years."],

  // 2019 outline SU 10: CVP Analysis — PDF pp. 206–219.
  [10, 210, "p2-su9-cvp",
    "A single-product firm has annual fixed costs of 72,000 and a unit contribution margin of 18. How many units must be sold to break even?",
    ["4,000", "3,000", "5,000", "1,296"],
    0, "Break-even units = fixed costs ÷ unit contribution = 72,000 ÷ 18 = 4,000 units."],
  [10, 215, "p2-su9-cvp",
    "A company sells 6,000 units and breaks even at 4,000 units. What is its unit margin of safety?",
    ["4,000 units", "10,000 units", "1,500 units", "2,000 units"],
    3, "Margin of safety in units = actual sales − break-even sales = 6,000 − 4,000 = 2,000."],
  [10, 217, "p2-su9-target-income",
    "Fixed costs are 90,000 and unit contribution margin is 24. How many units are required to earn 30,000 of pretax income?",
    ["3,750", "5,000", "2,500", "7,500"],
    1, "Required units = (fixed costs + target pretax profit) ÷ unit contribution = 120,000 ÷ 24 = 5,000."],
  [10, 218, "p2-su9-multi-product",
    "A fixed sales bundle contains two units of Product A with contribution of 30 each and one unit of Product B with contribution of 40. If fixed costs are 150,000, how many bundles break even?",
    ["1,000 bundles", "2,500 bundles", "1,500 bundles", "3,000 bundles"],
    2, "Each bundle contributes 2 × 30 + 40 = 100. Break-even bundles = 150,000 ÷ 100 = 1,500."],

  // 2019 outline SU 11: Marginal Analysis and Pricing — PDF pp. 220–241.
  [11, 223, "p2-su10-relevant-costs",
    "A machine bought years ago has a historical cost of 80,000 and no resale value. A new order would require only 12,000 of incremental operating expenses. Which amount is relevant to deciding whether to accept the order?",
    ["80,000 historic cost", "92,000 combined costs", "Prior-year accumulated depreciation", "12,000 incremental operating cost"],
    3, "Past acquisition cost is sunk and unrecoverable. The decision depends on future differential costs and revenues."],
  [11, 227, "p2-su10-special-orders",
    "A factory has spare capacity for a special order of 500 units. The order price is 65, variable cost is 50 per unit, and a one-time setup costs 2,000. What is the incremental profit?",
    ["5,500", "7,500", "2,000", "30,500"],
    0, "Incremental profit = 500 × (65 − 50) − 2,000 = 5,500, assuming no displaced regular sales."],
  [11, 230, "p2-su10-make-buy",
    "A component costs 42 per unit to make in avoidable costs, versus 39 to buy. Buying also frees capacity worth 6 per unit in contribution. What is the advantage of buying per unit?",
    ["3", "6", "9", "15"],
    2, "Avoidable make cost 42 plus alternative-use benefit 6 less purchase cost 39 = 9 per unit advantage to buying."],
  [11, 235, "p2-su11-elasticity",
    "Price rises from 100 to 110 while quantity demanded falls from 1,000 to 900. Using the midpoint method, what is the approximate absolute price elasticity?",
    ["0.50", "1.11", "2.00", "0.11"],
    1, "Midpoint elasticity magnitude = (100/950) ÷ (10/105) ≈ 1.11; demand is slightly elastic over this interval."],
];

const topics = new Map(CMA_TOPICS.map((topic) => [topic.id, topic]));

export const CMA_PART2_2019_OUTLINE_ORIGINAL_QUESTIONS: CmaLocalQuestion[] = specs.map(
  ([outlineUnit, pdfPage, topicId, stem, choices, answerIndex, explanation], index) => {
    const topic = topics.get(topicId);
    if (!topic || topic.part !== "part-2") {
      throw new Error(`Invalid CMA Part 2 topic for original question ${index + 1}: ${topicId}`);
    }
    const originalChoices = [...choices];
    return {
      id: `cma-p2-2019-concept-q${String(index + 1).padStart(3, "0")}`,
      track: "CMA",
      topicId,
      studyUnit: topic.studyUnit,
      topic: topic.titleEn,
      examDomain: `Part 2 — ${topic.studyUnit}`,
      difficulty: "intermediate",
      reference: `Original practice question — concept discussed in Gleim CMA Part 2 outline (2019), SU ${outlineUnit}, PDF p. ${pdfPage}; not a Gleim question`,
      question: { en: stem, ar: stem },
      choices: { en: originalChoices, ar: originalChoices },
      answerIndex,
      explanation: { en: explanation, ar: explanation },
      sourceLanguage: "en",
    };
  },
);
