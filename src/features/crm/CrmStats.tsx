import { BUSINESS_TYPES } from "./types";
import { useClients, useWhatsAppMessageCount } from "./queries";
import { EmojiStatTile } from "@/components/StatTile";

export function CrmStats() {
  const { data: clientsData, isLoading, isError } = useClients();
  const clients = clientsData ?? [];
  const { data: msgCount = 0 } = useWhatsAppMessageCount();

  if (isLoading) {
    return <div className="text-center text-sm text-[var(--fg-soft)] py-12">جاري التحميل...</div>;
  }
  if (isError) {
    return <div className="text-center text-sm text-red-300 py-12">تعذّر تحميل الإحصائيات.</div>;
  }

  const byStatus = {
    active: clients.filter((c) => c.status === "active").length,
    inactive: clients.filter((c) => c.status === "inactive").length,
    pending: clients.filter((c) => c.status === "pending").length,
  };

  const byBusiness = Object.keys(BUSINESS_TYPES).map((k) => ({
    key: k,
    label: BUSINESS_TYPES[k as keyof typeof BUSINESS_TYPES].ar,
    count: clients.filter((c) => c.business_type === k).length,
  }));

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <EmojiStatTile label="إجمالي العملاء" value={clients.length} icon="👥" />
        <EmojiStatTile label="نشطون" value={byStatus.active} icon="✅" valueColor="text-emerald-400" />
        <EmojiStatTile label="مسجلون VAT" value={clients.filter((c) => c.vat_registered).length} icon="🧾" valueColor="text-amber-400" />
        <EmojiStatTile label="رسائل مرسلة" value={msgCount} icon="💬" valueColor="text-emerald-400" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <h3 className="text-sm font-extrabold text-[#f3d28a] mb-4">توزيع الحالة</h3>
          <div className="space-y-2">
            <Bar label="نشط" value={byStatus.active} total={clients.length} color="bg-emerald-500" />
            <Bar label="معلق" value={byStatus.pending} total={clients.length} color="bg-amber-500" />
            <Bar label="غير نشط" value={byStatus.inactive} total={clients.length} color="bg-white/30" />
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <h3 className="text-sm font-extrabold text-[#f3d28a] mb-4">حسب نوع النشاط</h3>
          <div className="space-y-2">
            {byBusiness.map((b) => (
              <Bar
                key={b.key}
                label={b.label}
                value={b.count}
                total={clients.length}
                color="bg-[#d7aa52]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Bar({
  label,
  value,
  total,
  color,
}: {
  label: string;
  value: number;
  total: number;
  color: string;
}) {
  const pct = total > 0 ? (value / total) * 100 : 0;
  return (
    <div>
      <div className="flex justify-between text-xs text-[var(--fg-soft)] mb-1">
        <span>{label}</span>
        <span className="text-white font-bold">{value}</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <div className={`h-full ${color} transition-all`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
