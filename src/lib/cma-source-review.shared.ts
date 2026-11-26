/**
 * Keep questions with unresolved source layout OR source-answer accuracy out of scored quizzes.
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

/** Source-review questions (layout or source-answer accuracy) remain unscored until verified. */
export function isCmaScorableQuestion(question: { sourceLayoutReview?: boolean }): boolean {
  return question.sourceLayoutReview !== true;
}

/** Keep provisional comparisons separate from learner performance totals. */
export function summarizeCmaReview<T extends { id: string; answerIndex: number; sourceLayoutReview?: boolean }>(
  questions: readonly T[],
  answers: Readonly<Record<string, number>>,
): { answered: number; correct: number; provisional: number } {
  let answered = 0, correct = 0, provisional = 0;
  for (const question of questions) {
    if (!Object.hasOwn(answers, question.id) || answers[question.id] === undefined) continue;
    if (!isCmaScorableQuestion(question)) {
      provisional++;
      continue;
    }
    answered++;
    if (answers[question.id] === question.answerIndex) correct++;
  }
  return { answered, correct, provisional };
}
