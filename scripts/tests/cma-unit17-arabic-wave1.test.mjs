import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { cmaNumericTokens, validateCmaTranslation } from "../../src/lib/cma-translation.shared.ts";
const read=path=>readFileSync(new URL("../../"+path,import.meta.url),"utf8");
const rows=JSON.parse(read("src/data/cma-gleim-2025-vol2-unit-17.json"));
const q=n=>rows.find(x=>x.section===1&&x.number===n);
function fingerprint(s){
 let h=2166136261;
 for(let i=0;i<s.length;i++)h=Math.imul(h^s.charCodeAt(i),16777619);
 return(h>>>0).toString(16).padStart(8,"0");
}
const wave1=new Map([[7,[1013,0,"40a9a5c6"]],[8,[1014,0,"034a935c"]],[9,[1015,1,"fca28f42"]],[13,[1019,1,"dc356592"]],[15,[1020,1,"c340546e"]]]);
test("Unit 17 Wave 1: five complete Arabic governance drafts and immutable original keys",()=>{
 assert.equal(rows.length,93);
 assert.deepEqual([1,2].map(s=>rows.filter(r=>r.section===s).length),[28,65]);
 const localized=rows.filter(r=>r.section===1&&r.number<=15&&(r.stemAr!==undefined||r.choicesAr!==undefined||r.explanationAr!==undefined));
 assert.deepEqual(localized.map(r=>r.number),[...wave1.keys()]);
 for(const [n,[page,index,hash]] of wave1){
  const r=q(n);
  assert.equal(r.page,page);assert.equal(r.answerIndex,index);assert.equal(r.answerStatus,"source");assert.equal(r.sourceTextStatus,undefined);
  assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);
  assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},{question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));
  for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));
 }
});
test("Unit 17 Wave 1: independence, reasonable assurance and jurisdiction review gates",()=>{
 for(const [n,expected] of [[7,"close personal"],[8,"Protecting the independence"],[9,"engagement work schedule"],[13,"cost of internal control"],[15,"reasonable assurance"]])
  assert.ok(q(n).choices[q(n).answerIndex].replace(/\s+/g," ").includes(expected),String(n));
 const adapter=read("src/data/cma-questions-gleim-2025-vol2.ts");
 for(const [n,page,index] of [[1,1008,0],[2,1009,0],[3,1010,3],[4,1010,3],[5,1012,3],[6,1012,2],[10,1016,0],[11,1017,3],[12,1018,3],[14,1020,2]]){
  const held=q(n);
  assert.equal(held.page,page);assert.equal(held.answerIndex,index);
  assert.equal(held.stemAr,undefined);assert.equal(held.choicesAr,undefined);assert.equal(held.explanationAr,undefined);
  assert.ok(adapter.includes('"17.1.'+n+'"'));
 }
});
