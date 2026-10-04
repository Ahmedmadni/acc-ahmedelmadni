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
  FileSpreadsheet,
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
      const { data } = await supabase.auth.getSession();
      const u = data.session?.user;
      const current = u ? { id: u.id, email: u.email ?? null } : null;
      if (!active) return;
      setUser(current);
      if (!current) {
        setIsAdmin(false);
        return;
      }
      // Show cached admin links instantly; the DB check below confirms them.
      const cached = sessionStorage.getItem("is-admin");
      if (cached === `${current.id}:1`) setIsAdmin(true);
      const { data: role } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", current.id)
        .eq("role", "admin")
        .maybeSingle();
      if (!active) return;
      setIsAdmin(Boolean(role));
      sessionStorage.setItem("is-admin", `${current.id}:${role ? 1 : 0}`);
    };
    void load();
    const { data: sub } = supabase.auth.onAuthStateChange(() => void load());
    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    sessionStorage.removeItem("is-admin");
    await supabase.auth.signOut();
    window.location.assign("/auth");
  };

  const linkCls = (path: string) =>
    `inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold transition-all ${
      pathname === path
        ? "border-emerald-400/50 bg-emerald-400/15 text-emerald-100"
        : "border-[#A88765]/30 bg-white/[0.03] text-[#c9a986]/90 hover:bg-[#A88765]/10"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-[#A88765]/15 bg-[#151412]/90 backdrop-blur-xl">
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
              <Link to="/admin/templates" className={linkCls("/admin/templates")}>
                <FileSpreadsheet className="size-3.5" />
                النماذج الجاهزة
              </Link>
            </>
          )}
        </nav>
        <div className="flex items-center gap-2">
          {user?.email && (
            <span className="hidden max-w-[220px] items-center gap-1.5 truncate rounded-full border border-[#A88765]/25 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-[#D8D1C8] md:inline-flex">
              <UserCircle className="size-3.5 shrink-0 text-[#c9a986]" />
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
