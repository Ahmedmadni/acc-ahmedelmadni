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

const wave3Pins=new Map([[53,[167,0,"72afe936"]],[55,[169,1,"4e342621"]],[56,[170,1,"fcc7960c"]],[57,[171,0,"6906acb2"]],[58,[172,3,"d8a01a25"]],[60,[174,0,"ed616788"]],[61,[176,0,"55e96a11"]],[62,[177,2,"52e457ab"]],[63,[178,3,"8baebfa7"]]]);
test("Unit 1 cash flow wave 3 preserves source, answers and numerical parity",()=>{
 for(const [n,[page,index,hash]] of wave3Pins){const r=rows.find(r=>r.section===5&&r.number===n);assert.equal(r.page,page);assert.equal(r.answerIndex,index);assert.equal(r.answerStatus,"source");assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},{question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));}
 const adapter=read("src/data/cma-questions-gleim-2025-vol1.ts");for(const n of [54,59]){const r=rows.find(r=>r.section===5&&r.number===n);assert.equal(r.stemAr,undefined);assert.ok(adapter.includes('"1.5.'+n+'"'));}
 assert.equal(25000-8000-3000,14000);assert.equal(-80000-60000,-140000);assert.equal(10000-5000,5000);assert.equal(1000*15,15000);assert.equal(-300+250+200+100,250);
 assert.ok(rows.filter(r=>r.stemAr&&r.choicesAr&&r.explanationAr).length>=174);
});

const wave4Pins=new Map([[67,[183,0,"d4d3b96d"]],[68,[185,2,"1d1b3490"]],[69,[186,3,"46132998"]]]);
test("Unit 1 cash flow wave 4 preserves source, answers and numerical parity",()=>{
 for(const [n,[page,index,hash]] of wave4Pins){const r=rows.find(r=>r.section===5&&r.number===n);assert.equal(r.page,page);assert.equal(r.answerIndex,index);assert.equal(r.answerStatus,"source");assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},{question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));}
 const adapter=read("src/data/cma-questions-gleim-2025-vol1.ts");for(const n of [64,65,66]){const r=rows.find(r=>r.section===5&&r.number===n);assert.equal(r.stemAr,undefined);assert.ok(adapter.includes('"1.5.'+n+'"'));}
 assert.equal(100000-80000,20000);assert.equal(20000+13000-1250,31750);assert.equal(12500-13000-3250,-3750);assert.equal(40000+(50000-30000)+(20000-10000),70000);
 assert.ok(rows.filter(r=>r.stemAr&&r.choicesAr&&r.explanationAr).length>=177);
 assert.equal(rows.filter(r=>r.section===5).length,69);assert.ok(rows.filter(r=>r.section===5&&r.stemAr).length>=60);
});

const wave5Pins=new Map([[1,[188,2,"9ce59190"]],[2,[189,2,"212e0f2b"]],[3,[190,2,"6e2f5a4f"]],[4,[191,2,"e8f14e45"]],[5,[193,1,"157d6177"]],[7,[194,2,"6796d5de"]],[8,[195,0,"4644664a"]],[10,[197,1,"7f119b0f"]]]);
test("Unit 1 consolidation wave 5 preserves source, answers and numerical parity",()=>{
 for(const [n,[page,index,hash]] of wave5Pins){const r=rows.find(r=>r.section===6&&r.number===n);assert.equal(r.page,page);assert.equal(r.answerIndex,index);assert.equal(r.answerStatus,"source");assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},{question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));}
 const adapter=read("src/data/cma-questions-gleim-2025-vol1.ts");for(const n of [6,9]){const r=rows.find(r=>r.section===6&&r.number===n);assert.equal(r.stemAr,undefined);assert.ok(adapter.includes('"1.6.'+n+'"'));}
 assert.equal(900-(100+200+200+400-200),200);assert.equal(1000000-800000,200000);assert.equal(600000-(850000-350000),100000);
 assert.ok(rows.filter(r=>r.stemAr&&r.choicesAr&&r.explanationAr).length>=185);
});

