import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { SubPageShell } from "@/components/SubPageShell";
import { About, DecisionsVideo } from "@/routes/index";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "نبذة عني | أحمد المدني - Senior Accountant" },
      { name: "description", content: "نبذة عن أحمد المدني — محاسب أول ومستشار مالي بالرياض، الخبرات والتخصصات." },
      { property: "og:title", content: "نبذة عني | أحمد المدني" },
      { property: "og:description", content: "تعرف على خلفية ومسيرة المحاسب أحمد المدني." },
    ],
    links: [{ rel: "canonical", href: "https://acc-ahmedelmadni.lovable.app/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SubPageShell>
      {(lang) => (
        <>
          <About lang={lang} />
          <AnimatePresence>{null}</AnimatePresence>
          <DecisionsVideoOnce />
        </>
      )}
    </SubPageShell>
  );
}

// avoid duplicating DecisionsVideo (already inside About now)
function DecisionsVideoOnce() {
  const [_] = useState(false);
  return null;
}
// silence unused imports
void DecisionsVideo;
