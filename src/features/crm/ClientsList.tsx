import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Search, Plus, Pencil, Trash2, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import type { Client } from "./types";
import { ClientForm } from "./ClientForm";
import { ClientDetail } from "./ClientDetail";
import { useClients, useDeleteClient } from "./queries";

export function ClientsList() {
  const queryClient = useQueryClient();
  const { data: clientsData, isLoading: loading, isError } = useClients();
  const clients = clientsData ?? [];
  const deleteClientMutation = useDeleteClient();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "inactive" | "pending">("all");
  const [selected, setSelected] = useState<Client | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editClient, setEditClient] = useState<Client | null>(null);

  const deleteClient = (id: string) => {
    if (!confirm("هل أنت متأكد من حذف هذا العميل؟")) return;
    deleteClientMutation.mutate(id, {
      onError: (e) => toast.error("خطأ في الحذف: " + (e as Error).message),
    });
  };

  const filtered = clients.filter((c) => {
    const matchStatus = statusFilter === "all" || c.status === statusFilter;
    const term = search.toLowerCase();
    const matchSearch =
      !term ||
      c.full_name.toLowerCase().includes(term) ||
      c.phone.includes(term) ||
      c.company_name?.toLowerCase().includes(term) ||
      c.tax_number?.includes(term);
    return matchStatus && matchSearch;
  });

  const stats = {
    total: clients.length,
    active: clients.filter((c) => c.status === "active").length,
    vat: clients.filter((c) => c.vat_registered).length,
    zakat: clients.filter((c) => c.zakat_registered).length,
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "إجمالي العملاء", value: stats.total, icon: "👥", color: "text-white" },
          { label: "نشطون", value: stats.active, icon: "✅", color: "text-emerald-400" },
          { label: "مسجلون VAT", value: stats.vat, icon: "🧾", color: "text-amber-400" },
          { label: "مسجلون زكاة", value: stats.zakat, icon: "🕌", color: "text-violet-400" },
        ].map((s, i) => (
          <div key={i} className="rounded-2xl border border-[#d7aa52]/20 bg-white/[0.04] p-4">
            <div className="text-2xl">{s.icon}</div>
            <div className={`text-2xl font-black mt-1 ${s.color}`}>{s.value}</div>
            <div className="text-[11px] text-[var(--fg-soft)] mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Search + Filter + Add */}
      <div className="flex flex-col md:flex-row gap-3 md:items-center">
        <div className="flex-1 relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--fg-soft)]" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="ابحث باسم العميل أو الهاتف أو الرقم الضريبي..."
            className="w-full rounded-full border border-[#d7aa52]/25 bg-white/[0.04] py-2.5 text-sm text-white outline-none focus:border-[#d7aa52]/60 pr-10 pl-4"
          />
        </div>

        <div className="flex gap-1.5 flex-wrap">
          {(["all", "active", "inactive", "pending"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${
                statusFilter === s
                  ? "border-[#d7aa52] bg-[#d7aa52]/15 text-[#f3d28a]"
                  : "border-white/10 text-[var(--fg-soft)] hover:bg-white/5"
              }`}
            >
              {{ all: "الكل", active: "نشط", inactive: "غير نشط", pending: "معلق" }[s]}
            </button>
          ))}
        </div>

        <button
          onClick={() => {
            setEditClient(null);
            setShowForm(true);
          }}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#f3d28a] to-[#b8862e] px-4 py-2.5 text-xs font-black text-[#04101f] hover:scale-105 transition-transform whitespace-nowrap"
        >
          <Plus className="w-4 h-4" />
          إضافة عميل
        </button>
      </div>

      {/* Table */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-x-auto">
        <table className="w-full text-sm min-w-[720px]">
          <thead className="bg-white/[0.03] text-[var(--fg-soft)] text-[11px]">
            <tr>
              <th className="text-right p-3 font-bold">العميل</th>
              <th className="text-right p-3 font-bold">الهاتف</th>
              <th className="text-right p-3 font-bold">المنشأة</th>
              <th className="text-right p-3 font-bold">الرقم الضريبي</th>
              <th className="text-right p-3 font-bold">الحالة</th>
              <th className="text-right p-3 font-bold">VAT</th>
              <th className="text-right p-3 font-bold">إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((client) => (
              <tr
                key={client.id}
                onClick={() => setSelected(client)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelected(client);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`عرض تفاصيل ${client.full_name}`}
                className="border-t border-white/5 hover:bg-white/[0.03] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#d7aa52]/50"
              >
                <td className="p-3">
                  <div className="font-bold text-white">{client.full_name}</div>
                  {client.email && (
                    <div className="text-[11px] text-[var(--fg-soft)]">{client.email}</div>
                  )}
                </td>
                <td className="p-3">
                  <a
                    href={`https://wa.me/966${client.phone.replace(/^0/, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-300 hover:bg-emerald-500/20 transition"
                  >
                    <MessageCircle className="w-3 h-3" />
                    {client.phone}
                  </a>
                </td>
                <td className="p-3 text-[var(--fg-soft)]">{client.company_name || "—"}</td>
                <td className="p-3 text-[var(--fg-soft)] font-mono text-xs">{client.tax_number || "—"}</td>
                <td className="p-3">
                  <span
                    className={`text-[10px] font-bold rounded-full px-2 py-0.5 ${
                      client.status === "active"
                        ? "bg-emerald-500/15 text-emerald-300"
                        : client.status === "pending"
                        ? "bg-amber-500/15 text-amber-300"
                        : "bg-white/10 text-[var(--fg-soft)]"
                    }`}
                  >
                    {{ active: "نشط", inactive: "غير نشط", pending: "معلق" }[client.status]}
                  </span>
                </td>
                <td className="p-3">
                  {client.vat_registered ? (
                    <span className="text-amber-300 text-xs font-bold">✓ مسجل</span>
                  ) : (
                    <span className="text-[var(--fg-soft)] text-xs">—</span>
                  )}
                </td>
                <td className="p-3">
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setEditClient(client);
                        setShowForm(true);
                      }}
                      className="text-[var(--fg-soft)] hover:text-[#f3d28a] transition"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteClient(client.id);
                      }}
                      className="text-[var(--fg-soft)] hover:text-red-400 transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {loading && (
          <div className="p-12 text-center text-[var(--fg-soft)] text-sm">جاري التحميل...</div>
        )}
        {isError && (
          <div className="p-12 text-center text-sm text-red-300">
            تعذّر تحميل قائمة العملاء. حاول تحديث الصفحة.
          </div>
        )}
        {!loading && !isError && filtered.length === 0 && (
          <div className="p-12 text-center text-[var(--fg-soft)] text-sm">
            لا يوجد عملاء مطابقون
          </div>
        )}
      </div>

      {selected && (
        <ClientDetail
          client={selected}
          onClose={() => setSelected(null)}
          onEdit={() => {
            setEditClient(selected);
            setSelected(null);
            setShowForm(true);
          }}
        />
      )}

      {showForm && (
        <ClientForm
          client={editClient}
          onClose={() => setShowForm(false)}
          onSave={() => {
            queryClient.invalidateQueries({ queryKey: ["crm-clients"] });
            setShowForm(false);
          }}
        />
      )}
    </div>
  );
}
