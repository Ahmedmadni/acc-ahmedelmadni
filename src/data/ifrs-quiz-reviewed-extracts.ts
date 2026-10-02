import type { ExamQuestion } from "@/lib/exam-bank";

/** Reviewed source extracts. Public references intentionally cite IFRS/IAS only. */
export const IFRS_REVIEWED_EXTRACT_QUESTIONS: ExamQuestion[] = [
  {
    id: "ifrs-reviewed-ias16-disposal-01",
    track: "IFRS",
    topic: "IAS 16 — disposal after revaluation",
    question: {
      ar: "اشترت شركة أرضًا بمبلغ 15 مليونًا في 20X0، ثم أعادت تقييمها في تواريخ مختلفة حتى بلغت قيمتها الدفترية 23 مليونًا في 20X7، وباعتها مقابل 21 مليونًا في 20X7، لكن النقد لم يُحصّل حتى 20X8. مع تجاهل الضريبة، ما الربح أو الخسارة المسجلة في 20X7؟",
      en: "A company bought some land for $15m in 20X0, revalued it at various dates up to $23m in 20X7, and sold it for $21m in 20X7, but did not receive any cash until 20X8. Ignoring tax, the gain/loss recorded in 20X7 should be:",
    },
    choices: {
      ar: ["صفر", "ربح 6 ملايين", "خسارة مليونيْن", "ربح 21 مليونًا"],
      en: ["Zero", "A gain of $6m", "A loss of $2m", "A gain of $21m"],
    },
    answerIndex: 2,
    explanation: {
      ar: "تستبعد الأرض في 20X7 بالقيمة الدفترية 23 مليونًا، ويثبت مقابل البيع 21 مليونًا؛ لذلك تظهر خسارة قدرها مليونا دولار في فترة البيع. تأخر التحصيل إلى 20X8 لا يؤجل الاستبعاد.",
      en: "The land is derecognised in 20X7 at its $23m carrying amount against $21m proceeds, producing a $2m loss in the disposal period. Collection in 20X8 does not defer derecognition.",
    },
    reference: "IAS 16.67–71",
    difficulty: "intermediate",
    examDomain: "IAS 16 disposal",
  },
  {
    id: "ifrs-reviewed-ifrs15-broadband-01",
    track: "IFRS",
    topic: "IFRS 15 — bundled router and broadband",
    question: {
      ar: "تقدم شركة راوتر لاسلكيًا وباقة إنترنت فائق السرعة لمدة 12 شهرًا مقابل 220 دولارًا تدفع مقدمًا. يباع الراوتر منفردًا بـ30 دولارًا والخدمة منفردة بـ20 دولارًا شهريًا. متى يعترف بالمبلغ المخصص لباقـة الإنترنت؟",
      en: "EF Co provides a wireless router and 12 months' superfast broadband package to a customer for $220 payable in advance. A customer buying the router separately would pay $30 and a customer buying the broadband package separately would pay $20 per month. When is the transaction price allocated to the broadband package recognised?",
    },
    choices: {
      ar: [
        "فور استلام 220 دولارًا",
        "على مدى فترة الاثني عشر شهرًا",
        "في نهاية الاثني عشر شهرًا فقط",
        "يثبت 30 دولارًا فورًا ويوزع الباقي على الفترة",
      ],
      en: [
        "Immediately, when the $220 payment is received",
        "Over the 12 month period",
        "At the end of the 12 month period",
        "$30 immediately with the remaining spread over the contract period",
      ],
    },
    answerIndex: 1,
    explanation: {
      ar: "الخدمة التزام أداء يُوفى على مدى الوقت مع حصول العميل على المنفعة واستهلاكها؛ لذلك يعترف بالمبلغ المخصص للخدمة خلال 12 شهرًا، وليس لمجرد التحصيل مقدمًا.",
      en: "Broadband is a performance obligation satisfied over time as the customer receives and consumes the benefit, so its allocated amount is recognised over 12 months rather than on advance collection.",
    },
    reference: "IFRS 15.31, 35, 73–86",
    difficulty: "intermediate",
    examDomain: "IFRS 15 recognition over time",
  },
];
