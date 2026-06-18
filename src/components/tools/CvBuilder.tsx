import { useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas-pro";
import {
  Briefcase,
  Check,
  Download,
  GraduationCap,
  Image as ImageIcon,
  Languages as LangIcon,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Plus,
  Sparkles,
  Trash2,
  User,
  Wand2,
} from "lucide-react";
import type { Lang } from "@/lib/i18n";

// ============== Types ==============
type Experience = { id: string; role: string; company: string; period: string; description: string };
type Education = { id: string; degree: string; school: string; period: string };
type Certification = { id: string; name: string; issuer: string; year: string };

type CvData = {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  photo: string; // dataURL
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
  languages: string[];
  certifications: Certification[];
};

type TemplateId = "classic" | "modern" | "elegant-photo" | "executive-photo";

const TEMPLATES: {
  id: TemplateId;
  name: { ar: string; en: string };
  desc: { ar: string; en: string };
  needsPhoto: boolean;
  accent: string;
}[] = [
  {
    id: "classic",
    name: { ar: "كلاسيكي", en: "Classic" },
    desc: { ar: "تصميم رسمي بسيط مناسب لجميع القطاعات.", en: "Clean formal layout for any industry." },
    needsPhoto: false,
    accent: "#0b1220",
  },
  {
    id: "modern",
    name: { ar: "عصري", en: "Modern" },
    desc: { ar: "تصميم بعمودين بنبرة عصرية.", en: "Two-column modern layout." },
    needsPhoto: false,
    accent: "#b8862e",
  },
  {
    id: "elegant-photo",
    name: { ar: "أنيق بصورة", en: "Elegant with Photo" },
    desc: { ar: "شريط جانبي ذهبي مع صورة شخصية.", en: "Gold sidebar with profile photo." },
    needsPhoto: true,
    accent: "#b8862e",
  },
  {
    id: "executive-photo",
    name: { ar: "تنفيذي بصورة", en: "Executive with Photo" },
    desc: { ar: "هوية تنفيذية فاخرة مع صورة.", en: "Premium executive look with photo." },
    needsPhoto: true,
    accent: "#0b1220",
  },
];

const uid = () => Math.random().toString(36).slice(2, 9);

const EMPTY: CvData = {
  fullName: "",
  jobTitle: "",
  email: "",
  phone: "",
  location: "",
  photo: "",
  summary: "",
  experience: [{ id: uid(), role: "", company: "", period: "", description: "" }],
  education: [{ id: uid(), degree: "", school: "", period: "" }],
  skills: [],
  languages: [],
  certifications: [],
};

// ============== AI helper ==============
async function enhanceWithAI(section: string, text: string, lang: Lang, context: Record<string, unknown>) {
  const res = await fetch("/api/cv-enhance", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ section, text, lang, context }),
  });
  if (!res.ok) throw new Error(await res.text());
  const data = (await res.json()) as { text: string };
  return data.text;
}

// ============== UI atoms ==============
function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-[11px] font-bold text-[var(--fg-soft)]">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-[#d7aa52]/30 bg-white/[0.04] px-3 py-2 text-sm text-[var(--fg)] outline-none transition focus:border-[#d7aa52]/70 focus:ring-2 focus:ring-[#d7aa52]/20"
      />
    </label>
  );
}

