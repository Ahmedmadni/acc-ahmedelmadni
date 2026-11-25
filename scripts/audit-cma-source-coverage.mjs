// Audits local Gleim 2025 source records; counts are not publication or visual-certification claims.
import { readFileSync } from "node:fs";
import assert from "node:assert/strict";

const baseline = [[217,202],[107,32],[125,0],[86,0],[75,0],[61,0],[131,0],[84,0],[115,0],[59,0],[58,58],[155,136],[123,121],[175,160],[264,217],[166,143],[93,71],[149,115],[110,78],[90,54]];
const nonempty = value => typeof value === "string" && value.trim().length > 0;
const summary = [];
for (let unit = 1; unit <= 20; unit++) {
  const volume = unit <= 10 ? 1 : 2;
  const rows = JSON.parse(readFileSync(new URL(`../src/data/cma-gleim-2025-vol${volume}-unit-${unit}.json`, import.meta.url), "utf8"));
  const [expected, minimumArabic] = baseline[unit - 1];
  assert.equal(rows.length, expected, `Unexpected source count in unit ${unit}`);
  const keys = new Set();
  let completeArabic = 0, inferredKeys = 0, layoutReview = 0;
  for (const row of rows) {
    const key = `${row.unit}.${row.section}.${row.number}`;
    assert.equal(row.unit, unit, key);
    assert.ok(Number.isInteger(row.section) && row.section > 0 && Number.isInteger(row.number) && row.number > 0, key);
    assert.ok(!keys.has(key), `Duplicate source ID ${key}`);
    keys.add(key);
    assert.ok(nonempty(row.stem) && nonempty(row.explanation) && row.choices?.length === 4 && row.choices.every(nonempty), `Incomplete English record ${key}`);
    assert.ok(Number.isInteger(row.answerIndex) && row.answerIndex >= 0 && row.answerIndex < 4, `Invalid answer index ${key}`);
    const present = ["stemAr","choicesAr","explanationAr"].some(k => Object.hasOwn(row,k));
    const complete = nonempty(row.stemAr) && nonempty(row.explanationAr) && Array.isArray(row.choicesAr) && row.choicesAr.length === row.choices.length && row.choicesAr.every(nonempty);
    assert.ok(!present || complete, `Partial Arabic translation ${key}`);
    if (complete) completeArabic++;
    if (row.answerStatus === "inferred") inferredKeys++;
    if (row.sourceTextStatus === "reconstructed" || row.sourceTextStatus === "table-reflowed") layoutReview++;
  }
  assert.ok(completeArabic >= minimumArabic, `Arabic coverage regression in unit ${unit}; document any intentional quarantine and update baseline`);
  summary.push({unit,volume,total:rows.length,completeArabic,englishOnly:rows.length-completeArabic,inferredKeys,layoutReview});
}
const aggregate = rows => rows.reduce((a,r)=>{for(const k of ["total","completeArabic","englishOnly","inferredKeys","layoutReview"])a[k]+=r[k];return a;},{total:0,completeArabic:0,englishOnly:0,inferredKeys:0,layoutReview:0});
const result = {units:summary,volume1:aggregate(summary.filter(r=>r.volume===1)),volume2:aggregate(summary.filter(r=>r.volume===2)),total:aggregate(summary)};
console.log(JSON.stringify(result,null,2));
