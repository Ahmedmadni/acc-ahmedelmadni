import { DefaultChatTransport } from "ai";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Send, Sparkles, X } from "lucide-react";
import { playClick, playHover } from "@/lib/sound";
import mascotImg from "@/assets/ai-mascot.webp";
import type { Lang } from "@/lib/i18n";
import { useChatWidget, extractMessageText } from "@/lib/chat-widget";

const transport = new DefaultChatTransport({ api: "/api/chat" });

export function AIAssistant({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage, loading, scrollRef } = useChatWidget(transport);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 200);
  }, [open]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;
    sendMessage({ text });
    setInput("");
  };

  const placeholder =
    lang === "ar"
      ? "اسأل عن المحاسبة أو اطلب خدمة..."
      : "Ask about accounting or request a service...";
  const title = lang === "ar" ? "المساعد الذكي" : "AI Assistant";
  const subtitle =
    lang === "ar" ? "خبير محاسبة ومعايير مالية" : "Accounting & financial standards expert";

  return (
    <>
      {/* Mascot pinned above the floating social button on the left */}
      <div id="ai-mascot-runner" className="fixed z-40" style={{ left: 10, bottom: 86 }}>
        <motion.button
          type="button"
          onClick={() => {
            playClick();
            setOpen(true);
          }}
          onMouseEnter={playHover}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 220, damping: 16 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          aria-label={title}
          className="relative group flex items-center justify-center rounded-full"
        >
          <span
            className="absolute inset-0 rounded-full bg-[#d7aa52]/40 animate-ping opacity-60"
            aria-hidden
          />
          <span
            className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f3d28a]/30 to-[#b8862e]/30 blur-xl"
            aria-hidden
          />
          <motion.img
            src={mascotImg}
            alt={title}
            width={112}
            height={112}
            loading="lazy"
            decoding="async"
            style={{ width: "112px", height: "112px", objectFit: "contain" }}
            className="relative object-contain drop-shadow-[0_8px_24px_rgba(215,170,82,0.5)]"
            animate={{ y: [0, -8, 0, -4, 0], rotate: [0, -5, 5, -2, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="sr-only">{lang === "ar" ? "اسأل المساعد" : "Ask AI"}</span>
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[180] bg-black/60 backdrop-blur-sm sm:bg-transparent sm:backdrop-blur-0"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.92 }}
              transition={{ type: "spring", stiffness: 240, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="fixed bottom-0 right-0 left-0 sm:left-6 sm:right-auto sm:bottom-6 flex h-[88vh] sm:h-[600px] w-full sm:w-[400px] flex-col overflow-hidden rounded-t-3xl sm:rounded-3xl border border-[#d7aa52]/40 bg-gradient-to-br from-[#07182c] to-[#04101f] shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center gap-3 border-b border-[#d7aa52]/25 bg-gradient-to-r from-[#0a223f] to-[#04101f] p-4">
                <div className="relative flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f3d28a]/20 to-[#b8862e]/20 ring-1 ring-[#d7aa52]/40">
                  <img
                    src={mascotImg}
                    alt=""
                    width={44}
                    height={44}
                    loading="lazy"
                    decoding="async"
                    className="size-11 object-contain"
                  />
                  <span className="absolute -bottom-0.5 -end-0.5 size-3 rounded-full border-2 border-[#07182c] bg-emerald-400" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-extrabold text-white">{title}</div>
                  <div className="text-[11px] text-[#d7aa52]">{subtitle}</div>
                </div>
                <button
                  onClick={() => {
                    playClick();
                    setOpen(false);
                  }}
                  className="flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="close"
                >
                  <X className="size-4" />
                </button>
              </div>

              {/* Messages */}
              <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
                {messages.length === 0 && (
                  <div className="mt-2 rounded-2xl border border-[#d7aa52]/25 bg-white/[0.04] p-4 text-sm text-white/85">
                    <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-[#d7aa52]/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f3d28a]">
                      <Sparkles className="size-3" />
                      {lang === "ar" ? "مرحباً" : "Welcome"}
                    </div>
                    <p className="leading-relaxed text-justify">
                      {lang === "ar"
                        ? "مرحباً! أنا مساعد أحمد المدني الذكي، خبير في المحاسبة والمعايير المحاسبية. كيف يمكنني مساعدتك اليوم؟ يمكنك سؤالي عن خدمة محددة أو معيار محاسبي أو طلب التواصل المباشر."
                        : "Hi! I'm Ahmed Elmadani's AI assistant — an expert in accounting and standards. How can I help today? Ask about a specific service, an accounting standard, or request a direct contact."}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {(lang === "ar"
                        ? ["ما هي خدماتك؟", "أحتاج تسوية بنكية", "كيف أعد إقرار ضريبة؟"]
                        : ["What services?", "I need bank reconciliation", "How to file VAT?"]
                      ).map((q) => (
                        <button
                          key={q}
                          onClick={() => {
                            sendMessage({ text: q });
                          }}
                          className="rounded-full border border-[#d7aa52]/40 bg-[#d7aa52]/10 px-3 py-1 text-[11px] font-semibold text-[#f3d28a] transition-colors hover:bg-[#d7aa52]/20"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {messages.map((m) => {
                  const text = extractMessageText(m);
                  const isUser = m.role === "user";
                  return (
                    <div key={m.id} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                          isUser
                            ? "bg-gradient-to-br from-[#f3d28a] to-[#b8862e] text-[#04101f] font-medium"
                            : "border border-[#d7aa52]/20 bg-white/[0.04] text-white/90"
                        }`}
                      >
                        {text}
                      </div>
                    </div>
                  );
                })}

                {loading && (
                  <div className="flex justify-start">
                    <div className="flex items-center gap-1.5 rounded-2xl border border-[#d7aa52]/20 bg-white/[0.04] px-3 py-2.5">
                      <span
                        className="size-1.5 animate-bounce rounded-full bg-[#d7aa52]"
                        style={{ animationDelay: "0ms" }}
                      />
                      <span
                        className="size-1.5 animate-bounce rounded-full bg-[#d7aa52]"
                        style={{ animationDelay: "150ms" }}
                      />
                      <span
                        className="size-1.5 animate-bounce rounded-full bg-[#d7aa52]"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <form onSubmit={submit} className="border-t border-[#d7aa52]/25 bg-[#04101f]/80 p-3">
                <div className="flex items-center gap-2 rounded-full border border-[#d7aa52]/30 bg-white/[0.04] ps-4 pe-1.5 py-1.5">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={placeholder}
                    disabled={loading}
                    className="flex-1 bg-transparent text-sm text-white placeholder:text-white/40 outline-none"
                  />
                  <button
                    type="submit"
                    disabled={loading || !input.trim()}
                    aria-label="send"
                    className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f3d28a] to-[#b8862e] text-[#04101f] transition-transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                  >
                    <Send className="size-4 rtl:rotate-180" />
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
