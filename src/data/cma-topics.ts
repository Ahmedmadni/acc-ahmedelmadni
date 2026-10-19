/** IMA Content Specification Outline, effective September 2024. Content is original. */
export const CMA_OUTLINE_URL =
  "https://www.imaglobal.org/assets/static/cma-content-specification-outlines-2024.Cr1Ox4aS.pdf";
export const CMA_LOS_URL =
  "https://www.imaglobal.org/assets/static/cma-learning-outcome-statements-2024.HDHHOjUF.pdf";

export type CmaPart = "part-1" | "part-2";

export type CmaDomain =
  | "external-reporting"
  | "planning-budgeting"
  | "performance-mgmt"
  | "cost-mgmt"
  | "internal-controls"
  | "technology-analytics"
  | "financial-statement-analysis"
  | "corporate-finance"
  | "decision-analysis"
  | "risk-mgmt"
  | "investment-decisions"
  | "professional-ethics";

export interface CmaTopic {
  id: string;
  code: string;
  part: CmaPart;
  domain: CmaDomain;
  titleAr: string;
  titleEn: string;
  summaryAr: string;
  summaryEn: string;
  keyFormulas?: { nameAr: string; nameEn: string; formula: string }[];
  searchTerms: string[];
}

export const CMA_DOMAINS: {
  id: CmaDomain;
  part: CmaPart;
  code: string;
  weight: number;
  ar: string;
  en: string;
}[] = [
  {
    id: "external-reporting",
    part: "part-1",
    code: "A",
    weight: 15,
    ar: "قرارات التقارير المالية الخارجية",
    en: "External Financial Reporting Decisions",
  },
  {
    id: "planning-budgeting",
    part: "part-1",
    code: "B",
    weight: 20,
    ar: "التخطيط والموازنات والتنبؤ",
    en: "Planning, Budgeting, and Forecasting",
  },
  {
    id: "performance-mgmt",
    part: "part-1",
    code: "C",
    weight: 20,
    ar: "إدارة الأداء",
    en: "Performance Management",
  },
  {
    id: "cost-mgmt",
    part: "part-1",
    code: "D",
    weight: 15,
    ar: "إدارة التكلفة",
    en: "Cost Management",
  },
  {
    id: "internal-controls",
    part: "part-1",
    code: "E",
    weight: 15,
    ar: "الرقابة الداخلية",
    en: "Internal Controls",
  },
  {
    id: "technology-analytics",
    part: "part-1",
    code: "F",
    weight: 15,
    ar: "التكنولوجيا والتحليلات",
    en: "Technology and Analytics",
  },
  {
    id: "financial-statement-analysis",
    part: "part-2",
    code: "A",
    weight: 20,
    ar: "تحليل القوائم المالية",
    en: "Financial Statement Analysis",
  },
  {
    id: "corporate-finance",
    part: "part-2",
    code: "B",
    weight: 20,
    ar: "تمويل الشركات",
    en: "Corporate Finance",
  },
  {
    id: "decision-analysis",
    part: "part-2",
    code: "C",
    weight: 25,
    ar: "تحليل قرارات الأعمال",
    en: "Business Decision Analysis",
  },
  {
    id: "risk-mgmt",
    part: "part-2",
    code: "D",
    weight: 10,
    ar: "إدارة مخاطر المنشأة",
    en: "Enterprise Risk Management",
  },
  {
    id: "investment-decisions",
    part: "part-2",
    code: "E",
    weight: 10,
    ar: "قرارات الاستثمار الرأسمالي",
    en: "Capital Investment Decisions",
  },
  {
    id: "professional-ethics",
    part: "part-2",
    code: "F",
    weight: 15,
    ar: "الأخلاقيات المهنية",
    en: "Professional Ethics",
  },
];

/** The first published learning unit covers the two numbered sections of Part 1, domain A. */
export const CMA_TOPICS: CmaTopic[] = [
  {
    id: "financial-statements",
    code: "CMA-P1-A1",
    part: "part-1",
    domain: "external-reporting",
    titleAr: "القوائم المالية والتقارير المتكاملة",
    titleEn: "Financial Statements and Integrated Reporting",
    summaryAr:
      "إعداد القوائم الأربع وترابطها، التدفقات النقدية بالطريقة غير المباشرة، مبادئ القوائم الموحدة والتقرير المتكامل.",
    summaryEn:
      "Prepare and connect the four statements; reconcile indirect cash flows; interpret consolidation and integrated reporting.",
    keyFormulas: [
      {
        nameAr: "معادلة المركز المالي",
        nameEn: "Accounting equation",
        formula: "Assets = Liabilities + Equity",
      },
      {
        nameAr: "التدفق التشغيلي غير المباشر",
        nameEn: "Indirect operating cash flow",
        formula:
          "CFO = Net income + Noncash expenses − Investing gains + Investing losses ± Operating working-capital changes",
      },
    ],
    searchTerms: [
      "balance sheet",
      "income statement",
      "cash flows",
      "equity",
      "consolidation",
      "integrated reporting",
      "قائمة التدفقات",
      "التوحيد",
    ],
  },
  {
    id: "recognition-measurement",
    code: "CMA-P1-A2",
    part: "part-1",
    domain: "external-reporting",
    titleAr: "الاعتراف والقياس والتقييم",
    titleEn: "Recognition, Measurement, and Valuation",
    summaryAr:
      "الذمم والمخزون والاستثمارات والأصول طويلة الأجل، الالتزامات والضرائب والإيجارات، حقوق الملكية والإيراد والدخل وفروق US GAAP وIFRS.",
    summaryEn:
      "Receivables, inventories, investments and long-lived assets; liabilities, taxes, leases, equity, revenue and key U.S. GAAP/IFRS differences.",
    keyFormulas: [
      {
        nameAr: "صافي الذمم المدينة",
        nameEn: "Net receivables",
        formula: "Net receivables = Gross receivables − Allowance for credit losses",
      },
      {
        nameAr: "تكلفة البضاعة المباعة",
        nameEn: "Cost of goods sold",
        formula: "COGS = Beginning inventory + Purchases − Ending inventory",
      },
    ],
    searchTerms: [
      "FIFO",
      "LIFO",
      "receivables",
      "deferred tax",
      "leases",
      "ASC 606",
      "IFRS 15",
      "المخزون",
      "الاعتراف بالإيراد",
    ],
  },
];
