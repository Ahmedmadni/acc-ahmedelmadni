import type { IcmaPart2RawQuestion } from "@/data/cma-icma-2024-part2-raw";

/** Source: ICMA CMA Exam Support Package (2024), Part 2, Domain B.
 * Published on request of the site owner, who confirms republication permission.
 * Copyright © 2024 Institute of Certified Management Accountants (ICMA).
 * Original English text and published answer index, not an independently authored item.
 */
export const ICMA_2024_PART2_B: IcmaPart2RawQuestion[] = [
  {
    "id": "IMA2024-P2-B-001",
    "section": "B",
    "questionNumber": 1,
    "pdfPage": 231,
    "cso": "2B1A",
    "los": "2B1h",
    "question": "An investor is evaluating the common stock of a technology company which has a beta of 1.8. The\n       expected return for the securities market as a whole is 8%. The investor could receive a risk-free\n        return of 2% on a U.S. Treasury bill. Based on the capital asset pricing model (CAPM), what is the\n       expected risk adjusted return of the technology company’s common stock?",
    "choices": [
      "10.8%.",
      "12.8%.",
      "16.4%.",
      "20.0%."
    ],
    "answerIndex": 1,
    "explanation": "a. 1.8 * (8% - 2%) = 10.8%\n      b. expected return = risk free return + beta of security (expected market return – risk free return)\n     expected return = 2% + 1.8 * (8% - 2%) = 12.8%\n      c. 2% + 1.8 * (8%) = 16.4%\n      d. 2% + 1.8 * (8% + 2%) = 20.0%",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-002",
    "section": "B",
    "questionNumber": 2,
    "pdfPage": 231,
    "cso": "2B1A",
    "los": "2B1h",
    "question": "Frasier Products has been growing at a rate of 10% per year and expects this growth to continue and\n       produce earnings per share of $4.00 next year. The company has a dividend payout ratio of 35% and\n       a beta value of 1.25.  If the risk-free rate is 7% and the return on the market is 15%, what is the\n       expected current market value of Frasier’s common stock?",
    "choices": [
      "$14.00.",
      "$16.00.",
      "$20.00.",
      "$28.00."
    ],
    "answerIndex": 2,
    "explanation": "The expected current value of Frasier’s common stock in $20 as shown below.\n\n     Dividend           =  Payout ratio x Earnings per share\n                     =  .35 x $4.00\n                     =  $1.40\n     Required return      =  Risk-free rate + Beta (Market rate – Risk-free rate)\n                     =  .07 + 1.25 (.15 - .07)\n                     =  .17\n     Value of stock       =  Dividend ÷ (Required return – Dividend growth rate)\n                     =  $1.40 ÷ (.17 - .10)\n                     =  $20.00",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-003",
    "section": "B",
    "questionNumber": 3,
    "pdfPage": 231,
    "cso": "2B1A",
    "los": "2B1g",
    "question": "Which one of the following would have the least impact on a company’s beta value?",
    "choices": [
      "Debt-to-equity ratio.",
      "Industry characteristics.",
      "Operating leverage.",
      "Payout ratio."
    ],
    "answerIndex": 3,
    "explanation": "Beta is an index of systematic risk and measures the sensitivity of a stock’s returns to\n     changes in returns on the market portfolio. A company’s beta is determined by the risk characteristics of\n      the company. Of the options given, the payout ratio has the least impact on the company’s riskiness and\n      therefore its beta value.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-004",
    "section": "B",
    "questionNumber": 4,
    "pdfPage": 231,
    "cso": "2B1A",
    "los": "2B1g",
    "question": "If Dexter Industries has a beta value of 1.0, then its",
    "choices": [
      "return should equal the risk-free rate.",
      "price is relatively stable.",
      "expected return should approximate the overall market.",
      "volatility is low."
    ],
    "answerIndex": 2,
    "explanation": "If a company has a beta value of 1.0, the stock has the same systematic risk as the\n     market as a whole and should rise and fall with the market.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-005",
    "section": "B",
    "questionNumber": 5,
    "pdfPage": 232,
    "cso": "2B1B",
    "los": "2B1c",
    "question": "Which one of the following provides the best measure of interest rate risk for a corporate bond?",
    "choices": [
      "Duration.",
      "Yield to maturity.",
      "Bond rating.",
      "Maturity."
    ],
    "answerIndex": 0,
    "explanation": "Interest rate risk is the variation in the market price of a bond caused by changes in\n      interest rates. The longer the maturity (duration) of the bond, the greater the price fluctuation associated\n     with the given change in market required return.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-006",
    "section": "B",
    "questionNumber": 6,
    "pdfPage": 232,
    "cso": "2B1C",
    "los": "2B1g",
    "question": "The term “beta” can best be described as the",
    "choices": [
      "variability or standard deviation of the investment returns.",
      "investment return’s sensitivity to changes in the market’s returns.",
      "investment return’s sensitivity to changes in interest rates.",
      "weighted-average return of an investment portfolio."
    ],
    "answerIndex": 1,
    "explanation": "Choice b is correct because beta describes an investment’s sensitivity to market\n     movements.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-007",
    "section": "B",
    "questionNumber": 7,
    "pdfPage": 232,
    "cso": "2B2A",
    "los": "2B2a",
    "question": "The yield curve shows the relationship between bond yields that differ by the",
    "choices": [
      "credit risk of the issuer of the bonds.",
      "dividend yield of the issuer of the bonds.",
      "par value of the bonds.",
      "years to maturity of the bonds."
    ],
    "answerIndex": 3,
    "explanation": "The yield curve plots yield versus bond maturity.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-008",
    "section": "B",
    "questionNumber": 8,
    "pdfPage": 232,
    "cso": "2B2B",
    "los": "2B2d",
    "question": "A public company’s shareholders expect to receive a dividend one year from now of $20 per share.\n     Immediately after the dividend payout, analysts are expecting that the stock will trade at $244 per\n      share. If the investors have a required rate of return of 20%, what is the current value of the stock?",
    "choices": [
      "$220.",
      "$224.",
      "$244.",
      "$264."
    ],
    "answerIndex": 0,
    "explanation": "Current price=(Expected future price + Next dividend)/(1+required rate of return)\n     Current Price=($244+20)/(1+0.2)=$264/1.2=$220",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-009",
    "section": "B",
    "questionNumber": 9,
    "pdfPage": 232,
    "cso": "2B2B",
    "los": "2B2c",
    "question": "The call provision in some bond indentures allows",
    "choices": [
      "the issuer to exercise an option to redeem the bonds.",
      "the bondholder to exchange the bond, at no additional cost, for common shares.",
      "the bondholder to redeem the bond early by paying a call premium.",
      "the issuer to pay a premium in order to prevent bondholders from redeeming bonds."
    ],
    "answerIndex": 0,
    "explanation": "A call provision is a feature in an indenture that permits the issuer to repurchase\n      securities at a fixed price before maturity.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-010",
    "section": "B",
    "questionNumber": 10,
    "pdfPage": 233,
    "cso": "2B2B",
    "los": "2B2c",
    "question": "Protective clauses set forth in an indenture are known as",
    "choices": [
      "provisions.",
      "requirements.",
      "addenda.",
      "covenants."
    ],
    "answerIndex": 3,
    "explanation": "Protective clauses or restrictions in bond indentures and loan agreements are known\n     as covenants and can include items such as working capital requirements and capital expenditure\n      limitations.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-011",
    "section": "B",
    "questionNumber": 11,
    "pdfPage": 233,
    "cso": "2B2B",
    "los": "2B2c",
    "question": "A requirement specified in an indenture agreement which states that a company cannot acquire or\n      sell major assets without prior creditor approval is known as a",
    "choices": [
      "protective covenant.",
      "call provision.",
      "warrant.",
      "put option."
    ],
    "answerIndex": 0,
    "explanation": "Protective clauses or restrictions in bond indentures and loan agreements are known\n     as covenants and can include items such as working capital requirements and capital expenditure\n      limitations.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-012",
    "section": "B",
    "questionNumber": 12,
    "pdfPage": 234,
    "cso": "2B2B",
    "los": "2b2c",
    "question": "Dorsy Manufacturing plans to issue mortgage bonds subject to an indenture. Which of the following\n      restrictions or requirements are likely to be contained in the indenture?\n\n                      I.   Receiving the trustee’s permission prior to selling the property.\n                     II.  Maintain the property in good operating condition.\n                    III. Insuring plant and equipment at certain minimum levels.\n               IV. Including a negative pledge clause.",
    "choices": [
      "I and IV only.",
      "II and III only.",
      "I, III, and IV only.",
      "I, II, III and IV."
    ],
    "answerIndex": 3,
    "explanation": "All of the restrictions listed are likely to be included as protective covenants in the\n      indenture.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-013",
    "section": "B",
    "questionNumber": 13,
    "pdfPage": 234,
    "cso": "2B2B",
    "los": "2B2d",
    "question": "Which one of the following situations would prompt a company to issue debt, as opposed to equity,\n      the next time it raises external capital?",
    "choices": [
      "High breakeven point.",
      "Significant percentage of assets under finance lease.",
      "Low fixed-charge coverage.",
      "High effective tax rate."
    ],
    "answerIndex": 3,
    "explanation": "A company would be inclined to issue debt rather than equity when the effective tax\n      rate is high as the interest expense associated with debt reduces income and therefore reduces tax\n     expense.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-014",
    "section": "B",
    "questionNumber": 14,
    "pdfPage": 234,
    "cso": "2B2B",
    "los": "2B2c",
    "question": "Which one of the following is a debt instrument that generally has a maturity of ten years or more?",
    "choices": [
      "A bond.",
      "A note.",
      "A chattel mortgage.",
      "A financial lease."
    ],
    "answerIndex": 0,
    "explanation": "A bond is a long-term debt instrument with a final maturity generally being 10 years\n     or more.  If the security has a final maturity shorter than 10 years, it is generally called a note.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-015",
    "section": "B",
    "questionNumber": 15,
    "pdfPage": 234,
    "cso": "2B2B",
    "los": "2B2b",
    "question": "James Hemming, the chief financial officer of a mid-western machine parts manufacturer, is\n     considering splitting the company’s stock, which is currently selling at $80.00 per share. The stock\n      currently pays a $1.00 per share dividend.  If the split is two-for-one, Mr. Hemming may expect the\n      post-split price to be",
    "choices": [
      "exactly $40.00, regardless of dividend policy.",
      "greater than $40.00, if the dividend is changed to $0.45 per new share.",
      "greater than $40.00, if the dividend is changed to $0.55 per new share.",
      "less than $40.00, regardless of dividend policy."
    ],
    "answerIndex": 2,
    "explanation": "The post-split price of the stock should be greater than $40.00 if the dividend changed\n      to $.55 as the dividend yield will have increased.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-016",
    "section": "B",
    "questionNumber": 16,
    "pdfPage": 235,
    "cso": "2B2B",
    "los": "2B2b",
    "question": "Which one of the following best describes the record date as it pertains to common stock?",
    "choices": [
      "Four business days prior to the payment of a dividend.",
      "The 52-week high for a stock published in the Wall Street Journal.",
      "The date that is chosen to determine the ownership of shares.",
      "The date on which a prospectus is declared effective by the Securities and Exchange\n        Commission."
    ],
    "answerIndex": 2,
    "explanation": "The record date, set when a dividend is declared, is the date on which an investor\n     must be a shareholder in order to be entitled to receive the upcoming dividend.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-017",
    "section": "B",
    "questionNumber": 17,
    "pdfPage": 235,
    "cso": "2B2B",
    "los": "2B2b",
    "question": "Preferred stock may be retired through the use of any one of the following except a",
    "choices": [
      "conversion.",
      "call provision.",
      "refunding.",
      "sinking fund."
    ],
    "answerIndex": 2,
    "explanation": "Refunding is replacing an old debt issue with a new one, usually to lower interest\n      cost. Therefore, refunding is not a method for retiring preferred stock.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-018",
    "section": "B",
    "questionNumber": 18,
    "pdfPage": 235,
    "cso": "2B2B",
    "los": "2B2b",
    "question": "All of the following are characteristics of preferred stock except that",
    "choices": [
      "it may be callable at the option of the corporation.",
      "it may be converted into common stock.",
      "its dividends are tax deductible to the issuer.",
      "it usually has no voting rights."
    ],
    "answerIndex": 2,
    "explanation": "Unlike interest expense, dividends are not tax deductible to the issuer.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-019",
    "section": "B",
    "questionNumber": 19,
    "pdfPage": 235,
    "cso": "2B2B",
    "los": "2B2b",
    "question": "Which one of the following describes a disadvantage to a company that issues preferred stock?",
    "choices": [
      "Preferred stock dividends are legal obligations of the corporation.",
      "Preferred stock typically has no maturity date.",
      "Preferred stock is usually sold on a higher yield basis than bonds.",
      "Most preferred stock is owned by corporate investors."
    ],
    "answerIndex": 2,
    "explanation": "A disadvantage of preferred stock to the issuer is that it generally sells on a higher\n      yield basis than bonds.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-020",
    "section": "B",
    "questionNumber": 20,
    "pdfPage": 235,
    "cso": "2B2C",
    "los": "2B2d",
    "question": "Which one of the following statements concerning debt instruments is correct?",
    "choices": [
      "The coupon rate and yield of an outstanding long-term bond will change over time as economic\n          factors change.",
      "A 25-year bond with a coupon rate of 9% and one year to maturity has more interest rate risk\n         than a 10-year bond with a 9% coupon issued by the same company with one year to maturity.",
      "For long-term bonds, price sensitivity to a given change in interest rates is greater the longer the\n         maturity of the bond.",
      "A bond with one year to maturity would have more interest rate risk than a bond with 15 years to\n         maturity."
    ],
    "answerIndex": 2,
    "explanation": "The longer the maturity (duration) of the bond, the greater the price fluctuation\n     associated with a given change in market required return.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-021",
    "section": "B",
    "questionNumber": 21,
    "pdfPage": 236,
    "cso": "2B2C",
    "los": "2B2q",
    "question": "Which of the following, when considered individually, would generally have the effect of increasing\n     a company’s cost of capital?\n\n                          I.      The company reduces its operating leverage.\n                         II.     The corporate tax rate is increased.\n                        III.     The company pays off its only outstanding debt.\n                 IV.     The Treasury Bond yield increases.",
    "choices": [
      "I and III.",
      "II and IV.",
      "III and IV.",
      "I, III and IV."
    ],
    "answerIndex": 2,
    "explanation": "If a company pays off its only outstanding debt, the cost of capital is likely to increase\n     because the cost of equity is greater than the cost of debt.  If the Treasury Bond yield increases, the\n      overall required rate of return will likely increase causing an increase in the cost of capital.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-022",
    "section": "B",
    "questionNumber": 22,
    "pdfPage": 236,
    "cso": "2B2C",
    "los": "2B2r",
    "question": "An accountant for Stability Inc. must calculate the weighted average cost of capital of the\n     corporation using the following information.\n\n                                                                  Interest Rate\n                 Accounts payable      $35,000,000           -0-\n                 Long-term debt         10,000,000      8%\n             Common stock          10,000,000      15%\n                   Retained earnings         5,000,000      18%\n\n    What is the weighted average cost of capital of Stability?",
    "choices": [
      "6.88%.",
      "8.00%.",
      "10.25%.",
      "12.80%."
    ],
    "answerIndex": 3,
    "explanation": "Stability’s cost of capital is 12.80% as calculated below.\n\n        Long-term debt        $10,000,000         40% x 8%       3.20%\n      Common stock          10,000,000        40% x 15%       6.00%\n        Retained earnings         5,000,000        20% x 18%       3.60%\n                              $25,000,000                         12.80%",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-023",
    "section": "B",
    "questionNumber": 23,
    "pdfPage": 237,
    "cso": "2B2C",
    "los": "2B2r",
    "question": "Kielly Machines Inc. is planning an expansion program estimated to cost $100 million. Kielly is\n     going to raise funds according to its target capital structure shown below.\n\n                 Debt                  .30\n                    Preferred stock        .24\n                   Equity                .46\n\n     Kielly had net income available to common shareholders of $184 million last year of which 75%\n    was paid out in dividends. The company has a marginal tax rate of 40%.\n\n     Additional data:\n\n          The before-tax cost of debt is estimated to be 11%.\n          The market yield of preferred stock is estimated to be 12%.\n          The after-tax cost of common stock is estimated to be 16%.\n\n    What is Kielly’s weighted average cost of capital?",
    "choices": [
      "12.22%.",
      "13.00%.",
      "13.54%.",
      "14.00%."
    ],
    "answerIndex": 0,
    "explanation": "Kielly’s cost of capital is 12.22% as shown below.\n\n         Debt            30% x [11% (1 - .4)]           1.98%\n           Preferred stock           24% x 12%           2.88%\n          Equity                46% x 16%           7.36%\n                                                    12.22%",
    "layoutCheckRecommended": true
  },
  {
    "id": "IMA2024-P2-B-024",
    "section": "B",
    "questionNumber": 24,
    "pdfPage": 237,
    "cso": "2B2C",
    "los": "2B2r",
    "question": "Following is an excerpt from Albion Corporation’s balance sheet.\n\n                 Long-term debt (9% interest rate)                 $30,000,000\n                    Preferred stock (100,000 shares, 12% dividend)      10,000,000\n             Common stock (5,000,000 shares outstanding)       60,000,000\n\n     Albion’s bonds are currently trading at $1,083.34, reflecting a yield to maturity of 8%. The\n      preferred stock is trading at $125 per share. Common stock is selling at $16 per share, and Albion’s\n      treasurer estimates that the company’s cost of equity is 17%.  If Albion’s effective income tax rate is\n    40%, what is the company’s cost of capital?",
    "choices": [
      "12.6%.",
      "13.1%.",
      "13.9%.",
      "14.1%."
    ],
    "answerIndex": 1,
    "explanation": "Albion’s cost of capital is 13.1% as calculated below.\n\n       Capital                     Market     Proportion of  Market Return    Weighted\n                                 Value       Total                          Cost\n                                      (‘000)      Financing\n      Long-term debt (30,000 bonds  $32,500   26%            [.08 x (1 - .4)] =  1.25%\n     x $1,083.34)                                             .048\n       Preferred stock (100,000        12,500   10%           1,200(dividend)/  0.96%\n      shares x $125)                                         12,500 (market\n                                                                  value) = .096\n    Common stock (5,000,000       80,000   64%           .17            10.88%\n      shares x $16)\n                                  125,000   100%                       13.09%",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-025",
    "section": "B",
    "questionNumber": 25,
    "pdfPage": 238,
    "cso": "2B2C",
    "los": "2B2r",
    "question": "Thomas Company’s capital structure consists of 30% long-term debt, 25% preferred stock, and 45%\n    common equity. The cost of capital for each component is shown below.\n\n                 Long-term debt           8%\n                    Preferred stock            11%\n             Common equity           15%\n\n       If Thomas pays taxes at the rate of 40%, what is the company’s after-tax weighted average cost of\n      capital?",
    "choices": [
      "7.14%.",
      "9.84%.",
      "10.94%.",
      "11.90%."
    ],
    "answerIndex": 2,
    "explanation": "Thomas’ cost of capital is 10.95% as shown below.\n\n         Long-term debt        [.08 x (1 - .4)] x .30           1.44%\n           Preferred stock                  .11 x .25           2.75%\n       Common stock                  .15 x .45           6.75%\n                                                    10.94%",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-026",
    "section": "B",
    "questionNumber": 26,
    "pdfPage": 238,
    "cso": "2B2C",
    "los": "2B2r",
    "question": "Joint Products Inc., a corporation with a 40% marginal tax rate, plans to issue $1,000,000 of 8%\n      preferred stock in exchange for $1,000,000 of its 8% bonds currently outstanding. The company’s\n      total liabilities and equity are equal to $10,000,000. The effect of this exchange on the company’s\n     weighted average cost of capital is likely to be",
    "choices": [
      "no change, since it involves equal amounts of capital in the exchange and both instruments have\n         the same rate.",
      "a decrease, since a portion of the debt payments are tax deductible.",
      "a decrease, since preferred stock payments do not need to be made each year, whereas debt\n        payments must be made.",
      "an increase, since a portion of the debt payments are tax deductible."
    ],
    "answerIndex": 3,
    "explanation": "If Joint Products exchanges debt for equity, the company’s cost of capital is likely to\n     increase as the cost equity is greater than the cost of debt due to the tax deductibility of interest expense.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-027",
    "section": "B",
    "questionNumber": 27,
    "pdfPage": 238,
    "cso": "2B2C",
    "los": "2B2r",
    "question": "Cox Company has sold 1,000 shares of $100 par, 8% preferred stock at an issue price of $92 per\n      share. Stock issue costs were $5 per share. Cox pays taxes at the rate of 40%. What is Cox’s cost\n     of preferred stock capital?",
    "choices": [
      "8.00%.",
      "8.25%.",
      "8.70%.",
      "9.20%."
    ],
    "answerIndex": 3,
    "explanation": "Cox’s cost of preferred stock capital is 9.20% as shown below.\n\n          Cost of preferred stock     =    Stated annual dividend ÷ (Market price – cost of issue)\n                              =   $8 ÷ ($92 - $5)\n                              =   9.20%",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-028",
    "section": "B",
    "questionNumber": 28,
    "pdfPage": 239,
    "cso": "2B2C",
    "los": "2B2r",
    "question": "In calculating the component costs of long-term funds, the appropriate cost of retained earnings,\n     ignoring flotation costs, is equal to",
    "choices": [
      "the cost of common stock.",
      "the same as the cost of preferred stock.",
      "the weighted average cost of capital for the company.",
      "zero, or no cost."
    ],
    "answerIndex": 0,
    "explanation": "Since common stock equity is the sum total of common stock at par, additional paid-in\n      capital, and retained earnings, the appropriate cost retained earnings is the cost of common stock.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-029",
    "section": "B",
    "questionNumber": 29,
    "pdfPage": 239,
    "cso": "2B2C",
    "los": "2B2r",
    "question": "The Hatch Sausage Company is projecting an annual growth rate for the foreseeable future of 9%.\n    The most recent dividend paid was $3.00 per share. New common stock can be issued at $36 per\n      share. Using the constant growth model, what is the approximate cost of capital for retained\n     earnings?",
    "choices": [
      "9.08%.",
      "17.33%.",
      "18.08%",
      "19.88%."
    ],
    "answerIndex": 2,
    "explanation": "The cost of capital for Hatch’s retained earnings is equal to the required rate of\n      return on the company’s common stock or 18.08% as calculated below using the constant growth\n     model.\n\n     Required rate of return =  (Dividend next period ÷ Value) + Growth rate\n                     =  [($3 x 1.09) ÷ $36] + .09\n                     =  .0908 + .09\n                     =  18.08%",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-030",
    "section": "B",
    "questionNumber": 30,
    "pdfPage": 239,
    "cso": "2B2C",
    "los": "2B2r",
    "question": "The management of Old Fenske Company (OFC) has been reviewing the company’s financing\n     arrangements. The current financing mix is $750,000 of common stock, $200,000 of preferred stock\n     ($50 par) and $300,000 of debt. OFC currently pays a common stock cash dividend of $2. The\n    common stock sells for $38, and dividends have been growing at about 10% per year. Debt\n      currently provides a yield to maturity to the investor of 12%, and preferred stock pays a dividend of\n   9% to yield 11%. Any new issue of securities will have a flotation cost of approximately 3%. OFC\n     has retained earnings available for the equity requirement. The company’s effective income tax rate\n       is 40%. Based on this information, the cost of capital for retained earnings is",
    "choices": [
      "9.5%.",
      "14.2%.",
      "15.8%.",
      "16.0%."
    ],
    "answerIndex": 2,
    "explanation": "The cost of capital for OFC’s retained earnings is equal to the required rate of\n      return on the company’s common stock or 15.8% as shown below.\n\n     Required rate of return =  (Dividend next period ÷ Value) + Growth rate\n                     =  [($2 x 1.10) ÷ $38] + .10\n                     =  15.8%",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-031",
    "section": "B",
    "questionNumber": 31,
    "pdfPage": 240,
    "cso": "2B2C",
    "los": "2B2r",
    "question": "Angela Company’s capital structure consists entirely of long-term debt and common equity. The\n      cost of capital for each component is shown below.\n\n                 Long-term debt       8%\n             Common equity       15%\n\n     Angela pays taxes at a rate of 40%.  If Angela’s weighted average cost of capital is 10.41%, what\n     proportion of the company’s capital structure is in the form of long-term debt?",
    "choices": [
      "34%.",
      "45%.",
      "55%.",
      "66%."
    ],
    "answerIndex": 1,
    "explanation": "Angela’s long-term debt is 45% of its capital structure as shown below.\n\n          Cost of debt             .08 x (1 - .4)  =  .048\n      WACC           .15X + .048 (1-X)  =  .1041\n                                  .102X   =  .0561\n           Preferred equity           X   =  .55\n         Debt                      1 – X   =  .45",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-032",
    "section": "B",
    "questionNumber": 32,
    "pdfPage": 240,
    "cso": "2B2C",
    "los": "2B2r",
    "question": "The capital structure of an airline company is comprised of 50% common stock, 30% preferred\n      stock, and 20% debt. The company’s cost of common stock is 12%, and the cost of preferred stock is\n    10%. The company’s pretax cost of debt is 5%. The company has an effective income tax rate of\n    30%. What is the company’s weighted average cost of capital?",
    "choices": [
      "8.8%.",
      "9.7%.",
      "10.0%.",
      "18.9%."
    ],
    "answerIndex": 1,
    "explanation": "(0.5*12%)+(0.3*10%)+(0.2*(5%*(1-30%))=9.7%.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-033",
    "section": "B",
    "questionNumber": 33,
    "pdfPage": 240,
    "cso": "2B2D",
    "los": "2B2d",
    "question": "Four zero-coupon bonds each will pay $1,000 at maturity. The bonds mature in either 10 years or 20\n      years, and have a price today of either $300 or $500. The bond with the largest yield to maturity is\n      the bond that has the",
    "choices": [
      "$300 price and matures in 10 years.",
      "$500 price and matures in 10 years.",
      "$300 price and matures in 20 years.",
      "$500 price and matures in 20 years."
    ],
    "answerIndex": 0,
    "explanation": "Bond value = $1,000/(1 + YTM)maturity\n   YTM is larger the smaller is bond value (other things equal) and the smaller the maturity (other\n      things equal), so no calculation is needed to answer this. This implies (a) $300 and 10 years is\n      correct. If one were to back out (solve for YTM) using a little algebra the YTM for each the result is\n     approximately\n     a .1279\n     b .0718\n     c .062\n     d .0352",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-034",
    "section": "B",
    "questionNumber": 34,
    "pdfPage": 240,
    "cso": "2B3C",
    "los": "2B3c",
    "question": "Which one of the following entities is most likely to assist investors in assessing the default risk of a\n      specific corporate bond?",
    "choices": [
      "Bond dealers.",
      "Investment banks.",
      "Credit rating agencies.",
      "Brokerage firms."
    ],
    "answerIndex": 2,
    "explanation": "Calculation or explanation of options: Market participants gauge the default risk of\n     a bond issue by looking at the credit ratings assigned to the issue by credit rating agencies.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-035",
    "section": "B",
    "questionNumber": 35,
    "pdfPage": 241,
    "cso": "2B3E",
    "los": "2B3i",
    "question": "The residual theory of dividends argues that dividends",
    "choices": [
      "are necessary to maintain the market price of the common stock.",
      "are irrelevant.",
      "can be foregone unless there is an excess demand for cash dividends.",
      "can be paid if there is income remaining after funding all attractive investment opportunities."
    ],
    "answerIndex": 3,
    "explanation": "The residual theory of dividends treats dividends as strictly a financing decision with\n      the payment of cash dividends determined solely by the availability of acceptable investment proposals.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-036",
    "section": "B",
    "questionNumber": 36,
    "pdfPage": 241,
    "cso": "2B3E",
    "los": "2B3j",
    "question": "Mason Inc. is considering four alternative opportunities. Required investment outlays and expected\n      rates of return for these investments are given below.\n\n                    Project       Investment Cost        IRR\n            A            $200,000               12.5\n             B            $350,000               14.2\n             C            $570,000               16.5\n            D            $390,000               10.6\n\n    The investments will be financed through 40% debt and 60% common equity. Internally generated\n     funds totaling $1,000,000 are available for reinvestment.  If the cost of capital is 11%, and Mason\n      strictly follows the residual dividend policy, how much in dividends would the company likely pay?",
    "choices": [
      "$120,000.",
      "$328,000.",
      "$430,000.",
      "$650,000."
    ],
    "answerIndex": 1,
    "explanation": "Mason should invest in all projects that have an IRR greater than the cost of capital. In\n      this case, that means A + B + C = $200k + $350k + $570k = $1,120,000. This will be financed 40% debt\n     and 60% equity, or $1,120,000 x 60% = $672,000 equity. Since the $1 million is available internally,\n     $1,000,000 – $672,000 = $328,000 will not be need for projects, $328,000 can be paid as dividends under\n      the residual dividend policy.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-037",
    "section": "B",
    "questionNumber": 37,
    "pdfPage": 241,
    "cso": "2B3E",
    "los": "2B3j",
    "question": "When determining the amount of dividends to be declared, the most important factor to consider is\n      the",
    "choices": [
      "expectations of the shareholders.",
      "future planned uses of retained earnings.",
      "impact of inflation on replacement costs.",
      "future planned uses of cash."
    ],
    "answerIndex": 3,
    "explanation": "The liquidity of a company is a prime consideration in dividend decisions because\n     dividends represent a cash outflow. A growing company may be profitable but not liquid or a company\n    may wish a liquidity cushion to provide flexibility.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-038",
    "section": "B",
    "questionNumber": 38,
    "pdfPage": 241,
    "cso": "2B4A",
    "los": "2B4b",
    "question": "Which one of the following combined transactions would cause net working capital to decrease?",
    "choices": [
      "A $1 million decrease in cash, and a $1 million increase in inventory.",
      "A $1 million decrease in cash, and a $1 million decrease in accounts payable.",
      "A $1 million decrease in cash, and a $1 million increase in fixed assets.",
      "A $1 million increase in cash, and a $1 million increase in long-term debt."
    ],
    "answerIndex": 2,
    "explanation": "NWC = CA - CL\n     Current assets decrease and current liabilities don’t change (fixed assets not a current asset) so NWC\n      decreases.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-039",
    "section": "B",
    "questionNumber": 39,
    "pdfPage": 242,
    "cso": "2B4A",
    "los": "2B4z",
    "question": "As a company becomes more conservative about its working capital management policy, it would\n    most likely tend to have a(n)",
    "choices": [
      "decrease in the quick ratio.",
      "decrease in the operating cycle.",
      "increase in the ratio of current assets to noncurrent assets.",
      "increase in the ratio of current liabilities to noncurrent liabilities."
    ],
    "answerIndex": 2,
    "explanation": "Working capital is deemed to be more conservative as an increase in current assets funded by long-\n     term financing. An increase in the ratio of current assets to noncurrent assets would be an indicative\n     of an increasingly conservative working capital policy.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-040",
    "section": "B",
    "questionNumber": 40,
    "pdfPage": 242,
    "cso": "2B4B",
    "los": "2B4e",
    "question": "A company uses the following model to determine the optimal average cash balance (Q).\n\n                             2 x annual cash disbursement\n                              x cost per sale of T-Bill\n           Q =\n                                                  interest rate\n\n    An increase in which one of the following would result in a decrease in the optimal cash balance?",
    "choices": [
      "Uncertainty of cash outflows.",
      "Cost of a security trade.",
      "Return on marketable securities.",
      "Cash requirements for the year."
    ],
    "answerIndex": 2,
    "explanation": "An increase in the return on marketable securities would cause a decrease in the\n     optimal cash balance. The higher the denominator value, the lower the resulting solution.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-041",
    "section": "B",
    "questionNumber": 41,
    "pdfPage": 242,
    "cso": "2B4B",
    "los": "2B4e",
    "question": "All of the following are reasons for holding cash except for the",
    "choices": [
      "precautionary motive.",
      "transactions motive.",
      "motive to make a profit.",
      "motive to meet future needs."
    ],
    "answerIndex": 2,
    "explanation": "The reasons for holding cash do not include the motive to make a profit while the\n     other three options are appropriate reasons for holding cash.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-042",
    "section": "B",
    "questionNumber": 42,
    "pdfPage": 242,
    "cso": "2B4B",
    "los": "2B4g",
    "question": "All of the following can be utilized by a company in managing its cash outflows except",
    "choices": [
      "zero-balance accounts.",
      "centralization of payables.",
      "controlled disbursement accounts.",
      "lock-box system."
    ],
    "answerIndex": 3,
    "explanation": "A lock-box system is used for managing cash inflows rather than cash outflows.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-043",
    "section": "B",
    "questionNumber": 43,
    "pdfPage": 243,
    "cso": "2B4B",
    "los": "2B4h",
    "question": "Powell Industries deals with customers throughout the country and is attempting to more efficiently\n      collect its accounts receivable. A major bank has offered to develop and operate a lock-box system\n      for Powell at a cost of $90,000 per year. Powell averages 300 receipts per day at an average of\n     $2,500 each. Its short-term interest cost is 8% per year. Using a 360-day year, what reduction in\n     average collection time would be needed in order to justify the lock-box system?",
    "choices": [
      "0.67 days.",
      "1.20 days.",
      "1.25 days.",
      "1.50 days."
    ],
    "answerIndex": 3,
    "explanation": "Powell would need to reduce its average collection time by 1.5 days in order to\n      justify the use of the lockbox as shown below.\n\n     Daily collections:        300 x $2,500    = $750,000\n     Daily interest:            $750,000 x .08   = $60,000\n     Reduction in days:        $90,000 ÷ $60,000 = 1.5 days",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-044",
    "section": "B",
    "questionNumber": 44,
    "pdfPage": 243,
    "cso": "2B4B",
    "los": "2B4h",
    "question": "Mandel Inc. has a zero-balance account with a commercial bank. The bank sweeps any excess cash\n      into a commercial investment account earning interest at the rate of 4% per year, payable monthly.\n    When Mandel has a cash deficit, a line of credit is used which has an interest rate of 8% per year,\n     payable monthly based on the amount used. Mandel expects to have a $2 million cash balance on\n     January 1 of next year. Net cash flows for the first half of the year, excluding the effects of interest\n     received or paid, are forecasted (in millions of dollars) as follows.\n\n                                       Jan   Feb   Mar   Apr  May   Jun\n                 Net cash inflows ($)  +2    +1     -5     -3     -2    +6\n\n    Assuming all cash-flows occur at the end of each month, approximately how much interest will\n    Mandel incur for this period?",
    "choices": [
      "$17,000 net interest paid.",
      "$53,000 net interest paid.",
      "$76,000 net interest paid.",
      "$195,000 net interest paid."
    ],
    "answerIndex": 0,
    "explanation": "Opening balance:   $2,000,000\n          January        2,000,000   =    $2,000,000 x .04 / 12 =   + 6,667\n          February     +2,000,000   =    $4,000,000 x .04 / 12 =   +13,333\n         March       +1,000,000   =    $5,000,000 x .04 / 12 =   +16,667\n           April         -5,000,000   =   0\n       May          -3,000,000   =    $3,000,000 x .08 / 12 =     - 20,000\n          June          -2,000,000   =    $5,000,000 x .08 / 12 =     - 33,333\n                                                 =    -16,667",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-045",
    "section": "B",
    "questionNumber": 45,
    "pdfPage": 243,
    "cso": "2B4B",
    "los": "2B4h",
    "question": "Dexter Products receives $25,000 worth of merchandise from its major supplier on the 15th and 30th\n     of each month. The goods are sold on terms of 1/15, net 45, and Dexter has been paying on the net\n     due date and foregoing the discount. A local bank offered Dexter a loan at an interest rate of 10%.\n    What will be the net annual savings to Dexter if it borrows from the bank and utilizes the funds to\n     take advantage of the trade discount?",
    "choices": [
      "$525.",
      "$1,050.",
      "$1,575.",
      "$2,250."
    ],
    "answerIndex": 1,
    "explanation": "Savings from trade discount = 1% x $25,000 x 24 = $6,000\n      Interest to bank = 10% x $24,750 / 12 x 24 = $4,950\n     Net savings = $6,000 – $4,950 = $1,050",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-046",
    "section": "B",
    "questionNumber": 46,
    "pdfPage": 244,
    "cso": "2B4B",
    "los": "2B4g",
    "question": "The Rolling Stone Corporation, an entertainment ticketing service, is considering the following\n    means of speeding cash flow for the corporation.\n\n     Lock Box System. This would cost $25 per month for each of its 170 banks and would result\n            in interest savings of $5,240 per month.\n      Drafts. Drafts would be used to pay for ticket refunds based on 4,000 refunds per month at a\n           cost of $2.00 per draft, which would result in interest savings of $6,500 per month.\n     Bank Float. Bank float would be used for the $1,000,000 in checks written each month. The\n         bank would charge a 2% fee for this service, but the corporation will earn $22,000 in interest\n         on the float.\n      Electronic Transfer. Items over $25,000 would be electronically transferred; it is estimated\n            that 700 items of this type would be made each month at a cost of $18 each, which would\n            result in increased interest earnings of $14,000 per month.\n\n    Which of these methods of speeding cash flow should Rolling Stone Corporation adopt?",
    "choices": [
      "Lock box and electronic transfer only.",
      "Bank float and electronic transfer only.",
      "Lock box, drafts, and electronic transfer only.",
      "Lock box, bank float, and electronic transfer only."
    ],
    "answerIndex": 3,
    "explanation": "Rolling Stone should use of the methods presented except the use of drafts as shown\n     below.\n\n    Lockbox cost:     $25 x 170         =  $4,250\n          Savings      $5,240 - $4,250     =  $990\n     Drafts cost:        4,000 x $2        =  $8,000\n          Loss         $6,500 - $8,000     =  $(1,500)\n    Bank Float:        $1,000,000 x .02    =  $20,000\n          Savings      $22,000 - $20,000   =  $2,000\n     Electronic Trans.   700 x $18         =  $12,600\n          Savings      $14,000 - $12,600   =  $1,400",
    "layoutCheckRecommended": true
  },
  {
    "id": "IMA2024-P2-B-047",
    "section": "B",
    "questionNumber": 47,
    "pdfPage": 244,
    "cso": "2B4B",
    "los": "2B4g",
    "question": "JKL Industries requires its branch offices to transfer cash balances once per week to the\n      central corporate account. A wire transfer costs $12 and assures the cash is available the\n    same day. A depository transfer check (DTC) costs $1.50 and generally results in funds\n     being available in 2 days. JKL’s cost of short-term funds averages 9%, and they use a 360-\n     day year in all calculations. What is the minimum transfer amount that would justify the cost\n     of a wire transfer as opposed to a DTC?",
    "choices": [
      "$21,000.",
      "$24,000.",
      "$27,000.",
      "$42,000."
    ],
    "answerIndex": 0,
    "explanation": "In order to justify the cost of a wire transfer, the transfer amount should be at least\n     $21,000 as shown below.\n\n     Transfer amount        .09A x (2 ÷ 360)   =  $10.50\n                                  .09A    =  $1,890\n                         A    =  $21,000",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-048",
    "section": "B",
    "questionNumber": 48,
    "pdfPage": 244,
    "cso": "2B4B",
    "los": "2B4l",
    "question": "The establishment and maintenance of a zero-balance account (ZBA) typically reduces all of the\n     following except",
    "choices": [
      "the cost of cash management.",
      "the disbursement float.",
      "excess bank balances.",
      "management time."
    ],
    "answerIndex": 1,
    "explanation": "The use of a zero-balance account can reduce all of the options presented except the\n     disbursement float. Disbursement float refers to the period between the payment of an invoice and the\n      clearing of the payment through the company’s bank. This time period is unaffected by the use of a zero-\n     balance account.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-049",
    "section": "B",
    "questionNumber": 49,
    "pdfPage": 245,
    "cso": "2B4B",
    "los": "2B4h",
    "question": "The cash manager for a large kitchen appliance retailer has been approached by a bank\n      representative offering to set up a lock-box collection system. Analysis of the company’s receipts\n    shows that, on average, the system will reduce collection time by two days. The company receives\n     approximately 2,500 checks per day with an average value of $600 per check. The bank would\n     charge $0.28 per check for operating the system. The company currently invests short-term funds at\n     an average rate of 7%. How much would the company gain or lose annually by entering the lock-box\n     agreement?",
    "choices": [
      "($150,000).",
      "($45,000).",
      "$45,000.",
      "$210,000."
    ],
    "answerIndex": 1,
    "explanation": "7% x 2 days x 2,500 checks per day x $600 per check - $0.28 per check x 2,500 checks\n     x 365 = $210,000 - $255,500 = ($45,000)",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-050",
    "section": "B",
    "questionNumber": 50,
    "pdfPage": 245,
    "cso": "2B4C",
    "los": "2B4o",
    "question": "Which one of the following instruments would be least appropriate for a corporate treasurer to\n      utilize for temporary investment of cash?",
    "choices": [
      "U.S. Treasury bills.",
      "Money market mutual funds.",
      "Commercial paper.",
      "Municipal bonds."
    ],
    "answerIndex": 3,
    "explanation": "Typically, municipal bonds are tailored for the long-term investor while T-bills, money\n     market funds, and commercial paper are primarily used for short-term investing.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-051",
    "section": "B",
    "questionNumber": 51,
    "pdfPage": 245,
    "cso": "2B4C",
    "los": "2B4n",
    "question": "Which one of the following statements best characterizes U.S. Treasury bills?",
    "choices": [
      "They have no coupon rate, no interest rate risk, and are issued at par.",
      "They have an active secondary market, one to twenty-four month maturities, and monthly\n          interest payments.",
      "They have an active secondary market, the interest received is exempt from federal income tax,\n        and there is no interest rate risk.",
      "They have no coupon rate, no default risk, and interest received is subject to federal income tax."
    ],
    "answerIndex": 3,
    "explanation": "Treasury bills are direct obligations of the U.S. government (no default risk), sold at\n     discount (carry no coupon rate), and are redeemed at full face value at maturity. The interest income on\n     these securities is taxed at the federal level but is exempt from state and local taxes.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-052",
    "section": "B",
    "questionNumber": 52,
    "pdfPage": 245,
    "cso": "2B4C",
    "los": "2B4r",
    "question": "The Duoplan Company is determining the most appropriate source of short-term funding. Trade\n      credit terms from suppliers are 2/30, net 90. The rate for borrowing at the bank is 12%. The\n    company has also been approached by an investment banker offering to issue Duoplan’s commercial\n     paper. The commercial paper would be issued quarterly in increments of $9.1 million with net\n     proceeds of $8.8 million. Which option should the company select?",
    "choices": [
      "The trade discount, because it provides the lowest cost of funds.",
      "Bank borrowing, because it provides the lowest cost of funds.",
      "Commercial paper, because it provides the lowest cost of funds.",
      "The costs are so similar that the decision is a matter of convenience."
    ],
    "answerIndex": 1,
    "explanation": "At 12%, the bank borrowing represents the lowest cost of funds as shown below.\n\n     Trade discount:     (.02 ÷ .98) x (360 ÷ 60)  =  12.24%\n     Commercial paper: $9.1 - $8.8           =  $.3\n                           ($.3 ÷ $9.1) x 4        =  13.2%",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-053",
    "section": "B",
    "questionNumber": 53,
    "pdfPage": 246,
    "cso": "2B4D",
    "los": "2B4r",
    "question": "A company offers all customers trade credit terms of 2/15, net 60. Currently, 30% of sales receipts\n      are paid with the discount applied. If the company were to change its credit terms, a change to which\n     one of the following terms is most likely to cause the company’s average collection period to\n     decrease?",
    "choices": [
      "1/15, net 90.",
      "1/15, net 60.",
      "2/15, net 30.",
      "1/15, net 30."
    ],
    "answerIndex": 2,
    "explanation": "Average collection period is currently 0.3 x 15 + 0.7 x 60 = 46.5 days. (.3 pay with discount, so 0.7\n     no discount)\n       If net 30 would expect all to pay on day 30 so ACP decreases",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-054",
    "section": "B",
    "questionNumber": 54,
    "pdfPage": 246,
    "cso": "2B4D",
    "los": "2B4q",
    "question": "Clauson Inc. grants credit terms of 1/15, net 30 and projects gross sales for the year of $2,000,000.\n    The credit manager estimates that 40% of customers pay on the 15th day, 40% of the 30th day and\n    20% on the 45th day. Assuming uniform sales and a 360-day year, what is the projected amount of\n     overdue receivables?",
    "choices": [
      "$50,000.",
      "$83,333.",
      "$116,676.",
      "$400,000."
    ],
    "answerIndex": 0,
    "explanation": "$2,000,000 x 20% = $400,000 unpaid on day 45\n                     $400,000/360 days = 1,111.11 unpaid per day\n                     $1,111.11 x 45 days = $50,000.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-055",
    "section": "B",
    "questionNumber": 55,
    "pdfPage": 246,
    "cso": "2B4D",
    "los": "2B4t",
    "question": "Northville Products is changing its credit terms from net 30 to 2/10, net 30. The least likely effect of\n      this change would be a(n)",
    "choices": [
      "increase in sales.",
      "shortening of the cash conversion cycle.",
      "increase in short-term borrowings.",
      "lower number of days sales outstanding."
    ],
    "answerIndex": 2,
    "explanation": "Because Northville’s change in credit terms will most likely shorten the cash\n     conversion cycle, it is least likely that the company will need to increase short-term borrowing.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-056",
    "section": "B",
    "questionNumber": 56,
    "pdfPage": 247,
    "cso": "2B4D",
    "los": "2B4r",
    "question": "A credit manager considering whether to grant trade credit to a new customer is most likely to place\n     primary emphasis on",
    "choices": [
      "profitability ratios.",
      "valuation ratios.",
      "growth ratios.",
      "liquidity ratios."
    ],
    "answerIndex": 3,
    "explanation": "A credit manager would be most interested in liquidity ratios as these measure a\n     company’s ability to convert assets to cash and thereby pay financial obligations.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-057",
    "section": "B",
    "questionNumber": 57,
    "pdfPage": 247,
    "cso": "2B4D",
    "los": "2B4t",
    "question": "Consider the following factors affecting a company as it is reviewing its trade credit policy.\n\n               i.   Operating at full capacity.\n              ii.  Low cost of borrowing.\n             iii.   Opportunity for repeat sales.\n          iv.  Low gross margin per unit.\n\n    Which of the above factors would indicate that the company should liberalize its credit policy?",
    "choices": [
      "I and II only.",
      "I, II and III only.",
      "II and III only.",
      "III and IV only."
    ],
    "answerIndex": 2,
    "explanation": "A company should consider liberalizing its credit policy if it has a low cost of\n     borrowing and the opportunity for repeat sales. Steady customers would be attracted by a liberal credit\n     policy and if the company needs to borrow funds because of slower than expected payments, the cost\n    would not be too high. Factors I and IV have no relationship to credit policy.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-058",
    "section": "B",
    "questionNumber": 58,
    "pdfPage": 247,
    "cso": "2B4D",
    "los": "2B4t",
    "question": "Global Manufacturing Company has a cost of borrowing of 12%. One of the company’s suppliers\n     has just offered new terms for purchases. The old terms were cash on delivery and the new terms are\n      2/10, net 45. Should Global pay within the first ten days?",
    "choices": [
      "Yes, the cost of not taking the trade discount exceeds the cost of borrowing.",
      "No, the cost of trade credit exceeds the cost of borrowing.",
      "No, the use of debt should be avoided if possible.",
      "The answer depends on whether the company borrows money."
    ],
    "answerIndex": 0,
    "explanation": "The cost of not taking the trade discount (20.98%) is greater than the 12% cost of\n     borrowing so Global should pay within the first 10 days.\n\n     Trade discount = (.02 ÷ .98) x (360 ÷ 35) = 20.98%",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-059",
    "section": "B",
    "questionNumber": 59,
    "pdfPage": 247,
    "cso": "2B4D",
    "los": "2B4r",
    "question": "Locar Corporation had net credit sales last year of $18,600,000 (of which 20% were installment\n      sales).  It also had an average accounts receivable balance of $1,380,000. Credit terms are 2/10, net\n     30. Based on a 360-day year, Locar’s average collection period last year was",
    "choices": [
      "26.2 days.",
      "26.7 days.",
      "27.3 days.",
      "33.4 days."
    ],
    "answerIndex": 1,
    "explanation": "Locar’s average collection period was 26.7 days as shown below.\n\n     Average collection period  =  (Receivables x Annual days) ÷ Credit sales\n                        =  ($1,380,000 x 360) ÷ $18,600,000\n                        =  26.7 days",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-060",
    "section": "B",
    "questionNumber": 60,
    "pdfPage": 248,
    "cso": "2B4E",
    "los": "2B4y",
    "question": "The basic Economic Order Quantity (EOQ) model includes which of the following assumptions?\n\n             I.   The same fixed quantity is ordered at each reorder point.\n            II.   Purchasing costs are unaffected by the quantity ordered.\n          III.   Purchase order lead-time is known with certainty.\n       IV.   Adequate inventory is always maintained to avoid stockouts.",
    "choices": [
      "I and IV only.",
      "II and III only.",
      "I, II, and IV only.",
      "I, II, III, and IV."
    ],
    "answerIndex": 3,
    "explanation": "Choice d is correct because the Economic Order Quantity (EOC) model assumes that\n      the factors are known and relatively stable.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-061",
    "section": "B",
    "questionNumber": 61,
    "pdfPage": 248,
    "cso": "2B4E",
    "los": "2B4g",
    "question": "Atlantic Distributors is expanding and wants to increase its level of inventory to support an\n     aggressive sales target. They would like to finance this expansion using debt. Atlantic currently has\n     loan covenants that require the working capital ratio to be at least 1.2. The average cost of the\n      current liabilities is 12% and the cost of the long-term debt is 8%. Below is the current balance sheet\n      for Atlantic.\n\n                   Current assets    $200,000     Current liabilities      $165,000\n                  Fixed assets       100,000     Long-term debt         100,000\n                    Total assets      $300,000     Equity                  35,000\n                                                    Total debt & equity    $300,000\n\n    Which one of the following alternatives will provide the resources to expand the inventory while\n     lowering the total cost of debt and satisfying the loan covenant?",
    "choices": [
      "Increase both accounts payable and inventory by $25,000.",
      "Sell fixed assets with a book value of $20,000 for $25,000 and use the proceeds to increase\n         inventory.",
      "Borrow short-term funds of $25,000, and purchase inventory of $25,000.",
      "Collect $25,000 accounts receivable; use $10,000 to purchase inventory and use the balance to\n        reduce short-term debt."
    ],
    "answerIndex": 3,
    "explanation": "Atlantic should collect $25,000 of receivables, purchase $10,000 of inventory and\n     reduce current liabilities by $15,000. This is the only option that reduces short-term debt and thus lowers\n      the cost of debt while satisfying the loan covenant.",
    "layoutCheckRecommended": true
  },
  {
    "id": "IMA2024-P2-B-062",
    "section": "B",
    "questionNumber": 62,
    "pdfPage": 248,
    "cso": "2B4E",
    "los": "2B4v",
    "question": "All of the following are carrying costs of inventory except",
    "choices": [
      "storage costs.",
      "insurance.",
      "shipping costs.",
      "opportunity costs."
    ],
    "answerIndex": 2,
    "explanation": "Storage costs, insurance, and opportunity cost of funds invested in inventory are all\n      costs of carrying inventory while shipping costs are related to sales of inventory.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-063",
    "section": "B",
    "questionNumber": 63,
    "pdfPage": 249,
    "cso": "2B4E",
    "los": "2B4v",
    "question": "Valley Inc. uses 400 lbs. of a rare isotope per year. The isotope costs $500 per lb., but the supplier is\n      offering a quantity discount of 2% for order sizes between 30 and 79 lbs. and a 6% discount for\n     order sizes of 80 lbs. or more. The ordering costs are $200. Carrying costs are $100 per lb. of\n     material and are not affected by the discounts. If the purchasing manager places eight orders of 50\n      lbs. each, the total cost of ordering and carrying inventory, including discounts lost, will be",
    "choices": [
      "$1,600.",
      "$4,100.",
      "$6,600.",
      "$12,100."
    ],
    "answerIndex": 3,
    "explanation": "The total cost that Valley will incur is $12,100 as shown below.\n\n          Ordering cost                  8 x $200                $ 1,600\n          Carrying average inventory       (50 ÷ 2) x $100               2,500\n          Lost discounts                  (400 x $500) x .04            8,000\n                                                                  $12,100",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-064",
    "section": "B",
    "questionNumber": 64,
    "pdfPage": 249,
    "cso": "2B4E",
    "los": "2B4v",
    "question": "A review of the inventories of Cedar Grove Company shows the following costs data for\n     entertainment centers.\n\n                   Invoice price                       $400.00 per unit\n                    Freight and insurance on shipment       20.00 per unit\n                   Insurance on inventory                 15.00 per unit\n                  Unloading                           140.00 per order\n                  Cost of placing orders                  10.00 per order\n                  Cost of capital                 25%\n\n    What are the total carrying costs of inventory for an entertainment center?",
    "choices": [
      "$105.",
      "$115.",
      "$120.",
      "$420."
    ],
    "answerIndex": 2,
    "explanation": "The carrying cost per unit is $120 as shown below.\n\n          Carrying cost      =     ($400 + $20) x 25% + $15\n                        =     $120",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-065",
    "section": "B",
    "questionNumber": 65,
    "pdfPage": 249,
    "cso": "2B4E",
    "los": "2B4v",
    "question": "Paint Corporation expects to use 48,000 gallons of paint per year costing $12 per gallon. Inventory\n     carrying cost is equal to 20% of the purchase price. The company uses its inventory at a constant\n      rate. The lead time for placing the order is three days, and Paint Corporation holds 2,400 gallons of\n      paint as safety stock.  If the company orders 2,000 gallons of paint per order, what is the cost of\n     carrying inventory?",
    "choices": [
      "$2,400.",
      "$5,280.",
      "$5,760.",
      "$8,160."
    ],
    "answerIndex": 3,
    "explanation": "The carrying cost of inventory is $8,160 as shown below.\n\n          Carrying cost      =      [2,400 + (2,000 ÷ 2)] x ($12 x .20)\n                        =     $8,160",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-066",
    "section": "B",
    "questionNumber": 66,
    "pdfPage": 250,
    "cso": "2B4E",
    "los": "2B4w",
    "question": "A safety stock can protect against all of the following risks, except for the possibility that",
    "choices": [
      "customers cannot find the merchandise they want, and they will go to the competition.",
      "shipments of merchandise from the manufacturers are delayed by as much as one week.",
      "the distribution of daily sales will have a large variance, due to holidays, weather, advertising, or\n        weekly shopping habits.",
      "new competition may open in the company’s market area."
    ],
    "answerIndex": 3,
    "explanation": "If new competition opens in the company’s market area, the company’s sales are likely\n      to decline and safety stock cannot protect against this event.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-067",
    "section": "B",
    "questionNumber": 67,
    "pdfPage": 250,
    "cso": "2B4E",
    "los": "2B4y",
    "question": "Carnes Industries uses the economic order quantity (EOQ) model as part of its inventory control\n     program. An increase in which one of the following variables would increase the EOQ?",
    "choices": [
      "Carrying cost rate.",
      "Purchase price per unit.",
      "Ordering costs.",
      "Safety stock level."
    ],
    "answerIndex": 2,
    "explanation": "If ordering costs increase, the EOQ model would increase the order quantity.  If the\n     carrying cost increased, the EOQ model would decrease the order quantity. Purchase price and safety\n     stock do not affect the EOQ model.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-068",
    "section": "B",
    "questionNumber": 68,
    "pdfPage": 250,
    "cso": "2B4E",
    "los": "2B4y",
    "question": "Which one of the following is not explicitly considered in the standard calculation of economic\n     order quantity (EOQ)?",
    "choices": [
      "Level of sales.",
      "Fixed ordering costs.",
      "Carrying costs.",
      "Quantity discounts."
    ],
    "answerIndex": 3,
    "explanation": "Quantity discounts are not explicitly considered in the EOQ model as purchase price\n     does not affect the model.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-069",
    "section": "B",
    "questionNumber": 69,
    "pdfPage": 250,
    "cso": "2B4E",
    "los": "2B4y",
    "question": "Which one of the following statements concerning the economic order quantity (EOQ) is correct?",
    "choices": [
      "The EOQ results in the minimum ordering cost and minimum carrying cost.",
      "Increasing the EOQ is the best way to avoid stockouts.",
      "The EOQ model assumes constantly increasing usage over the year.",
      "The EOQ model assumes that order delivery times are consistent."
    ],
    "answerIndex": 3,
    "explanation": "The EOQ model assumes that order delivery times are consistent and that lead times do\n     not vary. The other statements about EOQ are false.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-070",
    "section": "B",
    "questionNumber": 70,
    "pdfPage": 251,
    "cso": "2B4E",
    "los": "2B4y",
    "question": "Moss Products uses the economic order quantity (EOQ) model as part of its inventory management\n      process. A decrease in which one of the following variables would increase the EOQ?",
    "choices": [
      "Annual sales.",
      "Cost per order.",
      "Safety stock level.",
      "Carrying costs."
    ],
    "answerIndex": 3,
    "explanation": "A decrease in carrying costs would result in an increase in the EOQ as it would be less\n      costly to store units. A decrease in sales or ordering costs would decrease EOQ while the EOQ is\n     unaffected by safety stock.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-071",
    "section": "B",
    "questionNumber": 71,
    "pdfPage": 251,
    "cso": "2B4F",
    "los": "2B4f",
    "question": "f\n     Burke Industries has a revolving credit arrangement with its bank which specifies that Burke can\n     borrow up to $5 million at an annual interest rate of 9% payable monthly. In addition, Burke must\n     pay a commitment fee of 0.25% per month on the unused portion of the line, payable monthly.\n     Burke expects to have a $2 million cash balance and no borrowings against this line of credit on\n     April 1, net cash inflows of $2 million in April, net outflows of $7 million in May, and net inflows\n     of $4 million in June.  If all cash flows occur at the end of the month, approximately how much will\n     Burke pay to the bank during the second quarter related to this revolving credit arrangement?",
    "choices": [
      "$47,700.",
      "$52,500.",
      "$60,200.",
      "$62,500."
    ],
    "answerIndex": 1,
    "explanation": "Burke will pay the bank $52,500 as shown below.\n\n                                4/1            4/30           5/31         6/30\n          Balance          $2 mil.        $4 mil.         ($3 mil.)     $4 mil.\n\n         2 months. unused credit line 2 x ($5,000,000 x .0025)            $25,000\n         1 month. $3 mil. borrowed   $3,000,000 x (.09 ÷ 12)              22,500\n         1 month. $2 mil. unused     $2,000,000 x .0025                   5,000\n                                                                     $52,500",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-072",
    "section": "B",
    "questionNumber": 72,
    "pdfPage": 251,
    "cso": "2B4F",
    "los": "2B4z",
    "question": "Of the following, the working capital financing policy that would subject a company to the greatest\n      level of risk is the one where the company finances",
    "choices": [
      "fluctuating current assets with short-term debt.",
      "permanent current assets with long-term debt.",
      "fluctuating current assets with long-term debt.",
      "permanent current assets with short-term debt."
    ],
    "answerIndex": 3,
    "explanation": "Ideally, permanent assets are financed with long-term debt of matching maturities. The\n      greater the portion of assets financed by short-term debt, the greater the risk that the company will not be\n     able to meet these obligations.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-073",
    "section": "B",
    "questionNumber": 73,
    "pdfPage": 252,
    "cso": "2B4F",
    "los": "2B4b",
    "question": "b\n    The Texas Corporation is considering the following opportunities to purchase an investment at the\n     following amounts and discounts.\n\n                Term            Amount           Discount\n                 90 days          $ 80,000          5%\n                180 days            75,000          6%\n                270 days           100,000          5%\n                360 days            60,000          10%\n\n    Which opportunity offers the Texas Corporation the highest annual yield?",
    "choices": [
      "90-day investment.",
      "180-day investment.",
      "270-day investment.",
      "360-day investment."
    ],
    "answerIndex": 0,
    "explanation": "Texas Corporation should purchase the 90-day investment as it has the highest annual\n      yield as shown below.\n\n     90-day: $80,000 x .95 = $76,000; ($80,000 - $76,000) ÷ $76,000 = .05 x 4 =   20%\n     180-day: $75,000 x .94 = $70,500; ($75,000 - $70,500) ÷ $70,500 = .06 x 2 =   12%\n     270-day: $100,000 x .95= $95,000; $5,000 ÷ $95,000 = (.05 ÷ 3) x 4      =    7%\n     360-day: $60,000 x .90 = $54,000; $6,000 ÷ $54,000 = .11 x 1          =   11%",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-074",
    "section": "B",
    "questionNumber": 74,
    "pdfPage": 252,
    "cso": "2B4F",
    "los": "2B4a",
    "question": "a\n   A manufacturer with seasonal sales would be most likely to obtain which one of the following types\n     of loans from a commercial bank to finance the need for a fixed amount of additional capital during\n      the busy season?",
    "choices": [
      "Transaction loan.",
      "Insurance company term loan.",
      "Installment loan.",
      "Unsecured short-term loan."
    ],
    "answerIndex": 3,
    "explanation": "The company should seek an unsecured short-term loan to finance additional capital\n     needs during the busy season. A transaction loan is generally for one specific purpose like completing a\n      specific contract while term and installment loans are generally one year or greater.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-075",
    "section": "B",
    "questionNumber": 75,
    "pdfPage": 252,
    "cso": "2B4F",
    "los": "2B4a",
    "question": "a\n    Which of the following financing options would a commercial bank be likely to offer to its\n     customers?\n\n                   I.    Discounted notes\n                  II.   Term loans\n                  III.   Lines of credit\n             IV.   Self-liquidating loans",
    "choices": [
      "I and II.",
      "III and IV.",
      "I, III, and IV.",
      "I, II, III, and IV."
    ],
    "answerIndex": 3,
    "explanation": "A commercial bank would likely be able to provide its customers with all of these\n     financing options.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-076",
    "section": "B",
    "questionNumber": 76,
    "pdfPage": 253,
    "cso": "2B4F",
    "los": "2B4g",
    "question": "g\n     Megatech Inc. is a large publicly-held company. The treasurer is making an analysis of the short-\n     term financing options available for the third quarter, as the company will need an average of $8\n     million for the month of July, $12 million for August, and $10 million for September. The following\n     options are available.\n\n             I.      Issue commercial paper on July 1 in an amount sufficient to net Megatech $12 million at\n              an effective rate of 7% per year. Any temporarily excess funds will be deposited in\n              Megatech’s investment account at First City Bank and earn interest at an annual rate of\n             4%.\n\n            II.     Utilize a line of credit from First City Bank with interest accruing monthly on the amount\n                  utilized at the prime rate, which is estimated to be 8% in July and August and 8.5% in\n               September.\n\n     Based on this information, which one of the following actions should the treasurer take?",
    "choices": [
      "Issue commercial paper, since it is approximately $35,000 less expensive than the line of credit.",
      "Issue commercial paper, since it is approximately $14,200 less expensive than the line of credit.",
      "Use the line of credit, since it is approximately $15,000 less expensive than issuing commercial\n         paper.",
      "Use the line of credit, since it is approximately $5,800 less expensive than issuing commercial\n         paper."
    ],
    "answerIndex": 1,
    "explanation": "Cost of commercial paper financing: $12,000,000 x 3/12 x 7% = $210,000 expense\n     July investment: $4,000,000 x 4% / 12 = $13,333 income\n    No investment in August\n     September: $2,000,000 x 4% / 12 = $6,667 income. Net cost: $210,000 - $13,333 - $6.667 = $190,000\n\n     Line of credit financing: July $8,000,000 x 8% / 12      =$ 53,333\n                      Aug 12,000,000 x 8% / 12      =  80,000\n                         Sep 10,000,000 x 8.5% / 12    =  78,833\n                                   Total                     $204,166\n\n     $204,166 - $190,000 = $14,166 advantage to commercial paper",
    "layoutCheckRecommended": true
  },
  {
    "id": "IMA2024-P2-B-077",
    "section": "B",
    "questionNumber": 77,
    "pdfPage": 253,
    "cso": "2B4F",
    "los": "2B4a",
    "question": "a\n     Dudley Products is given terms of 2/10, net 45 by its suppliers.  If Dudley forgoes the cash discount\n     and instead pays the suppliers five days after the net due date, what is the annual interest rate cost\n     (using a 360-day year)?",
    "choices": [
      "18.0%.",
      "18.4%.",
      "21.0%.",
      "24.5%."
    ],
    "answerIndex": 1,
    "explanation": "The cost of foregoing the trade discount is 18.4% as shown below.\n\n             Trade discount        =      (.02 ÷ .98) x (360 ÷ 40)\n                             =     18.4%",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-078",
    "section": "B",
    "questionNumber": 78,
    "pdfPage": 253,
    "cso": "2B4F",
    "los": "2B4b",
    "question": "b\n   A company is given payment terms of 3/10, net 90 and forgoes the discount paying on the net due\n      date. Using a 360-day year and ignoring the effects of compounding, what is the effective annual\n      interest rate cost?",
    "choices": [
      "12.0%.",
      "12.4%.",
      "13.5%.",
      "13.9%."
    ],
    "answerIndex": 3,
    "explanation": "The effective annual interest rate cost is 13.9% as shown below.\n\n           Effective interest rate      =      (.03 ÷ .97) x (360 ÷ 80)\n                             =     13.9%",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-079",
    "section": "B",
    "questionNumber": 79,
    "pdfPage": 254,
    "cso": "2B4F",
    "los": "2B4c",
    "question": "c\n    Lang National Bank offered a one-year loan to a commercial customer. The instrument is a\n     discounted note with a nominal rate of 12%. What is the effective interest rate to the borrower?",
    "choices": [
      "10.71%.",
      "12.00%.",
      "13.20%.",
      "13.64%."
    ],
    "answerIndex": 3,
    "explanation": "The effective interest rate to the borrower is 13.64% as shown below.\n\n           Effective interest rate      =      .12 ÷ (1 - .12)\n                             =     13.64%",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-080",
    "section": "B",
    "questionNumber": 80,
    "pdfPage": 254,
    "cso": "2B4F",
    "los": "2B4c",
    "question": "c\n     Gates Inc. has been offered a one-year loan by its commercial bank. The instrument is a discounted\n     note with a stated interest rate of 9%.  If Gates needs $300,000 for use in the business, what should\n      the face value of the note be?",
    "choices": [
      "$275,229.",
      "$327,000.",
      "$327,154.",
      "$329,670."
    ],
    "answerIndex": 3,
    "explanation": "The face value of the note should be $329,670 as shown below.\n\n           Effective interest rate      =      .09 ÷ .91\n                             =     .0989\n          Face value of note        =     $300,000 x 1.0989\n                             =     $329,670",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-081",
    "section": "B",
    "questionNumber": 81,
    "pdfPage": 254,
    "cso": "2B4F",
    "los": "2B4c",
    "question": "c\n     Approximately what amount of compensating balance would be required for a stated interest rate of\n    10% to equal an effective interest rate of 10.31% on a $100 million one-year loan?",
    "choices": [
      "$310,000.",
      "$3,000,000.",
      "$3,100,000.",
      "Not enough information is given."
    ],
    "answerIndex": 1,
    "explanation": "The compensating balance required is $3,000,000 as shown below.\n\n           Effective interest rate      =     ($100,000,000 x 10%) ÷ X = 10.31%\n                    X  =     $97,000,000\n         Compensating balance     =     $100,000,000 – $97,000,000\n                             =     $3,000,000",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-082",
    "section": "B",
    "questionNumber": 82,
    "pdfPage": 254,
    "cso": "2B4F",
    "los": "2B4c",
    "question": "c\n    The effective annual interest rate to the borrower of a $100,000 one-year loan with a stated rate of\n   7% and a 20% compensating balance is",
    "choices": [
      "7.0%.",
      "8.4%.",
      "8.75%.",
      "13.0%."
    ],
    "answerIndex": 2,
    "explanation": "The effective interest rate is 8.75% as shown below.\n\n           Effective interest rate      =     ($100,000 x .07) ÷ [$100,000 – ($100,000 x .20)]\n                             =     $7,000 ÷ $80,000\n                             =     8.75%",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-083",
    "section": "B",
    "questionNumber": 83,
    "pdfPage": 255,
    "cso": "2B4F",
    "los": "2B4c",
    "question": "c\n    Todd Manufacturing Company needs a $100 million loan for one year. Todd’s banker has presented\n    two alternatives as follows:\n\n     Option #1 - Loan with a stated interest rate of 10.25%. No compensating balance required.\n\n     Option #2 - Loan with a stated interest rate of 10.00%. Non-interest-bearing compensating balance\n      required.\n\n    Which of the following compensating balances, withheld from the loan proceeds, would result in\n     Option #2 having an effective interest rate equal to the 10.25% rate of Option #1?",
    "choices": [
      "$250,000.",
      "$2,440,000.",
      "$2,500,000.",
      "$10,250,000."
    ],
    "answerIndex": 1,
    "explanation": "The compensating balance required is $2,440,000 as shown below.\n\n           Effective interest rate      =     ($100,000,000 x .10) ÷ X = 10.25\n                    X  =     $97,560,000\n         Compensating balance     =     $100,000,000 – $97,560,000\n                             =     $2,440,000",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-084",
    "section": "B",
    "questionNumber": 84,
    "pdfPage": 255,
    "cso": "2B4F",
    "los": "2B4c",
    "question": "Frame Industries has arranged a revolving line of credit for the upcoming year with a commercial\n     bank. The arrangement is for $20 million, with interest payable monthly on the amount utilized at\n      the bank’s prime rate and an annual commitment fee of one-half of 1%, computed and payable\n     monthly on the unused portion of the line. Frame estimates that the prime rate for the upcoming\n     year will be 8%, and expects the following average amount to be borrowed by quarter.\n\n                   Quarter    Amount Borrowed\n                      First          $10,000,000\n                 Second        20,000,000\n                   Third          20,000,000\n                   Fourth          5,000,000\n\n   How much will Frame pay to the bank next year in interest and fees?",
    "choices": [
      "$1,118,750.",
      "$1,131,250.",
      "$1,168,750.",
      "$1,200,000."
    ],
    "answerIndex": 1,
    "explanation": "Frame will pay $1,131,250 as shown below.\n\n      Interest =    ($10,000,000 x .02) + ($20,000,000 x .04) + ($5,000,000 x .02)\n           =    $1,100,000\n     Fees   =    [$10,000,000 x (.005 ÷ 12 x 3)] + [$15,000,000 x (.005 ÷ 12 x 3)]\n           =    $31,250\n     Total   =    $1,100,000 + $31,250\n           =    $1,131,250",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-085",
    "section": "B",
    "questionNumber": 85,
    "pdfPage": 255,
    "cso": "2B4F",
    "los": "2B4c",
    "question": "c\n    What is the effective annual interest rate for a one-year $100 million loan with a stated interest rate\n     of 8.00%, if the lending bank requires a non-interest-bearing compensating balance in the amount of\n    $5 million?",
    "choices": [
      "7.62%",
      "8.00%",
      "8.42%",
      "13.00%"
    ],
    "answerIndex": 2,
    "explanation": "The effective interest rate is 8.42% as shown below.\n\n      Effective interest rate   =    ($100,000,000 x .08) ÷ ($100,000,000 - $5,000,000)\n                       =    $8,000 ÷ $95,000,000\n                       =   8.42%",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-086",
    "section": "B",
    "questionNumber": 86,
    "pdfPage": 256,
    "cso": "2B4G",
    "los": "2B4c",
    "question": "c\n   A company has received a one-year commercial bank loan of 7.5% discounted interest with a 12.5%\n     compensating balance. The effective annual cost of the bank loan is closest to",
    "choices": [
      "8.11%.",
      "8.57%.",
      "9.27%.",
      "9.38%."
    ],
    "answerIndex": 3,
    "explanation": "In determining the effective cost of a bank loan with compensating balance and\n     discounted interest rate, net interest cost and net proceeds should be computed. Net interest cost is\n      the interest cost after any interest gained on compensating balance. Since the problem is silent on the\n      interest income on compensating balance, the interest cost on the loan is only considered. This is\n    7.5% of the loan. The net proceeds is the net amount that the borrower gets when the loan is entered\n      into. This is the loan amount less any discounted interest and less any compensating balance. This is\n     computed as loan x (100% less 7.5% discounted interest and less 20% compensating balance). The\n     percentages are applied to the gross amount of the loan.\n\n     Option d is correct. Assume that the loan is $100.\n     Gross Loan                     $ 100\n     Discounted interest              7.5%\n     Compensating balance           12.5%\n     Net interest cost                   7.50         (100 x 7.5%)\n     Net proceeds                      80.00        (100 – (100x 7.5%) – (100 x 12.5%))\n      Effective interest rate            9.38%         (7.5/ 80)",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-087",
    "section": "B",
    "questionNumber": 87,
    "pdfPage": 256,
    "cso": "2B4G",
    "los": "2B4j",
    "question": "Topka Inc. needs to borrow $500,000 to meet its working capital requirements for next year. The\n     Merchant Bank has offered the company a 9.5% simple interest loan that has a 16% compensating\n     balance requirement. Determine the effective interest rate for the loan.",
    "choices": [
      "11.02%",
      "11.31%",
      "12.75%",
      "19.00%"
    ],
    "answerIndex": 1,
    "explanation": "Effective interest rate = interest / (1 – compensating balance rate)\n                    = .095 / (1 - .16) = .1130952\n                    = 11.31%",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-088",
    "section": "B",
    "questionNumber": 88,
    "pdfPage": 256,
    "cso": "2B4G",
    "los": "2B4e",
    "question": "e\n     Buying a wheat futures contract to protect against price fluctuation of wheat would be classified as a",
    "choices": [
      "fair value hedge.",
      "cash flow hedge.",
      "foreign currency hedge.",
      "swap."
    ],
    "answerIndex": 1,
    "explanation": "A futures contract provides for delivery of a commodity at a specified price on a\n      stipulated future date.  If the price of wheat is expected to rise, the contract protects future cash flow.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-089",
    "section": "B",
    "questionNumber": 89,
    "pdfPage": 256,
    "cso": "2B5B",
    "los": "2B5c",
    "question": "A corporation would receive cash if it enters into a(n)",
    "choices": [
      "equity carve-out divestiture.",
      "reverse stock split program.",
      "spin-off divestiture.",
      "stock repurchase program."
    ],
    "answerIndex": 0,
    "explanation": "With an equity carve-out the divested business unit is sold in a public offering and\n      therefore the corporation receives cash.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-090",
    "section": "B",
    "questionNumber": 90,
    "pdfPage": 257,
    "cso": "2B6A",
    "los": "2B6b",
    "question": "Under a floating exchange rate system, which one of the following should result in a depreciation of\n      the Swiss franc?",
    "choices": [
      "U.S. inflation declines relative to the Swiss inflation.",
      "U.S. income levels improve relative to the Swiss.",
      "Swiss interest rate rises relative to the U.S. rates.",
      "Decrease in outflows of Swiss capital to the U.S."
    ],
    "answerIndex": 0,
    "explanation": "If the U.S. inflation rate declines relative to the Swiss inflation rate, the U.S. dollar will\n     purchase a greater number of Swiss francs resulting in the depreciation of the Swiss franc.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-091",
    "section": "B",
    "questionNumber": 91,
    "pdfPage": 257,
    "cso": "2B6A",
    "los": "2B6b",
    "question": "If the U.S. dollar appreciated against the British pound, other things being equal, we would expect\n      that",
    "choices": [
      "British demand for U.S. products would increase.",
      "U.S. demand for British products would decrease.",
      "U.S. demand for British products would increase.",
      "trade between the U.S. and Britain would decrease."
    ],
    "answerIndex": 2,
    "explanation": "If the U.S. dollar appreciates against the British pound, it will take fewer dollars to\n     purchase British goods thus increasing the demand for these products.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-092",
    "section": "B",
    "questionNumber": 92,
    "pdfPage": 257,
    "cso": "2B6A",
    "los": "2B6b",
    "question": "Country A’s currency would tend to appreciate relative to Country B’s currency when",
    "choices": [
      "Country A has a higher rate of inflation than Country B.",
      "Country B has real interest rates that are greater than real interest rates in Country A.",
      "Country A has a slower rate of growth in income that causes its imports to lag behind its exports.",
      "Country B switches to a more restrictive monetary policy."
    ],
    "answerIndex": 2,
    "explanation": "If Country A has more exports than imports, its demand for foreign currency will\n     diminish resulting in the appreciation of Country A’s currency.",
    "layoutCheckRecommended": false
  },
  {
    "id": "IMA2024-P2-B-093",
    "section": "B",
    "questionNumber": 93,
    "pdfPage": 257,
    "cso": "2B6B",
    "los": "2B6d",
    "question": "A publicly traded company based in Japan is planning on expanding its operations into Germany.\n    The expansion is estimated to cost Ұ500 million, but the company needs euros to implement the\n     expansion. The company is not well known in Germany and therefore hesitant to issue a euro-\n     denominated bond in the German marketplace. If the company were to issue a yen-denominated 20-\n     year bond in Japan, which one of the following contracts should the company use?",
    "choices": [
      "Currency forward.",
      "Currency swap.",
      "Currency futures.",
      "Currency options."
    ],
    "answerIndex": 1,
    "explanation": "By entering into a currency swap the company is able to manage exchange rate\n      risk via borrowing in a country that it is well known, Japan, and then engaging in a currency swap\n     with most likely a familiar bank and therefore, effectively, borrowing the foreign currency indirectly\n      that is needed for the company's expansion plans in Germany.",
    "layoutCheckRecommended": false
  }
];
