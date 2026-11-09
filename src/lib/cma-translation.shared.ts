/** Presentation-only translation. The canonical English answer key is never translated. */
export interface CmaTranslation {
  question: string;
  choices: string[];
  explanation: string;
  sourceHash: string;
  status: "machine" | "reviewed";
}

export interface CmaSourceText {
  question: { en: string };
  choices: { en: string[] };
  explanation: { en: string };
}

/** Stable source fingerprint; invalidates cached translations after editorial changes. */
export function cmaSourceHash(source: CmaSourceText): string {
  const text = JSON.stringify([
    source.question.en,
    source.choices.en,
    source.explanation.en,
  ]);
  let hash = 2166136261;
  for (let i = 0; i < text.length; i++) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return `v1-${text.length}-${(hash >>> 0).toString(16).padStart(8, "0")}`;
}

/** Exactly preserve the source's ASCII numbers, decimal points and percent signs. */
export function cmaNumericTokens(text: string): string[] {
  return text.match(/\d+(?:,\d{3})*(?:\.\d+)?(?:%|‰)?/g) ?? [];
}

export function validateCmaTranslation(
  source: CmaSourceText,
  candidate: unknown,
): { valid: true; data: Pick<CmaTranslation, "question" | "choices" | "explanation"> }
 | { valid: false; reason: string } {
  if (!candidate || typeof candidate !== "object") {
    return { valid: false, reason: "not-an-object" };
  }
  const value = candidate as Record<string, unknown>;
  if (
    typeof value.question !== "string" ||
    typeof value.explanation !== "string" ||
    !Array.isArray(value.choices) ||
    value.choices.length !== source.choices.en.length ||
    value.choices.some((choice) => typeof choice !== "string")
  ) return { valid: false, reason: "invalid-shape" };

  const data = {
    question: value.question.trim(),
    choices: (value.choices as string[]).map((choice) => choice.trim()),
    explanation: value.explanation.trim(),
  };
  if (
    !data.question || !data.explanation || data.choices.some((choice) => !choice) ||
    !/[\u0600-\u06ff]/.test(data.question) ||
    !/[\u0600-\u06ff]/.test(data.explanation)
  ) return { valid: false, reason: "untranslated-text" };
  const pairs = [
    [source.question.en, data.question],
    [source.explanation.en, data.explanation],
    ...source.choices.en.map((choice, i) => [choice, data.choices[i]]),
  ];
  for (const [english, arabic] of pairs) {
    if (
      JSON.stringify(cmaNumericTokens(english)) !==
      JSON.stringify(cmaNumericTokens(arabic))
    ) return { valid: false, reason: "numeric-mismatch" };
  }
  return { valid: true, data };
}
