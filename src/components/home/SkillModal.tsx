import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Layers, X } from "lucide-react";
import type { Lang } from "@/lib/i18n";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

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
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    panelRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusable = Array.from(
          panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#100e0c]/85 p-4 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="skill-modal-title"
    >
      <motion.div
        ref={panelRef}
        tabIndex={-1}
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[88vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-[#A88765]/25 bg-[#1C1B19] p-7 shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="close"
          className="absolute end-4 top-4 flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="size-4" />
        </button>

        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#A88765]/15 px-3 py-1 text-xs font-bold text-[#c9a986]">
          <Layers className="size-3.5" />
          {lang === "ar" ? "مهارة" : "Skill"}
        </div>
        <h3 id="skill-modal-title" className="font-display text-2xl font-extrabold text-[#FCFBF9]">
          {name}
        </h3>

        <div className="mt-3 flex items-center gap-3">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#c2a079] to-[#7c6045]"
              style={{ width: `${item.level}%` }}
            />
          </div>
          <span className="font-mono text-sm font-bold text-[#A88765]">{item.level}%</span>
        </div>

        {desc && <p className="mt-5 text-sm leading-relaxed text-white/80">{desc}</p>}

        {item.tools.length > 0 && (
          <div className="mt-5">
            <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#A88765]">
              {lang === "ar" ? "الأدوات" : "Tools"}
            </div>
            <div className="flex flex-wrap gap-2">
              {item.tools.map((tool, i) => (
                <span
                  key={i}
                  className="rounded-full border border-[#A88765]/30 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-white/85"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}

        {kpis.length > 0 && (
          <div className="mt-5">
            <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#A88765]">
              {lang === "ar" ? "مؤشرات الأداء" : "KPIs"}
            </div>
            <ul className="space-y-1.5">
              {kpis.map((k, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-white/85">
                  <span className="size-1.5 rounded-full bg-[#A88765]" />
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
