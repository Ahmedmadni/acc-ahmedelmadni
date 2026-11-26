// Audits local Gleim 2025 source records; counts are not publication or visual-certification claims.
import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import { cmaNumericTokens } from "../src/lib/cma-translation.shared.ts";

// Existing reflowed Unit 14 stems retain all numeric tokens, but in a different
// order. Pin both sequences; this does not certify table-cell associations.
const reorderedStemPins = {
  "14.2.1": [
    [
      "5",
      "3.50",
      "30,000",
      "36,000",
      "1.00",
      "2.00",
      "33,000",
      "40,000",
      "50",
      "29,000",
      "12,000",
      "1.5",
      "0.5"
    ],
    [
      "5",
      "30,000",
      "36,000",
      "33,000",
      "40,000",
      "29,000",
      "3.50",
      "1.00",
      "2.00",
      "50",
      "12,000",
      "1.5",
      "0.5"
    ]
  ],
  "14.2.2": [
    [
      "5",
      "3.50",
      "30,000",
      "36,000",
      "1.00",
      "2.00",
      "33,000",
      "40,000",
      "50",
      "29,000",
      "12,000",
      "1.5",
      "0.5"
    ],
    [
      "5",
      "30,000",
      "36,000",
      "33,000",
      "40,000",
      "29,000",
      "3.50",
      "1.00",
      "2.00",
      "50",
      "12,000",
      "1.5",
      "0.5"
    ]
  ],
  "14.2.3": [
    [
      "4,600",
      "30",
      "5,000",
      "4,200",
      "50%",
      "6,000",
      "80%",
      "30",
      "3,800",
      "16,000"
    ],
    [
      "30",
      "50%",
      "80%",
      "4,600",
      "5,000",
      "4,200",
      "6,000",
      "30",
      "3,800",
      "16,000"
    ]
  ],
  "14.2.4": [
    [
      "4,600",
      "30",
      "5,000",
      "4,200",
      "50%",
      "6,000",
      "80%",
      "30",
      "3,800",
      "16,000"
    ],
    [
      "30",
      "50%",
      "80%",
      "4,600",
      "5,000",
      "4,200",
      "6,000",
      "30",
      "3,800",
      "16,000"
    ]
  ],
  "14.2.5": [
    [
      "3",
      "120%",
      "500",
      "10,000",
      "8,000",
      "9,000",
      "12,000",
      "1",
      "2",
      "2.0",
      "0.5",
      "7.25",
      "12.00"
    ],
    [
      "10,000",
      "8,000",
      "9,000",
      "12,000",
      "3",
      "120%",
      "500",
      "1",
      "2",
      "2.0",
      "0.5",
      "7.25",
      "12.00"
    ]
  ],
  "14.2.37": [
    [
      "2,300",
      "2,500",
      "2,100",
      "30",
      "20",
      "1,900",
      "4,000",
      "40%",
      "60%"
    ],
    [
      "20",
      "40%",
      "60%",
      "2,300",
      "2,500",
      "2,100",
      "30",
      "1,900",
      "4,000"
    ]
  ],
  "14.2.38": [
    [
      "2,300",
      "2,500",
      "2,100",
      "30",
      "20",
      "1,900",
      "4,000",
      "40%",
      "60%",
      "1,600",
      "1,800",
      "31",
      "4,200"
    ],
    [
      "20",
      "40%",
      "60%",
      "2,300",
      "2,500",
      "2,100",
      "30",
      "1,900",
      "4,000",
      "1,600",
      "1,800",
      "31",
      "4,200"
    ]
  ],
  "14.3.2": [
    [
      "4,600",
      "30",
      "5,000",
      "4,200",
      "50%",
      "6,000",
      "80%",
      "30",
      "3,800",
      "16,000",
      "160"
    ],
    [
      "30",
      "50%",
      "80%",
      "4,600",
      "5,000",
      "4,200",
      "6,000",
      "30",
      "3,800",
      "16,000",
      "160"
    ]
  ],
  "14.3.3": [
    [
      "2,300",
      "2,500",
      "2,100",
      "20",
      "30",
      "1,900",
      "40%",
      "4,000",
      "60%",
      "1,800",
      "40",
      "4"
    ],
    [
      "20",
      "40%",
      "60%",
      "2,300",
      "2,500",
      "2,100",
      "30",
      "1,900",
      "4,000",
      "1,800",
      "40",
      "4"
    ]
  ],
  "14.3.5": [
    [
      "3",
      "120%",
      "500",
      "10,000",
      "8,000",
      "9,000",
      "12,000",
      "1",
      "2",
      "2.0",
      "0.5",
      "7.25",
      "12.00"
    ],
    [
      "10,000",
      "8,000",
      "9,000",
      "12,000",
      "3",
      "120%",
      "500",
      "1",
      "2",
      "2.0",
      "0.5",
      "7.25",
      "12.00"
    ]
  ]
};
const seenReorders = new Set();


const baseline = [[217,202],[107,94],[125,109],[86,71],[75,63],[61,55],[131,115],[84,67],[115,84],[59,54],[58,58],[155,136],[123,121],[175,160],[264,217],[166,143],[93,71],[149,115],[110,78],[90,54]];
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
    if (complete) {
      completeArabic++;
      const fields = [["stem",row.stem,row.stemAr],["explanation",row.explanation,row.explanationAr],
        ...row.choices.map((choice,i)=>["choice-"+i,choice,row.choicesAr[i]])];
      for (const [field,en,ar] of fields) {
        const expected=cmaNumericTokens(en), actual=cmaNumericTokens(ar);
        if (field==="stem" && Object.hasOwn(reorderedStemPins,key)) {
          const [pinnedEn,pinnedAr]=reorderedStemPins[key];
          assert.deepEqual(expected,pinnedEn,key+" English table order changed; review exception");
          assert.deepEqual(actual,pinnedAr,key+" Arabic table order changed; review exception");
          assert.deepEqual([...actual].sort(),[...expected].sort(),key+" table values changed");
          seenReorders.add(key);
        } else {
          assert.deepEqual(actual,expected,key+" "+field+" numeric mismatch");
        }
      }
    }
    if (row.answerStatus === "inferred") inferredKeys++;
    if (row.sourceTextStatus === "reconstructed" || row.sourceTextStatus === "table-reflowed") layoutReview++;
  }
  assert.ok(completeArabic >= minimumArabic, `Arabic coverage regression in unit ${unit}; document any intentional quarantine and update baseline`);
  summary.push({unit,volume,total:rows.length,completeArabic,englishOnly:rows.length-completeArabic,inferredKeys,layoutReview});
}
assert.deepEqual([...seenReorders].sort(),Object.keys(reorderedStemPins).sort(),"Review obsolete or missing numeric reorder exceptions");
const aggregate = rows => rows.reduce((a,r)=>{for(const k of ["total","completeArabic","englishOnly","inferredKeys","layoutReview"])a[k]+=r[k];return a;},{total:0,completeArabic:0,englishOnly:0,inferredKeys:0,layoutReview:0});
const result = {numericAudit:{orderedParityExceptPinnedTableReflows:true,tableReflowExceptions:[...seenReorders].sort(),visualCertification:false},units:summary,volume1:aggregate(summary.filter(r=>r.volume===1)),volume2:aggregate(summary.filter(r=>r.volume===2)),total:aggregate(summary)};
console.log(JSON.stringify(result,null,2));
