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

async function redirectByRole() {
  try {
    const { data: meData } = await supabase.auth.getUser();
    const userId = meData?.user?.id;
    if (userId) {
      const { data: role } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", userId)
        .eq("role", "admin")
        .maybeSingle();
      if (role) {
        window.location.assign("/crm");
        return;
      }
    }
  } catch (e) {
    console.error("role check failed", e);
  }
  window.location.assign("/knowledge");
}

function AuthPage() {
  useRouter();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!window.location.hash.includes("access_token") && !sessionStorage.getItem("google-auth-pending")) return;
    const { data: sub } = supabase.auth.onAuthStateChange((event, session) => {
      if (session && (event === "SIGNED_IN" || event === "INITIAL_SESSION")) {
        sessionStorage.removeItem("google-auth-pending");
        void redirectByRole();
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
    await redirectByRole();
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
        await redirectByRole();
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
          <form onSubmit={submit} className="mt-6 space-y-3">
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
