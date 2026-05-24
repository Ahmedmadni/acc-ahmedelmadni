import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Briefcase,
  Calculator,
  Car,
  ChevronRight,
  Download,
  FileText,
  GraduationCap,
  Languages,
  Layers,
  Lightbulb,
  Mail,
  MapPin,
  Moon,
  Phone,
  Plus,
  Quote,
  Share2,
  ShieldCheck,
  Sparkles,
  Sun,
  Target,
  TrendingUp,
  Wallet,
  Wrench,
  X,
} from "lucide-react";
import profileImg from "@/assets/profile.png";
import heroBg from "@/assets/hero-finance-bg.jpg";
import dashboardImg from "@/assets/finance-dashboard.jpg";
import deskImg from "@/assets/accountant-desk.jpg";
import beforeAfterImg from "@/assets/before-after.jpg";
import servicesBg from "@/assets/services-bg.jpg";
import logoAlostool from "@/assets/logo-alostool.png";
import logoLamara from "@/assets/logo-lamara.png";
import logoQimat from "@/assets/logo-qimat.jpg";
import { t, type Lang } from "@/lib/i18n";
import { playClick, playHover, playIntro } from "@/lib/sound";

export const Route = createFileRoute("/")({ component: Index });

type Theme = "dark" | "light";

const LOGOS: Record<string, { src: string; name: { ar: string; en: string } }> = {
  alostool: { src: logoAlostool, name: { ar: "شركة الأسطول الآلي للمقاولات", en: "Alostool Alaali Contracting" } },
  lamara:   { src: logoLamara,   name: { ar: "مؤسسة لمارا لخدمات الضيافة والإعاشة", en: "Lamara Hospitality & Catering" } },
  qimat:    { src: logoQimat,    name: { ar: "شركة مجمع قمة الطب الطبية", en: "Qimat Altib Medical Complex" } },
};

type SkillItem = (typeof t.skills.groups)[number]["items"][number];

function Index() {
  const [lang, setLang] = useState<Lang>("ar");
  const [theme, setTheme] = useState<Theme>("dark");
  const [loaded, setLoaded] = useState(false);
  const [skillModal, setSkillModal] = useState<SkillItem | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const dir = lang === "ar" ? "rtl" : "ltr";
  const isRTL = lang === "ar";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  useEffect(() => {
    const el = document.documentElement;
    el.classList.toggle("light", theme === "light");
    el.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    const tm = setTimeout(() => setLoaded(true), 1200);
    return () => clearTimeout(tm);
  }, []);

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
    const tm = setTimeout(() => { try { playIntro(); played = true; } catch { /* ignore */ } }, 1400);
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

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const toggleLang = () => { playClick(); setLang((l) => (l === "ar" ? "en" : "ar")); };
  const toggleTheme = () => { playClick(); setTheme((th) => (th === "dark" ? "light" : "dark")); };

  return (
    <div className="relative min-h-screen antialiased" style={{ color: "var(--fg)" }}>
      <div className="cinematic-bg" />
      <video
        className="bg-video"
        src="/bg-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="bg-video-overlay" />
      <div className="aurora" />
      <div className="cinematic-grid" />
      <div ref={cursorRef} className="cursor-glow hidden md:block" />

      <motion.div
        style={{ scaleX, transformOrigin: isRTL ? "right" : "left" }}
        className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-gradient-to-r from-amber-200 via-[#d7aa52] to-amber-700"
      />

      <AnimatePresence>
        {!loaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#04101f]"
          >
            <div className="loader-circle" />
            <h2 className="mt-6 text-2xl font-bold gold-text tracking-wide">Ahmed Elmadani</h2>
            <p className="mt-1 text-[11px] uppercase tracking-[0.4em] text-white/40">Senior Accountant</p>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar lang={lang} theme={theme} onToggle={toggleLang} onTheme={toggleTheme} />

      <main>
        <Hero lang={lang} />
        <Stats lang={lang} />
        <About lang={lang} />
        <Services lang={lang} />
        <Experience lang={lang} />
        <Skills lang={lang} onOpen={setSkillModal} />
        <BeforeAfter lang={lang} />
        <Testimonials lang={lang} />
        <Certs lang={lang} />
        <Contact lang={lang} />
      </main>

      <Footer lang={lang} />

      <FloatingSocial isRTL={isRTL} />

      <AnimatePresence>
        {skillModal && <SkillModal item={skillModal} lang={lang} onClose={() => setSkillModal(null)} />}
      </AnimatePresence>
    </div>
  );
}

/* ============= NAVBAR ============= */
function Navbar({ lang, theme, onToggle, onTheme }: { lang: Lang; theme: Theme; onToggle: () => void; onTheme: () => void }) {
  const links = [
    { id: "home", label: t.nav.home[lang] },
    { id: "about", label: t.nav.about[lang] },
    { id: "services", label: t.nav.services[lang] },
    { id: "experience", label: t.nav.experience[lang] },
    { id: "skills", label: t.nav.skills[lang] },
    { id: "contact", label: t.nav.contact[lang] },
  ];
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--line)] backdrop-blur-xl"
      style={{ background: "color-mix(in oklab, var(--bg-surface) 70%, transparent)" }}
    >
      <div className="mx-auto flex h-20 w-[92%] max-w-7xl items-center justify-between">
        <a href="#home" className="group flex flex-col leading-tight" onMouseEnter={playHover}>
          <span className="text-xl font-extrabold sm:text-2xl" style={{ color: "var(--fg)" }}>
            {lang === "ar" ? "أحمد المدني" : "Ahmed Elmadani"}
          </span>
          <span className="text-[11px] uppercase tracking-[0.3em] gold-text">Senior Accountant</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} onMouseEnter={playHover}
                className="relative text-sm font-medium transition-colors hover:text-[#d7aa52]"
                style={{ color: "var(--fg-soft)" }}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <button onClick={onTheme} onMouseEnter={playHover}
            className="flex size-9 items-center justify-center rounded-full gold-border transition-all hover:bg-[#d7aa52]/10"
            aria-label="Toggle theme">
            {theme === "dark" ? <Sun className="size-4 text-[#d7aa52]" /> : <Moon className="size-4 text-[#d7aa52]" />}
          </button>
          <button onClick={onToggle} onMouseEnter={playHover}
            className="flex items-center gap-2 rounded-full gold-border px-3 py-2 text-xs font-semibold transition-all hover:bg-[#d7aa52]/10"
            style={{ color: "var(--fg)" }} aria-label="Toggle language">
            <Languages className="size-4 text-[#d7aa52]" />
            <span>{lang === "ar" ? "EN" : "AR"}</span>
          </button>
          <a href="/mycv.pdf" download onMouseEnter={playHover} onClick={playClick}
            className="hidden items-center gap-2 rounded-full bg-gradient-to-br from-[#f3d28a] to-[#b8862e] px-4 py-2.5 text-xs font-bold text-[#04101f] shadow-lg shadow-[#d7aa52]/30 transition-transform hover:scale-105 sm:flex">
            <Download className="size-4" />
            {t.nav.cv[lang]}
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

