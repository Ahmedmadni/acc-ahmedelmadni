import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { FileSpreadsheet, Landmark, FileBarChart, BookOpen, ArrowLeft, ArrowRight, Play } from "lucide-react";
import type { Lang } from "@/lib/i18n";

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
    <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-[#d7aa52]/25 bg-black">
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
            <span className="absolute inset-0 bg-black/35 transition-colors group-hover:bg-black/25" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-[#f3d28a] to-[#b8862e] text-[#04101f] shadow-[0_8px_30px_-8px_rgba(215,170,82,0.7)] transition-transform group-hover:scale-110">
                <Play className="size-7 translate-x-0.5 fill-current" />
              </span>
            </span>
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-start text-sm font-bold text-white">
              {lang === "ar" ? current.ar : current.en}
            </span>
          </button>
        )}
      </div>

      <div className="flex gap-3 overflow-x-auto lg:flex-col lg:overflow-visible">
        {VIDEOS.map((v, i) => (
          <button
            key={v.id}
            type="button"
            onClick={() => {
              setActive(i);
              setPlaying(false);
            }}
            className={`flex shrink-0 items-center gap-3 rounded-xl border p-2 text-start transition-all lg:shrink ${
              i === active
                ? "border-[#d7aa52]/70 bg-[#d7aa52]/10"
                : "border-white/10 bg-white/[0.02] hover:border-[#d7aa52]/40"
            }`}
          >
            <img
              src={`https://i.ytimg.com/vi/${v.id}/default.jpg`}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-12 w-20 shrink-0 rounded-lg object-cover"
            />
            <span className="line-clamp-2 text-xs font-semibold text-white/90">
              {lang === "ar" ? v.ar : v.en}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function TopicsAndVideos({ lang }: { lang: Lang }) {
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section className="relative py-12">
      <div className="w-full px-4 sm:px-8 lg:px-16">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d7aa52]/40 bg-[#d7aa52]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#f3d28a]">
            {lang === "ar" ? "أبرز المواضيع" : "Featured topics"}
          </span>
          <h2 className="mt-3 text-2xl font-black md:text-3xl" style={{ color: "var(--fg)" }}>
            {lang === "ar" ? "أكثر ما يبحث عنه عملائي" : "What clients ask about most"}
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm" style={{ color: "var(--fg-soft)" }}>
            {lang === "ar"
              ? "روابط مباشرة لأهم الخدمات والأدوات، مع فيديوهات مختصرة تشرح كل موضوع."
              : "Direct links to the most-used services and tools, with short videos explaining each topic."}
          </p>
        </div>

        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TOPICS.map((topic, i) => {
            const Icon = topic.icon;
            return (
              <motion.div
                key={topic.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  to={topic.href}
                  className="group flex h-full flex-col rounded-3xl border border-[#d7aa52]/20 bg-gradient-to-br from-[#07182c]/80 to-[#04101f]/90 p-5 transition-all hover:-translate-y-1 hover:border-[#d7aa52]/60 hover:shadow-[0_20px_50px_-20px_rgba(215,170,82,0.45)]"
                >
                  <span className="mb-3 inline-flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f3d28a] to-[#b8862e] text-[#04101f]">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-sm font-extrabold" style={{ color: "var(--fg)" }}>
                    {lang === "ar" ? topic.ar : topic.en}
                  </h3>
                  <p className="mt-1.5 flex-1 text-xs leading-relaxed" style={{ color: "var(--fg-soft)" }}>
                    {lang === "ar" ? topic.descAr : topic.descEn}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#f3d28a]">
                    {lang === "ar" ? "ابدأ الآن" : "Get started"}
                    <Arrow className="size-3.5 transition-transform group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <VideoBrowser lang={lang} />
      </div>
    </section>
  );
}
