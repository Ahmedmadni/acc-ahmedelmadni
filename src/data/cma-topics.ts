/** IMA Content Specification Outline, effective September 2024. Content is original. */
export const CMA_OUTLINE_URL =
  "https://www.imaglobal.org/assets/static/cma-content-specification-outlines-2024.Cr1Ox4aS.pdf";
export const CMA_LOS_URL =
  "https://www.imaglobal.org/assets/static/cma-learning-outcome-statements-2024.HDHHOjUF.pdf";
export const CMA_EXAM_FORMAT_URL =
  "https://www.imaglobal.org/learn/course/the-cma-handbook/the-cma-examinations/cma-examinations";

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
  studyUnit: 1 | 2;
  section: string;
  sourcePages: string;
  losRef: string;
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

/** Original study map for Gleim Part 1 Study Units 1–2, aligned with IMA A.1/A.2. */
export const CMA_TOPICS: CmaTopic[] = [
  {
    id: "su1-accounting-concepts",
    code: "CMA-P1-SU1-1.1",
    studyUnit: 1,
    section: "1.1",
    sourcePages: "2–5",
    losRef: "A.1.a–g",
    part: "part-1",
    domain: "external-reporting",
    titleAr: "مفاهيم المحاسبة المالية",
    titleEn: "Concepts of Financial Accounting",
    summaryAr:
      "المستخدمون، أساس الاستحقاق، خصائص المعلومات، ترابط القوائم والتمييز بين المحاسبة المالية والإدارية.",
    summaryEn:
      "Users, accrual accounting, useful information, statement links and the distinction between financial and management accounting.",
    keyFormulas: [
      {
        nameAr: "أساس الاستحقاق",
        nameEn: "Accrual basis",
        formula:
          "Recognize revenue when earned and expenses when incurred, regardless of cash timing",
      },
    ],
    searchTerms: ["accrual", "going concern", "notes", "الاستحقاق"],
  },
  {
    id: "su1-financial-position",
    code: "CMA-P1-SU1-1.2",
    studyUnit: 1,
    section: "1.2",
    sourcePages: "6–11",
    losRef: "A.1.b–g",
    part: "part-1",
    domain: "external-reporting",
    titleAr: "قائمة المركز المالي",
    titleEn: "Statement of Financial Position",
    summaryAr:
      "المعادلة المحاسبية وتحليل العمليات وتصنيف الأصول والالتزامات المتداولة وغير المتداولة وحدود القائمة.",
    summaryEn:
      "The accounting equation, transaction analysis, current/noncurrent classifications and limitations.",
    keyFormulas: [
      {
        nameAr: "المعادلة المحاسبية",
        nameEn: "Accounting equation",
        formula: "Assets = Liabilities + Equity",
      },
    ],
    searchTerms: ["balance sheet", "operating cycle", "السيولة"],
  },
  {
    id: "su1-income-comprehensive",
    code: "CMA-P1-SU1-1.3",
    studyUnit: 1,
    section: "1.3",
    sourcePages: "12–17",
    losRef: "A.1.b–g; A.2.aa–ee",
    part: "part-1",
    domain: "external-reporting",
    titleAr: "قائمة الدخل والدخل الشامل",
    titleEn: "Income and Comprehensive Income",
    summaryAr: "تكلفة الإنتاج والمبيعات، مجمل الربح، البنود غير المستمرة، والدخل الشامل الآخر.",
    summaryEn:
      "Manufacturing costs, cost of goods sold, gross profit, discontinued operations and OCI.",
    keyFormulas: [
      {
        nameAr: "تكلفة الإنتاج التام",
        nameEn: "Cost of goods manufactured",
        formula:
          "COGM = Direct materials used + Direct labor + Manufacturing overhead + Beginning WIP − Ending WIP",
      },
    ],
    searchTerms: ["COGM", "COGS", "OCI", "الدخل الشامل"],
  },
  {
    id: "su1-equity",
    code: "CMA-P1-SU1-1.4",
    studyUnit: 1,
    section: "1.4",
    sourcePages: "18–26",
    losRef: "A.1.c–g; A.2.v–w",
    part: "part-1",
    domain: "external-reporting",
    titleAr: "التغيرات في حقوق الملكية والمعاملات",
    titleEn: "Changes in Equity and Equity Transactions",
    summaryAr:
      "تسوية الأرباح المبقاة، رأس المال الإضافي، أسهم الخزينة، التوزيعات النقدية والأسهم وتقسيم السهم.",
    summaryEn:
      "Retained earnings, additional paid-in capital, treasury stock, dividends and stock splits.",
    keyFormulas: [
      {
        nameAr: "الأرباح المبقاة الختامية",
        nameEn: "Ending retained earnings",
        formula:
          "Ending RE = Beginning RE + Net income − Declared dividends ± Prior-period adjustments",
      },
    ],
    searchTerms: ["treasury stock", "APIC", "dividend", "أسهم الخزينة"],
  },
  {
    id: "su1-cash-flows",
    code: "CMA-P1-SU1-1.5",
    studyUnit: 1,
    section: "1.5",
    sourcePages: "27–34",
    losRef: "A.1.e–g; A.2.bb",
    part: "part-1",
    domain: "external-reporting",
    titleAr: "قائمة التدفقات النقدية",
    titleEn: "Statement of Cash Flows",
    summaryAr:
      "التشغيل والاستثمار والتمويل، العمليات غير النقدية، وتسوية الربح بالطريقة غير المباشرة.",
    summaryEn:
      "Operating, investing and financing activities, noncash disclosures and indirect-method reconciliation.",
    keyFormulas: [
      {
        nameAr: "تسوية النقد التشغيلي",
        nameEn: "Indirect operating cash flow",
        formula:
          "CFO = Net income + Noncash expenses − Nonoperating gains + Nonoperating losses ± Operating working-capital changes",
      },
    ],
    searchTerms: ["cash flow", "indirect method", "التدفقات النقدية"],
  },
  {
    id: "su1-consolidation",
    code: "CMA-P1-SU1-1.6",
    studyUnit: 1,
    section: "1.6",
    sourcePages: "35–43",
    losRef: "A.1.h–k",
    part: "part-1",
    domain: "external-reporting",
    titleAr: "المحاسبة عن القوائم الموحدة",
    titleEn: "Consolidation Accounting",
    summaryAr:
      "السيطرة ونموذجا حقوق التصويت والمصلحة المتغيرة، الشهرة والحصة غير المسيطرة وإلغاء المعاملات الداخلية.",
    summaryEn:
      "Control, voting and variable-interest models, goodwill, noncontrolling interests and intercompany eliminations.",
    keyFormulas: [
      {
        nameAr: "الشهرة عند الاستحواذ",
        nameEn: "Acquisition goodwill",
        formula:
          "Goodwill = Consideration + Fair value of NCI − Fair value of identifiable net assets",
      },
    ],
    searchTerms: ["VIE", "VOE", "goodwill", "NCI", "التوحيد"],
  },
  {
    id: "su2-receivables",
    code: "CMA-P1-SU2-2.1",
    studyUnit: 2,
    section: "2.1",
    sourcePages: "2–7",
    losRef: "A.2.a–b",
    part: "part-1",
    domain: "external-reporting",
    titleAr: "الذمم المدينة وخسائر الائتمان",
    titleEn: "Accounts Receivable and Credit Losses",
    summaryAr:
      "صافي الذمم، تقدير المخصص بالمبيعات أو الأعمار، الشطب، وبيع الذمم مع حق الرجوع أو بدونه.",
    summaryEn: "Net receivables, sales-based and aging-based allowances, write-offs and factoring.",
    keyFormulas: [
      {
        nameAr: "صافي الذمم",
        nameEn: "Net receivables",
        formula: "Net receivables = Gross receivables − Ending credit-loss allowance",
      },
    ],
    searchTerms: ["aging", "factoring", "recourse", "مخصص"],
  },
  {
    id: "su2-inventory-fundamentals",
    code: "CMA-P1-SU2-2.2",
    studyUnit: 2,
    section: "2.2",
    sourcePages: "8–11",
    losRef: "A.2.c; A.2.g",
    part: "part-1",
    domain: "external-reporting",
    titleAr: "أساسيات المخزون والملكية",
    titleEn: "Inventory Fundamentals and Ownership",
    summaryAr:
      "عناصر التكلفة والأنظمة المستمرة والدورية والجرد الفعلي، بضائع الطريق والأمانة وأخطاء نهاية المدة.",
    summaryEn:
      "Inventoriable costs, periodic/perpetual systems, goods in transit, consignment and cutoff errors.",
    keyFormulas: [
      {
        nameAr: "تكلفة المبيعات",
        nameEn: "Cost of goods sold",
        formula: "COGS = Beginning inventory + Net purchases + Freight-in − Ending inventory",
      },
    ],
    searchTerms: ["FOB", "consignment", "physical count", "الأمانة"],
  },
  {
    id: "su2-cost-flow",
    code: "CMA-P1-SU2-2.3",
    studyUnit: 2,
    section: "2.3",
    sourcePages: "12–20",
    losRef: "A.2.d; A.2.f; A.2.h–i",
    part: "part-1",
    domain: "external-reporting",
    titleAr: "طرق تدفق تكلفة المخزون",
    titleEn: "Inventory Cost-Flow Methods",
    summaryAr:
      "التحديد المحدد، المتوسط الدوري والمتحرك، FIFO وLIFO الدوري والمستمر وأثر تغير الأسعار.",
    summaryEn:
      "Specific identification, averages, FIFO, periodic/perpetual LIFO and price-change effects.",
    keyFormulas: [
      {
        nameAr: "متوسط التكلفة المرجح",
        nameEn: "Periodic weighted-average cost",
        formula: "Weighted-average unit cost = Cost of goods available ÷ Units available",
      },
    ],
    searchTerms: ["FIFO", "LIFO", "moving average", "التكلفة المرجحة"],
  },
  {
    id: "su2-subsequent-measurement",
    code: "CMA-P1-SU2-2.4",
    studyUnit: 2,
    section: "2.4",
    sourcePages: "21–24",
    losRef: "A.2.e; A.2.ff(iii)",
    part: "part-1",
    domain: "external-reporting",
    titleAr: "القياس اللاحق وانخفاض المخزون",
    titleEn: "Subsequent Inventory Measurement",
    summaryAr:
      "الأقل من التكلفة والسوق لمخزون LIFO والتجزئة أمريكيًا، والأقل من التكلفة وصافي القيمة القابلة للتحقق لبقية الطرق وفروق IFRS.",
    summaryEn:
      "U.S. lower-of-cost-or-market for LIFO/retail, lower-of-cost-and-NRV for others and IFRS differences.",
    keyFormulas: [
      {
        nameAr: "السوق الأمريكي لمخزون LIFO",
        nameEn: "U.S. LIFO market",
        formula: "Market = min(NRV, max(Replacement cost, NRV − Normal profit))",
      },
    ],
    searchTerms: ["LCM", "LCNRV", "NRV", "write-down", "انخفاض المخزون"],
  },
];
