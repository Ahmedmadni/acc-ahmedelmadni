import { IFRS_STANDARD_GUIDES, type StandardGuide } from "@/data/ifrs-standard-guides";
import { IFRS_STANDARDS } from "@/data/ifrs-standards";
import type { ExamQuestion } from "@/lib/exam-bank";

export const IFRS_PHASE6_TARGETS = [
  "IFRS 1",
  "IFRS 2",
  "IFRS 3",
  "IFRS 5",
  "IFRS 6",
  "IFRS 7",
  "IFRS 8",
  "IFRS 10",
  "IFRS 11",
  "IFRS 12",
  "IFRS 13",
  "IFRS 14",
  "IFRS 17",
  "IFRS 19",
  "IFRS 20",
  "IAS 1",
  "IAS 7",
  "IAS 8",
  "IAS 10",
  "IAS 19",
  "IAS 20",
  "IAS 23",
  "IAS 26",
  "IAS 27",
  "IAS 28",
  "IAS 29",
  "IAS 32",
  "IAS 33",
  "IAS 34",
  "IAS 38",
  "IAS 40",
  "IAS 41",
] as const;

type Phase6Target = (typeof IFRS_PHASE6_TARGETS)[number];
type GuideSection = "scope" | "accounting" | "presentation" | "workflow" | "pitfalls" | "example";

const sectionLabels: Record<GuideSection, { ar: string; en: string }> = {
  scope: { ar: "الهدف والنطاق", en: "scope and objective" },
  accounting: { ar: "الاعتراف والقياس", en: "recognition and measurement" },
  presentation: { ar: "العرض والإفصاح", en: "presentation and disclosure" },
  workflow: { ar: "خطوات التطبيق", en: "implementation workflow" },
  pitfalls: { ar: "الأخطاء الشائعة", en: "common pitfalls" },
  example: { ar: "المثال العملي", en: "practical example" },
};

const standardIndex = new Map(IFRS_STANDARDS.map((standard, index) => [standard.code, index]));

function firstSentence(text: string) {
  const match = text.trim().match(/^(.+?[.!؟!])(?:\s|$)/);
  const sentence = match?.[1] ?? text.trim();
  return sentence.length > 230 ? `${sentence.slice(0, 227).trim()}…` : sentence;
}

function guide(code: string) {
  const value = IFRS_STANDARD_GUIDES[code];
  if (!value) throw new Error(`Missing IFRS guide for ${code}`);
  return value;
}

function distractorCodes(code: string) {
  const index = standardIndex.get(code) ?? 0;
  const offsets = [3, 11, 19];
  return offsets.map((offset) => IFRS_STANDARDS[(index + offset) % IFRS_STANDARDS.length]!.code);
}

function arrange<T>(correct: T, distractors: T[], answerIndex: number) {
  const choices = distractors.slice(0, 3);
  choices.splice(answerIndex, 0, correct);
  return choices;
}

function makeSectionQuestion(
  code: Phase6Target,
  sequence: number,
  section: GuideSection,
  difficulty: NonNullable<ExamQuestion["difficulty"]>,
): ExamQuestion {
  const current = guide(code);
  const others = distractorCodes(code).map(guide);
  const answerIndex = sequence % 4;

  const arChoices = arrange(
    firstSentence(current[section].ar),
    others.map((item) => firstSentence(item[section].ar)),
    answerIndex,
  );
  const enChoices = arrange(
    firstSentence(current[section].en),
    others.map((item) => firstSentence(item[section].en)),
    answerIndex,
  );

  return {
    id: `ifrs-p6-${code.toLowerCase().replace(" ", "")}-${String(sequence).padStart(2, "0")}`,
    track: "IFRS",
    topic: `${code} — Ahmed Elmadani guide mastery`,
    question: {
      ar: `وفق الشرح العملي للمحاسب أحمد المدني، أي عبارة تلخص بصورة أدق ${sectionLabels[section].ar} لمعيار ${code}؟`,
      en: `According to Ahmed Elmadani's practical guide, which statement best summarises the ${sectionLabels[section].en} for ${code}?`,
    },
    choices: { ar: arChoices, en: enChoices },
    answerIndex,
    explanation: {
      ar: `الإجابة مأخوذة من قسم «${sectionLabels[section].ar}» في الشرح العملي الأصلي لمعيار ${code}. راجع القسم نفسه واربطه ببقية أجزاء المعيار قبل الانتقال للسؤال التالي.`,
      en: `The answer is derived from the ${sectionLabels[section].en} section of the original practical guide for ${code}. Review that section and connect it with the rest of the Standard before continuing.`,
    },
    reference: `${code} — Ahmed Elmadani practical guide`,
    difficulty,
    examDomain: `Guide: ${section}`,
  };
}

