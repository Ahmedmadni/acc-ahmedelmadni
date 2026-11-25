import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { cmaNumericTokens, validateCmaTranslation } from "../../src/lib/cma-translation.shared.ts";
const read=path=>readFileSync(new URL("../../"+path,import.meta.url),"utf8");
const rows=JSON.parse(read("src/data/cma-gleim-2025-vol2-unit-20.json"));
const q=n=>rows.find(r=>r.section===1&&r.number===n);
function fingerprint(s){let h=2166136261;for(let i=0;i<s.length;i++)h=Math.imul(h^s.charCodeAt(i),16777619);return(h>>>0).toString(16).padStart(8,"0");}
const wave1=new Map([[2,[1295,1,"4c78e33a"]],[4,[1297,3,"602358dd"]],[5,[1298,0,"16f33fec"]],[6,[1299,1,"b37e2267"]],[7,[1299,1,"c627dda8"]],[8,[1300,3,"05fbc618"]],[9,[1301,2,"9f62bb2c"]],[10,[1302,3,"597f76ee"]],[11,[1303,3,"ae7b43a5"]],[12,[1304,3,"b666b184"]]]);
test("Unit 20 Wave 1: ten finance transformation drafts and source locks",()=>{
 assert.deepEqual(rows.filter(r=>r.section===1&&r.number<=13&&r.stemAr).map(r=>r.number),[...wave1.keys()]);
 for(const [n,[page,index,hash]] of wave1){const r=q(n);assert.equal(r.page,page);assert.equal(r.answerIndex,index);assert.equal(r.answerStatus,"source");assert.equal(r.sourceTextStatus,undefined);assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},{question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));}
 for(const [n,expected] of [[2,"Systems analysis"],[4,"I, II, III, and IV"],[5,"Preparing the project proposal"],[6,"Documentation standards"],[7,"cloud computing"],[8,"Technology and related costs"],[9,"Systems maintenance"],[10,"Pilot conversion"],[11,"Development"],[12,"Unstructured"]])assert.ok(q(n).choices[q(n).answerIndex].replace(/\s+/g," ").includes(expected),String(n));
 const adapter=read("src/data/cma-questions-gleim-2025-vol2.ts");for(const [n,page,index] of [[1,1294,3],[3,1296,1],[13,1304,1]]){const held=q(n);assert.equal(held.page,page);assert.equal(held.answerIndex,index);assert.equal(held.stemAr,undefined);assert.equal(held.choicesAr,undefined);assert.equal(held.explanationAr,undefined);assert.ok(adapter.includes('"20.1.'+n+'"'));}
 assert.equal(rows.length,90);assert.ok(q(7).explanationAr.includes("ليس شرطًا"));assert.ok(q(10).explanationAr.includes("Pilot"));assert.ok(q(12).explanationAr.includes("التطوير التكراري"));
});

const wave2=new Map([[14,[1305,3,"78e627fe"]],[15,[1306,3,"bab45a78"]],[17,[1307,3,"1ffa3eb5"]],[20,[1310,0,"68bfb4fd"]],[21,[1311,3,"ea619478"]],[22,[1311,1,"63a77016"]],[24,[1313,2,"1f48836a"]],[26,[1315,0,"cd41bb56"]],[28,[1316,2,"20a61190"]],[29,[1317,3,"cd5210ee"]]]);
test("Unit 20 Wave 2: ten Arabic implementation and cloud drafts; section coverage",()=>{
 assert.deepEqual(rows.filter(r=>r.section===1&&r.number>=14&&r.stemAr).map(r=>r.number),[...wave2.keys()]);
 for(const [n,[page,index,hash]] of wave2){const r=q(n);assert.equal(r.page,page);assert.equal(r.answerIndex,index);assert.equal(r.answerStatus,"source");assert.equal(r.sourceTextStatus,undefined);assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},{question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));}
 for(const [n,expected] of [[14,"Implementation phase"],[15,"Systems design"],[17,"Enhanced management"],[20,"ready for release"],[21,"Cost-benefit analysis"],[22,"Prototyping"],[24,"One function at a time"],[26,"Design an optimal process"],[28,"lower upfront costs"],[29,"remote third-party"]])assert.ok(q(n).choices[q(n).answerIndex].replace(/\s+/g," ").includes(expected),String(n));
 const adapter=read("src/data/cma-questions-gleim-2025-vol2.ts");for(const [n,page,index] of [[16,1306,3],[18,1308,1],[19,1309,2],[23,1312,1],[25,1314,3],[27,1316,0],[30,1318,1],[31,1319,3]]){const held=q(n);assert.equal(held.page,page);assert.equal(held.answerIndex,index);assert.equal(held.stemAr,undefined);assert.equal(held.choicesAr,undefined);assert.equal(held.explanationAr,undefined);assert.ok(adapter.includes('"20.1.'+n+'"'));}
 assert.deepEqual(rows.filter(r=>r.section===1&&!r.stemAr).map(r=>r.number),[1,3,13,16,18,19,23,25,27,30,31]);assert.equal(rows.filter(r=>r.section===1&&r.stemAr).length,20);assert.ok(q(28).explanationAr.includes("التكلفة الكلية"));assert.ok(q(29).explanationAr.includes("خاصة أو عامة أو هجينة"));
});
