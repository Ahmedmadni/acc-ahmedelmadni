import type { ExamQuestion } from "@/lib/exam-bank";

/** Reorder both languages identically, preserving the correct answer. */
export function reorderIfrsChoices<T extends ExamQuestion>(question: T, seed: number): T {
  const count = question.choices.en.length;
  if (count < 2 || count !== question.choices.ar.length) return question;

  const order = Array.from({ length: count }, (_, index) => index);
  let state = 2166136261;
  for (const character of `${question.id}:${seed}`) {
    state = Math.imul(state ^ character.charCodeAt(0), 16777619) >>> 0;
  }
  for (let index = count - 1; index > 0; index -= 1) {
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    const swapIndex = (state >>> 0) % (index + 1);
    [order[index], order[swapIndex]] = [order[swapIndex]!, order[index]!];
  }

  return {
    ...question,
    choices: {
      ar: order.map((index) => question.choices.ar[index]!),
      en: order.map((index) => question.choices.en[index]!),
    },
    answerIndex: order.indexOf(question.answerIndex),
  };
}
