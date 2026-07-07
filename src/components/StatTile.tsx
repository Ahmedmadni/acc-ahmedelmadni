import type { ReactNode } from "react";

// Shared by ExamPrep and TypingTest, which previously each defined their own
// near-identical "label row + big value" tile.
export function StatTile({
  icon,
  label,
  value,
  sub,
  highlight,
  valueColor = "text-[var(--fg)]",
}: {
  icon?: ReactNode;
  label: string;
  value: string | number;
  sub?: string;
  highlight?: boolean;
  valueColor?: string;
}) {
  return (
    <div
      className={`rounded-xl border p-3 ${
        highlight
          ? "border-[#d7aa52]/60 bg-gradient-to-br from-[#d7aa52]/20 to-transparent"
          : "border-[#d7aa52]/20 bg-white/[0.03]"
      }`}
    >
      <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-[#f3d28a]">
        {icon}
        {label}
      </div>
      <div className={`mt-1 text-xl font-extrabold tabular-nums ${valueColor}`}>{value}</div>
      {sub ? <div className="mt-1 text-[11px] text-[var(--fg-soft)]">{sub}</div> : null}
    </div>
  );
}

// Shared by CrmStats and ClientsList, which previously each defined their
// own near-identical "big emoji + big value + label" tile.
export function EmojiStatTile({
  icon,
  label,
  value,
  valueColor = "text-white",
}: {
  icon: string;
  label: string;
  value: string | number;
  valueColor?: string;
}) {
  return (
    <div className="rounded-2xl border border-[#d7aa52]/20 bg-white/[0.04] p-4">
      <div className="text-2xl">{icon}</div>
      <div className={`mt-1 text-2xl font-black ${valueColor}`}>{value}</div>
      <div className="mt-0.5 text-[11px] text-[var(--fg-soft)]">{label}</div>
    </div>
  );
}