const wave6Pins=new Map([[11,[198,3,"bdd1ea4a"]],[12,[199,2,"86a3d15c"]],[14,[201,1,"45a00419"]],[15,[202,3,"66835b1b"]],[16,[203,2,"1881971e"]],[17,[204,3,"537c6488"]],[18,[205,2,"0124cbcb"]],[20,[207,0,"f5690e69"]]]);
test("Unit 1 consolidation wave 6 preserves source, answers and numerical parity",()=>{
 for(const [n,[page,index,hash]] of wave6Pins){const r=rows.find(r=>r.section===6&&r.number===n);assert.equal(r.page,page);assert.equal(r.answerIndex,index);assert.equal(r.answerStatus,"source");assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},{question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));}
 const adapter=read("src/data/cma-questions-gleim-2025-vol1.ts");for(const n of [13,19]){const r=rows.find(r=>r.section===6&&r.number===n);assert.equal(r.stemAr,undefined);assert.ok(adapter.includes('"1.6.'+n+'"'));}
 assert.equal(1400000-100000*10,400000);assert.equal(4+1,5);assert.equal(600000,Number(rows.find(r=>r.section===6&&r.number===20).choices[0].replace(/[$,]/g,"")));
 assert.ok(rows.filter(r=>r.stemAr&&r.choicesAr&&r.explanationAr).length>=193);
});

const wave7Pins=new Map([[21,[208,3,"274f60ed"]],[22,[209,0,"cbf9c68c"]],[23,[210,0,"95546555"]],[24,[211,2,"7173dcfe"]],[25,[212,1,"4f8fe329"]],[26,[213,3,"cde93444"]],[27,[214,3,"7cfd24b1"]],[28,[215,2,"bcfe809f"]],[30,[217,0,"eb908231"]]]);
test("Unit 1 consolidation wave 7 preserves source, answers and numerical parity",()=>{
 for(const [n,[page,index,hash]] of wave7Pins){const r=rows.find(r=>r.section===6&&r.number===n);assert.equal(r.page,page);assert.equal(r.answerIndex,index);assert.equal(r.answerStatus,"source");assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},{question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));}
 const adapter=read("src/data/cma-questions-gleim-2025-vol1.ts");const held=["1.4.23","1.5.16","1.5.17","1.5.39","1.5.41","1.5.54","1.5.59","1.5.64","1.5.65","1.5.66","1.6.6","1.6.9","1.6.13","1.6.19","1.6.29"];for(const r of rows.filter(r=>!r.stemAr)){const id=[r.unit,r.section,r.number].join(".");assert.ok(held.includes(id),id);assert.ok(adapter.includes('"'+id+'"'));}assert.equal(rows.filter(r=>!r.stemAr).length,held.length);
 assert.equal(450000+200000-100000,550000);assert.equal(2000000+500000+100000,2600000);assert.equal(1000000+250000,1250000);assert.equal(8000000-5000000,3000000);assert.equal(8000000+800000-800000,8000000);assert.equal(rows.filter(r=>r.stemAr&&r.choicesAr&&r.explanationAr).length,202);
});

const unit2Rows=JSON.parse(read("src/data/cma-gleim-2025-vol1-unit-2.json"));
const unit2Wave1Pins=new Map([[2,[220,3,"6bd61b9d"]],[4,[223,0,"285481be"]],[5,[224,0,"c29816bf"]],[7,[226,1,"d47733cb"]],[8,[227,0,"7decd2c5"]],[9,[228,0,"a25f9d24"]],[10,[229,2,"1e391dd4"]],[11,[230,0,"92a71e94"]],[12,[231,1,"5a052df2"]]]);
test("Unit 2 receivables wave 1 preserves source, answers and numerical parity",()=>{
 for(const [n,[page,index,hash]] of unit2Wave1Pins){const r=unit2Rows.find(r=>r.section===1&&r.number===n);assert.equal(r.page,page);assert.equal(r.answerIndex,index);assert.equal(r.answerStatus,"source");assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},{question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));}
 const adapter=read("src/data/cma-questions-gleim-2025-vol1.ts");for(const n of [1,3,6]){const r=unit2Rows.find(r=>r.section===1&&r.number===n);assert.equal(r.stemAr,undefined);assert.ok(adapter.includes('"2.1.'+n+'"'));}
 assert.equal(10000000*.03,300000);assert.equal(300000+150000-200000,250000);assert.equal(3000000*.03-50000,40000);assert.equal(60000*.05+4000*.1+2000*.7,4800);assert.equal(90000+16000-100000,6000);assert.equal((700000-650000)-(60000-36000+4000),22000);
 assert.ok(unit2Rows.filter(r=>r.stemAr&&r.choicesAr&&r.explanationAr).length>=9);
});

