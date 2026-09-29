import type { ExamDifficulty, ExamQuestion } from "@/lib/exam-bank";

export interface IfrsQuestionSpec {
  id: string;
  standardCode: string;
  topic: string;
  difficulty: ExamDifficulty;
  domain: string;
  questionAr: string;
  questionEn: string;
  choicesAr: [string, string, string, string];
  choicesEn: [string, string, string, string];
  answerIndex: 0 | 1 | 2 | 3;
  explanationAr: string;
  explanationEn: string;
  reference: string;
}

export function makeIfrsQuestion(spec: IfrsQuestionSpec): ExamQuestion {
  return {
    id: spec.id,
    track: "IFRS",
    standardCode: spec.standardCode,
    topic: spec.topic,
    difficulty: spec.difficulty,
    domain: spec.domain,
    question: { ar: spec.questionAr, en: spec.questionEn },
    choices: { ar: spec.choicesAr, en: spec.choicesEn },
    answerIndex: spec.answerIndex,
    explanation: { ar: spec.explanationAr, en: spec.explanationEn },
    reference: spec.reference,
  };
}
