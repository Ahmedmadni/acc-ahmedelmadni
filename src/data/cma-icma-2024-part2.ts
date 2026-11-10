import type { CmaLocalQuestion } from "@/data/cma-question-bank";
import { CMA_TOPICS } from "@/data/cma-topics";
import type { IcmaPart2RawQuestion } from "@/data/cma-icma-2024-part2-raw";
import { ICMA_2024_PART2_A } from "@/data/cma-icma-2024-part2-a";
import { ICMA_2024_PART2_B } from "@/data/cma-icma-2024-part2-b";
import { ICMA_2024_PART2_C } from "@/data/cma-icma-2024-part2-c";
import { ICMA_2024_PART2_D } from "@/data/cma-icma-2024-part2-d";
import { ICMA_2024_PART2_E } from "@/data/cma-icma-2024-part2-e";
import { ICMA_2024_PART2_F } from "@/data/cma-icma-2024-part2-f";

/**
 * This material is from ICMA CMA Exam Support Package © 2024 (official retired
 * questions, distinct from the site's original practice). The site owner
 * expressly confirms that they obtained republication permission.
 * Content remains attributed to ICMA, without suggesting IMA endorsement
 * of this independently operated website.
 */
export const CMA_ICMA_2024_PART2_RAW: IcmaPart2RawQuestion[] = [
  ...ICMA_2024_PART2_A,
  ...ICMA_2024_PART2_B,
  ...ICMA_2024_PART2_C,
  ...ICMA_2024_PART2_D,
  ...ICMA_2024_PART2_E,
  ...ICMA_2024_PART2_F,
];

/**
 * Match the 2024 ICMA CSO codes to the website's 15-part instructional
 * units and 56 topics. Codes use a different structure from the site's
 * internal topic IDs, so this is an explicit editorial crosswalk.
 */
const csoToTopic: Record<string, string> = {
  // A — Financial Statement Analysis
  "2A1A":"p2-su1-common-size", "2A1B":"p2-su1-common-size",
  "2A2A":"p2-su1-liquidity", "2A2B":"p2-su1-solvency",
  "2A2C":"p2-su3-activity", "2A2D":"p2-su2-profitability",
  "2A2E":"p2-su2-per-share",
  "2A3A":"p2-su2-reported-profit", "2A3C":"p2-su2-reported-profit",
  "2A3D":"p2-su2-profitability", "2A3E":"p2-su2-per-share",
  "2A4A":"p2-su2-reported-profit", "2A4B":"p2-su2-reported-profit",
  "2A4C":"p2-su2-reported-profit", "2A4D":"p2-su2-reported-profit",
  "2A4E":"p2-su3-earnings-quality",

  // B — Corporate Finance
  "2B1A":"p2-su5-risk-return", "2B1B":"p2-su4-bonds",
  "2B1C":"p2-su5-risk-return", "2B2A":"p2-su4-bonds",
  "2B2B":"p2-su4-bonds", "2B2C":"p2-su6-current-capital",
  "2B2D":"p2-su4-bonds", "2B3C":"p2-su5-markets",
  "2B3E":"p2-su4-dividends", "2B4A":"p2-su7-working-capital",
  "2B4B":"p2-su7-cash", "2B4C":"p2-su7-marketable",
  "2B4D":"p2-su7-receivables", "2B4E":"p2-su7-inventory",
  "2B4F":"p2-su5-short-financing", "2B4G":"p2-su5-short-financing",
  "2B5B":"p2-su6-derivatives", "2B6A":"p2-su8-exchange-systems",
  "2B6B":"p2-su8-fx-risk",

  // C — Business Decision Analysis
  "2C1A":"p2-su9-cvp", "2C1B":"p2-su9-target-income",
  "2C1C":"p2-su9-multi-product", "2C2A":"p2-su10-relevant-costs",
  "2C2B":"p2-su10-relevant-costs", "2C2C":"p2-su10-special-orders",
  "2C2D":"p2-su10-make-buy", "2C2E":"p2-su10-process-further",
  "2C2F":"p2-su10-keep-drop", "2C2G":"p2-su10-marginal-profit",
  "2C3A":"p2-su11-elasticity", "2C3B":"p2-su11-pricing",
  "2C3D":"p2-su11-pricing", "2C3E":"p2-su11-market-structures",

  // D — Enterprise Risk Management
  "2D1A":"p2-su12-risk-management", "2D1B":"p2-su12-risk-management",
  "2D1C":"p2-su12-risk-management", "2D1D":"p2-su12-coso-erm",

  // E — Capital Investment Decisions
  "2E1A":"p2-su13-capital-budgeting", "2E1B":"p2-su13-capital-budgeting",
  "2E1C":"p2-su13-capital-budgeting", "2E1D":"p2-su13-risk-real-options",
  "2E2A":"p2-su13-discounted-cash", "2E2B":"p2-su13-discounted-cash",
  "2E2C":"p2-su13-payback", "2E2D":"p2-su13-ranking",

  // F — Professional Ethics
  "2F2A":"p2-su14-ima-ethics", "2F2C":"p2-su14-ima-ethics",
  "2F3C":"p2-su15-legislation", "2F3E":"p2-su15-responsibility",
};

