import { motion } from "motion/react";
import { CheckCircle2, Sparkles, Star, X } from "lucide-react";
import { t, type Lang } from "@/lib/i18n";

export default function EidBanner({ lang, onClose }: { lang: Lang; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[300] flex items-center justify-center bg-[#020912]/85 p-4 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-label="Eid greeting"
    >
      <motion.div
        initial={{ scale: 0.85, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md overflow-hidden rounded-[28px] border border-[#d7aa52]/50 bg-gradient-to-br from-[#0a223f] via-[#07182c] to-[#04101f] p-8 text-center shadow-2xl"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-16 -left-16 size-56 rounded-full bg-[#d7aa52]/25 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -right-16 size-60 rounded-full bg-amber-400/15 blur-3xl"
        />
        {[...Array(14)].map((_, i) => (
          <motion.span
            key={i}
            aria-hidden
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.6 + (i % 4) * 0.4, repeat: Infinity, delay: i * 0.15 }}
            className="absolute"
            style={{
              left: `${((i * 53) % 95) + 2}%`,
              top: `${((i * 37) % 80) + 6}%`,
              color: i % 2 ? "#f3d28a" : "#fffbe6",
            }}
          >
            <Star className="size-2" fill="currentColor" />
          </motion.span>
        ))}

        <button
          onClick={onClose}
          aria-label="close"
          className="absolute end-3 top-3 flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="size-4" />
        </button>

        <motion.div
          initial={{ scale: 0.6, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.15 }}
          className="relative mx-auto mb-4 flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-[#f3d28a] to-[#b8862e] shadow-2xl shadow-[#d7aa52]/40"
        >
          <span className="text-4xl" role="img" aria-label="lantern">
            🏮
          </span>
        </motion.div>

        <div className="relative">
          <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#d7aa52]">
            🌙 {lang === "ar" ? "تهنئة" : "Greetings"} 🌙
          </div>
          <h3 className="mt-2 text-3xl font-black gold-text">{t.eid.title[lang]}</h3>
          <p className="mt-3 text-sm leading-loose text-white/85">{t.eid.msg[lang]}</p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#d7aa52]/30 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-[#f3d28a]">
            <Sparkles className="size-3" />
            {t.eid.from[lang]}
          </div>

          <button
            onClick={onClose}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#f3d28a] to-[#b8862e] px-7 py-3 text-sm font-bold text-[#04101f] shadow-lg shadow-[#d7aa52]/30 transition-transform hover:scale-105"
          >
            <CheckCircle2 className="size-4" />
            {t.eid.close[lang]}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
