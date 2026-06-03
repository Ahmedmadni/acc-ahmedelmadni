import {
  BookOpen,
  Calculator,
  Receipt,
  ShieldCheck,
  Percent,
  FileBarChart,
  SearchCheck,
  FileSpreadsheet,
  Server,
  Rocket,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  BookOpen,
  Calculator,
  Receipt,
  ShieldCheck,
  Percent,
  FileBarChart,
  SearchCheck,
  FileSpreadsheet,
  Server,
  Rocket,
};

export function CategoryIcon({ name, className }: { name: string; className?: string }) {
  const Icon = MAP[name] ?? BookOpen;
  return <Icon className={className} />;
}
