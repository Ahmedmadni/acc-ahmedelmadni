import { createFileRoute } from "@tanstack/react-router";
import { SubPageShell } from "@/components/SubPageShell";
import { Contact } from "@/routes/index";
import { RequestService } from "@/routes/request-service";
import type { Lang } from "@/lib/i18n";

/**
 * /contact — the destination behind the header's «تواصل» item.
 *
 * Both halves are the existing components, reused rather than rebuilt:
 *
 *  - `Contact` is the very same section that renders on the homepage, so the
 *    mascot cards keep their artwork, their bob animation and their
 *    pointer-follow exactly as they are; there is one implementation, not a
 *    copy. It still carries `id="contact"`, which is also what keeps the
 *    older `/#contact` anchors on the homepage working.
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
    ],
    links: [{ rel: "canonical", href: "https://ahmedelmadni.com/contact" }],
  }),
  component: ContactRoute,
});

function ContactRoute() {
  return <SubPageShell>{(lang) => <ContactPage lang={lang} />}</SubPageShell>;
}

function ContactPage({ lang }: { lang: Lang }) {
  return (
    <>
      {/* Direct channels + the mascot cards — the homepage section itself. */}
      <Contact lang={lang} />

      {/* The full form, in its compact card form. */}
      <section className="bg-[#151412] py-16 sm:py-20 lg:py-24">
        <RequestService lang={lang} embedded />
      </section>
    </>
  );
}
