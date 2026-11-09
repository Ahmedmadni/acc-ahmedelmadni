import { useEffect, useRef, useState, type ReactNode } from "react";
import { Copy, ExternalLink, Languages, Loader2 } from "lucide-react";
import type { ExamQuestion } from "@/lib/exam-bank";
import {
  cmaSourceHash,
  validateCmaTranslation,
  type CmaTranslation,
} from "@/lib/cma-translation.shared";
import {
  CMA_TRANSLATION_LANGUAGES,
  getCmaExternalTranslation,
  getDeviceTranslatorFactory,
  translateCmaOnDevice,
  type CmaDeviceAvailability,
} from "@/lib/cma-translation.browser";

type Language = "ar" | "en";
type Availability = CmaDeviceAvailability | "checking" | "unsupported";
type View = {
  question: string;
  choices: string[];
  explanation: string;
  direction: "rtl" | "ltr";
  translated: boolean;
  control: ReactNode;
};

function cacheKey(question: ExamQuestion): string {
  return `cma-translation-v1:${question.id}:${cmaSourceHash(question)}`;
}

function getLocal(question: ExamQuestion): CmaTranslation | null {
  if (typeof window === "undefined") return null;
  try {
    const text = localStorage.getItem(cacheKey(question));
    if (!text) return null;
    const candidate = JSON.parse(text) as CmaTranslation;
    const parsed = validateCmaTranslation(question, candidate);
    if (!parsed.valid || candidate.sourceHash !== cmaSourceHash(question)) return null;
    return { ...parsed.data, sourceHash: candidate.sourceHash, status: candidate.status };
  } catch {
    return null;
  }
}

function saveLocal(question: ExamQuestion, translation: CmaTranslation): void {
  try {
    localStorage.setItem(cacheKey(question), JSON.stringify(translation));
  } catch {
    // Private browsing / storage quota: the original English question still works.
  }
}

/** Client-side translation; no Supabase, Lovable AI gateway, or paid server call. */
function useCmaTranslation(question: ExamQuestion, eligible: boolean) {
  const id = question.id;
  const sourceHash = cmaSourceHash(question);
  const activeId = useRef(id);
  activeId.current = id;

  const [entry, setEntry] = useState<{ id: string; value: CmaTranslation } | null>(null);
  const [availability, setAvailability] = useState<Availability>("checking");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [showOriginal, setShowOriginal] = useState(false);

  useEffect(() => {
    const saved = getLocal(question);
    setEntry(saved ? { id, value: saved } : null);
    setLoading(false);
    setProgress("");
    setError(null);
    setShowOriginal(false);
  }, [id, sourceHash]);

  useEffect(() => {
    if (!eligible) return;
    const factory = getDeviceTranslatorFactory();
    if (!factory) {
      setAvailability("unsupported");
      return;
    }
    let active = true;
    setAvailability("checking");
    void factory.availability(CMA_TRANSLATION_LANGUAGES)
      .then((result) => {
        if (active) setAvailability(result);
      })
      .catch(() => {
        if (active) setAvailability("unsupported");
      });
    return () => {
      active = false;
    };
  }, [id, sourceHash, eligible]);

  const translation =
    entry?.id === id && entry.value.sourceHash === sourceHash ? entry.value : null;

  async function requestTranslation() {
    if (!eligible || loading) return;
    if (translation) {
      setShowOriginal((previous) => !previous);
      return;
    }

    const factory = getDeviceTranslatorFactory();
    if (!factory || availability === "unsupported" || availability === "unavailable") return;

    // Invoked directly from a user click. Model downloads must start with user activation.
    setLoading(true);
    setError(null);
    setProgress("");
    try {
      const result = await translateCmaOnDevice(question, factory, (message) => {
        if (activeId.current === id) setProgress(message);
      });
      if (activeId.current === id) {
        saveLocal(question, result);
        setEntry({ id, value: result });
        setShowOriginal(false);
      }
    } catch (reason) {
      if (activeId.current === id) {
        setError(reason instanceof Error ? reason.message : "تعذرت الترجمة على الجهاز.");
      }
    } finally {
      if (activeId.current === id) {
        setLoading(false);
        setProgress("");
      }
    }
  }

  return {
    translation,
    availability,
    loading,
    progress,
    error,
    showOriginal,
    requestTranslation,
  };
}

