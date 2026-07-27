import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Search, Plus, Pencil, Trash2, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import type { Client } from "./types";
import { ClientForm } from "./ClientForm";
import { ClientDetail } from "./ClientDetail";
import { useClients, useDeleteClient } from "./queries";
import { EmojiStatTile } from "@/components/StatTile";

export function ClientsList() {
  const queryClient = useQueryClient();
  const { data: clientsData, isLoading: loading, isError } = useClients();
  const clients = clientsData ?? [];
  const deleteClientMutation = useDeleteClient();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "inactive" | "pending">(
    "all",
  );
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
          { label: "إجمالي العملاء", value: stats.total, icon: "👥", valueColor: "text-white" },
          { label: "نشطون", value: stats.active, icon: "✅", valueColor: "text-emerald-400" },
          { label: "مسجلون VAT", value: stats.vat, icon: "🧾", valueColor: "text-amber-400" },
          { label: "مسجلون زكاة", value: stats.zakat, icon: "🕌", valueColor: "text-violet-400" },
        ].map((s) => (
          <EmojiStatTile
            key={s.label}
            label={s.label}
            value={s.value}
            icon={s.icon}
            valueColor={s.valueColor}
          />
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
            className="w-full rounded-full border border-[#A88765]/25 bg-white/[0.04] py-2.5 text-sm text-[#FCFBF9] outline-none focus:border-[#A88765]/60 pr-10 pl-4"
          />
        </div>

        <div className="flex gap-1.5 flex-wrap">
          {(["all", "active", "inactive", "pending"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${
                statusFilter === s
                  ? "border-[#A88765] bg-[#A88765]/15 text-[#c9a986]"
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
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#c2a079] to-[#7c6045] px-4 py-2.5 text-xs font-black text-[#1C1B19] hover:scale-105 transition-transform whitespace-nowrap"
        >
          <Plus className="w-4 h-4" />
          إضافة عميل
        </button>
      </div>

      {/* Table */}
      <div className="rounded-2xl border border-[#A88765]/20 bg-[#FCFBF9] overflow-x-auto">
        <table className="w-full text-sm min-w-[720px]">
          <thead className="bg-[#F5F1EB] text-[#6B6259] text-[11px]">
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
                className="border-t border-[#A88765]/10 hover:bg-[#A88765]/[0.06] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#A88765]/50"
              >
                <td className="p-3">
                  <div className="font-bold text-[#1C1B19]">{client.full_name}</div>
                  {client.email && <div className="text-[11px] text-[#6B6259]">{client.email}</div>}
                </td>
                <td className="p-3">
                  <a
                    href={`https://wa.me/966${client.phone.replace(/^0/, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-700 hover:bg-emerald-500/20 transition"
                  >
                    <MessageCircle className="w-3 h-3" />
                    {client.phone}
                  </a>
                </td>
                <td className="p-3 text-[#6B6259]">{client.company_name || "—"}</td>
                <td className="p-3 text-[#6B6259] font-mono text-xs">{client.tax_number || "—"}</td>
                <td className="p-3">
                  <span
                    className={`text-[10px] font-bold rounded-full px-2 py-0.5 ${
                      client.status === "active"
                        ? "bg-emerald-500/15 text-emerald-700"
                        : client.status === "pending"
                          ? "bg-amber-500/15 text-amber-700"
                          : "bg-[#A88765]/10 text-[#6B6259]"
                    }`}
                  >
                    {{ active: "نشط", inactive: "غير نشط", pending: "معلق" }[client.status]}
                  </span>
                </td>
                <td className="p-3">
                  {client.vat_registered ? (
                    <span className="text-amber-700 text-xs font-bold">✓ مسجل</span>
                  ) : (
                    <span className="text-[#8a8078] text-xs">—</span>
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
                      className="text-[#6B6259] hover:text-[#7c6045] transition"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteClient(client.id);
                      }}
                      className="text-[#6B6259] hover:text-red-600 transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {loading && <div className="p-12 text-center text-[#6B6259] text-sm">جاري التحميل...</div>}
        {isError && (
          <div className="p-12 text-center text-sm text-red-600">
            تعذّر تحميل قائمة العملاء. حاول تحديث الصفحة.
          </div>
        )}
        {!loading && !isError && filtered.length === 0 && (
          <div className="p-12 text-center text-[#6B6259] text-sm">لا يوجد عملاء مطابقون</div>
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
