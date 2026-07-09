// Itemized estate composition (real estate, bank balances, gold, business
// shares, ...) with manual currency conversion to SAR. Kept separate from
// src/lib/inheritance.ts so the Fara'id engine stays currency-agnostic — it
// only ever receives a single already-converted SAR total.

export type AssetCategory = "cash" | "realEstate" | "gold" | "business" | "vehicle" | "other";

export const ASSET_CATEGORIES: { id: AssetCategory; ar: string; en: string }[] = [
  { id: "cash", ar: "أرصدة بنكية / نقد", en: "Bank balances / cash" },
  { id: "realEstate", ar: "عقارات وأراضٍ", en: "Real estate & land" },
  { id: "gold", ar: "ذهب ومعادن ثمينة", en: "Gold & precious metals" },
  { id: "business", ar: "حصص وشركات", en: "Business shares" },
  { id: "vehicle", ar: "مركبات", en: "Vehicles" },
  { id: "other", ar: "أخرى", en: "Other" },
];

export type CurrencyCode =
  | "SAR"
  | "USD"
  | "EUR"
  | "GBP"
  | "AED"
  | "KWD"
  | "QAR"
  | "BHD"
  | "OMR"
  | "EGP"
  | "JOD";

export const CURRENCIES: { code: CurrencyCode; ar: string; en: string }[] = [
  { code: "SAR", ar: "ريال سعودي", en: "Saudi Riyal" },
  { code: "USD", ar: "دولار أمريكي", en: "US Dollar" },
  { code: "EUR", ar: "يورو", en: "Euro" },
  { code: "GBP", ar: "جنيه إسترليني", en: "British Pound" },
  { code: "AED", ar: "درهم إماراتي", en: "UAE Dirham" },
  { code: "KWD", ar: "دينار كويتي", en: "Kuwaiti Dinar" },
  { code: "QAR", ar: "ريال قطري", en: "Qatari Riyal" },
  { code: "BHD", ar: "دينار بحريني", en: "Bahraini Dinar" },
  { code: "OMR", ar: "ريال عماني", en: "Omani Riyal" },
  { code: "EGP", ar: "جنيه مصري", en: "Egyptian Pound" },
  { code: "JOD", ar: "دينار أردني", en: "Jordanian Dinar" },
];

export interface AssetItem {
  id: string;
  category: AssetCategory;
  label: string;
  currency: CurrencyCode;
  amount: number;
  /** SAR per 1 unit of `currency`. Always 1 for SAR itself. */
  exchangeRate: number;
}

export const emptyAsset = (id: string): AssetItem => ({
  id,
  category: "cash",
  label: "",
  currency: "SAR",
  amount: 0,
  exchangeRate: 1,
});

export const assetValueSar = (asset: AssetItem): number =>
  asset.currency === "SAR" ? asset.amount : asset.amount * asset.exchangeRate;

export const sumAssetsToSar = (assets: AssetItem[]): number =>
  assets.reduce((sum, a) => sum + assetValueSar(a), 0);

export const categoryLabel = (id: AssetCategory, lang: "ar" | "en"): string =>
  ASSET_CATEGORIES.find((c) => c.id === id)?.[lang] ?? id;

export const currencyLabel = (code: CurrencyCode, lang: "ar" | "en"): string =>
  CURRENCIES.find((c) => c.code === code)?.[lang] ?? code;
