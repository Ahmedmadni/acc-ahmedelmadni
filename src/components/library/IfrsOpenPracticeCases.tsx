import { BookOpenCheck, CheckCircle2 } from "lucide-react";
import type { IfrsPracticeCase } from "@/data/ifrs-book2-practice-cases";

export function IfrsOpenPracticeCases({
  cases,
  lang,
}: {
  cases: IfrsPracticeCase[];
  lang: "ar" | "en";
}) {
  if (cases.length === 0) return null;
  const isArabic = lang === "ar";

  return (
    <section
      id="practice-cases"
      className="scroll-mt-28 rounded-3xl border border-[#A88765]/25 bg-[#FCFBF9] p-5 sm:p-7"
    >
      <div className="flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-2xl bg-violet-50 text-violet-800">
          <BookOpenCheck className="size-5" />
        </span>
        <div>
          <h2 className="font-display text-xl font-black text-[#1C1B19] sm:text-2xl">
            {isArabic ? "حالات تدريبية مفتوحة" : "Open-response practice cases"}
          </h2>
          <p className="mt-1 text-xs leading-6 text-[#6B6259]">
            {isArabic
              ? "حل الحالة أولًا، ثم افتح الحل المشروح. هذه المسائل لا تُحوَّل إلى اختيارات مصطنعة."
              : "Work through each case before opening the reviewed solution. No artificial answer choices are added."}
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-5">
        {cases.map((practiceCase) => (
          <article
            key={practiceCase.id}
            className="rounded-2xl border border-violet-900/10 bg-white p-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h3 className="font-black text-[#1C1B19]">{practiceCase.title[lang]}</h3>
              <span className="rounded-full bg-violet-50 px-3 py-1 text-[11px] font-black text-violet-800">
                {practiceCase.reference}
              </span>
            </div>
            <p className="mt-4 text-sm leading-8 text-[#625950]">{practiceCase.facts[lang]}</p>
            <p className="mt-4 rounded-xl bg-[#F3ECE3] p-4 text-sm font-bold leading-7 text-[#493E34]">
              {practiceCase.question[lang]}
            </p>
            <details className="group mt-4 rounded-xl border border-[#A88765]/20">
              <summary className="cursor-pointer p-4 text-sm font-black text-[#7c6045]">
                {isArabic ? "إظهار الحل بعد المحاولة" : "Show solution after attempting"}
              </summary>
              <ol className="grid gap-3 border-t border-[#A88765]/15 p-4">
                {practiceCase.solution.map((step, index) => (
                  <li
                    key={`${practiceCase.id}-${index}`}
                    className="flex items-start gap-3 text-sm leading-7 text-[#625950]"
                  >
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-emerald-700" />
                    <span>{step[lang]}</span>
                  </li>
                ))}
              </ol>
            </details>
          </article>
        ))}
      </div>
    </section>
  );
}
