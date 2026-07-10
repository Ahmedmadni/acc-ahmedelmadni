import { CheckCircle2, Plus, Trash2, XCircle } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { fmtMoney } from "@/lib/finance";
import { useShareState } from "@/lib/use-share";
import { SectionCard } from "@/components/tools/official/OfficialFormShell";

const fieldCls =
  "w-full rounded-lg border border-[#d7aa52]/25 bg-white/[0.03] px-3 py-2 text-sm text-[var(--fg)] outline-none transition focus:border-[#d7aa52]/70 focus:ring-2 focus:ring-[#d7aa52]/20";
const lbl = "mb-1 block text-xs font-bold text-[#f3d28a]";

interface ReconLine {
  id: string;
  label: string;
  amount: number;
}

const uid = () => Math.random().toString(36).slice(2, 9);

const sumLines = (lines: ReconLine[]) => lines.reduce((s, l) => s + l.amount, 0);

function LineListEditor({
  lines,
  onChange,
  addLabel,
  labelHeader,
  amountHeader,
}: {
  lines: ReconLine[];
  onChange: (updater: (lines: ReconLine[]) => ReconLine[]) => void;
  addLabel: string;
  labelHeader: string;
  amountHeader: string;
}) {
  const update = (id: string, patch: Partial<ReconLine>) =>
    onChange((ls) => ls.map((l) => (l.id === id ? { ...l, ...patch } : l)));
  const remove = (id: string) => onChange((ls) => ls.filter((l) => l.id !== id));
  const add = () => onChange((ls) => [...ls, { id: uid(), label: "", amount: 0 }]);

  return (
    <div className="space-y-2">
      <div className="hidden gap-2 px-1 text-[11px] font-bold text-[#f3d28a]/80 sm:grid sm:grid-cols-[1fr_160px_32px]">
        <span>{labelHeader}</span>
        <span>{amountHeader}</span>
        <span />
      </div>
      {lines.map((l) => (
        <div key={l.id} className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_160px_32px]">
          <input
            type="text"
            className={fieldCls}
            value={l.label}
            onChange={(e) => update(l.id, { label: e.target.value })}
          />
          <input
            type="number"
            className={fieldCls}
            value={l.amount}
            onChange={(e) => update(l.id, { amount: +e.target.value || 0 })}
          />
          <button
            type="button"
            onClick={() => remove(l.id)}
            className="grid place-items-center rounded-lg border border-red-500/30 bg-red-500/10 text-red-200 transition hover:bg-red-500/20"
            aria-label="remove"
          >
            <Trash2 className="size-3.5" />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={add}
        className="inline-flex items-center gap-1 rounded-lg border border-[#d7aa52]/40 bg-[#d7aa52]/10 px-2.5 py-1 text-xs font-bold text-[#f3d28a] transition hover:bg-[#d7aa52]/20"
      >
        <Plus className="size-3.5" />
        {addLabel}
      </button>
    </div>
  );
}

const DEFAULT_BANK_ADJUSTMENTS: ReconLine[] = [
  { id: "b1", label: "", amount: 0 },
  { id: "b2", label: "", amount: 0 },
];
const DEFAULT_BOOK_ADJUSTMENTS: ReconLine[] = [
  { id: "k1", label: "", amount: 0 },
  { id: "k2", label: "", amount: 0 },
];

const t = {
  title: { ar: "مطابقة كشف الحساب البنكي", en: "Bank Reconciliation" },
  hint: {
    ar: "أدخل كل بند تسوية بقيمته الموقّعة (موجب للإضافة، سالب للخصم). الهدف أن يتساوى الرصيدان المعدّلان بعد التسوية.",
    en: "Enter each adjustment with its signed value (positive to add, negative to subtract). The goal is for both adjusted balances to match after reconciliation.",
  },
  bankSection: { ar: "جانب البنك", en: "Bank side" },
  bankBalance: { ar: "الرصيد حسب كشف البنك", en: "Balance per bank statement" },
  bankAdjustments: {
    ar: "تسويات البنك (ودائع في الطريق +، شيكات معلقة -)",
    en: "Bank adjustments (deposits in transit +, outstanding checks -)",
  },
  adjustedBank: { ar: "الرصيد البنكي المعدّل", en: "Adjusted bank balance" },
  bookSection: { ar: "جانب الدفاتر", en: "Book side" },
  bookBalance: { ar: "الرصيد حسب دفاتر الشركة", en: "Balance per company books" },
  bookAdjustments: {
    ar: "تسويات الدفاتر (تحصيلات +، رسوم بنكية -، شيكات مرتجعة -)",
    en: "Book adjustments (collections +, bank fees -, NSF checks -)",
  },
  adjustedBook: { ar: "الرصيد الدفتري المعدّل", en: "Adjusted book balance" },
  addLine: { ar: "+ إضافة بند", en: "+ Add item" },
  labelHeader: { ar: "البيان", en: "Description" },
  amountHeader: { ar: "القيمة (± )", en: "Amount (± )" },
  summary: { ar: "نتيجة المطابقة", en: "Reconciliation result" },
  matched: { ar: "الرصيدان متطابقان ✓", en: "Balances match ✓" },
  notMatched: {
    ar: "الرصيدان غير متطابقين — راجع البنود",
    en: "Balances don't match — review the items",
  },
  difference: { ar: "الفرق", en: "Difference" },
};

function tr(k: keyof typeof t, lang: Lang) {
  return t[k][lang];
}

export function BankReconciliation({ lang }: { lang: Lang }) {
  const [bankBalance, setBankBalance] = useShareState("BankRecon_v0", 150000);
  const [bankAdjustments, setBankAdjustments] = useShareState<ReconLine[]>(
    "BankRecon_v1",
    DEFAULT_BANK_ADJUSTMENTS,
  );
  const [bookBalance, setBookBalance] = useShareState("BankRecon_v2", 148500);
  const [bookAdjustments, setBookAdjustments] = useShareState<ReconLine[]>(
    "BankRecon_v3",
    DEFAULT_BOOK_ADJUSTMENTS,
  );

  const adjustedBank = bankBalance + sumLines(bankAdjustments);
  const adjustedBook = bookBalance + sumLines(bookAdjustments);
  const difference = adjustedBank - adjustedBook;
  const isMatched = Math.abs(difference) < 0.005;

  return (
    <div className="space-y-4">
      <p className="text-xs leading-relaxed text-[var(--fg-soft)]">{tr("hint", lang)}</p>

      <SectionCard title={tr("bankSection", lang)}>
        <div className="space-y-3">
          <label className="block">
            <span className={lbl}>{tr("bankBalance", lang)}</span>
            <input
              type="number"
              className={fieldCls}
              value={bankBalance}
              onChange={(e) => setBankBalance(+e.target.value || 0)}
            />
          </label>
          <div>
            <span className={lbl}>{tr("bankAdjustments", lang)}</span>
            <LineListEditor
              lines={bankAdjustments}
              onChange={setBankAdjustments}
              addLabel={tr("addLine", lang)}
              labelHeader={tr("labelHeader", lang)}
              amountHeader={tr("amountHeader", lang)}
            />
          </div>
          <div className="flex items-center justify-between rounded-lg border border-[#d7aa52]/30 bg-[#d7aa52]/10 px-3 py-2">
            <span className="text-xs font-bold text-[#f3d28a]">{tr("adjustedBank", lang)}</span>
            <span dir="ltr" className="text-base font-extrabold tabular-nums text-[#f3d28a]">
              {fmtMoney(adjustedBank)}
            </span>
          </div>
        </div>
      </SectionCard>

      <SectionCard title={tr("bookSection", lang)}>
        <div className="space-y-3">
          <label className="block">
            <span className={lbl}>{tr("bookBalance", lang)}</span>
            <input
              type="number"
              className={fieldCls}
              value={bookBalance}
              onChange={(e) => setBookBalance(+e.target.value || 0)}
            />
          </label>
          <div>
            <span className={lbl}>{tr("bookAdjustments", lang)}</span>
            <LineListEditor
              lines={bookAdjustments}
              onChange={setBookAdjustments}
              addLabel={tr("addLine", lang)}
              labelHeader={tr("labelHeader", lang)}
              amountHeader={tr("amountHeader", lang)}
            />
          </div>
          <div className="flex items-center justify-between rounded-lg border border-[#d7aa52]/30 bg-[#d7aa52]/10 px-3 py-2">
            <span className="text-xs font-bold text-[#f3d28a]">{tr("adjustedBook", lang)}</span>
            <span dir="ltr" className="text-base font-extrabold tabular-nums text-[#f3d28a]">
              {fmtMoney(adjustedBook)}
            </span>
          </div>
        </div>
      </SectionCard>

      <div
        className={`flex items-center justify-between rounded-xl border p-4 ${
          isMatched ? "border-emerald-400/40 bg-emerald-400/10" : "border-red-400/40 bg-red-400/10"
        }`}
      >
        <div className="flex items-center gap-2">
          {isMatched ? (
            <CheckCircle2 className="size-5 text-emerald-300" />
          ) : (
            <XCircle className="size-5 text-red-300" />
          )}
          <span
            className={`text-sm font-extrabold ${isMatched ? "text-emerald-200" : "text-red-200"}`}
          >
            {isMatched ? tr("matched", lang) : tr("notMatched", lang)}
          </span>
        </div>
        {!isMatched && (
          <span dir="ltr" className="text-sm font-bold tabular-nums text-red-200">
            {tr("difference", lang)}: {fmtMoney(difference)}
          </span>
        )}
      </div>
    </div>
  );
}
