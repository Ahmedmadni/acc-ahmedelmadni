import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import {
  BookOpenText, Check, ChevronLeft, ChevronRight, Download, Eraser, FilePlus2, Upload,
  NotebookPen, PenLine, RotateCcw, ScanText,
  Settings2, Trash2, Type, X,
} from "lucide-react";
import type { Lang } from "@/lib/i18n";
import type { StudySection } from "@/lib/library-study-language";
import {
  createNotebookPage, emptyNotebook, MAX_INK_POINTS, MAX_INK_STROKES,
  MAX_NOTE_TEXT_LENGTH, MAX_NOTEBOOK_PAGES, NOTEBOOK_DESIGN_WIDTH,
  NOTEBOOK_SIZES, NOTEBOOK_STORAGE_KEY, normalizeNotebook,
  notebookPaperBackground, pageStrokePath, nearestInkStrokeIndex, validateNotebookBackup,
  type InkPoint, type NotebookPage, type NotebookStore, type NotebookStroke,
  type NotebookTool, type PaperPattern, type PaperShade, type PaperSize,
} from "@/lib/study-notebook";
import { recognizeNotebookInk, supportsLocalHandwritingRecognition } from "@/lib/study-notebook-recognition";

type NotebookStrings = { ar: string; en: string };
const LABELS = {
  name: { ar: "دفتر المذاكرة", en: "Study Notebook" },
  subtitle: { ar: "ملاحظات محفوظة على جهازك", en: "Private notes on this device" },
  type: { ar: "كتابة", en: "Type" },
  pen: { ar: "قلم", en: "Pen" },
  eraser: { ar: "ممحاة", en: "Eraser" },
  page: { ar: "صفحة", en: "Page" },
  add: { ar: "صفحة جديدة", en: "New page" },
  title: { ar: "عنوان الصفحة", en: "Page title" },
  paper: { ar: "نوع الورقة", en: "Paper" },
  shade: { ar: "الخامة", en: "Texture" },
  size: { ar: "الحجم", en: "Size" },
  spacing: { ar: "تباعد السطور", en: "Line spacing" },
  ink: { ar: "لون القلم", en: "Ink color" },
  width: { ar: "سمك القلم", en: "Pen width" },
  neat: { ar: "خط يد احترافي", en: "Handwritten font" },
  regular: { ar: "خط عادي", en: "Regular font" },
  recognize: { ar: "التعرف على الكتابة", en: "Recognize ink" },
  recognizeOff: {
    ar: "التعرف التلقائي غير مدعوم في هذا المتصفح أو الجهاز. الرسم وتنعيم الخط يعملان دون إنترنت.",
    en: "This browser/device does not support handwriting recognition. Drawing and smoothing still work offline.",
  },
  recognizeDisclaimer: {
    ar: "التحويل يتم على جهازك فقط. راجع النص وعدله قبل استبدال الحبر؛ دعم اللغة العربية يختلف حسب الجهاز.",
    en: "Recognition runs on-device. Check or edit the text before replacing your ink; language support varies by device.",
  },
  apply: { ar: "اعتماد النص واستبدال الحبر", en: "Use text and replace ink" },
  cancel: { ar: "إلغاء", en: "Cancel" },
  undo: { ar: "تراجع عن آخر خط", en: "Undo last stroke" },
  delete: { ar: "حذف الصفحة", en: "Delete page" },
  export: { ar: "نسخة احتياطية JSON", en: "Backup JSON" },
  textExport: { ar: "تصدير نص الصفحة", en: "Export page text" },
  unsaved: { ar: "التخزين المحلي ممتلئ؛ صدّر نسخة احتياطية!", en: "Device storage is full. Export a backup!" },
  saved: { ar: "حفظ تلقائي", en: "Autosaved" },
  writingLanguage: { ar: "اتجاه الكتابة", en: "Writing direction" },
  menu: { ar: "إعدادات الورق", en: "Paper settings" },
  close: { ar: "إغلاق الدفتر", en: "Close notebook" },
  open: { ar: "فتح الدفتر", en: "Open notebook" },
} satisfies Record<string, NotebookStrings>;

