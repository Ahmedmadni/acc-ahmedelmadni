import type { CSSProperties, ReactElement, RefObject } from "react";
import type { CvData, CvTemplate, Education, Experience } from "./types";

type Labels = {
  isAR: boolean;
  summary: string;
  exp: string;
  edu: string;
  skills: string;
  langs: string;
  certs: string;
};
type TemplateProps = { data: CvData; template: CvTemplate; t: Labels };

/* ============ shared helpers ============ */

const sectionTitle = (label: string, accent: string, light = false) => (
  <h2
    style={{
      fontSize: "13px",
      fontWeight: 800,
      color: light ? "#ffffff" : accent,
      borderBottom: `1.5px solid ${accent}`,
      paddingBottom: 3,
      marginBottom: 8,
      marginTop: 0,
      textTransform: "uppercase",
      letterSpacing: "0.6px",
    }}
  >
    {label}
  </h2>
);

const Chip = ({ text, bg, color }: { text: string; bg: string; color: string }) => (
  <span
    style={{
      display: "inline-block",
      background: bg,
      color,
      padding: "3px 9px",
      borderRadius: 999,
      fontSize: 12,
      fontWeight: 600,
      marginInlineEnd: 4,
      marginBottom: 4,
    }}
  >
    {text}
  </span>
);

const SkillBar = ({ text, accent }: { text: string; accent: string }) => (
  <div style={{ marginBottom: 8 }}>
    <div style={{ fontSize: 12, fontWeight: 700, color: "#0b1220", marginBottom: 3 }}>{text}</div>
    <div style={{ height: 6, borderRadius: 4, background: "#e5e7eb", overflow: "hidden" }}>
      <div style={{ width: "85%", height: "100%", background: accent }} />
    </div>
  </div>
);

function ExpBlock({ e, accent }: { e: Experience; accent: string }) {
  if (!e.role && !e.company && !e.description) return null;
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
        <strong style={{ fontSize: 13.5, color: "#0b1220" }}>
          {e.role}
          {e.company ? (
            <span style={{ color: accent, fontWeight: 700 }}> · {e.company}</span>
          ) : null}
        </strong>
        <span style={{ fontSize: 12, color: "#64748b" }}>{e.period}</span>
      </div>
      {e.description && (
        <p
          style={{
            fontSize: 12.5,
            margin: "4px 0 0",
            lineHeight: 1.55,
            color: "#334155",
            textAlign: "justify",
          }}
        >
          {e.description}
        </p>
      )}
    </div>
  );
}

function EduBlock({ e }: { e: Education }) {
  if (!e.degree && !e.school) return null;
  return (
    <div
      style={{
        marginBottom: 6,
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 10,
      }}
    >
      <strong style={{ fontSize: 13, color: "#0b1220" }}>
        {e.degree}
        {e.school ? ` — ${e.school}` : ""}
      </strong>
      <span style={{ fontSize: 12, color: "#64748b" }}>{e.period}</span>
    </div>
  );
}

function CirclePhoto({ src, size = 90, border }: { src?: string; size?: number; border?: string }) {
  const baseStyle: CSSProperties = {
    width: size,
    height: size,
    borderRadius: "50%",
    objectFit: "cover",
    display: "block",
    margin: "0 auto",
    border: border || "3px solid #ffffff",
    background: "#1f2937",
  };
  if (!src) {
    return (
      <div
        style={{
          ...baseStyle,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#94a3b8",
          fontSize: size * 0.5,
        }}
      >
        👤
      </div>
    );
  }
  return <img src={src} alt="profile" style={baseStyle} />;
}

function ContactList({ data, color }: { data: CvData; color: string }) {
  return (
    <div style={{ fontSize: 11.5, color, lineHeight: 1.8, wordBreak: "break-word" }}>
      {data.email && <div>✉ {data.email}</div>}
      {data.phone && <div>📱 {data.phone}</div>}
      {data.location && <div>📍 {data.location}</div>}
      {data.website && <div>🔗 {data.website}</div>}
    </div>
  );
}

