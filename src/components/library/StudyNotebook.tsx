import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import {
  BookOpenText, Check, ChevronLeft, ChevronRight, ChevronUp, ChevronDown, Copy, Download, Eraser, FilePlus2, Upload, FileDown, Highlighter, Minus, Square, Circle, Search, Redo2,
  NotebookPen, PenLine, RotateCcw, ScanText, MousePointer2, ImagePlus, Sticker, CopyPlus,
  Settings2, Trash2, Type, X,
} from "lucide-react";
import type { Lang } from "@/lib/i18n";
import type { StudySection } from "@/lib/library-study-language";
import {
  createNotebookPage, emptyNotebook, MAX_INK_POINTS, MAX_INK_STROKES,
  MAX_NOTE_TEXT_LENGTH, MAX_NOTEBOOK_PAGES, NOTEBOOK_DESIGN_WIDTH,
  NOTEBOOK_SIZES, NOTEBOOK_STORAGE_KEY,
  notebookPaperBackground, notebookStrokePath, nearestInkStrokeIndex, validateNotebookBackup, splitNotebookText,
  strokeBounds, transformNotebookStroke, clampNotebookObject,
  MAX_NOTEBOOK_OBJECTS, MAX_IMAGES_PER_PAGE,
  type InkPoint, type NotebookPage, type NotebookStore, type NotebookStroke, type NotebookObject,
  type NotebookTool, type PaperPattern, type PaperShade, type PaperSize,
} from "@/lib/study-notebook";
import { recognizeNotebookInk, supportsLocalHandwritingRecognition } from "@/lib/study-notebook-recognition";
import { exportStudyNotebookPdf } from "@/lib/study-notebook-pdf";
import { NOTEBOOK_STICKER_GROUPS, notebookImageToDataUrl } from "@/lib/study-notebook-stickers";

