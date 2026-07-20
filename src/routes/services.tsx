import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { SubPageShell } from "@/components/SubPageShell";
import { RequestService } from "@/routes/request-service";
import type { Lang } from "@/lib/i18n";
import {
  SERVICE_CATEGORIES,
  SERVICES_CATALOG,
  type ServiceCategoryId,
  type ServiceEntry,
} from "@/lib/services-catalog";
import { playClick, playHover } from "@/lib/sound";

export const Route = createFileRoute("/services")({
  validateSearch: (search: Record<string, unknown>): { service?: string } => ({
    service: typeof search.service === "string" ? search.service : undefined,
  }),
  head: () => ({
    meta: [
      { title: "الخدمات | أحمد المدني - محاسب أول" },
      {
        name: "description",
        content:
          "خدمات محاسبية واستشارات مالية: تقارير مالية، محاسبة تكاليف، إقرارات زكوية وضريبية، Power BI والمزيد — اطلب خدمتك مباشرة.",
      },
      { property: "og:title", content: "الخدمات | أحمد المدني" },
      { property: "og:description", content: "تصفّح الخدمات المحاسبية واطلب خدمتك في نفس الصفحة." },
    ],
    links: [{ rel: "canonical", href: "https://ahmedelmadni.com/services" }],
  }),
  component: ServicesRoute,
});

function ServicesRoute() {
  const { service } = Route.useSearch();
  return (
    <SubPageShell>{(lang) => <ServicesPage lang={lang} initialService={service} />}</SubPageShell>
  );
}

function ServiceCard({
  s,
  lang,
  active,
  onRequest,
}: {
  s: ServiceEntry;
  lang: Lang;
  active: boolean;
  onRequest: () => void;
}) {
  const Icon = s.icon;
  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-5 transition-all ${
        active
          ? "border-[#d7aa52] bg-gradient-to-br from-[#d7aa52]/15 to-transparent shadow-[0_18px_50px_-20px_rgba(215,170,82,0.6)]"
          : "border-white/10 bg-gradient-to-br from-[#07182c]/80 to-[#04101f]/95 hover:border-[#d7aa52]/60"
      }`}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -top-12 -end-12 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-50"
        style={{ background: s.accent }}
      />
      <div className="mb-3 flex items-center justify-between">
        <span
          className="inline-flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-transform duration-500 group-hover:scale-110"
          style={{ color: s.accent }}
        >
          <Icon className="size-5" />
        </span>
        {s.badgeAr && (
          <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
            ★ {lang === "ar" ? s.badgeAr : s.badgeEn}
          </span>
        )}
      </div>
      <h3 className="text-sm font-extrabold leading-tight" style={{ color: "var(--fg)" }}>
        {lang === "ar" ? s.titleAr : s.titleEn}
      </h3>
      <p className="mt-1.5 flex-1 text-xs leading-relaxed text-white/55">
        {lang === "ar" ? s.descAr : s.descEn}
      </p>
      <button
        type="button"
        onClick={() => {
          playClick();
          onRequest();
        }}
        onMouseEnter={playHover}
        className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-br from-[#f3d28a] to-[#b8862e] px-4 py-2 text-xs font-bold text-[#04101f] transition-transform hover:scale-[1.03]"
      >
        {lang === "ar" ? "اطلب الخدمة" : "Request service"}
        <span aria-hidden>{lang === "ar" ? "←" : "→"}</span>
      </button>
    </div>
  );
}

function ServicesPage({ lang, initialService }: { lang: Lang; initialService?: string }) {
  const [category, setCategory] = useState<ServiceCategoryId | "all">("all");
  const [selected, setSelected] = useState<string | undefined>(initialService);

  const filtered =
    category === "all" ? SERVICES_CATALOG : SERVICES_CATALOG.filter((s) => s.category === category);

  const requestService = (id: string) => {
    setSelected(id);
    // Let the state update flush, then bring the form into view.
    requestAnimationFrame(() => {
      document
        .getElementById("service-form")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <section className="relative py-10">
      <div className="w-full px-4 sm:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d7aa52]/40 bg-[#d7aa52]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#f3d28a]">
            <Sparkles className="size-3" />
            {lang === "ar" ? "خدماتي الاحترافية" : "Professional Services"}
          </span>
          <h1 className="mt-3 text-3xl font-black md:text-4xl" style={{ color: "var(--fg)" }}>
            {lang === "ar" ? "الخدمات المحاسبية والمالية" : "Accounting & Finance Services"}
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-sm" style={{ color: "var(--fg-soft)" }}>
            {lang === "ar"
              ? "اختر الخدمة التي تحتاجها، ثم اطلبها مباشرة من النموذج في نفس الصفحة."
              : "Pick the service you need, then request it right from the form on this page."}
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {SERVICE_CATEGORIES.map((c) => {
            const isActive = category === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  playClick();
                  setCategory(c.id);
                }}
                onMouseEnter={playHover}
                className={`rounded-full border px-4 py-2 text-xs font-bold transition-all ${
                  isActive
                    ? "border-[#d7aa52] bg-gradient-to-br from-[#f3d28a] to-[#b8862e] text-[#04101f]"
                    : "border-white/10 bg-white/[0.03] text-[#f3d28a] hover:border-[#d7aa52]/40"
                }`}
              >
                {lang === "ar" ? c.ar : c.en}
              </button>
            );
          })}
        </div>

        {/* Cards + request form */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_minmax(360px,440px)]">
          <div className="grid content-start gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((s) => (
              <ServiceCard
                key={s.id}
                s={s}
                lang={lang}
                active={selected === s.id}
                onRequest={() => requestService(s.id)}
              />
            ))}
          </div>

          <div id="service-form" className="lg:sticky lg:top-24 lg:self-start">
            <RequestService lang={lang} serviceFromUrl={selected} embedded />
          </div>
        </div>
      </div>
    </section>
  );
}