const unit2Wave2Pins=new Map([[13,[232,1,"af741387"]],[14,[233,0,"10c5330f"]],[15,[234,3,"976480e7"]],[16,[235,2,"a7204f36"]],[17,[236,3,"508434df"]],[18,[237,3,"37c2a549"]],[19,[238,1,"16060baf"]],[20,[239,0,"b953499a"]]]);
test("Unit 2 receivables wave 2 preserves source, answers and numerical parity",()=>{
 for(const [n,[page,index,hash]] of unit2Wave2Pins){const r=unit2Rows.find(r=>r.section===1&&r.number===n);assert.equal(r.page,page);assert.equal(r.answerIndex,index);assert.equal(r.answerStatus,"source");assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},{question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));}
 assert.equal(1000000*.02,20000);assert.equal(240000*.01+180000*.02+200000*.06,18000);assert.equal(2000000*.03,60000);assert.equal(850000-64000,786000);assert.equal(50000-(12000-48000),86000);assert.equal(50000,Number(unit2Rows.find(r=>r.section===1&&r.number===18).choices[3].replace(/[$,]/g,"")));assert.equal(300000*.08-(30000-40000),34000);assert.equal(80000*(1-.10-.05),68000);
 assert.equal(unit2Rows.filter(r=>r.section===1).length,20);assert.ok(unit2Rows.filter(r=>r.section===1&&r.stemAr).length>=17);
});

const unit2Wave3Pins=new Map([[2,[242,0,"81970b1f"]],[4,[244,3,"67af50e5"]],[5,[245,1,"5838b37b"]],[6,[246,2,"07d7f4ff"]],[7,[247,3,"0bc5b6cb"]],[8,[248,1,"fb608b29"]],[9,[249,2,"1f707e5f"]]]);
test("Unit 2 inventory fundamentals wave 3 preserves source, answers and numerical parity",()=>{
 for(const [n,[page,index,hash]] of unit2Wave3Pins){const r=unit2Rows.find(r=>r.section===2&&r.number===n);assert.equal(r.page,page);assert.equal(r.answerIndex,index);assert.equal(r.answerStatus,"source");assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},{question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));}
 const adapter=read("src/data/cma-questions-gleim-2025-vol1.ts");for(const n of [1,3,10]){const r=unit2Rows.find(r=>r.section===2&&r.number===n);assert.equal(r.stemAr,undefined);assert.ok(adapter.includes('"2.2.'+n+'"'));}
 assert.equal(49000+180000-62000,167000);assert.equal(120000+167000-140000,147000);assert.equal(5000+60000-55000,10000);assert.equal(900000*.6+200000,740000);assert.equal((-1000)-(-1000),0);assert.equal(0-1000,-1000);assert.equal(1000-0,1000);
 assert.ok(unit2Rows.filter(r=>r.stemAr&&r.choicesAr&&r.explanationAr).length>=24);
});

const unit2Wave4Pins=new Map([[11,[250,1,"579d0db4"]],[12,[252,3,"f36fe314"]],[13,[253,1,"70c15119"]],[14,[254,0,"7bf9e691"]],[15,[254,2,"6946738d"]],[16,[255,3,"baf362ef"]],[17,[256,0,"1c89585b"]],[18,[257,3,"3795f276"]]]);
test("Unit 2 inventory fundamentals wave 4 preserves source, answers and numerical parity",()=>{
 for(const [n,[page,index,hash]] of unit2Wave4Pins){const r=unit2Rows.find(r=>r.section===2&&r.number===n);assert.equal(r.page,page);assert.equal(r.answerIndex,index);assert.equal(r.answerStatus,"source");assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},{question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));}
 assert.deepEqual([138000-23000,254000+23000+61000,168000-61000+17000],[115000,338000,124000]);assert.equal(1500000+90000+120000,1710000);assert.equal(350000+118000+75000,543000);assert.equal(0-1000,-1000);assert.equal(0-(-4000),4000);
 assert.equal(unit2Rows.filter(r=>r.section===2).length,18);assert.ok(unit2Rows.filter(r=>r.section===2&&r.stemAr).length>=15);assert.ok(unit2Rows.filter(r=>r.stemAr&&r.choicesAr&&r.explanationAr).length>=32);
});

