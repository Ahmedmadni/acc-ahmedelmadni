import {
  cmaSourceHash,
  validateCmaTranslation,
  type CmaSourceText,
  type CmaTranslation,
} from "@/lib/cma-translation.shared";

export type CmaDeviceAvailability =
  | "available"
  | "downloadable"
  | "downloading"
  | "unavailable";

export interface CmaDeviceTranslator {
  translate(text: string): Promise<string>;
  destroy?(): void;
}

type DownloadEvent = Event & { loaded?: number };

export interface CmaTranslatorFactory {
  availability(options: { sourceLanguage: "en"; targetLanguage: "ar" }): Promise<CmaDeviceAvailability>;
  create(options: {
    sourceLanguage: "en";
    targetLanguage: "ar";
    monitor?: (monitor: {
      addEventListener(type: "downloadprogress", callback: (event: DownloadEvent) => void): void;
    }) => void;
  }): Promise<CmaDeviceTranslator>;
}

export const CMA_TRANSLATION_LANGUAGES = {
  sourceLanguage: "en",
  targetLanguage: "ar",
} as const;

/** Chrome/Edge's built-in, on-device Translator API; never call a remote AI endpoint. */
export function getDeviceTranslatorFactory(): CmaTranslatorFactory | null {
  if (typeof window === "undefined" || !window.isSecureContext) return null;
  const source = window as Window & { Translator?: CmaTranslatorFactory };
  return source.Translator ?? null;
}

/**
 * Generates a presentation-only translation on the user's device.
 * The English source, option order and answerIndex are never changed.
 * Call directly from a user click so a model download has user activation.
 */
export async function translateCmaOnDevice(
  question: CmaSourceText,
  factory: CmaTranslatorFactory,
  onProgress?: (message: string) => void,
): Promise<CmaTranslation> {
  // No async capability check before create(): downloads require a user gesture.
  const pending = factory.create({
    ...CMA_TRANSLATION_LANGUAGES,
    monitor(monitor) {
      monitor.addEventListener("downloadprogress", (event) => {
        const percent = typeof event.loaded === "number" ? Math.round(event.loaded * 100) : null;
        onProgress?.(percent === null ? "جار تنزيل حزمة اللغة..." : `تنزيل حزمة اللغة ${percent}%`);
      });
    },
  });
  const translator = await pending;
  try {
    const values = [
      question.question.en,
      ...question.choices.en,
      question.explanation.en,
    ];
    const rendered: string[] = [];
    for (const [index, source] of values.entries()) {
      onProgress?.(`ترجمة النصوص ${index + 1}/${values.length}`);
      // Numeric-only options should remain identical; do not need machine translation.
      rendered.push(/^[\s\d,.%‰()+\-−×÷/$€£¥]*$/.test(source) ? source : await translator.translate(source));
    }
    const candidate = {
      question: rendered[0],
      choices: rendered.slice(1, 1 + question.choices.en.length),
      explanation: rendered.at(-1),
    };
    const result = validateCmaTranslation(question, candidate);
    if (!result.valid) {
      throw new Error(
        result.reason === "numeric-mismatch"
          ? "لم تتطابق بعض الأرقام مع الأصل؛ لم يتم اعتماد الترجمة. يمكنك استخدام الترجمة الخارجية."
          : "لم تحقق الترجمة متطلبات السلامة؛ لم يتم اعتمادها. يمكنك استخدام الترجمة الخارجية.",
      );
    }
    return { ...result.data, sourceHash: cmaSourceHash(question), status: "machine" };
  } finally {
    translator.destroy?.();
  }
}

/** External, explicit user-initiated fallback; the user can see what will be sent. */
export function getCmaExternalTranslation(
  question: CmaSourceText,
  includeExplanation: boolean,
): { url: string; copyText: string; needsPaste: boolean } {
  const copyText = [
    question.question.en,
    ...question.choices.en.map((choice, i) => `${String.fromCharCode(65 + i)}. ${choice}`),
    ...(includeExplanation ? [`Explanation: ${question.explanation.en}`] : []),
  ].join("\n\n");
  const params = new URLSearchParams({ sl: "en", tl: "ar", op: "translate", text: copyText });
  const url = `https://translate.google.com/?${params.toString()}`;
  return url.length <= 1800
    ? { url, copyText, needsPaste: false }
    : {
        url: "https://translate.google.com/?sl=en&tl=ar&op=translate",
        copyText,
        needsPaste: true,
      };
}
