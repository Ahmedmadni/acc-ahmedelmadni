import {
  IFRS_STANDARDS,
  standardPath,
  type AccountingStandard,
  type StandardTopic,
} from "./ifrs-standards";
import { getStandardGuide, type StandardGuide } from "./ifrs-standard-guides";
import { IFRS_LOCAL_QUESTION_COUNTS } from "./ifrs-question-bank";

type LocalizedText = { ar: string; en: string };

export interface JournalEntryTemplate {
  title: LocalizedText;
  debit: LocalizedText;
  credit: LocalizedText;
  note: LocalizedText;
}

export interface StandardLearningPage {
  standard: AccountingStandard;
  guide: StandardGuide;
  href: string;
  executiveSummary: LocalizedText;
  numericExample: LocalizedText;
  journalEntries: JournalEntryTemplate[];
  checklist: { ar: string[]; en: string[] };
  questionCount: number;
}

const NO_STANDALONE_ENTRY = new Set([
  "IFRS 7",
  "IFRS 8",
  "IFRS 12",
  "IFRS 19",
  "IAS 24",
  "IAS 26",
  "IAS 33",
  "IAS 34",
]);

const ENTRY_ACCOUNTS: Record<
  StandardTopic,
  { debit: LocalizedText; credit: LocalizedText; title: LocalizedText }
> = {
  presentation: {
    title: {
      ar: "قيد تسوية أو إعادة تصنيف نموذجي",
      en: "Illustrative adjustment or reclassification",
    },
    debit: { ar: "الأصل أو المصروف ذي الصلة", en: "Relevant asset or expense" },
    credit: {
      ar: "الالتزام أو بند حقوق الملكية ذي الصلة",
      en: "Relevant liability or equity account",
    },
  },
  "financial-instruments": {
    title: {
      ar: "قيد قياس أداة مالية نموذجي",
      en: "Illustrative financial-instrument measurement",
    },
    debit: {
      ar: "أصل مالي أو خسارة قياس/ائتمان",
      en: "Financial asset or measurement/credit loss",
    },
    credit: {
      ar: "النقد أو مخصص الخسائر الائتمانية",
      en: "Cash or expected-credit-loss allowance",
    },
  },
  "group-reporting": {
    title: { ar: "قيد تجميع أو استثمار نموذجي", en: "Illustrative group or investment entry" },
    debit: {
      ar: "الأصول القابلة للتحديد أو الاستثمار/الشهرة",
      en: "Identifiable assets or investment/goodwill",
    },
    credit: { ar: "الالتزامات أو المقابل/النقد", en: "Liabilities or consideration/cash" },
  },
  revenue: {
    title: { ar: "قيد إيراد نموذجي", en: "Illustrative revenue entry" },
    debit: { ar: "النقد أو الذمم/أصل العقد", en: "Cash or receivable/contract asset" },
    credit: { ar: "الإيراد أو التزام العقد", en: "Revenue or contract liability" },
  },
  assets: {
    title: { ar: "قيد أصل أو انخفاض قيمة نموذجي", en: "Illustrative asset or impairment entry" },
    debit: { ar: "الأصل المؤهل أو خسارة الانخفاض", en: "Qualifying asset or impairment loss" },
    credit: {
      ar: "النقد/الدائنون أو مجمع الانخفاض",
      en: "Cash/payables or accumulated impairment",
    },
  },
  "tax-benefits": {
    title: {
      ar: "قيد ضريبة أو منفعة موظف نموذجي",
      en: "Illustrative tax or employee-benefit entry",
    },
    debit: { ar: "مصروف الضريبة أو منافع الموظفين", en: "Tax or employee-benefit expense" },
    credit: { ar: "التزام الضريبة أو المنافع", en: "Tax or employee-benefit liability" },
  },
  industry: {
    title: { ar: "قيد قطاعي نموذجي", en: "Illustrative industry-specific entry" },
    debit: { ar: "الأصل أو المصروف القطاعي ذي الصلة", en: "Relevant industry asset or expense" },
    credit: { ar: "النقد أو الالتزام القطاعي ذي الصلة", en: "Cash or relevant industry liability" },
  },
  other: {
    title: { ar: "قيد اعتراف نموذجي", en: "Illustrative recognition entry" },
    debit: { ar: "الأصل أو المصروف ذي الصلة", en: "Relevant asset or expense" },
    credit: { ar: "النقد أو الالتزام أو حقوق الملكية", en: "Cash, liability or equity" },
  },
};

