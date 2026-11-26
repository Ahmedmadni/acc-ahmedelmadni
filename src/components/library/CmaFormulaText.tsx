import { splitCmaFormulaText } from "@/lib/cma-formula-text.shared";

/** Inline bidi isolation keeps calculation order independent from Arabic prose. */
export function CmaFormulaText({ text }: { text: string }) {
  return <>{splitCmaFormulaText(text).map((segment, index) => segment.math
    ? <bdi key={index} dir="ltr" className="tabular-nums [overflow-wrap:anywhere]">{segment.text}</bdi>
    : <span key={index}>{segment.text}</span>)}</>;
}
