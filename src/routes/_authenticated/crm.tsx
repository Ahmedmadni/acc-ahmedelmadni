import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Users, MessageCircle, BarChart3, type LucideIcon } from "lucide-react";
import { ClientsList } from "@/features/crm/ClientsList";
import { WhatsAppMessenger } from "@/features/crm/WhatsAppMessenger";
import { CrmStats } from "@/features/crm/CrmStats";

export const Route = createFileRoute("/_authenticated/crm")({
  head: () => ({
    meta: [
      { title: "إدارة علاقات العملاء | CRM" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: CrmPage,
});

type Tab = "clients" | "messages" | "stats";

function CrmPage() {
  const [tab, setTab] = useState<Tab>("clients");

  const TABS: { id: Tab; label: string; icon: LucideIcon }[] = [
    { id: "clients", label: "العملاء", icon: Users },
    { id: "messages", label: "إرسال رسائل", icon: MessageCircle },
    { id: "stats", label: "الإحصائيات", icon: BarChart3 },
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-[#04101f] text-white pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-black text-[#f3d28a]">إدارة علاقات العملاء</h1>
          <p className="text-sm text-[var(--fg-soft)] mt-1">
            CRM · عملاء المكتب المحاسبي والتذكيرات الضريبية
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-white/10 pb-2 overflow-x-auto">
          {TABS.map((t) => {
            const Icon = t.icon;
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold whitespace-nowrap transition ${
                  active
                    ? "bg-gradient-to-br from-[#f3d28a] to-[#b8862e] text-[#04101f]"
                    : "text-[var(--fg-soft)] hover:bg-white/5"
                }`}
              >
                <Icon className="w-4 h-4" />
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        {tab === "clients" && <ClientsList />}
        {tab === "messages" && <WhatsAppMessenger />}
        {tab === "stats" && <CrmStats />}
      </div>
    </div>
  );
}