function makeIdentifyQuestion(
  code: Phase6Target,
  sequence: number,
  section: "scope" | "accounting" | "example",
  difficulty: NonNullable<ExamQuestion["difficulty"]>,
): ExamQuestion {
  const current = guide(code);
  const answerIndex = (sequence + 1) % 4;
  const options = arrange(code, distractorCodes(code), answerIndex);
  return {
    id: `ifrs-p6-${code.toLowerCase().replace(" ", "")}-${String(sequence).padStart(2, "0")}`,
    track: "IFRS",
    topic: `${code} — Ahmed Elmadani guide mastery`,
    question: {
      ar: `أي معيار ينطبق عليه الوصف التالي؟ «${firstSentence(current[section].ar)}»`,
      en: `Which Standard matches this description? “${firstSentence(current[section].en)}”`,
    },
    choices: { ar: options, en: options },
    answerIndex,
    explanation: {
      ar: `هذا الوصف جزء من شرح المحاسب أحمد المدني لمعيار ${code}، وتحديد المعيار من جوهر الفكرة يساعد على تثبيت الفروق بين المعايير المتقاربة.`,
      en: `This description comes from Ahmed Elmadani's guide to ${code}. Identifying a Standard from its core idea helps distinguish closely related requirements.`,
    },
    reference: `${code} — Ahmed Elmadani practical guide`,
    difficulty,
    examDomain: `Guide identification: ${section}`,
  };
}

function makePairQuestion(code: Phase6Target, sequence: number): ExamQuestion {
  const current = guide(code);
  const answerIndex = 3;
  const otherCodes = distractorCodes(code);
  const correctAr = `${code}: ${firstSentence(current.accounting.ar)}`;
  const correctEn = `${code}: ${firstSentence(current.accounting.en)}`;
  const distractorAr = otherCodes.map((otherCode) => {
    const wrong = guide(otherCode);
    return `${code}: ${firstSentence(wrong.accounting.ar)}`;
  });
  const distractorEn = otherCodes.map((otherCode) => {
    const wrong = guide(otherCode);
    return `${code}: ${firstSentence(wrong.accounting.en)}`;
  });

  return {
    id: `ifrs-p6-${code.toLowerCase().replace(" ", "")}-${String(sequence).padStart(2, "0")}`,
    track: "IFRS",
    topic: `${code} — Ahmed Elmadani guide mastery`,
    question: {
      ar: `أي اقتران بين ${code} ومبدأه المحاسبي صحيح وفق الشرح العملي؟`,
      en: `Which pairing of ${code} with its accounting principle is correct according to the practical guide?`,
    },
    choices: {
      ar: arrange(correctAr, distractorAr, answerIndex),
      en: arrange(correctEn, distractorEn, answerIndex),
    },
    answerIndex,
    explanation: {
      ar: `الاقتران الصحيح يربط ${code} مباشرة بمبدأ الاعتراف والقياس الوارد في شرح أحمد المدني، بينما البدائل تستخدم مبادئ من معايير أخرى.`,
      en: `The correct pairing links ${code} to the recognition and measurement principle in Ahmed Elmadani's guide; the distractors use principles from other Standards.`,
    },
    reference: `${code} — Ahmed Elmadani practical guide`,
    difficulty: "hard",
    examDomain: "Guide integration",
  };
}

function buildForStandard(code: Phase6Target): ExamQuestion[] {
  return [
    makeSectionQuestion(code, 1, "scope", "easy"),
    makeSectionQuestion(code, 2, "accounting", "intermediate"),
    makeSectionQuestion(code, 3, "presentation", "intermediate"),
    makeSectionQuestion(code, 4, "workflow", "intermediate"),
    makeSectionQuestion(code, 5, "pitfalls", "hard"),
    makeSectionQuestion(code, 6, "example", "easy"),
    makeIdentifyQuestion(code, 7, "scope", "easy"),
    makeIdentifyQuestion(code, 8, "accounting", "intermediate"),
    makeIdentifyQuestion(code, 9, "example", "hard"),
    makePairQuestion(code, 10),
  ];
}

/**
 * Phase 6 adds ten guide-mastery questions to each of the 32 standards that
 * entered this phase with ten questions. Combined with the existing bank,
 * every indexed IFRS/IAS standard reaches at least twenty local questions.
 */
export const IFRS_PHASE6_GUIDE_QUESTIONS: ExamQuestion[] = IFRS_PHASE6_TARGETS.flatMap(
  buildForStandard,
);

export const IFRS_PHASE6_QUESTION_COUNT = IFRS_PHASE6_GUIDE_QUESTIONS.length;
