import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/admin/debug")({
  head: () => ({
    meta: [
      { title: "حالة صلاحيات المستخدم | المشرف" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminDebugPage,
});

function AdminDebugPage() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<{ id: string; email: string | null } | null>(null);
  const [roles, setRoles] = useState<string[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const { data: meData, error: meErr } = await supabase.auth.getUser();
        if (meErr) throw meErr;
        const current = meData?.user ? { id: meData.user.id, email: meData.user.email ?? null } : null;
        if (!active) return;
        setUser(current);
        if (!current) {
          setRoles(null);
          setLoading(false);
          return;
        }

        const { data, error: roleErr } = await supabase
          .from("user_roles")
          .select("role")
          .eq("user_id", current.id);

        if (roleErr) {
          // Could be RLS or permission error — show it to the user
          setError(roleErr.message || String(roleErr));
          setRoles(null);
        } else {
          setRoles((data ?? []).map((r: any) => r.role));
        }
      } catch (e: any) {
        setError(e?.message ?? String(e));
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  return (
    <div dir="rtl" className="min-h-screen bg-[#151412] text-[#FCFBF9]">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="font-display text-2xl font-extrabold">أدوات تشخيص صلاحيات المشرف</h1>

        <div className="mt-6 space-y-4">
          {loading && <div>جارِ جلب حالة المستخدم...</div>}

          {!loading && !user && (
            <div className="rounded-lg border border-[#A88765]/20 bg-white/[0.03] p-4">
              <p>أنت غير مسجل دخول. سجّل دخولاً ثم عاود المحاولة.</p>
            </div>
          )}

          {!loading && user && (
            <div className="rounded-lg border border-[#A88765]/20 bg-white/[0.03] p-4">
              <p className="font-bold">المستخدم الحالي</p>
              <p className="text-sm">البريد: <span className="font-mono">{user.email ?? "(بدون بريد)"}</span></p>
              <p className="text-sm">معرّف المستخدم: <span className="font-mono">{user.id}</span></p>

              <div className="mt-3">
                <p className="font-bold">الأدوار الحالية</p>
                {error && (
                  <div className="mt-2 text-sm text-amber-200">خطأ عند جلب الأدوار: {error}</div>
                )}
                {!error && roles && roles.length === 0 && (
                  <div className="mt-2 text-sm">لا توجد أدوار مسجّلة لهذا المستخدم.</div>
                )}
                {!error && roles && roles.length > 0 && (
                  <ul className="mt-2 list-disc ps-6">
                    {roles.map((r) => (
                      <li key={r} className="text-sm">{r}</li>
                    ))}
                  </ul>
                )}

                <div className="mt-4 text-sm">
                  <p className="font-bold">إن لم يظهر دور <code>admin</code>:</p>
                  <ol className="list-decimal ps-6 mt-2">
                    <li>افتح لوحة Supabase → SQL Editor.</li>
                    <li>ابحث عن معرّف المستخدم أعلاه في جدول <code>auth.users</code>:</li>
                  </ol>

                  <pre className="mt-2 rounded bg-[#0f1720] p-3 text-xs overflow-x-auto">
{`-- اعثر على المستخدم
SELECT id, email FROM auth.users WHERE email = 'elmadnim@gmail.com';

-- أضف دور admin (استبدل <user_id>)
INSERT INTO user_roles (user_id, role) VALUES ('<user_id>', 'admin');`}
                  </pre>

                  <p className="mt-2">ملاحظة: إذا كانت هناك سياسات RLS تمنع القراءة من العميل، قد ترى خطأ عند جلب الأدوار — في هذه الحالة نفّذ الاستعلام أعلاه من داخل Supabase SQL Editor أو امنح إذن القراءة للعمليات المصادق عليها حسب سياسة الأمان لديك.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
