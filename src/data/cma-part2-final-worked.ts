import type { CmaBeginnerNote } from "@/data/cma-part2-beginner-notes";

/** Final set of topic-specific three-step examples to cover all 56 Part 2 sections. */
export const CMA_PART2_FINAL_WORKED: Record<string, NonNullable<CmaBeginnerNote["example"]>> = {
  "p2-su2-reported-profit": {
    "scenario": {
      "ar": "صافي الربح المعلن بعد الضريبة 120,000 ويتضمن مكسب بيع أصل غير متكرر 20,000 قبل الضريبة. معدل الضريبة المفترض 25%. ما الربح المعدل باستبعاد هذا المكسب فقط؟",
      "en": "Reported after-tax income is 120,000 including a nonrecurring pretax asset-sale gain of 20,000. Assume a 25% tax rate. Normalize for that gain only."
    },
    "steps": {
      "ar": [
        "المكسب بعد الضريبة = 20,000 × (1 − 25%) = 15,000.",
        "اطرح الأثر غير المتكرر من الربح المعلن.",
        "الربح المعدل = 120,000 − 15,000 = 105,000."
      ],
      "en": [
        "After-tax gain = 20,000 × (1 − 25%) = 15,000.",
        "Remove this nonrecurring item from reported net income.",
        "Normalized income = 120,000 − 15,000 = 105,000."
      ]
    },
    "takeaway": {
      "ar": "تعديل الأرباح أداة تحليل لا تغييرًا في القوائم الرسمية؛ ولا تحذف مصروفًا متكررًا بلا مبرر.",
      "en": "Normalization is an analytical tool, not a restatement; do not omit recurring expenses arbitrarily."
    }
  },
  "p2-su3-earnings-quality": {
    "scenario": {
      "ar": "أعلنت شركة ربحًا صافيًا 100,000 وتدفقًا نقديًا تشغيليًا 60,000؛ وارتفع رصيد العملاء خلال السنة. ماذا تفحص أولًا؟",
      "en": "A company reports net income 100,000, operating cash flow 60,000 and growing receivables. What should be checked first?"
    },
    "steps": {
      "ar": [
        "نسبة التدفق النقدي التشغيلي إلى صافي الربح = 60,000 ÷ 100,000 = 60%.",
        "زيادة الذمم قد تعني بيعًا آجلًا لم يُحصّل بعد.",
        "افحص أعمار الديون وشروط الائتمان والاتجاه عبر عدة سنوات قبل الحكم على جودة الأرباح."
      ],
      "en": [
        "Operating cash flow to net income = 60,000 ÷ 100,000 = 60%.",
        "Higher receivables can indicate credit sales not yet collected.",
        "Review aging, credit terms and multi-year patterns before judging earnings quality."
      ]
    },
    "takeaway": {
      "ar": "انخفاض التدفق النقدي عن الربح لا يثبت التلاعب تلقائيًا، لكنه يتطلب تفسيرًا.",
      "en": "Cash flow below profit is not proof of manipulation but warrants investigation."
    }
  },
  "p2-su4-stock": {
    "scenario": {
      "ar": "عند التصفية توجد أصول قابلة للتوزيع بقيمة 500,000 والتزامات للدائنين 350,000 وأولوية لأسهم ممتازة 100,000. كم يبقى للعادية وفق هذه الافتراضات؟",
      "en": "On liquidation, assets available are 500,000, creditor claims 350,000 and a preferred-share priority of 100,000. What remains for common equity under these assumptions?"
    },
    "steps": {
      "ar": [
        "المتبقي بعد الدائنين = 500,000 − 350,000 = 150,000.",
        "تُسدد أولوية الممتازة 100,000 وفق الشروط المفترضة.",
        "المتبقي للعادية = 150,000 − 100,000 = 50,000."
      ],
      "en": [
        "Residual after creditors = 500,000 − 350,000 = 150,000.",
        "Pay the assumed preferred liquidation priority of 100,000.",
        "Remaining claim for common shares = 150,000 − 100,000 = 50,000."
      ]
    },
    "takeaway": {
      "ar": "ترتيب المطالبات يختلف عن حقوق التصويت ولا يُفترض تعميم شروط إصدار بعينه.",
      "en": "Priority of claims differs from voting rights and depends on issue terms."
    }
  },
  "p2-su4-dividends": {
    "scenario": {
      "ar": "أرباح مبقاة أول السنة 100,000، وصافي الربح 30,000، والتوزيع النقدي المعلن 15,000، ولا توجد تغيرات أخرى. ما الرصيد النهائي؟",
      "en": "Opening retained earnings are 100,000, net income 30,000 and declared cash dividends 15,000, with no other changes. Find ending retained earnings."
    },
    "steps": {
      "ar": [
        "أضف صافي الربح إلى الأرباح المبقاة: 100,000 + 30,000 = 130,000.",
        "التوزيعات على الملاك تُخصم من الأرباح المبقاة.",
        "الرصيد النهائي = 130,000 − 15,000 = 115,000."
      ],
      "en": [
        "Add net income: 100,000 + 30,000 = 130,000.",
        "Dividends to shareholders reduce retained earnings.",
        "Ending retained earnings = 130,000 − 15,000 = 115,000."
      ]
    },
    "takeaway": {
      "ar": "التوزيع لا يُعامل مصروفًا تشغيليًا في حساب صافي الربح.",
      "en": "Dividends are not operating expenses in calculating net income."
    }
  },
  "p2-su5-markets": {
    "scenario": {
      "ar": "أصدرت شركة 1,000 سهم جديد بسعر 50 للسهم، ثم باع مستثمر لاحقًا 200 سهم في السوق بسعر 55. ما الأموال التي تصل للشركة من كل عملية قبل الرسوم؟",
      "en": "A company issues 1,000 new shares at 50 each. Later an investor sells 200 existing shares in the market at 55. How much does the company receive from each trade, before fees?"
    },
    "steps": {
      "ar": [
        "الطرح الأولي: 1,000 × 50 = 50,000 للشركة.",
        "البيع اللاحق في السوق الثانوية: 200 × 55 = 11,000 للمستثمر البائع.",
        "المبلغ الإضافي الذي يصل للشركة من الصفقة الثانوية = صفر."
      ],
      "en": [
        "Primary issuance: 1,000 × 50 = 50,000 to the issuer.",
        "Secondary sale: 200 × 55 = 11,000 to the selling investor.",
        "Additional funds to the issuer from secondary sale = zero."
      ]
    },
    "takeaway": {
      "ar": "السوق الثانوية تدعم السيولة لكنها عادة لا تموّل المُصدر عند تداول أسهم قائمة.",
      "en": "Secondary markets aid liquidity but usually do not fund the issuer when existing shares trade."
    }
  },
  "p2-su5-portfolio": {
    "scenario": {
      "ar": "محفظة تستثمر 60% في أصل عائده المتوقع 10% و40% في أصل عائده المتوقع 2%. احسب العائد المتوقع المرجح.",
      "en": "A portfolio allocates 60% to an asset returning an expected 10% and 40% to one returning 2%. Find weighted expected return."
    },
    "steps": {
      "ar": [
        "مساهمة الأصل الأول = 60% × 10% = 6%.",
        "مساهمة الأصل الثاني = 40% × 2% = 0.8%.",
        "العائد المرجح المتوقع = 6.8%."
      ],
      "en": [
        "First asset contribution = 60% × 10% = 6%.",
        "Second asset contribution = 40% × 2% = 0.8%.",
        "Expected weighted portfolio return = 6.8%."
      ]
    },
    "takeaway": {
      "ar": "لا يمكنك حساب مخاطر المحفظة دون تقلبات الأصول وعلاقات الارتباط بينها.",
      "en": "Portfolio risk requires individual volatility and correlation information."
    }
  },
  "p2-su5-long-financing": {
    "scenario": {
      "ar": "تحتاج منشأة تمويلًا بـ400,000 في صورة قرض بفائدة سنوية 8%. ما الفائدة السنوية الاسمية قبل سداد الأصل أو الرسوم؟",
      "en": "A business borrows 400,000 at an annual nominal rate of 8%. Find annual interest before principal payments or fees."
    },
    "steps": {
      "ar": [
        "حدد أصل القرض الذي تُحسب الفائدة على رصيده: 400,000.",
        "الفائدة السنوية = 400,000 × 8%.",
        "الفائدة = 32,000 في سنة كاملة بافتراض ثبات الرصيد والمعدل."
      ],
      "en": [
        "Principal borrowed = 400,000.",
        "Annual nominal interest = 400,000 × 8%.",
        "Interest = 32,000 for a full year assuming unchanged balance and rate."
      ]
    },
    "takeaway": {
      "ar": "الدين يضيف التزامات نقدية محددة؛ لا تقارنه بإصدار الأسهم دون مراعاة تكلفة الملكية والمخاطر.",
      "en": "Debt adds fixed cash obligations; compare it with equity after considering ownership cost and risk."
    }
  },
  "p2-su6-new-capital": {
    "scenario": {
      "ar": "هيكل التمويل المستهدف 60% حقوق ملكية و40% دين. تتوفر أرباح مبقاة لتمويل حقوق الملكية بقيمة 300,000 قبل الحاجة لإصدار أسهم جديدة. عند أي إجمالي تمويل تنفد هذه الأرباح، بافتراض ثبات الأوزان؟",
      "en": "Target funding is 60% equity and 40% debt. Retained earnings available for the equity share equal 300,000. At what total financing level are retained earnings exhausted if target weights stay fixed?"
    },
    "steps": {
      "ar": [
        "كل تمويل جديد يحتاج 60% منه حقوق ملكية.",
        "اجعل حصة حقوق الملكية تساوي 300,000: إجمالي التمويل × 60% = 300,000.",
        "نقطة الانقطاع = 300,000 ÷ 0.60 = 500,000."
      ],
      "en": [
        "Each additional funding dollar needs 60% equity.",
        "Set equity funding to 300,000: total funding × 60% = 300,000.",
        "Break point = 300,000 ÷ 0.60 = 500,000."
      ]
    },
    "takeaway": {
      "ar": "بعد هذا الحد قد تتغير التكلفة الهامشية إذا كان إصدار حقوق ملكية جديدة أغلى.",
      "en": "Beyond the break point, marginal cost may rise if new equity is more expensive."
    }
  },
  "p2-su6-derivatives": {
    "scenario": {
      "ar": "اشتريت خيار شراء Call بسعر تنفيذ 100 وعلاوة 6 للسهم. سعر الأصل عند الانتهاء 120. ما العائد الصافي للسهم قبل الرسوم؟",
      "en": "You buy a call option with strike 100 and premium 6 per share. Underlying price at expiry is 120. Find net payoff per share before fees."
    },
    "steps": {
      "ar": [
        "قيمة ممارسة الخيار عند الانتهاء = 120 − 100 = 20.",
        "اطرح العلاوة المدفوعة = 20 − 6.",
        "الربح الصافي النظري = 14 للسهم قبل الرسوم."
      ],
      "en": [
        "Call intrinsic payoff at expiry = 120 − 100 = 20.",
        "Subtract premium initially paid: 20 − 6.",
        "Net gain = 14 per share before fees."
      ]
    },
    "takeaway": {
      "ar": "العلاوة تكلفة للحق؛ لا تخلط بين العائد الإجمالي للخيار والربح بعد العلاوة.",
      "en": "Premium is the cost of the right; distinguish option payoff from net profit."
    }
  },
  "p2-su7-working-capital": {
    "scenario": {
      "ar": "لشركة أصول متداولة 350,000 وخصوم متداولة 220,000. احسب صافي رأس المال العامل وافسر النتيجة بحذر.",
      "en": "A company has current assets of 350,000 and current liabilities 220,000. Find net working capital and interpret it cautiously."
    },
    "steps": {
      "ar": [
        "صافي رأس المال العامل = الأصول المتداولة − الخصوم المتداولة.",
        "طبّق الأرقام: 350,000 − 220,000.",
        "الصافي = 130,000 موجب، لكن توقيت التحصيل والسداد لا يظهر من الرقم وحده."
      ],
      "en": [
        "Net working capital = current assets less current liabilities.",
        "Apply the amounts: 350,000 − 220,000.",
        "Net working capital = positive 130,000; timing of collections and payments still matters."
      ]
    },
    "takeaway": {
      "ar": "رأس المال العامل ليس هو النقد الموجود في حساب البنك.",
      "en": "Net working capital is not the same as bank cash."
    }
  },
  "p2-su7-cash": {
    "scenario": {
      "ar": "رصيد النقد أول الشهر 30,000 والتحصيلات 100,000 والمدفوعات 115,000. تريد الإدارة حدًا أدنى 20,000. كم فجوة التمويل المبدئية؟",
      "en": "Opening cash is 30,000, collections 100,000 and payments 115,000. Management requires minimum cash of 20,000. Find preliminary financing need."
    },
    "steps": {
      "ar": [
        "الرصيد المتوقع قبل التمويل = 30,000 + 100,000 − 115,000 = 15,000.",
        "الحد الأدنى المطلوب = 20,000.",
        "فجوة التمويل = 20,000 − 15,000 = 5,000."
      ],
      "en": [
        "Projected closing cash before financing = 30,000 + 100,000 − 115,000 = 15,000.",
        "Minimum desired cash balance = 20,000.",
        "Preliminary financing shortfall = 20,000 − 15,000 = 5,000."
      ]
    },
    "takeaway": {
      "ar": "الربح المحاسبي لا يعالج نقص النقد عند الاستحقاق ما لم يتحول إلى تحصيلات.",
      "en": "Accounting profit cannot cover a cash shortage until cash is actually available."
    }
  },
  "p2-su7-marketable": {
    "scenario": {
      "ar": "لدى شركة 100,000 نقدًا فائضًا لأجل قصير. استثمار آمن مفترض يعطي 5% سنويًا، ويظل المبلغ مستثمرًا ثلاثة أشهر فقط. كم عائده التقريبي البسيط؟",
      "en": "A company has 100,000 temporary excess cash. An assumed liquid investment yields 5% annual simple return for three months. Find approximate return."
    },
    "steps": {
      "ar": [
        "مدة الاستثمار = 3 ÷ 12 = ربع سنة.",
        "العائد البسيط = 100,000 × 5% × 3 ÷ 12.",
        "العائد التقريبي = 1,250 قبل الرسوم أو الضرائب."
      ],
      "en": [
        "Holding period = 3 ÷ 12 = one-quarter of a year.",
        "Simple return = 100,000 × 5% × 3 ÷ 12.",
        "Approximate return = 1,250 before fees or taxes."
      ]
    },
    "takeaway": {
      "ar": "تأكد أن تاريخ استحقاق الاستثمار يتناسب مع موعد الحاجة للنقد.",
      "en": "Match investment maturity to expected cash needs."
    }
  },
  "p2-su8-mergers": {
    "scenario": {
      "ar": "قيمة شركة مستهدفة مستقلة 2,000,000، والقيمة الحالية لمنافع الدمج المتوقعة 400,000، وتكاليف الدمج 100,000. كم أقصى قيمة اقتصادية للمشتري وفق الافتراضات؟",
      "en": "A target's stand-alone value is 2,000,000, synergy PV is 400,000 and integration cost PV is 100,000. Find maximum economic value to buyer under assumptions."
    },
    "steps": {
      "ar": [
        "ابدأ بالقيمة المستقلة للشركة = 2,000,000.",
        "أضف المنافع القابلة للتحقق ثم اطرح تكلفة الدمج: +400,000 −100,000.",
        "الحد الاقتصادي = 2,300,000 قبل التكاليف والمخاطر الإضافية."
      ],
      "en": [
        "Start with stand-alone value = 2,000,000.",
        "Add realizable synergy and deduct integration cost: +400,000 − 100,000.",
        "Economic ceiling = 2,300,000 before other risks and costs."
      ]
    },
    "takeaway": {
      "ar": "القيمة الاقتصادية لا تساوي السعر الذي يجب دفعه؛ فالفرق يحدد قيمة ما يبقى للمشتري.",
      "en": "Economic ceiling is not necessarily the price to offer; the spread captures buyer value."
    }
  },
  "p2-su8-international-trade": {
    "scenario": {
      "ar": "صدّرت شركة بضاعة لمشترٍ أجنبي، واشترطت اعتمادًا مستنديًا من بنك مقابل تقديم مستندات شحن مطابقة. هل يضمن الاعتماد جودة البضاعة؟",
      "en": "An exporter uses a letter of credit from a bank against compliant shipping documents. Does it guarantee the physical quality of goods?"
    },
    "steps": {
      "ar": [
        "حدد نوع الالتزام: البنك يتعامل مع مستندات مطابقة لشروط الاعتماد.",
        "تحقق من المستندات ومواعيدها ومن الجهة البنكية والتزاماتها.",
        "الجودة الفعلية للبضاعة تحتاج فحصًا أو شروطًا تعاقدية مستقلة؛ الاعتماد ليس تأمين جودة تلقائيًا."
      ],
      "en": [
        "Identify the bank's obligation: it deals with documents complying with letter-of-credit terms.",
        "Verify the required documentation, deadlines and issuing-bank conditions.",
        "Actual goods quality needs separate inspection or contract protections; the LC is not automatic quality insurance."
      ]
    },
    "takeaway": {
      "ar": "أمان تحصيل الثمن يختلف عن سلامة البضاعة أو القدرة على بيعها.",
      "en": "Payment security differs from product quality and commercial viability."
    }
  },
  "p2-su8-fx-risk": {
    "scenario": {
      "ar": "شركة ستدفع 100,000 يورو بعد ثلاثة أشهر وتستطيع تثبيت سعر آجل 4.10 ريال لكل يورو. ما المبلغ الذي تقفله بالريال، قبل الرسوم؟",
      "en": "A company will pay EUR 100,000 in three months and can lock in SAR 4.10 per EUR forward, before fees. What riyal amount does the hedge fix?"
    },
    "steps": {
      "ar": [
        "المبلغ الأجنبي المطلوب = 100,000 يورو.",
        "اضربه في السعر الآجل المتعاقد عليه: 100,000 × 4.10.",
        "المدفوع المستقبلي المقفل = 410,000 ريال، بغض النظر عن السوق عند الاستحقاق في حدود العقد."
      ],
      "en": [
        "Foreign currency payable = EUR 100,000.",
        "Multiply by the contractual forward rate: 100,000 × 4.10.",
        "Fixed settlement amount = SAR 410,000, subject to the agreement terms."
      ]
    },
    "takeaway": {
      "ar": "التحوط يخفف عدم اليقين؛ قد يبدو أفضل أو أسوأ من السعر الفوري لاحقًا.",
      "en": "Hedging reduces uncertainty but may outperform or underperform the later spot rate."
    }
  },
  "p2-su8-fx-effects": {
    "scenario": {
      "ar": "شركة عملتها الوظيفية الريال ولها ذمة مدينة 20,000 دولار. سُجلت عند 3.75 ريال للدولار وسُددت عند 3.80. ما فرق العملة المحقق؟",
      "en": "A SAR-functional company has a USD 20,000 receivable, initially recognized at SAR 3.75 per USD and settled at 3.80. Find realized FX difference."
    },
    "steps": {
      "ar": [
        "القيمة الأولية للذمة = 20,000 × 3.75 = 75,000 ريال.",
        "النقد عند التحصيل = 20,000 × 3.80 = 76,000 ريال.",
        "فرق العملة المحقق = 1,000 ريال ربح، قبل الرسوم وأي إعادة تقييم سابقة."
      ],
      "en": [
        "Initial receivable = 20,000 × 3.75 = SAR 75,000.",
        "Settlement cash = 20,000 × 3.80 = SAR 76,000.",
        "Realized FX gain = SAR 1,000 before fees and earlier remeasurements."
      ]
    },
    "takeaway": {
      "ar": "أثر تغير سعر الصرف على الذمم يختلف عن ترجمة قوائم شركة أجنبية.",
      "en": "FX gains on monetary receivables differ from translating a foreign subsidiary's statements."
    }
  },
  "p2-su10-marginal-profit": {
    "scenario": {
      "ar": "الطلب على وحدة إضافية يعطي إيرادًا إضافيًا 120 وتكلفتها الإضافية 90، والوحدة التي تليها تحتاج تكلفة إضافية 130 لنفس الإيراد. أيهما تزيد الربح؟",
      "en": "One additional unit brings incremental revenue 120 and costs 90; the next unit would cost 130 at the same incremental revenue 120. Which units increase profit?"
    },
    "steps": {
      "ar": [
        "الوحدة الأولى: الزيادة في الربح = 120 − 90 = +30.",
        "الوحدة الثانية: الزيادة في الربح = 120 − 130 = −10.",
        "وفق المعطيات ننتج الأولى، ولا ننتج الثانية إذا لم توجد عوامل أخرى."
      ],
      "en": [
        "First additional unit: marginal profit = 120 − 90 = +30.",
        "Second additional unit: marginal profit = 120 − 130 = −10.",
        "Under assumptions, make the first additional unit but not the second."
      ]
    },
    "takeaway": {
      "ar": "القرار الهامشي يقارن التغير في الإيراد بالتغير في التكلفة عند كل مستوى نشاط.",
      "en": "Marginal decisions compare extra revenue with extra cost at each output level."
    }
  },
  "p2-su11-market-structures": {
    "scenario": {
      "ar": "محل يبيع منتجًا متطابقًا مع عشرات الموردين بسعر سوق 20، بينما علامة متخصصة تبيع منتجًا متمايزًا. أيهما أقدر على رفع السعر دون خسارة كل العملاء؟",
      "en": "A shop sells an identical product offered by many suppliers at market price 20; another sells a differentiated specialty product. Which has more pricing flexibility?"
    },
    "steps": {
      "ar": [
        "المنتج المتطابق مع منافسين كثيرين يجعل الطلب على بائع واحد حساسًا للسعر.",
        "التميّز يقلل قابلية الاستبدال وقد يمنح بعض قوة التسعير.",
        "تحتاج مقارنة المرونة والتكاليف؛ التمايز لا يضمن قدرة غير محدودة على زيادة السعر."
      ],
      "en": [
        "Many sellers of an identical good make one seller's demand price-sensitive.",
        "Differentiation may reduce substitutability and create some pricing power.",
        "Elasticity and costs still matter; differentiation does not mean unlimited pricing power."
      ]
    },
    "takeaway": {
      "ar": "نوع السوق يساعد على تفسير القرار لكنه لا يحل محل دراسة الطلب الفعلي.",
      "en": "Market structure informs pricing but does not replace evidence about actual demand."
    }
  },
  "p2-su12-coso-erm": {
    "scenario": {
      "ar": "تخطط شركة للتوسع في منطقة جديدة. قبل الموافقة لاحظت الإدارة مخاطر عملة وتشغيل وسمعة. كيف تطبق منطق COSO ERM على القرار؟",
      "en": "A firm plans to expand into a new region and identifies currency, operations and reputation risks. How does COSO ERM inform the choice?"
    },
    "steps": {
      "ar": [
        "اربط هدف التوسع باستراتيجية الشركة وحدود المخاطر المقبولة.",
        "حدد المخاطر وقدر أثرها واحتمالها والخيارات المتاحة للاستجابة.",
        "أدخل نتائج التقييم في قرار التوسع وحدد متابعة دورية ومسؤولية واضحة."
      ],
      "en": [
        "Connect expansion goals with strategy and risk appetite.",
        "Identify exposures, assess likelihood and impact, and choose responses.",
        "Use the assessment in the strategic decision and assign monitoring and accountability."
      ]
    },
    "takeaway": {
      "ar": "COSO ERM يربط إدارة المخاطر بقرارات الأداء والاستراتيجية لا بملف مخاطر منفصل.",
      "en": "COSO ERM integrates risk with strategy and performance, not merely a detached risk register."
    }
  },
  "p2-su13-risk-real-options": {
    "scenario": {
      "ar": "مشروع له سيناريو متفائل بصافي قيمة حالية +100,000 باحتمال 60% ومتشائم −50,000 باحتمال 40%. ما NPV المرجحة بالاحتمالات، قبل مناقشة خيار التأجيل؟",
      "en": "A project's optimistic NPV is +100,000 with 60% probability and downside NPV is −50,000 with 40% probability. Find probability-weighted NPV before considering delay options."
    },
    "steps": {
      "ar": [
        "مساهمة التفاؤل = 100,000 × 60% = 60,000.",
        "مساهمة التشاؤم = −50,000 × 40% = −20,000.",
        "صافي القيمة المرجح = 40,000؛ بعدها قيّم مرونة التأجيل أو الإلغاء دون افتراض أنها مجانية."
      ],
      "en": [
        "Optimistic contribution = 100,000 × 60% = 60,000.",
        "Pessimistic contribution = −50,000 × 40% = −20,000.",
        "Weighted NPV = +40,000; then assess the option to delay or abandon without assuming no cost."
      ]
    },
    "takeaway": {
      "ar": "القيمة المتوقعة الموجبة لا تلغي خطر الخسارة أو الحاجة إلى قرار مرن.",
      "en": "Positive expected NPV does not eliminate downside risk or the value of managerial flexibility."
    }
  },
  "p2-su13-integrated-decisions": {
    "scenario": {
      "ar": "استثمار أولي 100,000 مع 20,000 رأس مال عامل. يولد 50,000 بنهاية السنة الأولى و50,000 بنهاية الثانية، وتُباع المعدة في نهاية الثانية بـ30,000 ويُسترد رأس المال العامل 20,000. بمعدل خصم 10%، وتجاهل الضرائب، ما NPV؟",
      "en": "Equipment costs 100,000 plus 20,000 initial working capital. End-of-year cash flow is 50,000 in each of two years; terminal sale brings 30,000 and working capital recovery 20,000. At 10% discount and ignoring taxes, find NPV."
    },
    "steps": {
      "ar": [
        "التدفق الابتدائي = −(100,000 + 20,000) = −120,000.",
        "السنة الأولى: 50,000 ÷ 1.10 ≈ 45,455؛ السنة الثانية: (50,000 + 30,000 + 20,000) ÷ 1.10² ≈ 82,645.",
        "NPV ≈ −120,000 + 45,455 + 82,645 = +8,100، وفق التقريب والافتراضات."
      ],
      "en": [
        "Initial cash flow = −(100,000 + 20,000) = −120,000.",
        "Year 1 PV = 50,000 ÷ 1.10 ≈ 45,455; year 2 PV = (50,000 + 30,000 + 20,000) ÷ 1.10² ≈ 82,645.",
        "NPV ≈ −120,000 + 45,455 + 82,645 = +8,100 after rounding."
      ]
    },
    "takeaway": {
      "ar": "توقيت استرداد رأس المال العامل وقيمة بيع الأصل جزء من التدفق النهائي، ولا يُخصمان من الاستثمار الأولي.",
      "en": "Working-capital recovery and asset sale occur at the terminal date, not at project inception."
    }
  },
  "p2-su14-business-ethics": {
    "scenario": {
      "ar": "طلب مدير حذف معلومة جوهرية عن خسارة من عرض المستثمرين بحجة أن الشركة ستعوّضها قريبًا. كيف تقيم التصرف قبل إعداد التقرير؟",
      "en": "A manager asks to omit a material loss from an investor presentation because it may be recovered soon. How should the accountant evaluate this?"
    },
    "steps": {
      "ar": [
        "حدد أصحاب المصلحة الذين يعتمدون على معلومة الخسارة.",
        "تحقق من جوهرية الخسارة ومتطلبات العرض الصادق وعدم التضليل.",
        "وثّق المسألة واطلب التصحيح أو التصعيد وفق الإجراءات المهنية الداخلية."
      ],
      "en": [
        "Identify stakeholders relying on the loss information.",
        "Assess materiality, faithful presentation and risk of misleading omission.",
        "Document the issue and seek correction or escalation under appropriate professional procedures."
      ]
    },
    "takeaway": {
      "ar": "احتمال تعويض خسارة مستقبلًا لا يبرر إخفاء خسارة مؤكدة حاليًا.",
      "en": "Possible future recovery does not justify concealing a known current loss."
    }
  },
  "p2-su15-legislation": {
    "scenario": {
      "ar": "طلب وسيط دفعة 10,000 لتسريع تصريح دون عقد أو فاتورة واضحة، واقترح تسجيلها «استشارات». كيف يتصرف المحاسب؟",
      "en": "An intermediary asks for 10,000 to speed up a permit without clear contract or invoice and suggests booking it as 'consulting.' What should an accountant do?"
    },
    "steps": {
      "ar": [
        "أوقف الدفع إلى حين التحقق من المستفيد والغرض الحقيقي والمستندات.",
        "راجع سياسة الامتثال والأنظمة السارية مع الجهة المختصة.",
        "لا تُسجل المبلغ بوصف غير حقيقي، ووثّق القرار وخطوات المراجعة."
      ],
      "en": [
        "Hold the payment pending verification of the beneficiary, genuine purpose and supporting records.",
        "Consult applicable compliance policy and law with the proper function.",
        "Do not misclassify the payment as consulting without substance; document the review."
      ]
    },
    "takeaway": {
      "ar": "الدقة في السجلات جزء من مكافحة الفساد، وتسمية القيد لا تغير طبيعة المعاملة.",
      "en": "Accurate books are a core compliance control; a journal label cannot change a transaction's true nature."
    }
  }
};
