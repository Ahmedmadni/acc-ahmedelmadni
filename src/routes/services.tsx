import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence } from "motion/react";
import { Suspense, useState } from "react";
import { SubPageShell } from "@/components/SubPageShell";
import { Services, ServiceModal } from "@/routes/index";
import { t } from "@/lib/i18n";

type ServiceItem = (typeof t.services.items)[number];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "الخدمات | أحمد المدني - محاسب أول" },
      {
        name: "description",
        content:
          "خدمات محاسبية واستشارات مالية: تقارير مالية، تحليل تكاليف، إقرارات زكوية وضريبية وفق IFRS وZATCA.",
      },
      { property: "og:title", content: "الخدمات | أحمد المدني" },
      { property: "og:description", content: "تعرف على الخدمات المحاسبية المقدمة." },
    ],
    links: [{ rel: "canonical", href: "https://ahmedelmadni.com/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const [open, setOpen] = useState<ServiceItem | null>(null);
  return (
    <SubPageShell>
      {(lang) => (
        <>
          <Services lang={lang} onOpen={setOpen} />
          <Suspense fallback={null}>
            <AnimatePresence>
              {open && <ServiceModal item={open} lang={lang} onClose={() => setOpen(null)} />}
            </AnimatePresence>
          </Suspense>
        </>
      )}
    </SubPageShell>
  );
}