const NUMERIC_FALLBACKS: Record<StandardTopic, LocalizedText> = {
  presentation: {
    ar: "مثال عددي إضافي: إذا كشفت المراجعة عن إعادة تصنيف 100,000 ريال دون تغيير صافي الأصول، ينقل المبلغ بين البندين مع توثيق سبب العرض.",
    en: "Additional numeric example: if review identifies a SAR 100,000 reclassification with no change in net assets, transfer the amount between captions and document the presentation basis.",
  },
  "financial-instruments": {
    ar: "مثال عددي إضافي: أصل مالي بمليون ريال ومعدل خسارة متوقعة 2% ينتج مخصصًا أوليًا قدره 20,000 ريال قبل أي تعديلات مستقبلية.",
    en: "Additional numeric example: a SAR 1m financial asset with a 2% expected-loss rate produces an initial SAR 20,000 allowance before further adjustments.",
  },
  "group-reporting": {
    ar: "مثال عددي إضافي: مقابل قدره 5 ملايين ريال مقابل صافي أصول قابلة للتحديد 4.4 ملايين يترك فرقًا أوليًا 600,000 ريال للتحليل وفق المعيار.",
    en: "Additional numeric example: SAR 5m consideration against SAR 4.4m identifiable net assets leaves an initial SAR 600,000 difference for analysis under the Standard.",
  },
  revenue: {
    ar: "مثال عددي إضافي: عقد بقيمة 120,000 ريال ينفذ بالتساوي خلال 12 شهرًا يقود مبدئيًا إلى 10,000 ريال إيراد شهريًا إذا استوفيت شروط الاعتراف على مدى الزمن.",
    en: "Additional numeric example: a SAR 120,000 contract performed evenly over 12 months initially yields SAR 10,000 monthly revenue if over-time recognition criteria are met.",
  },
  assets: {
    ar: "مثال عددي إضافي: أصل قيمته الدفترية 500,000 ريال وقيمة قياسه المطلوبة 460,000 ريال ينتج فرقًا قدره 40,000 ريال يعالج وفق متطلبات المعيار.",
    en: "Additional numeric example: an asset carrying at SAR 500,000 with a required measured amount of SAR 460,000 produces a SAR 40,000 difference accounted for under the Standard.",
  },
  "tax-benefits": {
    ar: "مثال عددي إضافي: أساس محاسبي 500,000 ريال وأساس ضريبي 400,000 ريال يصنع فرقًا مؤقتًا 100,000 ريال قبل تطبيق معدل الضريبة المناسب.",
    en: "Additional numeric example: a SAR 500,000 carrying amount and SAR 400,000 tax base create a SAR 100,000 temporary difference before applying the relevant tax rate.",
  },
  industry: {
    ar: "مثال عددي إضافي: رصيد قطاعي 800,000 ريال زاد 5% خلال الفترة؛ فرق القياس البالغ 40,000 ريال يحلل ويعرض وفق متطلبات المعيار.",
    en: "Additional numeric example: an SAR 800,000 industry balance increases by 5%; the SAR 40,000 measurement change is analysed and presented under the Standard.",
  },
  other: {
    ar: "مثال عددي إضافي: معاملة قيمتها 200,000 ريال يعترف منها بـ75% عند تحقق الشروط؛ المبلغ الأولي محل الاعتراف 150,000 ريال والباقي 50,000 ريال ينتظر تحقق الشرط.",
    en: "Additional numeric example: for a SAR 200,000 transaction with 75% meeting the criteria, SAR 150,000 is initially recognised and SAR 50,000 awaits satisfaction of the remaining condition.",
  },
};

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

function makeJournalEntries(standard: AccountingStandard): JournalEntryTemplate[] {
  if (NO_STANDALONE_ENTRY.has(standard.code)) {
    return [
      {
        title: {
          ar: "لا يوجد قيد مستقل لمتطلبات العرض أو الإفصاح",
          en: "No standalone entry for presentation or disclosure requirements",
        },
        debit: {
          ar: "يطبق قيد المعيار الذي يحكم البند الأساسي",
          en: "Apply the entry required by the Standard governing the underlying item",
        },
        credit: {
          ar: "لا ينشأ حساب مقابل لمجرد الإفصاح",
          en: "Disclosure alone does not create an offsetting account",
        },
        note: {
          ar: "تتمثل المعالجة هنا في جمع البيانات والمصالحة والعرض، لا إنشاء قيد مصطنع.",
          en: "The work is data collection, reconciliation and presentation—not an artificial journal entry.",
        },
      },
    ];
  }

  const accounts = ENTRY_ACCOUNTS[standard.topic];
  return [
    {
      title: accounts.title,
      debit: accounts.debit,
      credit: accounts.credit,
      note: {
        ar: `قيد تعليمي عام لتوضيح اتجاه المعالجة في ${standard.code}؛ تحدد وقائع المعاملة والمادة الملزمة الحسابات والمبلغ النهائيين.`,
        en: `A teaching template showing the direction of accounting under ${standard.code}; transaction facts and authoritative requirements determine the final accounts and amount.`,
      },
    },
  ];
}

function buildPage(standard: AccountingStandard): StandardLearningPage | null {
  const guide = getStandardGuide(standard.code);
  if (!guide) return null;
  const hasNumber = /[0-9٠-٩]/.test(`${guide.example.ar} ${guide.example.en}`);

  return {
    standard,
    guide,
    href: standardPath(standard.code),
    executiveSummary: { ar: standard.summaryAr, en: standard.summaryEn },
    numericExample: hasNumber
      ? guide.example
      : {
          ar: `${guide.example.ar} ${NUMERIC_FALLBACKS[standard.topic].ar}`,
          en: `${guide.example.en} ${NUMERIC_FALLBACKS[standard.topic].en}`,
        },
    journalEntries: makeJournalEntries(standard),
    checklist: makeChecklist(guide),
    questionCount: IFRS_LOCAL_QUESTION_COUNTS[standard.code] ?? 0,
  };
}

export const IFRS_STANDARD_PAGES = IFRS_STANDARDS.map(buildPage).filter(
  (page): page is StandardLearningPage => page !== null,
);

export function getStandardLearningPage(slug: string) {
  return IFRS_STANDARD_PAGES.find((page) => page.href.endsWith(`/${slug.toLowerCase()}`));
}
