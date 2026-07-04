import { useEffect, useMemo, useState } from "react";
import type { Lang } from "@/lib/i18n";
import {
  DEFAULT_ENTITY,
  EntityHeaderForm,
  MoneyRow,
  OfficialFormBanner,
  SectionCard,
  TotalRow,
  type EntityHeader,
} from "./OfficialFormShell";
import {
  ActionsBar,
  ExplanationPanel,
  PeriodField,
  useDeclarationActions,
  type FieldDef,
} from "@/components/tools/TaxFormShared";

const VAT_RATE = 0.15;

type Row = { k: string; ar: string; en: string };

// (أ) ضريبة المخرجات - Output VAT
const OUTPUT_ROWS: Row[] = [
  { k: "out_standard_sales", ar: "المبيعات الخاضعة للضريبة بنسبة 15%", en: "Standard-rated sales (15%)" },
  { k: "out_private_health", ar: "مبيعات للمواطنين معفاة (تعليم/صحة خاصة)", en: "Citizen exempt sales (private health/education)" },
  { k: "out_zero_export", ar: "صادرات خارج دول الخليج (0%)", en: "Exports outside GCC (0%)" },
  { k: "out_zero_gcc", ar: "مبيعات بين دول الخليج التطبيقية (0%)", en: "Intra-GCC supplies (0%)" },
  { k: "out_exempt", ar: "مبيعات معفاة (إيجار سكني، خدمات مالية)", en: "Exempt sales (residential rent, financial)" },
];

// (ب) ضريبة المدخلات - Input VAT
const INPUT_ROWS: Row[] = [
  { k: "in_standard_purchases", ar: "المشتريات الخاضعة للضريبة بنسبة 15%", en: "Standard-rated purchases (15%)" },
  { k: "in_imports_paid", ar: "واردات مدفوع عنها الضريبة في الجمارك", en: "Imports VAT paid at customs" },
  { k: "in_imports_reverse", ar: "واردات خاضعة لآلية الاحتساب العكسي", en: "Imports under reverse-charge" },
  { k: "in_zero_purchases", ar: "مشتريات صفرية النسبة", en: "Zero-rated purchases" },
  { k: "in_exempt_purchases", ar: "مشتريات معفاة", en: "Exempt purchases" },
];

// تسويات
const ADJ_ROWS: Row[] = [
  { k: "adj_bad_debts", ar: "تسويات الديون المعدومة", en: "Bad debts adjustments" },
  { k: "adj_credit_notes", ar: "إشعارات دائنة/مدينة", en: "Credit/Debit notes" },
  { k: "adj_other", ar: "تسويات أخرى", en: "Other adjustments" },
];

const ALL_KEYS = [...OUTPUT_ROWS, ...INPUT_ROWS, ...ADJ_ROWS].map((r) => r.k);
const ALL_FIELD_DEFS: FieldDef[] = ALL_KEYS.map((k) => ({ key: k, ar: k, en: k, helpAr: "", helpEn: "" }));

function makeSadadInvoice() {
  const n = Math.floor(100000000 + Math.random() * 899999999);
  return `V-${n}`;
}

