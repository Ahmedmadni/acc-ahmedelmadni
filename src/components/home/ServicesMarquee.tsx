import { Link as RouterLink } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { playClick, playHover } from "@/lib/sound";
import { SERVICES_CATALOG, type ServiceEntry } from "@/lib/services-catalog";
import { Marquee } from "./Marquee";

function ServiceMarqueeCard({ s, lang, index }: { s: ServiceEntry; lang: Lang; index: number }) {
  const Icon = s.icon;
  return (
    <RouterLink
      to="/services"
      search={{ service: s.id }}
      onMouseEnter={playHover}
      onClick={playClick}
      className="group relative flex h-full w-[240px] shrink-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#07182c]/80 to-[#04101f]/95 p-4 transition-colors hover:border-[#d7aa52]/60 sm:w-[260px]"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -top-12 -end-12 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-50"
        style={{ background: s.accent }}
      />
      <div className="mb-3 flex items-center justify-between">
        <span
          className="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[8deg]"
          style={{ color: s.accent }}
        >
          <Icon className="size-5" />
        </span>
        <span className="text-[10px] font-black tabular-nums text-white/30 transition-colors group-hover:text-[#f3d28a]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="text-[13px] font-extrabold leading-tight" style={{ color: "var(--fg)" }}>
        {lang === "ar" ? s.titleAr : s.titleEn}
      </h3>
      <p className="mt-1.5 flex-1 text-[11px] leading-relaxed text-white/55">
        {lang === "ar" ? s.descAr : s.descEn}
      </p>
      <span className="mt-3 inline-flex items-center gap-1 text-[10px] font-bold text-[#f3d28a] opacity-70 transition-opacity group-hover:opacity-100">
        {lang === "ar" ? "اطلب الآن" : "Request now"}
        <span
          aria-hidden
          className="transition-transform group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5"
        >
          {lang === "ar" ? "←" : "→"}
        </span>
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] scale-x-0 origin-start bg-gradient-to-r from-[#b8862e] via-[#f3d28a] to-[#b8862e] transition-transform duration-500 group-hover:scale-x-100"
      />
    </RouterLink>
  );
}

/**
 * Auto-scrolling marquee of the professional-services cards, shown directly
 * below the hero. Reads the shared services catalog so it always matches the
 * /services page and the request form. Pauses on hover, supports drag/swipe.
 */
export default function ServicesMarquee({ lang }: { lang: Lang }) {
  return (
    <section id="services-suite" className="relative py-14">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-8 px-4 text-center sm:px-8 lg:px-16"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d7aa52]/40 bg-[#d7aa52]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#f3d28a]">
            <Sparkles className="size-3" />
            {lang === "ar" ? "خدماتي الاحترافية" : "Professional Services"}
          </span>
          <h2 className="mt-3 text-2xl font-black md:text-3xl" style={{ color: "var(--fg)" }}>
            {lang === "ar" ? "لوحة خدمات متكاملة" : "An Integrated Service Suite"}
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm" style={{ color: "var(--fg-soft)" }}>
            {lang === "ar"
              ? "أكثر من ٢٠ خدمة محاسبية ومالية — اضغط أي بطاقة لتبدأ طلبك مباشرة."
              : "Over 20 accounting & finance services — tap any card to request it."}
          </p>
        </motion.div>

        <Marquee speed={40} direction={-1} gap={16} className="px-4 sm:px-8 lg:px-16">
          {SERVICES_CATALOG.map((s, i) => (
            <ServiceMarqueeCard key={s.id} s={s} lang={lang} index={i} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
