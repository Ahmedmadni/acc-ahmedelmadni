import type { NotebookPage, NotebookStroke } from "@/lib/study-notebook";
import { STUDY_WIDGET_PALETTE, studyWidgetDefaultTitle } from "@/lib/study-notebook-widgets";
import { formatNotebookJournalReview, reviewNotebookJournal,
  reviewNotebookJournalsAcrossPages, type NotebookJournalReviewByBlock } from "@/lib/study-notebook-flow";
import {
  NOTEBOOK_DESIGN_WIDTH, NOTEBOOK_SIZES, notebookPaperBackground,
  notebookStrokePath,
} from "@/lib/study-notebook";

export const STUDY_NOTEBOOK_PDF_MM = {
  A4: [210, 297],
  A5: [148, 210],
  Letter: [215.9, 279.4],
} as const;

/** Export must never silently cut off journal rows or paragraphs. */
export class NotebookPdfOverflowError extends Error {
  constructor(pageNumber: number, direction: "ltr" | "rtl") {
    super(direction === "rtl"
      ? `تعذر تصدير الصفحة ${pageNumber}: المحتوى أطول من الورقة. انقل الجزء الزائد لصفحة جديدة ثم أعد التصدير.`
      : `Cannot export page ${pageNumber}: the content exceeds its paper boundary. Continue the overflow on a new page first.`);
    this.name = "NotebookPdfOverflowError";
  }
}

export function printableInkStyle(stroke: NotebookStroke) {
  return {
    stroke: stroke.color,
    strokeWidth: stroke.kind === "highlighter" ? Math.max(12, stroke.width) : stroke.width,
    opacity: stroke.kind === "highlighter" ? "0.32" : "0.95",
  };
}

