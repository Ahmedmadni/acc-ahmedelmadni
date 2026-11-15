import type { NotebookDirection, NotebookStroke } from "@/lib/study-notebook";

type HandwritingStrokeLike = { addPoint: (point: { x: number; y: number; t: number }) => void };
type HandwritingDrawingLike = {
  addStroke: (stroke: HandwritingStrokeLike) => void;
  getPrediction: () => Promise<Array<{ text: string }>>;
  clear: () => void;
};
type HandwritingRecognizerLike = {
  startDrawing: (hints: { recognitionType: "text"; alternatives: number }) => HandwritingDrawingLike;
  finish: () => void;
};
type RecognitionNavigator = Navigator & {
  createHandwritingRecognizer?: (constraints: { languages: string[] }) => Promise<HandwritingRecognizerLike>;
};
type RecognitionWindow = Window & {
  HandwritingStroke?: new () => HandwritingStrokeLike;
};

/** Browser support is opt-in and device-dependent, especially for Arabic. */
export function supportsLocalHandwritingRecognition(
  nav: RecognitionNavigator | undefined = typeof navigator === "undefined" ? undefined : navigator as RecognitionNavigator,
  win: RecognitionWindow | undefined = typeof window === "undefined" ? undefined : window as RecognitionWindow,
): boolean {
  return typeof nav?.createHandwritingRecognizer === "function" && typeof win?.HandwritingStroke === "function";
}

/** Ink never leaves the device. The caller must preview/accept text before changing notes. */
export async function recognizeNotebookInk(
  strokes: readonly NotebookStroke[],
  direction: NotebookDirection,
  nav: RecognitionNavigator = navigator as RecognitionNavigator,
  win: RecognitionWindow = window as RecognitionWindow,
): Promise<string[]> {
  if (!supportsLocalHandwritingRecognition(nav, win)) {
    throw new Error("Device handwriting recognition is unavailable.");
  }
  if (!strokes.some((stroke) => stroke.points.length)) return [];
  const recognizer = await nav.createHandwritingRecognizer!({
    languages: [direction === "rtl" ? "ar" : "en"],
  });
  let drawing: HandwritingDrawingLike | null = null;
  try {
    drawing = recognizer.startDrawing({ recognitionType: "text", alternatives: 2 });
    for (const stroke of strokes) {
      if (!stroke.points.length) continue;
      const ink = new win.HandwritingStroke!();
      for (const point of stroke.points) {
        ink.addPoint({ x: point.x, y: point.y, t: point.t });
      }
      drawing.addStroke(ink);
    }
    const predictions = await drawing.getPrediction();
    return predictions.map((item) => item.text.trim()).filter(Boolean).slice(0, 3);
  } finally {
    drawing?.clear();
    recognizer.finish();
  }
}
