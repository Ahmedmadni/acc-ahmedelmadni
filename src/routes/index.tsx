import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useSpring, useInView } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  Car,
  Download,
  Languages,
  ArrowRight,
  ArrowLeft,
  Briefcase,
  GraduationCap,
  Sparkles,
  TrendingUp,
  Calculator,
  FileSpreadsheet,
  Target,
  ClipboardCheck,
} from "lucide-react";
import profileImg from "@/assets/profile.png";
import { t, type Lang } from "@/lib/i18n";
import { playClick, playHover } from "@/lib/sound";

export const Route = createFileRoute("/")({ component: Index });

function Index() {
  const [lang, setLang] = useState<Lang>("ar");
  const [loaded, setLoaded] = useState(false);
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
    const tm = setTimeout(() => setLoaded(true), 900);
    return () => clearTimeout(tm);
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

  const toggleLang = () => {
    playClick();
    setLang((l) => (l === "ar" ? "en" : "ar"));
  };

  return (
    <div className="relative min-h-screen text-white antialiased">
      <div className="cinematic-bg" />
      <div className="cinematic-grid" />
      <div ref={cursorRef} className="cursor-glow hidden md:block" />

      {/* Scroll progress */}
      <motion.div
        style={{ scaleX, transformOrigin: isRTL ? "right" : "left" }}
        className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-gradient-to-r from-amber-200 via-[#d7aa52] to-amber-700"
      />

      {/* Loader */}
      {!loaded && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#04101f] transition-opacity duration-700">
          <div className="loader-circle" />
          <h2 className="mt-6 text-2xl font-bold gold-text tracking-wide">Ahmed Elmadani</h2>
        </div>
      )}

      <Navbar lang={lang} onToggle={toggleLang} />

      <main>
        <Hero lang={lang} />
        <Stats lang={lang} />
        <About lang={lang} />
        <Experience lang={lang} />
        <Skills lang={lang} />
        <Certs lang={lang} />
        <Contact lang={lang} />
        <Footer lang={lang} />
      </main>

      <SocialDock />
    </div>
  );
}

