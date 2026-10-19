/** IMA Content Specification Outline, effective September 2024. Content is original. */
export const CMA_OUTLINE_URL =
  "https://www.imaglobal.org/assets/static/cma-content-specification-outlines-2024.Cr1Ox4aS.pdf";
export const CMA_LOS_URL =
  "https://www.imaglobal.org/assets/static/cma-learning-outcome-statements-2024.HDHHOjUF.pdf";
export const CMA_EXAM_FORMAT_URL =
  "https://www.imaglobal.org/learn/course/the-cma-handbook/the-cma-examinations/cma-examinations";
export const CMA_IR_FRAMEWORK_URL =
  "https://integratedreporting.ifrs.org/wp-content/uploads/2024/08/IntegratedReporting_Framework_061024.pdf";

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
  studyUnit: 1 | 2 | 3 | 4 | 5 | 6;
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
  {
    id: "su3-equity-securities",
    code: "CMA-P1-SU3-3.1",
    studyUnit: 3,
    section: "3.1",
    sourcePages: "2–5",
    losRef: "A.2.k",
    part: "part-1",
    domain: "external-reporting",
    titleAr: "الاستثمار في أدوات حقوق الملكية",
    titleEn: "Investments in Equity Securities",
    summaryAr:
      "تحديد مستوى التأثير، قياس الأسهم بالقيمة العادلة، عرض الأرباح غير المحققة والتوزيعات في الربح.",
    summaryEn:
      "Assess influence; measure non-equity-method equity securities at fair value and report holding changes and dividends in income.",
    keyFormulas: [
      {
        nameAr: "ربح أو خسارة التقييم",
        nameEn: "Holding gain or loss",
        formula: "Shares held × (Closing fair value per share − Prior carrying value per share)",
      },
    ],
    searchTerms: ["equity securities", "FVPL", "dividend income", "استثمارات الأسهم"],
  },
  {
    id: "su3-equity-method",
    code: "CMA-P1-SU3-3.2",
    studyUnit: 3,
    section: "3.2",
    sourcePages: "5–7",
    losRef: "A.2.k",
    part: "part-1",
    domain: "external-reporting",
    titleAr: "طريقة حقوق الملكية",
    titleEn: "Equity Method",
    summaryAr:
      "النفوذ المهم واعتراف حصة المستثمر من ربح المنشأة المستثمر فيها، وتخفيض الاستثمار بالتوزيعات.",
    summaryEn:
      "Significant influence, the investor's share of investee earnings or losses, and dividends as a reduction of the investment.",
    keyFormulas: [
      {
        nameAr: "رصيد الاستثمار",
        nameEn: "Investment rollforward",
        formula:
          "Ending investment = Opening cost + Share of post-acquisition earnings − Share of dividends",
      },
    ],
    searchTerms: ["significant influence", "associate", "20%", "حقوق الملكية"],
  },
  {
    id: "su3-debt-securities",
    code: "CMA-P1-SU3-3.3",
    studyUnit: 3,
    section: "3.3",
    sourcePages: "8–12",
    losRef: "A.2.j–k",
    part: "part-1",
    domain: "external-reporting",
    titleAr: "الاستثمار في أدوات الدين",
    titleEn: "Investments in Debt Securities",
    summaryAr:
      "تصنيف المحتفظ به للاستحقاق والمتاح للبيع والمتاجرة؛ التكلفة المطفأة والقيمة العادلة والربح أو الدخل الشامل الآخر.",
    summaryEn:
      "Classify held-to-maturity, available-for-sale and trading debt; distinguish amortized cost, fair value, earnings and OCI.",
    keyFormulas: [
      {
        nameAr: "الفائدة الفعلية",
        nameEn: "Effective interest",
        formula: "Interest income = Opening amortized cost × Effective yield",
      },
    ],
    searchTerms: ["HTM", "AFS", "trading", "OCI", "debt securities", "السندات الاستثمارية"],
  },
  {
    id: "su3-ppe",
    code: "CMA-P1-SU3-3.4",
    studyUnit: 3,
    section: "3.4",
    sourcePages: "12–18",
    losRef: "A.2.l–m; A.2.ff(v)",
    part: "part-1",
    domain: "external-reporting",
    titleAr: "الممتلكات والآلات والمعدات والإهلاك",
    titleEn: "Property, Plant, Equipment and Depreciation",
    summaryAr:
      "التكلفة الأولية والنفقات اللاحقة والفرق بين القسط الثابت والإنتاج والمتناقص ومجموع أرقام السنوات.",
    summaryEn:
      "Initial cost, subsequent expenditures and straight-line, units-of-output, declining-balance and sum-of-years-digits depreciation.",
    keyFormulas: [
      {
        nameAr: "القسط الثابت",
        nameEn: "Straight-line depreciation",
        formula: "Annual depreciation = (Cost − Residual value) ÷ Useful life",
      },
      {
        nameAr: "المتناقص المزدوج",
        nameEn: "Double-declining balance",
        formula:
          "Depreciation = Opening carrying amount × (2 ÷ Useful life), capped at residual value",
      },
    ],
    searchTerms: ["PPE", "depreciation", "DDB", "SYD", "capital expenditure", "الإهلاك"],
  },
  {
    id: "su3-intangibles",
    code: "CMA-P1-SU3-3.5",
    studyUnit: 3,
    section: "3.5",
    sourcePages: "18–20",
    losRef: "A.2.n; A.2.ff(ii),(vi)",
    part: "part-1",
    domain: "external-reporting",
    titleAr: "الأصول غير الملموسة",
    titleEn: "Intangible Assets",
    summaryAr:
      "التكاليف المرسملة والبحث والتطوير والعمر المحدد وغير المحدد وإطفاء البراءات والشهرة.",
    summaryEn:
      "Capitalizable costs, R&D, finite and indefinite lives, patent amortization and goodwill.",
    keyFormulas: [
      {
        nameAr: "إطفاء الأصل المحدد",
        nameEn: "Finite-life amortization",
        formula:
          "Periodic amortization = (Capitalized cost − Residual value) ÷ Shorter relevant useful/legal life",
      },
    ],
    searchTerms: ["patent", "R&D", "goodwill", "amortization", "البراءة", "الشهرة"],
  },
  {
    id: "su4-contingencies-warranties",
    code: "CMA-P1-SU4-4.1",
    studyUnit: 4,
    section: "4.1",
    sourcePages: "2–6",
    losRef: "A.2.p",
    part: "part-1",
    domain: "external-reporting",
    titleAr: "الالتزامات المحتملة وضمانات المنتجات",
    titleEn: "Contingencies and Warranties",
    summaryAr:
      "الاعتراف بالخسارة المحتملة والإفصاح عنها، وضمان الجودة مقابل خدمة الضمان والإيراد المؤجل.",
    summaryEn:
      "Accrue or disclose loss contingencies; distinguish assurance warranty provisions from separate service obligations.",
    keyFormulas: [
      {
        nameAr: "حركة مخصص الضمان",
        nameEn: "Warranty provision rollforward",
        formula:
          "Ending liability = Opening liability + Current assurance-warranty expense − Claims paid",
      },
    ],
    searchTerms: [
      "probable",
      "reasonably possible",
      "assurance",
      "service warranty",
      "مخصص الضمان",
    ],
  },
  {
    id: "su4-leases",
    code: "CMA-P1-SU4-4.2",
    studyUnit: 4,
    section: "4.2",
    sourcePages: "6–14",
    losRef: "A.2.t–u; A.2.ff(iv)",
    part: "part-1",
    domain: "external-reporting",
    titleAr: "عقود الإيجار",
    titleEn: "Leases",
    summaryAr:
      "اختبارات تصنيف الإيجار التمويلي والتشغيلي، أصل حق الاستخدام والالتزام والعرض والتدفقات النقدية.",
    summaryEn:
      "Finance versus operating classification, right-of-use assets, lease liabilities, expense presentation and cash flows.",
    keyFormulas: [
      {
        nameAr: "تسوية الالتزام",
        nameEn: "Lease-liability reduction",
        formula: "Principal reduction = Payment − Interest on opening liability",
      },
    ],
    searchTerms: ["ROU", "ASC 842", "finance lease", "operating lease", "حق الاستخدام"],
  },
  {
    id: "su4-income-taxes",
    code: "CMA-P1-SU4-4.3",
    studyUnit: 4,
    section: "4.3",
    sourcePages: "14–19",
    losRef: "A.2.q–s",
    part: "part-1",
    domain: "external-reporting",
    titleAr: "ضرائب الدخل المؤجلة",
    titleEn: "Income Taxes and Deferred Taxes",
    summaryAr:
      "الفروق المؤقتة والدائمة، الأصول والالتزامات الضريبية المؤجلة، ومصروف الضريبة الحالي والمؤجل.",
    summaryEn:
      "Temporary versus permanent differences, deferred tax assets and liabilities, and current/deferred tax expense.",
    keyFormulas: [
      {
        nameAr: "مصروف الضريبة",
        nameEn: "Income-tax expense",
        formula: "Current tax + Increase in DTL − Increase in DTA (assuming no other items)",
      },
    ],
    searchTerms: ["DTA", "DTL", "temporary difference", "tax allocation", "الضرائب المؤجلة"],
  },
  {
    id: "su4-bonds",
    code: "CMA-P1-SU4-4.4",
    studyUnit: 4,
    section: "4.4",
    sourcePages: "19–20",
    losRef: "A.2 liability context; Part 2 B.2.c–e (bond fundamentals)",
    part: "part-1",
    domain: "external-reporting",
    titleAr: "السندات المستحقة الدفع",
    titleEn: "Accounting for Bonds Payable",
    summaryAr:
      "علاقة معدل الكوبون بالسوق، الإصدار بعلاوة أو خصم، القيمة الدفترية وإطفاء العلاوة أو الخصم بالفائدة الفعلية.",
    summaryEn:
      "Coupon versus market yield, issue premiums/discounts, carrying amount and effective-interest amortization.",
    keyFormulas: [
      {
        nameAr: "فائدة السند الفعلية",
        nameEn: "Effective-interest expense",
        formula: "Interest expense = Opening carrying amount × Effective market yield",
      },
    ],
    searchTerms: ["bonds payable", "premium", "discount", "effective interest", "السندات"],
  },
  {
    id: "su5-revenue-contracts",
    code: "CMA-P1-SU5-5.1",
    studyUnit: 5,
    section: "5.1",
    sourcePages: "2–6",
    losRef: "A.2.x–y",
    part: "part-1",
    domain: "external-reporting",
    titleAr: "عقود العملاء ونموذج الإيراد ذي الخطوات الخمس",
    titleEn: "Customer Contracts and the Five-Step Revenue Model",
    summaryAr:
      "فحص العقد والتزامات الأداء والسعر وتوزيعه حسب الأسعار المستقلة، ثم إثبات الإيراد عند انتقال السيطرة.",
    summaryEn:
      "Identify contracts and distinct obligations, determine and allocate price, and recognize revenue as control transfers.",
    keyFormulas: [
      {
        nameAr: "توزيع سعر الصفقة",
        nameEn: "Relative standalone-price allocation",
        formula:
          "Allocated price = Contract price × Individual standalone price ÷ Sum of standalone prices",
      },
    ],
    searchTerms: [
      "ASC 606",
      "five steps",
      "standalone price",
      "contract asset",
      "contract liability",
      "الاعتراف بالإيراد",
    ],
  },
  {
    id: "su5-over-time",
    code: "CMA-P1-SU5-5.2",
    studyUnit: 5,
    section: "5.2",
    sourcePages: "6–10",
    losRef: "A.2.x–y",
    part: "part-1",
    domain: "external-reporting",
    titleAr: "الاعتراف بالإيراد على مدى الزمن",
    titleEn: "Revenue Recognition over Time",
    summaryAr:
      "اختبارات نقل السيطرة مع الزمن وقياس التقدم بالمدخلات أو المخرجات وإعادة تقدير تكلفة الإنجاز.",
    summaryEn:
      "Over-time criteria, input and output progress measures, and cumulative catch-up after revised cost estimates.",
    keyFormulas: [
      {
        nameAr: "إيراد الفترة بطريقة التكلفة",
        nameEn: "Current-period cost-to-cost revenue",
        formula:
          "Period revenue = Contract price × Eligible costs to date ÷ Revised total expected eligible costs − Revenue recognized previously",
      },
    ],
    searchTerms: [
      "cost-to-cost",
      "output method",
      "right to invoice",
      "progress",
      "contract loss",
      "عقود طويلة الأجل",
    ],
  },
  {
    id: "su5-impairment-disposal",
    code: "CMA-P1-SU5-5.3",
    studyUnit: 5,
    section: "5.3",
    sourcePages: "11–14",
    losRef: "A.2.n; A.2.aa–bb; A.2.ff(vi)",
    part: "part-1",
    domain: "external-reporting",
    titleAr: "انخفاض قيمة الأصول طويلة الأجل واستبعادها",
    titleEn: "Long-Lived Asset Impairment and Disposal",
    summaryAr:
      "اختبار الاسترداد للأصول المستخدمة، فحص غير الملموسات والشهرة، وحساب الربح أو الخسارة عند بيع أصل.",
    summaryEn:
      "Recoverability for held-and-used assets, indefinite intangibles and goodwill tests, and disposal gains or losses.",
    keyFormulas: [
      {
        nameAr: "خسارة انخفاض الأصل المستخدم",
        nameEn: "Held-and-used impairment",
        formula: "If carrying value > undiscounted cash flows: loss = carrying value − fair value",
      },
      {
        nameAr: "ربح أو خسارة البيع",
        nameEn: "Disposal gain or loss",
        formula: "Net sale proceeds − carrying value after depreciation through disposal date",
      },
    ],
    searchTerms: ["undiscounted", "fair value", "goodwill", "reporting unit", "disposal", "الهبوط"],
  },
  {
    id: "su6-ir-foundations",
    code: "CMA-P1-SU6-6.1",
    studyUnit: 6,
    section: "6.1",
    sourcePages: "2–3",
    losRef: "A.1.l–m",
    part: "part-1",
    domain: "external-reporting",
    titleAr: "التفكير والتقرير المتكامل",
    titleEn: "Integrated Thinking and Reporting",
    summaryAr:
      "التفكير الترابطي داخل المنظمة، وعملية التقرير المتكامل، والتقرير بوصفه وسيلة لتفسير خلق القيمة.",
    summaryEn:
      "Distinguish connected management thinking, the reporting process and its concise report on value over time.",
    searchTerms: [
      "integrated reporting",
      "integrated thinking",
      "providers of financial capital",
      "التقرير المتكامل",
    ],
  },
  {
    id: "su6-ir-capitals",
    code: "CMA-P1-SU6-6.2",
    studyUnit: 6,
    section: "6.2",
    sourcePages: "4–8",
    losRef: "A.1.n",
    part: "part-1",
    domain: "external-reporting",
    titleAr: "رؤوس الأموال الستة وعملية خلق القيمة",
    titleEn: "Six Capitals and Value Creation",
    summaryAr:
      "تحديد المالي والمُصنّع والفكري والبشري والاجتماعي والعلاقات والطبيعي؛ ربط المدخلات والمخرجات بالنتائج.",
    summaryEn:
      "Classify financial, manufactured, intellectual, human, social and relationship, and natural capitals; connect inputs, outputs and outcomes.",
    searchTerms: [
      "six capitals",
      "natural",
      "manufactured",
      "human",
      "intellectual",
      "outcomes",
      "رؤوس الأموال",
    ],
  },
  {
    id: "su6-ir-principles-elements",
    code: "CMA-P1-SU6-6.3",
    studyUnit: 6,
    section: "6.3",
    sourcePages: "9–12",
    losRef: "A.1.o",
    part: "part-1",
    domain: "external-reporting",
    titleAr: "مبادئ وعناصر التقرير المتكامل",
    titleEn: "Integrated Report Principles and Content Elements",
    summaryAr:
      "سبعة مبادئ توجيهية وثمانية عناصر محتوى رسمية من النظرة العامة والحوكمة إلى التوقعات وأساس الإعداد.",
    summaryEn:
      "Seven guiding principles and eight official content elements from overview and governance to outlook and preparation basis.",
    searchTerms: [
      "materiality",
      "connectivity",
      "governance",
      "business model",
      "outlook",
      "IFRS Foundation",
      "الأهمية النسبية",
    ],
  },
  {
    id: "su6-ir-adoption",
    code: "CMA-P1-SU6-6.4",
    studyUnit: 6,
    section: "6.4",
    sourcePages: "13–14",
    losRef: "A.1.p",
    part: "part-1",
    domain: "external-reporting",
    titleAr: "تبنّي التقرير المتكامل وتحدياته",
    titleEn: "Adopting Integrated Reporting",
    summaryAr:
      "موازنة منافع القرار والترابط مع تكاليف البيانات وضوابط غير المالي والتأكيد ودعم الإدارة العليا.",
    summaryEn:
      "Weigh connected decisions and stakeholder benefits against data, controls, assurance and leadership challenges.",
    searchTerms: [
      "assurance",
      "data quality",
      "tone at the top",
      "benefits",
      "challenges",
      "التحقق",
    ],
  },
];
