import { useMemo, useState } from "react";
import type { Lang } from "@/lib/i18n";
import {
  ActionsBar,
  ExplanationPanel,
  NumberField,
  PeriodField,
  ResultCard,
  useDeclarationActions,
  type FieldDef,
} from "./TaxFormShared";

const VAT_RATE = 0.15;

const INPUT_FIELDS: FieldDef[] = [
  {
    key: "taxable_sales",
    ar: "المبيعات الخاضعة للضريبة",
    en: "Taxable Sales",
    helpAr: "إجمالي المبيعات الخاضعة لنسبة 15% خلال الفترة (دون احتساب الضريبة).",
    helpEn: "Total standard-rated sales (15%) during the period, excluding VAT.",
    min: 0,
  },
  {
    key: "zero_rated_sales",
    ar: "المبيعات صفرية النسبة",
    en: "Zero-Rated Sales",
    helpAr: "الصادرات والمبيعات داخل دول الخليج التي تخضع لنسبة 0% (مثل التصدير خارج المملكة).",
    helpEn: "Exports and intra-GCC supplies that are zero-rated (e.g. exports outside KSA).",
    min: 0,
  },
  {
    key: "exempt_sales",
    ar: "المبيعات المعفاة",
    en: "Exempt Sales",
    helpAr: "المبيعات المعفاة من الضريبة (مثل بعض الخدمات المالية والإيجار السكني).",
    helpEn: "Sales fully exempt from VAT (e.g. certain financial services, residential rentals).",
    min: 0,
  },
  {
    key: "purchases",
    ar: "المشتريات الخاضعة للضريبة",
    en: "Taxable Purchases",
    helpAr: "إجمالي المشتريات والمصاريف الخاضعة لـ 15% (دون الضريبة).",
    helpEn: "Total standard-rated purchases / expenses (excluding VAT).",
    min: 0,
  },
  {
    key: "input_vat",
    ar: "ضريبة المدخلات القابلة للخصم",
    en: "Deductible Input VAT",
    helpAr: "ضريبة المدخلات المدفوعة على المشتريات والمصاريف والقابلة للخصم وفق لائحة ZATCA.",
    helpEn: "Input VAT paid on purchases that is deductible per ZATCA regulations.",
    min: 0,
  },
];

const RESULT_FIELDS: FieldDef[] = [
  { key: "output_vat", ar: "ضريبة المخرجات", en: "Output VAT", helpAr: "", helpEn: "" },
  { key: "input_vat", ar: "ضريبة المدخلات", en: "Input VAT", helpAr: "", helpEn: "" },
  { key: "net_vat", ar: "صافي الضريبة المستحقة", en: "Net VAT Payable", helpAr: "", helpEn: "" },
];

const REF_LINKS = [
  {
    ar: "لائحة ضريبة القيمة المضافة — ZATCA",
    en: "VAT Implementing Regulations — ZATCA",
    url: "https://zatca.gov.sa/ar/RulesRegulations/Taxes/Pages/VAT.aspx",
  },
  {
    ar: "دليل تقديم الإقرار الضريبي",
    en: "VAT Return Filing Guide",
    url: "https://zatca.gov.sa/en/E-Services/Pages/Tax-Returns.aspx",
  },
];

export function VatReturnFormCalculator({ lang }: { lang: Lang }) {
  const [taxableSales, setTaxableSales] = useState(0);
  const [zeroRated, setZeroRated] = useState(0);
  const [exemptSales, setExemptSales] = useState(0);
  const [purchases, setPurchases] = useState(0);
  const [inputVat, setInputVat] = useState(0);

  const errors = useMemo(() => {
    const e: Record<string, string> = {};
    const negMsg = lang === "ar" ? "لا تُقبل قيمة سالبة" : "Negative values not allowed";
    if (taxableSales < 0) e.taxable_sales = negMsg;
    if (zeroRated < 0) e.zero_rated_sales = negMsg;
    if (exemptSales < 0) e.exempt_sales = negMsg;
    if (purchases < 0) e.purchases = negMsg;
    if (inputVat < 0) e.input_vat = negMsg;
    if (inputVat > purchases * VAT_RATE * 1.001 && purchases > 0)
      e.input_vat =
        lang === "ar"
          ? "ضريبة المدخلات تتجاوز 15% من المشتريات"
          : "Input VAT exceeds 15% of purchases";
    return e;
  }, [taxableSales, zeroRated, exemptSales, purchases, inputVat, lang]);

  const outputVat = taxableSales * VAT_RATE;
  const netVat = outputVat - inputVat;

  const inputs = {
    taxable_sales: taxableSales,
    zero_rated_sales: zeroRated,
    exempt_sales: exemptSales,
    purchases,
    input_vat: inputVat,
  };
  const results = { output_vat: outputVat, input_vat: inputVat, net_vat: netVat };

  const a = useDeclarationActions({
    type: "vat",
    lang,
    titleAr: "نموذج الإقرار الضريبي السعودي",
    titleEn: "Saudi VAT Return",
    pdfTitle: { ar: "نموذج الإقرار الضريبي السعودي", en: "Saudi VAT Return" },
    inputs,
    results,
    fields: INPUT_FIELDS,
    resultFields: RESULT_FIELDS,
  });

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <PeriodField value={a.period} onChange={a.setPeriod} lang={lang} />
        <NumberField
          field={INPUT_FIELDS[0]}
          value={taxableSales}
          onChange={setTaxableSales}
          lang={lang}
          error={errors.taxable_sales}
        />
        <NumberField
          field={INPUT_FIELDS[1]}
          value={zeroRated}
          onChange={setZeroRated}
          lang={lang}
          error={errors.zero_rated_sales}
        />
        <NumberField
          field={INPUT_FIELDS[2]}
          value={exemptSales}
          onChange={setExemptSales}
          lang={lang}
          error={errors.exempt_sales}
        />
        <NumberField
          field={INPUT_FIELDS[3]}
          value={purchases}
          onChange={setPurchases}
          lang={lang}
          error={errors.purchases}
        />
        <NumberField
          field={INPUT_FIELDS[4]}
          value={inputVat}
          onChange={setInputVat}
          lang={lang}
          error={errors.input_vat}
        />
      </div>

      <div className="space-y-3">
        <ResultCard
          titleAr="ضريبة المخرجات (15%)"
          titleEn="Output VAT (15%)"
          value={outputVat}
          lang={lang}
        />
        <ResultCard
          titleAr="ضريبة المدخلات القابلة للخصم"
          titleEn="Deductible Input VAT"
          value={inputVat}
          lang={lang}
        />
        <ResultCard
          titleAr="صافي الضريبة المستحقة"
          titleEn="Net VAT Payable"
          value={netVat}
          lang={lang}
          highlight
        />
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
          refLinks={REF_LINKS}
        />
        <ExplanationPanel text={a.explanation} lang={lang} />
      </div>
    </div>
  );
}
