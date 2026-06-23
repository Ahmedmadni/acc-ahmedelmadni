import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Briefcase, CheckCircle2, Home, Send } from "lucide-react";
import { SubPageShell } from "@/components/SubPageShell";
import { t, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/request-service")({
  head: () => ({
    meta: [
      { title: "طلب خدمة | أحمد المدني - Senior Accountant" },
      { name: "description", content: "اطلب خدمة محاسبية أو استشارية أو تصميم موقع — أدخل التفاصيل وسأتواصل معك مباشرة." },
      { property: "og:title", content: "طلب خدمة | أحمد المدني" },
      { property: "og:description", content: "نموذج طلب خدمة احترافي — اختر الخدمة وأدخل تفاصيلك ليتواصل معك مباشرة." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://ahmedelmadni.com/request-service" }],
  }),
  component: () => <SubPageShell>{(lang) => <RequestService lang={lang} />}</SubPageShell>,
});

function RequestService({ lang }: { lang: Lang }) {
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;
  const [serviceIdx, setServiceIdx] = useState<number>(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const services = t.services.items;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const svc = services[serviceIdx];
    const lines = [
      lang === "ar" ? "طلب خدمة جديدة" : "New service request",
      "",
      `${lang === "ar" ? "الخدمة" : "Service"}: ${svc[lang]}`,
      `${lang === "ar" ? "الاسم" : "Name"}: ${name}`,
      `${lang === "ar" ? "الجوال" : "Phone"}: ${phone}`,
      email ? `${lang === "ar" ? "البريد" : "Email"}: ${email}` : "",
      company ? `${lang === "ar" ? "الجهة / الشركة" : "Company"}: ${company}` : "",
      "",
      `${lang === "ar" ? "تفاصيل الطلب" : "Details"}:`,
      details,
    ].filter(Boolean).join("\n");
    const url = `https://wa.me/966560409811?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section className="relative py-14">
      <div className="w-full px-4 sm:px-8 lg:px-16">
        <div className="mb-6 flex items-center gap-2 text-sm" style={{ color: "var(--fg-soft)" }}>
          <Link to="/" className="inline-flex items-center gap-1 hover:text-[#d7aa52]">
            <Home className="size-3.5" />
            {lang === "ar" ? "الرئيسية" : "Home"}
          </Link>
          <Arrow className="size-3.5" />
          <span>{lang === "ar" ? "طلب خدمة" : "Request a service"}</span>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full gold-border bg-white/5 px-4 py-2 text-xs font-semibold text-[#f3d28a]">
            <Briefcase className="size-3.5" />
            {lang === "ar" ? "نموذج طلب خدمة" : "Service request form"}
          </div>
          <h1 className="text-4xl font-black sm:text-5xl" style={{ color: "var(--fg)" }}>
            {lang === "ar" ? "اطلب خدمتك بسهولة" : "Request your service"}
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed" style={{ color: "var(--fg-soft)" }}>
            {lang === "ar"
              ? "اختر الخدمة المناسبة وأدخل تفاصيلك وسيتم التواصل معك مباشرة عبر واتساب لتأكيد الطلب."
              : "Pick a service, share your details, and I'll get back to you directly on WhatsApp to confirm."}
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className="glass mt-10 rounded-3xl p-10 text-center"
          >
            <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
              <CheckCircle2 className="size-8" />
            </div>
            <h2 className="text-2xl font-black" style={{ color: "var(--fg)" }}>
              {lang === "ar" ? "تم إرسال طلبك" : "Request sent"}
            </h2>
            <p className="mt-2 text-sm" style={{ color: "var(--fg-soft)" }}>
              {lang === "ar"
                ? "تم فتح واتساب لإكمال الإرسال. سأتواصل معك في أقرب وقت."
                : "WhatsApp opened to complete delivery. I'll be in touch shortly."}
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="inline-flex items-center gap-2 rounded-full gold-border px-5 py-2.5 text-xs font-bold"
                style={{ color: "var(--fg)" }}
              >
                {lang === "ar" ? "طلب جديد" : "New request"}
              </button>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#f3d28a] to-[#b8862e] px-5 py-2.5 text-xs font-bold text-[#04101f]"
              >
                {lang === "ar" ? "الرئيسية" : "Home"}
              </Link>
            </div>
          </motion.div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="glass mt-10 space-y-6 rounded-3xl p-6 sm:p-10"
          >
            {/* Service picker */}
            <div>
              <label className="mb-3 block text-sm font-bold" style={{ color: "var(--fg)" }}>
                {lang === "ar" ? "اختر الخدمة" : "Select service"}
              </label>
              <div className="grid gap-3 sm:grid-cols-2">
                {services.map((s, i) => {
                  const active = i === serviceIdx;
                  return (
                    <button
                      type="button"
                      key={i}
                      onClick={() => setServiceIdx(i)}
                      className={`rounded-2xl border p-4 text-start transition-all ${
                        active
                          ? "border-[#d7aa52] bg-[#d7aa52]/15 shadow-lg shadow-[#d7aa52]/20"
                          : "border-white/10 bg-white/[0.03] hover:border-[#d7aa52]/50"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="text-sm font-bold" style={{ color: "var(--fg)" }}>
                          {s[lang]}
                        </div>
                        {active && <CheckCircle2 className="size-4 shrink-0 text-[#d7aa52]" />}
                      </div>
                      <p className="mt-1 text-xs leading-relaxed" style={{ color: "var(--fg-soft)" }}>
                        {s.d[lang]}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Personal fields */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={lang === "ar" ? "الاسم الكامل" : "Full name"} required value={name} onChange={setName} />
              <Field label={lang === "ar" ? "رقم الجوال" : "Phone number"} required value={phone} onChange={setPhone} type="tel" />
              <Field label={lang === "ar" ? "البريد الإلكتروني" : "Email"} value={email} onChange={setEmail} type="email" />
              <Field label={lang === "ar" ? "الجهة / الشركة" : "Company"} value={company} onChange={setCompany} />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold" style={{ color: "var(--fg)" }}>
                {lang === "ar" ? "تفاصيل الطلب" : "Request details"} <span className="text-red-400">*</span>
              </label>
              <textarea
                required
                rows={5}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder={
                  lang === "ar"
                    ? "اشرح طلبك بالتفصيل: حجم العمل، المهلة، أي ملاحظات…"
                    : "Describe your request: scope, timeline, any notes…"
                }
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm outline-none transition-colors focus:border-[#d7aa52]/70"
                style={{ color: "var(--fg)" }}
              />
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full gold-border px-5 py-3 text-xs font-bold"
                style={{ color: "var(--fg)" }}
              >
                {lang === "ar" ? "إلغاء" : "Cancel"}
              </Link>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#f3d28a] to-[#b8862e] px-6 py-3 text-sm font-bold text-[#04101f] shadow-xl shadow-[#d7aa52]/30 transition-transform hover:scale-[1.03]"
              >
                <Send className="size-4" />
                {lang === "ar" ? "إرسال الطلب عبر واتساب" : "Send request via WhatsApp"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold" style={{ color: "var(--fg)" }}>
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors focus:border-[#d7aa52]/70"
        style={{ color: "var(--fg)" }}
      />
    </div>
  );
}
