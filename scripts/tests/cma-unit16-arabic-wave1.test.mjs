import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { cmaNumericTokens, validateCmaTranslation } from "../../src/lib/cma-translation.shared.ts";
const read=path=>readFileSync(new URL("../../"+path,import.meta.url),"utf8");
const rows=JSON.parse(read("src/data/cma-gleim-2025-vol2-unit-16.json"));
const q=n=>rows.find(x=>x.section===1&&x.number===n);
function fingerprint(s){
 let h=2166136261;
 for(let i=0;i<s.length;i++)h=Math.imul(h^s.charCodeAt(i),16777619);
 return(h>>>0).toString(16).padStart(8,"0");
}
const wave1=new Map([
 [1,[846,1,"b2aaa724"]],[2,[847,2,"246bdac0"]],[3,[848,1,"46083018"]],
 [5,[850,1,"dc4f802e"]],[6,[851,3,"99641b2a"]],[7,[852,0,"1dd94b30"]],
 [8,[853,1,"9e255b0f"]],[9,[854,3,"fd673cce"]],[10,[855,0,"b52458c9"]],
 [11,[855,3,"c3b9428b"]],[12,[856,3,"9669277f"]],[13,[857,3,"d9815c5a"]],
 [14,[858,3,"ca3f4333"]],[15,[858,0,"aa30165f"]],[16,[859,1,"8dcc0e72"]],
 [17,[860,2,"bc490bed"]],[18,[861,0,"8440e732"]],[20,[863,2,"4560bd66"]],
 [21,[864,3,"7376fe0d"]],[22,[865,3,"5b98fea1"]],
]);
test("Unit 16 Wave 1: source inventory, 20 Arabic drafts and original answer locks",()=>{
 assert.equal(rows.length,166);
 assert.deepEqual([1,2,3,4,5].map(s=>rows.filter(r=>r.section===s).length),[53,12,55,12,34]);
 const localized=rows.filter(r=>r.section===1&&r.number<=22&&(r.stemAr!==undefined||r.choicesAr!==undefined||r.explanationAr!==undefined));
 assert.equal(localized.length,20);
 assert.deepEqual(localized.map(r=>[r.section,r.number]),[...wave1.keys()].map(n=>[1,n]));
 for(const [n,[page,index,hash]] of wave1){
  const r=q(n);
  assert.equal(r.page,page);assert.equal(r.answerIndex,index);
  assert.equal(r.answerStatus,"source");assert.equal(r.sourceTextStatus,undefined);
  assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);
  assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},
   {question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));
  for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])
   assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));
 }
});
test("Unit 16 Wave 1: responsibility center distinctions and controllability",()=>{
 for(const [n,expected] of [[1,"Net revenue minus controllable"],[6,"specialized support"],[9,"Cost center"],[10,"Profit center"],[11,"Investment center"],[15,"choose its markets"],[16,"invested capital"],[21,"Variable computer operational"],[22,"significant influence"]])
  assert.ok(q(n).choices[q(n).answerIndex].replace(/\s+/g," ").includes(expected),String(n));
 const adapter=read("src/data/cma-questions-gleim-2025-vol2.ts");
 for(const [n,page,status] of [[4,849,"source"],[19,862,"inferred"]]){
  const held=q(n);
  assert.equal(held.page,page);assert.equal(held.answerStatus,status);
  assert.equal(held.stemAr,undefined);assert.equal(held.choicesAr,undefined);assert.equal(held.explanationAr,undefined);
  assert.ok(adapter.includes('"16.1.'+n+'"'));
 }
 assert.ok(q(4).choices[3].startsWith("components since"));
});

