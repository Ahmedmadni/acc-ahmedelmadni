import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import ts from "typescript";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const modules = new Map();

function loadTs(file) {
  const filepath = path.resolve(root, file);
  if (modules.has(filepath)) return modules.get(filepath).exports;
  const source = fs.readFileSync(filepath, "utf8");
  const code = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
    fileName: filepath,
  }).outputText;
  const module = { exports: {} };
  modules.set(filepath, module);
  vm.runInNewContext(code, {
    module,
    exports: module.exports,
    URLSearchParams,
    require: (specifier) => {
      if (specifier === "@/lib/cma-translation.shared") {
        return loadTs("src/lib/cma-translation.shared.ts");
      }
      throw new Error(`Unexpected import: ${specifier}`);
    },
  }, { filename: filepath });
  return module.exports;
}

const {
  translateCmaOnDevice,
  getCmaExternalTranslation,
} = loadTs("src/lib/cma-translation.browser.ts");

const source = {
  question: { en: "Revenue is 120, and cost is 30. What is the margin?" },
  choices: { en: ["25%", "50%", "75%", "Ignore costs"] },
  explanation: { en: "Net margin is (120 - 30) / 120 = 75%." },
};

function fakeTranslator({ badNumbers = false } = {}) {
  let destroyed = false;
  const strings = {
    [source.question.en]: badNumbers
      ? "الإيراد 140 والتكلفة 30. ما الهامش؟"
      : "الإيراد 120 والتكلفة 30. ما الهامش؟",
    "Ignore costs": "تجاهل التكاليف",
    [source.explanation.en]: "صافي الهامش (120 - 30) / 120 = 75%.",
  };
  return {
    factory: {
      async availability() { return "available"; },
      async create() {
        return {
          async translate(text) {
            if (!(text in strings)) throw new Error("Unexpected source string");
            return strings[text];
          },
          destroy() { destroyed = true; },
        };
      },
    },
    wasDestroyed: () => destroyed,
  };
}

test("device translation retains choices and numeric values, and releases the model", async () => {
  const mock = fakeTranslator();
  const translated = await translateCmaOnDevice(source, mock.factory);
  assert.equal(translated.choices.length, source.choices.en.length);
  assert.equal(translated.choices[2], source.choices.en[2]);
  assert.equal(translated.choices[3], "تجاهل التكاليف");
  assert.equal(translated.status, "machine");
  assert.ok(translated.sourceHash.startsWith("v1-"));
  assert.equal(mock.wasDestroyed(), true);
});

test("a changed number is rejected before persisting a machine translation", async () => {
  const mock = fakeTranslator({ badNumbers: true });
  await assert.rejects(() => translateCmaOnDevice(source, mock.factory), /الأرقام/);
  assert.equal(mock.wasDestroyed(), true);
});

test("external translation hides the answer explanation until user reveals it", () => {
  const first = getCmaExternalTranslation(source, false);
  assert.ok(first.url.startsWith("https://translate.google.com/"));
  assert.equal(first.copyText.includes("Net margin is"), false);
  const revealed = getCmaExternalTranslation(source, true);
  assert.equal(revealed.copyText.includes("Net margin is"), true);
  assert.equal(revealed.needsPaste, false);
});

test("long questions use safe copy-and-paste fallback without truncating content", () => {
  const longQuestion = {
    ...source,
    question: { en: "Accounting scenario. ".repeat(140) },
  };
  const external = getCmaExternalTranslation(longQuestion, false);
  assert.equal(external.needsPaste, true);
  assert.equal(external.url.includes("text="), false);
  assert.equal(external.copyText.includes("Accounting scenario."), true);
});

test("the CMA translation UI does not call the paid API or require Supabase", () => {
  const component = fs.readFileSync(path.resolve(root, "src/components/library/CmaTranslatedQuestion.tsx"), "utf8");
  assert.doesNotMatch(component, /from\\s*["\x27]@\\/integrations\\/supabase|\\bsupabase\\s*\\.|\\/api\\/cma-translate|LOVABLE_API_KEY|fetch\\s*\\(/i);
});
