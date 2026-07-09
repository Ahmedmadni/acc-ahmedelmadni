import jsPDF from "jspdf";
import html2canvas from "html2canvas-pro";
import QRCode from "qrcode";

export type ExportOptions = {
  /** DOM element id holding the calculator markup (inputs + results) */
  elementId: string;
  /** Tool title in both languages */
  title: { ar: string; en: string };
  /** Standard reference (IFRS/IAS/...) optional */
  standard?: { ar: string; en: string };
  /** Short description / about */
  about?: { ar: string; en: string };
  /** Current language for chrome strings */
  lang: "ar" | "en";
  /** Optional file name (without extension) */
  fileName?: string;
};

const BRAND = {
  name: { ar: "أحمد المدني — أدوات محاسبية ذكية", en: "Ahmed Elmadni — Smart Accounting Tools" },
  gold: "#b8862e",
  goldSoft: "#d7aa52",
  ink: "#0b1220",
  soft: "#475569",
  line: "#d7aa52",
};

/**
 * jsPDF's built-in fonts (helvetica/times/courier) have no Arabic glyph
 * coverage and jsPDF does no Arabic shaping/bidi reordering — drawing
 * Arabic strings with `pdf.text()` renders blank or garbled output. Rather
 * than embedding and shaping a custom font, chrome text (header, title,
 * footer, QR caption) is rendered as real HTML in the page's own language
 * and captured the same way the tool content already is, then placed as an
 * image. This is the same technique already proven reliable for Arabic
 * elsewhere in this file, and keeps the PDF's chrome language in sync with
 * whatever language the tool page was viewed in.
 */
async function captureChromeBlock(
  html: string,
  widthPx: number,
  isRtl: boolean,
): Promise<HTMLCanvasElement> {
  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.left = "-99999px";
  container.style.top = "0";
  container.style.width = `${widthPx}px`;
  container.style.fontFamily = '"Cairo", "Tahoma", Arial, sans-serif';
  container.style.background = "#ffffff";
  container.dir = isRtl ? "rtl" : "ltr";
  container.innerHTML = html;
  document.body.appendChild(container);
  const images = Array.from(container.querySelectorAll("img"));
  await Promise.all(
    images.map((img) =>
      img.complete
        ? Promise.resolve()
        : new Promise<void>((resolve) => {
            img.onload = () => resolve();
            img.onerror = () => resolve();
          }),
    ),
  );
  if (document.fonts && document.fonts.ready) await document.fonts.ready;
  await new Promise((r) => setTimeout(r, 30));
  try {
    return await html2canvas(container, {
      backgroundColor: "#ffffff",
      scale: 2,
      useCORS: true,
      allowTaint: true,
      logging: false,
    });
  } finally {
    container.remove();
  }
}

type TouchedStyle = {
  node: HTMLElement;
  transform: string;
  filter: string;
  letterSpacing: string;
  wordSpacing: string;
  fontFamily: string;
  unicodeBidi: string;
  direction: string;
  overflow: string;
  lineHeight: string;
  padding: string;
  minHeight: string;
  height: string;
  whiteSpace: string;
  textAlign: string;
};

const NON_TEXT_INPUT_TYPES = new Set(["checkbox", "radio", "button", "submit", "file", "hidden"]);

/**
 * html2canvas-pro draws form-control values through its own synthetic
 * "input value" code path rather than as normal text nodes — it also sets
 * the Canvas 2D `ctx.direction` from the computed CSS direction before
 * drawing. That combination makes Chromium apply Arabic OpenType "locl"
 * digit substitution to plain Western-digit values (e.g. "2" is drawn as
 * "٢"), even when the field's own `dir`/`lang` say otherwise. Swapping each
 * field for a plain <span> with the same text sidesteps that code path
 * entirely — spans go through html2canvas's normal, more reliable text
 * rendering — while copying the field's own (already-corrected) computed
 * direction so genuinely-Arabic text fields keep rendering RTL.
 */
function swapFieldsForCapture(root: HTMLElement): () => void {
  const fields = Array.from(
    root.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
      "input, textarea, select",
    ),
  ).filter((f) => !(f instanceof HTMLInputElement && NON_TEXT_INPUT_TYPES.has(f.type)));

  const restores: Array<() => void> = [];
  fields.forEach((field) => {
    const text =
      field instanceof HTMLSelectElement
        ? (field.options[field.selectedIndex]?.text ?? field.value)
        : field.value;
    const cs = getComputedStyle(field);
    const span = document.createElement("span");
    span.textContent = text || "";
    span.style.display = "inline-block";
    span.style.boxSizing = "border-box";
    span.style.width = cs.width;
    span.style.minHeight = cs.minHeight;
    span.style.padding = cs.padding;
    span.style.font = cs.font;
    span.style.fontSize = cs.fontSize;
    span.style.fontFamily = cs.fontFamily;
    span.style.color = cs.color;
    span.style.textAlign = cs.textAlign;
    span.style.borderBottom = cs.borderBottom;
    span.style.direction = cs.direction;
    span.style.unicodeBidi = cs.unicodeBidi || "plaintext";
    span.style.whiteSpace = "pre-wrap";
    field.style.display = "none";
    field.insertAdjacentElement("afterend", span);
    restores.push(() => {
      span.remove();
      field.style.display = "";
    });
  });
  return () => restores.forEach((r) => r());
}