const sectionDomain = {
  A: "financial-statement-analysis", B: "corporate-finance",
  C: "decision-analysis", D: "risk-mgmt",
  E: "investment-decisions", F: "professional-ethics",
} as const;

const topicIndex = new Map(CMA_TOPICS.map((topic) => [topic.id, topic]));

function resolveTopic(raw: IcmaPart2RawQuestion): string {
  // Within broad CSO headings, use the actual published question sequence
  // to distinguish stock valuation, bond financing and WACC.
  if (raw.section === "B" && raw.cso === "2B2B") {
    if (raw.questionNumber === 8) return "p2-su6-stock-value";
    return raw.questionNumber >= 15 ? "p2-su4-stock" : "p2-su4-bonds";
  }
  if (raw.section === "B" && raw.cso === "2B2C" && raw.questionNumber === 20) {
    return "p2-su4-bonds";
  }
  if (raw.section === "C" && raw.cso === "2C2B" && raw.questionNumber === 34) {
    return "p2-su11-pricing";
  }
  if (raw.section === "E" && raw.cso === "2E2B" &&
    [49, 50, 56, 57, 58, 59].includes(raw.questionNumber)) {
    return "p2-su13-ranking";
  }
  return csoToTopic[raw.cso.toUpperCase()] ?? "";
}

export const CMA_ICMA_2024_PART2_QUESTIONS: CmaLocalQuestion[] =
  CMA_ICMA_2024_PART2_RAW.map((raw) => {
    const topicId = resolveTopic(raw);
    const topic = topicIndex.get(topicId);
    if (!topic || topic.part !== "part-2" || topic.domain !== sectionDomain[raw.section] ||
      raw.choices.length !== 4 || !raw.choices.every(Boolean) ||
      raw.answerIndex < 0 || raw.answerIndex > 3) {
      throw new Error(`Unmapped, invalid or incomplete ICMA 2024 Part 2 question: ${raw.id}`);
    }
    return {
      id: raw.id,
      track: "CMA",
      topicId,
      studyUnit: topic.studyUnit,
      topic: topic.titleEn,
      examDomain: `Part 2 · Domain ${raw.section} — ${topic.titleEn}`,
      difficulty: "intermediate",
      reference: `ICMA CMA Exam Support Package © 2024 · Part 2 Domain ${raw.section}, question ${raw.questionNumber}, CSO ${raw.cso}, LOS ${raw.los}, PDF page ${raw.pdfPage}. Used with republication permission confirmed by the site owner.`,
      question: { en: raw.question, ar: raw.question },
      choices: { en: [...raw.choices], ar: [...raw.choices] },
      answerIndex: raw.answerIndex,
      explanation: { en: raw.explanation, ar: raw.explanation },
      sourceLanguage: "en",
      sourcePage: raw.pdfPage,
      sourceLayoutReview: raw.layoutCheckRecommended,
      answerStatus: "source",
    };
  });
