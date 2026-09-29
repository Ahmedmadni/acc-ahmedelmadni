import type { ExamQuestion } from "@/lib/exam-bank";

/**
 * Phase 3 editorial question expansion.
 * Independently authored educational questions; not copied from commercial exam banks.
 * Coverage focus: IFRS 9/15/16/18 and IAS 2/12/16/21/24/36/37.
 */
export const IFRS_PHASE3_QUESTION_SEED = [
  {
    "id": "ifrs-p3-ias2-01",
    "track": "IFRS",
    "topic": "IAS 2 — Measurement",
    "question": {
      "ar": "إذا كانت تكلفة المخزون 80 وصافي القيمة القابلة للتحقق 74، فما القيمة الدفترية؟",
      "en": "If inventory cost is 80 and NRV is 74, what is the carrying amount?"
    },
    "choices": {
      "ar": [
        "80",
        "74",
        "154",
        "6"
      ],
      "en": [
        "80",
        "74",
        "154",
        "6"
      ]
    },
    "answerIndex": 1,
    "explanation": {
      "ar": "يقاس المخزون بالأقل من التكلفة وصافي القيمة القابلة للتحقق، لذا 74.",
      "en": "Inventory is measured at the lower of cost and NRV, so 74."
    },
    "reference": "IAS 2 — measurement",
    "difficulty": "easy",
    "examDomain": "Measurement"
  },
  {
    "id": "ifrs-p3-ias2-02",
    "track": "IFRS",
    "topic": "IAS 2 — Cost",
    "question": {
      "ar": "أي عنصر يدخل عادةً ضمن تكلفة شراء المخزون؟",
      "en": "Which item is normally included in the cost of purchasing inventory?"
    },
    "choices": {
      "ar": [
        "خصم تجاري مستلم",
        "رسوم استيراد غير قابلة للاسترداد",
        "مصروف إعلان",
        "هدر غير طبيعي"
      ],
      "en": [
        "Trade discount received",
        "Non-refundable import duty",
        "Advertising expense",
        "Abnormal waste"
      ]
    },
    "answerIndex": 1,
    "explanation": {
      "ar": "رسوم الاستيراد غير القابلة للاسترداد من تكاليف الشراء، بينما الخصومات تخفض التكلفة.",
      "en": "Non-refundable import duties are purchase costs, while trade discounts reduce cost."
    },
    "reference": "IAS 2 — cost of purchase",
    "difficulty": "easy",
    "examDomain": "Cost"
  },
  {
    "id": "ifrs-p3-ias2-03",
    "track": "IFRS",
    "topic": "IAS 2 — Production overhead",
    "question": {
      "ar": "كيف توزع التكاليف الصناعية الثابتة في فترة إنتاج منخفض بشكل غير طبيعي؟",
      "en": "How are fixed production overheads allocated in an abnormally low production period?"
    },
    "choices": {
      "ar": [
        "على الإنتاج الفعلي بالكامل",
        "على أساس الطاقة العادية",
        "لا تخصص مطلقاً",
        "على المبيعات فقط"
      ],
      "en": [
        "Fully on actual output",
        "Based on normal capacity",
        "Never allocated",
        "Based only on sales"
      ]
    },
    "answerIndex": 1,
    "explanation": {
      "ar": "يستخدم أساس الطاقة العادية حتى لا تحمل الوحدات المنتجة تكلفة ثابتة مفرطة.",
      "en": "Normal capacity is used so units are not burdened with excessive fixed overhead."
    },
    "reference": "IAS 2.13",
    "difficulty": "intermediate",
    "examDomain": "Production overhead"
  },
  {
    "id": "ifrs-p3-ias2-04",
    "track": "IFRS",
    "topic": "IAS 2 — Cost formulas",
    "question": {
      "ar": "ما الصيغة المقبولة للمخزون القابل للتبادل عادةً؟",
      "en": "Which formula is acceptable for ordinarily interchangeable inventory?"
    },
    "choices": {
      "ar": [
        "LIFO فقط",
        "FIFO أو المتوسط المرجح",
        "القيمة العادلة دائماً",
        "سعر البيع"
      ],
      "en": [
        "LIFO only",
        "FIFO or weighted average",
        "Always fair value",
        "Selling price"
      ]
    },
    "answerIndex": 1,
    "explanation": {
      "ar": "IAS 2 يسمح بـ FIFO أو المتوسط المرجح ولا يسمح بـ LIFO.",
      "en": "IAS 2 permits FIFO or weighted average and does not permit LIFO."
    },
    "reference": "IAS 2.25",
    "difficulty": "easy",
    "examDomain": "Cost formulas"
  },
  {
    "id": "ifrs-p3-ias2-05",
    "track": "IFRS",
    "topic": "IAS 2 — NRV",
    "question": {
      "ar": "ما الذي يطرح من سعر البيع المتوقع للوصول إلى صافي القيمة القابلة للتحقق؟",
      "en": "What is deducted from estimated selling price to determine NRV?"
    },
    "choices": {
      "ar": [
        "تكاليف الإكمال والبيع المقدرة",
        "تكلفة الشراء فقط",
        "الإهلاك فقط",
        "الضريبة المؤجلة"
      ],
      "en": [
        "Estimated completion and selling costs",
        "Purchase cost only",
        "Depreciation only",
        "Deferred tax"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "NRV هو سعر البيع المتوقع ناقص تكاليف الإكمال والبيع المقدرة.",
      "en": "NRV is estimated selling price less estimated completion and selling costs."
    },
    "reference": "IAS 2 — NRV",
    "difficulty": "intermediate",
    "examDomain": "NRV"
  },
  {
    "id": "ifrs-p3-ias2-06",
    "track": "IFRS",
    "topic": "IAS 2 — Write-down reversal",
    "question": {
      "ar": "إذا زال سبب تخفيض المخزون إلى NRV وارتفعت NRV لاحقاً، ماذا يحدث؟",
      "en": "If the reason for an NRV write-down disappears and NRV later increases, what happens?"
    },
    "choices": {
      "ar": [
        "لا يجوز العكس أبداً",
        "يعكس التخفيض بحد أقصى التخفيض الأصلي",
        "يرفع المخزون فوق التكلفة الأصلية",
        "يعترف بشهرة"
      ],
      "en": [
        "Never reverse",
        "Reverse up to the original write-down",
        "Increase inventory above original cost",
        "Recognise goodwill"
      ]
    },
    "answerIndex": 1,
    "explanation": {
      "ar": "يسمح بعكس التخفيض بحد لا يتجاوز مبلغ التخفيض الأصلي.",
      "en": "The write-down may be reversed, capped at the original write-down."
    },
    "reference": "IAS 2.33",
    "difficulty": "intermediate",
    "examDomain": "Write-down reversal"
  },
  {
    "id": "ifrs-p3-ias2-07",
    "track": "IFRS",
    "topic": "IAS 2 — Disclosures",
    "question": {
      "ar": "أي إفصاح يرتبط مباشرةً بصيغة تكلفة المخزون؟",
      "en": "Which disclosure directly relates to the inventory cost formula?"
    },
    "choices": {
      "ar": [
        "السياسة المحاسبية المستخدمة في القياس وصيغة التكلفة",
        "اسم المورد الأكبر",
        "ميزانية التسويق",
        "قيمة الشهرة"
      ],
      "en": [
        "Accounting policy used for measurement and cost formula",
        "Largest supplier name",
        "Marketing budget",
        "Goodwill amount"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يتطلب المعيار الإفصاح عن سياسات قياس المخزون وصيغة التكلفة المستخدمة.",
      "en": "The standard requires disclosure of inventory measurement policies and the cost formula used."
    },
    "reference": "IAS 2.36",
    "difficulty": "hard",
    "examDomain": "Disclosures"
  },
  {
    "id": "ifrs-p3-ias2-08",
    "track": "IFRS",
    "topic": "IAS 2 — Expense recognition",
    "question": {
      "ar": "متى يعترف عادةً بالقيمة الدفترية للمخزون المباع كمصروف؟",
      "en": "When is the carrying amount of inventory sold normally recognised as an expense?"
    },
    "choices": {
      "ar": [
        "عند شراء المخزون",
        "في الفترة التي يعترف فيها بالإيراد المرتبط",
        "عند دفع المورد",
        "بعد سنة من البيع"
      ],
      "en": [
        "When inventory is purchased",
        "In the period when related revenue is recognised",
        "When the supplier is paid",
        "One year after sale"
      ]
    },
    "answerIndex": 1,
    "explanation": {
      "ar": "تُحمل تكلفة المخزون المباع كمصروف في نفس الفترة التي يعترف فيها بالإيراد ذي الصلة.",
      "en": "The carrying amount of inventory sold is expensed in the period the related revenue is recognised."
    },
    "reference": "IAS 2 — recognition as expense",
    "difficulty": "hard",
    "examDomain": "Expense recognition"
  },
  {
    "id": "ifrs-p3-ias12-01",
    "track": "IFRS",
    "topic": "IAS 12 — Current tax",
    "question": {
      "ar": "على أي أساس يقاس التزام الضريبة الجارية؟",
      "en": "On what basis is a current tax liability measured?"
    },
    "choices": {
      "ar": [
        "المبلغ المتوقع دفعه للسلطات الضريبية باستخدام المعدلات المقررة أو المقررة فعلياً",
        "القيمة العادلة للأصول",
        "معدل الخصم البنكي",
        "ضريبة السنة السابقة فقط"
      ],
      "en": [
        "Amount expected to be paid to tax authorities using enacted or substantively enacted rates",
        "Fair value of assets",
        "Bank discount rate",
        "Prior-year tax only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تقاس الضريبة الجارية بالمبلغ المتوقع دفعه وفق المعدلات والقوانين المقررة أو المقررة فعلياً.",
      "en": "Current tax is measured at the amount expected to be paid using enacted or substantively enacted tax rates/laws."
    },
    "reference": "IAS 12 — current tax",
    "difficulty": "easy",
    "examDomain": "Current tax"
  },
  {
    "id": "ifrs-p3-ias12-02",
    "track": "IFRS",
    "topic": "IAS 12 — Temporary differences",
    "question": {
      "ar": "ما الفرق المؤقت؟",
      "en": "What is a temporary difference?"
    },
    "choices": {
      "ar": [
        "فرق بين القيمة الدفترية للأصل أو الالتزام وأساسه الضريبي",
        "فرق بين النقد والبنك",
        "فرق بين المبيعات والمشتريات",
        "فرق بين الميزانية والتوقع"
      ],
      "en": [
        "Difference between carrying amount of an asset/liability and its tax base",
        "Difference between cash and bank",
        "Difference between sales and purchases",
        "Difference between budget and forecast"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الفرق المؤقت ينشأ من اختلاف القيمة الدفترية عن الأساس الضريبي.",
      "en": "A temporary difference arises from a difference between carrying amount and tax base."
    },
    "reference": "IAS 12 — temporary differences",
    "difficulty": "easy",
    "examDomain": "Temporary differences"
  },
  {
    "id": "ifrs-p3-ias12-03",
    "track": "IFRS",
    "topic": "IAS 12 — Deferred tax liability",
    "question": {
      "ar": "غالباً، ماذا ينشأ عن فرق مؤقت خاضع للضريبة؟",
      "en": "Generally, what arises from a taxable temporary difference?"
    },
    "choices": {
      "ar": [
        "أصل ضريبي مؤجل",
        "التزام ضريبي مؤجل",
        "لا شيء دائماً",
        "إيراد مؤجل"
      ],
      "en": [
        "Deferred tax asset",
        "Deferred tax liability",
        "Always nothing",
        "Deferred revenue"
      ]
    },
    "answerIndex": 1,
    "explanation": {
      "ar": "الفرق المؤقت الخاضع للضريبة يؤدي عادةً إلى التزام ضريبي مؤجل مع مراعاة الاستثناءات.",
      "en": "A taxable temporary difference generally gives rise to a deferred tax liability, subject to exceptions."
    },
    "reference": "IAS 12 — deferred tax liabilities",
    "difficulty": "intermediate",
    "examDomain": "Deferred tax liability"
  },
  {
    "id": "ifrs-p3-ias12-04",
    "track": "IFRS",
    "topic": "IAS 12 — Deferred tax asset",
    "question": {
      "ar": "متى يعترف بأصل ضريبي مؤجل عن خسائر ضريبية غير مستخدمة؟",
      "en": "When is a deferred tax asset recognised for unused tax losses?"
    },
    "choices": {
      "ar": [
        "دائماً",
        "بقدر احتمال توفر أرباح خاضعة للضريبة يمكن استخدام الخسائر مقابلها",
        "فقط عند دفع نقد",
        "لا يعترف به أبداً"
      ],
      "en": [
        "Always",
        "To the extent taxable profit is probable against which losses can be utilised",
        "Only when cash is paid",
        "Never"
      ]
    },
    "answerIndex": 1,
    "explanation": {
      "ar": "الاعتراف يعتمد على احتمال توفر أرباح ضريبية مستقبلية كافية.",
      "en": "Recognition depends on the probability of sufficient future taxable profits."
    },
    "reference": "IAS 12 — deferred tax assets",
    "difficulty": "intermediate",
    "examDomain": "Deferred tax asset"
  },
  {
    "id": "ifrs-p3-ias12-05",
    "track": "IFRS",
    "topic": "IAS 12 — Tax base",
    "question": {
      "ar": "بالنسبة لأصل، ما المفهوم الأساسي للأساس الضريبي؟",
      "en": "For an asset, what is the core idea of tax base?"
    },
    "choices": {
      "ar": [
        "المبلغ الذي سيكون قابلاً للخصم لأغراض ضريبية مقابل المنافع الاقتصادية عند استرداد الأصل",
        "سعر السوق",
        "القيمة الاسمية",
        "تكلفة الاستبدال"
      ],
      "en": [
        "Amount deductible for tax purposes against economic benefits when the asset is recovered",
        "Market price",
        "Nominal value",
        "Replacement cost"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الأساس الضريبي للأصل يرتبط بالمبلغ الذي سيكون قابلاً للخصم عند استرداده.",
      "en": "The tax base of an asset relates to the amount deductible for tax purposes when it is recovered."
    },
    "reference": "IAS 12 — tax base",
    "difficulty": "intermediate",
    "examDomain": "Tax base"
  },
  {
    "id": "ifrs-p3-ias12-06",
    "track": "IFRS",
    "topic": "IAS 12 — Measurement",
    "question": {
      "ar": "هل يتم خصم أرصدة الضريبة المؤجلة للقيمة الحالية عادةً؟",
      "en": "Are deferred tax balances normally discounted to present value?"
    },
    "choices": {
      "ar": [
        "نعم دائماً",
        "لا",
        "فقط إذا تجاوزت سنة",
        "فقط للأصول"
      ],
      "en": [
        "Always",
        "No",
        "Only if over one year",
        "Only for assets"
      ]
    },
    "answerIndex": 1,
    "explanation": {
      "ar": "IAS 12 لا يسمح بخصم أصول والتزامات الضريبة المؤجلة.",
      "en": "IAS 12 does not permit discounting deferred tax assets and liabilities."
    },
    "reference": "IAS 12 — measurement",
    "difficulty": "hard",
    "examDomain": "Measurement"
  },
  {
    "id": "ifrs-p3-ias12-07",
    "track": "IFRS",
    "topic": "IAS 12 — Presentation",
    "question": {
      "ar": "أين يعترف بأثر الضريبة المؤجلة المتعلق ببند اعترف به في OCI؟",
      "en": "Where is deferred tax related to an item recognised in OCI generally recognised?"
    },
    "choices": {
      "ar": [
        "الربح أو الخسارة دائماً",
        "OCI أيضاً",
        "الإيراد فقط",
        "المخزون"
      ],
      "en": [
        "Always profit or loss",
        "OCI as well",
        "Revenue only",
        "Inventory"
      ]
    },
    "answerIndex": 1,
    "explanation": {
      "ar": "يُعترف بالأثر الضريبي عادةً في نفس موضع المعاملة أو الحدث الأساسي.",
      "en": "Tax effects are generally recognised consistently with the underlying transaction or event."
    },
    "reference": "IAS 12 — recognition outside profit or loss",
    "difficulty": "hard",
    "examDomain": "Presentation"
  },
  {
    "id": "ifrs-p3-ias12-08",
    "track": "IFRS",
    "topic": "IAS 12 — Reassessment",
    "question": {
      "ar": "ماذا يحدث للقيمة الدفترية لأصل ضريبي مؤجل إذا لم يعد من المحتمل توفر أرباح ضريبية كافية؟",
      "en": "What happens to a deferred tax asset if sufficient taxable profit is no longer probable?"
    },
    "choices": {
      "ar": [
        "تزاد القيمة",
        "تخفض القيمة بالقدر المناسب",
        "لا تتغير",
        "تحول إلى نقد"
      ],
      "en": [
        "Increase it",
        "Reduce it as appropriate",
        "No change",
        "Convert to cash"
      ]
    },
    "answerIndex": 1,
    "explanation": {
      "ar": "تخفض القيمة الدفترية بقدر لم يعد من المحتمل معه تحقيق المنفعة الضريبية.",
      "en": "The carrying amount is reduced to the extent it is no longer probable the tax benefit will be realised."
    },
    "reference": "IAS 12 — review of deferred tax assets",
    "difficulty": "hard",
    "examDomain": "Reassessment"
  },
  {
    "id": "ifrs-p3-ias16-01",
    "track": "IFRS",
    "topic": "IAS 16 — Recognition",
    "question": {
      "ar": "ما شرطان الاعتراف ببند من الممتلكات والآلات والمعدات؟",
      "en": "What are the two core recognition conditions for PP&E?"
    },
    "choices": {
      "ar": [
        "احتمال المنافع المستقبلية وإمكانية قياس التكلفة بموثوقية",
        "وجود فاتورة فقط",
        "الدفع نقداً",
        "عمر أكثر من عشر سنوات"
      ],
      "en": [
        "Probable future benefits and reliably measurable cost",
        "Invoice only",
        "Cash payment",
        "Life over ten years"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يركز الاعتراف على احتمال المنافع وإمكانية قياس التكلفة بشكل موثوق.",
      "en": "Recognition focuses on probable future benefits and reliable measurement of cost."
    },
    "reference": "IAS 16 — recognition",
    "difficulty": "easy",
    "examDomain": "Recognition"
  },
  {
    "id": "ifrs-p3-ias16-02",
    "track": "IFRS",
    "topic": "IAS 16 — Initial cost",
    "question": {
      "ar": "أي تكلفة تُرسمل عادةً ضمن تكلفة الأصل؟",
      "en": "Which cost is normally capitalised as part of an asset's cost?"
    },
    "choices": {
      "ar": [
        "تكلفة إعداد الموقع",
        "تدريب الموظفين",
        "إعلان افتتاح",
        "خسائر تشغيل أولية"
      ],
      "en": [
        "Site preparation",
        "Staff training",
        "Opening advertising",
        "Initial operating losses"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تكلفة إعداد الموقع من التكاليف المباشرة اللازمة لجعل الأصل جاهزاً للاستخدام.",
      "en": "Site preparation is directly attributable to bringing the asset to the condition necessary for use."
    },
    "reference": "IAS 16 — initial cost",
    "difficulty": "easy",
    "examDomain": "Initial cost"
  },
  {
    "id": "ifrs-p3-ias16-03",
    "track": "IFRS",
    "topic": "IAS 16 — Depreciation start",
    "question": {
      "ar": "متى يبدأ إهلاك الأصل؟",
      "en": "When does depreciation begin?"
    },
    "choices": {
      "ar": [
        "عند طلب الأصل",
        "عندما يصبح متاحاً للاستخدام",
        "عند أول إيراد",
        "بعد سنة"
      ],
      "en": [
        "When ordered",
        "When available for use",
        "At first revenue",
        "After one year"
      ]
    },
    "answerIndex": 1,
    "explanation": {
      "ar": "يبدأ الإهلاك عندما يكون الأصل في الموقع والحالة اللازمين للتشغيل كما تقصد الإدارة.",
      "en": "Depreciation begins when the asset is available for use."
    },
    "reference": "IAS 16 — depreciation",
    "difficulty": "intermediate",
    "examDomain": "Depreciation start"
  },
  {
    "id": "ifrs-p3-ias16-04",
    "track": "IFRS",
    "topic": "IAS 16 — Components",
    "question": {
      "ar": "كيف يعالج جزء مهم من أصل له نمط استهلاك مختلف؟",
      "en": "How is a significant component with a different consumption pattern treated?"
    },
    "choices": {
      "ar": [
        "يهمل",
        "يهلك بشكل منفصل",
        "يضاف للمخزون",
        "لا يهلك"
      ],
      "en": [
        "Ignore it",
        "Depreciate separately",
        "Add to inventory",
        "Do not depreciate"
      ]
    },
    "answerIndex": 1,
    "explanation": {
      "ar": "الأجزاء المهمة ذات الأعمار أو الأنماط المختلفة تهلك منفصلة.",
      "en": "Significant components with different useful lives/patterns are depreciated separately."
    },
    "reference": "IAS 16 — component depreciation",
    "difficulty": "intermediate",
    "examDomain": "Components"
  },
  {
    "id": "ifrs-p3-ias16-05",
    "track": "IFRS",
    "topic": "IAS 16 — Review",
    "question": {
      "ar": "كم مرة على الأقل تراجع القيمة المتبقية والعمر الإنتاجي وطريقة الإهلاك؟",
      "en": "How often are residual value, useful life and depreciation method reviewed at minimum?"
    },
    "choices": {
      "ar": [
        "عند نهاية كل سنة مالية",
        "كل خمس سنوات",
        "عند البيع فقط",
        "لا تراجع"
      ],
      "en": [
        "At least at each financial year-end",
        "Every five years",
        "Only on disposal",
        "Never"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تراجع في نهاية كل سنة مالية، وتعالج التغييرات كتغيرات في تقديرات محاسبية.",
      "en": "They are reviewed at least at each financial year-end; changes are accounting estimates."
    },
    "reference": "IAS 16 — review of estimates",
    "difficulty": "intermediate",
    "examDomain": "Review"
  },
  {
    "id": "ifrs-p3-ias16-06",
    "track": "IFRS",
    "topic": "IAS 16 — Revaluation",
    "question": {
      "ar": "عند اختيار نموذج إعادة التقييم، كيف يجب تطبيقه؟",
      "en": "If the revaluation model is chosen, how should it generally be applied?"
    },
    "choices": {
      "ar": [
        "على أصل واحد منتقى فقط",
        "على فئة كاملة من الممتلكات والآلات والمعدات",
        "على المخزون",
        "على الالتزامات"
      ],
      "en": [
        "Only one selected asset",
        "To an entire class of PP&E",
        "To inventory",
        "To liabilities"
      ]
    },
    "answerIndex": 1,
    "explanation": {
      "ar": "يطبق نموذج إعادة التقييم على فئة كاملة لتجنب الانتقائية.",
      "en": "The revaluation model is applied to an entire class of PP&E to avoid selective revaluation."
    },
    "reference": "IAS 16 — revaluation model",
    "difficulty": "hard",
    "examDomain": "Revaluation"
  },
  {
    "id": "ifrs-p3-ias16-07",
    "track": "IFRS",
    "topic": "IAS 16 — Derecognition",
    "question": {
      "ar": "متى يزال الأصل من الدفاتر؟",
      "en": "When is an item of PP&E derecognised?"
    },
    "choices": {
      "ar": [
        "عند التصرف فيه أو عندما لا يتوقع منه منافع مستقبلية",
        "عند انتهاء الضمان",
        "عند تغيير المدير",
        "عند اكتمال الفاتورة"
      ],
      "en": [
        "On disposal or when no future economic benefits are expected",
        "When warranty expires",
        "When manager changes",
        "When invoice is completed"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الإلغاء يتم عند التصرف أو عند عدم توقع منافع مستقبلية من الاستخدام أو التصرف.",
      "en": "Derecognition occurs on disposal or when no future benefits are expected from use or disposal."
    },
    "reference": "IAS 16 — derecognition",
    "difficulty": "hard",
    "examDomain": "Derecognition"
  },
  {
    "id": "ifrs-p3-ias16-08",
    "track": "IFRS",
    "topic": "IAS 16 — Subsequent costs",
    "question": {
      "ar": "ما المعالجة المعتادة لتكاليف الصيانة اليومية؟",
      "en": "How are routine day-to-day servicing costs normally treated?"
    },
    "choices": {
      "ar": [
        "ترسمل دائماً",
        "تحمل على المصروف عند حدوثها",
        "تسجل كشهرة",
        "تؤجل خمس سنوات"
      ],
      "en": [
        "Always capitalise",
        "Expense as incurred",
        "Record as goodwill",
        "Defer for five years"
      ]
    },
    "answerIndex": 1,
    "explanation": {
      "ar": "الصيانة اليومية لا تستوفي عادةً شروط الرسملة وتُحمل على المصروف.",
      "en": "Routine servicing normally does not meet capitalisation criteria and is expensed."
    },
    "reference": "IAS 16 — subsequent costs",
    "difficulty": "hard",
    "examDomain": "Subsequent costs"
  },
  {
    "id": "ifrs-p3-ias21-01",
    "track": "IFRS",
    "topic": "IAS 21 — Functional currency",
    "question": {
      "ar": "ما العامل الأساسي في تحديد العملة الوظيفية؟",
      "en": "What is central to determining functional currency?"
    },
    "choices": {
      "ar": [
        "العملة التي تؤثر أساساً في أسعار البيع وتكاليف السلع والخدمات",
        "جنسية المدير",
        "عملة حساب بنكي واحد",
        "رغبة المراجع"
      ],
      "en": [
        "Currency that mainly influences sales prices and costs of goods/services",
        "Manager nationality",
        "Currency of one bank account",
        "Auditor preference"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "العملة الوظيفية تعكس البيئة الاقتصادية الأساسية التي تعمل فيها المنشأة.",
      "en": "Functional currency reflects the primary economic environment in which the entity operates."
    },
    "reference": "IAS 21 — functional currency",
    "difficulty": "easy",
    "examDomain": "Functional currency"
  },
  {
    "id": "ifrs-p3-ias21-02",
    "track": "IFRS",
    "topic": "IAS 21 — Initial recognition",
    "question": {
      "ar": "بأي سعر يترجم عادةً بند بعملة أجنبية عند الاعتراف الأولي؟",
      "en": "At what rate is a foreign-currency transaction normally translated on initial recognition?"
    },
    "choices": {
      "ar": [
        "سعر تاريخ المعاملة",
        "سعر نهاية السنة دائماً",
        "متوسط عشر سنوات",
        "سعر البيع المستقبلي"
      ],
      "en": [
        "Spot exchange rate at transaction date",
        "Always year-end rate",
        "Ten-year average",
        "Future selling rate"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يستخدم سعر الصرف الفوري في تاريخ المعاملة، ويمكن استخدام تقريب مناسب عند الملاءمة.",
      "en": "The spot rate at transaction date is used; an appropriate approximation may be used where suitable."
    },
    "reference": "IAS 21 — initial recognition",
    "difficulty": "easy",
    "examDomain": "Initial recognition"
  },
  {
    "id": "ifrs-p3-ias21-03",
    "track": "IFRS",
    "topic": "IAS 21 — Monetary items",
    "question": {
      "ar": "كيف تترجم البنود النقدية بالعملة الأجنبية في نهاية الفترة؟",
      "en": "How are foreign-currency monetary items translated at period end?"
    },
    "choices": {
      "ar": [
        "بسعر الإقفال",
        "بسعر تاريخ الشراء دائماً",
        "لا تترجم",
        "بسعر الموازنة"
      ],
      "en": [
        "Closing rate",
        "Always historical purchase rate",
        "Not translated",
        "Budget rate"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "البنود النقدية تترجم بسعر الإقفال في تاريخ التقرير.",
      "en": "Monetary items are translated using the closing rate at the reporting date."
    },
    "reference": "IAS 21 — closing rate",
    "difficulty": "intermediate",
    "examDomain": "Monetary items"
  },
  {
    "id": "ifrs-p3-ias21-04",
    "track": "IFRS",
    "topic": "IAS 21 — Non-monetary historical cost",
    "question": {
      "ar": "كيف يترجم بند غير نقدي مقاس بالتكلفة التاريخية؟",
      "en": "How is a non-monetary item measured at historical cost translated?"
    },
    "choices": {
      "ar": [
        "بسعر تاريخ المعاملة",
        "بسعر الإقفال دائماً",
        "بمتوسط الشهر التالي",
        "لا يعترف به"
      ],
      "en": [
        "Rate at transaction date",
        "Always closing rate",
        "Next-month average",
        "Not recognised"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يبقى البند المرتبط بالتكلفة التاريخية مترجماً بسعر تاريخ المعاملة.",
      "en": "A non-monetary item at historical cost uses the exchange rate at the transaction date."
    },
    "reference": "IAS 21 — non-monetary items",
    "difficulty": "intermediate",
    "examDomain": "Non-monetary historical cost"
  },
  {
    "id": "ifrs-p3-ias21-05",
    "track": "IFRS",
    "topic": "IAS 21 — Exchange differences",
    "question": {
      "ar": "أين تعترف عادةً فروق الصرف على البنود النقدية؟",
      "en": "Where are exchange differences on monetary items generally recognised?"
    },
    "choices": {
      "ar": [
        "الربح أو الخسارة، مع وجود استثناءات محددة",
        "المخزون دائماً",
        "رأس المال فقط",
        "لا تعترف"
      ],
      "en": [
        "Profit or loss, subject to specified exceptions",
        "Always inventory",
        "Capital only",
        "Not recognised"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "القاعدة العامة هي الربح أو الخسارة مع استثناءات مثل بعض فروق صافي الاستثمار.",
      "en": "The general rule is profit or loss, subject to exceptions such as certain net-investment differences."
    },
    "reference": "IAS 21 — exchange differences",
    "difficulty": "intermediate",
    "examDomain": "Exchange differences"
  },
  {
    "id": "ifrs-p3-ias21-06",
    "track": "IFRS",
    "topic": "IAS 21 — Foreign operations",
    "question": {
      "ar": "أين تظهر فروق ترجمة عملية أجنبية عند إعداد قوائم المجموعة عادةً؟",
      "en": "Where are translation differences for a foreign operation generally presented in group financial statements?"
    },
    "choices": {
      "ar": [
        "OCI حتى التخلص وفق المتطلبات",
        "الإيراد",
        "المخزون",
        "المصروفات الإدارية فقط"
      ],
      "en": [
        "OCI until disposal as required",
        "Revenue",
        "Inventory",
        "Administrative expense only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "فروق ترجمة العملية الأجنبية تراكم عادةً في OCI ضمن مكون مستقل من حقوق الملكية حتى التصرف وفق المتطلبات.",
      "en": "Foreign-operation translation differences are generally accumulated in OCI/equity until disposal under the requirements."
    },
    "reference": "IAS 21 — foreign operations",
    "difficulty": "hard",
    "examDomain": "Foreign operations"
  },
  {
    "id": "ifrs-p3-ias21-07",
    "track": "IFRS",
    "topic": "IAS 21 — Presentation currency",
    "question": {
      "ar": "هل يمكن أن تختلف عملة العرض عن العملة الوظيفية؟",
      "en": "Can presentation currency differ from functional currency?"
    },
    "choices": {
      "ar": [
        "نعم",
        "لا أبداً",
        "فقط للبنوك",
        "فقط إذا كانت الدولار"
      ],
      "en": [
        "Yes",
        "Never",
        "Only for banks",
        "Only if USD"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يمكن عرض القوائم بعملة مختلفة بعد تطبيق قواعد الترجمة المناسبة.",
      "en": "Financial statements may be presented in another currency after applying the relevant translation rules."
    },
    "reference": "IAS 21 — presentation currency",
    "difficulty": "hard",
    "examDomain": "Presentation currency"
  },
  {
    "id": "ifrs-p3-ias21-08",
    "track": "IFRS",
    "topic": "IAS 21 — Rate approximation",
    "question": {
      "ar": "متى قد يكون استخدام متوسط سعر الصرف غير مناسب؟",
      "en": "When may an average exchange rate be inappropriate?"
    },
    "choices": {
      "ar": [
        "عندما تتذبذب الأسعار بشكل كبير",
        "عندما لا توجد معاملات",
        "دائماً غير مناسب",
        "دائماً مناسب"
      ],
      "en": [
        "When exchange rates fluctuate significantly",
        "When there are no transactions",
        "Always inappropriate",
        "Always appropriate"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "المتوسط تقريب عملي فقط إذا كان يقارب أسعار التواريخ الفعلية؛ التقلب الكبير قد يجعله غير مناسب.",
      "en": "An average is only a practical approximation when it approximates actual transaction-date rates; significant fluctuation can make it inappropriate."
    },
    "reference": "IAS 21 — practical approximation",
    "difficulty": "hard",
    "examDomain": "Rate approximation"
  },
  {
    "id": "ifrs-p3-ias24-01",
    "track": "IFRS",
    "topic": "IAS 24 — Purpose",
    "question": {
      "ar": "ما الهدف الأساسي من IAS 24؟",
      "en": "What is the main purpose of IAS 24?"
    },
    "choices": {
      "ar": [
        "إظهار أثر العلاقات والمعاملات مع الأطراف ذات العلاقة على القوائم",
        "حظر كل المعاملات",
        "تحديد ضريبة الدخل",
        "قياس المخزون"
      ],
      "en": [
        "Show effects of related-party relationships and transactions on financial statements",
        "Ban all transactions",
        "Determine income tax",
        "Measure inventory"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الهدف هو الشفافية بشأن العلاقات والمعاملات والأرصدة التي قد تتأثر بعلاقة الأطراف.",
      "en": "The aim is transparency about relationships, transactions and balances that may be influenced by related-party relationships."
    },
    "reference": "IAS 24 — objective",
    "difficulty": "easy",
    "examDomain": "Purpose"
  },
  {
    "id": "ifrs-p3-ias24-02",
    "track": "IFRS",
    "topic": "IAS 24 — Key management",
    "question": {
      "ar": "هل أفراد الإدارة العليا الرئيسيون قد يكونون أطرافاً ذات علاقة؟",
      "en": "Can key management personnel be related parties?"
    },
    "choices": {
      "ar": [
        "نعم",
        "لا",
        "فقط المراجع الخارجي",
        "فقط المورد"
      ],
      "en": [
        "Yes",
        "No",
        "Only external auditor",
        "Only supplier"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الإدارة العليا الرئيسية وأفراد أسرهم المقربون يدخلون ضمن تعريفات ذات صلة وفق المعيار.",
      "en": "Key management personnel and close family members are within relevant related-party definitions."
    },
    "reference": "IAS 24 — related parties",
    "difficulty": "easy",
    "examDomain": "Key management"
  },
  {
    "id": "ifrs-p3-ias24-03",
    "track": "IFRS",
    "topic": "IAS 24 — Parent subsidiary",
    "question": {
      "ar": "هل العلاقة بين الشركة الأم والتابعة تعد علاقة طرف ذي علاقة حتى بدون معاملات خلال السنة؟",
      "en": "Is a parent-subsidiary relationship related-party even with no transactions during the year?"
    },
    "choices": {
      "ar": [
        "نعم",
        "لا",
        "فقط إذا حدث بيع",
        "فقط إذا كان هناك قرض"
      ],
      "en": [
        "Yes",
        "No",
        "Only if there was a sale",
        "Only if there was a loan"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "العلاقة ذاتها مهمة، ويطلب المعيار الإفصاح عن بعض علاقات السيطرة حتى بدون معاملات.",
      "en": "The relationship itself is relevant; the standard requires certain control relationships to be disclosed even without transactions."
    },
    "reference": "IAS 24 — relationships",
    "difficulty": "intermediate",
    "examDomain": "Parent subsidiary"
  },
  {
    "id": "ifrs-p3-ias24-04",
    "track": "IFRS",
    "topic": "IAS 24 — Transactions",
    "question": {
      "ar": "أي مثال يمثل معاملة طرف ذي علاقة؟",
      "en": "Which is an example of a related-party transaction?"
    },
    "choices": {
      "ar": [
        "قرض من الشركة للمدير الرئيسي",
        "شراء مجهول من متجر تجزئة عام",
        "دفع ضريبة",
        "إيداع بنكي عادي فقط"
      ],
      "en": [
        "Loan from the entity to key management",
        "Anonymous retail purchase",
        "Tax payment",
        "Ordinary bank deposit only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "القرض للإدارة الرئيسية مثال واضح لمعاملة مع طرف ذي علاقة.",
      "en": "A loan to key management is a clear example of a related-party transaction."
    },
    "reference": "IAS 24 — transactions",
    "difficulty": "intermediate",
    "examDomain": "Transactions"
  },
  {
    "id": "ifrs-p3-ias24-05",
    "track": "IFRS",
    "topic": "IAS 24 — Disclosures",
    "question": {
      "ar": "ما الذي يطلب الإفصاح عنه بشأن معاملات الأطراف ذات العلاقة المهمة؟",
      "en": "What is generally disclosed about material related-party transactions?"
    },
    "choices": {
      "ar": [
        "طبيعة العلاقة والمعاملات والأرصدة والمعلومات اللازمة لفهم أثرها",
        "اسم كل موظف",
        "كل فاتورة في الشركة",
        "لا شيء"
      ],
      "en": [
        "Nature of relationship, transactions, balances and information needed to understand their effect",
        "Every employee name",
        "Every company invoice",
        "Nothing"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الإفصاح يركز على طبيعة العلاقة وحجم المعاملات والأرصدة والشروط المهمة.",
      "en": "Disclosure focuses on relationship nature, transactions, balances and relevant terms."
    },
    "reference": "IAS 24 — disclosures",
    "difficulty": "intermediate",
    "examDomain": "Disclosures"
  },
  {
    "id": "ifrs-p3-ias24-06",
    "track": "IFRS",
    "topic": "IAS 24 — Compensation",
    "question": {
      "ar": "كيف يعالج تعويض الإدارة العليا الرئيسية في الإفصاح؟",
      "en": "How is key management compensation treated for disclosure?"
    },
    "choices": {
      "ar": [
        "يفصح عنه ضمن فئات محددة",
        "يحظر الإفصاح عنه",
        "يدمج مع المخزون",
        "يحول إلى أصل"
      ],
      "en": [
        "Disclosed within specified categories",
        "Disclosure prohibited",
        "Combined with inventory",
        "Converted to an asset"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يطلب IAS 24 إفصاحات عن تعويض الإدارة العليا الرئيسية حسب الفئات المطلوبة.",
      "en": "IAS 24 requires disclosure of key management personnel compensation by specified categories."
    },
    "reference": "IAS 24 — key management compensation",
    "difficulty": "hard",
    "examDomain": "Compensation"
  },
  {
    "id": "ifrs-p3-ias24-07",
    "track": "IFRS",
    "topic": "IAS 24 — Arm's length",
    "question": {
      "ar": "هل يجوز وصف معاملة طرف ذي علاقة بأنها تمت على أساس تجاري بحت دون دليل يدعم ذلك؟",
      "en": "Can a related-party transaction be described as arm's length without supporting evidence?"
    },
    "choices": {
      "ar": [
        "لا ينبغي ذلك دون إمكانية إثبات الشروط",
        "نعم دائماً",
        "يجب ذلك دائماً",
        "فقط إذا كانت نقداً"
      ],
      "en": [
        "It should not be stated unless terms can be substantiated",
        "Always yes",
        "Always required",
        "Only if cash"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الادعاء بأن الشروط تعادل معاملات مستقلة يحتاج إلى إمكانية إثباته.",
      "en": "A statement that terms are equivalent to arm's-length transactions requires substantiation."
    },
    "reference": "IAS 24 — arm's length disclosures",
    "difficulty": "hard",
    "examDomain": "Arm's length"
  },
  {
    "id": "ifrs-p3-ias24-08",
    "track": "IFRS",
    "topic": "IAS 24 — Close family",
    "question": {
      "ar": "لماذا تشمل بعض تعريفات الطرف ذي العلاقة أفراد الأسرة المقربين؟",
      "en": "Why do related-party definitions include close family members?"
    },
    "choices": {
      "ar": [
        "لأنهم قد يؤثرون أو يتأثرون بالشخص في تعاملاته مع المنشأة",
        "لأنهم موظفون دائماً",
        "لأنهم مساهمون دائماً",
        "لأغراض ضريبة القيمة المضافة"
      ],
      "en": [
        "Because they may influence or be influenced by the person in dealings with the entity",
        "Because they are always employees",
        "Because they are always shareholders",
        "For VAT purposes"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "المعيار ينظر إلى القدرة على التأثير الفعلي أو المحتمل في التعاملات مع المنشأة.",
      "en": "The standard considers the ability to influence, or be influenced by, the person in dealings with the entity."
    },
    "reference": "IAS 24 — close family",
    "difficulty": "hard",
    "examDomain": "Close family"
  },
  {
    "id": "ifrs-p3-ias36-01",
    "track": "IFRS",
    "topic": "IAS 36 — Impairment indicators",
    "question": {
      "ar": "ماذا تفعل المنشأة في كل تاريخ تقرير بالنسبة لمؤشرات الانخفاض؟",
      "en": "What does an entity do at each reporting date regarding impairment indicators?"
    },
    "choices": {
      "ar": [
        "تقيم ما إذا كانت توجد مؤشرات انخفاض",
        "تعيد تقييم كل أصل للقيمة العادلة",
        "تشطب كل أصل قديم",
        "لا تفعل شيئاً"
      ],
      "en": [
        "Assess whether impairment indicators exist",
        "Revalue every asset to fair value",
        "Write off every old asset",
        "Do nothing"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يجب تقييم وجود مؤشرات انخفاض في كل تاريخ تقرير، مع اختبارات سنوية لبعض الأصول بغض النظر عن المؤشرات.",
      "en": "Indicators are assessed at each reporting date, while certain assets require annual testing regardless of indicators."
    },
    "reference": "IAS 36 — indicators",
    "difficulty": "easy",
    "examDomain": "Impairment indicators"
  },
  {
    "id": "ifrs-p3-ias36-02",
    "track": "IFRS",
    "topic": "IAS 36 — Recoverable amount",
    "question": {
      "ar": "ما القيمة القابلة للاسترداد؟",
      "en": "What is recoverable amount?"
    },
    "choices": {
      "ar": [
        "الأعلى من القيمة الاستخدامية والقيمة العادلة ناقص تكاليف الاستبعاد",
        "الأقل منهما",
        "القيمة الدفترية",
        "التكلفة التاريخية"
      ],
      "en": [
        "Higher of value in use and fair value less costs of disposal",
        "Lower of the two",
        "Carrying amount",
        "Historical cost"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "القيمة القابلة للاسترداد هي الأعلى بين المقياسين.",
      "en": "Recoverable amount is the higher of the two measures."
    },
    "reference": "IAS 36 — recoverable amount",
    "difficulty": "easy",
    "examDomain": "Recoverable amount"
  },
  {
    "id": "ifrs-p3-ias36-03",
    "track": "IFRS",
    "topic": "IAS 36 — Impairment loss",
    "question": {
      "ar": "متى تثبت خسارة انخفاض؟",
      "en": "When is an impairment loss recognised?"
    },
    "choices": {
      "ar": [
        "عندما تتجاوز القيمة الدفترية القيمة القابلة للاسترداد",
        "عندما تقل التكلفة عن القيمة العادلة",
        "عند شراء الأصل",
        "عند دفع المورد"
      ],
      "en": [
        "When carrying amount exceeds recoverable amount",
        "When cost is below fair value",
        "On acquisition",
        "When supplier is paid"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الخسارة تساوي الزيادة في القيمة الدفترية عن القيمة القابلة للاسترداد.",
      "en": "The loss is the excess of carrying amount over recoverable amount."
    },
    "reference": "IAS 36 — impairment loss",
    "difficulty": "intermediate",
    "examDomain": "Impairment loss"
  },
  {
    "id": "ifrs-p3-ias36-04",
    "track": "IFRS",
    "topic": "IAS 36 — CGU",
    "question": {
      "ar": "متى يستخدم مفهوم الوحدة المولدة للنقد؟",
      "en": "When is a cash-generating unit used?"
    },
    "choices": {
      "ar": [
        "عندما لا يمكن تقدير القيمة القابلة للاسترداد للأصل منفرداً بشكل مستقل",
        "لكل مخزون",
        "فقط للنقد",
        "فقط للضرائب"
      ],
      "en": [
        "When recoverable amount cannot be determined independently for an individual asset",
        "For every inventory item",
        "Only for cash",
        "Only for tax"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يختبر الأصل ضمن أصغر مجموعة أصول تولد تدفقات نقدية مستقلة نسبياً عند الحاجة.",
      "en": "The asset is tested within the smallest group generating largely independent cash inflows when needed."
    },
    "reference": "IAS 36 — CGUs",
    "difficulty": "intermediate",
    "examDomain": "CGU"
  },
  {
    "id": "ifrs-p3-ias36-05",
    "track": "IFRS",
    "topic": "IAS 36 — Goodwill",
    "question": {
      "ar": "كم مرة على الأقل يختبر انخفاض قيمة الشهرة؟",
      "en": "How often is goodwill tested for impairment at minimum?"
    },
    "choices": {
      "ar": [
        "سنوياً، وكذلك عند وجود مؤشر",
        "كل خمس سنوات",
        "عند البيع فقط",
        "لا تختبر"
      ],
      "en": [
        "Annually and when an indicator exists",
        "Every five years",
        "Only on disposal",
        "Never"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الشهرة تخضع لاختبار سنوي للانخفاض إضافة إلى الاختبار عند وجود مؤشر.",
      "en": "Goodwill is tested annually and additionally when impairment indicators exist."
    },
    "reference": "IAS 36 — goodwill",
    "difficulty": "intermediate",
    "examDomain": "Goodwill"
  },
  {
    "id": "ifrs-p3-ias36-06",
    "track": "IFRS",
    "topic": "IAS 36 — Reversal",
    "question": {
      "ar": "هل يجوز عكس خسارة انخفاض سابقة للشهرة؟",
      "en": "Can a previously recognised impairment loss for goodwill be reversed?"
    },
    "choices": {
      "ar": [
        "لا",
        "نعم دائماً",
        "فقط خلال سنة",
        "فقط إذا زادت المبيعات"
      ],
      "en": [
        "No",
        "Always",
        "Only within one year",
        "Only if sales increase"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "خسارة انخفاض الشهرة لا تُعكس في فترات لاحقة.",
      "en": "An impairment loss recognised for goodwill is not reversed in later periods."
    },
    "reference": "IAS 36 — goodwill reversal",
    "difficulty": "hard",
    "examDomain": "Reversal"
  },
  {
    "id": "ifrs-p3-ias36-07",
    "track": "IFRS",
    "topic": "IAS 36 — Value in use",
    "question": {
      "ar": "على ماذا تعتمد القيمة الاستخدامية؟",
      "en": "What does value in use depend on?"
    },
    "choices": {
      "ar": [
        "القيمة الحالية للتدفقات النقدية المستقبلية المتوقعة من الأصل أو CGU",
        "سعر الشراء فقط",
        "سعر السهم فقط",
        "تكلفة الاستبدال دائماً"
      ],
      "en": [
        "Present value of future cash flows expected from the asset or CGU",
        "Purchase price only",
        "Share price only",
        "Always replacement cost"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "القيمة الاستخدامية مفهوم قيمة حالية يعتمد على التدفقات النقدية المستقبلية المتوقعة.",
      "en": "Value in use is a present-value concept based on expected future cash flows."
    },
    "reference": "IAS 36 — value in use",
    "difficulty": "hard",
    "examDomain": "Value in use"
  },
  {
    "id": "ifrs-p3-ias36-08",
    "track": "IFRS",
    "topic": "IAS 36 — Allocation",
    "question": {
      "ar": "عند انخفاض CGU تحتوي شهرة، أي أصل يخفض أولاً عادةً؟",
      "en": "When a CGU containing goodwill is impaired, which balance is generally reduced first?"
    },
    "choices": {
      "ar": [
        "الشهرة المخصصة للوحدة",
        "النقد",
        "الذمم دائماً",
        "رأس المال"
      ],
      "en": [
        "Goodwill allocated to the unit",
        "Cash",
        "Receivables always",
        "Share capital"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تخصص خسارة الانخفاض أولاً لتخفيض الشهرة ثم لباقي أصول الوحدة وفق القواعد.",
      "en": "The impairment loss is allocated first to goodwill, then to other CGU assets under the rules."
    },
    "reference": "IAS 36 — allocation",
    "difficulty": "hard",
    "examDomain": "Allocation"
  },
  {
    "id": "ifrs-p3-ias37-01",
    "track": "IFRS",
    "topic": "IAS 37 — Provision criteria",
    "question": {
      "ar": "ما أحد شروط الاعتراف بالمخصص؟",
      "en": "What is one condition for recognising a provision?"
    },
    "choices": {
      "ar": [
        "وجود التزام حالي نتيجة حدث سابق",
        "خطة إدارة مستقبلية فقط",
        "توقع خسارة تشغيلية",
        "رغبة في تكوين احتياطي"
      ],
      "en": [
        "Present obligation from a past event",
        "Management plan only",
        "Expected future operating loss",
        "Desire to create a reserve"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "المخصص يحتاج التزاماً حالياً من حدث سابق، مع احتمال تدفق موارد وإمكانية تقدير موثوق.",
      "en": "A provision requires a present obligation from a past event, probable outflow and reliable estimate."
    },
    "reference": "IAS 37 — recognition",
    "difficulty": "easy",
    "examDomain": "Provision criteria"
  },
  {
    "id": "ifrs-p3-ias37-02",
    "track": "IFRS",
    "topic": "IAS 37 — Contingent liability",
    "question": {
      "ar": "إذا كان الالتزام المحتمل يعتمد على حدث مستقبلي غير مؤكد وليس التزاماً حالياً مثبتاً، فما التصنيف الشائع؟",
      "en": "If a possible obligation depends on an uncertain future event and no present obligation is established, what is the common classification?"
    },
    "choices": {
      "ar": [
        "التزام محتمل",
        "مخصص مؤكد",
        "أصل ثابت",
        "إيراد"
      ],
      "en": [
        "Contingent liability",
        "Certain provision",
        "Fixed asset",
        "Revenue"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "هذا يتوافق عادةً مع تعريف الالتزام المحتمل ويخضع للإفصاح حسب احتمال التدفق.",
      "en": "This generally fits a contingent liability and disclosure depends on likelihood of outflow."
    },
    "reference": "IAS 37 — contingent liabilities",
    "difficulty": "easy",
    "examDomain": "Contingent liability"
  },
  {
    "id": "ifrs-p3-ias37-03",
    "track": "IFRS",
    "topic": "IAS 37 — Measurement",
    "question": {
      "ar": "كيف يقاس المخصص؟",
      "en": "How is a provision measured?"
    },
    "choices": {
      "ar": [
        "أفضل تقدير للنفقات اللازمة لتسوية الالتزام الحالي",
        "أعلى مبلغ ممكن دائماً",
        "صفر",
        "متوسط الإيرادات"
      ],
      "en": [
        "Best estimate of expenditure required to settle the present obligation",
        "Always highest possible amount",
        "Zero",
        "Average revenue"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "القياس يعتمد على أفضل تقدير في تاريخ التقرير.",
      "en": "Measurement is based on the best estimate at the reporting date."
    },
    "reference": "IAS 37 — measurement",
    "difficulty": "intermediate",
    "examDomain": "Measurement"
  },
  {
    "id": "ifrs-p3-ias37-04",
    "track": "IFRS",
    "topic": "IAS 37 — Discounting",
    "question": {
      "ar": "متى يستخدم الخصم في قياس المخصص؟",
      "en": "When is discounting used in measuring a provision?"
    },
    "choices": {
      "ar": [
        "عندما يكون أثر القيمة الزمنية للنقود جوهرياً",
        "دائماً",
        "أبداً",
        "فقط للمخزون"
      ],
      "en": [
        "When the time value of money effect is material",
        "Always",
        "Never",
        "Only for inventory"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "إذا كان الأثر جوهرياً يستخدم القيمة الحالية للنفقات المتوقعة.",
      "en": "If the effect is material, the present value of expected expenditures is used."
    },
    "reference": "IAS 37 — discounting",
    "difficulty": "intermediate",
    "examDomain": "Discounting"
  },
  {
    "id": "ifrs-p3-ias37-05",
    "track": "IFRS",
    "topic": "IAS 37 — Future operating losses",
    "question": {
      "ar": "هل يعترف بمخصص لخسائر تشغيل مستقبلية متوقعة فقط؟",
      "en": "Is a provision recognised solely for expected future operating losses?"
    },
    "choices": {
      "ar": [
        "لا",
        "نعم دائماً",
        "فقط نصف المبلغ",
        "فقط إذا كانت نقدية"
      ],
      "en": [
        "No",
        "Always",
        "Only half",
        "Only if cash"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "خسائر التشغيل المستقبلية لا تمثل التزاماً حالياً ناتجاً عن حدث سابق.",
      "en": "Future operating losses do not represent a present obligation from a past event."
    },
    "reference": "IAS 37 — future operating losses",
    "difficulty": "intermediate",
    "examDomain": "Future operating losses"
  },
  {
    "id": "ifrs-p3-ias37-06",
    "track": "IFRS",
    "topic": "IAS 37 — Onerous contracts",
    "question": {
      "ar": "متى يصبح العقد مثقلاً بالتكاليف؟",
      "en": "When is a contract onerous?"
    },
    "choices": {
      "ar": [
        "عندما تتجاوز التكاليف التي لا يمكن تجنبها المنافع الاقتصادية المتوقعة",
        "عندما يكون طويلاً",
        "عندما يكون مع طرف أجنبي",
        "عند توقيعه"
      ],
      "en": [
        "When unavoidable costs exceed expected economic benefits",
        "When it is long",
        "When counterparty is foreign",
        "On signing"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "العقد المثقل بالتكاليف يخلق التزاماً قد يتطلب مخصصاً وفق المعيار.",
      "en": "An onerous contract has unavoidable costs exceeding expected benefits and may require a provision."
    },
    "reference": "IAS 37 — onerous contracts",
    "difficulty": "hard",
    "examDomain": "Onerous contracts"
  },
  {
    "id": "ifrs-p3-ias37-07",
    "track": "IFRS",
    "topic": "IAS 37 — Restructuring",
    "question": {
      "ar": "هل إعلان خطة داخلية غير معلنة يكفي عادةً لإنشاء التزام إعادة هيكلة؟",
      "en": "Does an unannounced internal restructuring plan normally create a restructuring obligation?"
    },
    "choices": {
      "ar": [
        "لا",
        "نعم دائماً",
        "فقط إذا كانت مكتوبة",
        "فقط إذا وافق المدير المالي"
      ],
      "en": [
        "No",
        "Always",
        "Only if written",
        "Only if CFO approves"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يلزم وجود التزام بنّاء أو قانوني وفق شروط المعيار؛ خطة داخلية وحدها لا تكفي.",
      "en": "A constructive or legal obligation must meet the standard's conditions; an internal plan alone is insufficient."
    },
    "reference": "IAS 37 — restructuring",
    "difficulty": "hard",
    "examDomain": "Restructuring"
  },
  {
    "id": "ifrs-p3-ias37-08",
    "track": "IFRS",
    "topic": "IAS 37 — Reimbursement",
    "question": {
      "ar": "إذا كان من شبه المؤكد استلام تعويض من طرف ثالث عن إنفاق مخصص، كيف يعالج؟",
      "en": "If reimbursement by a third party is virtually certain for expenditure covered by a provision, how is it treated?"
    },
    "choices": {
      "ar": [
        "يعترف بأصل منفصل ضمن الحدود المطلوبة",
        "يخفض المخصص دائماً مباشرةً",
        "يتجاهل",
        "يعترف بإيراد مبيعات"
      ],
      "en": [
        "Recognise a separate asset within the required limits",
        "Always net directly against provision",
        "Ignore it",
        "Recognise sales revenue"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يعترف بالتعويض كأصل منفصل عندما يكون شبه مؤكد، ولا يتجاوز مبلغ المخصص المرتبط.",
      "en": "The reimbursement is recognised as a separate asset when virtually certain and is capped by the related provision."
    },
    "reference": "IAS 37 — reimbursements",
    "difficulty": "hard",
    "examDomain": "Reimbursement"
  },
  {
    "id": "ifrs-p3-ifrs9-01",
    "track": "IFRS",
    "topic": "IFRS 9 — Classification",
    "question": {
      "ar": "ما عاملان أساسيان لتصنيف الأصول المالية؟",
      "en": "What are two key factors for classifying financial assets?"
    },
    "choices": {
      "ar": [
        "نموذج الأعمال وخصائص التدفقات النقدية التعاقدية",
        "حجم الشركة والدولة",
        "العمر وعدد الموظفين",
        "رأي المراجع فقط"
      ],
      "en": [
        "Business model and contractual cash-flow characteristics",
        "Company size and country",
        "Age and headcount",
        "Auditor opinion only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "التصنيف يعتمد بصورة أساسية على نموذج الأعمال واختبار خصائص التدفقات النقدية التعاقدية.",
      "en": "Classification is primarily based on the business model and contractual cash-flow characteristics."
    },
    "reference": "IFRS 9 — classification",
    "difficulty": "easy",
    "examDomain": "Classification"
  },
  {
    "id": "ifrs-p3-ifrs9-02",
    "track": "IFRS",
    "topic": "IFRS 9 — Amortised cost",
    "question": {
      "ar": "متى قد يقاس أصل دين بالتكلفة المطفأة؟",
      "en": "When may a debt asset be measured at amortised cost?"
    },
    "choices": {
      "ar": [
        "عندما يحتفظ به لتحصيل تدفقات تعاقدية تستوفي SPPI",
        "عندما يحتفظ به للمضاربة فقط",
        "كل الأسهم",
        "كل المشتقات"
      ],
      "en": [
        "When held to collect contractual cash flows that meet SPPI",
        "When held only for trading",
        "All equities",
        "All derivatives"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "التكلفة المطفأة تتطلب نموذج أعمال الاحتفاظ للتحصيل وتدفقات SPPI.",
      "en": "Amortised cost requires a hold-to-collect business model and SPPI cash flows."
    },
    "reference": "IFRS 9 — amortised cost",
    "difficulty": "easy",
    "examDomain": "Amortised cost"
  },
  {
    "id": "ifrs-p3-ifrs9-03",
    "track": "IFRS",
    "topic": "IFRS 9 — SPPI",
    "question": {
      "ar": "ماذا يعني SPPI بصورة مبسطة؟",
      "en": "What does SPPI broadly mean?"
    },
    "choices": {
      "ar": [
        "مدفوعات أصل الدين والفائدة فقط",
        "تدفقات مرتبطة بسعر السهم",
        "أرباح تشغيلية",
        "تدفقات ضريبية"
      ],
      "en": [
        "Solely payments of principal and interest",
        "Cash flows linked to equity prices",
        "Operating profits",
        "Tax flows"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "اختبار SPPI يفحص ما إذا كانت التدفقات التعاقدية تمثل أصل الدين والفائدة بصورة مناسبة.",
      "en": "SPPI assesses whether contractual cash flows are solely payments of principal and interest."
    },
    "reference": "IFRS 9 — SPPI",
    "difficulty": "intermediate",
    "examDomain": "SPPI"
  },
  {
    "id": "ifrs-p3-ifrs9-04",
    "track": "IFRS",
    "topic": "IFRS 9 — ECL stages",
    "question": {
      "ar": "في نموذج ECL العام، متى تنتقل الأداة عادةً من خسائر 12 شهراً إلى خسائر مدى العمر؟",
      "en": "In the general ECL model, when does an instrument generally move from 12-month ECL to lifetime ECL?"
    },
    "choices": {
      "ar": [
        "عند زيادة جوهرية في مخاطر الائتمان منذ الاعتراف الأولي",
        "بعد مرور سنة تلقائياً",
        "عند ارتفاع سعر السهم",
        "عند تغيير العملة"
      ],
      "en": [
        "When credit risk has increased significantly since initial recognition",
        "Automatically after one year",
        "When share price rises",
        "When currency changes"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الزيادة الجوهرية في مخاطر الائتمان تؤدي عادةً إلى قياس ECL لمدى العمر.",
      "en": "A significant increase in credit risk generally leads to lifetime ECL measurement."
    },
    "reference": "IFRS 9 — ECL",
    "difficulty": "intermediate",
    "examDomain": "ECL stages"
  },
  {
    "id": "ifrs-p3-ifrs9-05",
    "track": "IFRS",
    "topic": "IFRS 9 — Trade receivables",
    "question": {
      "ar": "ما النهج الشائع المسموح به لذمم تجارية معينة؟",
      "en": "What common approach is permitted for certain trade receivables?"
    },
    "choices": {
      "ar": [
        "النهج المبسط بقياس خسائر مدى العمر",
        "عدم تكوين مخصص أبداً",
        "12 شهراً فقط دائماً",
        "قياس بالتكلفة التاريخية دون مخصص"
      ],
      "en": [
        "Simplified approach using lifetime ECL",
        "Never recognise an allowance",
        "Always 12-month only",
        "Historical cost with no allowance"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "النهج المبسط يسمح بقياس خسائر مدى العمر دون تتبع تغير مخاطر الائتمان لكل مرحلة لبعض الذمم.",
      "en": "The simplified approach permits lifetime ECL without tracking stage changes for certain receivables."
    },
    "reference": "IFRS 9 — simplified approach",
    "difficulty": "intermediate",
    "examDomain": "Trade receivables"
  },
  {
    "id": "ifrs-p3-ifrs9-06",
    "track": "IFRS",
    "topic": "IFRS 9 — FVOCI debt",
    "question": {
      "ar": "أي نموذج أعمال قد يؤدي مع SPPI إلى قياس أداة دين بـ FVOCI؟",
      "en": "Which business model may, together with SPPI, lead to FVOCI for a debt instrument?"
    },
    "choices": {
      "ar": [
        "الاحتفاظ للتحصيل والبيع",
        "المتاجرة فقط",
        "الاحتفاظ لتحصيل فقط حصراً",
        "لا يوجد"
      ],
      "en": [
        "Hold to collect and sell",
        "Trading only",
        "Only hold to collect",
        "None"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "نموذج الاحتفاظ للتحصيل والبيع مع استيفاء SPPI قد يؤدي إلى FVOCI.",
      "en": "A hold-to-collect-and-sell business model with SPPI may result in FVOCI."
    },
    "reference": "IFRS 9 — FVOCI debt",
    "difficulty": "hard",
    "examDomain": "FVOCI debt"
  },
  {
    "id": "ifrs-p3-ifrs9-07",
    "track": "IFRS",
    "topic": "IFRS 9 — Equity election",
    "question": {
      "ar": "بالنسبة لاستثمار في أداة حقوق ملكية غير محتفظ بها للمتاجرة، ما الاختيار الذي قد يتاح عند الاعتراف الأولي؟",
      "en": "For a non-trading equity investment, what election may be available at initial recognition?"
    },
    "choices": {
      "ar": [
        "عرض تغيرات القيمة العادلة في OCI بشكل غير قابل للإلغاء",
        "قياس بالتكلفة دائماً",
        "عدم الاعتراف بالقيمة العادلة",
        "تحويله إلى مخزون"
      ],
      "en": [
        "Irrevocable election to present fair-value changes in OCI",
        "Always measure at cost",
        "Do not recognise fair value",
        "Convert to inventory"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يمكن اختيار عرض تغييرات القيمة العادلة في OCI لبعض استثمارات حقوق الملكية غير المتداولة للمتاجرة.",
      "en": "An irrevocable FVOCI presentation election is available for certain non-trading equity investments."
    },
    "reference": "IFRS 9 — equity investments",
    "difficulty": "hard",
    "examDomain": "Equity election"
  },
  {
    "id": "ifrs-p3-ifrs9-08",
    "track": "IFRS",
    "topic": "IFRS 9 — Impairment scope",
    "question": {
      "ar": "هل يطبق نموذج ECL على الأصول المالية المقاسة بالتكلفة المطفأة؟",
      "en": "Does the ECL model apply to financial assets measured at amortised cost?"
    },
    "choices": {
      "ar": [
        "نعم",
        "لا أبداً",
        "فقط الأسهم",
        "فقط النقد"
      ],
      "en": [
        "Yes",
        "Never",
        "Only equities",
        "Only cash"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الأصول المالية بالتكلفة المطفأة ضمن نطاق متطلبات انخفاض القيمة في IFRS 9.",
      "en": "Financial assets at amortised cost are within IFRS 9 impairment requirements."
    },
    "reference": "IFRS 9 — impairment",
    "difficulty": "hard",
    "examDomain": "Impairment scope"
  },
  {
    "id": "ifrs-p3-ifrs15-01",
    "track": "IFRS",
    "topic": "IFRS 15 — Five-step model",
    "question": {
      "ar": "ما أول خطوة في نموذج IFRS 15؟",
      "en": "What is the first step in the IFRS 15 model?"
    },
    "choices": {
      "ar": [
        "تحديد العقد مع العميل",
        "تخصيص سعر المعاملة",
        "إثبات الإيراد",
        "تحديد الضريبة"
      ],
      "en": [
        "Identify the contract with a customer",
        "Allocate transaction price",
        "Recognise revenue",
        "Determine tax"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "النموذج يبدأ بتحديد عقد يستوفي معايير الاعتراف.",
      "en": "The model starts by identifying a contract that meets the recognition criteria."
    },
    "reference": "IFRS 15 — five-step model",
    "difficulty": "easy",
    "examDomain": "Five-step model"
  },
  {
    "id": "ifrs-p3-ifrs15-02",
    "track": "IFRS",
    "topic": "IFRS 15 — Performance obligations",
    "question": {
      "ar": "ما المقصود بالتزام الأداء بصورة مبسطة؟",
      "en": "What is a performance obligation in simple terms?"
    },
    "choices": {
      "ar": [
        "وعد بنقل سلعة أو خدمة مميزة للعميل",
        "وعد بدفع الضريبة",
        "فاتورة فقط",
        "تكلفة تمويل"
      ],
      "en": [
        "Promise to transfer a distinct good or service to a customer",
        "Promise to pay tax",
        "Invoice only",
        "Financing cost"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "التزام الأداء يمثل وعداً قابلاً للتحديد بنقل سلعة أو خدمة مميزة.",
      "en": "A performance obligation is an identifiable promise to transfer a distinct good or service."
    },
    "reference": "IFRS 15 — performance obligations",
    "difficulty": "easy",
    "examDomain": "Performance obligations"
  },
  {
    "id": "ifrs-p3-ifrs15-03",
    "track": "IFRS",
    "topic": "IFRS 15 — Transaction price",
    "question": {
      "ar": "ماذا يمثل سعر المعاملة؟",
      "en": "What does the transaction price represent?"
    },
    "choices": {
      "ar": [
        "المقابل الذي تتوقع المنشأة أن تستحقه مقابل نقل السلع أو الخدمات",
        "تكلفة الإنتاج فقط",
        "سعر القائمة دائماً",
        "الضريبة فقط"
      ],
      "en": [
        "Consideration the entity expects to be entitled to for transferring goods/services",
        "Production cost only",
        "Always list price",
        "Tax only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "سعر المعاملة يركز على المقابل المتوقع استحقاقه مقابل الأداء.",
      "en": "Transaction price focuses on expected consideration in exchange for performance."
    },
    "reference": "IFRS 15 — transaction price",
    "difficulty": "intermediate",
    "examDomain": "Transaction price"
  },
  {
    "id": "ifrs-p3-ifrs15-04",
    "track": "IFRS",
    "topic": "IFRS 15 — Variable consideration",
    "question": {
      "ar": "كيف يعالج المقابل المتغير؟",
      "en": "How is variable consideration treated?"
    },
    "choices": {
      "ar": [
        "يقدر مع تطبيق قيد لمنع انعكاس جوهري للإيراد",
        "يتجاهل دائماً",
        "يثبت أعلى مبلغ ممكن",
        "يثبت عند التحصيل فقط"
      ],
      "en": [
        "Estimate it subject to a constraint to avoid significant revenue reversal",
        "Always ignore it",
        "Recognise maximum possible amount",
        "Recognise only on cash collection"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يقدر المقابل المتغير ويقيد المبلغ المدرج عندما يلزم لتجنب انعكاس جوهري لاحق.",
      "en": "Variable consideration is estimated and constrained where necessary to avoid a significant later reversal."
    },
    "reference": "IFRS 15 — variable consideration",
    "difficulty": "intermediate",
    "examDomain": "Variable consideration"
  },
  {
    "id": "ifrs-p3-ifrs15-05",
    "track": "IFRS",
    "topic": "IFRS 15 — Allocation",
    "question": {
      "ar": "كيف يخصص سعر المعاملة على التزامات الأداء عادةً؟",
      "en": "How is transaction price generally allocated to performance obligations?"
    },
    "choices": {
      "ar": [
        "على أساس أسعار البيع المستقلة النسبية",
        "بالتساوي دائماً",
        "حسب التكلفة فقط",
        "حسب توقيت الفاتورة"
      ],
      "en": [
        "Based on relative stand-alone selling prices",
        "Always equally",
        "Based only on cost",
        "Based on invoice timing"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "القاعدة العامة هي استخدام أسعار البيع المستقلة النسبية.",
      "en": "The general rule is allocation based on relative stand-alone selling prices."
    },
    "reference": "IFRS 15 — allocation",
    "difficulty": "intermediate",
    "examDomain": "Allocation"
  },
  {
    "id": "ifrs-p3-ifrs15-06",
    "track": "IFRS",
    "topic": "IFRS 15 — Over time",
    "question": {
      "ar": "أي ظرف قد يؤدي للاعتراف بالإيراد على مدى الزمن؟",
      "en": "Which circumstance may lead to revenue recognition over time?"
    },
    "choices": {
      "ar": [
        "العميل يتلقى ويستهلك المنافع بالتزامن مع أداء المنشأة",
        "وجود فاتورة فقط",
        "الدفع مقدماً فقط",
        "مدة العقد أكثر من سنة فقط"
      ],
      "en": [
        "Customer simultaneously receives and consumes benefits as the entity performs",
        "Invoice exists only",
        "Advance payment only",
        "Contract longer than one year only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "أحد معايير الاعتراف على مدى الزمن هو تلقي واستهلاك المنافع بالتزامن مع الأداء.",
      "en": "One over-time criterion is simultaneous receipt and consumption of benefits as the entity performs."
    },
    "reference": "IFRS 15 — over time",
    "difficulty": "hard",
    "examDomain": "Over time"
  },
  {
    "id": "ifrs-p3-ifrs15-07",
    "track": "IFRS",
    "topic": "IFRS 15 — Point in time",
    "question": {
      "ar": "ما مؤشر مهم لتحديد انتقال السيطرة في نقطة زمنية؟",
      "en": "What is an important indicator of transfer of control at a point in time?"
    },
    "choices": {
      "ar": [
        "حق العميل الحالي في الأصل وقبول العميل بحسب الظروف",
        "تاريخ إعداد الميزانية فقط",
        "تاريخ دفع الضريبة",
        "تاريخ طلب الشراء فقط"
      ],
      "en": [
        "Customer's present rights to the asset and acceptance, depending on circumstances",
        "Balance-sheet date only",
        "Tax payment date",
        "Purchase-order date only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تقييم انتقال السيطرة يستخدم مجموعة مؤشرات مثل الحق في الدفع والملكية والحيازة والمخاطر والقبول.",
      "en": "Transfer of control is assessed using indicators such as rights to payment, title, possession, risks/rewards and acceptance."
    },
    "reference": "IFRS 15 — point in time",
    "difficulty": "hard",
    "examDomain": "Point in time"
  },
  {
    "id": "ifrs-p3-ifrs15-08",
    "track": "IFRS",
    "topic": "IFRS 15 — Contract assets liabilities",
    "question": {
      "ar": "إذا استلمت المنشأة مقابلاً قبل نقل السلعة أو الخدمة، ما الرصيد الشائع؟",
      "en": "If an entity receives consideration before transferring the promised good or service, what balance commonly arises?"
    },
    "choices": {
      "ar": [
        "التزام عقد",
        "أصل عقد",
        "مخزون",
        "شهرة"
      ],
      "en": [
        "Contract liability",
        "Contract asset",
        "Inventory",
        "Goodwill"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الدفع قبل الأداء ينشئ عادةً التزام عقد إلى أن يتم الوفاء بالالتزام.",
      "en": "Payment before performance generally creates a contract liability until the performance obligation is satisfied."
    },
    "reference": "IFRS 15 — contract liabilities",
    "difficulty": "hard",
    "examDomain": "Contract assets liabilities"
  },
  {
    "id": "ifrs-p3-ifrs16-01",
    "track": "IFRS",
    "topic": "IFRS 16 — Definition",
    "question": {
      "ar": "ما عنصر أساسي لوجود عقد إيجار؟",
      "en": "What is a key element of a lease?"
    },
    "choices": {
      "ar": [
        "حق السيطرة على استخدام أصل محدد لفترة مقابل عوض",
        "شراء أصل دائماً",
        "خدمة بدون أصل محدد",
        "دفع نقد فقط"
      ],
      "en": [
        "Right to control use of an identified asset for a period in exchange for consideration",
        "Always purchase an asset",
        "Service with no identified asset",
        "Cash payment only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الإيجار يتطلب أصلًا محدداً وحق السيطرة على استخدامه خلال فترة الاستخدام.",
      "en": "A lease requires an identified asset and the right to control its use during the period."
    },
    "reference": "IFRS 16 — definition",
    "difficulty": "easy",
    "examDomain": "Definition"
  },
  {
    "id": "ifrs-p3-ifrs16-02",
    "track": "IFRS",
    "topic": "IFRS 16 — Lease liability",
    "question": {
      "ar": "بماذا يقاس التزام الإيجار أولياً بصورة عامة؟",
      "en": "How is a lease liability generally initially measured?"
    },
    "choices": {
      "ar": [
        "القيمة الحالية لدفعات الإيجار غير المدفوعة",
        "إجمالي الدفعات دون خصم دائماً",
        "القيمة العادلة للعقار",
        "تكلفة الأصل المؤجر"
      ],
      "en": [
        "Present value of unpaid lease payments",
        "Always undiscounted total payments",
        "Fair value of property",
        "Cost of leased asset"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "التزام الإيجار يقاس بالقيمة الحالية للدفعات التي لم تدفع في تاريخ البدء.",
      "en": "The lease liability is measured at the present value of lease payments not paid at commencement."
    },
    "reference": "IFRS 16 — initial measurement",
    "difficulty": "easy",
    "examDomain": "Lease liability"
  },
  {
    "id": "ifrs-p3-ifrs16-03",
    "track": "IFRS",
    "topic": "IFRS 16 — ROU asset",
    "question": {
      "ar": "أي عنصر يدخل في القياس الأولي لأصل حق الاستخدام؟",
      "en": "Which item is included in initial measurement of a right-of-use asset?"
    },
    "choices": {
      "ar": [
        "القياس الأولي لالتزام الإيجار وتعديلات محددة",
        "الإيرادات المستقبلية",
        "ضريبة الدخل المؤجلة فقط",
        "قيمة الشهرة"
      ],
      "en": [
        "Initial lease liability plus specified adjustments",
        "Future revenue",
        "Deferred tax only",
        "Goodwill"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يبدأ أصل حق الاستخدام من التزام الإيجار مع إضافة/طرح دفعات وتكاليف والتزامات محددة.",
      "en": "The ROU asset starts with the lease liability adjusted for specified payments, costs and obligations."
    },
    "reference": "IFRS 16 — ROU asset",
    "difficulty": "intermediate",
    "examDomain": "ROU asset"
  },
  {
    "id": "ifrs-p3-ifrs16-04",
    "track": "IFRS",
    "topic": "IFRS 16 — Short-term exemption",
    "question": {
      "ar": "ما الحد الشائع لتعريف الإيجار قصير الأجل عند تاريخ البدء؟",
      "en": "What is the common maximum lease term for the short-term lease exemption at commencement?"
    },
    "choices": {
      "ar": [
        "12 شهراً أو أقل مع عدم وجود خيار شراء",
        "24 شهراً",
        "5 سنوات",
        "شهر واحد فقط"
      ],
      "en": [
        "12 months or less with no purchase option",
        "24 months",
        "5 years",
        "One month only"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الإيجار قصير الأجل يكون عادةً 12 شهراً أو أقل ولا يتضمن خيار شراء.",
      "en": "A short-term lease generally has a lease term of 12 months or less and contains no purchase option."
    },
    "reference": "IFRS 16 — short-term leases",
    "difficulty": "intermediate",
    "examDomain": "Short-term exemption"
  },
  {
    "id": "ifrs-p3-ifrs16-05",
    "track": "IFRS",
    "topic": "IFRS 16 — Subsequent liability",
    "question": {
      "ar": "ما الذي يزيد التزام الإيجار بعد الاعتراف الأولي؟",
      "en": "What increases the lease liability after initial recognition?"
    },
    "choices": {
      "ar": [
        "الفائدة على الرصيد",
        "الإهلاك فقط",
        "مصروف الإعلان",
        "توزيعات الأرباح"
      ],
      "en": [
        "Interest on the liability",
        "Depreciation only",
        "Advertising expense",
        "Dividends"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يزاد الالتزام بالفائدة ويخفض بالدفعات، مع إعادة القياس عند أحداث محددة.",
      "en": "The liability increases for interest and decreases for payments, with remeasurement in specified circumstances."
    },
    "reference": "IFRS 16 — subsequent measurement",
    "difficulty": "intermediate",
    "examDomain": "Subsequent liability"
  },
  {
    "id": "ifrs-p3-ifrs16-06",
    "track": "IFRS",
    "topic": "IFRS 16 — ROU depreciation",
    "question": {
      "ar": "كيف يعالج أصل حق الاستخدام بعد الاعتراف الأولي عادةً تحت نموذج التكلفة؟",
      "en": "How is a right-of-use asset generally treated subsequently under the cost model?"
    },
    "choices": {
      "ar": [
        "يستهلك وتختبر قيمته للانخفاض عند الحاجة",
        "لا يستهلك أبداً",
        "يقاس بالنقد",
        "يحذف مباشرة"
      ],
      "en": [
        "Depreciated and tested for impairment when required",
        "Never depreciated",
        "Measured as cash",
        "Immediately derecognised"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "أصل حق الاستخدام يخضع للإهلاك ومراجعة الانخفاض وفق المتطلبات ذات الصلة.",
      "en": "The ROU asset is depreciated and subject to impairment requirements."
    },
    "reference": "IFRS 16 — subsequent measurement",
    "difficulty": "hard",
    "examDomain": "ROU depreciation"
  },
  {
    "id": "ifrs-p3-ifrs16-07",
    "track": "IFRS",
    "topic": "IFRS 16 — Variable payments",
    "question": {
      "ar": "دفعات إيجار متغيرة تعتمد على مؤشر أو معدل، كيف تدخل القياس الأولي عادةً؟",
      "en": "How are variable lease payments depending on an index or rate generally included initially?"
    },
    "choices": {
      "ar": [
        "باستخدام المؤشر أو المعدل في تاريخ البدء",
        "تستبعد دائماً",
        "بسعر نهاية العقد",
        "بأعلى مؤشر تاريخي"
      ],
      "en": [
        "Using the index or rate at commencement",
        "Always excluded",
        "Using end-of-contract rate",
        "Using highest historical index"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "تدخل الدفعات المرتبطة بمؤشر أو معدل باستخدام مستوى المؤشر/المعدل في تاريخ البدء.",
      "en": "Index/rate-based variable payments use the index or rate at commencement for initial measurement."
    },
    "reference": "IFRS 16 — lease payments",
    "difficulty": "hard",
    "examDomain": "Variable payments"
  },
  {
    "id": "ifrs-p3-ifrs16-08",
    "track": "IFRS",
    "topic": "IFRS 16 — Lessee model",
    "question": {
      "ar": "ما الفرق الرئيسي عن المحاسبة القديمة للمستأجر في معظم العقود؟",
      "en": "What is a major change in lessee accounting for most leases?"
    },
    "choices": {
      "ar": [
        "إثبات أصل حق استخدام والتزام بدلاً من إبقاء معظم الإيجارات خارج الميزانية",
        "عدم إثبات أي التزام",
        "إثبات الإيراد",
        "تحويل الإيجار إلى مخزون"
      ],
      "en": [
        "Recognising an ROU asset and liability rather than keeping most leases off balance sheet",
        "Recognising no liability",
        "Recognising revenue",
        "Converting lease to inventory"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "نموذج المستأجر في IFRS 16 يعكس معظم عقود الإيجار في قائمة المركز المالي.",
      "en": "IFRS 16's lessee model brings most leases onto the statement of financial position."
    },
    "reference": "IFRS 16 — lessee accounting",
    "difficulty": "hard",
    "examDomain": "Lessee model"
  },
  {
    "id": "ifrs-p3-ifrs18-01",
    "track": "IFRS",
    "topic": "IFRS 18 — Effective date",
    "question": {
      "ar": "متى يصبح IFRS 18 إلزامياً للفترات السنوية وفق الإصدار الحالي؟",
      "en": "When does IFRS 18 become mandatory for annual periods under the current issuance?"
    },
    "choices": {
      "ar": [
        "1 يناير 2027",
        "1 يناير 2025",
        "1 يناير 2030",
        "لا يوجد تاريخ"
      ],
      "en": [
        "1 January 2027",
        "1 January 2025",
        "1 January 2030",
        "No date"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IFRS 18 يطبق للفترات السنوية التي تبدأ في أو بعد 1 يناير 2027 مع السماح بالتطبيق المبكر.",
      "en": "IFRS 18 applies for annual periods beginning on or after 1 January 2027, with earlier application permitted."
    },
    "reference": "IFRS 18 — effective date",
    "difficulty": "easy",
    "examDomain": "Effective date"
  },
  {
    "id": "ifrs-p3-ifrs18-02",
    "track": "IFRS",
    "topic": "IFRS 18 — Profit or loss categories",
    "question": {
      "ar": "أي فئة من الفئات الجديدة المحددة في قائمة الربح أو الخسارة؟",
      "en": "Which is one of the specified categories in profit or loss?"
    },
    "choices": {
      "ar": [
        "التشغيل",
        "المخزون",
        "رأس المال العامل",
        "الموازنة"
      ],
      "en": [
        "Operating",
        "Inventory",
        "Working capital",
        "Budget"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IFRS 18 يحدد فئات منها التشغيل والاستثمار والتمويل مع متطلبات خاصة لبعض المنشآت.",
      "en": "IFRS 18 specifies categories including operating, investing and financing, with special requirements for some entities."
    },
    "reference": "IFRS 18 — categories",
    "difficulty": "easy",
    "examDomain": "Profit or loss categories"
  },
  {
    "id": "ifrs-p3-ifrs18-03",
    "track": "IFRS",
    "topic": "IFRS 18 — Subtotals",
    "question": {
      "ar": "أي مجموع فرعي محدد يهدف IFRS 18 إلى عرضه؟",
      "en": "Which specified subtotal is introduced by IFRS 18?"
    },
    "choices": {
      "ar": [
        "الربح التشغيلي",
        "EBITDA إلزامي لكل المنشآت",
        "صافي المبيعات فقط",
        "رأس المال العامل"
      ],
      "en": [
        "Operating profit",
        "Mandatory EBITDA for all entities",
        "Net sales only",
        "Working capital"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "من أبرز المجاميع الفرعية المحددة الربح أو الخسارة التشغيلية.",
      "en": "A key specified subtotal is operating profit or loss."
    },
    "reference": "IFRS 18 — specified subtotals",
    "difficulty": "intermediate",
    "examDomain": "Subtotals"
  },
  {
    "id": "ifrs-p3-ifrs18-04",
    "track": "IFRS",
    "topic": "IFRS 18 — MPMs",
    "question": {
      "ar": "ما المقصود بمقاييس الأداء المحددة من الإدارة MPMs؟",
      "en": "What are management-defined performance measures (MPMs)?"
    },
    "choices": {
      "ar": [
        "مجاميع فرعية للأداء المالي تستخدمها الإدارة في الاتصالات العامة وتستوفي التعريف",
        "أي KPI داخلي",
        "كل نسبة مالية",
        "كل رقم في الميزانية"
      ],
      "en": [
        "Subtotals of financial performance used in public communications that meet the definition",
        "Any internal KPI",
        "Every financial ratio",
        "Every balance-sheet number"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "MPMs فئة محددة وليست كل مؤشر أداء داخلي أو تشغيلي.",
      "en": "MPMs are a defined category and do not include every internal or operating KPI."
    },
    "reference": "IFRS 18 — MPMs",
    "difficulty": "intermediate",
    "examDomain": "MPMs"
  },
  {
    "id": "ifrs-p3-ifrs18-05",
    "track": "IFRS",
    "topic": "IFRS 18 — MPM disclosures",
    "question": {
      "ar": "ما إفصاح مهم عن MPM؟",
      "en": "What is an important disclosure for an MPM?"
    },
    "choices": {
      "ar": [
        "تسوية إلى أقرب مجموع فرعي محدد في IFRS",
        "اسم الموظف الذي حسبه",
        "كود المورد",
        "رقم الحساب البنكي"
      ],
      "en": [
        "Reconciliation to the most directly comparable IFRS subtotal",
        "Name of employee who calculated it",
        "Supplier code",
        "Bank account number"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يطلب الإفصاح عن تسوية MPM إلى المجموع الفرعي الأكثر قابلية للمقارنة وفق IFRS مع معلومات أخرى.",
      "en": "Disclosure includes reconciliation of an MPM to the most directly comparable IFRS subtotal plus other information."
    },
    "reference": "IFRS 18 — MPM disclosures",
    "difficulty": "intermediate",
    "examDomain": "MPM disclosures"
  },
  {
    "id": "ifrs-p3-ifrs18-06",
    "track": "IFRS",
    "topic": "IFRS 18 — Aggregation",
    "question": {
      "ar": "ما الهدف من مبادئ التجميع والتفصيل في IFRS 18؟",
      "en": "What is the aim of aggregation and disaggregation principles in IFRS 18?"
    },
    "choices": {
      "ar": [
        "عرض معلومات مفيدة دون حجب بنود جوهرية بتجميع غير مناسب",
        "زيادة عدد الصفحات فقط",
        "إلغاء الإيضاحات",
        "منع كل التجميع"
      ],
      "en": [
        "Provide useful information without obscuring material items through inappropriate aggregation",
        "Only increase page count",
        "Eliminate notes",
        "Prevent all aggregation"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "المبدأ يسعى لتجميع البنود ذات الخصائص المشتركة وتفصيل البنود المختلفة عندما تكون المعلومات جوهرية.",
      "en": "The principles aim to aggregate items sharing characteristics and disaggregate dissimilar items where material."
    },
    "reference": "IFRS 18 — aggregation/disaggregation",
    "difficulty": "hard",
    "examDomain": "Aggregation"
  },
  {
    "id": "ifrs-p3-ifrs18-07",
    "track": "IFRS",
    "topic": "IFRS 18 — IAS 1 replacement",
    "question": {
      "ar": "أي معيار يحل IFRS 18 محل متطلباته الخاصة بالعرض والإفصاح الرئيسية؟",
      "en": "Which standard's main presentation and disclosure requirements are replaced by IFRS 18?"
    },
    "choices": {
      "ar": [
        "IAS 1",
        "IFRS 9",
        "IAS 2",
        "IFRS 16"
      ],
      "en": [
        "IAS 1",
        "IFRS 9",
        "IAS 2",
        "IFRS 16"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "IFRS 18 يحل محل IAS 1 في مجال العرض والإفصاح، مع نقل بعض متطلبات IAS 1 إلى معايير أخرى.",
      "en": "IFRS 18 replaces IAS 1 for presentation and disclosure, with some IAS 1 requirements moved to other standards."
    },
    "reference": "IFRS 18 — transition",
    "difficulty": "hard",
    "examDomain": "IAS 1 replacement"
  },
  {
    "id": "ifrs-p3-ifrs18-08",
    "track": "IFRS",
    "topic": "IFRS 18 — Operating category",
    "question": {
      "ar": "كيف تعمل فئة التشغيل بصورة عامة؟",
      "en": "How does the operating category generally work?"
    },
    "choices": {
      "ar": [
        "تعمل كفئة متبقية للدخل والمصروفات غير المصنفة في الفئات الأخرى، مع متطلبات خاصة",
        "تشمل النقد فقط",
        "تشمل كل التمويل فقط",
        "اختيارية بالكامل"
      ],
      "en": [
        "Generally acts as a residual category for income and expenses not classified elsewhere, subject to special requirements",
        "Includes cash only",
        "Includes all financing only",
        "Entirely optional"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "فئة التشغيل تمثل النشاط التشغيلي في العرض وتعمل بصورة عامة كفئة متبقية مع قواعد خاصة لبعض الكيانات.",
      "en": "The operating category generally acts as a residual category, subject to special requirements for certain entities."
    },
    "reference": "IFRS 18 — operating category",
    "difficulty": "hard",
    "examDomain": "Operating category"
  }
] satisfies ExamQuestion[];
