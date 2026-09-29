export type StandardFamily = "IFRS" | "IAS";

export type StandardTopic =
  | "presentation"
  | "financial-instruments"
  | "group-reporting"
  | "revenue"
  | "assets"
  | "tax-benefits"
  | "industry"
  | "other";

export interface AccountingStandard {
  code: string;
  family: StandardFamily;
  titleAr: string;
  titleEn: string;
  summaryAr: string;
  summaryEn: string;
  topic: StandardTopic;
  articleHref?: string;
  toolIds?: string[];
  statusAr?: string;
  statusEn?: string;
  highlight?: boolean;
  officialUrl?: string;
  searchTerms?: string[];
}

export const IFRS_NAVIGATOR_URL =
  "https://www.ifrs.org/issued-standards/list-of-standards/";

const article = (slug: string) =>
  `/knowledge/international-accounting-standards/${slug}`;

export const IFRS_STANDARDS: AccountingStandard[] = [
  {
    code: "IFRS 1",
    family: "IFRS",
    titleAr: "التطبيق لأول مرة للمعايير الدولية للتقرير المالي",
    titleEn: "First-time Adoption of International Financial Reporting Standards",
    summaryAr:
      "ينظم انتقال المنشأة إلى IFRS لأول مرة، بما في ذلك قائمة المركز المالي الافتتاحية والإعفاءات والاستثناءات والتسويات المطلوبة.",
    summaryEn:
      "Governs first-time transition to IFRS, including the opening statement of financial position, exemptions, exceptions, and reconciliations.",
    topic: "presentation",
    searchTerms: ["first time adoption", "transition", "التحول", "التطبيق لأول مرة"],
  },
  {
    code: "IFRS 2",
    family: "IFRS",
    titleAr: "الدفع على أساس الأسهم",
    titleEn: "Share-based Payment",
    summaryAr:
      "يحدد كيفية الاعتراف وقياس المعاملات التي تُسدد بأسهم أو خيارات أو مبالغ نقدية مرتبطة بقيمة أدوات حقوق الملكية.",
    summaryEn:
      "Sets recognition and measurement requirements for equity-settled and cash-settled share-based payment transactions.",
    topic: "other",
    searchTerms: ["options", "equity compensation", "الخيارات", "الأسهم"],
  },
  {
    code: "IFRS 3",
    family: "IFRS",
    titleAr: "تجميع الأعمال",
    titleEn: "Business Combinations",
    summaryAr:
      "يعالج محاسبة الاستحواذات وتجميع الأعمال، بما يشمل تحديد المقابل والقيمة العادلة للأصول والالتزامات والشهرة.",
    summaryEn:
      "Covers acquisition accounting for business combinations, including consideration, fair values of identifiable net assets, and goodwill.",
    topic: "group-reporting",
    toolIds: ["goodwill-impairment"],
    searchTerms: ["acquisition", "goodwill", "استحواذ", "شهرة"],
  },
  {
    code: "IFRS 5",
    family: "IFRS",
    titleAr: "الأصول غير المتداولة المحتفظ بها للبيع والعمليات غير المستمرة",
    titleEn: "Non-current Assets Held for Sale and Discontinued Operations",
    summaryAr:
      "يضع قواعد التصنيف والقياس والعرض للأصول ومجموعات الاستبعاد المحتفظ بها للبيع، وللعمليات المصنفة كغير مستمرة.",
    summaryEn:
      "Sets classification, measurement, and presentation requirements for assets held for sale and discontinued operations.",
    topic: "assets",
  },
  {
    code: "IFRS 6",
    family: "IFRS",
    titleAr: "استكشاف وتقييم الموارد المعدنية",
    titleEn: "Exploration for and Evaluation of Mineral Resources",
    summaryAr:
      "يتناول تكاليف الاستكشاف والتقييم في الصناعات الاستخراجية قبل إثبات الجدوى الفنية والتجارية للاستخراج.",
    summaryEn:
      "Addresses exploration and evaluation expenditure in extractive industries before technical feasibility and commercial viability are demonstrated.",
    topic: "industry",
  },
  {
    code: "IFRS 7",
    family: "IFRS",
    titleAr: "الأدوات المالية: الإفصاحات",
    titleEn: "Financial Instruments: Disclosures",
    summaryAr:
      "يفرض إفصاحات تساعد المستخدم على فهم أهمية الأدوات المالية وطبيعة ومقدار مخاطر الائتمان والسيولة والسوق.",
    summaryEn:
      "Requires disclosures about the significance of financial instruments and exposure to credit, liquidity, and market risks.",
    topic: "financial-instruments",
    searchTerms: ["credit risk", "liquidity risk", "market risk", "مخاطر"],
  },
  {
    code: "IFRS 8",
    family: "IFRS",
    titleAr: "القطاعات التشغيلية",
    titleEn: "Operating Segments",
    summaryAr:
      "ينظم الإفصاح عن القطاعات التشغيلية وفق المعلومات التي تستخدمها الإدارة داخليًا لتقييم الأداء وتخصيص الموارد.",
    summaryEn:
      "Requires segment reporting based on the internal information used by management to assess performance and allocate resources.",
    topic: "presentation",
  },
  {
    code: "IFRS 9",
    family: "IFRS",
    titleAr: "الأدوات المالية",
    titleEn: "Financial Instruments",
    summaryAr:
      "يغطي تصنيف وقياس الأصول والالتزامات المالية، والخسائر الائتمانية المتوقعة، ومحاسبة التحوط.",
    summaryEn:
      "Covers classification and measurement of financial instruments, expected credit losses, and hedge accounting.",
    topic: "financial-instruments",
    articleHref: article("ifrs-9-expected-credit-loss-guide"),
    toolIds: ["loan", "bond"],
    searchTerms: ["ECL", "expected credit loss", "PD", "LGD", "خسائر ائتمانية"],
  },
  {
    code: "IFRS 10",
    family: "IFRS",
    titleAr: "القوائم المالية الموحدة",
    titleEn: "Consolidated Financial Statements",
    summaryAr:
      "يحدد مفهوم السيطرة كأساس لتحديد المنشآت التي يجب توحيدها وكيفية إعداد القوائم المالية الموحدة.",
    summaryEn:
      "Defines control as the basis for consolidation and sets requirements for preparing consolidated financial statements.",
    topic: "group-reporting",
    articleHref: article("ifrs-10-consolidated-financial-statements-guide"),
    searchTerms: ["control", "consolidation", "سيطرة", "توحيد"],
  },
  {
    code: "IFRS 11",
    family: "IFRS",
    titleAr: "الترتيبات المشتركة",
    titleEn: "Joint Arrangements",
    summaryAr:
      "يصنف الترتيبات المشتركة إلى عمليات مشتركة أو مشروعات مشتركة وفق الحقوق والالتزامات الناتجة عن الترتيب.",
    summaryEn:
      "Classifies joint arrangements as joint operations or joint ventures based on the parties' rights and obligations.",
    topic: "group-reporting",
  },
  {
    code: "IFRS 12",
    family: "IFRS",
    titleAr: "الإفصاح عن الحصص في المنشآت الأخرى",
    titleEn: "Disclosure of Interests in Other Entities",
    summaryAr:
      "يجمع متطلبات الإفصاح عن الشركات التابعة والترتيبات المشتركة والشركات الزميلة والمنشآت المهيكلة غير الموحدة.",
    summaryEn:
      "Consolidates disclosure requirements for subsidiaries, joint arrangements, associates, and unconsolidated structured entities.",
    topic: "group-reporting",
  },
  {
    code: "IFRS 13",
    family: "IFRS",
    titleAr: "قياس القيمة العادلة",
    titleEn: "Fair Value Measurement",
    summaryAr:
      "يوفر إطارًا موحدًا لقياس القيمة العادلة والإفصاح عنها عندما يتطلب أو يسمح معيار آخر باستخدامها.",
    summaryEn:
      "Provides a single framework for measuring and disclosing fair value when another standard requires or permits it.",
    topic: "financial-instruments",
    toolIds: ["dcf"],
    searchTerms: ["fair value", "valuation", "DCF", "القيمة العادلة", "تقييم"],
  },
  {
    code: "IFRS 14",
    family: "IFRS",
    titleAr: "حسابات التأجيل التنظيمية",
    titleEn: "Regulatory Deferral Accounts",
    summaryAr:
      "معيار انتقالي محدود يسمح لبعض المتبنين لأول مرة بالاستمرار مؤقتًا في معالجة أرصدة تنظيم الأسعار وفق أساسهم المحاسبي السابق.",
    summaryEn:
      "A limited interim standard allowing certain first-time adopters to continue previous-GAAP accounting for rate-regulated balances.",
    topic: "industry",
    statusAr: "سيحل IFRS 20 محله عند سريانه في 1 يناير 2029.",
    statusEn: "IFRS 20 will replace it when effective on 1 January 2029.",
    highlight: true,
  },
  {
    code: "IFRS 15",
    family: "IFRS",
    titleAr: "الإيراد من العقود مع العملاء",
    titleEn: "Revenue from Contracts with Customers",
    summaryAr:
      "يطبق نموذجًا من خمس خطوات لتحديد متى وبأي مبلغ يُعترف بالإيراد الناتج عن العقود مع العملاء.",
    summaryEn:
      "Applies a five-step model to determine when and how much revenue is recognised from customer contracts.",
    topic: "revenue",
    articleHref: article("ifrs-15-revenue-recognition-five-step-model"),
    searchTerms: ["revenue", "performance obligations", "إيراد", "التزامات الأداء"],
  },
  {
    code: "IFRS 16",
    family: "IFRS",
    titleAr: "عقود الإيجار",
    titleEn: "Leases",
    summaryAr:
      "يحدد محاسبة عقود الإيجار، وبصفة عامة يثبت المستأجر أصل حق استخدام والتزام إيجار مع استثناءات محدودة.",
    summaryEn:
      "Sets lease accounting requirements; lessees generally recognise a right-of-use asset and lease liability, subject to limited exemptions.",
    topic: "assets",
    toolIds: ["lease"],
    searchTerms: ["lease liability", "ROU", "right of use", "التزام الإيجار", "حق الاستخدام"],
  },
  {
    code: "IFRS 17",
    family: "IFRS",
    titleAr: "عقود التأمين",
    titleEn: "Insurance Contracts",
    summaryAr:
      "يضع نموذجًا شاملًا للاعتراف والقياس والعرض والإفصاح عن عقود التأمين وعقود إعادة التأمين.",
    summaryEn:
      "Establishes a comprehensive model for recognising, measuring, presenting, and disclosing insurance and reinsurance contracts.",
    topic: "industry",
    searchTerms: ["insurance", "CSM", "risk adjustment", "تأمين"],
  },
  {
    code: "IFRS 18",
    family: "IFRS",
    titleAr: "العرض والإفصاح في القوائم المالية",
    titleEn: "Presentation and Disclosure in Financial Statements",
    summaryAr:
      "يعيد تنظيم عرض قائمة الربح أو الخسارة، ويضيف مجاميع فرعية محددة ومتطلبات لمقاييس الأداء المحددة من الإدارة والتجميع والتفصيل.",
    summaryEn:
      "Reshapes profit-or-loss presentation with specified subtotals, management-defined performance measure disclosures, and aggregation/disaggregation requirements.",
    topic: "presentation",
    articleHref: article("ifrs-18-financial-statements-practical-guide"),
    toolIds: ["financial-statements"],
    statusAr: "يسري للفترات السنوية التي تبدأ في أو بعد 1 يناير 2027، مع السماح بالتطبيق المبكر، ويحل محل IAS 1.",
    statusEn:
      "Effective for annual periods beginning on or after 1 January 2027; earlier application is permitted; replaces IAS 1.",
    highlight: true,
    officialUrl:
      "https://www.ifrs.org/issued-standards/list-of-standards/ifrs-18-presentation-and-disclosure-in-financial-statements/",
  },
  {
    code: "IFRS 19",
    family: "IFRS",
    titleAr: "الشركات التابعة دون مساءلة عامة: الإفصاحات",
    titleEn: "Subsidiaries without Public Accountability: Disclosures",
    summaryAr:
      "يسمح للشركات التابعة المؤهلة بتطبيق متطلبات الاعتراف والقياس لباقي معايير IFRS مع مجموعة إفصاحات مخفضة.",
    summaryEn:
      "Allows eligible subsidiaries to apply recognition and measurement requirements in other IFRS Standards with reduced disclosures.",
    topic: "presentation",
    statusAr: "اختياري للشركات التابعة المؤهلة للفترات التي تبدأ في أو بعد 1 يناير 2027، مع السماح بالتطبيق المبكر.",
    statusEn:
      "Optional for eligible subsidiaries for periods beginning on or after 1 January 2027; earlier application is permitted.",
    highlight: true,
    officialUrl:
      "https://www.ifrs.org/issued-standards/list-of-standards/ifrs-19-subsidiaries-without-public-accountability-disclosures/",
  },
  {
    code: "IFRS 20",
    family: "IFRS",
    titleAr: "الأصول والالتزامات التنظيمية",
    titleEn: "Regulatory Assets and Regulatory Liabilities",
    summaryAr:
      "يعالج آثار فروق التوقيت التنظيمية في الأنشطة الخاضعة لتنظيم الأسعار من خلال إثبات أصول والتزامات تنظيمية وعرض أدائها.",
    summaryEn:
      "Addresses regulatory timing differences in rate-regulated activities through recognition and presentation of regulatory assets and liabilities.",
    topic: "industry",
    statusAr: "صدر في مايو 2026 ويسري للفترات التي تبدأ في أو بعد 1 يناير 2029، مع السماح بالتطبيق المبكر، ويحل محل IFRS 14.",
    statusEn:
      "Issued in May 2026 and effective for periods beginning on or after 1 January 2029; earlier application is permitted; replaces IFRS 14.",
    highlight: true,
    officialUrl:
      "https://www.ifrs.org/projects/completed-projects/2026/rate-regulated-activities/",
  },

  {
    code: "IAS 1",
    family: "IAS",
    titleAr: "عرض القوائم المالية",
    titleEn: "Presentation of Financial Statements",
    summaryAr:
      "يضع المتطلبات العامة لعرض القوائم المالية وهيكلها ومحتواها الأدنى للفترات التي تسبق تطبيق IFRS 18.",
    summaryEn:
      "Sets general presentation, structure, and minimum-content requirements for financial statements before IFRS 18 applies.",
    topic: "presentation",
    toolIds: ["financial-statements"],
    statusAr: "يحل IFRS 18 محله للفترات التي تبدأ في أو بعد 1 يناير 2027.",
    statusEn: "Replaced by IFRS 18 for periods beginning on or after 1 January 2027.",
    highlight: true,
  },
  {
    code: "IAS 2",
    family: "IAS",
    titleAr: "المخزون",
    titleEn: "Inventories",
    summaryAr:
      "يحدد قياس المخزون بالتكلفة وصافي القيمة القابلة للتحقق، وصيغ التكلفة، ومتى يُعترف بالتخفيض أو عكسه.",
    summaryEn:
      "Sets inventory measurement at cost and net realisable value, cost formulas, and write-down or reversal requirements.",
    topic: "assets",
    toolIds: ["inventory-nrv"],
    searchTerms: ["NRV", "inventory", "مخزون", "صافي القيمة القابلة للتحقق"],
  },
  {
    code: "IAS 7",
    family: "IAS",
    titleAr: "قائمة التدفقات النقدية",
    titleEn: "Statement of Cash Flows",
    summaryAr:
      "ينظم عرض التدفقات النقدية وتصنيفها إلى تشغيلية واستثمارية وتمويلية، مع متطلبات خاصة بالنقد وما في حكمه.",
    summaryEn:
      "Governs cash-flow presentation across operating, investing, and financing activities and defines cash and cash equivalents.",
    topic: "presentation",
    toolIds: ["financial-statements"],
  },
  {
    code: "IAS 8",
    family: "IAS",
    titleAr: "أساس إعداد القوائم المالية",
    titleEn: "Basis of Preparation of Financial Statements",
    summaryAr:
      "يتناول اختيار وتغيير السياسات المحاسبية، والتغيرات في التقديرات، وتصحيح الأخطاء، ومتطلبات إعداد ذات صلة.",
    summaryEn:
      "Addresses accounting policy selection and changes, changes in estimates, correction of errors, and related preparation requirements.",
    topic: "presentation",
  },
  {
    code: "IAS 10",
    family: "IAS",
    titleAr: "الأحداث بعد فترة التقرير",
    titleEn: "Events after the Reporting Period",
    summaryAr:
      "يميز بين الأحداث المعدلة وغير المعدلة بعد تاريخ التقرير ويحدد متى يجب تعديل الأرقام أو الاكتفاء بالإفصاح.",
    summaryEn:
      "Distinguishes adjusting from non-adjusting events after the reporting date and specifies recognition or disclosure consequences.",
    topic: "presentation",
  },
  {
    code: "IAS 12",
    family: "IAS",
    titleAr: "ضرائب الدخل",
    titleEn: "Income Taxes",
    summaryAr:
      "ينظم المحاسبة عن الضريبة الجارية والمؤجلة الناتجة عن الفروق المؤقتة والخسائر والائتمانات الضريبية.",
    summaryEn:
      "Governs current and deferred income tax arising from temporary differences, tax losses, and tax credits.",
    topic: "tax-benefits",
  },
  {
    code: "IAS 16",
    family: "IAS",
    titleAr: "العقارات والآلات والمعدات",
    titleEn: "Property, Plant and Equipment",
    summaryAr:
      "يحدد الاعتراف والقياس والإهلاك وإعادة التقييم والاستبعاد للأصول الملموسة طويلة الأجل المستخدمة في النشاط.",
    summaryEn:
      "Sets recognition, measurement, depreciation, revaluation, and derecognition rules for long-lived tangible operating assets.",
    topic: "assets",
  },
  {
    code: "IAS 19",
    family: "IAS",
    titleAr: "منافع الموظفين",
    titleEn: "Employee Benefits",
    summaryAr:
      "يعالج الرواتب والمنافع قصيرة الأجل وخطط المنافع المحددة والمساهمات المحددة ومنافع إنهاء الخدمة.",
    summaryEn:
      "Covers short-term employee benefits, defined contribution and defined benefit plans, and termination benefits.",
    topic: "tax-benefits",
  },
  {
    code: "IAS 20",
    family: "IAS",
    titleAr: "محاسبة المنح الحكومية والإفصاح عن المساعدات الحكومية",
    titleEn: "Accounting for Government Grants and Disclosure of Government Assistance",
    summaryAr:
      "يحدد توقيت الاعتراف بالمنح الحكومية وطرق عرضها والإفصاحات المتعلقة بالمساعدات الحكومية.",
    summaryEn:
      "Sets recognition timing, presentation approaches, and disclosures for government grants and assistance.",
    topic: "other",
  },
  {
    code: "IAS 21",
    family: "IAS",
    titleAr: "آثار التغيرات في أسعار صرف العملات الأجنبية",
    titleEn: "The Effects of Changes in Foreign Exchange Rates",
    summaryAr:
      "يتناول تحديد العملة الوظيفية وترجمة المعاملات والأرصدة بالعملات الأجنبية وترجمة عمليات المنشآت الأجنبية.",
    summaryEn:
      "Covers functional currency, foreign-currency transactions and balances, and translation of foreign operations.",
    topic: "other",
  },
  {
    code: "IAS 23",
    family: "IAS",
    titleAr: "تكاليف الاقتراض",
    titleEn: "Borrowing Costs",
    summaryAr:
      "يتطلب رسملة تكاليف الاقتراض المؤهلة المرتبطة مباشرة باقتناء أو إنشاء أو إنتاج أصل مؤهل، مع معالجة باقي التكاليف كمصروف.",
    summaryEn:
      "Requires capitalisation of eligible borrowing costs directly attributable to a qualifying asset, with other borrowing costs expensed.",
    topic: "assets",
  },
  {
    code: "IAS 24",
    family: "IAS",
    titleAr: "الإفصاحات عن الأطراف ذات العلاقة",
    titleEn: "Related Party Disclosures",
    summaryAr:
      "يحدد من يُعد طرفًا ذا علاقة وما يلزم الإفصاح عنه بشأن العلاقات والمعاملات والأرصدة وتعويضات الإدارة الرئيسية.",
    summaryEn:
      "Defines related parties and required disclosures about relationships, transactions, balances, and key management compensation.",
    topic: "presentation",
    articleHref: article("ias-24-related-party-disclosures-guide"),
    searchTerms: ["related party", "KMP", "أطراف ذات علاقة", "الإدارة الرئيسية"],
  },
  {
    code: "IAS 26",
    family: "IAS",
    titleAr: "المحاسبة والتقرير بواسطة خطط منافع التقاعد",
    titleEn: "Accounting and Reporting by Retirement Benefit Plans",
    summaryAr:
      "يحدد متطلبات التقارير المالية التي تعدها خطط منافع التقاعد نفسها لمصلحة المشاركين.",
    summaryEn:
      "Sets financial reporting requirements for retirement benefit plans themselves for the benefit of participants.",
    topic: "tax-benefits",
  },
  {
    code: "IAS 27",
    family: "IAS",
    titleAr: "القوائم المالية المنفصلة",
    titleEn: "Separate Financial Statements",
    summaryAr:
      "ينظم محاسبة الاستثمارات في الشركات التابعة والمشروعات المشتركة والزميلة عند إعداد قوائم مالية منفصلة.",
    summaryEn:
      "Governs accounting for investments in subsidiaries, joint ventures, and associates in separate financial statements.",
    topic: "group-reporting",
  },
  {
    code: "IAS 28",
    family: "IAS",
    titleAr: "الاستثمارات في الشركات الزميلة والمشروعات المشتركة",
    titleEn: "Investments in Associates and Joint Ventures",
    summaryAr:
      "ينظم استخدام طريقة حقوق الملكية للمحاسبة عن الاستثمارات في الشركات الزميلة والمشروعات المشتركة، ويتضمن خيار القيمة العادلة لفئات مؤهلة.",
    summaryEn:
      "Sets requirements for the equity method for associates and joint ventures and includes a fair value option for eligible investments.",
    topic: "group-reporting",
    statusAr:
      "أصدر IASB تعديلات مستهدفة في يونيو 2026 لتوضيح أهلية استخدام خيار القيمة العادلة؛ تسري عند تطبيق المنشأة IFRS 18 لأول مرة.",
    statusEn:
      "The IASB issued targeted amendments in June 2026 clarifying eligibility for the fair value option; they take effect when the entity first applies IFRS 18.",
    officialUrl:
      "https://www.ifrs.org/projects/completed-projects/2026/amendments-to-the-fair-value-option-ias-28/",
  },
  {
    code: "IAS 29",
    family: "IAS",
    titleAr: "التقرير المالي في الاقتصادات ذات التضخم المفرط",
    titleEn: "Financial Reporting in Hyperinflationary Economies",
    summaryAr:
      "يتطلب إعادة التعبير عن القوائم المالية للمنشآت التي تكون عملتها الوظيفية عملة اقتصاد ذي تضخم مفرط.",
    summaryEn:
      "Requires restatement of financial statements when an entity's functional currency belongs to a hyperinflationary economy.",
    topic: "other",
  },
  {
    code: "IAS 32",
    family: "IAS",
    titleAr: "الأدوات المالية: العرض",
    titleEn: "Financial Instruments: Presentation",
    summaryAr:
      "يضع مبادئ تصنيف الأدوات كالتزامات أو حقوق ملكية ومتطلبات المقاصة بين الأصول والالتزامات المالية.",
    summaryEn:
      "Sets principles for liability-versus-equity classification and offsetting of financial assets and liabilities.",
    topic: "financial-instruments",
  },
  {
    code: "IAS 33",
    family: "IAS",
    titleAr: "ربحية السهم",
    titleEn: "Earnings per Share",
    summaryAr:
      "يحدد حساب وعرض ربحية السهم الأساسية والمخفضة للمنشآت التي تقع ضمن نطاقه.",
    summaryEn:
      "Sets calculation and presentation requirements for basic and diluted earnings per share.",
    topic: "presentation",
  },
  {
    code: "IAS 34",
    family: "IAS",
    titleAr: "التقرير المالي المرحلي",
    titleEn: "Interim Financial Reporting",
    summaryAr:
      "يحدد الحد الأدنى لمحتوى التقرير المالي المرحلي ومبادئ الاعتراف والقياس للفترات المرحلية.",
    summaryEn:
      "Specifies minimum interim-report content and recognition and measurement principles for interim periods.",
    topic: "presentation",
  },
  {
    code: "IAS 36",
    family: "IAS",
    titleAr: "انخفاض قيمة الأصول",
    titleEn: "Impairment of Assets",
    summaryAr:
      "يتطلب اختبار انخفاض القيمة عندما توجد مؤشرات، واختبارًا سنويًا لبعض الأصول، وقياس الخسارة باستخدام القيمة القابلة للاسترداد.",
    summaryEn:
      "Requires impairment testing when indicators exist, annual testing for specified assets, and measurement using recoverable amount.",
    topic: "assets",
    toolIds: ["goodwill-impairment"],
    searchTerms: ["impairment", "recoverable amount", "CGU", "انخفاض القيمة", "وحدة مولدة للنقد"],
  },
  {
    code: "IAS 37",
    family: "IAS",
    titleAr: "المخصصات والالتزامات المحتملة والأصول المحتملة",
    titleEn: "Provisions, Contingent Liabilities and Contingent Assets",
    summaryAr:
      "يحدد متى يُثبت المخصص وكيف يُقاس، ومتى تُفصح المنشأة عن الالتزامات أو الأصول المحتملة دون إثباتها.",
    summaryEn:
      "Sets when provisions are recognised and measured and when contingent liabilities or assets are disclosed rather than recognised.",
    topic: "other",
  },
  {
    code: "IAS 38",
    family: "IAS",
    titleAr: "الأصول غير الملموسة",
    titleEn: "Intangible Assets",
    summaryAr:
      "ينظم الاعتراف والقياس والإطفاء واختبارات العمر الإنتاجي للأصول غير الملموسة، بما في ذلك البحث والتطوير.",
    summaryEn:
      "Governs recognition, measurement, amortisation, and useful-life assessment for intangible assets, including research and development.",
    topic: "assets",
  },
  {
    code: "IAS 40",
    family: "IAS",
    titleAr: "العقارات الاستثمارية",
    titleEn: "Investment Property",
    summaryAr:
      "ينظم تصنيف وقياس العقارات المحتفظ بها لتحقيق إيجارات أو ارتفاع في القيمة، مع نماذج القيمة العادلة أو التكلفة.",
    summaryEn:
      "Governs property held for rentals or capital appreciation, with fair value and cost model alternatives.",
    topic: "assets",
  },
  {
    code: "IAS 41",
    family: "IAS",
    titleAr: "الزراعة",
    titleEn: "Agriculture",
    summaryAr:
      "يعالج الأصول البيولوجية والمنتج الزراعي عند الحصاد، مع اعتماد واسع على القياس بالقيمة العادلة ناقص تكاليف البيع.",
    summaryEn:
      "Addresses biological assets and agricultural produce at harvest, generally using fair value less costs to sell.",
    topic: "industry",
  },
];
