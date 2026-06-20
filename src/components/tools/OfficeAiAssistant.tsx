import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Send,
  Sparkles,
  Copy,
  Check,
  RefreshCw,
  FileSpreadsheet,
  Lightbulb,
  Code2,
  Loader2,
  User,
} from "lucide-react";
import type { Lang } from "@/lib/i18n";

const transport = new DefaultChatTransport({ api: "/api/office-ai" });
const STORAGE_KEY = "office-ai-conversation-v1";

type Mode = "function" | "problem";

const SUGGESTIONS: Record<Mode, { ar: string[]; en: string[] }> = {
  function: {
    ar: [
      "اشرح دالة XLOOKUP وأعطني مثالاً",
      "ما الفرق بين SUMIF و SUMIFS؟",
      "كيف أستخدم INDEX/MATCH؟",
      "اشرح دالة LET و LAMBDA",
    ],
    en: [
      "Explain XLOOKUP with an example",
      "Difference between SUMIF and SUMIFS?",
      "How do I use INDEX/MATCH?",
      "Explain LET and LAMBDA",
    ],
  },
  problem: {
    ar: [
      "أريد استخراج أول كلمة من خلية",
      "كيف أجمع المبيعات حسب اسم العميل؟",
      "أريد مقارنة قائمتين وإظهار القيم المكررة",
      "كود VBA لإرسال إيميل من Outlook تلقائياً",
    ],
    en: [
      "Extract the first word from a cell",
      "Sum sales grouped by customer name",
      "Compare two lists and show duplicates",
      "VBA to auto-send an email from Outlook",
    ],
  },
};

function loadMessages(): UIMessage[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as UIMessage[]) : [];
  } catch {
    return [];
  }
}

function saveMessages(msgs: UIMessage[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(msgs));
  } catch {
    /* noop */
  }
}

