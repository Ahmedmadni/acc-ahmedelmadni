import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence } from "motion/react";
import { Suspense, useState } from "react";
import { SubPageShell } from "@/components/SubPageShell";
import { About, Experience, BeforeAfter, Skills, SkillModal, Certs } from "@/routes/index";
import { t } from "@/lib/i18n";

type SkillItem = (typeof t.skills.groups)[number]["items"][number];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "نبذة عني | أحمد المدني - Senior Accountant" },
      {
        name: "description",
        content:
          "نبذة عن أحمد المدني — محاسب أول ومستشار مالي بالرياض. الخبرات والمهارات والشهادات في صفحة واحدة.",
      },
      { property: "og:title", content: "نبذة عني | أحمد المدني" },
      { property: "og:description", content: "السيرة المهنية، الخبرات، المهارات والشهادات." },
    ],
    links: [{ rel: "canonical", href: "https://ahmedelmadni.com/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const [openSkill, setOpenSkill] = useState<SkillItem | null>(null);

  return (
    <SubPageShell>
      {(lang) => (
        <>
          <div id="about">
            <About lang={lang} />
          </div>
          <div id="experience">
            <Experience lang={lang} />
            <BeforeAfter lang={lang} />
          </div>
          <div id="skills">
            <Skills lang={lang} onOpen={setOpenSkill} />
          </div>
          <div id="certifications">
            <Certs lang={lang} />
          </div>
          <Suspense fallback={null}>
            <AnimatePresence>
              {openSkill && (
                <SkillModal item={openSkill} lang={lang} onClose={() => setOpenSkill(null)} />
              )}
            </AnimatePresence>
          </Suspense>
        </>
      )}
    </SubPageShell>
  );
}
