import { CMA_TOPICS, type CmaStudyUnit } from "@/data/cma-topics";
import type { CmaLocalQuestion } from "@/data/cma-question-bank";
import unit1 from "@/data/cma-gleim-2025-vol1-unit-1.json";
import unit2 from "@/data/cma-gleim-2025-vol1-unit-2.json";
import unit3 from "@/data/cma-gleim-2025-vol1-unit-3.json";
import unit4 from "@/data/cma-gleim-2025-vol1-unit-4.json";
import unit5 from "@/data/cma-gleim-2025-vol1-unit-5.json";
import unit6 from "@/data/cma-gleim-2025-vol1-unit-6.json";
import unit7 from "@/data/cma-gleim-2025-vol1-unit-7.json";
import unit8 from "@/data/cma-gleim-2025-vol1-unit-8.json";
import unit9 from "@/data/cma-gleim-2025-vol1-unit-9.json";
import unit10 from "@/data/cma-gleim-2025-vol1-unit-10.json";

interface SourceRecord {
  unit: number;
  section: number;
  number: number;
  page: number;
  topicId: string;
  stem: string;
  choices: string[];
  answerIndex: number;
  explanation: string;
  answerStatus: string;
  sourceTextStatus?: "reconstructed" | "table-reflowed";
  /** Optional reviewed Arabic translation. Used only when all three are present and complete. */
  stemAr?: string;
  choicesAr?: string[];
  explanationAr?: string;
}

/** True only for a complete Arabic translation: stem, explanation and one Arabic choice per English choice. */
export function hasCompleteArabic(item: Pick<SourceRecord, "choices" | "stemAr" | "choicesAr" | "explanationAr">): boolean {
  return (
    typeof item.stemAr === "string" && item.stemAr.trim() !== "" &&
    typeof item.explanationAr === "string" && item.explanationAr.trim() !== "" &&
    Array.isArray(item.choicesAr) && item.choicesAr.length === item.choices.length &&
    item.choicesAr.every((c) => typeof c === "string" && c.trim() !== "")
  );
}

const records: SourceRecord[] = [
  ...unit1,
  ...unit2,
  ...unit3,
  ...unit4,
  ...unit5,
  ...unit6,
  ...unit7,
  ...unit8,
  ...unit9,
  ...unit10,
];
const topics = new Map(CMA_TOPICS.map((topic) => [topic.id, topic]));

/** Source-language items retain their English text while Arabic translation is reviewed. */
export const CMA_GLEIM_2025_VOL1_QUESTIONS: CmaLocalQuestion[] = records.map((item) => {
  const topic = topics.get(item.topicId);
  const ar = hasCompleteArabic(item);
  if (!topic || topic.studyUnit !== item.unit)
    throw new Error(`Invalid Gleim 2025 question: SU ${item.unit}.${item.section} Q${item.number}`);
  return {
    id: `cma-gleim-2025-vol1-su${item.unit}-s${item.section}-q${String(item.number).padStart(3, "0")}`,
    track: "CMA",
    studyUnit: item.unit as CmaStudyUnit,
    topicId: item.topicId,
    topic: topic.titleEn,
    examDomain: `Part 1 — Study Unit ${item.unit}`,
    difficulty: "intermediate",
    reference: `Gleim CMA Part 1, 2025 MCQ Bank Vol. 1, SU ${item.unit} §${item.section}, Q${item.number}, p. ${item.page}`,
    question: { ar: ar ? item.stemAr! : item.stem, en: item.stem },
    choices: { ar: ar ? item.choicesAr! : item.choices, en: item.choices },
    answerIndex: item.answerIndex,
    explanation: { ar: ar ? item.explanationAr! : item.explanation, en: item.explanation },
    sourceLanguage: ar ? undefined : "en",
    sourcePage: item.page,
    answerStatus: item.answerStatus === "inferred" ? "inferred" : "source",
    sourceTextStatus: item.sourceTextStatus,
  };
});
