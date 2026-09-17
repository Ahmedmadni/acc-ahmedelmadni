import { Link as RouterLink } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Handshake, Sparkles, ArrowUpRight } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { playClick, playHover } from "@/lib/sound";
import odooLogo from "@/assets/software/Odoo.png";
import daftraLogo from "@/assets/software/Daftra.png";
import qoyodLogo from "@/assets/software/Qoyod.jpg";
import zohoLogo from "@/assets/software/Zoho Books.png";
import wafeqLogo from "@/assets/software/Wafeq.jpg";
import rewaaLogo from "@/assets/software/Rewaa.png";
import alShamelLogo from "@/assets/software/Al Shamel.png";

/** Locally hosted brand logos, keyed by partner id (avoids third-party CDN). */
const LOCAL_LOGOS: Record<string, string> = {
  odoo: odooLogo,
  daftra: daftraLogo,
  qoyod: qoyodLogo,
  zoho: zohoLogo,
  wafeq: wafeqLogo,
  rewaa: rewaaLogo,
  shamelsoft: alShamelLogo,
};

type Partner = {
  id: string;
  name: string;
  nameAr: string;
  domain: string;
  fallbackDomains?: string[];
  descAr: string;
  descEn: string;
};

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
  const local = LOCAL_LOGOS[p.id];

  if (local) {
    return (
      <img
        src={local}
        alt={`شعار ${p.nameAr} — ${p.name}`}
        loading="lazy"
        decoding="async"
        className="max-h-16 w-auto max-w-[78%] object-contain"
      />
    );
  }

  // No locally hosted mark for this brand: render its wordmark instead of
  // pulling a logo from a third-party CDN.
  return (
    <div className="flex h-full w-full items-center justify-center px-1 text-center text-lg font-black leading-tight tracking-tight text-[#04101f] sm:text-2xl">
      {p.name}
    </div>
  );
}

function PartnerCard({ p, lang, index, total }: { p: Partner; lang: Lang; index: number; total: number }) {
  const reduce = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 88%", "start 18%"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.35, 1], [0, 0.7, 1]);

  const stackOffset = Math.min(index * 14, 120);

  return (
    <motion.div
      ref={cardRef}
      style={{
        scale: reduce ? 1 : scale,
        y: reduce ? 0 : y,
        opacity: reduce ? 1 : opacity,
        top: isDesktop ? `${stackOffset}px` : undefined,
      }}
      className="lg:sticky"
    >
      <RouterLink
        to="/request-service"
        search={{ service: "accounting-software-advisory" }}
        onMouseEnter={playHover}
        onClick={playClick}
        aria-label={lang === "ar" ? `ترشيح برنامج ${p.nameAr}` : `Recommend ${p.name}`}
        className="group relative block overflow-hidden rounded-3xl border border-[#d7aa52]/30 bg-[#071525] p-5 shadow-[0_25px_80px_-35px_rgba(0,0,0,0.8)] transition-all duration-500 hover:-translate-y-1 hover:border-[#d7aa52]/75 hover:shadow-[0_35px_100px_-35px_rgba(215,170,82,0.4)] sm:p-8 lg:p-10"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background: "radial-gradient(circle at 50% 0%, rgba(243,210,138,0.14), transparent 65%)",
          }}
        />

        <div className="relative flex items-start justify-between gap-3">
          <div className="flex h-16 w-28 items-center justify-center rounded-2xl bg-white px-3 shadow-inner sm:h-24 sm:w-44 sm:px-5">
            <PartnerLogo p={p} />
          </div>

          <span className="text-xs font-medium text-white/65 sm:text-sm">({String(index + 1).padStart(2, "0")})</span>
        </div>

        <div className="relative mt-6 max-w-xl sm:mt-12">
          <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#f3d28a]/75 sm:mb-4">
            {lang === "ar" ? "خدمات محاسبية متخصصة" : "Specialized accounting services"}
          </span>

          <h3 className="text-2xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            {lang === "ar" ? p.nameAr : p.name}
          </h3>

          <p className="mt-3 max-w-lg text-sm leading-7 text-white/65 sm:mt-5 sm:text-base sm:leading-8 lg:text-lg">
            {lang === "ar" ? p.descAr : p.descEn}
          </p>
        </div>

        <div className="relative mt-6 flex items-end justify-between sm:mt-10">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-xl text-white transition-all duration-300 group-hover:border-[#f3d28a] group-hover:bg-[#f3d28a]/10 sm:h-12 sm:w-12">
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:size-5" />
          </div>

          <span className="text-[11px] text-white/35 sm:text-xs">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>

        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#b8862e] via-[#f3d28a] to-[#b8862e] transition-transform duration-700 group-hover:scale-x-100"
        />
      </RouterLink>
    </motion.div>
  );
}

export default function PartnersSection({ lang }: { lang: Lang }) {
  return (
    <section id="partners" className="relative py-24 lg:py-36">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-16">
        <div className="grid items-start gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-28">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d7aa52]/40 bg-[#d7aa52]/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#f3d28a]">
              <Handshake className="size-3.5" />
              {lang === "ar" ? "شركاؤنا" : "Our Partners"}
            </span>

            <h2
              className="mt-7 max-w-xl text-5xl font-black leading-[0.98] tracking-[-0.05em] md:text-6xl lg:text-7xl"
              style={{ color: "var(--fg)" }}
            >
              {lang === "ar" ? "البرامج التي تعتمد عليها أعمالك." : "The systems your business already relies on."}
            </h2>

            <p className="mt-8 max-w-lg text-base leading-8 md:text-lg" style={{ color: "var(--fg-soft)" }}>
              {lang === "ar" ? (
                <>
                  من تسجيل المعاملات اليومية والتسويات إلى إعداد التقارير المالية والإقرارات الضريبية، نقدم الدعم
                  المحاسبي عبر مجموعة من الأنظمة والمنصات المحاسبية.
                  <span className="mt-5 flex items-center gap-2 font-bold text-[#f3d28a]">
                    <Sparkles className="size-4" />
                    اختر البرنامج المناسب واطلب استشارتك.
                  </span>
                </>
              ) : (
                <>
                  From day-to-day bookkeeping and reconciliations to financial reporting and tax support, I work across
                  the accounting platforms businesses use to keep their finances moving.
                  <span className="mt-5 flex items-center gap-2 font-bold text-[#f3d28a]">
                    <Sparkles className="size-4" />
                    Choose a platform and request your advisory.
                  </span>
                </>
              )}
            </p>

            <div className="mt-10 h-px w-48 bg-gradient-to-r from-[#d7aa52] to-transparent" />
          </motion.div>

          <div className="relative space-y-8 pb-[20vh]">
            {PARTNERS.map((p, index) => (
              <PartnerCard key={p.id} p={p} lang={lang} index={index} total={PARTNERS.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
