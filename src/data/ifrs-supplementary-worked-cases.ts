/** Original practice demonstrations written for this site. They are NOT
 * copied questions from IFRSQuiz, nor are they authored by the referenced
 * open-source maintainers. Source links offer independently checkable context.
 */
export interface IfrsSupplementaryWorkedCase {
  code: string;
  heading: { ar: string; en: string };
  problem: { ar: string; en: string };
  steps: { ar: string[]; en: string[] };
  takeaway: { ar: string; en: string };
  sourceUrl: string;
}
export const IFRS_SUPPLEMENTARY_WORKED_CASES: Readonly<Record<string, IfrsSupplementaryWorkedCase>> = {
  "IAS 2": {
    "code": "IAS 2",
    "heading": {
      "ar": "المخزون: التكلفة أم صافي القيمة القابلة للتحقق؟",
      "en": "Inventory: cost versus net realizable value"
    },
    "problem": {
      "ar": "تكلفة مخزون 50,000 وصافي قيمته القابلة للتحقق 46,000. بافتراض تطبيق IAS 2 ودون فروق أخرى، ما قيمته المعروضة؟",
      "en": "Inventory cost is 50,000 and net realizable value 46,000. Under IAS 2, with no other adjustments, what is its carrying value?"
    },
    "steps": {
      "ar": [
        "قارن التكلفة 50,000 بصافي القيمة القابلة للتحقق 46,000.",
        "تُعرض وحدات المخزون بالأقل وفق قاعدة IAS 2: مبلغ 46,000.",
        "خسارة التخفيض = 50,000 − 46,000 = 4,000."
      ],
      "en": [
        "Compare historical cost 50,000 with net realizable value 46,000.",
        "IAS 2 generally uses the lower of cost and NRV: carrying value 46,000.",
        "Write-down = 50,000 − 46,000 = 4,000."
      ]
    },
    "takeaway": {
      "ar": "إذا تحسنت الظروف لاحقًا، راجع قواعد عكس التخفيض وحدوده بدل افتراض أن كل خسارة نهائية.",
      "en": "If conditions improve, assess IAS 2's reversal rules and their limits instead of assuming every write-down is permanent."
    },
    "sourceUrl": "https://github.com/ramyatrouny/ifrs-skill/blob/main/ifrs/standards-reference.md"
  },
  "IAS 36": {
    "code": "IAS 36",
    "heading": {
      "ar": "اختبار انخفاض القيمة",
      "en": "Impairment and recoverable amount"
    },
    "problem": {
      "ar": "القيمة الدفترية لأصل 120,000، وقيمته العادلة ناقص تكاليف الاستبعاد 110,000، وقيمته في الاستخدام 115,000. كم خسارة انخفاض القيمة؟",
      "en": "An asset has carrying amount 120,000, fair value less costs of disposal 110,000, and value in use 115,000. Find the impairment loss."
    },
    "steps": {
      "ar": [
        "القيمة القابلة للاسترداد هي الأكبر من 110,000 و115,000: أي 115,000.",
        "قارن القيمة الدفترية 120,000 بالقيمة القابلة للاسترداد 115,000.",
        "خسارة الانخفاض = 120,000 − 115,000 = 5,000."
      ],
      "en": [
        "Recoverable amount is the higher of 110,000 and 115,000, so 115,000.",
        "Compare the carrying amount of 120,000 with recoverable amount 115,000.",
        "Impairment loss = 120,000 − 115,000 = 5,000."
      ]
    },
    "takeaway": {
      "ar": "لا تستخدم الأقل من القيمة العادلة والقيمة في الاستخدام: المعيار يطلب الأكبر.",
      "en": "Do not choose the lower of the two recovery measures; the recoverable amount is their higher value."
    },
    "sourceUrl": "https://github.com/ramyatrouny/ifrs-skill/blob/main/ifrs/standards-reference.md"
  },
  "IFRS 9": {
    "code": "IFRS 9",
    "heading": {
      "ar": "حساب تمهيدي للخسارة الائتمانية المتوقعة",
      "en": "Introductory expected credit loss calculation"
    },
    "problem": {
      "ar": "محفظة قروض متجانسة: التعرض عند التعثر 100,000 واحتمال تعثر خلال 12 شهرًا 2% ونسبة الخسارة عند التعثر 40%. كم الخسارة المتوقعة تقريبيًا قبل الخصم؟",
      "en": "A homogeneous loan pool has exposure at default 100,000, 12-month probability of default 2%, and loss given default 40%. Find an illustrative undiscounted ECL."
    },
    "steps": {
      "ar": [
        "التعرض الائتماني = 100,000.",
        "اضرب احتمال التعثر في نسبة الخسارة: 2% × 40% = 0.8%.",
        "الخسارة المتوقعة التوضيحية = 100,000 × 0.8% = 800."
      ],
      "en": [
        "Exposure at default is 100,000.",
        "Combine default probability and loss severity: 2% × 40% = 0.8%.",
        "Illustrative expected loss = 100,000 × 0.8% = 800."
      ]
    },
    "takeaway": {
      "ar": "هذه طريقة تعليمية مبسطة فقط؛ IFRS 9 يتطلب مراعاة الاحتمالات والمعلومات المستقبلية والقيمة الزمنية وأفق الخسارة الملائم.",
      "en": "This is a simplified teaching model only; IFRS 9 ECL requires probability weighting, forward-looking data, time value and the appropriate loss horizon."
    },
    "sourceUrl": "https://github.com/ramyatrouny/ifrs-skill/blob/main/ifrs/workflows.md"
  },
  "IFRS 15": {
    "code": "IFRS 15",
    "heading": {
      "ar": "توزيع سعر المعاملة على التزامات الأداء",
      "en": "Allocation of transaction price to performance obligations"
    },
    "problem": {
      "ar": "عقد يجمع جهازًا ودعمًا مستقلًا، وسعر البيع المنفصل للجهاز 900 وللدعم 600، لكن سعر الباقة 1,200. كيف توزع المقابل؟",
      "en": "A contract includes distinct equipment and support. Standalone selling prices are 900 and 600, while the bundle price is 1,200. Allocate the transaction price."
    },
    "steps": {
      "ar": [
        "إجمالي أسعار البيع المنفصلة = 900 + 600 = 1,500.",
        "نسبة الجهاز 900 ÷ 1,500 = 60%؛ يخصص له 1,200 × 60% = 720.",
        "نسبة الدعم 40%؛ يخصص له 1,200 × 40% = 480، ويُعترف بكل جزء حين يستوفى التزامه."
      ],
      "en": [
        "Total standalone selling prices = 900 + 600 = 1,500.",
        "Equipment is 900/1,500 = 60%, allocated 1,200 × 60% = 720.",
        "Support is 40%, allocated 1,200 × 40% = 480, with revenue recognized as the obligations are satisfied."
      ]
    },
    "takeaway": {
      "ar": "التخصيص لا يعني الاعتراف بالإيراد بالكامل عند توقيع العقد؛ التوقيت يعتمد على انتقال السيطرة واستيفاء التزام الأداء.",
      "en": "Allocation alone does not mean all revenue is recognized when the contract is signed; timing depends on satisfying each obligation."
    },
    "sourceUrl": "https://github.com/ramyatrouny/ifrs-skill/blob/main/ifrs/workflows.md"
  },
  "IFRS 16": {
    "code": "IFRS 16",
    "heading": {
      "ar": "القيمة الحالية لالتزام الإيجار",
      "en": "Present value of initial lease payments"
    },
    "problem": {
      "ar": "دفعتا إيجار كل منهما 10,000 في نهاية السنة الأولى والثانية، بمعدل خصم 10%. ما القيمة الحالية التقريبية لهما؟",
      "en": "Two lease payments of 10,000 fall at the ends of years one and two, discounted at 10%. Calculate their present value."
    },
    "steps": {
      "ar": [
        "القيمة الحالية لدفعة السنة الأولى = 10,000 ÷ 1.10 ≈ 9,090.91.",
        "القيمة الحالية للسنة الثانية = 10,000 ÷ 1.10² ≈ 8,264.46.",
        "المجموع ≈ 17,355.37، ولا تساويه بمجموع الدفعات الاسمي 20,000."
      ],
      "en": [
        "PV of the year-one payment = 10,000 / 1.10 ≈ 9,090.91.",
        "PV of the year-two payment = 10,000 / 1.10² ≈ 8,264.46.",
        "Total PV ≈ 17,355.37, rather than nominal payments totaling 20,000."
      ]
    },
    "takeaway": {
      "ar": "هذا حساب للدفعات المفترضة فقط؛ قياس الالتزام الفعلي قد يشمل بنودًا إضافية وفق IFRS 16.",
      "en": "This computes only the assumed payments; actual lease measurement may include additional qualifying components."
    },
    "sourceUrl": "https://github.com/ramyatrouny/ifrs-skill/blob/main/ifrs/workflows.md"
  },
  "IFRS 17": {
    "code": "IFRS 17",
    "heading": {
      "ar": "خصم التدفقات النقدية لعقود التأمين",
      "en": "Discounting illustrative insurance cash flows"
    },
    "problem": {
      "ar": "التدفقات النقدية الصافية المتوقعة لمجموعة عقود، بعد الإشارات المناسبة، هي 40 في نهاية السنة الأولى و25 في الثانية و25 في الثالثة. إذا افترضنا معدل خصم ثابتًا 5%، كم قيمتها الحالية؟",
      "en": "Projected net cash flows for an insurance group are 40 at the end of year one, 25 at year two, and 25 at year three. At an illustrative constant 5% discount rate, find their present value."
    },
    "steps": {
      "ar": [
        "خصم السنة الأولى: 40 ÷ 1.05 ≈ 38.10.",
        "خصم السنة الثانية: 25 ÷ 1.05² ≈ 22.68؛ الثالثة: 25 ÷ 1.05³ ≈ 21.60.",
        "إجمالي القيمة الحالية ≈ 82.37، وفق الفرضيات."
      ],
      "en": [
        "Year-one discounted flow = 40 / 1.05 ≈ 38.10.",
        "Year-two flow = 25 / 1.05² ≈ 22.68; year-three flow = 25 / 1.05³ ≈ 21.60.",
        "Total present value ≈ 82.37, under these assumptions."
      ]
    },
    "takeaway": {
      "ar": "القيمة الحالية وحدها ليست التزام IFRS 17 النهائي؛ يجب أيضًا تقييم تعديل المخاطر والهامش التعاقدي وتصنيف التدفقات والمنهج الملائم.",
      "en": "Discounted cash flows alone are not a complete IFRS 17 liability; consider risk adjustment, contractual service margin, cash-flow classification and the applicable model."
    },
    "sourceUrl": "https://github.com/Systemorph/IFRS17CalculationEngine/tree/master/PresentValueSeries"
  }
};
