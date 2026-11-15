import type { NotebookPage, NotebookStroke } from "@/lib/study-notebook";
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
        const canvas = await html2canvas(node, {
          backgroundColor: null,
          scale: 1.6,
          width: NOTEBOOK_DESIGN_WIDTH,
          height: NOTEBOOK_SIZES[page.size].height,
          logging: false,
          useCORS: false,
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
