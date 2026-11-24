import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ChartNoAxesCombined, CodeXml, PanelsTopLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMotionSafe } from "@/lib/motion";
import type { Lang } from "@/lib/i18n";
import dashboardImage from "@/assets/finance-dashboard.webp";

const expertise = [
  {
    icon: ChartNoAxesCombined,
    ar: "تقارير دقيقة، رؤية أوضح",
    en: "Accurate reports. Clearer insight.",
    bodyAr:
      "أجمع بين التحليل المحاسبي والعرض البصري لإنتاج تقارير ومخرجات دقيقة، سهلة الفهم، تساعد على اتخاذ القرار.",
    bodyEn:
      "I combine accounting analysis with visual presentation to produce accurate, understandable reports and outputs that support decision-making.",
  },
  {
    icon: CodeXml,
    ar: "الفايب كودينج بعقلية محاسبية",
    en: "Vibe coding, with an accountant’s mindset",
    bodyAr:
      "أوظّف البرمجة بمساعدة الذكاء الاصطناعي لتحويل الاحتياجات المحاسبية إلى أدوات عملية، مع مراجعة المنطق والحسابات والمخرجات.",
    bodyEn:
      "I use AI-assisted development to turn accounting needs into practical tools, reviewing the logic, calculations and outputs along the way.",
  },
  {
    icon: PanelsTopLeft,
    ar: "تصميم مواقع وتطبيقات",
    en: "Website & application design",
    bodyAr:
      "أصمّم مواقع وتطبيقات تجمع بين الواجهة الواضحة وتجربة الاستخدام السلسة، لتحويل الأفكار إلى حلول رقمية تخدم العمل.",
    bodyEn:
      "I design websites and applications with clear interfaces and smooth user experiences, turning ideas into digital solutions that serve real business needs.",
  },
];

export function DigitalExpertise({ lang }: { lang: Lang }) {
  const ar = lang === "ar";
  const motionSafe = useMotionSafe();
  const Arrow = ar ? ArrowLeft : ArrowRight;

  return (
    <section
      id="digital-expertise"
      aria-labelledby="digital-expertise-heading"
      dir={ar ? "rtl" : "ltr"}
      className="border-t border-hairline bg-surface-raised px-5 py-16 text-ink sm:px-8 sm:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={motionSafe.reduce ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={motionSafe.reveal}
          className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"
        >
          <div>
            <p className="mb-5 flex items-center gap-3 text-sm font-medium text-brand-strong">
              <CodeXml className="size-5 shrink-0" aria-hidden="true" />
              {ar ? "المحاسبة × التقنية" : "Accounting × Technology"}
              <span className="ms-auto font-mono text-xs text-ink-muted" dir="ltr">
                VIBE CODING
              </span>
            </p>
            <h2
              id="digital-expertise-heading"
              className="font-display text-3xl leading-[1.55] sm:text-4xl"
            >
              {ar ? "خبرة محاسبية" : "Accounting expertise."}
              <span className="block text-brand-strong">
                {ar ? "بعقلية رقمية." : "A digital mindset."}
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-ink-muted sm:text-lg sm:leading-9">
              {ar
                ? "لا أكتفي بقراءة الأرقام؛ أواكب تطوّر التقنية لأحوّلها إلى تقارير أوضح وحلول عملية. أدمج خبرتي المحاسبية مع الفايب كودينج وخبرتي في تصميم المواقع والتطبيقات، ليصبح الناتج دقيقًا في مضمونه، وبسيطًا في فهمه واستخدامه."
                : "I go beyond reading numbers. I keep pace with technology to turn them into clearer reports and practical solutions, combining my accounting experience with vibe coding and website and application design—so the results are accurate in substance and easy to understand and use."}
            </p>
            <Button
              asChild
              variant="editorial"
              size="lg"
              className="mt-8 h-auto min-h-12 whitespace-normal px-6 py-3"
            >
              <Link to="/request-service">
                {ar ? "لنتحدث عن مشروعك" : "Let’s talk about your project"}
                <Arrow aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <figure className="min-w-0">
            <div className="overflow-hidden rounded-md border border-hairline bg-surface">
              <img
                src={dashboardImage}
                alt={
                  ar
                    ? "تصوّر بصري لعرض البيانات والتقارير المالية"
                    : "A visual illustration of financial data and reporting"
                }
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                decoding="async"
                width={800}
                height={600}
              />
            </div>
            <figcaption className="mt-4 flex flex-wrap justify-between gap-2 text-xs text-ink-muted">
              <span>{ar ? "من البيانات إلى رؤية أوضح" : "From data to clearer insight"}</span>
              <span>{ar ? "تحليل · تطوير · تصميم" : "Analysis · Development · Design"}</span>
            </figcaption>
          </figure>
        </motion.div>
        <motion.div
          initial={motionSafe.reduce ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={motionSafe.staggerParent}
          className="mt-12 grid gap-8 border-t border-hairline pt-8 md:grid-cols-3 lg:mt-16"
        >
          {expertise.map(({ icon: Icon, ...item }, index) => (
            <motion.div key={item.en} variants={motionSafe.staggerChild} className="min-w-0">
              <div className="mb-4 flex items-center justify-between text-brand-strong">
                <Icon className="size-6" aria-hidden="true" />
                <span className="font-mono text-xs text-ink-muted">0{index + 1}</span>
              </div>
              <h3 className="text-lg font-semibold leading-8">{ar ? item.ar : item.en}</h3>
              <p className="mt-3 text-sm leading-7 text-ink-muted">
                {ar ? item.bodyAr : item.bodyEn}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
