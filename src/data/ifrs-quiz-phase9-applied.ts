import type { ExamQuestion } from "@/lib/exam-bank";

// Original worked scenarios. The cited reference was used to check the technical
// treatment; neither its question text nor its numerical examples are reproduced.
export const IFRS_PHASE9_TARGETS = [
  "IFRS 2",
  "IFRS 3",
  "IFRS 9",
  "IFRS 15",
  "IFRS 16",
  "IFRS 17",
  "IFRS 18",
  "IAS 2",
  "IAS 12",
  "IAS 16",
  "IAS 21",
  "IAS 33",
  "IAS 36",
  "IAS 37",
] as const;

export const IFRS_PHASE9_QUESTIONS_PER_STANDARD = 3;

type Target = (typeof IFRS_PHASE9_TARGETS)[number];
type Text = { ar: string; en: string };

interface AppliedCase {
  code: Target;
  question: Text;
  choices: { ar: [string, string, string, string]; en: [string, string, string, string] };
  answerIndex: 0 | 1 | 2 | 3;
  explanation: Text;
  paragraph: string;
  difficulty: NonNullable<ExamQuestion["difficulty"]>;
}

const cases: AppliedCase[] = [
  {
    code: "IFRS 2",
    question: {
      ar: "منحت شركة 10 موظفين 100 خيار لكل منهم، والقيمة العادلة للخيار عند المنح 30 ريالًا. يستحق الحق بعد سنتين، وتتوقع الشركة بقاء 80% من الموظفين. كم مصروف السنة الأولى؟",
      en: "An entity grants 100 options each to 10 employees. Grant-date fair value is SAR 30 per option; vesting takes two years, and 80% of employees are expected to stay. What is year-one expense?",
    },
    choices: {
      ar: ["12,000 ريال", "15,000 ريال", "24,000 ريال", "30,000 ريال"],
      en: ["SAR 12,000", "SAR 15,000", "SAR 24,000", "SAR 30,000"],
    },
    answerIndex: 0,
    explanation: {
      ar: "الخيارات المتوقع استحقاقها 800؛ قيمتها 24,000 ريال توزع على سنتي الخدمة، فيكون مصروف السنة الأولى 12,000 ريال. يُعدّل عدد المستحقين المتوقع لاحقًا.",
      en: "Expected vesting options are 800. Their SAR 24,000 grant-date value is spread over two service years, giving SAR 12,000 in year one. The expected vesting count is updated later.",
    },
    paragraph: "IFRS 2.19–20",
    difficulty: "intermediate",
  },
  {
    code: "IFRS 2",
    question: {
      ar: "حصل الموظفون على خيارات أسهم مشروطة بالخدمة وببلوغ سعر السهم هدفًا سوقيًا. استوفوا شرط الخدمة، لكن السعر لم يبلغ الهدف. كيف تتعامل الشركة مع مصروف المنحة المقاسة عند تاريخ المنح؟",
      en: "Employees receive equity-settled options subject to service and a share-price market target. They complete the service, but the price target is missed. What happens to grant-date measured expense?",
    },
    choices: {
      ar: [
        "يعكس المصروف كله",
        "يبقى المصروف المعترف به لأن الشرط السوقي دخل في القيمة العادلة",
        "يؤجل المصروف إلى بلوغ السعر",
        "يعاد قياس الخيار نقديًا كل سنة",
      ],
      en: [
        "Reverse all expense",
        "Retain the expense because the market condition was included in grant-date fair value",
        "Defer expense until the price is reached",
        "Remeasure the option as a cash award each year",
      ],
    },
    answerIndex: 1,
    explanation: {
      ar: "شرط سعر السهم شرط سوقي يُدمج في القيمة العادلة عند المنح؛ طالما تحقق شرط الخدمة، لا يُعكس المصروف لمجرد إخفاق الهدف السوقي.",
      en: "The share-price target is a market condition reflected in grant-date fair value. Once the service condition is met, missing that target alone does not reverse expense.",
    },
    paragraph: "IFRS 2.21",
    difficulty: "hard",
  },
  {
    code: "IFRS 2",
    question: {
      ar: "وعدت شركة موظفيها بـ1,000 وحدة أسهم تسدد نقدًا بعد سنتين. بلغت القيمة العادلة للوحدة 12 ريالًا بنهاية السنة الأولى و15 ريالًا بنهاية الثانية، مع تحقق شروط الاستحقاق. ما مصروف السنة الثانية؟",
      en: "An entity awards 1,000 cash-settled share units vesting after two years. Fair value per unit is SAR 12 at year one and SAR 15 at year two; vesting conditions are met. What is year-two expense?",
    },
    choices: {
      ar: ["3,000 ريال", "6,000 ريال", "7,500 ريال", "9,000 ريال"],
      en: ["SAR 3,000", "SAR 6,000", "SAR 7,500", "SAR 9,000"],
    },
    answerIndex: 3,
    explanation: {
      ar: "التزام نهاية السنة الأولى 6,000 = 1,000 × 12 × نصف فترة الخدمة. الالتزام النهائي 15,000 = 1,000 × 15؛ إذن مصروف السنة الثانية 9,000 ريال.",
      en: "Year-one liability is 1,000 × 12 × 1/2 = SAR 6,000. The final liability is 1,000 × 15 = SAR 15,000, so year-two expense is SAR 9,000.",
    },
    paragraph: "IFRS 2.30–33",
    difficulty: "hard",
  },
  {
    code: "IFRS 3",
    question: {
      ar: "دفعت شركة 1,000,000 ريال لشراء شركة تابعة، وقاست الحصة غير المسيطرة بالقيمة العادلة 200,000 ريال. بلغت القيمة العادلة لصافي الأصول القابلة للتحديد 950,000 ريال. ما الشهرة؟",
      en: "An acquirer pays SAR 1,000,000 and measures non-controlling interest at SAR 200,000 fair value. Fair value of identifiable net assets is SAR 950,000. What is goodwill?",
    },
    choices: {
      ar: ["50,000 ريال", "200,000 ريال", "250,000 ريال", "950,000 ريال"],
      en: ["SAR 50,000", "SAR 200,000", "SAR 250,000", "SAR 950,000"],
    },
    answerIndex: 2,
    explanation: {
      ar: "الشهرة = المقابل 1,000,000 + الحصة غير المسيطرة 200,000 − صافي الأصول 950,000 = 250,000 ريال.",
      en: "Goodwill = consideration SAR 1,000,000 + NCI SAR 200,000 − identifiable net assets SAR 950,000 = SAR 250,000.",
    },
    paragraph: "IFRS 3.19, 32",
    difficulty: "intermediate",
  },
  {
    code: "IFRS 3",
    question: {
      ar: "تحملت الشركة المستحوذة أتعاب تقييم ومستشارين بقيمة 40,000 ريال لإتمام تجميع أعمال. كيف تُعالج هذه الأتعاب؟",
      en: "An acquirer incurs SAR 40,000 of valuation and advisory fees to complete a business combination. How are these fees accounted for?",
    },
    choices: {
      ar: [
        "تضاف إلى الشهرة",
        "ترسمل ضمن الأصول المستحوذ عليها",
        "تثبت مصروفًا عند تكبدها",
        "تخصم من الحصة غير المسيطرة",
      ],
      en: [
        "Add to goodwill",
        "Capitalise into acquired assets",
        "Expense as incurred",
        "Deduct from non-controlling interest",
      ],
    },
    answerIndex: 2,
    explanation: {
      ar: "تكاليف الاستحواذ مثل الأتعاب المهنية تثبت مصروفًا عند تكبدها؛ لا تدخل في المقابل المحول لحساب الشهرة.",
      en: "Acquisition-related professional fees are expensed as incurred; they are not part of consideration transferred for goodwill.",
    },
    paragraph: "IFRS 3.53",
    difficulty: "intermediate",
  },
  {
    code: "IFRS 3",
    question: {
      ar: "بلغ المقابل المحول 700,000 ريال والحصة غير المسيطرة 100,000 ريال، بينما صافي الأصول المحددة بالقيمة العادلة 900,000 ريال. بعد إعادة فحص القياسات، ما النتيجة؟",
      en: "Consideration is SAR 700,000, NCI is SAR 100,000, and identifiable net assets at fair value are SAR 900,000. After reassessing the measurements, what is recognised?",
    },
    choices: {
      ar: [
        "شهرة 100,000 ريال",
        "ربح شراء بسعر مغرٍ 100,000 ريال في الربح أو الخسارة",
        "خصم مباشر من حقوق الملكية 100,000 ريال",
        "لا أثر محاسبي",
      ],
      en: [
        "SAR 100,000 goodwill",
        "SAR 100,000 bargain purchase gain in profit or loss",
        "SAR 100,000 direct equity deduction",
        "No accounting effect",
      ],
    },
    answerIndex: 1,
    explanation: {
      ar: "صافي الأصول يزيد مجموع المقابل والحصة غير المسيطرة بمقدار 100,000 ريال. بعد إعادة التقييم المطلوب، يُعترف بربح الشراء بسعر مغرٍ في الربح أو الخسارة.",
      en: "Net identifiable assets exceed consideration plus NCI by SAR 100,000. After the required reassessment, the bargain purchase gain goes to profit or loss.",
    },
    paragraph: "IFRS 3.34–36",
    difficulty: "hard",
  },
  {
    code: "IFRS 9",
    question: {
      ar: "احتفظت شركة بسند لتحصيل التدفقات التعاقدية فقط، وهذه التدفقات مدفوعات أصل وفائدة على أصل قائم. ما تصنيف الأصل المالي مبدئيًا إذا لم تُستخدم أداة القيمة العادلة الاختيارية؟",
      en: "An entity holds a bond solely to collect contractual cash flows, which are solely payments of principal and interest. What is its initial classification if the fair value option is not elected?",
    },
    choices: {
      ar: [
        "التكلفة المطفأة",
        "القيمة العادلة من خلال الدخل الشامل الآخر حتمًا",
        "القيمة العادلة من خلال الربح أو الخسارة حتمًا",
        "مخزون",
      ],
      en: ["Amortised cost", "Necessarily FVOCI", "Necessarily FVTPL", "Inventory"],
    },
    answerIndex: 0,
    explanation: {
      ar: "يتحقق اختبارا نموذج الأعمال لتحصيل التدفقات التعاقدية وكون التدفقات أصلًا وفائدة فقط؛ لذا يكون القياس بالتكلفة المطفأة في الحالة المعطاة.",
      en: "Both the hold-to-collect business model and solely-payments-of-principal-and-interest tests are met, so this asset is measured at amortised cost on the stated facts.",
    },
    paragraph: "IFRS 9.4.1.2",
    difficulty: "intermediate",
  },
  {
    code: "IFRS 9",
    question: {
      ar: "في تقدير مبسط لخسارة ائتمان متوقعة خلال 12 شهرًا، بلغ التعرض عند التعثر 1,000,000 ريال، واحتمال التعثر 2%، ونسبة الخسارة عند التعثر 40%. ما الخسارة المتوقعة؟",
      en: "In a simplified 12-month ECL estimate, exposure at default is SAR 1,000,000, probability of default is 2%, and loss given default is 40%. What is the estimated ECL?",
    },
    choices: {
      ar: ["800 ريال", "8,000 ريال", "20,000 ريال", "400,000 ريال"],
      en: ["SAR 800", "SAR 8,000", "SAR 20,000", "SAR 400,000"],
    },
    answerIndex: 1,
    explanation: {
      ar: "في هذا النموذج المبسط: 1,000,000 × 2% × 40% = 8,000 ريال. التطبيق الكامل يراعي سيناريوهات متعددة والقيمة الزمنية للمبلغ.",
      en: "Under this simplified model: 1,000,000 × 2% × 40% = SAR 8,000. A full ECL model also reflects multiple scenarios and time value of money.",
    },
    paragraph: "IFRS 9.5.5.3, Appendix A",
    difficulty: "intermediate",
  },
  {
    code: "IFRS 9",
    question: {
      ar: "لدى منشأة ذمم مدينة تجارية بقيمة 500,000 ريال بلا عنصر تمويل جوهري، وتقدر خسائرها الائتمانية على مدى العمر بـ4%. كم مخصص الخسارة وفق المنهج المبسط؟",
      en: "An entity has SAR 500,000 of trade receivables without a significant financing component and estimates lifetime credit losses at 4%. What is the simplified-approach loss allowance?",
    },
    choices: {
      ar: ["5,000 ريال", "10,000 ريال", "20,000 ريال", "40,000 ريال"],
      en: ["SAR 5,000", "SAR 10,000", "SAR 20,000", "SAR 40,000"],
    },
    answerIndex: 2,
    explanation: {
      ar: "تُقاس ذمم التجارة المؤهلة بالخسائر المتوقعة على مدى العمر: 500,000 × 4% = 20,000 ريال، دون انتظار إثبات زيادة جوهرية في مخاطر الائتمان.",
      en: "Qualifying trade receivables use lifetime ECL: SAR 500,000 × 4% = SAR 20,000, without first identifying a significant increase in credit risk.",
    },
    paragraph: "IFRS 9.5.5.15",
    difficulty: "intermediate",
  },
  {
    code: "IFRS 15",
    question: {
      ar: "باعت شركة جهازًا مع خدمة دعم منفصلة بسعر إجمالي 900 ريال. سعر بيع الجهاز مستقلًا 800 ريال والدعم 200 ريال. كم يُخصص للجهاز؟",
      en: "A company sells a device with a distinct support service for SAR 900. Stand-alone selling prices are SAR 800 for the device and SAR 200 for support. How much is allocated to the device?",
    },
    choices: {
      ar: ["700 ريال", "720 ريال", "800 ريال", "900 ريال"],
      en: ["SAR 700", "SAR 720", "SAR 800", "SAR 900"],
    },
    answerIndex: 1,
    explanation: {
      ar: "يخصص السعر بنسبة أسعار البيع المستقلة: 900 × 800 ÷ (800 + 200) = 720 ريال للجهاز و180 ريال للدعم.",
      en: "Allocate by relative stand-alone selling prices: 900 × 800 ÷ (800 + 200) = SAR 720 to the device and SAR 180 to support.",
    },
    paragraph: "IFRS 15.73–86",
    difficulty: "intermediate",
  },
  {
    code: "IFRS 15",
    question: {
      ar: "تتقاضى منشأة رسم إعداد غير مسترد قدره 120,000 ريال لعقد خدمة مدته 12 شهرًا. لا ينتج الإعداد خدمة مميزة للعميل، والخدمة توفَّر بالتساوي. ما الإيراد الشهري من الرسم؟",
      en: "An entity charges a non-refundable SAR 120,000 set-up fee for a 12-month service contract. Set-up does not transfer a distinct service, and service is provided evenly. How much fee revenue is recognised monthly?",
    },
    choices: {
      ar: ["صفر حتى نهاية العقد", "10,000 ريال", "120,000 ريال في الشهر الأول", "20,000 ريال"],
      en: ["Zero until contract end", "SAR 10,000", "SAR 120,000 in month one", "SAR 20,000"],
    },
    answerIndex: 1,
    explanation: {
      ar: "الرسم جزء من مقابل الخدمة المستمرة وليس مقابل التزام أداء منفصل؛ لذا يوزع 120,000 ÷ 12 = 10,000 ريال شهريًا وفق نمط نقل الخدمة.",
      en: "The fee is consideration for the continuing service, not a separate performance obligation. It is recognised at SAR 120,000 ÷ 12 = SAR 10,000 per month with the service pattern.",
    },
    paragraph: "IFRS 15.B48–B51",
    difficulty: "hard",
  },
  {
    code: "IFRS 15",
    question: {
      ar: "تنسق منصة بيع خدمة يقدمها طرف آخر للعميل مقابل 100,000 ريال، وتحتفظ بعمولة 10,000 ريال. لا تسيطر المنصة على الخدمة قبل نقلها. ما إيراد المنصة؟",
      en: "A platform arranges a third-party service sold to a customer for SAR 100,000 and retains SAR 10,000 commission. It never controls the service before transfer. What is the platform's revenue?",
    },
    choices: {
      ar: ["10,000 ريال", "90,000 ريال", "100,000 ريال", "صفر"],
      en: ["SAR 10,000", "SAR 90,000", "SAR 100,000", "Zero"],
    },
    answerIndex: 0,
    explanation: {
      ar: "عندما تقتصر وظيفة المنشأة على ترتيب تقديم الخدمة، فهي وكيل ويكون إيرادها العمولة أو صافي الأتعاب، أي 10,000 ريال.",
      en: "Because the platform arranges for another party to provide the service, it is an agent and recognises its SAR 10,000 commission as revenue.",
    },
    paragraph: "IFRS 15.B34–B38",
    difficulty: "intermediate",
  },
  {
    code: "IFRS 16",
    question: {
      ar: "في بداية إيجار، بلغت القيمة الحالية للدفعات غير المسددة، أي التزام الإيجار، 100,000 ريال. توجد دفعة مقدمة 10,000 وتكاليف مباشرة أولية 5,000 وتقدير إعادة الموقع 8,000 ريال. ما تكلفة أصل حق الاستخدام؟",
      en: "At lease commencement, the present value of unpaid lease payments—the lease liability—is SAR 100,000. There is SAR 10,000 paid in advance, SAR 5,000 initial direct costs and a SAR 8,000 restoration estimate. What is ROU asset cost?",
    },
    choices: {
      ar: ["100,000 ريال", "108,000 ريال", "115,000 ريال", "123,000 ريال"],
      en: ["SAR 100,000", "SAR 108,000", "SAR 115,000", "SAR 123,000"],
    },
    answerIndex: 3,
    explanation: {
      ar: "تكلفة حق الاستخدام = التزام الإيجار 100,000 + الدفعة المقدمة 10,000 + التكاليف المباشرة 5,000 + التزام الإعادة 8,000 = 123,000 ريال.",
      en: "ROU cost = lease liability 100,000 + prepayment 10,000 + initial direct costs 5,000 + restoration obligation 8,000 = SAR 123,000.",
    },
    paragraph: "IFRS 16.24",
    difficulty: "intermediate",
  },
  {
    code: "IFRS 16",
    question: {
      ar: "بدأ العام بالتزام إيجار 100,000 ريال، ومعدل الفائدة 5%، وسدد المستأجر 25,000 ريال في نهاية العام. ما رصيد التزام الإيجار بعد السداد؟",
      en: "A lease liability opens at SAR 100,000. The annual interest rate is 5%, and the lessee pays SAR 25,000 at year-end. What is the closing lease liability?",
    },
    choices: {
      ar: ["75,000 ريال", "80,000 ريال", "85,000 ريال", "105,000 ريال"],
      en: ["SAR 75,000", "SAR 80,000", "SAR 85,000", "SAR 105,000"],
    },
    answerIndex: 1,
    explanation: {
      ar: "تضاف الفائدة 5,000 ريال ثم تخصم الدفعة 25,000: 100,000 + 5,000 − 25,000 = 80,000 ريال.",
      en: "Accrue SAR 5,000 interest and deduct the SAR 25,000 payment: 100,000 + 5,000 − 25,000 = SAR 80,000.",
    },
    paragraph: "IFRS 16.36",
    difficulty: "intermediate",
  },
  {
    code: "IFRS 16",
    question: {
      ar: "عقد إيجار مدته غير القابلة للإلغاء 3 سنوات، وللمستأجر خيار تمديد سنتين أصبح ممارسته مؤكدة بدرجة معقولة عند بداية العقد. ما مدة الإيجار المستخدمة للقياس؟",
      en: "A lease has a three-year non-cancellable term and a two-year extension option that the lessee is reasonably certain to exercise at commencement. What lease term is used for measurement?",
    },
    choices: {
      ar: ["سنتان", "3 سنوات", "5 سنوات", "7 سنوات"],
      en: ["Two years", "Three years", "Five years", "Seven years"],
    },
    answerIndex: 2,
    explanation: {
      ar: "تضاف فترة التمديد إلى السنوات الثلاث لأن ممارسة الخيار مؤكدة بدرجة معقولة، فتكون المدة 5 سنوات.",
      en: "The reasonably certain extension is included with the three non-cancellable years, giving a five-year lease term.",
    },
    paragraph: "IFRS 16.18–21",
    difficulty: "intermediate",
  },
  {
    code: "IFRS 17",
    question: {
      ar: "عند الاعتراف الأولي بمجموعة عقود تأمين وفق النموذج العام، تشير تدفقات الوفاء بعد تعديل المخاطر إلى صافي تدفق داخلي 120,000 ريال. ما هامش الخدمة التعاقدية والربح الأولي؟",
      en: "At initial recognition of an insurance group under the general model, fulfilment cash flows including risk adjustment indicate a net inflow of SAR 120,000. What are CSM and day-one profit?",
    },
    choices: {
      ar: [
        "هامش 120,000 وربح فوري 120,000",
        "هامش صفر وربح 120,000",
        "هامش 120,000 وربح فوري صفر",
        "هامش صفر وخسارة 120,000",
      ],
      en: [
        "CSM 120,000 and immediate profit 120,000",
        "CSM zero and profit 120,000",
        "CSM 120,000 and immediate profit zero",
        "CSM zero and loss 120,000",
      ],
    },
    answerIndex: 2,
    explanation: {
      ar: "يؤجل الربح غير المكتسب في هامش خدمة تعاقدية قدره 120,000 ريال؛ فلا ينشأ ربح يوم أول لمجموعة مربحة.",
      en: "The SAR 120,000 unearned gain is deferred in the CSM, so a profitable group has no day-one gain.",
    },
    paragraph: "IFRS 17.32, 38",
    difficulty: "hard",
  },
  {
    code: "IFRS 17",
    question: {
      ar: "هامش خدمة تعاقدية أول المدة 100,000 ريال. أضيفت فائدة 5,000، وخفضته زيادة تدفقات تخص الخدمة المستقبلية بـ20,000، وحرر للخدمة الحالية 25,000 ريال. ما الهامش الختامي؟",
      en: "Opening CSM is SAR 100,000. Interest adds SAR 5,000, a future-service cash-flow change reduces it by SAR 20,000, and SAR 25,000 is released for current service. What is closing CSM?",
    },
    choices: {
      ar: ["50,000 ريال", "60,000 ريال", "80,000 ريال", "100,000 ريال"],
      en: ["SAR 50,000", "SAR 60,000", "SAR 80,000", "SAR 100,000"],
    },
    answerIndex: 1,
    explanation: {
      ar: "الهامش الختامي = 100,000 + 5,000 − 20,000 − 25,000 = 60,000 ريال، مع افتراض عدم وجود تعديلات أخرى.",
      en: "Closing CSM = 100,000 + 5,000 − 20,000 − 25,000 = SAR 60,000, assuming no other adjustments.",
    },
    paragraph: "IFRS 17.44",
    difficulty: "hard",
  },
  {
    code: "IFRS 17",
    question: {
      ar: "بعد تعديلات الفترة وقبل تحرير هامش الخدمة التعاقدية، بلغ الهامش 90,000 ريال. وحدات التغطية الحالية 2 والمستقبلية 4، وكلها متساوية. ما المبلغ المحرر للفترة؟",
      en: "After period adjustments and before release, CSM is SAR 90,000. There are two current and four future equal coverage units. How much CSM is released this period?",
    },
    choices: {
      ar: ["15,000 ريال", "30,000 ريال", "45,000 ريال", "90,000 ريال"],
      en: ["SAR 15,000", "SAR 30,000", "SAR 45,000", "SAR 90,000"],
    },
    answerIndex: 1,
    explanation: {
      ar: "توزع 90,000 ريال على 6 وحدات متساوية، ويخص وحدتي الفترة 90,000 × 2 ÷ 6 = 30,000 ريال.",
      en: "Allocate SAR 90,000 over six equal coverage units. The two current units receive 90,000 × 2 ÷ 6 = SAR 30,000.",
    },
    paragraph: "IFRS 17.B119",
    difficulty: "hard",
  },
  {
    code: "IFRS 18",
    question: {
      ar: "لمنشأة صناعية لا تمارس الاستثمار أو التمويل كنشاط رئيسي محدد، بلغ الربح التشغيلي 200 مليون ريال وصافي دخل فئة الاستثمار 30 مليونًا. ما «الربح قبل التمويل وضرائب الدخل»؟",
      en: "A manufacturer without a specified investing or financing main business activity reports SAR 200m operating profit and SAR 30m net investing-category income. What is profit before financing and income taxes?",
    },
    choices: {
      ar: ["170 مليون ريال", "200 مليون ريال", "230 مليون ريال", "لا يُعرض هذا المجموع"],
      en: ["SAR 170m", "SAR 200m", "SAR 230m", "This subtotal is not presented"],
    },
    answerIndex: 2,
    explanation: {
      ar: "هذا المجموع = الربح التشغيلي + دخل ومصروفات فئة الاستثمار = 200 + 30 = 230 مليون ريال. ينطبق السؤال على منشأة غير واقعة في استثناء فقرة 73.",
      en: "The subtotal adds the investing category to operating profit: 200 + 30 = SAR 230m. The stated entity is outside the paragraph 73 exception.",
    },
    paragraph: "IFRS 18.69–73",
    difficulty: "intermediate",
  },
  {
    code: "IFRS 18",
    question: {
      ar: "عرضت شركة في بيان للمستثمرين «الربح التشغيلي المعدل» بعد استبعاد 20 مليون ريال تكاليف إعادة هيكلة من ربح تشغيلي 130 مليونًا. أي إفصاح يلزم إذا استوفى المقياس بقية شروط المعيار؟",
      en: "In an investor release, an entity reports adjusted operating profit excluding SAR 20m restructuring costs from SAR 130m operating profit. If the other criteria are met, what disclosure is required?",
    },
    choices: {
      ar: [
        "حذف المقياس من البيان",
        "الإفصاح عنه كمقياس أداء تحدده الإدارة مع تسوية إلى الربح التشغيلي وآثار الضريبة والحصة غير المسيطرة",
        "تسجيل 20 مليونًا أصلًا",
        "الإفصاح عن الرقم المعدل فقط دون تسوية",
      ],
      en: [
        "Remove it from the release",
        "Disclose it as an MPM with a reconciliation to operating profit and tax/NCI effects",
        "Record SAR 20m as an asset",
        "Disclose only the adjusted figure without reconciliation",
      ],
    },
    answerIndex: 1,
    explanation: {
      ar: "المقياس المنشور خارج القوائم، إن عبّر عن رؤية الإدارة لأداء المنشأة ككل ولم يكن مستثنى، يخضع لإفصاحات مقياس الأداء المحدد من الإدارة، ومنها التسوية وآثار الضريبة والحصة غير المسيطرة.",
      en: "A public, whole-entity management subtotal that is not excluded is an MPM. The note requires a reconciliation and tax and NCI effects for reconciling items.",
    },
    paragraph: "IFRS 18.117–125",
    difficulty: "hard",
  },
  {
    code: "IFRS 18",
    question: {
      ar: "في قائمة الربح أو الخسارة لعام يطبق فيه IFRS 18، أين تصنف منشأة صناعية عادية فائدة التزام الإيجار البالغة 5 ملايين ريال؟",
      en: "In a year when IFRS 18 applies, where does an ordinary manufacturer classify SAR 5m interest on a lease liability in profit or loss?",
    },
    choices: {
      ar: ["فئة التشغيل", "فئة الاستثمار", "فئة التمويل", "فئة ضرائب الدخل"],
      en: ["Operating category", "Investing category", "Financing category", "Income tax category"],
    },
    answerIndex: 2,
    explanation: {
      ar: "فائدة التزام الإيجار تصنف ضمن فئة التمويل. استهلاك أصل حق الاستخدام في نشاط هذه المنشأة الصناعي يصنف تشغيليًا؛ وقد يختلف تصنيف الاستهلاك إذا استُخدم الأصل في نشاط استثماري. يسري ذلك عند تطبيق IFRS 18.",
      en: "Lease-liability interest is classified in financing. Depreciation of the ROU asset used in this manufacturer's operations is operating; depreciation classification can differ for an asset used in investing activities. This applies when IFRS 18 is adopted.",
    },
    paragraph: "IFRS 18.61, B54(c); IFRS 16.49 as amended",
    difficulty: "intermediate",
  },
  {
    code: "IAS 2",
    question: {
      ar: "اشترت شركة مخزونًا بسعر 1,000 ريال، وتكبدت شحنًا مباشرًا 100 ريال، وحصلت على خصم تجاري 50 ريالًا. ما تكلفة المخزون عند الشراء؟",
      en: "Inventory has a purchase price of SAR 1,000, directly attributable freight of SAR 100, and a SAR 50 trade discount. What is its purchase cost?",
    },
    choices: {
      ar: ["950 ريالًا", "1,000 ريال", "1,050 ريالًا", "1,100 ريال"],
      en: ["SAR 950", "SAR 1,000", "SAR 1,050", "SAR 1,100"],
    },
    answerIndex: 2,
    explanation: {
      ar: "تضاف تكلفة الشحن المباشرة ويخصم الخصم التجاري: 1,000 + 100 − 50 = 1,050 ريالًا.",
      en: "Add direct freight and deduct the trade discount: 1,000 + 100 − 50 = SAR 1,050.",
    },
    paragraph: "IAS 2.10–11",
    difficulty: "easy",
  },
  {
    code: "IAS 2",
    question: {
      ar: "مصروفات التصنيع الثابتة 100,000 ريال والطاقة العادية 1,000 وحدة، لكن الإنتاج الفعلي 800 وحدة. كم من المصروفات الثابتة يحمّل للمخزون وفق الطاقة العادية؟",
      en: "Fixed production overhead is SAR 100,000 and normal capacity is 1,000 units, but actual output is 800 units. How much fixed overhead is allocated to inventory using normal capacity?",
    },
    choices: {
      ar: ["80,000 ريال", "100,000 ريال", "120,000 ريال", "صفر"],
      en: ["SAR 80,000", "SAR 100,000", "SAR 120,000", "Zero"],
    },
    answerIndex: 0,
    explanation: {
      ar: "معدل التحميل العادي 100 ريال للوحدة؛ يحمّل 800 × 100 = 80,000 ريال، وتثبت المصروفات الثابتة غير المحملة البالغة 20,000 ريال مصروفًا.",
      en: "Normal allocation is SAR 100 per unit. Inventory receives 800 × 100 = SAR 80,000, and the SAR 20,000 unallocated overhead is expensed.",
    },
    paragraph: "IAS 2.13",
    difficulty: "intermediate",
  },
  {
    code: "IAS 2",
    question: {
      ar: "تكلفة صنف مخزون 75,000 ريال. خُفض سابقًا إلى صافي قيمة قابلة للتحقق 60,000، ثم ارتفعت قيمته الصافية إلى 70,000 ريال. ما عكس التخفيض الحالي؟",
      en: "An inventory item costs SAR 75,000. It was written down to NRV of SAR 60,000; its NRV later rises to SAR 70,000. What write-down reversal is recognised now?",
    },
    choices: {
      ar: ["صفر", "5,000 ريال", "10,000 ريال", "15,000 ريال"],
      en: ["Zero", "SAR 5,000", "SAR 10,000", "SAR 15,000"],
    },
    answerIndex: 2,
    explanation: {
      ar: "يرتفع الرصيد من 60,000 إلى 70,000 بعكس 10,000 ريال، ولا يجوز رفعه فوق التكلفة الأصلية 75,000 ريال.",
      en: "Reverse SAR 10,000 to lift the carrying amount from SAR 60,000 to SAR 70,000; it cannot exceed original cost of SAR 75,000.",
    },
    paragraph: "IAS 2.33",
    difficulty: "intermediate",
  },
  {
    code: "IAS 12",
    question: {
      ar: "القيمة الدفترية لأصل 500,000 ريال وأساسه الضريبي 350,000 ريال، ومعدل الضريبة النافذ 20%. ما التزام الضريبة المؤجلة الناشئ عن الفرق الخاضع للضريبة؟",
      en: "An asset has a SAR 500,000 carrying amount and SAR 350,000 tax base. The enacted tax rate is 20%. What deferred tax liability arises from the taxable temporary difference?",
    },
    choices: {
      ar: ["20,000 ريال", "30,000 ريال", "70,000 ريال", "100,000 ريال"],
      en: ["SAR 20,000", "SAR 30,000", "SAR 70,000", "SAR 100,000"],
    },
    answerIndex: 1,
    explanation: {
      ar: "الفرق المؤقت الخاضع للضريبة 150,000 ريال؛ 150,000 × 20% = 30,000 ريال التزام ضريبة مؤجلة، بافتراض عدم انطباق استثناء اعتراف.",
      en: "The taxable temporary difference is SAR 150,000; at 20%, the DTL is SAR 30,000, assuming no recognition exception applies.",
    },
    paragraph: "IAS 12.15, 46–47",
    difficulty: "intermediate",
  },
  {
    code: "IAS 12",
    question: {
      ar: "لدى شركة خسارة ضريبية قابلة للترحيل 100,000 ريال، لكن الأدلة تدعم وجود أرباح ضريبية مستقبلية تسمح باستخدام 40,000 ريال فقط. معدل الضريبة 20%. كم أصل الضريبة المؤجلة الممكن الاعتراف به؟",
      en: "An entity has SAR 100,000 tax losses carried forward, but evidence supports future taxable profit sufficient to use only SAR 40,000. The tax rate is 20%. How much DTA can be recognised?",
    },
    choices: {
      ar: ["صفر", "8,000 ريال", "12,000 ريال", "20,000 ريال"],
      en: ["Zero", "SAR 8,000", "SAR 12,000", "SAR 20,000"],
    },
    answerIndex: 1,
    explanation: {
      ar: "يقتصر الاعتراف على الجزء المرجح استخدامه: 40,000 × 20% = 8,000 ريال. تتطلب الخسائر السابقة فحصًا دقيقًا لأدلة الأرباح المستقبلية.",
      en: "Recognise only the supportable utilisation: SAR 40,000 × 20% = SAR 8,000. Existing losses call for careful evidence of future taxable profit.",
    },
    paragraph: "IAS 12.34–36",
    difficulty: "hard",
  },
  {
    code: "IAS 12",
    question: {
      ar: "عند بداية إيجار نشأ أصل حق استخدام والتزام إيجار بقيمة 100,000 ريال لكل منهما، وأساسهما الضريبي صفر لأن الخصم الضريبي يتبع الدفعات. معدل الضريبة 25%، وتوافر ربح ضريبي كافٍ. ما الاعتراف المؤجل الأولي؟",
      en: "At lease commencement an ROU asset and lease liability are each SAR 100,000, both with nil tax bases because tax deductions follow payments. The tax rate is 25% and utilisation is probable. What initial deferred tax is recognised?",
    },
    choices: {
      ar: [
        "لا ضريبة مؤجلة",
        "أصل 25,000 فقط",
        "التزام 25,000 فقط",
        "أصل والتزام ضريبة مؤجلة منفصلان، كل منهما 25,000 ريال",
      ],
      en: [
        "No deferred tax",
        "SAR 25,000 DTA only",
        "SAR 25,000 DTL only",
        "Separate SAR 25,000 DTA and SAR 25,000 DTL",
      ],
    },
    answerIndex: 3,
    explanation: {
      ar: "نشأ فرق خاضع للضريبة من الأصل وفرق قابل للخصم من الالتزام بالقيمة نفسها؛ لا ينطبق استثناء الاعتراف الأولي على هذه المعاملة ذات الفروق المتساوية. يعترف بكل من الأصل والالتزام بمبلغ 25,000 ريال.",
      en: "The asset produces a taxable difference and the liability a matching deductible difference. The initial recognition exception does not cover this equal-difference transaction; recognise separate SAR 25,000 DTL and DTA.",
    },
    paragraph: "IAS 12.15(b)(iii), 22A, 24(c)",
    difficulty: "hard",
  },
  {
    code: "IAS 16",
    question: {
      ar: "اشترت شركة آلة بـ100,000 ريال، ودفعت 5,000 للنقل و10,000 للتركيب و3,000 لتدريب العاملين. ما تكلفة الآلة عند الاعتراف؟",
      en: "An entity buys a machine for SAR 100,000 and pays SAR 5,000 delivery, SAR 10,000 installation and SAR 3,000 staff training. What is initial machine cost?",
    },
    choices: {
      ar: ["100,000 ريال", "105,000 ريال", "115,000 ريال", "118,000 ريال"],
      en: ["SAR 100,000", "SAR 105,000", "SAR 115,000", "SAR 118,000"],
    },
    answerIndex: 2,
    explanation: {
      ar: "النقل والتركيب لازمان لجعل الآلة جاهزة للاستخدام، فيرسملان. تدريب العاملين مصروف: 100,000 + 5,000 + 10,000 = 115,000 ريال.",
      en: "Delivery and installation bring the machine to working condition and are capitalised. Training is expensed: 100,000 + 5,000 + 10,000 = SAR 115,000.",
    },
    paragraph: "IAS 16.16–17, 19",
    difficulty: "easy",
  },
  {
    code: "IAS 16",
    question: {
      ar: "تكلفة أصل 120,000 ريال وقيمته المتبقية 20,000 وعمره النافع 5 سنوات. وفق القسط الثابت، كم مصروف الإهلاك السنوي بعد جاهزية الأصل للاستخدام؟",
      en: "An asset costs SAR 120,000, has SAR 20,000 residual value and a five-year useful life. Under straight-line depreciation, what is annual depreciation once available for use?",
    },
    choices: {
      ar: ["16,000 ريال", "20,000 ريال", "24,000 ريال", "28,000 ريال"],
      en: ["SAR 16,000", "SAR 20,000", "SAR 24,000", "SAR 28,000"],
    },
    answerIndex: 1,
    explanation: {
      ar: "القيمة القابلة للإهلاك = 120,000 − 20,000 = 100,000 ريال، وتقسم على 5 سنوات = 20,000 ريال سنويًا.",
      en: "Depreciable amount is 120,000 − 20,000 = SAR 100,000; over five years, annual straight-line depreciation is SAR 20,000.",
    },
    paragraph: "IAS 16.53, 55, 62",
    difficulty: "easy",
  },
  {
    code: "IAS 16",
    question: {
      ar: "استبدلت منشأة مكونًا رئيسيًا لآلة بمكون جديد تكلفته 15,000 ريال. كانت القيمة الدفترية للمكون القديم 8,000 ريال، وتحققت شروط رسملة الجديد. ما المعالجة؟",
      en: "An entity replaces a major machine component with one costing SAR 15,000. The old component's carrying amount is SAR 8,000 and the new component qualifies for recognition. What is the treatment?",
    },
    choices: {
      ar: [
        "رسملة 15,000 وإبقاء القديم",
        "تحميل 15,000 مصروفًا فقط",
        "رسملة 15,000 وإلغاء اعتراف القديم 8,000",
        "رسملة صافي 7,000 دون إلغاء القديم",
      ],
      en: [
        "Capitalise 15,000 and retain the old component",
        "Expense 15,000 only",
        "Capitalise 15,000 and derecognise the old 8,000",
        "Capitalise net 7,000 without derecognition",
      ],
    },
    answerIndex: 2,
    explanation: {
      ar: "يرسمل البديل المستوفي للشروط وتلغى القيمة الدفترية للجزء المستبدل، حتى لا يبقى المكونان ضمن الأصل في الوقت نفسه.",
      en: "Capitalise the qualifying replacement and derecognise the old component's carrying amount to avoid retaining both components in the asset.",
    },
    paragraph: "IAS 16.13, 70",
    difficulty: "intermediate",
  },
  {
    code: "IAS 21",
    question: {
      ar: "اشترت شركة سعودية بضاعة بمبلغ 100,000 دولار على الحساب عندما كان الدولار 3.70 ريال، وبقي الدين قائمًا في نهاية الفترة عندما أصبح 3.75 ريال. ما فرق الصرف؟",
      en: "A Saudi entity buys goods on credit for USD 100,000 at SAR 3.70/USD. The payable remains open at period-end when the rate is SAR 3.75/USD. What exchange difference arises?",
    },
    choices: {
      ar: ["ربح 5,000 ريال", "خسارة 5,000 ريال", "خسارة 50,000 ريال", "لا فرق"],
      en: ["SAR 5,000 gain", "SAR 5,000 loss", "SAR 50,000 loss", "No difference"],
    },
    answerIndex: 1,
    explanation: {
      ar: "زاد الالتزام النقدي من 370,000 إلى 375,000 ريال؛ يسجل فرق 5,000 ريال خسارة صرف في الربح أو الخسارة.",
      en: "The monetary payable rises from SAR 370,000 to SAR 375,000; the SAR 5,000 increase is an exchange loss in profit or loss.",
    },
    paragraph: "IAS 21.21, 23, 28",
    difficulty: "intermediate",
  },
  {
    code: "IAS 21",
    question: {
      ar: "سجلت منشأة مخزونًا غير نقدي بالتكلفة عند شرائه بـ10,000 دولار وسعر صرف 3.70 ريال. في تاريخ التقرير أصبح السعر 3.80 ريال، ولم يُعد قياس المخزون بقيمة عادلة. ما قيمته من منظور سعر الصرف وحده؟",
      en: "An entity records non-monetary inventory at historical cost of USD 10,000 when the rate is SAR 3.70. At reporting date the rate is SAR 3.80, and inventory is not remeasured at fair value. What amount results from currency translation alone?",
    },
    choices: {
      ar: ["37,000 ريال", "38,000 ريال", "فرق صرف ربح 1,000 ريال", "يعتمد على معدل الإقفال حتمًا"],
      en: ["SAR 37,000", "SAR 38,000", "SAR 1,000 exchange gain", "Must use the closing rate"],
    },
    answerIndex: 0,
    explanation: {
      ar: "الأصل غير النقدي المسجل بالتكلفة يحتفظ بسعر يوم المعاملة: 10,000 × 3.70 = 37,000 ريال، مع بقاء اختبار صافي القيمة القابلة للتحقق مسألة منفصلة.",
      en: "A non-monetary historical-cost item retains the transaction-date rate: 10,000 × 3.70 = SAR 37,000. An NRV test is a separate question.",
    },
    paragraph: "IAS 21.23(b)",
    difficulty: "intermediate",
  },
  {
    code: "IAS 21",
    question: {
      ar: "لشركة تابعة أجنبية أصول بقيمة 1,000,000 وحدة من عملتها الوظيفية. سعر الإقفال 3.75 ريال وسعر تاريخ إصدار أسهمها 3.50 ريال. بأي مبلغ تترجم الأصول في القوائم المجمعة بالريال؟",
      en: "A foreign subsidiary has assets of 1,000,000 units of functional currency. Closing rate is SAR 3.75 and historical share-issue rate is SAR 3.50. At what amount are its assets translated into SAR consolidated statements?",
    },
    choices: {
      ar: ["3,500,000 ريال", "3,625,000 ريال", "3,750,000 ريال", "لا تترجم"],
      en: ["SAR 3,500,000", "SAR 3,625,000", "SAR 3,750,000", "No translation"],
    },
    answerIndex: 2,
    explanation: {
      ar: "تترجم أصول العملية الأجنبية بسعر الإقفال: 1,000,000 × 3.75 = 3,750,000 ريال. سعر الأسهم التاريخي يخص عناصر حقوق الملكية.",
      en: "Assets of a foreign operation use the closing rate: 1,000,000 × 3.75 = SAR 3,750,000. The historical share rate relates to equity.",
    },
    paragraph: "IAS 21.39(a)",
    difficulty: "intermediate",
  },
  {
    code: "IAS 33",
    question: {
      ar: "ربح الفترة العائد لحملة حقوق الملكية 1,000,000 ريال، وتوزيعات الأسهم الممتازة المستحقة 100,000، والمتوسط المرجح للأسهم العادية 300,000 سهم. ما ربحية السهم الأساسية؟",
      en: "Profit attributable to equity holders is SAR 1,000,000, preference dividends are SAR 100,000 and weighted average ordinary shares are 300,000. What is basic EPS?",
    },
    choices: {
      ar: ["2.70 ريال", "3.00 ريالات", "3.33 ريالات", "3.67 ريالات"],
      en: ["SAR 2.70", "SAR 3.00", "SAR 3.33", "SAR 3.67"],
    },
    answerIndex: 1,
    explanation: {
      ar: "البسط المتاح للعادية 900,000 ريال؛ ربحية السهم = 900,000 ÷ 300,000 = 3 ريالات.",
      en: "Profit available to ordinary shares is SAR 900,000, so EPS = 900,000 ÷ 300,000 = SAR 3.00.",
    },
    paragraph: "IAS 33.10–20",
    difficulty: "easy",
  },
  {
    code: "IAS 33",
    question: {
      ar: "لدى شركة 100,000 خيار سهم مستحقة طوال الفترة ولا تشترط خدمات مستقبلية، بسعر ممارسة 20 ريالًا ومتوسط سعر سوقي 25 ريالًا. كم سهمًا إضافيًا يدخل مقام ربحية السهم المخففة وفق طريقة أسهم الخزينة؟",
      en: "An entity has 100,000 options vested throughout the period with no future services required, a SAR 20 exercise price and SAR 25 average market price. How many incremental shares enter diluted EPS under the treasury-share method?",
    },
    choices: {
      ar: ["صفر", "20,000 سهم", "80,000 سهم", "100,000 سهم"],
      en: ["Zero", "20,000 shares", "80,000 shares", "100,000 shares"],
    },
    answerIndex: 1,
    explanation: {
      ar: "المتحصل الافتراضي 2,000,000 ريال يشتري 80,000 سهم بسعر 25؛ الزيادة الصافية = 100,000 − 80,000 = 20,000 سهم.",
      en: "Assumed proceeds of SAR 2m repurchase 80,000 shares at SAR 25. Incremental shares are 100,000 − 80,000 = 20,000.",
    },
    paragraph: "IAS 33.45–47",
    difficulty: "intermediate",
  },
  {
    code: "IAS 33",
    question: {
      ar: "ربح الأسهم العادية 1,000,000 ريال وعددها المرجح 500,000. يضيف سند قابل للتحويل 75,000 ريال فائدة بعد الضريبة و50,000 سهم افتراضي. ما ربحية السهم المخففة إذا كان السند مخففًا؟",
      en: "Profit for ordinary shares is SAR 1,000,000 on 500,000 weighted shares. A convertible adds SAR 75,000 after-tax interest and 50,000 assumed shares. What is diluted EPS if the convertible is dilutive?",
    },
    choices: {
      ar: ["1.95 ريال تقريبًا", "2.00 ريال", "2.15 ريال", "2.25 ريال"],
      en: ["About SAR 1.95", "SAR 2.00", "SAR 2.15", "SAR 2.25"],
    },
    answerIndex: 0,
    explanation: {
      ar: "الربحية المخففة = (1,000,000 + 75,000) ÷ (500,000 + 50,000) = 1.9545 ريال تقريبًا، وهي دون الأساسية البالغة ريالين.",
      en: "Diluted EPS = (1,000,000 + 75,000) ÷ (500,000 + 50,000) ≈ SAR 1.9545, below the SAR 2.00 basic EPS.",
    },
    paragraph: "IAS 33.31–36, 41",
    difficulty: "hard",
  },
  {
    code: "IAS 36",
    question: {
      ar: "القيمة الدفترية لأصل 300,000 ريال. قيمته العادلة ناقص تكاليف الاستبعاد 260,000، وقيمته قيد الاستخدام 280,000. ما خسارة الهبوط؟",
      en: "An asset's carrying amount is SAR 300,000. Fair value less costs of disposal is SAR 260,000 and value in use is SAR 280,000. What impairment loss is recognised?",
    },
    choices: {
      ar: ["صفر", "20,000 ريال", "40,000 ريال", "60,000 ريال"],
      en: ["Zero", "SAR 20,000", "SAR 40,000", "SAR 60,000"],
    },
    answerIndex: 1,
    explanation: {
      ar: "القيمة القابلة للاسترداد هي الأعلى بين 260,000 و280,000، أي 280,000 ريال؛ الخسارة = 300,000 − 280,000 = 20,000 ريال.",
      en: "Recoverable amount is the higher of SAR 260,000 and SAR 280,000, or SAR 280,000. Impairment is SAR 300,000 − 280,000 = SAR 20,000.",
    },
    paragraph: "IAS 36.18, 59",
    difficulty: "intermediate",
  },
  {
    code: "IAS 36",
    question: {
      ar: "وحدة مولدة للنقد تحتوي شهرة 40,000 ريال وأصولًا أخرى 160,000. قيمتها القابلة للاسترداد 170,000 ريال، ولا توجد قيود من الحد الأدنى للأصول. كيف يوزع هبوط 30,000 ريال أولًا؟",
      en: "A CGU contains SAR 40,000 goodwill and SAR 160,000 other assets. Recoverable amount is SAR 170,000, giving SAR 30,000 impairment; no individual asset floor constrains allocation. Where is the loss allocated first?",
    },
    choices: {
      ar: ["كلها إلى الشهرة", "كلها إلى الأصول الأخرى", "15,000 إلى كل فئة", "تؤجل لحين البيع"],
      en: ["All to goodwill", "All to other assets", "SAR 15,000 to each", "Defer until disposal"],
    },
    answerIndex: 0,
    explanation: {
      ar: "خسارة الوحدة 200,000 − 170,000 = 30,000 ريال، وتخصم أولًا من الشهرة؛ يبقى من الشهرة 10,000 ريال.",
      en: "CGU impairment is SAR 200,000 − SAR 170,000 = SAR 30,000 and is applied to goodwill first, leaving SAR 10,000 goodwill.",
    },
    paragraph: "IAS 36.104",
    difficulty: "intermediate",
  },
  {
    code: "IAS 36",
    question: {
      ar: "هبط أصل سابقًا حتى أصبحت قيمته الدفترية 60,000 ريال. القيمة التي كان سيبلغها الآن دون الهبوط 90,000، والقيمة القابلة للاسترداد الجديدة 95,000 ريال. كم أقصى عكس للهبوط؟",
      en: "An impaired asset now carries SAR 60,000. Without the earlier impairment it would carry SAR 90,000; new recoverable amount is SAR 95,000. What maximum impairment reversal is permitted?",
    },
    choices: {
      ar: ["صفر", "30,000 ريال", "35,000 ريال", "95,000 ريال"],
      en: ["Zero", "SAR 30,000", "SAR 35,000", "SAR 95,000"],
    },
    answerIndex: 1,
    explanation: {
      ar: "العكس يرفع الأصل إلى الأقل من القيمة القابلة للاسترداد 95,000 والقيمة الافتراضية دون هبوط 90,000؛ لذلك العكس 90,000 − 60,000 = 30,000 ريال. لا ينطبق ذلك على الشهرة.",
      en: "The reversal is capped at the lower of SAR 95,000 recoverable amount and SAR 90,000 no-impairment carrying amount: SAR 30,000. Goodwill is excluded from reversals.",
    },
    paragraph: "IAS 36.117, 124",
    difficulty: "hard",
  },
  {
    code: "IAS 37",
    question: {
      ar: "تبيع منشأة 100 جهاز بضمان. تتوقع ألا يحتاج 80% إصلاحًا، وأن يحتاج 15% إصلاحًا بتكلفة 100 ريال للجهاز، وأن يستبدل 5% بتكلفة 400 ريال. ما مخصص الضمان المتوقع؟",
      en: "An entity sells 100 devices with warranties. It expects 80% no claim, 15% repair costing SAR 100 each and 5% replacement costing SAR 400 each. What is the expected warranty provision?",
    },
    choices: {
      ar: ["1,500 ريال", "2,000 ريال", "3,500 ريال", "5,000 ريال"],
      en: ["SAR 1,500", "SAR 2,000", "SAR 3,500", "SAR 5,000"],
    },
    answerIndex: 2,
    explanation: {
      ar: "التكلفة المتوقعة للوحدة = 80% × صفر + 15% × 100 + 5% × 400 = 35 ريالًا؛ للمئة جهاز 3,500 ريال.",
      en: "Expected cost per device is 80% × 0 + 15% × 100 + 5% × 400 = SAR 35, or SAR 3,500 for 100 devices.",
    },
    paragraph: "IAS 37.36, 39",
    difficulty: "intermediate",
  },
  {
    code: "IAS 37",
    question: {
      ar: "عقد متبقٍ لا يحقق أي منافع اقتصادية. تكلفة استكماله 120,000 ريال، بينما غرامة الإنهاء 80,000 ريال. بعد فحص هبوط الأصول المرتبطة، ما مخصص العقد المثقل؟",
      en: "A remaining contract yields no economic benefits. Completing it costs SAR 120,000, while cancellation penalty is SAR 80,000. After testing related assets for impairment, what onerous-contract provision is required?",
    },
    choices: {
      ar: ["صفر", "40,000 ريال", "80,000 ريال", "120,000 ريال"],
      en: ["Zero", "SAR 40,000", "SAR 80,000", "SAR 120,000"],
    },
    answerIndex: 2,
    explanation: {
      ar: "التكلفة التي لا يمكن تجنبها هي الأقل بين تكلفة الوفاء 120,000 وغرامة الإنهاء 80,000؛ مع عدم وجود منافع، يثبت مخصص 80,000 ريال بعد معالجة هبوط الأصول المستخدمة.",
      en: "The unavoidable cost is the lower of SAR 120,000 fulfilment and SAR 80,000 cancellation. With no benefits, provision is SAR 80,000 after recognising any impairment of fulfilment assets.",
    },
    paragraph: "IAS 37.68–69",
    difficulty: "hard",
  },
  {
    code: "IAS 37",
    question: {
      ar: "اعترفت شركة بمخصص دعوى 100,000 ريال، وتأكد استرداد 70,000 ريال من شركة التأمين إذا سوت الدعوى. كيف يظهر المركز المالي؟",
      en: "An entity recognises a SAR 100,000 litigation provision and is virtually certain to recover SAR 70,000 from an insurer if it settles. How is the statement of financial position presented?",
    },
    choices: {
      ar: [
        "التزام صافٍ 30,000 فقط",
        "مخصص 100,000 وأصل استرداد منفصل 70,000",
        "أصل 70,000 دون مخصص",
        "مخصص 170,000",
      ],
      en: [
        "Net SAR 30,000 liability only",
        "SAR 100,000 provision and separate SAR 70,000 reimbursement asset",
        "SAR 70,000 asset with no provision",
        "SAR 170,000 provision",
      ],
    },
    answerIndex: 1,
    explanation: {
      ar: "المخصص يعرض كاملًا، ويعترف بأصل الاسترداد منفصلًا عندما يكون تحصيله مؤكدًا تقريبًا. المقاصة في قائمة المركز المالي غير مسموحة.",
      en: "Present the full provision and a separate reimbursement asset once recovery is virtually certain. They are not offset in the statement of financial position.",
    },
    paragraph: "IAS 37.53–54",
    difficulty: "intermediate",
  },
];

const counts = new Map<string, number>();

export const IFRS_PHASE9_APPLIED_QUESTIONS: ExamQuestion[] = cases.map((item) => {
  const sequence = (counts.get(item.code) ?? 0) + 1;
  counts.set(item.code, sequence);
  return {
    id: `ifrs-p9-${item.code.toLowerCase().replace(" ", "")}-${String(sequence).padStart(2, "0")}`,
    track: "IFRS",
    topic: `${item.code} — applied scenarios`,
    question: item.question,
    choices: item.choices,
    answerIndex: item.answerIndex,
    explanation: item.explanation,
    reference: `${item.paragraph}; technical cross-check: ramyatrouny/ifrs-skill @ fda78bbc`,
    difficulty: item.difficulty,
    examDomain: item.code,
  };
});

if (
  IFRS_PHASE9_APPLIED_QUESTIONS.length !==
    IFRS_PHASE9_TARGETS.length * IFRS_PHASE9_QUESTIONS_PER_STANDARD ||
  IFRS_PHASE9_TARGETS.some((code) => counts.get(code) !== IFRS_PHASE9_QUESTIONS_PER_STANDARD)
) {
  throw new Error("Phase 9 applied-question coverage is incomplete");
}
