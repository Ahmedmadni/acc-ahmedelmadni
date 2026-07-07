import { useChat } from "@ai-sdk/react";
import type { DefaultChatTransport, UIMessage } from "ai";
import { useEffect, useRef } from "react";

// Shared by AIAssistant and OfficeAiAssistant, which previously each
// independently wired up useChat, derived the same "loading" flag from
// status, and auto-scrolled to the newest message the same way.
export function useChatWidget(
  transport: DefaultChatTransport<UIMessage>,
  initialMessages?: UIMessage[],
) {
  const chat = useChat({ transport, messages: initialMessages });
  const scrollRef = useRef<HTMLDivElement>(null);
  const loading = chat.status === "submitted" || chat.status === "streaming";

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [chat.messages, chat.status]);

  return { ...chat, loading, scrollRef };
}

export function extractMessageText(m: UIMessage): string {
  return m.parts.map((p) => (p.type === "text" ? p.text : "")).join("");
}
