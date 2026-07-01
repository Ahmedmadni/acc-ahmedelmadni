export type BusinessType =
  | "company"
  | "establishment"
  | "freelance"
  | "ngo"
  | "other";

export type ClientStatus = "active" | "inactive" | "pending";

export type Client = {
  id: string;
  full_name: string;
  phone: string;
  email?: string | null;
  national_id?: string | null;
  company_name?: string | null;
  commercial_register?: string | null;
  tax_number?: string | null;
  business_type?: BusinessType | null;
  city?: string | null;
  notes?: string | null;
  status: ClientStatus;
  vat_registered: boolean;
  zakat_registered: boolean;
  vat_quarter?: "monthly" | "quarterly" | null;
  client_since?: string | null;
  last_contact?: string | null;
  created_at: string;
};

export type WhatsAppLog = {
  id: string;
  client_id: string;
  message: string;
  sent_at: string;
  message_type: string;
};

export const BUSINESS_TYPES: Record<BusinessType, { ar: string; en: string }> = {
  company: { ar: "شركة (ذ.م.م / مساهمة)", en: "Company" },
  establishment: { ar: "مؤسسة فردية", en: "Establishment" },
  freelance: { ar: "عمل حر", en: "Freelancer" },
  ngo: { ar: "جمعية / منظمة", en: "NGO" },
  other: { ar: "أخرى", en: "Other" },
};

export const VAT_MONTHS = [
  { month: 0, quarter: "Q4", label: { ar: "يناير — إقرار الربع الرابع", en: "January — Q4 Return" } },
  { month: 3, quarter: "Q1", label: { ar: "أبريل — إقرار الربع الأول", en: "April — Q1 Return" } },
  { month: 6, quarter: "Q2", label: { ar: "يوليو — إقرار الربع الثاني", en: "July — Q2 Return" } },
  { month: 9, quarter: "Q3", label: { ar: "أكتوبر — إقرار الربع الثالث", en: "October — Q3 Return" } },
];