/* ---------- Markdown / Code rendering ---------- */
function CodeBlock({ language, code }: { language: string; code: string }) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignore */
    }
  };
  return (
    <div className="my-3 overflow-hidden rounded-lg border border-[#d7aa52]/30 bg-[#04101f]/80">
      <div className="flex items-center justify-between border-b border-[#d7aa52]/20 bg-white/[0.03] px-3 py-1.5">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#f3d28a]">
          <Code2 className="size-3" />
          {language || "code"}
        </span>
        <button
          onClick={onCopy}
          className="inline-flex items-center gap-1 rounded px-2 py-0.5 text-[10px] font-bold text-[#f3d28a] hover:bg-white/5"
        >
          {copied ? <Check className="size-3" /> : <Copy className="size-3" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre dir="ltr" className="overflow-x-auto p-3 text-xs leading-relaxed text-[#e9d8a6]">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function renderInline(text: string, baseKey: string) {
  // Bold **text** and inline `code`
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const tok = m[0];
    if (tok.startsWith("**")) {
      parts.push(
        <strong key={`${baseKey}-b-${i++}`} className="font-extrabold text-[#f3d28a]">
          {tok.slice(2, -2)}
        </strong>,
      );
    } else {
      parts.push(
        <code
          key={`${baseKey}-c-${i++}`}
          dir="ltr"
          className="rounded bg-[#d7aa52]/15 px-1.5 py-0.5 font-mono text-[0.85em] text-[#f3d28a]"
        >
          {tok.slice(1, -1)}
        </code>,
      );
    }
    last = regex.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function MarkdownRender({ text }: { text: string }) {
  // Split fenced ```lang\n...``` blocks
  const out: React.ReactNode[] = [];
  const re = /```(\w+)?\n?([\s\S]*?)```/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(<TextBlock key={`t-${k++}`} text={text.slice(last, m.index)} />);
    out.push(<CodeBlock key={`c-${k++}`} language={m[1] ?? ""} code={m[2].trim()} />);
    last = re.lastIndex;
  }
  if (last < text.length) out.push(<TextBlock key={`t-${k++}`} text={text.slice(last)} />);
  return <>{out}</>;
}

function TextBlock({ text }: { text: string }) {
  const lines = text.split("\n");
  const out: React.ReactNode[] = [];
  lines.forEach((line, i) => {
    const trimmed = line.trim();
    if (!trimmed) {
      out.push(<div key={`br-${i}`} className="h-2" />);
      return;
    }
    if (/^#{1,6}\s/.test(trimmed)) {
      const level = trimmed.match(/^#+/)![0].length;
      const content = trimmed.replace(/^#+\s/, "");
      const cls =
        level <= 2
          ? "mt-2 text-base font-extrabold text-[#f3d28a]"
          : "mt-2 text-sm font-bold text-[#f3d28a]";
      out.push(
        <div key={`h-${i}`} className={cls}>
          {renderInline(content, `h${i}`)}
        </div>,
      );
      return;
    }
    if (/^[-*]\s/.test(trimmed)) {
      out.push(
        <div key={`li-${i}`} className="flex gap-2 ps-2">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#d7aa52]" />
          <span className="flex-1">{renderInline(trimmed.replace(/^[-*]\s/, ""), `li${i}`)}</span>
        </div>,
      );
      return;
    }
    if (/^\d+\.\s/.test(trimmed)) {
      out.push(
        <div key={`ol-${i}`} className="ps-2">
          {renderInline(trimmed, `ol${i}`)}
        </div>,
      );
      return;
    }
    out.push(
      <p key={`p-${i}`} className="leading-relaxed">
        {renderInline(trimmed, `p${i}`)}
      </p>,
    );
  });
  return <div className="space-y-1 text-sm text-[var(--fg)]">{out}</div>;
}

/* ---------- Main component ---------- */
export function OfficeAiAssistant({ lang }: { lang: Lang }) {
  const [mode, setMode] = useState<Mode>("problem");
  const [input, setInput] = useState("");
  const [initialMessages] = useState<UIMessage[]>(() => loadMessages());

  const { messages, sendMessage, status, setMessages, error } = useChat({
    transport,
    messages: initialMessages,
  });

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const loading = status === "submitted" || status === "streaming";

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, status]);

  useEffect(() => {
    saveMessages(messages);
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const send = (text: string) => {
    const t = text.trim();
    if (!t || loading) return;
    const prefix =
      mode === "function"
        ? lang === "ar"
          ? "[وضع الدالة] "
          : "[Function lookup] "
        : "";
    sendMessage({ text: prefix + t });
    setInput("");
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  const reset = () => {
    if (!confirm(lang === "ar" ? "بدء محادثة جديدة؟" : "Start a new conversation?")) return;
    setMessages([]);
    saveMessages([]);
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const suggestions = useMemo(() => SUGGESTIONS[mode][lang], [mode, lang]);
  const isEmpty = messages.length === 0;

  return (
    <div className="flex h-[680px] flex-col overflow-hidden rounded-2xl border border-[#d7aa52]/30 bg-gradient-to-br from-[#04101f] to-[#0a1a2f]">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#d7aa52]/20 bg-white/[0.02] p-3">
        <div className="flex items-center gap-2">
          <div className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-[#f3d28a] to-[#b8862e] text-[#04101f]">
            <FileSpreadsheet className="size-5" />
          </div>
          <div>
            <div className="text-sm font-extrabold text-[#f3d28a]">
              {lang === "ar" ? "مساعد Excel & Office الذكي" : "Excel & Office AI Assistant"}
            </div>
            <div className="text-[10px] text-[var(--fg-soft)]">
              {lang === "ar"
                ? "دوال • صيغ • VBA • Power Query • DAX"
                : "Functions · Formulas · VBA · Power Query · DAX"}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="inline-flex rounded-lg border border-[#d7aa52]/30 bg-white/[0.04] p-0.5">
            <button
              onClick={() => setMode("problem")}
              className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-[11px] font-bold transition ${
                mode === "problem"
                  ? "bg-gradient-to-br from-[#f3d28a] to-[#b8862e] text-[#04101f]"
                  : "text-[#f3d28a]"
              }`}
            >
              <Lightbulb className="size-3" />
              {lang === "ar" ? "حل مشكلة" : "Problem"}
            </button>
            <button
              onClick={() => setMode("function")}
              className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-[11px] font-bold transition ${
                mode === "function"
                  ? "bg-gradient-to-br from-[#f3d28a] to-[#b8862e] text-[#04101f]"
                  : "text-[#f3d28a]"
              }`}
            >
              <Code2 className="size-3" />
              {lang === "ar" ? "بحث بالدالة" : "Function"}
            </button>
          </div>
          <button
            onClick={reset}
            title={lang === "ar" ? "محادثة جديدة" : "New conversation"}
            className="inline-flex items-center gap-1 rounded-lg border border-[#d7aa52]/30 bg-white/[0.04] px-2 py-1 text-[11px] font-bold text-[#f3d28a] hover:bg-white/10"
          >
            <RefreshCw className="size-3" />
            {lang === "ar" ? "جديد" : "New"}
          </button>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4">
        {isEmpty ? (
          <div className="grid h-full place-items-center">
            <div className="max-w-md text-center">
              <div className="mx-auto mb-3 grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-[#f3d28a] to-[#b8862e] text-[#04101f] shadow-[0_8px_30px_-8px_rgba(215,170,82,0.6)]">
                <Sparkles className="size-8" />
              </div>
              <h3 className="mb-1 text-base font-extrabold text-[#f3d28a]">
                {lang === "ar" ? "كيف أساعدك في Excel أو Office؟" : "How can I help with Excel or Office?"}
              </h3>
              <p className="mb-5 text-xs text-[var(--fg-soft)]">
                {lang === "ar"
                  ? "اسأل عن أي دالة أو اشرح مشكلتك بلغتك الطبيعية، وسأقترح الحل الأمثل مع صيغة جاهزة للنسخ."
                  : "Ask about any function or describe your problem in natural language. I'll suggest the best formula or VBA, ready to copy."}
              </p>
              <div className="grid gap-2">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="rounded-lg border border-[#d7aa52]/30 bg-white/[0.03] p-2.5 text-start text-xs text-[var(--fg)] transition hover:border-[#d7aa52]/60 hover:bg-white/[0.06]"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((m) => {
              const text = m.parts
                .map((p) => (p.type === "text" ? p.text : ""))
                .join("");
              const isUser = m.role === "user";
              return (
                <div
                  key={m.id}
                  className={`flex gap-2 ${isUser ? "justify-end" : "justify-start"}`}
                >
                  {!isUser && (
                    <div className="grid size-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#f3d28a] to-[#b8862e] text-[#04101f]">
                      <FileSpreadsheet className="size-3.5" />
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 ${
                      isUser
                        ? "bg-gradient-to-br from-[#f3d28a] to-[#b8862e] text-[#04101f]"
                        : "bg-white/[0.04] text-[var(--fg)]"
                    }`}
                  >
                    {isUser ? (
                      <div className="whitespace-pre-wrap text-sm font-medium">
                        {text.replace(/^\[.*?\]\s*/, "")}
                      </div>
                    ) : (
                      <MarkdownRender text={text} />
                    )}
                  </div>
                  {isUser && (
                    <div className="grid size-7 shrink-0 place-items-center rounded-full border border-[#d7aa52]/40 bg-white/[0.04] text-[#f3d28a]">
                      <User className="size-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
            {status === "submitted" && (
              <div className="flex items-center gap-2 text-xs text-[var(--fg-soft)]">
                <Loader2 className="size-3.5 animate-spin text-[#f3d28a]" />
                {lang === "ar" ? "يفكّر..." : "Thinking..."}
              </div>
            )}
            {error && (
              <div className="rounded-lg border border-red-400/40 bg-red-500/10 p-2 text-xs text-red-200">
                {error.message ?? (lang === "ar" ? "حدث خطأ" : "An error occurred")}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Composer */}
      <form
        onSubmit={onSubmit}
        className="border-t border-[#d7aa52]/20 bg-white/[0.02] p-3"
      >
        <div className="flex items-end gap-2 rounded-xl border border-[#d7aa52]/30 bg-[#04101f]/60 p-2 focus-within:border-[#d7aa52]/70">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send(input);
              }
            }}
            rows={1}
            placeholder={
              mode === "function"
                ? lang === "ar"
                  ? "اكتب اسم دالة (مثلاً: XLOOKUP)..."
                  : "Type a function name (e.g. XLOOKUP)..."
                : lang === "ar"
                  ? "صف مشكلتك بلغتك الطبيعية..."
                  : "Describe your problem in plain language..."
            }
            className="flex-1 resize-none bg-transparent text-sm text-[var(--fg)] outline-none placeholder:text-[var(--fg-soft)]"
            style={{ maxHeight: 140 }}
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            aria-label={lang === "ar" ? "إرسال" : "Send"}
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#f3d28a] to-[#b8862e] text-[#04101f] transition disabled:opacity-40"
          >
            {loading ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
          </button>
        </div>
        <div className="mt-1.5 text-[10px] text-[var(--fg-soft)]">
          {lang === "ar"
            ? "Enter للإرسال · Shift+Enter لسطر جديد · المحادثة محفوظة في متصفحك"
            : "Enter to send · Shift+Enter for new line · Conversation stored in your browser"}
        </div>
      </form>
    </div>
  );
}
