import type { ExamQuestion } from "@/lib/exam-bank";

/** Phase 3 depth batch C: IAS 24, IAS 36 and IAS 37. */
export const IFRS_DEPTH_C_QUESTION_SEED = [
  {
    "id": "ifrs-depthc-ias24-01",
    "track": "IFRS",
    "topic": "IAS 24 — Definitions",
    "question": {
      "ar": "هل المنشأة الزميلة تعد عادةً طرفاً ذا علاقة بالمنشأة المستثمر فيها؟",
      "en": "Is an associate generally a related party of the investor?"
    },
    "choices": {
      "ar": [
        "نعم",
        "لا",
        "فقط إذا كانت مدرجة",
        "فقط عند وجود مبيعات"
      ],
      "en": [
        "Yes",
        "No",
        "Only if listed",
        "Only if there are sales"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "وجود تأثير مهم ينشئ علاقة طرف ذي علاقة وفق تعريفات IAS 24.",
      "en": "Significant influence creates a related-party relationship under IAS 24 definitions."
    },
    "reference": "IAS 24 — definitions",
    "difficulty": "easy",
    "examDomain": "Definitions"
  },
  {
    "id": "ifrs-depthc-ias24-02",
    "track": "IFRS",
    "topic": "IAS 24 — Joint venture",
    "question": {
      "ar": "هل المشروع المشترك يعد طرفاً ذا علاقة بالمشارك الذي لديه سيطرة مشتركة؟",
      "en": "Is a joint venture a related party of a venturer with joint control?"
    },
    "choices": {
      "ar": [
        "نعم",
        "لا",
        "فقط إذا كان مربحاً",
        "فقط إذا كان أجنبياً"
      ],
      "en": [
        "Yes",
        "No",
        "Only if profitable",
        "Only if foreign"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "علاقة السيطرة المشتركة تجعل الكيان من الأطراف ذات العلاقة وفق المعيار.",
      "en": "Joint control creates a related-party relationship under the standard."
    },
    "reference": "IAS 24 — related parties",
    "difficulty": "easy",
    "examDomain": "Joint venture"
  },
  {
    "id": "ifrs-depthc-ias24-03",
    "track": "IFRS",
    "topic": "IAS 24 — Close family",
    "question": {
      "ar": "أي مثال يدخل عادةً ضمن أفراد الأسرة المقربين لشخص رئيسي؟",
      "en": "Which is generally an example of a close family member of a key person?"
    },
    "choices": {
      "ar": [
        "الزوج أو الشريك المنزلي",
        "أي عميل",
        "أي موظف",
        "أي مورد"
      ],
      "en": [
        "Spouse or domestic partner",
        "Any customer",
        "Any employee",
        "Any supplier"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يشمل المفهوم أفراداً يمكن توقع تأثيرهم أو تأثرهم بالشخص في التعاملات مع المنشأة.",
      "en": "The concept includes family members who may be expected to influence or be influenced by the person in dealings with the entity."
    },
    "reference": "IAS 24 — close family",
    "difficulty": "intermediate",
    "examDomain": "Close family"
  },
  {
    "id": "ifrs-depthc-ias24-04",
    "track": "IFRS",
    "topic": "IAS 24 — Transactions without price",
    "question": {
      "ar": "هل يعد نقل مورد أو التزام بين أطراف ذات علاقة معاملة حتى لو لم يُفرض سعر؟",
      "en": "Is a transfer of resources or obligations between related parties a transaction even if no price is charged?"
    },
    "choices": {
      "ar": [
        "نعم",
        "لا",
        "فقط إذا كانت نقدية",
        "فقط إذا تجاوزت حداً معيناً"
      ],
      "en": [
        "Yes",
        "No",
        "Only if cash",
        "Only above a threshold"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تعريف معاملة الطرف ذي العلاقة لا يتطلب وجود سعر أو مقابل.",
      "en": "The related-party transaction definition does not require a price to be charged."
    },
    "reference": "IAS 24 — transactions",
    "difficulty": "intermediate",
    "examDomain": "Transactions without price"
  },
  {
    "id": "ifrs-depthc-ias24-05",
    "track": "IFRS",
    "topic": "IAS 24 — Outstanding balances",
    "question": {
      "ar": "هل تشمل الإفصاحات أرصدة الالتزامات والتعهدات مع الأطراف ذات العلاقة؟",
      "en": "Do disclosures include outstanding balances and commitments with related parties?"
    },
    "choices": {
      "ar": [
        "نعم، عند انطباق المتطلبات",
        "لا أبداً",
        "فقط الذمم المدينة",
        "فقط النقد"
      ],
      "en": [
        "Yes, when the requirements apply",
        "Never",
        "Receivables only",
        "Cash only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الإفصاح يشمل المعاملات والأرصدة القائمة والتعهدات والمخصصات المرتبطة وفق الحاجة.",
      "en": "Disclosure covers transactions, outstanding balances, commitments and related allowances where applicable."
    },
    "reference": "IAS 24 — disclosures",
    "difficulty": "intermediate",
    "examDomain": "Outstanding balances"
  },
  {
    "id": "ifrs-depthc-ias24-06",
    "track": "IFRS",
    "topic": "IAS 24 — Bad debt allowance",
    "question": {
      "ar": "إذا كان هناك مخصص لخسائر ائتمانية على رصيد طرف ذي علاقة، هل قد يحتاج الإفصاح عنه؟",
      "en": "If an allowance for credit losses exists on a related-party balance, may it require disclosure?"
    },
    "choices": {
      "ar": [
        "نعم",
        "لا",
        "فقط إذا كان الرصيد صفراً",
        "فقط للشركات الحكومية"
      ],
      "en": [
        "Yes",
        "No",
        "Only if balance is zero",
        "Government entities only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تتطلب الإفصاحات معلومات عن مخصصات الديون والمصروفات المتعلقة بالأرصدة ذات العلاقة عند انطباقها.",
      "en": "Disclosures include allowances and expenses related to related-party balances where applicable."
    },
    "reference": "IAS 24 — doubtful debts",
    "difficulty": "hard",
    "examDomain": "Bad debt allowance"
  },
  {
    "id": "ifrs-depthc-ias24-07",
    "track": "IFRS",
    "topic": "IAS 24 — Categories",
    "question": {
      "ar": "هل يجب عرض معاملات الأطراف ذات العلاقة حسب فئات العلاقة مثل الشركة الأم والإدارة العليا؟",
      "en": "Are related-party disclosures presented by categories of relationship such as parent and key management?"
    },
    "choices": {
      "ar": [
        "نعم",
        "لا",
        "فقط حسب العملة",
        "فقط حسب المبلغ"
      ],
      "en": [
        "Yes",
        "No",
        "Only by currency",
        "Only by amount"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "التجميع حسب فئات الأطراف يساعد المستخدمين على فهم طبيعة العلاقة وتأثيرها.",
      "en": "Grouping by relationship categories helps users understand the nature and effects of related-party relationships."
    },
    "reference": "IAS 24 — disclosure categories",
    "difficulty": "hard",
    "examDomain": "Categories"
  },
  {
    "id": "ifrs-depthc-ias24-08",
    "track": "IFRS",
    "topic": "IAS 24 — Government-related entities",
    "question": {
      "ar": "هل يقدم IAS 24 إعفاءً جزئياً لبعض المنشآت المرتبطة بالحكومة؟",
      "en": "Does IAS 24 provide a partial exemption for some government-related entities?"
    },
    "choices": {
      "ar": [
        "نعم، مع إفصاحات بديلة محددة",
        "لا أبداً",
        "إعفاء كامل من كل الإفصاحات",
        "فقط للبنوك"
      ],
      "en": [
        "Yes, with specified alternative disclosures",
        "Never",
        "Complete exemption from all disclosures",
        "Banks only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يوجد إعفاء جزئي لبعض العلاقات الحكومية مع متطلبات إفصاح محددة بديلة.",
      "en": "A partial exemption exists for certain government-related relationships with specified alternative disclosures."
    },
    "reference": "IAS 24 — government-related entities",
    "difficulty": "hard",
    "examDomain": "Government-related entities"
  },
  {
    "id": "ifrs-depthc-ias24-09",
    "track": "IFRS",
    "topic": "IAS 24 — Parent disclosure",
    "question": {
      "ar": "هل تفصح المنشأة عن اسم الشركة الأم والطرف المسيطر النهائي إذا كان مختلفاً؟",
      "en": "Does an entity disclose the name of its parent and ultimate controlling party if different?"
    },
    "choices": {
      "ar": [
        "نعم",
        "لا",
        "فقط عند وجود معاملات",
        "فقط إذا كانت مدرجة"
      ],
      "en": [
        "Yes",
        "No",
        "Only if transactions occurred",
        "Only if listed"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "معلومات السيطرة الأساسية مطلوبة حتى تساعد على فهم هيكل المجموعة.",
      "en": "Core control information is disclosed to help users understand the group structure."
    },
    "reference": "IAS 24 — parent relationships",
    "difficulty": "easy",
    "examDomain": "Parent disclosure"
  },
  {
    "id": "ifrs-depthc-ias24-10",
    "track": "IFRS",
    "topic": "IAS 24 — KMP compensation categories",
    "question": {
      "ar": "أي مما يلي فئة من فئات تعويض الإدارة العليا التي يفصح عنها؟",
      "en": "Which is a category of key management compensation disclosed under IAS 24?"
    },
    "choices": {
      "ar": [
        "منافع قصيرة الأجل",
        "مبيعات العملاء",
        "تكلفة المخزون",
        "مخصص ضريبة"
      ],
      "en": [
        "Short-term employee benefits",
        "Customer sales",
        "Inventory cost",
        "Tax provision"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تشمل الفئات منافع قصيرة الأجل وما بعد الخدمة وغيرها من الفئات المحددة.",
      "en": "Categories include short-term benefits, post-employment benefits and other specified compensation categories."
    },
    "reference": "IAS 24 — KMP compensation",
    "difficulty": "hard",
    "examDomain": "KMP compensation categories"
  },
  {
    "id": "ifrs-depthc-ias24-11",
    "track": "IFRS",
    "topic": "IAS 24 — Materiality",
    "question": {
      "ar": "هل تعفي الأهمية النسبية المنشأة من الإفصاح عن معلومات جوهرية عن طرف ذي علاقة لمجرد أن المعاملة صغيرة منفردة؟",
      "en": "Does materiality allow an entity to omit related-party information merely because each individual transaction is small?"
    },
    "choices": {
      "ar": [
        "ليس بالضرورة؛ يجب تقييم المعلومات مجتمعة وطبيعتها",
        "نعم دائماً",
        "لا توجد أهمية نسبية",
        "فقط إذا كانت نقدية"
      ],
      "en": [
        "Not necessarily; information must be assessed collectively and by nature",
        "Always yes",
        "Materiality does not exist",
        "Only if cash"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تقييم الأهمية النسبية يأخذ الحجم والطبيعة والسياق وليس قيمة معاملة منفردة فقط.",
      "en": "Materiality considers size, nature and context, not merely each transaction in isolation."
    },
    "reference": "IAS 24 — materiality",
    "difficulty": "intermediate",
    "examDomain": "Materiality"
  },
  {
    "id": "ifrs-depthc-ias36-01",
    "track": "IFRS",
    "topic": "IAS 36 — External indicators",
    "question": {
      "ar": "أي مثال قد يكون مؤشراً خارجياً على انخفاض القيمة؟",
      "en": "Which may be an external indicator of impairment?"
    },
    "choices": {
      "ar": [
        "انخفاض كبير غير متوقع في القيمة السوقية",
        "زيادة المبيعات",
        "سداد مورد",
        "تحسن التصنيف الائتماني"
      ],
      "en": [
        "Significant unexpected decline in market value",
        "Sales increase",
        "Supplier payment",
        "Improved credit rating"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "التراجع الكبير في القيمة السوقية مقارنة بما يتوقع من مرور الوقت قد يكون مؤشراً خارجياً.",
      "en": "A significant market-value decline beyond normal expectations may be an external impairment indicator."
    },
    "reference": "IAS 36 — external indicators",
    "difficulty": "easy",
    "examDomain": "External indicators"
  },
  {
    "id": "ifrs-depthc-ias36-02",
    "track": "IFRS",
    "topic": "IAS 36 — Internal indicators",
    "question": {
      "ar": "أي مثال قد يكون مؤشراً داخلياً على انخفاض القيمة؟",
      "en": "Which may be an internal impairment indicator?"
    },
    "choices": {
      "ar": [
        "تقادم أو تلف مادي للأصل",
        "ارتفاع الطلب",
        "زيادة الأرباح",
        "تحسن الإنتاجية"
      ],
      "en": [
        "Obsolescence or physical damage",
        "Higher demand",
        "Higher profits",
        "Improved productivity"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "التقادم أو التلف وتدهور الأداء أمثلة على مؤشرات داخلية محتملة.",
      "en": "Obsolescence, damage and deteriorating performance are examples of internal indicators."
    },
    "reference": "IAS 36 — internal indicators",
    "difficulty": "easy",
    "examDomain": "Internal indicators"
  },
  {
    "id": "ifrs-depthc-ias36-03",
    "track": "IFRS",
    "topic": "IAS 36 — Goodwill allocation",
    "question": {
      "ar": "لأي مستوى تخصص الشهرة لأغراض اختبار الانخفاض؟",
      "en": "At what level is goodwill allocated for impairment testing?"
    },
    "choices": {
      "ar": [
        "إلى CGU أو مجموعة CGUs تستفيد من التآزر وبأدنى مستوى تراقب فيه داخلياً ضمن الحدود",
        "إلى كل أصل منفرد دائماً",
        "إلى النقد",
        "إلى المخزون"
      ],
      "en": [
        "To a CGU or group of CGUs benefiting from synergies at the lowest monitored level within limits",
        "Always to each individual asset",
        "Cash",
        "Inventory"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تخصص الشهرة للوحدات التي تتوقع الاستفادة من تآزر التجميع وبالمستوى المناسب للإدارة.",
      "en": "Goodwill is allocated to units expected to benefit from combination synergies at the appropriate monitored level."
    },
    "reference": "IAS 36 — goodwill allocation",
    "difficulty": "intermediate",
    "examDomain": "Goodwill allocation"
  },
  {
    "id": "ifrs-depthc-ias36-04",
    "track": "IFRS",
    "topic": "IAS 36 — Indefinite-life intangibles",
    "question": {
      "ar": "هل يخضع الأصل غير الملموس ذو العمر غير المحدد لاختبار سنوي حتى بدون مؤشر؟",
      "en": "Is an indefinite-life intangible asset tested annually even without an indicator?"
    },
    "choices": {
      "ar": [
        "نعم",
        "لا",
        "كل خمس سنوات",
        "فقط عند البيع"
      ],
      "en": [
        "Yes",
        "No",
        "Every five years",
        "Only on sale"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الأصول غير الملموسة ذات العمر غير المحدد وغير المتاحة للاستخدام بعد تخضع لاختبارات سنوية محددة.",
      "en": "Indefinite-life intangibles and certain not-yet-available-for-use intangibles are subject to annual testing."
    },
    "reference": "IAS 36 — annual testing",
    "difficulty": "intermediate",
    "examDomain": "Indefinite-life intangibles"
  },
  {
    "id": "ifrs-depthc-ias36-05",
    "track": "IFRS",
    "topic": "IAS 36 — FVLCD",
    "question": {
      "ar": "ما المقصود بالقيمة العادلة ناقص تكاليف الاستبعاد؟",
      "en": "What is fair value less costs of disposal?"
    },
    "choices": {
      "ar": [
        "السعر الذي سيستلم لبيع الأصل في معاملة منظمة ناقص تكاليف الاستبعاد",
        "التكلفة الأصلية ناقص الإهلاك",
        "NRV للمخزون",
        "القيمة الاسمية"
      ],
      "en": [
        "Price received to sell the asset in an orderly transaction less disposal costs",
        "Original cost less depreciation",
        "Inventory NRV",
        "Nominal value"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "المفهوم يجمع قياس القيمة العادلة مع خصم التكاليف الإضافية المباشرة للتصرف.",
      "en": "The measure combines fair value with deduction of incremental disposal costs."
    },
    "reference": "IAS 36 — FVLCD",
    "difficulty": "intermediate",
    "examDomain": "FVLCD"
  },
  {
    "id": "ifrs-depthc-ias36-06",
    "track": "IFRS",
    "topic": "IAS 36 — VIU cash flows",
    "question": {
      "ar": "هل تتضمن تقديرات القيمة الاستخدامية تدفقات تمويلية وضريبة دخل عادةً؟",
      "en": "Do value-in-use cash-flow estimates generally include financing cash flows and income tax cash flows?"
    },
    "choices": {
      "ar": [
        "لا، تستبعد عادةً لتجنب الازدواج مع معدل الخصم وبحسب متطلبات المعيار",
        "نعم دائماً",
        "فقط التمويل",
        "فقط الضريبة"
      ],
      "en": [
        "No, they are generally excluded under the standard's framework",
        "Always yes",
        "Financing only",
        "Tax only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "القيمة الاستخدامية تبنى على تدفقات قبل التمويل والضريبة بما يتسق مع معدل الخصم قبل الضريبة.",
      "en": "Value in use is built on cash flows and discount-rate assumptions consistently excluding financing/income-tax effects under the model."
    },
    "reference": "IAS 36 — value in use",
    "difficulty": "hard",
    "examDomain": "VIU cash flows"
  },
  {
    "id": "ifrs-depthc-ias36-07",
    "track": "IFRS",
    "topic": "IAS 36 — Future restructuring",
    "question": {
      "ar": "هل تشمل القيمة الاستخدامية آثار إعادة هيكلة مستقبلية لم تلتزم المنشأة بها بعد؟",
      "en": "Does value in use include effects of a future restructuring to which the entity is not yet committed?"
    },
    "choices": {
      "ar": [
        "لا",
        "نعم دائماً",
        "فقط إذا توقعتها الإدارة",
        "فقط إذا حسنت الأرباح"
      ],
      "en": [
        "No",
        "Always yes",
        "Only if management expects it",
        "Only if it improves profit"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "لا تدرج تدفقات من إعادة هيكلة مستقبلية غير ملتزم بها أو تحسينات أداء مستقبلية غير موجودة بعد وفق القيود.",
      "en": "Cash flows from uncommitted future restructurings or unperformed enhancements are excluded under the model's constraints."
    },
    "reference": "IAS 36 — VIU assumptions",
    "difficulty": "hard",
    "examDomain": "Future restructuring"
  },
  {
    "id": "ifrs-depthc-ias36-08",
    "track": "IFRS",
    "topic": "IAS 36 — Discount rate",
    "question": {
      "ar": "ما خصائص معدل الخصم في القيمة الاستخدامية؟",
      "en": "What are the characteristics of the value-in-use discount rate?"
    },
    "choices": {
      "ar": [
        "معدل قبل الضريبة يعكس تقييمات السوق الحالية للقيمة الزمنية ومخاطر الأصل غير المعدلة في التدفقات",
        "معدل ضريبة الشركة",
        "معدل خالٍ من المخاطر فقط دائماً",
        "معدل تاريخي ثابت"
      ],
      "en": [
        "Pre-tax rate reflecting current market assessments of time value and asset-specific risks not already adjusted in cash flows",
        "Corporate tax rate",
        "Always risk-free only",
        "Fixed historical rate"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يجب الاتساق بين المخاطر في التدفقات ومعدل الخصم لتجنب احتسابها مرتين.",
      "en": "Risk assumptions must be consistent between cash flows and discount rate to avoid double counting."
    },
    "reference": "IAS 36 — discount rate",
    "difficulty": "hard",
    "examDomain": "Discount rate"
  },
  {
    "id": "ifrs-depthc-ias36-09",
    "track": "IFRS",
    "topic": "IAS 36 — Reversal non-goodwill",
    "question": {
      "ar": "متى قد تعكس خسارة انخفاض لأصل غير الشهرة؟",
      "en": "When may an impairment loss for an asset other than goodwill be reversed?"
    },
    "choices": {
      "ar": [
        "عند تغير التقديرات المستخدمة لتحديد القيمة القابلة للاسترداد منذ آخر خسارة",
        "كل سنة تلقائياً",
        "لا تعكس أبداً",
        "عند زيادة الإيراد فقط"
      ],
      "en": [
        "When estimates used to determine recoverable amount have changed since the last loss",
        "Automatically every year",
        "Never",
        "Only when revenue increases"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "العكس ممكن عند تغير التقديرات وبحدود القيمة التي كانت ستنتج دون خسارة سابقة.",
      "en": "Reversal is possible when estimates change, subject to the cap based on the carrying amount absent prior impairment."
    },
    "reference": "IAS 36 — reversals",
    "difficulty": "intermediate",
    "examDomain": "Reversal non-goodwill"
  },
  {
    "id": "ifrs-depthc-ias36-10",
    "track": "IFRS",
    "topic": "IAS 36 — Reversal cap",
    "question": {
      "ar": "إلى أي حد يمكن رفع القيمة الدفترية عند عكس خسارة انخفاض لأصل غير الشهرة؟",
      "en": "How far can carrying amount be increased on reversal for an asset other than goodwill?"
    },
    "choices": {
      "ar": [
        "لا تتجاوز القيمة التي كانت ستحدد بعد الإهلاك لو لم يعترف بخسارة سابقة",
        "حتى أي قيمة تختارها الإدارة",
        "حتى التكلفة الأصلية فقط دون إهلاك",
        "حتى القيمة العادلة دائماً"
      ],
      "en": [
        "Not above the carrying amount that would have been determined, net of depreciation, had no prior impairment been recognised",
        "Any amount management chooses",
        "Original cost without depreciation",
        "Always fair value"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الحد يمنع أن يؤدي العكس إلى قيمة أعلى مما كانت ستصبح عليه دون الانخفاض السابق.",
      "en": "The cap prevents reversal from producing a carrying amount higher than if no prior impairment had occurred."
    },
    "reference": "IAS 36 — reversal cap",
    "difficulty": "hard",
    "examDomain": "Reversal cap"
  },
  {
    "id": "ifrs-depthc-ias36-11",
    "track": "IFRS",
    "topic": "IAS 36 — Corporate assets",
    "question": {
      "ar": "كيف تعالج الأصول المشتركة مثل مقر رئيسي لا يولد تدفقات مستقلة؟",
      "en": "How are corporate assets such as headquarters that do not generate independent cash inflows handled?"
    },
    "choices": {
      "ar": [
        "تخصص للوحدات المناسبة على أساس معقول ومتسق إن أمكن، وإلا تطبق اختبارات على مستويات مناسبة",
        "تتجاهل",
        "تختبر دائماً منفردة",
        "تحول إلى مخزون"
      ],
      "en": [
        "Allocate to appropriate CGUs on a reasonable consistent basis if possible; otherwise test at appropriate higher levels",
        "Ignore them",
        "Always test individually",
        "Convert to inventory"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الأصول المشتركة تحتاج ربطاً بالوحدات المستفيدة لاختبار الانخفاض بصورة تعكس استخدامها.",
      "en": "Corporate assets are linked to benefiting units for impairment testing in a manner reflecting their use."
    },
    "reference": "IAS 36 — corporate assets",
    "difficulty": "hard",
    "examDomain": "Corporate assets"
  },
  {
    "id": "ifrs-depthc-ias37-01",
    "track": "IFRS",
    "topic": "IAS 37 — Present obligation",
    "question": {
      "ar": "ما الفرق بين التزام قانوني والتزام بنّاء؟",
      "en": "What is the difference between a legal and constructive obligation?"
    },
    "choices": {
      "ar": [
        "القانوني ينشأ من عقد/تشريع، والبنّاء من ممارسات أو تصريحات تخلق توقعاً صحيحاً لدى أطراف أخرى",
        "لا فرق",
        "البنّاء دائماً مكتوب",
        "القانوني اختياري"
      ],
      "en": [
        "Legal arises from contract/law; constructive arises from practices/statements creating a valid expectation",
        "No difference",
        "Constructive is always written",
        "Legal is optional"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IAS 37 يعترف بكلا النوعين عندما تستوفى شروط الالتزام الحالي.",
      "en": "IAS 37 recognises both types when present-obligation criteria are met."
    },
    "reference": "IAS 37 — obligations",
    "difficulty": "easy",
    "examDomain": "Present obligation"
  },
  {
    "id": "ifrs-depthc-ias37-02",
    "track": "IFRS",
    "topic": "IAS 37 — Probable outflow",
    "question": {
      "ar": "ما معنى probable لأغراض الاعتراف بالمخصص؟",
      "en": "What does probable mean for recognising a provision?"
    },
    "choices": {
      "ar": [
        "أن يكون حدوث التدفق الخارج أكثر ترجيحاً من عدم حدوثه",
        "احتمال 10%",
        "مؤكد 100% فقط",
        "أي احتمال مهما كان"
      ],
      "en": [
        "More likely than not that an outflow will occur",
        "10% chance",
        "Only 100% certain",
        "Any possibility"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "المخصص يتطلب أن يكون تدفق الموارد مرجحاً بدرجة أكثر من عدمه مع تقدير موثوق.",
      "en": "A provision requires an outflow to be more likely than not, together with a reliable estimate."
    },
    "reference": "IAS 37 — recognition",
    "difficulty": "intermediate",
    "examDomain": "Probable outflow"
  },
  {
    "id": "ifrs-depthc-ias37-03",
    "track": "IFRS",
    "topic": "IAS 37 — Rare reliable estimate exception",
    "question": {
      "ar": "ماذا يحدث في الحالة النادرة التي يوجد فيها التزام حالي لكن لا يمكن قياسه بدرجة موثوقة؟",
      "en": "What happens in the rare case of a present obligation that cannot be measured reliably?"
    },
    "choices": {
      "ar": [
        "لا يعترف بمخصص ويعامل كالتزام محتمل مع الإفصاح المناسب",
        "يعترف بأي مبلغ عشوائي",
        "يعترف بصفر دون إفصاح",
        "يسجل كأصل"
      ],
      "en": [
        "No provision; treat as contingent liability with appropriate disclosure",
        "Recognise arbitrary amount",
        "Record zero with no disclosure",
        "Record asset"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "عدم القدرة النادرة على القياس الموثوق تمنع الاعتراف لكن لا تلغي الحاجة للإفصاح.",
      "en": "Rare inability to make a reliable estimate prevents recognition but generally leads to contingent-liability disclosure."
    },
    "reference": "IAS 37 — reliable estimate",
    "difficulty": "hard",
    "examDomain": "Rare reliable estimate exception"
  },
  {
    "id": "ifrs-depthc-ias37-04",
    "track": "IFRS",
    "topic": "IAS 37 — Possible inflow",
    "question": {
      "ar": "كيف يعالج أصل محتمل عندما يكون تدفق المنافع ممكناً لكن غير مرجح بدرجة كافية للاعتراف؟",
      "en": "How is a contingent asset treated when an inflow is possible but not sufficiently probable for recognition?"
    },
    "choices": {
      "ar": [
        "لا يعترف، وقد لا يفصح إذا لم يكن التدفق مرجحاً",
        "يعترف فوراً",
        "يسجل كإيراد مؤكد",
        "كمخزون"
      ],
      "en": [
        "Not recognised, and disclosure may not be required unless inflow becomes probable",
        "Recognise immediately",
        "Certain revenue",
        "Inventory"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الأصول المحتملة لا يعترف بها، ويعتمد الإفصاح على درجة احتمال التدفق.",
      "en": "Contingent assets are not recognised; disclosure depends on likelihood of inflow."
    },
    "reference": "IAS 37 — contingent assets",
    "difficulty": "easy",
    "examDomain": "Possible inflow"
  },
  {
    "id": "ifrs-depthc-ias37-05",
    "track": "IFRS",
    "topic": "IAS 37 — Virtually certain inflow",
    "question": {
      "ar": "إذا أصبح تدفق المنافع من أصل محتمل شبه مؤكد، ما النتيجة؟",
      "en": "If an inflow related to a contingent asset becomes virtually certain, what happens?"
    },
    "choices": {
      "ar": [
        "لم يعد الأصل محتملاً ويعترف بالأصل والدخل وفق المعيار ذي الصلة",
        "يبقى دون اعتراف",
        "يسجل التزام",
        "يلغى"
      ],
      "en": [
        "It is no longer contingent; the asset and related income are recognised under the relevant standard",
        "Remain unrecognised",
        "Record liability",
        "Cancel it"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "عندما يصبح التدفق شبه مؤكد، يصبح الاعتراف مناسباً وفق المتطلبات ذات الصلة.",
      "en": "When inflow becomes virtually certain, recognition becomes appropriate under the relevant requirements."
    },
    "reference": "IAS 37 — contingent assets",
    "difficulty": "intermediate",
    "examDomain": "Virtually certain inflow"
  },
  {
    "id": "ifrs-depthc-ias37-06",
    "track": "IFRS",
    "topic": "IAS 37 — Risks and uncertainties",
    "question": {
      "ar": "كيف تؤثر المخاطر وعدم التأكد في قياس المخصص؟",
      "en": "How do risks and uncertainties affect provision measurement?"
    },
    "choices": {
      "ar": [
        "يؤخذان في الاعتبار دون مبالغة متعمدة أو تكوين احتياطيات مفرطة",
        "يتجاهلان",
        "يزاد المخصص دائماً 50%",
        "يخفض إلى صفر"
      ],
      "en": [
        "They are considered without deliberate overstatement or excessive reserves",
        "Ignored",
        "Always add 50%",
        "Reduce to zero"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "أفضل تقدير يعكس المخاطر وعدم التأكد مع الحذر دون تحيز أو احتياطات مفرطة.",
      "en": "Best estimate reflects risks and uncertainties with prudence but without bias or excessive reserves."
    },
    "reference": "IAS 37 — measurement uncertainty",
    "difficulty": "intermediate",
    "examDomain": "Risks and uncertainties"
  },
  {
    "id": "ifrs-depthc-ias37-07",
    "track": "IFRS",
    "topic": "IAS 37 — Expected value",
    "question": {
      "ar": "متى تكون طريقة القيمة المتوقعة مناسبة غالباً لقياس مخصص؟",
      "en": "When is an expected-value method often appropriate for measuring a provision?"
    },
    "choices": {
      "ar": [
        "عند وجود مجموعة كبيرة من التزامات متشابهة ذات نتائج احتمالية متعددة",
        "عند التزام واحد بنتيجة ثنائية فقط دائماً",
        "فقط عند عدم وجود بيانات",
        "لا تستخدم أبداً"
      ],
      "en": [
        "For a large population of similar obligations with multiple probability-weighted outcomes",
        "Always for one binary obligation only",
        "Only with no data",
        "Never used"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "القيمة المتوقعة مفيدة للمجموعات الكبيرة لأنها تزن النتائج باحتمالاتها.",
      "en": "Expected value is useful for large populations because it probability-weights possible outcomes."
    },
    "reference": "IAS 37 — best estimate",
    "difficulty": "hard",
    "examDomain": "Expected value"
  },
  {
    "id": "ifrs-depthc-ias37-08",
    "track": "IFRS",
    "topic": "IAS 37 — Single obligation",
    "question": {
      "ar": "عند التزام فردي، هل النتيجة الأكثر احتمالاً تكفي دائماً وحدها كأفضل تقدير؟",
      "en": "For a single obligation, is the single most likely outcome always sufficient as the best estimate?"
    },
    "choices": {
      "ar": [
        "ليس دائماً؛ يجب النظر إلى النتائج الأخرى واحتمالاتها إذا كان أثرها مهماً",
        "نعم دائماً",
        "لا تستخدم أبداً",
        "فقط إذا كان الالتزام نقدياً"
      ],
      "en": [
        "Not always; other possible outcomes and probabilities must be considered when relevant",
        "Always yes",
        "Never used",
        "Only for cash obligations"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "النتيجة الأكثر احتمالاً نقطة بداية محتملة لكنها قد تحتاج تعديل إذا كانت النتائج الأخرى جوهرية.",
      "en": "The most likely outcome may be a starting point but can require adjustment when other outcomes are material."
    },
    "reference": "IAS 37 — single obligations",
    "difficulty": "hard",
    "examDomain": "Single obligation"
  },
  {
    "id": "ifrs-depthc-ias37-09",
    "track": "IFRS",
    "topic": "IAS 37 — Future events",
    "question": {
      "ar": "هل يمكن أن تؤثر أحداث مستقبلية متوقعة موضوعياً في قياس المخصص؟",
      "en": "Can objectively expected future events affect provision measurement?"
    },
    "choices": {
      "ar": [
        "نعم إذا توجد أدلة موضوعية كافية على حدوثها",
        "لا أبداً",
        "فقط بعد حدوثها",
        "فقط إذا كانت ضريبية"
      ],
      "en": [
        "Yes, when sufficient objective evidence exists that they will occur",
        "Never",
        "Only after occurrence",
        "Only for tax"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يمكن أن تعكس القياسات تغييرات مستقبلية متوقعة مثل التطور التقني عند وجود دليل موضوعي كافٍ.",
      "en": "Measurements may reflect expected future developments such as technology when supported by sufficient objective evidence."
    },
    "reference": "IAS 37 — future events",
    "difficulty": "intermediate",
    "examDomain": "Future events"
  },
  {
    "id": "ifrs-depthc-ias37-10",
    "track": "IFRS",
    "topic": "IAS 37 — Asset disposal gains",
    "question": {
      "ar": "هل تؤخذ أرباح متوقعة من بيع أصول في الاعتبار عند قياس مخصص؟",
      "en": "Are expected gains from disposal of assets taken into account in measuring a provision?"
    },
    "choices": {
      "ar": [
        "لا",
        "نعم دائماً",
        "فقط إذا كان الأصل غير متداول",
        "فقط إذا تم توقيع عقد بيع"
      ],
      "en": [
        "No",
        "Always yes",
        "Only for non-current assets",
        "Only if sale contract signed"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "أرباح التخلص المتوقعة لا تدخل في قياس المخصص حتى لو كان التخلص مرتبطاً بالحدث.",
      "en": "Expected disposal gains are not taken into account in measuring a provision."
    },
    "reference": "IAS 37 — disposal gains",
    "difficulty": "easy",
    "examDomain": "Asset disposal gains"
  },
  {
    "id": "ifrs-depthc-ias37-11",
    "track": "IFRS",
    "topic": "IAS 37 — Use of provisions",
    "question": {
      "ar": "هل يجوز استخدام مخصص لتغطية إنفاق مختلف عن الغرض الذي أنشئ من أجله؟",
      "en": "Can a provision be used for expenditure different from the purpose for which it was originally recognised?"
    },
    "choices": {
      "ar": [
        "لا",
        "نعم بحرية",
        "فقط بعد سنة",
        "فقط إذا وافق المراجع"
      ],
      "en": [
        "No",
        "Freely yes",
        "Only after one year",
        "Only if auditor approves"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يستخدم المخصص فقط للنفقات التي أنشئ من أجلها حتى لا يتم إخفاء أثر أحداث مختلفة.",
      "en": "A provision is used only for expenditures for which it was originally recognised."
    },
    "reference": "IAS 37 — use of provisions",
    "difficulty": "intermediate",
    "examDomain": "Use of provisions"
  },
  {
    "id": "ifrs-depthc-ias37-12",
    "track": "IFRS",
    "topic": "IAS 37 — Review",
    "question": {
      "ar": "ماذا يحدث للمخصصات في كل تاريخ تقرير؟",
      "en": "What happens to provisions at each reporting date?"
    },
    "choices": {
      "ar": [
        "تراجع وتعدل لتعكس أفضل تقدير حالي، وتعكس إذا لم يعد التدفق مرجحاً",
        "تبقى ثابتة دائماً",
        "تزاد تلقائياً",
        "تحول لحقوق ملكية"
      ],
      "en": [
        "Reviewed and adjusted to current best estimate; reversed if outflow is no longer probable",
        "Always remain fixed",
        "Automatically increase",
        "Transfer to equity"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "المخصصات ليست أرقاماً ثابتة؛ يجب إعادة تقييمها في كل تاريخ تقرير.",
      "en": "Provisions are not static; they are reassessed at each reporting date."
    },
    "reference": "IAS 37 — review",
    "difficulty": "easy",
    "examDomain": "Review"
  }
] satisfies ExamQuestion[];
