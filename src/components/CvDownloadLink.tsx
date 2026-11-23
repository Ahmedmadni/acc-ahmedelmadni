import { useState, type AnchorHTMLAttributes, type MouseEvent } from "react";
import { Download, LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { t, type Lang } from "@/lib/i18n";

const CV_URL = "/mycv.pdf";
const CV_FILENAME = "Ahmed-Elmadani-CV.pdf";

async function downloadActualCv(): Promise<void> {
  const response = await fetch(CV_URL, { credentials: "same-origin", cache: "no-store" });
  if (!response.ok) throw new Error(`CV HTTP ${response.status}`);

  const pdf = await response.blob();
  // SPA fallbacks can return HTML (HTTP 200) for a missing static asset.
  if (pdf.size < 1024 || (await pdf.slice(0, 5).text()) !== "%PDF-") {
    throw new Error("The CV asset is not a valid PDF");
  }

  const downloadUrl = URL.createObjectURL(new Blob([pdf], { type: "application/pdf" }));
  const link = document.createElement("a");
  link.href = downloadUrl;
  link.download = CV_FILENAME;
  link.style.display = "none";
  document.body.appendChild(link);
  try {
    link.click();
  } finally {
    link.remove();
    // Mobile browsers may defer consumption of object URLs.
    window.setTimeout(() => URL.revokeObjectURL(downloadUrl), 60_000);
  }
}

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
  onClick,
  ...anchorProps
}: CvDownloadLinkProps) {
  const [downloading, setDownloading] = useState(false);

  const handleClick = async (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    // Preserve native behavior for modified clicks, as well as no-JS fallback.
    if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey || event.button !== 0) {
      return;
    }
    event.preventDefault();
    if (downloading) return;

    setDownloading(true);
    try {
      await downloadActualCv();
      toast.success(lang === "ar" ? "بدأ تنزيل السيرة الذاتية بصيغة PDF" : "CV PDF download started");
    } catch (error) {
      console.error("Failed to download the public CV", error);
      toast.error(lang === "ar" ? "تعذر تنزيل السيرة الذاتية" : "Couldn't download the CV", {
        description:
          lang === "ar"
            ? "يمكنك فتح الملف مباشرة ثم حفظه على جهازك."
            : "You can open the file and save it to your device.",
        action: {
          label: lang === "ar" ? "فتح الملف" : "Open PDF",
          onClick: () => window.open(CV_URL, "_blank", "noopener,noreferrer"),
        },
      });
    } finally {
      setDownloading(false);
    }
  };

  return (
    <a
      {...anchorProps}
      href={CV_URL}
      download={CV_FILENAME}
      type="application/pdf"
      onClick={handleClick}
      aria-busy={downloading}
    >
      {downloading ? (
        <LoaderCircle aria-hidden="true" className={`${iconClassName} animate-spin`} />
      ) : (
        <Download aria-hidden="true" className={iconClassName} />
      )}
      <span>
        {downloading
          ? lang === "ar"
            ? "جارٍ تجهيز السيرة الذاتية..."
            : "Preparing CV..."
          : t.nav.cv[lang]}
      </span>
    </a>
  );
}
