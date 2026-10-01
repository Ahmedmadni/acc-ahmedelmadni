import type { AccountingStandard } from "./ifrs-standards";

type LocalizedText = { ar: string; en: string };

export interface IfrsContentSource {
  key: string;
  name: string;
  url: string;
  revision: string;
  license: string;
  usage: "paraphrased_with_attribution" | "structural_reference_only";
  purpose: LocalizedText;
}

export const IFRS_CONTENT_SOURCES: IfrsContentSource[] = [
  {
    key: "ramyatrouny-ifrs-skill",
    name: "ramyatrouny/ifrs-skill",
    url: "https://github.com/ramyatrouny/ifrs-skill",
    revision: "fda78bbc4080790ae9cf5d1fe47b931c1610e44e",
    license: "MIT",
    usage: "paraphrased_with_attribution",
    purpose: {
      ar: "مرجع فني للشروحات ومسارات التطبيق وقوائم الإفصاح والأمثلة والقيود، مع إعادة الصياغة والتحقق قبل النشر.",
      en: "Technical reference for explanations, workflows, disclosure checklists, examples and entries, paraphrased and reviewed before publication.",
    },
  },
  {
    key: "api-evangelist-accounting-standards",
    name: "api-evangelist/accounting-standards",
    url: "https://github.com/api-evangelist/accounting-standards",
    revision: "def62d16a4a9d9ca9d29c521530cf734e0c6c8d9",
    license: "No repository-wide licence detected",
    usage: "structural_reference_only",
    purpose: {
      ar: "مرجع لبنية JSON Schema والبيانات القابلة للقراءة الآلية؛ محتواه US GAAP وليس مرجعًا لمتطلبات IFRS.",
      en: "Reference for JSON Schema and machine-readable data patterns; its US GAAP content is not an IFRS requirements source.",
    },
  },
  {
    key: "charles-hoffman-fac-ifrs",
    name: "CharlesHoffmanCPA/fac-ifrs",
    url: "https://github.com/CharlesHoffmanCPA/fac-ifrs",
    revision: "014a900f19291b242b982202cbec71ea6a965e93",
    license: "GPL-3.0",
    usage: "structural_reference_only",
    purpose: {
      ar: "مرجع لبنية علاقات المفاهيم والتصنيفات وفحوص اتساق التقارير.",
      en: "Structural reference for concept relations, taxonomies and report-consistency checks.",
    },
  },
  {
    key: "ifrs-connect-public",
    name: "adamjabenn-prog/ifrsconnect-public",
    url: "https://github.com/adamjabenn-prog/ifrsconnect-public",
    revision: "a7fa9cca0a377040c1a737b7d4e143c7770b3531",
    license: "Public product documentation; calculation engine proprietary",
    usage: "structural_reference_only",
    purpose: {
      ar: "مرجع لبنية مدخلات ومخرجات وجداول عمل IFRS 16.",
      en: "Structural reference for IFRS 16 inputs, outputs and working-paper design.",
    },
  },
  {
    key: "systemorph-ifrs17-engine",
    name: "Systemorph/IFRS17CalculationEngine",
    url: "https://github.com/Systemorph/IFRS17CalculationEngine",
    revision: "6014e05e59a1e7ff74886c3ffe27137247db44d6",
    license: "MIT within ifrs17-template; no repository-wide licence detected",
    usage: "structural_reference_only",
    purpose: {
      ar: "مرجع بنيوي لنماذج التدفقات والقيمة الحالية ومكونات قياس IFRS 17.",
      en: "Structural reference for IFRS 17 cash-flow, present-value and measurement-component models.",
    },
  },
];

export function getStandardSourceKeys(standard: AccountingStandard) {
  const sourceKeys = [
    "ramyatrouny-ifrs-skill",
    "api-evangelist-accounting-standards",
    "charles-hoffman-fac-ifrs",
  ];
  if (standard.code === "IFRS 16") sourceKeys.push("ifrs-connect-public");
  if (standard.code === "IFRS 17") sourceKeys.push("systemorph-ifrs17-engine");
  return sourceKeys;
}
