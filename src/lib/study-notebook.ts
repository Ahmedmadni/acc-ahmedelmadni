import type { StudySection } from "@/lib/library-study-language";

export type PaperPattern = "ruled" | "grid" | "dots" | "blank";
export type PaperShade = "white" | "ivory" | "cream" | "blue";
export type PaperSize = "A4" | "A5" | "Letter";
export type NotebookTool = "type" | "pen" | "eraser";
export type NotebookTypeface = "handwritten" | "regular";
export type NotebookDirection = "ltr" | "rtl";

export interface InkPoint {
  x: number;
  y: number;
  pressure: number;
  t: number;
}

export interface NotebookStroke {
  id: string;
  color: string;
  width: number;
  points: InkPoint[];
}

export interface NotebookPage {
  id: string;
  title: string;
  text: string;
  pattern: PaperPattern;
  shade: PaperShade;
  size: PaperSize;
  spacing: number;
  typeface: NotebookTypeface;
  direction: NotebookDirection;
  strokes: NotebookStroke[];
  updatedAt: number;
}

export interface NotebookStore {
  version: 1;
  pages: Record<StudySection, NotebookPage[]>;
  activePage: Record<StudySection, string>;
}

export const NOTEBOOK_STORAGE_KEY = "study-notebook-pages-v1";
export const MAX_NOTEBOOK_PAGES = 40;
export const MAX_NOTE_TEXT_LENGTH = 18000;
export const MAX_INK_STROKES = 1500;
export const MAX_INK_POINTS = 800;
export const NOTEBOOK_DESIGN_WIDTH = 760;

export const NOTEBOOK_SIZES: Record<PaperSize, { height: number; maxWidth: string }> = {
  A4: { height: 1075, maxWidth: "100%" },
  A5: { height: 1075, maxWidth: "80%" },
  Letter: { height: 983, maxWidth: "100%" },
};

export function createNotebookPage(id: string, direction: NotebookDirection = "ltr"): NotebookPage {
  return {
    id, title: "", text: "", pattern: "ruled", shade: "ivory",
    size: "A4", spacing: 43, typeface: "handwritten",
    direction, strokes: [], updatedAt: 0,
  };
}

export function emptyNotebook(): NotebookStore {
  return {
    version: 1,
    pages: {
      cma: [createNotebookPage("initial-cma")],
      standards: [createNotebookPage("initial-ifrs")],
    },
    activePage: { cma: "initial-cma", standards: "initial-ifrs" },
  };
}

function validRecord(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === "object" && !Array.isArray(value);
}

function oneOf<T extends string>(value: unknown, choices: readonly T[], fallback: T): T {
  return typeof value === "string" && choices.some((choice) => value === choice) ? value as T : fallback;
}
function numberBetween(value: unknown, min: number, max: number, fallback: number) {
  return typeof value === "number" && Number.isFinite(value)
    ? Math.max(min, Math.min(max, value))
    : fallback;
}