const unit2Wave5Pins=new Map([[1,[260,1,"7004a6d7"]],[2,[260,1,"2be2dddc"]],[3,[262,1,"bdebb07e"]],[5,[264,1,"ce1430e0"]],[6,[265,3,"ec1f6686"]],[7,[266,2,"dced04ca"]],[9,[268,0,"da0f0f0e"]],[10,[269,0,"11cf7374"]]]);
test("Unit 2 inventory cost flow wave 5 preserves source, answers and numerical parity",()=>{
 for(const [n,[page,index,hash]] of unit2Wave5Pins){const r=unit2Rows.find(r=>r.section===3&&r.number===n);assert.equal(r.page,page);assert.equal(r.answerIndex,index);assert.equal(r.answerStatus,"source");assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},{question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));}
 const adapter=read("src/data/cma-questions-gleim-2025-vol1.ts");for(const n of [4,8]){const r=unit2Rows.find(r=>r.section===3&&r.number===n);assert.equal(r.stemAr,undefined);assert.ok(adapter.includes('"2.3.'+n+'"'));}
 assert.equal(200*3.5+250*3.3+200*3.1+350*3-250*3,2445);assert.equal(750*7-2445,2805);assert.equal(1000*1.65+500*2.2+200*2,3150);assert.equal(300*2+500*2.2,1700);assert.equal(5000*7+7000*6.25,78750);assert.equal(5000*8+5000*7.5,77500);
 assert.ok(unit2Rows.filter(r=>r.stemAr&&r.choicesAr&&r.explanationAr).length>=40);
});

const unit2Wave6Pins=new Map([[11,[270,3,"d17a3e23"]],[12,[270,2,"73b971ef"]],[13,[271,1,"3019ee8f"]],[14,[272,2,"1d188c76"]],[15,[273,2,"ed199dcf"]],[16,[274,2,"d4a11709"]],[17,[274,2,"86d2b101"]],[18,[276,1,"b75f5f1a"]],[19,[278,1,"e4413cde"]],[20,[279,1,"d3eb248e"]],[21,[280,1,"4b3dc092"]],[22,[281,3,"d0f180b3"]],[23,[283,2,"1a4502b6"]],[24,[284,3,"833584ff"]],[25,[285,3,"149dad41"]],[26,[286,1,"eea435e5"]],[27,[287,3,"86fb9848"]],[28,[288,3,"50ca3cac"]],[29,[289,2,"1b016e3c"]],[30,[290,0,"deaf6c05"]],[31,[291,2,"8181a643"]],[32,[292,0,"b02c1144"]],[34,[294,1,"7abcba28"]],[35,[295,0,"d7f2decf"]],[36,[296,2,"188214aa"]],[37,[297,1,"351187e7"]]]);
test("Unit 2 cost flow wave 6 preserves source, answers and numerical parity",()=>{
 for(const [n,[page,index,hash]] of unit2Wave6Pins){const r=unit2Rows.find(r=>r.section===3&&r.number===n);assert.equal(r.page,page);assert.equal(r.answerIndex,index);assert.equal(r.answerStatus,"source");assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},{question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));}
 const adapter=read("src/data/cma-questions-gleim-2025-vol1.ts");assert.ok(adapter.includes('"2.3.33"'));assert.equal(unit2Rows.find(r=>r.section===3&&r.number===33).stemAr,undefined);
 assert.equal(Math.round(25000*9.1209),228023);assert.equal(160*1076+190*1070+120*1062-(200*1055+170*1062+100*1070),4360);assert.equal(75000/20000*10000,37500);assert.equal(1000+1800-1575+2000,3225);assert.equal(2600*777.42,2021292);assert.equal(150*4.8+30*4.2+50*4,1046);assert.equal(230*4.8,1104);assert.equal((416+880)/300,4.32);assert.equal(Math.round(570*(7-4.4)),1482);assert.equal(3520-936,2584);assert.equal(1000*2.5+5000*2.7,16000);assert.equal(2000*20+2000*22,84000);assert.equal(6*55+2*50+7*60,850);assert.equal(Math.round((1250+116+440)/300*10*100)/100,60.2);assert.equal(40000*17+10000*15,830000);assert.equal((30000*10+10000*12)/40000*20000,210000);
 assert.equal(unit2Rows.filter(r=>r.section===3).length,37);assert.ok(unit2Rows.filter(r=>r.section===3&&r.stemAr).length>=34);assert.ok(unit2Rows.filter(r=>r.stemAr&&r.choicesAr&&r.explanationAr).length>=66);
});
