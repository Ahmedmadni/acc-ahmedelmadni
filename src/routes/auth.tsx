import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { KnowledgeShell } from "@/components/knowledge/KnowledgeShell";
import { toast } from "sonner";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "تسجيل الدخول | المكتبة المحاسبية" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AuthPage,
});

async function redirectByRole(go: (to: string) => void) {
  try {
    const { data: sess } = await supabase.auth.getSession();
    const userId = sess.session?.user?.id;
    if (userId) {
      const { data: role } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", userId)
        .eq("role", "admin")
        .maybeSingle();
      sessionStorage.setItem("is-admin", role ? `${userId}:1` : `${userId}:0`);
      if (role) {
        go("/crm");
        return;
      }
    }
  } catch (e) {
    console.error("role check failed", e);
  }
  go("/knowledge");
}

function AuthPage() {
  const router = useRouter();
  const go = (to: string) => void router.navigate({ to, replace: true });
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!window.location.hash.includes("access_token") && !sessionStorage.getItem("google-auth-pending")) return;
    const { data: sub } = supabase.auth.onAuthStateChange((event, session) => {
      if (session && (event === "SIGNED_IN" || event === "INITIAL_SESSION")) {
        sessionStorage.removeItem("google-auth-pending");
        void redirectByRole(go);
      }
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  async function signInWithGoogle() {
    setLoading(true);
    sessionStorage.setItem("google-auth-pending", "1");
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: `${window.location.origin}/auth`,
    });
    if (result.error) {
      sessionStorage.removeItem("google-auth-pending");
      toast.error(result.error.message ?? "تعذّر تسجيل الدخول بجوجل");
      setLoading(false);
      return;
    }
    if (result.redirected) return;
    sessionStorage.removeItem("google-auth-pending");
    toast.success("تم تسجيل الدخول");
    await redirectByRole(go);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin + "/knowledge" },
        });
        if (error) throw error;
        toast.success("تم إنشاء الحساب — تحقق من بريدك لتفعيله");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("تم تسجيل الدخول");
        await redirectByRole(go);
        return;
      }
    } catch (err) {
      toast.error((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <KnowledgeShell>
      <div className="mx-auto max-w-md px-4 py-16 sm:px-6">
        <div className="rounded-3xl border border-[#A88765]/25 bg-[#FCFBF9] p-8 shadow-2xl">
          <h1 className="font-display text-2xl font-extrabold text-[#1C1B19]">
            {mode === "signin" ? "تسجيل الدخول" : "إنشاء حساب"}
          </h1>
          <p className="mt-2 text-sm text-[#6B6259]">
            للوصول إلى التقييم والحفظ في المكتبة المحاسبية.
          </p>
          <button
            type="button"
            onClick={signInWithGoogle}
            disabled={loading}
            className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl border border-[#A88765]/30 bg-white py-3 text-sm font-bold text-[#1C1B19] transition-colors hover:bg-[#F6F4F0]"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15A10.96 10.96 0 0 0 12 1 11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38z"/>
            </svg>
            المتابعة باستخدام جوجل
          </button>
          <div className="my-4 flex items-center gap-3 text-xs text-[#9a9089]">
            <span className="h-px flex-1 bg-[#A88765]/25" />أو بالبريد<span className="h-px flex-1 bg-[#A88765]/25" />
          </div>
          <form onSubmit={submit} className="space-y-3">
            <input
              required
              type="email"
              dir="ltr"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              className="w-full rounded-xl border border-[#A88765]/30 bg-white px-4 py-3 text-[#1C1B19] placeholder:text-[#9a9089] focus:border-[#A88765] focus:outline-none"
            />
            <input
              required
              minLength={6}
              type="password"
              dir="ltr"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-xl border border-[#A88765]/30 bg-white px-4 py-3 text-[#1C1B19] placeholder:text-[#9a9089] focus:border-[#A88765] focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-br from-[#c2a079] to-[#7c6045] py-3 text-sm font-bold text-[#1C1B19] shadow-lg shadow-[#4A3023]/30 transition-transform hover:scale-[1.01]"
            >
              {loading ? "..." : mode === "signin" ? "دخول" : "إنشاء حساب"}
            </button>
          </form>
          <button
            type="button"
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            className="mt-4 w-full text-center text-xs text-[#7c6045] hover:underline"
          >
            {mode === "signin" ? "ليس لديك حساب؟ أنشئ واحداً" : "لديك حساب؟ سجّل دخول"}
          </button>
        </div>
      </div>
    </KnowledgeShell>
  );
}
