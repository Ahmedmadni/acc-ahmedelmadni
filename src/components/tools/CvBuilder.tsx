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
  photo: string;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
  languages: string[];
  certifications: Certification[];
};

type TemplateId = "classic" | "modern" | "elegant" | "executive";

/* ================= HELPERS ================= */

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

/* ================= UI COMPONENTS ================= */

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
    <div className="rounded-xl border p-4">
      <div className="mb-3 flex items-center gap-2 font-bold">
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
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border p-2 rounded mb-2"
    />
  );
}

/* ================= MAIN ================= */

export function CvBuilder({ lang }: { lang: Lang }) {
  const isAR = lang === "ar";

  const [data, setData] = useState<CvData>(EMPTY);
  const [loading, setLoading] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const set = <K extends keyof CvData>(k: K, v: CvData[K]) => setData((d) => ({ ...d, [k]: v }));

  /* ================= EXPERIENCE ================= */

  const addExp = () =>
    set("experience", [...data.experience, { id: uid(), role: "", company: "", period: "", description: "" }]);

  /* ================= PDF EXPORT ================= */

  const exportPDF = async () => {
    await document.fonts.ready;
    if (!previewRef.current) return;
    setLoading(true);

    try {
      await document.fonts.ready;
      const canvas = await html2canvas(node, {
        backgroundColor: "#ffffff",

        // جودة عالية
        scale: window.devicePixelRatio > 2 ? 2 : window.devicePixelRatio,

        useCORS: true,
        allowTaint: true,

        // مهم جداً للعربية
        foreignObjectRendering: false,

        logging: false,

        removeContainer: true,

        scrollX: 0,
        scrollY: 0,

        windowWidth: node.scrollWidth,
        windowHeight: node.scrollHeight,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const width = 210;
      const height = (canvas.height * width) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      pdf.save("cv.pdf");
    } finally {
      setLoading(false);
    }
  };

  /* ================= UI ================= */

  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      {/* FORM */}
      <div>
        <FormCard title={isAR ? "البيانات" : "Info"} icon={User}>
          <Field value={data.fullName} onChange={(v) => set("fullName", v)} placeholder="Full Name" />
          <Field value={data.jobTitle} onChange={(v) => set("jobTitle", v)} placeholder="Job Title" />
        </FormCard>

        <FormCard title="Experience" icon={Briefcase}>
          {data.experience.map((e) => (
            <div key={e.id}>
              <Field
                value={e.role}
                onChange={(v) =>
                  set(
                    "experience",
                    data.experience.map((x) => (x.id === e.id ? { ...x, role: v } : x)),
                  )
                }
                placeholder="Role"
              />
            </div>
          ))}

          <button onClick={addExp} className="mt-2 border px-2 py-1">
            Add
          </button>
        </FormCard>

        <button onClick={exportPDF} disabled={loading} className="mt-4 border px-4 py-2">
          {loading ? "Exporting..." : "Export PDF"}
        </button>
      </div>

      {/* PREVIEW */}
      <div ref={previewRef} className="bg-white p-6 border rounded shadow">
        <h1 className="text-2xl font-bold">{data.fullName}</h1>
        <p>{data.jobTitle}</p>

        <div className="mt-4">
          {data.experience.map((e) => (
            <div key={e.id} className="mb-2">
              <strong>{e.role}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