const wave2=new Map([
 [23,[866,2,"9009c994"]],[24,[867,0,"61cea38b"]],[25,[867,3,"4d7ab983"]],
 [26,[868,2,"f9071cff"]],[27,[869,0,"cf8ef982"]],[28,[870,1,"4a795b9a"]],
 [29,[870,3,"81290e17"]],[30,[872,2,"a81eed18"]],[31,[872,1,"4e628d6a"]],
 [32,[873,1,"15959bb3"]],[33,[874,0,"4839409f"]],[34,[874,0,"9c0d276d"]],
]);
test("Unit 16 Wave 2: 32 full Arabic drafts and 12 additional immutable sources",()=>{
 const localized=rows.filter(r=>r.section===1&&r.number<=34&&(r.stemAr!==undefined||r.choicesAr!==undefined||r.explanationAr!==undefined));
 assert.equal(localized.length,32);
 assert.deepEqual(localized.map(r=>[r.section,r.number]),[...wave1.keys(),...wave2.keys()].map(n=>[1,n]));
 for(const [n,[page,index,hash]] of wave2){
  const r=q(n);
  assert.equal(r.page,page);assert.equal(r.answerIndex,index);
  assert.equal(r.answerStatus,"source");assert.equal(r.sourceTextStatus,undefined);
  assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);
  assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},
   {question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));
  for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])
   assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));
 }
});
test("Unit 16 Wave 2: center authority and controllability distinctions",()=>{
 for(const [n,expected] of [[24,"Allocated fixed overhead"],[25,"new car sales division"],[26,"Cost centers are responsible for revenues"],[28,"Revenue center"],[29,"Responsibility accounting"],[30,"Profit center"],[31,"Investment center"],[32,"Revenue center"],[33,"Cost center"],[34,"Profit center"]])
  assert.ok(q(n).choices[q(n).answerIndex].replace(/\s+/g," ").includes(expected),String(n));
 assert.equal(q(23).choices[q(23).answerIndex].trim().split(/\s+/).join(" "),"No Yes Yes");
 assert.equal(q(28).stem.match(/350,000|75,000|265,000/g).length,3);
 assert.equal(350000+75000+265000,690000);
});

const wave3=new Map([
 [35,[875,2,"5cc7a9b6"]],[36,[876,3,"ed214476"]],[37,[877,2,"d4dbc780"]],
 [38,[877,0,"0770febe"]],[39,[878,1,"c57dff6e"]],[40,[879,0,"00d10a37"]],
 [41,[879,0,"b023ff2a"]],[43,[881,1,"72768b89"]],[44,[882,1,"aea600b5"]],
 [45,[883,1,"56393881"]],[47,[885,2,"7a334969"]],[48,[885,0,"d7d161ee"]],
 [49,[886,0,"89f013d1"]],[50,[887,1,"86c3824e"]],[51,[888,2,"ca8f532b"]],
 [52,[889,3,"bdfd0a25"]],[53,[889,3,"2d6f7b30"]],
]);
test("Unit 16 Wave 3: 49 Arabic drafts and 17 additional immutable sources",()=>{
 const localized=rows.filter(r=>r.section===1&&(r.stemAr!==undefined||r.choicesAr!==undefined||r.explanationAr!==undefined));
 assert.equal(localized.length,49);
 assert.deepEqual(localized.map(r=>[r.section,r.number]),[...wave1.keys(),...wave2.keys(),...wave3.keys()].map(n=>[1,n]));
 for(const [n,[page,index,hash]] of wave3){
  const r=q(n);
  assert.equal(r.page,page);assert.equal(r.answerIndex,index);
  assert.equal(r.answerStatus,"source");assert.equal(r.sourceTextStatus,undefined);
  assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);
  assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},
   {question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));
  for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])
   assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));
 }
});
test("Unit 16 Wave 3: common cost allocation arithmetic and source holds",()=>{
 assert.equal(10000/2,5000);
 assert.equal(480700-325000-145000,10700);
 const revenues=[4500000,6000000,4500000],variable=[1500000,3750000,2250000],employees=[68,76,56];
 const margin=revenues.map((r,i)=>r-variable[i]);
 const share=arr=>arr[2]/arr.reduce((a,b)=>a+b,0);
 assert.ok(share(employees)<Math.min(share(revenues),share(margin),1/3));
 for(const [n,expected] of [[35,"Profit center"],[36,"Indirect costs"],[39,"Earnings per share"],[41,"Cause and effect"],[45,"$5,000 to each"],[47,"Stand-alone"],[49,"$10,700"],[53,"Number of employees"]])
  assert.ok(q(n).choices[q(n).answerIndex].replace(/\s+/g," ").includes(expected),String(n));
 const adapter=read("src/data/cma-questions-gleim-2025-vol2.ts");
 for(const [n,page,index] of [[42,880,1],[46,884,0]]){
  const held=q(n);
  assert.equal(held.page,page);assert.equal(held.answerIndex,index);
  assert.equal(held.stemAr,undefined);assert.equal(held.choicesAr,undefined);assert.equal(held.explanationAr,undefined);
  assert.ok(adapter.includes('"16.1.'+n+'"'));
 }
 assert.ok(q(46).explanation.includes("Remainin")&&q(46).explanation.includes("$110,0"));
});

