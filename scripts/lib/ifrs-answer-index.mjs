/** Resolve an imported single-answer key without guessing its numeric base. */
export function importedAnswerIndex(rawAnswer, options, numericBase) {
  if (rawAnswer == null || rawAnswer === "") return null;
  const answer = String(rawAnswer).trim();
  if (/^[A-F]$/i.test(answer)) {
    const index = answer.toUpperCase().charCodeAt(0) - 65;
    return index < options.length ? index : null;
  }
  if (/^\d+$/.test(answer)) {
    if (numericBase !== 0 && numericBase !== 1) {
      throw new Error("Numeric answer keys require --numeric-answer-base 0 or 1");
    }
    const index = Number(answer) - numericBase;
    return index >= 0 && index < options.length ? index : null;
  }
  const index = options.findIndex((option) => option.trim().toLowerCase() === answer.toLowerCase());
  return index >= 0 ? index : null;
}
