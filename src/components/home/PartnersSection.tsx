import { Link as RouterLink } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Handshake, Sparkles, ArrowUpRight } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { playClick, playHover } from "@/lib/sound";

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
  const chain = [p.domain, ...(p.fallbackDomains ?? [])];
  const [idx, setIdx] = useState(0);
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full w-full items-center justify-center text-center text-2xl font-black text-[#04101f]">
        {p.name}
      </div>
    );
  }

  return (
    <img
      src={`https://logo.clearbit.com/${chain[idx]}?size=300`}
      alt={`${p.name} logo`}
      loading="lazy"
      decoding="async"
      width={180}
      height={80}
      onError={() => {
        if (idx < chain.length - 1) {
          setIdx((current) => current + 1);
        } else {
          setFailed(true);
        }
      }}
      className="max-h-16 w-auto max-w-[78%] object-contain"
    />
  );
}

function PartnerCard({ p, lang, index, total }: { p: Partner; lang: Lang; index: number; total: number }) {
  const reduce = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);

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
        top: `${stackOffset}px`,
      }}
      className="sticky"
    >
      <RouterLink
        to="/request-service"
        search={{ service: "accounting-software-advisory" }}
        onMouseEnter={playHover}
        onClick={playClick}
        aria-label={lang === "ar" ? `ترشيح برنامج ${p.nameAr}` : `Recommend ${p.name}`}
        className="group relative block overflow-hidden rounded-[28px] border border-[#d7aa52]/30 bg-[#071525] p-6 shadow-[0_25px_80px_-35px_rgba(0,0,0,0.8)] transition-all duration-500 hover:-translate-y-1 hover:border-[#d7aa52]/75 hover:shadow-[0_35px_100px_-35px_rgba(215,170,82,0.4)] sm:p-8 lg:p-10"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background: "radial-gradient(circle at 50% 0%, rgba(243,210,138,0.14), transparent 65%)",
          }}
        />

        <div className="relative flex items-start justify-between">
          <div className="flex h-20 w-36 items-center justify-center rounded-2xl bg-white px-5 shadow-inner sm:h-24 sm:w-44">
            <PartnerLogo p={p} />
          </div>

          <span className="text-sm font-medium text-white/65">({String(index + 1).padStart(2, "0")})</span>
        </div>

        <div className="relative mt-12 max-w-xl">
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#f3d28a]/75">
            {lang === "ar" ? "خدمات محاسبية متخصصة" : "Specialized accounting services"}
          </span>

          <h3 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            {lang === "ar" ? p.nameAr : p.name}
          </h3>

          <p className="mt-5 max-w-lg text-base leading-8 text-white/65 sm:text-lg">
            {lang === "ar" ? p.descAr : p.descEn}
          </p>
        </div>

        <div className="relative mt-10 flex items-end justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-xl text-white transition-all duration-300 group-hover:border-[#f3d28a] group-hover:bg-[#f3d28a]/10">
            <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>

          <span className="text-xs text-white/35">
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