const wave4=new Map([
 [1,[891,3,"628dd0a7"]],[2,[892,3,"134eefa7"]],[3,[893,0,"450228ad"]],
 [4,[894,3,"0443f5a3"]],[5,[894,3,"bd21c163"]],[6,[895,1,"6f8b9d5b"]],
 [7,[896,1,"d147d440"]],[8,[897,3,"63cb3d6f"]],[9,[898,2,"457fba6e"]],
 [11,[901,0,"7efc6117"]],[12,[902,0,"d782ffa4"]],
]);
const q2=n=>rows.find(r=>r.section===2&&r.number===n);
test("Unit 16 Wave 4: 60 drafts and 11 immutable cost/revenue/profit center sources",()=>{
 const localized=rows.filter(r=>r.section<=2&&(r.stemAr!==undefined||r.choicesAr!==undefined||r.explanationAr!==undefined));
 assert.equal(localized.length,60);
 assert.deepEqual(localized.filter(r=>r.section===2).map(r=>r.number),[...wave4.keys()]);
 for(const [n,[page,index,hash]] of wave4){
  const r=q2(n);
  assert.equal(r.page,page);assert.equal(r.answerIndex,index);
  assert.equal(r.answerStatus,"source");assert.equal(r.sourceTextStatus,undefined);
  assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);
  assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},
   {question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));
  for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])
   assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));
 }
});
test("Unit 16 Wave 4: customer profitability and controllable performance",()=>{
 const customers=[[100000,50000,10000,15000,10000],[150000,60000,25000,20000,20000],[200000,70000,30000,25000,35000],[250000,75000,50000,30000,50000]];
 const profit=customers.map(([sales,cogs,delivery,orders,units])=>(sales-cogs-delivery-orders)/units);
 assert.equal(profit[0],2.5);
 assert.equal(profit[1],2.25);
 assert.equal(profit[2],75000/35000);
 assert.equal(profit[3],1.9);
 assert.equal(Math.max(...profit),profit[0]);
 assert.equal(7500000-375000-5250000-40000-120000,1715000);
 assert.equal(2000000-1400000,600000);
 assert.equal(600000-150000-500000,-50000);
 for(const [n,expected] of [[1,"salary"],[2,"controllable by others"],[3,"$84,000"],[4,"Variance analysis"],[9,"Budgeted rate times actual hours"],[11,"Customer A"],[12,"separate fee"]])
  assert.ok(q2(n).choices[q2(n).answerIndex].replace(/\s+/g," ").includes(expected),String(n));
 const held=q2(10);
 assert.equal(held.page,899);assert.equal(held.answerIndex,3);
 assert.equal(held.stemAr,undefined);assert.equal(held.choicesAr,undefined);assert.equal(held.explanationAr,undefined);
 assert.ok(read("src/data/cma-questions-gleim-2025-vol2.ts").includes('"16.2.10"'));
 assert.ok(held.stem.includes("$100,00")&&held.explanation.includes("$200,000.0"));
});