/** Build the exact local print surface for a notebook page (also testable without canvas). */
export function buildNotebookPrintablePageDom(page: NotebookPage, journalReviews?: NotebookJournalReviewByBlock) {
  const width = NOTEBOOK_DESIGN_WIDTH;
  const height = NOTEBOOK_SIZES[page.size].height;
  const root = document.createElement("article");
  root.dir = page.direction;
  root.style.cssText = [
    "position:relative", "overflow:hidden", "box-sizing:border-box",
    `width:${width}px`, `height:${height}px`,
  ].join(";");
  const bg = notebookPaperBackground(page.pattern, page.shade, page.spacing);
  Object.assign(root.style, bg);

  if (page.pattern !== "blank") {
    const margin = document.createElement("div");
    margin.style.cssText = [
      "position:absolute", "top:0", "bottom:0", "width:1px",
      page.direction === "rtl" ? "right:43px" : "left:43px",
      "background:rgba(200,80,95,.20)",
    ].join(";");
    root.appendChild(margin);
  }

  const text = document.createElement("div");
  text.setAttribute("lang", page.direction === "rtl" ? "ar" : "en");
  text.dir = page.direction;
  text.setAttribute("data-notebook-print-text", "");
  text.textContent = page.text;
  text.style.cssText = [
    "position:absolute", "inset:0", "box-sizing:border-box",
    "overflow:hidden", "white-space:pre-wrap", "overflow-wrap:anywhere",
    "color:#25272c", "padding:0 48px", "margin:0",
    `font-size:${Math.max(12, page.spacing * (page.direction === "rtl" ? .74 : .87))}px`,
    `line-height:${page.spacing}px`,
    `font-family:${page.typeface === "handwritten"
      ? page.direction === "rtl" ? '"Aref Ruqaa Ink","Aref Ruqaa",serif' : '"Caveat","Comic Sans MS",cursive'
      : page.direction === "rtl" ? '"Cairo",sans-serif' : 'Georgia,serif'}`,
  ].join(";");
  if (page.flow?.length) {
    // Render structured notes in normal document flow: paragraphs, then
    // editable-table snapshots, then the following paragraphs. Never
    // rasterize a table as a floating sticker or duplicate fallback text.
    text.textContent = "";
    text.style.overflowY = "hidden";
    for (const block of page.flow) {
      if (block.kind === "paragraph") {
        const paragraph = document.createElement("div");
        paragraph.textContent = block.text || "\u00a0";
        paragraph.style.cssText = [
          "display:block", "box-sizing:border-box", "white-space:pre-wrap",
          "overflow-wrap:anywhere", "min-height:" + page.spacing + "px",
          "line-height:" + page.spacing + "px",
        ].join(";");
        text.appendChild(paragraph);
      } else {
        const frame = document.createElement("section");
        frame.setAttribute("data-pdf-inline-table", block.template);
        frame.style.cssText = [
          "box-sizing:border-box", "margin:" + (page.spacing * .32) + "px 0",
          "border:1px solid #a2b4c3", "border-radius:6px",
          "background:rgba(255,255,255,.78)", "overflow:hidden",
        ].join(";");
        const heading = document.createElement("div");
        heading.textContent = block.title;
        heading.style.cssText = [
          "background:rgba(228,235,242,.85)", "padding:5px",
          "font-family:Arial,sans-serif", "font-size:16px", "font-weight:700",
        ].join(";");
        frame.appendChild(heading);
        const table = document.createElement("table");
        table.dir = page.direction;
        table.style.cssText = "width:100%;border-collapse:collapse;table-layout:fixed;";
        const body = document.createElement("tbody");
        block.cells.forEach((cells, rowNumber) => {
          const row = document.createElement("tr");
          cells.forEach(value => {
            const cell = document.createElement(rowNumber === 0 ? "th" : "td");
            cell.textContent = value || "\u00a0";
            cell.style.cssText = [
              "border:1px solid #bac9d4", "padding:2px 5px",
              "height:" + Math.max(24, page.spacing) + "px",
              "font-family:Arial,sans-serif",
              "font-size:" + Math.max(11, page.spacing * .36) + "px",
              "text-align:start", "vertical-align:middle",
              "overflow-wrap:anywhere",
            ].join(";");
            row.appendChild(cell);
          });
          body.appendChild(row);
        });
        table.appendChild(body);
        frame.appendChild(table);
        if (block.template === "journal") {
          // The exported snapshot must include exactly the same computed
          // balance information seen in the editable study notebook.
          const review = block.journalGroupId
            ? (journalReviews?.[block.id] ?? {
              ...reviewNotebookJournal(block.cells), status: "incomplete" as const,
            })
            : reviewNotebookJournal(block.cells);
          const display = formatNotebookJournalReview(review, page.direction);
          const summary = document.createElement("div");
          summary.setAttribute("data-pdf-journal-review", review.status);
          summary.dir = page.direction;
          summary.style.cssText = [
            "border-top:1px solid #b5c4d3", "padding:7px 8px",
            "font-family:Arial,sans-serif", "font-size:13px",
            "line-height:1.5", "overflow-wrap:anywhere",
            review.status === "balanced" ? "background:#ecfdf5;color:#065f46"
              : review.status === "empty" ? "background:#f8fafc;color:#334155"
                : "background:#fffbeb;color:#92400e",
          ].join(";");
          const totals = document.createElement("div");
          totals.style.cssText = "display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;font-weight:700;";
          const debit = document.createElement("span");
          debit.textContent = display.debitLabel + ": " + display.debit;
          const credit = document.createElement("span");
          credit.textContent = display.creditLabel + ": " + display.credit;
          totals.appendChild(debit);
          totals.appendChild(credit);
          summary.appendChild(totals);
          if (block.journalGroupId) {
            const linked = document.createElement("div");
            linked.textContent = page.direction === "rtl"
              ? "إجمالي قيد واحد موزع على صفحتين"
              : "Totals for one entry spanning two pages";
            linked.style.cssText = "font-weight:700;";
            summary.appendChild(linked);
          }
          const result = document.createElement("div");
          result.textContent = display.message;
          summary.appendChild(result);
          frame.appendChild(summary);
        }
        text.appendChild(frame);
      }
    }
  }
  root.appendChild(text);

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.setAttribute("width", String(width));
  svg.setAttribute("height", String(height));
  svg.style.cssText = "position:absolute;inset:0;pointer-events:none;";
  for (const stroke of page.strokes) {
    if (!stroke.points.length) continue;
    const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const style = printableInkStyle(stroke);
    p.setAttribute("d", notebookStrokePath(stroke));
    p.setAttribute("fill", "none");
    p.setAttribute("stroke", style.stroke);
    p.setAttribute("stroke-width", String(style.strokeWidth));
    p.setAttribute("opacity", style.opacity);
    p.setAttribute("stroke-linecap", "round");
    p.setAttribute("stroke-linejoin", "round");
    svg.appendChild(p);
  }
  root.appendChild(svg);

  // Images and stickers are rendered above ink, just as on the editable sheet.
  for (const object of page.objects ?? []) {
    const holder = document.createElement("div");
    holder.style.cssText = [
      "position:absolute", "display:flex", "align-items:center", "justify-content:center",
      `left:${object.x}px`, `top:${object.y}px`,
      `width:${object.width}px`, `height:${object.height}px`,
      "overflow:hidden",
    ].join(";");
    if (object.kind === "image" && object.src?.startsWith("data:image/")) {
      const img = document.createElement("img");
      img.src = object.src;
      img.alt = "Study notebook image";
      img.style.cssText = "width:100%;height:100%;object-fit:contain;";
      holder.appendChild(img);
    } else if (object.kind === "sticker") {
      const sticker = document.createElement("span");
      sticker.textContent = object.label ?? "";
      sticker.style.cssText = [
        "display:flex", "width:100%", "height:100%", "align-items:center",
        "justify-content:center", "line-height:1",
        `font-size:${Math.min(object.width, object.height) * .8}px`,
      ].join(";");
      holder.appendChild(sticker);
    } else if (["sticky", "formula", "checklist", "table"].includes(object.kind)) {
      const palette = STUDY_WIDGET_PALETTE[object.tone ?? "yellow"];
      holder.dir = page.direction;
      holder.style.cssText += [
        "box-sizing:border-box", "display:flex", "flex-direction:column",
        "align-items:stretch", "justify-content:flex-start", "gap:5px",
        "padding:10px", "border-radius:12px", "overflow:hidden",
        `background:${palette.background}`, `color:${palette.text}`,
        `border:1px solid ${palette.border}`,
      ].join(";");
      const heading = document.createElement("strong");
      heading.textContent = studyWidgetDefaultTitle(object.kind);
      heading.style.cssText = "flex-shrink:0;font-size:15px;letter-spacing:1px;opacity:.7;";
      holder.appendChild(heading);
      const title = document.createElement("div");
      title.textContent = object.label ?? "";
      title.style.cssText = [
        "overflow:hidden", "overflow-wrap:anywhere", "white-space:pre-wrap",
        "font-weight:700", "line-height:1.3",
        `font-size:${object.kind === "formula" ? 26 : object.kind === "sticky" ? 23 : 22}px`,
      ].join(";");
      holder.appendChild(title);
      if (object.kind === "checklist") {
        for (const item of object.items ?? []) {
          const entry = document.createElement("div");
          entry.textContent = `${item.checked ? "☑" : "☐"} ${item.text}`;
          entry.style.cssText = [
            "font-size:20px", "overflow-wrap:anywhere", "line-height:1.2",
            item.checked ? "text-decoration:line-through;opacity:.65" : "",
          ].join(";");
          holder.appendChild(entry);
        }
      }
      if (object.kind === "table") {
        const grid = document.createElement("div");
        const columns = object.cells?.[0]?.length || 2;
        grid.style.cssText = [
          "display:grid", `grid-template-columns:repeat(${columns},minmax(0,1fr))`,
          "width:100%", "overflow:hidden", "align-content:start",
        ].join(";");
        (object.cells ?? []).forEach((row, ri) => row.forEach(cell => {
          const entry = document.createElement("div");
          entry.textContent = cell || "\u00a0";
          entry.style.cssText = [
            "overflow:hidden", "text-overflow:ellipsis", "white-space:nowrap",
            "padding:5px", "font-size:17px", `border:1px solid ${palette.border}`,
            ri === 0 ? "font-weight:700;background:rgba(255,255,255,.42)" : "",
          ].join(";");
          grid.appendChild(entry);
        }));
        holder.appendChild(grid);
      }
    }
    root.appendChild(holder);
  }
  return root;
}

