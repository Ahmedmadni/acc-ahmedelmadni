import { createFileRoute } from "@tanstack/react-router";
import { SubPageShell } from "@/components/SubPageShell";
import { Experience, BeforeAfter } from "@/routes/index";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "الخبرات والمسيرة المهنية | أحمد المدني" },
      { name: "description", content: "المسيرة المهنية وخبرات المحاسب أحمد المدني في قطاعات المقاولات والضيافة والخدمات الطبية." },
    ],
    links: [{ rel: "canonical", href: "https://ahmedelmadni.com/experience" }],
  }),
  component: () => (
    <SubPageShell>
      {(lang) => (
        <>
          <Experience lang={lang} />
          <BeforeAfter lang={lang} />
        </>
      )}
    </SubPageShell>
  ),
});