/* ============= TYPEWRITER ============= */
function Typewriter({ words }: { words: string[] }) {
  const [idx, setIdx] = useState(0);
  const [sub, setSub] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[idx];
    const speed = del ? 40 : 80;
    const tm = setTimeout(() => {
      if (!del) {
        const next = word.slice(0, sub.length + 1);
        setSub(next);
        if (next === word) setTimeout(() => setDel(true), 1300);
      } else {
        const next = word.slice(0, sub.length - 1);
        setSub(next);
        if (next === "") { setDel(false); setIdx((i) => (i + 1) % words.length); }
      }
    }, speed);
    return () => clearTimeout(tm);
  }, [sub, del, idx, words]);
  return <span className="caret gold-text font-extrabold">{sub}</span>;
}

/* ============= HERO ============= */
function Hero({ lang }: { lang: Lang }) {
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 600], [0, 120]);
  const yImg = useTransform(scrollY, [0, 600], [0, -60]);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      {/* Animated parallax background */}
      <motion.div style={{ y: yBg }} className="pointer-events-none absolute inset-0 -z-10">
        <img src={heroBg} alt="" aria-hidden className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-surface)]/40 via-[var(--bg-surface)]/70 to-[var(--bg-surface)]" />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute top-1/2 left-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(215,170,82,0.18),transparent_60%)]" />
      </div>

      <div className="mx-auto grid w-[92%] max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8 }}
          className="order-2 lg:order-1">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full gold-border bg-white/5 px-4 py-2 text-xs font-semibold text-[#f3d28a]">
            <Sparkles className="size-3.5" />
            {t.hero.badge[lang]}
          </div>

          <h1 className="mb-4 text-5xl font-black leading-[1.05] sm:text-6xl lg:text-7xl">
            <span className="block" style={{ color: "var(--fg)" }}>{t.hero.name[lang]}</span>
            <span className="mt-2 block gold-text">{lang === "ar" ? "محاسب أول" : "Senior Accountant"}</span>
          </h1>

          <div className="mb-3 min-h-[28px] text-lg font-medium">
            <Typewriter words={t.hero.typewriter[lang]} />
          </div>
          <p className="mb-8 max-w-xl text-base leading-relaxed" style={{ color: "var(--fg-soft)" }}>
            {t.hero.intro[lang]}
          </p>

          <div className="mb-10 flex flex-wrap items-center gap-4">
            <a href="#contact" onMouseEnter={playHover} onClick={playClick}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-br from-[#f3d28a] to-[#b8862e] px-7 py-3.5 text-sm font-bold text-[#04101f] shadow-xl shadow-[#d7aa52]/40 transition-transform hover:scale-105">
              <span className="absolute inset-0 shine opacity-60" />
              <span className="relative">{t.hero.cta1[lang]}</span>
              <Arrow className="relative size-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </a>
            <a href="/mycv.pdf" download onMouseEnter={playHover} onClick={playClick}
              className="inline-flex items-center gap-2 rounded-full gold-border px-7 py-3.5 text-sm font-bold transition-all hover:bg-[#d7aa52]/10"
              style={{ color: "var(--fg)" }}>
              <Download className="size-4 text-[#d7aa52]" />
              {t.hero.cta2[lang]}
            </a>
          </div>

          <div className="flex items-center gap-2 text-sm" style={{ color: "var(--fg-soft)" }}>
            <MapPin className="size-4 text-[#d7aa52]" />
            {t.hero.location[lang]}
          </div>
        </motion.div>

        <motion.div style={{ y: yImg }} initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.9 }} className="order-1 flex justify-center lg:order-2">
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-[#d7aa52]/40 via-transparent to-blue-500/30 blur-3xl" />
            <div className="absolute inset-0 -translate-x-4 translate-y-4 rounded-[2.5rem] border border-[#d7aa52]/40" />
            <div className="absolute inset-0 translate-x-4 -translate-y-4 rounded-[2.5rem] border border-white/10" />
            <div className="relative h-[440px] w-[340px] overflow-hidden rounded-[2.5rem] border border-[#d7aa52]/30 bg-gradient-to-br from-[#0a223f] to-[#04101f] gold-glow sm:h-[500px] sm:w-[400px]">
              <img src={profileImg} alt="Ahmed Elmadani"
                className="absolute inset-0 h-full w-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04101f] via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl glass px-4 py-3">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[#d7aa52]">
                    {lang === "ar" ? "متاح للعمل" : "Available"}
                  </div>
                  <div className="text-sm font-bold" style={{ color: "var(--fg)" }}>
                    {lang === "ar" ? "الرياض، السعودية" : "Riyadh, KSA"}
                  </div>
                </div>
                <span className="relative flex size-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-3 rounded-full bg-emerald-500" />
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============= COUNTER ============= */
function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const numericMatch = value.match(/(\d+)/);
  const target = numericMatch ? parseInt(numericMatch[1], 10) : 0;
  const suffix = numericMatch ? value.replace(numericMatch[1], "") : value;
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView || target === 0) return;
    const dur = 1400;
    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);
  return <span ref={ref}>{target ? n : ""}{suffix}</span>;
}