function applyPdfSafeStyles(el: HTMLElement) {
  document.body.classList.add("pdf-export-mode");
  el.classList.add("pdf-arabic-safe");
  const isRtl = el.getAttribute("dir") === "rtl" || el.getAttribute("lang") === "ar";
  const touched = [el, ...Array.from(el.querySelectorAll<HTMLElement>("*"))];
  const previousStyles: TouchedStyle[] = touched.map((node) => ({
    node,
    transform: node.style.transform,
    filter: node.style.filter,
    letterSpacing: node.style.letterSpacing,
    wordSpacing: node.style.wordSpacing,
    fontFamily: node.style.fontFamily,
    unicodeBidi: node.style.unicodeBidi,
    direction: node.style.direction,
    overflow: node.style.overflow,
    lineHeight: node.style.lineHeight,
    padding: node.style.padding,
    minHeight: node.style.minHeight,
    height: node.style.height,
    whiteSpace: node.style.whiteSpace,
    textAlign: node.style.textAlign,
  }));
  touched.forEach((node) => {
    node.style.transform = "none";
    node.style.filter = "none";
    node.style.letterSpacing = "0";
    node.style.wordSpacing = "0";
    node.style.fontFamily = '"Cairo", "Tahoma", Arial, sans-serif';
    node.style.unicodeBidi = "isolate";
    node.style.overflow = "visible";
    if (isRtl && node.getAttribute("dir") !== "ltr") {
      node.style.direction = "rtl";
      node.style.textAlign = node.style.textAlign || "right";
    }
    if (node.matches("input, textarea, select")) {
      node.style.minHeight = "30px";
      node.style.height = "auto";
      node.style.lineHeight = "1.7";
      node.style.padding = "4px 8px";
      node.style.whiteSpace = "pre-wrap";
    }
  });
  const restoreFields = swapFieldsForCapture(el);
  return () => {
    restoreFields();
    previousStyles.forEach(
      ({
        node,
        transform,
        filter,
        letterSpacing,
        wordSpacing,
        fontFamily,
        unicodeBidi,
        direction,
        overflow,
        lineHeight,
        padding,
        minHeight,
        height,
        whiteSpace,
        textAlign,
      }) => {
        node.style.transform = transform;
        node.style.filter = filter;
        node.style.letterSpacing = letterSpacing;
        node.style.wordSpacing = wordSpacing;
        node.style.fontFamily = fontFamily;
        node.style.unicodeBidi = unicodeBidi;
        node.style.direction = direction;
        node.style.overflow = overflow;
        node.style.lineHeight = lineHeight;
        node.style.padding = padding;
        node.style.minHeight = minHeight;
        node.style.height = height;
        node.style.whiteSpace = whiteSpace;
        node.style.textAlign = textAlign;
      },
    );
    el.classList.remove("pdf-arabic-safe");
    document.body.classList.remove("pdf-export-mode");
  };
}

/** Capture a DOM element to a high-resolution canvas using a temporary light theme. */
export async function capturePdfElement(el: HTMLElement): Promise<HTMLCanvasElement> {
  const restore = applyPdfSafeStyles(el);
  // Ensure web fonts (Cairo for Arabic / Inter for English) are fully loaded
  if (document.fonts && document.fonts.ready) await document.fonts.ready;
  await new Promise((r) => setTimeout(r, 200));
  try {
    return await html2canvas(el, {
      backgroundColor: "#ffffff",
      scale: 2,
      useCORS: true,
      allowTaint: true,
      logging: false,
      windowWidth: Math.max(el.scrollWidth, el.getBoundingClientRect().width),
      windowHeight: Math.max(el.scrollHeight, el.getBoundingClientRect().height),
    });
  } finally {
    restore();
  }
}