/* ═══════ TEMPLATE 1 — Modern Executive (Dark Sidebar) ═══════ */
function TemplateModernExecutive({ data, t }: TemplateProps) {
  const accent = "#b8862e";
  return (
    <div style={{ display: "flex", minHeight: "100%", fontSize: 13 }}>
      <aside
        style={{ width: "32%", background: "#0b1220", color: "#e2e8f0", padding: "22px 16px" }}
      >
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <CirclePhoto src={data.photo} size={110} border={`3px solid ${accent}`} />
          <div style={{ marginTop: 12, fontSize: 18, fontWeight: 800, color: "#ffffff" }}>
            {data.fullName || (t.isAR ? "الاسم الكامل" : "Full Name")}
          </div>
          <div style={{ fontSize: 12, color: accent, fontWeight: 700, marginTop: 4 }}>
            {data.jobTitle || (t.isAR ? "المسمى الوظيفي" : "Job Title")}
          </div>
        </div>
        <div style={{ height: 1, background: "#1f2937", margin: "12px 0" }} />
        <ContactList data={data} color="#cbd5e1" />

        {data.skills.length > 0 && (
          <div style={{ marginTop: 16 }}>
            {sectionTitle(t.skills, accent, true)}
            {data.skills.map((s, i) => (
              <div key={i} style={{ marginBottom: 7 }}>
                <div style={{ fontSize: 11.5, color: "#e2e8f0", marginBottom: 3 }}>{s}</div>
                <div style={{ height: 4, borderRadius: 4, background: "#1e293b" }}>
                  <div
                    style={{ width: "85%", height: "100%", background: accent, borderRadius: 4 }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {data.languages.length > 0 && (
          <div style={{ marginTop: 16 }}>
            {sectionTitle(t.langs, accent, true)}
            {data.languages.map((s, i) => (
              <div key={i} style={{ fontSize: 11.5, color: "#e2e8f0", marginBottom: 3 }}>
                • {s}
              </div>
            ))}
          </div>
        )}
      </aside>

      <main style={{ flex: 1, padding: "22px 20px", background: "#ffffff", color: "#0b1220" }}>
        {data.summary && (
          <section style={{ marginBottom: 14 }}>
            {sectionTitle(t.summary, accent)}
            <p style={{ fontSize: 13, lineHeight: 1.6, margin: 0, textAlign: "justify" }}>
              {data.summary}
            </p>
          </section>
        )}
        {data.experience.some((e) => e.role || e.company) && (
          <section style={{ marginBottom: 14 }}>
            {sectionTitle(t.exp, accent)}
            {data.experience.map((e) => (
              <ExpBlock key={e.id} e={e} accent={accent} />
            ))}
          </section>
        )}
        {data.education.some((e) => e.degree || e.school) && (
          <section style={{ marginBottom: 14 }}>
            {sectionTitle(t.edu, accent)}
            {data.education.map((e) => (
              <EduBlock key={e.id} e={e} />
            ))}
          </section>
        )}
        {data.certifications.some((c) => c.name) && (
          <section>
            {sectionTitle(t.certs, accent)}
            {data.certifications.map(
              (c) =>
                c.name && (
                  <div
                    key={c.id}
                    style={{
                      fontSize: 12.5,
                      marginBottom: 4,
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 10,
                    }}
                  >
                    <span>
                      <strong>{c.name}</strong>
                      {c.issuer ? ` — ${c.issuer}` : ""}
                    </span>
                    <span style={{ color: "#64748b" }}>{c.year}</span>
                  </div>
                ),
            )}
          </section>
        )}
      </main>
    </div>
  );
}

/* ═══════ TEMPLATE 2 — ATS Optimized ═══════ */
function TemplateAts({ data, t }: TemplateProps) {
  const accent = "#1e3a5f";
  return (
    <div style={{ padding: "8px 4px", fontSize: 13, color: "#0b1220" }}>
      <header style={{ borderBottom: `2px solid ${accent}`, paddingBottom: 10, marginBottom: 14 }}>
        <h1 style={{ fontSize: 26, margin: 0, fontWeight: 800, color: accent }}>
          {data.fullName || (t.isAR ? "الاسم الكامل" : "Full Name")}
        </h1>
        <div style={{ fontSize: 14, fontWeight: 600, marginTop: 4, color: "#334155" }}>
          {data.jobTitle || (t.isAR ? "المسمى الوظيفي" : "Job Title")}
        </div>
        <div
          style={{
            fontSize: 11.5,
            color: "#475569",
            marginTop: 6,
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          {data.email && <span>{data.email}</span>}
          {data.phone && <span>{data.phone}</span>}
          {data.location && <span>{data.location}</span>}
          {data.website && <span>{data.website}</span>}
        </div>
      </header>

      {data.summary && (
        <section style={{ marginBottom: 12 }}>
          <h2
            style={{
              fontSize: 13,
              fontWeight: 800,
              color: accent,
              marginBottom: 4,
              textTransform: "uppercase",
            }}
          >
            {t.summary}
          </h2>
          <p style={{ fontSize: 13, lineHeight: 1.6, margin: 0 }}>{data.summary}</p>
        </section>
      )}

      {data.experience.some((e) => e.role || e.company) && (
        <section style={{ marginBottom: 12 }}>
          <h2
            style={{
              fontSize: 13,
              fontWeight: 800,
              color: accent,
              marginBottom: 6,
              textTransform: "uppercase",
            }}
          >
            {t.exp}
          </h2>
          {data.experience.map((e) => (
            <ExpBlock key={e.id} e={e} accent={accent} />
          ))}
        </section>
      )}

      {data.education.some((e) => e.degree || e.school) && (
        <section style={{ marginBottom: 12 }}>
          <h2
            style={{
              fontSize: 13,
              fontWeight: 800,
              color: accent,
              marginBottom: 6,
              textTransform: "uppercase",
            }}
          >
            {t.edu}
          </h2>
          {data.education.map((e) => (
            <EduBlock key={e.id} e={e} />
          ))}
        </section>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 12 }}>
        {data.skills.length > 0 && (
          <div>
            <h2
              style={{
                fontSize: 13,
                fontWeight: 800,
                color: accent,
                marginBottom: 6,
                textTransform: "uppercase",
              }}
            >
              {t.skills}
            </h2>
            <div>
              {data.skills.map((s, i) => (
                <Chip key={i} text={s} bg="#eff6ff" color="#1e3a5f" />
              ))}
            </div>
          </div>
        )}
        {data.languages.length > 0 && (
          <div>
            <h2
              style={{
                fontSize: 13,
                fontWeight: 800,
                color: accent,
                marginBottom: 6,
                textTransform: "uppercase",
              }}
            >
              {t.langs}
            </h2>
            <div>
              {data.languages.map((s, i) => (
                <Chip key={i} text={s} bg="#f0fdf4" color="#166534" />
              ))}
            </div>
          </div>
        )}
      </div>

      {data.certifications.some((c) => c.name) && (
        <section>
          <h2
            style={{
              fontSize: 13,
              fontWeight: 800,
              color: accent,
              marginBottom: 6,
              textTransform: "uppercase",
            }}
          >
            {t.certs}
          </h2>
          {data.certifications.map(
            (c) =>
              c.name && (
                <div
                  key={c.id}
                  style={{
                    fontSize: 12.5,
                    marginBottom: 3,
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 10,
                  }}
                >
                  <span>
                    <strong>{c.name}</strong>
                    {c.issuer ? ` — ${c.issuer}` : ""}
                  </span>
                  <span style={{ color: "#64748b" }}>{c.year}</span>
                </div>
              ),
          )}
        </section>
      )}
    </div>
  );
}

/* ═══════ TEMPLATE 3 — Corporate Professional (Top Band + Light Sidebar) ═══════ */
function TemplateCorporate({ data, t }: TemplateProps) {
  const accent = "#174f70";
  const sideBg = "#e8f4f8";
  return (
    <div style={{ fontSize: 13, color: "#0b1220" }}>
      <header
        style={{
          background: accent,
          color: "#fff",
          padding: "18px 22px",
          display: "flex",
          alignItems: "center",
          gap: 18,
        }}
      >
        <CirclePhoto src={data.photo} size={88} border="3px solid #ffffff" />
        <div>
          <div style={{ fontSize: 24, fontWeight: 800 }}>
            {data.fullName || (t.isAR ? "الاسم الكامل" : "Full Name")}
          </div>
          <div style={{ fontSize: 14, fontWeight: 600, opacity: 0.9, marginTop: 4 }}>
            {data.jobTitle || (t.isAR ? "المسمى الوظيفي" : "Job Title")}
          </div>
        </div>
      </header>
      <div style={{ display: "flex", minHeight: "calc(100% - 124px)" }}>
        <aside style={{ width: "32%", background: sideBg, padding: "18px 14px" }}>
          {sectionTitle(t.isAR ? "التواصل" : "Contact", accent)}
          <ContactList data={data} color="#334155" />
          {data.skills.length > 0 && (
            <div style={{ marginTop: 16 }}>
              {sectionTitle(t.skills, accent)}
              {data.skills.map((s, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: 12,
                    color: "#0b1220",
                    padding: "3px 0",
                    borderBottom: "1px solid #cbd5e1",
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
          )}
          {data.languages.length > 0 && (
            <div style={{ marginTop: 16 }}>
              {sectionTitle(t.langs, accent)}
              {data.languages.map((s, i) => (
                <div key={i} style={{ fontSize: 12, color: "#0b1220", padding: "3px 0" }}>
                  • {s}
                </div>
              ))}
            </div>
          )}
        </aside>
        <main style={{ flex: 1, padding: "18px 20px", background: "#ffffff" }}>
          {data.summary && (
            <section style={{ marginBottom: 14 }}>
              {sectionTitle(t.summary, accent)}
              <p style={{ fontSize: 13, lineHeight: 1.6, margin: 0 }}>{data.summary}</p>
            </section>
          )}
          {data.experience.some((e) => e.role || e.company) && (
            <section style={{ marginBottom: 14 }}>
              {sectionTitle(t.exp, accent)}
              {data.experience.map((e) => (
                <ExpBlock key={e.id} e={e} accent={accent} />
              ))}
            </section>
          )}
          {data.education.some((e) => e.degree || e.school) && (
            <section style={{ marginBottom: 14 }}>
              {sectionTitle(t.edu, accent)}
              {data.education.map((e) => (
                <EduBlock key={e.id} e={e} />
              ))}
            </section>
          )}
          {data.certifications.some((c) => c.name) && (
            <section>
              {sectionTitle(t.certs, accent)}
              {data.certifications.map(
                (c) =>
                  c.name && (
                    <div
                      key={c.id}
                      style={{
                        fontSize: 12.5,
                        marginBottom: 4,
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 10,
                      }}
                    >
                      <span>
                        <strong>{c.name}</strong>
                        {c.issuer ? ` — ${c.issuer}` : ""}
                      </span>
                      <span style={{ color: "#64748b" }}>{c.year}</span>
                    </div>
                  ),
              )}
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

/* ═══════ TEMPLATE 4 — Finance & Accounting (Gold Sidebar) ═══════ */
function TemplateFinance({ data, t }: TemplateProps) {
  const accent = "#9a6a1f";
  const sideBg = "#fdf6e3";
  return (
    <div style={{ display: "flex", minHeight: "100%", fontSize: 13, color: "#0b1220" }}>
      <aside
        style={{
          width: "33%",
          background: sideBg,
          padding: "22px 16px",
          borderInlineEnd: `3px solid ${accent}`,
        }}
      >
        <CirclePhoto src={data.photo} size={100} border={`3px solid ${accent}`} />
        <div
          style={{
            marginTop: 14,
            textAlign: "center",
            fontSize: 18,
            fontWeight: 800,
            color: accent,
          }}
        >
          {data.fullName || (t.isAR ? "الاسم الكامل" : "Full Name")}
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: 12,
            color: "#5b3f12",
            fontWeight: 600,
            marginTop: 3,
          }}
        >
          {data.jobTitle || (t.isAR ? "المسمى الوظيفي" : "Job Title")}
        </div>
        <div style={{ marginTop: 16 }}>
          {sectionTitle(t.isAR ? "التواصل" : "Contact", accent)}
          <ContactList data={data} color="#5b3f12" />
        </div>
        {data.skills.length > 0 && (
          <div style={{ marginTop: 16 }}>
            {sectionTitle(t.skills, accent)}
            <div>
              {data.skills.map((s, i) => (
                <Chip key={i} text={s} bg="#f5e6c2" color={accent} />
              ))}
            </div>
          </div>
        )}
        {data.languages.length > 0 && (
          <div style={{ marginTop: 16 }}>
            {sectionTitle(t.langs, accent)}
            {data.languages.map((s, i) => (
              <div key={i} style={{ fontSize: 12, color: "#5b3f12", padding: "3px 0" }}>
                • {s}
              </div>
            ))}
          </div>
        )}
      </aside>
      <main style={{ flex: 1, padding: "22px 20px", background: "#ffffff" }}>
        {data.summary && (
          <section style={{ marginBottom: 14 }}>
            {sectionTitle(t.summary, accent)}
            <p style={{ fontSize: 13, lineHeight: 1.6, margin: 0 }}>{data.summary}</p>
          </section>
        )}
        {data.experience.some((e) => e.role || e.company) && (
          <section style={{ marginBottom: 14 }}>
            {sectionTitle(t.exp, accent)}
            {data.experience.map((e) => (
              <ExpBlock key={e.id} e={e} accent={accent} />
            ))}
          </section>
        )}
        {data.education.some((e) => e.degree || e.school) && (
          <section style={{ marginBottom: 14 }}>
            {sectionTitle(t.edu, accent)}
            {data.education.map((e) => (
              <EduBlock key={e.id} e={e} />
            ))}
          </section>
        )}
        {data.certifications.some((c) => c.name) && (
          <section>
            {sectionTitle(t.certs, accent)}
            {data.certifications.map(
              (c) =>
                c.name && (
                  <div
                    key={c.id}
                    style={{
                      fontSize: 12.5,
                      marginBottom: 4,
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 10,
                    }}
                  >
                    <span>
                      <strong>{c.name}</strong>
                      {c.issuer ? ` — ${c.issuer}` : ""}
                    </span>
                    <span style={{ color: "#64748b" }}>{c.year}</span>
                  </div>
                ),
            )}
          </section>
        )}
      </main>
    </div>
  );
}

/* ═══════ TEMPLATE 5 — Creative Professional (Bold Header + Skill Bars) ═══════ */
function TemplateCreative({ data, t }: TemplateProps) {
  const accent = "#0f766e";
  return (
    <div style={{ fontSize: 13, color: "#0b1220" }}>
      <header
        style={{
          background: `linear-gradient(135deg, ${accent}, #134e4a)`,
          color: "#fff",
          padding: "22px",
          display: "flex",
          alignItems: "center",
          gap: 18,
        }}
      >
        <CirclePhoto src={data.photo} size={92} border="3px solid #ffffff" />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 26, fontWeight: 800 }}>
            {data.fullName || (t.isAR ? "الاسم الكامل" : "Full Name")}
          </div>
          <div style={{ fontSize: 14, fontWeight: 600, opacity: 0.95, marginTop: 4 }}>
            {data.jobTitle || (t.isAR ? "المسمى الوظيفي" : "Job Title")}
          </div>
          <div
            style={{
              fontSize: 11.5,
              marginTop: 8,
              opacity: 0.9,
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            {data.email && <span>✉ {data.email}</span>}
            {data.phone && <span>📱 {data.phone}</span>}
            {data.location && <span>📍 {data.location}</span>}
            {data.website && <span>🔗 {data.website}</span>}
          </div>
        </div>
      </header>
      <div style={{ padding: "20px 22px" }}>
        {data.summary && (
          <section style={{ marginBottom: 14 }}>
            {sectionTitle(t.summary, accent)}
            <p style={{ fontSize: 13, lineHeight: 1.6, margin: 0 }}>{data.summary}</p>
          </section>
        )}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 18 }}>
          <div>
            {data.experience.some((e) => e.role || e.company) && (
              <section style={{ marginBottom: 14 }}>
                {sectionTitle(t.exp, accent)}
                {data.experience.map((e) => (
                  <ExpBlock key={e.id} e={e} accent={accent} />
                ))}
              </section>
            )}
            {data.education.some((e) => e.degree || e.school) && (
              <section>
                {sectionTitle(t.edu, accent)}
                {data.education.map((e) => (
                  <EduBlock key={e.id} e={e} />
                ))}
              </section>
            )}
          </div>
          <div>
            {data.skills.length > 0 && (
              <section style={{ marginBottom: 14 }}>
                {sectionTitle(t.skills, accent)}
                {data.skills.map((s, i) => (
                  <SkillBar key={i} text={s} accent={accent} />
                ))}
              </section>
            )}
            {data.languages.length > 0 && (
              <section style={{ marginBottom: 14 }}>
                {sectionTitle(t.langs, accent)}
                <div>
                  {data.languages.map((s, i) => (
                    <Chip key={i} text={s} bg="#f0fdf4" color="#166534" />
                  ))}
                </div>
              </section>
            )}
            {data.certifications.some((c) => c.name) && (
              <section>
                {sectionTitle(t.certs, accent)}
                {data.certifications.map(
                  (c) =>
                    c.name && (
                      <div key={c.id} style={{ fontSize: 12, marginBottom: 4 }}>
                        <strong>{c.name}</strong>
                        {c.issuer && <span> · {c.issuer}</span>}
                        {c.year && <span style={{ color: "#64748b" }}> ({c.year})</span>}
                      </div>
                    ),
                )}
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════ TEMPLATE 6 — Minimal Elegant ═══════ */
function TemplateMinimal({ data, t }: TemplateProps) {
  const accent = "#374151";
  const gold = "#b8862e";
  return (
    <div style={{ padding: "16px 12px", fontSize: 13, color: "#0b1220" }}>
      <header style={{ textAlign: "center", marginBottom: 18 }}>
        <div style={{ width: 60, height: 2, background: gold, margin: "0 auto 14px" }} />
        <h1
          style={{
            fontSize: 28,
            fontWeight: 300,
            letterSpacing: "4px",
            margin: 0,
            color: accent,
            textTransform: "uppercase",
          }}
        >
          {data.fullName || (t.isAR ? "الاسم الكامل" : "Full Name")}
        </h1>
        <div
          style={{
            fontSize: 13,
            color: gold,
            fontWeight: 600,
            letterSpacing: "2px",
            marginTop: 6,
            textTransform: "uppercase",
          }}
        >
          {data.jobTitle || (t.isAR ? "المسمى الوظيفي" : "Job Title")}
        </div>
        <div
          style={{
            fontSize: 11.5,
            color: "#64748b",
            marginTop: 8,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 14,
          }}
        >
          {data.email && <span>{data.email}</span>}
          {data.phone && <span>{data.phone}</span>}
          {data.location && <span>{data.location}</span>}
          {data.website && <span>{data.website}</span>}
        </div>
      </header>

      {data.summary && (
        <section style={{ marginBottom: 16, textAlign: "center", padding: "0 24px" }}>
          <p
            style={{
              fontSize: 13,
              lineHeight: 1.7,
              margin: 0,
              fontStyle: "italic",
              color: "#475569",
            }}
          >
            {data.summary}
          </p>
        </section>
      )}

      {data.experience.some((e) => e.role || e.company) && (
        <section style={{ marginBottom: 14 }}>
          <h2
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "3px",
              color: gold,
              textAlign: "center",
              textTransform: "uppercase",
              margin: "0 0 10px",
            }}
          >
            {t.exp}
          </h2>
          {data.experience.map((e) => (
            <ExpBlock key={e.id} e={e} accent={gold} />
          ))}
        </section>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
        <div>
          {data.education.some((e) => e.degree || e.school) && (
            <section style={{ marginBottom: 14 }}>
              <h2
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "3px",
                  color: gold,
                  textTransform: "uppercase",
                  margin: "0 0 8px",
                }}
              >
                {t.edu}
              </h2>
              {data.education.map((e) => (
                <EduBlock key={e.id} e={e} />
              ))}
            </section>
          )}
          {data.certifications.some((c) => c.name) && (
            <section>
              <h2
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "3px",
                  color: gold,
                  textTransform: "uppercase",
                  margin: "0 0 8px",
                }}
              >
                {t.certs}
              </h2>
              {data.certifications.map(
                (c) =>
                  c.name && (
                    <div key={c.id} style={{ fontSize: 12.5, marginBottom: 4 }}>
                      <strong>{c.name}</strong>
                      {c.issuer && <span> — {c.issuer}</span>}
                      {c.year && <span style={{ color: "#64748b" }}> · {c.year}</span>}
                    </div>
                  ),
              )}
            </section>
          )}
        </div>
        <div>
          {data.skills.length > 0 && (
            <section style={{ marginBottom: 14 }}>
              <h2
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "3px",
                  color: gold,
                  textTransform: "uppercase",
                  margin: "0 0 8px",
                }}
              >
                {t.skills}
              </h2>
              <div>
                {data.skills.map((s, i) => (
                  <Chip key={i} text={s} bg="#f3f4f6" color="#374151" />
                ))}
              </div>
            </section>
          )}
          {data.languages.length > 0 && (
            <section>
              <h2
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "3px",
                  color: gold,
                  textTransform: "uppercase",
                  margin: "0 0 8px",
                }}
              >
                {t.langs}
              </h2>
              <div>
                {data.languages.map((s, i) => (
                  <Chip key={i} text={s} bg="#fef9c3" color="#713f12" />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

/* ═══════ DISPATCHER ═══════ */
export function CvPreview({
  data,
  template,
  lang,
  previewRef,
}: {
  data: CvData;
  template: CvTemplate;
  lang: "ar" | "en";
  previewRef: RefObject<HTMLDivElement | null>;
}) {
  const isAR = lang === "ar";
  const t: Labels = {
    isAR,
    summary: isAR ? "نبذة" : "Summary",
    exp: isAR ? "الخبرة العملية" : "Experience",
    edu: isAR ? "التعليم" : "Education",
    skills: isAR ? "المهارات" : "Skills",
    langs: isAR ? "اللغات" : "Languages",
    certs: isAR ? "الشهادات" : "Certifications",
  };

  const props: TemplateProps = { data, template, t };
  let inner: ReactElement;
  switch (template.id) {
    case "ats-optimized":
      inner = <TemplateAts {...props} />;
      break;
    case "corporate-professional":
      inner = <TemplateCorporate {...props} />;
      break;
    case "finance-accounting":
      inner = <TemplateFinance {...props} />;
      break;
    case "creative-professional":
      inner = <TemplateCreative {...props} />;
      break;
    case "minimal-elegant":
      inner = <TemplateMinimal {...props} />;
      break;
    case "modern-executive":
    default:
      inner = <TemplateModernExecutive {...props} />;
      break;
  }

  return (
    <div
      ref={previewRef}
      dir={isAR ? "rtl" : "ltr"}
      style={{
        width: "210mm",
        minHeight: "297mm",
        margin: "0 auto",
        background: "#ffffff",
        color: "#0b1220",
        fontFamily: isAR ? "'Cairo', 'Tahoma', Arial, sans-serif" : "'Inter', Arial, sans-serif",
        boxShadow: "0 10px 40px rgba(0,0,0,0.35)",
        overflow: "hidden",
      }}
    >
      {inner}
    </div>
  );
}