const wave5=new Map([
 [1,[905,2,"95d790f8"]],[2,[906,1,"97d58ffc"]],[3,[907,3,"a7a0e32e"]],
 [4,[908,3,"2478f6fa"]],[5,[909,1,"359b57c6"]],[6,[910,1,"b2a6a658"]],
 [7,[911,1,"7d7e85fb"]],[8,[912,3,"4e216cba"]],[12,[915,1,"85e5b732"]],
 [13,[916,3,"45161681"]],[14,[917,2,"1891487b"]],[15,[918,3,"3283e325"]],
]);
const q3=n=>rows.find(r=>r.section===3&&r.number===n);
test("Unit 16 Wave 5: 72 drafts and 12 immutable investment center sources",()=>{
 const localized=rows.filter(r=>(r.section<=2||(r.section===3&&r.number<=15))&&(r.stemAr!==undefined||r.choicesAr!==undefined||r.explanationAr!==undefined));
 assert.equal(localized.length,72);
 assert.deepEqual(localized.filter(r=>r.section===3).map(r=>r.number),[...wave5.keys()]);
 for(const [n,[page,index,hash]] of wave5){
  const r=q3(n);
  assert.equal(r.page,page);assert.equal(r.answerIndex,index);
  assert.equal(r.answerStatus,"source");assert.equal(r.sourceTextStatus,undefined);
  assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);
  assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},
   {question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));
  for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])
   assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));
 }
});
test("Unit 16 Wave 5: ROI and residual income calculations and assumption counterexamples",()=>{
 const roi=(income,capital)=>income/capital;
 const ri=(income,capital,rate)=>income-capital*rate;
 assert.equal(ri(25000,500000,.06),-5000);
 assert.equal(roi(25000,500000),.05);
 assert.equal(roi(100-80,100),.20);
 assert.equal(roi(110-88,100),.22);
 assert.equal((100*roi(4000-3525-75,625+1775)).toFixed(2),"16.67");
 assert.equal(19000000*.15,2850000);
 assert.equal(30000000-(2000000+2850000),25150000);
 // Improving negative income while reducing a positive asset base can reduce ROI.
 assert.ok(roi(101-199,50)<roi(100-200,100));
 // A larger asset denominator reduces the magnitude of a negative ROI.
 assert.ok(roi(-100,50)<roi(-100,100));
 // Extra volume at negative unit contribution reduces income even at constant fixed cost.
 assert.ok(roi(110*(4-5)-20,100)<roi(100*(4-5)-20,100));
 // Positive RI project may lower aggregate ROI.
 assert.ok(ri(150,1000,.1)>0&&roi(200+150,1000+1000)<roi(200,1000));
 for(const [n,expected] of [[1,"Target return"],[2,"$(5,000)"],[4,"16.67%"],[6,"Desirable investment"],[12,"Residual income"],[14,"$25,150,000"]])
  assert.ok(q3(n).choices[q3(n).answerIndex].replace(/\s+/g," ").includes(expected),String(n));
 const adapter=read("src/data/cma-questions-gleim-2025-vol2.ts");
 for(const [n,page] of [[9,913],[10,914],[11,915]]){
  const held=q3(n);
  assert.equal(held.page,page);assert.equal(held.answerIndex,3);
  assert.equal(held.stemAr,undefined);assert.equal(held.choicesAr,undefined);assert.equal(held.explanationAr,undefined);
  assert.ok(adapter.includes('"16.3.'+n+'"'));
 }
});

