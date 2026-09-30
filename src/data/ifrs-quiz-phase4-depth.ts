import type { ExamQuestion } from "@/lib/exam-bank";

/** Phase 4 depth: IFRS 3, IFRS 10, IFRS 13 and IAS 7 to ten questions each. */
export const IFRS_PHASE4_DEPTH_QUESTION_SEED = [
  {
    "id": "ifrs-p4d-ifrs3-01",
    "track": "IFRS",
    "topic": "IFRS 3 — Identifiable assets",
    "question": {
      "ar": "كيف تقاس الأصول والالتزامات القابلة للتحديد للمستحوذ عليها عند تاريخ الاستحواذ بصورة عامة؟",
      "en": "How are identifiable assets and liabilities of the acquiree generally measured at the acquisition date?"
    },
    "choices": {
      "ar": [
        "بالقيمة العادلة مع تطبيق الاستثناءات المحددة",
        "بالتكلفة التاريخية دائماً",
        "بالقيمة الاسمية",
        "بصافي القيمة القابلة للتحقق"
      ],
      "en": [
        "At fair value subject to specified exceptions",
        "Always historical cost",
        "Nominal value",
        "Net realisable value"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "طريقة الاستحواذ تقوم بصورة عامة على قياس الأصول والالتزامات القابلة للتحديد بالقيمة العادلة في تاريخ الاستحواذ مع استثناءات محددة.",
      "en": "The acquisition method generally measures identifiable assets and liabilities at acquisition-date fair value, subject to specified exceptions."
    },
    "reference": "IFRS 3 — recognition and measurement",
    "difficulty": "easy",
    "examDomain": "Identifiable assets"
  },
  {
    "id": "ifrs-p4d-ifrs3-02",
    "track": "IFRS",
    "topic": "IFRS 3 — Acquisition costs",
    "question": {
      "ar": "كيف تعالج أتعاب المستشارين والمحامين المتعلقة بتنفيذ تجميع أعمال؟",
      "en": "How are advisory and legal fees incurred to execute a business combination generally treated?"
    },
    "choices": {
      "ar": [
        "مصروف عند حدوثه",
        "تضاف دائماً إلى الشهرة",
        "تضاف إلى المقابل المحول",
        "تسجل كمخزون"
      ],
      "en": [
        "Expensed as incurred",
        "Always added to goodwill",
        "Added to consideration transferred",
        "Recorded as inventory"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تكاليف الاستحواذ مثل الأتعاب المهنية تحمل على المصروف عادةً، باستثناء تكاليف إصدار أدوات الدين أو حقوق الملكية التي تتبع معاييرها.",
      "en": "Acquisition-related professional costs are generally expensed, except costs of issuing debt/equity instruments accounted for under relevant standards."
    },
    "reference": "IFRS 3 — acquisition-related costs",
    "difficulty": "easy",
    "examDomain": "Acquisition costs"
  },
  {
    "id": "ifrs-p4d-ifrs3-03",
    "track": "IFRS",
    "topic": "IFRS 3 — NCI",
    "question": {
      "ar": "في كل تجميع أعمال، ما خيار القياس الذي قد يتاح للحصص غير المسيطرة التي تمثل حصة ملكية حالية؟",
      "en": "For each business combination, what measurement choice may be available for NCI representing present ownership interests?"
    },
    "choices": {
      "ar": [
        "القيمة العادلة أو الحصة النسبية من صافي الأصول القابلة للتحديد",
        "التكلفة فقط",
        "القيمة الاسمية فقط",
        "صفر دائماً"
      ],
      "en": [
        "Fair value or proportionate share of identifiable net assets",
        "Cost only",
        "Nominal value only",
        "Always zero"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يسمح IFRS 3 في حالات مؤهلة بقياس NCI بالقيمة العادلة أو بنسبة الحصة في صافي الأصول القابلة للتحديد.",
      "en": "IFRS 3 permits eligible NCI to be measured at fair value or proportionate share of identifiable net assets."
    },
    "reference": "IFRS 3 — NCI measurement",
    "difficulty": "intermediate",
    "examDomain": "NCI"
  },
  {
    "id": "ifrs-p4d-ifrs3-04",
    "track": "IFRS",
    "topic": "IFRS 3 — Contingent consideration",
    "question": {
      "ar": "كيف يقاس المقابل المحتمل عند تاريخ الاستحواذ؟",
      "en": "How is contingent consideration measured at the acquisition date?"
    },
    "choices": {
      "ar": [
        "بالقيمة العادلة",
        "بصفر حتى الدفع",
        "بالتكلفة التاريخية",
        "بالقيمة الاسمية دائماً"
      ],
      "en": [
        "At fair value",
        "Zero until paid",
        "Historical cost",
        "Always nominal value"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يدخل المقابل المحتمل في المقابل المحول ويقاس بالقيمة العادلة عند تاريخ الاستحواذ.",
      "en": "Contingent consideration forms part of consideration transferred and is measured at fair value at acquisition date."
    },
    "reference": "IFRS 3 — contingent consideration",
    "difficulty": "intermediate",
    "examDomain": "Contingent consideration"
  },
  {
    "id": "ifrs-p4d-ifrs3-05",
    "track": "IFRS",
    "topic": "IFRS 3 — Measurement period",
    "question": {
      "ar": "ما الحد الأقصى لفترة القياس لتعديل المبالغ المؤقتة بسبب معلومات جديدة عن حقائق كانت موجودة في تاريخ الاستحواذ؟",
      "en": "What is the maximum measurement period for adjusting provisional amounts for new information about facts existing at acquisition date?"
    },
    "choices": {
      "ar": [
        "سنة واحدة من تاريخ الاستحواذ",
        "ثلاث سنوات",
        "خمس سنوات",
        "لا يوجد حد"
      ],
      "en": [
        "One year from acquisition date",
        "Three years",
        "Five years",
        "No limit"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "فترة القياس لا تتجاوز سنة واحدة من تاريخ الاستحواذ.",
      "en": "The measurement period cannot exceed one year from the acquisition date."
    },
    "reference": "IFRS 3 — measurement period",
    "difficulty": "intermediate",
    "examDomain": "Measurement period"
  },
  {
    "id": "ifrs-p4d-ifrs3-06",
    "track": "IFRS",
    "topic": "IFRS 3 — Bargain purchase",
    "question": {
      "ar": "بعد إعادة تقييم القياسات المطلوبة، أين يعترف بمكسب الشراء بسعر منخفض؟",
      "en": "After reassessing required measurements, where is a bargain purchase gain recognised?"
    },
    "choices": {
      "ar": [
        "في الربح أو الخسارة",
        "في الشهرة",
        "في OCI دائماً",
        "في المخزون"
      ],
      "en": [
        "In profit or loss",
        "In goodwill",
        "Always in OCI",
        "In inventory"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "إذا بقي فائض صافي الأصول القابلة للتحديد على المقابل بعد إعادة التقييم، يعترف بمكسب الشراء في الربح أو الخسارة.",
      "en": "After reassessment, any remaining excess of identifiable net assets over consideration is recognised as a bargain purchase gain in profit or loss."
    },
    "reference": "IFRS 3 — bargain purchase",
    "difficulty": "hard",
    "examDomain": "Bargain purchase"
  },
  {
    "id": "ifrs-p4d-ifrs3-07",
    "track": "IFRS",
    "topic": "IFRS 3 — Step acquisition",
    "question": {
      "ar": "في تجميع أعمال يتم على مراحل، ماذا يحدث للحصة السابقة عند الحصول على السيطرة؟",
      "en": "In a business combination achieved in stages, what happens to the previously held interest when control is obtained?"
    },
    "choices": {
      "ar": [
        "يعاد قياسها بالقيمة العادلة ويعترف بالأثر وفق المتطلبات",
        "تبقى دائماً بالتكلفة",
        "تحذف دون أثر",
        "تتحول لمخزون"
      ],
      "en": [
        "Remeasured to fair value with resulting effect recognised as required",
        "Always remains at cost",
        "Removed with no effect",
        "Converted to inventory"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "عند الحصول على السيطرة في استحواذ تدريجي تعاد قياس الحصة السابقة بالقيمة العادلة مع معالجة الفرق وفق المعايير.",
      "en": "In a step acquisition, the previously held interest is remeasured to fair value when control is obtained."
    },
    "reference": "IFRS 3 — business combination achieved in stages",
    "difficulty": "hard",
    "examDomain": "Step acquisition"
  },
  {
    "id": "ifrs-p4d-ifrs3-08",
    "track": "IFRS",
    "topic": "IFRS 3 — Scope",
    "question": {
      "ar": "هل تجميع المنشآت أو الأعمال تحت سيطرة مشتركة يقع حالياً ضمن نطاق IFRS 3؟",
      "en": "Are combinations of entities or businesses under common control currently within IFRS 3 scope?"
    },
    "choices": {
      "ar": [
        "لا، مستثناة من نطاقه",
        "نعم دائماً",
        "فقط إذا كانت نقدية",
        "فقط إذا كانت دولية"
      ],
      "en": [
        "No, they are excluded from its scope",
        "Always yes",
        "Only if cash",
        "Only if international"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تجميعات الأعمال تحت السيطرة المشتركة مستثناة من نطاق IFRS 3.",
      "en": "Business combinations under common control are excluded from IFRS 3's scope."
    },
    "reference": "IFRS 3 — scope",
    "difficulty": "hard",
    "examDomain": "Scope"
  },
  {
    "id": "ifrs-p4d-ifrs10-01",
    "track": "IFRS",
    "topic": "IFRS 10 — Relevant activities",
    "question": {
      "ar": "ما المقصود بالأنشطة ذات الصلة في تقييم السيطرة؟",
      "en": "What are relevant activities in assessing control?"
    },
    "choices": {
      "ar": [
        "الأنشطة التي تؤثر بشكل جوهري في عوائد المنشأة المستثمر فيها",
        "كل نشاط إداري بسيط",
        "إعداد الفواتير فقط",
        "الأنشطة غير المالية فقط"
      ],
      "en": [
        "Activities that significantly affect the investee's returns",
        "Every minor administrative activity",
        "Invoice preparation only",
        "Non-financial activities only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "القوة تتعلق بالقدرة الحالية على توجيه الأنشطة التي تؤثر جوهرياً في العوائد.",
      "en": "Power relates to the current ability to direct activities that significantly affect returns."
    },
    "reference": "IFRS 10 — relevant activities",
    "difficulty": "easy",
    "examDomain": "Relevant activities"
  },
  {
    "id": "ifrs-p4d-ifrs10-02",
    "track": "IFRS",
    "topic": "IFRS 10 — Substantive rights",
    "question": {
      "ar": "حتى تمنح الحقوق قوة، ما الصفة الأساسية التي يجب أن تتوافر فيها؟",
      "en": "For rights to give power, what key characteristic must they have?"
    },
    "choices": {
      "ar": [
        "أن تكون جوهرية ويمكن ممارستها عملياً عند الحاجة لاتخاذ القرارات",
        "أن تكون مكتوبة فقط",
        "أن تكون نقدية",
        "أن تكون دائمة"
      ],
      "en": [
        "They must be substantive and practically exercisable when decisions need to be made",
        "They only need to be written",
        "They must be cash-based",
        "They must be permanent"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تقييم القوة يركز على الحقوق الجوهرية لا الحقوق النظرية أو غير القابلة للممارسة عملياً.",
      "en": "Power assessment focuses on substantive rights rather than merely theoretical rights."
    },
    "reference": "IFRS 10 — substantive rights",
    "difficulty": "intermediate",
    "examDomain": "Substantive rights"
  },
  {
    "id": "ifrs-p4d-ifrs10-03",
    "track": "IFRS",
    "topic": "IFRS 10 — Protective rights",
    "question": {
      "ar": "هل الحقوق الوقائية وحدها تمنح عادةً السيطرة؟",
      "en": "Do protective rights alone generally give control?"
    },
    "choices": {
      "ar": [
        "لا",
        "نعم دائماً",
        "فقط إذا كانت تعاقدية",
        "فقط للبنوك"
      ],
      "en": [
        "No",
        "Always yes",
        "Only if contractual",
        "Banks only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الحقوق الوقائية تحمي مصالح حاملها دون منحه قوة توجيه الأنشطة ذات الصلة.",
      "en": "Protective rights protect the holder's interests without giving power over relevant activities."
    },
    "reference": "IFRS 10 — protective rights",
    "difficulty": "intermediate",
    "examDomain": "Protective rights"
  },
  {
    "id": "ifrs-p4d-ifrs10-04",
    "track": "IFRS",
    "topic": "IFRS 10 — De facto control",
    "question": {
      "ar": "هل يمكن أن تتحقق السيطرة مع ملكية أقل من أغلبية حقوق التصويت؟",
      "en": "Can control exist with less than a majority of voting rights?"
    },
    "choices": {
      "ar": [
        "نعم، حسب توزيع الملكية والحقوق والوقائع والظروف",
        "لا أبداً",
        "فقط إذا تجاوزت 49%",
        "فقط بموافقة المراجع"
      ],
      "en": [
        "Yes, depending on ownership dispersion, rights and facts/circumstances",
        "Never",
        "Only above 49%",
        "Only with auditor approval"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IFRS 10 يعتمد على مفهوم القوة الفعلية وليس نسبة ملكية ميكانيكية فقط.",
      "en": "IFRS 10 assesses actual power rather than relying solely on a mechanical ownership threshold."
    },
    "reference": "IFRS 10 — control without majority voting rights",
    "difficulty": "hard",
    "examDomain": "De facto control"
  },
  {
    "id": "ifrs-p4d-ifrs10-05",
    "track": "IFRS",
    "topic": "IFRS 10 — Principal agent",
    "question": {
      "ar": "عند اتخاذ قرارات نيابةً عن آخرين، ما الذي يجب تقييمه لتحديد إن كان متخذ القرار أصيلاً أم وكيلاً؟",
      "en": "When decisions are made on behalf of others, what is assessed to determine whether the decision maker is a principal or agent?"
    },
    "choices": {
      "ar": [
        "نطاق السلطة والحقوق المحتفظ بها من أطراف أخرى والمكافأة والتعرض للعوائد",
        "عدد الموظفين فقط",
        "حجم المكتب",
        "جنسية المدير"
      ],
      "en": [
        "Scope of authority, rights held by others, remuneration and exposure to returns",
        "Headcount only",
        "Office size",
        "Manager nationality"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تقييم الوكالة يأخذ عدة عوامل لتحديد هل يستخدم متخذ القرار القوة لمصلحته أم نيابة عن آخرين.",
      "en": "Agency assessment considers multiple factors to determine whether power is exercised for the decision maker's own benefit or on behalf of others."
    },
    "reference": "IFRS 10 — principal versus agent",
    "difficulty": "hard",
    "examDomain": "Principal agent"
  },
  {
    "id": "ifrs-p4d-ifrs10-06",
    "track": "IFRS",
    "topic": "IFRS 10 — Consolidation procedures",
    "question": {
      "ar": "ماذا يحدث للأرصدة والمعاملات داخل المجموعة عند إعداد القوائم الموحدة؟",
      "en": "What happens to intragroup balances and transactions in consolidation?"
    },
    "choices": {
      "ar": [
        "تُلغى",
        "تُضاعف",
        "تبقى دائماً",
        "تسجل كشهرة"
      ],
      "en": [
        "Eliminated",
        "Doubled",
        "Always retained",
        "Recorded as goodwill"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يتم إلغاء الأرصدة والمعاملات والإيرادات والمصروفات داخل المجموعة لتجنب الازدواج.",
      "en": "Intragroup balances, transactions, income and expenses are eliminated to avoid double counting."
    },
    "reference": "IFRS 10 — consolidation procedures",
    "difficulty": "easy",
    "examDomain": "Consolidation procedures"
  },
  {
    "id": "ifrs-p4d-ifrs10-07",
    "track": "IFRS",
    "topic": "IFRS 10 — Uniform policies",
    "question": {
      "ar": "إذا استخدمت شركة تابعة سياسة محاسبية مختلفة لمعاملات مماثلة، ماذا يلزم في التوحيد؟",
      "en": "If a subsidiary uses a different accounting policy for like transactions, what is required on consolidation?"
    },
    "choices": {
      "ar": [
        "إجراء تعديلات مناسبة لتحقيق اتساق السياسات",
        "لا شيء",
        "استبعاد الشركة",
        "استخدام متوسط السياسات"
      ],
      "en": [
        "Make appropriate adjustments to achieve uniform accounting policies",
        "Nothing",
        "Exclude subsidiary",
        "Average the policies"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "القوائم الموحدة تستخدم سياسات محاسبية موحدة للمعاملات والأحداث المتشابهة.",
      "en": "Consolidated financial statements use uniform accounting policies for like transactions and events."
    },
    "reference": "IFRS 10 — uniform accounting policies",
    "difficulty": "intermediate",
    "examDomain": "Uniform policies"
  },
  {
    "id": "ifrs-p4d-ifrs10-08",
    "track": "IFRS",
    "topic": "IFRS 10 — Loss of control",
    "question": {
      "ar": "عند فقد السيطرة على شركة تابعة، كيف يقاس أي استثمار محتفظ به فيها؟",
      "en": "When control over a subsidiary is lost, how is any retained investment generally measured at that date?"
    },
    "choices": {
      "ar": [
        "بالقيمة العادلة",
        "بالتكلفة التاريخية دائماً",
        "بصفر",
        "بالقيمة الاسمية"
      ],
      "en": [
        "At fair value",
        "Always historical cost",
        "Zero",
        "Nominal value"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "عند فقد السيطرة تزال أصول والتزامات التابعة ويقاس الاستثمار المحتفظ به بالقيمة العادلة مع معالجة الفرق وفق المتطلبات.",
      "en": "On loss of control, subsidiary assets/liabilities are derecognised and any retained interest is measured at fair value."
    },
    "reference": "IFRS 10 — loss of control",
    "difficulty": "hard",
    "examDomain": "Loss of control"
  },
  {
    "id": "ifrs-p4d-ifrs13-01",
    "track": "IFRS",
    "topic": "IFRS 13 — Principal market",
    "question": {
      "ar": "ما السوق المستخدم عادةً في قياس القيمة العادلة؟",
      "en": "Which market is generally used for fair value measurement?"
    },
    "choices": {
      "ar": [
        "السوق الرئيسي للأصل أو الالتزام",
        "أي سوق تختاره الإدارة",
        "السوق الأرخص دائماً",
        "السوق المحلي فقط"
      ],
      "en": [
        "Principal market for the asset or liability",
        "Any market management chooses",
        "Always the cheapest market",
        "Local market only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يستخدم السوق الرئيسي، وإذا لم يوجد يستخدم السوق الأكثر منفعة وفق تعريف المعيار.",
      "en": "The principal market is used; if none exists, the most advantageous market is used."
    },
    "reference": "IFRS 13 — principal market",
    "difficulty": "easy",
    "examDomain": "Principal market"
  },
  {
    "id": "ifrs-p4d-ifrs13-02",
    "track": "IFRS",
    "topic": "IFRS 13 — Market participants",
    "question": {
      "ar": "على أي افتراض تقاس القيمة العادلة بشأن أطراف المعاملة؟",
      "en": "What assumption does fair value make about transaction parties?"
    },
    "choices": {
      "ar": [
        "مشاركون في السوق مستقلون ومطلعون وقادرون وراغبون في التعامل",
        "أطراف مرتبطة فقط",
        "المنشأة نفسها فقط",
        "الجهة الضريبية"
      ],
      "en": [
        "Independent, knowledgeable, able and willing market participants",
        "Related parties only",
        "The entity only",
        "Tax authority"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "القيمة العادلة قياس قائم على السوق ويستخدم افتراضات المشاركين في السوق.",
      "en": "Fair value is market-based and uses market-participant assumptions."
    },
    "reference": "IFRS 13 — market participants",
    "difficulty": "easy",
    "examDomain": "Market participants"
  },
  {
    "id": "ifrs-p4d-ifrs13-03",
    "track": "IFRS",
    "topic": "IFRS 13 — Orderly transaction",
    "question": {
      "ar": "هل تفترض القيمة العادلة بيعاً اضطرارياً أو تصفية قسرية؟",
      "en": "Does fair value assume a forced sale or distressed liquidation?"
    },
    "choices": {
      "ar": [
        "لا، تفترض معاملة منظمة",
        "نعم دائماً",
        "فقط للأصول المالية",
        "فقط للمخزون"
      ],
      "en": [
        "No, it assumes an orderly transaction",
        "Always yes",
        "Only financial assets",
        "Only inventory"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تعريف القيمة العادلة يفترض معاملة منظمة وليست بيعاً قسرياً.",
      "en": "The fair value definition assumes an orderly rather than forced transaction."
    },
    "reference": "IFRS 13 — orderly transaction",
    "difficulty": "intermediate",
    "examDomain": "Orderly transaction"
  },
  {
    "id": "ifrs-p4d-ifrs13-04",
    "track": "IFRS",
    "topic": "IFRS 13 — Highest and best use",
    "question": {
      "ar": "لأي نوع من الأصول يرتبط مفهوم أعلى وأفضل استخدام؟",
      "en": "For what type of assets is the highest-and-best-use concept particularly relevant?"
    },
    "choices": {
      "ar": [
        "الأصول غير المالية",
        "النقد فقط",
        "الالتزامات فقط",
        "الذمم فقط"
      ],
      "en": [
        "Non-financial assets",
        "Cash only",
        "Liabilities only",
        "Receivables only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "قياس القيمة العادلة للأصل غير المالي يأخذ قدرة المشارك في السوق على توليد المنافع من أعلى وأفضل استخدام.",
      "en": "Fair value of a non-financial asset considers the market participant's ability to generate benefits from highest and best use."
    },
    "reference": "IFRS 13 — highest and best use",
    "difficulty": "intermediate",
    "examDomain": "Highest and best use"
  },
  {
    "id": "ifrs-p4d-ifrs13-05",
    "track": "IFRS",
    "topic": "IFRS 13 — Level 2 inputs",
    "question": {
      "ar": "ما مثال على مدخلات المستوى 2؟",
      "en": "What is an example of Level 2 input?"
    },
    "choices": {
      "ar": [
        "أسعار معلنة لأصول مماثلة أو مدخلات قابلة للملاحظة بصورة مباشرة أو غير مباشرة",
        "توقعات داخلية غير قابلة للملاحظة فقط",
        "سعر أصل مماثل تماماً في سوق نشط للمستوى 1",
        "التكلفة التاريخية"
      ],
      "en": [
        "Quoted prices for similar assets or other directly/indirectly observable inputs",
        "Only unobservable internal forecasts",
        "Unadjusted identical active-market price used for Level 1",
        "Historical cost"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "المستوى 2 يشمل مدخلات قابلة للملاحظة بخلاف أسعار المستوى 1.",
      "en": "Level 2 includes observable inputs other than Level 1 quoted prices."
    },
    "reference": "IFRS 13 — Level 2",
    "difficulty": "intermediate",
    "examDomain": "Level 2 inputs"
  },
  {
    "id": "ifrs-p4d-ifrs13-06",
    "track": "IFRS",
    "topic": "IFRS 13 — Level 3 inputs",
    "question": {
      "ar": "متى تستخدم مدخلات المستوى 3؟",
      "en": "When are Level 3 inputs used?"
    },
    "choices": {
      "ar": [
        "عندما لا تتوافر مدخلات قابلة للملاحظة ذات صلة، مع استخدام افتراضات المشاركين في السوق",
        "دائماً قبل المستوى 1",
        "فقط للنقد",
        "فقط للالتزامات"
      ],
      "en": [
        "When relevant observable inputs are unavailable, using market-participant assumptions",
        "Always before Level 1",
        "Only cash",
        "Only liabilities"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "المستوى 3 يستخدم مدخلات غير قابلة للملاحظة مع تعظيم استخدام البيانات القابلة للملاحظة حيثما أمكن.",
      "en": "Level 3 uses unobservable inputs while maximising observable information where available."
    },
    "reference": "IFRS 13 — Level 3",
    "difficulty": "hard",
    "examDomain": "Level 3 inputs"
  },
  {
    "id": "ifrs-p4d-ifrs13-07",
    "track": "IFRS",
    "topic": "IFRS 13 — Valuation techniques",
    "question": {
      "ar": "ما المناهج العامة الثلاثة لتقنيات التقييم؟",
      "en": "What are the three broad valuation approaches?"
    },
    "choices": {
      "ar": [
        "السوق والتكلفة والدخل",
        "FIFO وLIFO والمتوسط",
        "المباشر وغير المباشر والنقدي",
        "الضريبي والتجاري والمالي"
      ],
      "en": [
        "Market, cost and income approaches",
        "FIFO, LIFO and average",
        "Direct, indirect and cash",
        "Tax, commercial and financial"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IFRS 13 يصف مناهج السوق والتكلفة والدخل كأساليب عامة للتقييم.",
      "en": "IFRS 13 describes market, cost and income approaches as broad valuation approaches."
    },
    "reference": "IFRS 13 — valuation techniques",
    "difficulty": "hard",
    "examDomain": "Valuation techniques"
  },
  {
    "id": "ifrs-p4d-ifrs13-08",
    "track": "IFRS",
    "topic": "IFRS 13 — Transaction price",
    "question": {
      "ar": "هل سعر المعاملة يساوي دائماً القيمة العادلة عند الاعتراف الأولي؟",
      "en": "Does transaction price always equal fair value at initial recognition?"
    },
    "choices": {
      "ar": [
        "لا، فقد يختلف حسب ظروف المعاملة والسوق ووحدة الحساب",
        "نعم دائماً",
        "فقط للأصول",
        "فقط للالتزامات"
      ],
      "en": [
        "No; it may differ depending on transaction circumstances, market and unit of account",
        "Always yes",
        "Assets only",
        "Liabilities only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "سعر المعاملة سعر دخول بينما القيمة العادلة سعر خروج، وقد يتطابقان في حالات كثيرة لكن ليس دائماً.",
      "en": "Transaction price is an entry price while fair value is an exit price; they often coincide but not always."
    },
    "reference": "IFRS 13 — transaction price versus fair value",
    "difficulty": "hard",
    "examDomain": "Transaction price"
  },
  {
    "id": "ifrs-p4d-ias7-01",
    "track": "IFRS",
    "topic": "IAS 7 — Cash equivalents",
    "question": {
      "ar": "ما السمة الأساسية للاستثمار حتى يعد من معادلات النقد؟",
      "en": "What is a key characteristic for an investment to qualify as a cash equivalent?"
    },
    "choices": {
      "ar": [
        "قصير الأجل وعالي السيولة وقابل للتحويل سريعاً لمبلغ معلوم مع مخاطر تغير قيمة غير جوهرية",
        "عالي العائد فقط",
        "طويل الأجل",
        "استثمار أسهم مضاربي"
      ],
      "en": [
        "Short-term, highly liquid, readily convertible to known cash with insignificant value-change risk",
        "High return only",
        "Long-term",
        "Speculative equity investment"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "معادلات النقد مخصصة للوفاء بالتزامات قصيرة الأجل وليست للاستثمار طويل الأجل.",
      "en": "Cash equivalents are held to meet short-term cash commitments rather than for investment purposes."
    },
    "reference": "IAS 7 — cash equivalents",
    "difficulty": "easy",
    "examDomain": "Cash equivalents"
  },
  {
    "id": "ifrs-p4d-ias7-02",
    "track": "IFRS",
    "topic": "IAS 7 — Operating activities",
    "question": {
      "ar": "ما المصدر الرئيسي للتدفقات التشغيلية عادةً؟",
      "en": "What is the main source of operating cash flows generally?"
    },
    "choices": {
      "ar": [
        "الأنشطة الرئيسية المولدة للإيراد",
        "إصدار الأسهم",
        "شراء مصنع",
        "الحصول على قرض"
      ],
      "en": [
        "Principal revenue-producing activities",
        "Share issuance",
        "Buying a factory",
        "Obtaining a loan"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "التشغيل يشمل التدفقات الناشئة من الأنشطة الرئيسية المنتجة للإيراد وغيرها غير المصنفة استثماراً أو تمويلاً.",
      "en": "Operating activities are principal revenue-producing activities and other activities not classified as investing or financing."
    },
    "reference": "IAS 7 — operating activities",
    "difficulty": "easy",
    "examDomain": "Operating activities"
  },
  {
    "id": "ifrs-p4d-ias7-03",
    "track": "IFRS",
    "topic": "IAS 7 — Direct method",
    "question": {
      "ar": "ماذا يعرض الأسلوب المباشر للتدفقات التشغيلية؟",
      "en": "What does the direct method present for operating cash flows?"
    },
    "choices": {
      "ar": [
        "الفئات الرئيسية للمتحصلات والمدفوعات النقدية الإجمالية",
        "صافي الربح مع التعديلات فقط",
        "التغير في حقوق الملكية",
        "القيمة العادلة"
      ],
      "en": [
        "Major classes of gross cash receipts and gross cash payments",
        "Net profit with adjustments only",
        "Changes in equity",
        "Fair value"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الطريقة المباشرة تعرض المتحصلات والمدفوعات التشغيلية الرئيسية بصورة إجمالية.",
      "en": "The direct method reports major classes of gross operating cash receipts and payments."
    },
    "reference": "IAS 7 — direct method",
    "difficulty": "intermediate",
    "examDomain": "Direct method"
  },
  {
    "id": "ifrs-p4d-ias7-04",
    "track": "IFRS",
    "topic": "IAS 7 — Indirect method",
    "question": {
      "ar": "ما الفكرة الأساسية للطريقة غير المباشرة؟",
      "en": "What is the basic idea of the indirect method?"
    },
    "choices": {
      "ar": [
        "تعديل مقياس الربح لبنود غير نقدية وتغيرات رأس المال العامل وبنود تصنيف أخرى",
        "عرض كل قبض ودفع منفرد",
        "قياس القيمة العادلة",
        "تحديد الضريبة"
      ],
      "en": [
        "Adjust a profit measure for non-cash items, working-capital changes and classification items",
        "List every receipt/payment individually",
        "Measure fair value",
        "Determine tax"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الطريقة غير المباشرة تحول الربح المحاسبي إلى تدفق نقدي تشغيلي عبر التعديلات المناسبة.",
      "en": "The indirect method reconciles accounting profit to operating cash flow through appropriate adjustments."
    },
    "reference": "IAS 7 — indirect method",
    "difficulty": "intermediate",
    "examDomain": "Indirect method"
  },
  {
    "id": "ifrs-p4d-ias7-05",
    "track": "IFRS",
    "topic": "IAS 7 — Non-cash transactions",
    "question": {
      "ar": "كيف تعرض معاملة استثمار أو تمويل لا تستخدم نقداً أو معادل نقد؟",
      "en": "How is an investing or financing transaction that does not use cash or cash equivalents presented?"
    },
    "choices": {
      "ar": [
        "تستبعد من قائمة التدفقات ويُفصح عنها بما يوفر المعلومات المناسبة",
        "تدرج كتدفق نقدي",
        "تسجل كتشغيل",
        "تتجاهل دون إفصاح"
      ],
      "en": [
        "Excluded from the cash flow statement and disclosed appropriately elsewhere",
        "Included as cash flow",
        "Classified operating",
        "Ignored without disclosure"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "قائمة التدفقات تعرض التدفقات النقدية؛ المعاملات غير النقدية تستبعد منها وتفصح بشكل مناسب.",
      "en": "The cash flow statement reports cash flows; non-cash investing/financing transactions are excluded and disclosed appropriately."
    },
    "reference": "IAS 7 — non-cash transactions",
    "difficulty": "easy",
    "examDomain": "Non-cash transactions"
  },
  {
    "id": "ifrs-p4d-ias7-06",
    "track": "IFRS",
    "topic": "IAS 7 — Taxes",
    "question": {
      "ar": "كيف تصنف التدفقات النقدية لضريبة الدخل عادةً؟",
      "en": "How are income-tax cash flows generally classified?"
    },
    "choices": {
      "ar": [
        "تشغيلية ما لم يمكن ربطها تحديداً بنشاط استثماري أو تمويلي",
        "استثمارية دائماً",
        "تمويلية دائماً",
        "لا تظهر"
      ],
      "en": [
        "Operating unless specifically identifiable with investing or financing activities",
        "Always investing",
        "Always financing",
        "Not presented"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "القاعدة العامة تشغيلية، مع التصنيف المناسب إذا أمكن تحديد ارتباط مباشر بنشاط استثماري أو تمويلي.",
      "en": "Income-tax cash flows are generally operating unless specifically identifiable with investing or financing activities."
    },
    "reference": "IAS 7 — income taxes",
    "difficulty": "hard",
    "examDomain": "Taxes"
  },
  {
    "id": "ifrs-p4d-ias7-07",
    "track": "IFRS",
    "topic": "IAS 7 — Bank overdrafts",
    "question": {
      "ar": "متى يمكن أن يدخل السحب على المكشوف ضمن النقد ومعادلات النقد؟",
      "en": "When can a bank overdraft be included as a component of cash and cash equivalents?"
    },
    "choices": {
      "ar": [
        "إذا كان مستحقاً عند الطلب ويشكل جزءاً لا يتجزأ من إدارة النقد",
        "دائماً",
        "أبداً",
        "إذا تجاوز سنة"
      ],
      "en": [
        "If repayable on demand and forms an integral part of cash management",
        "Always",
        "Never",
        "If over one year"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "بعض السحوبات على المكشوف المستحقة عند الطلب والمتقلبة من موجب لسالب قد تعد جزءاً من إدارة النقد.",
      "en": "Certain on-demand overdrafts integral to cash management may form part of cash and cash equivalents."
    },
    "reference": "IAS 7 — bank overdrafts",
    "difficulty": "hard",
    "examDomain": "Bank overdrafts"
  },
  {
    "id": "ifrs-p4d-ias7-08",
    "track": "IFRS",
    "topic": "IAS 7 — Financing liabilities disclosure",
    "question": {
      "ar": "ما الإفصاح المطلوب لفهم التغيرات في الالتزامات الناشئة عن أنشطة التمويل؟",
      "en": "What disclosure helps users understand changes in liabilities arising from financing activities?"
    },
    "choices": {
      "ar": [
        "مصالحة أو معلومات تكشف التغيرات النقدية وغير النقدية",
        "قائمة الموردين",
        "تفاصيل المخزون",
        "عدد الموظفين"
      ],
      "en": [
        "A reconciliation or information disclosing cash and non-cash changes",
        "Supplier list",
        "Inventory details",
        "Headcount"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IAS 7 يتطلب إفصاحات تمكن المستخدمين من تقييم التغيرات في الالتزامات الناشئة عن التمويل بما فيها التغيرات غير النقدية.",
      "en": "IAS 7 requires disclosures enabling users to evaluate changes in liabilities arising from financing activities, including non-cash changes."
    },
    "reference": "IAS 7 — changes in financing liabilities",
    "difficulty": "hard",
    "examDomain": "Financing liabilities disclosure"
  }
] satisfies ExamQuestion[];
