/** Unit 20 review-only ledger; no source certification or scoring release. */
export const CMA_UNIT20_REVIEW_HOLDS = [
  {
    "id": "20.1.1",
    "page": 1294,
    "kind": "cloud-pricing",
    "message": {
      "ar": "التسعير حسب الاستخدام ليس النموذج الوحيد للحوسبة السحابية؛ يوجد أكثر من استثناء محتمل.",
      "en": "Pay-per-use is not the only cloud pricing model; more than one exception is plausible."
    }
  },
  {
    "id": "20.1.3",
    "page": 1296,
    "kind": "conversion-risk",
    "message": {
      "ar": "مخاطر التشغيل المتوازي والتحول التجريبي تعتمد على تصميم التنفيذ والمطابقات.",
      "en": "Parallel and pilot conversion risks depend on implementation design and reconciliation."
    }
  },
  {
    "id": "20.1.13",
    "page": 1304,
    "kind": "conversion-risk",
    "message": {
      "ar": "الانتقال المباشر لا يستبعد إمكان الرجوع للنظام السابق عند وجود خطة استعادة مناسبة.",
      "en": "Direct cutover does not inherently preclude rollback when a recovery plan exists."
    }
  },
  {
    "id": "20.1.16",
    "page": 1306,
    "kind": "absolute-claim",
    "message": {
      "ar": "تكلفة إصلاح الأخطاء تختلف بحسب طبيعة الخطأ وتوقيت اكتشافه؛ لا يلزم أن تكون أعلى في التنفيذ دائمًا.",
      "en": "Correction cost depends on the defect and detection timing; implementation is not invariably most costly."
    }
  },
  {
    "id": "20.1.18",
    "page": 1308,
    "kind": "process-scope",
    "message": {
      "ar": "قد تتبع اختبار القبول موافقات الإصدار وفحوص الجاهزية قبل التشغيل الفعلي.",
      "en": "Release approval and readiness checks may follow acceptance testing."
    }
  },
  {
    "id": "20.1.19",
    "page": 1309,
    "kind": "ambiguous-answer",
    "message": {
      "ar": "تقييم برمجيات النظام قد يكون ضابطًا مشروعًا أيضًا؛ يلزم تحديد نطاق الرقابة المطلوبة.",
      "en": "Systems software evaluation may also be a valid control; clarify the scope of item II."
    }
  },
  {
    "id": "20.1.23",
    "page": 1312,
    "kind": "rationale-mismatch",
    "message": {
      "ar": "الشرح يتناول دراسة الجدوى بدلًا من توضيح مخرجات التصميم المفاهيمي المطلوبة.",
      "en": "The rationale describes feasibility rather than the requested conceptual design deliverable."
    }
  },
  {
    "id": "20.1.25",
    "page": 1314,
    "kind": "conversion-risk",
    "message": {
      "ar": "تكلفة الانتقال المباشر وسرعته ومخاطره تتوقف على ظروف المشروع.",
      "en": "Direct cutover cost, speed and risk depend on project circumstances."
    }
  },
  {
    "id": "20.1.27",
    "page": 1316,
    "kind": "conversion-risk",
    "message": {
      "ar": "إمكان الرجوع للنظام السابق يتوقف على خطة الاستعادة وليس طريقة التحول وحدها.",
      "en": "Rollback depends on the recovery plan rather than conversion method alone."
    }
  },
  {
    "id": "20.1.30",
    "page": 1318,
    "kind": "definition-scope",
    "message": {
      "ar": "استضافة قاعدة بيانات عن بعد لا تثبت وحدها تحقق خصائص الحوسبة السحابية.",
      "en": "Remote database hosting alone does not establish cloud computing characteristics."
    }
  },
  {
    "id": "20.1.31",
    "page": 1319,
    "kind": "ambiguous-answer",
    "message": {
      "ar": "ملكية البيانات وتكاليف الترحيل ليستا حصرًا على البرمجيات كخدمة؛ والمخاطر الأمنية تعتمد على الضوابط.",
      "en": "Data ownership and migration costs are not unique to SaaS; security risk depends on controls."
    }
  },
  {
    "id": "20.2.4",
    "page": 1323,
    "kind": "definition-scope",
    "message": {
      "ar": "اتجاه تغير كثافة البيانات ليس خاصية عامة ثابتة للبيانات الضخمة.",
      "en": "Data density direction is not a universal property of big data."
    }
  },
  {
    "id": "20.2.8",
    "page": 1327,
    "kind": "absolute-claim",
    "message": {
      "ar": "أثر التحليل التوجيهي وتعقيده يتوقفان على الاستخدام والبيانات والموارد.",
      "en": "Prescriptive analytics impact and complexity depend on the use case and resources."
    }
  },
  {
    "id": "20.2.12",
    "page": 1330,
    "kind": "statistical-scope",
    "message": {
      "ar": "معامل التحديد يقيس ملاءمة النموذج داخل العينة ولا يضمن دقة التنبؤ خارجها.",
      "en": "R-squared measures fit and does not guarantee out-of-sample predictive accuracy."
    }
  },
  {
    "id": "20.2.13",
    "page": 1331,
    "kind": "ambiguous-answer",
    "message": {
      "ar": "تغير التكاليف الثابتة أو إنتاجية العمل قد يبطل معلمات النموذج؛ لا تتوافر مقادير كافية للمقارنة.",
      "en": "Changes in fixed overhead or labor productivity may invalidate parameters; comparative magnitudes are missing."
    }
  },
  {
    "id": "20.2.14",
    "page": 1331,
    "kind": "definition-scope",
    "message": {
      "ar": "قد تدمج أدوات ذكاء الأعمال الحديثة توصيات مبنية على المعرفة؛ يلزم توضيح التصنيف المقصود.",
      "en": "BI may integrate knowledge-based recommendations; clarify the intended taxonomy."
    }
  },
  {
    "id": "20.2.16",
    "page": 1333,
    "kind": "duplicate-record",
    "message": {
      "ar": "السؤال يكرر الوحدة 12.1.6؛ احتُفظ بالمصدر دون تكرار التقييم.",
      "en": "Duplicates Unit 12.1.6; retain source without duplicate scoring."
    }
  },
  {
    "id": "20.2.18",
    "page": 1334,
    "kind": "formula-review",
    "message": {
      "ar": "تكرار معامل الانحدار b للمتغيرات المختلفة يستلزم مطابقة المعادلة بالمصدر.",
      "en": "Repeated coefficient b for distinct predictors requires source formula review."
    }
  },
  {
    "id": "20.2.19",
    "page": 1335,
    "kind": "duplicate-record",
    "message": {
      "ar": "السؤال يكرر الوحدة 12.1.16؛ احتُفظ بالمصدر دون تكرار التقييم.",
      "en": "Duplicates Unit 12.1.16; retain source without duplicate scoring."
    }
  },
  {
    "id": "20.2.21",
    "page": 1337,
    "kind": "duplicate-record",
    "message": {
      "ar": "السؤال يكرر الوحدة 12.1.10؛ احتُفظ بالمصدر دون تكرار التقييم.",
      "en": "Duplicates Unit 12.1.10; retain source without duplicate scoring."
    }
  },
  {
    "id": "20.2.25",
    "page": 1339,
    "kind": "absolute-claim",
    "message": {
      "ar": "زيادة حجم البيانات لا تضمن زيادة الرؤى إذا كانت البيانات متحيزة أو ضعيفة الجودة.",
      "en": "More data does not guarantee more insight when quality or bias is problematic."
    }
  },
  {
    "id": "20.2.26",
    "page": 1340,
    "kind": "inferred-key",
    "message": {
      "ar": "مفتاح الإجابة مستنتج؛ يلزم التحقق من المصدر ومن افتراضات السرعة وجودة القرارات.",
      "en": "The key is inferred; verify the source and assumptions about velocity and decision quality."
    }
  },
  {
    "id": "20.2.29",
    "page": 1343,
    "kind": "ambiguous-answer",
    "message": {
      "ar": "الترتيب التنازلي وحده لا يحدد مخطط باريتو؛ يلزم توضيح المقاييس والمحاور.",
      "en": "Descending rank alone does not establish a Pareto chart; clarify measures and axes."
    }
  },
  {
    "id": "20.2.30",
    "page": 1344,
    "kind": "missing-chart",
    "message": {
      "ar": "الرسم البياني المشار إليه غير موجود في النص؛ وقد تستلزم الأنماط داخل حدود الرقابة التحقيق أيضًا.",
      "en": "The referenced chart is missing; nonrandom patterns within limits can also warrant investigation."
    }
  },
  {
    "id": "20.2.31",
    "page": 1345,
    "kind": "statistical-scope",
    "message": {
      "ar": "وقوع النقاط داخل حدود الرقابة لا يستبعد وجود أنماط غير عشوائية تستوجب التحقيق.",
      "en": "Points within control limits can still exhibit nonrandom patterns warranting investigation."
    }
  },
  {
    "id": "20.2.32",
    "page": 1346,
    "kind": "statistical-scope",
    "message": {
      "ar": "حدود المواصفات ليست هي حدود الرقابة الإحصائية؛ يلزم التمييز بينهما.",
      "en": "Specification limits differ from statistical control limits."
    }
  },
  {
    "id": "20.2.34",
    "page": 1348,
    "kind": "statistical-scope",
    "message": {
      "ar": "خط المركز ليس بالضرورة الوزن المستهدف، والمخطط لا يجمع البيانات بذاته.",
      "en": "A control-chart center line is not necessarily target weight; plotting does not collect observations."
    }
  },
  {
    "id": "20.2.38",
    "page": 1351,
    "kind": "absolute-claim",
    "message": {
      "ar": "يمكن دراسة الأسباب باستخدام تصميم وافتراضات ملائمة؛ الارتباط وحده لا يثبتها.",
      "en": "Causal analysis is possible under suitable designs and assumptions; association alone is insufficient."
    }
  },
  {
    "id": "20.2.40",
    "page": 1352,
    "kind": "ambiguous-answer",
    "message": {
      "ar": "التجميع اللوني واستطلاع آراء القراء قد يكونان ممارستين سليمتين؛ يلزم تحديد معيار الاختيار.",
      "en": "Color grouping and feedback can both be appropriate; clarify the selection criterion."
    }
  },
  {
    "id": "20.2.42",
    "page": 1354,
    "kind": "definition-scope",
    "message": {
      "ar": "البحث عن الهدف أسلوب ضمن تحليل ماذا لو وليس بالضرورة ميزته الأساسية.",
      "en": "Goal seeking is one what-if method, not necessarily its primary advantage."
    }
  },
  {
    "id": "20.2.44",
    "page": 1356,
    "kind": "definition-scope",
    "message": {
      "ar": "تحليل ماذا لو أوسع من البحث عن الهدف؛ لا ينبغي مساواة المصطلحين.",
      "en": "What-if analysis is broader than goal seeking; the terms are not interchangeable."
    }
  },
  {
    "id": "20.2.46",
    "page": 1357,
    "kind": "ambiguous-answer",
    "message": {
      "ar": "عدة مجموعات من الأدوات المذكورة قد تكشف الاتجاهات والأنماط؛ معيار الأفضلية غير محدد.",
      "en": "Multiple listed tool groups can identify patterns; the selection criterion is unspecified."
    }
  },
  {
    "id": "20.2.53",
    "page": 1363,
    "kind": "process-scope",
    "message": {
      "ar": "تسلسل خطوات التنقيب عن البيانات ليس ثابتًا والانحدار ليس إلزاميًا في كل مشروع.",
      "en": "Data-mining steps are not universally fixed and regression is not mandatory."
    }
  },
  {
    "id": "20.2.55",
    "page": 1365,
    "kind": "statistical-scope",
    "message": {
      "ar": "يمكن لتحليل الحساسية تغيير عدة متغيرات معًا؛ يلزم تحديد افتراضات النموذج.",
      "en": "Sensitivity analysis can vary multiple inputs jointly; specify model assumptions."
    }
  },
  {
    "id": "20.2.56",
    "page": 1365,
    "kind": "missing-chart",
    "message": {
      "ar": "الرسم المشار إليه غير متاح؛ لا يمكن التحقق من الاستنتاج الرقمي من النص وحده.",
      "en": "The referenced graph is absent; the numeric conclusion cannot be verified from text alone."
    }
  },
  {
    "id": "20.2.58",
    "page": 1368,
    "kind": "process-scope",
    "message": {
      "ar": "حدود عملية التنقيب تختلف بحسب المنهجية؛ يلزم توضيح العلاقة بالتحليل التوجيهي.",
      "en": "Mining workflow boundaries vary by methodology; clarify the relationship to prescriptive analytics."
    }
  }
] as const;
const reviewById = new Map<string, (typeof CMA_UNIT20_REVIEW_HOLDS)[number]>(CMA_UNIT20_REVIEW_HOLDS.map(entry => [entry.id, entry]));
export function getCmaUnit20SourceReview(questionId: string) {
 const match = /^cma-gleim-2025-vol2-su20-s(\d+)-q(\d+)$/.exec(questionId);
 if (!match) return undefined;
 const entry = reviewById.get(`20.${Number(match[1])}.${Number(match[2])}`);
 if (!entry) return undefined;
 return { ...entry, message: { ar: `مراجعة المصدر — صفحة ${entry.page}: ${entry.message.ar} هذا السؤال غير محتسب في الدرجة.`, en: `Source review — p. ${entry.page}: ${entry.message.en} This question is not scored.` } };
}
