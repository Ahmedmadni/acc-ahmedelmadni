import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { promises as fs } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const script = fileURLToPath(new URL("../normalize-ifrs-questions.mjs", import.meta.url));

test("exact-source importer preserves positions and refuses incomplete provenance", async () => {
  const directory = await fs.mkdtemp(path.join(tmpdir(), "ifrs-import-test-"));
  const input = path.join(directory, "input.json");
  const output = path.join(directory, "output.json");
  const record = {
    standard_code: "IAS 2",
    question: " fixture text ",
    options: ["A ", "B", "C", "D"],
    answer: 2,
    source_item_id: "fixture-1",
    source_url: "https://www.ifrs.org/",
    source_revision: "fixture-edition",
    source_license: "fixture-permission",
  };
  const run = () =>
    spawnSync(
      process.execPath,
      [script, "--input", input, "--output", output, "--numeric-answer-base", "1"],
      { encoding: "utf8" },
    );

  try {
    await fs.writeFile(input, JSON.stringify([record]));
    assert.equal(run().status, 0);
    const imported = JSON.parse(await fs.readFile(output, "utf8")).records[0];
    assert.equal(imported.answer_index, 1);
    assert.equal(imported.question_en, record.question);
    assert.deepEqual(imported.choices_en, record.options);
    assert.equal(imported.source_item_id, record.source_item_id);
    await fs.unlink(output);

    await fs.writeFile(input, JSON.stringify([{ ...record, options: ["A", "", "C", "D"] }]));
    assert.notEqual(run().status, 0);
    await assert.rejects(fs.access(output));

    await fs.writeFile(input, JSON.stringify([{ ...record, source_item_id: "" }]));
    assert.notEqual(run().status, 0);
    await assert.rejects(fs.access(output));
  } finally {
    await fs.unlink(input).catch(() => {});
    await fs.unlink(output).catch(() => {});
    await fs.rmdir(directory);
  }
});
