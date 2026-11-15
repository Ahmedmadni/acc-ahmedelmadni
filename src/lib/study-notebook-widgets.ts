import type { NotebookObject, NotebookObjectKind, NotebookObjectTone } from "@/lib/study-notebook";

export type StudyWidgetTemplate = "sticky" | "formula" | "checklist" | "comparison" | "journal" | "taccount";

export const STUDY_WIDGET_TEMPLATES: { id: StudyWidgetTemplate; en: string; ar: string; icon: string }[] = [
  { id: "sticky", en: "Sticky note", ar: "ملاحظة لاصقة", icon: "🗒️" },
  { id: "formula", en: "Formula", ar: "معادلة", icon: "∑" },
  { id: "checklist", en: "Checklist", ar: "قائمة مراجعة", icon: "☑" },
  { id: "journal", en: "Journal entry", ar: "قيد يومية", icon: "≡" },
  { id: "taccount", en: "T-account", ar: "حساب T", icon: "T" },
  { id: "comparison", en: "Comparison", ar: "جدول مقارنة", icon: "▦" },
];

export const STUDY_WIDGET_PALETTE: Record<NotebookObjectTone, {
  background: string; border: string; text: string;
}> = {
  yellow: { background: "#fff0b8", border: "#dfc876", text: "#493b20" },
  mint: { background: "#dcf4e6", border: "#8dc6aa", text: "#214b39" },
  rose: { background: "#ffe2e5", border: "#e5a4ab", text: "#642f36" },
  blue: { background: "#e0eaff", border: "#a9bfe9", text: "#2b426d" },
};

export function createStudyWidget(template: StudyWidgetTemplate, id: string, language: "en" | "ar"): NotebookObject {
  const ar = language === "ar";
  const base: NotebookObject = {
    id, kind: template === "journal" || template === "taccount" || template === "comparison" ? "table" : template,
    x: 45, y: 130, width: 650, height: 330,
    tone: "yellow",
  };
  switch (template) {
    case "sticky":
      return { ...base, label: ar ? "اكتب ملحوظتك المهمة هنا" : "Write your key takeaway here" };
    case "formula":
      return { ...base, tone: "blue", height: 230,
        label: "PV = FV / (1 + r)ⁿ" };
    case "checklist":
      return { ...base, tone: "mint", label: ar ? "خطوات المذاكرة" : "Study checklist",
        height: 450,
        items: [
          { text: ar ? "راجع الشرح" : "Read the lesson", checked: false },
          { text: ar ? "حل 5 أسئلة" : "Solve 5 questions", checked: false },
          { text: ar ? "راجع الأخطاء" : "Review mistakes", checked: false },
        ] };
    case "journal":
      return { ...base, kind: "table", tone: "blue", label: ar ? "قيد اليومية" : "Journal entry",
        width: 680, height: 440,
        cells: [
          ar ? ["الحساب", "مدين", "دائن"] : ["Account", "Debit", "Credit"],
          ["", "", ""], ["", "", ""], ["", "", ""],
        ] };
    case "taccount":
      return { ...base, kind: "table", tone: "mint", label: ar ? "حساب T" : "T-account",
        width: 670, height: 425,
        cells: [ar ? ["مدين", "دائن"] : ["Debit", "Credit"], ["", ""], ["", ""], ["", ""]] };
    case "comparison":
      return { ...base, kind: "table", tone: "rose", label: ar ? "جدول مقارنة" : "Comparison",
        width: 680, height: 440,
        cells: [ar ? ["البند", "الحالي", "السابق"] : ["Item", "Current", "Prior"],
          ["", "", ""], ["", "", ""], ["", "", ""]] };
  }
}

export function studyWidgetSearchText(object: NotebookObject): string {
  return [object.label ?? "", ...(object.items ?? []).map(item => item.text),
    ...(object.cells ?? []).flat()].join(" ");
}

export function studyWidgetDefaultTitle(kind: NotebookObjectKind): string {
  switch (kind) {
    case "sticky": return "NOTE";
    case "formula": return "FORMULA";
    case "checklist": return "CHECKLIST";
    case "table": return "TABLE";
    default: return "";
  }
}