const wave6=new Map([
 [16,[919,2,"70d26c49"]],[17,[920,0,"1070e8d8"]],[18,[921,1,"96157c58"]],
 [19,[922,1,"3874f990"]],[20,[923,2,"ad6592a8"]],[21,[924,0,"0b2d4285"]],
 [22,[925,0,"faa3eab3"]],[23,[926,1,"ee089186"]],[24,[927,3,"3684c703"]],
 [25,[928,2,"25a255a7"]],[27,[929,3,"5e639d77"]],[28,[930,3,"39f061da"]],
 [29,[931,3,"a89c9f14"]],
]);
test("Unit 16 Wave 6: 85 drafts and 13 immutable investment performance sources",()=>{
 const localized=rows.filter(r=>(r.section<=2||(r.section===3&&r.number<=30))&&(r.stemAr!==undefined||r.choicesAr!==undefined||r.explanationAr!==undefined));
 assert.equal(localized.length,85);
 assert.deepEqual(localized.filter(r=>r.section===3).map(r=>r.number),[...wave5.keys(),...wave6.keys()]);
 for(const [n,[page,index,hash]] of wave6){
  const r=q3(n);
  assert.equal(r.page,page);assert.equal(r.answerIndex,index);
  assert.equal(r.answerStatus,"source");assert.equal(r.sourceTextStatus,undefined);
  assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);
  assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},
   {question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));
  for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])
   assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));
 }
});
test("Unit 16 Wave 6: independent ROI/RI decisions, asset funding counterexample and holds",()=>{
 const ri=(income,capital,rate)=>income-capital*rate;
 assert.equal(ri(600000-360000-60000,120000,.08),170400);
 const actual=[18.1,20,15.8,11],targets=[18,16,14,12];
 assert.equal(actual.indexOf(Math.max(...actual)),1);
 const excess=actual.map((v,i)=>v-targets[i]);
 assert.equal(excess.indexOf(Math.max(...excess)),1);
 assert.deepEqual([["A",13],["B",19],["C",22],["D",31]].filter(x=>x[1]>15).map(x=>x[0]),["B","C","D"]);
 const returns=[1000/2500,5000/15000,4000/8000,7500/25000];
 assert.equal(Math.max(...returns),.5);
 assert.equal(ri(365000,1750000,.12),155000);
 assert.equal((475000/3500000*100).toFixed(1),"13.6");
 assert.equal(ri(200000,1000000,.15),50000);
 // Cash purchase changes asset composition but not the total asset base.
 const before={cash:400,inventory:100,other:500};
 const after={cash:200,inventory:300,other:500};
 const sum=o=>Object.values(o).reduce((a,b)=>a+b,0);
 assert.equal(sum(before),sum(after));
 assert.equal(100/sum(before),100/sum(after));
 for(const [n,expected] of [[17,"$170,400"],[18,"Division B"],[19,"B, C, and D"],[20,"South"],[21,"$155,000"],[24,"13.6%"],[27,"$50,000"]])
  assert.ok(q3(n).choices[q3(n).answerIndex].replace(/\s+/g," ").includes(expected),String(n));
 const adapter=read("src/data/cma-questions-gleim-2025-vol2.ts");
 for(const [n,page,index] of [[26,928,1],[30,932,1]]){
  const held=q3(n);
  assert.equal(held.page,page);assert.equal(held.answerIndex,index);
  assert.equal(held.stemAr,undefined);assert.equal(held.choicesAr,undefined);assert.equal(held.explanationAr,undefined);
  assert.ok(adapter.includes('"16.3.'+n+'"'));
 }
});

