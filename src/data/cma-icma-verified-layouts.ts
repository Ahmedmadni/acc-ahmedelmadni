/** Provenance evidence for manual, side-by-side review of specific table-heavy
 * ICMA 2024 retired questions against the owner's 669-page original PDF.
 * PDF page numbers are 1-indexed physical pages; printed page is one less.
 * "verified" means question, choices, table alignment and source key checked.
 * It is NOT a claim of independent professional endorsement by ICMA.
 */
export interface CmaSourceLayoutAudit {
  id: string;
  pdfPage: number;
  printedPage: number;
  answerPdfPage: number;
  answerIndex: number;
  scope: string;
  method: "source-PDF-visual-question-choices-answer-key";
  auditedDate: string;
}
export const CMA_VERIFIED_ICMA_LAYOUTS: CmaSourceLayoutAudit[] = [
  {
    "id": "IMA2024-P2-A-003",
    "pdfPage": 187,
    "printedPage": 186,
    "answerPdfPage": 219,
    "answerIndex": 3,
    "scope": "Two-year financial statement rows and four options",
    "method": "source-PDF-visual-question-choices-answer-key",
    "auditedDate": "2026-11-12"
  },
  {
    "id": "IMA2024-P2-A-010",
    "pdfPage": 190,
    "printedPage": 189,
    "answerPdfPage": 220,
    "answerIndex": 3,
    "scope": "Year-end liquidity table and quick ratio",
    "method": "source-PDF-visual-question-choices-answer-key",
    "auditedDate": "2026-11-12"
  },
  {
    "id": "IMA2024-P2-B-084",
    "pdfPage": 255,
    "printedPage": 254,
    "answerPdfPage": 267,
    "answerIndex": 1,
    "scope": "Quarterly drawn balances, rate and commitment fee; stray OCR prefix removed",
    "method": "source-PDF-visual-question-choices-answer-key",
    "auditedDate": "2026-11-12"
  },
  {
    "id": "IMA2024-P2-C-080",
    "pdfPage": 306,
    "printedPage": 305,
    "answerPdfPage": 322,
    "answerIndex": 0,
    "scope": "Two products, scarce machine hours and outsourcing options",
    "method": "source-PDF-visual-question-choices-answer-key",
    "auditedDate": "2026-11-12"
  },
  {
    "id": "IMA2024-P2-E-012",
    "pdfPage": 332,
    "printedPage": 331,
    "answerPdfPage": 362,
    "answerIndex": 1,
    "scope": "Original/new asset costs, working capital and tax loss",
    "method": "source-PDF-visual-question-choices-answer-key",
    "auditedDate": "2026-11-12"
  },
  {
    "id": "IMA2024-P2-E-013",
    "pdfPage": 332,
    "printedPage": 331,
    "answerPdfPage": 362,
    "answerIndex": 2,
    "scope": "Old/new machine components and taxable disposal gain",
    "method": "source-PDF-visual-question-choices-answer-key",
    "auditedDate": "2026-11-12"
  },
  {
    "id": "IMA2024-P2-E-034",
    "pdfPage": 342,
    "printedPage": 341,
    "answerPdfPage": 366,
    "answerIndex": 0,
    "scope": "Years 0–5 cash flow table and terminal disposal tax",
    "method": "source-PDF-visual-question-choices-answer-key",
    "auditedDate": "2026-11-12"
  },
  {
    "id": "IMA2024-P2-E-071",
    "pdfPage": 360,
    "printedPage": 359,
    "answerPdfPage": 371,
    "answerIndex": 3,
    "scope": "Year-specific cash inflows/outflows and payback",
    "method": "source-PDF-visual-question-choices-answer-key",
    "auditedDate": "2026-11-12"
  },
  {
    "id": "IMA2024-P2-A-007",
    "pdfPage": 189,
    "printedPage": 188,
    "answerPdfPage": 219,
    "answerIndex": 0,
    "scope": "Working capital: current-asset and liability detail",
    "method": "source-PDF-visual-question-choices-answer-key",
    "auditedDate": "2026-11-15"
  },
  {
    "id": "IMA2024-P2-A-030",
    "pdfPage": 197,
    "printedPage": 196,
    "answerPdfPage": 221,
    "answerIndex": 2,
    "scope": "Four-column borrower financial ratios and credit-risk selection",
    "method": "source-PDF-visual-question-choices-answer-key",
    "auditedDate": "2026-11-15"
  },
  {
    "id": "IMA2024-P2-A-032",
    "pdfPage": 198,
    "printedPage": 197,
    "answerPdfPage": 222,
    "answerIndex": 2,
    "scope": "Two-company leverage, coverage and liquidity comparisons",
    "method": "source-PDF-visual-question-choices-answer-key",
    "auditedDate": "2026-11-15"
  },
  {
    "id": "IMA2024-P2-A-036",
    "pdfPage": 200,
    "printedPage": 199,
    "answerPdfPage": 223,
    "answerIndex": 2,
    "scope": "Beginning/ending receivables and days-sales-outstanding calculation",
    "method": "source-PDF-visual-question-choices-answer-key",
    "auditedDate": "2026-11-15"
  },
  {
    "id": "IMA2024-P2-B-023",
    "pdfPage": 237,
    "printedPage": 236,
    "answerPdfPage": 260,
    "answerIndex": 0,
    "scope": "Three-source capital structure and after-tax cost of capital",
    "method": "source-PDF-visual-question-choices-answer-key",
    "auditedDate": "2026-11-15"
  },
  {
    "id": "IMA2024-P2-B-046",
    "pdfPage": 244,
    "printedPage": 243,
    "answerPdfPage": 263,
    "answerIndex": 3,
    "scope": "Four cash-management alternatives and monthly net savings",
    "method": "source-PDF-visual-question-choices-answer-key",
    "auditedDate": "2026-11-15"
  },
  {
    "id": "IMA2024-P2-B-061",
    "pdfPage": 248,
    "printedPage": 247,
    "answerPdfPage": 264,
    "answerIndex": 3,
    "scope": "Balance-sheet columns, loan covenant and working-capital decisions",
    "method": "source-PDF-visual-question-choices-answer-key",
    "auditedDate": "2026-11-15"
  },
  {
    "id": "IMA2024-P2-B-076",
    "pdfPage": 253,
    "printedPage": 252,
    "answerPdfPage": 266,
    "answerIndex": 1,
    "scope": "Commercial-paper versus line-of-credit monthly cash flows; OCR prefix corrected",
    "method": "source-PDF-visual-question-choices-answer-key",
    "auditedDate": "2026-11-15"
  },
  {
    "id": "IMA2024-P2-C-006",
    "pdfPage": 271,
    "printedPage": 270,
    "answerPdfPage": 312,
    "answerIndex": 2,
    "scope": "Three musical attendance weights, ticket pricing, variable/fixed costs",
    "method": "source-PDF-visual-question-choices-answer-key",
    "auditedDate": "2026-11-15"
  },
  {
    "id": "IMA2024-P2-C-010",
    "pdfPage": 273,
    "printedPage": 272,
    "answerPdfPage": 313,
    "answerIndex": 1,
    "scope": "Book production cost allocation and operating margin target",
    "method": "source-PDF-visual-question-choices-answer-key",
    "auditedDate": "2026-11-15"
  },
  {
    "id": "IMA2024-P2-E-014",
    "pdfPage": 333,
    "printedPage": 332,
    "answerPdfPage": 363,
    "answerIndex": 2,
    "scope": "Capital project year-five operating and terminal after-tax flows",
    "method": "source-PDF-visual-question-choices-answer-key",
    "auditedDate": "2026-11-15"
  },
  {
    "id": "IMA2024-P2-E-056",
    "pdfPage": 353,
    "printedPage": 352,
    "answerPdfPage": 370,
    "answerIndex": 2,
    "scope": "Two-project NPV profiles and linearly interpolated internal rates",
    "method": "source-PDF-visual-question-choices-answer-key",
    "auditedDate": "2026-11-15"
  }
];