/* ============= STATS ============= */
function Stats({ lang }: { lang: Lang }) {
  const icons = [TrendingUp, Target, Calculator, FileText];
  return (
    <section className="relative py-12">
      <div className="mx-auto grid w-[92%] max-w-6xl grid-cols-2 gap-4 sm:grid-cols-4">
        {t.stats.map((s, i) => {
          const Icon = icons[i];
          return (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass tilt-card rounded-2xl p-6 text-center">
              <Icon className="mx-auto mb-2 size-6 text-[#d7aa52]" />
              <div className="text-4xl font-black gold-text"><Counter value={s.v} /></div>
              <div className="mt-1 text-sm font-medium" style={{ color: "var(--fg-soft)" }}>{s[lang]}</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* ============= ABOUT ============= */
function About({ lang }: { lang: Lang }) {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionTitle eyebrow={lang === "ar" ? "نبذة" : "About"} title={t.about.title[lang]} />
        <div className="mt-10 grid items-center gap-8 lg:grid-cols-5">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}
            className="glass space-y-5 rounded-3xl p-8 text-base leading-loose sm:p-10 lg:col-span-3"
            style={{ color: "var(--fg-soft)" }}>
            <p>{t.about.body[lang]}</p>
            <p>{t.about.body2[lang]}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.9 }}
            className="relative lg:col-span-2">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#d7aa52]/30 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl gold-border gold-glow">
              <img src={deskImg} alt={lang === "ar" ? "مكتب محاسب" : "Accountant desk"}
                loading="lazy" width={1280} height={720} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04101f] via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.9 }}
          className="relative mt-12 overflow-hidden rounded-3xl gold-border">
          <img src={dashboardImg} alt={lang === "ar" ? "لوحة تحليل مالي" : "Financial dashboard"}
            loading="lazy" width={1280} height={800} className="h-[260px] w-full object-cover sm:h-[360px]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#04101f] via-[#04101f]/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="w-full px-6 sm:px-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#d7aa52]/15 px-3 py-1 text-xs font-bold text-[#f3d28a]">
                <BarChart3 className="size-3.5" />
                {lang === "ar" ? "تحليل مالي" : "Financial Analytics"}
              </div>
              <h3 className="mt-3 max-w-xl text-2xl font-extrabold text-white sm:text-3xl">
                {lang === "ar" ? "أحوّل الأرقام إلى قرارات تنفيذية واضحة." : "Turning numbers into clear executive decisions."}
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============= SERVICES ============= */
function Services({ lang }: { lang: Lang }) {
  const icons = [FileText, Calculator, ShieldCheck, Wallet, Lightbulb, BarChart3];
  return (
    <section id="services" className="relative py-24">
      <div aria-hidden className="absolute inset-0 -z-10 opacity-20">
        <img src={servicesBg} alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-surface)] via-transparent to-[var(--bg-surface)]" />
      </div>
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionTitle eyebrow={lang === "ar" ? "الخدمات" : "Services"}
          title={t.services.title[lang]} sub={t.services.sub[lang]} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: i * 0.08 }}
                onMouseEnter={playHover}
                className="glass tilt-card group relative overflow-hidden rounded-3xl p-7">
                <div className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-[#d7aa52]/15 blur-2xl transition-all group-hover:scale-150" />
                <div className="relative">
                  <div className="mb-4 inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f3d28a] to-[#b8862e] text-[#04101f] shadow-lg">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-lg font-extrabold" style={{ color: "var(--fg)" }}>{s[lang]}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--fg-soft)" }}>{s.d[lang]}</p>
                  <div className="mt-5 flex items-center gap-2 text-xs font-bold text-[#d7aa52] opacity-0 transition-opacity group-hover:opacity-100">
                    {lang === "ar" ? "اعرف أكثر" : "Learn more"}
                    <ChevronRight className="size-3 rtl:rotate-180" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============= EXPERIENCE ============= */
