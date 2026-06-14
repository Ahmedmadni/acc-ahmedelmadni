import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Home } from "lucide-react";
import type { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";

export function KnowledgeShell({ children }: { children: ReactNode }) {
  return (
    <div
      dir="rtl"
      lang="ar"
      className="min-h-screen text-[var(--fg)]"
      style={{
        background:
          "radial-gradient(1200px 600px at 80% -10%, rgba(215,170,82,0.10), transparent 60%), radial-gradient(900px 500px at -10% 110%, rgba(215,170,82,0.07), transparent 60%), #04101f",
        fontFamily: "Cairo, system-ui, sans-serif",
      }}
    >
      <header className="sticky top-0 z-40 border-b border-[#d7aa52]/15 bg-[#04101f]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link
            to="/knowledge"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#f3d28a]"
          >
            <BookOpen className="size-5" />
            المكتبة المحاسبية
          </Link>
          <nav className="flex items-center gap-2">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#d7aa52]/40 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-[#f3d28a] transition-all hover:bg-[#d7aa52]/15"
            >
              <Home className="size-3.5" />
              الرئيسية
            </Link>
            <Link
              to="/tools"
              className="hidden rounded-full border border-[#d7aa52]/40 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-[#f3d28a] transition-all hover:bg-[#d7aa52]/15 sm:inline-flex"
            >
              الأدوات
            </Link>
            <Link
              to="/library"
              className="hidden rounded-full border border-[#d7aa52]/40 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-[#f3d28a] transition-all hover:bg-[#d7aa52]/15 sm:inline-flex"
            >
              المكتبة
            </Link>
          </nav>
        </div>
      </header>
      {children}
      <footer className="mt-16 border-t border-[#d7aa52]/15 bg-[#03101e]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-white/60 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} المكتبة المحاسبية — أحمد المدني</p>
          <Link to="/" className="inline-flex items-center gap-1 text-[#f3d28a] hover:underline">
            عودة للموقع <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </footer>
      <Toaster />
    </div>
  );
}

export const CATEGORY_ICONS: Record<string, string> = {
  BookOpen: "BookOpen",
  Calculator: "Calculator",
  Receipt: "Receipt",
  ShieldCheck: "ShieldCheck",
  Percent: "Percent",
  FileBarChart: "FileBarChart",
  SearchCheck: "SearchCheck",
  FileSpreadsheet: "FileSpreadsheet",
  Server: "Server",
  Rocket: "Rocket",
};
