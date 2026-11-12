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
  }
];
