/**
 * Merge hand-written Arabic translations into CMA Unit 1 source records.
 * Usage: bun scripts/merge-cma-unit1-ar.ts scripts/cma-unit1-ar/<batch>.json
 * Batch format: { "<section>.<number>": { stemAr, choicesAr[4], explanationAr } }
 * English text, answerIndex and choice order are never modified; numbers must match.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { validateCmaTranslation } from "../src/lib/cma-translation.shared.ts";

const TARGET = new URL("../src/data/cma-gleim-2025-vol1-unit-1.json", import.meta.url);
const rows = JSON.parse(readFileSync(TARGET, "utf8"));
let failed = 0, merged = 0;
for (const file of process.argv.slice(2)) {
  const batch = JSON.parse(readFileSync(file, "utf8"));
  for (const [id, t] of Object.entries<any>(batch)) {
    const [section, number] = id.split(".").map(Number);
    const q = rows.find((r: any) => r.section === section && r.number === number);
    if (!q) { console.error("missing", id); failed++; continue; }
    const check = validateCmaTranslation(
      { question: { en: q.stem }, choices: { en: q.choices }, explanation: { en: q.explanation } },
      { question: t.stemAr, choices: t.choicesAr, explanation: t.explanationAr },
    );
    if (!check.valid) {
      const pairs: [string, string, string][] = [["stem", q.stem, t.stemAr], ["exp", q.explanation, t.explanationAr], ...q.choices.map((c: string, i: number) => [`c${i}`, c, t.choicesAr?.[i]] as [string, string, string])];
      const { cmaNumericTokens } = await import("../src/lib/cma-translation.shared.ts");
      for (const [f, en, ar] of pairs) {
        const a = JSON.stringify(cmaNumericTokens(en)), b = JSON.stringify(cmaNumericTokens(ar ?? ""));
        if (a !== b) console.error(id, f, a, "!=", b);
      }
      console.error("invalid", id, check.reason); failed++; continue;
    }
    q.stemAr = check.data.question; q.choicesAr = check.data.choices; q.explanationAr = check.data.explanation;
    merged++;
  }
}
if (failed) { console.error(`${failed} failed; nothing written`); process.exit(1); }
writeFileSync(TARGET, JSON.stringify(rows, null, 2) + "\n");
const done = rows.filter((r: any) => r.stemAr && r.choicesAr && r.explanationAr).length;
console.log(`merged ${merged}; Unit 1 translated ${done}/${rows.length}`);