const wave7=new Map([
 [31,[933,2,"ffafa197"]],[32,[935,1,"183fcf02"]],[33,[935,1,"755fafcd"]],
 [34,[937,3,"527b61e8"]],[35,[938,2,"4918f903"]],[36,[940,3,"3cf064aa"]],
 [37,[942,0,"23a1eb92"]],[38,[943,1,"2d0e6301"]],[39,[944,1,"5a8c227e"]],
 [40,[945,1,"b779f5a2"]],[41,[946,1,"ac2180e6"]],[42,[948,2,"aca3172f"]],
]);
test("Unit 16 Wave 7: 97 drafts and 12 immutable investment evaluation sources",()=>{
 const localized=rows.filter(r=>(r.section<=2||(r.section===3&&r.number<=43))&&(r.stemAr!==undefined||r.choicesAr!==undefined||r.explanationAr!==undefined));
 assert.equal(localized.length,97);
 assert.deepEqual(localized.filter(r=>r.section===3).map(r=>r.number),[...wave5.keys(),...wave6.keys(),...wave7.keys()]);
 for(const [n,[page,index,hash]] of wave7){
  const r=q3(n);
  assert.equal(r.page,page);assert.equal(r.answerIndex,index);
  assert.equal(r.answerStatus,"source");assert.equal(r.sourceTextStatus,undefined);
  assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);
  assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},
   {question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));
  for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])
   assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));
 }
});
test("Unit 16 Wave 7: ROI and RI projects, constrained investments, incentives and review hold",()=>{
 const ri=(income,capital,rate)=>income-capital*rate;
 const roi=(income,capital)=>income/capital;
 assert.equal(roi(40000+15000,400000+100000),.11);
 assert.equal(ri(15000,100000,.08),7000);
 assert.equal(Math.round(100*roi(175000-50000,800000)),16);
 const projects=[[1250000,5000000],[1500000,7500000],[850000,1500000],[750000,10000000]];
 assert.deepEqual(projects.map(([i,c])=>ri(i,c,.08)),[850000,900000,730000,-50000]);
 assert.equal(roi(2520000,14000000),.18);
 assert.ok(14000000+10000000>20000000);
 assert.ok(roi(1000000,9000000)<.15);
 assert.ok(roi(1650000,10000000)<roi(2520000,14000000));
 assert.ok(roi(1642000+218400,9818000+1200000)<.18);
 assert.equal((100*roi(1642000+315000,9818000+730000)).toFixed(1),"18.6");
 assert.equal((100*roi(8000000-6350000-180000,1200000+3175000)).toFixed(1),"33.6");
 assert.equal(ri(250000,1000000,.1),150000);
 assert.equal(ri(25000,500000,.06),-5000);
 assert.equal(ri(12000,100000,.08),4000);
 // Corporate hurdle rate is not necessarily the corporate's existing ROI.
 assert.ok(roi(200000+12000,1000000+100000)<roi(200000,1000000));
 for(const [n,expected] of [[31,"To 11% and increase the residual income by $7,000"],[32,"16%"],[33,"Project B"],[34,"Project C only"],[35,"Plan 2"],[37,"33.6%"],[38,"AED 150,000"],[40,"$(5,000)"]])
  assert.ok(q3(n).choices[q3(n).answerIndex].replace(/\s+/g," ").includes(expected),String(n));
 assert.equal(q3(42).choices[q3(42).answerIndex].trim().replace(/\s+/g," "),"Accept Accept");
 const held=q3(43);
 assert.equal(held.page,949);assert.equal(held.answerIndex,0);
 assert.equal(held.stemAr,undefined);assert.equal(held.choicesAr,undefined);assert.equal(held.explanationAr,undefined);
 assert.ok(read("src/data/cma-questions-gleim-2025-vol2.ts").includes('"16.3.43"'));
});

