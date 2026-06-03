import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { SubPageShell } from "@/components/SubPageShell";
import { Skills, SkillModal } from "@/routes/index";
import { t } from "@/lib/i18n";

type SkillItem = (typeof t.skills.groups)[number]["items"][number];

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "المهارات | أحمد المدني - محاسب أول" },
      { name: "description", content: "مهارات محاسبية وتحليلية وأدوات احترافية: IFRS، ZATCA، Excel، ERP، تقارير مالية." },
    ],
    links: [{ rel: "canonical", href: "https://acc-ahmedelmadni.lovable.app/skills" }],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  const [open, setOpen] = useState<SkillItem | null>(null);
  return (
    <SubPageShell>
      {(lang) => (
        <>
          <Skills lang={lang} onOpen={setOpen} />
          <AnimatePresence>
            {open && <SkillModal item={open} lang={lang} onClose={() => setOpen(null)} />}
          </AnimatePresence>
        </>
      )}
    </SubPageShell>
  );
}
