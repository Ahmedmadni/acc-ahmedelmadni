import { createFileRoute } from "@tanstack/react-router";
import { SubPageShell } from "@/components/SubPageShell";
import { Certs } from "@/routes/index";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "الشهادات والتطوير المهني | أحمد المدني" },
      { name: "description", content: "الشهادات المهنية والدورات التطويرية للمحاسب أحمد المدني." },
    ],
    links: [{ rel: "canonical", href: "https://ahmedelmadni.com/certifications" }],
  }),
  component: () => <SubPageShell>{(lang) => <Certs lang={lang} />}</SubPageShell>,
});