export function CmaTranslatedQuestion({
  question,
  lang,
  tone = "light",
  revealExplanation = false,
  children,
}: {
  question: ExamQuestion;
  lang: Language;
  tone?: "light" | "dark";
  revealExplanation?: boolean;
  children: (view: View) => ReactNode;
}) {
  const eligible =
    question.track === "CMA" &&
    question.id.startsWith("cma-gleim-2025-") &&
    question.sourceLanguage === "en" &&
    lang === "ar";

  const state = useCmaTranslation(question, eligible);
  const [copyNotice, setCopyNotice] = useState("");
  const translated = Boolean(eligible && state.translation && !state.showOriginal);
  const source = translated ? state.translation : null;
  const external = getCmaExternalTranslation(question, revealExplanation);
  const supportsDevice =
    state.availability === "available" ||
    state.availability === "downloadable" ||
    state.availability === "downloading";
  const dark = tone === "dark";

  async function copyForExternalTranslation() {
    try {
      await navigator.clipboard.writeText(external.copyText);
      setCopyNotice("تم نسخ النص. الصقه في صفحة الترجمة الخارجية.");
    } catch {
      setCopyNotice("تعذر النسخ التلقائي. استخدم النسخ اليدوي للنص الإنجليزي.");
    }
  }

  const view: View = {
    question: source?.question ?? question.question[lang],
    choices: source?.choices ?? question.choices[lang],
    explanation: source?.explanation ?? question.explanation[lang],
    direction: translated ? "rtl" : question.sourceLanguage === "en" || lang === "en" ? "ltr" : "rtl",
    translated,
    control: eligible ? (
      <div className={`mt-3 flex flex-wrap items-center gap-2 text-xs ${dark ? "text-[#f3d28a]" : "text-[#76543F]"}`}>
        {state.translation || supportsDevice ? (
          <button
            type="button"
            onClick={() => void state.requestTranslation()}
            disabled={state.loading}
            className={`inline-flex min-h-9 items-center gap-2 rounded-lg border px-3 py-1.5 font-semibold disabled:opacity-60 ${dark ? "border-[#f3d28a]/40" : "border-[#A88765]/40"}`}
          >
            {state.loading ? <Loader2 className="size-4 animate-spin" /> : <Languages className="size-4" />}
            {state.loading ? state.progress || "جار الترجمة على الجهاز..." :
              state.translation ? state.showOriginal ? "عرض الترجمة المحفوظة" : "عرض الإنجليزية الأصلية" :
              "ترجمة على جهازي"}
          </button>
        ) : state.availability === "checking" ? (
          <span role="status">جار التحقق من دعم الترجمة على الجهاز...</span>
        ) : (
          <span>الترجمة على الجهاز غير متاحة في هذا المتصفح.</span>
        )}

        {state.availability === "downloadable" || state.availability === "downloading" ? (
          <span>قد يلزم تنزيل حزمة اللغة على جهازك لمرة واحدة.</span>
        ) : null}

        {translated && (
          <span className={dark ? "text-amber-200" : "text-amber-800"}>
            {state.translation?.status === "reviewed"
              ? "ترجمة تمت مراجعتها"
              : "ترجمة آلية محفوظة على جهازك · غير معتمدة محاسبيًا"}
          </span>
        )}

        {!state.translation && !state.loading && (
          <a
            href={external.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex min-h-9 items-center gap-1 rounded-lg border px-3 py-1.5 font-semibold ${dark ? "border-[#f3d28a]/30" : "border-[#A88765]/30"}`}
            title="يفتح Google Translate خارج الموقع؛ قد يُرسل نص السؤال إلى خدمة الترجمة الخارجية."
          >
            <ExternalLink className="size-3.5" />
            ترجمة مجانية خارج الموقع
          </a>
        )}

        {!state.translation && external.needsPaste && (
          <button
            type="button"
            onClick={() => void copyForExternalTranslation()}
            className={`inline-flex min-h-9 items-center gap-1 rounded-lg border px-3 py-1.5 font-semibold ${dark ? "border-[#f3d28a]/30" : "border-[#A88765]/30"}`}
          >
            <Copy className="size-3.5" /> نسخ النص للترجمة
          </button>
        )}

        {!state.translation && (
          <span className={dark ? "text-[#d6c9b6]" : "text-[#776c60]"}>
            الرابط الخارجي يرسل النص لخدمة مستقلة عند فتحه، دون استخدام رصيد Lovable.
          </span>
        )}
        {copyNotice && <span role="status">{copyNotice}</span>}
        {state.error && (
          <span role="alert" className={dark ? "text-red-200" : "text-red-700"}>
            {state.error}
          </span>
        )}
      </div>
    ) : null,
  };

  return <>{children(view)}</>;
}
