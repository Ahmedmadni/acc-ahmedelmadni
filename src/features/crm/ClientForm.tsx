import { useState } from "react";
import { Loader2, Save, X, ChevronDown, User, Building2, ReceiptText } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import type { Client, ClientStatus } from "./types";
import { BUSINESS_TYPES } from "./types";

type Props = {
  client: Client | null;
  onClose: () => void;
  onSave: (client: Client) => void;
};

export function ClientForm({ client, onClose, onSave }: Props) {
  const isEdit = !!client;
  const [form, setForm] = useState({
    full_name: client?.full_name || "",
    phone: client?.phone || "",
    email: client?.email || "",
    national_id: client?.national_id || "",
    company_name: client?.company_name || "",
    commercial_register: client?.commercial_register || "",
    tax_number: client?.tax_number || "",
    business_type: client?.business_type || "",
    city: client?.city || "الرياض",
    notes: client?.notes || "",
    status: client?.status || "active",
    vat_registered: client?.vat_registered || false,
    zakat_registered: client?.zakat_registered || false,
    vat_quarter: client?.vat_quarter || "quarterly",
  });
  const [saving, setSaving] = useState(false);

  const setField = <K extends keyof typeof form>(field: K, value: (typeof form)[K]) =>
    setForm((p) => ({ ...p, [field]: value }));

  const save = async () => {
    if (!form.full_name || !form.phone) return;
    setSaving(true);
    try {
      const payload: Record<string, unknown> = { ...form };
      if (!payload.business_type) payload.business_type = null;
      if (!payload.email) payload.email = null;

      if (isEdit && client) {
        const { data, error } = await supabase
          .from("clients")
          .update({ ...payload, updated_at: new Date().toISOString() } as never)
          .eq("id", client.id)
          .select()
          .single();
        if (error) throw error;
        onSave(data as Client);
      } else {
        const { data, error } = await supabase
          .from("clients")
          .insert(payload as never)
          .select()
          .single();
        if (error) throw error;
        onSave(data as Client);
      }
    } catch (e) {
      alert("خطأ في الحفظ: " + (e as Error).message);
    } finally {
      setSaving(false);
    }
  };

  const inputCls =
    "w-full rounded-xl border border-[#d7aa52]/25 bg-[#04101f] px-4 py-3 text-sm text-white outline-none focus:border-[#d7aa52]/60";
  const labelCls = "block text-xs font-bold text-[var(--fg-soft)] mb-1.5";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="w-full max-w-3xl my-8 rounded-2xl border border-[#d7aa52]/25 bg-[#08111f] p-6 space-y-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-black text-[#f3d28a]">
            {isEdit ? "تعديل بيانات العميل" : "إضافة عميل جديد"}
          </h2>
          <button onClick={onClose} className="text-[var(--fg-soft)] hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Personal */}
        <section className="space-y-3">
          <h3 className="flex items-center gap-2 text-sm font-extrabold text-[#f3d28a]">
            <User className="w-4 h-4" /> البيانات الشخصية
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>الاسم الكامل *</label>
              <input
                value={form.full_name}
                onChange={(e) => setField("full_name", e.target.value)}
                className={inputCls}
              />
            </div>
            <div>
              <label className={labelCls}>رقم الجوال *</label>
              <input
                value={form.phone}
                onChange={(e) => setField("phone", e.target.value)}
                placeholder="05xxxxxxxx"
                className={inputCls}
              />
            </div>
            <div>
              <label className={labelCls}>البريد الإلكتروني</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setField("email", e.target.value)}
                placeholder="name@company.com"
                className={inputCls}
              />
            </div>
            <div>
              <label className={labelCls}>رقم الهوية</label>
              <input
                value={form.national_id}
                onChange={(e) => setField("national_id", e.target.value)}
                className={inputCls}
              />
            </div>
          </div>
        </section>

        {/* Establishment */}
        <section className="space-y-3">
          <h3 className="flex items-center gap-2 text-sm font-extrabold text-[#f3d28a]">
            <Building2 className="w-4 h-4" /> بيانات المنشأة
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>اسم المنشأة</label>
              <input
                value={form.company_name}
                onChange={(e) => setField("company_name", e.target.value)}
                className={inputCls}
              />
            </div>
            <div>
              <label className={labelCls}>السجل التجاري</label>
              <input
                value={form.commercial_register}
                onChange={(e) => setField("commercial_register", e.target.value)}
                className={inputCls}
              />
            </div>
            <div>
              <label className={labelCls}>الرقم الضريبي</label>
              <input
                value={form.tax_number}
                onChange={(e) => setField("tax_number", e.target.value)}
                className={inputCls}
              />
            </div>
            <div>
              <label className={labelCls}>نوع النشاط</label>
              <div className="relative">
                <select
                  value={form.business_type}
                  onChange={(e) => setField("business_type", e.target.value)}
                  className={inputCls + " appearance-none pl-10"}
                >
                  <option value="">— اختر —</option>
                  {Object.entries(BUSINESS_TYPES).map(([val, lbl]) => (
                    <option key={val} value={val} className="bg-[#04101f]">
                      {lbl.ar}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-3 w-4 h-4 text-[#f3d28a]/50" />
              </div>
            </div>
            <div>
              <label className={labelCls}>المدينة</label>
              <input
                value={form.city}
                onChange={(e) => setField("city", e.target.value)}
                className={inputCls}
              />
            </div>
            <div>
              <label className={labelCls}>الحالة</label>
              <div className="relative">
                <select
                  value={form.status}
                  onChange={(e) => setField("status", e.target.value as ClientStatus)}
                  className={inputCls + " appearance-none pl-10"}
                >
                  <option value="active" className="bg-[#04101f]">
                    نشط
                  </option>
                  <option value="inactive" className="bg-[#04101f]">
                    غير نشط
                  </option>
                  <option value="pending" className="bg-[#04101f]">
                    معلق
                  </option>
                </select>
                <ChevronDown className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-3 w-4 h-4 text-[#f3d28a]/50" />
              </div>
            </div>
          </div>
        </section>

        {/* Tax */}
        <section className="space-y-3">
          <h3 className="flex items-center gap-2 text-sm font-extrabold text-[#f3d28a]">
            <ReceiptText className="w-4 h-4" /> الضرائب والزكاة
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <label className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 cursor-pointer">
              <input
                type="checkbox"
                checked={form.vat_registered}
                onChange={(e) => setField("vat_registered", e.target.checked)}
                className="w-4 h-4 accent-[#d7aa52]"
              />
              <div>
                <div className="text-sm font-bold text-white">مسجل في VAT</div>
                <div className="text-[10px] text-[var(--fg-soft)]">ضريبة القيمة المضافة</div>
              </div>
            </label>
            <label className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 cursor-pointer">
              <input
                type="checkbox"
                checked={form.zakat_registered}
                onChange={(e) => setField("zakat_registered", e.target.checked)}
                className="w-4 h-4 accent-[#d7aa52]"
              />
              <div>
                <div className="text-sm font-bold text-white">مسجل في الزكاة</div>
                <div className="text-[10px] text-[var(--fg-soft)]">الإقرار الزكوي السنوي</div>
              </div>
            </label>
            {form.vat_registered && (
              <div>
                <label className={labelCls}>دورة VAT</label>
                <div className="relative">
                  <select
                    value={form.vat_quarter}
                    onChange={(e) => setField("vat_quarter", e.target.value as "monthly" | "quarterly")}
                    className={inputCls + " appearance-none pl-10"}
                  >
                    <option value="quarterly" className="bg-[#04101f]">
                      ربع سنوي
                    </option>
                    <option value="monthly" className="bg-[#04101f]">
                      شهري
                    </option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-3 w-4 h-4 text-[#f3d28a]/50" />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Notes */}
        <div>
          <label className={labelCls}>ملاحظات</label>
          <textarea
            value={form.notes}
            onChange={(e) => setField("notes", e.target.value)}
            rows={3}
            placeholder="أي ملاحظات إضافية عن العميل..."
            className={inputCls + " resize-none"}
          />
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={save}
            disabled={saving || !form.full_name || !form.phone}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#f3d28a] to-[#b8862e] py-3 text-sm font-black text-[#04101f] hover:scale-105 transition-transform disabled:opacity-60 disabled:hover:scale-100"
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {isEdit ? "حفظ التعديلات" : "إضافة العميل"}
          </button>
          <button
            onClick={onClose}
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-[var(--fg-soft)] hover:bg-white/5 transition"
          >
            إلغاء
          </button>
        </div>
      </div>
    </div>
  );
}
