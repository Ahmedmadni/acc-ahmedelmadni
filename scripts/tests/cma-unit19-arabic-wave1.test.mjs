import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { cmaNumericTokens, validateCmaTranslation } from "../../src/lib/cma-translation.shared.ts";
const read=path=>readFileSync(new URL("../../"+path,import.meta.url),"utf8");
const rows=JSON.parse(read("src/data/cma-gleim-2025-vol2-unit-19.json"));
const q=n=>rows.find(r=>r.section===1&&r.number===n);
function fingerprint(s){let h=2166136261;for(let i=0;i<s.length;i++)h=Math.imul(h^s.charCodeAt(i),16777619);return(h>>>0).toString(16).padStart(8,"0");}
const wave1=new Map([[1,[1209,2,"ed4cdf15"]],[2,[1210,0,"d1146126"]],[4,[1212,2,"4947374b"]],[5,[1212,1,"859c5a4c"]],[8,[1215,1,"3d7620bb"]],[10,[1216,0,"a737e7d4"]],[11,[1217,2,"ecdcc9cb"]],[12,[1218,1,"500d5135"]]]);
test("Unit 19 Wave 1: eight Arabic accounting systems drafts and source locks",()=>{
 assert.deepEqual(rows.filter(r=>r.section===1&&r.number<=12&&r.stemAr).map(r=>r.number),[...wave1.keys()]);
 for(const [n,[page,index,hash]] of wave1){const r=q(n);assert.equal(r.page,page);assert.equal(r.answerIndex,index);assert.equal(r.answerStatus,"source");assert.equal(r.sourceTextStatus,undefined);assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},{question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));}
 for(const [n,expected] of [[1,"great uncertainty"],[2,"Fields"],[4,"subsystem within a MIS"],[5,"Transaction processing system"],[8,"decision-making support"],[10,"business needs"],[11,"uncertainty is great"],[12,"collection of related files"]])assert.ok(q(n).choices[q(n).answerIndex].replace(/\s+/g," ").includes(expected),String(n));
 const adapter=read("src/data/cma-questions-gleim-2025-vol2.ts");for(const [n,page,index] of [[3,1211,1],[6,1213,3],[7,1214,3],[9,1215,3]]){const held=q(n);assert.equal(held.page,page);assert.equal(held.answerIndex,index);assert.equal(held.stemAr,undefined);assert.equal(held.choicesAr,undefined);assert.equal(held.explanationAr,undefined);assert.ok(adapter.includes('"19.1.'+n+'"'));}
 assert.equal(rows.length,110);assert.ok(q(5).explanationAr.includes("تخطيط موارد المنشأة"));assert.ok(q(12).explanationAr.includes("تكرارًا مقصودًا"));
});
