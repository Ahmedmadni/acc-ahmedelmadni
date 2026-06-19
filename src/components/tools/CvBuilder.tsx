import { useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas-pro";
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

/* ================= TYPES ================= */

type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
};

type Education = {
  id: string;
  degree: string;
  school: string;
  period: string;
};

type Certification = {
  id: string;
  name: string;
  issuer: string;
  year: string;
};

type CvData = {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
  languages: string[];
  certifications: Certification[];
};

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

/* ================= MAIN ================= */

export function CvBuilder({ lang }: { lang: Lang }) {
  const isAR = lang === "ar";
  const [data, setData] = useState<CvData>(EMPTY);
  const [loading, setLoading] = useState(false);
  const [skillInput, setSkillInput] = useState("");
  const [langInput, setLangInput] = useState("");
  const previewRef = useRef<HTMLDivElement>(null);

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

  /* ================= PDF EXPORT ================= */

  const exportPDF = async () => {
    const node = previewRef.current;
    if (!node) return;
    setLoading(true);
    try {
      // Ensure web fonts (Cairo for Arabic) are fully loaded
      if (document.fonts && document.fonts.ready) await document.fonts.ready;
      await new Promise((r) => setTimeout(r, 200));

      const canvas = await html2canvas(node, {
        backgroundColor: "#ffffff",
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
        windowWidth: node.scrollWidth,
        windowHeight: node.scrollHeight,
      });

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
    ? { info: "البيانات الشخصية", summary: "نبذة", exp: "الخبرة العملية", edu: "التعليم", skills: "المهارات", langs: "اللغات", certs: "الشهادات", export: "تصدير PDF", add: "إضافة", preview: "معاينة السيرة الذاتية", form: "بيانات السيرة الذاتية" }
    : { info: "Personal Info", summary: "Summary", exp: "Experience", edu: "Education", skills: "Skills", langs: "Languages", certs: "Certifications", export: "Export PDF", add: "Add", preview: "CV Preview", form: "CV Data" };

  return (
    <div dir={dir} className="w-full px-4 py-6 space-y-8">
      {/* ============= PREVIEW (TOP, FULL WIDTH) ============= */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-extrabold text-[#f3d28a]">{heading.preview}</h2>
          <button
            onClick={exportPDF}
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#f3d28a] to-[#b8862e] px-5 py-2.5 text-sm font-bold text-[#04101f] shadow-lg shadow-[#d7aa52]/30 transition-transform hover:scale-105 disabled:opacity-60"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
            {heading.export}
          </button>
        </div>

        <div className="rounded-xl border border-[#d7aa52]/30 bg-[#04101f]/40 p-3 max-h-[80vh] overflow-auto">
          <div
            ref={previewRef}
            dir={dir}
            style={{
              width: "210mm",
              minHeight: "297mm",
              margin: "0 auto",
              background: "#ffffff",
              color: "#0b1220",
              padding: "18mm",
              fontFamily: isAR
                ? "'Cairo', 'Tahoma', Arial, sans-serif"
                : "'Inter', Arial, sans-serif",
              boxShadow: "0 10px 40px rgba(0,0,0,0.35)",
            }}
          >
            {/* HEADER */}
            <div style={{ borderBottom: "3px solid #b8862e", paddingBottom: "10px", marginBottom: "14px" }}>
              <h1 style={{ fontSize: "28px", fontWeight: 800, margin: 0, color: "#0b1220" }}>
                {data.fullName || (isAR ? "الاسم الكامل" : "Full Name")}
              </h1>
              <p style={{ fontSize: "15px", color: "#b8862e", margin: "4px 0 8px", fontWeight: 700 }}>
                {data.jobTitle || (isAR ? "المسمى الوظيفي" : "Job Title")}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", fontSize: "12px", color: "#475569" }}>
                {data.email && <span>📧 {data.email}</span>}
                {data.phone && <span>📱 {data.phone}</span>}
                {data.location && <span>📍 {data.location}</span>}
              </div>
            </div>

            {/* SUMMARY */}
            {data.summary && (
              <section style={{ marginBottom: "14px" }}>
                <h2 style={sectionTitle}>{heading.summary}</h2>
                <p style={{ fontSize: "13px", lineHeight: 1.6, margin: 0, textAlign: "justify" }}>{data.summary}</p>
              </section>
            )}

            {/* EXPERIENCE */}
            {data.experience.some((e) => e.role || e.company) && (
              <section style={{ marginBottom: "14px" }}>
                <h2 style={sectionTitle}>{heading.exp}</h2>
                {data.experience.map((e) => (
                  (e.role || e.company || e.description) && (
                    <div key={e.id} style={{ marginBottom: "10px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", flexWrap: "wrap" }}>
                        <strong style={{ fontSize: "14px" }}>{e.role}{e.company ? ` — ${e.company}` : ""}</strong>
                        <span style={{ fontSize: "12px", color: "#64748b" }}>{e.period}</span>
                      </div>
                      {e.description && (
                        <p style={{ fontSize: "12.5px", margin: "4px 0 0", lineHeight: 1.55, color: "#334155" }}>{e.description}</p>
                      )}
                    </div>
                  )
                ))}
              </section>
            )}

            {/* EDUCATION */}
            {data.education.some((e) => e.degree || e.school) && (
              <section style={{ marginBottom: "14px" }}>
                <h2 style={sectionTitle}>{heading.edu}</h2>
                {data.education.map((e) => (
                  (e.degree || e.school) && (
                    <div key={e.id} style={{ marginBottom: "6px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
                      <strong style={{ fontSize: "13.5px" }}>{e.degree}{e.school ? ` — ${e.school}` : ""}</strong>
                      <span style={{ fontSize: "12px", color: "#64748b" }}>{e.period}</span>
                    </div>
                  )
                ))}
              </section>
            )}

            {/* SKILLS + LANGS */}
            {(data.skills.length > 0 || data.languages.length > 0) && (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
                {data.skills.length > 0 && (
                  <section>
                    <h2 style={sectionTitle}>{heading.skills}</h2>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {data.skills.map((s, i) => (
                        <span key={i} style={chipStyle}>{s}</span>
                      ))}
                    </div>
                  </section>
                )}
                {data.languages.length > 0 && (
                  <section>
                    <h2 style={sectionTitle}>{heading.langs}</h2>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {data.languages.map((s, i) => (
                        <span key={i} style={chipStyle}>{s}</span>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            )}

            {/* CERTIFICATIONS */}
            {data.certifications.some((c) => c.name) && (
              <section>
                <h2 style={sectionTitle}>{heading.certs}</h2>
                {data.certifications.map((c) => (
                  c.name && (
                    <div key={c.id} style={{ fontSize: "13px", marginBottom: "4px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
                      <span><strong>{c.name}</strong>{c.issuer ? ` — ${c.issuer}` : ""}</span>
                      <span style={{ color: "#64748b" }}>{c.year}</span>
                    </div>
                  )
                ))}
              </section>
            )}
          </div>
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
          </FormCard>

          <FormCard title={heading.summary} icon={Mail}>
            <Area
              value={data.summary}
              onChange={(v) => set("summary", v)}
              placeholder={isAR ? "نبذة مختصرة عن خبرتك وتخصصك..." : "A brief summary of your expertise..."}
              rows={6}
            />
          </FormCard>
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

/* ================= INLINE STYLES ================= */
const sectionTitle: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: 800,
  color: "#b8862e",
  borderBottom: "1.5px solid #d7aa52",
  paddingBottom: "3px",
  marginBottom: "8px",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
};

const chipStyle: React.CSSProperties = {
  display: "inline-block",
  background: "#fbf3e0",
  color: "#7a5410",
  padding: "3px 9px",
  borderRadius: "999px",
  fontSize: "12px",
  fontWeight: 600,
};
