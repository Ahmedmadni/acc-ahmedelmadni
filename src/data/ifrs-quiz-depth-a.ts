import type { ExamQuestion } from "@/lib/exam-bank";

/** Phase 3 depth batch A: IAS 2, IFRS 9, IFRS 15 and IFRS 16. */
export const IFRS_DEPTH_A_QUESTION_SEED = [
  {
    "id": "ifrs-deptha-ias2-01",
    "track": "IFRS",
    "topic": "IAS 2 — Purchase cost",
    "question": {
      "ar": "كيف تؤثر الخصومات التجارية على تكلفة شراء المخزون؟",
      "en": "How do trade discounts affect the purchase cost of inventory?"
    },
    "choices": {
      "ar": [
        "تخصم من التكلفة",
        "تضاف إلى التكلفة",
        "تسجل كشهرة",
        "لا تؤثر أبداً"
      ],
      "en": [
        "Deducted from cost",
        "Added to cost",
        "Recorded as goodwill",
        "Never affect cost"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تخفض الخصومات والحسومات تكلفة شراء المخزون.",
      "en": "Trade discounts and rebates reduce inventory purchase cost."
    },
    "reference": "IAS 2 — cost of purchase",
    "difficulty": "easy",
    "examDomain": "Purchase cost"
  },
  {
    "id": "ifrs-deptha-ias2-02",
    "track": "IFRS",
    "topic": "IAS 2 — Storage costs",
    "question": {
      "ar": "ما المعالجة المعتادة لتكاليف التخزين غير الضرورية لمرحلة إنتاج لاحقة؟",
      "en": "What is the usual treatment of storage costs not necessary before a further production stage?"
    },
    "choices": {
      "ar": [
        "مصروف عند حدوثه",
        "رسملة دائماً",
        "أصل غير ملموس",
        "التزام"
      ],
      "en": [
        "Expense as incurred",
        "Always capitalise",
        "Intangible asset",
        "Liability"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تكاليف التخزين تستبعد من تكلفة المخزون إلا إذا كانت ضرورية في عملية الإنتاج قبل مرحلة لاحقة.",
      "en": "Storage costs are excluded unless necessary in the production process before a further stage."
    },
    "reference": "IAS 2 — excluded costs",
    "difficulty": "intermediate",
    "examDomain": "Storage costs"
  },
  {
    "id": "ifrs-deptha-ias2-03",
    "track": "IFRS",
    "topic": "IAS 2 — Specific identification",
    "question": {
      "ar": "متى تكون طريقة التحديد المحدد للتكلفة مطلوبة؟",
      "en": "When is specific identification of cost required?"
    },
    "choices": {
      "ar": [
        "للأصناف غير القابلة للتبادل عادةً أو المخصصة لمشروعات محددة",
        "لكل السلع المتجانسة",
        "فقط للنقد",
        "فقط للمواد الخام"
      ],
      "en": [
        "For items not ordinarily interchangeable or segregated for specific projects",
        "For all homogeneous goods",
        "Only cash",
        "Only raw materials"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "التحديد المحدد مطلوب للأصناف غير القابلة للتبادل ولعناصر مخصصة لمشروعات محددة.",
      "en": "Specific identification is required for non-interchangeable items and items segregated for specific projects."
    },
    "reference": "IAS 2.23",
    "difficulty": "intermediate",
    "examDomain": "Specific identification"
  },
  {
    "id": "ifrs-deptha-ias2-04",
    "track": "IFRS",
    "topic": "IAS 2 — Consistency",
    "question": {
      "ar": "هل يبرر اختلاف الموقع الجغرافي وحده استخدام صيغة تكلفة مختلفة لمخزون مماثل في طبيعته واستخدامه؟",
      "en": "Does geographical location alone justify a different cost formula for inventory of similar nature and use?"
    },
    "choices": {
      "ar": [
        "لا",
        "نعم دائماً",
        "فقط خارج الدولة",
        "فقط إذا تغيرت العملة"
      ],
      "en": [
        "No",
        "Always yes",
        "Only outside the country",
        "Only if currency changes"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "ينبغي استخدام صيغة واحدة للمخزون ذي الطبيعة والاستخدام المتشابهين، والموقع وحده لا يبرر اختلافاً.",
      "en": "The same formula is used for inventories of similar nature and use; location alone does not justify a different formula."
    },
    "reference": "IAS 2.25–26",
    "difficulty": "hard",
    "examDomain": "Consistency"
  },
  {
    "id": "ifrs-deptha-ias2-05",
    "track": "IFRS",
    "topic": "IAS 2 — NRV grouping",
    "question": {
      "ar": "هل يجوز عادةً اختبار NRV على إجمالي المخزون ككتلة واحدة؟",
      "en": "Is it generally appropriate to test NRV for all inventory as one aggregate pool?"
    },
    "choices": {
      "ar": [
        "لا، الأصل التقييم بنداً بنداً مع تجميع محدود عند استيفاء شروط التشابه",
        "نعم دائماً",
        "فقط إذا كانت الشركة كبيرة",
        "فقط إذا كان المخزون مؤمناً"
      ],
      "en": [
        "No; item-by-item assessment is the norm with limited grouping for similar items",
        "Always yes",
        "Only for large entities",
        "Only if insured"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IAS 2 يركز على بندٍ بند مع تجميع محدود لأصناف متشابهة بشروط محددة.",
      "en": "IAS 2 generally assesses NRV item by item, permitting limited grouping of similar items under specified conditions."
    },
    "reference": "IAS 2.29",
    "difficulty": "hard",
    "examDomain": "NRV grouping"
  },
  {
    "id": "ifrs-deptha-ias2-06",
    "track": "IFRS",
    "topic": "IAS 2 — Broker-traders",
    "question": {
      "ar": "كيف قد يقيس وسيط-تاجر السلع مخزونه ضمن الاستثناء الخاص في IAS 2؟",
      "en": "How may a commodity broker-trader measure inventory under the IAS 2 exception?"
    },
    "choices": {
      "ar": [
        "بالقيمة العادلة ناقص تكاليف البيع مع إثبات التغير في الربح أو الخسارة",
        "بالتكلفة فقط",
        "بالقيمة الاسمية",
        "بالتكلفة المطفأة"
      ],
      "en": [
        "At fair value less costs to sell with changes in profit or loss",
        "Cost only",
        "Nominal value",
        "Amortised cost"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يوجد استثناء لوسطاء-تجار السلع الذين يقيسون بالقيمة العادلة ناقص تكاليف البيع.",
      "en": "There is an exception for commodity broker-traders measuring at fair value less costs to sell."
    },
    "reference": "IAS 2 — broker-trader exception",
    "difficulty": "hard",
    "examDomain": "Broker-traders"
  },
  {
    "id": "ifrs-deptha-ias2-07",
    "track": "IFRS",
    "topic": "IAS 2 — Write-down expense",
    "question": {
      "ar": "أين يعترف عادةً بتخفيض المخزون إلى NRV؟",
      "en": "Where is an inventory write-down to NRV generally recognised?"
    },
    "choices": {
      "ar": [
        "كمصروف في الفترة",
        "في حقوق الملكية مباشرة دائماً",
        "كأصل",
        "كالتزام تمويلي"
      ],
      "en": [
        "As an expense in the period",
        "Always directly in equity",
        "As an asset",
        "As a financing liability"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يُعترف بالتخفيض كمصروف في الفترة التي يحدث فيها.",
      "en": "The write-down is recognised as an expense in the period it occurs."
    },
    "reference": "IAS 2.34",
    "difficulty": "intermediate",
    "examDomain": "Write-down expense"
  },
  {
    "id": "ifrs-deptha-ifrs9-01",
    "track": "IFRS",
    "topic": "IFRS 9 — Financial liabilities",
    "question": {
      "ar": "ما القياس اللاحق الشائع للالتزامات المالية غير المصنفة بالقيمة العادلة من خلال الربح أو الخسارة؟",
      "en": "What is the common subsequent measurement for financial liabilities not at FVTPL?"
    },
    "choices": {
      "ar": [
        "التكلفة المطفأة باستخدام معدل الفائدة الفعلي",
        "NRV",
        "القيمة الاسمية دائماً",
        "التكلفة التاريخية دون فائدة"
      ],
      "en": [
        "Amortised cost using the effective interest method",
        "NRV",
        "Always nominal value",
        "Historical cost without interest"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "معظم الالتزامات المالية تقاس بالتكلفة المطفأة ما لم تقع ضمن فئة أو استثناء آخر.",
      "en": "Most financial liabilities are measured at amortised cost unless another category/exception applies."
    },
    "reference": "IFRS 9 — financial liabilities",
    "difficulty": "easy",
    "examDomain": "Financial liabilities"
  },
  {
    "id": "ifrs-deptha-ifrs9-02",
    "track": "IFRS",
    "topic": "IFRS 9 — Transaction costs",
    "question": {
      "ar": "كيف تعالج تكاليف المعاملة لأصل مالي مصنف FVTPL؟",
      "en": "How are transaction costs for a financial asset at FVTPL generally treated?"
    },
    "choices": {
      "ar": [
        "تحمل على المصروف عند حدوثها",
        "تضاف دائماً للقيمة الدفترية",
        "تسجل شهرة",
        "تؤجل حتى الاستحقاق"
      ],
      "en": [
        "Expensed as incurred",
        "Always added to carrying amount",
        "Recorded as goodwill",
        "Deferred until maturity"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تكاليف المعاملة للأدوات المقاسة بالقيمة العادلة من خلال الربح أو الخسارة لا تضاف للقياس الأولي.",
      "en": "Transaction costs for FVTPL instruments are not included in initial measurement and are expensed."
    },
    "reference": "IFRS 9 — initial measurement",
    "difficulty": "intermediate",
    "examDomain": "Transaction costs"
  },
  {
    "id": "ifrs-deptha-ifrs9-03",
    "track": "IFRS",
    "topic": "IFRS 9 — Reclassification",
    "question": {
      "ar": "متى يعاد تصنيف الأصول المالية بين فئات IFRS 9؟",
      "en": "When are financial assets reclassified between IFRS 9 categories?"
    },
    "choices": {
      "ar": [
        "فقط عندما تغير المنشأة نموذج أعمال إدارة الأصول المالية",
        "كل نهاية سنة",
        "عند انخفاض السعر",
        "عند تغيير المراجع"
      ],
      "en": [
        "Only when the entity changes its business model for managing financial assets",
        "Every year-end",
        "When price falls",
        "When auditor changes"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "إعادة التصنيف مطلوبة فقط عند تغير حقيقي في نموذج الأعمال، وهو أمر غير متكرر.",
      "en": "Reclassification is required only when the business model genuinely changes, which is expected to be infrequent."
    },
    "reference": "IFRS 9 — reclassification",
    "difficulty": "hard",
    "examDomain": "Reclassification"
  },
  {
    "id": "ifrs-deptha-ifrs9-04",
    "track": "IFRS",
    "topic": "IFRS 9 — Derecognition assets",
    "question": {
      "ar": "متى يزال أصل مالي من الدفاتر بصورة عامة؟",
      "en": "When is a financial asset generally derecognised?"
    },
    "choices": {
      "ar": [
        "عند انتهاء الحقوق التعاقدية للتدفقات أو نقل الأصل مع استيفاء شروط الإزالة",
        "عند انخفاض قيمته فقط",
        "بعد سنة",
        "عند تغيير العملة"
      ],
      "en": [
        "When contractual cash-flow rights expire or the asset is transferred and derecognition criteria are met",
        "Only when impaired",
        "After one year",
        "When currency changes"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الإزالة تعتمد على انتهاء الحقوق أو انتقالها وتقييم المخاطر والمنافع/السيطرة حسب الحالة.",
      "en": "Derecognition depends on expiry or transfer of rights and the relevant risks/rewards/control assessment."
    },
    "reference": "IFRS 9 — derecognition",
    "difficulty": "intermediate",
    "examDomain": "Derecognition assets"
  },
  {
    "id": "ifrs-deptha-ifrs9-05",
    "track": "IFRS",
    "topic": "IFRS 9 — ECL measurement",
    "question": {
      "ar": "أي عناصر تدخل في قياس الخسائر الائتمانية المتوقعة؟",
      "en": "Which elements are included in ECL measurement?"
    },
    "choices": {
      "ar": [
        "مبلغ غير متحيز مرجح بالاحتمالات والقيمة الزمنية للنقود ومعلومات معقولة ومدعومة",
        "أسوأ سيناريو فقط",
        "الخسائر التاريخية فقط",
        "تصنيف العميل فقط"
      ],
      "en": [
        "Unbiased probability-weighted amount, time value of money and reasonable supportable information",
        "Worst case only",
        "Historical losses only",
        "Customer rating only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "ECL تقدير احتمالي مستقبلي يأخذ القيمة الزمنية والمعلومات المتاحة بصورة معقولة ومدعومة.",
      "en": "ECL is a forward-looking probability-weighted estimate incorporating time value and reasonable supportable information."
    },
    "reference": "IFRS 9 — ECL measurement",
    "difficulty": "hard",
    "examDomain": "ECL measurement"
  },
  {
    "id": "ifrs-deptha-ifrs9-06",
    "track": "IFRS",
    "topic": "IFRS 9 — Credit-impaired assets",
    "question": {
      "ar": "على أي رصيد يحسب إيراد الفائدة عادةً لأصل أصبح متدهوراً ائتمانياً بعد الاعتراف الأولي؟",
      "en": "On what balance is interest revenue generally calculated for a financial asset that becomes credit-impaired after initial recognition?"
    },
    "choices": {
      "ar": [
        "صافي القيمة الدفترية بعد مخصص الخسارة",
        "إجمالي القيمة دائماً",
        "القيمة الاسمية فقط",
        "القيمة العادلة"
      ],
      "en": [
        "Net carrying amount after loss allowance",
        "Always gross carrying amount",
        "Nominal value only",
        "Fair value"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "للأصل المتدهور ائتمانياً في النموذج العام، يحسب معدل الفائدة على صافي القيمة الدفترية.",
      "en": "For a credit-impaired asset in the general model, interest is calculated on the net carrying amount."
    },
    "reference": "IFRS 9 — credit-impaired assets",
    "difficulty": "hard",
    "examDomain": "Credit-impaired assets"
  },
  {
    "id": "ifrs-deptha-ifrs9-07",
    "track": "IFRS",
    "topic": "IFRS 9 — Write-offs",
    "question": {
      "ar": "متى تشطب القيمة الإجمالية لأصل مالي؟",
      "en": "When is the gross carrying amount of a financial asset written off?"
    },
    "choices": {
      "ar": [
        "عندما لا توجد توقعات معقولة للاسترداد",
        "عند تأخر يوم واحد",
        "عند انخفاض سعر الفائدة",
        "عند نهاية السنة دائماً"
      ],
      "en": [
        "When there are no reasonable expectations of recovery",
        "One day overdue",
        "When interest rates fall",
        "Always at year-end"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الشطب يرتبط بانعدام توقعات معقولة للاسترداد وقد يكون كلياً أو جزئياً.",
      "en": "Write-off occurs when there are no reasonable expectations of recovery and may be full or partial."
    },
    "reference": "IFRS 9 — write-offs",
    "difficulty": "intermediate",
    "examDomain": "Write-offs"
  },
  {
    "id": "ifrs-deptha-ifrs9-08",
    "track": "IFRS",
    "topic": "IFRS 9 — Hedge accounting",
    "question": {
      "ar": "ما الهدف العام لمحاسبة التحوط في IFRS 9؟",
      "en": "What is the overall objective of hedge accounting in IFRS 9?"
    },
    "choices": {
      "ar": [
        "عكس أثر أنشطة إدارة المخاطر في القوائم المالية بصورة أفضل",
        "إلغاء كل تقلبات الربح",
        "منع استخدام المشتقات",
        "تثبيت أسعار السوق"
      ],
      "en": [
        "Better reflect the effect of risk-management activities in financial statements",
        "Eliminate all profit volatility",
        "Ban derivatives",
        "Fix market prices"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "محاسبة التحوط تهدف لمواءمة المحاسبة بصورة أقرب مع أنشطة إدارة المخاطر المؤهلة.",
      "en": "Hedge accounting aims to align accounting more closely with qualifying risk-management activities."
    },
    "reference": "IFRS 9 — hedge accounting",
    "difficulty": "easy",
    "examDomain": "Hedge accounting"
  },
  {
    "id": "ifrs-deptha-ifrs9-09",
    "track": "IFRS",
    "topic": "IFRS 9 — Own credit",
    "question": {
      "ar": "عند اختيار قياس التزام مالي بالقيمة العادلة من خلال الربح أو الخسارة، أين تعرض عادةً تغييرات القيمة العادلة الناشئة عن مخاطر الائتمان الخاصة بالمنشأة؟",
      "en": "For a financial liability designated at FVTPL, where are fair-value changes attributable to own credit risk generally presented?"
    },
    "choices": {
      "ar": [
        "في OCI ما لم يخلق ذلك أو يزيد عدم تطابق محاسبي",
        "دائماً في الإيراد",
        "دائماً في المخزون",
        "لا تعترف"
      ],
      "en": [
        "In OCI unless that would create or enlarge an accounting mismatch",
        "Always revenue",
        "Always inventory",
        "Not recognised"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "جزء مخاطر الائتمان الخاصة يعرض عادةً في OCI مع استثناء عدم التطابق المحاسبي.",
      "en": "The own-credit portion is generally presented in OCI, subject to the accounting-mismatch exception."
    },
    "reference": "IFRS 9 — own credit risk",
    "difficulty": "hard",
    "examDomain": "Own credit"
  },
  {
    "id": "ifrs-deptha-ifrs9-10",
    "track": "IFRS",
    "topic": "IFRS 9 — Modified cash flows",
    "question": {
      "ar": "إذا عدلت شروط أصل مالي دون أن تؤدي التعديلات إلى إزالته، ماذا يحدث عادةً؟",
      "en": "If a financial asset is modified without resulting in derecognition, what generally happens?"
    },
    "choices": {
      "ar": [
        "يعاد حساب إجمالي القيمة الدفترية باستخدام التدفقات المعدلة ومعدل الفائدة الفعلي الأصلي ويعترف بأثر التعديل",
        "لا يحدث شيء",
        "يزال الأصل دائماً",
        "يتحول إلى حقوق ملكية"
      ],
      "en": [
        "Recalculate gross carrying amount using modified cash flows and original effective interest rate, recognising a modification effect",
        "Nothing",
        "Always derecognise",
        "Convert to equity"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "عندما لا تتحقق الإزالة، تعاد القيمة بناءً على التدفقات المعدلة بمعدل الفائدة الأصلي ويعترف بأثر التعديل.",
      "en": "When derecognition does not occur, the asset is recalculated using modified cash flows discounted at the original effective interest rate."
    },
    "reference": "IFRS 9 — modifications",
    "difficulty": "hard",
    "examDomain": "Modified cash flows"
  },
  {
    "id": "ifrs-deptha-ifrs9-11",
    "track": "IFRS",
    "topic": "IFRS 9 — Effective interest",
    "question": {
      "ar": "ما وظيفة طريقة معدل الفائدة الفعلي؟",
      "en": "What is the purpose of the effective interest method?"
    },
    "choices": {
      "ar": [
        "توزيع إيراد أو مصروف الفائدة وتكاليف/رسوم معينة على العمر ذي الصلة",
        "تحديد NRV",
        "قياس المخزون",
        "تحديد ضريبة القيمة المضافة"
      ],
      "en": [
        "Allocate interest revenue/expense and certain fees/costs over the relevant life",
        "Determine NRV",
        "Measure inventory",
        "Determine VAT"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الطريقة تحقق معدل عائد/تكلفة ثابتة تقريباً على القيمة الدفترية المطفأة عبر الزمن.",
      "en": "The method allocates interest and eligible fees/costs over time through the amortised-cost calculation."
    },
    "reference": "IFRS 9 — effective interest method",
    "difficulty": "intermediate",
    "examDomain": "Effective interest"
  },
  {
    "id": "ifrs-deptha-ifrs15-01",
    "track": "IFRS",
    "topic": "IFRS 15 — Contract criteria",
    "question": {
      "ar": "أي شرط من شروط وجود عقد ضمن IFRS 15؟",
      "en": "Which is a criterion for a contract under IFRS 15?"
    },
    "choices": {
      "ar": [
        "أن يكون لكل طرف حقوق قابلة للتحديد وشروط دفع قابلة للتحديد",
        "وجود فاتورة ضريبية فقط",
        "الدفع الكامل مقدماً دائماً",
        "مدة أكثر من سنة"
      ],
      "en": [
        "Each party's rights and payment terms can be identified",
        "Tax invoice only",
        "Always full prepayment",
        "Term over one year"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "من شروط العقد تحديد حقوق الأطراف وشروط الدفع، إلى جانب شروط أخرى مثل الاعتماد والجوهر التجاري والتحصيل المحتمل.",
      "en": "Contract criteria include identifiable rights and payment terms, along with approval, commercial substance and probable collection."
    },
    "reference": "IFRS 15.9",
    "difficulty": "easy",
    "examDomain": "Contract criteria"
  },
  {
    "id": "ifrs-deptha-ifrs15-02",
    "track": "IFRS",
    "topic": "IFRS 15 — Distinct goods",
    "question": {
      "ar": "متى تعد السلعة أو الخدمة مميزة؟",
      "en": "When is a good or service distinct?"
    },
    "choices": {
      "ar": [
        "إذا أمكن للعميل الانتفاع بها منفردة أو مع موارد متاحة وكانت منفصلة في سياق العقد",
        "إذا كان سعرها مرتفعاً",
        "إذا كانت مادية فقط",
        "إذا دفعت نقداً"
      ],
      "en": [
        "If the customer can benefit from it on its own/with available resources and it is separately identifiable in the contract",
        "If expensive",
        "If physical only",
        "If paid in cash"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "التمييز يتطلب قابلية الانتفاع وأن يكون الوعد منفصلاً في سياق العقد.",
      "en": "Distinctness requires benefit capability and separate identifiability within the contract."
    },
    "reference": "IFRS 15 — distinct goods/services",
    "difficulty": "intermediate",
    "examDomain": "Distinct goods"
  },
  {
    "id": "ifrs-deptha-ifrs15-03",
    "track": "IFRS",
    "topic": "IFRS 15 — Variable consideration method",
    "question": {
      "ar": "ما طريقتا تقدير المقابل المتغير؟",
      "en": "What are the two methods for estimating variable consideration?"
    },
    "choices": {
      "ar": [
        "القيمة المتوقعة أو المبلغ الأكثر احتمالاً",
        "FIFO وLIFO",
        "التكلفة والقيمة العادلة",
        "المباشرة وغير المباشرة"
      ],
      "en": [
        "Expected value or most likely amount",
        "FIFO and LIFO",
        "Cost and fair value",
        "Direct and indirect"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تستخدم الطريقة التي تتنبأ بصورة أفضل بمبلغ المقابل المتوقع استحقاقه.",
      "en": "The method that better predicts the amount of consideration is used."
    },
    "reference": "IFRS 15 — variable consideration",
    "difficulty": "intermediate",
    "examDomain": "Variable consideration method"
  },
  {
    "id": "ifrs-deptha-ifrs15-04",
    "track": "IFRS",
    "topic": "IFRS 15 — Significant financing",
    "question": {
      "ar": "متى تعد المنشأة سعر المعاملة لمكون تمويل مهم؟",
      "en": "When does an entity adjust transaction price for a significant financing component?"
    },
    "choices": {
      "ar": [
        "عندما يوفر توقيت الدفعات منفعة تمويل جوهرية لأحد الطرفين مع مراعاة العوامل والاستثناء العملي",
        "كلما كان هناك بيع آجل",
        "أبداً",
        "فقط للعقود النقدية"
      ],
      "en": [
        "When payment timing provides a significant financing benefit, considering relevant factors and the practical expedient",
        "For every credit sale",
        "Never",
        "Only cash contracts"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الغرض هو عرض الإيراد بالمبلغ الذي كان سيدفع لو دفعت المقابل نقداً عند نقل السلع أو الخدمات، مع استثناءات محددة.",
      "en": "The objective is to reflect the cash selling price at transfer, subject to specified factors and practical expedients."
    },
    "reference": "IFRS 15 — significant financing component",
    "difficulty": "hard",
    "examDomain": "Significant financing"
  },
  {
    "id": "ifrs-deptha-ifrs15-05",
    "track": "IFRS",
    "topic": "IFRS 15 — Principal agent",
    "question": {
      "ar": "ما السؤال المركزي في تقييم principal مقابل agent؟",
      "en": "What is the central question in principal-versus-agent assessment?"
    },
    "choices": {
      "ar": [
        "هل تسيطر المنشأة على السلعة أو الخدمة المحددة قبل نقلها للعميل؟",
        "من أصدر الفاتورة فقط؟",
        "من دفع الضريبة؟",
        "من يملك أكبر عدد موظفين؟"
      ],
      "en": [
        "Does the entity control the specified good or service before transfer to the customer?",
        "Who issued the invoice only?",
        "Who paid tax?",
        "Who has more employees?"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "السيطرة قبل النقل هي جوهر تحديد ما إذا كانت المنشأة أصيلاً أم وكيلاً.",
      "en": "Control of the specified good/service before transfer is central to principal-versus-agent assessment."
    },
    "reference": "IFRS 15 — principal versus agent",
    "difficulty": "hard",
    "examDomain": "Principal agent"
  },
  {
    "id": "ifrs-deptha-ifrs15-06",
    "track": "IFRS",
    "topic": "IFRS 15 — Contract acquisition costs",
    "question": {
      "ar": "كيف يعالج العمولة الإضافية التي لن تدفع لولا الحصول على العقد، إذا توقع استردادها؟",
      "en": "How is an incremental commission that would not be incurred without obtaining a contract treated if recovery is expected?"
    },
    "choices": {
      "ar": [
        "يعترف بها كأصل، مع وجود استثناء عملي لبعض الفترات القصيرة",
        "مصروف دائماً فوراً",
        "شهرة",
        "مخزون"
      ],
      "en": [
        "Recognise as an asset, subject to a practical expedient for certain short periods",
        "Always expense immediately",
        "Goodwill",
        "Inventory"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "التكاليف الإضافية للحصول على العقد ترسمل إذا توقع استردادها، مع استثناء عملي متعلق بفترة الاستهلاك.",
      "en": "Incremental costs of obtaining a contract are capitalised if recoverable, subject to a practical expedient."
    },
    "reference": "IFRS 15 — costs to obtain a contract",
    "difficulty": "intermediate",
    "examDomain": "Contract acquisition costs"
  },
  {
    "id": "ifrs-deptha-ifrs15-07",
    "track": "IFRS",
    "topic": "IFRS 15 — Warranties",
    "question": {
      "ar": "متى قد تمثل الضمانات التزام أداء منفصلاً؟",
      "en": "When may a warranty represent a separate performance obligation?"
    },
    "choices": {
      "ar": [
        "عندما تقدم خدمة إضافية تتجاوز مجرد التأكيد بأن المنتج يطابق المواصفات",
        "كل ضمان دائماً",
        "لا ضمان أبداً",
        "فقط إذا كان مجانياً"
      ],
      "en": [
        "When it provides an additional service beyond assurance that the product complies with specifications",
        "Every warranty",
        "No warranty ever",
        "Only if free"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "ضمان الخدمة يعالج كتزام أداء، بينما ضمان التأكيد يخضع عادةً لمتطلبات المخصصات.",
      "en": "A service-type warranty is a performance obligation; an assurance warranty is generally accounted for under provision requirements."
    },
    "reference": "IFRS 15 — warranties",
    "difficulty": "hard",
    "examDomain": "Warranties"
  },
  {
    "id": "ifrs-deptha-ifrs15-08",
    "track": "IFRS",
    "topic": "IFRS 15 — Rights of return",
    "question": {
      "ar": "في بيع مع حق إرجاع، ما التزام إضافي ينشأ عادةً؟",
      "en": "In a sale with a right of return, what additional liability generally arises?"
    },
    "choices": {
      "ar": [
        "التزام رد مبالغ مقابل المنتجات المتوقع إرجاعها",
        "التزام إيجار",
        "ضريبة مؤجلة",
        "شهرة"
      ],
      "en": [
        "Refund liability for products expected to be returned",
        "Lease liability",
        "Deferred tax",
        "Goodwill"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يعترف بالإيراد للمنتجات المتوقع عدم إرجاعها وبالتزام رد للمبالغ المتوقع ردها، مع أصل لحق استرداد المنتجات.",
      "en": "Revenue is recognised for products expected not to be returned, with a refund liability and an asset for recovery rights."
    },
    "reference": "IFRS 15 — right of return",
    "difficulty": "hard",
    "examDomain": "Rights of return"
  },
  {
    "id": "ifrs-deptha-ifrs15-09",
    "track": "IFRS",
    "topic": "IFRS 15 — Contract modifications",
    "question": {
      "ar": "متى يعالج تعديل العقد كعقد منفصل؟",
      "en": "When is a contract modification accounted for as a separate contract?"
    },
    "choices": {
      "ar": [
        "إذا أضاف سلعاً أو خدمات مميزة ويعكس السعر أسعار البيع المستقلة المناسبة",
        "كل تعديل",
        "لا تعديل",
        "فقط إذا انخفض السعر"
      ],
      "en": [
        "If it adds distinct goods/services and price reflects appropriate stand-alone selling prices",
        "Every modification",
        "No modification",
        "Only if price decreases"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "استيفاء شرط التميز والتسعير المناسب يؤدي لمعاملة التعديل كعقد منفصل.",
      "en": "Distinct added goods/services priced appropriately at stand-alone selling prices lead to separate-contract treatment."
    },
    "reference": "IFRS 15 — contract modifications",
    "difficulty": "hard",
    "examDomain": "Contract modifications"
  },
  {
    "id": "ifrs-deptha-ifrs15-10",
    "track": "IFRS",
    "topic": "IFRS 15 — Non-refundable upfront fees",
    "question": {
      "ar": "هل يعني الرسم المقدم غير القابل للاسترداد دائماً وجود إيراد فوري؟",
      "en": "Does a non-refundable upfront fee always create immediate revenue?"
    },
    "choices": {
      "ar": [
        "لا، يجب تقييم ما إذا كان الرسم يتعلق بنقل سلعة أو خدمة مميزة",
        "نعم دائماً",
        "فقط إذا دفع نقداً",
        "فقط إذا كان الرسم كبيراً"
      ],
      "en": [
        "No; assess whether the fee relates to transfer of a distinct good or service",
        "Always yes",
        "Only if paid cash",
        "Only if large"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "إذا لم يقابل الرسم أداءً مميزاً، قد يكون دفعة مقدمة لخدمات مستقبلية ويعترف به مع الأداء.",
      "en": "If the fee does not relate to a distinct performance, it may be an advance payment recognised as future performance occurs."
    },
    "reference": "IFRS 15 — upfront fees",
    "difficulty": "hard",
    "examDomain": "Non-refundable upfront fees"
  },
  {
    "id": "ifrs-deptha-ifrs16-01",
    "track": "IFRS",
    "topic": "IFRS 16 — Discount rate",
    "question": {
      "ar": "إذا تعذر تحديد معدل الفائدة الضمني في الإيجار بسهولة، ما المعدل الذي يستخدمه المستأجر؟",
      "en": "If the interest rate implicit in the lease cannot be readily determined, which rate does the lessee use?"
    },
    "choices": {
      "ar": [
        "معدل الاقتراض الإضافي للمستأجر",
        "معدل التضخم",
        "معدل الضريبة",
        "معدل العائد على الأسهم"
      ],
      "en": [
        "Lessee's incremental borrowing rate",
        "Inflation rate",
        "Tax rate",
        "Equity return"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يستخدم المستأجر معدل الاقتراض الإضافي عندما لا يمكن تحديد المعدل الضمني بسهولة.",
      "en": "The lessee uses its incremental borrowing rate when the implicit rate cannot be readily determined."
    },
    "reference": "IFRS 16 — discount rate",
    "difficulty": "easy",
    "examDomain": "Discount rate"
  },
  {
    "id": "ifrs-deptha-ifrs16-02",
    "track": "IFRS",
    "topic": "IFRS 16 — Lease term",
    "question": {
      "ar": "ما الذي يدخل في مدة الإيجار بجانب الفترة غير القابلة للإلغاء؟",
      "en": "What may be included in lease term in addition to the non-cancellable period?"
    },
    "choices": {
      "ar": [
        "فترات خيار التمديد إذا كان من المؤكد بدرجة معقولة ممارسته وفترات الإنهاء إذا كان من المؤكد بدرجة معقولة عدم ممارسته",
        "كل الخيارات تلقائياً",
        "فقط أول شهر",
        "لا شيء"
      ],
      "en": [
        "Extension periods reasonably certain to be exercised and termination-option periods reasonably certain not to be exercised",
        "All options automatically",
        "Only first month",
        "Nothing"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "مدة الإيجار تعكس الحوافز الاقتصادية المتعلقة بالتمديد والإنهاء وفق معيار اليقين المعقول.",
      "en": "Lease term reflects economic incentives for extension/termination under the reasonably-certain threshold."
    },
    "reference": "IFRS 16 — lease term",
    "difficulty": "intermediate",
    "examDomain": "Lease term"
  },
  {
    "id": "ifrs-deptha-ifrs16-03",
    "track": "IFRS",
    "topic": "IFRS 16 — Low-value exemption",
    "question": {
      "ar": "هل يعتمد إعفاء الأصل منخفض القيمة على قيمة الأصل عندما يكون جديداً؟",
      "en": "Does the low-value asset exemption consider the value of the underlying asset when new?"
    },
    "choices": {
      "ar": [
        "نعم",
        "لا، يعتمد فقط على حجم المستأجر",
        "فقط على مدة العقد",
        "فقط على القيمة الدفترية"
      ],
      "en": [
        "Yes",
        "No; only lessee size",
        "Only contract term",
        "Only carrying amount"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تقييم انخفاض القيمة يتعلق بقيمة الأصل الأساسي عندما يكون جديداً وليس بحجم المنشأة المستأجرة.",
      "en": "The low-value assessment is based on the value of the underlying asset when new, not the lessee's size."
    },
    "reference": "IFRS 16 — low-value assets",
    "difficulty": "easy",
    "examDomain": "Low-value exemption"
  },
  {
    "id": "ifrs-deptha-ifrs16-04",
    "track": "IFRS",
    "topic": "IFRS 16 — Lease and non-lease components",
    "question": {
      "ar": "كيف يوزع المستأجر المقابل على مكونات الإيجار وغير الإيجار إذا لم يستخدم الاستثناء العملي؟",
      "en": "How does a lessee allocate consideration between lease and non-lease components if it does not use the practical expedient?"
    },
    "choices": {
      "ar": [
        "على أساس أسعار البيع المستقلة النسبية",
        "بالتساوي دائماً",
        "حسب مساحة المكتب",
        "حسب النقد المدفوع فقط"
      ],
      "en": [
        "Based on relative stand-alone prices",
        "Always equally",
        "By office area",
        "Cash paid only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يفصل المستأجر المكونات ويوزع المقابل بناءً على الأسعار المستقلة النسبية ما لم ينتخب الاستثناء العملي.",
      "en": "The lessee separates components and allocates consideration based on relative stand-alone prices unless electing the practical expedient."
    },
    "reference": "IFRS 16 — components",
    "difficulty": "intermediate",
    "examDomain": "Lease and non-lease components"
  },
  {
    "id": "ifrs-deptha-ifrs16-05",
    "track": "IFRS",
    "topic": "IFRS 16 — Initial direct costs",
    "question": {
      "ar": "كيف تؤثر التكاليف المباشرة الأولية للمستأجر على أصل حق الاستخدام؟",
      "en": "How do a lessee's initial direct costs affect the ROU asset?"
    },
    "choices": {
      "ar": [
        "تضاف إلى القياس الأولي لأصل حق الاستخدام",
        "تخفض التزام الإيجار مباشرة",
        "تسجل كإيراد",
        "تتجاهل"
      ],
      "en": [
        "Added to initial measurement of the ROU asset",
        "Directly reduce lease liability",
        "Recorded as revenue",
        "Ignored"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "التكاليف المباشرة الأولية التي تستوفي التعريف تدخل في أصل حق الاستخدام.",
      "en": "Qualifying initial direct costs are included in the initial ROU asset."
    },
    "reference": "IFRS 16 — initial direct costs",
    "difficulty": "intermediate",
    "examDomain": "Initial direct costs"
  },
  {
    "id": "ifrs-deptha-ifrs16-06",
    "track": "IFRS",
    "topic": "IFRS 16 — Lessor classification",
    "question": {
      "ar": "كيف يصنف المؤجر عقود الإيجار؟",
      "en": "How does a lessor classify leases?"
    },
    "choices": {
      "ar": [
        "تمويلي أو تشغيلي حسب انتقال المخاطر والمنافع الجوهرية",
        "كلها تمويلية",
        "كلها تشغيلية",
        "لا يوجد تصنيف"
      ],
      "en": [
        "Finance or operating depending on transfer of substantially all risks and rewards",
        "All finance",
        "All operating",
        "No classification"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يستمر المؤجر في تصنيف الإيجار تمويلياً أو تشغيلياً حسب جوهر انتقال المخاطر والمنافع.",
      "en": "Lessors classify leases as finance or operating based on transfer of substantially all risks and rewards."
    },
    "reference": "IFRS 16 — lessor classification",
    "difficulty": "easy",
    "examDomain": "Lessor classification"
  },
  {
    "id": "ifrs-deptha-ifrs16-07",
    "track": "IFRS",
    "topic": "IFRS 16 — Finance lease lessor",
    "question": {
      "ar": "ماذا يعترف المؤجر في الإيجار التمويلي عند البدء؟",
      "en": "What does a lessor recognise at commencement of a finance lease?"
    },
    "choices": {
      "ar": [
        "صافي الاستثمار في الإيجار كذمم مدينة",
        "أصل حق استخدام",
        "مخزون",
        "شهرة"
      ],
      "en": [
        "Net investment in the lease as a receivable",
        "ROU asset",
        "Inventory",
        "Goodwill"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "في الإيجار التمويلي يستبدل المؤجر الأصل الأساسي بصافي الاستثمار في الإيجار وفق المتطلبات.",
      "en": "For a finance lease, the lessor recognises its net investment in the lease as a receivable."
    },
    "reference": "IFRS 16 — finance lessor",
    "difficulty": "hard",
    "examDomain": "Finance lease lessor"
  },
  {
    "id": "ifrs-deptha-ifrs16-08",
    "track": "IFRS",
    "topic": "IFRS 16 — Remeasurement",
    "question": {
      "ar": "إذا تغيرت دفعات الإيجار المستقبلية بسبب تغير مؤشر مستخدم في القياس، ماذا يفعل المستأجر؟",
      "en": "If future lease payments change because an index used in measurement changes, what does the lessee do?"
    },
    "choices": {
      "ar": [
        "يعيد قياس التزام الإيجار عند تحقق التغير في التدفقات وفق القواعد",
        "لا يفعل شيئاً",
        "يشطب الأصل",
        "يعترف بإيراد"
      ],
      "en": [
        "Remeasure the lease liability when the change in cash flows takes effect under the rules",
        "Do nothing",
        "Write off the asset",
        "Recognise revenue"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تغير الدفعات المرتبطة بمؤشر أو معدل قد يتطلب إعادة قياس الالتزام وتعديل أصل حق الاستخدام وفق المتطلبات.",
      "en": "Changes in index/rate-based lease payments can require remeasurement and corresponding ROU adjustment."
    },
    "reference": "IFRS 16 — remeasurement",
    "difficulty": "hard",
    "examDomain": "Remeasurement"
  },
  {
    "id": "ifrs-deptha-ifrs16-09",
    "track": "IFRS",
    "topic": "IFRS 16 — Depreciation period",
    "question": {
      "ar": "إذا نص عقد الإيجار على انتقال ملكية الأصل إلى المستأجر بنهاية مدة الإيجار، على أي فترة يستهلك أصل حق الاستخدام عادةً؟",
      "en": "If the lease transfers ownership of the underlying asset to the lessee by the end of the lease term, over what period is the ROU asset generally depreciated?"
    },
    "choices": {
      "ar": [
        "العمر الإنتاجي للأصل الأساسي",
        "مدة الإيجار فقط دائماً",
        "سنة واحدة",
        "لا يستهلك"
      ],
      "en": [
        "Useful life of the underlying asset",
        "Always lease term only",
        "One year",
        "Not depreciated"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "إذا انتقلت الملكية بنهاية الإيجار، أو عكست تكلفة حق الاستخدام ممارسة خيار شراء، فيُستهلك الأصل حتى نهاية عمره الإنتاجي؛ وإلا فإلى الأقرب من نهاية العمر الإنتاجي أو مدة الإيجار.",
      "en": "If ownership transfers by lease end, or ROU cost reflects exercise of a purchase option, depreciate to the end of the underlying asset's useful life; otherwise use the earlier of useful-life end and lease-term end."
    },
    "reference": "IFRS 16.32 — depreciation",
    "difficulty": "hard",
    "examDomain": "Depreciation period"
  },
  {
    "id": "ifrs-deptha-ifrs16-10",
    "track": "IFRS",
    "topic": "IFRS 16 — Sale and leaseback",
    "question": {
      "ar": "ما المعيار المستخدم أولاً لتحديد ما إذا كان نقل الأصل في sale-and-leaseback يمثل بيعاً؟",
      "en": "Which standard is first used to determine whether an asset transfer in a sale-and-leaseback is a sale?"
    },
    "choices": {
      "ar": [
        "IFRS 15",
        "IAS 2",
        "IAS 12",
        "IFRS 9"
      ],
      "en": [
        "IFRS 15",
        "IAS 2",
        "IAS 12",
        "IFRS 9"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يطبق معيار الإيراد لتحديد ما إذا كان انتقال الأصل يستوفي متطلبات البيع قبل تطبيق محاسبة sale-and-leaseback.",
      "en": "IFRS 15 is applied to determine whether the transfer qualifies as a sale before sale-and-leaseback accounting is applied."
    },
    "reference": "IFRS 16 — sale and leaseback",
    "difficulty": "hard",
    "examDomain": "Sale and leaseback"
  }
] satisfies ExamQuestion[];
