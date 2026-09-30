import type { ExamQuestion } from "@/lib/exam-bank";

/** Phase 5: five additional application-focused questions for standards previously at the ten-question target's midpoint. */
export const IFRS_PHASE5_QUESTION_SEED = [
  {
    "id": "ifrs-p5-ifrs1-01",
    "track": "IFRS",
    "topic": "IFRS 1 — Transition date",
    "question": {
      "ar": "شركة ستصدر أول قوائم IFRS للسنة المنتهية 31 ديسمبر 2027 مع مقارنة واحدة لعام 2026. ما تاريخ الانتقال المعتاد؟",
      "en": "An entity will issue its first IFRS statements for year ended 31 Dec 2027 with one comparative year, 2026. What is the usual transition date?"
    },
    "choices": {
      "ar": [
        "1 يناير 2026",
        "31 ديسمبر 2026",
        "1 يناير 2027",
        "31 ديسمبر 2027"
      ],
      "en": [
        "1 January 2026",
        "31 December 2026",
        "1 January 2027",
        "31 December 2027"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تاريخ الانتقال هو بداية أقدم فترة مقارنة معروضة في أول قوائم IFRS.",
      "en": "The transition date is the beginning of the earliest comparative period presented in the first IFRS financial statements."
    },
    "reference": "IFRS 1 — date of transition",
    "difficulty": "easy",
    "examDomain": "Transition date"
  },
  {
    "id": "ifrs-p5-ifrs1-02",
    "track": "IFRS",
    "topic": "IFRS 1 — Recognition adjustments",
    "question": {
      "ar": "إذا كان GAAP السابق يعترف بأصل لا يستوفي تعريف الاعتراف تحت IFRS، ماذا يحدث في القائمة الافتتاحية؟",
      "en": "If previous GAAP recognised an asset that does not qualify for recognition under IFRS, what happens in the opening statement?"
    },
    "choices": {
      "ar": [
        "يُلغى الاعتراف به مع معالجة الأثر في حقوق الملكية حسب المتطلبات",
        "يبقى دائماً",
        "يحول إلى شهرة",
        "يحول إلى مخزون"
      ],
      "en": [
        "Derecognise it with the transition effect recognised in equity as required",
        "Always retain it",
        "Convert to goodwill",
        "Convert to inventory"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "القائمة الافتتاحية يجب أن تعكس بنوداً تستوفي تعريفات واعتراف IFRS.",
      "en": "The opening IFRS statement reflects items that meet IFRS definitions and recognition requirements."
    },
    "reference": "IFRS 1 — opening statement",
    "difficulty": "intermediate",
    "examDomain": "Recognition adjustments"
  },
  {
    "id": "ifrs-p5-ifrs1-03",
    "track": "IFRS",
    "topic": "IFRS 1 — Optional exemptions",
    "question": {
      "ar": "لماذا يستخدم IFRS 1 إعفاءات اختيارية من التطبيق الرجعي؟",
      "en": "Why does IFRS 1 include optional exemptions from full retrospective application?"
    },
    "choices": {
      "ar": [
        "لتقليل التكلفة والتعقيد في مجالات محددة دون فقدان هدف الانتقال",
        "للسماح بأي سياسة تختارها الإدارة",
        "لإلغاء المقارنات",
        "لمنع الاعتراف بالضرائب"
      ],
      "en": [
        "To reduce cost and complexity in specified areas without undermining transition objectives",
        "To allow any policy management chooses",
        "To remove comparatives",
        "To prevent tax recognition"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الإعفاءات محددة ولا يمكن القياس عليها لتجنب عبء رجعي غير عملي.",
      "en": "The exemptions are specific and cannot be analogised broadly; they address practical retrospective burdens."
    },
    "reference": "IFRS 1 — optional exemptions",
    "difficulty": "intermediate",
    "examDomain": "Optional exemptions"
  },
  {
    "id": "ifrs-p5-ifrs1-04",
    "track": "IFRS",
    "topic": "IFRS 1 — Estimates",
    "question": {
      "ar": "اكتشفت المنشأة بعد تاريخ الانتقال معلومات جديدة عن تقدير سابق لم تكن متاحة في ذلك التاريخ، ولا يوجد دليل على خطأ. هل تستخدم المعلومات لإعادة كتابة التقدير الافتتاحي؟",
      "en": "After transition date, new information becomes available about a prior estimate that was unavailable at transition, with no evidence of error. Is the opening estimate rewritten?"
    },
    "choices": {
      "ar": [
        "لا",
        "نعم دائماً",
        "فقط إذا زاد الربح",
        "فقط إذا وافق المراجع"
      ],
      "en": [
        "No",
        "Always yes",
        "Only if profit increases",
        "Only if auditor agrees"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IFRS 1 يمنع استخدام hindsight لإعادة تقدير ما كان معقولاً بناءً على المعلومات المتاحة حينها.",
      "en": "IFRS 1 prevents hindsight from rewriting estimates that were reasonable based on information available at the relevant date."
    },
    "reference": "IFRS 1 — estimates",
    "difficulty": "hard",
    "examDomain": "Estimates"
  },
  {
    "id": "ifrs-p5-ifrs1-05",
    "track": "IFRS",
    "topic": "IFRS 1 — Reconciliations",
    "question": {
      "ar": "أي مصالحة تعد جوهرية لإظهار أثر الانتقال؟",
      "en": "Which reconciliation is central to explaining transition?"
    },
    "choices": {
      "ar": [
        "حقوق الملكية بين GAAP السابق وIFRS في التواريخ المطلوبة",
        "مبيعات كل عميل",
        "المخزون حسب المورد",
        "رواتب الموظفين"
      ],
      "en": [
        "Equity between previous GAAP and IFRS at required dates",
        "Sales by customer",
        "Inventory by supplier",
        "Employee payroll"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "التسويات بين GAAP السابق وIFRS تساعد المستخدم على فهم الأثر الكمي للانتقال.",
      "en": "Reconciliations from previous GAAP to IFRS help users understand the quantitative transition effects."
    },
    "reference": "IFRS 1 — reconciliations",
    "difficulty": "hard",
    "examDomain": "Reconciliations"
  },
  {
    "id": "ifrs-p5-ifrs2-01",
    "track": "IFRS",
    "topic": "IFRS 2 — Grant date",
    "question": {
      "ar": "في جائزة أسهم للموظفين مسددة بحقوق ملكية، متى تُثبت القيمة العادلة الأساسية للجائزة عادةً؟",
      "en": "For an employee equity-settled award, when is the core fair value generally fixed?"
    },
    "choices": {
      "ar": [
        "تاريخ المنح",
        "تاريخ الاستحقاق",
        "تاريخ التسوية",
        "كل تاريخ تقرير"
      ],
      "en": [
        "Grant date",
        "Vesting date",
        "Settlement date",
        "Each reporting date"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "القيمة العادلة في تاريخ المنح هي أساس القياس للجوائز المسددة بحقوق الملكية للموظفين.",
      "en": "Grant-date fair value is the measurement basis for employee equity-settled awards."
    },
    "reference": "IFRS 2 — grant date",
    "difficulty": "easy",
    "examDomain": "Grant date"
  },
  {
    "id": "ifrs-p5-ifrs2-02",
    "track": "IFRS",
    "topic": "IFRS 2 — Service condition",
    "question": {
      "ar": "منحة تستحق فقط إذا بقي الموظف ثلاث سنوات. ترك الموظف بعد سنة. ما الأثر العام؟",
      "en": "An award vests only if the employee remains for three years. The employee leaves after one year. What is the general effect?"
    },
    "choices": {
      "ar": [
        "لا تستحق الجائزة ويعكس المصروف المرتبط بشرط الخدمة حسب المتطلبات",
        "تظل الجائزة مستحقة بالكامل",
        "تتحول لالتزام نقدي",
        "تعترف بالقيمة كاملة فوراً"
      ],
      "en": [
        "The award does not vest and expense tied to the service condition is reversed as required",
        "Award remains fully vested",
        "Convert to cash liability",
        "Recognise full amount immediately"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "شرط الخدمة يؤثر في عدد الجوائز التي يتوقع ويحدث أن تستحق فعلاً.",
      "en": "A service condition affects the number of awards expected and ultimately considered to vest."
    },
    "reference": "IFRS 2 — service conditions",
    "difficulty": "intermediate",
    "examDomain": "Service condition"
  },
  {
    "id": "ifrs-p5-ifrs2-03",
    "track": "IFRS",
    "topic": "IFRS 2 — Cash settled",
    "question": {
      "ar": "ارتفعت القيمة العادلة لالتزام SARs من 100 إلى 130 بين تاريخين تقرير. ما المبدأ؟",
      "en": "The fair value of a cash-settled SAR liability rises from 100 to 130 between reporting dates. What is the principle?"
    },
    "choices": {
      "ar": [
        "يعاد قياس الالتزام وتعكس الزيادة في الربح أو الخسارة وفق المتطلبات",
        "لا يتغير القياس",
        "تذهب الزيادة لحقوق الملكية",
        "تسجل كمخزون"
      ],
      "en": [
        "Remeasure the liability and recognise the increase in profit or loss as required",
        "No remeasurement",
        "Increase goes to equity",
        "Record as inventory"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "المعاملات المسددة نقداً يعاد قياس التزامها بالقيمة العادلة حتى التسوية.",
      "en": "Cash-settled share-based payment liabilities are remeasured at fair value until settlement."
    },
    "reference": "IFRS 2 — cash settled",
    "difficulty": "intermediate",
    "examDomain": "Cash settled"
  },
  {
    "id": "ifrs-p5-ifrs2-04",
    "track": "IFRS",
    "topic": "IFRS 2 — Modification",
    "question": {
      "ar": "عدلت المنشأة جائزة حقوق ملكية بما يزيد قيمتها العادلة للموظف. كيف يعالج التحسن؟",
      "en": "An entity modifies an equity award in a way that increases its fair value for the employee. How is the improvement treated?"
    },
    "choices": {
      "ar": [
        "يعترف بالقيمة الإضافية وفق متطلبات التعديل بالإضافة إلى الحد الأدنى الأصلي",
        "يتجاهل دائماً",
        "يخفض المصروف",
        "يحول لالتزام"
      ],
      "en": [
        "Recognise the incremental value under modification requirements in addition to the original minimum",
        "Always ignore it",
        "Reduce expense",
        "Convert to liability"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "التعديلات المفيدة للموظف قد تولد قيمة عادلة إضافية فوق القياس الأصلي.",
      "en": "Beneficial modifications can create incremental fair value in addition to the original award measurement."
    },
    "reference": "IFRS 2 — modifications",
    "difficulty": "hard",
    "examDomain": "Modification"
  },
  {
    "id": "ifrs-p5-ifrs2-05",
    "track": "IFRS",
    "topic": "IFRS 2 — Non-market condition",
    "question": {
      "ar": "هدف EBITDA شرط أداء غير سوقي. لم يتحقق الهدف. ما المبدأ العام للجوائز المسددة بحقوق ملكية؟",
      "en": "An EBITDA target is a non-market performance condition and is not achieved. What is the general principle for an equity-settled award?"
    },
    "choices": {
      "ar": [
        "يعدل عدد الجوائز المتوقع استحقاقها وقد لا يعترف بمصروف نهائي إذا لم تستحق بسبب الشرط",
        "تبقى القيمة كاملة لأن الشرط داخل القيمة العادلة فقط",
        "تعاد القيمة العادلة كل فترة",
        "يسجل التزام نقدي"
      ],
      "en": [
        "Adjust expected vesting quantity and potentially recognise no final expense if the award fails to vest because of that condition",
        "Keep full amount because condition is only in fair value",
        "Remeasure fair value each period",
        "Record cash liability"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الشروط غير السوقية تؤثر في عدد الجوائز المستحقة ولا تدمج بالطريقة نفسها في القيمة العادلة كما الشروط السوقية.",
      "en": "Non-market conditions affect the number of awards that vest rather than being treated like market conditions in fair value."
    },
    "reference": "IFRS 2 — non-market conditions",
    "difficulty": "hard",
    "examDomain": "Non-market condition"
  },
  {
    "id": "ifrs-p5-ifrs5-01",
    "track": "IFRS",
    "topic": "IFRS 5 — Sale probability",
    "question": {
      "ar": "أي عامل يدعم أن البيع مرجح بدرجة عالية؟",
      "en": "Which factor supports a sale being highly probable?"
    },
    "choices": {
      "ar": [
        "الإدارة ملتزمة بخطة وتبحث بنشاط عن مشترٍ بسعر معقول",
        "مجرد فكرة أولية",
        "عدم وجود صلاحية للموافقة",
        "عدم تسويق الأصل"
      ],
      "en": [
        "Management is committed to a plan and actively seeking a buyer at a reasonable price",
        "Only a preliminary idea",
        "No authority to approve",
        "No marketing"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "التزام الإدارة وخطة نشطة للبيع من عناصر تقييم التصنيف كمحتفظ به للبيع.",
      "en": "Management commitment and an active sale plan are elements of the held-for-sale assessment."
    },
    "reference": "IFRS 5 — highly probable sale",
    "difficulty": "easy",
    "examDomain": "Sale probability"
  },
  {
    "id": "ifrs-p5-ifrs5-02",
    "track": "IFRS",
    "topic": "IFRS 5 — Write-down",
    "question": {
      "ar": "قيمة أصل قبل التصنيف 150 والقيمة العادلة ناقص تكاليف البيع 120. ما القياس بعد التصنيف؟",
      "en": "An asset carries at 150 before classification and fair value less costs to sell is 120. What is its measurement after classification?"
    },
    "choices": {
      "ar": [
        "120",
        "150",
        "270",
        "30"
      ],
      "en": [
        "120",
        "150",
        "270",
        "30"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يقاس بالأقل من القيمة الدفترية والقيمة العادلة ناقص تكاليف البيع.",
      "en": "Measure at the lower of carrying amount and fair value less costs to sell."
    },
    "reference": "IFRS 5 — measurement",
    "difficulty": "intermediate",
    "examDomain": "Write-down"
  },
  {
    "id": "ifrs-p5-ifrs5-03",
    "track": "IFRS",
    "topic": "IFRS 5 — Held for distribution",
    "question": {
      "ar": "هل يتضمن IFRS 5 أيضاً بعض الأصول أو مجموعات الاستبعاد المصنفة كمحتفظ بها للتوزيع على الملاك؟",
      "en": "Does IFRS 5 also address certain assets or disposal groups held for distribution to owners?"
    },
    "choices": {
      "ar": [
        "نعم",
        "لا",
        "فقط النقد",
        "فقط المخزون"
      ],
      "en": [
        "Yes",
        "No",
        "Cash only",
        "Inventory only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "المعيار يشمل متطلبات مماثلة لبعض مجموعات التوزيع على الملاك.",
      "en": "The standard contains related requirements for certain disposal groups held for distribution to owners."
    },
    "reference": "IFRS 5 — held for distribution",
    "difficulty": "intermediate",
    "examDomain": "Held for distribution"
  },
  {
    "id": "ifrs-p5-ifrs5-04",
    "track": "IFRS",
    "topic": "IFRS 5 — Change of plan",
    "question": {
      "ar": "إذا لم تعد شروط التصنيف كمحتفظ به للبيع مستوفاة، ماذا يحدث؟",
      "en": "If held-for-sale classification criteria are no longer met, what happens?"
    },
    "choices": {
      "ar": [
        "يتوقف التصنيف ويعاد القياس وفق متطلبات الرجوع المحددة",
        "يبقى التصنيف للأبد",
        "يشطب الأصل",
        "يحول للنقد"
      ],
      "en": [
        "Classification ceases and the asset is remeasured under specified reclassification rules",
        "Classification remains forever",
        "Write off asset",
        "Convert to cash"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IFRS 5 يحدد كيفية إعادة القياس عند التخلي عن خطة البيع.",
      "en": "IFRS 5 specifies remeasurement when an entity abandons or no longer qualifies for the sale plan."
    },
    "reference": "IFRS 5 — change of sale plan",
    "difficulty": "hard",
    "examDomain": "Change of plan"
  },
  {
    "id": "ifrs-p5-ifrs5-05",
    "track": "IFRS",
    "topic": "IFRS 5 — Discontinued operation",
    "question": {
      "ar": "باع كيان خط أعمال رئيسياً مستقلاً يمثل سوقاً جغرافية رئيسية. كيف قد يعرض؟",
      "en": "An entity disposes of a major separate line of business representing a major geographical area. How may it be presented?"
    },
    "choices": {
      "ar": [
        "كعملية غير مستمرة إذا استوفى التعريف",
        "كمصروف إداري فقط",
        "كمخزون",
        "ضمن التمويل"
      ],
      "en": [
        "As a discontinued operation if the definition is met",
        "Administrative expense only",
        "Inventory",
        "Financing"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الخط الرئيسي المنفصل قد يحقق تعريف العملية غير المستمرة إذا استوفى بقية الشروط.",
      "en": "A major separate line of business may qualify as a discontinued operation when the remaining criteria are met."
    },
    "reference": "IFRS 5 — discontinued operations",
    "difficulty": "hard",
    "examDomain": "Discontinued operation"
  },
  {
    "id": "ifrs-p5-ifrs6-01",
    "track": "IFRS",
    "topic": "IFRS 6 — Exploration rights",
    "question": {
      "ar": "انتهى حق المنشأة في الاستكشاف بمنطقة معينة ولا تتوقع تجديده. ما الإشارة المحاسبية المهمة؟",
      "en": "An entity's right to explore an area expires and renewal is not expected. What is the key accounting signal?"
    },
    "choices": {
      "ar": [
        "مؤشر انخفاض لأصل الاستكشاف والتقييم",
        "زيادة تلقائية في القيمة",
        "إيراد",
        "لا أثر"
      ],
      "en": [
        "Impairment indicator for the exploration and evaluation asset",
        "Automatic increase in value",
        "Revenue",
        "No effect"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "انتهاء الحق دون توقع التجديد من مؤشرات انخفاض القيمة في IFRS 6.",
      "en": "Expiry of exploration rights without expected renewal is an IFRS 6 impairment indicator."
    },
    "reference": "IFRS 6 — impairment indicators",
    "difficulty": "easy",
    "examDomain": "Exploration rights"
  },
  {
    "id": "ifrs-p5-ifrs6-02",
    "track": "IFRS",
    "topic": "IFRS 6 — Expenditure plans",
    "question": {
      "ar": "قررت الإدارة عدم وجود ميزانية جوهرية لمزيد من الاستكشاف في منطقة لم تثبت موارد تجارية. ما الدلالة؟",
      "en": "Management has no substantive budget for further exploration in an area with no demonstrated commercial resources. What does this suggest?"
    },
    "choices": {
      "ar": [
        "قد يكون مؤشر انخفاض",
        "يعني رسملة كل التكاليف",
        "يعني نجاح المشروع",
        "لا علاقة"
      ],
      "en": [
        "May indicate impairment",
        "Capitalise all costs",
        "Project success",
        "No relevance"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "عدم التخطيط لمزيد من الإنفاق في منطقة غير ناجحة قد يشير إلى عدم استرداد الأصل.",
      "en": "No planned further expenditure in an unsuccessful area can indicate the exploration asset may not be recoverable."
    },
    "reference": "IFRS 6 — impairment indicators",
    "difficulty": "intermediate",
    "examDomain": "Expenditure plans"
  },
  {
    "id": "ifrs-p5-ifrs6-03",
    "track": "IFRS",
    "topic": "IFRS 6 — Unit testing",
    "question": {
      "ar": "هل يسمح IFRS 6 بمستوى اختبار انخفاض أوسع من CGU مفردة في بعض الحالات؟",
      "en": "Can IFRS 6 permit impairment testing at a level broader than a single CGU in some cases?"
    },
    "choices": {
      "ar": [
        "نعم، ضمن حدود قطاع تشغيلي وبحسب السياسة المحددة",
        "لا أبداً",
        "فقط لكل بئر منفرد",
        "فقط على مستوى المجموعة كلها"
      ],
      "en": [
        "Yes, subject to limits such as an operating segment and the entity's policy",
        "Never",
        "Only each well",
        "Only whole group"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "للأصول الاستكشافية مرونة محددة في تحديد مستوى الاختبار قبل تطبيق قياس IAS 36.",
      "en": "Exploration assets have specified flexibility in defining the impairment testing level before IAS 36 measurement is applied."
    },
    "reference": "IFRS 6 — impairment testing level",
    "difficulty": "intermediate",
    "examDomain": "Unit testing"
  },
  {
    "id": "ifrs-p5-ifrs6-04",
    "track": "IFRS",
    "topic": "IFRS 6 — Policy consistency",
    "question": {
      "ar": "هل يمكن تغيير سياسة محاسبة نفقات الاستكشاف لمجرد زيادة الأرباح؟",
      "en": "Can an exploration expenditure policy be changed merely to increase profit?"
    },
    "choices": {
      "ar": [
        "لا، يجب أن ينتج التغيير معلومات أكثر ملاءمة وموثوقية وفق متطلبات السياسات",
        "نعم",
        "فقط في سنة الخسارة",
        "حسب الإدارة"
      ],
      "en": [
        "No; a change must produce more relevant and reliable information under policy requirements",
        "Yes",
        "Only in a loss year",
        "Management choice"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "مرونة IFRS 6 لا تلغي مبادئ اتساق وجودة السياسات المحاسبية.",
      "en": "IFRS 6 flexibility does not remove the principles governing consistent, relevant and reliable accounting policies."
    },
    "reference": "IFRS 6 — accounting policy changes",
    "difficulty": "hard",
    "examDomain": "Policy consistency"
  },
  {
    "id": "ifrs-p5-ifrs6-05",
    "track": "IFRS",
    "topic": "IFRS 6 — After feasibility",
    "question": {
      "ar": "أثبتت المنشأة الجدوى الفنية والقدرة التجارية لمنجم. أي معيار يحدد استمرار تصنيف الأصل كاستكشاف وتقييم؟",
      "en": "An entity demonstrates technical feasibility and commercial viability of a mine. Does IFRS 6 continue as the accounting basis for that asset?"
    },
    "choices": {
      "ar": [
        "لا، ينتقل الأصل للمعايير المناسبة الأخرى بعد الإجراءات المطلوبة",
        "نعم حتى بدء المبيعات",
        "نعم للأبد",
        "فقط إذا لم توجد إيرادات"
      ],
      "en": [
        "No; the asset transitions to other applicable standards after required procedures",
        "Yes until sales begin",
        "Yes forever",
        "Only if no revenue"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "إثبات الجدوى ينهي مرحلة الاستكشاف والتقييم لهذا الأصل.",
      "en": "Demonstrating feasibility ends the exploration-and-evaluation phase for that asset."
    },
    "reference": "IFRS 6 — reclassification",
    "difficulty": "hard",
    "examDomain": "After feasibility"
  },
  {
    "id": "ifrs-p5-ifrs7-01",
    "track": "IFRS",
    "topic": "IFRS 7 — ECL reconciliation",
    "question": {
      "ar": "ما الإفصاح الذي يساعد على فهم تغير مخصص الخسائر الائتمانية المتوقعة؟",
      "en": "Which disclosure helps users understand changes in the expected credit loss allowance?"
    },
    "choices": {
      "ar": [
        "مصالحة حركة المخصص بين بداية ونهاية الفترة",
        "قائمة الموردين",
        "تقرير الرواتب",
        "ميزانية التسويق"
      ],
      "en": [
        "Reconciliation of allowance movements from beginning to end of period",
        "Supplier list",
        "Payroll report",
        "Marketing budget"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "مصالحة مخصص ECL توضح أثر التغيرات الائتمانية والتحويلات والشطب وغيرها.",
      "en": "An ECL allowance reconciliation explains credit changes, transfers, write-offs and other movements."
    },
    "reference": "IFRS 7 — credit risk disclosures",
    "difficulty": "easy",
    "examDomain": "ECL reconciliation"
  },
  {
    "id": "ifrs-p5-ifrs7-02",
    "track": "IFRS",
    "topic": "IFRS 7 — Collateral",
    "question": {
      "ar": "لدى الشركة قروض مضمونة بعقارات العملاء. لماذا يهم الإفصاح عن الضمانات؟",
      "en": "An entity has loans secured by customer property. Why do collateral disclosures matter?"
    },
    "choices": {
      "ar": [
        "لأنها تساعد المستخدم على تقييم جودة التعرض الائتماني وتخفيف المخاطر",
        "لأنها تغير العملة الوظيفية",
        "لأنها تجعل القرض مخزوناً",
        "لا تهم"
      ],
      "en": [
        "They help users assess credit exposure quality and risk mitigation",
        "They change functional currency",
        "They make the loan inventory",
        "They do not matter"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الضمانات جزء مهم من فهم كيفية إدارة مخاطر الائتمان.",
      "en": "Collateral is important to understanding how credit risk is managed and mitigated."
    },
    "reference": "IFRS 7 — collateral",
    "difficulty": "intermediate",
    "examDomain": "Collateral"
  },
  {
    "id": "ifrs-p5-ifrs7-03",
    "track": "IFRS",
    "topic": "IFRS 7 — Liquidity maturity",
    "question": {
      "ar": "هل تحليل استحقاق الالتزامات المالية يركز عادةً على التدفقات التعاقدية المتبقية؟",
      "en": "Does the maturity analysis of financial liabilities generally focus on remaining contractual cash flows?"
    },
    "choices": {
      "ar": [
        "نعم",
        "لا، القيمة الدفترية فقط دائماً",
        "فقط الفائدة",
        "فقط الأصل"
      ],
      "en": [
        "Yes",
        "No, always carrying amount only",
        "Interest only",
        "Principal only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تحليل الاستحقاقات يساعد على فهم توقيت الالتزامات النقدية التعاقدية.",
      "en": "The maturity analysis helps users understand timing of contractual cash obligations."
    },
    "reference": "IFRS 7 — liquidity risk",
    "difficulty": "intermediate",
    "examDomain": "Liquidity maturity"
  },
  {
    "id": "ifrs-p5-ifrs7-04",
    "track": "IFRS",
    "topic": "IFRS 7 — Sensitivity",
    "question": {
      "ar": "إذا استخدمت الشركة تحليل حساسية لمخاطر الفائدة، ما الذي يجب أن يعكسه السيناريو؟",
      "en": "If an entity discloses interest-rate sensitivity, what should the scenario reflect?"
    },
    "choices": {
      "ar": [
        "تغيراً معقولاً ممكناً في متغير المخاطر في تاريخ التقرير",
        "أسوأ سيناريو خيالي دائماً",
        "التغير التاريخي الأكبر فقط",
        "صفر تغير"
      ],
      "en": [
        "A reasonably possible change in the risk variable at reporting date",
        "Always an imaginary worst case",
        "Only the largest historical change",
        "Zero change"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الحساسية يجب أن تكون ذات معنى ومتصلة بالمخاطر الحالية.",
      "en": "Sensitivity analysis should be meaningful and related to current risk exposure."
    },
    "reference": "IFRS 7 — sensitivity analysis",
    "difficulty": "hard",
    "examDomain": "Sensitivity"
  },
  {
    "id": "ifrs-p5-ifrs7-05",
    "track": "IFRS",
    "topic": "IFRS 7 — Classes",
    "question": {
      "ar": "لماذا يجب تجميع الأدوات المالية في فئات مناسبة للإفصاح؟",
      "en": "Why should financial instruments be grouped into appropriate classes for disclosure?"
    },
    "choices": {
      "ar": [
        "لربط المعلومات بطبيعة وخصائص الأدوات والمخاطر بدلاً من تجميع غير مفيد",
        "لتقليل عدد الحسابات فقط",
        "لإخفاء المخاطر",
        "لإلغاء IFRS 9"
      ],
      "en": [
        "To relate information to instrument characteristics and risks rather than unhelpful aggregation",
        "Only to reduce account count",
        "To hide risks",
        "To cancel IFRS 9"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الفئات المناسبة تحسن فهم المستخدم للمخاطر والقياس.",
      "en": "Appropriate classes improve users' understanding of instrument measurement and risk."
    },
    "reference": "IFRS 7 — classes of financial instruments",
    "difficulty": "hard",
    "examDomain": "Classes"
  },
  {
    "id": "ifrs-p5-ifrs8-01",
    "track": "IFRS",
    "topic": "IFRS 8 — Operating segment criteria",
    "question": {
      "ar": "أي شرط أساسي للقطاع التشغيلي؟",
      "en": "Which is a core characteristic of an operating segment?"
    },
    "choices": {
      "ar": [
        "تتوفر له معلومات مالية منفصلة يراجعها CODM بانتظام",
        "أن يكون شركة قانونية منفصلة",
        "أن يكون مربحاً دائماً",
        "أن يكون في دولة مختلفة"
      ],
      "en": [
        "Discrete financial information is available and regularly reviewed by the CODM",
        "It must be a separate legal company",
        "It must always be profitable",
        "It must be in another country"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "القطاع التشغيلي يعتمد على طريقة إدارة الأعمال داخلياً وتوافر معلومات منفصلة.",
      "en": "Operating segments reflect internal management and availability of discrete financial information."
    },
    "reference": "IFRS 8 — operating segment definition",
    "difficulty": "easy",
    "examDomain": "Operating segment criteria"
  },
  {
    "id": "ifrs-p5-ifrs8-02",
    "track": "IFRS",
    "topic": "IFRS 8 — Revenue threshold",
    "question": {
      "ar": "قطاع إيراداته 12% من إجمالي إيرادات القطاعات. هل قد يجتاز أحد الحدود الكمية للتقرير؟",
      "en": "A segment's revenue is 12% of total segment revenue. Could it meet one quantitative threshold for reportability?"
    },
    "choices": {
      "ar": [
        "نعم",
        "لا، يجب 25%",
        "فقط إذا كان مربحاً",
        "لا توجد حدود"
      ],
      "en": [
        "Yes",
        "No, must be 25%",
        "Only if profitable",
        "There are no thresholds"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "أحد حدود التقرير الكمية يستخدم 10% كعتبة، مع اختبارات أخرى أيضاً.",
      "en": "One quantitative reportability test uses a 10% threshold, alongside other tests."
    },
    "reference": "IFRS 8 — quantitative thresholds",
    "difficulty": "intermediate",
    "examDomain": "Revenue threshold"
  },
  {
    "id": "ifrs-p5-ifrs8-03",
    "track": "IFRS",
    "topic": "IFRS 8 — 75 percent test",
    "question": {
      "ar": "إذا كانت القطاعات القابلة للتقرير تغطي 60% فقط من الإيراد الخارجي، ماذا يتطلب المعيار عادةً؟",
      "en": "If reportable segments cover only 60% of external revenue, what is generally required?"
    },
    "choices": {
      "ar": [
        "تحديد قطاعات إضافية حتى تغطي على الأقل 75% من الإيراد الخارجي",
        "لا شيء",
        "دمج كل القطاعات",
        "استبعاد الباقي"
      ],
      "en": [
        "Identify additional reportable segments until at least 75% of external revenue is covered",
        "Nothing",
        "Combine all segments",
        "Exclude the rest"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "اختبار التغطية يضمن أن جزءاً كبيراً من نشاط الإيراد الخارجي ممثل في القطاعات القابلة للتقرير.",
      "en": "The coverage test ensures a substantial portion of external revenue is represented by reportable segments."
    },
    "reference": "IFRS 8 — 75% test",
    "difficulty": "intermediate",
    "examDomain": "75 percent test"
  },
  {
    "id": "ifrs-p5-ifrs8-04",
    "track": "IFRS",
    "topic": "IFRS 8 — CODM measure",
    "question": {
      "ar": "هل يجب أن يكون مقياس ربح القطاع مطابقاً تماماً لربح IFRS الموحد؟",
      "en": "Must the segment profit measure exactly equal consolidated IFRS profit?"
    },
    "choices": {
      "ar": [
        "لا، يعكس المقياس المقدم بانتظام إلى CODM مع المصالحات المطلوبة",
        "نعم دائماً",
        "فقط قبل الضريبة",
        "فقط بعد الفائدة"
      ],
      "en": [
        "No; it reflects the measure regularly provided to the CODM with required reconciliations",
        "Always yes",
        "Only pre-tax",
        "Only after interest"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "نهج الإدارة يسمح بمقاييس داخلية مع مصالحة إلى أرقام القوائم.",
      "en": "The management approach permits internal measures, with reconciliation to financial statement amounts."
    },
    "reference": "IFRS 8 — segment measures",
    "difficulty": "hard",
    "examDomain": "CODM measure"
  },
  {
    "id": "ifrs-p5-ifrs8-05",
    "track": "IFRS",
    "topic": "IFRS 8 — Major customer",
    "question": {
      "ar": "عميل واحد يمثل 12% من إيراد المنشأة. ما الإفصاح المحتمل؟",
      "en": "One customer represents 12% of entity revenue. What disclosure may be required?"
    },
    "choices": {
      "ar": [
        "وجود اعتماد على عميل رئيسي ومقدار الإيراد والقطاع المرتبط دون الحاجة عادة لاسم العميل",
        "اسم العميل وعنوانه دائماً",
        "لا إفصاح",
        "كل العقود التفصيلية"
      ],
      "en": [
        "Major-customer concentration, revenue amount and related segment without generally needing the customer's name",
        "Always customer name/address",
        "No disclosure",
        "All contract details"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IFRS 8 يتطلب معلومات عن العملاء الرئيسيين عندما تبلغ الإيرادات حد الأهمية المحدد.",
      "en": "IFRS 8 requires major-customer information when revenue meets the specified threshold."
    },
    "reference": "IFRS 8 — major customers",
    "difficulty": "hard",
    "examDomain": "Major customer"
  },
  {
    "id": "ifrs-p5-ifrs11-01",
    "track": "IFRS",
    "topic": "IFRS 11 — Unanimous consent",
    "question": {
      "ar": "ثلاثة أطراف تملك الترتيب، لكن طرفاً واحداً يستطيع اتخاذ القرارات الرئيسية منفرداً. هل توجد سيطرة مشتركة؟",
      "en": "Three parties own an arrangement, but one party can make key decisions alone. Is there joint control?"
    },
    "choices": {
      "ar": [
        "لا",
        "نعم دائماً",
        "فقط إذا كان لكل طرف 33%",
        "فقط إذا كانت الأرباح متساوية"
      ],
      "en": [
        "No",
        "Always yes",
        "Only if each owns 33%",
        "Only if profits are equal"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "السيطرة المشتركة تتطلب موافقة جماعية من الأطراف التي تتقاسم السيطرة على القرارات ذات الصلة.",
      "en": "Joint control requires unanimous consent of the parties sharing control over relevant decisions."
    },
    "reference": "IFRS 11 — joint control",
    "difficulty": "easy",
    "examDomain": "Unanimous consent"
  },
  {
    "id": "ifrs-p5-ifrs11-02",
    "track": "IFRS",
    "topic": "IFRS 11 — Separate vehicle",
    "question": {
      "ar": "وجود شركة قانونية منفصلة للترتيب يعني تلقائياً أنه مشروع مشترك؟",
      "en": "Does using a separate legal vehicle automatically make an arrangement a joint venture?"
    },
    "choices": {
      "ar": [
        "لا، يجب تحليل الشكل القانوني والعقد والوقائع والظروف",
        "نعم دائماً",
        "فقط إذا كانت LLC",
        "فقط إذا كانت مدرجة"
      ],
      "en": [
        "No; legal form, contract and other facts/circumstances must be analysed",
        "Always yes",
        "Only if an LLC",
        "Only if listed"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الشكل المنفصل عامل مهم لكنه ليس حاسماً وحده.",
      "en": "A separate vehicle is an important factor but not determinative on its own."
    },
    "reference": "IFRS 11 — classification",
    "difficulty": "intermediate",
    "examDomain": "Separate vehicle"
  },
  {
    "id": "ifrs-p5-ifrs11-03",
    "track": "IFRS",
    "topic": "IFRS 11 — Joint operator asset",
    "question": {
      "ar": "مشغل مشترك يملك حقاً في 40% من أصل و40% من التزام العملية. ماذا يعترف؟",
      "en": "A joint operator has rights to 40% of an asset and obligations for 40% of a liability. What does it recognise?"
    },
    "choices": {
      "ar": [
        "حصته من الأصل والالتزام",
        "استثمار واحد فقط دائماً",
        "لا شيء",
        "شهرة"
      ],
      "en": [
        "Its share of the asset and liability",
        "Always a single investment only",
        "Nothing",
        "Goodwill"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "العملية المشتركة تعكس الحقوق في الأصول والالتزامات عن الالتزامات.",
      "en": "A joint operation reflects direct rights to assets and obligations for liabilities."
    },
    "reference": "IFRS 11 — joint operator accounting",
    "difficulty": "intermediate",
    "examDomain": "Joint operator asset"
  },
  {
    "id": "ifrs-p5-ifrs11-04",
    "track": "IFRS",
    "topic": "IFRS 11 — Joint venture",
    "question": {
      "ar": "لماذا لا يستخدم التوحيد النسبي عادةً للمشروع المشترك تحت IFRS 11؟",
      "en": "Why is proportionate consolidation generally not used for a joint venture under IFRS 11?"
    },
    "choices": {
      "ar": [
        "لأن الحق يكون في صافي الأصول ويعالج بطريقة حقوق الملكية وفق IAS 28",
        "لأن المشروع المشترك لا يظهر بالقوائم",
        "لأنه أصل مالي دائماً",
        "لأنه مخزون"
      ],
      "en": [
        "Because parties have rights to net assets and use the equity method under IAS 28",
        "Because it is omitted from statements",
        "Because it is always a financial asset",
        "Because it is inventory"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "طبيعة الحق في صافي الأصول هي أساس معالجة المشروع المشترك.",
      "en": "Rights to net assets underpin equity-method accounting for a joint venture."
    },
    "reference": "IFRS 11 / IAS 28",
    "difficulty": "hard",
    "examDomain": "Joint venture"
  },
  {
    "id": "ifrs-p5-ifrs11-05",
    "track": "IFRS",
    "topic": "IFRS 11 — Reassessment",
    "question": {
      "ar": "هل يعاد تقييم تصنيف الترتيب المشترك عند تغير الحقوق والالتزامات التعاقدية؟",
      "en": "Is classification of a joint arrangement reassessed when contractual rights and obligations change?"
    },
    "choices": {
      "ar": [
        "نعم",
        "لا أبداً",
        "فقط عند نهاية خمس سنوات",
        "فقط عند خسارة"
      ],
      "en": [
        "Yes",
        "Never",
        "Only after five years",
        "Only when loss-making"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تغير الشروط قد يغير جوهر الحقوق والالتزامات وبالتالي التصنيف.",
      "en": "Changes in terms may alter the substance of rights and obligations and therefore classification."
    },
    "reference": "IFRS 11 — reassessment",
    "difficulty": "hard",
    "examDomain": "Reassessment"
  },
  {
    "id": "ifrs-p5-ifrs12-01",
    "track": "IFRS",
    "topic": "IFRS 12 — Significant judgements",
    "question": {
      "ar": "أي حكم قد يحتاج إفصاحاً تحت IFRS 12؟",
      "en": "Which judgement may require disclosure under IFRS 12?"
    },
    "choices": {
      "ar": [
        "لماذا يعتقد المستثمر أنه يسيطر رغم امتلاك أقل من نصف الأصوات",
        "طريقة إهلاك آلة",
        "NRV مخزون",
        "معدل VAT"
      ],
      "en": [
        "Why an investor concludes it controls an investee despite holding less than half the votes",
        "Machine depreciation method",
        "Inventory NRV",
        "VAT rate"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الأحكام المهمة المتعلقة بالسيطرة والسيطرة المشتركة والتأثير المهم ضمن تركيز IFRS 12.",
      "en": "Significant judgements about control, joint control and significant influence are a focus of IFRS 12."
    },
    "reference": "IFRS 12 — significant judgements",
    "difficulty": "easy",
    "examDomain": "Significant judgements"
  },
  {
    "id": "ifrs-p5-ifrs12-02",
    "track": "IFRS",
    "topic": "IFRS 12 — Restrictions",
    "question": {
      "ar": "لماذا تفصح المجموعة عن قيود مهمة على تحويل النقد من شركة تابعة؟",
      "en": "Why does a group disclose significant restrictions on transferring cash from a subsidiary?"
    },
    "choices": {
      "ar": [
        "لأنها تؤثر في قدرة المجموعة على الوصول إلى الأصول وتسوية الالتزامات",
        "لأنها تغير الملكية",
        "لأنها تلغي التوحيد",
        "فقط لأغراض الضرائب"
      ],
      "en": [
        "Because they affect the group's ability to access assets and settle liabilities",
        "They change ownership",
        "They cancel consolidation",
        "Only for tax"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "القيود على توزيعات أو تحويلات النقد مهمة لفهم سيولة المجموعة وقدرتها على استخدام الموارد.",
      "en": "Restrictions on dividends or cash transfers are important to understanding group liquidity and access to resources."
    },
    "reference": "IFRS 12 — restrictions",
    "difficulty": "intermediate",
    "examDomain": "Restrictions"
  },
  {
    "id": "ifrs-p5-ifrs12-03",
    "track": "IFRS",
    "topic": "IFRS 12 — Structured entity",
    "question": {
      "ar": "ما الذي يميز المنشأة المهيكلة غالباً؟",
      "en": "What often characterises a structured entity?"
    },
    "choices": {
      "ar": [
        "حقوق التصويت ليست العامل المسيطر في تحديد من يسيطر عليها",
        "لا يوجد لها أصول",
        "يجب أن تكون بنكاً",
        "يجب أن تكون غير ربحية"
      ],
      "en": [
        "Voting rights are not the dominant factor in deciding control",
        "It has no assets",
        "It must be a bank",
        "It must be non-profit"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "المنشآت المهيكلة صممت غالباً بحيث تكون الترتيبات التعاقدية أهم من التصويت في تحديد السيطرة.",
      "en": "Structured entities are often designed so contractual arrangements matter more than voting rights for control."
    },
    "reference": "IFRS 12 — structured entities",
    "difficulty": "intermediate",
    "examDomain": "Structured entity"
  },
  {
    "id": "ifrs-p5-ifrs12-04",
    "track": "IFRS",
    "topic": "IFRS 12 — Support",
    "question": {
      "ar": "قدمت شركة دعماً مالياً لمنشأة مهيكلة غير موحدة رغم عدم وجود التزام تعاقدي. هل قد يكون ذلك مهماً للإفصاح؟",
      "en": "An entity provides financial support to an unconsolidated structured entity without a contractual obligation. Could this be disclosure-relevant?"
    },
    "choices": {
      "ar": [
        "نعم",
        "لا أبداً",
        "فقط إذا تحول الدعم إلى أسهم",
        "فقط إذا كان المبلغ صفراً"
      ],
      "en": [
        "Yes",
        "Never",
        "Only if converted to shares",
        "Only if amount is zero"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الدعم غير التعاقدي يمكن أن يوضح طبيعة التعرض والمخاطر تجاه المنشأة المهيكلة.",
      "en": "Non-contractual support can be relevant to understanding exposure and risks to a structured entity."
    },
    "reference": "IFRS 12 — support to structured entities",
    "difficulty": "hard",
    "examDomain": "Support"
  },
  {
    "id": "ifrs-p5-ifrs12-05",
    "track": "IFRS",
    "topic": "IFRS 12 — Materiality",
    "question": {
      "ar": "هل يجب عرض نفس مستوى التفاصيل لكل شركة تابعة مهما كانت غير جوهرية؟",
      "en": "Must the same detailed disclosure be provided for every subsidiary regardless of immateriality?"
    },
    "choices": {
      "ar": [
        "لا، تطبق الأهمية النسبية والتجميع المناسب",
        "نعم حرفياً لكل شركة",
        "فقط للشركات المحلية",
        "فقط للشركات المربحة"
      ],
      "en": [
        "No; materiality and appropriate aggregation apply",
        "Yes literally for every subsidiary",
        "Domestic subsidiaries only",
        "Profitable subsidiaries only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "هدف الإفصاح هو معلومات مفيدة غير محجوبة بتفاصيل غير جوهرية.",
      "en": "The disclosure objective is useful information without obscuring it through immaterial detail."
    },
    "reference": "IFRS 12 — materiality and aggregation",
    "difficulty": "hard",
    "examDomain": "Materiality"
  },
  {
    "id": "ifrs-p5-ifrs14-01",
    "track": "IFRS",
    "topic": "IFRS 14 — Eligibility",
    "question": {
      "ar": "شركة تطبق IFRS منذ 10 سنوات ودخلت قطاعاً منظماً بالأسعار الآن. هل يمكنها بدء IFRS 14؟",
      "en": "An entity has applied IFRS for 10 years and now enters a rate-regulated sector. Can it newly start IFRS 14?"
    },
    "choices": {
      "ar": [
        "لا",
        "نعم",
        "فقط إذا كانت حكومية",
        "فقط إذا كانت مرافق"
      ],
      "en": [
        "No",
        "Yes",
        "Only if government-owned",
        "Only if a utility"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IFRS 14 مرتبط بمتبنٍ لأول مرة يستوفي شروطاً محددة، وليس خياراً مفتوحاً لمعدي IFRS الحاليين.",
      "en": "IFRS 14 is tied to qualifying first-time adopters and is not an open option for existing IFRS preparers."
    },
    "reference": "IFRS 14 — scope",
    "difficulty": "easy",
    "examDomain": "Eligibility"
  },
  {
    "id": "ifrs-p5-ifrs14-02",
    "track": "IFRS",
    "topic": "IFRS 14 — Previous GAAP",
    "question": {
      "ar": "ما نقطة البداية لمعالجة أرصدة التأجيل التنظيمية تحت IFRS 14؟",
      "en": "What is the starting point for accounting for regulatory deferral balances under IFRS 14?"
    },
    "choices": {
      "ar": [
        "السياسات السابقة المؤهلة مع تعديلات محدودة يطلبها IFRS 14",
        "IFRS 9 دائماً",
        "القيمة العادلة دائماً",
        "IAS 2"
      ],
      "en": [
        "Qualifying previous-GAAP policies with limited IFRS 14 modifications",
        "Always IFRS 9",
        "Always fair value",
        "IAS 2"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "المعيار يسمح باستمرار أساس سابق محدد بدلاً من إنشاء نموذج قياس جديد كامل.",
      "en": "The standard permits continuation of specified previous-GAAP accounting rather than imposing a complete new measurement model."
    },
    "reference": "IFRS 14 — previous GAAP continuation",
    "difficulty": "intermediate",
    "examDomain": "Previous GAAP"
  },
  {
    "id": "ifrs-p5-ifrs14-03",
    "track": "IFRS",
    "topic": "IFRS 14 — Presentation",
    "question": {
      "ar": "لماذا تُعرض أرصدة التأجيل التنظيمية منفصلة؟",
      "en": "Why are regulatory deferral balances presented separately?"
    },
    "choices": {
      "ar": [
        "لتمييزها عن الأصول والالتزامات المعترف بها بموجب معايير IFRS الأخرى",
        "لأنها نقد",
        "لأنها حقوق ملكية",
        "لا سبب"
      ],
      "en": [
        "To distinguish them from assets/liabilities recognised under other IFRS Standards",
        "Because they are cash",
        "Because they are equity",
        "No reason"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الفصل يساعد المستخدم على رؤية أثر استمرار محاسبة GAAP السابق ضمن إطار IFRS 14.",
      "en": "Separate presentation helps users see the effect of continued previous-GAAP regulatory accounting."
    },
    "reference": "IFRS 14 — separate presentation",
    "difficulty": "intermediate",
    "examDomain": "Presentation"
  },
  {
    "id": "ifrs-p5-ifrs14-04",
    "track": "IFRS",
    "topic": "IFRS 14 — Transition to IFRS 20",
    "question": {
      "ar": "ما التاريخ الذي يجب أن تخطط له منشأة IFRS 14 للانتقال الإلزامي إلى IFRS 20؟",
      "en": "What date should an IFRS 14 entity plan around for mandatory transition to IFRS 20?"
    },
    "choices": {
      "ar": [
        "الفترات التي تبدأ في أو بعد 1 يناير 2029",
        "1 يناير 2027",
        "1 يناير 2025",
        "لا يوجد انتقال"
      ],
      "en": [
        "Periods beginning on or after 1 January 2029",
        "1 January 2027",
        "1 January 2025",
        "No transition"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IFRS 20 يحل محل IFRS 14 من 2029 مع السماح بالتطبيق المبكر.",
      "en": "IFRS 20 replaces IFRS 14 from 2029, with earlier application permitted."
    },
    "reference": "IFRS 14 / IFRS 20 transition",
    "difficulty": "hard",
    "examDomain": "Transition to IFRS 20"
  },
  {
    "id": "ifrs-p5-ifrs14-05",
    "track": "IFRS",
    "topic": "IFRS 14 — Disclosure",
    "question": {
      "ar": "أي معلومات تساعد مستخدم القوائم على فهم الأرصدة التنظيمية؟",
      "en": "Which information helps users understand regulatory deferral balances?"
    },
    "choices": {
      "ar": [
        "طبيعة تنظيم الأسعار والمخاطر وكيف ومتى يتوقع استرداد أو تسوية الأرصدة",
        "اسم كل عميل",
        "قائمة الموظفين",
        "المخزون فقط"
      ],
      "en": [
        "Nature of rate regulation, risks and how/when balances are expected to be recovered or settled",
        "Every customer name",
        "Employee list",
        "Inventory only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الإفصاح يجب أن يشرح طبيعة التنظيم وأثره الاقتصادي على الأرصدة.",
      "en": "Disclosure should explain the nature of regulation and economic effects on the balances."
    },
    "reference": "IFRS 14 — disclosures",
    "difficulty": "hard",
    "examDomain": "Disclosure"
  },
  {
    "id": "ifrs-p5-ifrs17-01",
    "track": "IFRS",
    "topic": "IFRS 17 — Portfolio",
    "question": {
      "ar": "كيف يبدأ تجميع عقود التأمين قبل تقسيمها إلى مجموعات؟",
      "en": "How does grouping of insurance contracts start before dividing into groups?"
    },
    "choices": {
      "ar": [
        "بتحديد محافظ عقود ذات مخاطر متشابهة وتدار معاً",
        "كل العقود في شركة واحدة",
        "حسب رقم الوثيقة",
        "حسب العملة فقط"
      ],
      "en": [
        "Identify portfolios of contracts with similar risks managed together",
        "All company contracts together",
        "By policy number",
        "By currency only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تحديد المحافظ يسبق تقسيمها بحسب الربحية وسنة الإصدار.",
      "en": "Portfolio identification precedes grouping by profitability and issue-year considerations."
    },
    "reference": "IFRS 17 — portfolios",
    "difficulty": "easy",
    "examDomain": "Portfolio"
  },
  {
    "id": "ifrs-p5-ifrs17-02",
    "track": "IFRS",
    "topic": "IFRS 17 — Annual cohorts",
    "question": {
      "ar": "هل يسمح IFRS 17 عادة بجمع عقود صدرت بفارق أكثر من سنة في المجموعة نفسها؟",
      "en": "Does IFRS 17 generally permit contracts issued more than one year apart to be in the same group?"
    },
    "choices": {
      "ar": [
        "لا، تطبق متطلبات cohort سنوية مع الاستثناءات المحددة",
        "نعم دائماً",
        "فقط إذا كانت مربحة",
        "فقط إذا كانت إعادة تأمين"
      ],
      "en": [
        "No; annual cohort requirements apply subject to specified exceptions",
        "Always yes",
        "Only if profitable",
        "Only reinsurance"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "المجموعات لا تضم عادة عقوداً صدرت بفارق يزيد على سنة.",
      "en": "Groups generally do not include contracts issued more than one year apart."
    },
    "reference": "IFRS 17 — annual cohorts",
    "difficulty": "intermediate",
    "examDomain": "Annual cohorts"
  },
  {
    "id": "ifrs-p5-ifrs17-03",
    "track": "IFRS",
    "topic": "IFRS 17 — Risk adjustment",
    "question": {
      "ar": "ماذا يمثل تعديل المخاطر للمخاطر غير المالية؟",
      "en": "What does the risk adjustment for non-financial risk represent?"
    },
    "choices": {
      "ar": [
        "التعويض المطلوب لتحمل عدم التأكد بشأن مقدار وتوقيت التدفقات غير المالية",
        "تكلفة التمويل فقط",
        "الشهرة",
        "ضريبة مؤجلة"
      ],
      "en": [
        "Compensation required for bearing uncertainty about amount/timing of non-financial risk cash flows",
        "Finance cost only",
        "Goodwill",
        "Deferred tax"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تعديل المخاطر يعكس عدم التأكد غير المالي الذي تتحمله المنشأة.",
      "en": "The risk adjustment reflects compensation for non-financial uncertainty borne by the entity."
    },
    "reference": "IFRS 17 — risk adjustment",
    "difficulty": "intermediate",
    "examDomain": "Risk adjustment"
  },
  {
    "id": "ifrs-p5-ifrs17-04",
    "track": "IFRS",
    "topic": "IFRS 17 — Insurance revenue",
    "question": {
      "ar": "هل يعرض IFRS 17 أقساط التأمين المستلمة ببساطة كإيراد عند التحصيل؟",
      "en": "Does IFRS 17 simply present insurance premiums received as revenue when collected?"
    },
    "choices": {
      "ar": [
        "لا، إيراد التأمين يعكس خدمات التأمين المقدمة وفق النموذج",
        "نعم دائماً",
        "فقط العقود الطويلة",
        "فقط عند الدفع النقدي"
      ],
      "en": [
        "No; insurance revenue reflects insurance services provided under the model",
        "Always yes",
        "Long contracts only",
        "Only when cash is paid"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "العرض يفصل التدفقات النقدية للأقساط عن قياس إيراد الخدمة المحاسبي.",
      "en": "Presentation separates premium cash flows from accounting insurance service revenue."
    },
    "reference": "IFRS 17 — insurance revenue",
    "difficulty": "hard",
    "examDomain": "Insurance revenue"
  },
  {
    "id": "ifrs-p5-ifrs17-05",
    "track": "IFRS",
    "topic": "IFRS 17 — Reinsurance",
    "question": {
      "ar": "هل تعالج عقود إعادة التأمين المحتفظ بها في مجموعة منفصلة عن عقود التأمين المصدرة؟",
      "en": "Are reinsurance contracts held accounted for separately from insurance contracts issued?"
    },
    "choices": {
      "ar": [
        "نعم",
        "لا، تدمج دائماً",
        "فقط إذا كانت مربحة",
        "فقط إذا كانت داخل المجموعة"
      ],
      "en": [
        "Yes",
        "No, always netted",
        "Only if profitable",
        "Only if intragroup"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IFRS 17 يتطلب محاسبة وعرضاً منفصلين لعقود إعادة التأمين المحتفظ بها.",
      "en": "IFRS 17 requires separate accounting and presentation for reinsurance contracts held."
    },
    "reference": "IFRS 17 — reinsurance contracts held",
    "difficulty": "hard",
    "examDomain": "Reinsurance"
  },
  {
    "id": "ifrs-p5-ifrs19-01",
    "track": "IFRS",
    "topic": "IFRS 19 — Parent condition",
    "question": {
      "ar": "شركة تابعة بلا مساءلة عامة لكن شركتها الأم لا تصدر قوائم موحدة IFRS متاحة للاستخدام العام. هل تستوفي شرط الأهلية الأساسي لـIFRS 19؟",
      "en": "A subsidiary has no public accountability, but its parent does not issue publicly available IFRS consolidated statements. Does it meet the core IFRS 19 eligibility condition?"
    },
    "choices": {
      "ar": [
        "لا",
        "نعم دائماً",
        "فقط إذا كانت صغيرة",
        "فقط إذا كانت محلية"
      ],
      "en": [
        "No",
        "Always yes",
        "Only if small",
        "Only if domestic"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الأهلية تتطلب أيضاً وجود شركة أم تنتج قوائم موحدة متوافقة مع IFRS متاحة للاستخدام العام.",
      "en": "Eligibility also requires a parent producing IFRS consolidated financial statements available for public use."
    },
    "reference": "IFRS 19 — eligibility",
    "difficulty": "easy",
    "examDomain": "Parent condition"
  },
  {
    "id": "ifrs-p5-ifrs19-02",
    "track": "IFRS",
    "topic": "IFRS 19 — Recognition",
    "question": {
      "ar": "شركة مؤهلة تطبق IFRS 19 ولديها عقد إيجار. ما معيار القياس للعقد؟",
      "en": "An eligible IFRS 19 subsidiary has a lease. Which standard governs recognition and measurement?"
    },
    "choices": {
      "ar": [
        "IFRS 16",
        "IFRS 19 وحده",
        "IAS 2",
        "IFRS 7"
      ],
      "en": [
        "IFRS 16",
        "IFRS 19 alone",
        "IAS 2",
        "IFRS 7"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IFRS 19 يخفف الإفصاحات فقط؛ الاعتراف والقياس يأتيان من المعيار الموضوعي مثل IFRS 16.",
      "en": "IFRS 19 reduces disclosures only; recognition and measurement come from the relevant standard such as IFRS 16."
    },
    "reference": "IFRS 19 — disclosure-only model",
    "difficulty": "intermediate",
    "examDomain": "Recognition"
  },
  {
    "id": "ifrs-p5-ifrs19-03",
    "track": "IFRS",
    "topic": "IFRS 19 — Public accountability",
    "question": {
      "ar": "بنك يحتفظ بأصول عملاء بصفة ائتمانية كجزء أساسي من نشاطه. هل قد تكون لديه مساءلة عامة تمنعه من IFRS 19؟",
      "en": "A bank holds client assets in a fiduciary capacity as a primary business. Could this create public accountability preventing IFRS 19 eligibility?"
    },
    "choices": {
      "ar": [
        "نعم",
        "لا أبداً",
        "فقط إذا كان مدرجاً",
        "فقط إذا كان كبيراً"
      ],
      "en": [
        "Yes",
        "Never",
        "Only if listed",
        "Only if large"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "المساءلة العامة تشمل كيانات يكون الاحتفاظ بأصول الغير بصفة ائتمانية نشاطاً رئيسياً في حالات مثل البنوك.",
      "en": "Public accountability includes entities that hold outsiders' assets in a fiduciary capacity as a primary business, such as banks."
    },
    "reference": "IFRS 19 — public accountability",
    "difficulty": "intermediate",
    "examDomain": "Public accountability"
  },
  {
    "id": "ifrs-p5-ifrs19-04",
    "track": "IFRS",
    "topic": "IFRS 19 — Election",
    "question": {
      "ar": "هل يمكن لشركة مؤهلة أن تختار IFRS 19 في فترة ثم تتوقف عنه لاحقاً إذا ظلت مؤهلة؟",
      "en": "Can an eligible subsidiary elect IFRS 19 for a period and later stop using it while remaining eligible?"
    },
    "choices": {
      "ar": [
        "نعم، وفق متطلبات الاختيار والتوقف والإفصاح ذات الصلة",
        "لا، الاختيار غير قابل للإلغاء للأبد",
        "فقط بعد خمس سنوات",
        "فقط إذا تغيرت الشركة الأم"
      ],
      "en": [
        "Yes, subject to relevant election, cessation and disclosure requirements",
        "No, the election is irrevocable forever",
        "Only after five years",
        "Only if parent changes"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IFRS 19 معيار اختياري؛ تغير الاختيار يخضع لمتطلبات العرض والمقارنة والإفصاح ذات الصلة.",
      "en": "IFRS 19 is voluntary; changes in election are handled under the relevant presentation/comparative/disclosure requirements."
    },
    "reference": "IFRS 19 — election",
    "difficulty": "hard",
    "examDomain": "Election"
  },
  {
    "id": "ifrs-p5-ifrs19-05",
    "track": "IFRS",
    "topic": "IFRS 19 — Updates",
    "question": {
      "ar": "لماذا يحتاج فريق التقارير إلى متابعة تعديلات IFRS 19 حتى لو لم تتغير عمليات الشركة؟",
      "en": "Why must a reporting team monitor IFRS 19 amendments even if operations do not change?"
    },
    "choices": {
      "ar": [
        "لأن إفصاحاته تحتاج أن تظل متوافقة مع تعديلات ومتطلبات المعايير الأخرى",
        "لأن IFRS 19 يغير العملة كل سنة",
        "لأنه يحدد الضرائب",
        "لا حاجة"
      ],
      "en": [
        "Because its reduced disclosure set must stay aligned with changes in other IFRS Standards",
        "It changes functional currency annually",
        "It determines tax",
        "No need"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IFRS 19 يتم تحديثه لاستيعاب متطلبات الإفصاح الناتجة عن معايير جديدة أو معدلة.",
      "en": "IFRS 19 is updated to reflect disclosure consequences of new or amended IFRS Standards."
    },
    "reference": "IFRS 19 — maintenance",
    "difficulty": "hard",
    "examDomain": "Updates"
  },
  {
    "id": "ifrs-p5-ifrs20-01",
    "track": "IFRS",
    "topic": "IFRS 20 — Scope feature",
    "question": {
      "ar": "أي عنصر جوهري في تنظيم الأسعار حتى يقع ضمن نموذج IFRS 20؟",
      "en": "Which feature is central to rate regulation within the IFRS 20 model?"
    },
    "choices": {
      "ar": [
        "وجود آلية تحدد تعويضاً مسموحاً عن سلع أو خدمات منظمة ويؤثر توقيتها على الأسعار المستقبلية",
        "وجود ضريبة مبيعات",
        "وجود دعم حكومي فقط",
        "وجود سعر معلن"
      ],
      "en": [
        "A mechanism determining allowed compensation for regulated goods/services with timing effects on future rates",
        "Sales tax",
        "Government grant only",
        "Published price"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IFRS 20 يستهدف نوعاً محدداً من تنظيم الأسعار ينشئ حقوقاً والتزامات مرتبطة بالتعويض المسموح.",
      "en": "IFRS 20 targets specified rate regulation creating rights and obligations linked to allowed compensation."
    },
    "reference": "IFRS 20 — scope",
    "difficulty": "easy",
    "examDomain": "Scope feature"
  },
  {
    "id": "ifrs-p5-ifrs20-02",
    "track": "IFRS",
    "topic": "IFRS 20 — Regulatory asset",
    "question": {
      "ar": "تكلفة مسموح باستردادها من العملاء مستقبلاً بسبب فرق توقيت تنظيمي. ما البند المحتمل؟",
      "en": "A cost is allowed to be recovered from customers in future rates because of a regulatory timing difference. What may arise?"
    },
    "choices": {
      "ar": [
        "أصل تنظيمي",
        "شهرة",
        "مخزون",
        "التزام ضريبي"
      ],
      "en": [
        "Regulatory asset",
        "Goodwill",
        "Inventory",
        "Tax liability"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "حق إضافة مبلغ إلى أسعار مستقبلية بسبب فرق التوقيت قد ينشئ أصلاً تنظيمياً.",
      "en": "A right to add an amount to future regulated rates because of a timing difference may create a regulatory asset."
    },
    "reference": "IFRS 20 — regulatory asset",
    "difficulty": "intermediate",
    "examDomain": "Regulatory asset"
  },
  {
    "id": "ifrs-p5-ifrs20-03",
    "track": "IFRS",
    "topic": "IFRS 20 — Regulatory liability",
    "question": {
      "ar": "حصلت المنشأة في الأسعار الحالية على تعويض يتجاوز ما يتعلق بالخدمة الحالية ويجب رده عبر خفض أسعار مستقبلية. ما المحتمل؟",
      "en": "Current rates include compensation exceeding the amount related to current service and the excess must reduce future rates. What may arise?"
    },
    "choices": {
      "ar": [
        "التزام تنظيمي",
        "أصل تنظيمي",
        "شهرة",
        "أصل ثابت"
      ],
      "en": [
        "Regulatory liability",
        "Regulatory asset",
        "Goodwill",
        "PP&E"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "التزام خفض الأسعار المستقبلية بسبب مبالغ محصلة مبكراً قد ينشئ التزاماً تنظيمياً.",
      "en": "An obligation to reduce future rates because amounts were recovered early may create a regulatory liability."
    },
    "reference": "IFRS 20 — regulatory liability",
    "difficulty": "intermediate",
    "examDomain": "Regulatory liability"
  },
  {
    "id": "ifrs-p5-ifrs20-04",
    "track": "IFRS",
    "topic": "IFRS 20 — Transition",
    "question": {
      "ar": "هل يوفر IFRS 20 أكثر من نهج للانتقال عند التطبيق الأولي؟",
      "en": "Does IFRS 20 provide more than one transition approach on initial application?"
    },
    "choices": {
      "ar": [
        "نعم، يتضمن تطبيقاً رجعياً ونهجاً رجعياً معدلاً وفق المتطلبات",
        "لا، مستقبلي فقط",
        "لا انتقال",
        "فقط لمتبني IFRS لأول مرة"
      ],
      "en": [
        "Yes; it includes retrospective and modified retrospective approaches under the requirements",
        "No, prospective only",
        "No transition rules",
        "First-time adopters only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IFRS 20 يوفر خيارات انتقال محددة مع معلومات مقارنة معدلة حسب المتطلبات.",
      "en": "IFRS 20 provides specified transition approaches with adjusted comparative information as required."
    },
    "reference": "IFRS 20 — transition",
    "difficulty": "hard",
    "examDomain": "Transition"
  },
  {
    "id": "ifrs-p5-ifrs20-05",
    "track": "IFRS",
    "topic": "IFRS 20 — Effective date",
    "question": {
      "ar": "متى يبدأ التطبيق الإلزامي لـIFRS 20؟",
      "en": "When does IFRS 20 become mandatory?"
    },
    "choices": {
      "ar": [
        "الفترات السنوية التي تبدأ في أو بعد 1 يناير 2029",
        "1 يناير 2027",
        "1 يناير 2026",
        "1 يناير 2030 فقط"
      ],
      "en": [
        "Annual periods beginning on or after 1 January 2029",
        "1 January 2027",
        "1 January 2026",
        "Only 1 January 2030"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "المعيار صدر في مايو 2026 ويسري من 2029 مع السماح بالتطبيق المبكر.",
      "en": "The standard was issued in May 2026 and is effective from 2029 with earlier application permitted."
    },
    "reference": "IFRS 20 — effective date",
    "difficulty": "hard",
    "examDomain": "Effective date"
  },
  {
    "id": "ifrs-p5-ias1-01",
    "track": "IFRS",
    "topic": "IAS 1 — Complete set",
    "question": {
      "ar": "أي قائمة جزء من المجموعة الكاملة للقوائم المالية؟",
      "en": "Which statement is part of a complete set of financial statements?"
    },
    "choices": {
      "ar": [
        "قائمة التغيرات في حقوق الملكية",
        "كشف أعمار الذمم الداخلي فقط",
        "موازنة المبيعات",
        "كشف الرواتب"
      ],
      "en": [
        "Statement of changes in equity",
        "Internal receivables ageing only",
        "Sales budget",
        "Payroll listing"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "المجموعة الكاملة تشمل المركز المالي والربح أو الخسارة والدخل الشامل والتغيرات في حقوق الملكية والتدفقات والإيضاحات.",
      "en": "A complete set includes financial position, profit/loss and OCI, changes in equity, cash flows and notes."
    },
    "reference": "IAS 1 — complete set",
    "difficulty": "easy",
    "examDomain": "Complete set"
  },
  {
    "id": "ifrs-p5-ias1-02",
    "track": "IFRS",
    "topic": "IAS 1 — Fair presentation",
    "question": {
      "ar": "هل الالتزام الحرفي بالإفصاحات يضمن وحده عرضاً عادلاً إذا كانت المعلومات الجوهرية محجوبة؟",
      "en": "Does mechanically complying with listed disclosures alone ensure fair presentation if material information is obscured?"
    },
    "choices": {
      "ar": [
        "لا",
        "نعم دائماً",
        "فقط إذا كانت القوائم مدققة",
        "فقط للشركات العامة"
      ],
      "en": [
        "No",
        "Always yes",
        "Only if audited",
        "Public entities only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "العرض العادل يتطلب تطبيق المعايير والأهمية النسبية وتقديم معلومات إضافية عند الحاجة.",
      "en": "Fair presentation requires applying standards, materiality and additional information when necessary."
    },
    "reference": "IAS 1 — fair presentation",
    "difficulty": "intermediate",
    "examDomain": "Fair presentation"
  },
  {
    "id": "ifrs-p5-ias1-03",
    "track": "IFRS",
    "topic": "IAS 1 — Going concern",
    "question": {
      "ar": "وجدت الإدارة عدم يقين جوهري قد يثير شكاً كبيراً حول الاستمرارية لكنها ما زالت تستخدم أساس الاستمرارية. ما المطلوب؟",
      "en": "Management identifies a material uncertainty that may cast significant doubt on going concern but still uses the going-concern basis. What is required?"
    },
    "choices": {
      "ar": [
        "إفصاح واضح عن عدم اليقين الجوهري",
        "لا إفصاح",
        "إغلاق الشركة فوراً",
        "تسجيل شهرة"
      ],
      "en": [
        "Clear disclosure of the material uncertainty",
        "No disclosure",
        "Immediate closure",
        "Record goodwill"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "استخدام أساس الاستمرارية لا يلغي واجب الإفصاح عن عدم اليقين الجوهري.",
      "en": "Using the going-concern basis does not remove the duty to disclose material uncertainties."
    },
    "reference": "IAS 1 — going concern",
    "difficulty": "intermediate",
    "examDomain": "Going concern"
  },
  {
    "id": "ifrs-p5-ias1-04",
    "track": "IFRS",
    "topic": "IAS 1 — Current liability",
    "question": {
      "ar": "إذا لم يكن للمنشأة في تاريخ التقرير حق جوهري لتأجيل تسوية التزام لمدة 12 شهراً على الأقل، ما التصنيف المعتاد؟",
      "en": "If at reporting date an entity lacks a substantive right to defer settlement of a liability for at least 12 months, what is the usual classification?"
    },
    "choices": {
      "ar": [
        "متداول",
        "غير متداول",
        "حقوق ملكية",
        "إيراد"
      ],
      "en": [
        "Current",
        "Non-current",
        "Equity",
        "Revenue"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "التصنيف يعتمد على الحقوق القائمة في تاريخ التقرير وفق المتطلبات السارية.",
      "en": "Classification depends on rights existing at the reporting date under the applicable requirements."
    },
    "reference": "IAS 1 — current/non-current",
    "difficulty": "hard",
    "examDomain": "Current liability"
  },
  {
    "id": "ifrs-p5-ias1-05",
    "track": "IFRS",
    "topic": "IAS 1 — IFRS 18 transition",
    "question": {
      "ar": "ما مصير IAS 1 عند تطبيق IFRS 18 من 2027؟",
      "en": "What happens to IAS 1 when IFRS 18 is applied from 2027?"
    },
    "choices": {
      "ar": [
        "يحل IFRS 18 محله وتنقل بعض المتطلبات إلى IAS 8 وIFRS 7",
        "يبقى دون تغيير بالكامل",
        "يلغى كل عرض للقوائم",
        "يصبح معيار مخزون"
      ],
      "en": [
        "IFRS 18 replaces it and some requirements move to IAS 8 and IFRS 7",
        "It remains entirely unchanged",
        "All presentation requirements disappear",
        "It becomes an inventory standard"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IFRS 18 يحل محل IAS 1 مع إعادة توزيع بعض المتطلبات.",
      "en": "IFRS 18 replaces IAS 1 while relocating some requirements to other standards."
    },
    "reference": "IAS 1 / IFRS 18",
    "difficulty": "hard",
    "examDomain": "IFRS 18 transition"
  },
  {
    "id": "ifrs-p5-ias8-01",
    "track": "IFRS",
    "topic": "IAS 8 — Policy hierarchy",
    "question": {
      "ar": "لا يوجد معيار يعالج معاملة مباشرة. إلى ماذا تلجأ الإدارة أولاً عند تطوير سياسة؟",
      "en": "No standard directly addresses a transaction. What does management first consider when developing a policy?"
    },
    "choices": {
      "ar": [
        "متطلبات معايير IFRS التي تتناول مسائل مشابهة ومتصلة ثم إطار المفاهيم وفق التسلسل",
        "القواعد الضريبية فقط",
        "رأي المنافس",
        "أي اختيار"
      ],
      "en": [
        "Requirements in IFRS dealing with similar and related issues, then the Conceptual Framework under the hierarchy",
        "Tax rules only",
        "Competitor opinion",
        "Any choice"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IAS 8 يوفر تسلسلاً لاستخدام الحكم عند غياب متطلب مباشر.",
      "en": "IAS 8 provides a hierarchy for using judgement when no specific requirement applies."
    },
    "reference": "IAS 8 — policy hierarchy",
    "difficulty": "easy",
    "examDomain": "Policy hierarchy"
  },
  {
    "id": "ifrs-p5-ias8-02",
    "track": "IFRS",
    "topic": "IAS 8 — New standard transition",
    "question": {
      "ar": "صدر معيار جديد يتضمن أحكام انتقال محددة. كيف يطبق تغيير السياسة؟",
      "en": "A new standard includes specific transition provisions. How is the policy change applied?"
    },
    "choices": {
      "ar": [
        "وفق أحكام الانتقال في المعيار الجديد",
        "رجعياً دائماً بغض النظر",
        "مستقبلياً دائماً",
        "لا يطبق"
      ],
      "en": [
        "According to the new standard's transition provisions",
        "Always retrospectively regardless",
        "Always prospectively",
        "Do not apply"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "أحكام الانتقال الخاصة بالمعيار الجديد تسبق قاعدة IAS 8 العامة.",
      "en": "Specific transition provisions in the new standard govern before IAS 8's general rule."
    },
    "reference": "IAS 8 — transition provisions",
    "difficulty": "intermediate",
    "examDomain": "New standard transition"
  },
  {
    "id": "ifrs-p5-ias8-03",
    "track": "IFRS",
    "topic": "IAS 8 — Estimate vs error",
    "question": {
      "ar": "تبين أن العمر الإنتاجي السابق كان معقولاً لكنه تغير بسبب تقنية جديدة. كيف يعالج؟",
      "en": "A previous useful life estimate was reasonable but changes because of new technology. How is it treated?"
    },
    "choices": {
      "ar": [
        "تغير تقدير مستقبلي",
        "خطأ سابق",
        "تغير سياسة رجعي",
        "OCI"
      ],
      "en": [
        "Prospective estimate change",
        "Prior-period error",
        "Retrospective policy change",
        "OCI"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "المعلومات الجديدة تؤدي لتغير تقدير لا لتصحيح خطأ إذا كان التقدير السابق معقولاً.",
      "en": "New information causes an estimate change, not an error correction, if the previous estimate was reasonable."
    },
    "reference": "IAS 8 — changes in estimates",
    "difficulty": "intermediate",
    "examDomain": "Estimate vs error"
  },
  {
    "id": "ifrs-p5-ias8-04",
    "track": "IFRS",
    "topic": "IAS 8 — Error",
    "question": {
      "ar": "استخدمت المنشأة معلومات كانت متاحة وموثوقة لكنها أغفلتها عند إعداد السنة السابقة، مما سبب تحريفاً جوهرياً. ما التصنيف؟",
      "en": "Reliable information was available when prior statements were prepared but was omitted, causing a material misstatement. What is it?"
    },
    "choices": {
      "ar": [
        "خطأ فترة سابقة",
        "تغير تقدير",
        "تغير سياسة اختياري",
        "حدث غير معدل"
      ],
      "en": [
        "Prior-period error",
        "Estimate change",
        "Voluntary policy change",
        "Non-adjusting event"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "إغفال أو سوء استخدام معلومات موثوقة كانت متاحة يدخل ضمن أخطاء الفترات السابقة.",
      "en": "Omission or misuse of reliable information that was available is a prior-period error."
    },
    "reference": "IAS 8 — prior-period errors",
    "difficulty": "hard",
    "examDomain": "Error"
  },
  {
    "id": "ifrs-p5-ias8-05",
    "track": "IFRS",
    "topic": "IAS 8 — Impracticability",
    "question": {
      "ar": "إذا كان التطبيق الرجعي لتغير سياسة غير عملي لفترة معينة، ماذا يحدث؟",
      "en": "If retrospective application of a policy change is impracticable for a particular period, what happens?"
    },
    "choices": {
      "ar": [
        "تطبق المتطلبات من أقدم تاريخ عملي وتفصح عن القيود",
        "تلغى السياسة الجديدة",
        "تختار أي تاريخ",
        "لا إفصاح"
      ],
      "en": [
        "Apply from the earliest practicable date and disclose the limitation",
        "Cancel the new policy",
        "Choose any date",
        "No disclosure"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IAS 8 يتعامل مع عدم العملية بتطبيق من أقدم تاريخ يمكن عملياً مع الإفصاح.",
      "en": "IAS 8 handles impracticability by applying from the earliest practicable date with disclosure."
    },
    "reference": "IAS 8 — impracticability",
    "difficulty": "hard",
    "examDomain": "Impracticability"
  },
  {
    "id": "ifrs-p5-ias10-01",
    "track": "IFRS",
    "topic": "IAS 10 — Adjusting receivable",
    "question": {
      "ar": "بعد نهاية السنة أفلس عميل وكانت لديه صعوبات مالية كبيرة قبل نهاية السنة. ما المعالجة المرجحة؟",
      "en": "After year-end a customer goes bankrupt and had serious financial difficulties before year-end. What is the likely treatment?"
    },
    "choices": {
      "ar": [
        "حدث معدل يراجع خسارة الذمم",
        "حدث غير معدل دائماً",
        "إيراد جديد",
        "لا أثر"
      ],
      "en": [
        "Adjusting event that updates the receivable loss",
        "Always non-adjusting",
        "New revenue",
        "No effect"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الإفلاس قد يقدم دليلاً إضافياً عن حالة كانت موجودة في تاريخ التقرير.",
      "en": "Bankruptcy can provide additional evidence about a condition existing at the reporting date."
    },
    "reference": "IAS 10 — adjusting events",
    "difficulty": "easy",
    "examDomain": "Adjusting receivable"
  },
  {
    "id": "ifrs-p5-ias10-02",
    "track": "IFRS",
    "topic": "IAS 10 — Fire after year end",
    "question": {
      "ar": "حريق كبير دمر مصنعاً بعد نهاية السنة ولم تكن هناك ظروف مرتبطة قبلها. ما المعالجة عادةً؟",
      "en": "A major fire destroys a plant after year-end with no related condition existing before year-end. What is the usual treatment?"
    },
    "choices": {
      "ar": [
        "غير معدل مع إفصاح إذا كان جوهرياً",
        "تعديل قيمة المصنع في نهاية السنة",
        "إلغاء القوائم",
        "إثبات مخصص قبل السنة"
      ],
      "en": [
        "Non-adjusting, with disclosure if material",
        "Adjust plant value at year-end",
        "Cancel statements",
        "Recognise prior-year provision"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الحريق نشأ بعد تاريخ التقرير، لذلك لا يغير أرقام ذلك التاريخ لكنه قد يحتاج إفصاحاً.",
      "en": "The fire arose after reporting date, so it does not change period-end amounts but may require disclosure."
    },
    "reference": "IAS 10 — non-adjusting events",
    "difficulty": "intermediate",
    "examDomain": "Fire after year end"
  },
  {
    "id": "ifrs-p5-ias10-03",
    "track": "IFRS",
    "topic": "IAS 10 — Authorisation",
    "question": {
      "ar": "لماذا يهم تاريخ اعتماد القوائم للإصدار؟",
      "en": "Why does the date financial statements are authorised for issue matter?"
    },
    "choices": {
      "ar": [
        "لأنه يحدد نهاية نافذة تقييم الأحداث بعد فترة التقرير",
        "لأنه يحدد تاريخ المعاملة",
        "لأنه يغير العملة",
        "لأنه يحدد المخزون"
      ],
      "en": [
        "It defines the end of the subsequent-events assessment window",
        "It defines transaction dates",
        "It changes currency",
        "It determines inventory"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IAS 10 يغطي الأحداث حتى تاريخ الاعتماد للإصدار.",
      "en": "IAS 10 covers events through the authorisation-for-issue date."
    },
    "reference": "IAS 10 — authorisation date",
    "difficulty": "intermediate",
    "examDomain": "Authorisation"
  },
  {
    "id": "ifrs-p5-ias10-04",
    "track": "IFRS",
    "topic": "IAS 10 — Dividend",
    "question": {
      "ar": "أعلنت الشركة توزيعات بعد نهاية السنة وقبل اعتماد القوائم. أين تظهر؟",
      "en": "The entity declares dividends after year-end but before authorisation. How are they treated?"
    },
    "choices": {
      "ar": [
        "لا تثبت كالتزام في نهاية السنة لكن يفصح عنها وفق المتطلبات",
        "تثبت كالتزام نهاية السنة",
        "تخصم من المخزون",
        "تسجل كإيراد"
      ],
      "en": [
        "Not recognised as a period-end liability but disclosed as required",
        "Recognised as period-end liability",
        "Deducted from inventory",
        "Recorded as revenue"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "لا يوجد التزام في تاريخ التقرير قبل الإعلان.",
      "en": "No obligation existed at reporting date before the dividend was declared."
    },
    "reference": "IAS 10 — dividends",
    "difficulty": "hard",
    "examDomain": "Dividend"
  },
  {
    "id": "ifrs-p5-ias10-05",
    "track": "IFRS",
    "topic": "IAS 10 — Going concern",
    "question": {
      "ar": "بعد نهاية السنة فقدت الشركة أكبر عميل ولا يوجد تمويل بديل وتقرر التصفية. هل يكفي الإفصاح كحدث غير معدل؟",
      "en": "After year-end the entity loses its largest customer, has no alternative financing and decides to liquidate. Is disclosure as a non-adjusting event sufficient?"
    },
    "choices": {
      "ar": [
        "لا، قد يلزم تغيير أساس الإعداد لأن الاستمرارية لم تعد مناسبة",
        "نعم دائماً",
        "فقط إذا كان الخسارة صغيرة",
        "لا علاقة"
      ],
      "en": [
        "No; the basis of preparation may need to change because going concern is no longer appropriate",
        "Always yes",
        "Only if the loss is small",
        "No relevance"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "مسائل الاستمرارية قد تغير أساس إعداد القوائم نفسه.",
      "en": "Going-concern developments can change the basis of financial statement preparation itself."
    },
    "reference": "IAS 10 — going concern",
    "difficulty": "hard",
    "examDomain": "Going concern"
  },
  {
    "id": "ifrs-p5-ias19-01",
    "track": "IFRS",
    "topic": "IAS 19 — Short-term benefits",
    "question": {
      "ar": "مكافأة سنوية يتوقع دفعها خلال 12 شهراً بعد نهاية فترة الخدمة، إلى أي فئة تنتمي عادةً؟",
      "en": "An annual bonus expected to be paid within 12 months after the service period ends generally belongs to which category?"
    },
    "choices": {
      "ar": [
        "منافع موظفين قصيرة الأجل",
        "منافع ما بعد الخدمة",
        "منافع إنهاء الخدمة",
        "دفعات أسهم"
      ],
      "en": [
        "Short-term employee benefits",
        "Post-employment benefits",
        "Termination benefits",
        "Share-based payments"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "المنافع المستحقة بالكامل خلال الفترة القصيرة المحددة عادةً تصنف قصيرة الأجل.",
      "en": "Benefits wholly due within the specified short period are generally short-term employee benefits."
    },
    "reference": "IAS 19 — short-term benefits",
    "difficulty": "easy",
    "examDomain": "Short-term benefits"
  },
  {
    "id": "ifrs-p5-ias19-02",
    "track": "IFRS",
    "topic": "IAS 19 — Net interest",
    "question": {
      "ar": "على ماذا يحسب صافي الفائدة في خطة المنافع المحددة؟",
      "en": "On what is net interest for a defined benefit plan calculated?"
    },
    "choices": {
      "ar": [
        "صافي التزام أو أصل المنافع المحددة باستخدام معدل الخصم",
        "مبيعات الشركة",
        "قيمة المخزون",
        "حقوق الملكية"
      ],
      "en": [
        "Net defined benefit liability or asset using the discount rate",
        "Company sales",
        "Inventory value",
        "Equity"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "صافي الفائدة يعكس مرور الزمن على صافي المركز المحدد.",
      "en": "Net interest reflects the time value on the net defined benefit position."
    },
    "reference": "IAS 19 — net interest",
    "difficulty": "intermediate",
    "examDomain": "Net interest"
  },
  {
    "id": "ifrs-p5-ias19-03",
    "track": "IFRS",
    "topic": "IAS 19 — Plan assets",
    "question": {
      "ar": "هل يمكن استخدام أي أصل للشركة لتقليل التزام المنافع المحددة؟",
      "en": "Can any company asset be treated as a plan asset to reduce the defined benefit liability?"
    },
    "choices": {
      "ar": [
        "لا، يجب استيفاء تعريف أصول الخطة والقيود المحددة",
        "نعم",
        "فقط النقد",
        "فقط العقارات"
      ],
      "en": [
        "No; the definition and restrictions for plan assets must be met",
        "Yes",
        "Cash only",
        "Property only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "أصول الخطة لها تعريف وشروط محددة وليست مجرد أصول تملكها الشركة.",
      "en": "Plan assets have a specific definition and conditions; they are not simply any assets owned by the entity."
    },
    "reference": "IAS 19 — plan assets",
    "difficulty": "intermediate",
    "examDomain": "Plan assets"
  },
  {
    "id": "ifrs-p5-ias19-04",
    "track": "IFRS",
    "topic": "IAS 19 — Past service cost",
    "question": {
      "ar": "عدلت الشركة خطة منافع محددة بما يزيد المنافع عن خدمة سابقة. ماذا ينشأ؟",
      "en": "An entity amends a defined benefit plan increasing benefits for past service. What arises?"
    },
    "choices": {
      "ar": [
        "تكلفة خدمة سابقة تعترف وفق متطلبات IAS 19",
        "شهرة",
        "مخزون",
        "إيراد مؤجل"
      ],
      "en": [
        "Past service cost recognised under IAS 19 requirements",
        "Goodwill",
        "Inventory",
        "Deferred revenue"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تعديل الخطة قد ينشئ تكلفة خدمة سابقة تعترف عند وقوع حدث التعديل وفق القواعد.",
      "en": "A plan amendment can create past service cost recognised under the standard's requirements."
    },
    "reference": "IAS 19 — past service cost",
    "difficulty": "hard",
    "examDomain": "Past service cost"
  },
  {
    "id": "ifrs-p5-ias19-05",
    "track": "IFRS",
    "topic": "IAS 19 — Curtailment",
    "question": {
      "ar": "خفضت الشركة بشكل كبير عدد الموظفين المغطين بالخطة. ما الحدث المحتمل؟",
      "en": "An entity significantly reduces the number of employees covered by a plan. What event may this represent?"
    },
    "choices": {
      "ar": [
        "تقليص plan curtailment",
        "دمج أعمال",
        "مخزون بطيء",
        "منحة حكومية"
      ],
      "en": [
        "Plan curtailment",
        "Business combination",
        "Slow-moving inventory",
        "Government grant"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "التقليص قد يحدث عند انخفاض جوهري في عدد الموظفين المشمولين أو في الخدمة المستقبلية.",
      "en": "A curtailment may occur when there is a significant reduction in covered employees or future service."
    },
    "reference": "IAS 19 — curtailments",
    "difficulty": "hard",
    "examDomain": "Curtailment"
  },
  {
    "id": "ifrs-p5-ias20-01",
    "track": "IFRS",
    "topic": "IAS 20 — Reasonable assurance",
    "question": {
      "ar": "تلقت الشركة إشعاراً أولياً بمنحة لكنها لم تستوف شرط التوظيف المطلوب ولا يوجد تأكيد معقول أنها ستستوفيه. هل تعترف بالمنحة؟",
      "en": "An entity receives preliminary grant approval but has not met an employment condition and lacks reasonable assurance it will do so. Recognise the grant?"
    },
    "choices": {
      "ar": [
        "لا",
        "نعم فوراً",
        "نصفها",
        "فقط في OCI"
      ],
      "en": [
        "No",
        "Immediately yes",
        "Half",
        "Only in OCI"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الاعتراف يحتاج تأكيداً معقولاً باستيفاء الشروط واستلام المنحة.",
      "en": "Recognition requires reasonable assurance that conditions will be met and the grant received."
    },
    "reference": "IAS 20 — recognition",
    "difficulty": "easy",
    "examDomain": "Reasonable assurance"
  },
  {
    "id": "ifrs-p5-ias20-02",
    "track": "IFRS",
    "topic": "IAS 20 — Income matching",
    "question": {
      "ar": "منحة تعوض رواتب سنتين. ما المبدأ الأفضل للاعتراف؟",
      "en": "A grant compensates salary costs over two years. What is the best recognition principle?"
    },
    "choices": {
      "ar": [
        "الاعتراف المنهجي عبر الفترات التي تسجل فيها الرواتب ذات الصلة",
        "إيراد كامل يوم الاستلام",
        "حقوق ملكية دائماً",
        "بعد انتهاء السنتين فقط"
      ],
      "en": [
        "Systematically over the periods in which related salary costs are recognised",
        "Full income on receipt",
        "Always equity",
        "Only after two years"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تطابق المنحة مع التكاليف التي صممت لتعويضها.",
      "en": "Grant income is matched with the costs it is intended to compensate."
    },
    "reference": "IAS 20 — income recognition",
    "difficulty": "intermediate",
    "examDomain": "Income matching"
  },
  {
    "id": "ifrs-p5-ias20-03",
    "track": "IFRS",
    "topic": "IAS 20 — Below-market government loan",
    "question": {
      "ar": "قرض حكومي بفائدة أقل من السوق، هل يكفي تسجيله بالقيمة الاسمية؟",
      "en": "For a government loan below market interest, is recording only nominal amount sufficient?"
    },
    "choices": {
      "ar": [
        "لا، قد يلزم تطبيق IFRS 9 واعتبار منفعة السعر كمنحة وفق الشروط",
        "نعم دائماً",
        "يحول لمخزون",
        "لا يعترف بالقرض"
      ],
      "en": [
        "No; IFRS 9 may apply and the below-market benefit may be treated as a grant under conditions",
        "Always yes",
        "Convert to inventory",
        "Do not recognise loan"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "منفعة القرض الحكومي منخفض الفائدة تتفاعل مع قياس الأداة المالية ومتطلبات المنح.",
      "en": "A below-market government loan involves financial instrument measurement plus grant accounting for the benefit."
    },
    "reference": "IAS 20 / IFRS 9",
    "difficulty": "intermediate",
    "examDomain": "Below-market government loan"
  },
  {
    "id": "ifrs-p5-ias20-04",
    "track": "IFRS",
    "topic": "IAS 20 — Repayment asset grant",
    "question": {
      "ar": "منحة مرتبطة بأصل خُصمت من تكلفة الأصل وأصبحت واجبة السداد. ما الأثر العام؟",
      "en": "An asset-related grant was deducted from the asset's cost and becomes repayable. What is the general effect?"
    },
    "choices": {
      "ar": [
        "يزاد رصيد الأصل بالقيمة المستحقة وتراجع آثار الإهلاك الإضافية وفق المتطلبات",
        "لا أثر",
        "تخفض الأصل أكثر",
        "تسجل كإيراد"
      ],
      "en": [
        "Increase the asset carrying amount by the repayable amount and address additional depreciation effects as required",
        "No effect",
        "Reduce asset further",
        "Record revenue"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "رد المنحة يتطلب عكس أثر المنحة السابق وفق طريقة العرض المستخدمة.",
      "en": "Repayment requires reversing the prior grant effect consistently with the original presentation method."
    },
    "reference": "IAS 20 — repayment",
    "difficulty": "hard",
    "examDomain": "Repayment asset grant"
  },
  {
    "id": "ifrs-p5-ias20-05",
    "track": "IFRS",
    "topic": "IAS 20 — Non-monetary grant",
    "question": {
      "ar": "قدمت الحكومة أرضاً مجاناً. كيف قد تقاس المنحة غير النقدية؟",
      "en": "Government provides land free of charge. How may the non-monetary grant be measured?"
    },
    "choices": {
      "ar": [
        "بالقيمة العادلة أو بالقيمة الاسمية وفق السياسة المسموحة",
        "دائماً صفر",
        "دائماً تكلفة تاريخية للحكومة",
        "كشهرة"
      ],
      "en": [
        "At fair value or nominal amount under the permitted policy",
        "Always zero",
        "Always government's historical cost",
        "Goodwill"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IAS 20 يسمح بمعالجات محددة للمنح غير النقدية مثل الأرض.",
      "en": "IAS 20 permits specified approaches for non-monetary grants such as land."
    },
    "reference": "IAS 20 — non-monetary grants",
    "difficulty": "hard",
    "examDomain": "Non-monetary grant"
  },
  {
    "id": "ifrs-p5-ias23-01",
    "track": "IFRS",
    "topic": "IAS 23 — Qualifying inventory",
    "question": {
      "ar": "مخزون نبيذ يحتاج سنوات للنضج قبل البيع. هل قد يكون أصلاً مؤهلاً؟",
      "en": "Wine inventory requiring years of ageing before sale—can it be a qualifying asset?"
    },
    "choices": {
      "ar": [
        "نعم",
        "لا لأن المخزون مستبعد دائماً",
        "فقط إذا كان عقاراً",
        "فقط إذا كان مصنعاً"
      ],
      "en": [
        "Yes",
        "No, inventory is always excluded",
        "Only property",
        "Only a factory"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "بعض المخزون الذي يحتاج فترة زمنية جوهرية ليصبح جاهزاً للبيع قد يكون أصلاً مؤهلاً.",
      "en": "Some inventory taking a substantial period to become ready for sale may be a qualifying asset."
    },
    "reference": "IAS 23 — qualifying assets",
    "difficulty": "easy",
    "examDomain": "Qualifying inventory"
  },
  {
    "id": "ifrs-p5-ias23-02",
    "track": "IFRS",
    "topic": "IAS 23 — Specific borrowing",
    "question": {
      "ar": "اقترضت الشركة 1 مليون خصيصاً لبناء مصنع، واستثمرت الأموال مؤقتاً قبل استخدامها وربحت عائداً. كيف يؤثر العائد؟",
      "en": "An entity borrows 1 million specifically for a factory and temporarily invests unused funds, earning income. How does that affect capitalised borrowing cost?"
    },
    "choices": {
      "ar": [
        "يخصم دخل الاستثمار المؤقت من تكاليف الاقتراض المؤهلة للرسملة",
        "يتجاهل دائماً",
        "يزاد على تكلفة الأصل",
        "يسجل كشهرة"
      ],
      "en": [
        "Temporary investment income is deducted from borrowing costs eligible for capitalisation",
        "Always ignored",
        "Added to asset cost",
        "Recorded as goodwill"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "في القروض المحددة، دخل الاستثمار المؤقت يقلل صافي تكلفة الاقتراض القابلة للرسملة.",
      "en": "For specific borrowings, temporary investment income reduces net borrowing costs eligible for capitalisation."
    },
    "reference": "IAS 23 — specific borrowings",
    "difficulty": "intermediate",
    "examDomain": "Specific borrowing"
  },
  {
    "id": "ifrs-p5-ias23-03",
    "track": "IFRS",
    "topic": "IAS 23 — Excess capitalisation",
    "question": {
      "ar": "هل يمكن أن تتجاوز تكاليف الاقتراض المرسملة إجمالي تكاليف الاقتراض التي تحملتها المنشأة خلال الفترة؟",
      "en": "Can capitalised borrowing costs exceed total borrowing costs incurred by the entity during the period?"
    },
    "choices": {
      "ar": [
        "لا",
        "نعم",
        "فقط للمصانع",
        "فقط إذا كانت الفائدة متغيرة"
      ],
      "en": [
        "No",
        "Yes",
        "Factories only",
        "Only variable-rate debt"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "المبلغ المرسمل من القروض العامة محدود بإجمالي تكاليف الاقتراض المؤهلة المتكبدة.",
      "en": "Capitalised amount from general borrowings is capped by eligible borrowing costs actually incurred."
    },
    "reference": "IAS 23 — capitalisation limit",
    "difficulty": "intermediate",
    "examDomain": "Excess capitalisation"
  },
  {
    "id": "ifrs-p5-ias23-04",
    "track": "IFRS",
    "topic": "IAS 23 — Parts completed",
    "question": {
      "ar": "مشروع كبير يكتمل على أجزاء يمكن استخدام كل جزء منها بشكل مستقل. متى تتوقف الرسملة لكل جزء؟",
      "en": "A large project is completed in parts that can each be used independently. When does capitalisation stop for each part?"
    },
    "choices": {
      "ar": [
        "عند اكتمال الأنشطة اللازمة لذلك الجزء حتى لو استمر العمل في أجزاء أخرى",
        "عند اكتمال المشروع كله فقط",
        "عند أول بيع",
        "لا تتوقف"
      ],
      "en": [
        "When substantially all activities for that part are complete even if work continues elsewhere",
        "Only when whole project is complete",
        "At first sale",
        "Never"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "عندما يكون الجزء قابلاً للاستخدام مستقلاً، تتوقف الرسملة عند جاهزيته.",
      "en": "When a part can be used independently, capitalisation ceases once that part is ready."
    },
    "reference": "IAS 23 — cessation by parts",
    "difficulty": "hard",
    "examDomain": "Parts completed"
  },
  {
    "id": "ifrs-p5-ias23-05",
    "track": "IFRS",
    "topic": "IAS 23 — Suspension exception",
    "question": {
      "ar": "توقف العمل مؤقتاً بسبب عملية فنية ضرورية بطبيعة البناء. هل تعلق الرسملة تلقائياً؟",
      "en": "Work pauses temporarily because of a necessary technical process inherent in construction. Is capitalisation automatically suspended?"
    },
    "choices": {
      "ar": [
        "لا، إذا كان التوقف جزءاً ضرورياً من عملية الإعداد",
        "نعم دائماً",
        "فقط إذا تجاوز أسبوعاً",
        "حسب الإدارة"
      ],
      "en": [
        "No, if the delay is a necessary part of preparing the asset",
        "Always yes",
        "Only if over a week",
        "Management choice"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "التعليق يخص الانقطاعات الممتدة غير الضرورية، لا التأخيرات الطبيعية اللازمة.",
      "en": "Suspension applies to extended unnecessary interruptions, not delays inherent in preparing the asset."
    },
    "reference": "IAS 23 — suspension",
    "difficulty": "hard",
    "examDomain": "Suspension exception"
  },
  {
    "id": "ifrs-p5-ias26-01",
    "track": "IFRS",
    "topic": "IAS 26 — Plan vs employer",
    "question": {
      "ar": "من يعد القوائم تحت IAS 26؟",
      "en": "Who prepares financial statements under IAS 26?"
    },
    "choices": {
      "ar": [
        "خطة منافع التقاعد نفسها",
        "صاحب العمل فقط",
        "الموظف",
        "شركة التأمين دائماً"
      ],
      "en": [
        "The retirement benefit plan itself",
        "Employer only",
        "Employee",
        "Always insurer"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IAS 26 معيار تقارير الخطة، بينما محاسبة صاحب العمل عن المنافع تخضع لـIAS 19.",
      "en": "IAS 26 governs plan reporting, while employer accounting for benefits is under IAS 19."
    },
    "reference": "IAS 26 — scope",
    "difficulty": "easy",
    "examDomain": "Plan vs employer"
  },
  {
    "id": "ifrs-p5-ias26-02",
    "track": "IFRS",
    "topic": "IAS 26 — Defined benefit information",
    "question": {
      "ar": "ما معلومة تساعد المشاركين على فهم وعد خطة المنافع المحددة؟",
      "en": "What information helps participants understand a defined benefit promise?"
    },
    "choices": {
      "ar": [
        "القيمة الحالية الاكتوارية للمنافع المتقاعدة الموعودة",
        "مبيعات صاحب العمل",
        "المخزون",
        "سعر السهم فقط"
      ],
      "en": [
        "Actuarial present value of promised retirement benefits",
        "Employer sales",
        "Inventory",
        "Share price only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "المعلومات الاكتوارية تبين حجم المنافع الموعودة مقارنة بصافي أصول الخطة.",
      "en": "Actuarial information helps compare promised benefits with net assets available for benefits."
    },
    "reference": "IAS 26 — defined benefit plans",
    "difficulty": "intermediate",
    "examDomain": "Defined benefit information"
  },
  {
    "id": "ifrs-p5-ias26-03",
    "track": "IFRS",
    "topic": "IAS 26 — Fair value",
    "question": {
      "ar": "لماذا تعد القيمة العادلة ذات صلة باستثمارات خطة التقاعد؟",
      "en": "Why is fair value relevant for retirement plan investments?"
    },
    "choices": {
      "ar": [
        "لأنها تساعد على تقييم الموارد الحالية المتاحة لدفع المنافع",
        "لأنها تحسب الضريبة",
        "لأنها تلغي الالتزامات",
        "فقط للمخزون"
      ],
      "en": [
        "It helps assess current resources available to pay benefits",
        "It calculates tax",
        "It cancels obligations",
        "Inventory only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "مستخدمي تقرير الخطة يهتمون بالموارد المتاحة حالياً لتمويل المنافع.",
      "en": "Plan users need information about resources currently available to fund benefits."
    },
    "reference": "IAS 26 — investments",
    "difficulty": "intermediate",
    "examDomain": "Fair value"
  },
  {
    "id": "ifrs-p5-ias26-04",
    "track": "IFRS",
    "topic": "IAS 26 — Funding policy",
    "question": {
      "ar": "لماذا يفصح عن سياسة تمويل الخطة؟",
      "en": "Why is the plan's funding policy disclosed?"
    },
    "choices": {
      "ar": [
        "لفهم كيفية تمويل المنافع والمخاطر المستقبلية على الموارد",
        "لتحديد العملة الوظيفية",
        "لقياس المخزون",
        "لتحديد الإيراد"
      ],
      "en": [
        "To understand how benefits are financed and future funding risks",
        "To determine functional currency",
        "To measure inventory",
        "To determine revenue"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "سياسة التمويل عنصر أساسي لفهم استدامة موارد الخطة.",
      "en": "Funding policy is key to understanding the sustainability of plan resources."
    },
    "reference": "IAS 26 — funding policy",
    "difficulty": "hard",
    "examDomain": "Funding policy"
  },
  {
    "id": "ifrs-p5-ias26-05",
    "track": "IFRS",
    "topic": "IAS 26 — Valuation date",
    "question": {
      "ar": "إذا كان أحدث تقييم اكتواري ليس في نفس تاريخ القوائم، ما الذي يجب مراعاته؟",
      "en": "If the latest actuarial valuation is not at the financial statement date, what must be considered?"
    },
    "choices": {
      "ar": [
        "التغيرات الجوهرية اللاحقة والإفصاح المناسب عن تاريخ التقييم",
        "تجاهل كل التغيرات",
        "إلغاء التقييم",
        "استخدام تكلفة تاريخية"
      ],
      "en": [
        "Material subsequent changes and appropriate disclosure of the valuation date",
        "Ignore all changes",
        "Cancel valuation",
        "Use historical cost"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يجب ألا تصبح المعلومات الاكتوارية القديمة مضللة بسبب تغيرات جوهرية لاحقة.",
      "en": "Older actuarial information must be adjusted/considered so material subsequent changes do not mislead users."
    },
    "reference": "IAS 26 — actuarial valuation",
    "difficulty": "hard",
    "examDomain": "Valuation date"
  },
  {
    "id": "ifrs-p5-ias27-01",
    "track": "IFRS",
    "topic": "IAS 27 — Cost method",
    "question": {
      "ar": "شركة أم تستخدم التكلفة لاستثمارها في التابعة في القوائم المنفصلة. هل يعني ذلك أنها لا توحد التابعة في القوائم الموحدة؟",
      "en": "A parent uses cost for a subsidiary in separate statements. Does that mean it does not consolidate the subsidiary in consolidated statements?"
    },
    "choices": {
      "ar": [
        "لا",
        "نعم",
        "فقط إذا كانت الملكية 100%",
        "فقط إذا لا توجد توزيعات"
      ],
      "en": [
        "No",
        "Yes",
        "Only if 100% owned",
        "Only if no dividends"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IAS 27 للقوائم المنفصلة لا يلغي متطلبات IFRS 10 للقوائم الموحدة.",
      "en": "IAS 27 separate-statement accounting does not replace IFRS 10 consolidation requirements."
    },
    "reference": "IAS 27 / IFRS 10",
    "difficulty": "easy",
    "examDomain": "Cost method"
  },
  {
    "id": "ifrs-p5-ias27-02",
    "track": "IFRS",
    "topic": "IAS 27 — Equity method",
    "question": {
      "ar": "هل يسمح IAS 27 باستخدام طريقة حقوق الملكية لبعض الاستثمارات في القوائم المنفصلة؟",
      "en": "Does IAS 27 permit use of the equity method for certain investments in separate financial statements?"
    },
    "choices": {
      "ar": [
        "نعم",
        "لا أبداً",
        "فقط للشركات التابعة الأجنبية",
        "فقط للمشروعات المشتركة"
      ],
      "en": [
        "Yes",
        "Never",
        "Only foreign subsidiaries",
        "Only joint ventures"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "من الخيارات المسموحة لبعض فئات الاستثمارات استخدام طريقة حقوق الملكية.",
      "en": "The equity method is one permitted basis for relevant investment categories in separate financial statements."
    },
    "reference": "IAS 27 — equity method option",
    "difficulty": "intermediate",
    "examDomain": "Equity method"
  },
  {
    "id": "ifrs-p5-ias27-03",
    "track": "IFRS",
    "topic": "IAS 27 — Dividends cost basis",
    "question": {
      "ar": "استثمار في شركة تابعة مقاس بالتكلفة وتلقى توزيعات. أين يعترف بالتوزيع عادةً؟",
      "en": "An investment in a subsidiary is measured at cost and receives a dividend. Where is the dividend generally recognised?"
    },
    "choices": {
      "ar": [
        "الربح أو الخسارة عند نشوء الحق في الاستلام، مع تقييم الانخفاض عند الحاجة",
        "يزيد تكلفة الاستثمار دائماً",
        "OCI",
        "لا يعترف"
      ],
      "en": [
        "Profit or loss when the right to receive arises, with impairment considered where needed",
        "Always increase investment cost",
        "OCI",
        "Not recognised"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "التوزيعات تحت أساس التكلفة تظهر عادة كدخل، مع الانتباه لمؤشرات الانخفاض.",
      "en": "Under the cost basis, dividends are generally income while potential impairment indicators should be considered."
    },
    "reference": "IAS 27 — dividends",
    "difficulty": "intermediate",
    "examDomain": "Dividends cost basis"
  },
  {
    "id": "ifrs-p5-ias27-04",
    "track": "IFRS",
    "topic": "IAS 27 — Category consistency",
    "question": {
      "ar": "هل يمكن قياس شركة تابعة A بالتكلفة وشركة تابعة B بـIFRS 9 في نفس فئة الشركات التابعة دون أساس سياسة؟",
      "en": "Can subsidiary A be measured at cost and subsidiary B under IFRS 9 within the same investment category without a policy basis?"
    },
    "choices": {
      "ar": [
        "لا، يطبق الأساس المختار باتساق على الفئة وفق المتطلبات",
        "نعم دائماً",
        "فقط إذا كانتا بدولتين",
        "فقط إذا اختلف النشاط"
      ],
      "en": [
        "No; the chosen basis is applied consistently to the category under the requirements",
        "Always yes",
        "Only if in different countries",
        "Only if different industries"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الاتساق يمنع اختيار الأساس استثماراً باستثمار لتحسين النتائج.",
      "en": "Consistency prevents cherry-picking measurement basis investee by investee."
    },
    "reference": "IAS 27 — consistency",
    "difficulty": "hard",
    "examDomain": "Category consistency"
  },
  {
    "id": "ifrs-p5-ias27-05",
    "track": "IFRS",
    "topic": "IAS 27 — Separate statements definition",
    "question": {
      "ar": "هل يمكن لمنشأة ليست شركة أم ولكن لديها استثمار في زميلة إعداد قوائم منفصلة وفق IAS 27؟",
      "en": "Can an entity that is not a parent but has an associate prepare separate financial statements under IAS 27?"
    },
    "choices": {
      "ar": [
        "نعم، القوائم المنفصلة ليست مقصورة على الشركات الأم",
        "لا",
        "فقط إذا كانت مدرجة",
        "فقط إذا كانت بنكاً"
      ],
      "en": [
        "Yes; separate financial statements are not limited to parent entities",
        "No",
        "Only if listed",
        "Only if a bank"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IAS 27 يمكن أن ينطبق على منشأة لديها زميلة أو مشروع مشترك أيضاً.",
      "en": "IAS 27 can also apply to entities with investments in associates or joint ventures."
    },
    "reference": "IAS 27 — scope",
    "difficulty": "hard",
    "examDomain": "Separate statements definition"
  },
  {
    "id": "ifrs-p5-ias28-01",
    "track": "IFRS",
    "topic": "IAS 28 — Significant influence",
    "question": {
      "ar": "امتلاك 20% من حقوق التصويت يفترض عادةً وجود تأثير مهم ما لم توجد أدلة عكسية. صحيح؟",
      "en": "Holding 20% of voting power generally creates a presumption of significant influence unless rebutted. Correct?"
    },
    "choices": {
      "ar": [
        "نعم",
        "لا",
        "فقط 50%",
        "فقط إذا كان المستثمر مديراً"
      ],
      "en": [
        "Yes",
        "No",
        "Only 50%",
        "Only if investor is a director"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "نسبة 20% قرينة وليست قاعدة حاسمة؛ الوقائع والحقوق قد تدعم أو تدحض التأثير المهم.",
      "en": "20% is a presumption rather than an absolute rule; facts and rights can support or rebut significant influence."
    },
    "reference": "IAS 28 — significant influence",
    "difficulty": "easy",
    "examDomain": "Significant influence"
  },
  {
    "id": "ifrs-p5-ias28-02",
    "track": "IFRS",
    "topic": "IAS 28 — Share of profit",
    "question": {
      "ar": "حققت الزميلة ربحاً بعد الاستحواذ. ماذا يحدث لقيمة الاستثمار تحت طريقة حقوق الملكية؟",
      "en": "An associate earns post-acquisition profit. What happens to the investment carrying amount under the equity method?"
    },
    "choices": {
      "ar": [
        "يزداد بحصة المستثمر من الربح مع مراعاة التعديلات المطلوبة",
        "لا يتغير",
        "ينخفض دائماً",
        "يحول لنقد"
      ],
      "en": [
        "It increases by the investor's share of profit subject to required adjustments",
        "No change",
        "Always decreases",
        "Convert to cash"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "طريقة حقوق الملكية تزيد الاستثمار بحصة النتائج وتخفضه بالتوزيعات والخسائر.",
      "en": "The equity method increases the investment for the share of results and reduces it for distributions/losses."
    },
    "reference": "IAS 28 — equity method",
    "difficulty": "intermediate",
    "examDomain": "Share of profit"
  },
  {
    "id": "ifrs-p5-ias28-03",
    "track": "IFRS",
    "topic": "IAS 28 — Dividends",
    "question": {
      "ar": "تلقى المستثمر توزيعات من الزميلة. ما الأثر تحت طريقة حقوق الملكية؟",
      "en": "The investor receives dividends from an associate. What is the effect under the equity method?"
    },
    "choices": {
      "ar": [
        "تخفض القيمة الدفترية للاستثمار ولا تعد إيراداً إضافياً فوق حصة الربح",
        "تزيد الربح مرة أخرى",
        "تزيد الاستثمار",
        "لا أثر"
      ],
      "en": [
        "Reduce the investment carrying amount rather than creating additional income on top of the share of profit",
        "Increase profit again",
        "Increase investment",
        "No effect"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "حصة الربح سبق الاعتراف بها، لذا التوزيع يمثل استرداداً لجزء من الاستثمار.",
      "en": "The investor already recognised its share of profit, so the dividend is a return of investment."
    },
    "reference": "IAS 28 — dividends",
    "difficulty": "intermediate",
    "examDomain": "Dividends"
  },
  {
    "id": "ifrs-p5-ias28-04",
    "track": "IFRS",
    "topic": "IAS 28 — Upstream transaction",
    "question": {
      "ar": "باع المستثمر أصلاً للزميلة بربح غير محقق. هل يعترف بكل الربح فوراً؟",
      "en": "An investor sells an asset to its associate at a profit that remains unrealised. Is the entire profit recognised immediately?"
    },
    "choices": {
      "ar": [
        "لا، يلغي الجزء المرتبط بحصة المستثمر وفق متطلبات المعاملات مع الزميلة",
        "نعم كله",
        "لا يعترف بأي ربح أبداً",
        "يحول الربح لـOCI"
      ],
      "en": [
        "No; the portion related to the investor's interest is eliminated under associate transaction requirements",
        "Yes, all",
        "No profit ever",
        "Move profit to OCI"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الأرباح غير المحققة في معاملات المستثمر والزميلة تلغى بقدر الحصة ذات الصلة.",
      "en": "Unrealised profits on transactions with an associate are eliminated to the extent of the investor's interest."
    },
    "reference": "IAS 28 — transactions with associate",
    "difficulty": "hard",
    "examDomain": "Upstream transaction"
  },
  {
    "id": "ifrs-p5-ias28-05",
    "track": "IFRS",
    "topic": "IAS 28 — Loss of influence",
    "question": {
      "ar": "إذا فقد المستثمر التأثير المهم وبقيت حصة مالية، ما القياس المبدئي للحصة المتبقية عادةً؟",
      "en": "If an investor loses significant influence but retains a financial interest, how is the retained interest generally initially measured?"
    },
    "choices": {
      "ar": [
        "بالقيمة العادلة عند فقد التأثير ثم تطبق المعايير المناسبة",
        "بالتكلفة القديمة دائماً",
        "بصفر",
        "بطريقة حقوق الملكية للأبد"
      ],
      "en": [
        "At fair value on loss of significant influence, then apply the relevant standard",
        "Always old cost",
        "Zero",
        "Equity method forever"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "فقد التأثير المهم ينهي طريقة حقوق الملكية ويؤدي لمعالجة الحصة المتبقية وفق المعيار المناسب.",
      "en": "Loss of significant influence ends equity-method accounting and the retained interest is accounted for under the relevant standard."
    },
    "reference": "IAS 28 — loss of significant influence",
    "difficulty": "hard",
    "examDomain": "Loss of influence"
  },
  {
    "id": "ifrs-p5-ias29-01",
    "track": "IFRS",
    "topic": "IAS 29 — Three-year inflation",
    "question": {
      "ar": "تراكم التضخم على ثلاث سنوات يقارب أو يتجاوز 100%. هل هذا مؤشر ممكن للتضخم المفرط؟",
      "en": "Cumulative inflation over three years approaches or exceeds 100%. Is this a possible hyperinflation indicator?"
    },
    "choices": {
      "ar": [
        "نعم، لكنه ليس الاختبار الوحيد",
        "لا أبداً",
        "هو اختبار حاسم وحيد دائماً",
        "فقط إذا كان سنة واحدة"
      ],
      "en": [
        "Yes, but it is not the only test",
        "Never",
        "It is always the sole decisive test",
        "Only if one year"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IAS 29 يذكر هذا ضمن مؤشرات متعددة وليس معياراً ميكانيكياً وحيداً.",
      "en": "IAS 29 includes this among several indicators rather than as a single mechanical rule."
    },
    "reference": "IAS 29 — indicators",
    "difficulty": "easy",
    "examDomain": "Three-year inflation"
  },
  {
    "id": "ifrs-p5-ias29-02",
    "track": "IFRS",
    "topic": "IAS 29 — Non-monetary historical cost",
    "question": {
      "ar": "أصل غير نقدي بالتكلفة التاريخية اقتني في بداية السنة. كيف يعاد بيانه في التضخم المفرط؟",
      "en": "A non-monetary asset at historical cost was acquired at the beginning of the year. How is it restated in hyperinflation?"
    },
    "choices": {
      "ar": [
        "بتطبيق تغير مؤشر الأسعار من تاريخ الاقتناء إلى تاريخ التقرير، مع مراعاة المتطلبات",
        "لا يعاد أبداً",
        "بسعر الصرف",
        "بالقيمة الاسمية"
      ],
      "en": [
        "Apply the change in general price index from acquisition date to reporting date, subject to requirements",
        "Never restated",
        "Exchange rate",
        "Nominal value"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "البند غير النقدي بالتكلفة يعاد إلى وحدة القياس الجارية باستخدام مؤشر مناسب.",
      "en": "A historical-cost non-monetary item is restated into the current measuring unit using an appropriate price index."
    },
    "reference": "IAS 29 — restatement",
    "difficulty": "intermediate",
    "examDomain": "Non-monetary historical cost"
  },
  {
    "id": "ifrs-p5-ias29-03",
    "track": "IFRS",
    "topic": "IAS 29 — Equity",
    "question": {
      "ar": "هل يعاد بيان مكونات حقوق الملكية مثل رأس المال من تاريخ مساهمتها؟",
      "en": "Are equity components such as share capital restated from the dates contributed?"
    },
    "choices": {
      "ar": [
        "نعم وفق المتطلبات",
        "لا أبداً",
        "فقط الأرباح",
        "فقط الاحتياطيات"
      ],
      "en": [
        "Yes, under the requirements",
        "Never",
        "Profits only",
        "Reserves only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "بعض مكونات حقوق الملكية تعاد من تواريخ نشأتها للوصول لوحدة قياس جارية.",
      "en": "Certain equity components are restated from their dates of contribution/recognition into the current measuring unit."
    },
    "reference": "IAS 29 — equity restatement",
    "difficulty": "intermediate",
    "examDomain": "Equity"
  },
  {
    "id": "ifrs-p5-ias29-04",
    "track": "IFRS",
    "topic": "IAS 29 — Comparatives",
    "question": {
      "ar": "إذا كانت العملة الوظيفية مفرطة التضخم، هل تعرض المقارنات دون إعادة بيان؟",
      "en": "If functional currency is hyperinflationary, are comparatives presented without restatement?"
    },
    "choices": {
      "ar": [
        "لا، تعاد بيانات المقارنة وفق متطلبات IAS 29",
        "نعم",
        "فقط قائمة الدخل",
        "فقط النقد"
      ],
      "en": [
        "No; comparative information is restated under IAS 29 requirements",
        "Yes",
        "Profit or loss only",
        "Cash only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "قابلية المقارنة تتطلب عرض المعلومات بوحدة قياس جارية مناسبة.",
      "en": "Comparability requires information to be expressed in an appropriate current measuring unit."
    },
    "reference": "IAS 29 — comparatives",
    "difficulty": "hard",
    "examDomain": "Comparatives"
  },
  {
    "id": "ifrs-p5-ias29-05",
    "track": "IFRS",
    "topic": "IAS 29 — Ceasing hyperinflation",
    "question": {
      "ar": "عندما يتوقف الاقتصاد عن كونه مفرط التضخم، ما أساس القيم في الفترات اللاحقة؟",
      "en": "When an economy ceases to be hyperinflationary, what becomes the basis for subsequent carrying amounts?"
    },
    "choices": {
      "ar": [
        "المبالغ المعبر عنها بوحدة القياس الجارية في نهاية آخر فترة تطبيق IAS 29 تصبح أساساً لاحقاً",
        "تعود كل الأصول لتكلفتها الأصلية",
        "تصفّر الحقوق",
        "لا تغيير"
      ],
      "en": [
        "Amounts expressed in the measuring unit current at the end of the last IAS 29 period become the basis for subsequent amounts",
        "All assets revert to original cost",
        "Equity is reset to zero",
        "No change"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "آخر مبالغ معاد بيانها تشكل قاعدة التكلفة الجديدة نسبياً عند توقف التطبيق.",
      "en": "The last restated amounts form the basis for subsequent accounting after hyperinflation ceases."
    },
    "reference": "IAS 29 — cessation",
    "difficulty": "hard",
    "examDomain": "Ceasing hyperinflation"
  },
  {
    "id": "ifrs-p5-ias32-01",
    "track": "IFRS",
    "topic": "IAS 32 — Redeemable preference share",
    "question": {
      "ar": "سهم ممتاز يجب على المصدر استرداده نقداً في تاريخ محدد. التصنيف المرجح؟",
      "en": "A preference share must be redeemed by the issuer for cash on a fixed date. Likely classification?"
    },
    "choices": {
      "ar": [
        "التزام مالي",
        "حقوق ملكية دائماً لأنه يسمى سهماً",
        "مخزون",
        "إيراد"
      ],
      "en": [
        "Financial liability",
        "Always equity because it is called a share",
        "Inventory",
        "Revenue"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "وجود التزام تعاقدي بدفع نقد يجعل الأداة أقرب للالتزام بغض النظر عن اسمها.",
      "en": "A contractual obligation to pay cash drives liability classification regardless of the instrument's label."
    },
    "reference": "IAS 32 — liability vs equity",
    "difficulty": "easy",
    "examDomain": "Redeemable preference share"
  },
  {
    "id": "ifrs-p5-ias32-02",
    "track": "IFRS",
    "topic": "IAS 32 — Fixed-for-fixed",
    "question": {
      "ar": "خيار يمنح حامله شراء عدد ثابت من أسهم المنشأة مقابل مبلغ ثابت من عملتها الوظيفية. ما المفهوم المرتبط؟",
      "en": "An option lets the holder buy a fixed number of the entity's shares for a fixed amount of its functional currency. Which concept is relevant?"
    },
    "choices": {
      "ar": [
        "اختبار fixed-for-fixed لتصنيف حقوق الملكية",
        "NRV",
        "SPPI",
        "ECL"
      ],
      "en": [
        "Fixed-for-fixed equity classification principle",
        "NRV",
        "SPPI",
        "ECL"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "عقود own equity تحتاج تحليل شروط المبادلة لتحديد إن كانت أداة حقوق ملكية.",
      "en": "Contracts on an entity's own equity require analysis of exchange terms for equity classification."
    },
    "reference": "IAS 32 — own equity",
    "difficulty": "intermediate",
    "examDomain": "Fixed-for-fixed"
  },
  {
    "id": "ifrs-p5-ias32-03",
    "track": "IFRS",
    "topic": "IAS 32 — Compound bond",
    "question": {
      "ar": "أصدر كيان سنداً قابلاً للتحويل. ما المكون الذي يقاس أولاً عادةً عند الفصل؟",
      "en": "An entity issues a convertible bond. Which component is generally measured first when separating it?"
    },
    "choices": {
      "ar": [
        "مكون الالتزام بالقيمة العادلة لالتزام مماثل دون خيار تحويل، والباقي حقوق ملكية",
        "حقوق الملكية فقط",
        "كلاهما صفر",
        "المخزون"
      ],
      "en": [
        "Liability component using fair value of similar debt without conversion; residual is equity",
        "Equity only",
        "Both zero",
        "Inventory"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الأداة المركبة تفصل إلى التزام وحقوق ملكية عند الاعتراف الأولي.",
      "en": "A compound instrument is separated into liability and equity components at initial recognition."
    },
    "reference": "IAS 32 — compound instruments",
    "difficulty": "intermediate",
    "examDomain": "Compound bond"
  },
  {
    "id": "ifrs-p5-ias32-04",
    "track": "IFRS",
    "topic": "IAS 32 — Offset intention",
    "question": {
      "ar": "لدى المنشأة حق قانوني للمقاصة لكنها تنوي تحصيل الأصل ودفع الالتزام في أوقات مختلفة. هل المقاصة مسموحة؟",
      "en": "An entity has a legal set-off right but intends to collect the asset and pay the liability at different times. Is offsetting permitted?"
    },
    "choices": {
      "ar": [
        "لا، شرط النية للتسوية الصافية أو المتزامنة غير متحقق",
        "نعم بمجرد وجود الحق",
        "فقط إذا نفس العملة",
        "دائماً"
      ],
      "en": [
        "No; the net or simultaneous settlement intention condition is not met",
        "Yes, legal right alone is enough",
        "Only same currency",
        "Always"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IAS 32 يتطلب الحق القانوني ونية التسوية المناسبة معاً.",
      "en": "IAS 32 requires both an enforceable legal right and qualifying settlement intention."
    },
    "reference": "IAS 32 — offsetting",
    "difficulty": "hard",
    "examDomain": "Offset intention"
  },
  {
    "id": "ifrs-p5-ias32-05",
    "track": "IFRS",
    "topic": "IAS 32 — Treasury shares sale",
    "question": {
      "ar": "باعت المنشأة أسهم خزينة بسعر أعلى من تكلفة إعادة شرائها. هل تعترف بربح في قائمة الدخل؟",
      "en": "An entity sells treasury shares above their repurchase cost. Is a gain recognised in profit or loss?"
    },
    "choices": {
      "ar": [
        "لا، المعاملة ضمن حقوق الملكية",
        "نعم كإيراد استثماري",
        "نعم كإيراد مبيعات",
        "فقط نصفه"
      ],
      "en": [
        "No; the transaction is within equity",
        "Yes as investment income",
        "Yes as sales revenue",
        "Half only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "المعاملات في أدوات حقوق الملكية الخاصة لا تولد أرباحاً أو خسائر في الربح أو الخسارة.",
      "en": "Transactions in an entity's own equity instruments do not generate profit or loss."
    },
    "reference": "IAS 32 — treasury shares",
    "difficulty": "hard",
    "examDomain": "Treasury shares sale"
  },
  {
    "id": "ifrs-p5-ias33-01",
    "track": "IFRS",
    "topic": "IAS 33 — Loss per share",
    "question": {
      "ar": "هل يعرض IAS 33 خسارة السهم إذا كانت النتيجة خسارة؟",
      "en": "Does IAS 33 present loss per share when the entity reports a loss?"
    },
    "choices": {
      "ar": [
        "نعم، تطبق متطلبات EPS على الخسارة أيضاً",
        "لا",
        "فقط للشركات الصغيرة",
        "فقط إذا يوجد توزيعات"
      ],
      "en": [
        "Yes; EPS requirements also apply to losses",
        "No",
        "Small entities only",
        "Only if dividends exist"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "المعيار يتعامل مع الربح أو الخسارة العائدة للأسهم العادية.",
      "en": "The standard applies to profit or loss attributable to ordinary equity holders."
    },
    "reference": "IAS 33 — EPS",
    "difficulty": "easy",
    "examDomain": "Loss per share"
  },
  {
    "id": "ifrs-p5-ias33-02",
    "track": "IFRS",
    "topic": "IAS 33 — Weighted shares",
    "question": {
      "ar": "أصدرت الشركة 1,000 سهم جديد في 1 يوليو. كم شهر تدخل في المتوسط لسنة تنتهي 31 ديسمبر؟",
      "en": "An entity issues 1,000 new shares on 1 July. For a year ending 31 December, how many months do they generally enter the weighted average?"
    },
    "choices": {
      "ar": [
        "6 أشهر",
        "12 شهراً",
        "شهر واحد",
        "لا تدخل"
      ],
      "en": [
        "6 months",
        "12 months",
        "1 month",
        "Not included"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الأسهم تدرج من تاريخ استحقاق المقابل/الإصدار المناسب، لذلك نصف سنة في هذا المثال.",
      "en": "Shares are included from the relevant issue/consideration date, giving half-year weighting in this example."
    },
    "reference": "IAS 33 — weighted average",
    "difficulty": "intermediate",
    "examDomain": "Weighted shares"
  },
  {
    "id": "ifrs-p5-ias33-03",
    "track": "IFRS",
    "topic": "IAS 33 — Options treasury method",
    "question": {
      "ar": "كيف يعكس حساب diluted EPS عادةً الخيارات والضمانات التي تكون مخففة؟",
      "en": "How does diluted EPS generally reflect dilutive options and warrants?"
    },
    "choices": {
      "ar": [
        "يفترض الممارسة واستخدام المتحصلات لشراء أسهم بمتوسط سعر السوق وفق منهج الأسهم الخزينة",
        "يضيف كل الأسهم دون مقابل",
        "يتجاهل الخيارات",
        "يخفض الربح فقط"
      ],
      "en": [
        "Assume exercise and use proceeds to repurchase shares at average market price under the treasury-share approach",
        "Add all shares with no offset",
        "Ignore options",
        "Only reduce profit"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "المفهوم يضيف صافي الأسهم الإضافية الناتجة عن الممارسة الافتراضية.",
      "en": "The approach adds the net incremental shares from assumed exercise."
    },
    "reference": "IAS 33 — options and warrants",
    "difficulty": "intermediate",
    "examDomain": "Options treasury method"
  },
  {
    "id": "ifrs-p5-ias33-04",
    "track": "IFRS",
    "topic": "IAS 33 — Convertible debt",
    "question": {
      "ar": "في diluted EPS لسند قابل للتحويل المخفف، ما تعديل البسط المعتاد؟",
      "en": "For dilutive convertible debt in diluted EPS, what is the usual numerator adjustment?"
    },
    "choices": {
      "ar": [
        "إضافة مصروف الفائدة بعد أثر الضريبة الذي لن يتحمل عند التحويل",
        "خصم توزيعات عادية",
        "لا تعديل أبداً",
        "إضافة الإيراد"
      ],
      "en": [
        "Add back after-tax interest expense that would be avoided on conversion",
        "Deduct ordinary dividends",
        "Never adjust",
        "Add revenue"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "التحويل المفترض يلغي فائدة الدين، لذلك يعدل البسط والمقام.",
      "en": "Assumed conversion removes debt interest, so both numerator and denominator are adjusted."
    },
    "reference": "IAS 33 — convertible instruments",
    "difficulty": "hard",
    "examDomain": "Convertible debt"
  },
  {
    "id": "ifrs-p5-ias33-05",
    "track": "IFRS",
    "topic": "IAS 33 — Order of dilution",
    "question": {
      "ar": "لماذا ترتب الأدوات المحتملة عند حساب diluted EPS من الأكثر إلى الأقل تخفيفاً؟",
      "en": "Why are potential ordinary shares considered from most to least dilutive in diluted EPS?"
    },
    "choices": {
      "ar": [
        "لضمان عدم إدراج أداة تصبح مضادة للتخفيف بعد إدراج أدوات أكثر تخفيفاً",
        "لتحسين EPS",
        "لأغراض الضرائب",
        "لا سبب"
      ],
      "en": [
        "To ensure an instrument is not included once it becomes anti-dilutive after more dilutive instruments are considered",
        "To improve EPS",
        "For tax",
        "No reason"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الترتيب يساعد على تطبيق اختبار التخفيف بصورة صحيحة.",
      "en": "Ordering supports correct application of the dilution test."
    },
    "reference": "IAS 33 — sequence of dilutive instruments",
    "difficulty": "hard",
    "examDomain": "Order of dilution"
  },
  {
    "id": "ifrs-p5-ias34-01",
    "track": "IFRS",
    "topic": "IAS 34 — Interim notes",
    "question": {
      "ar": "هل يجب تكرار كل إيضاحات التقرير السنوي حرفياً في التقرير المرحلي المختصر؟",
      "en": "Must every annual note be repeated verbatim in a condensed interim report?"
    },
    "choices": {
      "ar": [
        "لا، يركز التقرير على تحديثات وأحداث مهمة منذ آخر تقرير سنوي",
        "نعم",
        "فقط للشركات المدرجة",
        "فقط أول ربع"
      ],
      "en": [
        "No; interim reporting focuses on significant updates and events since the latest annual report",
        "Yes",
        "Listed entities only",
        "First quarter only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "التقرير المرحلي يفترض أن المستخدم لديه آخر تقرير سنوي ويركز على التغييرات المهمة.",
      "en": "Interim reporting assumes users have access to the latest annual report and focuses on significant changes."
    },
    "reference": "IAS 34 — selected explanatory notes",
    "difficulty": "easy",
    "examDomain": "Interim notes"
  },
  {
    "id": "ifrs-p5-ias34-02",
    "track": "IFRS",
    "topic": "IAS 34 — Seasonal revenue",
    "question": {
      "ar": "هل يجوز تأجيل أو تقديم الإيراد الموسمي في التقارير المرحلية إذا لم يكن ذلك مناسباً في نهاية السنة؟",
      "en": "Can seasonal revenue be anticipated or deferred in interim reporting when that treatment would not be appropriate at year-end?"
    },
    "choices": {
      "ar": [
        "لا",
        "نعم دائماً",
        "فقط إذا كان النشاط موسمياً",
        "حسب الإدارة"
      ],
      "en": [
        "No",
        "Always yes",
        "Only for seasonal businesses",
        "Management choice"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الإيرادات الموسمية تعترف وفق نفس مبادئ السنوية ولا تمهد النتائج اصطناعياً.",
      "en": "Seasonal revenue follows the same recognition principles as annual reporting and is not smoothed artificially."
    },
    "reference": "IAS 34 — seasonality",
    "difficulty": "intermediate",
    "examDomain": "Seasonal revenue"
  },
  {
    "id": "ifrs-p5-ias34-03",
    "track": "IFRS",
    "topic": "IAS 34 — Uneven costs",
    "question": {
      "ar": "تكلفة إعلان كبيرة ستحدث في الربع الرابع فقط. هل يجوز تكوين مخصص لها في الربع الأول لمجرد توزيعها؟",
      "en": "A large advertising campaign will occur only in Q4. Can Q1 accrue a provision merely to spread the cost?"
    },
    "choices": {
      "ar": [
        "لا، إلا إذا استوفى الالتزام شروط الاعتراف المستقلة",
        "نعم",
        "نصفها",
        "فقط إذا الموازنة معتمدة"
      ],
      "en": [
        "No, unless an independent recognition obligation exists",
        "Yes",
        "Half",
        "Only if budgeted"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "لا يجوز تسوية النتائج المرحلية بتأجيل أو تقديم تكاليف لا تستوفي الاعتراف.",
      "en": "Interim results are not smoothed by accruing costs that do not meet recognition criteria."
    },
    "reference": "IAS 34 — uneven costs",
    "difficulty": "intermediate",
    "examDomain": "Uneven costs"
  },
  {
    "id": "ifrs-p5-ias34-04",
    "track": "IFRS",
    "topic": "IAS 34 — Tax",
    "question": {
      "ar": "كيف يعالج مصروف ضريبة الدخل في فترة مرحلية عادةً؟",
      "en": "How is income tax expense generally measured in an interim period?"
    },
    "choices": {
      "ar": [
        "باستخدام أفضل تقدير لمتوسط معدل الضريبة السنوي الفعلي المتوقع على أساس السنة حتى تاريخه",
        "بمعدل الربع وحده دائماً",
        "بالضريبة المدفوعة نقداً",
        "لا تسجل الضريبة"
      ],
      "en": [
        "Using the best estimate of the expected annual effective tax rate on a year-to-date basis",
        "Always the quarter's standalone rate",
        "Cash tax paid",
        "No tax recorded"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الضريبة المرحلية تتطلب منظوراً سنوياً تقديرياً.",
      "en": "Interim tax accounting uses an estimated annual effective tax rate perspective."
    },
    "reference": "IAS 34 — income tax",
    "difficulty": "hard",
    "examDomain": "Tax"
  },
  {
    "id": "ifrs-p5-ias34-05",
    "track": "IFRS",
    "topic": "IAS 34 — Impairment goodwill",
    "question": {
      "ar": "اعترفت الشركة بانخفاض شهرة في تقرير مرحلي. تحسنت الظروف قبل نهاية السنة. هل يمكن عكسه؟",
      "en": "An entity recognises goodwill impairment in an interim report and conditions improve by year-end. Can it reverse the impairment?"
    },
    "choices": {
      "ar": [
        "لا، خسارة انخفاض الشهرة لا تعكس",
        "نعم لأن التقرير مرحلي",
        "فقط نصفها",
        "فقط قبل التدقيق"
      ],
      "en": [
        "No; goodwill impairment is not reversed",
        "Yes because interim",
        "Half only",
        "Only before audit"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "قواعد IAS 36 لعدم عكس انخفاض الشهرة تستمر في التقارير المرحلية.",
      "en": "IAS 36's prohibition on reversing goodwill impairment continues to apply in interim reporting."
    },
    "reference": "IAS 34 / IAS 36",
    "difficulty": "hard",
    "examDomain": "Impairment goodwill"
  },
  {
    "id": "ifrs-p5-ias38-01",
    "track": "IFRS",
    "topic": "IAS 38 — Control",
    "question": {
      "ar": "ما الذي يدل على سيطرة المنشأة على مورد غير ملموس؟",
      "en": "What indicates control over an intangible resource?"
    },
    "choices": {
      "ar": [
        "القدرة على الحصول على المنافع وتقييد وصول الآخرين إليها",
        "مجرد توقع أرباح",
        "وجود موظفين",
        "وجود فاتورة فقط"
      ],
      "en": [
        "Ability to obtain benefits and restrict others' access to them",
        "Merely expecting profits",
        "Having employees",
        "Invoice only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "السيطرة عنصر أساسي لتعريف الأصل غير الملموس.",
      "en": "Control is a core element in identifying an intangible asset."
    },
    "reference": "IAS 38 — control",
    "difficulty": "easy",
    "examDomain": "Control"
  },
  {
    "id": "ifrs-p5-ias38-02",
    "track": "IFRS",
    "topic": "IAS 38 — Brands internally generated",
    "question": {
      "ar": "هل يجوز رسملة علامة تجارية أنشأتها المنشأة داخلياً من مصروفات الإعلان والترويج؟",
      "en": "Can an internally generated brand be capitalised from advertising and promotion expenditure?"
    },
    "choices": {
      "ar": [
        "لا عادةً",
        "نعم دائماً",
        "فقط بعد 5 سنوات",
        "فقط إذا حققت أرباحاً"
      ],
      "en": [
        "Generally no",
        "Always yes",
        "Only after five years",
        "Only if profitable"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IAS 38 يمنع الاعتراف ببعض الأصول المنشأة داخلياً مثل العلامات وقوائم العملاء لعدم إمكانية فصل تكلفة الإنشاء الموثوق بها.",
      "en": "IAS 38 prohibits recognition of certain internally generated items such as brands and customer lists."
    },
    "reference": "IAS 38 — internally generated brands",
    "difficulty": "intermediate",
    "examDomain": "Brands internally generated"
  },
  {
    "id": "ifrs-p5-ias38-03",
    "track": "IFRS",
    "topic": "IAS 38 — Development criteria",
    "question": {
      "ar": "أي عنصر مطلوب لرسملة التطوير؟",
      "en": "Which is required to capitalise development expenditure?"
    },
    "choices": {
      "ar": [
        "إثبات الجدوى الفنية والنية والقدرة والموارد والمنافع والقياس الموثوق",
        "وجود فكرة فقط",
        "موافقة التسويق فقط",
        "تحقيق إيراد بالفعل"
      ],
      "en": [
        "Demonstrating technical feasibility, intention, ability, resources, benefits and reliable measurement",
        "Idea only",
        "Marketing approval only",
        "Revenue already earned"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يجب إثبات جميع معايير التطوير قبل بدء الرسملة.",
      "en": "All development recognition criteria must be demonstrated before capitalisation begins."
    },
    "reference": "IAS 38 — development criteria",
    "difficulty": "intermediate",
    "examDomain": "Development criteria"
  },
  {
    "id": "ifrs-p5-ias38-04",
    "track": "IFRS",
    "topic": "IAS 38 — Revaluation model",
    "question": {
      "ar": "متى يمكن استخدام نموذج إعادة التقييم لأصل غير ملموس؟",
      "en": "When can the revaluation model be used for an intangible asset?"
    },
    "choices": {
      "ar": [
        "عندما توجد سوق نشطة للأصل، وهو أمر نادر لكثير من الأصول غير الملموسة",
        "دائماً",
        "فقط للبرمجيات",
        "لا يستخدم أبداً"
      ],
      "en": [
        "When an active market exists for the asset, which is rare for many intangibles",
        "Always",
        "Software only",
        "Never"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "إعادة التقييم في IAS 38 مقيدة بوجود سوق نشطة.",
      "en": "IAS 38 revaluation is restricted by the requirement for an active market."
    },
    "reference": "IAS 38 — revaluation model",
    "difficulty": "hard",
    "examDomain": "Revaluation model"
  },
  {
    "id": "ifrs-p5-ias38-05",
    "track": "IFRS",
    "topic": "IAS 38 — Residual value",
    "question": {
      "ar": "ما القيمة المتبقية المعتادة لأصل غير ملموس بعمر محدد؟",
      "en": "What is the usual residual value for a finite-life intangible asset?"
    },
    "choices": {
      "ar": [
        "صفر، إلا في ظروف محددة مثل التزام طرف ثالث أو سوق نشطة",
        "دائماً 10%",
        "القيمة العادلة",
        "القيمة الاسمية"
      ],
      "en": [
        "Zero, except in specified circumstances such as third-party commitment or active market",
        "Always 10%",
        "Fair value",
        "Nominal value"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "القيمة المتبقية غالباً صفر لأن سوق إعادة البيع أو الالتزام بالشراء نادران.",
      "en": "Residual value is generally zero because active resale markets or purchase commitments are uncommon."
    },
    "reference": "IAS 38 — residual value",
    "difficulty": "hard",
    "examDomain": "Residual value"
  },
  {
    "id": "ifrs-p5-ias40-01",
    "track": "IFRS",
    "topic": "IAS 40 — Mixed use",
    "question": {
      "ar": "مبنى نصفه مؤجر ونصفه مقر للشركة ويمكن بيع الجزأين منفصلين. كيف يعالج؟",
      "en": "A building is half rented and half owner-occupied, and the portions can be sold separately. How is it accounted for?"
    },
    "choices": {
      "ar": [
        "يعالج كل جزء وفق المعيار المناسب: IAS 40 للمؤجر وIAS 16 للمستخدم ذاتياً",
        "كله IAS 40 دائماً",
        "كله IAS 16 دائماً",
        "كمخزون"
      ],
      "en": [
        "Account for each portion separately: IAS 40 for rented portion and IAS 16 for owner-occupied portion",
        "All IAS 40",
        "All IAS 16",
        "Inventory"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "عندما يمكن فصل الأجزاء، يعالج كل جزء وفق استخدامه.",
      "en": "When portions are separable, each is accounted for according to its use."
    },
    "reference": "IAS 40 — mixed use",
    "difficulty": "easy",
    "examDomain": "Mixed use"
  },
  {
    "id": "ifrs-p5-ias40-02",
    "track": "IFRS",
    "topic": "IAS 40 — Construction",
    "question": {
      "ar": "عقار قيد الإنشاء ليستخدم مستقبلاً كعقار استثماري. أي معيار يحكمه؟",
      "en": "Property is being constructed for future use as investment property. Which standard governs it?"
    },
    "choices": {
      "ar": [
        "IAS 40",
        "IAS 2 دائماً",
        "IFRS 15",
        "IAS 38"
      ],
      "en": [
        "IAS 40",
        "Always IAS 2",
        "IFRS 15",
        "IAS 38"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "العقار الجاري إنشاؤه للاستخدام الاستثماري يقع ضمن IAS 40.",
      "en": "Property under construction for future use as investment property falls within IAS 40."
    },
    "reference": "IAS 40 — property under construction",
    "difficulty": "intermediate",
    "examDomain": "Construction"
  },
  {
    "id": "ifrs-p5-ias40-03",
    "track": "IFRS",
    "topic": "IAS 40 — Fair value not measurable",
    "question": {
      "ar": "تستخدم المنشأة نموذج القيمة العادلة لكن يتعذر في حالة استثنائية قياس القيمة العادلة بشكل موثوق لعقار محدد. ما المبدأ؟",
      "en": "An entity uses the fair value model but, exceptionally, fair value of a specific property cannot be reliably measured. What is the principle?"
    },
    "choices": {
      "ar": [
        "يطبق الاستثناء المحدد واستخدام تكلفة وفق IAS 16 لذلك العقار حتى التصرف وفق الشروط",
        "يستخدم صفر",
        "يلغي الأصل",
        "يتحول لـOCI"
      ],
      "en": [
        "Apply the specified exception and use IAS 16-type cost accounting for that property until disposal under the conditions",
        "Use zero",
        "Derecognise asset",
        "Move to OCI"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الاستثناء ضيق ويطبق عندما يكون القياس الموثوق للقيمة العادلة غير ممكن بصورة مستمرة عند الاعتراف الأولي.",
      "en": "The exception is narrow and applies when fair value cannot be reliably measured on a continuing basis at initial recognition."
    },
    "reference": "IAS 40 — fair value reliability exception",
    "difficulty": "intermediate",
    "examDomain": "Fair value not measurable"
  },
  {
    "id": "ifrs-p5-ias40-04",
    "track": "IFRS",
    "topic": "IAS 40 — Transfer to owner occupied",
    "question": {
      "ar": "بدأت الشركة استخدام عقار كان مؤجراً كمقر لها. ما الحدث؟",
      "en": "An entity starts occupying a previously rented investment property as its own office. What happens?"
    },
    "choices": {
      "ar": [
        "تحويل من IAS 40 إلى العقار المستخدم من المالك بسبب تغير الاستخدام",
        "لا تغيير",
        "إلغاء الاعتراف",
        "تحويل للمخزون دائماً"
      ],
      "en": [
        "Transfer from investment property to owner-occupied property due to change in use",
        "No change",
        "Derecognise",
        "Always inventory"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "بدء الاستخدام الذاتي دليل على تغير استخدام يدعم التحويل.",
      "en": "Commencement of owner occupation evidences a change in use supporting transfer."
    },
    "reference": "IAS 40 — transfers",
    "difficulty": "hard",
    "examDomain": "Transfer to owner occupied"
  },
  {
    "id": "ifrs-p5-ias40-05",
    "track": "IFRS",
    "topic": "IAS 40 — Disposal",
    "question": {
      "ar": "كيف يحدد الربح أو الخسارة عند استبعاد عقار استثماري؟",
      "en": "How is gain or loss on disposal of investment property determined?"
    },
    "choices": {
      "ar": [
        "الفرق بين صافي متحصلات الاستبعاد والقيمة الدفترية ويعترف به في الربح أو الخسارة عادةً",
        "المتحصلات كلها ربح",
        "القيمة الدفترية كلها خسارة",
        "OCI دائماً"
      ],
      "en": [
        "Difference between net disposal proceeds and carrying amount, generally recognised in profit or loss",
        "All proceeds are gain",
        "All carrying amount is loss",
        "Always OCI"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الاستبعاد يتبع مبدأ مقارنة المقابل الصافي بالقيمة الدفترية.",
      "en": "Disposal gain/loss is based on net proceeds versus carrying amount."
    },
    "reference": "IAS 40 — disposal",
    "difficulty": "hard",
    "examDomain": "Disposal"
  },
  {
    "id": "ifrs-p5-ias41-01",
    "track": "IFRS",
    "topic": "IAS 41 — Agricultural activity",
    "question": {
      "ar": "ما الذي يميز النشاط الزراعي ضمن IAS 41؟",
      "en": "What characterises agricultural activity under IAS 41?"
    },
    "choices": {
      "ar": [
        "إدارة التحول البيولوجي وحصاد الأصول البيولوجية للبيع أو التحويل لمنتج أو أصول إضافية",
        "مجرد شراء طعام",
        "تخزين مخزون",
        "تأجير أرض فقط"
      ],
      "en": [
        "Management of biological transformation and harvest of biological assets for sale, produce or additional assets",
        "Buying food",
        "Storing inventory",
        "Leasing land only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "النشاط الزراعي يتضمن إدارة التحول البيولوجي للأصول الحية.",
      "en": "Agricultural activity involves managing biological transformation of living assets."
    },
    "reference": "IAS 41 — agricultural activity",
    "difficulty": "easy",
    "examDomain": "Agricultural activity"
  },
  {
    "id": "ifrs-p5-ias41-02",
    "track": "IFRS",
    "topic": "IAS 41 — Produce after harvest",
    "question": {
      "ar": "قمح حُصد اليوم وقيس بالقيمة العادلة ناقص تكاليف البيع. ماذا يحدث غداً وهو في المخزن؟",
      "en": "Wheat is harvested today and measured at fair value less costs to sell. What happens tomorrow while stored?"
    },
    "choices": {
      "ar": [
        "تستخدم قيمة الحصاد كتكلفة بداية تحت IAS 2",
        "يبقى IAS 41 للأبد",
        "يصبح PPE",
        "يشطب"
      ],
      "en": [
        "Harvest-date amount becomes starting cost under IAS 2",
        "Remains under IAS 41 forever",
        "Becomes PP&E",
        "Written off"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "نقطة الحصاد هي الحد الفاصل بين IAS 41 وIAS 2 للمنتج الزراعي.",
      "en": "Harvest is the transition point from IAS 41 to IAS 2 for agricultural produce."
    },
    "reference": "IAS 41 / IAS 2",
    "difficulty": "intermediate",
    "examDomain": "Produce after harvest"
  },
  {
    "id": "ifrs-p5-ias41-03",
    "track": "IFRS",
    "topic": "IAS 41 — Bearer plant fruit",
    "question": {
      "ar": "شجرة فاكهة معمرة تستخدم لإنتاج الفاكهة سنوات عديدة. كيف يعالج كل من الشجرة والفاكهة النامية؟",
      "en": "A mature fruit tree produces fruit for many years. How are the tree and growing fruit treated?"
    },
    "choices": {
      "ar": [
        "الشجرة IAS 16 والفاكهة النامية IAS 41",
        "كلاهما IAS 41",
        "كلاهما IAS 16",
        "كلاهما IAS 2"
      ],
      "en": [
        "Tree under IAS 16; growing fruit under IAS 41",
        "Both IAS 41",
        "Both IAS 16",
        "Both IAS 2"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "النبات المثمر نفسه يعالج كأصل ثابت بينما المنتج النامي عليه يبقى ضمن الزراعة.",
      "en": "Bearer plants follow IAS 16 while produce growing on them remains within IAS 41."
    },
    "reference": "IAS 41 — bearer plants",
    "difficulty": "intermediate",
    "examDomain": "Bearer plant fruit"
  },
  {
    "id": "ifrs-p5-ias41-04",
    "track": "IFRS",
    "topic": "IAS 41 — Gain at initial recognition",
    "question": {
      "ar": "إذا كانت القيمة العادلة ناقص تكاليف البيع لأصل بيولوجي عند الاعتراف الأولي أعلى من تكلفته، أين يذهب الفرق؟",
      "en": "If fair value less costs to sell of a biological asset at initial recognition exceeds its cost, where does the difference go?"
    },
    "choices": {
      "ar": [
        "الربح أو الخسارة",
        "OCI دائماً",
        "حقوق الملكية مباشرة",
        "لا يعترف"
      ],
      "en": [
        "Profit or loss",
        "Always OCI",
        "Directly equity",
        "Not recognised"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "التغيرات والمكاسب الناتجة عن قياس القيمة العادلة ناقص تكاليف البيع تظهر في الربح أو الخسارة.",
      "en": "Gains and changes from fair value less costs to sell measurement are recognised in profit or loss."
    },
    "reference": "IAS 41 — gains and losses",
    "difficulty": "hard",
    "examDomain": "Gain at initial recognition"
  },
  {
    "id": "ifrs-p5-ias41-05",
    "track": "IFRS",
    "topic": "IAS 41 — Physical and price change",
    "question": {
      "ar": "هل قد يكون مفيداً الإفصاح عن أثر التغيرات المادية في الأصول البيولوجية منفصلاً عن تغيرات الأسعار؟",
      "en": "Can it be useful to disclose physical changes separately from price changes in biological assets?"
    },
    "choices": {
      "ar": [
        "نعم، خصوصاً عندما تكون دورة الإنتاج أطول من سنة",
        "لا أبداً",
        "فقط إذا كان الأصل نباتاً",
        "فقط عند الخسارة"
      ],
      "en": [
        "Yes, particularly when the production cycle exceeds one year",
        "Never",
        "Only for plants",
        "Only when loss-making"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "فصل تغير الكمية/النمو عن السعر قد يساعد المستخدم على فهم الأداء الزراعي.",
      "en": "Separating physical transformation from price changes can help users understand agricultural performance."
    },
    "reference": "IAS 41 — disclosures",
    "difficulty": "hard",
    "examDomain": "Physical and price change"
  }
] satisfies ExamQuestion[];
