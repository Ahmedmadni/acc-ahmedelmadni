/** Index immutable study-bank records once while retaining their source order. */
export function indexCmaQuestionsByTopic<T extends { topicId: string }>(questions: readonly T[]): Map<string, T[]> {
  const index = new Map<string, T[]>();
  for (const question of questions) {
    const existing = index.get(question.topicId);
    if (existing) existing.push(question);
    else index.set(question.topicId, [question]);
  }
  return index;
}
