import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { SubPageShell } from "@/components/SubPageShell";
import { Contact } from "@/routes/index";
import { RequestService } from "@/routes/request-service";
import { useMotionSafe } from "@/lib/motion";
import type { Lang } from "@/lib/i18n";

/**
 * /contact — the destination behind the header's «تواصل» item.
 *
 * Both halves are the existing components, reused rather than rebuilt:
 *
 *  - `Contact` is the very same section that renders on the homepage, so the
 *    mascot cards keep their artwork, their bob animation and their
 *    pointer-follow exactly as they are; there is one implementation, not a
 *    copy. Passing `embedded` here renders just its inner content (no
 *    outer `<section>`/background of its own) so this page can wrap it,
 *    together with the request form, in one shared section instead of two
 *    stacked ones with a visible seam between them.
 *  - `RequestService` is the full request/contact form already used by
 *    `/request-service` and embedded in `/services`. Passing `embedded`
 *    renders just the form card (no second hero or breadcrumb), so no form
 *    logic, validation or submission path is duplicated here.
 */

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل معي | أحمد المدني - محاسب أول" },
      {
        name: "description",
        content:
          "تواصل مع أحمد المدني — محاسب أول واستشاري مالي في الرياض. أرسل طلبك عبر النموذج أو تواصل مباشرة عبر الهاتف والبريد وواتساب.",
      },
      { property: "og:title", content: "تواصل معي | أحمد المدني" },
      {
        property: "og:description",
        content: "أرسل طلبك عبر النموذج أو تواصل مباشرة عبر قنوات التواصل المتاحة.",
      },
      { property: "og:url", content: "https://ahmedelmadni.com/contact" },
    ],
    links: [{ rel: "canonical", href: "https://ahmedelmadni.com/contact" }],
  }),
  component: ContactRoute,
});

function ContactRoute() {
  return <SubPageShell>{(lang) => <ContactPage lang={lang} />}</SubPageShell>;
}

function ContactPage({ lang }: { lang: Lang }) {
  const m = useMotionSafe();
  const ar = lang === "ar";

  return (
    <section
      id="contact"
      className="leather-grain relative overflow-hidden bg-[#4A3023] py-20 sm:py-24 lg:py-28"
    >
      {/* Direct channels + the mascot cards. */}
      <Contact lang={lang} embedded />

      {/* A single connecting beat between the channels and the form, instead
          of a second section starting cold right after them — a short label
          on a bronze line, the same divider language used for section
          breaks elsewhere (e.g. the expertise/skills groups). */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: m.reduce ? 0 : 0.6 }}
        className="mx-auto mt-14 flex w-full max-w-[80rem] items-center gap-4 px-4 sm:mt-16 sm:px-8 lg:px-12"
      >
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#FCFBF9]/20 to-[#FCFBF9]/20" />
        <span className="shrink-0 text-[12px] font-bold uppercase tracking-[0.22em] text-[#d8bd9c]">
          {ar ? "أو عبر النموذج" : "Or via the form"}
        </span>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#FCFBF9]/20 to-[#FCFBF9]/20" />
      </motion.div>

      {/* The full form, still on this same section/background — its own
          card (`dark-motif`, near-black) is what provides the contrast, the
          same pattern already used for dark cards sitting on a colored
          section elsewhere on the site. */}
      <div className="mx-auto mt-8 w-full max-w-[80rem] px-4 sm:px-8 lg:px-12">
        <RequestService lang={lang} embedded />
      </div>
    </section>
  );
}
