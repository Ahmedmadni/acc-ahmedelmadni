import { Link as RouterLink } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { Handshake, Sparkles } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { playClick, playHover } from "@/lib/sound";

type Partner = {
  id: string;
  name: string;
  nameAr: string;
  /** Primary domain for the vendor's official logo (Clearbit). */
  domain: string;
  /** Optional additional domains to try if the first one has no indexed logo. */
  fallbackDomains?: string[];
  descAr: string;
  descEn: string;
};

/**
 * Accounting-software partners rendered as a responsive interactive grid
 * (NOT a marquee — the site already uses horizontal marquees in other
 * sections, and this section deliberately varies the motion language).
 *
 * Each card links to `/request-service?service=accounting-software-advisory`.
 * Logos are fetched from Clearbit's public logo API. If a request fails, we
 * try optional fallback domains, then render a text badge.
 */
const PARTNERS: Partner[] = [
  {
    id: "odoo",
    name: "Odoo",
    nameAr: "أودو",
    domain: "odoo.com",
    descAr: "نظام ERP متكامل مفتوح المصدر",
    descEn: "Full open-source ERP suite",
  },
  {
    id: "daftra",
    name: "Daftra",
    nameAr: "دفترة",
    domain: "daftra.com",
    descAr: "برنامج محاسبة سحابي عربي",
    descEn: "Arabic cloud accounting",
  },
  {
    id: "qoyod",
    name: "Qoyod",
    nameAr: "قيود",
    domain: "qoyod.com",
    descAr: "محاسبة سعودية معتمدة زاتكا",
    descEn: "Saudi ZATCA-approved accounting",
  },
  {
    id: "zoho",
    name: "Zoho Books",
    nameAr: "زوهو بوكس",
    domain: "zoho.com",
    fallbackDomains: ["zohocorp.com"],
    descAr: "منظومة أعمال متكاملة",
    descEn: "End-to-end business suite",
  },
  {
    id: "wafeq",
    name: "Wafeq",
    nameAr: "وافِق",
    domain: "wafeq.com",
    descAr: "محاسبة سحابية للشركات الناشئة",
    descEn: "Cloud accounting for startups",
  },
  {
    id: "rewaa",
    name: "Rewaa",
    nameAr: "رواء",
    domain: "rewaatech.com",
    fallbackDomains: ["rewaa.com"],
    descAr: "نقاط بيع ومخزون للتجزئة",
    descEn: "POS & inventory for retail",
  },
  {
    id: "shamelsoft",
    name: "Al-Motakamel",
    nameAr: "المحاسب الشامل",
    domain: "shamelsoft.com",
    fallbackDomains: ["almotakamel.com", "motakamelplus.com"],
    descAr: "برنامج المحاسب الشامل السعودي",
    descEn: "Saudi comprehensive accountant",
  },
  {
    id: "onyx",
    name: "Onyx Pro",
    nameAr: "أونكس برو",
    domain: "onyxpro.com",
    fallbackDomains: ["onyx-pro.com"],
    descAr: "نظام ERP للمقاولات والمصانع",
    descEn: "ERP for contracting & manufacturing",
  },
  {
    id: "quickbooks",
    name: "QuickBooks",
    nameAr: "كويك بوكس",
    domain: "quickbooks.intuit.com",
    fallbackDomains: ["intuit.com"],
    descAr: "محاسبة عالمية للشركات الصغيرة",
    descEn: "Global small-business accounting",
  },
  {
    id: "xero",
    name: "Xero",
    nameAr: "زيرو",
    domain: "xero.com",
    descAr: "محاسبة سحابية بواجهة أنيقة",
    descEn: "Elegant cloud accounting",
  },
  {
    id: "sap",
    name: "SAP",
    nameAr: "ساب",
    domain: "sap.com",
    descAr: "أنظمة ERP للمؤسسات الكبرى",
    descEn: "Enterprise ERP systems",
  },
  {
    id: "sage",
    name: "Sage",
    nameAr: "سيج",
    domain: "sage.com",
    descAr: "حلول محاسبة للمتوسطة والصغيرة",
    descEn: "SME accounting solutions",
  },
];

