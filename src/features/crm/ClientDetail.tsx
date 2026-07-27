import { X, Phone, Mail, Building2, ReceiptText, Pencil, MessageCircle } from "lucide-react";
import type { Client } from "./types";
import { BUSINESS_TYPES } from "./types";

type Props = {
  client: Client;
  onClose: () => void;
  onEdit: () => void;
};

export function ClientDetail({ client, onClose, onEdit }: Props) {
  const waPhone = "966" + client.phone.replace(/^0/, "");
  const Row = ({
    icon,
    label,
    value,
  }: {
    icon: React.ReactNode;
    label: string;
    value: React.ReactNode;
  }) =>
    value ? (
      <div className="flex items-start gap-3 py-2 border-b border-[#A88765]/10">
        <div className="text-[#A88765] mt-0.5">{icon}</div>
        <div className="flex-1">
          <div className="text-[10px] text-[#8a8078]">{label}</div>
          <div className="text-sm text-[#1C1B19] font-medium">{value}</div>
        </div>
      </div>
    ) : null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg rounded-2xl border border-[#A88765]/25 bg-[#FCFBF9] p-6 space-y-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-display text-lg font-black text-[#1C1B19]">{client.full_name}</h2>
            {client.company_name && (
              <p className="text-xs text-[#6B6259] mt-1">{client.company_name}</p>
            )}
          </div>
          <button onClick={onClose} className="text-[#6B6259] hover:text-[#1C1B19]">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="rounded-xl border border-[#A88765]/15 bg-[#F5F1EB] p-4">
          <Row icon={<Phone className="w-4 h-4" />} label="الجوال" value={client.phone} />
          <Row icon={<Mail className="w-4 h-4" />} label="البريد" value={client.email} />
          <Row
            icon={<Building2 className="w-4 h-4" />}
            label="نوع النشاط"
            value={
              client.business_type
                ? BUSINESS_TYPES[client.business_type as keyof typeof BUSINESS_TYPES]?.ar
                : null
            }
          />
          <Row
            icon={<ReceiptText className="w-4 h-4" />}
            label="الرقم الضريبي"
            value={client.tax_number}
          />
          <Row
            icon={<ReceiptText className="w-4 h-4" />}
            label="السجل التجاري"
            value={client.commercial_register}
          />
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          <div
            className={`rounded-lg p-2 text-center border ${client.vat_registered ? "border-amber-500/40 bg-amber-500/10 text-amber-700" : "border-[#A88765]/15 text-[#8a8078]"}`}
          >
            {client.vat_registered ? "✓ مسجل VAT" : "غير مسجل VAT"}
          </div>
          <div
            className={`rounded-lg p-2 text-center border ${client.zakat_registered ? "border-violet-500/40 bg-violet-500/10 text-violet-700" : "border-[#A88765]/15 text-[#8a8078]"}`}
          >
            {client.zakat_registered ? "✓ مسجل زكاة" : "غير مسجل زكاة"}
          </div>
        </div>

        {client.notes && (
          <div className="rounded-xl border border-[#A88765]/15 bg-[#F5F1EB] p-3">
            <div className="text-[10px] text-[#8a8078] mb-1">ملاحظات</div>
            <p className="text-sm text-[#2e2a25] whitespace-pre-wrap">{client.notes}</p>
          </div>
        )}

        <div className="flex gap-2">
          <a
            href={`https://wa.me/${waPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] py-2.5 text-sm font-black text-white hover:scale-105 transition-transform"
          >
            <MessageCircle className="w-4 h-4" /> واتساب
          </a>
          <button
            onClick={onEdit}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#c2a079] to-[#7c6045] py-2.5 text-sm font-black text-[#1C1B19] hover:scale-105 transition-transform"
          >
            <Pencil className="w-4 h-4" /> تعديل
          </button>
        </div>
      </div>
    </div>
  );
}