const wave8=new Map([
 [44,[950,3,"99490990"]],[45,[951,2,"c93e08ae"]],[46,[952,3,"ebe1c556"]],
 [47,[953,3,"81adc30b"]],[48,[955,3,"8e625b46"]],[49,[956,2,"31aa4642"]],
 [50,[957,3,"c10b8ccd"]],[51,[958,0,"1cdf1cf3"]],[52,[959,1,"9041f48c"]],
 [54,[961,2,"a279a8ee"]],[55,[961,1,"658ac6bc"]],
]);
test("Unit 16 Wave 8: 108 drafts and 11 immutable investment center sources",()=>{
 const localized=rows.filter(r=>r.section<=3&&(r.stemAr!==undefined||r.choicesAr!==undefined||r.explanationAr!==undefined));
 assert.equal(localized.length,108);
 assert.deepEqual(localized.filter(r=>r.section===3).map(r=>r.number),[...wave5.keys(),...wave6.keys(),...wave7.keys(),...wave8.keys()]);
 for(const [n,[page,index,hash]] of wave8){
  const r=q3(n);
  assert.equal(r.page,page);assert.equal(r.answerIndex,index);
  assert.equal(r.answerStatus,"source");assert.equal(r.sourceTextStatus,undefined);
  assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);
  assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},
   {question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));
  for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])
   assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));
 }
});
test("Unit 16 Wave 8: independent residual income, ROI comparisons and inflation assumptions",()=>{
 const roi=(i,c)=>i/c;
 const ri=(i,c,r)=>i-c*r;
 assert.equal(ri(1000000,500000+250000,.10),925000);
 assert.equal(ri(14000,100000,.12),2000);
 assert.ok(roi(160000+14000,1000000+100000)<.16);
 const regional=[[1000,2500],[5000,15000],[4000,8000],[7500,25000]].map(([i,c])=>roi(i,c));
 assert.equal(regional.indexOf(Math.min(...regional)),3);
 assert.equal(Math.min(...regional),.30);
 const branches=[[120000,805000],[294000,914000],[318000,1650000],[104000,745000]].map(([i,c])=>roi(i,c));
 assert.equal(branches.indexOf(Math.max(...branches)),1);
 assert.equal((100*Math.max(...branches)).toFixed(1),"32.2");
 // Equal local-currency translation factors cancel in a ratio.
 assert.equal(roi(200,1000),roi(200*2,1000*2));
 // Inflation need not raise ROI if operating costs rise faster than revenue.
 assert.ok(roi(130-120,100)<roi(100-80,100));
 for(const [n,expected] of [[44,"Financial and nonfinancial"],[45,"Earnings per share"],[47,"The manager of the Construction Equipment Division would"],[48,"Residual income"],[49,"$925,000"],[50,"West"],[52,"G City"],[55,"Operating income less a capital charge"]])
  assert.ok(q3(n).choices[q3(n).answerIndex].replace(/\s+/g," ").includes(expected),String(n));
 const held=q3(53);
 assert.equal(held.page,960);assert.equal(held.answerIndex,0);
 assert.equal(held.stemAr,undefined);assert.equal(held.choicesAr,undefined);assert.equal(held.explanationAr,undefined);
 assert.ok(read("src/data/cma-questions-gleim-2025-vol2.ts").includes('"16.3.53"'));
});

const wave9=new Map([
 [1,[963,0,"bf342461"]],[2,[964,1,"ddeedb22"]],[3,[964,0,"12715b7f"]],
 [4,[965,3,"bb783860"]],[5,[966,3,"e89d769a"]],[6,[967,3,"7fd987c8"]],
 [7,[967,1,"0a98c9a5"]],[8,[968,3,"c0c386f6"]],[10,[970,3,"e946bfd4"]],
 [11,[971,0,"7b8fe5ce"]],[12,[971,0,"4f2b89de"]],
]);
const q4=n=>rows.find(r=>r.section===4&&r.number===n);
test("Unit 16 Wave 9: 119 drafts and 11 immutable balanced scorecard sources",()=>{
 const localized=rows.filter(r=>r.section<=4&&(r.stemAr!==undefined||r.choicesAr!==undefined||r.explanationAr!==undefined));
 assert.equal(localized.length,119);
 assert.deepEqual(localized.filter(r=>r.section===4).map(r=>r.number),[...wave9.keys()]);
 for(const [n,[page,index,hash]] of wave9){
  const r=q4(n);
  assert.equal(r.page,page);assert.equal(r.answerIndex,index);
  assert.equal(r.answerStatus,"source");assert.equal(r.sourceTextStatus,undefined);
  assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);
  assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},
   {question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));
  for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])
   assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));
 }
});
test("Unit 16 Wave 9: scorecard perspectives, external analysis and ambiguous metric review",()=>{
 for(const [n,expected] of [[1,"Competitor business strategies"],[2,"Multiple financial and nonfinancial"],[3,"Cycle time"],[4,"I, II, III, and IV"],[5,"scientific management"],[6,"Employee turnover rate"],[7,"Financial and nonfinancial"],[8,"5-star ratings"],[10,"benchmarking is incompatible"],[11,"Political, economic, social, and technological"],[12,"Economic value-added"]])
  assert.ok(q4(n).choices[q4(n).answerIndex].replace(/\s+/g," ").includes(expected),String(n));
 const held=q4(9);
 assert.equal(held.page,969);assert.equal(held.answerIndex,0);
 assert.equal(held.stemAr,undefined);assert.equal(held.choicesAr,undefined);assert.equal(held.explanationAr,undefined);
 assert.ok(read("src/data/cma-questions-gleim-2025-vol2.ts").includes('"16.4.9"'));
 // Source Q12 itself identifies lead time as a possible customer measure.
 assert.ok(q4(12).explanation.includes("lead time"));
 assert.ok(held.choices[1].includes("15 minutes"));
});

