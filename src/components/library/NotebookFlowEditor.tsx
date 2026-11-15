import { useLayoutEffect, useRef } from "react";
import type { NotebookDirection, NotebookFlowBlock, NotebookTypeface } from "@/lib/study-notebook";
import { MAX_NOTEBOOK_FLOW_ROWS, MAX_NOTEBOOK_FLOW_COLS, MAX_NOTEBOOK_FLOW_CELL_LENGTH,
  MAX_NOTE_TEXT_LENGTH } from "@/lib/study-notebook";
import type { NotebookFlowCursor } from "@/lib/study-notebook-flow";

export function NotebookFlowEditor({
  blocks, direction, typeface, lineGap, margin, tool, onChange, onCursor, onOverflow,
}: {
  blocks: NotebookFlowBlock[];
  direction: NotebookDirection;
  typeface: NotebookTypeface;
  lineGap: number;
  margin: number;
  tool: string;
  onChange: (blocks: NotebookFlowBlock[]) => void;
  onCursor: (cursor: NotebookFlowCursor) => void;
  onOverflow: (overflows: boolean) => void;
}) {
  const paragraphs = useRef<Record<string, HTMLTextAreaElement | null>>({});
  const flowRoot = useRef<HTMLDivElement | null>(null);
  const editable = tool === "type";
  const fontFamily = typeface === "handwritten"
    ? direction === "rtl" ? '"Aref Ruqaa Ink","Aref Ruqaa",serif' : '"Caveat","Comic Sans MS",cursive'
    : direction === "rtl" ? '"Cairo",sans-serif' : "Georgia,serif";
  const fontSize = Math.max(12, lineGap * (direction === "rtl" ? .74 : .87));
  const textStyle = { fontFamily, fontSize, lineHeight: `${lineGap}px` };

  useLayoutEffect(() => {
    for (const node of Object.values(paragraphs.current)) {
      if (!node) continue;
      node.style.height = "0px";
      node.style.height = Math.max(lineGap, Math.ceil(node.scrollHeight / lineGap) * lineGap) + "px";
    }
    const root = flowRoot.current;
    if (root) onOverflow(root.scrollHeight > root.clientHeight + 2);
  }, [blocks, lineGap, margin, fontSize, onOverflow]);

  function patchBlock(id: string, change: Partial<NotebookFlowBlock>) {
    onChange(blocks.map(block => block.id === id
      ? { ...block, ...change } as NotebookFlowBlock
      : block));
  }
  const focusCursor = (id: string, node: HTMLTextAreaElement) =>
    onCursor({ blockId: id, start: node.selectionStart, end: node.selectionEnd });

  return (
    <div
      data-notebook-flow-editor
      ref={flowRoot}
      dir={direction}
      className="absolute inset-0 z-[2] overflow-y-auto overscroll-contain bg-transparent text-[#25272c]"
      aria-label={direction === "rtl" ? "محتوى المذكرة المنسق: فقرات وجداول قابلة للتحرير" : "Editable note with flowing paragraphs and tables"}
      style={{
        padding: `0 ${margin + 5}px`,
        pointerEvents: editable ? "auto" : "none",
      }}
    >
      {blocks.map(block => block.kind === "paragraph" ? (
        <textarea
          key={block.id}
          data-notebook-flow-paragraph={block.id}
          ref={node => { paragraphs.current[block.id] = node; }}
          value={block.text}
          rows={1}
          dir={direction}
          readOnly={!editable}
          spellCheck
          maxLength={MAX_NOTE_TEXT_LENGTH}
          onFocus={e => focusCursor(block.id, e.currentTarget)}
          onClick={e => focusCursor(block.id, e.currentTarget)}
          onSelect={e => focusCursor(block.id, e.currentTarget)}
          onKeyUp={e => focusCursor(block.id, e.currentTarget)}
          onChange={e => {
            focusCursor(block.id, e.currentTarget);
            patchBlock(block.id, { text: e.target.value });
          }}
          aria-label={direction === "rtl" ? "فقرة من المذكرة" : "Notebook paragraph"}
          className="block w-full resize-none overflow-hidden border-0 bg-transparent p-0 outline-none placeholder:opacity-45"
          placeholder={editable && blocks.length === 1
            ? direction === "rtl" ? "اكتب هنا، ثم أدرج جدولًا أو معادلة من أدوات النص…" : "Write here, then insert a table or formula at your cursor…"
            : ""}
          style={{ ...textStyle, minHeight: lineGap }}
        />
      ) : (
        <div key={block.id}
          data-notebook-flow-table={block.template}
          className="my-2 overflow-hidden rounded-md border border-[#a2b4c3] bg-white/75"
          style={{ marginBlock: `${lineGap * .32}px` }}>
          <div className="flex items-center justify-between gap-1 bg-[#e4ebf2]/80 px-1 py-1">
            <input type="text" value={block.title}
              readOnly={!editable}
              maxLength={80}
              aria-label={direction === "rtl" ? "عنوان الجدول" : "Table title"}
              onChange={e => patchBlock(block.id, { title: e.target.value })}
              className="min-w-0 flex-1 border-0 bg-transparent text-xs font-bold text-[#293947] outline-none"
            />
            {editable && (
              <button type="button" onClick={() => {
                if (block.cells.some(row => row.some(cell => cell.trim())) &&
                  !window.confirm(direction === "rtl" ? "حذف الجدول ومحتوياته نهائيا؟" : "Delete this table and all its contents?")) return;
                onChange(blocks.filter(item => item.id !== block.id));
              }}
                className="rounded border border-red-200 bg-white px-1.5 py-1 text-[10px] font-semibold text-red-700"
                aria-label={direction === "rtl" ? "حذف الجدول من المذكرة" : "Remove inline table"}>×</button>
            )}
          </div>
          <div className="w-full overflow-x-auto">
            <table className="w-full table-fixed border-collapse" dir={direction}>
              <tbody>
                {block.cells.map((row, ri) => (
                  <tr key={ri}>
                    {row.map((cell, ci) => (
                      <td key={ci} className="border border-[#bac9d4] p-0"
                        style={{ height: Math.max(24, lineGap) }}>
                        <input
                          value={cell}
                          type="text"
                          readOnly={!editable}
                          maxLength={MAX_NOTEBOOK_FLOW_CELL_LENGTH}
                          aria-label={(direction === "rtl" ? "الصف " : "Row ") + (ri + 1) +
                            (direction === "rtl" ? " العمود " : " column ") + (ci + 1)}
                          onChange={e => patchBlock(block.id, { cells: block.cells.map((r, i) =>
                            i === ri ? r.map((value, j) => j === ci ? e.target.value : value) : r) })}
                          className={`w-full min-w-0 border-0 bg-transparent px-1 text-[#283646] outline-none focus:bg-teal-50 ${ri === 0 ? "font-bold" : ""}`}
                          style={{ fontSize: Math.max(11, lineGap * .36), height: Math.max(24, lineGap) }}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {editable && (
            <div className="flex flex-wrap gap-1 border-t border-[#b5c4d3] bg-white/65 p-1">
              <button type="button" disabled={block.cells.length >= MAX_NOTEBOOK_FLOW_ROWS}
                onClick={() => patchBlock(block.id, { cells: [
                  ...block.cells, Array.from({ length: block.cells[0]?.length || 2 }, () => ""),
                ] })}
                className="rounded border border-[#bac9d4] px-1.5 py-1 text-[10px] disabled:opacity-40"
                aria-label={direction === "rtl" ? "إضافة صف للجدول" : "Add journal row"}>
                {direction === "rtl" ? "+ صف" : "+ Row"}
              </button>
              <button type="button" disabled={block.cells.length <= 2 || block.cells[block.cells.length - 1].some(cell => cell.trim().length > 0)}
                onClick={() => patchBlock(block.id, { cells: block.cells.slice(0, -1) })}
                className="rounded border border-[#bac9d4] px-1.5 py-1 text-[10px] disabled:opacity-40"
                aria-label={direction === "rtl" ? "حذف آخر صف" : "Remove last row"}>
                {direction === "rtl" ? "− صف" : "− Row"}
              </button>
              <button type="button" disabled={(block.cells[0]?.length || 0) >= MAX_NOTEBOOK_FLOW_COLS}
                onClick={() => patchBlock(block.id, { cells: block.cells.map(row => [...row, ""]) })}
                className="rounded border border-[#bac9d4] px-1.5 py-1 text-[10px] disabled:opacity-40"
                aria-label={direction === "rtl" ? "إضافة عمود للجدول" : "Add table column"}>
                {direction === "rtl" ? "+ عمود" : "+ Column"}
              </button>
              <button type="button"
                disabled={(block.cells[0]?.length || 0) <= 2 || block.cells.some(row => row[row.length - 1]?.trim())}
                onClick={() => patchBlock(block.id, { cells: block.cells.map(row => row.slice(0, -1)) })}
                className="rounded border border-[#bac9d4] px-1.5 py-1 text-[10px] disabled:opacity-40"
                aria-label={direction === "rtl" ? "حذف آخر عمود فارغ" : "Remove last empty column"}
                title={direction === "rtl" ? "لا يمكن حذف عمود يحتوي على بيانات" : "Only empty columns can be removed"}>
                {direction === "rtl" ? "− عمود" : "− Column"}
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