type NotebookStrings = { ar: string; en: string };
const LABELS = {
  name: { ar: "دفتر المذاكرة", en: "Study Notebook" },
  subtitle: { ar: "ملاحظات محفوظة على جهازك", en: "Private notes on this device" },
  type: { ar: "كتابة", en: "Type" },
  pen: { ar: "قلم", en: "Pen" },
  highlighter: { ar: "تظليل", en: "Highlight" },
  select: { ar: "تحديد", en: "Select" },
  line: { ar: "خط", en: "Line" },
  rectangle: { ar: "مربع", en: "Box" },
  ellipse: { ar: "بيضاوي", en: "Oval" },
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
  undo: { ar: "تراجع", en: "Undo" },
  redo: { ar: "إعادة", en: "Redo" },
  pdf: { ar: "تصدير PDF", en: "Export PDF" },
  duplicate: { ar: "نسخ الصفحة", en: "Duplicate page" },
  allPages: { ar: "إدارة الصفحات", en: "Manage pages" },
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
/** Measure text against the actual styled editor instead of estimating line
 * wrapping by character count. The exact original value/selection are restored
 * synchronously before React sees any change.
 */
function lastFittingTextIndex(editor: HTMLTextAreaElement, text: string) {
  const value = editor.value;
  const start = editor.selectionStart;
  const end = editor.selectionEnd;
  const scroll = editor.scrollTop;
  let low = 0, high = text.length;
  try {
    while (low < high) {
      const mid = Math.ceil((low + high) / 2);
      editor.value = text.slice(0, mid);
      if (editor.scrollHeight <= editor.clientHeight + 2) low = mid;
      else high = mid - 1;
    }
    return low;
  } finally {
    editor.value = value;
    editor.setSelectionRange(start, end);
    editor.scrollTop = scroll;
  }
}

function NotebookPaper({
  page, tool, inkColor, highlighterColor, inkWidth, onChange, onSplit, canAddPage, undoInk, redoInk, canUndoInk, canRedoInk, lang,
}: {
  page: NotebookPage;
  tool: NotebookTool;
  inkColor: string;
  highlighterColor: string;
  inkWidth: number;
  onChange: (change: Partial<NotebookPage>) => void;
  onSplit: (fittingIndex: number) => void;
  canAddPage: boolean;
  undoInk: () => void;
  redoInk: () => void;
  canUndoInk: boolean;
  canRedoInk: boolean;
  lang: Lang;
}) {
  const drawing = useRef<NotebookStroke | null>(null);
  const startTime = useRef(0);
  const activeEraser = useRef<number | null>(null);
  const strokeBuffer = useRef<NotebookStroke[]>(page.strokes);
  strokeBuffer.current = page.strokes;
  const sheet = useRef<HTMLDivElement | null>(null);
  const textEditor = useRef<HTMLTextAreaElement | null>(null);
  const [textOverflows, setTextOverflows] = useState(false);
  const [keepOriginalInk, setKeepOriginalInk] = useState(true);
  const [preview, setPreview] = useState<NotebookStroke | null>(null);
  const [selectedStrokeId, setSelectedStrokeId] = useState<string | null>(null);
  const [selectedObjectId, setSelectedObjectId] = useState<string | null>(null);
  const [objectPreview, setObjectPreview] = useState<NotebookObject | null>(null);
  const selectionDrag = useRef<{
    pointerId: number; kind: "stroke" | "object"; id: string;
    mode: "move" | "resize"; startX: number; startY: number;
    bounds: { x: number; y: number; width: number; height: number };
    originalStroke?: NotebookStroke; originalObject?: NotebookObject;
  } | null>(null);
  const [width, setWidth] = useState(330);
  const [recognizing, setRecognizing] = useState(false);
  const [recognized, setRecognized] = useState<string[] | null>(null);
  const [recognizedText, setRecognizedText] = useState("");
  const [recognitionError, setRecognitionError] = useState("");
  const [recognitionReady, setRecognitionReady] = useState(false);
  const height = NOTEBOOK_SIZES[page.size].height;

  useEffect(() => {
    setPreview(null);
    setSelectedStrokeId(null);
    setSelectedObjectId(null);
    setObjectPreview(null);
    selectionDrag.current = null;
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

  useLayoutEffect(() => {
    const editor = textEditor.current;
    if (!editor) return;
    setTextOverflows(editor.scrollHeight > editor.clientHeight + 2);
  }, [page.id, page.text, page.spacing, page.direction, page.typeface, page.size, width]);

  function continueOnNewPage() {
    const editor = textEditor.current;
    if (!editor || !canAddPage) return;
    const fitting = lastFittingTextIndex(editor, page.text);
    if (fitting > 0 && fitting < page.text.length) onSplit(fitting);
  }
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

  function startObjectSelection(e: PointerEvent<HTMLDivElement>, object: NotebookObject) {
    if (tool !== "select" || (e.pointerType === "mouse" && e.button !== 0)) return;
    const rect = sheet.current?.getBoundingClientRect();
    if (!rect) return;
    e.stopPropagation();
    e.preventDefault();
    const localX = (e.clientX - rect.left) / rect.width * NOTEBOOK_DESIGN_WIDTH;
    const localY = (e.clientY - rect.top) / rect.height * height;
    const handle = (e.target as HTMLElement).dataset.handle === "resize";
    setSelectedObjectId(object.id);
    setSelectedStrokeId(null);
    selectionDrag.current = {
      pointerId: e.pointerId, kind: "object", id: object.id,
      mode: handle ? "resize" : "move",
      startX: localX, startY: localY,
      bounds: { x: object.x, y: object.y, width: object.width, height: object.height },
      originalObject: object,
    };
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function moveObjectSelection(e: PointerEvent<HTMLDivElement>) {
    const active = selectionDrag.current;
    if (!active || active.kind !== "object" || active.pointerId !== e.pointerId) return;
    const rect = sheet.current?.getBoundingClientRect();
    if (!rect) return;
    const dx = (e.clientX - rect.left) / rect.width * NOTEBOOK_DESIGN_WIDTH - active.startX;
    const dy = (e.clientY - rect.top) / rect.height * height - active.startY;
    const source = active.originalObject!;
    const resized = active.mode === "resize";
    const next = clampNotebookObject({
      ...source,
      x: resized ? source.x : source.x + dx,
      y: resized ? source.y : source.y + dy,
      width: resized ? Math.max(32, source.width + dx) : source.width,
      height: resized ? Math.max(32, source.height + dy) : source.height,
    }, height);
    setObjectPreview(next);
    e.preventDefault();
  }

  function endObjectSelection(e: PointerEvent<HTMLDivElement>) {
    const active = selectionDrag.current;
    if (!active || active.kind !== "object" || active.pointerId !== e.pointerId) return;
    if (objectPreview && active.originalObject && (
      objectPreview.x !== active.originalObject.x || objectPreview.y !== active.originalObject.y ||
      objectPreview.width !== active.originalObject.width || objectPreview.height !== active.originalObject.height
    )) onChange({ objects: page.objects.map(obj => obj.id === active.id ? objectPreview : obj) });
    selectionDrag.current = null;
    setObjectPreview(null);
    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
  }

  function pointerDown(e: PointerEvent<SVGSVGElement>) {
    if (tool === "type" || (e.pointerType === "mouse" && e.button !== 0)) return;
    if (tool !== "eraser" && tool !== "select" && page.strokes.length >= MAX_INK_STROKES) return;
    if (!startTime.current) startTime.current = e.timeStamp;
    const point = toPoint(e);
    if (tool === "select") {
      const previouslyChosen = page.strokes.find(stroke => stroke.id === selectedStrokeId);
      const handleBounds = previouslyChosen ? strokeBounds(previouslyChosen) : null;
      const draggingHandle = !!handleBounds &&
        Math.abs(point.x - handleBounds.x - handleBounds.width) < 24 &&
        Math.abs(point.y - handleBounds.y - handleBounds.height) < 24;
      const index = draggingHandle
        ? page.strokes.findIndex(stroke => stroke.id === selectedStrokeId)
        : nearestInkStrokeIndex(page.strokes, point.x, point.y, 20);
      setSelectedObjectId(null);
      setPreview(null);
      if (index < 0) { setSelectedStrokeId(null); return; }
      const stroke = page.strokes[index], bounds = strokeBounds(stroke);
      const nearHandle = draggingHandle && stroke.id === selectedStrokeId;
      setSelectedStrokeId(stroke.id);
      selectionDrag.current = {
        pointerId: e.pointerId, kind: "stroke", id: stroke.id,
        mode: nearHandle ? "resize" : "move", startX: point.x, startY: point.y,
        bounds, originalStroke: stroke,
      };
      e.currentTarget.setPointerCapture(e.pointerId);
      e.preventDefault();
      return;
    }
    if (tool === "eraser") {
      activeEraser.current = e.pointerId;
      e.currentTarget.setPointerCapture(e.pointerId);
      eraseAt(point);
      e.preventDefault();
      return;
    }
    const stroke: NotebookStroke = {
      id: newId(), kind: tool,
      color: tool === "highlighter" ? highlighterColor : inkColor,
      width: tool === "highlighter" ? 18 : inkWidth, points: [point],
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
    const selection = selectionDrag.current;
    if (tool === "select" && selection?.kind === "stroke" && selection.pointerId === e.pointerId) {
      const point = toPoint(e);
      const dx = point.x - selection.startX;
      const dy = point.y - selection.startY;
      const old = selection.bounds;
      const target = selection.mode === "resize" ? {
        x: old.x, y: old.y, width: Math.max(1, old.width + dx), height: Math.max(1, old.height + dy),
      } : { x: old.x + dx, y: old.y + dy, width: old.width, height: old.height };
      setPreview(transformNotebookStroke(selection.originalStroke!, target, height));
      e.preventDefault();
      return;
    }
    if (tool === "eraser" && activeEraser.current === e.pointerId) {
      eraseAt(toPoint(e));
      e.preventDefault();
      return;
    }
    const active = drawing.current;
    if (!active || !e.currentTarget.hasPointerCapture(e.pointerId)) return;
    if (["line", "rectangle", "ellipse"].includes(tool)) {
      active.points = [active.points[0], toPoint(e)];
      setPreview({ ...active, points: [...active.points] });
      e.preventDefault();
      return;
    }
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
    const selection = selectionDrag.current;
    if (selection?.kind === "stroke" && selection.pointerId === e.pointerId) {
      if (preview && preview.id === selection.id &&
        JSON.stringify(preview.points) !== JSON.stringify(selection.originalStroke?.points)) {
        onChange({ strokes: page.strokes.map(stroke => stroke.id === selection.id ? preview : stroke) });
      }
      selectionDrag.current = null;
      setPreview(null);
      if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
      return;
    }
    if (activeEraser.current === e.pointerId) {
      activeEraser.current = null;
      if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
      return;
    }
    const active = drawing.current;
    if (!active) return;
    if (["line", "rectangle", "ellipse"].includes(tool)) active.points = [active.points[0], toPoint(e)];
    else if (active.points.length < MAX_INK_POINTS) active.points.push(toPoint(e));
    onChange({ strokes: [...page.strokes, { ...active, points: [...active.points] }] });
    drawing.current = null;
    setPreview(null);
    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
  }

  async function recognize() {
    if (!recognitionReady || !page.strokes.some((stroke) => !stroke.kind || stroke.kind === "pen") || recognizing) return;
    setRecognitionError("");
    setRecognizing(true);
    try {
      const choices = await recognizeNotebookInk(page.strokes.filter((stroke) => !stroke.kind || stroke.kind === "pen"), page.direction);
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
      ...(keepOriginalInk ? {} : { strokes: [] }),
    });
    setRecognized(null);
    setRecognizedText("");
  }

  const drawnStrokes = page.strokes.map(stroke =>
    preview?.id === stroke.id ? preview : stroke);
  if (preview && !drawnStrokes.some(stroke => stroke.id === preview.id)) drawnStrokes.push(preview);
  const chosenStroke = drawnStrokes.find(stroke => stroke.id === selectedStrokeId);
  const chosenStrokeBounds = chosenStroke ? strokeBounds(chosenStroke) : null;

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
          ref={textEditor}
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
          {drawnStrokes.map((stroke) => (
            <path
              key={stroke.id}
              d={notebookStrokePath(stroke)}
              fill="none"
              stroke={stroke.color}
              strokeWidth={stroke.kind === "highlighter" ? Math.max(12, stroke.width) : stroke.width * (0.8 + .4 * (stroke.points.reduce((sum, p) => sum + p.pressure, 0) / stroke.points.length))}
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={stroke.kind === "highlighter" ? ".32" : ".95"}
            />
          ))}
          {tool === "select" && chosenStrokeBounds && (
            <g pointerEvents="none">
              <rect x={chosenStrokeBounds.x - 5} y={chosenStrokeBounds.y - 5}
                width={chosenStrokeBounds.width + 10} height={chosenStrokeBounds.height + 10}
                fill="none" stroke="#188a8a" strokeWidth="2.5" strokeDasharray="7 5" />
              <circle cx={chosenStrokeBounds.x + chosenStrokeBounds.width}
                cy={chosenStrokeBounds.y + chosenStrokeBounds.height}
                r={12} fill="#ffffff" stroke="#188a8a" strokeWidth="3" />
            </g>
          )}
        </svg>
        <div className="pointer-events-none absolute inset-0 z-[4]">
          {page.objects.map((stored) => {
            const object = objectPreview?.id === stored.id ? objectPreview : stored;
            const selected = tool === "select" && selectedObjectId === object.id;
            return (
              <div key={object.id}
                aria-label={object.kind === "image" ? (lang === "ar" ? "صورة قابلة للتحريك" : "Movable image") : (lang === "ar" ? "ملصق قابل للتحريك" : "Movable sticker")}
                onPointerDown={(event) => startObjectSelection(event, object)}
                onPointerMove={moveObjectSelection}
                onPointerUp={endObjectSelection}
                onPointerCancel={endObjectSelection}
                style={{
                  left: `${object.x / NOTEBOOK_DESIGN_WIDTH * 100}%`,
                  top: `${object.y / height * 100}%`,
                  width: `${object.width / NOTEBOOK_DESIGN_WIDTH * 100}%`,
                  height: `${object.height / height * 100}%`,
                  pointerEvents: tool === "select" ? "auto" : "none",
                  touchAction: tool === "select" ? "none" : "auto",
                }}
                className={`absolute flex select-none items-center justify-center ${tool === "select" ? "cursor-move" : ""} ${selected ? "outline outline-2 outline-dashed outline-teal-600" : ""}`}
              >
                {object.kind === "image" && object.src
                  ? <img src={object.src} alt={lang === "ar" ? "صورة مضافة إلى المذكرة" : "Notebook image"}
                      draggable={false} className="pointer-events-none h-full w-full object-contain" />
                  : <span className="pointer-events-none flex h-full w-full items-center justify-center leading-none"
                      style={{ fontSize: `${Math.min(object.width / NOTEBOOK_DESIGN_WIDTH * width, object.height / height * (width * height / NOTEBOOK_DESIGN_WIDTH)) * .82}px` }}>
                      {object.label}
                    </span>}
                {selected && (
                  <div data-handle="resize"
                    aria-label={lang === "ar" ? "مقبض تغيير حجم العنصر" : "Resize selected object"}
                    className="pointer-events-auto absolute -bottom-2 -right-2 size-5 cursor-nwse-resize rounded-full border-2 border-teal-600 bg-white shadow" />
                )}
              </div>
            );
          })}
        </div>
      </div>
      {tool === "select" && (selectedObjectId || selectedStrokeId) && (
        <div className="flex flex-wrap gap-2 rounded-lg border border-teal-200 bg-teal-50 p-2">
          <span className="flex-1 text-xs leading-6 text-teal-900">
            {lang === "ar" ? "اسحب العنصر لتحريكه، أو اسحب المقبض لتغيير حجمه." : "Drag to move; use the corner handle to resize."}
          </span>
          <button type="button" className="rounded-lg bg-white px-3 py-2 text-xs text-red-700"
            onClick={() => {
              if (selectedObjectId) onChange({ objects: page.objects.filter(object => object.id !== selectedObjectId) });
              if (selectedStrokeId) onChange({ strokes: page.strokes.filter(stroke => stroke.id !== selectedStrokeId) });
              setSelectedObjectId(null); setSelectedStrokeId(null);
            }}>
            <Trash2 className="inline size-3.5" /> {lang === "ar" ? "حذف العنصر" : "Delete selected"}
          </button>
          <button type="button" className="rounded-lg bg-white px-3 py-2 text-xs"
            onClick={() => {
              if (selectedObjectId && page.objects.length < MAX_NOTEBOOK_OBJECTS) {
                const original = page.objects.find(object => object.id === selectedObjectId);
                if (original) onChange({ objects: [...page.objects, clampNotebookObject({ ...original,
                  id: newId(), x: original.x + 20, y: original.y + 20 }, height)] });
              } else if (selectedStrokeId && page.strokes.length < MAX_INK_STROKES) {
                const original = page.strokes.find(stroke => stroke.id === selectedStrokeId);
                if (original) {
                  const bounds = strokeBounds(original);
                  onChange({ strokes: [...page.strokes,
                    { ...transformNotebookStroke(original, { ...bounds, x: bounds.x + 20, y: bounds.y + 20 }, height), id: newId() }] });
                }
              }
            }}>
            <CopyPlus className="inline size-3.5" /> {lang === "ar" ? "تكرار" : "Duplicate"}
          </button>
        </div>
      )}
      {textOverflows && (
        <div role="status" className="space-y-2 rounded-lg border border-amber-300 bg-amber-50 p-3 text-xs leading-6 text-amber-950">
          <p>{lang === "ar"
            ? "وصل النص إلى نهاية الورقة. يمكنك متابعة بقية الكتابة في الصفحة التالية دون تغيير الرسومات الموجودة هنا."
            : "Your typed notes extend beyond this sheet. Continue the overflowing text on another page; existing pen drawings stay on this sheet."}</p>
          <button type="button" disabled={!canAddPage} onClick={continueOnNewPage}
            className="rounded-lg bg-[#283b4d] px-3 py-2 font-bold text-white disabled:opacity-40">
            {lang === "ar" ? "نقل النص الزائد لصفحة تالية" : "Continue overflow on next page"}
          </button>
          {!canAddPage && <p>{lang === "ar" ? "وصلت للحد الأقصى للصفحات؛ صدّر نسخة احتياطية." : "Page limit reached; export a backup."}</p>}
        </div>
      )}
      <p className="text-center text-[11px] leading-5 text-[#786f63]">
        {lang === "ar"
          ? `المسافات بين سطور الورقة والكتابة: ${page.spacing} وحدة متطابقة · تنعيم تلقائي لخطوط القلم`
          : `Matching text / paper line spacing: ${page.spacing} units · strokes automatically smoothed`}
      </p>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <button
          type="button"
          onClick={undoInk}
          disabled={!canUndoInk}
          className="inline-flex items-center gap-1 rounded-lg border border-[#c9bba8] bg-white px-3 py-2 text-xs font-semibold disabled:opacity-40"
        >
          <RotateCcw className="size-3.5" /> {LABELS.undo[lang]}
        </button>
        <button type="button" onClick={redoInk} disabled={!canRedoInk}
          className="inline-flex items-center gap-1 rounded-lg border border-[#c9bba8] bg-white px-3 py-2 text-xs font-semibold disabled:opacity-40">
          <Redo2 className="size-3.5" /> {LABELS.redo[lang]}
        </button>
        <button
          type="button"
          onClick={() => void recognize()}
          disabled={!recognitionReady || !page.strokes.some((stroke) => !stroke.kind || stroke.kind === "pen") || recognizing}
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
          <label className="flex items-center gap-2 text-xs leading-6 text-[#285C44]">
            <input type="checkbox" checked={keepOriginalInk} onChange={(event) => setKeepOriginalInk(event.target.checked)}
              className="size-4 accent-emerald-800" />
            {lang === "ar" ? "الاحتفاظ برسومات القلم الأصلية عند إدراج النص" : "Keep original pen strokes when adding recognized text"}
          </label>
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

export function StudyNotebook({ section, lang, desktopOpen, onDesktopOpenChange, dockWidth, onDockWidthChange, focus }: {
  section: StudySection;
  lang: Lang;
  desktopOpen: boolean;
  onDesktopOpenChange: (open: boolean) => void;
  dockWidth: number;
  onDockWidthChange: (width: number) => void;
  focus: boolean;
}) {
  const [store, setStore] = useState<NotebookStore>(emptyNotebook);
  const [hydrated, setHydrated] = useState(false);
  const [storageWritable, setStorageWritable] = useState(true);
  const latest = useRef(store);
  const [saveError, setSaveError] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tool, setTool] = useState<NotebookTool>("type");
  const [inkColor, setInkColor] = useState("#24334a");
  const [highlighterColor, setHighlighterColor] = useState("#f6d94e");
  const [inkWidth, setInkWidth] = useState(2.9);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [showStickerPalette, setShowStickerPalette] = useState(false);
  const [stickerGroup, setStickerGroup] = useState("accounting");
  const imageInput = useRef<HTMLInputElement | null>(null);
  const [importingImage, setImportingImage] = useState(false);
  const [pageSearch, setPageSearch] = useState("");
  const [showPageManager, setShowPageManager] = useState(false);
  const [exportingPdf, setExportingPdf] = useState(false);
  const [, setHistoryTick] = useState(0);
  const inkHistory = useRef<Record<string, { past: NotebookStroke[][]; future: NotebookStroke[][] }>>({});
  const [restoreMessage, setRestoreMessage] = useState("");
  const backupInput = useRef<HTMLInputElement | null>(null);
  latest.current = store;
  const sectionPages = store.pages[section];
  const current = sectionPages.find((p) => p.id === store.activePage[section]) ?? sectionPages[0];

  useEffect(() => {
    try {
      const saved = localStorage.getItem(NOTEBOOK_STORAGE_KEY);
      if (saved) setStore(validateNotebookBackup(JSON.parse(saved)));
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
    if (change.strokes !== undefined) {
      const state = inkHistory.current[current.id] ?? { past: [], future: [] };
      state.past.push(current.strokes);
      if (state.past.length > 40) state.past.shift();
      state.future = [];
      inkHistory.current[current.id] = state;
      setHistoryTick((n) => n + 1);
    }
    const updatedAt = Date.now();
    setStore((prior) => ({
      ...prior,
      pages: { ...prior.pages, [section]: prior.pages[section].map((page) =>
        page.id === (prior.activePage[section] || current.id)
          ? { ...page, ...change, updatedAt } : page) },
    }));
  }

  function undoInk() {
    const history = inkHistory.current[current.id];
    if (!history?.past.length) return;
    const previous = history.past.pop()!;
    history.future.push(current.strokes);
    setStore((prior) => ({
      ...prior, pages: { ...prior.pages, [section]: prior.pages[section].map((page) =>
        page.id === current.id ? { ...page, strokes: previous, updatedAt: Date.now() } : page) },
    }));
    setHistoryTick((n) => n + 1);
  }

  function redoInk() {
    const history = inkHistory.current[current.id];
    if (!history?.future.length) return;
    const next = history.future.pop()!;
    history.past.push(current.strokes);
    setStore((prior) => ({
      ...prior, pages: { ...prior.pages, [section]: prior.pages[section].map((page) =>
        page.id === current.id ? { ...page, strokes: next, updatedAt: Date.now() } : page) },
    }));
    setHistoryTick((n) => n + 1);
  }

  function duplicatePage() {
    if (sectionPages.length >= MAX_NOTEBOOK_PAGES) return;
    const id = newId();
    const copy: NotebookPage = { ...current, id, title: current.title ? current.title + " (copy)" : "",
      strokes: current.strokes.map((stroke) => ({ ...stroke, id: newId(), points: stroke.points.map(p => ({ ...p })) })),
      objects: current.objects.map((object) => ({ ...object, id: newId() })),
      updatedAt: Date.now() };
    setStore((prior) => {
      const original = prior.pages[section];
      const at = original.findIndex((page) => page.id === current.id);
      const pages = [...original];
      pages.splice(at + 1, 0, copy);
      return { ...prior, pages: { ...prior.pages, [section]: pages },
        activePage: { ...prior.activePage, [section]: id } };
    });
  }

  function movePage(step: -1 | 1) {
    const target = sectionPages.findIndex(page => page.id === current.id) + step;
    if (target < 0 || target >= sectionPages.length) return;
    setStore(prior => {
      const pages = [...prior.pages[section]];
      const index = pages.findIndex(page => page.id === current.id);
      if (index < 0 || index + step < 0 || index + step >= pages.length) return prior;
      [pages[index], pages[index + step]] = [pages[index + step], pages[index]];
      return { ...prior, pages: { ...prior.pages, [section]: pages } };
    });
  }

  async function savePdf(allPages: boolean) {
    if (exportingPdf) return;
    setExportingPdf(true);
    setRestoreMessage("");
    try {
      await exportStudyNotebookPdf(allPages ? sectionPages : [current],
        `${section}-study-notebook-${allPages ? "all" : "page-" + (currentIndex + 1)}.pdf`);
      setRestoreMessage(lang === "ar" ? "تم تصدير ملف PDF إلى جهازك." : "PDF saved to your device.");
    } catch (error) {
      setRestoreMessage(lang === "ar"
        ? "تعذر إنشاء PDF. جرّب عدد صفحات أقل أو تأكد من توفر مساحة كافية."
        : error instanceof Error ? error.message : "PDF export failed.");
    } finally { setExportingPdf(false); }
  }

  function addSticker(label: string) {
    if (!storageWritable || current.objects.length >= MAX_NOTEBOOK_OBJECTS) return;
    const object: NotebookObject = {
      id: newId(), kind: "sticker", label,
      x: 100, y: 120, width: 110, height: 110,
    };
    updatePage({ objects: [...current.objects, object] });
    setTool("select");
    setRestoreMessage(lang === "ar" ? "تمت إضافة الملصق. اختر أداة التحديد لتحريكه." : "Sticker added. Drag it with Select.");
  }

  async function importImage(file: File) {
    if (!storageWritable) throw new Error("Notebook storage requires recovery first.");
    const pageId = current.id;
    if (current.objects.length >= MAX_NOTEBOOK_OBJECTS ||
      current.objects.filter(o => o.kind === "image").length >= MAX_IMAGES_PER_PAGE)
      throw new Error("This page has reached its image or object limit.");
    setImportingImage(true);
    try {
      const { src, ratio } = await notebookImageToDataUrl(file);
      let imageWidth = 285;
      let imageHeight = imageWidth / ratio;
      if (imageHeight > 460) { imageHeight = 460; imageWidth = imageHeight * ratio; }
      const object: NotebookObject = clampNotebookObject({
        id: newId(), kind: "image", src, x: 75, y: 115,
        width: Math.max(32, imageWidth), height: Math.max(32, imageHeight),
      }, NOTEBOOK_SIZES[current.size].height);
      setStore(prior => ({
        ...prior,
        pages: { ...prior.pages, [section]: prior.pages[section].map(page =>
          page.id === pageId && page.objects.length < MAX_NOTEBOOK_OBJECTS &&
          page.objects.filter(o => o.kind === "image").length < MAX_IMAGES_PER_PAGE
            ? { ...page, objects: [...page.objects, object], updatedAt: Date.now() } : page) },
      }));
      setTool("select");
      setRestoreMessage(lang === "ar" ? "أُدرجت الصورة داخل الورقة. استخدم التحديد للتحريك والتكبير." : "Image placed on the paper. Use Select to move or resize.");
    } finally { setImportingImage(false); }
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

  function splitCurrentPage(fittingIndex: number) {
    if (sectionPages.length >= MAX_NOTEBOOK_PAGES) return;
    const split = splitNotebookText(current.text, fittingIndex);
    if (!split || !split.continuation) return;
    const newPageId = newId();
    const continuationPage = {
      ...createNotebookPage(newPageId, current.direction),
      pattern: current.pattern,
      shade: current.shade,
      size: current.size,
      spacing: current.spacing,
      typeface: current.typeface,
      text: split.continuation,
      updatedAt: Date.now(),
    };
    setStore((prior) => {
      const pages = prior.pages[section];
      const index = pages.findIndex((page) => page.id === current.id);
      if (index < 0 || pages.length >= MAX_NOTEBOOK_PAGES) return prior;
      const updated = [...pages];
      // The drawing overlay belongs to the original page; only typed overflow
      // moves to the continuation, so mixed pen/keyboard work is never deleted.
      updated[index] = { ...updated[index], text: split.first, updatedAt: Date.now() };
      updated.splice(index + 1, 0, continuationPage);
      return {
        ...prior,
        pages: { ...prior.pages, [section]: updated },
        activePage: { ...prior.activePage, [section]: newPageId },
      };
    });
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
    inkHistory.current = {};
    setHistoryTick((n) => n + 1);
    setStore(restored);
    setStorageWritable(true);
    setRestoreMessage(lang === "ar" ? "استُعيدت الصفحات بنجاح." : "Notebook backup restored.");
    setSaveError(false);
    setMobileOpen(false);
  }

  function openNotebook() {
    if (window.matchMedia("(min-width: 900px)").matches) {
      onDesktopOpenChange(true);
    } else {
      setMobileOpen(true);
    }
  }

  function closeNotebook() {
    if (window.matchMedia("(min-width: 900px)").matches) {
      onDesktopOpenChange(false);
    } else {
      setMobileOpen(false);
    }
  }

  useEffect(() => {
    const media = window.matchMedia("(min-width: 900px)");
    const onChange = () => { if (media.matches) setMobileOpen(false); };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const currentIndex = sectionPages.findIndex((p) => p.id === current.id);
  

  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Aref+Ruqaa+Ink:wght@400;700&family=Caveat:wght@400;600;700&display=swap" precedence="default" />
      {!mobileOpen && (
        <button
          type="button"
          onClick={openNotebook}
          className={`fixed bottom-5 right-5 z-[65] inline-flex items-center gap-2 rounded-full bg-[#c9a986] px-4 py-3 text-sm font-bold text-[#211c18] shadow-2xl ${desktopOpen ? "min-[900px]:hidden" : "min-[900px]:inline-flex"}`}
          aria-label={LABELS.open[lang]}
          title={LABELS.open[lang]}
        >
          <NotebookPen className="size-5" /> {LABELS.open[lang]}
        </button>
      )}
      {mobileOpen && <button type="button" onClick={() => setMobileOpen(false)} className="fixed inset-0 z-[69] bg-black/60 min-[900px]:hidden" aria-label={LABELS.close[lang]} />}
      <aside
        aria-label={LABELS.name[lang]}
        role={mobileOpen ? "dialog" : "complementary"}
        aria-modal={mobileOpen ? true : undefined}
        dir={lang === "ar" ? "rtl" : "ltr"}
        className={`fixed inset-y-0 end-0 z-[70] w-[min(95vw,430px)] flex-col overflow-hidden border-s border-[#b6a58e] bg-[#f8f5ee] text-[#302e2b] shadow-2xl min-[900px]:sticky min-[900px]:end-auto min-[900px]:bottom-auto min-[900px]:z-30 min-[900px]:w-full min-[900px]:shadow-none ${focus ? "min-[900px]:top-0 min-[900px]:h-dvh" : "min-[900px]:top-16 min-[900px]:h-[calc(100dvh-4rem)]"} ${mobileOpen ? "flex" : "hidden"} ${desktopOpen ? "min-[900px]:flex" : "min-[900px]:hidden"}`}
      >
        <header className="flex shrink-0 items-center justify-between border-b border-[#cdbfae] bg-[#f1eae0] p-3">
          <div className="min-w-0">
            <p className="flex items-center gap-2 text-sm font-black">
              <NotebookPen className="size-4 text-[#73563c]" /> {LABELS.name[lang]}
              <span className="rounded-md bg-[#dfd2c2] px-1.5 py-0.5 text-[10px]">{section === "cma" ? "CMA" : "IFRS"}</span>
            </p>
            <p className="mt-1 text-[10px] text-[#786f63]">{saveError ? LABELS.unsaved[lang] : LABELS.subtitle[lang]}</p>
          </div>
          <button
            type="button"
            onClick={closeNotebook}
            className="grid size-9 place-items-center rounded-lg border border-[#cdbfae] bg-white"
            aria-label={LABELS.close[lang]}
          ><X className="size-4" /></button>
        </header>

        <div className="flex-1 overflow-y-auto overscroll-contain px-3 pb-10 pt-3">
          <label className="mb-3 hidden items-center gap-2 rounded-lg border border-[#d5c8b6] bg-white/80 px-3 py-2 text-[11px] font-semibold text-[#6c5b48] min-[900px]:flex">
            <span className="shrink-0">{lang === "ar" ? "عرض الدفتر" : "Notebook width"}</span>
            <input type="range" min={320} max={470} step={10} value={dockWidth}
              onChange={(event) => onDockWidthChange(Number(event.target.value))}
              aria-label={lang === "ar" ? "تعديل عرض الدفتر الجانبي" : "Resize the adjacent notebook panel"}
              className="min-w-0 flex-1 accent-[#76543F]" />
            <span className="w-10 text-end tabular-nums">{dockWidth}px</span>
          </label>
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
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <button type="button" onClick={() => setShowPageManager((open) => !open)}
              aria-expanded={showPageManager} className="inline-flex min-h-9 items-center gap-1 rounded-lg border border-[#c9bba8] bg-white px-3 py-2 text-xs font-bold">
              <Search className="size-3.5" /> {LABELS.allPages[lang]} ({sectionPages.length})
            </button>
            <button type="button" onClick={duplicatePage} disabled={sectionPages.length >= MAX_NOTEBOOK_PAGES}
              title={LABELS.duplicate[lang]} className="grid size-9 place-items-center rounded-lg border border-[#c9bba8] bg-white disabled:opacity-40">
              <Copy className="size-4" />
            </button>
            <button type="button" onClick={() => movePage(-1)} disabled={currentIndex < 1}
              title={lang === "ar" ? "تحريك الصفحة لأعلى" : "Move page earlier"}
              className="grid size-9 place-items-center rounded-lg border border-[#c9bba8] bg-white disabled:opacity-40">
              <ChevronUp className="size-4" />
            </button>
            <button type="button" onClick={() => movePage(1)} disabled={currentIndex >= sectionPages.length - 1}
              title={lang === "ar" ? "تحريك الصفحة لأسفل" : "Move page later"}
              className="grid size-9 place-items-center rounded-lg border border-[#c9bba8] bg-white disabled:opacity-40">
              <ChevronDown className="size-4" />
            </button>
          </div>
          {showPageManager && (
            <section aria-label={lang === "ar" ? "صفحات الدفتر والبحث" : "Notebook page search"}
              className="mt-2 space-y-2 rounded-xl border border-[#d5c8b6] bg-white/75 p-3">
              <input type="search" value={pageSearch} onChange={(event) => setPageSearch(event.target.value)}
                aria-label={lang === "ar" ? "ابحث في عناوين ومحتوى الصفحات" : "Search page titles and content"}
                placeholder={lang === "ar" ? "ابحث عن كلمة داخل صفحاتك…" : "Find a word in your notes…"}
                className={narrowControl} />
              <div className="max-h-52 space-y-1.5 overflow-y-auto">
                {sectionPages.map((page, index) => ({ page, index }))
                  .filter(({ page }) => !pageSearch.trim() ||
                    (page.title + " " + page.text).toLocaleLowerCase().includes(pageSearch.trim().toLocaleLowerCase()))
                  .map(({ page, index }) => (
                    <button key={page.id} type="button" onClick={() => { navigate(index); setShowPageManager(false); }}
                      aria-current={page.id === current.id ? "page" : undefined}
                      className={`block w-full rounded-lg border px-3 py-2 text-start text-xs ${page.id === current.id ? "border-[#76543F] bg-[#f5ebdd]" : "border-[#e2d8ca] bg-white"}`}>
                      <span className="block font-bold">{index + 1}. {page.title || (lang === "ar" ? "صفحة بدون عنوان" : "Untitled page")}</span>
                      <span className="mt-1 block truncate text-[#756b5e]">{page.text.slice(0, 95) || (lang === "ar" ? "رسومات وملاحظات" : "Ink / blank page")}</span>
                    </button>
                  ))}
              </div>
            </section>
          )}
          <input
            value={current.title}
            onChange={(e) => updatePage({ title: e.target.value.slice(0, 90) })}
            maxLength={90}
            placeholder={LABELS.title[lang]}
            aria-label={LABELS.title[lang]}
            className="mt-2 w-full border-b border-[#c9bba8] bg-transparent px-1 py-2 text-sm font-bold outline-none focus:border-[#76543F]"
          />

          <div className="mt-3 grid grid-cols-4 gap-1 rounded-xl bg-[#e8ded0] p-1" role="group" aria-label={lang === "ar" ? "أدوات التدوين والرسم" : "Notebook writing and drawing tools"}>
            {(["type", "pen", "highlighter", "eraser", "line", "rectangle", "ellipse", "select"] as NotebookTool[]).map((mode) => {
              const Icon = mode === "select" ? MousePointer2 : mode === "type" ? Type : mode === "pen" ? PenLine
                : mode === "highlighter" ? Highlighter : mode === "line" ? Minus
                  : mode === "rectangle" ? Square : mode === "ellipse" ? Circle : Eraser;
              return (
                <button key={mode} type="button" aria-pressed={tool === mode} onClick={() => setTool(mode)}
                  title={LABELS[mode][lang]}
                  className={`inline-flex min-h-10 flex-col items-center justify-center gap-0.5 rounded-lg px-1 py-1.5 text-[10px] font-bold transition ${tool === mode ? "bg-white text-[#253a4b] shadow-sm" : "text-[#7c705f]"}`}>
                  <Icon className="size-4" /> {LABELS[mode][lang]}
                </button>
              );
            })}
          </div>
          <div className="mt-2 flex flex-wrap gap-2 rounded-xl border border-[#d5c8b6] bg-white/85 p-2">
            <button type="button" onClick={() => setShowStickerPalette(open => !open)}
              disabled={!storageWritable || current.objects.length >= MAX_NOTEBOOK_OBJECTS}
              aria-expanded={showStickerPalette}
              className="inline-flex min-h-9 items-center gap-2 rounded-lg border border-[#c9bba8] px-3 py-2 text-xs font-bold text-[#40382F] disabled:opacity-40">
              <Sticker className="size-4" /> {lang === "ar" ? "ملصقات" : "Stickers"}
            </button>
            <input ref={imageInput} type="file" accept="image/png,image/jpeg,image/webp"
              className="sr-only" aria-label={lang === "ar" ? "اختيار صورة" : "Choose a local image"}
              onChange={event => {
                const file = event.target.files?.[0];
                event.target.value = "";
                if (!file) return;
                setRestoreMessage("");
                void importImage(file).catch(error => setRestoreMessage(error instanceof Error ? error.message : String(error)));
              }} />
            <button type="button" onClick={() => imageInput.current?.click()}
              disabled={!storageWritable || importingImage || current.objects.length >= MAX_NOTEBOOK_OBJECTS ||
                current.objects.filter(o => o.kind === "image").length >= MAX_IMAGES_PER_PAGE}
              className="inline-flex min-h-9 items-center gap-2 rounded-lg border border-[#c9bba8] px-3 py-2 text-xs font-bold text-[#40382F] disabled:opacity-40">
              <ImagePlus className="size-4" /> {importingImage ? "…" : lang === "ar" ? "إدراج صورة" : "Insert image"}
            </button>
            <p className="w-full text-[11px] text-[#806f60]">
              {lang === "ar" ? "يمكن تحريك العناصر وتكبيرها بأداة التحديد. الصور محفوظة على جهازك فقط." :
                "Use Select to move and resize. Images stay on this device."}
            </p>
          </div>
          {showStickerPalette && (
            <section aria-label={lang === "ar" ? "مجموعات الملصقات" : "Sticker collections"}
              className="mt-2 space-y-3 rounded-xl border border-[#d5c8b6] bg-[#fffcf5] p-3">
              <div className="flex flex-wrap gap-1">
                {NOTEBOOK_STICKER_GROUPS.map(group => (
                  <button key={group.id} type="button" aria-pressed={stickerGroup === group.id}
                    onClick={() => setStickerGroup(group.id)}
                    className={`rounded-lg px-2 py-1.5 text-xs font-bold ${stickerGroup === group.id ? "bg-[#283b4d] text-white" : "bg-[#eee3d1] text-[#4a3b2c]"}`}>
                    {group[lang]}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-6 gap-1.5">
                {NOTEBOOK_STICKER_GROUPS.filter(group => group.id === stickerGroup).flatMap(group => [...group.stickers]).map(emoji => (
                  <button key={emoji} type="button" onClick={() => addSticker(emoji)}
                    title={lang === "ar" ? "إضافة الملصق إلى الورقة" : "Add sticker to paper"}
                    className="grid aspect-square place-items-center rounded-lg border border-[#e0d4c2] bg-white text-2xl transition hover:scale-105 hover:border-[#806049]">
                    {emoji}
                  </button>
                ))}
              </div>
            </section>
          )}
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

          {["pen", "line", "rectangle", "ellipse", "highlighter"].includes(tool) && (
            <div className="mt-3 flex flex-wrap items-center gap-2 rounded-lg border border-[#d5c8b6] bg-white/85 px-3 py-2">
              <span className="text-xs font-bold">{LABELS.ink[lang]}</span>
              {(tool === "highlighter" ? ["#f6d94e", "#99e4aa", "#ffb4d3", "#a8d5ff"] : INK_COLORS).map(color => (
                <button key={color} type="button"
                  onClick={() => tool === "highlighter" ? setHighlighterColor(color) : setInkColor(color)}
                  aria-label={`Ink ${color}`}
                  aria-pressed={(tool === "highlighter" ? highlighterColor : inkColor) === color}
                  className={`size-6 rounded-full border-2 ${(tool === "highlighter" ? highlighterColor : inkColor) === color ? "border-amber-600" : "border-white"}`}
                  style={{ backgroundColor: color }} />
              ))}
              {tool !== "highlighter" && (
                <label className="ms-auto flex items-center gap-1 text-xs">
                  {LABELS.width[lang]}
                  <input type="range" min={1} max={7} step={.5} value={inkWidth} onChange={e => setInkWidth(Number(e.target.value))}
                    aria-label={LABELS.width[lang]} className="w-16 accent-[#76543F]" />
                </label>
              )}
            </div>
          )}

          <div className="mt-3">
            <NotebookPaper key={current.id} page={current} tool={tool} inkColor={inkColor}
              highlighterColor={highlighterColor} inkWidth={inkWidth}
              lang={lang} onChange={updatePage} onSplit={splitCurrentPage}
              canAddPage={sectionPages.length < MAX_NOTEBOOK_PAGES}
              undoInk={undoInk} redoInk={redoInk}
              canUndoInk={Boolean(inkHistory.current[current.id]?.past.length)}
              canRedoInk={Boolean(inkHistory.current[current.id]?.future.length)} />
          </div>

          <div className="mt-5 flex flex-wrap gap-2 border-t border-[#d5c8b6] pt-4">
            <button type="button" disabled={exportingPdf || !storageWritable}
              onClick={() => void savePdf(true)}
              className="inline-flex min-h-9 items-center gap-1 rounded-lg bg-[#283b4d] px-3 py-2 text-xs font-bold text-white disabled:opacity-50">
              <FileDown className="size-3.5" /> {exportingPdf ? "…" : LABELS.pdf[lang]}
            </button>
            <button type="button" disabled={exportingPdf || !storageWritable}
              onClick={() => void savePdf(false)}
              className="inline-flex min-h-9 items-center gap-1 rounded-lg border border-[#c9bba8] bg-white px-3 py-2 text-xs font-semibold disabled:opacity-50">
              {lang === "ar" ? "PDF للصفحة الحالية" : "Current page PDF"}
            </button>
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
                inkHistory.current = {};
                setHistoryTick((n) => n + 1);
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
