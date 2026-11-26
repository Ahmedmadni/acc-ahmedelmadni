import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { splitCmaText } from "../../src/lib/cma-text-layout.shared.ts";

test("explicit numeric tables retain every row and column in source order", () => {
  const text = "بيانات الإنتاج:\nالبند | أ | ب\nالوحدات | 100 | 200\nالسعر | $5 | $6\nما الناتج؟";
  assert.deepEqual(splitCmaText(text,true), [
    {kind:"text",text:"بيانات الإنتاج:"},
    {kind:"table",rows:[["البند","أ","ب"],["الوحدات","100","200"],["السعر","$5","$6"]]},
    {kind:"text",text:"ما الناتج؟"},
  ]);
});
test("ambiguous, inconsistent and held content remains verbatim", () => {
  for (const text of [
    "أ | ب\n1 | 2 | 3",
    "أ | ب",
    "بيانات (سنة | شهر)\nالقيمة: 100 | 20؛ نص آخر: 40",
    "أ | ب\nج | د",
    "أ | 100\nب | ",
  ]) assert.deepEqual(splitCmaText(text,true),[{kind:"text",text}]);
  const held = "أ | 100\nب | 200";
  assert.deepEqual(splitCmaText(held,false),[{kind:"text",text:held}]);
});
test("study and exam render explicit tables only for unheld Arabic drafts", () => {
  for (const path of ["src/routes/library.cma.tsx","src/components/tools/ExamPrep.tsx"]) {
    const source = readFileSync(new URL("../../"+path,import.meta.url),"utf8");
    assert.match(source,/CmaReadableText/);
    assert.match(source,/allowTables=\{q\.sourceArabicStatus === "draft" && view\.direction === "rtl" && !q\.sourceLayoutReview\}/);
  }
  const component = readFileSync(new URL("../../src/components/library/CmaReadableText.tsx",import.meta.url),"utf8");
  assert.match(component,/overflow-x-auto/);
  assert.match(component,/<bdi/);
  assert.match(component,/tabIndex=\{0\}/);
});
