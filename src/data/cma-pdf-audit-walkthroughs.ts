import type { CmaAnswerWalkthrough } from "@/data/cma-answer-walkthroughs";
/** Independently authored supplements for twelve visually audited ICMA 2024 items.
 * The published ICMA question, answer key and explanation are never changed.
 */
export const CMA_PDF_AUDIT_WALKTHROUGHS: Record<string, CmaAnswerWalkthrough> = {
  "IMA2024-P2-A-007": {
    "expectedAnswerIndex": 0,
    "steps": {
      "ar": [
        "الأصول المتداولة = 10,000 نقد + 20,000 عملاء + 8,000 مصروفات مقدمة + 42,000 مخزون = 80,000.",
        "الخصوم المتداولة = 15,000 موردون + 25,000 ورقة دفع خلال 90 يومًا = 40,000؛ السند المستحق بعد عشر سنوات ليس التزامًا متداولًا.",
        "صافي رأس المال العامل = 80,000 − 40,000 = 40,000. لا تستبعد المخزون؛ هذا مؤشر رأس المال العامل وليس النسبة السريعة."
      ],
      "en": [
        "Current assets = 10,000 cash + 20,000 receivables + 8,000 prepayments + 42,000 inventory = 80,000.",
        "Current liabilities = 15,000 payables + 25,000 note due in 90 days = 40,000. Bonds due in ten years are not current liabilities.",
        "Net working capital = 80,000 − 40,000 = 40,000. Keep inventory in this measure; this is not the quick ratio."
      ]
    }
  },
  "IMA2024-P2-A-030": {
    "expectedAnswerIndex": 2,
    "steps": {
      "ar": [
        "هدف البنك تقييم القدرة على الوفاء بالالتزامات، وليس اختيار أعلى هامش ربح أو أكبر مبيعات بمفردهما.",
        "Astor لديها نسبة ديون إلى ملكية 44.6% مقابل متوسط قطاع 48.3%، ورافعة مالية 1.02 مقابل 1.33؛ كلاهما أدنى من المتوسط.",
        "الإجابة ج تختار Astor في هذه البيانات لأن تعرضها المالي أقل. تقييم ائتماني حقيقي يحتاج أيضًا توقعات التحصيل والتدفقات النقدية."
      ],
      "en": [
        "The lender prioritizes debt-service capability, not the highest sales volume or profit margin alone.",
        "Astor has debt-to-equity of 44.6% versus industry 48.3%, and financial leverage of 1.02 versus 1.33, both below the comparison benchmark.",
        "Choice C favors Astor based on lower financial exposure. A real credit assessment would also examine forecast cash flow and loan terms."
      ]
    }
  },
  "IMA2024-P2-A-032": {
    "expectedAnswerIndex": 2,
    "steps": {
      "ar": [
        "المنافس يستخدم تمويلًا خارجيًا أكبر: نسبة الدين إلى حقوق الملكية 55.83 مقابل 42.16، والرافعة المالية 1.81 مقابل 1.06 لدى Strickland.",
        "قد يساعد التمويل الإضافي على تطوير منتجات وتقنيات أسرع، وهو سبب اختيار دراسة مصادر تمويل خارجية جديدة.",
        "الاختيار ج ليس توصية بالاقتراض دائمًا؛ يجب تقييم تكلفة الدين وخدمة الفائدة والتدفقات المتوقعة قبل تنفيذ التمويل."
      ],
      "en": [
        "The competitor uses more external funding: debt/equity of 55.83 versus 42.16 and financial leverage 1.81 versus Strickland's 1.06.",
        "Access to debt or other external financing can support more rapid product development, explaining the source's selected strategy.",
        "Choice C is not an unconditional instruction to borrow. Evaluate interest coverage, capital costs and expected cash flow first."
      ]
    }
  },
  "IMA2024-P2-A-036": {
    "expectedAnswerIndex": 2,
    "steps": {
      "ar": [
        "متوسط العملاء = (رصيد أول السنة 24,000 + آخر السنة 20,000) ÷ 2 = 22,000.",
        "معدل دوران العملاء = 220,000 مبيعات آجلة ÷ 22,000 متوسط العملاء = 10 مرات.",
        "متوسط أيام التحصيل = 365 ÷ 10 = 36.5 يومًا. انتبه لأقواس المتوسط؛ لا تقسّم ناتج دوران العملاء على 2 مرة أخرى."
      ],
      "en": [
        "Average receivables = (24,000 beginning + 20,000 ending) / 2 = 22,000.",
        "Receivables turnover = 220,000 net credit sales / 22,000 average receivables = 10 times.",
        "Days sales outstanding = 365 / 10 = 36.5 days. Parenthesize the average correctly rather than dividing turnover by two again."
      ]
    }
  },
  "IMA2024-P2-B-023": {
    "expectedAnswerIndex": 0,
    "steps": {
      "ar": [
        "مساهمة الدين في WACC = 30% وزن × 11% تكلفة دين × (1−40%) أثر ضريبي مفترض = 1.98 نقطة مئوية.",
        "مساهمة الأسهم الممتازة = 24%×12%=2.88 نقطة، ومساهمة العادية = 46%×16%=7.36 نقطة.",
        "الإجمالي 1.98%+2.88%+7.36%=12.22%. نسبة التوزيعات 75% غير مطلوبة لإعادة حساب تكلفة الملكية لأنها معطاة صراحة."
      ],
      "en": [
        "Debt contribution to WACC = 30% weight × 11% borrowing cost × (1−40%) tax adjustment = 1.98 percentage points, assuming deductibility.",
        "Preferred stock adds 24%×12%=2.88 points and common equity adds 46%×16%=7.36 points.",
        "Total WACC = 1.98%+2.88%+7.36%=12.22%. The 75% dividend payout is unnecessary because common equity cost is explicitly provided."
      ]
    }
  },
  "IMA2024-P2-B-046": {
    "expectedAnswerIndex": 3,
    "steps": {
      "ar": [
        "نظام Lockbox يوفر 5,240 − (170 بنك×25) = 990 شهريًا؛ أما Drafts فتخسر 6,500 − (4,000×2) = −1,500.",
        "تعويم الشيكات Bank float يعطي 22,000 فوائد − (1,000,000×2%) رسوم = 2,000 شهريًا.",
        "التحويل الإلكتروني يعطي 14,000 − (700×18) = 1,400؛ إذن نعتمد Lockbox وBank float والتحويل الإلكتروني، ونستبعد Drafts."
      ],
      "en": [
        "Lockbox yields 5,240 − (170 banks×25) = 990 per month. Drafts yield 6,500 − (4,000×2) = −1,500, a loss.",
        "Bank float nets 22,000 interest benefit − (1,000,000×2%) fee = 2,000 per month.",
        "Electronic transfers net 14,000 − (700×18) = 1,400. Choose lockbox, bank float and electronic transfers; reject loss-making drafts."
      ]
    }
  },
  "IMA2024-P2-B-061": {
    "expectedAnswerIndex": 3,
    "steps": {
      "ar": [
        "النسبة الجارية أولًا = 200,000 أصول متداولة ÷ 165,000 خصوم متداولة ≈ 1.212؛ والحد التعاقدي المطلوب 1.2.",
        "تحصيل 25,000 من العملاء وتحويل 10,000 إلى مخزون يغيّر تركيب الأصول فقط؛ سداد 15,000 دين يقلص الأصول المتداولة إلى 185,000 والخصوم إلى 150,000.",
        "النسبة الجديدة 185,000÷150,000≈1.233 وتوفير تكلفة الدين 15,000×12%=1,800 سنويًا؛ لذا البديل د يحقق الهدفين."
      ],
      "en": [
        "Starting current ratio = current assets 200,000 / current liabilities 165,000 ≈ 1.212, above the required 1.2.",
        "Collecting 25,000 receivables and purchasing 10,000 inventory reshuffles current assets. Paying 15,000 of short-term debt reduces current assets to 185,000 and liabilities to 150,000.",
        "New current ratio = 185,000/150,000 ≈ 1.233 and annual interest saving ≈15,000×12%=1,800. Choice D satisfies both aims."
      ]
    }
  },
  "IMA2024-P2-B-076": {
    "expectedAnswerIndex": 1,
    "steps": {
      "ar": [
        "تكلفة الأوراق التجارية = 12 مليون ×7%×3/12 = 210,000. عائد استثمار الفائض خلال يوليو وسبتمبر = (4 ملايين +2 مليون)×4%/12 =20,000؛ الصافي 190,000.",
        "خط الائتمان: يوليو 8 ملايين×8%/12=53,333؛ أغسطس 12 مليونًا×8%/12=80,000؛ سبتمبر 10 ملايين×8.5%/12=70,833؛ الإجمالي ≈204,167.",
        "الأوراق التجارية أوفر بنحو 14,167 (المصدر يذكر 14,166 بالتقريب). تنبيه: في حل المصدر خطأ مطبعي لفائدة سبتمبر «78,833»؛ الرقم الصحيح 70,833 ومجموع المصدر مبني على الصحيح."
      ],
      "en": [
        "Commercial paper interest = 12 million×7%×3/12 = 210,000. Excess-cash investment in July and September earns (4 million+2 million)×4%/12 =20,000, net cost 190,000.",
        "Credit line: July 8 million×8%/12=53,333; August 12 million×8%/12=80,000; September 10 million×8.5%/12=70,833; total about 204,167.",
        "Commercial paper saves about 14,167 (source states 14,166 after rounding). Source solution has a printing typo: September says 78,833 instead of 70,833, although the source's total uses the correct amount."
      ]
    }
  },
  "IMA2024-P2-C-006": {
    "expectedAnswerIndex": 2,
    "steps": {
      "ar": [
        "الحضور المتوقع = 12×3,500=42,000 و20×3,000=60,000 و12×4,000=48,000؛ الإجمالي 150,000 ونسب المزيج 28% و40% و32%.",
        "هامش مساهمة التذكرة المرجح = 28%×(18−3) + 40%×(15−1) +32%×(20−0)=16.2. الثابت الكلي=165,000+249,000+316,000+565,000=1,295,000.",
        "التعادل النظري =1,295,000÷16.2≈79,938.27. أقرب إجابة منشورة ج «79,938»، لكن رياضيًا يتطلب تحقيق التعادل بأشخاص كاملين 79,939؛ المصدر قرّب لأقرب اختيار."
      ],
      "en": [
        "Expected attendance = 12×3,500=42,000, 20×3,000=60,000 and 12×4,000=48,000; total 150,000 with a 28%, 40%, 32% mix.",
        "Weighted unit contribution =28%×(18−3)+40%×(15−1)+32%×(20−0)=16.2. Total fixed costs=165,000+249,000+316,000+565,000=1,295,000.",
        "Theoretical break-even=1,295,000/16.2≈79,938.27 patrons. Published choice C is the nearest at 79,938, but strict whole-person recovery needs 79,939. This is a rounding nuance in the source."
      ]
    }
  },
  "IMA2024-P2-C-010": {
    "expectedAnswerIndex": 1,
    "steps": {
      "ar": [
        "الثابت = تكاليف تطوير 35,000 + إعداد 18,500 + إهلاك 9,320 + إدارة 7,500 + مصروفات متنوعة 4,400 =74,720.",
        "المتغير لإنتاج 6,000 نسخة =30,000+5,400+67,500+27,000=129,900؛ المتغير للنسخة 21.65 وهامشها بسعر 45 هو 23.35.",
        "الربح المستهدف 20% من السعر=9 للوحدة؛ إذن (23.35−9)×الكمية=74,720 فتكون الكمية 5,206.97 وتُقرّب لأعلى إلى 5,207 نسخة."
      ],
      "en": [
        "Fixed costs = development 35,000 + setup 18,500 + depreciation 9,320 + administration 7,500 + miscellaneous 4,400 =74,720.",
        "Variable cost for 6,000 copies =30,000+5,400+67,500+27,000=129,900, or 21.65 each; unit contribution at 45 price =23.35.",
        "Target operating profit is 20% of selling price, or 9 per unit. Solve (23.35−9)×units=74,720: 5,206.97, rounded UP to 5,207 copies."
      ]
    }
  },
  "IMA2024-P2-E-014": {
    "expectedAnswerIndex": 2,
    "steps": {
      "ar": [
        "الإهلاك السنوي للمبنى=2,000,000÷10=200,000 وللمعدات=3,000,000÷5=600,000؛ إجمالي الإهلاك 800,000 والربح قبل الضريبة 1,500,000−300,000−800,000=400,000.",
        "الضريبة التشغيلية=400,000×40%=160,000؛ التدفق النقدي التشغيلي =400,000−160,000+800,000=1,040,000.",
        "في نهاية السنة الخامسة: الأرض 700,000−80,000 ضريبة مكسب؛ المبنى 800,000+80,000 وفر ضريبة خسارة؛ المعدات 200,000−80,000 إزالة−48,000 ضريبة؛ الإجمالي=1,040,000+620,000+880,000+72,000=2,612,000."
      ],
      "en": [
        "Annual depreciation: building=2,000,000/10=200,000, equipment=3,000,000/5=600,000, total 800,000; pretax operating income=1,500,000−300,000−800,000=400,000.",
        "Operating taxes=400,000×40%=160,000; operating cash flow=400,000−160,000+800,000=1,040,000.",
        "At year five: land 700,000−80,000 tax on gain; building 800,000+80,000 tax saving on loss; equipment 200,000−80,000 disposal−48,000 tax on gain. Total=1,040,000+620,000+880,000+72,000=2,612,000."
      ]
    }
  },
  "IMA2024-P2-E-056": {
    "expectedAnswerIndex": 2,
    "steps": {
      "ar": [
        "معدل العائد الداخلي IRR يجعل NPV تساوي صفرًا. لمشروع أ تتغير NPV من +77 ألفًا عند 18% إلى −26 ألفًا عند 20%.",
        "بالتقريب الخطي: IRR لمشروع أ =18%+[77÷(77+26)]×2%≈19.495%، أي 19.5%.",
        "لمشروع ب NPV +30 ألفًا عند 24% و−11 ألفًا عند 26%؛ IRR≈24%+[30÷(30+11)]×2%≈25.463%، أي 25.5%. القيم تقريب خطي وليست جذورًا دقيقة لتدفقات المشروع."
      ],
      "en": [
        "IRR is the rate that makes NPV zero. Project A has NPV +77 thousand at 18% and −26 thousand at 20%.",
        "By linear interpolation, A IRR≈18%+[77/(77+26)]×2%≈19.495%, rounded to 19.5%.",
        "Project B moves from +30 thousand at 24% to −11 thousand at 26%. IRR≈24%+[30/(30+11)]×2%≈25.463%, rounded to 25.5%. These are linear estimates, not exact cash-flow roots."
      ]
    }
  }
};
