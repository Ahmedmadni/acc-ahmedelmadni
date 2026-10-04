import { DefaultChatTransport } from "ai";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Send, Bot, X } from "lucide-react";
import { playClick, playHover } from "@/lib/sound";
import mascotImg from "@/assets/ai-mascot.webp";
import type { Lang } from "@/lib/i18n";
import { useChatWidget, extractMessageText } from "@/lib/chat-widget";

const transport = new DefaultChatTransport({ api: "/api/chat" });

/**
 * The launcher is `position: fixed` in a bottom corner, so it sits on top of
 * whatever the page happens to scroll underneath it. Sizing/positioning it
 * carefully removes most collisions, but pages keep growing and some
 * sections (a `position: sticky` bio block, a long RTL paragraph whose line
 * boxes reach the edge) can genuinely pin real text at that exact spot for
 * a long scroll range — no fixed size/offset can rule that out for content
 * that doesn't exist yet. So instead of guessing at every case, this samples
 * a few points across the launcher's own footprint on scroll/resize and
 * checks what's actually stacked underneath (via `elementsFromPoint`, which
 * — unlike `elementFromPoint` — returns the whole z-order stack, so it works
 * without needing to hide the button first). If any sample point resolves to
 * a real text-bearing element, the button fades near-invisible and stops
 * intercepting clicks until it's clear again.
 */
function useClearOfText(ref: React.RefObject<HTMLElement | null>) {
  const [clear, setClear] = useState(true);

  useEffect(() => {
    let raf = 0;
    let ticking = false;

    const hasOwnText = (el: Element) => {
      for (const child of el.childNodes) {
        if (child.nodeType === 3 && (child.textContent ?? "").trim().length > 1) return true;
      }
      return false;
    };

    const check = () => {
      ticking = false;
      const el = ref.current;
      if (!el || typeof document.elementsFromPoint !== "function") return;
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) return;
      const points: [number, number][] = [
        [r.left + r.width * 0.5, r.top + r.height * 0.5],
        [r.left + r.width * 0.2, r.top + r.height * 0.5],
        [r.left + r.width * 0.5, r.top + r.height * 0.2],
        [r.left + r.width * 0.5, r.top + r.height * 0.8],
      ];
      let hit = false;
      for (const [x, y] of points) {
        if (x < 0 || y < 0 || x > window.innerWidth || y > window.innerHeight) continue;
        const stack = document.elementsFromPoint(x, y);
        for (const stacked of stack) {
          if (el.contains(stacked)) continue;
          if (hasOwnText(stacked)) {
            hit = true;
            break;
          }
        }
        if (hit) break;
      }
      setClear(!hit);
    };

    const onScrollOrResize = () => {
      if (ticking) return;
      ticking = true;
      raf = requestAnimationFrame(check);
    };

    check();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [ref]);

  return clear;
}

