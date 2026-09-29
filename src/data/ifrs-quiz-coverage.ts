import type { ExamQuestion } from "@/lib/exam-bank";

/** Baseline coverage: two original educational questions for standards that lacked seed coverage. */
export const IFRS_COVERAGE_QUESTION_SEED = [
  {
    "id": "ifrs-cov-ifrs1-01",
    "track": "IFRS",
    "topic": "IFRS 1 — First-time adoption",
    "question": {
      "ar": "ما الهدف الرئيسي لـ IFRS 1؟",
      "en": "What is the main objective of IFRS 1?"
    },
    "choices": {
      "ar": [
        "توفير نقطة بداية شفافة وقابلة للمقارنة عند أول تطبيق IFRS",
        "قياس المخزون فقط",
        "إعداد إقرار ضريبي",
        "إلغاء القوائم المقارنة"
      ],
      "en": [
        "Provide a transparent and comparable starting point on first IFRS adoption",
        "Measure inventory only",
        "Prepare tax return",
        "Eliminate comparatives"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "المعيار ينظم الانتقال الأول إلى IFRS مع نقطة بداية واضحة وقابلة للمقارنة.",
      "en": "The standard governs first-time transition to IFRS with a clear, comparable starting point."
    },
    "reference": "IFRS 1",
    "difficulty": "easy",
    "examDomain": "First-time adoption"
  },
  {
    "id": "ifrs-cov-ifrs1-02",
    "track": "IFRS",
    "topic": "IFRS 1 — Opening statement",
    "question": {
      "ar": "ما القائمة المحورية في تاريخ الانتقال إلى IFRS؟",
      "en": "What is the key statement at the date of transition to IFRS?"
    },
    "choices": {
      "ar": [
        "قائمة مركز مالي افتتاحية وفق IFRS",
        "قائمة مبيعات",
        "ميزانية نقدية",
        "قائمة مشتريات"
      ],
      "en": [
        "Opening IFRS statement of financial position",
        "Sales statement",
        "Cash budget",
        "Purchase list"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يعد المتبني لأول مرة قائمة مركز مالي افتتاحية وفق IFRS في تاريخ الانتقال.",
      "en": "A first-time adopter prepares an opening IFRS statement of financial position at transition."
    },
    "reference": "IFRS 1",
    "difficulty": "intermediate",
    "examDomain": "Opening statement"
  },
  {
    "id": "ifrs-cov-ifrs2-01",
    "track": "IFRS",
    "topic": "IFRS 2 — Share-based payment",
    "question": {
      "ar": "ما الذي يغطيه IFRS 2؟",
      "en": "What does IFRS 2 cover?"
    },
    "choices": {
      "ar": [
        "معاملات الدفع على أساس الأسهم",
        "الإيجارات فقط",
        "ضرائب الدخل",
        "المخزون"
      ],
      "en": [
        "Share-based payment transactions",
        "Leases only",
        "Income taxes",
        "Inventory"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يعالج المعيار المعاملات التي تحصل فيها المنشأة على سلع أو خدمات مقابل أدوات حقوق ملكية أو مبالغ مرتبطة بقيمتها.",
      "en": "The standard addresses transactions where goods/services are received for equity instruments or amounts linked to their value."
    },
    "reference": "IFRS 2",
    "difficulty": "easy",
    "examDomain": "Share-based payment"
  },
  {
    "id": "ifrs-cov-ifrs2-02",
    "track": "IFRS",
    "topic": "IFRS 2 — Equity-settled",
    "question": {
      "ar": "في المعاملة المسددة بأدوات حقوق ملكية مع الموظفين، ما أساس القياس المعتاد؟",
      "en": "For an equity-settled transaction with employees, what is the usual measurement basis?"
    },
    "choices": {
      "ar": [
        "القيمة العادلة لأدوات حقوق الملكية في تاريخ المنح",
        "التكلفة التاريخية للسهم",
        "القيمة الاسمية فقط",
        "النقد المدفوع"
      ],
      "en": [
        "Fair value of equity instruments at grant date",
        "Historical cost of the share",
        "Nominal value only",
        "Cash paid"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "بالنسبة للموظفين يقاس عادةً بالقيمة العادلة لأدوات حقوق الملكية في تاريخ المنح.",
      "en": "For employees, measurement is generally based on the fair value of equity instruments at grant date."
    },
    "reference": "IFRS 2",
    "difficulty": "intermediate",
    "examDomain": "Equity-settled"
  },
  {
    "id": "ifrs-cov-ifrs5-01",
    "track": "IFRS",
    "topic": "IFRS 5 — Held for sale",
    "question": {
      "ar": "متى يصنف أصل غير متداول كمحتفظ به للبيع؟",
      "en": "When is a non-current asset classified as held for sale?"
    },
    "choices": {
      "ar": [
        "عندما تسترد قيمته أساساً من البيع ويكون البيع مرجحاً بدرجة عالية وتستوفى الشروط",
        "عند شرائه",
        "عند إهلاكه بالكامل",
        "عند وجود خسارة"
      ],
      "en": [
        "When recovery is principally through sale, the sale is highly probable and conditions are met",
        "On purchase",
        "When fully depreciated",
        "When a loss exists"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "التصنيف يتطلب أن يكون الاسترداد أساساً بالبيع وأن يكون البيع مرجحاً بدرجة عالية مع استيفاء الشروط.",
      "en": "Classification requires recovery principally through sale and a highly probable sale with required conditions met."
    },
    "reference": "IFRS 5",
    "difficulty": "easy",
    "examDomain": "Held for sale"
  },
  {
    "id": "ifrs-cov-ifrs5-02",
    "track": "IFRS",
    "topic": "IFRS 5 — Measurement",
    "question": {
      "ar": "بماذا يقاس الأصل المصنف محتفظاً به للبيع؟",
      "en": "How is an asset classified as held for sale measured?"
    },
    "choices": {
      "ar": [
        "الأقل من القيمة الدفترية والقيمة العادلة ناقص تكاليف البيع",
        "القيمة الدفترية فقط",
        "التكلفة التاريخية دائماً",
        "سعر الشراء"
      ],
      "en": [
        "Lower of carrying amount and fair value less costs to sell",
        "Carrying amount only",
        "Always historical cost",
        "Purchase price"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يستخدم المعيار الأقل من القيمة الدفترية والقيمة العادلة ناقص تكاليف البيع.",
      "en": "The standard uses the lower of carrying amount and fair value less costs to sell."
    },
    "reference": "IFRS 5",
    "difficulty": "intermediate",
    "examDomain": "Measurement"
  },
  {
    "id": "ifrs-cov-ifrs6-01",
    "track": "IFRS",
    "topic": "IFRS 6 — Exploration",
    "question": {
      "ar": "أي مرحلة يغطيها IFRS 6؟",
      "en": "Which phase is covered by IFRS 6?"
    },
    "choices": {
      "ar": [
        "استكشاف وتقييم الموارد المعدنية",
        "إنتاج المخزون العام",
        "الإيجارات",
        "ضرائب الدخل"
      ],
      "en": [
        "Exploration for and evaluation of mineral resources",
        "General inventory production",
        "Leases",
        "Income taxes"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يغطي المعيار نفقات الاستكشاف والتقييم للموارد المعدنية.",
      "en": "The standard covers exploration and evaluation expenditures for mineral resources."
    },
    "reference": "IFRS 6",
    "difficulty": "easy",
    "examDomain": "Exploration"
  },
  {
    "id": "ifrs-cov-ifrs6-02",
    "track": "IFRS",
    "topic": "IFRS 6 — Impairment",
    "question": {
      "ar": "عند وجود حقائق تشير لاحتمال عدم استرداد أصل استكشاف وتقييم، ماذا يحدث؟",
      "en": "What happens when facts suggest an exploration and evaluation asset may not be recoverable?"
    },
    "choices": {
      "ar": [
        "يختبر للانخفاض وفق متطلبات IFRS 6 وIAS 36 ذات الصلة",
        "يتجاهل الأمر",
        "يعاد تصنيفه نقداً",
        "يزاد تلقائياً"
      ],
      "en": [
        "It is tested for impairment under relevant IFRS 6/IAS 36 requirements",
        "Ignore it",
        "Reclassify to cash",
        "Automatically increase"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "وجود مؤشرات محددة يستدعي اختبار الانخفاض ومعالجة الخسارة وفق المتطلبات ذات الصلة.",
      "en": "Specified indicators trigger impairment testing and recognition under relevant requirements."
    },
    "reference": "IFRS 6",
    "difficulty": "intermediate",
    "examDomain": "Impairment"
  },
  {
    "id": "ifrs-cov-ifrs7-01",
    "track": "IFRS",
    "topic": "IFRS 7 — Disclosures",
    "question": {
      "ar": "ما محور IFRS 7؟",
      "en": "What is the focus of IFRS 7?"
    },
    "choices": {
      "ar": [
        "الإفصاحات عن الأدوات المالية ومخاطرها",
        "قياس المخزون",
        "عقود الإيجار",
        "الشهرة"
      ],
      "en": [
        "Disclosures about financial instruments and their risks",
        "Inventory measurement",
        "Lease contracts",
        "Goodwill"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يركز المعيار على أهمية الأدوات المالية وطبيعة ومدى المخاطر الناشئة عنها.",
      "en": "The standard focuses on the significance of financial instruments and the nature and extent of related risks."
    },
    "reference": "IFRS 7",
    "difficulty": "easy",
    "examDomain": "Disclosures"
  },
  {
    "id": "ifrs-cov-ifrs7-02",
    "track": "IFRS",
    "topic": "IFRS 7 — Risk disclosures",
    "question": {
      "ar": "أي مخاطر يطلب IFRS 7 معلومات عنها عادةً؟",
      "en": "Which risks are commonly addressed by IFRS 7 disclosures?"
    },
    "choices": {
      "ar": [
        "مخاطر الائتمان والسيولة والسوق",
        "مخاطر الطقس فقط",
        "مخاطر الموارد البشرية فقط",
        "مخاطر المخزون فقط"
      ],
      "en": [
        "Credit, liquidity and market risk",
        "Weather risk only",
        "HR risk only",
        "Inventory risk only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تشمل الإفصاحات عادةً مخاطر الائتمان والسيولة والسوق مع معلومات نوعية وكمية.",
      "en": "Disclosures generally cover credit, liquidity and market risks with qualitative and quantitative information."
    },
    "reference": "IFRS 7",
    "difficulty": "intermediate",
    "examDomain": "Risk disclosures"
  },
  {
    "id": "ifrs-cov-ifrs8-01",
    "track": "IFRS",
    "topic": "IFRS 8 — Operating segments",
    "question": {
      "ar": "على أي منظور يعتمد تحديد القطاعات التشغيلية؟",
      "en": "On what perspective is operating segment identification based?"
    },
    "choices": {
      "ar": [
        "التقارير الداخلية التي يراجعها متخذ القرار التشغيلي الرئيسي",
        "الخريطة الجغرافية فقط",
        "عدد الموظفين",
        "التصنيف الضريبي"
      ],
      "en": [
        "Internal reports reviewed by the chief operating decision maker",
        "Geography only",
        "Headcount",
        "Tax classification"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يعتمد IFRS 8 على منظور الإدارة والتقارير الداخلية التي يراجعها CODM.",
      "en": "IFRS 8 uses the management approach and internal reports reviewed by the CODM."
    },
    "reference": "IFRS 8",
    "difficulty": "easy",
    "examDomain": "Operating segments"
  },
  {
    "id": "ifrs-cov-ifrs8-02",
    "track": "IFRS",
    "topic": "IFRS 8 — Reportable segments",
    "question": {
      "ar": "لماذا توجد حدود كمية للقطاعات القابلة للتقرير؟",
      "en": "Why are quantitative thresholds used for reportable segments?"
    },
    "choices": {
      "ar": [
        "لتحديد القطاعات المهمة التي تعرض منفصلة وفق الإيراد أو الربح/الخسارة أو الأصول",
        "لتحديد الضريبة",
        "لإلغاء القطاعات الصغيرة دائماً",
        "لقياس الشهرة"
      ],
      "en": [
        "To identify significant segments reported separately based on revenue, profit/loss or assets",
        "To determine tax",
        "To always eliminate small segments",
        "To measure goodwill"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الحدود الكمية تساعد في تحديد القطاعات التي تستحق الإفصاح المنفصل.",
      "en": "Quantitative thresholds help identify segments warranting separate disclosure."
    },
    "reference": "IFRS 8",
    "difficulty": "intermediate",
    "examDomain": "Reportable segments"
  },
  {
    "id": "ifrs-cov-ifrs11-01",
    "track": "IFRS",
    "topic": "IFRS 11 — Joint arrangements",
    "question": {
      "ar": "ما النوعان الرئيسيان للترتيبات المشتركة؟",
      "en": "What are the two main types of joint arrangements?"
    },
    "choices": {
      "ar": [
        "عمليات مشتركة ومشروعات مشتركة",
        "أصول والتزامات",
        "إيراد ومصروف",
        "نقد ومخزون"
      ],
      "en": [
        "Joint operations and joint ventures",
        "Assets and liabilities",
        "Revenue and expense",
        "Cash and inventory"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يصنف IFRS 11 الترتيبات المشتركة إلى عمليات مشتركة ومشروعات مشتركة.",
      "en": "IFRS 11 classifies joint arrangements as joint operations or joint ventures."
    },
    "reference": "IFRS 11",
    "difficulty": "easy",
    "examDomain": "Joint arrangements"
  },
  {
    "id": "ifrs-cov-ifrs11-02",
    "track": "IFRS",
    "topic": "IFRS 11 — Classification basis",
    "question": {
      "ar": "على ماذا يعتمد تصنيف الترتيب المشترك؟",
      "en": "What does classification of a joint arrangement depend on?"
    },
    "choices": {
      "ar": [
        "حقوق والتزامات الأطراف الناشئة عن الترتيب",
        "نسبة الربح فقط",
        "عدد الموظفين",
        "مدة العقد فقط"
      ],
      "en": [
        "Rights and obligations of the parties arising from the arrangement",
        "Profit percentage only",
        "Headcount",
        "Contract length only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "التصنيف يركز على الحقوق في الأصول والالتزامات عن الالتزامات مقابل حقوق في صافي الأصول.",
      "en": "Classification focuses on rights to assets/obligations for liabilities versus rights to net assets."
    },
    "reference": "IFRS 11",
    "difficulty": "intermediate",
    "examDomain": "Classification basis"
  },
  {
    "id": "ifrs-cov-ifrs12-01",
    "track": "IFRS",
    "topic": "IFRS 12 — Interests",
    "question": {
      "ar": "ما موضوع IFRS 12؟",
      "en": "What is IFRS 12 about?"
    },
    "choices": {
      "ar": [
        "الإفصاح عن الحصص في منشآت أخرى",
        "قياس الضرائب",
        "المخزون",
        "الإيجارات"
      ],
      "en": [
        "Disclosure of interests in other entities",
        "Tax measurement",
        "Inventory",
        "Leases"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يجمع المعيار إفصاحات عن الحصص في الشركات التابعة والترتيبات المشتركة والزميلة والمنشآت المهيكلة.",
      "en": "The standard brings together disclosures about interests in subsidiaries, joint arrangements, associates and structured entities."
    },
    "reference": "IFRS 12",
    "difficulty": "easy",
    "examDomain": "Interests"
  },
  {
    "id": "ifrs-cov-ifrs12-02",
    "track": "IFRS",
    "topic": "IFRS 12 — Judgements",
    "question": {
      "ar": "هل يطلب IFRS 12 إفصاحات عن أحكام مهمة في تحديد السيطرة أو السيطرة المشتركة أو التأثير المهم؟",
      "en": "Does IFRS 12 require disclosures about significant judgements in determining control, joint control or significant influence?"
    },
    "choices": {
      "ar": [
        "نعم",
        "لا",
        "فقط للشركات المدرجة",
        "فقط عند الخسارة"
      ],
      "en": [
        "Yes",
        "No",
        "Only listed entities",
        "Only when loss-making"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الإفصاح عن الأحكام والافتراضات المهمة جزء أساسي لفهم طبيعة الحصص.",
      "en": "Disclosing significant judgements and assumptions is key to understanding the nature of interests."
    },
    "reference": "IFRS 12",
    "difficulty": "intermediate",
    "examDomain": "Judgements"
  },
  {
    "id": "ifrs-cov-ifrs14-01",
    "track": "IFRS",
    "topic": "IFRS 14 — Regulatory deferral",
    "question": {
      "ar": "لمن صمم IFRS 14 أساساً؟",
      "en": "For whom was IFRS 14 primarily designed?"
    },
    "choices": {
      "ar": [
        "بعض المتبنين لأول مرة لـ IFRS الذين كانوا يعترفون بأرصدة تأجيل تنظيمية وفق GAAP السابق",
        "كل الشركات",
        "البنوك فقط",
        "شركات التأمين فقط"
      ],
      "en": [
        "Certain first-time IFRS adopters that recognised regulatory deferral balances under previous GAAP",
        "All companies",
        "Banks only",
        "Insurers only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IFRS 14 معيار انتقالي محدود النطاق لبعض المتبنين لأول مرة.",
      "en": "IFRS 14 is a limited-scope interim standard for certain first-time adopters."
    },
    "reference": "IFRS 14",
    "difficulty": "easy",
    "examDomain": "Regulatory deferral"
  },
  {
    "id": "ifrs-cov-ifrs14-02",
    "track": "IFRS",
    "topic": "IFRS 14 — Presentation",
    "question": {
      "ar": "كيف تعرض أرصدة التأجيل التنظيمية عادةً؟",
      "en": "How are regulatory deferral account balances generally presented?"
    },
    "choices": {
      "ar": [
        "بشكل منفصل عن الأصول والالتزامات الأخرى وفق متطلبات المعيار",
        "ضمن المخزون دائماً",
        "ضمن النقد",
        "لا تعرض"
      ],
      "en": [
        "Separately from other assets and liabilities as required",
        "Always in inventory",
        "In cash",
        "Not presented"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يفرض IFRS 14 عرضاً منفصلاً وتفصيلاً مناسباً لهذه الأرصدة.",
      "en": "IFRS 14 requires separate presentation and appropriate detail for these balances."
    },
    "reference": "IFRS 14",
    "difficulty": "intermediate",
    "examDomain": "Presentation"
  },
  {
    "id": "ifrs-cov-ifrs17-01",
    "track": "IFRS",
    "topic": "IFRS 17 — Insurance contracts",
    "question": {
      "ar": "ما الذي يعالجه IFRS 17؟",
      "en": "What does IFRS 17 address?"
    },
    "choices": {
      "ar": [
        "الاعتراف والقياس والعرض والإفصاح لعقود التأمين ضمن النطاق",
        "المخزون",
        "الإيجارات",
        "ضرائب الدخل"
      ],
      "en": [
        "Recognition, measurement, presentation and disclosure for insurance contracts in scope",
        "Inventory",
        "Leases",
        "Income taxes"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IFRS 17 هو المعيار الأساسي لعقود التأمين.",
      "en": "IFRS 17 is the principal standard for insurance contracts."
    },
    "reference": "IFRS 17",
    "difficulty": "easy",
    "examDomain": "Insurance contracts"
  },
  {
    "id": "ifrs-cov-ifrs17-02",
    "track": "IFRS",
    "topic": "IFRS 17 — Service result",
    "question": {
      "ar": "ما الفكرة العامة لهامش الخدمة التعاقدية CSM؟",
      "en": "What is the broad idea of the contractual service margin (CSM)?"
    },
    "choices": {
      "ar": [
        "يمثل الربح غير المكتسب الذي يعترف به مع تقديم خدمات التأمين",
        "يمثل النقد بالبنك",
        "يمثل ضريبة مؤجلة",
        "يمثل مخزوناً"
      ],
      "en": [
        "Represents unearned profit recognised as insurance services are provided",
        "Bank cash",
        "Deferred tax",
        "Inventory"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "CSM يمنع الاعتراف الفوري بأرباح مستقبلية ويطلقها مع تقديم الخدمة.",
      "en": "CSM prevents immediate recognition of future profit and releases it as insurance service is provided."
    },
    "reference": "IFRS 17",
    "difficulty": "intermediate",
    "examDomain": "Service result"
  },
  {
    "id": "ifrs-cov-ifrs19-01",
    "track": "IFRS",
    "topic": "IFRS 19 — Eligible subsidiaries",
    "question": {
      "ar": "ما الفكرة الأساسية لـ IFRS 19؟",
      "en": "What is the core idea of IFRS 19?"
    },
    "choices": {
      "ar": [
        "السماح لبعض الشركات التابعة المؤهلة بتطبيق متطلبات إفصاح مخفضة مع بقية متطلبات IFRS",
        "إعفاء من القياس",
        "إلغاء IFRS",
        "معيار ضريبي"
      ],
      "en": [
        "Allow eligible subsidiaries to apply reduced disclosures while using other IFRS requirements",
        "Measurement exemption",
        "Cancel IFRS",
        "Tax standard"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IFRS 19 يوفر إفصاحات مخفضة للشركات التابعة المؤهلة دون تغيير مبادئ الاعتراف والقياس الأساسية.",
      "en": "IFRS 19 provides reduced disclosures for eligible subsidiaries without changing core recognition and measurement requirements."
    },
    "reference": "IFRS 19",
    "difficulty": "easy",
    "examDomain": "Eligible subsidiaries"
  },
  {
    "id": "ifrs-cov-ifrs19-02",
    "track": "IFRS",
    "topic": "IFRS 19 — Eligibility",
    "question": {
      "ar": "أي شرط يرتبط بأهلية الشركة التابعة لـ IFRS 19؟",
      "en": "What condition is associated with eligibility for IFRS 19?"
    },
    "choices": {
      "ar": [
        "ألا تكون لديها مساءلة عامة وأن تنتج شركة أم قوائم موحدة وفق IFRS متاحة للاستخدام العام",
        "أن تكون مدرجة في البورصة",
        "أن تكون بنكاً",
        "أن تكون مستقلة تماماً بلا شركة أم"
      ],
      "en": [
        "No public accountability and a parent produces IFRS consolidated financial statements available for public use",
        "Be publicly listed",
        "Be a bank",
        "Have no parent"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الأهلية ترتبط بعدم وجود مساءلة عامة وبوجود قوائم IFRS موحدة لدى الشركة الأم متاحة للاستخدام العام.",
      "en": "Eligibility is linked to no public accountability and a parent with publicly available IFRS consolidated statements."
    },
    "reference": "IFRS 19",
    "difficulty": "intermediate",
    "examDomain": "Eligibility"
  },
  {
    "id": "ifrs-cov-ifrs20-01",
    "track": "IFRS",
    "topic": "IFRS 20 — Rate-regulated activities",
    "question": {
      "ar": "ما المجال الذي يعالجه IFRS 20؟",
      "en": "What area does IFRS 20 address?"
    },
    "choices": {
      "ar": [
        "الأصول والالتزامات التنظيمية الناشئة من الأنشطة الخاضعة لتنظيم الأسعار",
        "المخزون",
        "الدفع بالأسهم",
        "القطاعات"
      ],
      "en": [
        "Regulatory assets and liabilities arising from rate-regulated activities",
        "Inventory",
        "Share-based payment",
        "Segments"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IFRS 20 يعالج المحاسبة عن الحقوق والالتزامات التنظيمية في أنشطة خاضعة لتنظيم الأسعار.",
      "en": "IFRS 20 addresses accounting for regulatory rights and obligations in rate-regulated activities."
    },
    "reference": "IFRS 20",
    "difficulty": "easy",
    "examDomain": "Rate-regulated activities"
  },
  {
    "id": "ifrs-cov-ifrs20-02",
    "track": "IFRS",
    "topic": "IFRS 20 — Effective date",
    "question": {
      "ar": "متى يبدأ التطبيق الإلزامي لـ IFRS 20 وفق الإصدار الحالي؟",
      "en": "When does mandatory application of IFRS 20 begin under the current issuance?"
    },
    "choices": {
      "ar": [
        "1 يناير 2029",
        "1 يناير 2027",
        "1 يناير 2025",
        "لا يوجد"
      ],
      "en": [
        "1 January 2029",
        "1 January 2027",
        "1 January 2025",
        "No date"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "صدر IFRS 20 في 2026 ويطبق للفترات السنوية التي تبدأ في أو بعد 1 يناير 2029 مع السماح بالتطبيق المبكر.",
      "en": "IFRS 20 was issued in 2026 and applies for annual periods beginning on or after 1 January 2029, with earlier application permitted."
    },
    "reference": "IFRS 20 — effective date",
    "difficulty": "intermediate",
    "examDomain": "Effective date"
  },
  {
    "id": "ifrs-cov-ias1-01",
    "track": "IFRS",
    "topic": "IAS 1 — Presentation",
    "question": {
      "ar": "ما أحد مكونات المجموعة الكاملة للقوائم المالية؟",
      "en": "What is one component of a complete set of financial statements?"
    },
    "choices": {
      "ar": [
        "قائمة المركز المالي",
        "كشف مشتريات داخلي فقط",
        "موازنة تقديرية فقط",
        "فاتورة ضريبية"
      ],
      "en": [
        "Statement of financial position",
        "Internal purchase listing only",
        "Budget only",
        "Tax invoice"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تتضمن المجموعة الكاملة قائمة المركز المالي وغيرها من القوائم والإيضاحات المطلوبة.",
      "en": "A complete set includes a statement of financial position and the other required statements and notes."
    },
    "reference": "IAS 1",
    "difficulty": "easy",
    "examDomain": "Presentation"
  },
  {
    "id": "ifrs-cov-ias1-02",
    "track": "IFRS",
    "topic": "IAS 1 — Going concern",
    "question": {
      "ar": "من المسؤول عن تقييم الاستمرارية عند إعداد القوائم؟",
      "en": "Who assesses going concern when preparing financial statements?"
    },
    "choices": {
      "ar": [
        "الإدارة",
        "العميل",
        "المورد",
        "البنك فقط"
      ],
      "en": [
        "Management",
        "Customer",
        "Supplier",
        "Bank only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الإدارة تقيم قدرة المنشأة على الاستمرار وتفصح عن حالات عدم اليقين الجوهرية عند الحاجة.",
      "en": "Management assesses the entity's ability to continue as a going concern and discloses material uncertainties where required."
    },
    "reference": "IAS 1",
    "difficulty": "intermediate",
    "examDomain": "Going concern"
  },
  {
    "id": "ifrs-cov-ias8-01",
    "track": "IFRS",
    "topic": "IAS 8 — Accounting policies",
    "question": {
      "ar": "عند غياب معيار ينطبق مباشرةً على معاملة، ماذا تفعل الإدارة؟",
      "en": "When no IFRS specifically applies to a transaction, what does management do?"
    },
    "choices": {
      "ar": [
        "تستخدم الحكم لتطوير سياسة تنتج معلومات ملائمة وموثوقة مع الرجوع للتسلسل الإرشادي",
        "تختار أي معالجة",
        "تؤجل التسجيل",
        "تستخدم الضريبة"
      ],
      "en": [
        "Use judgement to develop a policy producing relevant and reliable information using the prescribed hierarchy",
        "Choose any treatment",
        "Delay recording",
        "Use tax rules"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IAS 8 يوفر تسلسلاً إرشادياً لاختيار سياسة مناسبة عند غياب نص مباشر.",
      "en": "IAS 8 provides a hierarchy for developing an appropriate policy when no specific standard applies."
    },
    "reference": "IAS 8",
    "difficulty": "easy",
    "examDomain": "Accounting policies"
  },
  {
    "id": "ifrs-cov-ias8-02",
    "track": "IFRS",
    "topic": "IAS 8 — Estimate changes",
    "question": {
      "ar": "كيف يعالج تغير التقدير المحاسبي عادةً؟",
      "en": "How is a change in accounting estimate generally accounted for?"
    },
    "choices": {
      "ar": [
        "مستقبلياً في الفترة الحالية والمستقبلية ذات الصلة",
        "بأثر رجعي دائماً",
        "لا يعالج",
        "كتعديل رأس مال"
      ],
      "en": [
        "Prospectively in current and relevant future periods",
        "Always retrospectively",
        "Not accounted for",
        "As share capital adjustment"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تغيرات التقديرات تعالج مستقبلياً بخلاف الأخطاء والسياسات التي قد تتطلب أثراً رجعياً.",
      "en": "Changes in estimates are accounted for prospectively, unlike errors/policies that may require retrospective treatment."
    },
    "reference": "IAS 8",
    "difficulty": "intermediate",
    "examDomain": "Estimate changes"
  },
  {
    "id": "ifrs-cov-ias10-01",
    "track": "IFRS",
    "topic": "IAS 10 — Adjusting events",
    "question": {
      "ar": "ما الحدث المعدل بعد فترة التقرير؟",
      "en": "What is an adjusting event after the reporting period?"
    },
    "choices": {
      "ar": [
        "حدث يقدم دليلاً إضافياً عن ظروف كانت موجودة في نهاية الفترة",
        "أي حدث بعد السنة",
        "توزيع أرباح فقط",
        "حدث مستقبلي غير متعلق"
      ],
      "en": [
        "Event providing further evidence of conditions existing at period end",
        "Any event after year-end",
        "Dividend only",
        "Unrelated future event"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الحدث المعدل يؤكد أو يوضح ظروفاً موجودة في تاريخ التقرير.",
      "en": "An adjusting event confirms or clarifies conditions existing at the reporting date."
    },
    "reference": "IAS 10",
    "difficulty": "easy",
    "examDomain": "Adjusting events"
  },
  {
    "id": "ifrs-cov-ias10-02",
    "track": "IFRS",
    "topic": "IAS 10 — Non-adjusting events",
    "question": {
      "ar": "كيف يعالج حدث جوهري غير معدل؟",
      "en": "How is a material non-adjusting event treated?"
    },
    "choices": {
      "ar": [
        "لا تعدل الأرقام لكن يفصح عن طبيعته وتقدير أثره المالي إن أمكن",
        "تعدل الأرقام دائماً",
        "يتجاهل دائماً",
        "يسجل كمخزون"
      ],
      "en": [
        "Do not adjust amounts, but disclose nature and estimated financial effect if possible",
        "Always adjust amounts",
        "Always ignore",
        "Record as inventory"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الأحداث غير المعدلة لا تغير الأرقام لكنها قد تتطلب إفصاحاً إذا كانت جوهرية.",
      "en": "Non-adjusting events do not change amounts but may require disclosure if material."
    },
    "reference": "IAS 10",
    "difficulty": "intermediate",
    "examDomain": "Non-adjusting events"
  },
  {
    "id": "ifrs-cov-ias19-01",
    "track": "IFRS",
    "topic": "IAS 19 — Employee benefits",
    "question": {
      "ar": "أي مثال يقع ضمن منافع الموظفين قصيرة الأجل؟",
      "en": "Which is an example of short-term employee benefits?"
    },
    "choices": {
      "ar": [
        "الأجور والرواتب المستحقة خلال فترة قصيرة بعد الخدمة",
        "معاش تقاعدي بعد عقود فقط",
        "شهرة",
        "مخزون"
      ],
      "en": [
        "Wages and salaries due shortly after service",
        "Pension decades later only",
        "Goodwill",
        "Inventory"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الأجور والرواتب ومزايا قصيرة الأجل أخرى تدخل ضمن هذه الفئة إذا استحقت ضمن الإطار الزمني المحدد.",
      "en": "Wages, salaries and other benefits due within the specified short-term period fall in this category."
    },
    "reference": "IAS 19",
    "difficulty": "easy",
    "examDomain": "Employee benefits"
  },
  {
    "id": "ifrs-cov-ias19-02",
    "track": "IFRS",
    "topic": "IAS 19 — Defined benefit",
    "question": {
      "ar": "من يتحمل المخاطر الاكتوارية والاستثمارية أساساً في خطة منافع محددة؟",
      "en": "Who primarily bears actuarial and investment risk in a defined benefit plan?"
    },
    "choices": {
      "ar": [
        "المنشأة",
        "الموظف فقط",
        "المورد",
        "العميل"
      ],
      "en": [
        "The entity",
        "Employee only",
        "Supplier",
        "Customer"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "في خطة المنافع المحددة تتحمل المنشأة مخاطر أن تكون التكلفة الفعلية أعلى من المتوقع أو العوائد أقل.",
      "en": "In a defined benefit plan, the entity bears risk that actual benefit costs or investment returns differ from expectations."
    },
    "reference": "IAS 19",
    "difficulty": "intermediate",
    "examDomain": "Defined benefit"
  },
  {
    "id": "ifrs-cov-ias20-01",
    "track": "IFRS",
    "topic": "IAS 20 — Government grants",
    "question": {
      "ar": "متى يعترف بالمنحة الحكومية عادةً؟",
      "en": "When is a government grant generally recognised?"
    },
    "choices": {
      "ar": [
        "عند وجود تأكيد معقول بأن المنشأة ستلتزم بالشروط وستستلم المنحة",
        "عند تقديم الطلب فقط",
        "عند إعداد الميزانية",
        "دائماً فور الإعلان"
      ],
      "en": [
        "When there is reasonable assurance the entity will comply with conditions and receive the grant",
        "On application only",
        "On budgeting",
        "Always immediately on announcement"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يلزم تأكيد معقول بالالتزام بالشروط واستلام المنحة.",
      "en": "Reasonable assurance is needed that conditions will be met and the grant received."
    },
    "reference": "IAS 20",
    "difficulty": "easy",
    "examDomain": "Government grants"
  },
  {
    "id": "ifrs-cov-ias20-02",
    "track": "IFRS",
    "topic": "IAS 20 — Income recognition",
    "question": {
      "ar": "كيف يعترف بالمنحة المرتبطة بالمصروفات؟",
      "en": "How is a grant related to expenses generally recognised?"
    },
    "choices": {
      "ar": [
        "بشكل منهجي عبر الفترات التي يعترف فيها بالمصروفات المرتبطة",
        "كإيراد كامل دائماً فوراً",
        "كرأس مال فقط",
        "لا يعترف بها"
      ],
      "en": [
        "Systematically over periods in which related expenses are recognised",
        "Always fully immediately",
        "Only as capital",
        "Not recognised"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يطابق الاعتراف بالمنحة الفترات التي تتحمل فيها المنشأة التكاليف المقصود تعويضها.",
      "en": "Grant income is matched systematically with periods in which related costs are recognised."
    },
    "reference": "IAS 20",
    "difficulty": "intermediate",
    "examDomain": "Income recognition"
  },
  {
    "id": "ifrs-cov-ias23-01",
    "track": "IFRS",
    "topic": "IAS 23 — Borrowing costs",
    "question": {
      "ar": "متى ترسمل تكاليف الاقتراض؟",
      "en": "When are borrowing costs capitalised?"
    },
    "choices": {
      "ar": [
        "عندما تنسب مباشرةً إلى اقتناء أو إنشاء أصل مؤهل",
        "دائماً لكل قرض",
        "أبداً",
        "فقط عند السداد"
      ],
      "en": [
        "When directly attributable to acquisition or construction of a qualifying asset",
        "Always for every loan",
        "Never",
        "Only on repayment"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تكاليف الاقتراض المرتبطة مباشرة بأصل مؤهل تدخل في تكلفته.",
      "en": "Borrowing costs directly attributable to a qualifying asset form part of its cost."
    },
    "reference": "IAS 23",
    "difficulty": "easy",
    "examDomain": "Borrowing costs"
  },
  {
    "id": "ifrs-cov-ias23-02",
    "track": "IFRS",
    "topic": "IAS 23 — Qualifying asset",
    "question": {
      "ar": "ما الأصل المؤهل؟",
      "en": "What is a qualifying asset?"
    },
    "choices": {
      "ar": [
        "أصل يحتاج بالضرورة فترة زمنية جوهرية ليصبح جاهزاً للاستخدام أو البيع",
        "أي نقد",
        "أي ذمم",
        "أي مخزون سريع الدوران"
      ],
      "en": [
        "An asset that necessarily takes a substantial period to get ready for use or sale",
        "Any cash",
        "Any receivable",
        "Any fast-moving inventory"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "جوهر التعريف هو الحاجة إلى فترة زمنية جوهرية للإعداد.",
      "en": "The defining feature is the need for a substantial period to get the asset ready."
    },
    "reference": "IAS 23",
    "difficulty": "intermediate",
    "examDomain": "Qualifying asset"
  },
  {
    "id": "ifrs-cov-ias26-01",
    "track": "IFRS",
    "topic": "IAS 26 — Retirement plans",
    "question": {
      "ar": "ما الذي يغطيه IAS 26؟",
      "en": "What does IAS 26 cover?"
    },
    "choices": {
      "ar": [
        "المحاسبة والتقرير بواسطة خطط منافع التقاعد",
        "محاسبة الشركة الراعية نفسها فقط",
        "المخزون",
        "الإيجارات"
      ],
      "en": [
        "Accounting and reporting by retirement benefit plans",
        "Only sponsor accounting",
        "Inventory",
        "Leases"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "المعيار يخص القوائم والتقارير التي تعدها خطة منافع التقاعد نفسها.",
      "en": "The standard addresses financial reporting by retirement benefit plans themselves."
    },
    "reference": "IAS 26",
    "difficulty": "easy",
    "examDomain": "Retirement plans"
  },
  {
    "id": "ifrs-cov-ias26-02",
    "track": "IFRS",
    "topic": "IAS 26 — Defined benefit plan",
    "question": {
      "ar": "في خطة منافع محددة، ما معلومة محورية في التقارير؟",
      "en": "In a defined benefit plan, what is a key reporting item?"
    },
    "choices": {
      "ar": [
        "القيمة الحالية الاكتوارية للمنافع المتقاعدة الموعودة ومعلومات صافي الأصول المتاحة",
        "المبيعات الشهرية",
        "المخزون",
        "الإيجارات"
      ],
      "en": [
        "Actuarial present value of promised retirement benefits and information on net assets available",
        "Monthly sales",
        "Inventory",
        "Leases"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تقارير الخطة تركز على صافي الأصول المتاحة والمنافع الموعودة وفق طبيعة الخطة.",
      "en": "Plan reporting focuses on net assets available and promised benefits according to plan type."
    },
    "reference": "IAS 26",
    "difficulty": "intermediate",
    "examDomain": "Defined benefit plan"
  },
  {
    "id": "ifrs-cov-ias27-01",
    "track": "IFRS",
    "topic": "IAS 27 — Separate statements",
    "question": {
      "ar": "ما موضوع IAS 27؟",
      "en": "What is IAS 27 about?"
    },
    "choices": {
      "ar": [
        "القوائم المالية المنفصلة",
        "القوائم الموحدة فقط",
        "المخزون",
        "الإيجارات"
      ],
      "en": [
        "Separate financial statements",
        "Consolidated statements only",
        "Inventory",
        "Leases"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IAS 27 يعالج المحاسبة عن الاستثمارات في القوائم المالية المنفصلة.",
      "en": "IAS 27 addresses accounting for investments in separate financial statements."
    },
    "reference": "IAS 27",
    "difficulty": "easy",
    "examDomain": "Separate statements"
  },
  {
    "id": "ifrs-cov-ias27-02",
    "track": "IFRS",
    "topic": "IAS 27 — Investment measurement",
    "question": {
      "ar": "في القوائم المنفصلة، ما أحد أسس قياس استثمارات في شركات تابعة/زميلة/مشروعات مشتركة المسموح بها؟",
      "en": "In separate financial statements, which is one permitted basis for investments in subsidiaries/associates/joint ventures?"
    },
    "choices": {
      "ar": [
        "التكلفة",
        "صافي القيمة القابلة للتحقق فقط",
        "الإهلاك",
        "قيمة المخزون"
      ],
      "en": [
        "Cost",
        "NRV only",
        "Depreciation",
        "Inventory value"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "من الأسس المسموح بها التكلفة، مع بدائل أخرى وفق المتطلبات.",
      "en": "Cost is one permitted basis, alongside other alternatives under the standard."
    },
    "reference": "IAS 27",
    "difficulty": "intermediate",
    "examDomain": "Investment measurement"
  },
  {
    "id": "ifrs-cov-ias28-01",
    "track": "IFRS",
    "topic": "IAS 28 — Associates",
    "question": {
      "ar": "ما الطريقة المحاسبية الرئيسية للاستثمار في شركة زميلة ضمن نطاق IAS 28؟",
      "en": "What is the main accounting method for an investment in an associate under IAS 28?"
    },
    "choices": {
      "ar": [
        "طريقة حقوق الملكية",
        "التكلفة فقط دائماً",
        "توحيد كامل دائماً",
        "LIFO"
      ],
      "en": [
        "Equity method",
        "Always cost only",
        "Always full consolidation",
        "LIFO"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تستخدم طريقة حقوق الملكية للاستثمارات في الشركات الزميلة والمشروعات المشتركة مع الاستثناءات المحددة.",
      "en": "The equity method is used for associates and joint ventures, subject to specified exceptions."
    },
    "reference": "IAS 28",
    "difficulty": "easy",
    "examDomain": "Associates"
  },
  {
    "id": "ifrs-cov-ias28-02",
    "track": "IFRS",
    "topic": "IAS 28 — Significant influence",
    "question": {
      "ar": "ما المفهوم الأساسي للشركة الزميلة؟",
      "en": "What is the core concept of an associate?"
    },
    "choices": {
      "ar": [
        "وجود تأثير مهم دون سيطرة أو سيطرة مشتركة",
        "وجود سيطرة كاملة",
        "عدم وجود أي تأثير",
        "امتلاك أصل فقط"
      ],
      "en": [
        "Significant influence without control or joint control",
        "Full control",
        "No influence",
        "Owning an asset only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الشركة الزميلة تقوم على التأثير المهم وليس السيطرة.",
      "en": "An associate is based on significant influence rather than control."
    },
    "reference": "IAS 28",
    "difficulty": "intermediate",
    "examDomain": "Significant influence"
  },
  {
    "id": "ifrs-cov-ias29-01",
    "track": "IFRS",
    "topic": "IAS 29 — Hyperinflation",
    "question": {
      "ar": "متى يطبق IAS 29؟",
      "en": "When does IAS 29 apply?"
    },
    "choices": {
      "ar": [
        "عند إعداد القوائم بالعملة الوظيفية لاقتصاد مفرط التضخم",
        "عند تضخم بسيط دائماً",
        "عند خسارة شركة",
        "عند تغيير بنك"
      ],
      "en": [
        "When financial statements are prepared in the functional currency of a hyperinflationary economy",
        "For any mild inflation",
        "When company makes a loss",
        "When bank changes"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "المعيار يطبق عندما تكون العملة الوظيفية لاقتصاد يتسم بالتضخم المفرط.",
      "en": "The standard applies when the functional currency is that of a hyperinflationary economy."
    },
    "reference": "IAS 29",
    "difficulty": "easy",
    "examDomain": "Hyperinflation"
  },
  {
    "id": "ifrs-cov-ias29-02",
    "track": "IFRS",
    "topic": "IAS 29 — Restatement",
    "question": {
      "ar": "ما الفكرة الرئيسية لمعالجة القوائم في اقتصاد مفرط التضخم؟",
      "en": "What is the main idea for financial statements in a hyperinflationary economy?"
    },
    "choices": {
      "ar": [
        "إعادة بيان المبالغ بوحدة قياس جارية في نهاية الفترة باستخدام مؤشر عام للأسعار",
        "ترك التكلفة التاريخية دون تعديل",
        "تحويل كل شيء إلى نقد",
        "حذف المقارنات"
      ],
      "en": [
        "Restate amounts in the measuring unit current at period end using a general price index",
        "Leave historical cost unchanged",
        "Convert everything to cash",
        "Remove comparatives"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "إعادة البيان تهدف لجعل الأرقام معبرة بوحدة قياس جارية قابلة للمقارنة.",
      "en": "Restatement aims to express amounts in a current measuring unit for meaningful comparison."
    },
    "reference": "IAS 29",
    "difficulty": "intermediate",
    "examDomain": "Restatement"
  },
  {
    "id": "ifrs-cov-ias32-01",
    "track": "IFRS",
    "topic": "IAS 32 — Presentation",
    "question": {
      "ar": "ما الموضوع الأساسي لـ IAS 32؟",
      "en": "What is the main topic of IAS 32?"
    },
    "choices": {
      "ar": [
        "عرض الأدوات المالية وتصنيفها كالتزامات أو حقوق ملكية",
        "قياس المخزون",
        "الإفصاح القطاعي",
        "الإيجارات"
      ],
      "en": [
        "Presentation of financial instruments and classification as liabilities or equity",
        "Inventory measurement",
        "Segment disclosure",
        "Leases"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يركز IAS 32 على مبادئ عرض الأدوات المالية والتصنيف والمقاصة.",
      "en": "IAS 32 focuses on presentation, classification and offsetting of financial instruments."
    },
    "reference": "IAS 32",
    "difficulty": "easy",
    "examDomain": "Presentation"
  },
  {
    "id": "ifrs-cov-ias32-02",
    "track": "IFRS",
    "topic": "IAS 32 — Liability vs equity",
    "question": {
      "ar": "ما عامل حاسم في التمييز بين التزام مالي وأداة حقوق ملكية؟",
      "en": "What is a key factor in distinguishing a financial liability from equity?"
    },
    "choices": {
      "ar": [
        "جوهر الترتيب التعاقدي ووجود التزام بتسليم نقد أو أصل مالي",
        "اسم الأداة فقط",
        "شكل الشهادة",
        "بلد الإصدار"
      ],
      "en": [
        "Substance of contractual arrangement and obligation to deliver cash/financial asset",
        "Instrument name only",
        "Certificate form",
        "Country of issue"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "التصنيف يعتمد على الجوهر التعاقدي لا الاسم القانوني وحده.",
      "en": "Classification depends on contractual substance rather than legal label alone."
    },
    "reference": "IAS 32",
    "difficulty": "intermediate",
    "examDomain": "Liability vs equity"
  },
  {
    "id": "ifrs-cov-ias33-01",
    "track": "IFRS",
    "topic": "IAS 33 — Basic EPS",
    "question": {
      "ar": "ما البسط المستخدم عادةً في ربحية السهم الأساسية؟",
      "en": "What numerator is generally used for basic EPS?"
    },
    "choices": {
      "ar": [
        "الربح أو الخسارة العائد لحملة الأسهم العادية بعد التعديلات اللازمة",
        "الإيراد",
        "EBITDA",
        "النقد"
      ],
      "en": [
        "Profit or loss attributable to ordinary equity holders after required adjustments",
        "Revenue",
        "EBITDA",
        "Cash"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "ربحية السهم الأساسية تقيس نصيب السهم العادي من الربح العائد لحملة الأسهم العادية.",
      "en": "Basic EPS measures profit attributable to ordinary equity holders per weighted-average ordinary share."
    },
    "reference": "IAS 33",
    "difficulty": "easy",
    "examDomain": "Basic EPS"
  },
  {
    "id": "ifrs-cov-ias33-02",
    "track": "IFRS",
    "topic": "IAS 33 — Denominator",
    "question": {
      "ar": "ما المقام الأساسي في حساب EPS الأساسي؟",
      "en": "What is the basic denominator in basic EPS?"
    },
    "choices": {
      "ar": [
        "المتوسط المرجح لعدد الأسهم العادية القائمة خلال الفترة",
        "عدد الأسهم في نهاية السنة فقط دائماً",
        "عدد الموظفين",
        "الأصول"
      ],
      "en": [
        "Weighted-average number of ordinary shares outstanding during the period",
        "Always year-end shares only",
        "Headcount",
        "Assets"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "استخدام المتوسط المرجح يعكس تغير عدد الأسهم خلال الفترة.",
      "en": "Weighted average reflects changes in shares outstanding during the period."
    },
    "reference": "IAS 33",
    "difficulty": "intermediate",
    "examDomain": "Denominator"
  },
  {
    "id": "ifrs-cov-ias34-01",
    "track": "IFRS",
    "topic": "IAS 34 — Interim reporting",
    "question": {
      "ar": "هل يفرض IAS 34 على كل منشأة إعداد تقارير مرحلية؟",
      "en": "Does IAS 34 require every entity to publish interim reports?"
    },
    "choices": {
      "ar": [
        "لا، لكنه يحدد محتوى واعتراف وقياس التقرير المرحلي إذا أعد",
        "نعم لكل منشأة",
        "فقط للبنوك",
        "فقط للحكومات"
      ],
      "en": [
        "No; it specifies content, recognition and measurement when interim reports are prepared",
        "Yes for every entity",
        "Banks only",
        "Governments only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "المعيار لا يحدد من يجب عليه التقرير مرحلياً؛ بل يحدد كيفية إعداد التقرير المتوافق.",
      "en": "The standard does not decide who must report interim; it sets requirements for compliant interim reports."
    },
    "reference": "IAS 34",
    "difficulty": "easy",
    "examDomain": "Interim reporting"
  },
  {
    "id": "ifrs-cov-ias34-02",
    "track": "IFRS",
    "topic": "IAS 34 — Frequency measurement",
    "question": {
      "ar": "هل يغير تكرار التقارير المرحلية قياس النتائج السنوية؟",
      "en": "Does frequency of interim reporting affect measurement of annual results?"
    },
    "choices": {
      "ar": [
        "لا ينبغي أن يؤثر، ويستخدم منظور السنة حتى تاريخه",
        "نعم دائماً",
        "يتم تجاهل التقديرات",
        "تغلق السنة كل ربع"
      ],
      "en": [
        "It should not affect annual measurement; a year-to-date basis is used",
        "Always yes",
        "Estimates are ignored",
        "The year closes each quarter"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "القياس المرحلي يعتمد على السنة حتى تاريخه بحيث لا تغير كثرة التقارير النتيجة السنوية.",
      "en": "Interim measurement uses a year-to-date basis so reporting frequency does not distort annual results."
    },
    "reference": "IAS 34",
    "difficulty": "intermediate",
    "examDomain": "Frequency measurement"
  },
  {
    "id": "ifrs-cov-ias38-01",
    "track": "IFRS",
    "topic": "IAS 38 — Intangible assets",
    "question": {
      "ar": "ما أحد شروط الاعتراف بأصل غير ملموس منفصل؟",
      "en": "What is one recognition condition for a separate intangible asset?"
    },
    "choices": {
      "ar": [
        "أن يكون قابلاً للتحديد مع احتمال المنافع وإمكانية قياس التكلفة بموثوقية",
        "أن يكون مادياً",
        "أن يكون نقداً",
        "أن يكون مخزوناً"
      ],
      "en": [
        "Identifiable with probable benefits and reliably measurable cost",
        "Be physical",
        "Be cash",
        "Be inventory"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الأصل غير الملموس يجب أن يكون قابلاً للتحديد ويستوفي شروط الاعتراف.",
      "en": "An intangible asset must be identifiable and meet recognition criteria."
    },
    "reference": "IAS 38",
    "difficulty": "easy",
    "examDomain": "Intangible assets"
  },
  {
    "id": "ifrs-cov-ias38-02",
    "track": "IFRS",
    "topic": "IAS 38 — Research development",
    "question": {
      "ar": "كيف تعالج نفقات مرحلة البحث في مشروع داخلي عادةً؟",
      "en": "How are expenditures in the research phase of an internal project generally treated?"
    },
    "choices": {
      "ar": [
        "كمصروف عند حدوثها",
        "ترسمل دائماً",
        "كشهرة",
        "كمخزون"
      ],
      "en": [
        "Expense as incurred",
        "Always capitalise",
        "Goodwill",
        "Inventory"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "لا يمكن إثبات أن مرحلة البحث ستولد منافع اقتصادية مستقبلية تستوفي الاعتراف، لذا تحمل عادةً على المصروف.",
      "en": "The research phase cannot demonstrate qualifying future benefits, so expenditures are generally expensed."
    },
    "reference": "IAS 38",
    "difficulty": "intermediate",
    "examDomain": "Research development"
  },
  {
    "id": "ifrs-cov-ias40-01",
    "track": "IFRS",
    "topic": "IAS 40 — Investment property",
    "question": {
      "ar": "ما مثال على عقار استثماري؟",
      "en": "What is an example of investment property?"
    },
    "choices": {
      "ar": [
        "مبنى محتفظ به للحصول على إيجار",
        "مصنع تستخدمه المنشأة في الإنتاج",
        "مخزون عقاري للبيع في النشاط العادي",
        "مقر الإدارة المستخدم ذاتياً"
      ],
      "en": [
        "Building held to earn rentals",
        "Factory used in production",
        "Property inventory for sale in ordinary business",
        "Owner-occupied head office"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "العقار المحتفظ به لكسب الإيجار أو زيادة القيمة قد يكون عقاراً استثمارياً.",
      "en": "Property held to earn rentals or for capital appreciation may be investment property."
    },
    "reference": "IAS 40",
    "difficulty": "easy",
    "examDomain": "Investment property"
  },
  {
    "id": "ifrs-cov-ias40-02",
    "track": "IFRS",
    "topic": "IAS 40 — Models",
    "question": {
      "ar": "ما النموذجان اللاحقان المتاحان للعقار الاستثماري؟",
      "en": "What subsequent measurement models are available for investment property?"
    },
    "choices": {
      "ar": [
        "نموذج القيمة العادلة أو نموذج التكلفة",
        "LIFO وFIFO",
        "النقد والاستحقاق",
        "المخزون والإيراد"
      ],
      "en": [
        "Fair value model or cost model",
        "LIFO and FIFO",
        "Cash and accrual",
        "Inventory and revenue"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IAS 40 يسمح باختيار نموذج القيمة العادلة أو التكلفة مع تطبيق السياسة باتساق وفق الشروط.",
      "en": "IAS 40 permits a fair value model or cost model, applied consistently subject to requirements."
    },
    "reference": "IAS 40",
    "difficulty": "intermediate",
    "examDomain": "Models"
  },
  {
    "id": "ifrs-cov-ias41-01",
    "track": "IFRS",
    "topic": "IAS 41 — Biological assets",
    "question": {
      "ar": "كيف تقاس الأصول البيولوجية عادةً؟",
      "en": "How are biological assets generally measured?"
    },
    "choices": {
      "ar": [
        "بالقيمة العادلة ناقص تكاليف البيع، مع استثناءات محدودة",
        "بالتكلفة التاريخية دائماً",
        "بصافي القيمة القابلة للتحقق",
        "بالتكلفة المطفأة"
      ],
      "en": [
        "Fair value less costs to sell, subject to limited exceptions",
        "Always historical cost",
        "Net realisable value",
        "Amortised cost"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "القاعدة العامة في IAS 41 هي القيمة العادلة ناقص تكاليف البيع.",
      "en": "The general IAS 41 model is fair value less costs to sell."
    },
    "reference": "IAS 41",
    "difficulty": "easy",
    "examDomain": "Biological assets"
  },
  {
    "id": "ifrs-cov-ias41-02",
    "track": "IFRS",
    "topic": "IAS 41 — Produce at harvest",
    "question": {
      "ar": "كيف تقاس المنتجات الزراعية عند نقطة الحصاد؟",
      "en": "How is agricultural produce measured at the point of harvest?"
    },
    "choices": {
      "ar": [
        "بالقيمة العادلة ناقص تكاليف البيع، وتصبح هذه القيمة تكلفة لأغراض IAS 2 لاحقاً",
        "بالتكلفة التاريخية فقط",
        "بسعر البيع دون خصم",
        "لا تقاس"
      ],
      "en": [
        "Fair value less costs to sell, which becomes cost for subsequent IAS 2 accounting",
        "Historical cost only",
        "Selling price with no deduction",
        "Not measured"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "عند الحصاد تقاس بالقيمة العادلة ناقص تكاليف البيع وتستخدم القيمة الناتجة كتلفة عند تطبيق IAS 2 بعدها.",
      "en": "At harvest, produce is measured at fair value less costs to sell; that amount becomes cost under IAS 2 thereafter."
    },
    "reference": "IAS 41",
    "difficulty": "intermediate",
    "examDomain": "Produce at harvest"
  }
] satisfies ExamQuestion[];
