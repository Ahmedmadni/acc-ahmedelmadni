import { IFRS_STANDARD_DEEP_DIVES, type LocalizedText } from "@/data/ifrs-standard-deep-dives";
import { IFRS_STANDARDS } from "@/data/ifrs-standards";
import type { ExamQuestion } from "@/lib/exam-bank";

export const IFRS_PHASE8_TARGETS = [
  "IFRS 1",
  "IFRS 2",
  "IFRS 3",
  "IFRS 5",
  "IFRS 6",
  "IFRS 7",
  "IFRS 8",
  "IFRS 9",
  "IFRS 10",
  "IFRS 11",
  "IFRS 12",
  "IFRS 13",
  "IFRS 14",
  "IFRS 15",
  "IFRS 16",
  "IFRS 17",
  "IFRS 18",
  "IFRS 19",
  "IFRS 20",
  "IAS 1",
  "IAS 2",
  "IAS 7",
  "IAS 8",
  "IAS 10",
  "IAS 12",
  "IAS 16",
  "IAS 19",
  "IAS 20",
  "IAS 21",
  "IAS 23",
  "IAS 24",
  "IAS 26",
  "IAS 27",
  "IAS 28",
  "IAS 29",
  "IAS 32",
  "IAS 33",
  "IAS 34",
  "IAS 36",
  "IAS 37",
  "IAS 38",
  "IAS 40",
  "IAS 41",
] as const;

type Phase8Target = (typeof IFRS_PHASE8_TARGETS)[number];
type EnrichmentKey = "technicalPoints" | "decisionPath" | "disclosureChecks" | "dataFields";

const categoryLabels: Record<EnrichmentKey, LocalizedText> = {
  technicalPoints: { ar: "الحكم المهني", en: "professional judgement" },
  decisionPath: { ar: "مسار القرار", en: "decision path" },
  disclosureChecks: { ar: "فحص الإفصاح", en: "disclosure check" },
  dataFields: { ar: "هيكل البيانات", en: "data structure" },
};

const standardIndex = new Map(IFRS_STANDARDS.map((standard, index) => [standard.code, index]));

function deepDive(code: string) {
  const value = IFRS_STANDARD_DEEP_DIVES[code];
  if (!value) throw new Error(`Missing IFRS worked case for ${code}`);
  return value;
}

function distractorCodes(code: string) {
  const current = IFRS_STANDARDS[standardIndex.get(code) ?? 0]!;
  const candidates = IFRS_STANDARDS.filter(
    (standard) => standard.code !== code && standard.topic !== current.topic,
  );
  const start = (standardIndex.get(code) ?? 0) % candidates.length;
  return [0, 5, 11].map((offset) => candidates[(start + offset) % candidates.length]!.code);
}

function arrange<T>(correct: T, distractors: T[], answerIndex: number) {
  const choices = distractors.slice(0, 3);
  choices.splice(answerIndex, 0, correct);
  return choices;
}

function makeEnrichmentQuestion(
  code: Phase8Target,
  sequence: number,
  key: EnrichmentKey,
  difficulty: NonNullable<ExamQuestion["difficulty"]>,
): ExamQuestion {
  const current = deepDive(code);
  const answerIndex = (sequence + 1) % 4;
  const distractors = distractorCodes(code).map((otherCode) => deepDive(otherCode)[key][0]!);
  const correct = current[key][0]!;

  return {
    id: `ifrs-p8-${code.toLowerCase().replace(" ", "")}-${String(sequence).padStart(2, "0")}`,
    track: "IFRS",
    topic: `${code} — enriched practical application`,
    question: {
      ar: `في الحالة التطبيقية لمعيار ${code}، أي عبارة تعبّر عن ${categoryLabels[key].ar} الملائم؟`,
      en: `In the worked case for ${code}, which statement captures the relevant ${categoryLabels[key].en}?`,
    },
    choices: {
      ar: arrange(
        correct.ar,
        distractors.map((item) => item.ar),
        answerIndex,
      ),
      en: arrange(
        correct.en,
        distractors.map((item) => item.en),
        answerIndex,
      ),
    },
    answerIndex,
    explanation: {
      ar: `هذه العبارة مأخوذة من تحليل الحالة التطبيقية لمعيار ${code}. اربطها بوقائع الحالة وحساباتها قبل اختيار المعالجة النهائية.`,
      en: `This statement follows the worked case for ${code}. Connect it to the case facts and calculations before reaching a final accounting conclusion.`,
    },
    reference: code,
    difficulty,
    examDomain: `Enriched guide: ${key}`,
  };
}

function makeConclusionQuestion(code: Phase8Target): ExamQuestion {
  const current = deepDive(code);
  const distractors = distractorCodes(code).map((otherCode) => deepDive(otherCode).conclusion);
  const answerIndex = 2;

  return {
    id: `ifrs-p8-${code.toLowerCase().replace(" ", "")}-05`,
    track: "IFRS",
    topic: `${code} — enriched practical application`,
    question: {
      ar: `بعد تطبيق خطوات الحالة «${current.caseTitle.ar}» وفق ${code}، ما النتيجة المحاسبية؟`,
      en: `After applying the worked case “${current.caseTitle.en}” under ${code}, what is the accounting conclusion?`,
    },
    choices: {
      ar: arrange(
        current.conclusion.ar,
        distractors.map((item) => item.ar),
        answerIndex,
      ),
      en: arrange(
        current.conclusion.en,
        distractors.map((item) => item.en),
        answerIndex,
      ),
    },
    answerIndex,
    explanation: {
      ar: `النتيجة تستند إلى وقائع وحسابات الحالة في شرح ${code}؛ راجع خطوات الحساب والقيد أو أثر العرض المبينين في الصفحة.`,
      en: `The conclusion follows the facts and calculations in the ${code} guide; review the steps and entry or presentation effect shown on the page.`,
    },
    reference: code,
    difficulty: "hard",
    examDomain: "Enriched guide: worked-case conclusion",
  };
}

function buildForStandard(code: Phase8Target): ExamQuestion[] {
  return [
    makeEnrichmentQuestion(code, 1, "technicalPoints", "easy"),
    makeEnrichmentQuestion(code, 2, "decisionPath", "intermediate"),
    makeEnrichmentQuestion(code, 3, "disclosureChecks", "intermediate"),
    makeEnrichmentQuestion(code, 4, "dataFields", "hard"),
    makeConclusionQuestion(code),
  ];
}

/** Five original, applied-learning questions for every indexed IFRS/IAS standard. */
export const IFRS_PHASE8_ENRICHMENT_QUESTIONS: ExamQuestion[] =
  IFRS_PHASE8_TARGETS.flatMap(buildForStandard);

export const IFRS_PHASE8_QUESTION_COUNT = IFRS_PHASE8_ENRICHMENT_QUESTIONS.length;
