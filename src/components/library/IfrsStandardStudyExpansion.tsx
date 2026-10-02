import { Calculator, CheckCircle2, Layers3, ReceiptText } from "lucide-react";
import type { StandardStudyExpansion } from "@/data/ifrs-standard-study-expansions";
import type { Lang } from "@/lib/i18n";

export function IfrsStandardStudyExpansion({
  expansion,
  lang,
}: {
  expansion: StandardStudyExpansion;
  lang: Lang;
}) {
  const isArabic = lang === "ar";

  return (
    <section
      id="expanded-study"
      className="scroll-mt-28 rounded-3xl border border-[#A88765]/20 bg-[#FCFBF9] p-5 sm:p-7"
    >
      <div className="flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-2xl bg-violet-50 text-violet-800">
          <Layers3 className="size-5" />
        </span>
        <div>
          <h2 className="font-display text-xl font-black text-[#1C1B19] sm:text-2xl">
            {isArabic ? "الشرح التفصيلي والأمثلة الإضافية" : "Detailed study & additional examples"}
          </h2>
          <p className="mt-1 text-xs leading-6 text-[#6B6259]">
            {isArabic
              ? "مادة تطبيقية مصنفة تحت المعيار ومراجعة على متطلباته الحالية."
              : "Applied material classified under the Standard and reviewed against its current requirements."}
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4">
        {expansion.sections.map((section) => (
          <article
            key={section.title.en}
            className="rounded-2xl border border-violet-900/10 bg-white p-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h3 className="font-black text-[#1C1B19]">{section.title[lang]}</h3>
              <span className="rounded-full bg-violet-50 px-3 py-1 text-[11px] font-black text-violet-800">
                {section.reference}
              </span>
            </div>
            <p className="mt-3 text-sm leading-8 text-[#625950]">{section.explanation[lang]}</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {section.keyPoints.map((point) => (
                <li
                  key={point.en}
                  className="flex items-start gap-2 rounded-xl bg-[#F7F3ED] p-3 text-sm leading-7 text-[#625950]"
                >
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-violet-700" />
                  <span>{point[lang]}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-2">
        <Calculator className="size-5 text-[#7c6045]" />
        <h3 className="font-black text-[#1C1B19]">
          {isArabic ? "أمثلة عملية محلولة" : "Solved worked examples"}
        </h3>
      </div>

      <div className="mt-4 grid gap-5">
        {expansion.workedExamples.map((example) => (
          <article
            key={example.title.en}
            className="overflow-hidden rounded-2xl border border-[#A88765]/20 bg-white"
          >
            <div className="border-b border-[#A88765]/15 bg-[#F3ECE3] p-5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h4 className="font-black text-[#1C1B19]">{example.title[lang]}</h4>
                <span className="rounded-full bg-white px-3 py-1 text-[11px] font-black text-[#7c6045]">
                  {example.reference}
                </span>
              </div>
              <p className="mt-3 text-sm leading-7 text-[#625950]">{example.facts[lang]}</p>
            </div>
            <div className="p-5">
              <ol className="grid gap-3">
                {example.calculations.map((step, index) => (
                  <li
                    key={step.en}
                    className="flex items-start gap-3 text-sm leading-7 text-[#625950]"
                  >
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#7c6045] text-xs font-black text-white">
                      {index + 1}
                    </span>
                    <span>{step[lang]}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-5 rounded-xl bg-emerald-50 p-4 text-sm font-bold leading-7 text-emerald-950">
                {example.conclusion[lang]}
              </p>

              {example.journalEntries.length > 0 && (
                <div className="mt-5">
                  <div className="flex items-center gap-2 text-sm font-black text-[#1C1B19]">
                    <ReceiptText className="size-4 text-[#7c6045]" />
                    {isArabic ? "قيود محاسبية نموذجية" : "Illustrative journal entries"}
                  </div>
                  <div className="mt-3 overflow-x-auto">
                    <table className="w-full min-w-[36rem] text-start text-xs">
                      <thead>
                        <tr className="border-b border-[#A88765]/20 text-[#6B6259]">
                          <th className="p-3 text-start">{isArabic ? "البيان" : "Entry"}</th>
                          <th className="p-3 text-start">{isArabic ? "مدين" : "Debit"}</th>
                          <th className="p-3 text-start">{isArabic ? "دائن" : "Credit"}</th>
                          <th className="p-3 text-start">{isArabic ? "المبلغ" : "Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {example.journalEntries.map((entry) => (
                          <tr
                            key={entry.label.en}
                            className="border-b border-[#A88765]/10 align-top text-[#514940]"
                          >
                            <td className="p-3 font-bold">{entry.label[lang]}</td>
                            <td className="p-3">{entry.debit[lang]}</td>
                            <td className="p-3">{entry.credit[lang]}</td>
                            <td className="p-3 font-mono font-bold">{entry.amount[lang]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
