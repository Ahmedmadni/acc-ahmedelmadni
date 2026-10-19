import { CMA_TOPICS, type CmaStudyUnit } from "@/data/cma-topics";
import type { CmaLocalQuestion } from "@/data/cma-question-bank";

export type CmaQuestionSpec = readonly [
  slug: string,
  topicId: string,
  difficulty: "easy" | "intermediate" | "hard",
  questionAr: string,
  questionEn: string,
  choicesAr: readonly [string, string, string, string],
  choicesEn: readonly [string, string, string, string],
  answerIndex: 0 | 1 | 2 | 3,
  explanationAr: string,
  explanationEn: string,
];

export function makeCmaQuestions(
  unit: CmaStudyUnit,
  specs: readonly CmaQuestionSpec[],
  source: "2024-outline" | "2025-mcq-vol1" = "2024-outline",
): CmaLocalQuestion[] {
  return specs.map(
    ([
      slug,
      topicId,
      difficulty,
      ar,
      en,
      choicesAr,
      choicesEn,
      answerIndex,
      explanationAr,
      explanationEn,
    ]) => {
      const topic = CMA_TOPICS.find((item) => item.id === topicId && item.studyUnit === unit);
      if (!topic) throw new Error(`Unknown CMA topic for unit ${unit}: ${topicId}`);
      return {
        id: `cma-su${unit}-${slug}`,
        track: "CMA",
        studyUnit: unit,
        topicId,
        topic: topic.titleEn,
        examDomain: `Part 1 — Study Unit ${unit}`,
        difficulty,
        reference:
          source === "2025-mcq-vol1"
            ? `Gleim CMA Part 1 MCQ Bank Vol. 1 (2025), SU ${unit} §${topic.section}, pp. ${topic.sourcePages}; IMA LOS ${topic.losRef}`
            : `Gleim CMA Part 1 (2024), SU ${unit} §${topic.section}; IMA LOS ${topic.losRef}`,
        question: { ar, en },
        choices: { ar: [...choicesAr], en: [...choicesEn] },
        answerIndex,
        explanation: { ar: explanationAr, en: explanationEn },
      };
    },
  );
}
