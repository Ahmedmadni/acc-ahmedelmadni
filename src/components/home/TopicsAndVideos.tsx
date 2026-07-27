import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { FileSpreadsheet, Landmark, FileBarChart, BookOpen, ArrowUpLeft, Play } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { useMotionSafe } from "@/lib/motion";

type Topic = {
  icon: typeof FileSpreadsheet;
  ar: string;
  en: string;
  descAr: string;
  descEn: string;
  href: string;
};

const TOPICS: Topic[] = [
  {
    icon: FileSpreadsheet,
    ar: "رفع الإقرار الضريبي (VAT)",
    en: "File your VAT return",
    descAr: "إعداد وتقديم إقرار ضريبة القيمة المضافة بدقة وفق لوائح زاتكا.",
    descEn: "Prepare and file your VAT return accurately per ZATCA rules.",
    href: "/tools/vat-return",
  },
  {
    icon: Landmark,
    ar: "الإقرار الزكوي",
    en: "File your Zakat declaration",
    descAr: "احتساب الوعاء الزكوي وتقديم الإقرار السنوي بثقة.",
    descEn: "Calculate the zakat base and file the annual declaration with confidence.",
    href: "/tools/zakat-declaration",
  },
  {
    icon: FileBarChart,
    ar: "إعداد القوائم المالية",
    en: "Prepare financial statements",
    descAr: "من ميزان المراجعة إلى قوائم مالية كاملة متوافقة مع IFRS.",
    descEn: "From trial balance to a full IFRS-compliant statement set.",
    href: "/tools/financial-statements",
  },
  {
    icon: BookOpen,
    ar: "المكتبة الضريبية والزكوية",
    en: "Tax & Zakat knowledge library",
    descAr: "مقالات محدثة تشرح الأنظمة والإجراءات خطوة بخطوة.",
    descEn: "Up-to-date articles explaining the rules and procedures step by step.",
    href: "/knowledge/zakat-tax-ksa",
  },
];

type VideoItem = { id: string; ar: string; en: string };

// Curated public YouTube videos covering the topics above. Facade-loaded
// (thumbnail only, iframe injected on click) so three embeds don't cost
// homepage LCP the way three live YouTube iframes would on load.
const VIDEOS: VideoItem[] = [
  {
    id: "T2OFpgi0noE",
    ar: "طريقة رفع إقرار ضريبة القيمة المضافة",
    en: "How to file your VAT return",
  },
  {
    id: "qj3WFoixREs",
    ar: "شرح احتساب الزكاة في المملكة العربية السعودية",
    en: "How Zakat is calculated in Saudi Arabia",
  },
  {
    id: "El16bNNFaFg",
    ar: "القوائم المالية: أنواعها وطرق إعدادها باحترافية",
    en: "Financial statements: types and how to prepare them",
  },
];

function VideoBrowser({ lang }: { lang: Lang }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const current = VIDEOS[active];

  return (
    <div className="grid gap-4 sm:grid-cols-[1fr_150px] lg:grid-cols-1 xl:grid-cols-[1fr_160px]">
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-[#E3DDD5] bg-[#1C1B19]">
        {playing ? (
          <iframe
            key={current.id}
            src={`https://www.youtube-nocookie.com/embed/${current.id}?autoplay=1`}
            title={lang === "ar" ? current.ar : current.en}
            className="absolute inset-0 size-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 size-full"
            aria-label={lang === "ar" ? "تشغيل الفيديو" : "Play video"}
          >
            <img
              src={`https://i.ytimg.com/vi/${current.id}/hqdefault.jpg`}
              alt={lang === "ar" ? current.ar : current.en}
              loading="lazy"
              decoding="async"
              className="size-full object-cover"
            />
            <span className="absolute inset-0 bg-[#1C1B19]/40 transition-colors group-hover:bg-[#1C1B19]/25" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-[#c2a079] to-[#7c6045] text-[#1C1B19] shadow-[0_18px_40px_-16px_rgba(74,48,35,0.7)] transition-transform group-hover:scale-110">
                <Play className="size-7 translate-x-0.5 fill-current" />
              </span>
            </span>
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1C1B19]/85 to-transparent p-4 text-start text-sm font-semibold text-[#FCFBF9]">
              {lang === "ar" ? current.ar : current.en}
            </span>
          </button>
        )}
      </div>

      <div className="flex gap-3 overflow-x-auto sm:flex-col sm:overflow-visible lg:flex-row lg:overflow-x-auto xl:flex-col xl:overflow-visible">
        {VIDEOS.map((v, i) => (
          <button
            key={v.id}
            type="button"
            onClick={() => {
              setActive(i);
              setPlaying(false);
            }}
            className={`flex shrink-0 items-center gap-3 rounded-xl border p-2 text-start transition-all sm:shrink ${
              i === active
                ? "border-[#A88765]/70 bg-[#A88765]/10"
                : "border-[#E3DDD5] bg-white hover:border-[#A88765]/50"
            }`}
          >
            <img
              src={`https://i.ytimg.com/vi/${v.id}/default.jpg`}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-12 w-20 shrink-0 rounded-lg object-cover"
            />
            <span className="line-clamp-2 text-xs font-semibold text-[#1C1B19]">
              {lang === "ar" ? v.ar : v.en}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function TopicsAndVideos({ lang }: { lang: Lang }) {
  const ar = lang === "ar";
  const m = useMotionSafe();

  return (
    <section className="relative overflow-hidden bg-[#F5F2ED] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-8 lg:px-12">
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
            {ar ? "أبرز المواضيع" : "Featured topics"}
          </motion.p>
          <motion.h2
            variants={m.staggerChild}
            className="font-display mt-3 text-[1.9rem] font-bold leading-[1.3] text-[#1C1B19] sm:text-[2.4rem] lg:text-[2.9rem]"
          >
            {ar ? "أكثر ما يبحث عنه عملائي" : "What clients ask about most"}
          </motion.h2>
          <motion.p
            variants={m.staggerChild}
            className="mt-4 text-[15px] leading-[1.9] text-[#746E67] sm:text-[16px]"
          >
            {ar
              ? "روابط مباشرة لأهم الخدمات والأدوات، مع فيديوهات مختصرة تشرح كل موضوع."
              : "Direct links to the most-used services and tools, with short videos explaining each topic."}
          </motion.p>
        </motion.div>

        {/* Featured video + editorial topic index */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={m.reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <VideoBrowser lang={lang} />
          </motion.div>

          <motion.ol
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={m.staggerParent}
            className="border-b border-[#E3DDD5] lg:col-span-5"
          >
            {TOPICS.map((topic) => {
              const Icon = topic.icon;
              return (
                <motion.li key={topic.href} variants={m.staggerChild}>
                  <Link
                    to={topic.href}
                    className="group flex items-start gap-4 border-t border-[#E3DDD5] py-5 transition-colors hover:bg-white/60"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#E3DDD5] bg-white text-[#A88765] transition-colors duration-300 group-hover:border-[#A88765]/60 group-hover:text-[#7c6045]">
                      <Icon className="size-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-start justify-between gap-3">
                        <span className="font-display text-[15px] font-bold leading-snug text-[#1C1B19] sm:text-base">
                          {ar ? topic.ar : topic.en}
                        </span>
                        <ArrowUpLeft
                          aria-hidden
                          className="mt-0.5 size-4 shrink-0 -translate-x-1 text-[#A88765] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 ltr:rotate-90"
                        />
                      </span>
                      <span className="mt-1 block text-[13px] leading-[1.7] text-[#746E67]">
                        {ar ? topic.descAr : topic.descEn}
                      </span>
                    </span>
                  </Link>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
