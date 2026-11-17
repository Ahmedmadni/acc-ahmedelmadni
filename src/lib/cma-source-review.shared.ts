/**
 * Keep questions whose imported PDF layout is unresolved out of scored quizzes.
 * They remain readable for source comparison when explicitly opted into practice.
 * No database, server or translation API is used.
 */
export function splitCmaQuizSourceReview<T extends { sourceLayoutReview?: boolean }>(
  questions: readonly T[],
  includeSourceReview: boolean,
): { eligible: T[]; excluded: T[] } {
  const excluded = questions.filter((question) => question.sourceLayoutReview === true);
  return {
    eligible: includeSourceReview
      ? [...questions]
      : questions.filter((question) => question.sourceLayoutReview !== true),
    excluded: includeSourceReview ? [] : excluded,
  };
}

/** Visually flagged source questions are practice-only until the source PDF is checked. */
export function isCmaScorableQuestion(question: { sourceLayoutReview?: boolean }): boolean {
  return question.sourceLayoutReview !== true;
}
