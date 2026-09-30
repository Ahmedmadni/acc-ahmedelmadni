import { IFRS_QUESTION_SEED } from "@/data/ifrs-quiz-seed";
import { IFRS_PHASE3_QUESTION_SEED } from "@/data/ifrs-quiz-phase3";
import { IFRS_COVERAGE_QUESTION_SEED } from "@/data/ifrs-quiz-coverage";
import { IFRS_DEPTH_A_QUESTION_SEED } from "@/data/ifrs-quiz-depth-a";
import { IFRS_DEPTH_B_QUESTION_SEED } from "@/data/ifrs-quiz-depth-b";
import { IFRS_DEPTH_C_QUESTION_SEED } from "@/data/ifrs-quiz-depth-c";
import { IFRS_BASELINE_EXTRA_QUESTION_SEED } from "@/data/ifrs-quiz-baseline-extra";
import { IFRS_PHASE4_DEPTH_QUESTION_SEED } from "@/data/ifrs-quiz-phase4-depth";
import { IFRS_PHASE4_BASELINE_QUESTION_SEED } from "@/data/ifrs-quiz-phase4-baseline";
import { IFRS_PHASE5_QUESTION_SEED } from "@/data/ifrs-quiz-phase5";
import { SEED_QUESTIONS, type ExamQuestion } from "@/lib/exam-bank";

export function detectIfrsStandardCode(question: ExamQuestion): string | null {
  const haystack = `${question.topic} ${question.reference}`;
  const match = haystack.match(/\b(IFRS|IAS)\s*([0-9]{1,2})\b/i);
  return match ? `${match[1].toUpperCase()} ${match[2]}` : null;
}

export const IFRS_LOCAL_QUESTION_BANK: ExamQuestion[] = (() => {
  const byId = new Map<string, ExamQuestion>();

  for (const question of SEED_QUESTIONS) {
    if (question.track === "IFRS") byId.set(question.id, question);
  }

  for (const group of [
    IFRS_QUESTION_SEED,
    IFRS_PHASE3_QUESTION_SEED,
    IFRS_COVERAGE_QUESTION_SEED,
    IFRS_DEPTH_A_QUESTION_SEED,
    IFRS_DEPTH_B_QUESTION_SEED,
    IFRS_DEPTH_C_QUESTION_SEED,
    IFRS_BASELINE_EXTRA_QUESTION_SEED,
    IFRS_PHASE4_DEPTH_QUESTION_SEED,
    IFRS_PHASE4_BASELINE_QUESTION_SEED,
    IFRS_PHASE5_QUESTION_SEED,
  ]) {
    for (const question of group) byId.set(question.id, question);
  }

  return [...byId.values()];
})();

export const IFRS_LOCAL_QUESTION_COUNTS = (() => {
  const counts = new Map<string, number>();
  for (const question of IFRS_LOCAL_QUESTION_BANK) {
    const code = detectIfrsStandardCode(question);
    if (!code) continue;
    counts.set(code, (counts.get(code) ?? 0) + 1);
  }
  return counts;
})();

export const IFRS_LOCAL_QUESTION_TOTAL = IFRS_LOCAL_QUESTION_BANK.length;
