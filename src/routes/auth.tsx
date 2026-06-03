import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { KnowledgeShell } from "@/components/knowledge/KnowledgeShell";
import { toast } from "sonner";

export const Route = createFileRoute("/auth")({
  head: () => ({ meta: [{ title: "تسجيل الدخول | المكتبة المحاسبية" }] }),
  component: AuthPage,
});

function AuthPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

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
        router.navigate({ to: "/knowledge" });
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
        <div className="rounded-3xl border border-[#d7aa52]/25 bg-[#07182c] p-8 shadow-2xl">
          <h1 className="text-2xl font-black text-white">
            {mode === "signin" ? "تسجيل الدخول" : "إنشاء حساب"}
          </h1>
          <p className="mt-2 text-sm text-white/60">
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
              className="w-full rounded-xl border border-[#d7aa52]/30 bg-white/[0.04] px-4 py-3 text-white placeholder:text-white/30 focus:border-[#d7aa52] focus:outline-none"
            />
            <input
              required
              minLength={6}
              type="password"
              dir="ltr"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-xl border border-[#d7aa52]/30 bg-white/[0.04] px-4 py-3 text-white placeholder:text-white/30 focus:border-[#d7aa52] focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-br from-[#f3d28a] to-[#b8862e] py-3 text-sm font-bold text-[#04101f] shadow-lg shadow-[#d7aa52]/30 transition-transform hover:scale-[1.01] disabled:opacity-60"
            >
              {loading ? "..." : mode === "signin" ? "دخول" : "إنشاء حساب"}
            </button>
          </form>
          <button
            type="button"
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            className="mt-4 w-full text-center text-xs text-[#f3d28a] hover:underline"
          >
            {mode === "signin" ? "ليس لديك حساب؟ أنشئ واحداً" : "لديك حساب؟ سجّل دخول"}
          </button>
        </div>
      </div>
    </KnowledgeShell>
  );
}
