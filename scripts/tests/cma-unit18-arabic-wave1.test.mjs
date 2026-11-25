import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { cmaNumericTokens, validateCmaTranslation } from "../../src/lib/cma-translation.shared.ts";
const read=path=>readFileSync(new URL("../../"+path,import.meta.url),"utf8");
const rows=JSON.parse(read("src/data/cma-gleim-2025-vol2-unit-18.json"));
const q=n=>rows.find(r=>r.section===1&&r.number===n);
function fingerprint(s){let h=2166136261;for(let i=0;i<s.length;i++)h=Math.imul(h^s.charCodeAt(i),16777619);return(h>>>0).toString(16).padStart(8,"0");}
const wave1=new Map([[2,[1089,0,"66182d6c"]],[3,[1090,3,"3bf15aa6"]],[4,[1091,3,"b47b8251"]],[5,[1092,2,"3b288803"]],[6,[1093,1,"435ecf23"]],[7,[1093,1,"a6edeb3d"]],[8,[1094,3,"42dd2a9c"]],[9,[1096,3,"cc2b4e72"]],[11,[1097,1,"14e57d67"]],[12,[1098,0,"371eaa78"]],[13,[1098,1,"6fac3a27"]],[14,[1099,2,"7f02a385"]]]);
test("Unit 18 Wave 1: 12 control procedure drafts and immutable source locks",()=>{
 assert.equal(rows.length,149);assert.deepEqual([1,2,3].map(s=>rows.filter(r=>r.section===s).length),[89,39,21]);
 assert.deepEqual(rows.filter(r=>r.section===1&&r.number<=14&&r.stemAr).map(r=>r.number),[...wave1.keys()]);
 for(const [n,[page,index,hash]] of wave1){const r=q(n);assert.equal(r.page,page);assert.equal(r.answerIndex,index);assert.equal(r.answerStatus,"source");assert.equal(r.sourceTextStatus,undefined);assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},{question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));}
 for(const [n,expected] of [[2,"Preventive"],[3,"not compare"],[4,"subsidiary ledger"],[5,"operational efficiency"],[6,"immediate supervisor"],[7,"prenumbered checks"],[8,"credit memo"],[9,"Perpetrate and conceal"],[11,"nature and amount"],[12,"controller"],[13,"Segregation"],[14,"treasurer personnel"]])assert.ok(q(n).choices[q(n).answerIndex].replace(/\s+/g," ").includes(expected),String(n));
 assert.ok(q(2).explanationAr.includes("وظيفة كاشفة"));assert.ok(q(7).explanationAr.includes("الالتزامات غير المسددة"));
 const adapter=read("src/data/cma-questions-gleim-2025-vol2.ts");for(const [n,page,index] of [[1,1088,0],[10,1096,3]]){const held=q(n);assert.equal(held.page,page);assert.equal(held.answerIndex,index);assert.equal(held.stemAr,undefined);assert.equal(held.choicesAr,undefined);assert.equal(held.explanationAr,undefined);assert.ok(adapter.includes('"18.1.'+n+'"'));}
});
