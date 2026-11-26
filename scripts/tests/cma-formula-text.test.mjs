import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { splitCmaFormulaText } from "../../src/lib/cma-formula-text.shared.ts";

test("isolates a calculation without changing Arabic text, spaces or punctuation", () => {
  const text = "صافي الربح = ١٠٠٬٠٠٠ − ٢٥٬٠٠٠ = ٧٥٬٠٠٠. النتيجة:";
  const parts = splitCmaFormulaText(text);
  assert.equal(parts.map(p => p.text).join(""),text);
  assert.equal(parts.filter(p => p.math).length,1);
  assert.ok(parts.find(p => p.math).text.includes("١٠٠٬٠٠٠ − ٢٥٬٠٠٠ = ٧٥٬٠٠٠"));
});
test("retains parentheses, percentage and superscripts inside calculations", () => {
  const text = "القيمة (100 × 5%) ÷ 1.10² ≈ 4.13، ثم راجع الناتج";
  const parts = splitCmaFormulaText(text);
  assert.equal(parts.map(p => p.text).join(""),text);
  assert.equal(parts.find(p => p.math).text,"(100 × 5%) ÷ 1.10² ≈ 4.13");
});
test("ordinary dates, identifiers, prose and incomplete parentheses are untouched", () => {
  for (const text of ["2026-11-26", "في 26/11/2026", "القيمة 5000 ريال", "100 × (200", "", "ABC-100"]) {
    const parts = splitCmaFormulaText(text);
    assert.equal(parts.map(p => p.text).join(""),text);
    assert.ok(parts.every(p => !p.math));
  }
});
test("formula presentation is scoped to site-authored explanation steps", () => {
  for (const path of ["src/routes/library.cma.tsx","src/components/library/CmaAnswerSupport.tsx"]) {
    const source = readFileSync(new URL("../../"+path,import.meta.url),"utf8");
    assert.ok(source.includes("<CmaFormulaText text={step} />"));
  }
  const ui = readFileSync(new URL("../../src/components/library/CmaFormulaText.tsx",import.meta.url),"utf8");
  assert.ok(ui.includes('dir="ltr"'));
});
