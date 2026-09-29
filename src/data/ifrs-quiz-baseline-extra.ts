import type { ExamQuestion } from "@/lib/exam-bank";

/** Raises legacy single-question standards to a two-question baseline. */
export const IFRS_BASELINE_EXTRA_QUESTION_SEED = [
  {
    "id": "ifrs-baseline-ifrs3-02",
    "track": "IFRS",
    "topic": "IFRS 3 — Acquisition method",
    "question": {
      "ar": "ما الطريقة المحاسبية المستخدمة لتجميع الأعمال الواقع ضمن نطاق IFRS 3؟",
      "en": "Which accounting method is used for a business combination within IFRS 3?"
    },
    "choices": {
      "ar": [
        "طريقة الاستحواذ",
        "طريقة التجميع النسبي دائماً",
        "طريقة التكلفة فقط",
        "طريقة النقد"
      ],
      "en": [
        "Acquisition method",
        "Always proportionate consolidation",
        "Cost method only",
        "Cash method"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "يستخدم IFRS 3 طريقة الاستحواذ، وتشمل تحديد المستحوذ وقياس المقابل والأصول والالتزامات القابلة للتحديد والشهرة أو ربح الشراء.",
      "en": "IFRS 3 uses the acquisition method, including identifying the acquirer, measuring consideration, identifiable assets/liabilities, and goodwill or bargain purchase gain."
    },
    "reference": "IFRS 3 — acquisition method",
    "difficulty": "easy",
    "examDomain": "Acquisition method"
  },
  {
    "id": "ifrs-baseline-ifrs10-02",
    "track": "IFRS",
    "topic": "IFRS 10 — Consolidation",
    "question": {
      "ar": "متى تُدرج الشركة التابعة في القوائم الموحدة بصورة عامة؟",
      "en": "When is a subsidiary generally included in consolidated financial statements?"
    },
    "choices": {
      "ar": [
        "من تاريخ حصول المستثمر على السيطرة حتى تاريخ فقدها",
        "من تاريخ دفع أول فاتورة",
        "فقط عند نهاية السنة",
        "بعد سنة من الاستحواذ"
      ],
      "en": [
        "From the date control is obtained until the date control is lost",
        "From first invoice payment",
        "Only at year-end",
        "One year after acquisition"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "التوحيد يرتبط بفترة السيطرة؛ يبدأ عند الحصول على السيطرة وينتهي عند فقدها.",
      "en": "Consolidation follows the period of control, beginning when control is obtained and ending when it is lost."
    },
    "reference": "IFRS 10 — consolidation period",
    "difficulty": "easy",
    "examDomain": "Consolidation"
  },
  {
    "id": "ifrs-baseline-ifrs13-02",
    "track": "IFRS",
    "topic": "IFRS 13 — Fair value hierarchy",
    "question": {
      "ar": "أي مستوى في هرم القيمة العادلة يستخدم أسعاراً معلنة غير معدلة لأصول أو التزامات مماثلة في سوق نشط؟",
      "en": "Which fair value hierarchy level uses unadjusted quoted prices for identical assets or liabilities in an active market?"
    },
    "choices": {
      "ar": [
        "المستوى 1",
        "المستوى 2",
        "المستوى 3",
        "لا يوجد"
      ],
      "en": [
        "Level 1",
        "Level 2",
        "Level 3",
        "None"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "مدخلات المستوى 1 هي الأسعار المعلنة غير المعدلة لأصول أو التزامات مماثلة في أسواق نشطة يمكن للمنشأة الوصول إليها.",
      "en": "Level 1 inputs are unadjusted quoted prices for identical assets or liabilities in active markets accessible to the entity."
    },
    "reference": "IFRS 13 — fair value hierarchy",
    "difficulty": "easy",
    "examDomain": "Fair value hierarchy"
  },
  {
    "id": "ifrs-baseline-ias7-02",
    "track": "IFRS",
    "topic": "IAS 7 — Cash flows",
    "question": {
      "ar": "أي نشاط يمثل عادةً الحصول على قرض بنكي نقدي؟",
      "en": "Which activity generally includes cash proceeds from a bank borrowing?"
    },
    "choices": {
      "ar": [
        "تمويلي",
        "تشغيلي",
        "استثماري",
        "غير نقدي"
      ],
      "en": [
        "Financing",
        "Operating",
        "Investing",
        "Non-cash"
      ]
    },
    "answerIndex": 0,
    "explanation": {
      "ar": "الحصول على تمويل من قرض يغير حجم وهيكل الاقتراض، ولذلك يصنف عادةً كتدفق تمويلي.",
      "en": "Borrowing changes the size and composition of financing and is generally classified as a financing cash flow."
    },
    "reference": "IAS 7 — financing activities",
    "difficulty": "easy",
    "examDomain": "Cash-flow classification"
  }
] satisfies ExamQuestion[];
