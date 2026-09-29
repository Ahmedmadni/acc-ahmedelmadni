import type { ExamQuestion } from "@/lib/exam-bank";

/** Phase 3 depth batch B: IFRS 18 and IAS 12/16/21. */
export const IFRS_DEPTH_B_QUESTION_SEED = [
  {
    "id": "ifrs-depthb-ifrs18-01",
    "track": "IFRS",
    "topic": "IFRS 18 — Required categories",
    "question": {
      "ar": "كم عدد الفئات الأساسية المحددة للدخل والمصروفات في قائمة الربح أو الخسارة وفق IFRS 18؟",
      "en": "How many main specified categories of income and expenses are used in profit or loss under IFRS 18?"
    },
    "choices": {
      "ar": [
        "خمس فئات تشمل التشغيل والاستثمار والتمويل وضرائب الدخل والعمليات غير المستمرة",
        "فئتان فقط",
        "ثلاث فئات فقط",
        "لا توجد فئات"
      ],
      "en": [
        "Five categories including operating, investing, financing, income taxes and discontinued operations",
        "Two only",
        "Three only",
        "No categories"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يحدد IFRS 18 خمس فئات في قائمة الربح أو الخسارة، مع قواعد تصنيف تفصيلية.",
      "en": "IFRS 18 specifies five categories in profit or loss, with detailed classification requirements."
    },
    "reference": "IFRS 18 — categories",
    "difficulty": "easy",
    "examDomain": "Required categories"
  },
  {
    "id": "ifrs-depthb-ifrs18-02",
    "track": "IFRS",
    "topic": "IFRS 18 — Defined subtotal",
    "question": {
      "ar": "ما المجموع الفرعي المحدد بجانب الربح التشغيلي؟",
      "en": "Which defined subtotal is required in addition to operating profit?"
    },
    "choices": {
      "ar": [
        "الربح قبل التمويل وضرائب الدخل",
        "EBITDA دائماً",
        "صافي المبيعات",
        "رأس المال العامل"
      ],
      "en": [
        "Profit before financing and income taxes",
        "Always EBITDA",
        "Net sales",
        "Working capital"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يتطلب IFRS 18 عرض الربح التشغيلي والربح قبل التمويل وضرائب الدخل ضمن المجاميع المحددة.",
      "en": "IFRS 18 requires operating profit and profit before financing and income taxes among defined subtotals."
    },
    "reference": "IFRS 18 — subtotals",
    "difficulty": "easy",
    "examDomain": "Defined subtotal"
  },
  {
    "id": "ifrs-depthb-ifrs18-03",
    "track": "IFRS",
    "topic": "IFRS 18 — Investing category",
    "question": {
      "ar": "بصورة عامة، ما الذي قد يدخل فئة الاستثمار؟",
      "en": "What may generally fall within the investing category?"
    },
    "choices": {
      "ar": [
        "الدخل والمصروفات من أصول تولد عائداً بصورة فردية ومستقلة إلى حد كبير عن موارد المنشأة الأخرى",
        "كل رواتب الموظفين",
        "كل تكاليف التمويل",
        "ضريبة الدخل"
      ],
      "en": [
        "Income/expenses from assets generating returns individually and largely independently of other resources",
        "All payroll",
        "All finance costs",
        "Income tax"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "فئة الاستثمار تلتقط عوائد بعض الأصول التي تولد عوائد مستقلة إلى حد كبير، مع قواعد خاصة.",
      "en": "The investing category captures returns from certain assets generating largely independent returns, subject to specific rules."
    },
    "reference": "IFRS 18 — investing category",
    "difficulty": "intermediate",
    "examDomain": "Investing category"
  },
  {
    "id": "ifrs-depthb-ifrs18-04",
    "track": "IFRS",
    "topic": "IFRS 18 — Financing category",
    "question": {
      "ar": "ما الهدف العام لفئة التمويل؟",
      "en": "What is the broad purpose of the financing category?"
    },
    "choices": {
      "ar": [
        "عرض آثار الالتزامات المستخدمة لتمويل المنشأة وفق القواعد المحددة",
        "عرض تكلفة المخزون",
        "عرض الإيرادات فقط",
        "عرض الضرائب"
      ],
      "en": [
        "Present effects of liabilities used to finance the entity under specified rules",
        "Present inventory cost",
        "Present revenue only",
        "Present taxes"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "فئة التمويل تفصل بعض آثار التمويل عن التشغيل والاستثمار وفق تعريفات المعيار.",
      "en": "The financing category separates specified financing effects from operating and investing under the standard's rules."
    },
    "reference": "IFRS 18 — financing category",
    "difficulty": "intermediate",
    "examDomain": "Financing category"
  },
  {
    "id": "ifrs-depthb-ifrs18-05",
    "track": "IFRS",
    "topic": "IFRS 18 — Main business activities",
    "question": {
      "ar": "لماذا يهم تحديد ما إذا كان الاستثمار أو تقديم التمويل للعملاء نشاطاً رئيسياً؟",
      "en": "Why does it matter whether investing or providing financing to customers is a main business activity?"
    },
    "choices": {
      "ar": [
        "لأنه قد يغير تصنيف بعض بنود الدخل والمصروف بين التشغيل والاستثمار والتمويل",
        "لتحديد الضريبة فقط",
        "لتحديد المخزون",
        "لا يؤثر"
      ],
      "en": [
        "Because it can change classification of some income/expenses among operating, investing and financing",
        "Tax only",
        "Inventory only",
        "No effect"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IFRS 18 يطبق قواعد خاصة على منشآت يكون الاستثمار أو التمويل للعملاء نشاطاً رئيسياً لها.",
      "en": "IFRS 18 has special classification rules for entities whose main business includes investing or providing financing to customers."
    },
    "reference": "IFRS 18 — specified main business activities",
    "difficulty": "hard",
    "examDomain": "Main business activities"
  },
  {
    "id": "ifrs-depthb-ifrs18-06",
    "track": "IFRS",
    "topic": "IFRS 18 — MPM public communications",
    "question": {
      "ar": "حتى يكون المقياس MPM، أين يجب أن تستخدمه الإدارة؟",
      "en": "For a measure to qualify as an MPM, where must management use it?"
    },
    "choices": {
      "ar": [
        "في الاتصالات العامة خارج القوائم المالية ضمن شروط التعريف",
        "في تقرير داخلي سري فقط",
        "في دفتر الأستاذ",
        "في الإقرار الضريبي فقط"
      ],
      "en": [
        "In public communications outside the financial statements, subject to the definition",
        "Only in a confidential internal report",
        "In the ledger",
        "Only in a tax return"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "استخدام المقياس في الاتصالات العامة عنصر من تعريف MPM.",
      "en": "Use in public communications outside financial statements is part of the MPM definition."
    },
    "reference": "IFRS 18.117",
    "difficulty": "hard",
    "examDomain": "MPM public communications"
  },
  {
    "id": "ifrs-depthb-ifrs18-07",
    "track": "IFRS",
    "topic": "IFRS 18 — MPM tax effect",
    "question": {
      "ar": "هل تتضمن إفصاحات MPM معلومات عن أثر ضريبة الدخل والبنود غير المسيطرة المرتبطة بعناصر التسوية؟",
      "en": "Do MPM disclosures include information about income-tax effects and non-controlling interests related to reconciling items?"
    },
    "choices": {
      "ar": [
        "نعم، ضمن المتطلبات ذات الصلة",
        "لا أبداً",
        "فقط الضريبة دون NCI",
        "فقط NCI"
      ],
      "en": [
        "Yes, under the relevant requirements",
        "Never",
        "Tax only, no NCI",
        "NCI only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "إفصاح MPM يتطلب معلومات تساعد على فهم التسوية، بما فيها آثار ضريبية ومصالح غير مسيطرة وفق المتطلبات.",
      "en": "MPM disclosures include information supporting the reconciliation, including tax and NCI effects under the requirements."
    },
    "reference": "IFRS 18 — MPM disclosures",
    "difficulty": "hard",
    "examDomain": "MPM tax effect"
  },
  {
    "id": "ifrs-depthb-ifrs18-08",
    "track": "IFRS",
    "topic": "IFRS 18 — Expense presentation",
    "question": {
      "ar": "على أي أساس قد تعرض المصروفات التشغيلية؟",
      "en": "On what basis may operating expenses be presented?"
    },
    "choices": {
      "ar": [
        "بالطبيعة أو الوظيفة أو مزيج يعطي المعلومات الأكثر فائدة وفق المتطلبات",
        "بالنقد فقط",
        "حسب المورد",
        "حسب العملة"
      ],
      "en": [
        "By nature, function, or a mixed presentation that provides the most useful information under the requirements",
        "Cash only",
        "By supplier",
        "By currency"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IFRS 18 يشدد على اختيار عرض يحقق أفضل معلومات مفيدة مع إفصاحات إضافية عند استخدام الوظيفة.",
      "en": "IFRS 18 strengthens requirements for choosing nature/function/mixed presentation and related disclosures."
    },
    "reference": "IFRS 18 — operating expenses",
    "difficulty": "intermediate",
    "examDomain": "Expense presentation"
  },
  {
    "id": "ifrs-depthb-ifrs18-09",
    "track": "IFRS",
    "topic": "IFRS 18 — Specified expenses by nature",
    "question": {
      "ar": "عند عرض مصروفات تشغيلية حسب الوظيفة، ما نوع الإفصاح الإضافي الذي يعززه IFRS 18؟",
      "en": "When operating expenses are presented by function, what additional disclosure does IFRS 18 strengthen?"
    },
    "choices": {
      "ar": [
        "معلومات عن مصروفات محددة حسب الطبيعة",
        "كل أسماء الموظفين",
        "كل الموردين",
        "كل حسابات البنوك"
      ],
      "en": [
        "Information about specified expenses by nature",
        "All employee names",
        "All suppliers",
        "All bank accounts"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يتطلب المعيار معلومات محددة عن بعض المصروفات حسب الطبيعة عندما تستخدم طريقة الوظيفة.",
      "en": "The standard requires specified nature-based expense information when function presentation is used."
    },
    "reference": "IFRS 18 — expenses by nature",
    "difficulty": "hard",
    "examDomain": "Specified expenses by nature"
  },
  {
    "id": "ifrs-depthb-ifrs18-10",
    "track": "IFRS",
    "topic": "IFRS 18 — Cash flow indirect method",
    "question": {
      "ar": "من أي مجموع يبدأ الأسلوب غير المباشر للتدفقات التشغيلية بعد تعديلات IAS 7 المرتبطة بـIFRS 18؟",
      "en": "Which subtotal is the starting point for the indirect method of operating cash flows after IFRS 18-related IAS 7 amendments?"
    },
    "choices": {
      "ar": [
        "الربح أو الخسارة التشغيلية",
        "صافي المبيعات",
        "EBITDA دائماً",
        "رأس المال العامل"
      ],
      "en": [
        "Operating profit or loss",
        "Net sales",
        "Always EBITDA",
        "Working capital"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "عدّل IFRS 18 IAS 7 ليتطلب استخدام الربح التشغيلي كنقطة بدء للطريقة غير المباشرة.",
      "en": "IFRS 18 amended IAS 7 to require operating profit or loss as the indirect-method starting point."
    },
    "reference": "IAS 7 as amended by IFRS 18",
    "difficulty": "hard",
    "examDomain": "Cash flow indirect method"
  },
  {
    "id": "ifrs-depthb-ifrs18-11",
    "track": "IFRS",
    "topic": "IFRS 18 — Transition",
    "question": {
      "ar": "هل يتطلب IFRS 18 تطبيقاً بأثر رجعي عند الانتقال وفق متطلباته؟",
      "en": "Does IFRS 18 require retrospective application on transition under its requirements?"
    },
    "choices": {
      "ar": [
        "نعم، مع معلومات انتقالية محددة",
        "لا، مستقبلي فقط",
        "اختياري بالكامل",
        "فقط للشركات المدرجة"
      ],
      "en": [
        "Yes, with specified transition information",
        "No, prospective only",
        "Entirely optional",
        "Listed entities only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IFRS 18 يتضمن تطبيقاً بأثر رجعي ومتطلبات انتقالية للمعلومات المقارنة.",
      "en": "IFRS 18 includes retrospective application and specified transition information for comparatives."
    },
    "reference": "IFRS 18 — transition",
    "difficulty": "intermediate",
    "examDomain": "Transition"
  },
  {
    "id": "ifrs-depthb-ias12-01",
    "track": "IFRS",
    "topic": "IAS 12 — Taxable temporary difference",
    "question": {
      "ar": "إذا كانت القيمة الدفترية لأصل أكبر من أساسه الضريبي، فما النتيجة المعتادة؟",
      "en": "If an asset's carrying amount exceeds its tax base, what usually results?"
    },
    "choices": {
      "ar": [
        "فرق مؤقت خاضع للضريبة",
        "فرق قابل للخصم",
        "لا فرق",
        "إيراد مؤجل"
      ],
      "en": [
        "Taxable temporary difference",
        "Deductible temporary difference",
        "No difference",
        "Deferred revenue"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "استرداد الأصل سيولد عادةً مبالغ خاضعة للضريبة تفوق الخصم الضريبي المتاح.",
      "en": "Recovery generally produces taxable amounts exceeding future tax deductions."
    },
    "reference": "IAS 12 — taxable temporary differences",
    "difficulty": "easy",
    "examDomain": "Taxable temporary difference"
  },
  {
    "id": "ifrs-depthb-ias12-02",
    "track": "IFRS",
    "topic": "IAS 12 — Deductible temporary difference",
    "question": {
      "ar": "إذا كانت القيمة الدفترية لالتزام أكبر من أساسه الضريبي، ماذا قد ينشأ؟",
      "en": "If a liability's carrying amount exceeds its tax base, what may arise?"
    },
    "choices": {
      "ar": [
        "فرق مؤقت قابل للخصم",
        "فرق خاضع للضريبة دائماً",
        "لا فرق",
        "شهرة"
      ],
      "en": [
        "Deductible temporary difference",
        "Always taxable difference",
        "No difference",
        "Goodwill"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تسوية الالتزام قد تولد خصماً ضريبياً مستقبلياً، ما ينتج فرقاً قابلاً للخصم.",
      "en": "Settlement may create future tax deductions, producing a deductible temporary difference."
    },
    "reference": "IAS 12 — deductible temporary differences",
    "difficulty": "easy",
    "examDomain": "Deductible temporary difference"
  },
  {
    "id": "ifrs-depthb-ias12-03",
    "track": "IFRS",
    "topic": "IAS 12 — Initial recognition",
    "question": {
      "ar": "هل توجد استثناءات محددة للاعتراف بالضريبة المؤجلة عند الاعتراف الأولي ببعض المعاملات؟",
      "en": "Are there specified exceptions to deferred-tax recognition on initial recognition of some transactions?"
    },
    "choices": {
      "ar": [
        "نعم",
        "لا أبداً",
        "فقط للبنوك",
        "فقط للمخزون"
      ],
      "en": [
        "Yes",
        "Never",
        "Banks only",
        "Inventory only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IAS 12 يتضمن استثناءات محددة، وقد عُدلت قواعد المعاملات التي تنشئ فروقاً متساوية خاضعة وقابلة للخصم.",
      "en": "IAS 12 contains specified exceptions, including updated requirements for transactions creating equal taxable and deductible differences."
    },
    "reference": "IAS 12 — initial recognition",
    "difficulty": "hard",
    "examDomain": "Initial recognition"
  },
  {
    "id": "ifrs-depthb-ias12-04",
    "track": "IFRS",
    "topic": "IAS 12 — Business combinations",
    "question": {
      "ar": "كيف تؤثر الضريبة المؤجلة في تجميع الأعمال عادةً؟",
      "en": "How does deferred tax generally affect a business combination?"
    },
    "choices": {
      "ar": [
        "تعترف بها كجزء من محاسبة الأصول والالتزامات المحددة وقد تؤثر في الشهرة",
        "تتجاهل دائماً",
        "تعالج كمخزون",
        "تسجل كإيراد"
      ],
      "en": [
        "Recognised as part of identifiable assets/liabilities and may affect goodwill",
        "Always ignored",
        "Inventory",
        "Revenue"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الضريبة المؤجلة على الفروق المؤقتة في تجميع الأعمال تدخل في محاسبة الاستحواذ وتؤثر في الشهرة/ربح الشراء.",
      "en": "Deferred tax on temporary differences is recognised in acquisition accounting and can affect goodwill/bargain purchase."
    },
    "reference": "IAS 12 — business combinations",
    "difficulty": "intermediate",
    "examDomain": "Business combinations"
  },
  {
    "id": "ifrs-depthb-ias12-05",
    "track": "IFRS",
    "topic": "IAS 12 — Unused credits",
    "question": {
      "ar": "كيف يعالج أصل ضريبي مؤجل عن ائتمانات ضريبية غير مستخدمة؟",
      "en": "How is a deferred tax asset for unused tax credits treated?"
    },
    "choices": {
      "ar": [
        "يعترف بقدر احتمال توفر أرباح ضريبية يمكن استخدام الائتمانات مقابلها",
        "يعترف كاملاً دائماً",
        "لا يعترف أبداً",
        "كأصل مالي بالقيمة العادلة"
      ],
      "en": [
        "Recognised to extent probable taxable profit will be available for utilisation",
        "Always in full",
        "Never",
        "As FVTPL asset"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "مثل الخسائر الضريبية، يحتاج الاعتراف دعماً لاحتمال الاستفادة المستقبلية.",
      "en": "Like tax losses, recognition requires support for probable future utilisation."
    },
    "reference": "IAS 12 — unused tax credits",
    "difficulty": "intermediate",
    "examDomain": "Unused credits"
  },
  {
    "id": "ifrs-depthb-ias12-06",
    "track": "IFRS",
    "topic": "IAS 12 — Rate changes",
    "question": {
      "ar": "أي معدل يستخدم لقياس الضريبة المؤجلة؟",
      "en": "Which rate is used to measure deferred tax?"
    },
    "choices": {
      "ar": [
        "المعدل المتوقع عند عكس الفرق بناءً على معدلات مقررة أو مقررة فعلياً في تاريخ التقرير",
        "معدل السنة السابقة دائماً",
        "معدل الفائدة",
        "معدل التضخم"
      ],
      "en": [
        "Rate expected on reversal based on enacted/substantively enacted rates at reporting date",
        "Always prior-year rate",
        "Interest rate",
        "Inflation rate"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "القياس يستخدم المعدلات المتوقعة عند الاسترداد أو التسوية وفق القوانين المعتمدة أو شبه المعتمدة.",
      "en": "Measurement uses rates expected at recovery/settlement based on enacted or substantively enacted law."
    },
    "reference": "IAS 12 — measurement",
    "difficulty": "intermediate",
    "examDomain": "Rate changes"
  },
  {
    "id": "ifrs-depthb-ias12-07",
    "track": "IFRS",
    "topic": "IAS 12 — Investment property",
    "question": {
      "ar": "إذا قيس عقار استثماري بالقيمة العادلة وفق IAS 40، ما الافتراض القابل للدحض في IAS 12 بشأن الاسترداد؟",
      "en": "For investment property measured at fair value under IAS 40, what rebuttable presumption does IAS 12 use about recovery?"
    },
    "choices": {
      "ar": [
        "الاسترداد من خلال البيع",
        "الاسترداد من خلال الاستخدام فقط",
        "لا استرداد",
        "من خلال الإهلاك فقط"
      ],
      "en": [
        "Recovery through sale",
        "Recovery through use only",
        "No recovery",
        "Depreciation only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IAS 12 يتضمن افتراضاً قابلاً للدحض أن القيمة الدفترية للعقار الاستثماري بالقيمة العادلة ستسترد من خلال البيع.",
      "en": "IAS 12 includes a rebuttable presumption that fair-valued investment property is recovered through sale."
    },
    "reference": "IAS 12 — recovery of investment property",
    "difficulty": "hard",
    "examDomain": "Investment property"
  },
  {
    "id": "ifrs-depthb-ias12-08",
    "track": "IFRS",
    "topic": "IAS 12 — Offsetting",
    "question": {
      "ar": "متى يجوز مقاصة أصول والتزامات الضريبة المؤجلة؟",
      "en": "When may deferred tax assets and liabilities be offset?"
    },
    "choices": {
      "ar": [
        "عند وجود حق قانوني لمقاصة الضرائب الجارية وارتباطها بنفس السلطة الضريبية مع استيفاء الشروط",
        "دائماً",
        "أبداً",
        "إذا كانت العملة واحدة فقط"
      ],
      "en": [
        "When there is a legally enforceable right to offset current tax and they relate to the same tax authority under required conditions",
        "Always",
        "Never",
        "Only same currency"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "المقاصة مشروطة بحق قانوني وعلاقة بالسلطة الضريبية/المنشآت وفق التفاصيل.",
      "en": "Offsetting is conditional on legal rights and same-tax-authority/entity requirements."
    },
    "reference": "IAS 12 — offsetting",
    "difficulty": "hard",
    "examDomain": "Offsetting"
  },
  {
    "id": "ifrs-depthb-ias12-09",
    "track": "IFRS",
    "topic": "IAS 12 — Outside profit or loss",
    "question": {
      "ar": "إذا اعترف بمعاملة مباشرة في حقوق الملكية، أين يعترف بأثرها الضريبي المرتبط؟",
      "en": "If a transaction is recognised directly in equity, where is its related tax effect generally recognised?"
    },
    "choices": {
      "ar": [
        "مباشرة في حقوق الملكية أيضاً",
        "في الإيراد دائماً",
        "في المخزون",
        "في النقد"
      ],
      "en": [
        "Directly in equity as well",
        "Always revenue",
        "Inventory",
        "Cash"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يتبع الأثر الضريبي موضع الاعتراف بالمعاملة الأساسية، مع تطبيق القواعد ذات الصلة.",
      "en": "The tax effect follows the location of the underlying item, subject to the relevant rules."
    },
    "reference": "IAS 12 — tax effects",
    "difficulty": "intermediate",
    "examDomain": "Outside profit or loss"
  },
  {
    "id": "ifrs-depthb-ias12-10",
    "track": "IFRS",
    "topic": "IAS 12 — Review DTA",
    "question": {
      "ar": "هل تراجع أصول الضريبة المؤجلة غير المعترف بها في كل تاريخ تقرير؟",
      "en": "Are unrecognised deferred tax assets reassessed at each reporting date?"
    },
    "choices": {
      "ar": [
        "نعم",
        "لا",
        "كل خمس سنوات",
        "فقط عند التدقيق"
      ],
      "en": [
        "Yes",
        "No",
        "Every five years",
        "Only on audit"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "قد تظهر أرباح مستقبلية تجعل الاعتراف مناسباً لاحقاً، لذلك تتم إعادة التقييم.",
      "en": "Future taxable profit prospects can change, so unrecognised deferred tax assets are reassessed."
    },
    "reference": "IAS 12 — reassessment",
    "difficulty": "easy",
    "examDomain": "Review DTA"
  },
  {
    "id": "ifrs-depthb-ias12-11",
    "track": "IFRS",
    "topic": "IAS 12 — Pillar Two",
    "question": {
      "ar": "هل يتضمن IAS 12 استثناءً مؤقتاً من محاسبة الضريبة المؤجلة المتعلقة بقواعد Pillar Two؟",
      "en": "Does IAS 12 include a temporary exception from deferred-tax accounting related to Pillar Two rules?"
    },
    "choices": {
      "ar": [
        "نعم",
        "لا",
        "فقط IFRS 9",
        "فقط IAS 2"
      ],
      "en": [
        "Yes",
        "No",
        "Only IFRS 9",
        "Only IAS 2"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تعديلات 2023 أدخلت استثناءً مؤقتاً وإفصاحات مرتبطة بقواعد الحد الأدنى العالمي للضريبة Pillar Two.",
      "en": "2023 amendments introduced a temporary exception and disclosures related to Pillar Two global minimum tax rules."
    },
    "reference": "IAS 12 — International Tax Reform—Pillar Two",
    "difficulty": "hard",
    "examDomain": "Pillar Two"
  },
  {
    "id": "ifrs-depthb-ias12-12",
    "track": "IFRS",
    "topic": "IAS 12 — Current tax recognition",
    "question": {
      "ar": "أين يعترف بالضريبة الجارية غير المدفوعة للفترة الحالية والسابقة؟",
      "en": "Where is unpaid current tax for current and prior periods recognised?"
    },
    "choices": {
      "ar": [
        "كالتزام",
        "كأصل ثابت",
        "كشهرة",
        "كمخزون"
      ],
      "en": [
        "As a liability",
        "Fixed asset",
        "Goodwill",
        "Inventory"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "إذا تجاوز المبلغ المدفوع المبلغ المستحق يظهر أصل، وإلا فالضريبة غير المدفوعة التزام.",
      "en": "Unpaid current tax is a liability; overpayments can create an asset."
    },
    "reference": "IAS 12 — current tax",
    "difficulty": "easy",
    "examDomain": "Current tax recognition"
  },
  {
    "id": "ifrs-depthb-ias16-01",
    "track": "IFRS",
    "topic": "IAS 16 — Dismantling cost",
    "question": {
      "ar": "هل يدخل التقدير الأولي لتكاليف تفكيك الأصل وإعادة الموقع ضمن تكلفته عند وجود التزام؟",
      "en": "Is the initial estimate of dismantling/restoration costs included in asset cost when an obligation exists?"
    },
    "choices": {
      "ar": [
        "نعم",
        "لا",
        "فقط عند البيع",
        "فقط للمخزون"
      ],
      "en": [
        "Yes",
        "No",
        "Only on disposal",
        "Only inventory"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يدخل التقدير الأولي لالتزام التفكيك والترميم ضمن تكلفة الأصل عندما تنطبق الشروط.",
      "en": "The initial estimate of dismantling/restoration obligations is included in asset cost when applicable."
    },
    "reference": "IAS 16 — elements of cost",
    "difficulty": "intermediate",
    "examDomain": "Dismantling cost"
  },
  {
    "id": "ifrs-depthb-ias16-02",
    "track": "IFRS",
    "topic": "IAS 16 — Recognition of replacements",
    "question": {
      "ar": "عند استبدال جزء مهم من أصل واستيفاء الاعتراف، ماذا يحدث للقيمة الدفترية للجزء القديم؟",
      "en": "When a significant component is replaced and recognition criteria are met, what happens to the old component's carrying amount?"
    },
    "choices": {
      "ar": [
        "يتم إلغاؤها من الدفاتر",
        "تبقى دائماً",
        "تتحول لمخزون تلقائياً",
        "تضاف للجديد"
      ],
      "en": [
        "Derecognised",
        "Always retained",
        "Automatically inventory",
        "Added to new component"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تضاف تكلفة الاستبدال المؤهلة وتلغى القيمة الدفترية للجزء المستبدل وفق قواعد الإزالة.",
      "en": "Qualifying replacement cost is capitalised and the replaced component is derecognised."
    },
    "reference": "IAS 16 — replacements",
    "difficulty": "intermediate",
    "examDomain": "Recognition of replacements"
  },
  {
    "id": "ifrs-depthb-ias16-03",
    "track": "IFRS",
    "topic": "IAS 16 — Major inspections",
    "question": {
      "ar": "كيف تعالج تكلفة فحص رئيسي دوري إذا استوفت شروط الاعتراف؟",
      "en": "How is a major periodic inspection cost treated if recognition criteria are met?"
    },
    "choices": {
      "ar": [
        "ترسمل كجزء بديل وتلغى القيمة المتبقية للفحص السابق",
        "مصروف دائماً",
        "شهرة",
        "مخزون"
      ],
      "en": [
        "Capitalised as a replacement component and remaining carrying amount of prior inspection is derecognised",
        "Always expense",
        "Goodwill",
        "Inventory"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الفحوص الرئيسية تعامل كمكونات مستبدلة عند استيفاء الاعتراف.",
      "en": "Major inspections are accounted for as replacement components when recognition criteria are met."
    },
    "reference": "IAS 16 — major inspections",
    "difficulty": "hard",
    "examDomain": "Major inspections"
  },
  {
    "id": "ifrs-depthb-ias16-04",
    "track": "IFRS",
    "topic": "IAS 16 — Cost model",
    "question": {
      "ar": "ما القياس اللاحق تحت نموذج التكلفة؟",
      "en": "What is subsequent measurement under the cost model?"
    },
    "choices": {
      "ar": [
        "التكلفة ناقص مجمع الإهلاك وخسائر الانخفاض",
        "القيمة العادلة دائماً",
        "NRV",
        "القيمة الاسمية"
      ],
      "en": [
        "Cost less accumulated depreciation and impairment losses",
        "Always fair value",
        "NRV",
        "Nominal value"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "نموذج التكلفة يحتفظ بالتكلفة بعد الإهلاك والانخفاض المتراكمين.",
      "en": "The cost model carries assets at cost less accumulated depreciation and impairment."
    },
    "reference": "IAS 16 — cost model",
    "difficulty": "easy",
    "examDomain": "Cost model"
  },
  {
    "id": "ifrs-depthb-ias16-05",
    "track": "IFRS",
    "topic": "IAS 16 — Revaluation frequency",
    "question": {
      "ar": "كم مرة تجرى إعادة التقييم؟",
      "en": "How often are revaluations performed?"
    },
    "choices": {
      "ar": [
        "بتكرار كافٍ حتى لا تختلف القيمة الدفترية جوهرياً عن القيمة العادلة",
        "كل عشر سنوات دائماً",
        "مرة واحدة فقط",
        "كل شهر"
      ],
      "en": [
        "With sufficient regularity so carrying amount does not differ materially from fair value",
        "Always every ten years",
        "Only once",
        "Monthly"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "التكرار يعتمد على تقلب القيمة العادلة وليس فترة ثابتة لجميع الأصول.",
      "en": "Frequency depends on fair-value volatility rather than a single fixed interval."
    },
    "reference": "IAS 16 — revaluation",
    "difficulty": "intermediate",
    "examDomain": "Revaluation frequency"
  },
  {
    "id": "ifrs-depthb-ias16-06",
    "track": "IFRS",
    "topic": "IAS 16 — Revaluation increase",
    "question": {
      "ar": "أين يعترف بزيادة إعادة التقييم عادةً؟",
      "en": "Where is a revaluation increase generally recognised?"
    },
    "choices": {
      "ar": [
        "في OCI وتتراكم في فائض إعادة التقييم، مع استثناء عكس انخفاض سابق في الربح أو الخسارة",
        "دائماً في الإيراد",
        "في المخزون",
        "في النقد"
      ],
      "en": [
        "In OCI and accumulated in revaluation surplus, except to reverse prior decrease recognised in profit or loss",
        "Always revenue",
        "Inventory",
        "Cash"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "القاعدة OCI مع استثناء بقدر عكس انخفاض سابق لنفس الأصل سبق الاعتراف به في الربح أو الخسارة.",
      "en": "The general rule is OCI, except to the extent it reverses a prior decrease recognised in profit or loss."
    },
    "reference": "IAS 16 — revaluation increase",
    "difficulty": "hard",
    "examDomain": "Revaluation increase"
  },
  {
    "id": "ifrs-depthb-ias16-07",
    "track": "IFRS",
    "topic": "IAS 16 — Revaluation decrease",
    "question": {
      "ar": "أين يعترف بانخفاض إعادة التقييم عادةً؟",
      "en": "Where is a revaluation decrease generally recognised?"
    },
    "choices": {
      "ar": [
        "في الربح أو الخسارة، إلا بقدر وجود فائض إعادة تقييم لذلك الأصل",
        "دائماً OCI",
        "كمخزون",
        "لا يعترف"
      ],
      "en": [
        "Profit or loss, except to extent of existing revaluation surplus for that asset",
        "Always OCI",
        "Inventory",
        "Not recognised"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الانخفاض يذهب للربح أو الخسارة ما لم يوجد رصيد فائض إعادة تقييم ذي صلة يمكن امتصاصه.",
      "en": "A decrease goes to profit or loss except to the extent an existing revaluation surplus for that asset absorbs it."
    },
    "reference": "IAS 16 — revaluation decrease",
    "difficulty": "hard",
    "examDomain": "Revaluation decrease"
  },
  {
    "id": "ifrs-depthb-ias16-08",
    "track": "IFRS",
    "topic": "IAS 16 — Depreciable amount",
    "question": {
      "ar": "كيف يحسب المبلغ القابل للإهلاك؟",
      "en": "How is depreciable amount calculated?"
    },
    "choices": {
      "ar": [
        "التكلفة أو المبلغ البديل ناقص القيمة المتبقية",
        "التكلفة زائد القيمة المتبقية",
        "القيمة العادلة فقط",
        "النقد"
      ],
      "en": [
        "Cost or substituted amount less residual value",
        "Cost plus residual value",
        "Fair value only",
        "Cash"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "المبلغ القابل للإهلاك هو القيمة الدفترية الأساسية للإهلاك بعد طرح القيمة المتبقية.",
      "en": "Depreciable amount is cost/substituted amount less residual value."
    },
    "reference": "IAS 16 — depreciable amount",
    "difficulty": "easy",
    "examDomain": "Depreciable amount"
  },
  {
    "id": "ifrs-depthb-ias16-09",
    "track": "IFRS",
    "topic": "IAS 16 — Land and buildings",
    "question": {
      "ar": "هل يعالج الأرض والمبنى كمكون واحد لأغراض الإهلاك عادةً؟",
      "en": "Are land and buildings normally treated as one component for depreciation?"
    },
    "choices": {
      "ar": [
        "لا، يعالجان بشكل منفصل حتى لو اشتريا معاً",
        "نعم دائماً",
        "فقط إذا كانا مؤجرين",
        "لا يهلك أي منهما"
      ],
      "en": [
        "No, they are accounted for separately even if acquired together",
        "Always yes",
        "Only if leased",
        "Neither depreciates"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الأرض غالباً غير محددة العمر بينما المبنى يستهلك، لذلك يفصلان.",
      "en": "Land usually has an indefinite life while buildings depreciate, so they are accounted for separately."
    },
    "reference": "IAS 16 — land and buildings",
    "difficulty": "intermediate",
    "examDomain": "Land and buildings"
  },
  {
    "id": "ifrs-depthb-ias16-10",
    "track": "IFRS",
    "topic": "IAS 16 — Idle assets",
    "question": {
      "ar": "هل يتوقف إهلاك الأصل لمجرد توقفه مؤقتاً عن الاستخدام؟",
      "en": "Does depreciation cease merely because an asset becomes temporarily idle?"
    },
    "choices": {
      "ar": [
        "لا، إلا إذا كان مهلكاً بالكامل أو صنف محتفظاً به للبيع وفق المتطلبات",
        "نعم فوراً",
        "فقط إذا كان شهرين",
        "حسب رغبة الإدارة"
      ],
      "en": [
        "No, unless fully depreciated or classified as held for sale under relevant rules",
        "Yes immediately",
        "Only after two months",
        "Management choice"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الإهلاك لا يتوقف لمجرد الخمول المؤقت تحت طريقة الزمن.",
      "en": "Depreciation does not cease merely because an asset is idle under time-based methods."
    },
    "reference": "IAS 16 — depreciation",
    "difficulty": "hard",
    "examDomain": "Idle assets"
  },
  {
    "id": "ifrs-depthb-ias16-11",
    "track": "IFRS",
    "topic": "IAS 16 — Gain on disposal",
    "question": {
      "ar": "كيف يحسب الربح أو الخسارة عند إزالة أصل؟",
      "en": "How is gain or loss on derecognition determined?"
    },
    "choices": {
      "ar": [
        "الفرق بين صافي متحصلات التصرف والقيمة الدفترية",
        "سعر البيع فقط",
        "التكلفة الأصلية فقط",
        "مجمع الإهلاك فقط"
      ],
      "en": [
        "Difference between net disposal proceeds and carrying amount",
        "Selling price only",
        "Original cost only",
        "Accumulated depreciation only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الفرق بين صافي المقابل والقيمة الدفترية يعترف به في الربح أو الخسارة عادةً.",
      "en": "The difference between net proceeds and carrying amount is generally recognised in profit or loss."
    },
    "reference": "IAS 16 — derecognition",
    "difficulty": "easy",
    "examDomain": "Gain on disposal"
  },
  {
    "id": "ifrs-depthb-ias21-01",
    "track": "IFRS",
    "topic": "IAS 21 — Foreign currency transaction",
    "question": {
      "ar": "ما المعاملة بعملة أجنبية؟",
      "en": "What is a foreign currency transaction?"
    },
    "choices": {
      "ar": [
        "معاملة مقومة أو تتطلب تسوية بعملة غير العملة الوظيفية",
        "أي معاملة دولية فقط",
        "أي معاملة نقدية",
        "أي معاملة ضريبية"
      ],
      "en": [
        "Transaction denominated or requiring settlement in a currency other than functional currency",
        "Any international transaction only",
        "Any cash transaction",
        "Any tax transaction"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "المعيار يركز على العملة التي تقوّم بها المعاملة مقارنة بالعملة الوظيفية.",
      "en": "The focus is the currency in which the transaction is denominated relative to functional currency."
    },
    "reference": "IAS 21 — foreign currency transactions",
    "difficulty": "easy",
    "examDomain": "Foreign currency transaction"
  },
  {
    "id": "ifrs-depthb-ias21-02",
    "track": "IFRS",
    "topic": "IAS 21 — Monetary item",
    "question": {
      "ar": "أي بند يعد نقدياً؟",
      "en": "Which item is monetary?"
    },
    "choices": {
      "ar": [
        "ذمم مدينة بمبلغ ثابت من العملة",
        "مخزون",
        "أصل ثابت بالتكلفة",
        "دفعة مقدمة لخدمة"
      ],
      "en": [
        "Receivable for a fixed amount of currency",
        "Inventory",
        "PP&E at cost",
        "Prepayment for service"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "البند النقدي هو حق أو التزام لاستلام/دفع عدد ثابت أو قابل للتحديد من وحدات العملة.",
      "en": "A monetary item is a right/obligation to receive/pay a fixed or determinable number of currency units."
    },
    "reference": "IAS 21 — monetary items",
    "difficulty": "easy",
    "examDomain": "Monetary item"
  },
  {
    "id": "ifrs-depthb-ias21-03",
    "track": "IFRS",
    "topic": "IAS 21 — Advance consideration",
    "question": {
      "ar": "هل الدفعة المقدمة لشراء خدمة تعد عادةً بنداً نقدياً إذا لم يكن هناك حق في استرداد مبلغ نقدي ثابت؟",
      "en": "Is a prepayment for a service generally monetary if there is no right to receive a fixed amount of cash?"
    },
    "choices": {
      "ar": [
        "لا",
        "نعم دائماً",
        "فقط إذا كانت أجنبية",
        "فقط بعد سنة"
      ],
      "en": [
        "No",
        "Always yes",
        "Only if foreign",
        "Only after one year"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الدفعة المقدمة للحصول على خدمة غير نقدية غالباً بند غير نقدي.",
      "en": "A prepayment for a non-monetary service is generally a non-monetary item."
    },
    "reference": "IAS 21 — monetary vs non-monetary",
    "difficulty": "hard",
    "examDomain": "Advance consideration"
  },
  {
    "id": "ifrs-depthb-ias21-04",
    "track": "IFRS",
    "topic": "IAS 21 — Non-monetary fair value",
    "question": {
      "ar": "إذا قيس بند غير نقدي بالقيمة العادلة بعملة أجنبية، أي سعر صرف يستخدم؟",
      "en": "If a non-monetary item is measured at fair value in a foreign currency, which exchange rate is used?"
    },
    "choices": {
      "ar": [
        "السعر في تاريخ قياس القيمة العادلة",
        "السعر التاريخي دائماً",
        "سعر الإقفال السابق",
        "متوسط عشر سنوات"
      ],
      "en": [
        "Rate at date when fair value is measured",
        "Always historical rate",
        "Prior closing rate",
        "Ten-year average"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الترجمة تتبع تاريخ قياس القيمة العادلة للبند غير النقدي.",
      "en": "Translation uses the exchange rate at the date fair value was measured."
    },
    "reference": "IAS 21 — non-monetary fair value",
    "difficulty": "intermediate",
    "examDomain": "Non-monetary fair value"
  },
  {
    "id": "ifrs-depthb-ias21-05",
    "track": "IFRS",
    "topic": "IAS 21 — Functional currency change",
    "question": {
      "ar": "إذا تغيرت العملة الوظيفية فعلياً بسبب تغير المعاملات والأحداث الأساسية، كيف يطبق التغيير؟",
      "en": "If functional currency genuinely changes because underlying transactions/events change, how is the change applied?"
    },
    "choices": {
      "ar": [
        "مستقبلياً من تاريخ التغيير",
        "بأثر رجعي دائماً",
        "لا يسمح بالتغيير",
        "كل نهاية شهر"
      ],
      "en": [
        "Prospectively from date of change",
        "Always retrospectively",
        "Change not allowed",
        "Every month-end"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تطبق إجراءات الترجمة على العملة الوظيفية الجديدة مستقبلياً من تاريخ التغيير.",
      "en": "Translation procedures for the new functional currency are applied prospectively from the change date."
    },
    "reference": "IAS 21 — change in functional currency",
    "difficulty": "hard",
    "examDomain": "Functional currency change"
  },
  {
    "id": "ifrs-depthb-ias21-06",
    "track": "IFRS",
    "topic": "IAS 21 — Foreign operation translation assets",
    "question": {
      "ar": "بأي سعر تترجم أصول والتزامات عملية أجنبية لعملة العرض؟",
      "en": "At what rate are assets and liabilities of a foreign operation translated into presentation currency?"
    },
    "choices": {
      "ar": [
        "سعر الإقفال في تاريخ التقرير",
        "السعر التاريخي دائماً",
        "متوسط السنة",
        "سعر بداية السنة"
      ],
      "en": [
        "Closing rate at reporting date",
        "Always historical rate",
        "Annual average",
        "Opening rate"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الأصول والالتزامات تترجم بسعر الإقفال عند كل تاريخ تقرير.",
      "en": "Assets and liabilities are translated at the closing rate at each reporting date."
    },
    "reference": "IAS 21 — foreign operation translation",
    "difficulty": "easy",
    "examDomain": "Foreign operation translation assets"
  },
  {
    "id": "ifrs-depthb-ias21-07",
    "track": "IFRS",
    "topic": "IAS 21 — Foreign operation income expenses",
    "question": {
      "ar": "كيف تترجم إيرادات ومصروفات عملية أجنبية عادةً؟",
      "en": "How are income and expenses of a foreign operation generally translated?"
    },
    "choices": {
      "ar": [
        "بأسعار تواريخ المعاملات، ويمكن استخدام متوسط مناسب إذا كان تقريباً معقولاً",
        "بسعر الإقفال دائماً مهما كانت التقلبات",
        "بسعر تاريخ التأسيس",
        "لا تترجم"
      ],
      "en": [
        "At transaction-date rates, with an appropriate average if it reasonably approximates them",
        "Always closing rate regardless of volatility",
        "Formation-date rate",
        "Not translated"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يمكن استخدام المتوسط كاختصار عملي إذا لم تكن الأسعار متقلبة بدرجة تجعل المتوسط غير ممثل.",
      "en": "An average may be used as a practical approximation when rates are not so volatile that it becomes unrepresentative."
    },
    "reference": "IAS 21 — translation of income and expenses",
    "difficulty": "intermediate",
    "examDomain": "Foreign operation income expenses"
  },
  {
    "id": "ifrs-depthb-ias21-08",
    "track": "IFRS",
    "topic": "IAS 21 — Goodwill foreign operation",
    "question": {
      "ar": "كيف تعامل الشهرة الناشئة عن اقتناء عملية أجنبية لأغراض الترجمة؟",
      "en": "How is goodwill arising on acquisition of a foreign operation treated for translation?"
    },
    "choices": {
      "ar": [
        "كأصل للعملية الأجنبية ويترجم بسعر الإقفال",
        "كأصل للشركة الأم بالعملة الأصلية دون ترجمة",
        "كمخزون",
        "كنقد"
      ],
      "en": [
        "As an asset of the foreign operation translated at closing rate",
        "As parent asset never translated",
        "Inventory",
        "Cash"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الشهرة وتعديلات القيمة العادلة تعامل كأصول/التزامات للعملية الأجنبية.",
      "en": "Goodwill and fair-value adjustments are treated as assets/liabilities of the foreign operation."
    },
    "reference": "IAS 21 — goodwill on foreign operations",
    "difficulty": "hard",
    "examDomain": "Goodwill foreign operation"
  },
  {
    "id": "ifrs-depthb-ias21-09",
    "track": "IFRS",
    "topic": "IAS 21 — Net investment",
    "question": {
      "ar": "أين تعرض فروق صرف بند نقدي يشكل جزءاً من صافي استثمار في عملية أجنبية في القوائم الموحدة؟",
      "en": "Where are exchange differences on a monetary item forming part of a net investment in a foreign operation presented in consolidated statements?"
    },
    "choices": {
      "ar": [
        "في OCI حتى التخلص من صافي الاستثمار وفق المتطلبات",
        "الربح أو الخسارة دائماً",
        "الإيراد",
        "المخزون"
      ],
      "en": [
        "In OCI until disposal of the net investment under the requirements",
        "Always profit or loss",
        "Revenue",
        "Inventory"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "في القوائم الموحدة تراكم هذه الفروق في OCI وتُعاد معالجتها عند التخلص وفق القواعد.",
      "en": "In consolidated statements such differences accumulate in OCI and are reclassified on disposal as required."
    },
    "reference": "IAS 21 — net investment",
    "difficulty": "hard",
    "examDomain": "Net investment"
  },
  {
    "id": "ifrs-depthb-ias21-10",
    "track": "IFRS",
    "topic": "IAS 21 — Severe exchangeability",
    "question": {
      "ar": "إذا كانت عملة غير قابلة للصرف إلى عملة أخرى في تاريخ القياس، ماذا يتطلب IAS 21 بعد تعديلات Lack of Exchangeability؟",
      "en": "If a currency is not exchangeable into another currency at the measurement date, what does IAS 21 require after Lack of Exchangeability amendments?"
    },
    "choices": {
      "ar": [
        "تقدير سعر صرف فوري يعكس السعر الذي كان سيطبق في معاملة منظمة بين مشاركين في السوق مع إفصاحات",
        "استخدام صفر",
        "استخدام سعر قديم دائماً",
        "إلغاء العملية"
      ],
      "en": [
        "Estimate a spot rate reflecting an orderly transaction between market participants and provide disclosures",
        "Use zero",
        "Always use an old rate",
        "Cancel transaction"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "التعديلات توفر إطاراً لتقييم القابلية للصرف وتقدير السعر عند غيابها مع إفصاحات.",
      "en": "The amendments provide a framework to assess exchangeability and estimate a spot rate when it is lacking, with disclosures."
    },
    "reference": "IAS 21 — Lack of Exchangeability",
    "difficulty": "hard",
    "examDomain": "Severe exchangeability"
  },
  {
    "id": "ifrs-depthb-ias21-11",
    "track": "IFRS",
    "topic": "IAS 21 — Exchange difference location",
    "question": {
      "ar": "إذا اعترف ربح أو خسارة بند غير نقدي في OCI، أين يعترف مكون سعر الصرف المرتبط؟",
      "en": "If a gain/loss on a non-monetary item is recognised in OCI, where is the related exchange component recognised?"
    },
    "choices": {
      "ar": [
        "في OCI أيضاً",
        "في الربح أو الخسارة دائماً",
        "في المخزون",
        "لا يعترف"
      ],
      "en": [
        "In OCI as well",
        "Always profit or loss",
        "Inventory",
        "Not recognised"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "مكون الصرف يتبع مكان الاعتراف بالربح أو الخسارة الأساسية للبند غير النقدي.",
      "en": "The exchange component follows the recognition location of the underlying non-monetary gain/loss."
    },
    "reference": "IAS 21 — non-monetary items",
    "difficulty": "intermediate",
    "examDomain": "Exchange difference location"
  },
  {
    "id": "ifrs-depthb-ias21-12",
    "track": "IFRS",
    "topic": "IAS 21 — Functional currency indicators",
    "question": {
      "ar": "ما مؤشر ثانوي قد يساعد في تحديد العملة الوظيفية؟",
      "en": "What secondary indicator may help determine functional currency?"
    },
    "choices": {
      "ar": [
        "العملة التي تُحتفظ بها عادةً المتحصلات من الأنشطة التشغيلية",
        "لون العملة",
        "جنسية المساهم الأكبر",
        "عملة موقع الويب"
      ],
      "en": [
        "Currency in which receipts from operating activities are usually retained",
        "Currency colour",
        "Nationality of largest shareholder",
        "Website currency"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "عند عدم وضوح المؤشرات الأساسية، تستخدم مؤشرات إضافية مثل عملة التمويل والاحتفاظ بالمتحصلات.",
      "en": "When primary indicators are mixed, additional indicators include financing currency and currency in which operating receipts are retained."
    },
    "reference": "IAS 21 — functional currency indicators",
    "difficulty": "intermediate",
    "examDomain": "Functional currency indicators"
  }
] satisfies ExamQuestion[];
