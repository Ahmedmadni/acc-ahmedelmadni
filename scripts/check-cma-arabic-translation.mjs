import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "src", "data");
const arabic = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/u;
const fields = ["stemAr", "choicesAr", "explanationAr"];
let total = 0;
let translated = 0;
let untranslated = 0;
const errors = [];

for (let unit = 1; unit <= 10; unit++) {
  const filename = `cma-gleim-2025-vol1-unit-${unit}.json`;
  checkFile(filename);
}
for (let unit = 11; unit <= 20; unit++) {
  const filename = `cma-gleim-2025-vol2-unit-${unit}.json`;
  checkFile(filename);
}

function checkFile(filename) {
  const filepath = path.join(root, filename);
  if (!fs.existsSync(filepath)) {
    errors.push(`Missing source file: ${filename}`);
    return;
  }
  let records;
  try {
    records = JSON.parse(fs.readFileSync(filepath, "utf8"));
  } catch (error) {
    errors.push(`Invalid JSON in ${filename}: ${error.message}`);
    return;
  }
  if (!Array.isArray(records)) {
    errors.push(`Expected a JSON array in ${filename}`);
    return;
  }
  for (const record of records) {
    total++;
    const key = `SU${record.unit ?? "?"}.${record.section ?? "?"} Q${record.number ?? "?"}`;
    const present = fields.map((field) => Object.hasOwn(record, field));
    if (present.every((value) => !value)) {
      untranslated++;
      continue;
    }
    if (!present.every(Boolean)) {
      errors.push(`${filename} ${key}: partial translation fields; expected all of ${fields.join(", ")} or none`);
      continue;
    }
    const validString = (value) => typeof value === "string" && value.trim().length > 0 && arabic.test(value);
    if (!validString(record.stemAr)) errors.push(`${filename} ${key}: stemAr is empty or has no Arabic characters`);
    if (!Array.isArray(record.choicesAr) || record.choicesAr.length !== 4) {
      errors.push(`${filename} ${key}: choicesAr must contain exactly four options`);
    } else {
      record.choicesAr.forEach((choice, index) => {
        if (!validString(choice)) errors.push(`${filename} ${key}: choicesAr[${index}] is empty or has no Arabic characters`);
      });
    }
    if (!validString(record.explanationAr)) errors.push(`${filename} ${key}: explanationAr is empty or has no Arabic characters`);
    if (present.every(Boolean)) translated++;
  }
}

console.log(`CMA Arabic translation coverage: ${translated}/${total} translated; ${untranslated} not yet translated.`);
if (errors.length) {
  console.error(`Found ${errors.length} translation validation error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log("Translation structure and Arabic-script checks passed. This check does not assess translation quality or correctness.");
}
