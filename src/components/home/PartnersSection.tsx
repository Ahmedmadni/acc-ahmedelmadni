import { Link as RouterLink } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Handshake, Sparkles } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { playClick, playHover } from "@/lib/sound";
import { Marquee } from "./Marquee";

type Partner = {
  id: string;
  name: string;
  nameAr: string;
  domain: string;
  descAr: string;
  descEn: string;
};

/**
 * Accounting-software partners shown on the home page. Each card links to
 * `/request-service?service=accounting-software-advisory` so the client lands
 * on the software-recommendation service request pre-selected.
 *
 * Logos are pulled from Clearbit's public logo API (no key required); a text
 * fallback renders if the request fails or the vendor has no logo indexed.
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
    descAr: "نقاط بيع ومخزون للتجزئة",
    descEn: "POS & inventory for retail",
  },
  {
    id: "shamelsoft",
    name: "Al-Motakamel",
    nameAr: "المحاسب الشامل",
    domain: "shamelsoft.com",
    descAr: "برنامج المحاسب الشامل السعودي",
    descEn: "Saudi comprehensive accountant",
  },
  {
    id: "onyx",
    name: "Onyx Pro",
    nameAr: "أونكس برو",
    domain: "onyxpro.com",
    descAr: "نظام ERP للمقاولات والمصانع",
    descEn: "ERP for contracting & manufacturing",
  },
  {
    id: "quickbooks",
    name: "QuickBooks",
    nameAr: "كويك بوكس",
    domain: "quickbooks.intuit.com",
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
  return (
    <img
      src={`https://logo.clearbit.com/${p.domain}?size=160`}
      alt={p.name}
      loading="lazy"
      decoding="async"
      width={80}
      height={80}
      onError={(e) => {
        // Fallback: replace with the name badge if Clearbit has no logo.
        const el = e.currentTarget;
        el.style.display = "none";
        const fb = el.nextElementSibling as HTMLElement | null;
        if (fb) fb.style.display = "flex";
      }}
      className="h-14 w-auto max-w-[140px] object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]"
    />
  );
}

function PartnerCard({ p, lang, index }: { p: Partner; lang: Lang; index: number }) {
  return (
    <RouterLink
      to="/request-service"
      search={{ service: "accounting-software-advisory" }}
      onMouseEnter={playHover}
      onClick={playClick}
      className="group relative flex h-[180px] w-[220px] shrink-0 flex-col items-center justify-between overflow-hidden rounded-2xl border border-[#d7aa52]/25 bg-gradient-to-br from-white/[0.06] to-[#04101f]/60 p-4 backdrop-blur transition-all hover:-translate-y-1 hover:border-[#d7aa52]/70 hover:shadow-[0_25px_60px_-25px_rgba(215,170,82,0.55)] sm:w-[240px]"
      aria-label={lang === "ar" ? `ترشيح برنامج ${p.nameAr}` : `Recommend ${p.name}`}
    >
      <span className="absolute top-2 end-2 text-[10px] font-black tabular-nums text-white/25 transition-colors group-hover:text-[#f3d28a]">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="flex flex-1 items-center justify-center">
        <div className="flex h-20 w-full items-center justify-center rounded-xl bg-white/95 px-3 py-2 transition-transform duration-500 group-hover:scale-105">
          <PartnerLogo p={p} />
          <span
            style={{ display: "none" }}
            className="items-center justify-center text-center text-lg font-black text-[#04101f]"
          >
            {p.name}
          </span>
        </div>
      </div>

      <div className="mt-2 w-full text-center">
        <h3 className="text-[13px] font-extrabold text-white">
          {lang === "ar" ? p.nameAr : p.name}
        </h3>
        <p className="mt-0.5 line-clamp-1 text-[10px] text-white/55">
          {lang === "ar" ? p.descAr : p.descEn}
        </p>
      </div>

      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-start scale-x-0 bg-gradient-to-r from-[#b8862e] via-[#f3d28a] to-[#b8862e] transition-transform duration-500 group-hover:scale-x-100"
      />
    </RouterLink>
  );
}

export default function PartnersSection({ lang }: { lang: Lang }) {
  return (
    <section id="partners" className="relative py-14">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-8 px-4 text-center sm:px-8 lg:px-16"
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

        <Marquee speed={35} direction={-1} gap={16} className="px-4 sm:px-8 lg:px-16">
          {PARTNERS.map((p, i) => (
            <PartnerCard key={p.id} p={p} lang={lang} index={i} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
