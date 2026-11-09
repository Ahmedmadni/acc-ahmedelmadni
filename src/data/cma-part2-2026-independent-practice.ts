import type { CmaLocalQuestion } from "@/data/cma-question-bank";
import { CMA_TOPICS, type CmaDomain } from "@/data/cma-topics";

/**
 * Original 2026 CMA Part 2 practice questions aligned to IMA's official 2024
 * content weights. No text, distractors, answer keys or explanations are
 * reproduced from IMA, ICMA, Gleim, HOCK or any other external question bank.
 * https://prodcm.imanet.org/-/media/IMA/Files/Home/IMA-Certifications/CMA-Certification/2024-CMA-Content-Specification-Outlines-Final.ashx
 */
type Spec = {
  domain: CmaDomain; topic: string; question: string;
  choices: [string, string, string, string]; answerIndex: number; explanation: string;
};
const specs: Spec[] = [
  {
    "domain": "financial-statement-analysis",
    "topic": "p2-su1-common-size",
    "question": "A company earns 2,400,000 in revenue and incurs 336,000 in administration expenses. What is the common-size administrative expense percentage?",
    "choices": [
      "7%",
      "14%",
      "28%",
      "86%"
    ],
    "answerIndex": 1,
    "explanation": "Common-size expenses are divided by sales: 336,000 / 2,400,000 = 14%."
  },
  {
    "domain": "financial-statement-analysis",
    "topic": "p2-su1-liquidity",
    "question": "A company has cash 85,000, marketable securities 45,000, receivables 110,000, inventories 60,000, and current liabilities 120,000. What is its quick ratio?",
    "choices": [
      "1.50",
      "1.75",
      "2.00",
      "2.50"
    ],
    "answerIndex": 2,
    "explanation": "Quick assets exclude inventory. The numerator is 85,000 + 45,000 + 110,000 = 240,000; 240,000 / 120,000 = 2.00."
  },
  {
    "domain": "financial-statement-analysis",
    "topic": "p2-su1-solvency",
    "question": "A manufacturer has EBIT of 330,000 and annual interest expense of 55,000. What is its times-interest-earned ratio?",
    "choices": [
      "0.17 times",
      "5 times",
      "6 times",
      "7 times"
    ],
    "answerIndex": 2,
    "explanation": "Times interest earned = EBIT divided by interest, or 330,000 / 55,000 = 6 times."
  },
  {
    "domain": "financial-statement-analysis",
    "topic": "p2-su1-leverage",
    "question": "At its present activity, a business has EBIT of 100,000 and annual interest of 25,000. What is the degree of financial leverage at this EBIT level?",
    "choices": [
      "1.00",
      "1.25",
      "1.33",
      "4.00"
    ],
    "answerIndex": 2,
    "explanation": "Financial leverage = EBIT / (EBIT minus interest) = 100,000 / 75,000 = approximately 1.33."
  },
  {
    "domain": "financial-statement-analysis",
    "topic": "p2-su2-profitability",
    "question": "A company has 8% net margin, asset turnover of 1.6, and an equity multiplier of 2.5. What is return on equity using the DuPont identity?",
    "choices": [
      "12.8%",
      "20.0%",
      "32.0%",
      "40.0%"
    ],
    "answerIndex": 2,
    "explanation": "DuPont ROE is margin × asset turnover × equity multiplier = 8% × 1.6 × 2.5 = 32%."
  },
  {
    "domain": "financial-statement-analysis",
    "topic": "p2-su2-per-share",
    "question": "Net income is 570,000, preferred dividends for the year are 30,000, and weighted-average common shares number 180,000. What is basic EPS?",
    "choices": [
      "2.83",
      "3.00",
      "3.17",
      "3.50"
    ],
    "answerIndex": 1,
    "explanation": "Basic EPS = (570,000 minus 30,000 of preferred dividends) / 180,000 = 3.00."
  },
  {
    "domain": "financial-statement-analysis",
    "topic": "p2-su3-activity",
    "question": "Cost of goods sold for the year is 900,000 and average inventory is 150,000. What is inventory turnover?",
    "choices": [
      "4 times",
      "5 times",
      "6 times",
      "7 times"
    ],
    "answerIndex": 2,
    "explanation": "Inventory turnover uses cost of goods sold divided by average inventory: 900,000 / 150,000 = 6."
  },
  {
    "domain": "corporate-finance",
    "topic": "p2-su5-risk-return",
    "question": "A portfolio invests 35% in securities earning an expected 6% and 65% in securities earning an expected 14%. What is its expected return?",
    "choices": [
      "9.2%",
      "10.0%",
      "11.2%",
      "14.0%"
    ],
    "answerIndex": 2,
    "explanation": "Weighted expected return = 0.35 × 6% + 0.65 × 14% = 11.2%."
  },
  {
    "domain": "corporate-finance",
    "topic": "p2-su5-portfolio",
    "question": "Thirty percent of an equity portfolio has beta 0.8, and the remaining 70% has beta 1.3. What is portfolio beta?",
    "choices": [
      "0.95",
      "1.15",
      "1.30",
      "1.54"
    ],
    "answerIndex": 1,
    "explanation": "Portfolio beta = 0.30 × 0.8 + 0.70 × 1.3 = 1.15."
  },
  {
    "domain": "corporate-finance",
    "topic": "p2-su6-current-capital",
    "question": "A firm is financed by 35% debt at a 9% pretax cost and 65% equity at a 13% cost. With a 30% marginal tax rate, what is approximate WACC?",
    "choices": [
      "9.50%",
      "10.66%",
      "11.60%",
      "13.00%"
    ],
    "answerIndex": 1,
    "explanation": "WACC = 0.35 × 9% × (1 − 0.30) + 0.65 × 13% = 10.655%, rounded to 10.66%."
  },
  {
    "domain": "corporate-finance",
    "topic": "p2-su6-stock-value",
    "question": "Next year's expected dividend is 3.00 per share. Dividends grow at 5% indefinitely and required return is 11%. What is the Gordon growth valuation?",
    "choices": [
      "30.00",
      "37.50",
      "50.00",
      "60.00"
    ],
    "answerIndex": 2,
    "explanation": "Value = next dividend / (required return less growth) = 3.00 / (0.11 − 0.05) = 50.00."
  },
  {
    "domain": "corporate-finance",
    "topic": "p2-su7-inventory",
    "question": "Annual demand is 20,000 units, ordering cost 100 per order, and annual holding cost 4 per unit. What is economic order quantity?",
    "choices": [
      "500",
      "1,000",
      "1,250",
      "2,000"
    ],
    "answerIndex": 1,
    "explanation": "EOQ = square root of (2 × 20,000 × 100 / 4) = square root of 1,000,000 = 1,000 units."
  },
  {
    "domain": "corporate-finance",
    "topic": "p2-su8-exchange-systems",
    "question": "A Saudi purchaser exchanges riyals for EUR 25,000 at SAR 4.12 per euro, ignoring fees. How many riyals are required?",
    "choices": [
      "6,068",
      "100,000",
      "103,000",
      "412,000"
    ],
    "answerIndex": 2,
    "explanation": "Multiply the foreign currency purchase by the direct SAR/EUR quote: 25,000 × 4.12 = SAR 103,000."
  },
  {
    "domain": "corporate-finance",
    "topic": "p2-su8-mergers",
    "question": "A target has standalone value 40 million. Estimated synergies total 6 million and integration costs are 2 million. The acquirer pays 43 million. What is estimated acquisition gain to the acquirer?",
    "choices": [
      "1 million",
      "3 million",
      "5 million",
      "7 million"
    ],
    "answerIndex": 0,
    "explanation": "Acquirer gain equals 40 + 6 − 2 − 43 = 1 million. Net synergies must cover any premium paid."
  },
  {
    "domain": "decision-analysis",
    "topic": "p2-su9-cvp",
    "question": "A product sells at 75 and has variable cost 50 per unit. If total annual fixed costs are 125,000, how many units are needed to break even?",
    "choices": [
      "2,500",
      "4,000",
      "5,000",
      "6,250"
    ],
    "answerIndex": 2,
    "explanation": "Unit contribution margin is 75 − 50 = 25. Break-even units = 125,000 / 25 = 5,000."
  },
  {
    "domain": "decision-analysis",
    "topic": "p2-su9-target-income",
    "question": "Annual fixed costs are 64,000 and contribution margin is 16 per unit. How many units must be sold to earn pretax income of 32,000?",
    "choices": [
      "2,000",
      "4,000",
      "6,000",
      "8,000"
    ],
    "answerIndex": 2,
    "explanation": "Required units = (fixed costs + pretax target) / unit contribution = 96,000 / 16 = 6,000."
  },
  {
    "domain": "decision-analysis",
    "topic": "p2-su9-multi-product",
    "question": "A standard sales bundle contains three units of A with a contribution of 10 each and two units of B with a contribution of 25 each. If fixed costs are 240,000, how many bundles break even?",
    "choices": [
      "1,500",
      "2,000",
      "2,400",
      "3,000"
    ],
    "answerIndex": 3,
    "explanation": "Bundle contribution = 3 × 10 + 2 × 25 = 80; divide 240,000 fixed costs by 80 to get 3,000 bundles."
  },
  {
    "domain": "decision-analysis",
    "topic": "p2-su10-relevant-costs",
    "question": "An unused building could earn 30,000 annually in rental income but is being considered for an internal project. How should the forgone rental income enter the project decision?",
    "choices": [
      "Exclude it because no cash rent is paid",
      "Count it as a relevant opportunity cost",
      "Treat it as a historical sunk cost",
      "Record it as depreciation"
    ],
    "answerIndex": 1,
    "explanation": "The rent forgone from the next-best use is a relevant opportunity cost, even without an accounting payment."
  },
  {
    "domain": "decision-analysis",
    "topic": "p2-su10-special-orders",
    "question": "A factory has idle capacity for 800 additional units sold for 35 each. Variable costs are 25 per unit and special setup cost is 2,000. No regular sales are displaced. What is incremental profit?",
    "choices": [
      "4,000",
      "6,000",
      "8,000",
      "10,000"
    ],
    "answerIndex": 1,
    "explanation": "Incremental profit is 800 × (35 − 25) − 2,000 = 6,000."
  },
  {
    "domain": "decision-analysis",
    "topic": "p2-su10-make-buy",
    "question": "Making a component costs 27 per unit in avoidable cost. Buying costs 23 per unit and releases capacity that earns 5 contribution per unit elsewhere. What is the benefit of buying per unit?",
    "choices": [
      "2",
      "4",
      "5",
      "9"
    ],
    "answerIndex": 3,
    "explanation": "Compared with buying, making costs 27 plus 5 forgone contribution. Buying for 23 creates a 9 per-unit gain."
  },
  {
    "domain": "decision-analysis",
    "topic": "p2-su10-process-further",
    "question": "Processing a joint product beyond split-off would earn 35,000 additional revenue and incur 20,000 additional costs. How does processing further affect profit?",
    "choices": [
      "Decreases it by 15,000",
      "Increases it by 15,000",
      "Increases it by 20,000",
      "Increases it by 35,000"
    ],
    "answerIndex": 1,
    "explanation": "Pre-split costs are irrelevant to this choice; differential revenue less differential cost is 15,000 profit."
  },
  {
    "domain": "decision-analysis",
    "topic": "p2-su10-keep-drop",
    "question": "A unit contributes 130,000 before fixed costs. Closing it would eliminate 90,000 of its fixed cost, while other common fixed costs remain. What is the overall profit effect of closure?",
    "choices": [
      "Increase by 40,000",
      "Decrease by 40,000",
      "Decrease by 90,000",
      "No effect"
    ],
    "answerIndex": 1,
    "explanation": "Closure sacrifices 130,000 contribution and saves only 90,000 avoidable costs, so company profit falls by 40,000."
  },
  {
    "domain": "decision-analysis",
    "topic": "p2-su11-pricing",
    "question": "A product's competitive market price is 250. Management aims for operating profit equal to 30% of selling price. What is the maximum target cost per unit?",
    "choices": [
      "75",
      "150",
      "175",
      "225"
    ],
    "answerIndex": 2,
    "explanation": "Target cost = selling price less target profit = 250 × (1 − 0.30) = 175."
  },
  {
    "domain": "risk-mgmt",
    "topic": "p2-su12-risk-management",
    "question": "A possible system outage has a 20% likelihood and would cause a loss of 400,000. What is expected monetary loss without mitigating controls?",
    "choices": [
      "20,000",
      "40,000",
      "80,000",
      "400,000"
    ],
    "answerIndex": 2,
    "explanation": "Expected loss is probability multiplied by severity: 0.20 × 400,000 = 80,000."
  },
  {
    "domain": "risk-mgmt",
    "topic": "p2-su12-coso-erm",
    "question": "A board's tolerance for a particular risk is expected loss no greater than 40,000. A proposed activity has expected loss of 75,000. Which response is most appropriate?",
    "choices": [
      "Treat it as within tolerance",
      "Consider treatment or approval of an explicit exception",
      "Ignore the difference because no loss has happened",
      "Raise the risk limit secretly"
    ],
    "answerIndex": 1,
    "explanation": "The exposure is 35,000 above the stated tolerance and should be addressed via governance and risk response."
  },
  {
    "domain": "risk-mgmt",
    "topic": "p2-su12-coso-erm",
    "question": "A finance executive repeatedly overrides documented disbursement controls while insisting that staff follow the risk manual. Which ERM weakness is most evident?",
    "choices": [
      "Valuation models",
      "Governance and risk culture",
      "Interest-rate duration",
      "Inventory replenishment"
    ],
    "answerIndex": 1,
    "explanation": "Risk culture must be demonstrated by leaders through consistent behavior and control compliance."
  },
  {
    "domain": "risk-mgmt",
    "topic": "p2-su12-risk-management",
    "question": "An event would cost 900,000 if it occurred. A control costing 20,000 annually lowers event probability from 4% to 1%. What is its expected net annual benefit?",
    "choices": [
      "7,000",
      "20,000",
      "27,000",
      "36,000"
    ],
    "answerIndex": 0,
    "explanation": "Expected gross risk reduction = (4% − 1%) × 900,000 = 27,000. Subtract 20,000 for a net expected benefit of 7,000."
  },
  {
    "domain": "investment-decisions",
    "topic": "p2-su13-discounted-cash",
    "question": "A project costs 120,000 at inception and pays 70,000 at each of the next two year-ends. At a 10% discount rate with no terminal value, what is approximate NPV?",
    "choices": [
      "Negative 1,488",
      "Positive 1,488",
      "Positive 20,000",
      "Positive 7,000"
    ],
    "answerIndex": 1,
    "explanation": "NPV = −120,000 + 70,000 / 1.10 + 70,000 / 1.10 squared = approximately positive 1,488."
  },
  {
    "domain": "investment-decisions",
    "topic": "p2-su13-payback",
    "question": "A project costs 150,000 and generates cash inflows of 50,000 in year 1, 70,000 in year 2, and 60,000 in year 3. What is simple payback?",
    "choices": [
      "2.0 years",
      "2.5 years",
      "3.0 years",
      "3.5 years"
    ],
    "answerIndex": 1,
    "explanation": "Recovery after two years is 120,000, leaving 30,000. It needs half of year-three's 60,000, or 2.5 years total."
  },
  {
    "domain": "investment-decisions",
    "topic": "p2-su13-capital-budgeting",
    "question": "Equipment costs 150,000 plus 15,000 to install, and a project needs 20,000 initial working capital. Old equipment can be sold for 30,000 after tax. What is net initial cash outflow?",
    "choices": [
      "135,000",
      "150,000",
      "155,000",
      "185,000"
    ],
    "answerIndex": 2,
    "explanation": "The net initial outflow is 150,000 + 15,000 + 20,000 − 30,000 = 155,000."
  },
  {
    "domain": "investment-decisions",
    "topic": "p2-su13-ranking",
    "question": "Two mutually exclusive, equally risky projects have similar lives. Project A has NPV 80,000 and IRR 18%; B has NPV 100,000 and IRR 16%. Which best maximizes shareholder value?",
    "choices": [
      "Choose A because its IRR is higher",
      "Choose B because its NPV is higher",
      "Reject both because the IRRs differ",
      "Always use simple payback"
    ],
    "answerIndex": 1,
    "explanation": "For mutually exclusive projects at the appropriate cost of capital, maximizing positive NPV maximizes estimated shareholder wealth."
  },
  {
    "domain": "professional-ethics",
    "topic": "p2-su14-business-ethics",
    "question": "During supplier selection, the purchasing supervisor receives an offer of a luxury holiday from one bidder. What is the most appropriate first response?",
    "choices": [
      "Accept discreetly",
      "Decline and disclose the offer under conflict policies",
      "Accept after the bid closes",
      "Request cash instead"
    ],
    "answerIndex": 1,
    "explanation": "Such a gift can compromise real or apparent impartiality; the manager should decline it and disclose the approach."
  },
  {
    "domain": "professional-ethics",
    "topic": "p2-su14-ima-ethics",
    "question": "An analyst is asked to approve a complex valuation outside their expertise. Which professional response best demonstrates competence?",
    "choices": [
      "Certify immediately",
      "Conceal the limitation",
      "Obtain qualified assistance and disclose limitations",
      "Transfer responsibility to an untrained assistant"
    ],
    "answerIndex": 2,
    "explanation": "Competence requires sufficient skills, compliance with standards, and appropriate disclosure of relevant limitations."
  },
  {
    "domain": "professional-ethics",
    "topic": "p2-su14-fraud",
    "question": "An accounts payable worker can create vendors and approve payments without a second review. Which fraud-triangle factor is especially heightened?",
    "choices": [
      "Pressure",
      "Opportunity",
      "Rationalization",
      "Interest-rate exposure"
    ],
    "answerIndex": 1,
    "explanation": "The lack of segregation of duties creates opportunities to initiate and conceal fictitious vendor payments."
  },
  {
    "domain": "professional-ethics",
    "topic": "p2-su15-legislation",
    "question": "An agent proposes booking an unverified payment benefiting an overseas licensing official as a charitable contribution. What should the controller do?",
    "choices": [
      "Approve because charity is always permitted",
      "Perform compliance due diligence and record the payment accurately",
      "Split the amount into smaller invoices",
      "Leave the payment out of the books"
    ],
    "answerIndex": 1,
    "explanation": "The stated charitable purpose does not remove bribery risk; investigate legitimacy and maintain truthful accounting records."
  },
  {
    "domain": "professional-ethics",
    "topic": "p2-su15-responsibility",
    "question": "A company learns that a major supplier may use hazardous child labor. Which course best reflects corporate responsibility?",
    "choices": [
      "Ignore it until litigation begins",
      "Investigate and require monitored remediation",
      "Hide the issue from disclosures",
      "Raise retail prices without investigating"
    ],
    "answerIndex": 1,
    "explanation": "Supply-chain diligence requires investigating credible human-rights concerns and monitoring proportionate corrective action."
  }
];
const topicIndex = new Map(CMA_TOPICS.map((topic) => [topic.id, topic]));

