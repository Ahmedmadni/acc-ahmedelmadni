/** Independently authored Arabic-English answer walkthroughs for selected retired ICMA items.
 * Never alter the copyrighted original question, choices, published key, or source explanation.
 * Added notes are educational commentary, NOT ICMA-published answer explanations.
 */
export interface CmaAnswerWalkthrough {
  expectedAnswerIndex: number;
  steps: { ar: string[]; en: string[] };
}
export const CMA_ANSWER_WALKTHROUGHS: Record<string, CmaAnswerWalkthrough> =  {
  "IMA2024-P2-A-002": {
    "expectedAnswerIndex": 2,
    "steps": {
      "ar": [
        "في قائمة الدخل ذات الحجم المشترك، نقسم كل بند على المبيعات، وليس على إجمالي الأصول أو حقوق الملكية.",
        "صافي الربح ÷ المبيعات = 120,000 ÷ 600,000 = 20%.",
        "الخيار 5% ناتج عن قسمة صافي الربح على الأصول 2,400,000، وهذا مقام يخص مؤشرًا مختلفًا."
      ],
      "en": [
        "In a common-size income statement, each line is expressed as a percentage of sales, not total assets or equity.",
        "Net income divided by sales = 120,000 / 600,000 = 20%.",
        "The 5% option uses total assets of 2,400,000 as the denominator; that answers a different ratio."
      ]
    }
  },
  "IMA2024-P2-A-006": {
    "expectedAnswerIndex": 2,
    "steps": {
      "ar": [
        "النسبة السريعة تقيس الأصول الأقرب إلى النقد مقارنة بالالتزامات المتداولة، لذلك نستبعد المخزون البالغ 300,000.",
        "الأصول السريعة = نقد 531,000 + عملاء 439,000 + أوراق مالية قابلة للتداول 200,000 = 1,170,000.",
        "النسبة السريعة = 1,170,000 ÷ 500,000 = 2.34 مرة؛ لا تضف الالتزامات طويلة الأجل للمقام."
      ],
      "en": [
        "Quick ratio compares near-cash current assets with current liabilities, so exclude the 300,000 inventory.",
        "Quick assets = 531,000 cash + 439,000 receivables + 200,000 marketable securities = 1,170,000.",
        "Quick ratio = 1,170,000 / 500,000 = 2.34; long-term liabilities are not part of the denominator."
      ]
    }
  },
  "IMA2024-P2-A-074": {
    "expectedAnswerIndex": 1,
    "steps": {
      "ar": [
        "العائد على إجمالي الأصول يساوي صافي الربح مقسومًا على متوسط إجمالي الأصول: السنة الأولى = 135 ÷ 450 = 30%.",
        "صافي ربح السنة الثانية المتوقع = 135 × 1.25 = 168.75 مليون، ومتوسط الأصول المتوقع = 450 + 50 = 500 مليون.",
        "العائد الجديد = 168.75 ÷ 500 = 33.75%. نسبة زيادة العائد مقارنة بالقديم = (33.75% ÷ 30%) − 1 = 12.5%، أي نحو 13%."
      ],
      "en": [
        "Return on assets = net income divided by average total assets. Year 1 ROA = 135 / 450 = 30%.",
        "Projected year 2 income = 135 × 1.25 = 168.75 million; average assets = 450 + 50 = 500 million.",
        "Projected ROA = 168.75 / 500 = 33.75%. Relative increase in ROA = (33.75% / 30%) − 1 = 12.5%, approximately 13%."
      ]
    }
  },
  "IMA2024-P2-A-078": {
    "expectedAnswerIndex": 2,
    "steps": {
      "ar": [
        "معدل النمو المستدام في هذا النموذج = العائد على حقوق الملكية ROE × نسبة الاحتجاز.",
        "متوسط حقوق الملكية = (200 + 182.5) ÷ 2 = 191.25 مليون؛ ROE = 20 ÷ 191.25 ≈ 10.46%.",
        "التوزيعات = 5 ملايين سهم × 0.50 = 2.5 مليون؛ نسبة الاحتجاز = (20 − 2.5) ÷ 20 = 87.5%؛ النمو ≈ 10.46% × 87.5% = 9.15%."
      ],
      "en": [
        "Under this model, sustainable growth rate = return on equity (ROE) × earnings retention rate.",
        "Average equity = (200 + 182.5) / 2 = 191.25 million; ROE = 20 / 191.25 ≈ 10.46%.",
        "Dividends = 5 million × 0.50 = 2.5 million; retention = (20 − 2.5) / 20 = 87.5%; growth ≈ 10.46% × 87.5% = 9.15%."
      ]
    }
  },
  "IMA2024-P2-A-089": {
    "expectedAnswerIndex": 1,
    "steps": {
      "ar": [
        "جودة الأرباح تتعلق بمدى تعبير الربح عن أداء مستدام يمكن الوثوق به، لا مجرد ارتفاع الرقم المعلن.",
        "التحكم المتعمد بتوقيت الاعتراف بالإيرادات أو المصروفات أو المكاسب والخسائر قد يجعل صورة الأداء مضللة.",
        "وجود عملاء كبار أو هامش أقل من المنافسين يمثل مخاطر أو ضعفًا محتملًا، لكنه ليس بمفرده الدليل الأكثر مباشرة على إدارة الأرباح."
      ],
      "en": [
        "Earnings quality asks whether reported profit faithfully reflects sustainable performance, not merely whether the number is large.",
        "Deliberately managing the timing of revenues, expenses, gains and losses can distort the reported performance trend.",
        "Customer concentration or a low margin may create business risks, but earnings-recognition management is the most direct indicator here."
      ]
    }
  },
  "IMA2024-P2-B-006": {
    "expectedAnswerIndex": 1,
    "steps": {
      "ar": [
        "بيتا Beta لا تقيس تذبذب السهم الكلي بمفرده؛ بل حساسيته لتحركات عائد السوق.",
        "إذا كانت بيتا 1.5، فالنموذج الخطي يتوقع تغير العائد بنحو 1.5 نقطة مئوية مقابل تغير السوق نقطة مئوية واحدة، مع بقاء العوامل الأخرى حسب النموذج.",
        "الانحراف المعياري يقيس إجمالي التشتت، بينما بيتا تقيس التعرض للمخاطر المنتظمة المرتبطة بالسوق."
      ],
      "en": [
        "Beta measures sensitivity to broad market returns, not a security's total standalone variability.",
        "With beta 1.5, the simple market model associates a one-percentage-point market move with about 1.5 percentage points in the asset's return, all else equal.",
        "Standard deviation measures total dispersion; beta isolates exposure to systematic market movements."
      ]
    }
  },
  "IMA2024-P2-B-007": {
    "expectedAnswerIndex": 3,
    "steps": {
      "ar": [
        "منحنى العائد يضع آجال الاستحقاق على المحور الأفقي وعوائد السندات على المحور الرأسي.",
        "للمقارنة المفيدة نفترض خصائص ائتمانية مماثلة، حتى يكون اختلاف المدة هو المتغير الأساسي.",
        "الاختيار المرتبط بالمخاطر الائتمانية أو القيمة الاسمية لا يعبّر عن العلاقة الأساسية التي يرسمها منحنى العائد."
      ],
      "en": [
        "The yield curve places time to maturity on the horizontal axis and bond yield on the vertical axis.",
        "A meaningful comparison ordinarily controls for credit quality so maturity is the key difference.",
        "Issuer credit risk or face amount is not the main relationship represented by the yield curve."
      ]
    }
  },
  "IMA2024-P2-B-018": {
    "expectedAnswerIndex": 2,
    "steps": {
      "ar": [
        "الأسهم الممتازة تمثل حقوق ملكية وإن كانت توزع عائدًا محددًا أحيانًا.",
        "توزيعات الأسهم لا تُخصم عادةً كمصروف ضريبي لدى الشركة المصدرة كما تُخصم فوائد الدين المستوفية لشروط الخصم.",
        "إمكان استدعاء السهم أو تحويله إلى سهم عادي، وعدم وجود تصويت عادة، صفات قد تنطبق بحسب شروط الإصدار."
      ],
      "en": [
        "Preferred stock remains equity even when it provides a specified distribution.",
        "Dividends paid to shareholders are not generally issuer tax deductions in the way qualifying debt interest may be.",
        "Callability, convertibility and usually limited voting rights can all be features of particular preferred-share issues."
      ]
    }
  },
  "IMA2024-P2-B-032": {
    "expectedAnswerIndex": 1,
    "steps": {
      "ar": [
        "احسب تكلفة كل مصدر تمويل مضروبة في وزنه؛ لا تخلط تكلفة الأسهم العادية بالممتازة.",
        "العادي = 50% × 12% = 6%؛ الممتاز = 30% × 10% = 3%.",
        "الدين بعد الضريبة = 5% × (1 − 30%) = 3.5%، ووزنه 20% يعطينا 0.7%؛ إذن WACC = 6% + 3% + 0.7% = 9.7% وفق افتراض خصم الفوائد ضريبيًا."
      ],
      "en": [
        "Calculate the weighted cost of each financing source separately; preferred and common equity have different costs.",
        "Common contribution = 50% × 12% = 6%; preferred contribution = 30% × 10% = 3%.",
        "After-tax debt cost = 5% × (1 − 30%) = 3.5%; weighted debt = 20% × 3.5% = 0.7%; WACC = 9.7%, assuming the interest tax shield applies."
      ]
    }
  },
  "IMA2024-P2-B-042": {
    "expectedAnswerIndex": 3,
    "steps": {
      "ar": [
        "حسابات الرصيد الصفري والمصروفات الخاضعة للرقابة ومركزية المدفوعات أدوات لتنظيم النقد الخارج.",
        "أما نظام صناديق البريد البنكية Lock-box فيسرع عادةً وصول مدفوعات العملاء ومعالجتها.",
        "لذلك هو أداة لإدارة التدفقات النقدية الداخلة وليس الخارجة، وهو الاستثناء المطلوب."
      ],
      "en": [
        "Zero-balance accounts, controlled disbursements and centralized payables help manage outgoing cash.",
        "A bank lockbox instead typically accelerates receiving and processing customer payments.",
        "Thus it primarily manages inflows rather than outflows and is the requested exception."
      ]
    }
  },
  "IMA2024-P2-C-025": {
    "expectedAnswerIndex": 1,
    "steps": {
      "ar": [
        "التكلفة الغارقة هي مبلغ حدث بالفعل ولا يمكن تغييره بالقرار الذي نتخذه اليوم.",
        "لا يهم أن التكلفة كانت ثابتة أو متغيرة أو مباشرة؛ صفتها الحاسمة هنا أنها تاريخية وغير قابلة للاسترداد.",
        "قارن بدلًا منها التكاليف والمنافع المستقبلية التي تختلف بين البدائل."
      ],
      "en": [
        "A sunk cost was incurred in the past and cannot be changed by today's choice.",
        "It need not be fixed or indirect: what matters is that it is historical and unrecoverable.",
        "Compare future costs and benefits that change across alternatives instead."
      ]
    }
  },
  "IMA2024-P2-C-032": {
    "expectedAnswerIndex": 3,
    "steps": {
      "ar": [
        "تكلفة الفرصة البديلة هي المساهمة أو المنفعة التي تتخلى عنها حين تستخدم موردًا محدودًا في بديل آخر.",
        "مثال: إذا استُخدمت آلة في طلب خاص بدل طلب عادي مربح، فإن الربح المفقود من الطلب العادي جزء من تكلفة الفرصة.",
        "قد لا تظهر تكلفة الفرصة في دفتر الأستاذ، لكنها مهمة عند تقييم البدائل."
      ],
      "en": [
        "Opportunity cost is the contribution or benefit sacrificed by using a scarce resource for one option instead of the best alternative.",
        "For example, using a constrained machine for a special order can forgo contribution from regular orders.",
        "Opportunity cost may not be booked in the general ledger, but it is relevant to the decision."
      ]
    }
  },
  "IMA2024-P2-C-043": {
    "expectedAnswerIndex": 1,
    "steps": {
      "ar": [
        "وجود طاقة إنتاجية عاطلة يعني أن بعض المصاريف الثابتة ستستمر سواء قُبل الطلب أم رُفض، فتُستبعد من التكلفة الإضافية.",
        "التكلفة المتغيرة للوحدة = 64 تصنيع + 3 عمولة مبيعات = 67 دولارًا، ما دامت العمولة تُدفع على الطلب الخاص أيضًا.",
        "كي يزيد الدخل يجب أن يكون سعر البيع أكبر من 67، مع افتراض عدم وجود تكاليف إضافية أو تأثير على المبيعات المعتادة."
      ],
      "en": [
        "With idle capacity, fixed manufacturing and selling costs may remain unchanged and are excluded from incremental order cost.",
        "Variable cost per unit = 64 manufacturing + 3 sales commission = 67, assuming the commission applies to the special order.",
        "Price must exceed 67 to increase income, assuming no additional fixed costs or lost regular sales."
      ]
    }
  },
  "IMA2024-P2-C-065": {
    "expectedAnswerIndex": 1,
    "steps": {
      "ar": [
        "القطاع T3 له هامش مساهمة قدره 9,000، وهو ما ستخسره الشركة إذا أوقفته.",
        "تكاليفه الثابتة القابلة للتجنب 6,000 فقط، أما 5,400 غير القابلة للتجنب فستظل حتى بعد الإيقاف.",
        "صافي أثر الإغلاق = توفير 6,000 − مساهمة مفقودة 9,000 = انخفاض ربح التشغيل بـ3,000، رغم أن القطاع يظهر خسارة دفترية."
      ],
      "en": [
        "Product T3 generates contribution margin of 9,000, which disappears if the line is discontinued.",
        "Only 6,000 of its fixed costs are avoidable; 5,400 of unavoidable fixed costs remain after discontinuation.",
        "Net effect = 6,000 saved − 9,000 lost contribution = a 3,000 decrease in operating income, despite the reported segment loss."
      ]
    }
  },
  "IMA2024-P2-C-066": {
    "expectedAnswerIndex": 0,
    "steps": {
      "ar": [
        "عند إيقاف منتج يجب معرفة ما الذي سيحدث للآلة أو المساحة التي كان يستخدمها.",
        "إذا أمكن استغلال المورد في منتج أكثر ربحية، تصبح المساهمة البديلة جزءًا مهمًا من قرار الإيقاف.",
        "عمولات المبيعات أو الإهلاك أو راتب المدير قد تكون مهمة بشروط، لكن معلومة الاستخدام البديل للمورد هي التي تحسم جانب تكلفة الفرصة غير الواضح."
      ],
      "en": [
        "A discontinuation decision must consider what happens to the machine or space freed by the discontinued product.",
        "If capacity can make something more profitable, forgone alternative contribution becomes a key opportunity cost.",
        "Commissions or depreciation may matter under specific assumptions, but the alternative use of constrained capacity is the missing decision information here."
      ]
    }
  },
  "IMA2024-P2-D-004": {
    "expectedAnswerIndex": 2,
    "steps": {
      "ar": [
        "إدارة المخاطر المؤسسية ليست مجرد فحص قائمة مخاطر أو توزيع ميزانية رقابة.",
        "تبدأ العملية المستمرة بتحديد استراتيجية المؤسسة وأهدافها وحدود التعرض المقبولة، ثم تتعرف إلى المخاطر المؤثرة فيها.",
        "بعد ذلك يأتي التقييم والاستجابة والمتابعة والتواصل؛ لذا لا تبدأ بالرقابة قبل معرفة ما تحاول المؤسسة تحقيقه."
      ],
      "en": [
        "Enterprise risk management is more than a risk list or a control budget.",
        "Start by establishing organizational strategy, objectives and accepted exposure so risks can be evaluated in context.",
        "Identification, assessment, response, monitoring and communication follow; controls should not precede understanding the objectives."
      ]
    }
  },
  "IMA2024-P2-D-006": {
    "expectedAnswerIndex": 2,
    "steps": {
      "ar": [
        "المخاطر الكامنة Inherent Risk تعني التعرض قبل تطبيق وسائل الرقابة أو المعالجة.",
        "المخاطر المتبقية Residual Risk تعني الجزء الذي يبقى بعد الاستجابة والرقابة.",
        "وجود نظام ERM لا يجعل المخاطرة صفرًا، ولذلك المصطلح المطلوب هو المخاطر المتبقية."
      ],
      "en": [
        "Inherent risk means exposure before applying risk responses or controls.",
        "Residual risk means the exposure that remains after responses and controls.",
        "An ERM program cannot eliminate every risk; therefore the remaining exposure is residual risk."
      ]
    }
  },
  "IMA2024-P2-E-020": {
    "expectedAnswerIndex": 2,
    "steps": {
      "ar": [
        "المتحصل من بيع المعدة 500,000، والقيمة الدفترية الضريبية المفترضة 400,000.",
        "ربح البيع الخاضع للضريبة = 500,000 − 400,000 = 100,000؛ الضريبة = 100,000 × 35% = 35,000.",
        "صافي النقد بعد الضريبة = 500,000 − 35,000 = 465,000؛ لا تخصم القيمة الدفترية 400,000 من النقد لأنها ليست مبلغًا يُدفع عند البيع."
      ],
      "en": [
        "Sale proceeds are 500,000 and the assumed tax book value is 400,000.",
        "Taxable gain = 500,000 − 400,000 = 100,000; tax = 100,000 × 35% = 35,000.",
        "After-tax disposal cash = 500,000 − 35,000 = 465,000; the carrying amount itself is not an extra cash outflow at disposal."
      ]
    }
  },
  "IMA2024-P2-E-070": {
    "expectedAnswerIndex": 2,
    "steps": {
      "ar": [
        "الاستثمار الأولي 50,000. بعد السنة الأولى تُحصّل 15,000، وبعد الثانية 18,000، فيصبح الإجمالي 33,000.",
        "المتبقي المطلوب = 50,000 − 33,000 = 17,000؛ التدفق المتوقع للسنة الثالثة 25,000.",
        "في أسلوب الاسترداد التقليدي للامتحان نفترض توزيع تدفق سنة الاسترداد بصورة منتظمة، فنحسب 2 + 17,000 ÷ 25,000 = 2.68 سنة؛ إذا حُدد صراحة أن كل مبلغ يُقبض بنهاية السنة فقط فالتوقيت النقدي الفعلي يختلف."
      ],
      "en": [
        "Initial outlay is 50,000. Recover 15,000 in year 1 and 18,000 in year 2, totaling 33,000.",
        "Unrecovered balance = 50,000 − 33,000 = 17,000; the forecast year-3 inflow is 25,000.",
        "Using the standard exam payback convention of uniform cash during the recovery year gives 2 + 17,000 / 25,000 = 2.68 years. If receipts are explicitly discrete year-end lumps, the actual receipt date differs."
      ]
    }
  },
  "IMA2024-P2-E-071": {
    "expectedAnswerIndex": 3,
    "steps": {
      "ar": [
        "احسب إجمالي المبالغ الخارجة أولًا: 550,000 في السنة صفر و500,000 في السنة الأولى، أي 1,050,000.",
        "تُسترد 450,000 في السنة الثانية و350,000 في الثالثة و250,000 في الرابعة؛ إجماليها = 1,050,000.",
        "إذن يصل إجمالي النقد المسترد إلى مبلغ الاستثمار عند نهاية السنة الرابعة: 4 سنوات؛ لا تعتمد على الربح المحاسبي أو معدل الخصم عند حساب الاسترداد البسيط."
      ],
      "en": [
        "Total outflows are 550,000 at time zero plus 500,000 in year one = 1,050,000.",
        "Recover 450,000 in year two, 350,000 in year three and 250,000 in year four; total = 1,050,000.",
        "Simple cash payback reaches cumulative zero at the end of year four: 4 years. Do not substitute accounting profit or discount rate into ordinary payback."
      ]
    }
  },
  "IMA2024-P2-A-003": {
    "expectedAnswerIndex": 3,
    "steps": {
      "ar": [
        "استخدم التحليل الأفقي للمقارنة بين السنة الأولى والثانية: نسبة التغير = (القيمة الجديدة − القديمة) ÷ القيمة القديمة.",
        "مصروف البيع ارتفع من 35,000 إلى 40,000، أي زيادة 5,000؛ النسبة = 5,000 ÷ 35,000 ≈ 14.29%، فتُقرب إلى 14%.",
        "لا تخلط التحليل الأفقي بالتحليل الرأسي: 40,000 ÷ 275,000 يحسب نسبة مصروف البيع من مبيعات السنة الثانية، وليس معدل نمو المصروف."
      ],
      "en": [
        "Use horizontal analysis for change between Year 1 and Year 2: growth rate = (new amount − prior amount) / prior amount.",
        "Selling expenses rose from 35,000 to 40,000, an increase of 5,000; 5,000 / 35,000 ≈ 14.29%, rounded to 14%.",
        "Do not confuse horizontal growth with vertical common-size analysis: 40,000 / 275,000 is selling expense as a share of Year 2 sales, not its annual growth."
      ]
    }
  },
  "IMA2024-P2-A-010": {
    "expectedAnswerIndex": 3,
    "steps": {
      "ar": [
        "السؤال يطلب النسبة السريعة في 31 ديسمبر فقط؛ لذلك استخدم عمود نهاية السنة ولا تُدخل المخزون أو الأصول الثابتة في البسط.",
        "الأصول السريعة = نقد 62,000 + أوراق مالية 35,000 + عملاء 47,000 = 144,000، والخصوم المتداولة = دائنون 84,000 + مستحقات 11,000 = 95,000.",
        "النسبة = 144,000 ÷ 95,000 ≈ 1.516، أي 1.52 مرة. سندات الدين طويلة الأجل لا تدخل ضمن الخصوم المتداولة وفق البيانات المعطاة."
      ],
      "en": [
        "The question asks for December 31 quick ratio only: use the year-end column and exclude inventory and plant assets from quick assets.",
        "Quick assets = cash 62,000 + marketable securities 35,000 + receivables 47,000 = 144,000. Current liabilities = payables 84,000 + accrued liabilities 11,000 = 95,000.",
        "Quick ratio = 144,000 / 95,000 ≈ 1.516, or 1.52. Long-term bonds are not included in current liabilities under the given data."
      ]
    }
  },
  "IMA2024-P2-B-084": {
    "expectedAnswerIndex": 1,
    "steps": {
      "ar": [
        "قسّم السنة إلى أربعة أرباع بواقع ثلاثة أشهر لكل ربع. الفائدة 8% سنويًا على المسحوب: 10 ملايين للربع الأول، و20 مليونًا للثاني والثالث، و5 ملايين للرابع.",
        "إجمالي الفائدة = 10,000,000×8%×3/12 + 20,000,000×8%×6/12 + 5,000,000×8%×3/12 = 1,100,000.",
        "رسم الالتزام 0.5% سنويًا على غير المستخدم: 10 ملايين للربع الأول و15 مليونًا للرابع؛ الرسوم = 12,500 + 18,750 = 31,250؛ الإجمالي = 1,131,250."
      ],
      "en": [
        "Split the year into four three-month quarters. Charge annual 8% interest on amounts borrowed: 10 million in Q1, 20 million in Q2–Q3, and 5 million in Q4.",
        "Interest = 10,000,000×8%×3/12 + 20,000,000×8%×6/12 + 5,000,000×8%×3/12 = 1,100,000.",
        "Annual 0.5% commitment fee is charged on unused balances: 10 million in Q1 and 15 million in Q4. Fees = 12,500 + 18,750 = 31,250; interest plus fees = 1,131,250."
      ]
    }
  },
  "IMA2024-P2-C-080": {
    "expectedAnswerIndex": 0,
    "steps": {
      "ar": [
        "الطاقة المتاحة 160,000 ساعة. إنتاج 30,000 وحدة أ يحتاج 30,000×3=90,000 ساعة؛ المتبقي 70,000 ساعة يصنع 70,000÷5=14,000 وحدة ب.",
        "يجب إسناد الـ6,000 وحدة المتبقية من ب إلى مورد خارجي. مساهمة أ الداخلية للوحدة =75−30=45؛ ب الداخلية =125−48=77؛ ب الخارجية =125−60=65.",
        "المساهمة = 30,000×45 + 14,000×77 + 6,000×65 = 2,818,000 قبل الثابت المشترك. مقارنة استئجار 30,000 ساعة بتكلفة ثابتة إضافية 150,000 تعطي مساهمة صافية أقل."
      ],
      "en": [
        "Machine capacity is 160,000 hours. Producing 30,000 A units takes 30,000×3=90,000 hours; remaining 70,000 hours can make 70,000/5=14,000 B units.",
        "Outsource the remaining 6,000 B units. Unit contribution is 75−30=45 for internal A, 125−48=77 for internal B, and 125−60=65 for outsourced B.",
        "Total contribution = 30,000×45 + 14,000×77 + 6,000×65 = 2,818,000 before common fixed overhead. Renting an additional 30,000 hours for 150,000 extra fixed cost leaves a lower incremental benefit."
      ]
    }
  },
  "IMA2024-P2-E-012": {
    "expectedAnswerIndex": 1,
    "steps": {
      "ar": [
        "تكلفة المعدة الجديدة 95,000؛ بيع المعدة القديمة يحصّل 3,000. تزداد الذمم المدينة بمقدار 8,000−6,000=2,000، ويزداد الدائنون 2,500−2,100=400، فينخفض احتياج النقد بهذا المقدار.",
        "القيمة الدفترية للقديمة = 50,000−45,000=5,000؛ سعر البيع 3,000 يخلق خسارة ضريبية 2,000، ووفرة ضريبة = 2,000×40%=800.",
        "التدفق الابتدائي الخارج =95,000−3,000+2,000−400−800=92,800؛ لا تعامل قيمة الأصل القديمة الدفترية كمدفوع نقدي جديد."
      ],
      "en": [
        "New equipment costs 95,000; sale of old equipment brings 3,000. Receivables rise 8,000−6,000=2,000 while payables rise 2,500−2,100=400, which partly finances working capital.",
        "Old asset carrying amount = 50,000−45,000=5,000; sale at 3,000 creates a tax loss of 2,000 and tax saving of 2,000×40%=800.",
        "Initial net outflow = 95,000−3,000+2,000−400−800=92,800. Do not treat the old asset's carrying amount as a new cash payment."
      ]
    }
  },
  "IMA2024-P2-E-013": {
    "expectedAnswerIndex": 2,
    "steps": {
      "ar": [
        "ثمن المعدة الجديدة 90,000، ويضاف التركيب 4,000 والشحن والتأمين 6,000؛ التكلفة النقدية عند البداية = 100,000.",
        "المعدة القديمة تكلفتها 50,000 وتُهلك بالقسط الثابت خلال 10 سنوات، وبعد 7 سنوات يكون مجمع الإهلاك 35,000، والقيمة الدفترية 15,000. بيعها 25,000 يحقق ربحًا خاضعًا للضريبة 10,000 وضريبته 4,000.",
        "صافي متحصل بيع القديمة =25,000−4,000=21,000؛ الاستثمار النقدي الابتدائي الصافي = 100,000−21,000=79,000."
      ],
      "en": [
        "New equipment purchase is 90,000, plus installation 4,000 and freight/insurance 6,000, for 100,000 initial cash cost.",
        "The old machine originally cost 50,000; 7 of 10 straight-line years yield 35,000 depreciation and carrying amount 15,000. A sale for 25,000 creates a 10,000 taxable gain and 4,000 tax.",
        "After-tax proceeds from the old machine =25,000−4,000=21,000; net initial cash outflow =100,000−21,000=79,000."
      ]
    }
  },
  "IMA2024-P2-E-034": {
    "expectedAnswerIndex": 0,
    "steps": {
      "ar": [
        "التدفقات مبنية على سنوات مختلفة؛ لا تجمعها دون خصم. الخارجة = 550,000 اليوم و500,000 بنهاية السنة الأولى، والداخلة =450,000 و350,000 و350,000 و350,000 في السنوات 2 إلى 5.",
        "البيع النهائي 50,000 مع قيمة دفترية صفر يولد ضريبة 40%×50,000=20,000؛ صافي المتحصل =30,000 يضاف لتدفق السنة الخامسة ليصبح 380,000.",
        "باستخدام عوامل خصم 14% المقربة التي استخدمها المصدر: NPV بالألوف = −550 −500×0.877 +450×0.769 +350×0.675 +350×0.592 +380×0.519 ≈ −1.78؛ أي خسارة قيمة حالية تقارب 1,780."
      ],
      "en": [
        "Cash flows occur in different years and must be discounted separately: outflows are 550,000 now and 500,000 at year 1; inflows are 450,000, 350,000, 350,000 and 350,000 in years 2–5.",
        "Terminal sale of 50,000 with zero tax basis incurs 40%×50,000=20,000 tax; after-tax proceeds of 30,000 raise year-5 inflow to 380,000.",
        "Using the source's rounded 14% PV factors, NPV in thousands = −550 −500×0.877 +450×0.769 +350×0.675 +350×0.592 +380×0.519 ≈ −1.78, about a 1,780 negative NPV."
      ]
    }
  }
};