function Experience({ lang }: { lang: Lang }) {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionTitle eyebrow={lang === "ar" ? "المسيرة المهنية" : "Career"}
          title={t.experience.title[lang]} sub={t.experience.sub[lang]} />
        <div className="relative mt-16">
          <div className="tl-line absolute top-0 bottom-0 hidden w-[2px] md:block md:left-1/2 md:-translate-x-1/2" />
          <div className="tl-line absolute top-0 bottom-0 w-[2px] md:hidden right-3 rtl:left-3 rtl:right-auto" />
          <div className="space-y-16">
            {t.experience.items.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} lang={lang} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index, lang }: {
  item: (typeof t.experience.items)[number]; index: number; lang: Lang;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const left = index % 2 === 0;
  const logo = LOGOS[item.logo];
  return (
    <div ref={ref} className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2">
      <div className="tl-dot absolute size-4 rounded-full bg-[#d7aa52] md:left-1/2 md:-translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 right-1 rtl:left-1 rtl:right-auto md:right-auto md:rtl:left-auto" />
      <motion.div initial={{ opacity: 0, x: left ? -50 : 50 }} animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
        className={`glass group rounded-3xl p-6 sm:p-8 transition-all hover:border-[#d7aa52]/50 mr-10 md:mr-0 rtl:ml-10 rtl:mr-0 md:rtl:ml-0 ${left ? "md:col-start-1" : "md:col-start-2"}`}>
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#d7aa52]/15 px-3 py-1 text-xs font-bold text-[#f3d28a]">
          <Briefcase className="size-3.5" />
          {item.date[lang]}
        </div>
        <h3 className="text-xl font-extrabold" style={{ color: "var(--fg)" }}>{item.role[lang]}</h3>
        <p className="mt-1 text-sm font-medium text-[#d7aa52]">{item.company[lang]}</p>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed" style={{ color: "var(--fg-soft)" }}>
          {item.points[lang].map((p, j) => (
            <li key={j} className="flex gap-2">
              <span className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-[#d7aa52]" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.7, rotate: left ? 10 : -10 }}
        animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.2, type: "spring" }}
        className={`hidden md:flex items-center justify-center ${left ? "md:col-start-2" : "md:col-start-1 md:row-start-1"}`}>
        <LogoBadge logo={logo} />
      </motion.div>
      <div className="md:hidden mr-10 rtl:ml-10 rtl:mr-0">
        <LogoBadge logo={logo} compact />
      </div>
    </div>
  );
}

function LogoBadge({ logo, compact = false }: {
  logo: { src: string; name: { ar: string; en: string } }; compact?: boolean;
}) {
  return (
    <motion.div whileHover={{ scale: 1.05, rotate: 1 }} transition={{ type: "spring", stiffness: 200 }}
      className="group relative">
      <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#d7aa52]/40 via-transparent to-blue-500/20 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity" />
      <div className={`relative flex flex-col items-center justify-center gap-3 rounded-3xl gold-border bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl shadow-2xl ${compact ? "p-4" : "p-6"}`}>
        <div className={`relative flex items-center justify-center rounded-2xl bg-white p-4 shadow-inner ${compact ? "size-24" : "size-36"}`}>
          <motion.img src={logo.src} alt={logo.name.ar}
            className="floaty max-h-full max-w-full object-contain drop-shadow-[0_4px_12px_rgba(215,170,82,0.35)]" />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-[#d7aa52]/30" />
        </div>
        <div className="text-center text-[11px] font-bold uppercase tracking-[0.2em] gold-text">{logo.name.ar}</div>
      </div>
    </motion.div>
  );
}

/* ============= SKILLS (interactive) ============= */
function Skills({ lang, onOpen }: { lang: Lang; onOpen: (s: SkillItem) => void }) {
  const [active, setActive] = useState(0);
  const groupIcons = [BarChart3, Wallet, Wrench];

  return (
    <section id="skills" className="relative py-24">
      <div aria-hidden className="absolute inset-x-0 top-10 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-[#d7aa52]/60 to-transparent" />
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionTitle eyebrow={lang === "ar" ? "المهارات" : "Skills"}
          title={t.skills.title[lang]} sub={t.skills.sub[lang]} />

        <div className="mt-12 grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* Tabs */}
          <div className="flex flex-row gap-3 overflow-x-auto lg:flex-col">
            {t.skills.groups.map((g, i) => {
              const Icon = groupIcons[i];
              const isActive = i === active;
              return (
                <button key={i} onClick={() => { setActive(i); playClick(); }} onMouseEnter={playHover}
                  className={`group relative flex w-full shrink-0 items-center gap-3 rounded-2xl border px-4 py-4 text-start transition-all ${
                    isActive ? "border-[#d7aa52] bg-gradient-to-br from-[#d7aa52]/15 to-transparent shadow-[0_10px_40px_-10px_rgba(215,170,82,0.5)]"
                             : "border-white/10 bg-white/[0.02] hover:border-[#d7aa52]/40"}`}>
                  <span className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${
                    isActive ? "bg-gradient-to-br from-[#f3d28a] to-[#b8862e] text-[#04101f]" : "bg-white/5 text-[#d7aa52]"}`}>
                    <Icon className="size-5" />
                  </span>
                  <div className="flex-1">
                    <div className="text-[10px] uppercase tracking-[0.25em]" style={{ color: "var(--fg-soft)" }}>
                      {String(i + 1).padStart(2, "0")} / {t.skills.groups.length.toString().padStart(2, "0")}
                    </div>
                    <div className={`text-sm font-extrabold ${isActive ? "gold-text" : ""}`} style={!isActive ? { color: "var(--fg)" } : undefined}>
                      {g.h[lang]}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Panel */}
          <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl border border-[#d7aa52]/25 bg-gradient-to-br from-[#07182c] to-[#04101f] p-6 sm:p-8">
            <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-[#d7aa52]/15 blur-3xl" />
            <div className="pointer-events-none absolute -left-16 -bottom-16 size-60 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative">
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.4em] text-[#d7aa52]">
                    {lang === "ar" ? "المجموعة" : "Group"}
                  </div>
                  <h3 className="mt-1 text-3xl font-black text-white sm:text-4xl">{t.skills.groups[active].h[lang]}</h3>
                </div>
                <div className="font-mono text-5xl font-black text-[#d7aa52]/30 sm:text-6xl">0{active + 1}</div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {t.skills.groups[active].items.map((it, j) => (
                  <motion.button key={j} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, delay: j * 0.05 }}
                    onMouseEnter={playHover}
                    onClick={() => { playClick(); onOpen(it); }}
                    className="group relative overflow-hidden rounded-2xl border border-[#d7aa52]/25 bg-white/[0.03] p-4 text-start transition-all hover:-translate-y-0.5 hover:border-[#d7aa52] hover:bg-[#d7aa52]/10">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-bold text-white/90">{it[lang]}</span>
                      <span className="font-mono text-xs text-[#d7aa52]">{it.level}%</span>
                    </div>
                    <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${it.level}%` }}
                        viewport={{ once: true }} transition={{ duration: 1.1, delay: 0.1 + j * 0.05 }}
                        className="h-full rounded-full bg-gradient-to-r from-[#f3d28a] to-[#b8862e]" />
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] text-[#d7aa52]/70 opacity-0 transition-opacity group-hover:opacity-100">
                      <Plus className="size-3" />
                      {lang === "ar" ? "اضغط للتفاصيل" : "Tap for details"}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ============= SKILL MODAL ============= */
function SkillModal({ item, lang, onClose }: { item: SkillItem; lang: Lang; onClose: () => void }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#020912]/80 p-4 backdrop-blur-md"
      onClick={onClose}>
      <motion.div initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-[#d7aa52]/40 bg-gradient-to-br from-[#07182c] to-[#04101f] p-7 shadow-2xl">
        <button onClick={onClose}
          className="absolute end-4 top-4 flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:bg-white/10 hover:text-white">
          <X className="size-4" />
        </button>

        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#d7aa52]/15 px-3 py-1 text-xs font-bold text-[#f3d28a]">
          <Layers className="size-3.5" />
          {lang === "ar" ? "مهارة" : "Skill"}
        </div>
        <h3 className="text-2xl font-black text-white">{item[lang]}</h3>

        <div className="mt-3 flex items-center gap-3">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full bg-gradient-to-r from-[#f3d28a] to-[#b8862e]" style={{ width: `${item.level}%` }} />
          </div>
          <span className="font-mono text-sm font-bold text-[#d7aa52]">{item.level}%</span>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-white/80">{item.desc[lang]}</p>

        <div className="mt-5">
          <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#d7aa52]">
            {lang === "ar" ? "الأدوات" : "Tools"}
          </div>
          <div className="flex flex-wrap gap-2">
            {item.tools.map((tool, i) => (
              <span key={i} className="rounded-full border border-[#d7aa52]/30 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-white/85">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {item.kpis[lang].length > 0 && (
          <div className="mt-5">
            <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#d7aa52]">
              {lang === "ar" ? "مؤشرات الأداء" : "KPIs"}
            </div>
            <ul className="space-y-1.5">
              {item.kpis[lang].map((k, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-white/85">
                  <span className="size-1.5 rounded-full bg-[#d7aa52]" />
                  {k}
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ============= BEFORE / AFTER ============= */
function BeforeAfter({ lang }: { lang: Lang }) {
  const [pos, setPos] = useState(50);
  const wrapRef = useRef<HTMLDivElement>(null);
  const drag = useRef(false);

  const move = (clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(4, Math.min(96, p)));
  };

  useEffect(() => {
    const up = () => (drag.current = false);
    const mv = (e: MouseEvent) => { if (drag.current) move(e.clientX); };
    const tmv = (e: TouchEvent) => { if (drag.current && e.touches[0]) move(e.touches[0].clientX); };
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    window.addEventListener("mousemove", mv);
    window.addEventListener("touchmove", tmv);
    return () => {
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
      window.removeEventListener("mousemove", mv);
      window.removeEventListener("touchmove", tmv);
    };
  }, []);

  return (
    <section className="py-24">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionTitle eyebrow={lang === "ar" ? "نتائج" : "Outcomes"}
          title={t.beforeAfter.title[lang]} sub={t.beforeAfter.sub[lang]} />

        <div ref={wrapRef}
          className="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-3xl border border-[#d7aa52]/30 select-none gold-glow">
          <img src={beforeAfterImg} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
            <img src={beforeAfterImg} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#04101f]/40 to-transparent" />
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 rounded-full bg-black/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-white/80 backdrop-blur">
            {t.beforeAfter.before[lang]}
          </div>
          <div className="absolute top-4 right-4 rounded-full bg-[#d7aa52]/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#04101f] backdrop-blur">
            {t.beforeAfter.after[lang]}
          </div>

          {/* Divider */}
          <div className="absolute top-0 bottom-0 w-[2px] bg-[#d7aa52] shadow-[0_0_20px_rgba(215,170,82,0.7)]"
            style={{ left: `${pos}%` }}>
            <button
              onMouseDown={() => (drag.current = true)}
              onTouchStart={() => (drag.current = true)}
              aria-label="Drag"
              className="absolute top-1/2 left-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-gradient-to-br from-[#f3d28a] to-[#b8862e] text-[#04101f] shadow-2xl">
              <ArrowLeft className="size-3" />
              <ArrowRight className="size-3" />
            </button>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-1.5 text-[11px] font-semibold text-white/80 backdrop-blur">
            {t.beforeAfter.drag[lang]}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============= TESTIMONIALS ============= */
function Testimonials({ lang }: { lang: Lang }) {
  return (
    <section className="py-24">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionTitle eyebrow={lang === "ar" ? "آراء" : "Testimonials"}
          title={t.testimonials.title[lang]} sub={t.testimonials.sub[lang]} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.testimonials.items.map((it, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass tilt-card relative overflow-hidden rounded-3xl p-7">
              <Quote className="absolute top-4 end-4 size-10 text-[#d7aa52]/15" />
              <p className="text-sm leading-relaxed italic" style={{ color: "var(--fg-soft)" }}>
                “{it.quote[lang]}”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-[#f3d28a] to-[#b8862e] text-base font-black text-[#04101f]">
                  {it.name[lang].split(" ")[0].charAt(it.name[lang].startsWith(".") ? 1 : 0) || it.name[lang].charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-extrabold" style={{ color: "var(--fg)" }}>{it.name[lang]}</div>
                  <div className="text-xs text-[#d7aa52]">{it.role[lang]}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============= CERTS ============= */
function Certs({ lang }: { lang: Lang }) {
  return (
    <section className="py-24">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionTitle eyebrow={lang === "ar" ? "التطوير المهني" : "Development"} title={t.certs.title[lang]} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.certs.items.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass tilt-card flex items-start gap-3 rounded-2xl p-5 transition-all hover:border-[#d7aa52]/50">
              <GraduationCap className="size-5 shrink-0 text-[#d7aa52]" />
              <span className="text-sm font-medium" style={{ color: "var(--fg)" }}>{c[lang]}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============= CONTACT ============= */
function Contact({ lang }: { lang: Lang }) {
  const items = [
    { icon: Phone, label: t.contact.phone[lang], value: "+966 560 409 811", href: "tel:+966560409811" },
    { icon: Mail, label: t.contact.email[lang], value: "elmadnim@gmail.com", href: "mailto:elmadnim@gmail.com" },
    { icon: MapPin, label: t.contact.location[lang], value: lang === "ar" ? "الرياض، السعودية" : "Riyadh, Saudi Arabia", href: "https://maps.google.com/?q=Riyadh" },
    { icon: Car, label: lang === "ar" ? "التنقل" : "Mobility", value: t.contact.driving[lang], href: "#" },
  ];
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionTitle eyebrow={lang === "ar" ? "تواصل" : "Contact"} title={t.contact.title[lang]} sub={t.contact.sub[lang]} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.a key={i} href={c.href} onMouseEnter={playHover} onClick={playClick}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass tilt-card group rounded-3xl p-6 text-center transition-all hover:-translate-y-1 hover:border-[#d7aa52]/60">
                <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d7aa52]/30 to-transparent gold-border">
                  <Icon className="size-6 text-[#d7aa52]" />
                </div>
                <div className="text-xs uppercase tracking-[0.2em]" style={{ color: "var(--fg-soft)" }}>{c.label}</div>
                <div className="mt-2 break-words text-sm font-bold" style={{ color: "var(--fg)" }}>{c.value}</div>
              </motion.a>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <a href="/mycv.pdf" download onMouseEnter={playHover} onClick={playClick}
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-br from-[#f3d28a] to-[#b8862e] px-9 py-4 text-sm font-bold text-[#04101f] shadow-xl shadow-[#d7aa52]/30 transition-transform hover:scale-105">
            <Download className="size-5" />
            {t.nav.cv[lang]}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============= FOOTER ============= */
function Footer({ lang }: { lang: Lang }) {
  const links = [
    { id: "about", label: t.nav.about[lang] },
    { id: "services", label: t.nav.services[lang] },
    { id: "experience", label: t.nav.experience[lang] },
    { id: "skills", label: t.nav.skills[lang] },
    { id: "contact", label: t.nav.contact[lang] },
  ];
  return (
    <footer className="relative mt-12 border-t border-[var(--line)] pt-16 pb-10">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d7aa52] to-transparent" />
      <div aria-hidden className="pointer-events-none absolute -top-32 left-1/2 size-[400px] -translate-x-1/2 rounded-full bg-[#d7aa52]/10 blur-3xl" />

      <div className="mx-auto grid w-[92%] max-w-6xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="text-2xl font-black gold-text">{lang === "ar" ? "أحمد المدني" : "Ahmed Elmadani"}</div>
          <p className="mt-3 max-w-md text-sm leading-relaxed" style={{ color: "var(--fg-soft)" }}>
            {t.footer.tagline[lang]}
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full gold-border px-3 py-1.5 text-xs font-semibold text-[#d7aa52]">
            <MapPin className="size-3.5" />
            {lang === "ar" ? "الرياض، السعودية" : "Riyadh, Saudi Arabia"}
          </div>
        </div>

        <div>
          <div className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#d7aa52]">{t.footer.quick[lang]}</div>
          <ul className="space-y-2 text-sm" style={{ color: "var(--fg-soft)" }}>
            {links.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="transition-colors hover:text-[#d7aa52]">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#d7aa52]">{t.footer.contactCol[lang]}</div>
          <ul className="space-y-2 text-sm" style={{ color: "var(--fg-soft)" }}>
            <li><a href="tel:+966560409811" className="hover:text-[#d7aa52]">+966 560 409 811</a></li>
            <li><a href="mailto:elmadnim@gmail.com" className="hover:text-[#d7aa52]">elmadnim@gmail.com</a></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex w-[92%] max-w-6xl flex-col items-center justify-between gap-3 border-t border-[var(--line)] pt-6 text-xs sm:flex-row" style={{ color: "var(--fg-soft)" }}>
        <span>{t.footer.rights[lang]}</span>
        <span className="inline-flex items-center gap-2"><Sparkles className="size-3 text-[#d7aa52]" />{t.footer.built[lang]}</span>
      </div>
    </footer>
  );
}

/* ============= SECTION TITLE ============= */
function SectionTitle({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7 }} className="title-bar">
      <div className="mb-2 text-xs font-bold uppercase tracking-[0.4em] text-[#d7aa52]">— {eyebrow}</div>
      <h2 className="text-4xl font-black sm:text-5xl" style={{ color: "var(--fg)" }}>{title}</h2>
      {sub && <p className="mt-3 text-base" style={{ color: "var(--fg-soft)" }}>{sub}</p>}
    </motion.div>
  );
}

/* ============= FIXED SOCIAL RAIL (always visible, physical left side) ============= */
function FloatingSocial({ isRTL: _isRTL }: { isRTL: boolean }) {
  const [open, setOpen] = useState(false);
  const socials = useMemo(
    () => [
      { href: "https://wa.me/966560409811", icon: "fa-brands fa-whatsapp", color: "#25D366", label: "WhatsApp" },
      { href: "https://www.linkedin.com/in/احمد-المدنى-33022830b", icon: "fa-brands fa-linkedin-in", color: "#0A66C2", label: "LinkedIn" },
      { href: "https://www.facebook.com/share/1GrcrAN8tP/", icon: "fa-brands fa-facebook-f", color: "#1877F2", label: "Facebook" },
      { href: "https://www.instagram.com/ahmed_elmadni", icon: "fa-brands fa-instagram", color: "#E4405F", label: "Instagram" },
      { href: "https://www.snapchat.com/add/ahmedacc851998", icon: "fa-brands fa-snapchat-ghost", color: "#FFFC00", label: "Snapchat" },
    ],
    [],
  );

  return (
    <div dir="ltr" className="fixed z-40" style={{ left: 16, bottom: 16 }}>
      <div className="flex flex-col items-center gap-2">
        <AnimatePresence>
          {open && (
            <motion.div
              key="socials"
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="flex flex-col items-center gap-2 rounded-full border border-white/10 bg-[#04101f]/70 p-2 backdrop-blur-md shadow-2xl shadow-black/40"
            >
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playHover}
                  onClick={playClick}
                  aria-label={s.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, type: "spring", stiffness: 240, damping: 20 }}
                  whileHover={{ scale: 1.15 }}
                  className="social-rail-btn flex size-11 items-center justify-center rounded-full border border-white/15 bg-[#07182c]/80 shadow-lg"
                  style={{ color: s.color }}
                >
                  <i className={`${s.icon} text-base`} />
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={() => { playClick(); setOpen((v) => !v); }}
          onMouseEnter={playHover}
          aria-label={open ? "إغلاق قائمة التواصل" : "فتح قائمة التواصل"}
          aria-expanded={open}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="relative flex size-14 items-center justify-center rounded-full border border-[#d7aa52]/40 bg-gradient-to-br from-[#d7aa52] to-[#b8862e] text-[#04101f] shadow-2xl shadow-black/50"
        >
          <span className="absolute inset-0 rounded-full bg-[#d7aa52]/40 animate-ping" aria-hidden />
          {open ? <X className="size-6 relative" /> : <Share2 className="size-6 relative" />}
        </motion.button>
      </div>
    </div>
  );
}
