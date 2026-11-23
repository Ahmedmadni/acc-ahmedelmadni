import type { AnchorHTMLAttributes } from "react";
import { Download } from "lucide-react";
import { t, type Lang } from "@/lib/i18n";

/**
 * One canonical CV download action for the portfolio and all page layouts.
 *
 * public/mycv.pdf is a same-origin static asset. Keep a native anchor so
 * downloads work without JavaScript or authentication. public/_headers adds
 * Content-Disposition: attachment on hosts that support static asset headers.
 */
type CvDownloadLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "download" | "children"
> & {
  lang: Lang;
  iconClassName?: string;
};

export function CvDownloadLink({
  lang,
  iconClassName = "size-4",
  ...anchorProps
}: CvDownloadLinkProps) {
  return (
    <a
      {...anchorProps}
      href="/mycv.pdf"
      download="Ahmed-Elmadani-CV.pdf"
      type="application/pdf"
    >
      <Download aria-hidden="true" className={iconClassName} />
      <span>{t.nav.cv[lang]}</span>
    </a>
  );
}
