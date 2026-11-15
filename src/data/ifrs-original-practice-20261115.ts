import type { ExamQuestion } from "@/lib/exam-bank";
/** Independently authored, bilingual IAS/IFRS practice questions, 15 November 2026.
 * None is sourced from or purported to be a verbatim IFRSQuiz question.
 * These are teaching examples, not the published IFRS Foundation text.
 */
export const IFRS_ORIGINAL_ADDITIONAL_QUESTIONS: ExamQuestion[] = [
  {
    "id": "ifrs-original-20261115-ias2-01",
    "track": "IFRS",
    "topic": "IAS 2 — independently authored revision",
    "question": {
      "en": "A batch of finished goods cost 72,000 and has a year-end net realisable value of 68,500. Assuming no other adjustments, at what amount is it carried?",
      "ar": "تكلفة دفعة بضاعة تامة 72,000، وصافي قيمتها القابلة للتحقق نهاية العام 68,500. بكم تظهر وفق IAS 2؟"
    },
    "choices": {
      "en": [
        "72,000",
        "68,500",
        "140,500",
        "3,500"
      ],
      "ar": [
        "72,000",
        "68,500",
        "140,500",
        "3,500"
      ]
    },
    "answerIndex": 1,
    "explanation": {
      "en": "IAS 2 generally requires the lower of cost and net realisable value: 68,500. The 3,500 difference is a write-down, not the new carrying amount.",
      "ar": "يقاس المخزون بالأقل من التكلفة 72,000 وصافي القيمة القابلة للتحقق 68,500. الفرق 3,500 خسارة تخفيض وليس القيمة الدفترية."
    },
    "reference": "IAS 2.9 — original study question",
    "difficulty": "easy",
    "examDomain": "Original bilingual practice (not IFRSQuiz)"
  },
  {
    "id": "ifrs-original-20261115-ias2-02",
    "track": "IFRS",
    "topic": "IAS 2 — independently authored revision",
    "question": {
      "en": "An unfinished inventory item is expected to sell for 90, needs 8 to complete and 5 to sell. What is its net realisable value per item?",
      "ar": "عنصر مخزون غير مكتمل يتوقع بيعه بمبلغ 90 ويتطلب 8 لاستكماله و5 لبيعه. ما صافي القيمة القابلة للتحقق للوحدة؟"
    },
    "choices": {
      "en": [
        "90",
        "82",
        "77",
        "85"
      ],
      "ar": [
        "90",
        "82",
        "77",
        "85"
      ]
    },
    "answerIndex": 2,
    "explanation": {
      "en": "Net realisable value is estimated selling price less completion costs and costs necessary to make the sale: 90 − 8 − 5 = 77. It is not simply selling price.",
      "ar": "صافي القيمة القابلة للتحقق = سعر البيع المتوقع 90 − تكاليف الإكمال 8 − التكاليف اللازمة للبيع 5 = 77."
    },
    "reference": "IAS 2.6 — original study question",
    "difficulty": "intermediate",
    "examDomain": "Original bilingual practice (not IFRSQuiz)"
  },
  {
    "id": "ifrs-original-20261115-ias2-03",
    "track": "IFRS",
    "topic": "IAS 2 — independently authored revision",
    "question": {
      "en": "Inventory originally cost 100 and was written down to 74. In the following year its new NRV rises to 92. No other adjustments apply. What reversal of the write-down is recognized?",
      "ar": "مخزون تكلفته الأصلية 100 خفضت قيمته إلى 74. في السنة التالية ارتفع صافي قيمته القابلة للتحقق إلى 92. ما مقدار عكس التخفيض؟"
    },
    "choices": {
      "en": [
        "18",
        "26",
        "8",
        "0"
      ],
      "ar": [
        "18",
        "26",
        "8",
        "0"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "en": "Prior write-down was 100 − 74 = 26. Revised carrying amount may rise to min(100,92) = 92; reversal is 92 − 74 = 18. Do not recognize a carrying amount above original cost.",
      "ar": "الخسارة الأصلية 100 − 74 = 26. بعد التحسن تصبح القيمة الأقل من التكلفة 100 وصافي القيمة 92 هي 92. عكس التخفيض 92 − 74 = 18، دون تجاوز التكلفة الأصلية."
    },
    "reference": "IAS 2.33 — original study question",
    "difficulty": "hard",
    "examDomain": "Original bilingual practice (not IFRSQuiz)"
  },
  {
    "id": "ifrs-original-20261115-ias36-01",
    "track": "IFRS",
    "topic": "IAS 36 — independently authored revision",
    "question": {
      "en": "An individual asset has carrying amount 250, value in use 210 and fair value less disposal costs 222. What is its impairment loss?",
      "ar": "أصل قيمته الدفترية 250 وقيمته في الاستخدام 210 وقيمته العادلة ناقص تكاليف الاستبعاد 222. ما خسارة انخفاض قيمته؟"
    },
    "choices": {
      "en": [
        "40",
        "12",
        "0",
        "28"
      ],
      "ar": [
        "40",
        "12",
        "0",
        "28"
      ]
    },
    "answerIndex": 3,
    "explanation": {
      "en": "Recoverable amount is the higher of 210 and 222 = 222. Impairment equals 250 − 222 = 28, assuming the single-asset impairment test applies.",
      "ar": "القيمة القابلة للاسترداد هي الأكبر من 210 و222، أي 222. خسارة الانخفاض = 250 − 222 = 28."
    },
    "reference": "IAS 36.18, 59 — original study question",
    "difficulty": "easy",
    "examDomain": "Original bilingual practice (not IFRSQuiz)"
  },
  {
    "id": "ifrs-original-20261115-ias36-02",
    "track": "IFRS",
    "topic": "IAS 36 — independently authored revision",
    "question": {
      "en": "An asset has carrying amount 180, value in use 190 and fair value less disposal costs 175. Assuming no other impairment indicators require a group-level test, what impairment is indicated by these figures?",
      "ar": "أصل قيمته الدفترية 180 وقيمته في الاستخدام 190 وقيمته العادلة ناقص تكاليف الاستبعاد 175. ما الخسارة التي تشير إليها هذه القيم؟"
    },
    "choices": {
      "en": [
        "No impairment loss",
        "5",
        "10",
        "15"
      ],
      "ar": [
        "لا توجد خسارة انخفاض",
        "5",
        "10",
        "15"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "en": "Recoverable amount is max(190,175) = 190, which exceeds carrying amount 180. No impairment loss arises from this comparison.",
      "ar": "القيمة القابلة للاسترداد 190 لأنها الأعلى، وتتجاوز القيمة الدفترية 180؛ وبالتالي لا توجد خسارة انخفاض بحسب هذه الأرقام."
    },
    "reference": "IAS 36.18, 59 — original study question",
    "difficulty": "intermediate",
    "examDomain": "Original bilingual practice (not IFRSQuiz)"
  },
  {
    "id": "ifrs-original-20261115-ias36-03",
    "track": "IFRS",
    "topic": "IAS 36 — independently authored revision",
    "question": {
      "en": "Goodwill allocated to a cash-generating unit was impaired in a prior year. A subsequent increase in recoverable amount occurs. Under IAS 36, what happens to that prior goodwill impairment?",
      "ar": "اعترف بخسارة انخفاض قيمة شهرة موزعة على وحدة توليد نقد في سنة سابقة، ثم تحسنت القيمة القابلة للاسترداد. ما معالجة الخسارة السابقة؟"
    },
    "choices": {
      "en": [
        "Reverse the full goodwill impairment",
        "Reverse up to the original purchase price",
        "Do not reverse a recognized goodwill impairment",
        "Reclassify the loss to OCI"
      ],
      "ar": [
        "عكس كامل خسارة انخفاض الشهرة",
        "عكس الخسارة حتى سعر الشراء",
        "لا يجوز عكس خسارة انخفاض الشهرة المعترف بها",
        "نقل الخسارة إلى الدخل الشامل الآخر"
      ]
    },
    "answerIndex": 2,
    "explanation": {
      "en": "IAS 36 prohibits reversal of an impairment loss recognized for goodwill. Reversal rules for some other assets differ.",
      "ar": "يحظر IAS 36 عكس خسارة انخفاض القيمة التي سبق الاعتراف بها للشهرة، حتى لو تحسنت الظروف لاحقًا. تختلف القاعدة بالنسبة لبعض الأصول الأخرى."
    },
    "reference": "IAS 36.124 — original study question",
    "difficulty": "hard",
    "examDomain": "Original bilingual practice (not IFRSQuiz)"
  },
  {
    "id": "ifrs-original-20261115-ifrs9-01",
    "track": "IFRS",
    "topic": "IFRS 9 — independently authored revision",
    "question": {
      "en": "In a simplified teaching illustration, exposure at default is 500,000, 12-month default probability 3% and loss given default 30%. Ignoring discounting and scenarios, what is expected credit loss?",
      "ar": "في مثال تعليمي مبسط، يبلغ التعرض عند التعثر 500,000 واحتمال التعثر خلال 12 شهرًا 3% ونسبة الخسارة عند التعثر 30%. مع تجاهل الخصم والسيناريوهات، كم الخسارة المتوقعة؟"
    },
    "choices": {
      "en": [
        "15,000",
        "50,000",
        "4,500",
        "150,000"
      ],
      "ar": [
        "15,000",
        "50,000",
        "4,500",
        "150,000"
      ]
    },
    "answerIndex": 2,
    "explanation": {
      "en": "Illustrative ECL = 500,000 × 3% × 30% = 4,500. Real IFRS 9 measurement uses probability-weighted outcomes, forward-looking information and time value of money.",
      "ar": "الخسارة التوضيحية = 500,000 × 3% × 30% = 4,500. القياس الفعلي وفق IFRS 9 يحتاج سيناريوهات مرجحة ومعلومات مستقبلية وأثر القيمة الزمنية."
    },
    "reference": "IFRS 9.5.5.3–5.5.5 — original study question",
    "difficulty": "intermediate",
    "examDomain": "Original bilingual practice (not IFRSQuiz)"
  },
  {
    "id": "ifrs-original-20261115-ifrs9-02",
    "track": "IFRS",
    "topic": "IFRS 9 — independently authored revision",
    "question": {
      "en": "For a financial asset subject to the general IFRS 9 impairment model, credit risk has significantly increased since initial recognition, but the asset is not credit-impaired. Which allowance applies?",
      "ar": "أصل مالي يخضع للنموذج العام لخسائر الائتمان في IFRS 9 وزادت مخاطره الائتمانية بشكل جوهري منذ الاعتراف الأولي دون أن يصبح منخفض القيمة ائتمانيًا. ما المخصص المطلوب؟"
    },
    "choices": {
      "en": [
        "No loss allowance until default",
        "Lifetime expected credit losses",
        "Only 12-month expected credit losses",
        "Losses only when cash is collected"
      ],
      "ar": [
        "لا مخصص حتى يحدث التعثر",
        "الخسائر الائتمانية المتوقعة طوال العمر",
        "الخسائر المتوقعة خلال 12 شهرًا فقط",
        "الخسائر عند التحصيل فقط"
      ]
    },
    "answerIndex": 1,
    "explanation": {
      "en": "A significant increase in credit risk (Stage 2) triggers lifetime expected credit losses under the general approach, even if the asset is not yet credit-impaired.",
      "ar": "زيادة المخاطر الائتمانية بصورة جوهرية تنقل الأصل إلى المرحلة الثانية، حيث يُقاس مخصص خسائر الائتمان المتوقعة طوال العمر لا لمدة 12 شهرًا فقط."
    },
    "reference": "IFRS 9.5.5.3–5.5.5 — original study question",
    "difficulty": "hard",
    "examDomain": "Original bilingual practice (not IFRSQuiz)"
  },
  {
    "id": "ifrs-original-20261115-ifrs9-03",
    "track": "IFRS",
    "topic": "IFRS 9 — independently authored revision",
    "question": {
      "en": "An entity holds a debt instrument solely to collect contractual cash flows, and those cash flows are only principal and interest on outstanding principal. Assuming no fair value option election, what is its measurement category?",
      "ar": "تحتفظ المنشأة بأداة دين بهدف تحصيل التدفقات التعاقدية فقط، وهي أصل المبلغ والفائدة على الرصيد القائم. دون اختيار القياس بالقيمة العادلة، كيف تُقاس عادة؟"
    },
    "choices": {
      "en": [
        "FVTPL mandatory",
        "FVOCI mandatory",
        "Cost without effective interest",
        "Amortised cost"
      ],
      "ar": [
        "القيمة العادلة عبر الربح أو الخسارة إلزاميًا",
        "القيمة العادلة عبر الدخل الشامل الآخر إلزاميًا",
        "التكلفة دون معدل الفائدة الفعلي",
        "التكلفة المطفأة"
      ]
    },
    "answerIndex": 3,
    "explanation": {
      "en": "Hold-to-collect business model plus solely payments of principal and interest normally qualifies a debt financial asset for amortised cost, subject to other IFRS 9 conditions.",
      "ar": "نموذج الأعمال للاحتفاظ والتحصيل مع تحقق اختبار مدفوعات أصل المبلغ والفائدة SPPI يؤدي عادةً إلى قياس الأداة بالتكلفة المطفأة وفق الشروط ذات الصلة."
    },
    "reference": "IFRS 9.4.1.2 — original study question",
    "difficulty": "intermediate",
    "examDomain": "Original bilingual practice (not IFRSQuiz)"
  },
  {
    "id": "ifrs-original-20261115-ifrs15-01",
    "track": "IFRS",
    "topic": "IFRS 15 — independently authored revision",
    "question": {
      "en": "Distinct equipment and support have standalone selling prices of 800 and 200. The customer pays 900 in total. Based on relative standalone prices, how much is allocated to the equipment?",
      "ar": "جهاز وخدمة دعم منفصلان، وسعراهما المستقلان 800 و200 على التوالي، بينما إجمالي العقد 900. ما المبلغ الذي يخصص للجهاز على أساس الأسعار النسبية؟"
    },
    "choices": {
      "en": [
        "720",
        "800",
        "900",
        "180"
      ],
      "ar": [
        "720",
        "800",
        "900",
        "180"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "en": "The equipment is 800/(800+200) = 80% of standalone value, so its allocated consideration is 900 × 80% = 720. The remaining 180 is allocated to support.",
      "ar": "النسبة الخاصة بالجهاز 800 ÷ (800 + 200) = 80%؛ ونصيبه من مقابل العقد 900 × 80% = 720، والباقي 180 لخدمة الدعم."
    },
    "reference": "IFRS 15.73–74 — original study question",
    "difficulty": "intermediate",
    "examDomain": "Original bilingual practice (not IFRSQuiz)"
  },
  {
    "id": "ifrs-original-20261115-ifrs15-02",
    "track": "IFRS",
    "topic": "IFRS 15 — independently authored revision",
    "question": {
      "en": "A customer pays in full for goods, but the entity has not yet transferred control and no performance obligation has been satisfied. What is normally recognized for the receipt?",
      "ar": "دفع العميل قيمة بضاعة بالكامل، ولكن السيطرة على البضاعة لم تنتقل ولم يُوفَّ بأي التزام أداء. كيف يُعالج المبلغ المستلم عادة؟"
    },
    "choices": {
      "en": [
        "Immediate revenue",
        "Contract liability",
        "Other comprehensive income",
        "Share capital"
      ],
      "ar": [
        "إيراد فوري",
        "التزام عقد",
        "دخل شامل آخر",
        "رأس مال"
      ]
    },
    "answerIndex": 1,
    "explanation": {
      "en": "The entity owes goods or services for consideration received. Recognize a contract liability until the relevant performance obligation is satisfied; collection alone is not revenue.",
      "ar": "المقابل المقبوض قبل الوفاء بالتزام الأداء يمثل التزام عقد، ويُعترف بالإيراد عند استيفاء الالتزام وليس بمجرد استلام النقد."
    },
    "reference": "IFRS 15.106 — original study question",
    "difficulty": "easy",
    "examDomain": "Original bilingual practice (not IFRSQuiz)"
  },
  {
    "id": "ifrs-original-20261115-ifrs15-03",
    "track": "IFRS",
    "topic": "IFRS 15 — independently authored revision",
    "question": {
      "en": "A one-year stand-ready support service is a single performance obligation satisfied evenly over time. The customer prepays 12,000 on day one. Assuming the measure of progress is time, what revenue is recognized after three months?",
      "ar": "خدمة دعم لمدة سنة تمثل التزام أداء واحدًا يتم الوفاء به بالتساوي بمرور الزمن. دفع العميل 12,000 مقدمًا. ما الإيراد بعد ثلاثة أشهر إذا كان مقياس التقدم هو الزمن؟"
    },
    "choices": {
      "en": [
        "12,000",
        "0",
        "3,000",
        "9,000"
      ],
      "ar": [
        "12,000",
        "0",
        "3,000",
        "9,000"
      ]
    },
    "answerIndex": 2,
    "explanation": {
      "en": "Three of twelve months of service have been provided: 12,000 × 3/12 = 3,000 revenue; 9,000 remains as contract liability if no other changes apply.",
      "ar": "تم تقديم 3 أشهر من أصل 12، لذلك الإيراد 12,000 × 3 ÷ 12 = 3,000، ويظل 9,000 التزام عقد إذا لم توجد تغييرات أخرى."
    },
    "reference": "IFRS 15.35, 39–40 — original study question",
    "difficulty": "intermediate",
    "examDomain": "Original bilingual practice (not IFRSQuiz)"
  },
  {
    "id": "ifrs-original-20261115-ifrs16-01",
    "track": "IFRS",
    "topic": "IFRS 16 — independently authored revision",
    "question": {
      "en": "A lessee must pay 12,000 at each of the next two year-ends. The appropriate annual discount rate is 10%. Ignoring other lease components, what is the initial present value of these payments?",
      "ar": "يلتزم مستأجر بدفع 12,000 في نهاية كل سنة من السنتين القادمتين، ومعدل الخصم المناسب 10% سنويًا. ما القيمة الحالية للدفعتين دون مكونات إضافية؟"
    },
    "choices": {
      "en": [
        "24,000",
        "22,909.09",
        "21,818.18",
        "20,826.45"
      ],
      "ar": [
        "24,000",
        "22,909.09",
        "21,818.18",
        "20,826.45"
      ]
    },
    "answerIndex": 3,
    "explanation": {
      "en": "PV = 12,000/1.10 + 12,000/(1.10²) = 10,909.09 + 9,917.36 ≈ 20,826.45. The undiscounted amount 24,000 is not initial PV.",
      "ar": "القيمة الحالية = 12,000 ÷ 1.10 + 12,000 ÷ 1.10² = 10,909.09 + 9,917.36 ≈ 20,826.45، وليست 24,000 القيمة الاسمية."
    },
    "reference": "IFRS 16.26–27 — original study question",
    "difficulty": "intermediate",
    "examDomain": "Original bilingual practice (not IFRSQuiz)"
  },
  {
    "id": "ifrs-original-20261115-ifrs16-02",
    "track": "IFRS",
    "topic": "IFRS 16 — independently authored revision",
    "question": {
      "en": "A lessee has a 10-month lease with no purchase option. The lessee elects the IFRS 16 short-term lease recognition exemption. How are qualifying payments generally handled?",
      "ar": "عقد إيجار للمستأجر مدته 10 أشهر ولا يتضمن خيار شراء، وانتخبت المنشأة إعفاء الإيجارات قصيرة الأجل وفق IFRS 16. كيف تُعالج الدفعات عادة؟"
    },
    "choices": {
      "en": [
        "Recognize lease expense systematically over the lease term",
        "Always recognize a lease liability and ROU asset",
        "Recognize a revaluation reserve",
        "Record every payment as a financial asset"
      ],
      "ar": [
        "الاعتراف بالمصروف بطريقة منتظمة خلال مدة الإيجار",
        "الاعتراف دائمًا بالتزام إيجار وأصل حق استخدام",
        "الاعتراف بفائض إعادة تقييم",
        "اعتبار كل دفعة أصلًا ماليًا"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "en": "When the short-term exemption is validly elected, qualifying lease payments are recognized as expense on a straight-line or another systematic basis. No ROU asset and lease liability are recognized for that lease.",
      "ar": "عند اختيار الإعفاء بصورة صحيحة، تُعترف دفعات الإيجار المؤهل مصروفًا بالقسط الثابت أو أساس منتظم آخر، دون إثبات أصل حق استخدام والتزام إيجار لذلك العقد."
    },
    "reference": "IFRS 16.5–6 — original study question",
    "difficulty": "easy",
    "examDomain": "Original bilingual practice (not IFRSQuiz)"
  },
  {
    "id": "ifrs-original-20261115-ifrs16-03",
    "track": "IFRS",
    "topic": "IFRS 16 — independently authored revision",
    "question": {
      "en": "A lease contains a variable payment solely based on the lessee's future sales, not an index or a rate. Under IFRS 16, how is that variable payment generally treated by the lessee?",
      "ar": "يتضمن عقد إيجار دفعة متغيرة تعتمد فقط على مبيعات المستأجر المستقبلية، وليس على مؤشر أو معدل. كيف تُعالج هذه الدفعة عادة وفق IFRS 16؟"
    },
    "choices": {
      "en": [
        "Always include its forecast in initial lease liability",
        "Exclude it from initial lease liability and expense it when triggered, unless included in another asset cost",
        "Capitalize the variable payment as goodwill",
        "Include it as fixed payments regardless of sales"
      ],
      "ar": [
        "إدراج تقديرها دائمًا في التزام الإيجار الأولي",
        "استبعادها من الالتزام الأولي وتحميلها مصروفًا عند تحقق الحدث ما لم تدخل في تكلفة أصل آخر",
        "رسملتها كشهرة",
        "اعتبارها دفعات ثابتة بغض النظر عن المبيعات"
      ]
    },
    "answerIndex": 1,
    "explanation": {
      "en": "Sales-based variable payments are generally not included in the initial lease liability unless in-substance fixed; recognize them in profit or loss when the triggering event occurs unless another Standard requires inclusion in the cost of an asset.",
      "ar": "الدفعات المتغيرة المرتبطة بالمبيعات لا تدخل عادةً في قياس الالتزام الأولي ما لم تكن ثابتة في الجوهر، وتُحمّل عند تحقق الحدث ما لم يتطلب معيار آخر إدراجها ضمن تكلفة أصل."
    },
    "reference": "IFRS 16.27, 38(b) — original study question",
    "difficulty": "hard",
    "examDomain": "Original bilingual practice (not IFRSQuiz)"
  },
  {
    "id": "ifrs-original-20261115-ifrs17-01",
    "track": "IFRS",
    "topic": "IFRS 17 — independently authored revision",
    "question": {
      "en": "A projected insurance cash outflow of 100 is due at the end of one year. For a simple illustration using an appropriate 10% discount rate, what is its present value?",
      "ar": "تدفق نقدي خارج متوقع لعقد تأمين قيمته 100 يستحق في نهاية سنة، وبافتراض معدل خصم مناسب 10% للتوضيح، ما قيمته الحالية؟"
    },
    "choices": {
      "en": [
        "100",
        "110",
        "90.91",
        "10"
      ],
      "ar": [
        "100",
        "110",
        "90.91",
        "10"
      ]
    },
    "answerIndex": 2,
    "explanation": {
      "en": "The present value of a single end-year flow is 100/1.10 ≈ 90.91. A full IFRS 17 measurement also considers other fulfilment cash flows and risk adjustment.",
      "ar": "القيمة الحالية لتدفق نهاية السنة = 100 ÷ 1.10 ≈ 90.91. ولا يمثل هذا وحده القياس الكامل لالتزامات IFRS 17 التي تشمل عناصر أخرى مثل تعديل المخاطر."
    },
    "reference": "IFRS 17.32, 36 — original study question",
    "difficulty": "easy",
    "examDomain": "Original bilingual practice (not IFRSQuiz)"
  },
  {
    "id": "ifrs-original-20261115-ifrs17-02",
    "track": "IFRS",
    "topic": "IFRS 17 — independently authored revision",
    "question": {
      "en": "A profitable group of insurance contracts initially has a contractual service margin (CSM). In broad terms, how is that margin recognized subsequently?",
      "ar": "مجموعة عقود تأمين رابحة لديها هامش خدمة تعاقدية CSM عند الاعتراف الأولي. كيف يُعترف بهذا الهامش بصورة عامة لاحقًا؟"
    },
    "choices": {
      "en": [
        "Entirely as profit on day one",
        "Only when all policies expire",
        "Directly in other comprehensive income",
        "In profit or loss as insurance contract services are provided"
      ],
      "ar": [
        "كربح كامل في اليوم الأول",
        "فقط عند انتهاء جميع الوثائق",
        "مباشرة ضمن الدخل الشامل الآخر",
        "في الربح أو الخسارة مع تقديم خدمات التأمين"
      ]
    },
    "answerIndex": 3,
    "explanation": {
      "en": "A CSM represents unearned profit in a group and is recognized in profit or loss as insurance contract services are provided, following the applicable IFRS 17 coverage-unit approach.",
      "ar": "يمثل CSM الربح غير المكتسب، ويُعترف به في الربح أو الخسارة خلال تقديم خدمات عقود التأمين وفق منهج وحدات التغطية الملائم."
    },
    "reference": "IFRS 17.44(e), B119 — original study question",
    "difficulty": "intermediate",
    "examDomain": "Original bilingual practice (not IFRSQuiz)"
  },
  {
    "id": "ifrs-original-20261115-ifrs17-03",
    "track": "IFRS",
    "topic": "IFRS 17 — independently authored revision",
    "question": {
      "en": "At initial recognition, a group of insurance contracts under the general model is onerous. Which treatment best describes the loss at that date?",
      "ar": "عند الاعتراف الأولي، كانت مجموعة عقود تأمين وفق النموذج العام مجموعة خاسرة Onerous. ما المعالجة الأقرب للمعيار في ذلك التاريخ؟"
    },
    "choices": {
      "en": [
        "Recognize a loss immediately and establish a loss component",
        "Defer the loss as a positive CSM",
        "Recognize no amount until first claim",
        "Record the loss directly in retained earnings without profit or loss"
      ],
      "ar": [
        "الاعتراف بخسارة فورية وإنشاء مكوّن خسارة",
        "تأجيل الخسارة كهامش خدمة تعاقدية موجب",
        "عدم الاعتراف حتى أول مطالبة",
        "إثبات الخسارة مباشرة بالأرباح المبقاة دون الربح أو الخسارة"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "en": "An onerous group is recognized with a loss in profit or loss at initial recognition, and a loss component of the liability for remaining coverage is tracked under IFRS 17.",
      "ar": "يُعترف بخسارة المجموعة الخاسرة في الربح أو الخسارة فورًا عند الاعتراف الأولي، مع تتبع مكون خسارة ضمن التزام التغطية المتبقية حسب IFRS 17."
    },
    "reference": "IFRS 17.47–49 — original study question",
    "difficulty": "hard",
    "examDomain": "Original bilingual practice (not IFRSQuiz)"
  }
];
