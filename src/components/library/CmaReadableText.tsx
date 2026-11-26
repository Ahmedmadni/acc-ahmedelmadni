import { splitCmaText } from "@/lib/cma-text-layout.shared";

export function CmaReadableText({ text, direction, allowTables = false, className = "" }: {
  text: string;
  direction: "rtl" | "ltr";
  allowTables?: boolean;
  className?: string;
}) {
  const blocks = splitCmaText(text, allowTables);
  return (
    <div dir={direction} className={`min-w-0 max-w-full break-words [overflow-wrap:anywhere] ${className}`}>
      {blocks.map((block, index) => block.kind === "text" ? (
        <div key={index} className="whitespace-pre-wrap">{block.text}</div>
      ) : (
        <div key={index} role="region" aria-label={direction === "rtl" ? "جدول بيانات السؤال" : "Question data table"}
          tabIndex={0} className="my-2 max-w-full overflow-x-auto rounded-lg border border-current/20 focus-visible:outline focus-visible:outline-2">
          <table className="w-full min-w-max border-collapse text-sm font-normal">
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-b border-current/15 last:border-0">
                  {row.map((cell, colIndex) => (
                    <td key={colIndex} className="border-e border-current/15 px-3 py-2 text-start align-top last:border-0">
                      <bdi dir={/^[\s$€£¥+−-]*[0-9٠-٩۰-۹][0-9٠-٩۰-۹,.٬٫%٪\s]*$/.test(cell) ? "ltr" : "auto"} className="tabular-nums">{cell}</bdi>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
