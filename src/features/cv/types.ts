export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
};

export type Education = {
  id: string;
  degree: string;
  school: string;
  period: string;
};

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  year: string;
};

export type CvData = {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
  photo?: string;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
  languages: string[];
  certifications: Certification[];
};

export type CvTemplateId =
  | "modern-executive"
  | "ats-optimized"
  | "corporate-professional"
  | "finance-accounting"
  | "creative-professional"
  | "minimal-elegant";

export type CvTemplate = {
  id: CvTemplateId;
  name: { ar: string; en: string };
  description: { ar: string; en: string };
  accent: string;
  secondary: string;
  layout: "classic" | "sidebar" | "minimal";
};

export type CvAssistantAction = "generate" | "improve" | "shorten" | "expand" | "professionalize" | "ats";