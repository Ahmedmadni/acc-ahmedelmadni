import type { NotebookPage, NotebookStroke } from "@/lib/study-notebook";
import { STUDY_WIDGET_PALETTE, studyWidgetDefaultTitle } from "@/lib/study-notebook-widgets";
import {
  NOTEBOOK_DESIGN_WIDTH, NOTEBOOK_SIZES, notebookPaperBackground,
  notebookStrokePath,
} from "@/lib/study-notebook";

export const STUDY_NOTEBOOK_PDF_MM = {
  A4: [210, 297],
  A5: [148, 210],
  Letter: [215.9, 279.4],
} as const;

export function printableInkStyle(stroke: NotebookStroke) {
  return {
    stroke: stroke.color,
    strokeWidth: stroke.kind === "highlighter" ? Math.max(12, stroke.width) : stroke.width,
    opacity: stroke.kind === "highlighter" ? "0.32" : "0.95",
  };
}

function buildPageDom(page: NotebookPage) {
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
): Promise<void> {
  if (!pages.length) throw new Error("There are no notebook pages to export.");
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
      const node = buildPageDom(page);
      printRoot.appendChild(node);
      try {
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
