import type { CmaDomain } from "@/data/cma-topics";

export interface CmaGlossaryTerm {
  ar: string;
  en: string;
  meaningAr: string;
  meaningEn: string;
}
/** Concise bilingual vocabulary support for unfamiliar technical language. */
export const CMA_DOMAIN_GLOSSARY: Record<CmaDomain, CmaGlossaryTerm[]> = {
  "external-reporting": [
    {
      "ar": "الاستحقاق",
      "en": "Accrual",
      "meaningAr": "تسجيل الإيرادات والمصروفات في فترة حدوثها المحاسبي لا بحسب قبض أو دفع النقد.",
      "meaningEn": "Recording earned revenue and incurred expenses in the appropriate period rather than only when cash moves."
    },
    {
      "ar": "القيمة الدفترية",
      "en": "Carrying amount",
      "meaningAr": "الرصيد الذي يظهر به الأصل أو الالتزام في السجلات بعد التسويات المناسبة.",
      "meaningEn": "An asset or liability's recorded amount after the appropriate adjustments."
    },
    {
      "ar": "الاعتراف",
      "en": "Recognition",
      "meaningAr": "تسجيل عنصر في القوائم عند تحقق شروط المعيار المحاسبي المختص.",
      "meaningEn": "Recording an item in financial statements when the applicable criteria are satisfied."
    },
    {
      "ar": "القيمة العادلة",
      "en": "Fair value",
      "meaningAr": "مقياس قيمة وفق افتراضات المشاركين في السوق؛ ليس مرادفًا للتكلفة التاريخية.",
      "meaningEn": "A market-participant-based valuation measure, not the same as historical cost."
    }
  ],
  "planning-budgeting": [
    {
      "ar": "الموازنة",
      "en": "Budget",
      "meaningAr": "خطة مالية تقديرية مرتبطة بنشاط وفترة وافتراضات واضحة.",
      "meaningEn": "A quantified financial plan for an activity and period based on specified assumptions."
    },
    {
      "ar": "الموازنة المرنة",
      "en": "Flexible budget",
      "meaningAr": "موازنة تُعدل التكلفة المتوقعة لتناسب مستوى النشاط الفعلي.",
      "meaningEn": "A budget recalculated for the actual activity level."
    },
    {
      "ar": "التكلفة المعيارية",
      "en": "Standard cost",
      "meaningAr": "تكلفة كان متوقعًا تحقيقها بكميات وأسعار محددة وفق معيار مسبق.",
      "meaningEn": "A planned cost based on preset input quantities and rates."
    },
    {
      "ar": "التحصيلات النقدية",
      "en": "Cash collections",
      "meaningAr": "النقد المتوقع قبضه من العملاء خلال فترة، وقد يختلف عن مبيعات تلك الفترة.",
      "meaningEn": "Customer cash expected in a period, which can differ from sales recognized in that period."
    }
  ],
  "performance-mgmt": [
    {
      "ar": "مركز المسؤولية",
      "en": "Responsibility center",
      "meaningAr": "وحدة يُقيّم مديرها وفق قرارات ونتائج يستطيع التأثير فيها.",
      "meaningEn": "A unit whose manager is assessed using measures linked to controllable decisions."
    },
    {
      "ar": "الانحراف",
      "en": "Variance",
      "meaningAr": "فرق بين مبلغ فعلي ومبلغ معياري أو مخطط مع ضرورة تفسير أساس المقارنة.",
      "meaningEn": "The difference between actual and expected amounts, interpreted using a consistent basis."
    },
    {
      "ar": "العائد على الاستثمار",
      "en": "Return on investment (ROI)",
      "meaningAr": "نسبة تربط ربحًا محددًا بحجم الاستثمار المستخدم لتحقيقه.",
      "meaningEn": "A ratio comparing a defined profit with investment employed."
    },
    {
      "ar": "التكلفة القابلة للتحكم",
      "en": "Controllable cost",
      "meaningAr": "تكلفة يستطيع مدير معين التأثير فيها بدرجة معقولة ضمن صلاحياته.",
      "meaningEn": "A cost that a particular manager can materially influence within their authority."
    }
  ],
  "cost-mgmt": [
    {
      "ar": "التكلفة المتغيرة",
      "en": "Variable cost",
      "meaningAr": "تكلفة يتغير إجماليها مع النشاط ضمن مدى ملائم، مثل المواد المباشرة.",
      "meaningEn": "A cost whose total changes with activity within the relevant range."
    },
    {
      "ar": "التكلفة الثابتة",
      "en": "Fixed cost",
      "meaningAr": "تكلفة يبقى إجماليها عادة ثابتًا ضمن مدى نشاط محدد، مثل الإيجار.",
      "meaningEn": "A cost whose total generally stays constant over a defined activity range."
    },
    {
      "ar": "مسبب التكلفة",
      "en": "Cost driver",
      "meaningAr": "عامل يرتبط باستهلاك نشاط أو مورد، مثل عدد مرات إعداد الآلات.",
      "meaningEn": "An activity measure that helps explain resource consumption, such as machine setups."
    },
    {
      "ar": "المصاريف الصناعية المحملة",
      "en": "Applied overhead",
      "meaningAr": "نصيب من المصاريف الصناعية غير المباشرة يُخصص للإنتاج بمعدل تحميل.",
      "meaningEn": "Indirect manufacturing cost assigned to output using an application rate."
    }
  ],
  "internal-controls": [
    {
      "ar": "فصل الصلاحيات",
      "en": "Segregation of duties",
      "meaningAr": "توزيع إنشاء العملية واعتمادها وتنفيذها ومراجعتها على أشخاص مختلفين قدر الإمكان.",
      "meaningEn": "Separating initiation, authorization, custody and review among appropriate roles."
    },
    {
      "ar": "رقابة وقائية",
      "en": "Preventive control",
      "meaningAr": "إجراء يسعى لمنع الخطأ قبل وقوعه، مثل صلاحيات الموافقة.",
      "meaningEn": "A control designed to stop an error or unauthorized action before it happens."
    },
    {
      "ar": "رقابة اكتشافية",
      "en": "Detective control",
      "meaningAr": "إجراء يكشف الخطأ بعد حدوثه، مثل المطابقة والجرد.",
      "meaningEn": "A control designed to identify problems after they have occurred."
    },
    {
      "ar": "أثر المراجعة",
      "en": "Audit trail",
      "meaningAr": "سجل يبين من أدخل أو غيّر بيانات المعاملة ومتى وكيف.",
      "meaningEn": "A traceable history of who entered or changed transaction data and when."
    }
  ],
  "technology-analytics": [
    {
      "ar": "جودة البيانات",
      "en": "Data quality",
      "meaningAr": "مدى اكتمال البيانات ودقتها واتساقها وملاءمتها لغرض التحليل.",
      "meaningEn": "How complete, accurate, consistent and fit-for-purpose data are."
    },
    {
      "ar": "الانحدار",
      "en": "Regression",
      "meaningAr": "أسلوب يقدّر العلاقة الإحصائية بين متغير تابع ومؤثرات؛ لا يثبت السببية وحده.",
      "meaningEn": "A statistical model of associations between variables that does not establish causality by itself."
    },
    {
      "ar": "حوكمة البيانات",
      "en": "Data governance",
      "meaningAr": "تحديد مالكي البيانات ومسموحيات الوصول والتعريفات وقواعد الجودة.",
      "meaningEn": "Rules for data ownership, access, definitions and quality control."
    },
    {
      "ar": "الأتمتة",
      "en": "Automation",
      "meaningAr": "تنفيذ خطوات متكررة بواسطة نظام، مع ضرورة اختبار المدخلات والاستثناءات.",
      "meaningEn": "Using a system for repeatable tasks while validating inputs and exceptions."
    }
  ],
  "financial-statement-analysis": [
    {
      "ar": "السيولة",
      "en": "Liquidity",
      "meaningAr": "القدرة على سداد الالتزامات القريبة عند استحقاقها.",
      "meaningEn": "Ability to meet near-term payments when they fall due."
    },
    {
      "ar": "الملاءة",
      "en": "Solvency",
      "meaningAr": "قدرة المنشأة على تحمل التزاماتها وتمويلها على المدى الطويل.",
      "meaningEn": "Capacity to sustain borrowing and financial obligations over the long term."
    },
    {
      "ar": "هامش الربح",
      "en": "Profit margin",
      "meaningAr": "نسبة ربح محدد إلى المبيعات، مع ضرورة معرفة مستوى الربح المستخدم.",
      "meaningEn": "A selected profit measure divided by sales; always identify which profit level."
    },
    {
      "ar": "جودة الأرباح",
      "en": "Earnings quality",
      "meaningAr": "مدى استدامة الربح وارتباطه بالتشغيل والتحصيل وتقديرات المحاسبة.",
      "meaningEn": "How sustainable earnings are and how they relate to operations, cash and estimates."
    }
  ],
  "corporate-finance": [
    {
      "ar": "تكلفة رأس المال",
      "en": "Cost of capital",
      "meaningAr": "العائد المطلوب من ممولي الشركة مقابل مخاطر التمويل.",
      "meaningEn": "The return required by providers of capital in view of financing risk."
    },
    {
      "ar": "هيكل رأس المال",
      "en": "Capital structure",
      "meaningAr": "مزيج الدين وحقوق الملكية الذي تموّل به المنشأة نفسها.",
      "meaningEn": "The mix of debt and equity used to finance the business."
    },
    {
      "ar": "العائد",
      "en": "Yield",
      "meaningAr": "مقياس عائد الاستثمار، وتتغير صيغته بحسب ما يُحتسب من تدفقات وقيمة.",
      "meaningEn": "A return measure whose formula depends on which cash flows and value are considered."
    },
    {
      "ar": "التحوط",
      "en": "Hedging",
      "meaningAr": "إجراء لتقليل أثر تغير غير مرغوب في سعر أو عملة أو فائدة.",
      "meaningEn": "An action to reduce unwanted exposure to price, currency or interest-rate changes."
    }
  ],
  "decision-analysis": [
    {
      "ar": "هامش المساهمة",
      "en": "Contribution margin",
      "meaningAr": "سعر البيع ناقص التكلفة المتغيرة؛ يساهم أولًا في تغطية الثابت ثم الربح.",
      "meaningEn": "Sales less variable costs, available to cover fixed costs and then profit."
    },
    {
      "ar": "تكلفة الفرصة البديلة",
      "en": "Opportunity cost",
      "meaningAr": "منفعة تفقدها الشركة عندما تختار بديلًا بدل أفضل استخدام آخر متاح.",
      "meaningEn": "The benefit given up by choosing one option over the best available alternative."
    },
    {
      "ar": "التكلفة الغارقة",
      "en": "Sunk cost",
      "meaningAr": "تكلفة وقعت في الماضي ولا يمكن تغييرها بالقرار الحالي.",
      "meaningEn": "A past cost that cannot be changed by the present decision."
    },
    {
      "ar": "التكلفة الملائمة",
      "en": "Relevant cost",
      "meaningAr": "تكلفة مستقبلية تختلف بين البدائل المقارنة.",
      "meaningEn": "A future cost that differs between the alternatives being compared."
    }
  ],
  "risk-mgmt": [
    {
      "ar": "الخطر الكامن",
      "en": "Inherent risk",
      "meaningAr": "مستوى التعرض قبل إجراءات المعالجة والرقابة.",
      "meaningEn": "Risk exposure before specific controls or responses are applied."
    },
    {
      "ar": "الخطر المتبقي",
      "en": "Residual risk",
      "meaningAr": "مستوى الخطر الذي يبقى بعد تنفيذ إجراءات الاستجابة.",
      "meaningEn": "The risk remaining after controls and responses are in place."
    },
    {
      "ar": "شهية المخاطر",
      "en": "Risk appetite",
      "meaningAr": "نوع ومستوى المخاطر التي تقبلها المنشأة لتحقيق أهدافها.",
      "meaningEn": "The type and amount of risk an organization is willing to accept in pursuit of objectives."
    },
    {
      "ar": "الخسارة المتوقعة",
      "en": "Expected loss",
      "meaningAr": "حاصل ترجيح النتائج المحتملة باحتمالاتها، ولا يعني خسارة مؤكدة.",
      "meaningEn": "A probability-weighted estimate of outcomes, not a guaranteed loss."
    }
  ],
  "investment-decisions": [
    {
      "ar": "صافي القيمة الحالية",
      "en": "Net present value (NPV)",
      "meaningAr": "القيمة الحالية للتدفقات المتوقعة ناقص الاستثمار الأولي والتكاليف ذات الصلة.",
      "meaningEn": "Present value of expected cash flows less the relevant investment outlays."
    },
    {
      "ar": "معدل الخصم",
      "en": "Discount rate",
      "meaningAr": "معدل يُستخدم لتحويل مبلغ مستقبلي إلى قيمته الحالية بما يلائم المخاطر.",
      "meaningEn": "Rate used to convert future cash into present value, appropriate to risk."
    },
    {
      "ar": "معدل العائد الداخلي",
      "en": "Internal rate of return (IRR)",
      "meaningAr": "معدل الخصم الذي يجعل صافي القيمة الحالية للتدفقات يساوي صفرًا ضمن شروط الحل.",
      "meaningEn": "A discount rate at which an investment's NPV equals zero, subject to applicable assumptions."
    },
    {
      "ar": "التدفق النهائي",
      "en": "Terminal cash flow",
      "meaningAr": "المبالغ النقدية عند نهاية المشروع مثل بيع الأصل واسترداد رأس المال العامل.",
      "meaningEn": "End-of-project cash such as salvage proceeds and recovery of working capital."
    }
  ],
  "professional-ethics": [
    {
      "ar": "النزاهة",
      "en": "Integrity",
      "meaningAr": "تجنب التحريف المتعمد وتعارض المصالح والتصرف غير المهني.",
      "meaningEn": "Acting without deliberate misrepresentation or improper conflicts."
    },
    {
      "ar": "المصداقية",
      "en": "Credibility",
      "meaningAr": "تقديم معلومات كاملة وعادلة وفي الوقت المناسب وفق المسؤولية المهنية.",
      "meaningEn": "Communicating fair, complete and timely information as required professionally."
    },
    {
      "ar": "السرية",
      "en": "Confidentiality",
      "meaningAr": "حماية المعلومات واستخدامها فقط ضمن الصلاحيات والأغراض المسموح بها.",
      "meaningEn": "Safeguarding information and using it only for authorized purposes."
    },
    {
      "ar": "تعارض المصالح",
      "en": "Conflict of interest",
      "meaningAr": "مصلحة شخصية قد تؤثر في الحكم أو القرار المهني أو مظهر استقلاله.",
      "meaningEn": "A personal interest that may affect professional judgment or its perceived impartiality."
    }
  ]
};
