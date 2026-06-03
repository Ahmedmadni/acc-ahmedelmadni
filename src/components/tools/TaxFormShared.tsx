import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Download, FileSpreadsheet, Sparkles, Save, Info, ExternalLink, Loader2 } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { fmtMoney } from "@/lib/finance";
import { exportToolReportPdf } from "@/lib/pdf-export";
import { exportDeclarationExcel } from "@/lib/tax/excel-export";
import { explainCalculationFn, saveDeclarationFn } from "@/lib/tax/declarations.functions";
import { supabase } from "@/integrations/supabase/client";

const inputCls =
  "w-full rounded-lg border border-[#d7aa52]/25 bg-white/[0.03] px-3 py-2 text-sm text-[var(--fg)] outline-none transition focus:border-[#d7aa52]/70 focus:ring-2 focus:ring-[#d7aa52]/20";
const lbl = "mb-1 flex items-center gap-1.5 text-xs font-bold text-[#f3d28a]";

export interface FieldDef {
  key: string;
  ar: string;
  en: string;
  helpAr: string;
  helpEn: string;
  min?: number;
  max?: number;
}

export function NumberField({
  field,
  value,
  onChange,
  lang,
  error,
}: {
  field: FieldDef;
  value: number;
  onChange: (v: number) => void;
  lang: Lang;
  error?: string;
}) {
  return (
    <div>
      <label className={lbl}>
        <span>{lang === "ar" ? field.ar : field.en}</span>
        <span className="group relative inline-flex">
          <Info className="size-3.5 text-[#d7aa52]/70" />
          <span className="pointer-events-none absolute start-5 top-0 z-30 hidden w-56 rounded-md border border-[#d7aa52]/40 bg-[#04101f] p-2 text-[11px] font-normal leading-relaxed text-white/90 shadow-lg group-hover:block">
            {lang === "ar" ? field.helpAr : field.helpEn}
          </span>
        </span>
      </label>
      <input
        type="number"
        className={inputCls}
        value={Number.isFinite(value) ? value : 0}
        min={field.min}
        max={field.max}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      {error ? <p className="mt-1 text-xs text-red-300">{error}</p> : null}
    </div>
  );
}

