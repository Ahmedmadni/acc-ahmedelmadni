#!/usr/bin/env node
import { promises as fs } from "node:fs";

const standardsSource = await fs.readFile("src/data/ifrs-standards.ts", "utf8");
const guidesSource = await fs.readFile("src/data/ifrs-standard-guides.ts", "utf8");

const standards = [
  ...new Set(
    [...standardsSource.matchAll(/\bcode:\s*"((?:IFRS|IAS) \d+)"/g)].map(
      (match) => match[1],
    ),
  ),
];

const guideCodes = [
  ...guidesSource.matchAll(/\bg\(\s*"((?:IFRS|IAS) \d+)"/g),
].map((match) => match[1]);

const duplicates = guideCodes.filter(
  (code, index) => guideCodes.indexOf(code) !== index,
);
const guideSet = new Set(guideCodes);
const missing = standards.filter((code) => !guideSet.has(code));
const extra = [...guideSet].filter((code) => !standards.includes(code));

console.log(
  JSON.stringify(
    {
      indexed_standards: standards.length,
      guide_count: guideSet.size,
      missing,
      extra,
      duplicate_guides: [...new Set(duplicates)],
      required_sections_per_guide: [
        "scope",
        "accounting",
        "presentation",
        "workflow",
        "pitfalls",
        "example",
      ],
    },
    null,
    2,
  ),
);

const failures = [];
if (standards.length !== 43)
  failures.push(`Expected 43 indexed standards; found ${standards.length}`);
if (guideSet.size !== 43)
  failures.push(`Expected 43 standard guides; found ${guideSet.size}`);
if (missing.length) failures.push(`Missing guides: ${missing.join(", ")}`);
if (extra.length) failures.push(`Unknown guide codes: ${extra.join(", ")}`);
if (duplicates.length)
  failures.push(`Duplicate guide codes: ${[...new Set(duplicates)].join(", ")}`);

if (failures.length) {
  console.error("\nIFRS guide coverage check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("\nIFRS guide coverage check passed.");
