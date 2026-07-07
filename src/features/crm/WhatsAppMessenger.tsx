import { useState } from "react";
import { MessageCircle, ChevronDown } from "lucide-react";
import type { Client } from "./types";
import { useClients, useLogWhatsAppMessages, useRecentWhatsAppLog } from "./queries";

const VAT_TEMPLATES = [
  {
    id: "vat_q1",
    label: "تذكير VAT — الربع الأول (أبريل)",
    message: (name: string, company: string) =>
`السلام عليكم ${name} 👋

تذكير ودي من أحمد المدني 📋

موعد تقديم إقرار ضريبة القيمة المضافة (VAT) للربع الأول من العام يقترب.

${company ? `📌 المنشأة: ${company}` : ""}
📅 آخر موعد للتقديم: 30 أبريل

يسعدني مساعدتك في إعداد وتقديم الإقرار بدقة وفي الوقت المحدد.

للتواصل والاستفسار 👇
أحمد المدني | محاسب أول
☎️ 0560409811`,
  },
  {
    id: "vat_q2",
    label: "تذكير VAT — الربع الثاني (يوليو)",
    message: (name: string, company: string) =>
`السلام عليكم ${name} 👋

تذكير ودي من أحمد المدني 📋

موعد تقديم إقرار ضريبة القيمة المضافة (VAT) للربع الثاني من العام يقترب.

${company ? `📌 المنشأة: ${company}` : ""}
📅 آخر موعد للتقديم: 31 يوليو

يسعدني مساعدتك في إعداد وتقديم الإقرار بدقة واحترافية.

للتواصل والاستفسار 👇
أحمد المدني | محاسب أول
☎️ 0560409811`,
  },
  {
    id: "vat_q3",
    label: "تذكير VAT — الربع الثالث (أكتوبر)",
    message: (name: string, company: string) =>
`السلام عليكم ${name} 👋

تذكير ودي من أحمد المدني 📋

موعد تقديم إقرار ضريبة القيمة المضافة (VAT) للربع الثالث من العام يقترب.

${company ? `📌 المنشأة: ${company}` : ""}
📅 آخر موعد للتقديم: 31 أكتوبر

يسعدني مساعدتك في إعداد وتقديم الإقرار بدقة واحترافية.

للتواصل والاستفسار 👇
أحمد المدني | محاسب أول
☎️ 0560409811`,
  },
  {
    id: "vat_q4",
    label: "تذكير VAT — الربع الرابع (يناير)",
    message: (name: string, company: string) =>
`السلام عليكم ${name} 👋

تذكير ودي من أحمد المدني 📋

موعد تقديم إقرار ضريبة القيمة المضافة (VAT) للربع الرابع من العام الماضي يقترب.

${company ? `📌 المنشأة: ${company}` : ""}
📅 آخر موعد للتقديم: 31 يناير

يسعدني مساعدتك في إعداد وتقديم الإقرار بدقة واحترافية.

للتواصل والاستفسار 👇
أحمد المدني | محاسب أول
☎️ 0560409811`,
  },
  {
    id: "zakat",
    label: "تذكير الزكاة — السنوي",
    message: (name: string, company: string) =>
`السلام عليكم ${name} 👋

تذكير ودي من أحمد المدني 📋

موعد تقديم الإقرار الزكوي السنوي يقترب.

${company ? `📌 المنشأة: ${company}` : ""}

يسعدني مساعدتك في حساب وعاء الزكاة وإعداد وتقديم الإقرار بدقة وفي الوقت المحدد.

للتواصل والاستفسار 👇
أحمد المدني | محاسب أول
☎️ 0560409811`,
  },
  { id: "custom", label: "رسالة مخصصة", message: (_n: string, _c: string) => "" },
];

