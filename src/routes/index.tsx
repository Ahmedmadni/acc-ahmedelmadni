import "../styles.css";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState, lazy, Suspense } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import type { Transition, Variants } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Briefcase,
  Calculator,
  Car,
  ChevronRight,
  BookOpen,
  Download,
  Facebook,
  FileText,
  Ghost,
  GraduationCap,
  Instagram,
  Languages,
  Lightbulb,
  LineChart,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MessagesSquare,
  Phone,
  PieChart,
  Plus,
  Quote,
  Share2,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Wallet,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react";
import profileImg from "@/assets/profile.webp";
import heroBg from "@/assets/hero-finance-bg.webp";
import dashboardImg from "@/assets/finance-dashboard.webp";
import deskImg from "@/assets/accountant-desk.webp";
import beforeAfterImg from "@/assets/before-after.webp";
import servicesBg from "@/assets/services-bg.webp";
import mascotWhatsapp from "@/assets/mascot-whatsapp.webp";
import mascotLinkedin from "@/assets/mascot-linkedin.webp";
import mascotFacebook from "@/assets/mascot-facebook.webp";
import mascotInstagram from "@/assets/mascot-instagram.webp";
import heroImg from "@/assets/ahmed-elmadni-hero.webp";
import heroPortrait from "@/assets/hero-portrait.webp";
import mascotSnapchat from "@/assets/mascot-snapchat.webp";
import mascotPhone from "@/assets/mascot-phone.webp";
import mascotEmail from "@/assets/mascot-email.webp";
import vatLogo from "@/assets/vat-logo.png.asset.json";
import { RevealHeadline } from "@/components/home/RevealHeadline";
import { EASE, useMotionSafe } from "@/lib/motion";

import { t, type Lang } from "@/lib/i18n";
import { playClick, playHover, playIntro } from "@/lib/sound";
const AIAssistant = lazy(() =>
  import("@/components/AIAssistant").then((m) => ({ default: m.AIAssistant })),
);
export const ServiceModal = lazy(() => import("@/components/home/ServiceModal"));
export const SkillModal = lazy(() => import("@/components/home/SkillModal"));
const EidBanner = lazy(() => import("@/components/home/EidBanner"));
const TopicsAndVideos = lazy(() => import("@/components/home/TopicsAndVideos"));
const FeaturedTools = lazy(() => import("@/components/home/FeaturedTools"));
const NewsTicker = lazy(() => import("@/components/home/NewsTicker"));
const SiteSearch = lazy(() => import("@/components/home/SiteSearch"));
const SoftwareEcosystem = lazy(() =>
  import("@/components/home/SoftwareEcosystem").then((m) => ({ default: m.SoftwareEcosystem })),
);
const ServicesEditorial = lazy(() =>
  import("@/components/home/ServicesEditorial").then((m) => ({ default: m.ServicesEditorial })),
);
const AboutMe = lazy(() =>
  import("@/components/home/AboutMe").then((m) => ({ default: m.AboutMe })),
);
import type { ServiceItem } from "@/components/home/ServiceModal";
import type { SkillItem } from "@/components/home/SkillModal";
import { Link as RouterLink, useRouterState } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";

const ADMIN_EMAIL = "elmadnim@gmail.com";

function useIsAdmin() {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const check = async () => {
      const { data } = await supabase.auth.getUser();
      setIsAdmin(data.user?.email?.toLowerCase() === ADMIN_EMAIL);
    };
    check();
    const { data: sub } = supabase.auth.onAuthStateChange(() => check());
    return () => sub.subscription.unsubscribe();
  }, []);
  return isAdmin;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "أحمد المدني | محاسب أول - Senior Accountant in Riyadh" },
      {
        name: "description",
        content:
          "موقع أحمد المدني — محاسب أول ومستشار مالي بالرياض. خدمات محاسبة وتقارير مالية وتحليل تكاليف وفق IFRS ومتطلبات ZATCA.",
      },
      { property: "og:url", content: "https://ahmedelmadni.com/" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://ahmedelmadni.com/" },
      { rel: "preload", as: "image", href: profileImg, fetchPriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "ما هي الخدمات التي يقدمها أحمد المدني؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "إعداد التقارير المالية، محاسبة التكاليف، الإقرارات الزكوية والضريبية، تطبيق معايير IFRS، وإعداد القوائم المالية الختامية.",
              },
            },
            {
              "@type": "Question",
              name: "أين يقع مقر العمل؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "الرياض، المملكة العربية السعودية — مع تقديم الخدمات عن بُعد لجميع مناطق المملكة.",
              },
            },
            {
              "@type": "Question",
              name: "هل تقدمون أدوات حساب الزكاة وضريبة القيمة المضافة؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "نعم — يحتوي الموقع على نماذج رسمية مطابقة لهيئة الزكاة والضريبة والجمارك (ZATCA) لإقرار الزكاة وإقرار ضريبة القيمة المضافة.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const SOCIALS: ReadonlyArray<{
  href: string;
  Icon: LucideIcon;
  color: string;
  label: string;
  mascot: string;
  /** Shown on the featured (`"lg"`) card only — the actual number/address,
   *  always LTR since it's a phone number or an email address. */
  value?: string;
}> = [
  {
    href: "tel:+966560409811",
    Icon: Phone,
    color: "#34d399",
    label: "Phone",
    mascot: mascotPhone,
    value: "+966 56 040 9811",
  },
  {
    href: "https://wa.me/966560409811",
    Icon: MessageCircle,
    color: "#25D366",
    label: "WhatsApp",
    mascot: mascotWhatsapp,
    value: "+966 56 040 9811",
  },
  {
    href: "mailto:elmadnim@gmail.com",
    Icon: Mail,
    color: "#ef4444",
    label: "Email",
    mascot: mascotEmail,
    value: "elmadnim@gmail.com",
  },
  {
    href: "https://www.linkedin.com/in/احمد-المدنى-33022830b",
    Icon: Linkedin,
    color: "#0A66C2",
    label: "LinkedIn",
    mascot: mascotLinkedin,
  },
  {
    href: "https://www.facebook.com/share/1GrcrAN8tP/",
    Icon: Facebook,
    color: "#1877F2",
    label: "Facebook",
    mascot: mascotFacebook,
  },
  {
    href: "https://www.instagram.com/ahmed_elmadni",
    Icon: Instagram,
    color: "#E4405F",
    label: "Instagram",
    mascot: mascotInstagram,
  },
  {
    href: "https://www.snapchat.com/add/ahmedacc851998",
    Icon: Ghost,
    color: "#FFFC00",
    label: "Snapchat",
    mascot: mascotSnapchat,
  },
] as const;

/** Hijri date check: returns true between 5 and 15 of Dhul-Hijjah (month 12). */
function isEidSeason(): boolean {
  try {
    const parts = new Intl.DateTimeFormat("en-u-ca-islamic-umalqura", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    }).formatToParts(new Date());
    const day = Number(parts.find((p) => p.type === "day")?.value);
    const month = Number(parts.find((p) => p.type === "month")?.value);
    return month === 12 && day >= 5 && day <= 15;
  } catch {
    return false;
  }
}

/**
 * Wraps an outgoing section so it reads as a stable background layer while
 * the next section slides over it (Services → Software, Phase M2/P0). Native
 * `position: sticky` does the actual "cover" — it pins the section at the
 * viewport top only for the scroll range spanning its own box height, then
 * releases naturally once the next section's opaque background reaches it.
 *
 * The handoff reads as a "sheet lifting into place" rather than a haze: a
 * small scroll-linked scale-down sells the outgoing section receding, and a
 * crisp, well-defined shadow band (not a translucent wash) grows in along
 * its bottom edge to sell the incoming section casting a shadow as it slides
 * over — a black overlay across the whole section previously blended with
 * the next section's own top fade into a muddy, foggy handoff; a bounded
 * shadow strip stays legible instead. Desktop/tablet only (`lg:` and up) and
 * skipped entirely under reduced motion — mobile keeps plain document flow,
 * per the "no cinematic effect on small screens" requirement.
 */
