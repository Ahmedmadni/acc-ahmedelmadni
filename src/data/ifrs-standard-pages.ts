import { IFRS_STANDARDS, standardPath, type AccountingStandard } from "./ifrs-standards";
import { getStandardGuide, type StandardGuide } from "./ifrs-standard-guides";
import { getStandardDeepDive, type StandardDeepDive } from "./ifrs-standard-deep-dives";
import {
  getStandardReferenceNotes,
  type StandardReferenceNotes,
} from "./ifrs-standard-reference-notes";
import { IFRS_LOCAL_QUESTION_COUNTS } from "./ifrs-question-bank";
import {
  getStandardSourceKeys,
  IFRS_CONTENT_SOURCES,
  type IfrsContentSource,
} from "./ifrs-standard-enrichment";

type LocalizedText = { ar: string; en: string };

export interface StandardLearningPage {
  standard: AccountingStandard;
  guide: StandardGuide;
  deepDive: StandardDeepDive;
  referenceNotes: StandardReferenceNotes;
  href: string;
  executiveSummary: LocalizedText;
  checklist: { ar: string[]; en: string[] };
  questionCount: number;
  sources: IfrsContentSource[];
}

function makeChecklist(guide: StandardGuide) {
  const split = (value: string, locale: "ar" | "en") =>
    value
      .split(locale === "ar" ? /،|؛|\./ : /,|;|\./)
      .map((item) => item.trim())
      .filter(Boolean)
      .slice(0, 5);

  const ar = split(guide.workflow.ar, "ar");
  const en = split(guide.workflow.en, "en");
  ar.push("راجع العرض والإفصاحات واتساق الأرقام مع القيود والمستندات الداعمة.");
  en.push(
    "Review presentation, disclosures and agreement of amounts to entries and supporting records.",
  );
  return { ar: ar.slice(0, 6), en: en.slice(0, 6) };
}

function buildPage(standard: AccountingStandard): StandardLearningPage | null {
  const guide = getStandardGuide(standard.code);
  const deepDive = getStandardDeepDive(standard.code);
  const referenceNotes = getStandardReferenceNotes(standard.code);
  if (!guide || !deepDive || !referenceNotes) return null;

  return {
    standard,
    guide,
    deepDive,
    referenceNotes,
    href: standardPath(standard.code),
    executiveSummary: { ar: standard.summaryAr, en: standard.summaryEn },
    checklist: makeChecklist(guide),
    questionCount: IFRS_LOCAL_QUESTION_COUNTS[standard.code] ?? 0,
    sources: IFRS_CONTENT_SOURCES.filter((source) =>
      getStandardSourceKeys(standard).includes(source.key),
    ),
  };
}

export const IFRS_STANDARD_PAGES = IFRS_STANDARDS.map(buildPage).filter(
  (page): page is StandardLearningPage => page !== null,
);

export function getStandardLearningPage(slug: string) {
  return IFRS_STANDARD_PAGES.find((page) => page.href.endsWith(`/${slug.toLowerCase()}`));
}