export function WhatsAppMessenger() {
  const { data: allClients, isLoading, isError } = useClients();
  const clients = (allClients ?? [])
    .filter((c) => c.status === "active")
    .sort((a, b) => a.full_name.localeCompare(b.full_name, "ar"));
  const logMessages = useLogWhatsAppMessages();
  const [selectedClients, setSelectedClients] = useState<string[]>([]);
  const [templateId, setTemplateId] = useState("vat_q4");
  const [customMessage, setCustomMessage] = useState("");
  const [filterVat, setFilterVat] = useState(false);

  const displayedClients = filterVat ? clients.filter((c) => c.vat_registered) : clients;
  const toggleClient = (id: string) =>
    setSelectedClients((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  const selectAll = () => setSelectedClients(displayedClients.map((c) => c.id));
  const clearAll = () => setSelectedClients([]);

  const template = VAT_TEMPLATES.find((t) => t.id === templateId);
  const getMessageForClient = (client: Client) => {
    if (templateId === "custom") return customMessage;
    return template?.message(client.full_name, client.company_name || "") || "";
  };

  const openWhatsApp = (client: Client) => {
    const msg = encodeURIComponent(getMessageForClient(client));
    const phone = "966" + client.phone.replace(/^0/, "");
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
  };

  const sendToAll = () => {
    for (let i = 0; i < selectedClients.length; i++) {
      const client = clients.find((c) => c.id === selectedClients[i]);
      if (!client) continue;
      setTimeout(() => openWhatsApp(client), i * 1500);
    }
    const logs = selectedClients.map((clientId) => {
      const client = clients.find((c) => c.id === clientId);
      return {
        client_id: clientId,
        message: client ? getMessageForClient(client) : "",
        message_type: templateId,
      };
    });
    if (logs.length) logMessages.mutate(logs);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* LEFT */}
      <div className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="text-sm font-extrabold text-[#f3d28a]">اختر المستلمين</h3>
          <div className="flex gap-2 items-center">
            <button
              onClick={() => setFilterVat((p) => !p)}
              className={`rounded-full border px-3 py-1 text-xs font-bold transition ${
                filterVat
                  ? "border-amber-400 bg-amber-400/15 text-amber-300"
                  : "border-white/10 text-[var(--fg-soft)]"
              }`}
            >
              🧾 VAT فقط
            </button>
            <button onClick={selectAll} className="text-xs text-[#f3d28a] hover:underline">
              تحديد الكل
            </button>
            <button onClick={clearAll} className="text-xs text-[var(--fg-soft)] hover:underline">
              إلغاء
            </button>
          </div>
        </div>

        <div className="text-xs text-[var(--fg-soft)]">
          {selectedClients.length} عميل محدد من {displayedClients.length}
        </div>

        <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
          {displayedClients.map((client) => (
            <label
              key={client.id}
              className={`flex items-center gap-3 rounded-xl border p-3 cursor-pointer transition ${
                selectedClients.includes(client.id)
                  ? "border-emerald-400/50 bg-emerald-400/10"
                  : "border-white/10 bg-white/[0.03] hover:border-white/20"
              }`}
            >
              <input
                type="checkbox"
                checked={selectedClients.includes(client.id)}
                onChange={() => toggleClient(client.id)}
                className="w-4 h-4 accent-[#d7aa52]"
              />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-white truncate">{client.full_name}</div>
                <div className="text-xs text-[var(--fg-soft)] truncate">
                  {client.phone}
                  {client.company_name && ` · ${client.company_name}`}
                </div>
              </div>
              {client.vat_registered && (
                <span className="text-[10px] text-amber-300 font-bold">VAT</span>
              )}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  openWhatsApp(client);
                }}
                className="text-emerald-400 hover:text-emerald-300 transition"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
            </label>
          ))}
          {isLoading && (
            <div className="text-center text-xs text-[var(--fg-soft)] py-6">جاري التحميل...</div>
          )}
          {isError && (
            <div className="text-center text-xs text-red-300 py-6">تعذّر تحميل قائمة العملاء.</div>
          )}
          {!isLoading && !isError && displayedClients.length === 0 && (
            <div className="text-center text-xs text-[var(--fg-soft)] py-6">
              لا يوجد عملاء نشطون
            </div>
          )}
        </div>
      </div>

      {/* RIGHT */}
      <div className="space-y-4">
        <h3 className="text-sm font-extrabold text-[#f3d28a]">الرسالة</h3>

        <div className="relative">
          <select
            value={templateId}
            onChange={(e) => setTemplateId(e.target.value)}
            className="w-full appearance-none rounded-xl border border-[#d7aa52]/25 bg-[#04101f] px-4 py-3 text-sm text-[#f3d28a] outline-none focus:border-[#d7aa52]/60 pl-10"
          >
            {VAT_TEMPLATES.map((t) => (
              <option key={t.id} value={t.id} className="bg-[#04101f] text-white">
                {t.label}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-3 w-4 h-4 text-[#f3d28a]/50" />
        </div>

        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
          <div className="text-[10px] font-bold text-emerald-300 mb-2">
            معاينة الرسالة
            {selectedClients.length > 0 && (
              <span className="mr-2 text-[var(--fg-soft)]">
                (للعميل: {clients.find((c) => c.id === selectedClients[0])?.full_name || "..."})
              </span>
            )}
          </div>
          {templateId === "custom" ? (
            <textarea
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              rows={10}
              placeholder="اكتب رسالتك المخصصة هنا..."
              className="w-full bg-transparent text-sm text-white outline-none resize-none placeholder:text-white/30"
            />
          ) : (
            <pre className="text-xs text-white/80 leading-relaxed whitespace-pre-wrap font-sans">
              {selectedClients.length > 0
                ? getMessageForClient(clients.find((c) => c.id === selectedClients[0])!)
                : template?.message("اسم العميل", "اسم المنشأة") || ""}
            </pre>
          )}
        </div>

        <div className="space-y-2">
          <button
            onClick={sendToAll}
            disabled={selectedClients.length === 0}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] py-3 text-sm font-black text-white hover:scale-105 transition-transform disabled:opacity-40 disabled:hover:scale-100 shadow-lg shadow-emerald-500/20"
          >
            <MessageCircle className="w-4 h-4" />
            إرسال لـ {selectedClients.length} عميل عبر واتساب
          </button>
          <p className="text-[10px] text-center text-[var(--fg-soft)]">
            سيتم فتح واتساب لكل عميل تلقائياً — تأكد من الإرسال في كل نافذة
          </p>
        </div>

        <RecentWhatsAppLog />
      </div>
    </div>
  );
}

function RecentWhatsAppLog() {
  const { data: logs } = useRecentWhatsAppLog();

  if (!logs?.length) return null;
  return (
    <div>
      <div className="text-xs font-bold text-[var(--fg-soft)] mb-2">آخر الرسائل المرسلة</div>
      <div className="space-y-2">
        {logs.map((log) => (
          <div
            key={log.id}
            className="flex items-center justify-between rounded-lg bg-white/[0.03] px-3 py-2"
          >
            <span className="text-xs text-white">{log.clients?.full_name || "—"}</span>
            <span className="text-[10px] text-[var(--fg-soft)]">
              {new Date(log.sent_at).toLocaleDateString("ar-SA")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
