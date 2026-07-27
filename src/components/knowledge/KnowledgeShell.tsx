import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bookmark,
  BookOpen,
  Home,
  LogOut,
  ShieldCheck,
  UserCircle,
} from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type KnowledgeUser = { id: string; email: string | null };

export function KnowledgeShell({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<KnowledgeUser | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    let active = true;

    const loadAccount = async () => {
      const { data } = await supabase.auth.getUser();
      const currentUser = data.user ? { id: data.user.id, email: data.user.email ?? null } : null;
      if (!active) return;
      setUser(currentUser);

      if (!currentUser) {
        setIsAdmin(false);
        return;
      }

      const { data: role } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", currentUser.id)
        .eq("role", "admin")
        .maybeSingle();
      if (active) setIsAdmin(Boolean(role));
    };

    void loadAccount();
    const { data: subscription } = supabase.auth.onAuthStateChange(() => {
      void loadAccount();
    });

    return () => {
      active = false;
      subscription.subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    window.location.assign("/auth");
  };

  return (
    <div
      dir="rtl"
      lang="ar"
      className="min-h-screen text-[var(--fg)]"
      style={{
        background: "#151412",
        fontFamily: "Cairo, system-ui, sans-serif",
      }}
    >
      <header className="sticky top-0 z-40 border-b border-[#A88765]/15 bg-[#151412]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link
            to="/knowledge"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#c9a986]"
          >
            <BookOpen className="size-5" />
            المكتبة المحاسبية
          </Link>
          <nav className="flex flex-wrap items-center justify-end gap-2">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#A88765]/40 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-[#c9a986] transition-all hover:bg-[#A88765]/15"
            >
              <Home className="size-3.5" />
              الرئيسية
            </Link>
            <Link
              to="/tools"
              className="hidden rounded-full border border-[#A88765]/40 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-[#c9a986] transition-all hover:bg-[#A88765]/15 sm:inline-flex"
            >
              الأدوات
            </Link>
            <Link
              to="/library"
              className="hidden rounded-full border border-[#A88765]/40 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-[#c9a986] transition-all hover:bg-[#A88765]/15 sm:inline-flex"
            >
              المكتبة
            </Link>
            {user ? (
              <>
                <Link
                  to="/knowledge/bookmarks"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#A88765]/40 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-[#c9a986] transition-all hover:bg-[#A88765]/15"
                >
                  <Bookmark className="size-3.5" />
                  محفوظاتي
                </Link>
                {isAdmin && (
                  <Link
                    to="/admin/library"
                    className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/50 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold text-emerald-100 transition-all hover:bg-emerald-400/20"
                  >
                    <ShieldCheck className="size-3.5" />
                    لوحة التحكم
                  </Link>
                )}
                <span className="hidden max-w-[220px] items-center gap-1.5 truncate rounded-full border border-[#A88765]/25 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-[#D8D1C8] md:inline-flex">
                  <UserCircle className="size-3.5 shrink-0 text-[#c9a986]" />
                  <span className="truncate" dir="ltr">
                    {user.email}
                  </span>
                </span>
                <button
                  type="button"
                  onClick={signOut}
                  className="inline-flex items-center gap-1.5 rounded-full border border-red-300/30 bg-red-400/10 px-3 py-1.5 text-xs font-bold text-red-100 transition-all hover:bg-red-400/20"
                >
                  <LogOut className="size-3.5" />
                  خروج
                </button>
              </>
            ) : (
              <Link
                to="/auth"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#A88765]/40 bg-[#A88765]/10 px-3 py-1.5 text-xs font-bold text-[#c9a986] transition-all hover:bg-[#A88765]/20"
              >
                <UserCircle className="size-3.5" />
                دخول
              </Link>
            )}
          </nav>
        </div>
      </header>
      {children}
      <footer className="mt-16 border-t border-[#A88765]/15 bg-[#151412]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-[#D8D1C8] sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} المكتبة المحاسبية — أحمد المدني</p>
          <Link to="/" className="inline-flex items-center gap-1 text-[#c9a986] hover:underline">
            عودة للموقع <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </footer>
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
