import assert from "node:assert/strict";
import test from "node:test";
import { createHash } from "node:crypto";
import { compileIfrsQuizExport } from "../publish-ifrsquiz-questions.mjs";

const sha=s=>createHash("sha256").update(s).digest("hex");
const record=()=>({
  standard_code:"IAS 2",source_url:"https://ifrsquiz.com/",source_revision:"2026-11-15",
  source_license:"user-supplied reuse authorization",source_item_id:"ias2-item-001",
  source_fingerprint:sha("original question body and answer"),
  question_en:"Which inventory value is reported under a lower-of-cost-and-NRV case?",
  question_ar:"ما قيمة المخزون التي يتم عرضها وفق قاعدة الأقل من التكلفة وصافي القيمة القابلة للتحقق؟",
  choices_en:["Cost 100","NRV 80","Sell price 120","Nominal value 60"],
  choices_ar:["التكلفة 100","صافي القيمة 80","سعر البيع 120","القيمة الاسمية 60"],
  answer_index:1,source_answer_key:"B",
  explanation_en:"The carrying value is the lower of 100 cost and 80 net realizable value.",
  explanation_ar:"القيمة الدفترية تساوي الأقل بين التكلفة 100 وصافي القيمة القابلة للتحقق 80.",
  reference:"IAS 2",difficulty:"easy",exam_domain:"inventory measurement",
});
const run=(items,options={})=>compileIfrsQuizExport(items,{validStandards:["IAS 2","IFRS 17"],existingQuestions:[],...options});

test("IFRSQuiz publisher creates stable bilingual, permission-traceable items",()=>{
 const first=run([record()]);const second=run([record()]);
 assert.equal(first.questions.length,1);
 assert.equal(first.questions[0].id,second.questions[0].id);
 assert.equal(first.questions[0].answerIndex,1);
 assert.equal(first.questions[0].choices.ar[1],"صافي القيمة 80");
 assert.equal(first.provenance[first.questions[0].id].sourceItemId,"ias2-item-001");
});
test("rejects non-IFRSQuiz source, missing permission and invalid answer key",()=>{
 assert.throws(()=>run([{...record(),source_url:"https://example.com/"}]),/IFRSQuiz/);
 assert.throws(()=>run([{...record(),source_license:""}]),/permission/);
 assert.throws(()=>run([{...record(),answer_index:4}]),/0–3/);
 assert.throws(()=>run([{...record(),choices_en:["A","A","C","D"]}]),/duplicate/);
 assert.throws(()=>run([{...record(),question_ar:""}]),/Arabic/);
 assert.throws(()=>run([{...record(),explanation_en:""}]),/explanations/);
});
test("does not silently republish a duplicate of an existing local question",()=>{
 assert.throws(()=>run([record()],{existingQuestions:[{id:"legacy",question:{en:record().question_en}}]}),/No new nonduplicated/);
});
test("keeps source item IDs distinct",()=>{
 const second={...record(),question_en:"A different question",source_item_id:"ias2-item-001"};
 assert.throws(()=>run([record(),second]),/duplicate source ID/);
});
