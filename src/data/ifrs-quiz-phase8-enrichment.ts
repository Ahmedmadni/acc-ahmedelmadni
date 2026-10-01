import { IFRS_STANDARD_ENRICHMENTS, type LocalizedText } from "@/data/ifrs-standard-enrichment";
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
type EnrichmentKey = "professionalNotes" | "applicationMethods" | "evidence" | "dataFields";

const categoryLabels: Record<EnrichmentKey, LocalizedText> = {
  professionalNotes: { ar: "الحكم المهني", en: "professional judgement" },
  applicationMethods: { ar: "طريقة التطبيق", en: "application method" },
  evidence: { ar: "دليل الإثبات", en: "supporting evidence" },
  dataFields: { ar: "هيكل البيانات", en: "data structure" },
};

const standardIndex = new Map(IFRS_STANDARDS.map((standard, index) => [standard.code, index]));

function enrichment(code: string) {
  const value = IFRS_STANDARD_ENRICHMENTS[code];
  if (!value) throw new Error(`Missing IFRS enrichment for ${code}`);
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
  const current = enrichment(code);
  const answerIndex = (sequence + 1) % 4;
  const distractors = distractorCodes(code).map((otherCode) => enrichment(otherCode)[key][0]!);
  const correct = current[key][0]!;

  return {
    id: `ifrs-p8-${code.toLowerCase().replace(" ", "")}-${String(sequence).padStart(2, "0")}`,
    track: "IFRS",
    topic: `${code} — enriched practical application`,
    question: {
      ar: `عند بناء ملف عمل تطبيقي لمعيار ${code}، أي خيار يمثل بصورة أدق ${categoryLabels[key].ar} المناسب؟`,
      en: `When building a practical working file for ${code}, which option best represents the appropriate ${categoryLabels[key].en}?`,
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
      ar: `الإجابة تربط ${categoryLabels[key].ar} بطبيعة ${code}، بينما البدائل تصلح لسياقات محاسبية مختلفة. استخدمها مع وقائع المعاملة والنص الرسمي، لا كقاعدة آلية منفصلة.`,
      en: `The answer connects the ${categoryLabels[key].en} to the nature of ${code}; the alternatives belong to different accounting contexts. Apply it with the transaction facts and authoritative text, not as a standalone automatic rule.`,
    },
    reference: `${code} — Ahmed Elmadani enriched guide; technical reference: ramyatrouny/ifrs-skill @ fda78bb`,
    difficulty,
    examDomain: `Enriched guide: ${key}`,
  };
}

function makeRelationshipQuestion(code: Phase8Target): ExamQuestion {
  const current = enrichment(code);
  const correct = current.relatedStandards[0];
  const fallback = distractorCodes(code).map((otherCode) => ({
    code: otherCode,
    note: enrichment(otherCode).professionalNotes[0]!,
  }));
  const relationship = correct ?? fallback[0]!;
  const distractors = fallback.filter((item) => item.code !== relationship.code).slice(0, 3);
  const answerIndex = 2;

  return {
    id: `ifrs-p8-${code.toLowerCase().replace(" ", "")}-05`,
    track: "IFRS",
    topic: `${code} — enriched practical application`,
    question: {
      ar: `أي معيار يرتبط عمليًا بـ ${code} وفق خريطة العلاقات في الدليل، وما سبب هذا الارتباط؟`,
      en: `Which Standard is practically related to ${code} in the guide's relationship map, and why?`,
    },
    choices: {
      ar: arrange(
        `${relationship.code}: ${relationship.note.ar}`,
        distractors.map((item) => `${item.code}: ${item.note.ar}`),
        answerIndex,
      ),
      en: arrange(
        `${relationship.code}: ${relationship.note.en}`,
        distractors.map((item) => `${item.code}: ${item.note.en}`),
        answerIndex,
      ),
    },
    answerIndex,
    explanation: {
      ar: `التطبيق المهني لا يعزل ${code} عن المعايير المتقاطعة معه؛ خريطة العلاقات تساعد في اكتشاف آثار القياس والعرض والإفصاح التي قد تضيع عند فحص معيار واحد فقط.`,
      en: `Professional application does not isolate ${code} from intersecting Standards; the relationship map helps identify measurement, presentation and disclosure effects that a single-Standard review may miss.`,
    },
    reference: `${code} — Ahmed Elmadani enriched guide; technical reference: ramyatrouny/ifrs-skill @ fda78bb`,
    difficulty: "hard",
    examDomain: "Enriched guide: relationships",
  };
}

function buildForStandard(code: Phase8Target): ExamQuestion[] {
  return [
    makeEnrichmentQuestion(code, 1, "professionalNotes", "easy"),
    makeEnrichmentQuestion(code, 2, "applicationMethods", "intermediate"),
    makeEnrichmentQuestion(code, 3, "evidence", "intermediate"),
    makeEnrichmentQuestion(code, 4, "dataFields", "hard"),
    makeRelationshipQuestion(code),
  ];
}

/** Five original, applied-learning questions for every indexed IFRS/IAS standard. */
export const IFRS_PHASE8_ENRICHMENT_QUESTIONS: ExamQuestion[] =
  IFRS_PHASE8_TARGETS.flatMap(buildForStandard);

export const IFRS_PHASE8_QUESTION_COUNT = IFRS_PHASE8_ENRICHMENT_QUESTIONS.length;