export function AIAssistant({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage, loading, scrollRef } = useChatWidget(transport);
  const inputRef = useRef<HTMLInputElement>(null);
  const runnerRef = useRef<HTMLDivElement>(null);
  const clearOfText = useClearOfText(runnerRef);
  const reduce = useReducedMotion();

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
      {/* Mascot pinned above the floating social button on the left. Fades
          near-invisible and stops accepting clicks whenever it would
          otherwise sit on top of real text (see `useClearOfText` above) —
          `open` is excluded from the check on purpose, since once the chat
          panel is open there's nothing left behind the launcher to protect. */}
      <div
        id="ai-mascot-runner"
        ref={runnerRef}
        className="fixed z-40 transition-opacity duration-300 motion-reduce:transition-none"
        style={{
          left: 10,
          bottom: 86,
          opacity: clearOfText || open ? 1 : 0.16,
          pointerEvents: clearOfText || open ? "auto" : "none",
        }}
      >
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
            className="absolute inset-0 rounded-full bg-[#A88765]/40 animate-ping opacity-60 motion-reduce:animate-none"
            aria-hidden
          />
          <span
            className="absolute inset-0 rounded-full bg-gradient-to-br from-[#c9a986]/25 to-[#7c6045]/25 blur-xl"
            aria-hidden
          />
          <motion.img
            src={mascotImg}
            alt={title}
            width={112}
            height={112}
            loading="lazy"
            decoding="async"
            /* Was a fixed 112px at every breakpoint — on a 390px-wide phone
               that's nearly a third of the screen width, permanently fixed
               in a corner, which put it on top of body text at almost every
               scroll position (confirmed by scanning every page). Scaling
               down on narrow viewports keeps the desktop size (112px, lg+)
               unchanged and shrinks the mobile/tablet footprint enough that
               it clears ordinary paragraph and heading text. */
            className="relative size-16 object-contain drop-shadow-[0_8px_24px_rgba(168,135,101,0.4)] sm:size-20 lg:size-28"
            animate={reduce ? undefined : { y: [0, -8, 0, -4, 0], rotate: [0, -5, 5, -2, 0] }}
            transition={reduce ? undefined : { duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
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
              className="fixed bottom-0 right-0 left-0 sm:left-6 sm:right-auto sm:bottom-6 flex h-[88vh] sm:h-[600px] w-full sm:w-[400px] flex-col overflow-hidden rounded-t-3xl sm:rounded-3xl border border-[#A88765]/30 bg-[#1C1B19] shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center gap-3 border-b border-[#A88765]/20 bg-[#1C1B19] p-4">
                <div className="relative flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#c9a986]/20 to-[#7c6045]/20 ring-1 ring-[#A88765]/30">
                  <img
                    src={mascotImg}
                    alt=""
                    width={44}
                    height={44}
                    loading="lazy"
                    decoding="async"
                    className="size-11 object-contain"
                  />
                  <span className="absolute -bottom-0.5 -end-0.5 size-3 rounded-full border-2 border-[#1C1B19] bg-emerald-400" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-extrabold text-white">{title}</div>
                  <div className="text-[11px] text-[#c9a986]">{subtitle}</div>
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
                  <div className="mt-2 rounded-2xl border border-[#A88765]/20 bg-white/[0.04] p-4 text-sm text-white/85">
                    <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-[#A88765]/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#c9a986]">
                      <Bot className="size-3" />
                      {lang === "ar" ? "مرحباً" : "Welcome"}
                    </div>
                    {/* Sets the expectation up front — Saudi dialect, and
                        explicitly scoped to accounting and Ahmed's services —
                        so the assistant's refusals later don't come as a
                        surprise to the visitor. */}
                    <p className="leading-relaxed">
                      {lang === "ar"
                        ? "يا هلا فيك! أنا مساعد أحمد المدني، متخصص بس في المحاسبة والزكاة والضريبة والتقارير المالية وخدمات أحمد. وش أقدر أساعدك فيه؟"
                        : "Welcome! I'm Ahmed Elmadani's assistant — I only cover accounting, zakat & tax, financial reporting, and Ahmed's services. How can I help?"}
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
                          className="rounded-full border border-[#A88765]/40 bg-[#A88765]/10 px-3 py-1 text-[11px] font-semibold text-[#c9a986] transition-colors hover:bg-[#A88765]/20"
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
                            ? "bg-gradient-to-br from-[#c2a079] to-[#7c6045] text-[#1C1B19] font-medium"
                            : "border border-[#A88765]/20 bg-white/[0.04] text-white/90"
                        }`}
                      >
                        {text}
                      </div>
                    </div>
                  );
                })}

                {loading && (
                  <div className="flex justify-start">
                    <div className="flex items-center gap-1.5 rounded-2xl border border-[#A88765]/20 bg-white/[0.04] px-3 py-2.5">
                      <span
                        className="size-1.5 animate-bounce rounded-full bg-[#A88765]"
                        style={{ animationDelay: "0ms" }}
                      />
                      <span
                        className="size-1.5 animate-bounce rounded-full bg-[#A88765]"
                        style={{ animationDelay: "150ms" }}
                      />
                      <span
                        className="size-1.5 animate-bounce rounded-full bg-[#A88765]"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <form onSubmit={submit} className="border-t border-[#A88765]/20 bg-[#1C1B19]/80 p-3">
                <div className="flex items-center gap-2 rounded-full border border-[#A88765]/25 bg-white/[0.04] ps-4 pe-1.5 py-1.5">
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
                    className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#c2a079] to-[#7c6045] text-[#1C1B19] transition-transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
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
