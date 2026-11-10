/** Original MCQ transcription from user-supplied ICMA CMA Exam Support Package © 2024.
 * The site owner states that they received permission for public republication.
 * This is not an independently authored question; ICMA retains the source attribution.
 */
export type IcmaPart2Domain = "A" | "B" | "C" | "D" | "E" | "F";

export type IcmaPart2RawQuestion = {
  id: string;
  section: IcmaPart2Domain;
  questionNumber: number;
  pdfPage: number;
  cso: string;
  los: string;
  question: string;
  choices: string[];
  answerIndex: number;
  explanation: string;
  /** Table-dense items from PDF text extraction need layout verification. */
  layoutCheckRecommended: boolean;
};
