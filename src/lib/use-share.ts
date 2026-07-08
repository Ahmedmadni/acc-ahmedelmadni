import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

// Encode an arbitrary JSON-safe value to a URL-safe base64 string (UTF-8 friendly).
function encode(obj: unknown): string {
  const json = JSON.stringify(obj);
  // Convert UTF-8 → binary string → base64, then make URL-safe.
  const b64 =
    typeof btoa === "function"
      ? btoa(unescape(encodeURIComponent(json)))
      : Buffer.from(json, "utf-8").toString("base64");
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function decode(s: string): Record<string, unknown> {
  try {
    const b64 = s.replace(/-/g, "+").replace(/_/g, "/");
    const pad = b64.length % 4 === 0 ? "" : "=".repeat(4 - (b64.length % 4));
    const json =
      typeof atob === "function"
        ? decodeURIComponent(escape(atob(b64 + pad)))
        : Buffer.from(b64 + pad, "base64").toString("utf-8");
    const parsed = JSON.parse(json);
    return parsed && typeof parsed === "object" ? (parsed as Record<string, unknown>) : {};
  } catch {
    return {};
  }
}

function readUrlState(): Record<string, unknown> {
  if (typeof window === "undefined") return {};
  const hash = window.location.hash || "";
  const m = hash.match(/[#&]s=([^&]+)/);
  if (!m) return {};
  return decode(decodeURIComponent(m[1]));
}

function writeUrlState(obj: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const enc = encode(obj);
  const hash = `#s=${enc}`;
  const url = window.location.pathname + window.location.search + hash;
  window.history.replaceState(null, "", url);
}

/**
 * Drop-in replacement for `useState` that mirrors its value into the URL
 * hash so the entire tool state can be shared via a copyable link.
 * Each call must use a unique `key` within the same page/tool.
 */
export function useShareState<T>(key: string, initial: T): [T, Dispatch<SetStateAction<T>>] {
  // Always start from the SSR-safe default — reading the URL hash during the
  // lazy initializer would make the client's first render differ from the
  // server-rendered HTML (hydration mismatch). The real value (if a shared
  // link carries one) is applied after mount instead.
  const [state, setState] = useState<T>(initial);
  useEffect(() => {
    const all = readUrlState();
    if (key in all) setState(all[key] as T);
    // Intentionally run once on mount only — re-running on `key` changes
    // would re-apply a stale URL snapshot over live in-memory edits.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const wrapped: Dispatch<SetStateAction<T>> = (val) => {
    setState((prev) => {
      const next = typeof val === "function" ? (val as (p: T) => T)(prev) : val;
      const all = readUrlState();
      all[key] = next as unknown;
      writeUrlState(all);
      return next;
    });
  };
  return [state, wrapped];
}

/** Returns the full shareable URL for the current tool with its current state. */
export function getShareUrl(): string {
  if (typeof window === "undefined") return "";
  return window.location.href;
}