export function VatOfficialForm({ lang }: { lang: Lang }) {
  const [entity, setEntity] = useState<EntityHeader>(DEFAULT_ENTITY);
  const [v, setV] = useState<Record<string, number>>({});
  const get = (k: string) => v[k] ?? 0;
  const set = (k: string) => (n: number) => setV((s) => ({ ...s, [k]: n }));

  const totals = useMemo(() => {
    const outputVat = get("out_standard_sales") * VAT_RATE;
    const totalSales = OUTPUT_ROWS.reduce((a, r) => a + get(r.k), 0);

    const deductibleInput =
      (get("in_standard_purchases") + get("in_imports_reverse")) * VAT_RATE +
      get("in_imports_paid");
    const reverseChargeOutput = get("in_imports_reverse") * VAT_RATE;

    const adjustments = ADJ_ROWS.reduce((a, r) => a + get(r.k), 0);
    const netVat = outputVat + reverseChargeOutput - deductibleInput + adjustments;

    return { outputVat, totalSales, deductibleInput, reverseChargeOutput, adjustments, netVat };
  }, [v]);

  // Generated client-side only (Math.random) — computing this in useMemo would run
  // during SSR too and produce a different number than the client's first render,
  // causing a hydration mismatch. Start blank, fill in after mount.
  const [sadad, setSadad] = useState("");
  useEffect(() => {
    setSadad(makeSadadInvoice());
  }, []);

  const resultsForArchive: Record<string, number> = {
    output_vat: totals.outputVat,
    reverse_charge_vat: totals.reverseChargeOutput,
    deductible_input_vat: totals.deductibleInput,
    adjustments: totals.adjustments,
    net_vat: totals.netVat,
  };

  const a = useDeclarationActions({
    type: "vat",
    lang,
    titleAr: "إقرار ضريبة القيمة المضافة (نموذج ZATCA)",
    titleEn: "VAT Return (ZATCA Form)",
    pdfTitle: { ar: "إقرار ضريبة القيمة المضافة - ZATCA", en: "VAT Return - ZATCA" },
    inputs: v,
    results: resultsForArchive,
    fields: ALL_FIELD_DEFS,
    resultFields: Object.keys(resultsForArchive).map((k) => ({ key: k, ar: k, en: k, helpAr: "", helpEn: "" })),
  });

  const t = (ar: string, en: string) => (lang === "ar" ? ar : en);

  return (
    <div>
      <OfficialFormBanner
        lang={lang}
        titleAr="إقرار ضريبة القيمة المضافة - الفترة الضريبية"
        titleEn="VAT Return - Tax Period"
      />

      <EntityHeaderForm value={entity} onChange={setEntity} lang={lang} />

      <SectionCard title={t("(أ) المبيعات (ضريبة المخرجات)", "(A) Sales (Output VAT)")}>
        {OUTPUT_ROWS.map((r) => (
          <MoneyRow key={r.k} label={t(r.ar, r.en)} value={get(r.k)} onChange={set(r.k)} />
        ))}
        <TotalRow label={t("إجمالي المبيعات", "Total sales")} value={totals.totalSales} />
        <TotalRow label={t("ضريبة المخرجات (15%)", "Output VAT (15%)")} value={totals.outputVat} highlight />
      </SectionCard>

      <SectionCard title={t("(ب) المشتريات (ضريبة المدخلات)", "(B) Purchases (Input VAT)")}>
        {INPUT_ROWS.map((r) => (
          <MoneyRow key={r.k} label={t(r.ar, r.en)} value={get(r.k)} onChange={set(r.k)} />
        ))}
        <TotalRow label={t("ضريبة المدخلات القابلة للخصم", "Deductible input VAT")} value={totals.deductibleInput} />
        <TotalRow label={t("ضريبة الاحتساب العكسي", "Reverse-charge VAT")} value={totals.reverseChargeOutput} />
      </SectionCard>

      <SectionCard title={t("(ج) التسويات", "(C) Adjustments")}>
        {ADJ_ROWS.map((r) => (
          <MoneyRow key={r.k} label={t(r.ar, r.en)} value={get(r.k)} onChange={set(r.k)} />
        ))}
        <TotalRow label={t("إجمالي التسويات", "Total adjustments")} value={totals.adjustments} />
      </SectionCard>

      <SectionCard title={t("(د) ملخص الإقرار", "(D) Return Summary")}>
        <TotalRow label={t("ضريبة المخرجات", "Output VAT")} value={totals.outputVat} />
        <TotalRow label={t("ضريبة الاحتساب العكسي", "Reverse-charge VAT")} value={totals.reverseChargeOutput} />
        <TotalRow label={t("ضريبة المدخلات القابلة للخصم", "Deductible input VAT")} value={totals.deductibleInput} />
        <TotalRow label={t("التسويات", "Adjustments")} value={totals.adjustments} />
        <TotalRow label={t("صافي الضريبة المستحقة", "Net VAT payable")} value={totals.netVat} highlight />

        <div className="mt-4 rounded-md border border-emerald-400/40 bg-emerald-400/10 p-3">
          <div className="text-[11px] font-bold text-emerald-200">{t("سداد - رقم فاتورة ضريبة القيمة المضافة", "SADAD VAT invoice number")}</div>
          <div dir="ltr" className="mt-1 font-mono text-base font-extrabold text-emerald-100">{sadad}</div>
        </div>
      </SectionCard>

      <div className="mt-4">
        <PeriodField value={a.period} onChange={a.setPeriod} lang={lang} />
        <div className="mt-3">
          <ActionsBar
            lang={lang}
            onPdf={a.onPdf}
            onExcel={a.onExcel}
            onExplain={a.onExplain}
            onSave={a.onSave}
            saving={a.saving}
            exportingPdf={a.exportingPdf}
            explaining={a.explaining}
            isAuthed={a.isAuthed}
            refLinks={[
              { ar: "لائحة ضريبة القيمة المضافة - ZATCA", en: "VAT Implementing Regulations - ZATCA", url: "https://zatca.gov.sa/ar/RulesRegulations/Taxes/Pages/VAT.aspx" },
              { ar: "دليل تقديم الإقرار الضريبي", en: "VAT Return Filing Guide", url: "https://zatca.gov.sa/en/E-Services/Pages/Tax-Returns.aspx" },
            ]}
          />
        </div>
        <ExplanationPanel text={a.explanation} lang={lang} />
      </div>
    </div>
  );
}
