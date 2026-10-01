import { NotebookPen, ReceiptText } from "lucide-react";
import type { StandardDeepDive } from "@/data/ifrs-standard-deep-dives";

interface IfrsStandardCaseProps {
  deepDive: StandardDeepDive;
  lang: "ar" | "en";
}

export function IfrsStandardCase({ deepDive, lang }: IfrsStandardCaseProps) {
  const isArabic = lang === "ar";

  return (
    <>
      <section
        id="example"
        className="scroll-mt-28 rounded-3xl border border-[#A88765]/25 bg-[#F3ECE3] p-5 sm:p-7"
      >
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-2xl bg-[#7c6045] text-white">
            <ReceiptText className="size-5" />
          </span>
          <div>
            <h2 className="font-display text-xl font-black text-[#1C1B19] sm:text-2xl">
              {isArabic ? "حالة تطبيقية بحساباتها" : "Worked case and calculations"}
            </h2>
            <p className="mt-1 text-xs text-[#6B6259]">
              {isArabic
                ? "الأرقام توضيحية بوحدات نقدية، ويُحكم على المعالجة وفق وقائع كل حالة."
                : "Illustrative amounts in currency units; assess the accounting against each case's facts."}
            </p>
          </div>
        </div>
        <h3 className="mt-6 text-lg font-black text-[#1C1B19]">{deepDive.caseTitle[lang]}</h3>
        <p className="mt-2 text-sm leading-8 text-[#564C43]">{deepDive.caseFacts[lang]}</p>
        <ol className="mt-5 grid gap-3">
          {deepDive.calculationSteps.map((step, index) => (
            <li
              key={`${index}-${step.en}`}
              className="flex items-start gap-3 rounded-2xl border border-[#A88765]/15 bg-white p-4 text-sm leading-7 text-[#564C43]"
            >
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#7c6045] text-xs font-black text-white">
                {index + 1}
              </span>
              <span>{step[lang]}</span>
            </li>
          ))}
        </ol>
        <div className="mt-5 rounded-2xl bg-[#1C1B19] p-4 text-sm leading-7 text-[#F4EEE7]">
          <strong className="text-[#DCC3A5]">
            {isArabic ? "النتيجة المحاسبية: " : "Accounting conclusion: "}
          </strong>
          {deepDive.conclusion[lang]}
        </div>
      </section>

      <section className="rounded-3xl border border-[#A88765]/20 bg-[#1C1B19] p-5 text-white sm:p-7">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-2xl bg-[#A88765]/15 text-[#d2b390]">
            <NotebookPen className="size-5" />
          </span>
          <h2 className="font-display text-xl font-black sm:text-2xl">
            {isArabic ? "قيود محاسبية من الحالة" : "Journal entries for the case"}
          </h2>
        </div>
        {deepDive.journalEntries.length === 0 ? (
          <p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-7 text-[#E3D9CE]">
            {isArabic
              ? "هذه الحالة تتعلق بالعرض أو الإفصاح أو قرار التصنيف؛ لا ينشأ قيد مستقل لمجرد إعداد الإيضاح. تُسجّل المعاملة الأساسية وفق معيارها المختص."
              : "This case concerns presentation, disclosure or classification. Preparing a note alone creates no separate journal entry; account for the underlying transaction under its relevant Standard."}
          </p>
        ) : (
          <div className="mt-5 space-y-4">
            {deepDive.journalEntries.map((entry, index) => (
              <div
                key={`${index}-${entry.label.en}`}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-sm font-black text-[#DCC3A5]">{entry.label[lang]}</h3>
                  <span className="rounded-full bg-[#A88765]/20 px-3 py-1 text-xs font-black text-[#F4EEE7]">
                    {entry.amount[lang]}
                  </span>
                </div>
                <dl className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                  <div className="rounded-xl bg-black/15 p-3">
                    <dt className="text-[11px] font-bold text-[#9E958C]">
                      {isArabic ? "مدين" : "Debit"}
                    </dt>
                    <dd className="mt-1 font-bold text-[#F4EEE7]">{entry.debit[lang]}</dd>
                  </div>
                  <div className="rounded-xl bg-black/15 p-3">
                    <dt className="text-[11px] font-bold text-[#9E958C]">
                      {isArabic ? "دائن" : "Credit"}
                    </dt>
                    <dd className="mt-1 font-bold text-[#F4EEE7]">{entry.credit[lang]}</dd>
                  </div>
                </dl>
                <p className="mt-3 text-xs leading-6 text-[#BFB6AC]">{entry.note[lang]}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
