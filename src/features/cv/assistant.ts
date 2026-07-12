import type { CvAssistantAction, CvData } from "./types";

type TranslatablePayload = {
  fullName: string;
  jobTitle: string;
  location: string;
  summary: string;
  experience: { role: string; company: string; description: string }[];
  education: { degree: string; school: string }[];
  skills: string[];
  languages: string[];
  certifications: { name: string; issuer: string }[];
};

/** Translates the CV's text content between Arabic and English, transliterating
 * proper nouns (name, company, school, issuer) rather than translating them. */
export async function translateCv({
  data,
  sourceLang,
  targetLang,
}: {
  data: CvData;
  sourceLang: "ar" | "en";
  targetLang: "ar" | "en";
}): Promise<CvData> {
  const payload: TranslatablePayload = {
    fullName: data.fullName,
    jobTitle: data.jobTitle,
    location: data.location,
    summary: data.summary,
    experience: data.experience.map((x) => ({
      role: x.role,
      company: x.company,
      description: x.description,
    })),
    education: data.education.map((x) => ({ degree: x.degree, school: x.school })),
    skills: data.skills,
    languages: data.languages,
    certifications: data.certifications.map((x) => ({ name: x.name, issuer: x.issuer })),
  };
  const response = await fetch("/api/cv-translate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: payload, sourceLang, targetLang }),
  });
  if (!response.ok) throw new Error(await response.text());
  const { data: translated } = (await response.json()) as { data: TranslatablePayload };

  return {
    ...data,
    fullName: translated.fullName,
    jobTitle: translated.jobTitle,
    location: translated.location,
    summary: translated.summary,
    experience: data.experience.map((x, i) => ({
      ...x,
      role: translated.experience[i].role,
      company: translated.experience[i].company,
      description: translated.experience[i].description,
    })),
    education: data.education.map((x, i) => ({
      ...x,
      degree: translated.education[i].degree,
      school: translated.education[i].school,
    })),
    skills: translated.skills,
    languages: translated.languages,
    certifications: data.certifications.map((x, i) => ({
      ...x,
      name: translated.certifications[i].name,
      issuer: translated.certifications[i].issuer,
    })),
  };
}

export async function enhanceCvSection({
  section,
  text,
  lang,
  action,
  context,
}: {
  section: string;
  text: string;
  lang: "ar" | "en";
  action: CvAssistantAction;
  context: Partial<CvData>;
}) {
  const response = await fetch("/api/cv-enhance", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ section, text, lang, action, context }),
  });
  if (!response.ok) throw new Error(await response.text());
  const data = (await response.json()) as { text: string };
  return data.text.trim();
}

export function parseGeneratedList(value: string) {
  return value
    .split(/\n|،|,/)
    .map((item) => item.replace(/^[-•\d.\s]+/, "").trim())
    .filter(Boolean)
    .slice(0, 18);
}
