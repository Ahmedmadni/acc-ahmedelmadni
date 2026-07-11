import { motion } from "motion/react";
import { Layers, X } from "lucide-react";
import type { Lang } from "@/lib/i18n";

export interface SkillItem {
  name_ar: string;
  name_en: string;
  level: number;
  desc_ar: string | null;
  desc_en: string | null;
  tools: string[];
  kpis_ar: string[];
  kpis_en: string[];
}

export default function SkillModal({
  item,
  lang,
  onClose,
}: {
  item: SkillItem;
  lang: Lang;
  onClose: () => void;
}) {
  const name = lang === "ar" ? item.name_ar : item.name_en;
  const desc = lang === "ar" ? item.desc_ar : item.desc_en;
  const kpis = lang === "ar" ? item.kpis_ar : item.kpis_en;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#020912]/80 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-[#d7aa52]/40 bg-gradient-to-br from-[#07182c] to-[#04101f] p-7 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute end-4 top-4 flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="size-4" />
        </button>

        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#d7aa52]/15 px-3 py-1 text-xs font-bold text-[#f3d28a]">
          <Layers className="size-3.5" />
          {lang === "ar" ? "مهارة" : "Skill"}
        </div>
        <h3 className="text-2xl font-black text-white">{name}</h3>

        <div className="mt-3 flex items-center gap-3">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#f3d28a] to-[#b8862e]"
              style={{ width: `${item.level}%` }}
            />
          </div>
          <span className="font-mono text-sm font-bold text-[#d7aa52]">{item.level}%</span>
        </div>

        {desc && <p className="mt-5 text-sm leading-relaxed text-white/80">{desc}</p>}

        {item.tools.length > 0 && (
          <div className="mt-5">
            <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#d7aa52]">
              {lang === "ar" ? "الأدوات" : "Tools"}
            </div>
            <div className="flex flex-wrap gap-2">
              {item.tools.map((tool, i) => (
                <span
                  key={i}
                  className="rounded-full border border-[#d7aa52]/30 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-white/85"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}

        {kpis.length > 0 && (
          <div className="mt-5">
            <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#d7aa52]">
              {lang === "ar" ? "مؤشرات الأداء" : "KPIs"}
            </div>
            <ul className="space-y-1.5">
              {kpis.map((k, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-white/85">
                  <span className="size-1.5 rounded-full bg-[#d7aa52]" />
                  {k}
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