function Area({
  label,
  value,
  onChange,
  rows = 4,
  onEnhance,
  loading,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
  onEnhance?: () => void;
  loading?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <span className="text-[11px] font-bold text-[var(--fg-soft)]">{label}</span>
        {onEnhance && (
          <button
            type="button"
            onClick={onEnhance}
            disabled={loading || !value.trim()}
            className="inline-flex items-center gap-1 rounded-full border border-[#d7aa52]/50 bg-gradient-to-br from-[#f3d28a]/20 to-[#b8862e]/10 px-2 py-0.5 text-[10px] font-bold text-[#f3d28a] transition hover:bg-[#d7aa52]/20 disabled:opacity-50"
          >
            {loading ? <Loader2 className="size-3 animate-spin" /> : <Sparkles className="size-3" />}
            AI
          </button>
        )}
      </div>
      <textarea
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full resize-y rounded-lg border border-[#d7aa52]/30 bg-white/[0.04] px-3 py-2 text-sm text-[var(--fg)] outline-none transition focus:border-[#d7aa52]/70 focus:ring-2 focus:ring-[#d7aa52]/20"
      />
    </div>
  );
}

// ============== Template renderers ==============
function ClassicTemplate({ data, lang }: { data: CvData; lang: Lang }) {
  const isAR = lang === "ar";
  return (
    <div dir={isAR ? "rtl" : "ltr"} className="cv-page p-10 font-serif">
      <div className="border-b-2 border-[#0b1220] pb-4">
        <h1 className="text-3xl font-extrabold text-[#0b1220]">
          {data.fullName || (isAR ? "الاسم الكامل" : "Full Name")}
        </h1>
        <div className="mt-1 text-base text-[#475569]">{data.jobTitle || (isAR ? "المسمى الوظيفي" : "Job Title")}</div>
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#475569]">
          {data.email && <span>✉ {data.email}</span>}
          {data.phone && <span>☎ {data.phone}</span>}
          {data.location && <span>⚲ {data.location}</span>}
        </div>
      </div>
      {data.summary && (
        <Section title={isAR ? "الملخص المهني" : "Professional Summary"}>
          <p className="text-sm leading-relaxed text-[#0b1220]">{data.summary}</p>
        </Section>
      )}
      <ExperienceBlock data={data} lang={lang} />
      <EducationBlock data={data} lang={lang} />
      <SkillsLanguages data={data} lang={lang} />
      <CertificationsBlock data={data} lang={lang} />
    </div>
  );
}

function ModernTemplate({ data, lang }: { data: CvData; lang: Lang }) {
  const isAR = lang === "ar";
  return (
    <div dir={isAR ? "rtl" : "ltr"} className="cv-page p-10">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-1 border-e-2 border-[#b8862e] pe-4">
          <h1 className="text-2xl font-extrabold leading-tight text-[#0b1220]">
            {data.fullName || (isAR ? "الاسم" : "Name")}
          </h1>
          <div className="mt-1 text-sm font-bold uppercase tracking-wide text-[#b8862e]">{data.jobTitle}</div>
          <div className="mt-4 space-y-1 text-xs text-[#475569]">
            {data.email && <div>{data.email}</div>}
            {data.phone && <div>{data.phone}</div>}
            {data.location && <div>{data.location}</div>}
          </div>
          <SkillsLanguages data={data} lang={lang} compact />
        </div>
        <div className="col-span-2 space-y-4">
          {data.summary && (
            <Section title={isAR ? "نبذة" : "Profile"} accent>
              <p className="text-sm leading-relaxed text-[#0b1220]">{data.summary}</p>
            </Section>
          )}
          <ExperienceBlock data={data} lang={lang} accent />
          <EducationBlock data={data} lang={lang} accent />
          <CertificationsBlock data={data} lang={lang} accent />
        </div>
      </div>
    </div>
  );
}

function ElegantPhotoTemplate({ data, lang }: { data: CvData; lang: Lang }) {
  const isAR = lang === "ar";
  return (
    <div dir={isAR ? "rtl" : "ltr"} className="cv-page p-0">
      <div className="grid grid-cols-3 min-h-full">
        <aside className="col-span-1 bg-gradient-to-b from-[#b8862e] to-[#8a5a13] p-6 text-white">
          {data.photo ? (
            <img
              src={data.photo}
              alt=""
              className="mx-auto size-32 rounded-full border-4 border-white/80 object-cover"
            />
          ) : (
            <div className="mx-auto flex size-32 items-center justify-center rounded-full border-4 border-white/40 bg-white/10 text-white/70">
              <User className="size-12" />
            </div>
          )}
          <h1 className="mt-4 text-center text-xl font-extrabold leading-tight">
            {data.fullName || (isAR ? "الاسم" : "Name")}
          </h1>
          <div className="mt-1 text-center text-xs uppercase tracking-widest text-white/85">{data.jobTitle}</div>
          <div className="mt-5 space-y-2 text-[11px] text-white/90">
            {data.email && (
              <div className="flex items-center gap-2">
                <Mail className="size-3" />
                {data.email}
              </div>
            )}
            {data.phone && (
              <div className="flex items-center gap-2">
                <Phone className="size-3" />
                {data.phone}
              </div>
            )}
            {data.location && (
              <div className="flex items-center gap-2">
                <MapPin className="size-3" />
                {data.location}
              </div>
            )}
          </div>
          <div className="mt-5 space-y-3 text-white">
            {data.skills.length > 0 && (
              <div>
                <div className="mb-1 text-[10px] font-bold uppercase tracking-widest text-white/80">
                  {isAR ? "المهارات" : "Skills"}
                </div>
                <ul className="space-y-0.5 text-xs">
                  {data.skills.map((s, i) => (
                    <li key={i}>• {s}</li>
                  ))}
                </ul>
              </div>
            )}
            {data.languages.length > 0 && (
              <div>
                <div className="mb-1 text-[10px] font-bold uppercase tracking-widest text-white/80">
                  {isAR ? "اللغات" : "Languages"}
                </div>
                <ul className="space-y-0.5 text-xs">
                  {data.languages.map((s, i) => (
                    <li key={i}>• {s}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </aside>
        <main className="col-span-2 bg-white p-6">
          {data.summary && (
            <Section title={isAR ? "الملخص المهني" : "Profile"} accent>
              <p className="text-sm leading-relaxed text-[#0b1220]">{data.summary}</p>
            </Section>
          )}
          <ExperienceBlock data={data} lang={lang} accent />
          <EducationBlock data={data} lang={lang} accent />
          <CertificationsBlock data={data} lang={lang} accent />
        </main>
      </div>
    </div>
  );
}

function ExecutivePhotoTemplate({ data, lang }: { data: CvData; lang: Lang }) {
  const isAR = lang === "ar";
  return (
    <div dir={isAR ? "rtl" : "ltr"} className="cv-page p-0">
      <div className="bg-[#0b1220] p-6 text-white">
        <div className="flex items-center gap-5">
          {data.photo ? (
            <img src={data.photo} alt="" className="size-24 rounded-lg border-2 border-[#b8862e] object-cover" />
          ) : (
            <div className="flex size-24 items-center justify-center rounded-lg border-2 border-[#b8862e]/60 bg-white/5 text-white/70">
              <User className="size-10" />
            </div>
          )}
          <div className="flex-1">
            <h1 className="text-2xl font-extrabold tracking-tight text-white">
              {data.fullName || (isAR ? "الاسم" : "Name")}
            </h1>
            <div className="mt-1 text-sm font-bold uppercase tracking-[0.2em] text-[#f3d28a]">{data.jobTitle}</div>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-white/80">
              {data.email && <span>{data.email}</span>}
              {data.phone && <span>{data.phone}</span>}
              {data.location && <span>{data.location}</span>}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        {data.summary && (
          <Section title={isAR ? "نبذة تنفيذية" : "Executive Summary"} accent>
            <p className="text-sm leading-relaxed text-[#0b1220]">{data.summary}</p>
          </Section>
        )}
        <ExperienceBlock data={data} lang={lang} accent />
        <EducationBlock data={data} lang={lang} accent />
        <SkillsLanguages data={data} lang={lang} />
        <CertificationsBlock data={data} lang={lang} accent />
      </div>
    </div>
  );
}

// ============== Shared blocks ==============
function Section({ title, accent, children }: { title: string; accent?: boolean; children: React.ReactNode }) {
  return (
    <section className="mt-4">
      <h2
        className={`mb-2 text-xs font-extrabold uppercase tracking-[0.2em] ${accent ? "text-[#b8862e]" : "text-[#0b1220]"}`}
      >
        {title}
      </h2>
      <div className={accent ? "border-t border-[#b8862e]/40 pt-2" : "border-t border-[#0b1220]/30 pt-2"}>
        {children}
      </div>
    </section>
  );
}

function ExperienceBlock({ data, lang, accent }: { data: CvData; lang: Lang; accent?: boolean }) {
  const isAR = lang === "ar";
  if (data.experience.every((e) => !e.role && !e.company)) return null;
  return (
    <Section title={isAR ? "الخبرة العملية" : "Experience"} accent={accent}>
      <div className="space-y-3">
        {data.experience
          .filter((e) => e.role || e.company)
          .map((e) => (
            <div key={e.id}>
              <div className="flex items-baseline justify-between gap-2">
                <div className="text-sm font-bold text-[#0b1220]">{e.role}</div>
                <div className="text-[11px] text-[#475569]">{e.period}</div>
              </div>
              <div className="text-xs italic text-[#b8862e]">{e.company}</div>
              {e.description && (
                <p className="mt-1 text-xs leading-relaxed text-[#0b1220] whitespace-pre-line">{e.description}</p>
              )}
            </div>
          ))}
      </div>
    </Section>
  );
}

function EducationBlock({ data, lang, accent }: { data: CvData; lang: Lang; accent?: boolean }) {
  const isAR = lang === "ar";
  if (data.education.every((e) => !e.degree && !e.school)) return null;
  return (
    <Section title={isAR ? "التعليم" : "Education"} accent={accent}>
      <div className="space-y-2">
        {data.education
          .filter((e) => e.degree || e.school)
          .map((e) => (
            <div key={e.id}>
              <div className="flex items-baseline justify-between gap-2">
                <div className="text-sm font-bold text-[#0b1220]">{e.degree}</div>
                <div className="text-[11px] text-[#475569]">{e.period}</div>
              </div>
              <div className="text-xs italic text-[#b8862e]">{e.school}</div>
            </div>
          ))}
      </div>
    </Section>
  );
}

function SkillsLanguages({ data, lang, compact }: { data: CvData; lang: Lang; compact?: boolean }) {
  const isAR = lang === "ar";
  if (data.skills.length === 0 && data.languages.length === 0) return null;
  if (compact) {
    return (
      <>
        {data.skills.length > 0 && (
          <div className="mt-5">
            <div className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#b8862e]">
              {isAR ? "المهارات" : "Skills"}
            </div>
            <ul className="space-y-0.5 text-xs text-[#0b1220]">
              {data.skills.map((s, i) => (
                <li key={i}>• {s}</li>
              ))}
            </ul>
          </div>
        )}
        {data.languages.length > 0 && (
          <div className="mt-4">
            <div className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#b8862e]">
              {isAR ? "اللغات" : "Languages"}
            </div>
            <ul className="space-y-0.5 text-xs text-[#0b1220]">
              {data.languages.map((s, i) => (
                <li key={i}>• {s}</li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
  return (
    <div className="mt-4 grid grid-cols-2 gap-4">
      {data.skills.length > 0 && (
        <Section title={isAR ? "المهارات" : "Skills"}>
          <div className="flex flex-wrap gap-1.5">
            {data.skills.map((s, i) => (
              <span
                key={i}
                className="rounded border border-[#b8862e]/40 bg-[#f3d28a]/15 px-2 py-0.5 text-[11px] text-[#0b1220]"
              >
                {s}
              </span>
            ))}
          </div>
        </Section>
      )}
      {data.languages.length > 0 && (
        <Section title={isAR ? "اللغات" : "Languages"}>
          <div className="flex flex-wrap gap-1.5">
            {data.languages.map((s, i) => (
              <span
                key={i}
                className="rounded border border-[#b8862e]/40 bg-[#f3d28a]/15 px-2 py-0.5 text-[11px] text-[#0b1220]"
              >
                {s}
              </span>
            ))}
          </div>
        </Section>
      )}
    </div>
  );
}

function CertificationsBlock({ data, lang, accent }: { data: CvData; lang: Lang; accent?: boolean }) {
  const isAR = lang === "ar";
  if (data.certifications.length === 0) return null;
  return (
    <Section title={isAR ? "الشهادات" : "Certifications"} accent={accent}>
      <ul className="space-y-1">
        {data.certifications.map((c) => (
          <li key={c.id} className="flex items-baseline justify-between text-xs">
            <span className="font-bold text-[#0b1220]">
              {c.name}
              {c.issuer && <span className="font-normal italic text-[#b8862e]"> — {c.issuer}</span>}
            </span>
            <span className="text-[#475569]">{c.year}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Preview({ template, data, lang }: { template: TemplateId; data: CvData; lang: Lang }) {
  if (template === "modern") return <ModernTemplate data={data} lang={lang} />;
  if (template === "elegant-photo") return <ElegantPhotoTemplate data={data} lang={lang} />;
  if (template === "executive-photo") return <ExecutivePhotoTemplate data={data} lang={lang} />;
  return <ClassicTemplate data={data} lang={lang} />;
}

// ============== Main component ==============
export function CvBuilder({ lang }: { lang: Lang }) {
  const isAR = lang === "ar";
  const [template, setTemplate] = useState<TemplateId | null>(null);
  const [data, setData] = useState<CvData>(EMPTY);
  const [loadingKey, setLoadingKey] = useState<string | null>(null);
  const [exportLoading, setExportLoading] = useState(false);
  const [skillInput, setSkillInput] = useState("");
  const [langInput, setLangInput] = useState("");
  const previewRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const tplMeta = TEMPLATES.find((t) => t.id === template);
  const set = <K extends keyof CvData>(k: K, v: CvData[K]) => setData((d) => ({ ...d, [k]: v }));

  // ----- Template chooser -----
  if (!template) {
    return (
      <div>
        <div className="mb-4 text-center">
          <h3 className="text-lg font-extrabold text-[var(--fg)]">
            {isAR ? "اختر القالب لتبدأ" : "Choose a template to start"}
          </h3>
          <p className="mt-1 text-xs text-[var(--fg-soft)]">
            {isAR ? "يمكنك تغيير القالب لاحقاً." : "You can switch templates later."}
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {TEMPLATES.map((t) => (
            <button
              key={t.id}
              onClick={() => setTemplate(t.id)}
              className="group rounded-2xl border border-[#d7aa52]/30 bg-white/[0.03] p-4 text-start transition hover:-translate-y-0.5 hover:border-[#d7aa52] hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between">
                <div className="font-extrabold text-[var(--fg)]">{t.name[lang]}</div>
                {t.needsPhoto && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-[#d7aa52]/40 bg-[#d7aa52]/10 px-2 py-0.5 text-[10px] font-bold text-[#f3d28a]">
                    <ImageIcon className="size-3" />
                    {isAR ? "بصورة" : "Photo"}
                  </span>
                )}
              </div>
              <p className="mt-2 text-xs text-[var(--fg-soft)]">{t.desc[lang]}</p>
              <div className="mt-3 h-24 rounded-md border border-[#d7aa52]/20 bg-gradient-to-br from-white/5 to-white/0 p-2">
                <MiniPreview id={t.id} />
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ----- AI handler -----
  const aiCall = async (key: string, section: string, current: string, apply: (v: string) => void) => {
    if (!current.trim()) return;
    setLoadingKey(key);
    try {
      const out = await enhanceWithAI(section, current, lang, {
        role: data.jobTitle,
        name: data.fullName,
      });
      apply(out);
    } catch (e) {
      alert((e as Error).message || (isAR ? "تعذّر استدعاء الذكاء الاصطناعي" : "AI request failed"));
    } finally {
      setLoadingKey(null);
    }
  };

  // ----- Photo upload -----
  const onPhotoPick = (file: File | null) => {
    if (!file) return;
    if (file.size > 4 * 1024 * 1024) {
      alert(isAR ? "حجم الصورة كبير جداً (الحد 4MB)" : "Image too large (4MB max)");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => set("photo", String(reader.result || ""));
    reader.readAsDataURL(file);
  };

  // ----- PDF export -----
  const exportPdf = async () => {
    if (!previewRef.current) return;
    setExportLoading(true);

    try {
      const node = previewRef.current;

      // Save original styles
      const originalWidth = node.style.width;
      const originalTransform = node.style.transform;

      // Force exact A4 width and reset any scaling
      node.style.width = "794px";
      node.style.transform = "none";

      // Wait for layout to settle
      await new Promise((r) => setTimeout(r, 300));

      const canvas = await html2canvas(node, {
        backgroundColor: "#ffffff",
        scale: 3,
        useCORS: true,
        allowTaint: true,
        logging: false,
        width: 794,
        height: node.scrollHeight,
        windowWidth: 794,
        scrollX: 0,
        scrollY: 0,
        onclone: (clonedDoc) => {
          const clonedNode = clonedDoc.querySelector(".cv-canvas") as HTMLElement;
          if (clonedNode) {
            clonedNode.style.width = "794px";
            clonedNode.style.transform = "none";
            clonedNode.style.boxShadow = "none";
          }
        },
      });

      // Restore original styles
      node.style.width = originalWidth;
      node.style.transform = originalTransform;

      const pdf = new jsPDF({
        unit: "mm",
        format: "a4",
        orientation: "portrait",
        compress: true,
      });

      const pageW = 210; // A4 width in mm
      const pageH = 297; // A4 height in mm
      const pxPerMm = canvas.width / pageW;
      const pageHpx = pageH * pxPerMm;

      let renderedPx = 0;
      let first = true;

      while (renderedPx < canvas.height) {
        const takePx = Math.min(pageHpx, canvas.height - renderedPx);
        const slice = document.createElement("canvas");
        slice.width = canvas.width;
        slice.height = takePx;
        const ctx = slice.getContext("2d")!;
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, slice.width, slice.height);
        ctx.drawImage(canvas, 0, renderedPx, canvas.width, takePx, 0, 0, canvas.width, takePx);

        if (!first) pdf.addPage();
        pdf.addImage(slice.toDataURL("image/jpeg", 1.0), "JPEG", 0, 0, pageW, takePx / pxPerMm);
        renderedPx += takePx;
        first = false;
      }

      const name = (data.fullName || "CV").replace(/[^a-zA-Z0-9\u0600-\u06FF-_]+/g, "_");
      pdf.save(`${name}-CV.pdf`);
    } catch (err) {
      console.error("CV PDF export failed:", err);
      alert(
        lang === "ar"
          ? `تعذّر إنشاء ملف PDF: ${(err as Error).message}`
          : `Failed to generate PDF: ${(err as Error).message}`,
      );
    } finally {
      setExportLoading(false);
    }
  };

  // ----- List item helpers -----
  const addExperience = () =>
    set("experience", [...data.experience, { id: uid(), role: "", company: "", period: "", description: "" }]);
  const updExperience = (id: string, patch: Partial<Experience>) =>
    set(
      "experience",
      data.experience.map((e) => (e.id === id ? { ...e, ...patch } : e)),
    );
  const delExperience = (id: string) =>
    set(
      "experience",
      data.experience.filter((e) => e.id !== id),
    );

  const addEducation = () => set("education", [...data.education, { id: uid(), degree: "", school: "", period: "" }]);
  const updEducation = (id: string, patch: Partial<Education>) =>
    set(
      "education",
      data.education.map((e) => (e.id === id ? { ...e, ...patch } : e)),
    );
  const delEducation = (id: string) =>
    set(
      "education",
      data.education.filter((e) => e.id !== id),
    );

  const addCert = () => set("certifications", [...data.certifications, { id: uid(), name: "", issuer: "", year: "" }]);
  const updCert = (id: string, patch: Partial<Certification>) =>
    set(
      "certifications",
      data.certifications.map((e) => (e.id === id ? { ...e, ...patch } : e)),
    );
  const delCert = (id: string) =>
    set(
      "certifications",
      data.certifications.filter((e) => e.id !== id),
    );

  return (
    <div className="space-y-6">
      {/* Top toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-[#d7aa52]/25 bg-white/[0.03] p-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-bold text-[var(--fg-soft)]">{isAR ? "القالب:" : "Template:"}</span>
          {TEMPLATES.map((t) => (
            <button
              key={t.id}
              onClick={() => setTemplate(t.id)}
              className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-bold transition ${
                template === t.id
                  ? "border-[#d7aa52] bg-[#d7aa52]/15 text-[#f3d28a]"
                  : "border-white/10 text-[var(--fg-soft)] hover:bg-white/5"
              }`}
            >
              {template === t.id && <Check className="size-3" />}
              {t.name[lang]}
              {t.needsPhoto && <ImageIcon className="size-3 opacity-70" />}
            </button>
          ))}
        </div>
        <button
          onClick={exportPdf}
          disabled={exportLoading}
          className="inline-flex items-center gap-1.5 rounded-full border border-[#d7aa52] bg-gradient-to-br from-[#f3d28a] to-[#b8862e] px-3 py-1.5 text-xs font-bold text-[#04101f] hover:opacity-95 disabled:opacity-60"
        >
          {exportLoading ? <Loader2 className="size-3.5 animate-spin" /> : <Download className="size-3.5" />}
          {isAR ? "تصدير CV بصيغة PDF" : "Export CV as PDF"}
        </button>
      </div>

<div className="flex flex-col gap-8">
        {/* ===== FORM ===== */}
        <div className="space-y-5">
          <FormCard title={isAR ? "البيانات الشخصية" : "Personal Info"} icon={User}>
            <div className="grid grid-cols-2 gap-3">
              <Field
                label={isAR ? "الاسم الكامل" : "Full Name"}
                value={data.fullName}
                onChange={(v) => set("fullName", v)}
              />
              <Field
                label={isAR ? "المسمى الوظيفي" : "Job Title"}
                value={data.jobTitle}
                onChange={(v) => set("jobTitle", v)}
              />
              <Field
                label={isAR ? "البريد الإلكتروني" : "Email"}
                value={data.email}
                onChange={(v) => set("email", v)}
                type="email"
              />
              <Field label={isAR ? "الجوال" : "Phone"} value={data.phone} onChange={(v) => set("phone", v)} />
              <Field
                label={isAR ? "المدينة / الدولة" : "Location"}
                value={data.location}
                onChange={(v) => set("location", v)}
              />
            </div>
            {tplMeta?.needsPhoto && (
              <div className="mt-3 rounded-lg border border-dashed border-[#d7aa52]/40 bg-[#d7aa52]/5 p-3">
                <div className="flex items-center gap-3">
                  {data.photo ? (
                    <img src={data.photo} alt="" className="size-14 rounded-full object-cover" />
                  ) : (
                    <div className="flex size-14 items-center justify-center rounded-full border border-[#d7aa52]/40 bg-white/5 text-[var(--fg-soft)]">
                      <ImageIcon className="size-5" />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="text-xs font-bold text-[var(--fg)]">
                      {isAR ? "الصورة الشخصية" : "Profile Photo"}
                    </div>
                    <div className="text-[10px] text-[var(--fg-soft)]">
                      {isAR ? "JPG / PNG، الحد 4MB" : "JPG / PNG, max 4MB"}
                    </div>
                  </div>
                  <input
                    ref={fileRef}
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={(e) => onPhotoPick(e.target.files?.[0] ?? null)}
                  />
                  <button
                    onClick={() => fileRef.current?.click()}
                    className="inline-flex items-center gap-1 rounded-full border border-[#d7aa52]/50 bg-[#d7aa52]/10 px-2.5 py-1 text-[11px] font-bold text-[#f3d28a] hover:bg-[#d7aa52]/20"
                  >
                    <ImageIcon className="size-3" />
                    {isAR ? "إدراج صورة" : "Upload"}
                  </button>
                  {data.photo && (
                    <button
                      onClick={() => set("photo", "")}
                      className="text-[10px] font-bold text-red-400 hover:underline"
                    >
                      {isAR ? "إزالة" : "Remove"}
                    </button>
                  )}
                </div>
              </div>
            )}
          </FormCard>

          <FormCard title={isAR ? "الملخص المهني" : "Professional Summary"} icon={Wand2}>
            <Area
              label={isAR ? "نبذة موجزة عنك" : "Brief professional summary"}
              value={data.summary}
              onChange={(v) => set("summary", v)}
              rows={4}
              onEnhance={() => aiCall("summary", "summary", data.summary, (v) => set("summary", v))}
              loading={loadingKey === "summary"}
              placeholder={isAR ? "محاسب قانوني بخبرة 6 سنوات..." : "Senior accountant with 6 years experience..."}
            />
          </FormCard>

          <FormCard title={isAR ? "الخبرة العملية" : "Experience"} icon={Briefcase}>
            <div className="space-y-3">
              {data.experience.map((e) => (
                <div key={e.id} className="rounded-lg border border-[#d7aa52]/20 bg-white/[0.02] p-3">
                  <div className="grid grid-cols-2 gap-2">
                    <Field
                      label={isAR ? "المسمى" : "Role"}
                      value={e.role}
                      onChange={(v) => updExperience(e.id, { role: v })}
                    />
                    <Field
                      label={isAR ? "الشركة" : "Company"}
                      value={e.company}
                      onChange={(v) => updExperience(e.id, { company: v })}
                    />
                    <div className="col-span-2">
                      <Field
                        label={isAR ? "الفترة" : "Period"}
                        value={e.period}
                        onChange={(v) => updExperience(e.id, { period: v })}
                        placeholder={isAR ? "يناير 2022 - الآن" : "Jan 2022 – Present"}
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    <Area
                      label={isAR ? "الإنجازات والمهام" : "Achievements & responsibilities"}
                      value={e.description}
                      onChange={(v) => updExperience(e.id, { description: v })}
                      onEnhance={() =>
                        aiCall(`exp-${e.id}`, `experience: ${e.role} @ ${e.company}`, e.description, (v) =>
                          updExperience(e.id, { description: v }),
                        )
                      }
                      loading={loadingKey === `exp-${e.id}`}
                      rows={3}
                    />
                  </div>
                  <div className="mt-2 text-end">
                    <button
                      onClick={() => delExperience(e.id)}
                      className="inline-flex items-center gap-1 text-[10px] font-bold text-red-400 hover:underline"
                    >
                      <Trash2 className="size-3" />
                      {isAR ? "حذف" : "Delete"}
                    </button>
                  </div>
                </div>
              ))}
              <button
                onClick={addExperience}
                className="inline-flex items-center gap-1 rounded-full border border-[#d7aa52]/40 px-3 py-1 text-[11px] font-bold text-[#f3d28a] hover:bg-[#d7aa52]/10"
              >
                <Plus className="size-3" />
                {isAR ? "إضافة خبرة" : "Add experience"}
              </button>
            </div>
          </FormCard>

          <FormCard title={isAR ? "التعليم" : "Education"} icon={GraduationCap}>
            <div className="space-y-2">
              {data.education.map((e) => (
                <div key={e.id} className="rounded-lg border border-[#d7aa52]/20 bg-white/[0.02] p-3">
                  <div className="grid grid-cols-2 gap-2">
                    <Field
                      label={isAR ? "الدرجة" : "Degree"}
                      value={e.degree}
                      onChange={(v) => updEducation(e.id, { degree: v })}
                    />
                    <Field
                      label={isAR ? "الجامعة" : "School"}
                      value={e.school}
                      onChange={(v) => updEducation(e.id, { school: v })}
                    />
                    <div className="col-span-2">
                      <Field
                        label={isAR ? "الفترة" : "Period"}
                        value={e.period}
                        onChange={(v) => updEducation(e.id, { period: v })}
                      />
                    </div>
                  </div>
                  <div className="mt-2 text-end">
                    <button
                      onClick={() => delEducation(e.id)}
                      className="inline-flex items-center gap-1 text-[10px] font-bold text-red-400 hover:underline"
                    >
                      <Trash2 className="size-3" />
                      {isAR ? "حذف" : "Delete"}
                    </button>
                  </div>
                </div>
              ))}
              <button
                onClick={addEducation}
                className="inline-flex items-center gap-1 rounded-full border border-[#d7aa52]/40 px-3 py-1 text-[11px] font-bold text-[#f3d28a] hover:bg-[#d7aa52]/10"
              >
                <Plus className="size-3" />
                {isAR ? "إضافة تعليم" : "Add education"}
              </button>
            </div>
          </FormCard>

          <FormCard title={isAR ? "المهارات واللغات" : "Skills & Languages"} icon={LangIcon}>
            <TagInput
              label={isAR ? "المهارات" : "Skills"}
              value={skillInput}
              onChange={setSkillInput}
              items={data.skills}
              onAdd={(v) => set("skills", [...data.skills, v])}
              onRemove={(i) =>
                set(
                  "skills",
                  data.skills.filter((_, idx) => idx !== i),
                )
              }
              lang={lang}
            />
            <TagInput
              label={isAR ? "اللغات" : "Languages"}
              value={langInput}
              onChange={setLangInput}
              items={data.languages}
              onAdd={(v) => set("languages", [...data.languages, v])}
              onRemove={(i) =>
                set(
                  "languages",
                  data.languages.filter((_, idx) => idx !== i),
                )
              }
              lang={lang}
            />
          </FormCard>

          <FormCard title={isAR ? "الشهادات" : "Certifications"} icon={Check}>
            <div className="space-y-2">
              {data.certifications.map((c) => (
                <div
                  key={c.id}
                  className="grid grid-cols-7 items-end gap-2 rounded-lg border border-[#d7aa52]/20 bg-white/[0.02] p-3"
                >
                  <div className="col-span-3">
                    <Field
                      label={isAR ? "الاسم" : "Name"}
                      value={c.name}
                      onChange={(v) => updCert(c.id, { name: v })}
                    />
                  </div>
                  <div className="col-span-3">
                    <Field
                      label={isAR ? "المُصدر" : "Issuer"}
                      value={c.issuer}
                      onChange={(v) => updCert(c.id, { issuer: v })}
                    />
                  </div>
                  <div className="col-span-1">
                    <Field
                      label={isAR ? "السنة" : "Year"}
                      value={c.year}
                      onChange={(v) => updCert(c.id, { year: v })}
                    />
                  </div>
                  <div className="col-span-7 text-end">
                    <button
                      onClick={() => delCert(c.id)}
                      className="inline-flex items-center gap-1 text-[10px] font-bold text-red-400 hover:underline"
                    >
                      <Trash2 className="size-3" />
                      {isAR ? "حذف" : "Delete"}
                    </button>
                  </div>
                </div>
              ))}
              <button
                onClick={addCert}
                className="inline-flex items-center gap-1 rounded-full border border-[#d7aa52]/40 px-3 py-1 text-[11px] font-bold text-[#f3d28a] hover:bg-[#d7aa52]/10"
              >
                <Plus className="size-3" />
                {isAR ? "إضافة شهادة" : "Add certification"}
              </button>
            </div>
          </FormCard>
        </div>

{/* ===== PREVIEW ===== */}
<div className="w-full">
  <div className="mb-2 flex items-center justify-between">
    <div className="text-xs font-bold uppercase tracking-wider text-[#f3d28a]">
      {isAR ? "المعاينة المباشرة" : "Live Preview"}
    </div>
    <div className="text-[10px] text-[var(--fg-soft)]">A4</div>
  </div>
<div className="w-full overflow-hidden rounded-xl border border-[#d7aa52]/30 bg-[#f5f5f7] p-3 shadow-inner">
    {/* Scaling wrapper */}
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
  transform: "scale(var(--cv-scale, 0.95))",
          transformOrigin: "top center",
          width: 794,
          minHeight: 1123,
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "calc((var(--cv-scale, 0.6) - 1) * 1123px)",
        }}
        ref={previewRef}
        className="cv-canvas bg-white text-[#0b1220] shadow-xl"
      >
        <Preview template={template} data={data} lang={lang} />
      </div>
    </div>
  </div>
</div>

function FormCard({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-[#d7aa52]/25 bg-white/[0.03] p-4">
      <div className="mb-3 inline-flex items-center gap-2 text-sm font-extrabold text-[#f3d28a]">
        <Icon className="size-4" />
        {title}
      </div>
      {children}
    </div>
  );
}

function TagInput({
  label,
  value,
  onChange,
  items,
  onAdd,
  onRemove,
  lang,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  items: string[];
  onAdd: (v: string) => void;
  onRemove: (i: number) => void;
  lang: Lang;
}) {
  const isAR = lang === "ar";
  const commit = () => {
    const t = value.trim();
    if (!t) return;
    onAdd(t);
    onChange("");
  };
  return (
    <div className="mb-3">
      <span className="mb-1 block text-[11px] font-bold text-[var(--fg-soft)]">{label}</span>
      <div className="flex gap-2">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              commit();
            }
          }}
          placeholder={isAR ? "اكتب ثم اضغط Enter" : "Type then press Enter"}
          className="flex-1 rounded-lg border border-[#d7aa52]/30 bg-white/[0.04] px-3 py-2 text-sm text-[var(--fg)] outline-none focus:border-[#d7aa52]/70"
        />
        <button
          type="button"
          onClick={commit}
          className="rounded-lg border border-[#d7aa52]/40 bg-[#d7aa52]/10 px-3 text-sm font-bold text-[#f3d28a] hover:bg-[#d7aa52]/20"
        >
          <Plus className="size-4" />
        </button>
      </div>
      {items.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {items.map((s, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1 rounded-full border border-[#d7aa52]/30 bg-[#d7aa52]/10 px-2 py-0.5 text-[11px] text-[#f3d28a]"
            >
              {s}
              <button onClick={() => onRemove(i)} className="text-red-400 hover:underline">
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// tiny visual placeholder for template chooser cards
function MiniPreview({ id }: { id: TemplateId }) {
  if (id === "elegant-photo") {
    return (
      <div className="flex h-full gap-1">
        <div className="w-1/3 rounded bg-gradient-to-b from-[#b8862e] to-[#8a5a13]">
          <div className="m-1 size-4 rounded-full bg-white/80" />
        </div>
        <div className="flex-1 space-y-1 p-1">
          <div className="h-1.5 w-2/3 rounded bg-[#0b1220]/40" />
          <div className="h-1 w-full rounded bg-[#0b1220]/15" />
          <div className="h-1 w-5/6 rounded bg-[#0b1220]/15" />
        </div>
      </div>
    );
  }
  if (id === "executive-photo") {
    return (
      <div className="flex h-full flex-col gap-1">
        <div className="flex h-7 items-center gap-1 rounded bg-[#0b1220] px-1.5">
          <div className="size-4 rounded bg-[#b8862e]/80" />
          <div className="h-1.5 flex-1 rounded bg-[#f3d28a]/60" />
        </div>
        <div className="flex-1 space-y-1 p-1">
          <div className="h-1 w-full rounded bg-[#0b1220]/20" />
          <div className="h-1 w-4/5 rounded bg-[#0b1220]/20" />
        </div>
      </div>
    );
  }
  if (id === "modern") {
    return (
      <div className="flex h-full gap-1">
        <div className="w-1/3 space-y-1 border-e border-[#b8862e]">
          <div className="h-2 w-full rounded bg-[#0b1220]/60" />
          <div className="h-1 rounded bg-[#b8862e]/60" />
        </div>
        <div className="flex-1 space-y-1">
          <div className="h-1 w-full rounded bg-[#0b1220]/30" />
          <div className="h-1 w-5/6 rounded bg-[#0b1220]/20" />
          <div className="h-1 w-4/6 rounded bg-[#0b1220]/20" />
        </div>
      </div>
    );
  }
  return (
    <div className="space-y-1">
      <div className="h-2 w-1/2 rounded bg-[#0b1220]/70" />
      <div className="h-px w-full bg-[#0b1220]/50" />
      <div className="h-1 w-full rounded bg-[#0b1220]/20" />
      <div className="h-1 w-5/6 rounded bg-[#0b1220]/20" />
      <div className="h-1 w-4/6 rounded bg-[#0b1220]/20" />
    </div>
  );
}

  {/* FORM SECTION MOVED DOWN */}
<div className="mt-10 space-y-5">
  {/* انسخ نفس محتوى الفورم الحالي هنا بدون تغيير */}
</div>

  <div className="min-h-screen bg-[#0b1220]/5 p-6">
