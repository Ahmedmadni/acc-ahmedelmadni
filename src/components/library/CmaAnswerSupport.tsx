import type { CmaLocalQuestion } from "@/data/cma-question-bank";
import { CMA_ANSWER_WALKTHROUGHS } from "@/data/cma-answer-walkthroughs";
import { CMA_PART1_BEGINNER_NOTES } from "@/data/cma-part1-beginner-notes";
import { CMA_PART2_BEGINNER_NOTES } from "@/data/cma-part2-beginner-notes";

type Language = "ar" | "en";

/**
 * Separate original publisher explanations from independently authored teaching support.
 * The review cards appear only after the learner has answered, so they do not leak the key.
 */
export function CmaAnswerSupport({
  question,
  lang,
  isCorrect,
}: {
  question: Pick<CmaLocalQuestion, "id" | "topicId" | "answerIndex">;
  lang: Language;
  isCorrect: boolean;
}) {
  const walkthrough = CMA_ANSWER_WALKTHROUGHS[question.id];
  const verifiedWalkthrough = walkthrough?.expectedAnswerIndex === question.answerIndex ? walkthrough : null;
  const note = question.topicId.startsWith("p2-")
    ? CMA_PART2_BEGINNER_NOTES[question.topicId]
    : CMA_PART1_BEGINNER_NOTES[question.topicId];

  if (!verifiedWalkthrough && !note) return null;

  return (
    <details
      className="mt-4 rounded-xl border border-[#A88765]/30 bg-white p-4 text-[#40382F]"
      dir={lang === "ar" ? "rtl" : "ltr"}
      defaultOpen={!isCorrect && Boolean(verifiedWalkthrough)}
    >
      <summary className="cursor-pointer text-sm font-black leading-7 text-[#76543F]">
        {verifiedWalkthrough
          ? lang === "ar"
            ? "افهم الحل خطوة بخطوة (شرح إضافي من الموقع)"
            : "Understand the answer step by step (site-authored)"
          : lang === "ar"
            ? "راجع مفهوم الموضوع بمثال بسيط"
            : "Review the topic concept with a simple example"}
      </summary>
      {verifiedWalkthrough ? (
        <>
          <p className="mt-2 text-xs leading-6 text-[#76543F]">
            {lang === "ar"
              ? "هذا الشرح التعليمي أعده الموقع بشكل مستقل، وهو ليس نص تفسير الإجابة المنشور بواسطة ICMA. حل المصدر الأصلي ظاهر أعلاه."
              : "This independent teaching commentary is not an ICMA-published answer explanation. The original source explanation appears above."}
          </p>
          <ol className="mt-3 list-decimal space-y-3 ps-6 text-sm leading-8">
            {verifiedWalkthrough.steps[lang].map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </>
      ) : (
        <>
          <p className="mt-3 text-sm leading-8">{note?.idea[lang]}</p>
          {note?.example && (
            <div className="mt-3 rounded-lg bg-[#F5F1EB] p-4">
              <p className="font-bold leading-7">
                {lang === "ar" ? "مثال منفصل للمراجعة (ليس حل السؤال الحالي):" : "Separate review example (not this question's solution):"}
              </p>
              <p className="mt-2 text-sm leading-8">{note.example.scenario[lang]}</p>
              <ol className="mt-3 list-decimal space-y-2 ps-6 text-sm leading-8">
                {note.example.steps[lang].map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
              <p className="mt-3 text-sm font-semibold leading-8">{note.example.takeaway[lang]}</p>
            </div>
          )}
        </>
      )}
    </details>
  );
}