function PartnerLogo({ p }: { p: Partner }) {
  const chain = [p.domain, ...(p.fallbackDomains ?? [])];
  const [idx, setIdx] = useState(0);
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        aria-hidden
        className="flex h-full w-full items-center justify-center text-center text-base font-black text-[#04101f]"
      >
        {p.name}
      </div>
    );
  }

  return (
    <img
      src={`https://logo.clearbit.com/${chain[idx]}?size=200`}
      alt={`${p.name} logo`}
      loading="lazy"
      decoding="async"
      width={120}
      height={60}
      onError={() => {
        if (idx < chain.length - 1) setIdx(idx + 1);
        else setFailed(true);
      }}
      className="max-h-14 w-auto max-w-[80%] object-contain"
      style={{ imageRendering: "auto" }}
    />
  );
}

function PartnerCard({ p, lang, index }: { p: Partner; lang: Lang; index: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.96 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay: Math.min(index * 0.06, 0.55),
      }}
    >
      <RouterLink
        to="/request-service"
        search={{ service: "accounting-software-advisory" }}
        onMouseEnter={playHover}
        onClick={playClick}
        aria-label={lang === "ar" ? `ترشيح برنامج ${p.nameAr}` : `Recommend ${p.name}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#d7aa52]/20 bg-gradient-to-br from-white/[0.05] to-[#04101f]/70 p-4 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#d7aa52]/70 hover:shadow-[0_20px_50px_-25px_rgba(215,170,82,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3d28a]/70"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(243,210,138,0.12), transparent 70%)",
          }}
        />

        <div className="relative flex h-24 items-center justify-center overflow-hidden rounded-xl bg-white/95 px-4 py-3 shadow-inner transition-transform duration-500 group-hover:scale-[1.03] sm:h-28">
          <PartnerLogo p={p} />
        </div>

        <div className="relative mt-3 flex flex-1 flex-col text-center">
          <h3 className="text-sm font-extrabold text-white">
            {lang === "ar" ? p.nameAr : p.name}
          </h3>
          <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-white/55">
            {lang === "ar" ? p.descAr : p.descEn}
          </p>
        </div>

        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-start scale-x-0 bg-gradient-to-r from-[#b8862e] via-[#f3d28a] to-[#b8862e] transition-transform duration-500 group-hover:scale-x-100"
        />
      </RouterLink>
    </motion.div>
  );
}

export default function PartnersSection({ lang }: { lang: Lang }) {
  return (
    <section id="partners" className="relative py-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d7aa52]/40 bg-[#d7aa52]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#f3d28a]">
            <Handshake className="size-3" />
            {lang === "ar" ? "شركاؤنا" : "Our Partners"}
          </span>
          <h2 className="mt-3 text-2xl font-black md:text-3xl" style={{ color: "var(--fg)" }}>
            {lang === "ar" ? "أبرز البرامج المحاسبية" : "Leading Accounting Software"}
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm" style={{ color: "var(--fg-soft)" }}>
            {lang === "ar" ? (
              <>
                نساعدك على اختيار البرنامج المحاسبي الأنسب لنشاطك وحجم أعمالك.{" "}
                <span className="inline-flex items-center gap-1 font-bold text-[#f3d28a]">
                  <Sparkles className="size-3" />
                  اضغط أي شعار لطلب استشارة الترشيح.
                </span>
              </>
            ) : (
              <>
                We help you pick the right accounting software for your activity & size.{" "}
                <span className="inline-flex items-center gap-1 font-bold text-[#f3d28a]">
                  <Sparkles className="size-3" />
                  Tap any logo to request an advisory.
                </span>
              </>
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
          {PARTNERS.map((p, i) => (
            <PartnerCard key={p.id} p={p} lang={lang} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
