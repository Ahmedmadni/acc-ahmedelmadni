import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { cmaNumericTokens, validateCmaTranslation } from "../../src/lib/cma-translation.shared.ts";
const read=path=>readFileSync(new URL("../../"+path,import.meta.url),"utf8");
const rows=JSON.parse(read("src/data/cma-gleim-2025-vol1-unit-1.json"));
function fingerprint(s){let h=2166136261;for(let i=0;i<s.length;i++)h=Math.imul(h^s.charCodeAt(i),16777619);return(h>>>0).toString(16).padStart(8,"0");}
const pins=new Map([[34,[143,2,"da98ea79"]],[35,[144,0,"7507d6f1"]],[36,[146,2,"807ac1c0"]],[37,[148,3,"529a80e1"]],[38,[149,2,"40b25024"]],[40,[153,1,"d7c24bad"]],[42,[155,1,"faa6c639"]]]);
test("Unit 1 cash flow Arabic drafts preserve source and numbers",()=>{
 for(const [n,[page,index,hash]] of pins){const r=rows.find(r=>r.section===5&&r.number===n);assert.equal(r.page,page);assert.equal(r.answerIndex,index);assert.equal(r.answerStatus,"source");assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},{question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));}
 const adapter=read("src/data/cma-questions-gleim-2025-vol1.ts");for(const [s,n,page] of [[4,23,90,"malformed date layout"],[5,16,127,"interleaved shared fact pattern"],[5,17,128,"interleaved shared fact pattern"],[5,39,151,"depreciation movement assumes no disposal"],[5,41,154,"marketable securities classification and omitted investing activities"]]){const r=rows.find(r=>r.section===s&&r.number===n);assert.equal(r.page,page);assert.equal(r.stemAr,undefined);assert.ok(adapter.includes('"1.'+s+'.'+n+'"'));}
 assert.equal(2800000-1500000,1300000);assert.equal(2000000+100000+200000+400000-300000-700000,1700000);assert.equal(920000+45000+16000+110000-73000,1018000);assert.equal(82000+6000+20000-12000-3000-10000,83000);assert.equal(304000-295700+22400+40000-21600,49100);
 assert.ok(rows.filter(r=>r.stemAr).length>=155);
});

const wave2Pins=new Map([[43,[157,2,"b98504e5"]],[44,[158,2,"851b4456"]],[45,[159,1,"202772c0"]],[46,[160,1,"6d5bcfd0"]],[47,[161,2,"9ef826a4"]],[48,[162,1,"3e4cc15e"]],[49,[163,1,"4d9fc015"]],[50,[163,3,"e8896215"]],[51,[165,2,"215696b4"]],[52,[166,1,"3001efa0"]]]);
test("Unit 1 cash flow wave 2 preserves source, numbers and answers",()=>{
 for(const [n,[page,index,hash]] of wave2Pins){const r=rows.find(r=>r.section===5&&r.number===n);assert.equal(r.page,page);assert.equal(r.answerIndex,index);assert.equal(r.answerStatus,"source");assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},{question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));}
 assert.equal(100000+40000-125000-8000+5000,12000);
 assert.equal(1500000+150000-50000-300000,1300000);
 assert.equal(26000-35000+50000,41000);
 assert.equal([500000,300000,100000][1],300000);
 assert.ok(rows.filter(r=>r.stemAr&&r.choicesAr&&r.explanationAr).length>=165);
});
