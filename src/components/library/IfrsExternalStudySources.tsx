import { BookOpenText, ExternalLink, Calculator, CircleHelp, Info } from "lucide-react";
import { IFRSQUIZ_CATALOGUE_SOURCE, IFRSQUIZ_EXTERNAL_COUNTS, IFRSQUIZ_OBSERVED_AT } from "@/data/ifrsquiz-public-catalogue";
import { IFRS_SUPPLEMENTARY_WORKED_CASES } from "@/data/ifrs-supplementary-worked-cases";
import type { Lang } from "@/lib/i18n";

const IFRS_SKILL_REPO = "https://github.com/ramyatrouny/ifrs-skill";
const IFRS17_ENGINE_REPO = "https://github.com/Systemorph/IFRS17CalculationEngine";

/** External source catalogue is separate from the local question bank.
 * The source site did not expose its question text during our public probe.
 * Independently authored, calculation-focused learning is available here.
 */
export function IfrsExternalStudySources({ standardCode, lang }: { standardCode: string; lang: Lang }) {
  const sourceQuestionCount = IFRSQUIZ_EXTERNAL_COUNTS[standardCode];
  const exercise = IFRS_SUPPLEMENTARY_WORKED_CASES[standardCode];
  const isArabic = lang === "ar";

  return (
    <section className="mt-7 scroll-mt-24 rounded-3xl border border-[#A88765]/25 bg-white p-5 sm:p-7" aria-label={isArabic ? "مصادر دراسة إضافية" : "Additional study resources"}>
      <div className="flex items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#F5F1EB] text-[#76543F]">
          <BookOpenText className="size-5" aria-hidden />
        </span>
        <div>
          <h2 className="font-display text-xl font-black text-[#1C1B19]">
            {isArabic ? "مراجع وتطبيقات إضافية للمعيار" : "Additional references and applications"}
          </h2>
          <p className="mt-2 text-sm leading-7 text-[#625950]">
            {isArabic
              ? "المراجع أدناه مصادر تعليمية مستقلة. الأرقام الخاصة بالموقع الخارجي ليست ضمن بنك أسئلة هذا الموقع، والأمثلة الموضحة هنا مكتوبة بصورة مستقلة."
              : "The following references are independent learning sources. External site counts are not included in this website's question bank; the demonstrations below were independently authored."}
          </p>
        </div>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {typeof sourceQuestionCount === "number" && (
          <a className="flex flex-col gap-2 rounded-2xl border border-[#A88765]/25 bg-[#FCFBF9] p-4 transition hover:border-[#A88765]/60" href={IFRSQUIZ_CATALOGUE_SOURCE} target="_blank" rel="noopener noreferrer">
            <span className="flex items-center gap-2 font-black text-[#40382F]"><CircleHelp className="size-4" /> IFRSQuiz <ExternalLink className="ms-auto size-4" /></span>
            <span className="text-sm leading-7 text-[#625950]">
              {isArabic
                ? `${sourceQuestionCount} سؤالًا معلنًا عن ${standardCode} في الموقع الخارجي (بيانات ${IFRSQUIZ_OBSERVED_AT}). لم تُنقل النصوص والإجابات بعد؛ افتح المصدر الأصلي للتدرب.`
                : `${sourceQuestionCount} ${standardCode} questions listed on the external site (observed ${IFRSQUIZ_OBSERVED_AT}). Question bodies and answer keys have not been imported; open the source to practice.`}
            </span>
          </a>
        )}
        <a className="flex flex-col gap-2 rounded-2xl border border-[#A88765]/25 bg-[#FCFBF9] p-4 transition hover:border-[#A88765]/60" href={IFRS_SKILL_REPO} target="_blank" rel="noopener noreferrer">
          <span className="flex items-center gap-2 font-black text-[#40382F]"><BookOpenText className="size-4" /> IFRS Skill (MIT) <ExternalLink className="ms-auto size-4" /></span>
          <span className="text-sm leading-7 text-[#625950]">
            {isArabic
              ? "مرجع إضافي مفتوح المصدر للمفاهيم والإجراءات والإفصاحات. آخر تحديث مذكور بالمصدر أغسطس 2026؛ تحقق من النص الرسمي والتاريخ قبل الاستخدام."
              : "Open-source reference for concepts, workflows and disclosures. Its stated currency is August 2026; verify the official text and effective dates before use."}
          </span>
        </a>
        {standardCode === "IFRS 17" && (
          <a className="flex flex-col gap-2 rounded-2xl border border-[#A88765]/25 bg-[#FCFBF9] p-4 transition hover:border-[#A88765]/60" href={IFRS17_ENGINE_REPO} target="_blank" rel="noopener noreferrer">
            <span className="flex items-center gap-2 font-black text-[#40382F]"><Calculator className="size-4" /> Systemorph IFRS 17 <ExternalLink className="ms-auto size-4" /></span>
            <span className="text-sm leading-7 text-[#625950]">
              {isArabic
                ? "مستودع حسابات تأمين يشرح نمذجة التدفقات النقدية والقيمة الحالية وتغيرات الأرصدة؛ كوده يعتمد على بيئة Systemorph Cloud ولا يُشغَّل تلقائيًا هنا."
                : "Insurance-calculation project covering cash-flow modelling, present values and analysis of change. Its engine relies on Systemorph Cloud and is not executed by this website."}
            </span>
          </a>
        )}
      </div>
      {exercise && (
        <details className="mt-5 rounded-2xl border border-emerald-700/20 bg-[#F0F8F4] p-4 sm:p-5" dir={isArabic ? "rtl" : "ltr"}>
          <summary className="cursor-pointer text-sm font-black leading-7 text-[#285C44]">
            {isArabic ? `مثال تطبيقي أصلي: ${exercise.heading.ar}` : `Independent worked demonstration: ${exercise.heading.en}`}
          </summary>
          <p className="mt-4 text-sm leading-8 text-[#40382F]">{exercise.problem[lang]}</p>
          <ol className="mt-3 list-decimal space-y-2 ps-5 text-sm leading-8 text-[#40382F]">
            {exercise.steps[lang].map((step, i) => <li key={i}>{step}</li>)}
          </ol>
          <p className="mt-4 rounded-xl bg-white/85 p-3 text-sm font-semibold leading-8 text-[#285C44]">
            {exercise.takeaway[lang]}
          </p>
          <p className="mt-3 flex items-start gap-2 text-xs leading-6 text-[#625950]">
            <Info className="mt-1 size-3.5 shrink-0" />
            {isArabic
              ? "تمرين مستقل لتوضيح المفهوم وليس سؤالًا من IFRSQuiz أو فتوى مهنية. راجع المتطلبات الفعلية للمعيار عند التطبيق."
              : "Independent example, not an IFRSQuiz question or professional advice. Verify actual Standard requirements in practice."}
          </p>
        </details>
      )}
    </section>
  );
}
