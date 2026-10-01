import { SEED_QUESTIONS, type ExamQuestion } from "@/lib/exam-bank";
import { IFRS_QUESTION_SEED } from "@/data/ifrs-quiz-seed";
import { IFRS_PHASE3_QUESTION_SEED } from "@/data/ifrs-quiz-phase3";
import { IFRS_COVERAGE_QUESTION_SEED } from "@/data/ifrs-quiz-coverage";
import { IFRS_DEPTH_A_QUESTION_SEED } from "@/data/ifrs-quiz-depth-a";
import { IFRS_DEPTH_B_QUESTION_SEED } from "@/data/ifrs-quiz-depth-b";
import { IFRS_DEPTH_C_QUESTION_SEED } from "@/data/ifrs-quiz-depth-c";
import { IFRS_BASELINE_EXTRA_QUESTION_SEED } from "@/data/ifrs-quiz-baseline-extra";
import { IFRS_PHASE4_DEPTH_QUESTION_SEED } from "@/data/ifrs-quiz-phase4-depth";
import { IFRS_PHASE4_BASELINE_QUESTION_SEED } from "@/data/ifrs-quiz-phase4-baseline";
import { IFRS_PHASE5_A_QUESTION_SEED } from "@/data/ifrs-quiz-phase5-a";
import { IFRS_PHASE5_B_QUESTION_SEED } from "@/data/ifrs-quiz-phase5-b";
import { IFRS_PHASE6_GUIDE_QUESTIONS } from "@/data/ifrs-quiz-phase6-guide-mastery";
import { IFRS_PHASE8_ENRICHMENT_QUESTIONS } from "@/data/ifrs-quiz-phase8-enrichment";

export function detectIfrsStandardCode(question: ExamQuestion): string | null {
  const haystack = `${question.topic} ${question.reference}`;
  const match = haystack.match(/\b(IFRS|IAS)\s*([0-9]{1,2})\b/i);
  return match ? `${match[1].toUpperCase()} ${match[2]}` : null;
}

const layers: ExamQuestion[][] = [
  SEED_QUESTIONS.filter((question) => question.track === "IFRS"),
  IFRS_QUESTION_SEED,
  IFRS_PHASE3_QUESTION_SEED,
  IFRS_COVERAGE_QUESTION_SEED,
  IFRS_DEPTH_A_QUESTION_SEED,
  IFRS_DEPTH_B_QUESTION_SEED,
  IFRS_DEPTH_C_QUESTION_SEED,
  IFRS_BASELINE_EXTRA_QUESTION_SEED,
  IFRS_PHASE4_DEPTH_QUESTION_SEED,
  IFRS_PHASE4_BASELINE_QUESTION_SEED,
  IFRS_PHASE5_A_QUESTION_SEED,
  IFRS_PHASE5_B_QUESTION_SEED,
  IFRS_PHASE6_GUIDE_QUESTIONS,
  IFRS_PHASE8_ENRICHMENT_QUESTIONS,
];

const byId = new Map<string, ExamQuestion>();
for (const layer of layers) {
  for (const question of layer) byId.set(question.id, question);
}

export const IFRS_LOCAL_QUESTIONS = [...byId.values()];

export const IFRS_LOCAL_QUESTION_COUNTS = IFRS_LOCAL_QUESTIONS.reduce<Record<string, number>>(
  (counts, question) => {
    const code = detectIfrsStandardCode(question);
    if (code) counts[code] = (counts[code] ?? 0) + 1;
    return counts;
  },
  {},
);

export const IFRS_LOCAL_QUESTION_TOTAL = IFRS_LOCAL_QUESTIONS.length;