export function normalizeNotebook(value: unknown): NotebookStore {
  if (!validRecord(value) || value.version !== 1 || !validRecord(value.pages)) return emptyNotebook();
  const defaults = emptyNotebook();
  for (const section of ["cma", "standards"] as const) {
    const input = value.pages[section];
    if (!Array.isArray(input) || input.length === 0) continue;
    const ids = new Set<string>();
    const pages: NotebookPage[] = [];
    for (const raw of input.slice(0, MAX_NOTEBOOK_PAGES)) {
      if (!validRecord(raw) || typeof raw.id !== "string" || !raw.id || ids.has(raw.id)) continue;
      ids.add(raw.id);
      const strokes: NotebookStroke[] = [];
      if (Array.isArray(raw.strokes)) {
        for (const s of raw.strokes.slice(0, MAX_INK_STROKES)) {
          if (!validRecord(s) || typeof s.id !== "string" || !Array.isArray(s.points)) continue;
          const points = s.points.slice(0, MAX_INK_POINTS)
            .filter(validRecord)
            .map((p) => ({
              x: numberBetween(p.x, 0, NOTEBOOK_DESIGN_WIDTH, 0),
              y: numberBetween(p.y, 0, 1200, 0),
              pressure: numberBetween(p.pressure, 0.05, 1, 0.5),
              t: numberBetween(p.t, 0, 600000, 0),
            }));
          if (!points.length) continue;
          strokes.push({
            id: s.id,
            color: typeof s.color === "string" && /^#[0-9a-fA-F]{6}$/.test(s.color) ? s.color : "#24334a",
            width: numberBetween(s.width, 1, 9, 2.5),
            points,
          });
        }
      }
      pages.push({
        id: raw.id,
        title: typeof raw.title === "string" ? raw.title.slice(0, 90) : "",
        text: typeof raw.text === "string" ? raw.text.slice(0, MAX_NOTE_TEXT_LENGTH) : "",
        pattern: oneOf(raw.pattern, ["ruled", "grid", "dots", "blank"], "ruled"),
        shade: oneOf(raw.shade, ["white", "ivory", "cream", "blue"], "ivory"),
        size: oneOf(raw.size, ["A4", "A5", "Letter"], "A4"),
        spacing: numberBetween(raw.spacing, 30, 65, 43),
        typeface: oneOf(raw.typeface, ["handwritten", "regular"], "handwritten"),
        direction: oneOf(raw.direction, ["ltr", "rtl"], "ltr"),
        strokes,
        updatedAt: numberBetween(raw.updatedAt, 0, 9999999999999, 0),
      });
    }
    if (pages.length) {
      defaults.pages[section] = pages;
      const wanted = validRecord(value.activePage) ? value.activePage[section] : null;
      defaults.activePage[section] = typeof wanted === "string" && pages.some(p => p.id === wanted)
        ? wanted : pages[0].id;
    }
  }
  return defaults;
}

export function pageStrokePath(points: readonly InkPoint[]): string {
  if (!points.length) return "";
  const fmt = (n: number) => Math.round(n * 10) / 10;
  const p = points.map((point) => ({ x: fmt(point.x), y: fmt(point.y) }));
  if (p.length === 1) {
    return `M ${p[0].x} ${p[0].y} L ${p[0].x + .1} ${p[0].y + .1}`;
  }
  let path = `M ${p[0].x} ${p[0].y}`;
  for (let i = 1; i < p.length - 1; i++) {
    const middle = { x: fmt((p[i].x + p[i + 1].x) / 2), y: fmt((p[i].y + p[i + 1].y) / 2) };
    path += ` Q ${p[i].x} ${p[i].y} ${middle.x} ${middle.y}`;
  }
  const last = p[p.length - 1];
  path += ` L ${last.x} ${last.y}`;
  return path;
}

export function notebookPaperBackground(pattern: PaperPattern, shade: PaperShade, gap: number) {
  const colors: Record<PaperShade, string> = {
    white: "#fdfefe", ivory: "#fcfaf3", cream: "#f4ead4", blue: "#eaf4f8",
  };
  const line = shade === "blue" ? "rgba(80,120,145,.25)" : "rgba(108,132,151,.24)";
  const g = Math.max(12, gap);
  const texture = "radial-gradient(rgba(120,92,52,.07) .6px, transparent .9px)";
  const horizontal = `linear-gradient(to bottom, transparent calc(78% - .65px), ${line} calc(78% - .65px), ${line} calc(78% + .65px), transparent calc(78% + .65px))`;
  const vertical = `linear-gradient(to right, transparent calc(100% - .8px), ${line} calc(100% - .8px))`;
  const dot = `radial-gradient(circle, ${line} 1.1px, transparent 1.6px)`;
  const patternLayer = pattern === "ruled" ? horizontal
    : pattern === "grid" ? `${horizontal}, ${vertical}`
    : pattern === "dots" ? dot : "";
  const images = [patternLayer, texture].filter(Boolean).join(", ");
  const sizes = [pattern === "grid" ? `100% ${g}px, ${g}px ${g}px`
    : pattern === "blank" ? "" : `${g}px ${g}px`, "7px 7px"].filter(Boolean).join(", ");
  return { backgroundColor: colors[shade], backgroundImage: images, backgroundSize: sizes };
}
