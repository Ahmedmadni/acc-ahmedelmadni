import { useMemo, useState, type ChangeEvent } from "react";
import { BookOpenText, CheckCircle2, ChevronLeft, ChevronRight, FileJson2, LockKeyhole, XCircle } from "lucide-react";
import { CmaTranslatedQuestion } from "@/components/library/CmaTranslatedQuestion";
import {
  PRIVATE_CMA_DOMAINS,
  parseCmaPrivateBank,
  toPrivateExamQuestion,
  type PrivateCmaBank,
  type PrivateCmaSection,
} from "@/lib/cma-private-bank";

type Language = "ar" | "en";
const MAX_FILE_BYTES = 5 * 1024 * 1024;
const labels = ["A", "B", "C", "D"];

/**
 * Reading and quiz answers stay in React memory. No remote import endpoint,
 * no Supabase writes, no localStorage and no third-party translation link.
 */
export function CmaPrivateBank({ lang }: { lang: Language }) {
  const [bank, setBank] = useState<PrivateCmaBank | null>(null);
  const [section, setSection] = useState<"all" | PrivateCmaSection>("all");
  const [position, setPosition] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const visible = useMemo(
    () => (bank ? bank.questions.filter((q) => section === "all" || q.section === section) : []),
    [bank, section],
  );
  const current = visible[position] ?? null;
  const question = useMemo(() => current ? toPrivateExamQuestion(current) : null, [current]);
  const attempted = bank
    ? bank.questions.filter((item) => answers[item.id] !== undefined).length
    : 0;
  const correct = bank
    ? bank.questions.filter((item) => answers[item.id] === item.correctIndex).length
    : 0;
  const chosen = current ? answers[current.id] : undefined;

  async function loadFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    if (file.size > MAX_FILE_BYTES) {
      setError("الملف أكبر من الحد المسموح (5 ميجابايت).");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const text = await file.text();
      const parsed = parseCmaPrivateBank(JSON.parse(text) as unknown);
      setBank(parsed);
      setAnswers({});
      setSection("all");
      setPosition(0);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "تعذر قراءة الملف المحلي.");
    } finally {
      setLoading(false);
    }
  }

  function chooseSection(value: "all" | PrivateCmaSection) {
    setSection(value);
    setPosition(0);
  }

  return (
    <section
      className="mt-7 rounded-3xl border border-[#A88765]/30 bg-[#1C1B19] p-5 text-[#FCFBF9] sm:p-7"
      aria-label={lang === "ar" ? "بنك CMA الخاص على الجهاز" : "Local private CMA study bank"}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-[#d7b993]">
            <LockKeyhole className="size-5" aria-hidden="true" />
            <h3 className="font-display text-lg font-black sm:text-xl">
              {lang === "ar" ? "بنك أسئلة خاص — على جهازك فقط" : "Private question bank — on your device"}
            </h3>
          </div>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-[#D4C9BB]">
            {lang === "ar"
              ? "ارفع ملف JSON الخاص الذي أعددناه من حزمة ICMA 2024 للتدرب عليه شخصيًا. يُقرأ الملف داخل متصفحك ولا يُرفع إلى السيرفر أو GitHub أو قاعدة بيانات. لن يُرسل نص الأسئلة إلى خدمات الترجمة الخارجية."
              : "Choose your privately extracted ICMA 2024 JSON for personal practice. It is read in your browser only—never sent to a server, GitHub or database. External translation is disabled to protect the source."}
          </p>
          <p className="mt-1 text-xs leading-6 text-[#BDB4AA]">
            {lang === "ar"
              ? "تنبيه حقوقي: محتوى الحزمة محمي ولا يجوز نشره أو مشاركته. لا يتم الاحتفاظ بالأسئلة بعد إغلاق أو تحديث الصفحة."
              : "Copyright notice: this protected package may not be redistributed. Questions are removed when the page is refreshed or closed."}
          </p>
        </div>
        <label className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-xl bg-[#F5F1EB] px-4 py-2.5 text-sm font-bold text-[#1C1B19] focus-within:ring-2 focus-within:ring-[#d7b993]">
          <FileJson2 className="size-4" aria-hidden="true" />
          {loading
            ? (lang === "ar" ? "جار الفحص..." : "Validating...")
            : (lang === "ar" ? "اختيار ملف الأسئلة الخاص" : "Open private JSON bank")}
          <input
            type="file"
            className="sr-only"
            aria-label={lang === "ar" ? "اختيار ملف JSON خاص" : "Choose private JSON file"}
            accept=".json,application/json"
            disabled={loading}
            onChange={(event) => void loadFile(event)}
          />
        </label>
      </div>
      {error && <p role="alert" className="mt-3 rounded-xl bg-red-900/25 p-3 text-sm text-red-200">{error}</p>}
      {bank && (
        <div className="mt-6 border-t border-[#A88765]/25 pt-5">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#e5d0b6]">
            <p>
              <BookOpenText className="me-1 inline size-4" />
              {bank.questions.length} {lang === "ar" ? "سؤالًا محليًا" : "local questions"}
            </p>
            <p>
              {lang === "ar" ? "المحاولات" : "Attempted"}: {attempted} ·
              {" "}{lang === "ar" ? "الصحيحة" : "Correct"}: {correct}
            </p>
            <button
              type="button"
              onClick={() => { setBank(null); setAnswers({}); setPosition(0); }}
              className="rounded-lg border border-[#A88765]/40 px-3 py-1.5 hover:bg-white/10"
            >
              {lang === "ar" ? "إغلاق البنك الخاص" : "Clear private bank"}
            </button>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => chooseSection("all")}
              aria-pressed={section === "all"}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${section === "all" ? "border-[#d7b993] bg-[#d7b993] text-[#1C1B19]" : "border-[#A88765]/30 text-[#e5d0b6]"}`}
            >
              {lang === "ar" ? "الكل" : "All"} · {bank.questions.length}
            </button>
            {(Object.keys(PRIVATE_CMA_DOMAINS) as PrivateCmaSection[]).map((code) => {
              const total = bank.questions.filter((item) => item.section === code).length;
              return (
                <button
                  key={code}
                  type="button"
                  onClick={() => chooseSection(code)}
                  aria-pressed={section === code}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${section === code ? "border-[#d7b993] bg-[#d7b993] text-[#1C1B19]" : "border-[#A88765]/30 text-[#e5d0b6]"}`}
                >
                  {code} · {total}
                </button>
              );
            })}
          </div>
          {current && question && (
            <article key={current.id} className="mt-5 rounded-2xl border border-[#A88765]/30 bg-[#FCFBF9] p-4 text-[#1C1B19] sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-[#76543F]">
                <span>{lang === "ar" ? "سؤال" : "Question"} {position + 1} / {visible.length}</span>
                <span dir="ltr">{current.section} · #{current.questionNumber} · CSO {current.cso} · LOS {current.los} · PDF p. {current.pdfPage}</span>
              </div>
              {current.layoutCheckRecommended && (
                <p className="mt-3 rounded-lg border border-amber-500/35 bg-amber-50 px-3 py-2 text-xs leading-5 text-amber-900">
                  {lang === "ar"
                    ? "تحتاج بيانات السؤال والجداول إلى مراجعة التنسيق مع الصفحة الأصلية في PDF؛ عرض النص هنا لا يضمن الحفاظ على صفوف الجدول."
                    : "This text-heavy question may include a table. Verify figures and formatting against its original PDF page."}
                </p>
              )}
              <CmaTranslatedQuestion
                key={current.id}
                question={question}
                lang={lang}
                revealExplanation={chosen !== undefined}
                allowExternalTranslation={false}
                cacheLocally={false}
              >
                {(view) => (
                  <>
                    <p className="mt-4 whitespace-pre-wrap text-sm font-bold leading-7 sm:text-base" dir={view.direction}>
                      {view.question}
                    </p>
                    {view.control}
                    <div className="mt-5 grid gap-2">
                      {view.choices.map((option, index) => {
                        const submitted = chosen !== undefined;
                        const isRight = submitted && index === question.answerIndex;
                        const isWrongChoice = submitted && chosen === index && !isRight;
                        return (
                          <button
                            key={index}
                            type="button"
                            disabled={submitted}
                            onClick={() => setAnswers((prev) => ({ ...prev, [current.id]: index }))}
                            dir={view.direction}
                            aria-pressed={chosen === index}
                            className={`flex w-full items-start gap-3 rounded-xl border px-4 py-3 text-start text-sm leading-6 transition disabled:cursor-default ${isRight ? "border-green-600 bg-green-50" : isWrongChoice ? "border-red-500 bg-red-50" : "border-[#A88765]/25 hover:border-[#A88765]/60"}`}
                          >
                            <span className="shrink-0 font-black" dir="ltr">{labels[index]}.</span>
                            <span className="whitespace-pre-wrap">{option}</span>
                          </button>
                        );
                      })}
                    </div>
                    {chosen !== undefined && (
                      <div className="mt-4 rounded-xl bg-[#F5F1EB] p-4 text-sm leading-7">
                        <div className="flex items-center gap-2 font-bold">
                          {chosen === question.answerIndex ? (
                            <CheckCircle2 className="size-5 text-green-700" aria-hidden="true" />
                          ) : (
                            <XCircle className="size-5 text-red-700" aria-hidden="true" />
                          )}
                          {lang === "ar"
                            ? `الإجابة الصحيحة: ${labels[question.answerIndex]}`
                            : `Correct answer: ${labels[question.answerIndex]}`}
                        </div>
                        <p className="mt-2 whitespace-pre-wrap" dir={view.direction}>{view.explanation}</p>
                      </div>
                    )}
                  </>
                )}
              </CmaTranslatedQuestion>
              <div className="mt-5 flex items-center justify-between gap-3">
                <button
                  type="button"
                  disabled={position === 0}
                  onClick={() => setPosition((currentPosition) => Math.max(0, currentPosition - 1))}
                  className="inline-flex min-h-10 items-center gap-1 rounded-lg border border-[#A88765]/30 px-3 py-2 text-xs font-bold disabled:opacity-40"
                >
                  <ChevronLeft className="size-4" />
                  {lang === "ar" ? "السابق" : "Previous"}
                </button>
                <button
                  type="button"
                  disabled={position >= visible.length - 1}
                  onClick={() => setPosition((currentPosition) => Math.min(visible.length - 1, currentPosition + 1))}
                  className="inline-flex min-h-10 items-center gap-1 rounded-lg bg-[#1C1B19] px-4 py-2 text-xs font-bold text-white disabled:opacity-40"
                >
                  {lang === "ar" ? "التالي" : "Next"}
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </article>
          )}
        </div>
      )}
    </section>
  );
}
