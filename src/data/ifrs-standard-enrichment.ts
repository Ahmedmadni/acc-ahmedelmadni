import { IFRS_NAVIGATOR_URL } from "./ifrs-standards";

type LocalizedText = { ar: string; en: string };

export interface IfrsContentSource {
  key: string;
  name: string;
  url: string;
  purpose: LocalizedText;
}

/** Public learning pages cite the authoritative standards publisher. */
export const IFRS_CONTENT_SOURCES: IfrsContentSource[] = [
  {
    key: "ifrs-foundation",
    name: "IFRS Foundation",
    url: IFRS_NAVIGATOR_URL,
    purpose: {
      ar: "الناشر الرسمي لمعايير IFRS وIAS ومصدر التحقق من نصوصها وتحديثاتها.",
      en: "Official publisher of IFRS and IAS Standards and the source for verifying their requirements and updates.",
    },
  },
];
