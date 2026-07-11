import { motion } from "motion/react";
import { Link as RouterLink } from "@tanstack/react-router";
import { Sparkles, X } from "lucide-react";
import { t, type Lang } from "@/lib/i18n";

export type ServiceItem = (typeof t.services.items)[number];

export default function ServiceModal({
  item,
  lang,
  onClose,
}: {
  item: ServiceItem;
  lang: Lang;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#020912]/80 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[88vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-[#d7aa52]/40 bg-gradient-to-br from-[#07182c] to-[#04101f] p-7 shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="close"
          className="absolute end-4 top-4 flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="size-4" />
        </button>
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#d7aa52]/15 px-3 py-1 text-xs font-bold text-[#f3d28a]">
          <Sparkles className="size-3.5" />
          {lang === "ar" ? "خدمة" : "Service"}
        </div>
        <h3 className="text-2xl font-black text-white">{item[lang]}</h3>
        <p className="mt-4 text-sm leading-loose text-white/85">{item.full[lang]}</p>
        <div className="mt-6">
          <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#d7aa52]">
            {t.services.process[lang]}
          </div>
          <ol className="space-y-2">
            {item.steps[lang].map((step, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.03] p-3 text-sm text-white/90"
              >
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f3d28a] to-[#b8862e] text-[10px] font-black text-[#04101f]">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
        <RouterLink
          to="/request-service"
          search={{ service: item.requestServiceId }}
          className="mt-6 flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#f3d28a] to-[#b8862e] px-6 py-3 text-sm font-bold text-[#04101f] transition-all hover:scale-[1.02]"
        >
          {t.services.requestNow[lang]}
        </RouterLink>
      </motion.div>
    </motion.div>
  );
}