export function ActionsBar({
  lang,
  onPdf,
  onExcel,
  onSave,
  onExplain,
  saving,
  explaining,
  isAuthed,
  refLinks,
}: {
  lang: Lang;
  onPdf: () => void;
  onExcel: () => void;
  onSave: () => void;
  onExplain: () => void;
  saving: boolean;
  explaining: boolean;
  isAuthed: boolean;
  refLinks: { ar: string; en: string; url: string }[];
}) {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={onPdf}
          className="inline-flex items-center gap-1.5 rounded-full border border-[#d7aa52] bg-gradient-to-br from-[#f3d28a] to-[#b8862e] px-3 py-1.5 text-xs font-bold text-[#04101f] hover:opacity-95"
        >
          <Download className="size-3.5" />
          {lang === "ar" ? "تحميل PDF" : "Download PDF"}
        </button>
        <button
          onClick={onExcel}
          className="inline-flex items-center gap-1.5 rounded-full border border-[#d7aa52]/40 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-[#f3d28a] hover:bg-[#d7aa52]/10"
        >
          <FileSpreadsheet className="size-3.5" />
          {lang === "ar" ? "تصدير Excel" : "Export Excel"}
        </button>
        <button
          onClick={onExplain}
          disabled={explaining}
          className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold text-emerald-200 hover:bg-emerald-400/20 disabled:opacity-60"
        >
          {explaining ? <Loader2 className="size-3.5 animate-spin" /> : <Sparkles className="size-3.5" />}
          {lang === "ar" ? "اشرح بالذكاء الاصطناعي" : "AI Explanation"}
        </button>
        {isAuthed && (
          <button
            onClick={onSave}
            disabled={saving}
            className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/40 bg-sky-400/10 px-3 py-1.5 text-xs font-bold text-sky-200 hover:bg-sky-400/20 disabled:opacity-60"
          >
            {saving ? <Loader2 className="size-3.5 animate-spin" /> : <Save className="size-3.5" />}
            {lang === "ar" ? "حفظ في الأرشيف" : "Save to archive"}
          </button>
        )}
      </div>
      {refLinks.length > 0 && (
        <div className="rounded-lg border border-[#d7aa52]/20 bg-white/[0.03] p-2.5">
          <p className="mb-1.5 text-[11px] font-bold text-[#f3d28a]">
            {lang === "ar" ? "المراجع الرسمية:" : "Official references:"}
          </p>
          <ul className="space-y-1">
            {refLinks.map((r) => (
              <li key={r.url}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[var(--fg-soft)] hover:text-[#f3d28a]"
                >
                  <ExternalLink className="size-3" />
                  {lang === "ar" ? r.ar : r.en}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function useDeclarationActions(opts: {
  type: "vat" | "zakat";
  lang: Lang;
  titleAr: string;
  titleEn: string;
  pdfTitle: { ar: string; en: string };
  inputs: Record<string, number>;
  results: Record<string, number>;
  fields: FieldDef[];
  resultFields: FieldDef[];
}) {
  const [period, setPeriod] = useState("");
  const [explanation, setExplanation] = useState<string | null>(null);
  const [explaining, setExplaining] = useState(false);
  const [saving, setSaving] = useState(false);
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setIsAuthed(!!data.user));
  }, []);

  const explainFn = useServerFn(explainCalculationFn);
  const saveFn = useServerFn(saveDeclarationFn);

  const onPdf = async () => {
    try {
      await exportToolReportPdf({
        elementId: "tool-report-capture",
        title: opts.pdfTitle,
        lang: opts.lang,
      });
    } catch (e) {
      toast.error((e as Error).message);
    }
  };

  const onExcel = () => {
    exportDeclarationExcel({
      fileName: `${opts.type}-${period || new Date().toISOString().slice(0, 10)}`,
      titleAr: opts.titleAr,
      titleEn: opts.titleEn,
      periodLabel: period || "—",
      inputs: opts.fields.map((f) => ({ labelAr: f.ar, labelEn: f.en, value: opts.inputs[f.key] ?? 0 })),
      results: opts.resultFields.map((f) => ({ labelAr: f.ar, labelEn: f.en, value: opts.results[f.key] ?? 0 })),
    });
  };

  const onExplain = async () => {
    setExplaining(true);
    setExplanation(null);
    try {
      const r = await explainFn({
        data: { type: opts.type, lang: opts.lang, input_data: opts.inputs, result_data: opts.results },
      });
      setExplanation(r.explanation);
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      setExplaining(false);
    }
  };

  const onSave = async () => {
    if (!period.trim()) {
      toast.error(opts.lang === "ar" ? "أدخل اسم الفترة أولاً" : "Enter a period label first");
      return;
    }
    setSaving(true);
    try {
      await saveFn({
        data: {
          type: opts.type,
          period_label: period.trim(),
          input_data: opts.inputs,
          result_data: opts.results,
        },
      });
      toast.success(opts.lang === "ar" ? "تم الحفظ في الأرشيف" : "Saved to archive");
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      setSaving(false);
    }
  };

  return { period, setPeriod, isAuthed, explanation, explaining, saving, onPdf, onExcel, onExplain, onSave };
}

export function PeriodField({ value, onChange, lang }: { value: string; onChange: (v: string) => void; lang: Lang }) {
  return (
    <div>
      <label className={lbl}>{lang === "ar" ? "الفترة (مثل: Q1-2026)" : "Period (e.g. Q1-2026)"}</label>
      <input className={inputCls} value={value} onChange={(e) => onChange(e.target.value)} placeholder={lang === "ar" ? "Q1-2026" : "Q1-2026"} />
    </div>
  );
}

export function ResultCard({ titleAr, titleEn, value, lang, highlight }: { titleAr: string; titleEn: string; value: number; lang: Lang; highlight?: boolean }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  return (
    <div
      className={`rounded-xl border p-4 ${
        highlight
          ? "border-[#f3d28a] bg-gradient-to-br from-[#d7aa52]/25 to-transparent"
          : "border-[#d7aa52]/25 bg-gradient-to-br from-[#d7aa52]/10 to-transparent"
      }`}
    >
      <div className="text-[11px] font-semibold uppercase tracking-wide text-[#f3d28a]/80">
        {lang === "ar" ? titleAr : titleEn}
      </div>
      <div className={`mt-1 tabular-nums text-[var(--fg)] ${highlight ? "text-3xl font-black" : "text-xl font-extrabold"}`}>
        {fmtMoney(value, "SAR", locale)}
      </div>
    </div>
  );
}

export function ExplanationPanel({ text, lang }: { text: string | null; lang: Lang }) {
  if (!text) return null;
  return (
    <div className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-400/5 p-4">
      <h4 className="mb-2 inline-flex items-center gap-2 text-sm font-extrabold text-emerald-200">
        <Sparkles className="size-4" />
        {lang === "ar" ? "شرح الذكاء الاصطناعي" : "AI Explanation"}
      </h4>
      <div className="whitespace-pre-wrap text-sm leading-relaxed text-[var(--fg-soft)]">{text}</div>
    </div>
  );
}
