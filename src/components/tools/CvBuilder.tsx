import { useEffect, useMemo, useRef, useState } from "react";
import jsPDF from "jspdf";
import {
  Award,
  Briefcase,
  Download,
  GraduationCap,
  Languages as LangIcon,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Plus,
  Trash2,
  User,
  Wand2,
} from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { capturePdfElement } from "@/lib/pdf-export";
import { enhanceCvSection, parseGeneratedList } from "@/features/cv/assistant";
import { scoreCv } from "@/features/cv/quality";
import { CV_TEMPLATES, getCvTemplate } from "@/features/cv/templates";
import type { Certification, CvAssistantAction, CvData, CvTemplateId, Education, Experience } from "@/features/cv/types";
import { CvPreview } from "@/features/cv/CvPreview";

/* ================= TYPES ================= */

const uid = () => Math.random().toString(36).slice(2, 9);

const EMPTY: CvData = {
  fullName: "",
  jobTitle: "",
  email: "",
  phone: "",
  location: "",
  summary: "",
  experience: [{ id: uid(), role: "", company: "", period: "", description: "" }],
  education: [{ id: uid(), degree: "", school: "", period: "" }],
  skills: [],
  languages: [],
  certifications: [],
};

/* ================= UI bits ================= */

function FormCard({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-[#d7aa52]/30 bg-white/[0.03] p-4">
      <div className="mb-3 flex items-center gap-2 text-sm font-bold text-[#f3d28a]">
        <Icon className="w-4 h-4" />
        {title}
      </div>
      {children}
    </div>
  );
}

function Field({
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <input
      value={value}
      placeholder={placeholder}
      type={type}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-md border border-[#d7aa52]/30 bg-[#04101f]/60 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#d7aa52] mb-2"
    />
  );
}

function Area({
  value,
  onChange,
  placeholder,
  rows = 3,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      rows={rows}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-md border border-[#d7aa52]/30 bg-[#04101f]/60 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#d7aa52] mb-2 resize-y"
    />
  );
}

function AiActions({
  lang,
  loading,
  section,
  onRun,
}: {
  lang: Lang;
  loading: string | null;
  section: string;
  onRun: (action: CvAssistantAction) => void;
}) {
  const actions: { id: CvAssistantAction; ar: string; en: string }[] = [
    { id: "generate", ar: "توليد", en: "Generate" },
    { id: "improve", ar: "تحسين", en: "Improve" },
    { id: "shorten", ar: "اختصار", en: "Shorten" },
    { id: "expand", ar: "توسيع", en: "Expand" },
    { id: "professionalize", ar: "احترافي", en: "Professionalize" },
    { id: "ats", ar: "ATS", en: "ATS" },
  ];
  return (
    <div className="mt-2 flex flex-wrap gap-1.5">
      {actions.map((action) => {
        const active = loading === `${section}-${action.id}`;
        return (
          <button
            key={action.id}
            type="button"
            disabled={!!loading}
            onClick={() => onRun(action.id)}
            className="inline-flex items-center gap-1 rounded-md border border-[#d7aa52]/35 bg-[#d7aa52]/5 px-2 py-1 text-[10px] font-bold text-[#f3d28a] hover:bg-[#d7aa52]/10 disabled:opacity-60"
          >
            {active ? <Loader2 className="size-3 animate-spin" /> : <Wand2 className="size-3" />}
            {lang === "ar" ? action.ar : action.en}
          </button>
        );
      })}
    </div>
  );
}

/* ================= MAIN ================= */

export function CvBuilder({ lang }: { lang: Lang }) {
  const isAR = lang === "ar";
  const [data, setData] = useState<CvData>(EMPTY);
  const [templateId, setTemplateId] = useState<CvTemplateId>("modern-executive");
  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState<string | null>(null);
  const [skillInput, setSkillInput] = useState("");
  const [langInput, setLangInput] = useState("");
  const [photoPreview, setPhotoPreview] = useState<string | undefined>(undefined);
  const previewRef = useRef<HTMLDivElement>(null);
  const template = getCvTemplate(templateId);
  const quality = useMemo(() => scoreCv(data), [data]);

  // Load any previously-saved draft after mount (SSR-safe: reading
  // localStorage inside a useState initializer would make the client's
  // first render differ from the server-rendered HTML).
  useEffect(() => {
    try {
      const raw = localStorage.getItem("cv-builder-draft");
      if (!raw) return;
      const saved = JSON.parse(raw) as {
        data?: CvData;
        templateId?: CvTemplateId;
        photoPreview?: string;
      };
      if (saved.data) setData(saved.data);
      if (saved.templateId) setTemplateId(saved.templateId);
      if (saved.photoPreview) setPhotoPreview(saved.photoPreview);
    } catch {
      /* noop */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("cv-builder-draft", JSON.stringify({ data, templateId, photoPreview }));
    } catch {
      /* storage full or unavailable — draft simply won't persist */
    }
  }, [data, templateId, photoPreview]);

  const set = <K extends keyof CvData>(k: K, v: CvData[K]) => setData((d) => ({ ...d, [k]: v }));

  /* ============= List helpers ============= */
  const addExp = () =>
    set("experience", [...data.experience, { id: uid(), role: "", company: "", period: "", description: "" }]);
  const updExp = (id: string, patch: Partial<Experience>) =>
    set("experience", data.experience.map((x) => (x.id === id ? { ...x, ...patch } : x)));
  const delExp = (id: string) => set("experience", data.experience.filter((x) => x.id !== id));

  const addEdu = () => set("education", [...data.education, { id: uid(), degree: "", school: "", period: "" }]);
  const updEdu = (id: string, patch: Partial<Education>) =>
    set("education", data.education.map((x) => (x.id === id ? { ...x, ...patch } : x)));
  const delEdu = (id: string) => set("education", data.education.filter((x) => x.id !== id));

  const addCert = () => set("certifications", [...data.certifications, { id: uid(), name: "", issuer: "", year: "" }]);
  const updCert = (id: string, patch: Partial<Certification>) =>
    set("certifications", data.certifications.map((x) => (x.id === id ? { ...x, ...patch } : x)));
  const delCert = (id: string) => set("certifications", data.certifications.filter((x) => x.id !== id));

  const addSkill = () => {
    const v = skillInput.trim();
    if (!v) return;
    set("skills", [...data.skills, v]);
    setSkillInput("");
  };
  const addLang = () => {
    const v = langInput.trim();
    if (!v) return;
    set("languages", [...data.languages, v]);
    setLangInput("");
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setPhotoPreview(result);
      set("photo", result);
    };
    reader.readAsDataURL(file);
  };

  const runAi = async (section: string, text: string, action: CvAssistantAction, apply: (value: string) => void) => {
    setAiLoading(`${section}-${action}`);
    try {
      const next = await enhanceCvSection({ section, text, lang, action, context: data });
      apply(next);
    } catch (error) {
      alert(error instanceof Error ? error.message : isAR ? "تعذّر تشغيل المساعد" : "AI assistant failed");
    } finally {
      setAiLoading(null);
    }
  };

  /* ================= PDF EXPORT ================= */

  const exportPDF = async () => {
    const node = previewRef.current;
    if (!node) return;
    setLoading(true);
    try {
      const canvas = await capturePdfElement(node);
      const imgData = canvas.toDataURL("image/jpeg", 0.95);
      const pdf = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();
      const imgW = pageW;
      const imgH = (canvas.height * imgW) / canvas.width;

      if (imgH <= pageH) {
        pdf.addImage(imgData, "JPEG", 0, 0, imgW, imgH);
      } else {
        // Paginate: slice canvas into A4-height strips
        let renderedPx = 0;
        const sliceHpx = (pageH * canvas.width) / imgW;
        let first = true;
        while (renderedPx < canvas.height) {
          const remainingPx = canvas.height - renderedPx;
          const takePx = Math.min(sliceHpx, remainingPx);
          const slice = document.createElement("canvas");
          slice.width = canvas.width;
          slice.height = takePx;
          const ctx = slice.getContext("2d");
          if (!ctx) break;
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, slice.width, slice.height);
          ctx.drawImage(canvas, 0, renderedPx, canvas.width, takePx, 0, 0, canvas.width, takePx);
          const sliceData = slice.toDataURL("image/jpeg", 0.95);
          const drawnH = (takePx * imgW) / canvas.width;
          if (!first) pdf.addPage();
          pdf.addImage(sliceData, "JPEG", 0, 0, imgW, drawnH);
          first = false;
          renderedPx += takePx;
        }
      }

      const safeName = (data.fullName || "cv").replace(/[^\p{L}\p{N}_-]+/gu, "_");
      pdf.save(`${safeName}.pdf`);
    } catch (e) {
      console.error("CV PDF export failed", e);
      alert(isAR ? "تعذّر تصدير الملف. حاول مجددًا." : "Export failed. Please try again.");
    } finally {
      setLoading(false);
    }

  };

  /* ================= RENDER ================= */

  const dir = isAR ? "rtl" : "ltr";
  const heading = isAR
    ? { info: "البيانات الشخصية", summary: "نبذة", exp: "الخبرة العملية", edu: "التعليم", skills: "المهارات", langs: "اللغات", certs: "الشهادات", export: "تصدير PDF", add: "إضافة", preview: "معاينة السيرة الذاتية", form: "بيانات السيرة الذاتية", templates: "قوالب السيرة", score: "جودة السيرة", ai: "مساعد الكتابة" }
    : { info: "Personal Info", summary: "Summary", exp: "Experience", edu: "Education", skills: "Skills", langs: "Languages", certs: "Certifications", export: "Export PDF", add: "Add", preview: "CV Preview", form: "CV Data", templates: "CV Templates", score: "CV Quality", ai: "Writing Assistant" };

  return (
    <div dir={dir} className="w-full px-4 py-6 space-y-8">
      {/* ============= PREVIEW (TOP, FULL WIDTH) ============= */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-extrabold text-[#f3d28a]">{heading.preview}</h2>
            <div className="mt-1 text-xs font-bold text-[var(--fg-soft)]">
              {heading.score}: <span className="text-[#f3d28a]">{quality.score}%</span>
            </div>
          </div>
          <button
            onClick={exportPDF}
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#f3d28a] to-[#b8862e] px-5 py-2.5 text-sm font-bold text-[#04101f] shadow-lg shadow-[#d7aa52]/30 transition-transform hover:scale-105 disabled:opacity-60"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
            {heading.export}
          </button>
        </div>

        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {CV_TEMPLATES.map((item) => (
            <button
              key={item.id}
              onClick={() => setTemplateId(item.id)}
              className={`rounded-xl border p-3 text-start transition ${templateId === item.id ? "border-[#f3d28a] bg-[#d7aa52]/15" : "border-[#d7aa52]/25 bg-white/[0.03] hover:bg-white/[0.06]"}`}
            >
              <div className="mb-2 flex h-12 overflow-hidden rounded-md border border-white/10 bg-white">
                <span className="w-1/3" style={{ background: item.secondary }} />
                <span className="flex-1 p-2"><i className="block h-1.5 w-16 rounded" style={{ background: item.accent }} /><i className="mt-2 block h-1 w-24 rounded bg-slate-200" /><i className="mt-1 block h-1 w-14 rounded bg-slate-200" /></span>
              </div>
              <div className="text-xs font-extrabold text-[#f3d28a]">{item.name[lang]}</div>
              <div className="mt-1 text-[11px] text-[var(--fg-soft)]">{item.description[lang]}</div>
            </button>
          ))}
        </div>

        <div className="rounded-xl border border-[#d7aa52]/30 bg-[#04101f]/40 p-3 max-h-[80vh] overflow-auto">
          <CvPreview data={data} template={template} lang={lang} previewRef={previewRef} />
        </div>
      </div>

      {/* ============= FORM (BELOW PREVIEW) ============= */}
      <div className="space-y-4">
        <h2 className="text-lg font-extrabold text-[#f3d28a] flex items-center gap-2">
          <Wand2 className="w-5 h-5" /> {heading.form}
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <FormCard title={heading.info} icon={User}>
            <Field value={data.fullName} onChange={(v) => set("fullName", v)} placeholder={isAR ? "الاسم الكامل" : "Full name"} />
            <Field value={data.jobTitle} onChange={(v) => set("jobTitle", v)} placeholder={isAR ? "المسمى الوظيفي" : "Job title"} />
            <Field value={data.email} onChange={(v) => set("email", v)} placeholder="email@example.com" type="email" />
            <Field value={data.phone} onChange={(v) => set("phone", v)} placeholder={isAR ? "رقم الجوال" : "Phone"} />
            <Field value={data.location} onChange={(v) => set("location", v)} placeholder={isAR ? "المدينة، الدولة" : "City, Country"} />
            <Field value={data.website ?? ""} onChange={(v) => set("website", v)} placeholder={isAR ? "الموقع / LinkedIn" : "Website / LinkedIn"} />
            <label className="block text-xs text-[var(--fg-soft)] mb-1 mt-2">
              {isAR ? "الصورة الشخصية" : "Profile Photo"}
            </label>
            {photoPreview && (
              <div className="flex items-center gap-2 mb-2">
                <img src={photoPreview} alt="" className="w-12 h-12 rounded-full object-cover border border-[#d7aa52]/40" />
                <button
                  type="button"
                  onClick={() => { setPhotoPreview(undefined); set("photo", undefined); }}
                  className="text-xs text-red-300 hover:text-red-200"
                >
                  {isAR ? "حذف الصورة" : "Remove"}
                </button>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="w-full text-xs text-white file:mr-2 file:rounded-md file:border-0 file:bg-[#d7aa52]/20 file:px-3 file:py-1.5 file:text-[#f3d28a]"
            />
          </FormCard>

          <FormCard title={heading.summary} icon={Mail}>
            <Area
              value={data.summary}
              onChange={(v) => set("summary", v)}
              placeholder={isAR ? "نبذة مختصرة عن خبرتك وتخصصك..." : "A brief summary of your expertise..."}
              rows={6}
            />
            <AiActions
              lang={lang}
              loading={aiLoading}
              section="summary"
              onRun={(action) => runAi("summary", data.summary, action, (value) => set("summary", value))}
            />
          </FormCard>
        </div>

        <div className="rounded-xl border border-[#d7aa52]/25 bg-white/[0.03] p-4">
          <div className="mb-2 flex items-center justify-between gap-3">
            <h3 className="text-sm font-extrabold text-[#f3d28a]">{heading.score}</h3>
            <span className="rounded-full border border-[#d7aa52]/35 px-3 py-1 text-xs font-black text-[#f3d28a]">{quality.score}%</span>
          </div>
          <div className="grid gap-1 text-xs text-[var(--fg-soft)] md:grid-cols-2">
            {quality.recommendations.map((item, index) => <span key={index}>• {item[lang]}</span>)}
          </div>
        </div>

        <FormCard title={heading.exp} icon={Briefcase}>
          {data.experience.map((e) => (
            <div key={e.id} className="rounded-md border border-white/10 p-3 mb-3 space-y-2">
              <div className="grid sm:grid-cols-2 gap-2">
                <Field value={e.role} onChange={(v) => updExp(e.id, { role: v })} placeholder={isAR ? "المسمى" : "Role"} />
                <Field value={e.company} onChange={(v) => updExp(e.id, { company: v })} placeholder={isAR ? "الجهة" : "Company"} />
              </div>
              <Field value={e.period} onChange={(v) => updExp(e.id, { period: v })} placeholder={isAR ? "الفترة (مثال: 2022 - الآن)" : "Period (e.g. 2022 - Present)"} />
              <Area value={e.description} onChange={(v) => updExp(e.id, { description: v })} placeholder={isAR ? "وصف موجز للمسؤوليات والإنجازات" : "Brief responsibilities & achievements"} />
              <AiActions
                lang={lang}
                loading={aiLoading}
                section={`experience-${e.id}`}
                onRun={(action) => runAi("experience", e.description, action, (value) => updExp(e.id, { description: value }))}
              />
              <button onClick={() => delExp(e.id)} className="text-xs text-red-300 hover:text-red-200 inline-flex items-center gap-1">
                <Trash2 className="w-3 h-3" /> {isAR ? "حذف" : "Remove"}
              </button>
            </div>
          ))}
          <button onClick={addExp} className="inline-flex items-center gap-1 rounded-md border border-[#d7aa52]/40 px-3 py-1.5 text-xs font-bold text-[#f3d28a] hover:bg-[#d7aa52]/10">
            <Plus className="w-3 h-3" /> {heading.add}
          </button>
        </FormCard>

        <FormCard title={heading.edu} icon={GraduationCap}>
          {data.education.map((e) => (
            <div key={e.id} className="rounded-md border border-white/10 p-3 mb-3 space-y-2">
              <div className="grid sm:grid-cols-2 gap-2">
                <Field value={e.degree} onChange={(v) => updEdu(e.id, { degree: v })} placeholder={isAR ? "الدرجة" : "Degree"} />
                <Field value={e.school} onChange={(v) => updEdu(e.id, { school: v })} placeholder={isAR ? "الجامعة/المعهد" : "School"} />
              </div>
              <Field value={e.period} onChange={(v) => updEdu(e.id, { period: v })} placeholder={isAR ? "الفترة" : "Period"} />
              <button onClick={() => delEdu(e.id)} className="text-xs text-red-300 hover:text-red-200 inline-flex items-center gap-1">
                <Trash2 className="w-3 h-3" /> {isAR ? "حذف" : "Remove"}
              </button>
            </div>
          ))}
          <button onClick={addEdu} className="inline-flex items-center gap-1 rounded-md border border-[#d7aa52]/40 px-3 py-1.5 text-xs font-bold text-[#f3d28a] hover:bg-[#d7aa52]/10">
            <Plus className="w-3 h-3" /> {heading.add}
          </button>
        </FormCard>

        <div className="grid md:grid-cols-2 gap-4">
          <FormCard title={heading.skills} icon={MapPin}>
            <div className="flex gap-2 mb-2">
              <input
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
                placeholder={isAR ? "أضف مهارة" : "Add a skill"}
                className="flex-1 rounded-md border border-[#d7aa52]/30 bg-[#04101f]/60 px-3 py-2 text-sm text-white outline-none focus:border-[#d7aa52]"
              />
              <button onClick={addSkill} className="rounded-md border border-[#d7aa52]/40 px-3 text-sm font-bold text-[#f3d28a] hover:bg-[#d7aa52]/10">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {data.skills.map((s, i) => (
                <span key={i} className="inline-flex items-center gap-1 rounded-full bg-[#d7aa52]/15 px-2 py-1 text-xs text-[#f3d28a]">
                  {s}
                  <button onClick={() => set("skills", data.skills.filter((_, j) => j !== i))} className="hover:text-red-300">×</button>
                </span>
              ))}
            </div>
            <button
              onClick={() => runAi("skills", data.skills.join(", "), "generate", (value) => set("skills", parseGeneratedList(value)))}
              disabled={!!aiLoading}
              className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-[#d7aa52]/40 px-3 py-1.5 text-xs font-bold text-[#f3d28a] hover:bg-[#d7aa52]/10 disabled:opacity-60"
            >
              {aiLoading === "skills-generate" ? <Loader2 className="size-3 animate-spin" /> : <Wand2 className="size-3" />}
              {isAR ? "توليد مهارات" : "Generate skills"}
            </button>
          </FormCard>

          <FormCard title={heading.langs} icon={LangIcon}>
            <div className="flex gap-2 mb-2">
              <input
                value={langInput}
                onChange={(e) => setLangInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addLang())}
                placeholder={isAR ? "أضف لغة" : "Add a language"}
                className="flex-1 rounded-md border border-[#d7aa52]/30 bg-[#04101f]/60 px-3 py-2 text-sm text-white outline-none focus:border-[#d7aa52]"
              />
              <button onClick={addLang} className="rounded-md border border-[#d7aa52]/40 px-3 text-sm font-bold text-[#f3d28a] hover:bg-[#d7aa52]/10">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {data.languages.map((s, i) => (
                <span key={i} className="inline-flex items-center gap-1 rounded-full bg-[#d7aa52]/15 px-2 py-1 text-xs text-[#f3d28a]">
                  {s}
                  <button onClick={() => set("languages", data.languages.filter((_, j) => j !== i))} className="hover:text-red-300">×</button>
                </span>
              ))}
            </div>
          </FormCard>
        </div>

        <FormCard title={heading.certs} icon={Award}>
          {data.certifications.map((c) => (
            <div key={c.id} className="rounded-md border border-white/10 p-3 mb-3 space-y-2">
              <div className="grid sm:grid-cols-3 gap-2">
                <Field value={c.name} onChange={(v) => updCert(c.id, { name: v })} placeholder={isAR ? "اسم الشهادة" : "Name"} />
                <Field value={c.issuer} onChange={(v) => updCert(c.id, { issuer: v })} placeholder={isAR ? "الجهة المانحة" : "Issuer"} />
                <Field value={c.year} onChange={(v) => updCert(c.id, { year: v })} placeholder={isAR ? "السنة" : "Year"} />
              </div>
              <button onClick={() => delCert(c.id)} className="text-xs text-red-300 hover:text-red-200 inline-flex items-center gap-1">
                <Trash2 className="w-3 h-3" /> {isAR ? "حذف" : "Remove"}
              </button>
            </div>
          ))}
          <button onClick={addCert} className="inline-flex items-center gap-1 rounded-md border border-[#d7aa52]/40 px-3 py-1.5 text-xs font-bold text-[#f3d28a] hover:bg-[#d7aa52]/10">
            <Plus className="w-3 h-3" /> {heading.add}
          </button>
        </FormCard>
      </div>
    </div>
  );
}