const wave10=new Map([
 [4,[976,1,"8fe71f26"]],[5,[977,3,"2dd748b9"]],[6,[978,0,"7d0b645d"]],
 [7,[979,2,"33d8b6a5"]],[8,[980,0,"5c4fc898"]],[9,[981,3,"c80bd936"]],
 [10,[982,2,"fac9822d"]],[11,[983,0,"3944021c"]],[12,[984,2,"1ac94d4a"]],
 [14,[985,2,"870e8f88"]],
]);
const q5=n=>rows.find(r=>r.section===5&&r.number===n);
test("Unit 16 Wave 10: 129 drafts and 10 immutable transfer pricing sources",()=>{
 const localized=rows.filter(r=>r.stemAr!==undefined||r.choicesAr!==undefined||r.explanationAr!==undefined);
 assert.equal(localized.length,129);
 assert.deepEqual(localized.filter(r=>r.section===5).map(r=>r.number),[...wave10.keys()]);
 for(const [n,[page,index,hash]] of wave10){
  const r=q5(n);
  assert.equal(r.page,page);assert.equal(r.answerIndex,index);
  assert.equal(r.answerStatus,"source");assert.equal(r.sourceTextStatus,undefined);
  assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);
  assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},
   {question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));
  for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])
   assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));
 }
});
test("Unit 16 Wave 10: bargaining range, idle capacity and scoring gates",()=>{
 const minTransfer=(incrementalCost,forgoneContribution)=>incrementalCost+forgoneContribution;
 assert.ok(900<=1000);
 assert.deepEqual([minTransfer(20,0),50],[20,50]);
 assert.equal((50-20)*900,27000);
 assert.ok(.8<=1);
 assert.equal(minTransfer(7,0),7);
 assert.equal(12-minTransfer(7,0),5);
 assert.ok(4500<=5000);
 assert.equal(minTransfer(21,0),21);
 assert.equal((46-21)*4500,112500);
 for(const [n,expected] of [[4,"suboptimal decisions"],[5,"Profit center"],[6,"Between $20 and $50"],[7,"absorption-costing"],[8,"$7.00"],[9,"correctly price"],[10,"external customers"],[11,"$21"],[12,"goal congruence"],[14,"Market-based"]])
  assert.ok(q5(n).choices[q5(n).answerIndex].replace(/\s+/g," ").includes(expected),String(n));
 const adapter=read("src/data/cma-questions-gleim-2025-vol2.ts");
 for(const [n,page,index] of [[1,974,2],[2,975,3],[3,976,1],[13,984,1]]){
  const held=q5(n);
  assert.equal(held.page,page);assert.equal(held.answerIndex,index);
  assert.equal(held.stemAr,undefined);assert.equal(held.choicesAr,undefined);assert.equal(held.explanationAr,undefined);
  assert.ok(adapter.includes('"16.5.'+n+'"'));
 }
});