const PAPER_STYLES: Record<PaperPattern, NotebookStrings> = {
  ruled: { ar: "مسطر", en: "Ruled" },
  grid: { ar: "مربعات", en: "Graph" },
  dots: { ar: "منقط", en: "Dotted" },
  blank: { ar: "سادة", en: "Blank" },
};
const PAPER_SHADES: Record<PaperShade, NotebookStrings> = {
  white: { ar: "أبيض ناعم", en: "White" },
  ivory: { ar: "عاجي", en: "Ivory" },
  cream: { ar: "ورق دافئ", en: "Warm paper" },
  blue: { ar: "أزرق باهت", en: "Pale blue" },
};
const INK_COLORS = ["#24334a", "#151515", "#663c27", "#1e7666", "#993841"];
const narrowControl = "min-h-9 w-full rounded-lg border border-[#c9bba8] bg-white px-2 text-xs font-semibold text-[#40382F]";
function newId() {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID() : `page-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
function download(name: string, text: string, mime = "application/json") {
  const url = URL.createObjectURL(new Blob([text], { type: `${mime};charset=utf-8` }));
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = name;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function NotebookPaper({
  page, tool, inkColor, inkWidth, onChange, lang,
}: {
  page: NotebookPage;
  tool: NotebookTool;
  inkColor: string;
  inkWidth: number;
  onChange: (change: Partial<NotebookPage>) => void;
  lang: Lang;
}) {
  const drawing = useRef<NotebookStroke | null>(null);
  const startTime = useRef(0);
  const activeEraser = useRef<number | null>(null);
  const strokeBuffer = useRef<NotebookStroke[]>(page.strokes);
  strokeBuffer.current = page.strokes;
  const sheet = useRef<HTMLDivElement | null>(null);
  const [preview, setPreview] = useState<NotebookStroke | null>(null);
  const [width, setWidth] = useState(330);
  const [recognizing, setRecognizing] = useState(false);
  const [recognized, setRecognized] = useState<string[] | null>(null);
  const [recognizedText, setRecognizedText] = useState("");
  const [recognitionError, setRecognitionError] = useState("");
  const [recognitionReady, setRecognitionReady] = useState(false);
  const height = NOTEBOOK_SIZES[page.size].height;

  useEffect(() => {
    setPreview(null);
    drawing.current = null;
    activeEraser.current = null;
    startTime.current = 0;
    strokeBuffer.current = page.strokes;
    setRecognized(null);
    setRecognizedText("");
    setRecognitionError("");
  }, [page.id]);

  useEffect(() => {
    setRecognitionReady(supportsLocalHandwritingRecognition());
  }, []);

  useEffect(() => {
    if (!sheet.current || typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(([entry]) => {
      if (entry?.contentRect.width) setWidth(entry.contentRect.width);
    });
    observer.observe(sheet.current);
    return () => observer.disconnect();
  }, [page.size]);

  const scale = width / NOTEBOOK_DESIGN_WIDTH;
  const lineGap = page.spacing * scale;
  const margin = 43 * scale;
  const paper = notebookPaperBackground(page.pattern, page.shade, lineGap);
  const bgStyle: CSSProperties = {
    ...paper,
    aspectRatio: `${NOTEBOOK_DESIGN_WIDTH} / ${height}`,
    width: NOTEBOOK_SIZES[page.size].maxWidth,
  };

  function toPoint(e: PointerEvent<SVGSVGElement>): InkPoint {
    const rect = e.currentTarget.getBoundingClientRect();
    return {
      x: Math.max(0, Math.min(NOTEBOOK_DESIGN_WIDTH, (e.clientX - rect.left) / rect.width * NOTEBOOK_DESIGN_WIDTH)),
      y: Math.max(0, Math.min(height, (e.clientY - rect.top) / rect.height * height)),
      pressure: e.pressure > 0 ? e.pressure : .5,
      t: Math.max(0, e.timeStamp - startTime.current),
    };
  }

  function pointerDown(e: PointerEvent<SVGSVGElement>) {
    if (tool === "type" || (e.pointerType === "mouse" && e.button !== 0)) return;
    if (tool === "pen" && page.strokes.length >= MAX_INK_STROKES) return;
    if (!startTime.current) startTime.current = e.timeStamp;
    const point = toPoint(e);
    if (tool === "eraser") {
      activeEraser.current = e.pointerId;
      e.currentTarget.setPointerCapture(e.pointerId);
      eraseAt(point);
      e.preventDefault();
      return;
    }
    const stroke: NotebookStroke = {
      id: newId(), color: inkColor, width: inkWidth, points: [point],
    };
    drawing.current = stroke;
    setPreview({ ...stroke, points: [...stroke.points] });
    e.currentTarget.setPointerCapture(e.pointerId);
    e.preventDefault();
  }

  function eraseAt(point: InkPoint) {
    const index = nearestInkStrokeIndex(strokeBuffer.current, point.x, point.y, 25);
    if (index < 0) return;
    const next = strokeBuffer.current.filter((_, i) => i !== index);
    strokeBuffer.current = next;
    onChange({ strokes: next });
  }

  function pointerMove(e: PointerEvent<SVGSVGElement>) {
    if (tool === "eraser" && activeEraser.current === e.pointerId) {
      eraseAt(toPoint(e));
      e.preventDefault();
      return;
    }
    const active = drawing.current;
    if (!active || tool !== "pen" || !e.currentTarget.hasPointerCapture(e.pointerId)) return;
    const samples = e.nativeEvent.getCoalescedEvents?.() ?? [e.nativeEvent];
    const rect = e.currentTarget.getBoundingClientRect();
    for (const sample of samples) {
      if (active.points.length >= MAX_INK_POINTS) break;
      active.points.push({
        x: Math.max(0, Math.min(NOTEBOOK_DESIGN_WIDTH, (sample.clientX - rect.left) / rect.width * NOTEBOOK_DESIGN_WIDTH)),
        y: Math.max(0, Math.min(height, (sample.clientY - rect.top) / rect.height * height)),
        pressure: sample.pressure > 0 ? sample.pressure : .5,
        t: Math.max(0, sample.timeStamp - startTime.current),
      });
    }
    setPreview({ ...active, points: [...active.points] });
    e.preventDefault();
  }

  function pointerEnd(e: PointerEvent<SVGSVGElement>) {
    if (activeEraser.current === e.pointerId) {
      activeEraser.current = null;
      if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
      return;
    }
    const active = drawing.current;
    if (!active) return;
    if (active.points.length < MAX_INK_POINTS) active.points.push(toPoint(e));
    onChange({ strokes: [...page.strokes, { ...active, points: [...active.points] }] });
    drawing.current = null;
    setPreview(null);
    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
  }

  async function recognize() {
    if (!recognitionReady || !page.strokes.length || recognizing) return;
    setRecognitionError("");
    setRecognizing(true);
    try {
      const choices = await recognizeNotebookInk(page.strokes, page.direction);
      if (!choices.length) throw new Error(lang === "ar" ? "لم يتم التعرف على أي كلمات." : "No words could be recognized.");
      setRecognized(choices);
      setRecognizedText(choices[0]);
    } catch (error) {
      setRecognitionError(error instanceof Error ? error.message : String(error));
    } finally {
      setRecognizing(false);
    }
  }

  function acceptRecognition() {
    if (!recognizedText.trim()) return;
    onChange({
      text: [page.text.trimEnd(), recognizedText.trim()].filter(Boolean).join("\n"),
      strokes: [],
    });
    setRecognized(null);
    setRecognizedText("");
  }

  return (
    <div className="space-y-2">
      <div
        ref={sheet}
        className="study-notebook-paper relative mx-auto overflow-hidden rounded-md border border-black/10 shadow-[0_9px_27px_rgba(55,46,30,.14)]"
        style={bgStyle}
      >
        {page.pattern !== "blank" && (
          <div className="pointer-events-none absolute inset-y-0 z-[1] w-px bg-rose-400/30" style={{ insetInlineStart: margin }} />
        )}
        <textarea
          aria-label={lang === "ar" ? "كتابة الملاحظات" : "Notebook typing area"}
          spellCheck
          dir={page.direction}
          lang={page.direction === "rtl" ? "ar" : "en"}
          maxLength={MAX_NOTE_TEXT_LENGTH}
          value={page.text}
          onChange={(e) => onChange({ text: e.target.value })}
          placeholder={tool === "type" ? (lang === "ar" ? "اكتب ملاحظاتك هنا..." : "Start writing notes here...") : undefined}
          className="absolute inset-0 z-[2] h-full w-full resize-none border-0 bg-transparent text-[#25272c] outline-none placeholder:opacity-40"
          style={{
            fontFamily: page.typeface === "handwritten"
              ? page.direction === "rtl" ? '"Aref Ruqaa Ink","Aref Ruqaa",serif' : '"Caveat","Comic Sans MS",cursive'
              : page.direction === "rtl" ? '"Cairo",sans-serif' : 'Georgia,serif',
            fontSize: `${Math.max(12, lineGap * (page.direction === "rtl" ? .74 : .87))}px`,
            lineHeight: `${lineGap}px`,
            padding: `0 ${margin + 5}px`,
            pointerEvents: tool === "type" ? "auto" : "none",
            overflowY: "auto",
            backgroundAttachment: "local",
          }}
        />
        <svg
          className="absolute inset-0 z-[3] h-full w-full"
          viewBox={`0 0 ${NOTEBOOK_DESIGN_WIDTH} ${height}`}
          preserveAspectRatio="none"
          aria-label={lang === "ar" ? "منطقة رسم بالقلم أو اللمس" : "Pen and touch writing surface"}
          style={{ pointerEvents: tool === "type" ? "none" : "auto", touchAction: tool === "type" ? "auto" : "none", cursor: tool === "eraser" ? "cell" : "crosshair" }}
          onPointerDown={pointerDown}
          onPointerMove={pointerMove}
          onPointerUp={pointerEnd}
          onPointerCancel={pointerEnd}
        >
          {[...page.strokes, ...(preview ? [preview] : [])].map((stroke) => (
            <path
              key={stroke.id}
              d={pageStrokePath(stroke.points)}
              fill="none"
              stroke={stroke.color}
              strokeWidth={stroke.width * (0.8 + .4 * (stroke.points.reduce((sum, p) => sum + p.pressure, 0) / stroke.points.length))}
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity=".95"
            />
          ))}
        </svg>
      </div>
      <p className="text-center text-[11px] leading-5 text-[#786f63]">
        {lang === "ar"
          ? `المسافات بين سطور الورقة والكتابة: ${page.spacing} وحدة متطابقة · تنعيم تلقائي لخطوط القلم`
          : `Matching text / paper line spacing: ${page.spacing} units · strokes automatically smoothed`}
      </p>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => onChange({ strokes: page.strokes.slice(0, -1) })}
          disabled={!page.strokes.length}
          className="inline-flex items-center gap-1 rounded-lg border border-[#c9bba8] bg-white px-3 py-2 text-xs font-semibold disabled:opacity-40"
        >
          <RotateCcw className="size-3.5" /> {LABELS.undo[lang]}
        </button>
        <button
          type="button"
          onClick={() => void recognize()}
          disabled={!recognitionReady || !page.strokes.length || recognizing}
          title={!recognitionReady ? LABELS.recognizeOff[lang] : undefined}
          className="inline-flex items-center gap-1 rounded-lg bg-[#283b4d] px-3 py-2 text-xs font-semibold text-white disabled:opacity-45"
        >
          <ScanText className="size-3.5" /> {recognizing ? "…" : LABELS.recognize[lang]}
        </button>
      </div>
      {!recognitionReady && <p className="text-xs leading-6 text-[#806b54]">{LABELS.recognizeOff[lang]}</p>}
      {recognitionError && <p role="alert" className="rounded-lg bg-red-50 p-2 text-xs text-red-800">{recognitionError}</p>}
      {recognized && (
        <div className="space-y-2 rounded-xl border border-emerald-200 bg-emerald-50 p-3">
          <p className="text-xs leading-6 text-[#285C44]">{LABELS.recognizeDisclaimer[lang]}</p>
          {recognized.length > 1 && (
            <select value={recognized.includes(recognizedText) ? recognizedText : ""} onChange={(e) => setRecognizedText(e.target.value)} className={narrowControl}>
              <option value="">{lang === "ar" ? "تعديل يدوي" : "Manually edited"}</option>
              {recognized.map((item, i) => <option key={i} value={item}>{item.slice(0, 70)}</option>)}
            </select>
          )}
          <textarea rows={3} spellCheck value={recognizedText} dir={page.direction}
            onChange={(e) => setRecognizedText(e.target.value)}
            aria-label={lang === "ar" ? "راجع الكتابة التي تم التعرف عليها" : "Review recognized text"}
            className="w-full rounded-lg border border-emerald-200 bg-white p-2 text-sm text-[#212c25]" />
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={acceptRecognition} disabled={!recognizedText.trim()} className="inline-flex items-center gap-1 rounded-lg bg-emerald-800 px-3 py-2 text-xs font-semibold text-white disabled:opacity-50">
              <Check className="size-3.5" /> {LABELS.apply[lang]}
            </button>
            <button type="button" onClick={() => setRecognized(null)} className="rounded-lg border border-emerald-200 bg-white px-3 py-2 text-xs">{LABELS.cancel[lang]}</button>
          </div>
        </div>
      )}
    </div>
  );
}

export function StudyNotebook({ section, lang, desktopOpen, onDesktopOpenChange }: {
  section: StudySection;
  lang: Lang;
  desktopOpen: boolean;
  onDesktopOpenChange: (open: boolean) => void;
}) {
  const [store, setStore] = useState<NotebookStore>(emptyNotebook);
  const [hydrated, setHydrated] = useState(false);
  const [storageWritable, setStorageWritable] = useState(true);
  const latest = useRef(store);
  const [saveError, setSaveError] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tool, setTool] = useState<NotebookTool>("type");
  const [inkColor, setInkColor] = useState("#24334a");
  const [inkWidth, setInkWidth] = useState(2.9);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [restoreMessage, setRestoreMessage] = useState("");
  const backupInput = useRef<HTMLInputElement | null>(null);
  latest.current = store;
  const sectionPages = store.pages[section];
  const current = sectionPages.find((p) => p.id === store.activePage[section]) ?? sectionPages[0];

  useEffect(() => {
    try {
      const saved = localStorage.getItem(NOTEBOOK_STORAGE_KEY);
      if (saved) setStore(normalizeNotebook(JSON.parse(saved)));
    } catch {
      // Never overwrite unreadable saved notes with an empty default notebook.
      // Only a deliberate user restore or reset may resume persistence.
      setStorageWritable(false);
      setSaveError(true);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated || !storageWritable) return;
    const handle = window.setTimeout(() => {
      try {
        localStorage.setItem(NOTEBOOK_STORAGE_KEY, JSON.stringify(store));
        setSaveError(false);
      } catch { setSaveError(true); }
    }, 350);
    return () => window.clearTimeout(handle);
  }, [hydrated, store, storageWritable]);

  useEffect(() => {
    return () => {
      if (!hydrated || !storageWritable) return;
      try { localStorage.setItem(NOTEBOOK_STORAGE_KEY, JSON.stringify(latest.current)); } catch { /* export remains available */ }
    };
  }, [hydrated, storageWritable]);

  useEffect(() => {
    setMobileOpen(false);
    setTool("type");
  }, [section]);

  useEffect(() => {
    if (!mobileOpen) return;
    const priorOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const listener = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileOpen(false); };
    window.addEventListener("keydown", listener);
    return () => {
      window.removeEventListener("keydown", listener);
      document.body.style.overflow = priorOverflow;
    };
  }, [mobileOpen]);

  function updatePage(change: Partial<NotebookPage>) {
    const updatedAt = Date.now();
    setStore((prior) => ({
      ...prior,
      pages: { ...prior.pages, [section]: prior.pages[section].map((page) =>
        page.id === (prior.activePage[section] || current.id)
          ? { ...page, ...change, updatedAt } : page) },
    }));
  }

  function addPage() {
    if (sectionPages.length >= MAX_NOTEBOOK_PAGES) return;
    const id = newId();
    const fresh = createNotebookPage(id, lang === "ar" ? "rtl" : "ltr");
    Object.assign(fresh, {
      pattern: current.pattern, shade: current.shade, size: current.size,
      spacing: current.spacing, typeface: current.typeface,
    });
    setStore((prior) => ({
      ...prior,
      pages: { ...prior.pages, [section]: [...prior.pages[section], fresh] },
      activePage: { ...prior.activePage, [section]: id },
    }));
    setTool("type");
  }

  function removePage() {
    if (!window.confirm(lang === "ar" ? "هل تريد حذف هذه الصفحة ورسوماتها نهائيًا؟" : "Permanently delete this page and its ink?")) return;
    setStore((prior) => {
      const remaining = prior.pages[section].filter((page) => page.id !== current.id);
      const pages = remaining.length ? remaining : [createNotebookPage(newId())];
      return {
        ...prior, pages: { ...prior.pages, [section]: pages },
        activePage: { ...prior.activePage, [section]: pages[Math.max(0, Math.min(pages.length - 1, sectionPages.indexOf(current) - 1))].id },
      };
    });
  }

  function navigate(index: number) {
    const page = sectionPages[index];
    if (!page) return;
    setStore((prior) => ({
      ...prior, activePage: { ...prior.activePage, [section]: page.id },
    }));
    setTool("type");
  }

  function backup() {
    download("accounting-study-notebook-backup.json", JSON.stringify(store, null, 2));
    setRestoreMessage("");
  }

  async function restoreBackup(file: File) {
    if (file.size > 6_000_000) throw new Error("Backup too large (maximum 6 MB).");
    const restored = validateNotebookBackup(JSON.parse(await file.text()));
    const approved = window.confirm(lang === "ar"
      ? "سيتم استبدال جميع صفحات CMA وIFRS الحالية بمحتوى النسخة الاحتياطية. هل تريد المتابعة؟"
      : "This replaces every current CMA and IFRS notebook page with the backup. Continue?");
    if (!approved) return;
    setStore(restored);
    setStorageWritable(true);
    setRestoreMessage(lang === "ar" ? "استُعيدت الصفحات بنجاح." : "Notebook backup restored.");
    setSaveError(false);
    setMobileOpen(false);
  }

  function openNotebook() {
    if (window.matchMedia("(min-width: 1280px)").matches) {
      onDesktopOpenChange(true);
    } else {
      setMobileOpen(true);
    }
  }

  const currentIndex = sectionPages.findIndex((p) => p.id === current.id);
  

  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Aref+Ruqaa+Ink:wght@400;700&family=Caveat:wght@400;600;700&display=swap" precedence="default" />
      {!mobileOpen && (
        <button
          type="button"
          onClick={openNotebook}
          className={`fixed bottom-5 right-5 z-[65] inline-flex items-center gap-2 rounded-full bg-[#c9a986] px-4 py-3 text-sm font-bold text-[#211c18] shadow-2xl ${desktopOpen ? "xl:hidden" : "xl:flex"}`}
          aria-label={LABELS.open[lang]}
          title={LABELS.open[lang]}
        >
          <NotebookPen className="size-5" /> {LABELS.open[lang]}
        </button>
      )}
      {mobileOpen && <button type="button" onClick={() => setMobileOpen(false)} className="fixed inset-0 z-[69] bg-black/60 xl:hidden" aria-label={LABELS.close[lang]} />}
      <aside
        aria-label={LABELS.name[lang]}
        role={mobileOpen ? "dialog" : "complementary"}
        aria-modal={mobileOpen ? true : undefined}
        dir={lang === "ar" ? "rtl" : "ltr"}
        className={`fixed inset-y-0 end-0 z-[70] w-[min(95vw,430px)] flex-col overflow-hidden border-s border-[#b6a58e] bg-[#f8f5ee] text-[#302e2b] shadow-2xl xl:top-16 xl:w-[416px] ${mobileOpen ? "flex" : "hidden"} ${desktopOpen ? "xl:flex" : "xl:hidden"}`}
      >
        <header className="flex shrink-0 items-center justify-between border-b border-[#cdbfae] bg-[#f1eae0] p-3">
          <div>
            <p className="flex items-center gap-2 text-sm font-black">
              <NotebookPen className="size-4 text-[#73563c]" /> {LABELS.name[lang]}
              <span className="rounded-md bg-[#dfd2c2] px-1.5 py-0.5 text-[10px]">{section === "cma" ? "CMA" : "IFRS"}</span>
            </p>
            <p className="mt-1 text-[10px] text-[#786f63]">{saveError ? LABELS.unsaved[lang] : LABELS.subtitle[lang]}</p>
          </div>
          <button
            type="button"
            onClick={() => { setMobileOpen(false); onDesktopOpenChange(false); }}
            className="grid size-9 place-items-center rounded-lg border border-[#cdbfae] bg-white"
            aria-label={LABELS.close[lang]}
          ><X className="size-4" /></button>
        </header>

        <div className="flex-1 overflow-y-auto overscroll-contain px-3 pb-10 pt-3">
          <div className="flex items-center gap-2">
            <button type="button" title={lang === "ar" ? "الصفحة السابقة" : "Previous page"} disabled={currentIndex < 1}
              className="grid size-9 place-items-center rounded-lg border border-[#cdbfae] bg-white disabled:opacity-35"
              onClick={() => navigate(currentIndex - 1)}><ChevronLeft className="size-4 rtl:rotate-180" /></button>
            <select
              aria-label={LABELS.page[lang]}
              value={current.id}
              onChange={(e) => { const next = sectionPages.findIndex((p) => p.id === e.target.value); navigate(next); }}
              className={narrowControl}
            >
              {sectionPages.map((page, index) => (
                <option key={page.id} value={page.id}>{index + 1}. {page.title || (lang === "ar" ? "صفحة بدون عنوان" : "Untitled page")}</option>
              ))}
            </select>
            <button type="button" title={lang === "ar" ? "الصفحة التالية" : "Next page"} disabled={currentIndex >= sectionPages.length - 1}
              className="grid size-9 place-items-center rounded-lg border border-[#cdbfae] bg-white disabled:opacity-35"
              onClick={() => navigate(currentIndex + 1)}><ChevronRight className="size-4 rtl:rotate-180" /></button>
            <button type="button" title={LABELS.add[lang]} disabled={sectionPages.length >= MAX_NOTEBOOK_PAGES}
              className="grid size-9 place-items-center rounded-lg bg-[#253a4b] text-white disabled:opacity-35"
              onClick={addPage}><FilePlus2 className="size-4" /></button>
          </div>
          <input
            value={current.title}
            onChange={(e) => updatePage({ title: e.target.value.slice(0, 90) })}
            maxLength={90}
            placeholder={LABELS.title[lang]}
            aria-label={LABELS.title[lang]}
            className="mt-2 w-full border-b border-[#c9bba8] bg-transparent px-1 py-2 text-sm font-bold outline-none focus:border-[#76543F]"
          />

          <div className="mt-3 grid grid-cols-3 gap-1 rounded-xl bg-[#e8ded0] p-1" role="group" aria-label={lang === "ar" ? "أداة التدوين" : "Notebook input tool"}>
            {(["type", "pen", "eraser"] as NotebookTool[]).map((mode) => {
              const Icon = mode === "type" ? Type : mode === "pen" ? PenLine : Eraser;
              return (
                <button key={mode} type="button" aria-pressed={tool === mode} onClick={() => setTool(mode)}
                  className={`inline-flex items-center justify-center gap-1 rounded-lg px-2 py-2 text-xs font-bold transition ${tool === mode ? "bg-white text-[#253a4b] shadow-sm" : "text-[#7c705f]"}`}>
                  <Icon className="size-4" /> {LABELS[mode][lang]}
                </button>
              );
            })}
          </div>
          <button type="button" onClick={() => setSettingsOpen(!settingsOpen)}
            aria-expanded={settingsOpen}
            className="mt-3 flex w-full items-center justify-between rounded-lg border border-[#d5c8b6] bg-white/80 px-3 py-2 text-xs font-bold">
            <span className="flex items-center gap-2"><Settings2 className="size-4" /> {LABELS.menu[lang]}</span>
            <span className="text-[#806f60]">{current.size} · {PAPER_STYLES[current.pattern][lang]} · {current.spacing}</span>
          </button>

          {settingsOpen && (
            <div className="mt-2 grid grid-cols-2 gap-3 rounded-xl border border-[#d5c8b6] bg-white/70 p-3">
              <label className="text-xs font-bold">{LABELS.paper[lang]}
                <select value={current.pattern} onChange={(e) => updatePage({ pattern: e.target.value as PaperPattern })} className={narrowControl}>
                  {(Object.keys(PAPER_STYLES) as PaperPattern[]).map(key => <option key={key} value={key}>{PAPER_STYLES[key][lang]}</option>)}
                </select>
              </label>
              <label className="text-xs font-bold">{LABELS.shade[lang]}
                <select value={current.shade} onChange={(e) => updatePage({ shade: e.target.value as PaperShade })} className={narrowControl}>
                  {(Object.keys(PAPER_SHADES) as PaperShade[]).map(key => <option key={key} value={key}>{PAPER_SHADES[key][lang]}</option>)}
                </select>
              </label>
              <label className="text-xs font-bold">{LABELS.size[lang]}
                <select value={current.size} onChange={(e) => updatePage({ size: e.target.value as PaperSize })} className={narrowControl}>
                  {(["A4", "A5", "Letter"] as PaperSize[]).map(key => <option key={key} value={key}>{key}</option>)}
                </select>
              </label>
              <label className="text-xs font-bold">{LABELS.writingLanguage[lang]}
                <select value={current.direction} onChange={(e) => updatePage({ direction: e.target.value as "ltr" | "rtl" })} className={narrowControl}>
                  <option value="ltr">English · LTR</option><option value="rtl">العربية · RTL</option>
                </select>
              </label>
              <label className="col-span-2 text-xs font-bold">{LABELS.spacing[lang]}
                <span className="ms-2 text-xs font-normal">{current.spacing}</span>
                <input type="range" aria-label={LABELS.spacing[lang]} min={30} max={65} step={1}
                  value={current.spacing} onChange={(e) => updatePage({ spacing: Number(e.target.value) })}
                  className="mt-1 block w-full accent-[#76543F]" />
              </label>
              <label className="col-span-2 text-xs font-bold">{lang === "ar" ? "تنسيق الحروف" : "Lettering"}
                <select value={current.typeface} onChange={(e) => updatePage({ typeface: e.target.value as "handwritten" | "regular" })} className={narrowControl}>
                  <option value="handwritten">{LABELS.neat[lang]}</option><option value="regular">{LABELS.regular[lang]}</option>
                </select>
              </label>
            </div>
          )}

          {tool === "pen" && (
            <div className="mt-3 flex flex-wrap items-center gap-2 rounded-lg border border-[#d5c8b6] bg-white/85 px-3 py-2">
              <span className="text-xs font-bold">{LABELS.ink[lang]}</span>
              {INK_COLORS.map(color => (
                <button key={color} type="button" onClick={() => setInkColor(color)}
                  aria-label={`Ink ${color}`} aria-pressed={inkColor === color}
                  className={`size-6 rounded-full border-2 ${inkColor === color ? "border-amber-600" : "border-white"}`}
                  style={{ backgroundColor: color }} />
              ))}
              <label className="ms-auto flex items-center gap-1 text-xs">
                {LABELS.width[lang]}
                <input type="range" min={1} max={7} step={.5} value={inkWidth} onChange={e => setInkWidth(Number(e.target.value))}
                  aria-label={LABELS.width[lang]} className="w-16 accent-[#76543F]" />
              </label>
            </div>
          )}

          <div className="mt-3">
            <NotebookPaper key={current.id} page={current} tool={tool} inkColor={inkColor} inkWidth={inkWidth} lang={lang} onChange={updatePage} />
          </div>

          <div className="mt-5 flex flex-wrap gap-2 border-t border-[#d5c8b6] pt-4">
            <input ref={backupInput} type="file" accept="application/json,.json" className="sr-only"
              aria-label={lang === "ar" ? "اختيار نسخة احتياطية" : "Choose a notebook backup"}
              onChange={(event) => {
                const file = event.target.files?.[0];
                event.target.value = "";
                if (!file) return;
                setRestoreMessage("");
                void restoreBackup(file).catch((error: unknown) => {
                  setRestoreMessage(lang === "ar"
                    ? "تعذرت استعادة الملف. تأكد أنه نسخة احتياطية صحيحة من دفتر المذاكرة."
                    : error instanceof Error ? error.message : "Could not import the backup.");
                });
              }} />
            <button type="button" onClick={() => backupInput.current?.click()}
              className="inline-flex min-h-9 items-center gap-1 rounded-lg border border-[#c9bba8] bg-white px-3 py-2 text-xs font-semibold">
              <Upload className="size-3.5" /> {lang === "ar" ? "استعادة JSON" : "Restore JSON"}
            </button>
            <button type="button" onClick={backup} title={LABELS.export[lang]}
              className="inline-flex min-h-9 items-center gap-1 rounded-lg border border-[#c9bba8] bg-white px-3 py-2 text-xs font-semibold">
              <Download className="size-3.5" /> {LABELS.export[lang]}
            </button>
            <button type="button" onClick={() => download(`study-note-${section}-${currentIndex+1}.txt`, `${current.title}\n\n${current.text}`, "text/plain")}
              className="inline-flex min-h-9 items-center gap-1 rounded-lg border border-[#c9bba8] bg-white px-3 py-2 text-xs font-semibold">
              <BookOpenText className="size-3.5" /> {LABELS.textExport[lang]}
            </button>
            <button type="button" onClick={removePage}
              className="inline-flex min-h-9 items-center gap-1 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-700">
              <Trash2 className="size-3.5" /> {LABELS.delete[lang]}
            </button>
          </div>
          {restoreMessage && <p role="status" className="mt-2 text-xs leading-6 text-[#6b5236]">{restoreMessage}</p>}
          {hydrated && !storageWritable && (
            <button type="button"
              onClick={() => {
                const accepted = window.confirm(lang === "ar"
                  ? "البيانات السابقة غير قابلة للقراءة. بدء دفتر جديد سيستبدلها نهائيا. هل تريد المتابعة؟"
                  : "Previous saved data could not be read. Starting a new notebook will permanently replace it. Continue?");
                if (!accepted) return;
                setStore(emptyNotebook());
                setStorageWritable(true);
                setSaveError(false);
              }}
              className="mt-2 rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-xs font-semibold text-red-700">
              {lang === "ar" ? "بدء دفتر جديد بعد التأكيد" : "Start a new notebook after confirmation"}
            </button>
          )}
          <p aria-live="polite" className={`mt-3 text-xs ${saveError ? "text-red-700" : "text-[#827466]"}`}>
            {saveError ? LABELS.unsaved[lang] : hydrated ? LABELS.saved[lang] : "…"}
          </p>
        </div>
      </aside>
    </>
  );
}
