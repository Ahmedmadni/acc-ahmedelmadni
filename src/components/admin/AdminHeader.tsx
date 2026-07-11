import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Home,
  LogOut,
  ShieldCheck,
  UserCircle,
  UserCircle2,
  Users,
  FileText,
  BookOpen,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type AdminUser = { id: string; email: string | null };

// Shared header for every /_authenticated page (CRM, declarations archive,
// admin/library, admin/knowledge) so navigation and sign-out behave the
// same everywhere instead of each page building its own ad-hoc header.
export function AdminHeader() {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    let active = true;
    const load = async () => {
      const { data } = await supabase.auth.getUser();
      const current = data.user ? { id: data.user.id, email: data.user.email ?? null } : null;
      if (!active) return;
      setUser(current);
      if (!current) {
        setIsAdmin(false);
        return;
      }
      const { data: role } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", current.id)
        .eq("role", "admin")
        .maybeSingle();
      if (active) setIsAdmin(Boolean(role));
    };
    void load();
    const { data: sub } = supabase.auth.onAuthStateChange(() => void load());
    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    window.location.assign("/auth");
  };

  const linkCls = (path: string) =>
    `inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold transition-all ${
      pathname === path
        ? "border-emerald-400/50 bg-emerald-400/15 text-emerald-100"
        : "border-[#d7aa52]/30 bg-white/[0.03] text-[#f3d28a]/90 hover:bg-[#d7aa52]/10"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-[#d7aa52]/15 bg-[#04101f]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2.5 sm:px-6">
        <nav className="flex flex-wrap items-center gap-2">
          <Link to="/" className={linkCls("__home__")}>
            <Home className="size-3.5" />
            الرئيسية
          </Link>
          <Link to="/declarations" className={linkCls("/declarations")}>
            <FileText className="size-3.5" />
            أرشيف الإقرارات
          </Link>
          {isAdmin && (
            <>
              <Link to="/crm" className={linkCls("/crm")}>
                <Users className="size-3.5" />
                CRM
              </Link>
              <Link to="/admin/library" className={linkCls("/admin/library")}>
                <ShieldCheck className="size-3.5" />
                إدارة المكتبة
              </Link>
              <Link to="/admin/knowledge" className={linkCls("/admin/knowledge")}>
                <BookOpen className="size-3.5" />
                لوحة المعرفة
              </Link>
              <Link to="/admin/profile" className={linkCls("/admin/profile")}>
                <UserCircle2 className="size-3.5" />
                الشهادات والخبرات
              </Link>
            </>
          )}
        </nav>
        <div className="flex items-center gap-2">
          {user?.email && (
            <span className="hidden max-w-[220px] items-center gap-1.5 truncate rounded-full border border-[#d7aa52]/25 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-white/75 md:inline-flex">
              <UserCircle className="size-3.5 shrink-0 text-[#f3d28a]" />
              <span className="truncate" dir="ltr">
                {user.email}
              </span>
            </span>
          )}
          <button
            type="button"
            onClick={signOut}
            className="inline-flex items-center gap-1.5 rounded-full border border-red-300/30 bg-red-400/10 px-3 py-1.5 text-xs font-bold text-red-100 transition-all hover:bg-red-400/20"
          >
            <LogOut className="size-3.5" />
            خروج
          </button>
        </div>
      </div>
    </header>
  );
}