/** On-device, page-by-page PDF. No data is sent to a server.
 * Bitmap pages preserve paper textures, Arabic lettering and vector ink appearance.
 * Original JSON backup remains the editable format.
 */
export async function exportStudyNotebookPdf(
  pages: readonly NotebookPage[],
  filename: string,
  /** All curriculum pages, including pages outside the selected export. */
  journalContextPages: readonly NotebookPage[] = pages,
): Promise<void> {
  if (!pages.length) throw new Error("There are no notebook pages to export.");
  const journalReviews = reviewNotebookJournalsAcrossPages(journalContextPages);
  const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
    import("html2canvas-pro"),
    import("jspdf"),
  ]);
  const [firstWidth, firstHeight] = STUDY_NOTEBOOK_PDF_MM[pages[0].size];
  const pdf = new jsPDF({
    unit: "mm", format: [firstWidth, firstHeight],
    orientation: "portrait", compress: true,
  });
  const printRoot = document.createElement("div");
  printRoot.setAttribute("data-study-notebook-export-root", "");
  printRoot.style.cssText = [
    "position:fixed", "left:-99999px", "top:0",
    "width:760px", "z-index:-1", "pointer-events:none",
  ].join(";");
  document.body.appendChild(printRoot);

  try {
    if (document.fonts?.ready) await document.fonts.ready;
    for (let index = 0; index < pages.length; index++) {
      const page = pages[index];
      const [width, height] = STUDY_NOTEBOOK_PDF_MM[page.size];
      const node = buildNotebookPrintablePageDom(page, journalReviews);
      printRoot.appendChild(node);
      try {
        // We cannot trust bitmap clipping to preserve the learner's notes.
        // Refuse a PDF with hidden paragraphs or table rows. The on-page
        // continuation action moves only overflowing rich text to a new sheet.
        const content = node.querySelector<HTMLElement>("[data-notebook-print-text]");
        if (content && content.scrollHeight > content.clientHeight + 2) {
          throw new NotebookPdfOverflowError(index + 1, page.direction);
        }
        // Local raster assets must finish loading before the snapshot.
        await Promise.all(Array.from(node.querySelectorAll("img")).map(async img => {
          if (typeof img.decode === "function") await img.decode();
        }));
        const canvas = await html2canvas(node, {
          backgroundColor: null,
          scale: 1.6,
          width: NOTEBOOK_DESIGN_WIDTH,
          height: NOTEBOOK_SIZES[page.size].height,
          logging: false,
          useCORS: false,
          // Keep the original print surface outside the visible viewport,
          // but relocate its cloned copy so offscreen bounds cannot clip PDF pages.
          onclone: (clonedDoc) => {
            const clonedRoot = clonedDoc.querySelector("[data-study-notebook-export-root]") as HTMLElement | null;
            if (clonedRoot) clonedRoot.style.left = "0px";
          },
        });
        if (index > 0) pdf.addPage([width, height], "portrait");
        pdf.addImage(canvas.toDataURL("image/jpeg", .92), "JPEG", 0, 0, width, height);
      } finally {
        node.remove();
      }
    }
    pdf.save(filename);
  } finally {
    printRoot.remove();
  }
}
