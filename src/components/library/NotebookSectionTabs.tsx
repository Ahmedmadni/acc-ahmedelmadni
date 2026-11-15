import {
  BookOpenText, PenLine, Shapes, FileText, Files, FileDown,
} from "lucide-react";
import type { Lang } from "@/lib/i18n";

export type NotebookSection = "write" | "draw" | "insert" | "paper" | "pages" | "export";

/** One navigation surface instead of eight drawing buttons, four separate
 * insert accordions, page actions and export buttons all competing for space. */
export const NOTEBOOK_SECTIONS = [
  { id: "write", ar: "كتابة", en: "Write", Icon: BookOpenText },
  { id: "draw", ar: "رسم", en: "Draw", Icon: PenLine },
  { id: "insert", ar: "إدراج", en: "Insert", Icon: Shapes },
  { id: "paper", ar: "الورق", en: "Paper", Icon: FileText },
  { id: "pages", ar: "الصفحات", en: "Pages", Icon: Files },
  { id: "export", ar: "الحفظ", en: "Export", Icon: FileDown },
] as const;

export const DRAW_TOOLS = [
  "pen", "highlighter", "eraser", "line", "rectangle", "ellipse", "select",
] as const;

export function NotebookSectionTabs({
  section, lang, onChange,
}: {
  section: NotebookSection;
  lang: Lang;
  onChange: (next: NotebookSection) => void;
}) {
  return (
    <nav aria-label={lang === "ar" ? "أقسام أدوات الدفتر" : "Notebook tool sections"}
      data-notebook-section-nav
      className="mt-2 grid grid-cols-3 gap-1.5 rounded-xl border border-[#c9bba8] bg-[#eae0d3] p-1.5">
      {NOTEBOOK_SECTIONS.map(({ id, ar, en, Icon }) => {
        const active = section === id;
        return (
          <button key={id} type="button" onClick={() => onChange(id)}
            aria-pressed={active} aria-controls={`notebook-section-${id}`}
            className={`flex min-h-12 min-w-0 items-center justify-center gap-1.5 rounded-lg px-2 py-2 text-xs font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 ${active
              ? "bg-[#283b4d] text-white shadow-sm" : "bg-white/65 text-[#665747] hover:bg-white"}`}>
            <Icon className="size-4 shrink-0" aria-hidden="true" />
            <span>{lang === "ar" ? ar : en}</span>
          </button>
        );
      })}
    </nav>
  );
}