export const CMA_PART2_2026_INDEPENDENT_QUESTIONS: CmaLocalQuestion[] = specs.map((item, index) => {
  const topic = topicIndex.get(item.topic);
  if (!topic || topic.part !== "part-2" || topic.domain !== item.domain ||
      item.choices.length !== 4 || new Set(item.choices).size !== 4 ||
      item.answerIndex < 0 || item.answerIndex > 3) {
    throw new Error(`Invalid independent CMA Part 2 question ${index + 1}`);
  }
  // Balanced, deterministic answer-key positions: 9 correct answers in each A-D
  // position across 36 questions. Reordering only affects independently written choices.
  const keyPositions = [2, 0, 3, 1, 3, 1, 0, 2, 1, 3, 2, 0];
  const targetAnswerIndex = keyPositions[index % keyPositions.length];
  const choices = [...item.choices];
  [choices[item.answerIndex], choices[targetAnswerIndex]] =
    [choices[targetAnswerIndex], choices[item.answerIndex]];
  return {
    id: `cma-p2-2026-independent-q${String(index + 1).padStart(3, "0")}`,
    track: "CMA", topicId: item.topic, studyUnit: topic.studyUnit,
    examDomain: `Part 2 — ${topic.studyUnit}`, topic: topic.titleEn,
    difficulty: "intermediate",
    reference: "Original CMA Part 2 practice based on the IMA 2024 content specification, not an official or publisher exam question",
    question: { en: item.question, ar: item.question },
    choices: { en: choices, ar: [...choices] },
    answerIndex: targetAnswerIndex,
    explanation: { en: item.explanation, ar: item.explanation },
    sourceLanguage: "en",
  };
});