/* ---------- NAVBAR ---------- */
function Navbar({ lang, onToggle }: { lang: Lang; onToggle: () => void }) {
  const links = [
    { id: "home", label: t.nav.home[lang] },
    { id: "about", label: t.nav.about[lang] },
    { id: "experience", label: t.nav.experience[lang] },
    { id: "skills", label: t.nav.skills[lang] },
    { id: "contact", label: t.nav.contact[lang] },
  ];
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#04101f]/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 w-[92%] max-w-7xl items-center justify-between">
        <a href="#home" className="group flex flex-col leading-tight" onMouseEnter={playHover}>
          <span className="text-xl font-extrabold text-white sm:text-2xl">
            {lang === "ar" ? "أحمد المدني" : "Ahmed Elmadani"}
          </span>
          <span className="text-[11px] uppercase tracking-[0.3em] gold-text">
            Senior Accountant
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onMouseEnter={playHover}
                className="relative text-sm font-medium text-white/80 transition-colors hover:text-[#d7aa52]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onToggle}
            onMouseEnter={playHover}
            className="flex items-center gap-2 rounded-full gold-border px-3 py-2 text-xs font-semibold text-white/90 transition-all hover:bg-[#d7aa52]/10"
            aria-label="Toggle language"
          >
            <Languages className="size-4 text-[#d7aa52]" />
            <span>{lang === "ar" ? "EN" : "AR"}</span>
          </button>
          <a
            href="/mycv.pdf"
            download
            onMouseEnter={playHover}
            onClick={playClick}
            className="hidden items-center gap-2 rounded-full bg-gradient-to-br from-[#f3d28a] to-[#b8862e] px-4 py-2.5 text-xs font-bold text-[#04101f] shadow-lg shadow-[#d7aa52]/30 transition-transform hover:scale-105 sm:flex"
          >
            <Download className="size-4" />
            {t.nav.cv[lang]}
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

/* ---------- HERO ---------- */
function Hero({ lang }: { lang: Lang }) {
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      {/* decorative chevrons */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(215,170,82,0.15),transparent_60%)]" />
      </div>

      <div className="mx-auto grid w-[92%] max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="order-2 lg:order-1"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full gold-border bg-white/5 px-4 py-2 text-xs font-semibold text-[#f3d28a]">
            <Sparkles className="size-3.5" />
            {t.hero.badge[lang]}
          </div>

          <h1 className="mb-4 text-5xl font-black leading-[1.05] sm:text-6xl lg:text-7xl">
            <span className="block text-white">{t.hero.name[lang]}</span>
            <span className="mt-2 block gold-text">
              {lang === "ar" ? "محاسب أول" : "Senior Accountant"}
            </span>
          </h1>

          <p className="mb-3 text-lg font-medium text-[#d7aa52]/90">{t.hero.title[lang]}</p>
          <p className="mb-8 max-w-xl text-base leading-relaxed text-white/70">
            {t.hero.intro[lang]}
          </p>

          <div className="mb-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              onMouseEnter={playHover}
              onClick={playClick}
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-br from-[#f3d28a] to-[#b8862e] px-7 py-3.5 text-sm font-bold text-[#04101f] shadow-xl shadow-[#d7aa52]/30 transition-transform hover:scale-105"
            >
              {t.hero.cta1[lang]}
              <Arrow className="size-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </a>
            <a
              href="/mycv.pdf"
              download
              onMouseEnter={playHover}
              onClick={playClick}
              className="inline-flex items-center gap-2 rounded-full gold-border px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#d7aa52]/10"
            >
              <Download className="size-4 text-[#d7aa52]" />
              {t.hero.cta2[lang]}
            </a>
          </div>

          <div className="flex items-center gap-2 text-sm text-white/60">
            <MapPin className="size-4 text-[#d7aa52]" />
            {t.hero.location[lang]}
          </div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.7 }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-[#d7aa52]/40 via-transparent to-blue-500/30 blur-3xl" />
            <div className="absolute inset-0 -translate-x-4 translate-y-4 rounded-[2.5rem] border border-[#d7aa52]/40" />
            <div className="absolute inset-0 translate-x-4 -translate-y-4 rounded-[2.5rem] border border-white/10" />
            <div className="relative h-[420px] w-[340px] overflow-hidden rounded-[2.5rem] border border-[#d7aa52]/30 bg-gradient-to-br from-[#0a223f] to-[#04101f] gold-glow sm:h-[480px] sm:w-[380px]">
              <img
                src={profileImg}
                alt="Ahmed Elmadani"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04101f] via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl glass px-4 py-3">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[#d7aa52]">
                    {lang === "ar" ? "متاح للعمل" : "Available"}
                  </div>
                  <div className="text-sm font-bold text-white">
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

/* ---------- STATS ---------- */
function Stats({ lang }: { lang: Lang }) {
  const icons = [TrendingUp, ClipboardCheck, Target, Calculator];
  return (
    <section className="relative py-12">
      <div className="mx-auto grid w-[92%] max-w-7xl grid-cols-2 gap-4 sm:grid-cols-4">
        {t.stats.map((s, i) => {
          const Icon = icons[i];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-5 text-center"
            >
              <Icon className="mx-auto mb-2 size-6 text-[#d7aa52]" />
              <div className="text-3xl font-black gold-text">{s.v}</div>
              <div className="mt-1 text-xs font-medium text-white/70">{s[lang]}</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About({ lang }: { lang: Lang }) {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto w-[92%] max-w-5xl">
        <SectionTitle eyebrow={lang === "ar" ? "نبذة" : "About"} title={t.about.title[lang]} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="glass mt-10 space-y-5 rounded-3xl p-8 text-base leading-loose text-white/80 sm:p-12"
        >
          <p>{t.about.body[lang]}</p>
          <p>{t.about.body2[lang]}</p>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- EXPERIENCE / TIMELINE ---------- */
function Experience({ lang }: { lang: Lang }) {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionTitle
          eyebrow={lang === "ar" ? "المسيرة المهنية" : "Career"}
          title={t.experience.title[lang]}
          sub={t.experience.sub[lang]}
        />

        <div className="relative mt-16">
          {/* center line */}
          <div className="tl-line absolute top-0 bottom-0 hidden w-[2px] md:block md:left-1/2 md:-translate-x-1/2" />
          {/* mobile line */}
          <div className="tl-line absolute top-0 bottom-0 w-[2px] md:hidden right-3 rtl:left-3 rtl:right-auto" />

          <div className="space-y-12">
            {t.experience.items.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} lang={lang} />
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
  item: (typeof t.experience.items)[number];
  index: number;
  lang: Lang;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const left = index % 2 === 0;
  return (
    <div
      ref={ref}
      className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2"
    >
      {/* dot */}
      <div className="tl-dot absolute size-4 rounded-full bg-[#d7aa52] md:left-1/2 md:-translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 right-1 rtl:left-1 rtl:right-auto md:right-auto md:rtl:left-auto" />

      <motion.div
        initial={{ opacity: 0, x: left ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
        className={`glass group rounded-3xl p-6 sm:p-8 transition-all hover:border-[#d7aa52]/50 mr-10 md:mr-0 rtl:ml-10 rtl:mr-0 md:rtl:ml-0 ${
          left ? "md:col-start-1" : "md:col-start-2"
        }`}
      >
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#d7aa52]/15 px-3 py-1 text-xs font-bold text-[#f3d28a]">
          <Briefcase className="size-3.5" />
          {item.date[lang]}
        </div>
        <h3 className="text-xl font-extrabold text-white">{item.role[lang]}</h3>
        <p className="mt-1 text-sm font-medium text-[#d7aa52]">{item.company[lang]}</p>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/75">
          {item.points[lang].map((p, j) => (
            <li key={j} className="flex gap-2">
              <span className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-[#d7aa52]" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

/* ---------- SKILLS ---------- */
function Skills({ lang }: { lang: Lang }) {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionTitle
          eyebrow={lang === "ar" ? "المهارات" : "Skills"}
          title={t.skills.title[lang]}
          sub={t.skills.sub[lang]}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.skills.groups.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass group relative overflow-hidden rounded-3xl p-7 transition-all hover:border-[#d7aa52]/60"
            >
              <div className="absolute -right-12 -top-12 size-32 rounded-full bg-[#d7aa52]/10 blur-2xl transition-all group-hover:bg-[#d7aa52]/20" />
              <FileSpreadsheet className="mb-4 size-7 text-[#d7aa52]" />
              <h3 className="mb-4 text-lg font-extrabold text-white">{g.h[lang]}</h3>
              <ul className="space-y-2">
                {g.items.map((it, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-white"
                  >
                    <span className="size-1.5 rounded-full bg-[#d7aa52]" />
                    {it[lang]}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CERTS ---------- */
function Certs({ lang }: { lang: Lang }) {
  return (
    <section className="py-24">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionTitle
          eyebrow={lang === "ar" ? "التطوير المهني" : "Development"}
          title={t.certs.title[lang]}
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.certs.items.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass flex items-start gap-3 rounded-2xl p-5 transition-all hover:border-[#d7aa52]/50"
            >
              <GraduationCap className="size-5 shrink-0 text-[#d7aa52]" />
              <span className="text-sm font-medium text-white/85">{c[lang]}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact({ lang }: { lang: Lang }) {
  const items = [
    {
      icon: Phone,
      label: t.contact.phone[lang],
      value: "+966 560 409 811",
      href: "tel:+966560409811",
    },
    {
      icon: Mail,
      label: t.contact.email[lang],
      value: "elmadnim@gmail.com",
      href: "mailto:elmadnim@gmail.com",
    },
    {
      icon: MapPin,
      label: t.contact.location[lang],
      value: lang === "ar" ? "الرياض، السعودية" : "Riyadh, Saudi Arabia",
      href: "https://maps.google.com/?q=Riyadh",
    },
    {
      icon: Car,
      label: lang === "ar" ? "التنقل" : "Mobility",
      value: t.contact.driving[lang],
      href: "#",
    },
  ];
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionTitle
          eyebrow={lang === "ar" ? "تواصل" : "Contact"}
          title={t.contact.title[lang]}
          sub={t.contact.sub[lang]}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={i}
                href={c.href}
                onMouseEnter={playHover}
                onClick={playClick}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass group rounded-3xl p-6 text-center transition-all hover:-translate-y-1 hover:border-[#d7aa52]/60"
              >
                <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d7aa52]/30 to-transparent gold-border">
                  <Icon className="size-6 text-[#d7aa52]" />
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/50">{c.label}</div>
                <div className="mt-2 break-words text-sm font-bold text-white">{c.value}</div>
              </motion.a>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <a
            href="/mycv.pdf"
            download
            onMouseEnter={playHover}
            onClick={playClick}
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-br from-[#f3d28a] to-[#b8862e] px-9 py-4 text-sm font-bold text-[#04101f] shadow-xl shadow-[#d7aa52]/30 transition-transform hover:scale-105"
          >
            <Download className="size-5" />
            {t.nav.cv[lang]}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="border-t border-white/5 py-8 text-center text-xs text-white/40">
      {t.footer.rights[lang]}
    </footer>
  );
}

/* ---------- SECTION TITLE ---------- */
function SectionTitle({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
      className="title-bar"
    >
      <div className="mb-2 text-xs font-bold uppercase tracking-[0.4em] text-[#d7aa52]">
        — {eyebrow}
      </div>
      <h2 className="text-4xl font-black text-white sm:text-5xl">{title}</h2>
      {sub && <p className="mt-3 text-base text-white/60">{sub}</p>}
    </motion.div>
  );
}

/* ---------- SOCIAL DOCK ---------- */
function SocialDock() {
  const socials = useMemo(
    () => [
      { href: "https://wa.me/966560409811", icon: "fa-brands fa-whatsapp", color: "#25D366" },
      {
        href: "https://www.facebook.com/share/1GrcrAN8tP/",
        icon: "fa-brands fa-facebook-f",
        color: "#1877F2",
      },
      {
        href: "https://www.instagram.com/ahmed_elmadni",
        icon: "fa-brands fa-instagram",
        color: "#E4405F",
      },
      {
        href: "https://www.linkedin.com/in/احمد-المدنى-33022830b",
        icon: "fa-brands fa-linkedin-in",
        color: "#0A66C2",
      },
      {
        href: "https://www.snapchat.com/add/ahmedacc851998",
        icon: "fa-brands fa-snapchat-ghost",
        color: "#FFFC00",
      },
    ],
    [],
  );

  return (
    <div className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2">
      <div className="glass flex items-center gap-3 rounded-full px-4 py-3 shadow-2xl">
        {socials.map((s, i) => (
          <a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={playHover}
            onClick={playClick}
            className="social-btn flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
            style={{ ["--c" as never]: s.color }}
            aria-label="social"
          >
            <i className={`${s.icon} text-base`} style={{ color: s.color }} />
          </a>
        ))}
      </div>
    </div>
  );
}
