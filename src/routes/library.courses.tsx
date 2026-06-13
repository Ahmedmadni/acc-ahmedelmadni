import { createFileRoute } from "@tanstack/react-router";
import { Library } from "@/components/Library";
import { useLibLang } from "./library";

export const Route = createFileRoute("/library/courses")({
  head: () => ({
    meta: [
      { title: "كورسات المحاسبة | Accounting Courses — Ahmed Elmadani" },
      { name: "description", content: "أفضل كورسات المحاسبة من مصادر موثوقة - IFRS، CMA، CPA، VAT والمزيد." },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  const lang = useLibLang();
  return <Library lang={lang} forcedView="videos" hideTabs />;
}