/** Capture a DOM element to a high-resolution canvas using a temporary light theme. */
async function captureLight(el: HTMLElement): Promise<HTMLCanvasElement> {
  return capturePdfElement(el);
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function exportToolReportPdf(opts: ExportOptions): Promise<void> {
  const el = document.getElementById(opts.elementId);
  if (!el) throw new Error(`Element #${opts.elementId} not found`);

  const isAR = opts.lang === "ar";
  const t = isAR
    ? {
        inputs: "المدخلات والنتائج",
        generatedAt: "تاريخ الإنشاء",
        scan: "امسح الرمز لفتح هذه الأداة",
        standard: "المعيار ذو الصلة",
        footer: "تم الإنشاء بواسطة أدوات أحمد المدني المحاسبية",
        page: "صفحة",
        of: "من",
      }
    : {
        inputs: "Inputs & Results",
        generatedAt: "Generated at",
        scan: "Scan to open this tool",
        standard: "Related standard",
        footer: "Generated by Ahmed Elmadni Accounting Tools",
        page: "Page",
        of: "of",
      };
  const title = isAR ? opts.title.ar : opts.title.en;
  const standardText = opts.standard ? (isAR ? opts.standard.ar : opts.standard.en) : "";
  const aboutText = opts.about ? (isAR ? opts.about.ar : opts.about.en) : "";
  const brandName = isAR ? BRAND.name.ar : BRAND.name.en;

  const canvas = await captureLight(el);
  const imgData = canvas.toDataURL("image/jpeg", 0.95);

  const pdf = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });
  const pageW = pdf.internal.pageSize.getWidth();
  const pageH = pdf.internal.pageSize.getHeight();
  const margin = 14;
  // Single px-per-mm scale shared by every captured chrome block, so a
  // block's resulting height in mm (derived from its canvas' aspect ratio)
  // stays visually consistent across header/title/footer/QR regardless of
  // how wide each one is captured at.
  const SCALE = 1600 / pageW;
  const mmFromCanvas = (c: HTMLCanvasElement, widthMm: number) => (c.height * widthMm) / c.width;

  // ---------- QR code (captured with its caption as one block) ----------
  const url = typeof window !== "undefined" ? window.location.href : "";
  let qrDataUrl = "";
  try {
    qrDataUrl = await QRCode.toDataURL(url, {
      margin: 0,
      width: 256,
      color: { dark: "#0b1220", light: "#ffffff" },
    });
  } catch {
    qrDataUrl = "";
  }
  const qrBlockWmm = 32;
  let qrCanvas: HTMLCanvasElement | null = null;
  let qrBlockHmm = 0;
  if (qrDataUrl) {
    qrCanvas = await captureChromeBlock(
      `<div style="display:flex;flex-direction:column;align-items:center;background:#ffffff;border:1px solid #e2e8f0;padding:6px;">
        <img src="${qrDataUrl}" style="width:200px;height:200px;display:block;" />
        <div style="color:#64748b;font-size:15px;margin-top:6px;text-align:center;max-width:200px;line-height:1.35;">${escapeHtml(t.scan)}</div>
      </div>`,
      qrBlockWmm * SCALE,
      isAR,
    );
    qrBlockHmm = mmFromCanvas(qrCanvas, qrBlockWmm);
  }

  // ---------- Footer (captured per page — only the page number changes) ----------
  const footerWmm = pageW;
  const captureFooter = (page: number, total: number) =>
    captureChromeBlock(
      `<div style="border-top:2px solid #d7aa52;padding:14px ${margin * SCALE}px 0;display:flex;align-items:center;justify-content:space-between;">
        <span style="color:#64748b;font-style:italic;font-size:15px;">${escapeHtml(t.footer)}</span>
        <span style="color:#64748b;font-size:15px;">${escapeHtml(t.page)} ${page} ${escapeHtml(t.of)} ${total}</span>
      </div>`,
      footerWmm * SCALE,
      isAR,
    );
  const sampleFooterCanvas = await captureFooter(1, 1);
  const footerHmm = mmFromCanvas(sampleFooterCanvas, footerWmm);

  // Fixed bottom boundary reserved on every page for the footer and,
  // whichever page turns out to be the last one, the QR block. The
  // pagination loop below doesn't know in advance which slice will be the
  // last page, so every page reserves the same safe margin — simpler and
  // more robust than special-casing "the last page" mid-slice.
  const bottomGap = 6;
  const bottomReserve = pageH - footerHmm - bottomGap - qrBlockHmm - bottomGap;

  // ---------- Header (identical on every page — captured once) ----------
  const headerWmm = pageW;
  const headerCanvas = await captureChromeBlock(
    `<div style="display:flex;align-items:center;justify-content:space-between;background:#0b1220;padding:34px ${margin * SCALE}px;border-bottom:5px solid #b8862e;">
      <div>
        <div style="color:#f3d28a;font-weight:800;font-size:24px;">${escapeHtml(brandName)}</div>
        <div style="color:#d7aa52;font-size:14px;margin-top:4px;">ahmedelmadni.com</div>
      </div>
      <div style="color:#ffffff;font-size:14px;">${escapeHtml(t.generatedAt)}: ${escapeHtml(
        new Date().toLocaleString(isAR ? "ar-EG" : "en-US", { numberingSystem: "latn" }),
      )}</div>
    </div>`,
    headerWmm * SCALE,
    isAR,
  );
  const headerHmm = mmFromCanvas(headerCanvas, headerWmm);
  const headerImg = headerCanvas.toDataURL("image/png");
  const drawHeader = () => pdf.addImage(headerImg, "PNG", 0, 0, headerWmm, headerHmm);

  drawHeader();

  // ---------- Title block ----------
  const titleWmm = pageW - margin * 2;
  const secondaryTitle = isAR ? opts.title.en : opts.title.ar;
  const titleCanvas = await captureChromeBlock(
    `<div style="padding:6px 0;">
      <div style="color:#0b1220;font-weight:800;font-size:30px;line-height:1.3;">${escapeHtml(title)}</div>
      ${secondaryTitle ? `<div style="color:#78551a;font-weight:700;font-size:18px;margin-top:4px;">${escapeHtml(secondaryTitle)}</div>` : ""}
      ${standardText ? `<div style="color:#475569;font-size:15px;margin-top:8px;">${escapeHtml(t.standard)}: ${escapeHtml(standardText)}</div>` : ""}
      ${aboutText ? `<div style="color:#475569;font-size:15px;margin-top:8px;line-height:1.55;">${escapeHtml(aboutText)}</div>` : ""}
      <div style="border-top:1px solid #d7aa52;margin-top:14px;padding-top:10px;">
        <span style="color:#b8862e;font-weight:800;font-size:17px;">${escapeHtml(t.inputs)}</span>
      </div>
    </div>`,
    titleWmm * SCALE,
    isAR,
  );
  const titleHmm = mmFromCanvas(titleCanvas, titleWmm);
  pdf.addImage(
    titleCanvas.toDataURL("image/png"),
    "PNG",
    margin,
    headerHmm + 4,
    titleWmm,
    titleHmm,
  );

  // ---------- Place captured content image, paginating if needed ----------
  const imgW = pageW - margin * 2;
  const imgH = (canvas.height * imgW) / canvas.width;

  const firstAreaTop = headerHmm + 4 + titleHmm + 3;
  const firstAreaH = bottomReserve - firstAreaTop;

  if (imgH <= firstAreaH) {
    pdf.addImage(imgData, "JPEG", margin, firstAreaTop, imgW, imgH);
  } else {
    // Slice the canvas into A4-fitting strips
    let sliceHpx = (firstAreaH * canvas.width) / imgW;
    let renderedPx = 0;
    let topMm = firstAreaTop;
    while (renderedPx < canvas.height) {
      const remainingPx = canvas.height - renderedPx;
      const takePx = Math.min(sliceHpx, remainingPx);
      const sliceCanvas = document.createElement("canvas");
      sliceCanvas.width = canvas.width;
      sliceCanvas.height = takePx;
      const ctx = sliceCanvas.getContext("2d");
      if (!ctx) break;
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, sliceCanvas.width, sliceCanvas.height);
      ctx.drawImage(canvas, 0, renderedPx, canvas.width, takePx, 0, 0, canvas.width, takePx);
      const sliceData = sliceCanvas.toDataURL("image/jpeg", 0.95);
      const drawnHmm = (takePx * imgW) / canvas.width;
      pdf.addImage(sliceData, "JPEG", margin, topMm, imgW, drawnHmm);
      renderedPx += takePx;
      if (renderedPx < canvas.height) {
        pdf.addPage();
        drawHeader();
        topMm = headerHmm + 6;
        const availMm = bottomReserve - topMm;
        sliceHpx = (availMm * canvas.width) / imgW;
      }
    }
  }

  // ---------- Footer (+ QR on the last page) ----------
  const totalPages = pdf.getNumberOfPages();
  for (let p = 1; p <= totalPages; p++) {
    pdf.setPage(p);
    const fc =
      p === 1 && totalPages === 1 ? sampleFooterCanvas : await captureFooter(p, totalPages);
    const fHmm = mmFromCanvas(fc, footerWmm);
    pdf.addImage(fc.toDataURL("image/png"), "PNG", 0, pageH - fHmm, footerWmm, fHmm);
  }

  if (qrCanvas) {
    pdf.setPage(totalPages);
    const qrX = pageW - margin - qrBlockWmm;
    const qrY = pageH - footerHmm - bottomGap - qrBlockHmm;
    pdf.addImage(qrCanvas.toDataURL("image/png"), "PNG", qrX, qrY, qrBlockWmm, qrBlockHmm);
  }

  const safe = (s: string) => s.replace(/[^a-zA-Z0-9-_]+/g, "_");
  const name = opts.fileName || safe(`${opts.title.en}-${new Date().toISOString().slice(0, 10)}`);
  pdf.save(`${name}.pdf`);
}
