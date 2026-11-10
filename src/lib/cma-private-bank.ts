import type { ExamQuestion } from "@/lib/exam-bank";

/**
 * Validates a PRIVATE file on the learner's device. No file content is sent to
 * GitHub, Supabase, analytics, Lovable, a server route, or remote translators.
 */
export const PRIVATE_CMA_DOMAINS = {
  A: { domain: "financial-statement-analysis", ar: "تحليل القوائم المالية", en: "Financial Statement Analysis" },
  B: { domain: "corporate-finance", ar: "تمويل الشركات", en: "Corporate Finance" },
  C: { domain: "decision-analysis", ar: "تحليل قرارات الأعمال", en: "Business Decision Analysis" },
  D: { domain: "risk-mgmt", ar: "إدارة المخاطر", en: "Enterprise Risk Management" },
  E: { domain: "investment-decisions", ar: "قرارات الاستثمار", en: "Capital Investment Decisions" },
  F: { domain: "professional-ethics", ar: "الأخلاقيات المهنية", en: "Professional Ethics" },
} as const;

export type PrivateCmaSection = keyof typeof PRIVATE_CMA_DOMAINS;
export type PrivateCmaQuestion = {
  id: string;
  section: PrivateCmaSection;
  domain: string;
  questionNumber: number;
  pdfPage: number;
  cso: string;
  los: string;
  sourceLanguage: "en";
  question: string;
  choices: [string, string, string, string];
  correctIndex: number;
  explanation: string;
};
export type PrivateCmaBank = { title: string; questions: PrivateCmaQuestion[] };
const letters = Object.keys(PRIVATE_CMA_DOMAINS) as PrivateCmaSection[];

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function safeText(value: unknown, max: number): value is string {
  return typeof value === "string" && value.trim().length > 0 && value.length <= max;
}

export function parseCmaPrivateBank(value: unknown): PrivateCmaBank {
  if (!isRecord(value) || value.format !== "cma-private-question-bank-v1" ||
    !safeText(value.title, 150) || !Array.isArray(value.questions) ||
    value.questions.length < 1 || value.questions.length > 1200) {
    throw new Error("ملف الأسئلة غير متوافق مع صيغة الاستيراد المحلي.");
  }
  const ids = new Set<string>();
  const questions: PrivateCmaQuestion[] = [];
  for (const [index, raw] of value.questions.entries()) {
    if (!isRecord(raw)) throw new Error(`بيانات السؤال ${index + 1} غير صحيحة.`);
    const section = raw.section;
    if (typeof section !== "string" || !letters.includes(section as PrivateCmaSection)) {
      throw new Error(`تصنيف السؤال ${index + 1} غير معروف.`);
    }
    const group = section as PrivateCmaSection;
    const expectedId = new RegExp(`^IMA2024-P2-${group}-\\d{3}$`);
    const good =
      safeText(raw.id, 70) && expectedId.test(raw.id) && !ids.has(raw.id) &&
      raw.part === "part-2" &&
      raw.domain === PRIVATE_CMA_DOMAINS[group].domain &&
      raw.sourceLanguage === "en" &&
      Number.isInteger(raw.questionNumber) && Number(raw.questionNumber) >= 1 && Number(raw.questionNumber) <= 999 &&
      Number.isInteger(raw.pdfPage) && Number(raw.pdfPage) >= 1 && Number(raw.pdfPage) <= 10000 &&
      safeText(raw.cso, 20) && /^2[A-F]\d[a-z]$/i.test(raw.cso) &&
      safeText(raw.los, 20) &&
      safeText(raw.question, 12000) && safeText(raw.explanation, 16000) &&
      Array.isArray(raw.choices) && raw.choices.length === 4 &&
      raw.choices.every((choice) => safeText(choice, 4000)) &&
      Number.isInteger(raw.correctIndex) && Number(raw.correctIndex) >= 0 && Number(raw.correctIndex) < 4;
    if (!good) throw new Error(`السؤال ${index + 1} غير مكتمل أو به بيانات غير صالحة.`);
    ids.add(raw.id as string);
    questions.push({
      id: raw.id as string,
      section: group,
      domain: raw.domain as string,
      questionNumber: raw.questionNumber as number,
      pdfPage: raw.pdfPage as number,
      cso: raw.cso as string,
      los: raw.los as string,
      sourceLanguage: "en",
      question: raw.question as string,
      choices: raw.choices as [string, string, string, string],
      correctIndex: raw.correctIndex as number,
      explanation: raw.explanation as string,
    });
  }
  return { title: value.title, questions };
}

export function toPrivateExamQuestion(raw: PrivateCmaQuestion): ExamQuestion {
  return {
    id: raw.id,
    track: "CMA",
    topic: PRIVATE_CMA_DOMAINS[raw.section].en,
    examDomain: `Part 2 — ${raw.section}`,
    reference: `ICMA 2024 private source · PDF p. ${raw.pdfPage} · CSO ${raw.cso} · LOS ${raw.los}`,
    question: { en: raw.question, ar: raw.question },
    choices: { en: [...raw.choices], ar: [...raw.choices] },
    answerIndex: raw.correctIndex,
    explanation: { en: raw.explanation, ar: raw.explanation },
    sourceLanguage: "en",
    sourcePage: raw.pdfPage,
  };
}
