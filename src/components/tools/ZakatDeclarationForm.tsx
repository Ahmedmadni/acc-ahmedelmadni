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

const ZAKAT_RATE = 0.025;

const INPUT_FIELDS: FieldDef[] = [
  {
    key: "capital",
    ar: "رأس المال",
    en: "Capital",
    helpAr: "رأس المال المدفوع للشركة كما يظهر في القوائم المالية.",
    helpEn: "Company's paid-up capital as reported in the financial statements.",
    min: 0,
  },
  {
    key: "retained_earnings",
    ar: "الأرباح المبقاة",
    en: "Retained Earnings",
    helpAr: "صافي الأرباح المتراكمة غير الموزّعة في نهاية الفترة.",
    helpEn: "Cumulative undistributed net profits at period-end.",
  },
  {
    key: "reserves",
    ar: "الاحتياطيات",
    en: "Reserves",
    helpAr: "الاحتياطيات النظامية والاختيارية المضافة للوعاء الزكوي.",
    helpEn: "Statutory and voluntary reserves added to the zakat base.",
    min: 0,
  },
  {
    key: "investments",
    ar: "الاستثمارات المخصومة",
    en: "Deductible Investments",
    helpAr: "الاستثمارات طويلة الأجل في شركات تخضع للزكاة بالفعل (تُخصم لتفادي الازدواج).",
    helpEn:
      "Long-term investments in entities already subject to zakat (deducted to avoid double counting).",
    min: 0,
  },
  {
    key: "fixed_assets",
    ar: "الأصول الثابتة (صافي)",
    en: "Fixed Assets (Net)",
    helpAr: "صافي قيمة الأصول الثابتة بعد الإهلاك المتراكم.",
    helpEn: "Net book value of fixed assets after accumulated depreciation.",
    min: 0,
  },
  {
    key: "adjustments",
    ar: "تسويات أخرى (± )",
    en: "Other Adjustments (±)",
    helpAr: "تسويات إضافية إيجابية أو سلبية وفق دليل ZATCA للزكاة.",
    helpEn: "Positive or negative adjustments per ZATCA zakat guidance.",
  },
];

const RESULT_FIELDS: FieldDef[] = [
  { key: "zakat_base", ar: "الوعاء الزكوي", en: "Zakat Base", helpAr: "", helpEn: "" },
  {
    key: "zakat_due",
    ar: "الزكاة المستحقة (2.5%)",
    en: "Zakat Due (2.5%)",
    helpAr: "",
    helpEn: "",
  },
];

const REF_LINKS = [
  {
    ar: "لائحة جباية الزكاة — ZATCA",
    en: "Zakat Collection Regulations — ZATCA",
    url: "https://zatca.gov.sa/ar/RulesRegulations/Zakat/Pages/default.aspx",
  },
  {
    ar: "دليل الإقرار الزكوي",
    en: "Zakat Filing Guide",
    url: "https://zatca.gov.sa/en/HelpCenter/guidelines/Pages/default.aspx",
  },
];

export function ZakatDeclarationFormCalculator({ lang }: { lang: Lang }) {
  const [capital, setCapital] = useState(0);
  const [retained, setRetained] = useState(0);
  const [reserves, setReserves] = useState(0);
  const [investments, setInvestments] = useState(0);
  const [fixedAssets, setFixedAssets] = useState(0);
  const [adjustments, setAdjustments] = useState(0);

  const errors = useMemo(() => {
    const e: Record<string, string> = {};
    const negMsg = lang === "ar" ? "لا تُقبل قيمة سالبة" : "Negative values not allowed";
    if (capital < 0) e.capital = negMsg;
    if (reserves < 0) e.reserves = negMsg;
    if (investments < 0) e.investments = negMsg;
    if (fixedAssets < 0) e.fixed_assets = negMsg;
    return e;
  }, [capital, reserves, investments, fixedAssets, lang]);

  const zakatBase = Math.max(
    0,
    capital + retained + reserves - investments - fixedAssets + adjustments,
  );
  const zakatDue = zakatBase * ZAKAT_RATE;

  const inputs = {
    capital,
    retained_earnings: retained,
    reserves,
    investments,
    fixed_assets: fixedAssets,
    adjustments,
  };
  const results = { zakat_base: zakatBase, zakat_due: zakatDue };

  const a = useDeclarationActions({
    type: "zakat",
    lang,
    titleAr: "نموذج الإقرار الزكوي السعودي",
    titleEn: "Saudi Zakat Declaration",
    pdfTitle: { ar: "نموذج الإقرار الزكوي السعودي", en: "Saudi Zakat Declaration" },
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
          value={capital}
          onChange={setCapital}
          lang={lang}
          error={errors.capital}
        />
        <NumberField field={INPUT_FIELDS[1]} value={retained} onChange={setRetained} lang={lang} />
        <NumberField
          field={INPUT_FIELDS[2]}
          value={reserves}
          onChange={setReserves}
          lang={lang}
          error={errors.reserves}
        />
        <NumberField
          field={INPUT_FIELDS[3]}
          value={investments}
          onChange={setInvestments}
          lang={lang}
          error={errors.investments}
        />
        <NumberField
          field={INPUT_FIELDS[4]}
          value={fixedAssets}
          onChange={setFixedAssets}
          lang={lang}
          error={errors.fixed_assets}
        />
        <NumberField
          field={INPUT_FIELDS[5]}
          value={adjustments}
          onChange={setAdjustments}
          lang={lang}
        />
      </div>

      <div className="space-y-3">
        <ResultCard titleAr="الوعاء الزكوي" titleEn="Zakat Base" value={zakatBase} lang={lang} />
        <ResultCard
          titleAr="الزكاة المستحقة (2.5%)"
          titleEn="Zakat Due (2.5%)"
          value={zakatDue}
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
