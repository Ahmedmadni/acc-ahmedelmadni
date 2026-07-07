import type { CvAssistantAction, CvData } from "./types";

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
