/**
 * Accounting software / ERP ecosystem — source of truth for the homepage
 * "Software Ecosystem" showcase (Phase 3A).
 *
 * Names are preserved verbatim from the existing content in
 * `src/lib/i18n.ts` → skills group "الأدوات والأنظمة / Tools & Systems"
 * (the ERP & accounting platforms, plus Power BI and Excel). Nothing here is
 * invented: `category` labels are factual descriptors of what each product is,
 * and the featured statement/KPIs are lifted from that same skill entry.
 *
 * Official logo assets live in `src/assets/software/` and are wired via the
 * `logo` field — the card component branches on it and falls back to the
 * typographic monogram (`mark`) for any entry without one.
 */

import alShamelLogo from "@/assets/software/Al Shamel.png";
import asconLogo from "@/assets/software/Ascon.png";
import daftraLogo from "@/assets/software/Daftra.png";
import dentechLogo from "@/assets/software/Dentech.png";
import foodicsLogo from "@/assets/software/Foodics.png";
import odooLogo from "@/assets/software/Odoo.png";
import oracleLogo from "@/assets/software/Oracle.png";
import powerBiLogo from "@/assets/software/Power BI.png";
import qoyodLogo from "@/assets/software/Qoyod.jpg";
import rewaaLogo from "@/assets/software/Rewaa.png";
import smaccLogo from "@/assets/software/SMACC.jpg";
import wafeqLogo from "@/assets/software/Wafeq.jpg";
import zohoBooksLogo from "@/assets/software/Zoho Books.png";

export type SoftwareCategory = "erp" | "accounting" | "cloud" | "bi" | "modeling";

export type SoftwareEntry = {
  id: string;
  /** Primary brand name (Latin brands stay Latin). */
  name: string;
  /** Arabic display name for Arabic-first products. */
  nameAr?: string;
  /** Typographic monogram used until an official logo asset exists. */
  mark: string;
  category: SoftwareCategory;
  /** Optional local logo asset (import path). Rendered instead of `mark`. */
  logo?: string;
};

export const SOFTWARE_CATEGORY_LABELS: Record<SoftwareCategory, { ar: string; en: string }> = {
  erp: { ar: "نظام ERP", en: "ERP system" },
  accounting: { ar: "برنامج محاسبي", en: "Accounting software" },
  cloud: { ar: "محاسبة سحابية", en: "Cloud accounting" },
  bi: { ar: "ذكاء الأعمال", en: "Business intelligence" },
  modeling: { ar: "نمذجة وتحليل", en: "Modeling & analysis" },
};

export const SOFTWARE_ECOSYSTEM: SoftwareEntry[] = [
  { id: "oracle", name: "Oracle", mark: "Or", category: "erp", logo: oracleLogo },
  { id: "odoo", name: "Odoo", mark: "Od", category: "erp", logo: odooLogo },
  { id: "dentech", name: "Dentech", mark: "Dt", category: "accounting", logo: dentechLogo },
  {
    id: "al-shamel",
    name: "Al-Shamel",
    nameAr: "الشامل",
    mark: "ش",
    category: "accounting",
    logo: alShamelLogo,
  },
  { id: "daftra", name: "Daftra", nameAr: "دفترة", mark: "د", category: "cloud", logo: daftraLogo },
  { id: "ascon", name: "Ascon", mark: "As", category: "accounting", logo: asconLogo },
  {
    id: "zoho-books",
    name: "Zoho Books",
    mark: "Z",
    category: "cloud",
    logo: zohoBooksLogo,
  },
  { id: "power-bi", name: "Power BI", mark: "BI", category: "bi", logo: powerBiLogo },
  { id: "excel", name: "Excel", mark: "XL", category: "modeling" },
  { id: "qoyod", name: "Qoyod", nameAr: "قيود", mark: "ق", category: "cloud", logo: qoyodLogo },
  { id: "wafeq", name: "Wafeq", nameAr: "وفاق", mark: "و", category: "cloud", logo: wafeqLogo },
  { id: "rewaa", name: "Rewaa", nameAr: "رواء", mark: "ر", category: "cloud", logo: rewaaLogo },
  { id: "foodics", name: "Foodics", mark: "Fo", category: "cloud", logo: foodicsLogo },
  { id: "smacc", name: "SMACC", mark: "SM", category: "cloud", logo: smaccLogo },
];

/** Featured statement — lifted from the "ERP & Accounting Software" skill entry. */
export const SOFTWARE_FEATURED = {
  eyebrow: { ar: "التشغيل المحاسبي", en: "Accounting operations" },
  title: {
    ar: "دورة محاسبية كاملة على أنظمة ERP والبرامج المحاسبية الرائدة",
    en: "A full accounting cycle on leading ERP & accounting platforms",
  },
  kpis: {
    ar: ["تكامل 100%", "إقفال شهري سريع"],
    en: ["100% integration", "Fast monthly close"],
  },
} as const;
