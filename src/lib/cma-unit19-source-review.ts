/** Unit 19 review-only ledger; no source certification or scoring release. */
export const CMA_UNIT19_REVIEW_HOLDS = [
  {
    "id": "19.1.3",
    "page": 1211,
    "kind": "ambiguous-answer",
    "message": {
      "ar": "إنشاء قاعدة البيانات وتعديلها وإدارة صلاحيات الوصول من وظائف نظام إدارة قواعد البيانات؛ يلزم تحديد المقصود.",
      "en": "Creation/modification and access authorization are both DBMS functions; clarify intended scope."
    }
  },
  {
    "id": "19.1.6",
    "page": 1213,
    "kind": "absolute-claim",
    "message": {
      "ar": "وحدة التخزين المنطقية لا تعني وجود نسخة مادية واحدة من كل عنصر.",
      "en": "Logical integration does not require a single physical copy of each data item."
    }
  },
  {
    "id": "19.1.7",
    "page": 1214,
    "kind": "ambiguous-answer",
    "message": {
      "ar": "قد تشكل البيانات التاريخية للمعاملات أساس النماذج التنبؤية؛ يلزم تمييز المعالجة من التنبؤ.",
      "en": "Historical transaction data may feed predictive models; distinguish processing from prediction."
    }
  },
  {
    "id": "19.1.9",
    "page": 1215,
    "kind": "absolute-claim",
    "message": {
      "ar": "استقلال البيانات لا يضمن عدم تأثر التطبيقات بجميع تغييرات المخطط المنطقي.",
      "en": "Data independence does not guarantee applications are unaffected by arbitrary logical schema changes."
    }
  },
  {
    "id": "19.1.26",
    "page": 1228,
    "kind": "responsibility-scope",
    "message": {
      "ar": "يلزم فصل سجل الشيكات عن ترحيل اليومية وتمييز الشيكات المطلوبة من الصادرة.",
      "en": "Distinguish check register preparation from journal posting and requested from issued checks."
    }
  },
  {
    "id": "19.1.27",
    "page": 1229,
    "kind": "responsibility-scope",
    "message": {
      "ar": "الجمع بين الحيازة والترحيل يستلزم تحديد الضوابط المستقلة أو الآلية.",
      "en": "Combining custody and posting requires clarification of independent or automated controls."
    }
  },
  {
    "id": "19.1.28",
    "page": 1230,
    "kind": "ambiguous-answer",
    "message": {
      "ar": "يتداخل اعتماد إضافة الموظفين مع اعتماد جميع تغييرات سجلاتهم؛ يلزم تحديد النطاق.",
      "en": "Approval of additions overlaps approval of all employee record changes; clarify scope."
    }
  },
  {
    "id": "19.1.29",
    "page": 1231,
    "kind": "authorization-scope",
    "message": {
      "ar": "الإيداع المباشر لا يعالج وحده مخاطر تعديل الحسابات البنكية بواسطة قسم الرواتب.",
      "en": "Direct deposit alone does not mitigate unauthorized payroll bank-account changes."
    }
  },
  {
    "id": "19.1.32",
    "page": 1233,
    "kind": "rationale-mismatch",
    "message": {
      "ar": "المطابقة لا تشمل فاتورة المورد رغم الادعاء الواسع بخلو المشتريات من الأخطاء الجوهرية.",
      "en": "Invoice matching is omitted despite broad assurance about recorded purchase errors."
    }
  },
  {
    "id": "19.1.35",
    "page": 1236,
    "kind": "responsibility-scope",
    "message": {
      "ar": "بدء طلب الشراء يختلف بحسب الهيكل التنظيمي ولا ينحصر في رقابة المخزون.",
      "en": "Requisition initiation depends on organizational design and is not always inventory control."
    }
  },
  {
    "id": "19.1.40",
    "page": 1240,
    "kind": "rationale-mismatch",
    "message": {
      "ar": "النص يصف مطابقة أمر البيع بنسخة الشحن بينما يتطلب الشرح المطابقة بالفاتورة.",
      "en": "Stem compares sales order and shipping copy; rationale requires invoice comparison."
    }
  },
  {
    "id": "19.2.6",
    "page": 1249,
    "kind": "risk-scope",
    "message": {
      "ar": "مخاطر الوصول غير المصرح به تعتمد على تصميم الضوابط، لا على نوع وسيط التخزين وحده.",
      "en": "Unauthorized access risk depends on controls, not simply digital versus manual storage."
    }
  },
  {
    "id": "19.2.7",
    "page": 1250,
    "kind": "risk-scope",
    "message": {
      "ar": "مخاطر تحويل البيانات وتركيزها تعتمد على البنية التقنية وطريقة الإدخال.",
      "en": "Conversion and concentration risks depend on architecture and input flow."
    }
  },
  {
    "id": "19.2.11",
    "page": 1253,
    "kind": "absolute-claim",
    "message": {
      "ar": "المعالجة الحاسوبية لا تلغي أخطاء الحساب والبرمجة والدقة والمدخلات على إطلاقها.",
      "en": "Computer processing does not universally eliminate calculation, program, precision or input errors."
    }
  },
  {
    "id": "19.2.12",
    "page": 1254,
    "kind": "reconstructed-source",
    "message": {
      "ar": "النص معاد البناء ويلزم مطابقته بالصفحة الأصلية المصرح بها.",
      "en": "Reconstructed source requires original-page comparison."
    }
  },
  {
    "id": "19.2.13",
    "page": 1255,
    "kind": "risk-scope",
    "message": {
      "ar": "توفير أجهزة للعمل عن بعد لا يثبت وحده إتاحة النظام أو تحقق ميزة تنافسية.",
      "en": "Remote laptops alone do not establish availability or competitive advantage."
    }
  },
  {
    "id": "19.2.19",
    "page": 1258,
    "kind": "definition-mismatch",
    "message": {
      "ar": "تعريف توليف البيانات مطابق لتعريف التحليلات في السؤال 2؛ يلزم تمييز المفهومين.",
      "en": "Synthesis is defined identically to analytics in Q2; verify the distinction."
    }
  },
  {
    "id": "19.2.25",
    "page": 1262,
    "kind": "retention-scope",
    "message": {
      "ar": "انتهاء المنفعة لا يوجب الأرشفة دائمًا؛ يلزم مراعاة سياسة الاحتفاظ والتخلص المصرح به.",
      "en": "End of usefulness does not always mandate archival; retention and disposal policies matter."
    }
  },
  {
    "id": "19.2.27",
    "page": 1263,
    "kind": "ambiguous-answer",
    "message": {
      "ar": "وجود نسخة مؤرشفة لا يثبت إزالة جميع النسخ النشطة.",
      "en": "An archived copy does not establish removal of all active copies."
    }
  },
  {
    "id": "19.2.28",
    "page": 1264,
    "kind": "inferred-key",
    "message": {
      "ar": "مفتاح الإجابة مستنتج مع تداخل مصطلحي الحذف والإزالة النهائية؛ يلزم الرجوع للمصدر.",
      "en": "Inferred key and overlapping deletion/purging terminology require original-source review."
    }
  },
  {
    "id": "19.2.33",
    "page": 1267,
    "kind": "absolute-claim",
    "message": {
      "ar": "السجلات لا تثبت انتفاء الغش، والاحتفاظ بها لا يكفي لإثبات الامتثال للإزالة.",
      "en": "Records do not prove absence of fraud, nor does retention establish purge compliance."
    }
  },
  {
    "id": "19.2.36",
    "page": 1269,
    "kind": "ambiguous-answer",
    "message": {
      "ar": "قد تحسن إدارة السجلات فائدتها العملية؛ يلزم تمييز أهداف الاحتفاظ والسرية.",
      "en": "Records management may improve practical usefulness; distinguish retention and confidentiality objectives."
    }
  },
  {
    "id": "19.2.37",
    "page": 1269,
    "kind": "legal-scope",
    "message": {
      "ar": "يلزم تمييز وضع سياسة جديدة عن الالتزام بحفظ الأدلة عند توقع النزاع.",
      "en": "Distinguish adopting a policy from evidence preservation obligations when litigation is anticipated."
    }
  },
  {
    "id": "19.2.38",
    "page": 1270,
    "kind": "legal-scope",
    "message": {
      "ar": "الالتزام بسياسة الاحتفاظ لا يكفي وحده لإثبات الوفاء بجميع واجبات حفظ الأدلة.",
      "en": "Policy compliance alone cannot establish compliance with all evidence preservation duties."
    }
  },
  {
    "id": "19.2.39",
    "page": 1271,
    "kind": "legal-scope",
    "message": {
      "ar": "التخلص الدوري لا يثبت الالتزام القانوني إذا كانت واجبات حفظ الأدلة قائمة قبل التبليغ.",
      "en": "Routine disposal alone does not establish compliance if preservation duties arose before service."
    }
  },
  {
    "id": "19.3.1",
    "page": 1273,
    "kind": "risk-scope",
    "message": {
      "ar": "نسبة الموظفين بدوام كامل وجزئي قد تؤثر في التدريب والصلاحيات والفصل بين الواجبات.",
      "en": "Staffing mix can affect training, access and segregation of duties."
    }
  },
  {
    "id": "19.3.5",
    "page": 1276,
    "kind": "definition-mismatch",
    "message": {
      "ar": "يخلط النص بين التشفير والمصادقة بكلمة المرور؛ يلزم ضبط المفاهيم.",
      "en": "The stem conflates encryption and password authentication; clarify the concepts."
    }
  },
  {
    "id": "19.3.7",
    "page": 1278,
    "kind": "responsibility-scope",
    "message": {
      "ar": "يلزم التمييز بين إسهام الأطراف الخارجية ومسؤولية الإدارة عن نظام الرقابة.",
      "en": "Distinguish external parties' contributions from management responsibility for internal control."
    }
  },
  {
    "id": "19.3.8",
    "page": 1279,
    "kind": "ambiguous-answer",
    "message": {
      "ar": "ترسيخ الثقافة الأخلاقية وتصميم وتشغيل الرقابة كلاهما مسؤوليتان محتملتان للإدارة العليا.",
      "en": "Ethical culture and control design/operation are both plausible senior-management responsibilities."
    }
  },
  {
    "id": "19.3.21",
    "page": 1289,
    "kind": "rationale-mismatch",
    "message": {
      "ar": "الضوابط ليست ثابتة بطبيعتها؛ يلزم تكييف تصميمها مع تغير العمليات والمخاطر.",
      "en": "Control design is not inherently static; it must adapt to changing processes and risks."
    }
  },
  {
    "id": "19.3.22",
    "page": 1290,
    "kind": "duplicate-record",
    "message": {
      "ar": "النص والاختيارات ومفتاح الإجابة مكررة من السؤال 17.2.4؛ احتُفظ بالمصدر واستُبعد التكرار من التقييم.",
      "en": "Stem, ordered options and key duplicate Unit 17.2.4; preserve source and exclude duplicate from scoring."
    }
  },
  {
    "id": "19.3.25",
    "page": 1292,
    "kind": "ambiguous-answer",
    "message": {
      "ar": "قد يدعم التوجه الأخلاقي الانضباط بالموازنة؛ يلزم تحديد مسؤوليات اعتماد الموازنات.",
      "en": "Tone at the top may support budget discipline; clarify budget-setting responsibilities."
    }
  }
] as const;
const reviewById = new Map<string, (typeof CMA_UNIT19_REVIEW_HOLDS)[number]>(CMA_UNIT19_REVIEW_HOLDS.map(entry => [entry.id, entry]));
export function getCmaUnit19SourceReview(questionId: string) {
 const match = /^cma-gleim-2025-vol2-su19-s(\d+)-q(\d+)$/.exec(questionId);
 if (!match) return undefined;
 const entry = reviewById.get(`19.${Number(match[1])}.${Number(match[2])}`);
 if (!entry) return undefined;
 return { ...entry, message: { ar: `مراجعة المصدر — صفحة ${entry.page}: ${entry.message.ar} هذا السؤال غير محتسب في الدرجة.`, en: `Source review — p. ${entry.page}: ${entry.message.en} This question is not scored.` } };
}