function StickyOutgoingLayer({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { reduce } = useMotionSafe();
  const [cinematic, setCinematic] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setCinematic(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setCinematic(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);
  const shadowOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  if (reduce || !cinematic) {
    return <div ref={ref}>{children}</div>;
  }

  return (
    <div ref={ref} className="sticky top-0 z-0">
      <motion.div style={{ scale }}>{children}</motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0F0E0D]/45 to-transparent"
        style={{ opacity: shadowOpacity }}
      />
    </div>
  );
}

function Index() {
  const [lang, setLang] = useState<Lang>("ar");

  const [skillModal, setSkillModal] = useState<SkillItem | null>(null);
  const [serviceModal, setServiceModal] = useState<ServiceItem | null>(null);
  const [eidOpen, setEidOpen] = useState<boolean>(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const { reduce } = useMotionSafe();

  const dir = lang === "ar" ? "rtl" : "ltr";
  const isRTL = lang === "ar";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  useEffect(() => {
    if (!isEidSeason()) return;
    try {
      const k = "eid-banner-dismissed";
      if (sessionStorage.getItem(k) !== "1") setEidOpen(true);
    } catch {
      setEidOpen(true);
    }
  }, []);

  const dismissEid = () => {
    setEidOpen(false);
    try {
      sessionStorage.setItem("eid-banner-dismissed", "1");
    } catch {
      /* ignore */
    }
  };

  const VAT_MONTHS = [0, 3, 6, 9];
  const currentMonth = new Date().getMonth();
  const isVatSeason = VAT_MONTHS.includes(currentMonth);
  const VAT_QUARTER: Record<number, string> = {
    0: "الربع الرابع",
    3: "الربع الأول",
    6: "الربع الثاني",
    9: "الربع الثالث",
  };
  const [showVatBanner, setShowVatBanner] = useState(false);
  const dismissBanner = () => {
    sessionStorage.setItem("vat_banner_dismissed", "1");
    setShowVatBanner(false);
  };

  useEffect(() => {
    if (!isVatSeason) return;
    try {
      if (sessionStorage.getItem("vat_banner_dismissed") !== "1") setShowVatBanner(true);
    } catch {
      setShowVatBanner(true);
    }
  }, [isVatSeason]);

  useEffect(() => {
    let played = false;
    const trigger = () => {
      if (played) return;
      played = true;
      playIntro();
      window.removeEventListener("pointerdown", trigger);
      window.removeEventListener("keydown", trigger);
      window.removeEventListener("scroll", trigger);
    };
    const tm = setTimeout(() => {
      try {
        playIntro();
        played = true;
      } catch {
        /* ignore */
      }
    }, 1400);
    window.addEventListener("pointerdown", trigger);
    window.addEventListener("keydown", trigger);
    window.addEventListener("scroll", trigger);
    return () => {
      clearTimeout(tm);
      window.removeEventListener("pointerdown", trigger);
      window.removeEventListener("keydown", trigger);
      window.removeEventListener("scroll", trigger);
    };
  }, []);

  const toggleLang = () => {
    playClick();
    setLang((l) => (l === "ar" ? "en" : "ar"));
  };

  return (
    <div className="relative min-h-screen antialiased" style={{ color: "var(--fg)" }}>
      <AnimatePresence>
        {showVatBanner && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0.15 : 0.35, ease: EASE.out }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          >
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 12 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: reduce ? 0.15 : 0.4, ease: EASE.out }}
              className="relative w-full max-w-md rounded-2xl border border-[#A88765]/40 bg-[#1C1B19] overflow-hidden shadow-2xl shadow-[#4A3023]/20"
            >
              {/* Bronze top bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#7c6045] via-[#c9a986] to-[#7c6045]" />
              {/* Close button */}
              <button
                onClick={dismissBanner}
                aria-label={lang === "ar" ? "إغلاق" : "Close"}
                className="absolute top-3 end-3 flex items-center justify-center w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 transition text-white"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="p-6 text-center">
                {/* VAT Logo */}
                <div className="mx-auto mb-4 w-16 h-16 rounded-xl overflow-hidden border border-[#A88765]/30 shadow-lg shadow-[#4A3023]/10">
                  <div className="w-full h-[60%] bg-[#0a4d2e] flex items-center justify-center">
                    <span className="text-white font-black text-[8px] leading-tight text-center">
                      ضريبة
                      <br />
                      القيمة
                      <br />
                      المضافة
                    </span>
                  </div>
                  <div className="w-full h-[40%] bg-[#c9a227] flex items-center justify-center">
                    <span className="text-white font-black text-xs tracking-widest">VAT</span>
                  </div>
                </div>
                {/* Pulse badge */}
                <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/50 bg-amber-400/10 px-3 py-1 text-[10px] font-bold text-amber-300 mb-3">
                  <span className="relative flex h-2 w-2">
                    <span className="motion-reduce:animate-none animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
                  </span>
                  تنبيه موسمي — الآن
                </div>
                {/* Heading */}
                <h2 className="font-display text-xl font-black text-white mb-2 leading-tight">
                  موعد إقرار ضريبة
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#c9a986] to-[#7c6045]">
                    القيمة المضافة
                  </span>
                </h2>
                {/* Quarter label */}
                <p className="text-sm text-[var(--fg-soft)] mb-1">
                  إقرار {VAT_QUARTER[currentMonth]} — يجب التقديم قبل نهاية الشهر
                </p>
                <p className="text-xs text-[var(--fg-soft)]/70 mb-6">
                  احمِ منشأتك من الغرامات — تقديم احترافي عبر منصة زاتكا
                </p>
                {/* CTA Buttons */}
                <div className="flex flex-col gap-2">
                  <a
                    href="/request-service?service=vat-declaration"
                    onClick={dismissBanner}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#c2a079] to-[#7c6045] py-3 text-sm font-black text-[#1C1B19] hover:scale-105 transition-transform shadow-lg shadow-[#4A3023]/30"
                  >
                    ⚡ اطلب الخدمة الآن
                  </a>
                  <button
                    onClick={dismissBanner}
                    className="w-full rounded-full border border-white/15 py-2.5 text-xs font-bold text-[var(--fg-soft)] hover:bg-white/5 transition"
                  >
                    ليس الآن — إغلاق
                  </button>
                </div>
                {/* Trust line */}
                <p className="mt-4 text-[10px] text-[var(--fg-soft)]/50">
                  أحمد المدني · محاسب أول معتمد · الرياض
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        style={{ scaleX, transformOrigin: isRTL ? "right" : "left" }}
        className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-gradient-to-r from-[#c2a079] via-[#A88765] to-[#76543F]"
      />

      <Navbar lang={lang} onToggle={toggleLang} />

      <main className="relative z-10">
        <Hero lang={lang} />
        <Suspense fallback={null}>
          <NewsTicker lang={lang} />
        </Suspense>
        <Suspense fallback={null}>
          <AboutMe lang={lang} />
        </Suspense>
        <StickyOutgoingLayer>
          <Suspense fallback={null}>
            <ServicesEditorial lang={lang} onOpen={setServiceModal} />
          </Suspense>
        </StickyOutgoingLayer>
        <Suspense fallback={null}>
          <SoftwareEcosystem lang={lang} />
        </Suspense>
        <Suspense fallback={null}>
          <TopicsAndVideos lang={lang} />
        </Suspense>
        <Suspense fallback={null}>
          <FeaturedTools lang={lang} />
        </Suspense>
        <Testimonials lang={lang} />
        <Contact lang={lang} />
      </main>

      <Footer lang={lang} />

      <FloatingSocial isRTL={isRTL} />
      <Suspense fallback={null}>
        <AIAssistant lang={lang} />
      </Suspense>

      <Suspense fallback={null}>
        <AnimatePresence>
          {skillModal && (
            <SkillModal item={skillModal} lang={lang} onClose={() => setSkillModal(null)} />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {serviceModal && (
            <ServiceModal item={serviceModal} lang={lang} onClose={() => setServiceModal(null)} />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {eidOpen && <EidBanner lang={lang} onClose={dismissEid} />}
        </AnimatePresence>
      </Suspense>
    </div>
  );
}

/* ============= NAVBAR ============= */
export function Navbar({ lang, onToggle }: { lang: Lang; onToggle: () => void }) {
  const isAdmin = useIsAdmin();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const { reduce } = useMotionSafe();
  // `useMotionSafe()`'s reduced-motion value resolves via an effect (one tick
  // after mount), but `initial` on the nav below is only ever read at mount —
  // by the time the effect flips `reduce` to true, the entrance animation has
  // already locked in. A lazily-initialized state reads matchMedia directly
  // during the same render that decides `initial`, so it's correct from the
  // very first paint (client-only; SSR has no window and safely defaults to
  // the animated entrance, same as any other visitor without the effect yet).
  const [navReduceMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  const links: { to: string; label: string; hash?: boolean }[] = [
    { to: "/", label: t.nav.home[lang] },
    { to: "/about", label: t.nav.about[lang] },
    { to: "/services", label: t.nav.services[lang] },
    { to: "/tools", label: lang === "ar" ? "الأدوات" : "Tools" },
    { to: "/library/articles", label: lang === "ar" ? "المكتبة" : "Library" },
    // Points at the real /contact page (form + mascot channels) rather than the
    // homepage anchor, so it behaves like every other nav item and can carry an
    // active state. Existing `/#contact` links elsewhere still resolve, because
    // the homepage keeps its `id="contact"` section.
    { to: "/contact", label: t.nav.contact[lang] },
  ];

  // Hash links (in-page anchors) have no route of their own to be "active".
  const isLinkActive = (l: { to: string; hash?: boolean }) => {
    if (l.hash) return false;
    if (l.to === "/") return isHome;
    return pathname === l.to || pathname.startsWith(`${l.to}/`);
  };

  // `showIndicator` mounts the shared layoutId underline — desktop nav only,
  // per Phase M7 scope (mobile keeps the plain color-based active state).
  const renderLink = (
    l: { to: string; label: string; hash?: boolean },
    extraClass = "",
    showIndicator = false,
  ) => {
    const active = isLinkActive(l);
    const cls = `relative text-sm font-medium transition-colors hover:text-[#c2a079] ${extraClass}`;
    const color = active ? "#c2a079" : "var(--fg-soft)";
    const indicator = showIndicator && active && (
      <motion.span
        layoutId="nav-active-underline"
        aria-hidden
        className="absolute inset-x-0 -bottom-1.5 h-[2px] rounded-full bg-[#A88765]"
        transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 32 }}
      />
    );
    if (l.hash) {
      return (
        <a
          href={l.to.slice(1)}
          onMouseEnter={playHover}
          onClick={() => setMobileOpen(false)}
          className={cls}
          style={{ color }}
        >
          {l.label}
          {indicator}
        </a>
      );
    }
    return (
      <RouterLink
        to={l.to}
        onMouseEnter={playHover}
        onClick={() => setMobileOpen(false)}
        className={cls}
        style={{ color }}
        aria-current={active ? "page" : undefined}
      >
        {l.label}
        {indicator}
      </RouterLink>
    );
  };

  return (
    <motion.nav
      initial={navReduceMotion ? false : { y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={navReduceMotion ? { duration: 0 } : { duration: 0.8, delay: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#A88765]/20 backdrop-blur-xl"
      style={{ background: "color-mix(in oklab, #1C1B19 82%, transparent)" }}
    >
      <div className="w-full px-4 sm:px-8 lg:px-16 flex h-20 items-center justify-between gap-4">
        <RouterLink
          to="/"
          className="group flex flex-col leading-tight shrink-0"
          onMouseEnter={playHover}
        >
          <span className="text-xl font-extrabold sm:text-2xl" style={{ color: "var(--fg)" }}>
            {lang === "ar" ? "أحمد المدني" : "Ahmed Elmadani"}
          </span>
          <span className="mt-1.5 text-[11px] uppercase tracking-[0.3em] text-[#A88765]">
            Senior Accountant
          </span>
        </RouterLink>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.to}>{renderLink(l, "", true)}</li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          {!isHome && (
            <RouterLink
              to="/"
              onMouseEnter={playHover}
              onClick={playClick}
              className="hidden sm:flex size-9 items-center justify-center rounded-full border border-[#A88765]/30 transition-all hover:bg-[#A88765]/10"
              aria-label={lang === "ar" ? "العودة للرئيسية" : "Back to home"}
              title={lang === "ar" ? "العودة للرئيسية" : "Back to home"}
            >
              {lang === "ar" ? (
                <ArrowRight className="size-4 text-[#A88765]" />
              ) : (
                <ArrowLeft className="size-4 text-[#A88765]" />
              )}
            </RouterLink>
          )}
          {isAdmin && (
            <RouterLink
              to="/admin/library"
              onMouseEnter={playHover}
              onClick={playClick}
              className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-emerald-400/60 bg-emerald-400/10 px-3 py-2 text-xs font-bold text-emerald-200 transition-all hover:bg-emerald-400/20"
              aria-label="Admin"
            >
              <ShieldCheck className="size-4" />
              <span className="hidden lg:inline">
                {lang === "ar" ? "لوحة التحكم" : "Dashboard"}
              </span>
            </RouterLink>
          )}
          {isAdmin && (
            <RouterLink
              to="/crm"
              onMouseEnter={playHover}
              onClick={playClick}
              className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-sky-400/60 bg-sky-400/10 px-3 py-2 text-xs font-bold text-sky-200 transition-all hover:bg-sky-400/20"
              aria-label="CRM"
            >
              <Users className="size-4" />
              <span className="hidden lg:inline">{lang === "ar" ? "العملاء" : "CRM"}</span>
            </RouterLink>
          )}
          <button
            onClick={onToggle}
            onMouseEnter={playHover}
            className="flex items-center gap-2 rounded-full border border-[#A88765]/30 px-3 py-2 text-xs font-semibold transition-all hover:bg-[#A88765]/10"
            style={{ color: "var(--fg)" }}
            aria-label="Toggle language"
          >
            <Languages className="size-4 text-[#A88765]" />
            <span>{lang === "ar" ? "EN" : "AR"}</span>
          </button>
          <RouterLink
            to="/request-service"
            onMouseEnter={playHover}
            onClick={playClick}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-gradient-to-br from-[#c2a079] to-[#7c6045] px-4 py-2 text-xs font-bold text-[#1C1B19] shadow-lg shadow-[#4A3023]/40 transition-all hover:scale-105"
          >
            <Sparkles className="size-4" />
            {lang === "ar" ? "اطلب خدمة" : "Request Service"}
            {lang === "ar" ? (
              <ArrowLeft className="size-3.5" />
            ) : (
              <ArrowRight className="size-3.5" />
            )}
          </RouterLink>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex size-9 items-center justify-center rounded-full border border-[#A88765]/30 lg:hidden"
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X className="size-4 text-[#A88765]" />
            ) : (
              <Menu className="size-4 text-[#A88765]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-[#A88765]/20"
            style={{ background: "color-mix(in oklab, #1C1B19 95%, transparent)" }}
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {links.map((l) => (
                <li key={l.to} className="border-b border-[#A88765]/10 py-3">
                  {renderLink(l, "block")}
                </li>
              ))}
              {isAdmin && (
                <li className="flex gap-2 border-b border-[#A88765]/10 py-3">
                  <RouterLink
                    to="/admin/library"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-emerald-400/60 bg-emerald-400/10 px-3 py-2 text-xs font-bold text-emerald-200"
                  >
                    <ShieldCheck className="size-4" />
                    {lang === "ar" ? "لوحة التحكم" : "Dashboard"}
                  </RouterLink>
                  <RouterLink
                    to="/crm"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-sky-400/60 bg-sky-400/10 px-3 py-2 text-xs font-bold text-sky-200"
                  >
                    <Users className="size-4" />
                    {lang === "ar" ? "العملاء" : "CRM"}
                  </RouterLink>
                </li>
              )}
              <li className="pt-3">
                <RouterLink
                  to="/request-service"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-gradient-to-br from-[#c2a079] to-[#7c6045] px-4 py-2.5 text-sm font-bold text-[#1C1B19]"
                >
                  <Sparkles className="size-4" />
                  {lang === "ar" ? "اطلب خدمة" : "Request Service"}
                </RouterLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

/* ============= TYPEWRITER ============= */
/* ============= HERO ============= */

/**
 * Height of the fixed `Navbar` above: its bar is `h-20` (5rem) plus a 1px
 * `border-b`, and that height is constant at every breakpoint (verified live:
 * 81px at 1440/1024/390). Single source of truth for the Hero's top offset so
 * the image begins exactly at the header's bottom edge instead of running
 * underneath it. If the Navbar's `h-20` ever changes, update this with it.
 */
const HEADER_H = "calc(5rem + 1px)";

/** Bronze light bloom anchored behind the text column — the Hero's one
 *  decorative layer. Echoes the warm key light already in the photograph and
 *  lifts the headline off the image; static (no loop), desktop only. */
const HERO_BLOOM =
  "radial-gradient(closest-side, rgba(168,135,101,0.20), rgba(168,135,101,0.07) 52%, transparent 78%)";

function Hero({ lang }: { lang: Lang }) {
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;
  const { reduce } = useMotionSafe();

  // Simple staggered fade for the supporting elements (headline handles its
  // own reveal). Collapses to an instant opacity change under reduced motion.
  const fade = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: reduce ? { duration: 0.2 } : { duration: 0.6, ease: EASE.out, delay },
  });

  // Subtle pointer parallax (Phase M3/P1) — fine-pointer devices only, and
  // never under reduced motion. Background drifts a few px one way,
  // foreground content drifts a couple px the other way, both smoothed
  // through a spring so nothing feels cursor-locked.
  const [pointerCapable, setPointerCapable] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setPointerCapable(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setPointerCapable(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  const parallaxActive = pointerCapable && !reduce;

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springOpts = { stiffness: 60, damping: 20, mass: 0.5 };
  const bgX = useSpring(useTransform(rawX, [-1, 1], [-8, 8]), springOpts);
  const bgY = useSpring(useTransform(rawY, [-1, 1], [-8, 8]), springOpts);
  const fgX = useSpring(useTransform(rawX, [-1, 1], [5, -5]), springOpts);
  const fgY = useSpring(useTransform(rawY, [-1, 1], [5, -5]), springOpts);
  // The bloom sits between the photo and the text, so it drifts with the
  // foreground but a little further — three depths instead of two.
  const bloomX = useSpring(useTransform(rawX, [-1, 1], [6, -6]), springOpts);
  const bloomY = useSpring(useTransform(rawY, [-1, 1], [6, -6]), springOpts);

  const onHeroPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    rawX.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    rawY.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };
  const onHeroPointerLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <section
      id="home"
      /* `paddingTop` reserves the fixed header's band. Below `lg` the section
         no longer forces a min-height — the portrait sits in a bounded box
         at a natural document-flow height (see below) and the text column
         follows it in flow, so there's no scenario where the two can
         overlap. At `lg`+ the original cinematic full-bleed treatment
         returns, sized to the viewport as before. */
      className="relative isolate flex w-full flex-col overflow-hidden bg-[#1C1B19] lg:min-h-screen"
      style={{ paddingTop: HEADER_H }}
      onPointerMove={parallaxActive ? onHeroPointerMove : undefined}
      onPointerLeave={parallaxActive ? onHeroPointerLeave : undefined}
    >
      {/* Mobile/tablet portrait — a bounded box in normal document flow,
          directly above the text column instead of behind it. The face's
          position within the source photo is irrelevant here: since text
          never sits on top of this box, there is no way for it to cover any
          part of the portrait, at any crop. */}
      <div className="relative h-[46vh] max-h-[480px] min-h-[300px] w-full overflow-hidden lg:hidden">
        <img
          src={heroImg}
          alt={
            lang === "ar"
              ? "أحمد المدني — محاسب أول واستشاري مالي، في مكتبه التنفيذي"
              : "Ahmed Elmadani — Senior Accountant & Financial Consultant, in his executive office"
          }
          width={1536}
          height={1024}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-[62%_22%]"
        />
        {/* Light depth only — no readability wash needed since no text overlays this box. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 60% 30%, transparent 55%, rgba(12,9,7,0.32) 100%)",
          }}
        />
        {/* Fade the bottom edge into the section's own ground so the seam into the text column is soft. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-20"
          style={{ background: "linear-gradient(180deg, transparent, #1C1B19)" }}
        />
      </div>

      {/* Desktop (lg+) visual layer — clipped so the photograph and every
          scrim above it begin exactly at the header's bottom edge, never
          behind it. The parallax overscan happens inside this clip, so
          drifting the image can't expose an edge at the top seam either. */}
      <div
        className="absolute inset-x-0 bottom-0 -z-10 hidden overflow-hidden lg:block"
        style={{ top: HEADER_H }}
      >
        {/* Full-bleed executive portrait — real image asset, no baked text/CTA.
            Wrapped slightly oversized so the parallax translate never exposes an edge. */}
        <motion.div
          className="absolute -inset-4"
          style={parallaxActive ? { x: bgX, y: bgY } : undefined}
        >
          <img
            src={heroImg}
            alt={
              lang === "ar"
                ? "أحمد المدني — محاسب أول واستشاري مالي، في مكتبه التنفيذي"
                : "Ahmed Elmadani — Senior Accountant & Financial Consultant, in his executive office"
            }
            width={1536}
            height={1024}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-[72%_30%] lg:object-[70%_28%]"
          />
        </motion.div>

        {/* Bronze bloom behind the text column — the single decorative layer.
            Sits above the photo but under the scrims so it warms rather than
            washes out. Desktop only; static, no loop. */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute top-[6%] hidden h-[86%] w-[56%] lg:block"
          style={
            parallaxActive
              ? { left: "-9%", background: HERO_BLOOM, x: bloomX, y: bloomY }
              : { left: "-9%", background: HERO_BLOOM }
          }
        />

        {/* Readability scrims — warm, restrained, only where the text sits */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 hidden lg:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(20,15,11,0.90) 0%, rgba(20,15,11,0.55) 30%, rgba(20,15,11,0.14) 52%, transparent 66%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 lg:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,15,11,0.34) 0%, rgba(20,15,11,0.22) 24%, rgba(20,15,11,0.58) 50%, rgba(20,15,11,0.88) 78%, rgba(20,15,11,0.96) 100%)",
          }}
        />
        {/* Soft vignette — pulls the frame edges down a touch so the subject
            holds the eye. Deliberately open in the middle: no flat black wash. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(125% 95% at 62% 40%, transparent 42%, rgba(12,9,7,0.28) 76%, rgba(12,9,7,0.52) 100%)",
          }}
        />
        {/* Blend into the section below */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
          style={{ background: "linear-gradient(180deg, transparent, var(--bg-surface))" }}
        />
      </div>

      {/* Content — left text zone on desktop; on mobile/tablet it simply
          follows the portrait box above in normal flow (no `items-end`
          pinning it over the image anymore). */}
      <div className="relative flex w-full flex-1 px-4 pb-14 pt-8 sm:px-8 sm:pb-16 lg:items-center lg:px-12 lg:py-0 xl:px-16">
        {/* Vertical rhythm is deliberately uneven: the badge sits close under
            the headline, the tagline gets room to breathe, and the widest gap
            falls before the CTAs so the call to action reads as its own beat.
            The location line then tucks back in as a footnote to the buttons. */}
        <motion.div
          className="w-full md:max-w-[42rem] lg:w-auto lg:mr-auto lg:max-w-[38rem] xl:max-w-[44rem]"
          style={parallaxActive ? { x: fgX, y: fgY } : undefined}
        >
          <motion.div
            {...fade(0.05)}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#A88765]/40 bg-[#1C1B19]/45 px-3.5 py-1.5 text-[12px] font-semibold tracking-[0.01em] text-[#e9d9c3]/90 backdrop-blur-md"
          >
            <Sparkles className="size-3.5 text-[#A88765]" />
            {t.hero.badge[lang]}
          </motion.div>

          {/* Fluid display size — one clamp instead of five breakpoint jumps,
              tuned so the longest Arabic line never breaks into a lone word. */}
          <RevealHeadline
            lines={t.hero.headline[lang]}
            className="font-display text-[clamp(1.85rem,1.3rem_+_2.45vw,3.5rem)] font-bold leading-[1.22] text-[#FCFBF9] [text-wrap:balance]"
          />

          <motion.p
            {...fade(0.75)}
            className="mt-7 max-w-[33rem] text-[15px] leading-[1.85] text-[#FCFBF9]/80 [text-wrap:pretty] sm:text-[16.5px]"
          >
            {t.hero.tagline[lang]}
          </motion.p>

          {/* Search axis — the site's own entry point, placed inside the hero
              so it is on screen with the headline instead of below the fold. */}
          <motion.div {...fade(0.85)} className="mt-8 max-w-[34rem]">
            <Suspense
              fallback={
                <div className="h-14 w-full rounded-full border border-[#c9a986]/20 bg-[#171512]/70" />
              }
            >
              <SiteSearch lang={lang} />
            </Suspense>
          </motion.div>

          <motion.div {...fade(0.95)} className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">

            <a
              href="/#contact"
              onMouseEnter={playHover}
              onClick={playClick}
              className="group inline-flex h-[54px] items-center gap-3 rounded-full bg-gradient-to-br from-[#c2a079] to-[#7c6045] px-8 text-[15px] font-bold text-[#1C1B19] shadow-[0_18px_40px_-16px_rgba(74,48,35,0.7)] transition-transform hover:scale-[1.03]"
            >
              <span>{t.hero.cta1[lang]}</span>
              <Arrow className="size-4 transition-transform group-hover:-translate-x-1 rtl:group-hover:-translate-x-1 ltr:group-hover:translate-x-1" />
            </a>
            <RouterLink
              to="/request-service"
              onMouseEnter={playHover}
              onClick={playClick}
              className="inline-flex h-[54px] items-center gap-2 rounded-full border border-[#FCFBF9]/25 bg-white/[0.04] px-6 text-[14px] font-semibold text-[#FCFBF9]/90 backdrop-blur-sm transition-colors hover:border-[#A88765] hover:text-[#e9d9c3]"
            >
              <Briefcase className="size-4" />
              <span>{lang === "ar" ? "اطلب خدمة" : "Request a service"}</span>
            </RouterLink>
          </motion.div>

          <motion.div
            {...fade(1.05)}
            className="mt-6 flex items-center gap-2 text-[12.5px] text-[#FCFBF9]/65"
          >
            <MapPin className="size-4 text-[#A88765]" />
            {t.hero.location[lang]}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============= EXPERIENCE ============= */
export function Experience({ lang }: { lang: Lang }) {
  const { data } = useQuery({
    queryKey: ["public-experience"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("experience_items")
        .select("*")
        .eq("is_published", true)
        .order("sort_order", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  // Fallback to hardcoded i18n content when DB is empty so the timeline
  // is always visible on the About page.
  const fallback = t.experience.items.map((it, i) => ({
    id: `fallback-exp-${i}`,
    role_ar: it.role.ar,
    role_en: it.role.en,
    company_ar: it.company.ar,
    company_en: it.company.en,
    company_logo_url: null,
    date_ar: it.date.ar,
    date_en: it.date.en,
    points_ar: it.points.ar,
    points_en: it.points.en,
  }));
  const items = data && data.length > 0 ? data : fallback;

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  if (items.length === 0) return null;

  return (
    <section id="experience" className="py-14">
      <div className="w-full px-4 sm:px-8 lg:px-16">
        <SectionTitle
          eyebrow={lang === "ar" ? "المسيرة المهنية" : "Career"}
          title={t.experience.title[lang]}
          sub={t.experience.sub[lang]}
        />
        <div ref={sectionRef} className="relative mt-16">
          {/* Static rail — thicker, dashed, tree-trunk look */}
          <div
            aria-hidden
            className="absolute top-0 bottom-0 hidden w-[3px] md:block md:left-1/2 md:-translate-x-1/2 rounded-full bg-[repeating-linear-gradient(to_bottom,rgba(168,135,101,0.35)_0_10px,transparent_10px_18px)]"
          />
          <div
            aria-hidden
            className="absolute top-0 bottom-0 w-[3px] md:hidden right-3 rtl:left-3 rtl:right-auto rounded-full bg-[repeating-linear-gradient(to_bottom,rgba(168,135,101,0.35)_0_10px,transparent_10px_18px)]"
          />
          {/* Scroll-driven gold progress trunk */}
          <motion.div
            aria-hidden
            style={{ height: lineHeight }}
            className="absolute top-0 hidden w-[3px] md:block md:left-1/2 md:-translate-x-1/2 rounded-full bg-gradient-to-b from-[#e8cfa8] via-[#A88765] to-[#4A3023] shadow-[0_0_22px_rgba(168,135,101,0.75)]"
          />
          <motion.div
            aria-hidden
            style={{ height: lineHeight }}
            className="absolute top-0 w-[3px] md:hidden right-3 rtl:left-3 rtl:right-auto rounded-full bg-gradient-to-b from-[#e8cfa8] via-[#A88765] to-[#4A3023] shadow-[0_0_22px_rgba(168,135,101,0.75)]"
          />
          <div className="space-y-16">
            {items.map((item, i) => (
              <TimelineItem key={item.id} item={item} index={i} lang={lang} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  item,
  index,
  lang,
}: {
  item: {
    role_ar: string;
    role_en: string;
    company_ar: string;
    company_en: string;
    company_logo_url: string | null;
    date_ar: string;
    date_en: string;
    points_ar: string[];
    points_en: string[];
  };
  index: number;
  lang: Lang;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const left = index % 2 === 0;
  const [revealed, setRevealed] = useState(false);
  const role = lang === "ar" ? item.role_ar : item.role_en;
  const company = lang === "ar" ? item.company_ar : item.company_en;
  const date = lang === "ar" ? item.date_ar : item.date_en;
  const points = lang === "ar" ? item.points_ar : item.points_en;

  // Scroll-driven card motion: subtle parallax + spring settle as user scrolls
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yCard = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -30]), {
    stiffness: 60,
    damping: 20,
  });
  const scaleDot = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.4, 1.4, 1.4, 0.9]);
  const glowDot = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    [
      "0 0 0px rgba(168,135,101,0)",
      "0 0 24px rgba(168,135,101,0.9)",
      "0 0 24px rgba(168,135,101,0.9)",
      "0 0 0px rgba(168,135,101,0)",
    ],
  );

  return (
    <div ref={ref} className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2">
      {/* Horizontal branch connector — a small "twig" from the trunk to the card (desktop only). */}
      <motion.span
        aria-hidden
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={`pointer-events-none absolute top-1/2 hidden h-[3px] rounded-full bg-gradient-to-r from-[#A88765] to-[#A88765]/0 shadow-[0_0_10px_rgba(168,135,101,0.6)] md:block ${
          left ? "left-[calc(50%-56px)] w-14 origin-right rotate-180" : "left-1/2 w-14 origin-left"
        }`}
      />
      {/* Horizontal branch connector — mobile: from right spine into card. */}
      <motion.span
        aria-hidden
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="pointer-events-none absolute top-6 right-4 h-[3px] w-8 origin-right rounded-full bg-gradient-to-l from-[#A88765] to-[#A88765]/0 md:hidden rtl:left-4 rtl:right-auto rtl:origin-left rtl:bg-gradient-to-r"
      />
      <motion.div
        style={{ scale: scaleDot, boxShadow: glowDot }}
        className="tl-dot absolute size-4 rounded-full bg-[#A88765] ring-4 ring-[#A88765]/20 md:left-1/2 md:-translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 right-1 rtl:left-1 rtl:right-auto md:right-auto md:rtl:left-auto"
      />
      <motion.div
        style={{ y: yCard }}
        initial={{ opacity: 0, x: left ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
        className={`group rounded-3xl border border-[#A88765]/20 bg-[#1C1B19] p-6 sm:p-8 transition-all hover:border-[#A88765]/50 mr-10 md:mr-0 rtl:ml-10 rtl:mr-0 md:rtl:ml-0 ${left ? "md:col-start-1" : "md:col-start-2"}`}
      >
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#A88765]/15 px-3 py-1 text-xs font-bold text-[#c9a986]">
          <Briefcase className="size-3.5" />
          {date}
        </div>
        <h3 className="text-xl font-extrabold" style={{ color: "var(--fg)" }}>
          {role}
        </h3>
        <button
          type="button"
          onClick={() => setRevealed((v) => !v)}
          className={`mt-1 inline-flex items-center gap-2 text-sm font-medium text-[#A88765] transition-all duration-500 ${revealed ? "" : "blur-[6px] saturate-50 hover:blur-0 hover:saturate-100 focus:blur-0"}`}
          title={
            lang === "ar"
              ? "اسم الشركة مخفي حفاظًا على الخصوصية — اضغط للإظهار"
              : "Company name hidden for privacy — tap to reveal"
          }
        >
          {company}
        </button>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed" style={{ color: "var(--fg-soft)" }}>
          {points.map((p, j) => (
            <motion.li
              key={j}
              initial={{ opacity: 0, x: left ? -12 : 12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + j * 0.08 }}
              className="flex gap-2"
            >
              <span className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-[#A88765]" />
              <span>{p}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
      <motion.div
        style={{ y: yCard }}
        initial={{ opacity: 0, scale: 0.7, rotate: left ? 10 : -10 }}
        animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.2, type: "spring" }}
        className={`hidden md:flex items-center justify-center ${left ? "md:col-start-2" : "md:col-start-1 md:row-start-1"}`}
      >
        <LogoBadge logoUrl={item.company_logo_url} name={company} />
      </motion.div>
      <div className="md:hidden mr-10 rtl:ml-10 rtl:mr-0">
        <LogoBadge logoUrl={item.company_logo_url} name={company} compact />
      </div>
    </div>
  );
}

function LogoBadge({
  logoUrl,
  name,
  compact = false,
}: {
  logoUrl: string | null;
  name: string;
  compact?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="group relative"
    >
      <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#A88765]/25 via-transparent to-[#4A3023]/20 blur-2xl opacity-50 group-hover:opacity-80 transition-opacity" />
      <div
        className={`relative flex flex-col items-center justify-center gap-3 rounded-3xl border border-[#A88765]/30 bg-[#1C1B19] shadow-2xl ${compact ? "p-4" : "p-6"}`}
      >
        <div
          className={`relative flex items-center justify-center rounded-2xl bg-white p-4 shadow-inner overflow-hidden ${compact ? "size-24" : "size-36"}`}
        >
          {logoUrl ? (
            <motion.img
              src={logoUrl}
              alt=""
              aria-hidden
              className="max-h-full max-w-full object-contain blur-md saturate-50 transition-all duration-500 group-hover:blur-0 group-hover:saturate-100 drop-shadow-[0_4px_12px_rgba(28,27,25,0.35)]"
            />
          ) : (
            <Briefcase className="size-8 text-[#1C1B19]/30" />
          )}
          <div className="absolute inset-0 rounded-2xl ring-1 ring-[#A88765]/30" />
        </div>
        <div className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-[#A88765] blur-[5px] select-none transition-all duration-500 group-hover:blur-0">
          {name}
        </div>
      </div>
    </motion.div>
  );
}

/* ============= SKILLS (interactive) ============= */
export function Skills({ lang, onOpen }: { lang: Lang; onOpen: (s: SkillItem) => void }) {
  const [active, setActive] = useState(0);
  const groupIcons = [BarChart3, Wallet, Wrench];
  const { reduce } = useMotionSafe();

  const groupsQ = useQuery({
    queryKey: ["public-skill-groups"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("skill_groups")
        .select("*")
        .eq("is_published", true)
        .order("sort_order", { ascending: true });
      if (error) throw error;
      return data;
    },
  });
  const itemsQ = useQuery({
    queryKey: ["public-skill-items"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("skill_items")
        .select("*")
        .order("sort_order", { ascending: true });
      if (error) throw error;
      return data;
    },
  });
  const dbGroups = groupsQ.data ?? [];
  const dbItems = itemsQ.data ?? [];
  const isLoading = groupsQ.isLoading || itemsQ.isLoading;

  // Fallback to hardcoded content from i18n when DB has no published groups
  const fallbackGroups = t.skills.groups.map((g, gi) => ({
    id: `fallback-g-${gi}`,
    heading_ar: g.h.ar,
    heading_en: g.h.en,
  }));
  const fallbackItems = t.skills.groups.flatMap((g, gi) =>
    g.items.map((it, ii) => ({
      id: `fallback-i-${gi}-${ii}`,
      group_id: `fallback-g-${gi}`,
      name_ar: it.ar,
      name_en: it.en,
      level: it.level,
      desc_ar: it.desc.ar,
      desc_en: it.desc.en,
      tools: it.tools,
      kpis_ar: it.kpis.ar,
      kpis_en: it.kpis.en,
    })),
  );

  const useFallback = dbGroups.length === 0;
  const groups = useFallback ? fallbackGroups : dbGroups;
  const items = useFallback ? fallbackItems : dbItems;
  const activeGroup = groups[active];
  const activeItems = activeGroup ? items.filter((i) => i.group_id === activeGroup.id) : [];

  if (isLoading && dbGroups.length === 0 && !useFallback) return null;

  return (
    <section id="skills" className="relative bg-[#FCFBF9] py-14">
      <div
        aria-hidden
        className="absolute inset-x-0 top-10 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-[#A88765]/50 to-transparent"
      />
      <div className="w-full px-4 sm:px-8 lg:px-16">
        <SectionTitle
          eyebrow={lang === "ar" ? "المهارات" : "Skills"}
          title={t.skills.title[lang]}
          sub={t.skills.sub[lang]}
          theme="light"
        />

        {activeGroup && (
          <div className="mt-12 grid gap-8 lg:grid-cols-[280px_1fr]">
            <div className="flex flex-row gap-3 overflow-x-auto lg:flex-col">
              {groups.map((g, i) => {
                const Icon = groupIcons[i % groupIcons.length];
                const isActive = i === active;
                return (
                  <button
                    key={g.id}
                    onClick={() => {
                      setActive(i);
                      playClick();
                    }}
                    onMouseEnter={playHover}
                    aria-pressed={isActive}
                    className={`group relative flex w-full shrink-0 items-center gap-3 overflow-hidden rounded-2xl border px-4 py-4 text-start transition-colors ${
                      isActive
                        ? "border-[#A88765]"
                        : "border-[#E3DDD5] bg-[#F5F1EB] hover:border-[#A88765]/40"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="skills-active-tab"
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-br from-[#A88765]/15 to-transparent shadow-[0_10px_30px_-12px_rgba(168,135,101,0.35)]"
                        transition={
                          reduce ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 28 }
                        }
                      />
                    )}
                    <span
                      className={`relative z-10 flex size-10 shrink-0 items-center justify-center rounded-xl ${
                        isActive
                          ? "bg-gradient-to-br from-[#c2a079] to-[#7c6045] text-[#1C1B19]"
                          : "bg-[#A88765]/10 text-[#A88765]"
                      }`}
                    >
                      <Icon className="size-5" />
                    </span>
                    <div className="relative z-10 flex-1">
                      <div className="text-[10px] uppercase tracking-[0.25em] text-[#8a8078]">
                        {String(i + 1).padStart(2, "0")} /{" "}
                        {groups.length.toString().padStart(2, "0")}
                      </div>
                      <div
                        className={`text-sm font-extrabold ${isActive ? "bg-gradient-to-br from-[#A88765] to-[#4A3023] bg-clip-text text-transparent" : "text-[#1C1B19]"}`}
                      >
                        {lang === "ar" ? g.heading_ar : g.heading_en}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <motion.div
              key={activeGroup.id}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduce ? { duration: 0 } : { duration: 0.5 }}
              className="relative overflow-hidden rounded-3xl border border-[#E3DDD5] bg-[#F5F1EB] p-6 sm:p-8"
            >
              <div className="relative">
                <div className="mb-6 flex items-end justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.4em] text-[#A88765]">
                      {lang === "ar" ? "المجموعة" : "Group"}
                    </div>
                    <h3 className="mt-1 font-display text-3xl font-extrabold text-[#1C1B19] sm:text-4xl">
                      {lang === "ar" ? activeGroup.heading_ar : activeGroup.heading_en}
                    </h3>
                  </div>
                  <div className="font-mono text-5xl font-black text-[#A88765]/25 sm:text-6xl">
                    0{active + 1}
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {activeItems.map((it, j) => (
                    <motion.button
                      key={it.id}
                      initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={reduce ? { duration: 0 } : { duration: 0.35, delay: j * 0.05 }}
                      onMouseEnter={playHover}
                      onClick={() => {
                        playClick();
                        onOpen(it);
                      }}
                      className="group relative overflow-hidden rounded-2xl border border-[#E3DDD5] bg-[#FCFBF9] p-4 text-start transition-all hover:-translate-y-0.5 hover:border-[#A88765] hover:bg-[#A88765]/[0.06]"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm font-bold text-[#1C1B19]">
                          {lang === "ar" ? it.name_ar : it.name_en}
                        </span>
                        <span className="font-mono text-xs text-[#A88765]">{it.level}%</span>
                      </div>
                      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-[#E3DDD5]">
                        <motion.div
                          initial={reduce ? { width: `${it.level}%` } : { width: 0 }}
                          whileInView={{ width: `${it.level}%` }}
                          viewport={{ once: true }}
                          transition={
                            reduce ? { duration: 0 } : { duration: 1.1, delay: 0.1 + j * 0.05 }
                          }
                          className="h-full rounded-full bg-gradient-to-r from-[#c2a079] to-[#7c6045]"
                        />
                      </div>
                      <div className="mt-2 flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] text-[#A88765]/80 opacity-0 transition-opacity group-hover:opacity-100">
                        <Plus className="size-3" />
                        {lang === "ar" ? "اضغط للتفاصيل" : "Tap for details"}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ============= TESTIMONIALS ============= */

function Testimonials({ lang }: { lang: Lang }) {
  const ar = lang === "ar";
  const m = useMotionSafe();
  const items = t.testimonials.items;

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const activeItem = items[activeIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setDirection(1);

      setActiveIndex((current) => (current + 1) % items.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, [items.length]);

  const changeTestimonial = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const initial = activeItem.name[lang].replace(/^[.\s]+/, "").charAt(0);

  return (
    <section className="relative overflow-hidden bg-[#F5F2ED] py-20 sm:py-24 lg:py-28">
      {/* Decorative background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -start-40 top-1/2 size-[30rem] -translate-y-1/2 rounded-full bg-[#A88765]/[0.06] blur-3xl"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -end-40 bottom-0 size-[25rem] rounded-full bg-[#4A3023]/[0.04] blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-[80rem] px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={m.staggerParent}
          className="max-w-2xl"
        >
          <motion.p
            variants={m.staggerChild}
            className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#A88765]"
          >
            {ar ? "آراء" : "Testimonials"}
          </motion.p>

          <motion.h2
            variants={m.staggerChild}
            className="font-display mt-3 text-[1.9rem] font-bold leading-[1.3] text-[#1C1B19] sm:text-[2.4rem] lg:text-[2.9rem]"
          >
            {t.testimonials.title[lang]}
          </motion.h2>

          <motion.p
            variants={m.staggerChild}
            className="mt-4 text-[15px] leading-[1.9] text-[#746E67] sm:text-[16px]"
          >
            {t.testimonials.sub[lang]}
          </motion.p>
        </motion.div>

        {/* Main testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: m.reduce ? 0.3 : 0.8,
            ease: EASE.out,
          }}
          className="mt-12"
        >
          <div className="relative mx-auto max-w-4xl">
            {/* Decorative quote mark */}
            <span
              aria-hidden
              className="pointer-events-none absolute -start-3 -top-10 font-serif text-[7rem] leading-none text-[#A88765]/[0.12] sm:-start-8 sm:-top-14 sm:text-[10rem]"
            >
              “
            </span>

            {/* Testimonial content */}
            <div className="relative min-h-[22rem] overflow-hidden rounded-[2rem] border border-[#E3DDD5] bg-[#FCFBF9] px-6 py-8 shadow-[0_25px_70px_-40px_rgba(74,48,35,0.45)] sm:min-h-[24rem] sm:px-10 sm:py-10 lg:px-14 lg:py-12">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`${activeIndex}-${lang}`}
                  initial={
                    m.reduce
                      ? { opacity: 0 }
                      : {
                          opacity: 0,
                          x: direction > 0 ? 60 : -60,
                          scale: 0.96,
                          filter: "blur(6px)",
                        }
                  }
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  exit={
                    m.reduce
                      ? { opacity: 0 }
                      : {
                          opacity: 0,
                          x: direction > 0 ? -60 : 60,
                          scale: 0.96,
                          filter: "blur(6px)",
                        }
                  }
                  transition={{
                    duration: m.reduce ? 0.2 : 0.55,
                    ease: EASE.emphasis,
                  }}
                  className="flex h-full flex-col justify-between"
                >
                  {/* Quote */}
                  <blockquote className="max-w-3xl">
                    <p className="font-display text-[1.25rem] font-medium leading-[1.8] tracking-tight text-[#3A352F] sm:text-[1.55rem] sm:leading-[1.8] lg:text-[1.7rem]">
                      “{activeItem.quote[lang]}”
                    </p>
                  </blockquote>

                  {/* Author */}
                  <div className="mt-10 flex items-center justify-between gap-5 border-t border-[#E3DDD5] pt-6">
                    <div className="flex min-w-0 items-center gap-4">
                      <motion.span
                        initial={m.reduce ? { scale: 1 } : { scale: 0.5, rotate: -20 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 16,
                          delay: 0.1,
                        }}
                        className="font-display flex size-12 shrink-0 items-center justify-center rounded-full bg-[#1C1B19] text-base font-bold text-[#E9D9C3]"
                      >
                        {initial}
                      </motion.span>

                      <div className="min-w-0">
                        <p className="truncate text-[14px] font-bold text-[#1C1B19] sm:text-[15px]">
                          {activeItem.name[lang]}
                        </p>

                        <p className="mt-1 truncate text-[12px] text-[#A88765] sm:text-[13px]">
                          {activeItem.role[lang]}
                        </p>
                      </div>
                    </div>

                    {/* Counter */}
                    <span className="hidden shrink-0 font-mono text-[12px] text-[#8A8078] sm:block">
                      {String(activeIndex + 1).padStart(2, "0")} /{" "}
                      {String(items.length).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
              {/* Progress bar */}
              {!m.reduce && (
                <motion.div
                  key={`bar-${activeIndex}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 3.2, ease: "linear" }}
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] origin-left bg-gradient-to-r from-[#c9a986] via-[#A88765] to-[#4A3023]"
                />
              )}
            </div>

            {/* Navigation */}
            <div className="mt-6 flex items-center justify-center gap-2">
              {items.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => changeTestimonial(index)}
                  aria-label={ar ? `عرض رأي العميل ${index + 1}` : `Show testimonial ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === activeIndex
                      ? "w-8 bg-[#4A3023]"
                      : "w-1.5 bg-[#A88765]/30 hover:bg-[#A88765]/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============= CONTACT ============= */

/** Spring used for every entrance/hover/tap in the mascot grid — one physics
 *  recipe shared by both card sizes so the row reads as a single system
 *  rather than two differently-tuned animations sitting next to each other. */
const mascotSpring: Transition = { type: "spring", stiffness: 260, damping: 20, mass: 0.7 };

const mascotCardVariants: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: mascotSpring },
};
// `reduce` can flip true a tick after first paint (once the media-query
// check resolves), which briefly renders with `mascotCardVariants` first.
// If this static variant left `y`/`scale` unmentioned, Framer Motion would
// leave them wherever that first render put them (its "hidden" pose) rather
// than resetting them — so they're pinned to identity here explicitly.
const mascotCardVariantsStatic: Variants = {
  hidden: { opacity: 0, y: 0, scale: 1 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2 } },
};

/**
 * A single Contact mascot card, in one of two sizes:
 *  - `"lg"` — the three direct channels (phone / WhatsApp / email): a
 *    featured tile with the mascot, the channel name, and the actual
 *    number/address, so it reads as its own small CTA rather than an icon.
 *  - `"sm"` — the social platforms: a compact bubble, icon-first, with the
 *    label appearing on hover/focus instead of taking up permanent space.
 * One component covers both so the pointer-follow, bob loop, and entrance
 * spring stay a single implementation instead of being duplicated per size.
 */
function ContactMascotCard({
  s,
  i,
  size,
  reduce,
  parallaxActive,
}: {
  s: (typeof SOCIALS)[number];
  i: number;
  size: "lg" | "sm";
  reduce: boolean;
  parallaxActive: boolean;
}) {
  const isLg = size === "lg";
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springOpts = { stiffness: 300, damping: 22, mass: 0.4 };
  const followRange = isLg ? 6 : 4;
  const mascotX = useSpring(useTransform(rawX, [-1, 1], [-followRange, followRange]), springOpts);
  const mascotY = useSpring(useTransform(rawY, [-1, 1], [-followRange, followRange]), springOpts);

  const onPointerMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    rawX.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    rawY.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };
  const onPointerLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  const mascotSize = isLg ? 84 : 52;

  return (
    <motion.a
      href={s.href}
      target={s.href.startsWith("http") ? "_blank" : undefined}
      rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={s.label}
      title={s.label}
      onMouseEnter={playHover}
      onClick={playClick}
      onPointerMove={parallaxActive ? onPointerMove : undefined}
      onPointerLeave={parallaxActive ? onPointerLeave : undefined}
      variants={reduce ? mascotCardVariantsStatic : mascotCardVariants}
      whileHover={reduce ? undefined : isLg ? { y: -6, scale: 1.02 } : { y: -4, scale: 1.08 }}
      whileTap={reduce ? undefined : { scale: 0.96 }}
      transition={mascotSpring}
      className={
        isLg
          ? "group relative flex items-center gap-4 overflow-hidden rounded-[1.75rem] border border-[#A88765]/25 bg-white/[0.045] p-4 text-start backdrop-blur-sm transition-colors hover:border-[#A88765]/60 sm:p-5"
          : "group relative flex flex-col items-center justify-center gap-1.5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] py-3 backdrop-blur-sm transition-colors hover:border-[#A88765]/50"
      }
    >
      <span
        aria-hidden
        className={
          isLg
            ? "pointer-events-none absolute -end-6 -top-6 size-24 rounded-full opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-70"
            : "pointer-events-none absolute inset-x-3 top-2 h-8 rounded-full opacity-40 blur-xl transition-opacity duration-500 group-hover:opacity-70"
        }
        style={{ background: s.color }}
      />
      <motion.div
        className="relative shrink-0"
        style={parallaxActive ? { x: mascotX, y: mascotY } : undefined}
      >
        <motion.img
          src={s.mascot}
          alt=""
          aria-hidden
          width={mascotSize}
          height={mascotSize}
          loading="lazy"
          decoding="async"
          className="relative w-auto object-contain drop-shadow-[0_6px_14px_rgba(0,0,0,0.35)]"
          style={{ height: mascotSize, width: mascotSize }}
          animate={reduce ? undefined : { y: [0, -5, 0] }}
          transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      {isLg ? (
        <span className="relative min-w-0 flex-1">
          <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-[#d8bd9c]">
            {s.label}
          </span>
          <span className="mt-1 block truncate text-[13px] font-semibold text-[#FCFBF9]" dir="ltr">
            {s.value}
          </span>
        </span>
      ) : (
        <span className="relative text-[10px] font-bold leading-tight text-[#FCFBF9]/80 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
          {s.label}
        </span>
      )}
    </motion.a>
  );
}

export function Contact({
  lang,
  embedded = false,
}: {
  lang: Lang;
  /** When true, skip the outer `<section>`/background — used by `/contact`,
   *  which wraps this together with the request form in one shared section
   *  so the two read as a single block instead of two stacked ones. The
   *  homepage keeps rendering this standalone (`embedded` defaults to
   *  false), so its own `id="contact"` anchor and background are untouched. */
  embedded?: boolean;
}) {
  const ar = lang === "ar";
  const m = useMotionSafe();

  // Fine-pointer devices only (Phase M5/P2) — same capability gate used for
  // the Hero parallax, checked once here rather than per mascot card.
  const [pointerCapable, setPointerCapable] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setPointerCapable(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setPointerCapable(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  const mascotParallaxActive = pointerCapable && !m.reduce;
  const primarySocials = SOCIALS.slice(0, 3);
  const secondarySocials = SOCIALS.slice(3);

  const body = (
    <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-8 lg:px-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={m.staggerParent}
        className="max-w-3xl"
      >
        <motion.p
          variants={m.staggerChild}
          className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#d8bd9c]"
        >
          {ar ? "تواصل" : "Contact"}
        </motion.p>
        <motion.h2
          variants={m.staggerChild}
          className="font-display mt-3 text-[2rem] font-bold leading-[1.3] text-[#FCFBF9] sm:text-[2.6rem] lg:text-[3.1rem]"
        >
          {t.contact.title[lang]}
        </motion.h2>
        <motion.p
          variants={m.staggerChild}
          className="mt-4 max-w-xl text-[15px] leading-[1.95] text-white/70 sm:text-[16px]"
        >
          {t.contact.sub[lang]}
        </motion.p>
      </motion.div>

      {/* Channels — direct lines first (their own featured row, name + actual
          number/address), the social platforms after as a lighter secondary
          row. Nested stagger: this block and each row both carry
          `staggerParent`, so the cards fan in card-by-card rather than as
          one block, without the two rows needing separate scroll triggers. */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={m.staggerParent}
        className="mt-10"
      >
        <motion.div variants={m.staggerParent} className="grid gap-3 sm:grid-cols-3">
          {primarySocials.map((s, i) => (
            <ContactMascotCard
              key={s.label}
              s={s}
              i={i}
              size="lg"
              reduce={m.reduce}
              parallaxActive={mascotParallaxActive}
            />
          ))}
        </motion.div>
        <motion.div
          variants={m.staggerParent}
          className="mt-3 grid grid-cols-4 gap-2.5 sm:w-fit sm:grid-cols-4"
        >
          {secondarySocials.map((s, i) => (
            <ContactMascotCard
              key={s.label}
              s={s}
              i={i + primarySocials.length}
              size="sm"
              reduce={m.reduce}
              parallaxActive={mascotParallaxActive}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );

  if (embedded) return body;

  return (
    <section
      id="contact"
      className="leather-grain relative overflow-hidden bg-[#4A3023] py-20 sm:py-24 lg:py-28"
    >
      {body}
    </section>
  );
}

/* ============= FOOTER ============= */
export function Footer({ lang }: { lang: Lang }) {
  const isAr = lang === "ar";

  const mainLinks = [
    { to: "/", label: isAr ? "الرئيسية" : "Home" },
    { to: "/about", label: t.nav.about[lang] },
    { to: "/services", label: t.nav.services[lang] },
    { to: "/#contact", label: t.nav.contact[lang] },
  ];

  const professionalLinks = [
    { to: "/experience", label: t.nav.experience[lang] },
    { to: "/skills", label: t.nav.skills[lang] },
    {
      to: "/certifications",
      label: isAr ? "الشهادات المهنية" : "Certifications",
    },
    {
      to: "/request-service",
      label: isAr ? "طلب خدمة" : "Request a Service",
    },
  ];

  const resourceLinks = [
    {
      to: "/tools",
      label: isAr ? "الأدوات المحاسبية" : "Accounting Tools",
    },
    {
      to: "/articles",
      label: isAr ? "المقالات والموارد" : "Articles & Resources",
    },
    {
      to: "/auth",
      label: isAr ? "تسجيل الدخول" : "Login",
    },
  ];

  /*
   * روابط التواصل مأخوذة من ثابت SOCIALS الموجود مسبقًا في الملف.
   * لا نستخدم صور Mascot هنا حتى تبقى أيقونات الفوتر بسيطة وأنيقة —
   * الماسكوت يبقى كما هو في قسم «تواصل معي» وحده.
   *
   * نعرض كل القنوات (هاتف / واتساب / بريد + الحسابات الخارجية) لأن
   * روابط الاتصال المباشر يجب أن تعمل من الفوتر أيضًا. الترتيب هو نفسه
   * ترتيب SOCIALS، ولم تُضَف أي روابط جديدة.
   */
  const socialLinks = SOCIALS;

  const renderLink = (link: { to: string; label: string }) => {
    const className =
      "group inline-flex items-center gap-2 text-[13px] leading-6 text-white/55 transition-colors duration-300 hover:text-[#E1C5A4]";

    if (link.to.startsWith("/#")) {
      return (
        <a href={link.to.slice(1)} className={className}>
          <span className="h-1 w-1 rounded-full bg-[#A88765]/50 transition-all duration-300 group-hover:w-3 group-hover:bg-[#D8BD9C]" />
          <span>{link.label}</span>
        </a>
      );
    }

    return (
      <RouterLink to={link.to} className={className}>
        <span className="h-1 w-1 rounded-full bg-[#A88765]/50 transition-all duration-300 group-hover:w-3 group-hover:bg-[#D8BD9C]" />
        <span>{link.label}</span>
      </RouterLink>
    );
  };

  return (
    <footer className="dark-motif relative isolate overflow-hidden border-t border-[#A88765]/20 bg-[#151412] text-white">
      {/* Warm bronze blooms. The repeating 30px diagonal grid that used to sit
          on this layer read as visible graph paper; the near-invisible
          interlaced lattice now comes from `.dark-motif` instead. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(
              circle at 12% 18%,
              rgba(168, 135, 101, 0.13),
              transparent 28%
            ),
            radial-gradient(
              circle at 88% 78%,
              rgba(168, 135, 101, 0.08),
              transparent 30%
            )
          `,
        }}
      />

      {/* Decorative bronze line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A88765]/70 to-transparent"
      />

      <div className="relative mx-auto w-full max-w-[84rem] px-4 sm:px-8 lg:px-12">
        {/* Main footer */}
        <div className="grid gap-10 py-12 sm:gap-12 sm:py-16 lg:grid-cols-[1.6fr_1fr_1fr] lg:gap-12 xl:gap-16">
          {/* Brand and introduction */}
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <div className="leather-grain flex size-11 items-center justify-center rounded-xl border border-[#A88765]/30 bg-[#A88765]/10">
                <span className="font-display text-lg font-bold text-[#D8BD9C]">
                  {isAr ? "أ" : "A"}
                </span>
              </div>

              <div>
                <div className="font-display text-xl font-bold tracking-tight text-[#FCFBF9]">
                  {isAr ? "أحمد المدني" : "Ahmed Elmadani"}
                </div>

                <div className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#A88765]">
                  {isAr ? "خدمات مالية ومحاسبية" : "Financial & Accounting Services"}
                </div>
              </div>
            </div>

            <p className="mt-6 max-w-[31rem] text-[13px] leading-[1.95] text-white/55">
              {t.footer.tagline[lang]}
            </p>

            {/* Location and VAT */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <span className="leather-grain inline-flex items-center gap-2 rounded-full border border-[#A88765]/25 bg-[#A88765]/[0.07] px-3.5 py-2 text-[11px] font-semibold text-[#D8BD9C]">
                <MapPin className="size-3.5" />
                {isAr ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}
              </span>

              <RouterLink
                to="/request-service"
                className="leather-grain group inline-flex items-center gap-2 rounded-full border border-[#A88765]/25 bg-[#A88765]/[0.07] px-3.5 py-2 text-[11px] font-semibold text-[#D8BD9C] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A88765]/60 hover:bg-[#A88765]/[0.14]"
                title={isAr ? "خدمات ضريبة القيمة المضافة" : "VAT Services"}
              >
                <img
                  src={vatLogo.url}
                  alt="VAT"
                  width={17}
                  height={17}
                  className="rounded-sm"
                  loading="lazy"
                  decoding="async"
                />

                <span>{isAr ? "خدمات ضريبة القيمة المضافة" : "VAT Services"}</span>

                <ArrowUpRight className="size-3 opacity-50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
              </RouterLink>
            </div>
          </div>

          {/* Two link columns. The nav groups that used to occupy three
              separate columns are merged into one ("التنقل"), leaving the
              second column free to carry resources plus the whole contact
              block — phone, email and the social icons, which moved down
              from the brand block above so every way to reach out lives in
              one place instead of being split across the footer. */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:contents">
            {/* Navigation — main pages and professional pages in one list */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-7 bg-[#A88765]/60" />

                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C8A984]">
                  {isAr ? "التنقل" : "Navigate"}
                </div>
              </div>

              <ul className="flex flex-col gap-2.5">
                {[...mainLinks, ...professionalLinks].map((link) => (
                  <li key={link.to}>{renderLink(link)}</li>
                ))}
              </ul>
            </div>

            {/* Resources and contact */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-7 bg-[#A88765]/60" />

                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C8A984]">
                  {isAr ? "الموارد والتواصل" : "Resources & Contact"}
                </div>
              </div>

              <ul className="flex flex-col gap-2.5">
                {resourceLinks.map((link) => (
                  <li key={link.to}>{renderLink(link)}</li>
                ))}
              </ul>

              <div className="mt-6 border-t border-white/[0.07] pt-5">
                <a
                  href="tel:+966560409811"
                  className="group flex items-center gap-3 text-[13px] text-[#D8BD9C] transition-colors duration-300 hover:text-[#FCFBF9]"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[#A88765]/20 bg-[#A88765]/8">
                    <Phone className="size-3.5" />
                  </span>

                  {/* `whitespace-nowrap` keeps the number on one line: the
                      contact column is roughly half the viewport on mobile,
                      which was enough to break "+966 56 040 9811" mid-number. */}
                  <span
                    dir="ltr"
                    className="whitespace-nowrap text-[12px] tracking-wide sm:text-[13px]"
                  >
                    +966 56 040 9811
                  </span>
                </a>

                <a
                  href="mailto:elmadnim@gmail.com"
                  className="mt-4 block break-all text-[12px] text-white/45 transition-colors duration-300 hover:text-[#D8BD9C]"
                >
                  elmadnim@gmail.com
                </a>

                {/* Social channels */}
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {socialLinks.map((social) => {
                    const Icon = social.Icon;

                    const isExternal =
                      social.href.startsWith("http://") || social.href.startsWith("https://");

                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer" : undefined}
                        aria-label={social.label}
                        title={social.label}
                        className="group relative flex size-9 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.025] text-white/50 transition-all duration-300 hover:-translate-y-1 hover:border-[#A88765]/55 hover:text-[#E1C5A4]"
                      >
                        {/* The channel's own colour, but only as a whisper on
                            hover — the resting state stays bronze/white so the
                            row reads as one calm set rather than a strip of
                            brand badges. */}
                        <span
                          aria-hidden
                          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-[0.16]"
                          style={{ backgroundColor: social.color }}
                        />
                        <Icon className="relative z-10 size-[15px] transition-transform duration-300 group-hover:scale-110" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08]">
          <div className="flex flex-col items-center justify-between gap-4 py-5 text-center sm:flex-row sm:text-start">
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-white/40 sm:justify-start">
              <span>{t.footer.rights[lang]}</span>

              <span className="hidden size-1 rounded-full bg-[#A88765]/45 sm:block" />

              <span>{t.footer.built[lang]}</span>
            </div>

            <a
              href="#home"
              className="group inline-flex items-center gap-2 text-[11px] font-semibold text-white/40 transition-colors duration-300 hover:text-[#D8BD9C]"
            >
              <span>{isAr ? "العودة إلى الأعلى" : "Back to top"}</span>

              <ArrowUpRight className="size-3.5 -rotate-45 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============= SECTION TITLE ============= */
function SectionTitle({
  eyebrow,
  title,
  sub,
  theme = "dark",
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  theme?: "dark" | "light";
}) {
  const light = theme === "light";
  const m = useMotionSafe();
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={m.staggerParent}
      className="title-bar"
    >
      <motion.div
        variants={m.staggerChild}
        className="mb-2 text-xs font-bold uppercase tracking-[0.4em] text-[#A88765]"
      >
        — {eyebrow}
      </motion.div>
      <motion.h2
        variants={m.staggerChild}
        className="font-display text-4xl font-extrabold sm:text-5xl"
        style={{ color: light ? "#1C1B19" : "var(--fg)" }}
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p
          variants={m.staggerChild}
          className="mt-3 text-base"
          style={{ color: light ? "#6B6259" : "var(--fg-soft)" }}
        >
          {sub}
        </motion.p>
      )}
    </motion.div>
  );
}

/* ============= FLOATING SOCIAL ============= */
export function FloatingSocial({ isRTL: _isRTL }: { isRTL: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div dir="ltr" className="fixed z-40" style={{ left: 18, bottom: 18 }}>
      <div className="flex flex-row items-center gap-3">
        <motion.button
          type="button"
          onClick={() => {
            playClick();
            setOpen((v) => !v);
          }}
          onMouseEnter={playHover}
          aria-label={open ? "Close social menu" : "Open social menu"}
          aria-expanded={open}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="relative flex size-14 shrink-0 items-center justify-center rounded-full border border-[#A88765]/40 bg-gradient-to-br from-[#4A3023] to-[#1C1B19] text-[#e9d9c3] shadow-2xl shadow-black/50"
        >
          <span
            className="absolute inset-0 rounded-full bg-[#A88765]/25 animate-ping opacity-60 motion-reduce:animate-none"
            aria-hidden
          />
          {open ? <X className="size-5 relative" /> : <Share2 className="size-5 relative" />}
        </motion.button>

        <AnimatePresence>
          {open && (
            <motion.div
              key="socials"
              initial={{ opacity: 0, x: -14, scale: 0.85 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -14, scale: 0.85 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="flex flex-row items-center gap-2 rounded-full border border-[#A88765]/30 bg-[#1C1B19]/90 p-2 backdrop-blur-xl shadow-2xl shadow-black/50"
            >
              {SOCIALS.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playHover}
                  onClick={playClick}
                  aria-label={s.label}
                  title={s.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, type: "spring", stiffness: 240, damping: 20 }}
                  whileHover={{ scale: 1.15, rotate: -4 }}
                  className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.02] shadow-lg"
                  style={{ color: s.color }}
                >
                  <s.Icon className="size-4" />
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
