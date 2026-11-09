import { useEffect, useRef, useState, type ReactNode } from "react";
import { Languages, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import type { ExamQuestion } from "@/lib/exam-bank";
import {
  cmaSourceHash,
  validateCmaTranslation,
  type CmaTranslation,
} from "@/lib/cma-translation.shared";

type Language = "ar" | "en";
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
    // If browser storage is disabled/full, the server-side cache still works.
  }
}

type TranslationResult = { translation?: CmaTranslation; error?: string };

async function parseResponse(response: Response): Promise<TranslationResult> {
  try {
    return (await response.json()) as TranslationResult;
  } catch {
    return {};
  }
}

/** One hook instance per displayed question, never one per option. */
export function useCmaTranslation(question: ExamQuestion | null) {
  const id = question?.id ?? "";
  const sourceHash = question ? cmaSourceHash(question) : "";
  const activeId = useRef(id);
  activeId.current = id;
  const [entry, setEntry] = useState<{ id: string; value: CmaTranslation } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showOriginal, setShowOriginal] = useState(false);

  useEffect(() => {
    const cached = question ? getLocal(question) : null;
    setEntry(cached ? { id, value: cached } : null);
    setError(null);
    setLoading(false);
    setShowOriginal(false);
  }, [id, sourceHash]);

  const translation =
    entry?.id === id && entry.value.sourceHash === sourceHash ? entry.value : null;

  async function requestTranslation() {
    const target = question;
    if (!target || target.sourceLanguage !== "en" || loading) return;
    if (translation) {
      setShowOriginal((previous) => !previous);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const url = `/api/cma-translate?questionId=${encodeURIComponent(target.id)}`;
      const cached = await fetch(url, { method: "GET", credentials: "same-origin" });
      let result: TranslationResult;
      if (cached.ok) {
        result = await parseResponse(cached);
      } else if (cached.status === 404) {
        const session = await supabase.auth.getSession();
        const token = session.data.session?.access_token;
        if (!token) {
          throw new Error("سجل الدخول لطلب ترجمة جديدة؛ الترجمات المحفوظة متاحة للجميع.");
        }
        const created = await fetch("/api/cma-translate", {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
          body: JSON.stringify({ questionId: target.id }),
        });
        result = await parseResponse(created);
        if (!created.ok) {
          throw new Error(
            created.status === 429 ? "تم بلوغ الحد اليومي للترجمة. حاول لاحقًا." :
            created.status === 422 ? "فشلت مراجعة الأرقام أو بنية الترجمة؛ تم الاحتفاظ بالأصل." :
            created.status === 503 ? "خدمة الترجمة غير مهيأة أو قاعدة البيانات لم تُحدّث بعد." :
            result.error ?? "تعذرت ترجمة السؤال الآن.",
          );
        }
      } else {
        throw new Error(
          cached.status === 503 ? "خدمة حفظ الترجمات لم تُفعّل بعد." :
          resultMessage(cached.status),
        );
      }

      const value = result.translation;
      const valid = value && validateCmaTranslation(target, value);
      if (!value || !valid || !valid.valid || value.sourceHash !== cmaSourceHash(target)) {
        throw new Error("الترجمة المستلمة غير متوافقة مع النسخة الأصلية.");
      }
      if (activeId.current === target.id) {
        saveLocal(target, value);
        setEntry({ id: target.id, value });
        setShowOriginal(false);
      }
    } catch (reason) {
      if (activeId.current === target.id) {
        setError(reason instanceof Error ? reason.message : "تعذر الحصول على الترجمة.");
      }
    } finally {
      if (activeId.current === target.id) setLoading(false);
    }
  }

  return { translation, loading, error, showOriginal, requestTranslation };
}

function resultMessage(status: number) {
  return status === 401 ? "يلزم تسجيل الدخول." : "تعذر تحميل الترجمة المحفوظة.";
}

export function CmaTranslatedQuestion({
  question,
  lang,
  tone = "light",
  children,
}: {
  question: ExamQuestion;
  lang: Language;
  tone?: "light" | "dark";
  children: (view: View) => ReactNode;
}) {
  const state = useCmaTranslation(question);
  const eligible = question.track === "CMA" && question.id.startsWith("cma-gleim-2025-") && question.sourceLanguage === "en" && lang === "ar";
  const translated = Boolean(eligible && state.translation && !state.showOriginal);
  const source = translated ? state.translation : null;
  const view: View = {
    question: source?.question ?? question.question[lang],
    choices: source?.choices ?? question.choices[lang],
    explanation: source?.explanation ?? question.explanation[lang],
    direction: eligible && translated ? "rtl" : question.sourceLanguage === "en" || lang === "en" ? "ltr" : "rtl",
    translated,
    control: eligible ? (
      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
        <button
          type="button"
          onClick={() => void state.requestTranslation()}
          disabled={state.loading}
          className={`inline-flex min-h-9 items-center gap-2 rounded-lg border px-3 py-1.5 font-semibold disabled:opacity-60 ${tone === "dark" ? "border-[#f3d28a]/40 text-[#f3d28a]" : "border-[#A88765]/40 text-[#76543F]"}`}
        >
          {state.loading ? <Loader2 className="size-4 animate-spin" /> : <Languages className="size-4" />}
          {state.loading ? "جار الترجمة..." :
            state.translation ? state.showOriginal ? "عرض الترجمة" : "عرض النص الإنجليزي الأصلي" :
            "ترجمة إلى العربية"}
        </button>
        {translated && (
          <span className={tone === "dark" ? "text-amber-200" : "text-amber-800"}>
            {state.translation?.status === "reviewed" ? "ترجمة تمت مراجعتها" : "ترجمة آلية للمساعدة على الدراسة · غير معتمدة علميًا"}
          </span>
        )}
        {state.error && <span role="alert" className={tone === "dark" ? "text-red-200" : "text-red-700"}>{state.error}</span>}
      </div>
    ) : null,
  };
  return <>{children(view)}</>;
}
