export type CmaFormulaSegment = { text: string; math: boolean };

/** Isolate explicit numeric calculations, not prose, dates or source reconstruction. */
export function splitCmaFormulaText(text: string): CmaFormulaSegment[] {
  const segments: CmaFormulaSegment[] = [];
  // Deliberately excludes ASCII hyphens and slashes (dates, identifiers, fractions
  // with uncertain context). Leave all original characters and spacing intact.
  const pattern = /[0-9٠-٩۰-۹.,٬٫%٪×÷=≈−+()²³⁰¹⁴⁵⁶⁷⁸⁹$€£ \t]+/gu;
  const numberPattern = /[0-9٠-٩۰-۹]+(?:[.,٬٫][0-9٠-٩۰-۹]+)*/gu;
  let cursor = 0;
  for (const match of text.matchAll(pattern)) {
    const raw = match[0];
    const trimmed = raw.trim();
    // A leading or trailing full stop is prose punctuation, not a decimal.
    const expression = trimmed.replace(/^[.,]+|[.,]+$/gu, "").replace(/^[=≈]\s*/u, "");
    const numbers = expression.match(numberPattern) ?? [];
    if (numbers.length < 2 || !/[×÷=≈−+]/u.test(expression)) continue;
    if (!/^[($€£+−0-9٠-٩۰-۹]/u.test(expression) || !/[0-9٠-٩۰-۹%٪)²³⁰¹⁴⁵⁶⁷⁸⁹]$/u.test(expression)) continue;
    let depth = 0;
    let balanced = true;
    for (const char of expression) {
      if (char === "(") depth++;
      if (char === ")") depth--;
      if (depth < 0) balanced = false;
    }
    if (!balanced || depth !== 0) continue;
    const start = (match.index ?? 0) + raw.indexOf(expression);
    if (start > cursor) segments.push({ text: text.slice(cursor, start), math: false });
    segments.push({ text: expression, math: true });
    cursor = start + expression.length;
  }
  if (cursor < text.length) segments.push({ text: text.slice(cursor), math: false });
  return segments;
}
