import type { CSSProperties } from "react";
import type { Lang } from "@/lib/i18n";
import type { NotebookDirection, NotebookObject } from "@/lib/study-notebook";
import {
  MAX_WIDGET_CELL_LENGTH, MAX_WIDGET_ITEMS, MAX_WIDGET_ROWS,
  MAX_WIDGET_TEXT_LENGTH, MAX_WIDGET_TITLE_LENGTH,
} from "@/lib/study-notebook";
import {
  STUDY_WIDGET_PALETTE, studyWidgetDefaultTitle,
} from "@/lib/study-notebook-widgets";

export function isEditableStudyWidget(object: NotebookObject) {
  return object.kind === "sticky" || object.kind === "formula" ||
    object.kind === "checklist" || object.kind === "table";
}

/** A form on the PAPER itself, not a sticker, screenshot or read-only text card.
 * Dragging is permitted only through the labelled header handle, so touch and
 * pen clicks inside text fields can select text, focus and open the keyboard.
 */
export function StudyNotebookEditableWidget({
  object, lang, direction, scale, editable, onChange,
}: {
  object: NotebookObject;
  lang: Lang;
  direction: NotebookDirection;
  scale: number;
  editable: boolean;
  onChange: (change: Partial<NotebookObject>) => void;
}) {
  if (!isEditableStudyWidget(object)) return null;
  const palette = STUDY_WIDGET_PALETTE[object.tone ?? "yellow"];
  const font = Math.max(11, Math.round(20 * scale));
  const inputStyle: CSSProperties = {
    fontSize: font,
    lineHeight: 1.25,
    color: palette.text,
    backgroundColor: editable ? "rgba(255,255,255,.62)" : "transparent",
    borderColor: editable ? palette.border : "transparent",
  };
  const fieldClass = "block min-w-0 w-full rounded-sm border px-1 py-0.5 outline-none focus:ring-2 focus:ring-teal-600";
  const update = (change: Partial<NotebookObject>) => onChange(change);
  return (
    <section
      data-study-widget={object.kind}
      data-study-widget-editable={editable ? "true" : "false"}
      dir={direction}
      className="flex h-full w-full flex-col overflow-hidden rounded-md border text-start shadow-sm"
      style={{
        borderColor: palette.border,
        backgroundColor: palette.background,
        color: palette.text,
        padding: Math.max(4, Math.round(10 * scale)),
        gap: Math.max(2, Math.round(5 * scale)),
      }}
    >
      <div data-widget-drag="true"
        className="flex min-h-6 shrink-0 cursor-move touch-none items-center justify-between gap-1 rounded-sm border-b border-black/10 px-1 font-bold"
        aria-label={lang === "ar" ? "مقبض تحريك البطاقة" : "Drag card handle"}
        title={lang === "ar" ? "اسحب من هنا لتحريك البطاقة" : "Drag this handle to move the card"}
        style={{ fontSize: Math.max(10, Math.round(15 * scale)) }}>
        <span data-widget-drag="true" className="truncate">{studyWidgetDefaultTitle(object.kind)}</span>
        <span data-widget-drag="true" aria-hidden="true">⠿</span>
      </div>
      {editable && (
        <div className="flex shrink-0 items-center gap-1" role="group"
          aria-label={lang === "ar" ? "لون العنصر" : "Card color"}>
          {(["yellow", "mint", "rose", "blue"] as const).map(tone => (
            <button key={tone} type="button"
              aria-label={lang === "ar" ? "لون " + tone : "Set " + tone + " card color"}
              aria-pressed={(object.tone ?? "yellow") === tone}
              onClick={() => update({ tone })}
              className="rounded-full border-2 border-white shadow-sm focus:outline-2 focus:outline-teal-600"
              style={{ width: 13, height: 13, background: STUDY_WIDGET_PALETTE[tone].background,
                boxShadow: (object.tone ?? "yellow") === tone ? "0 0 0 2px #177e7c" : "none" }}
            />
          ))}
        </div>
      )}

      {object.kind === "sticky" || object.kind === "formula" ? (
        <textarea
          aria-label={object.kind === "sticky"
            ? lang === "ar" ? "تحرير نص الملاحظة داخل الورقة" : "Edit note on paper"
            : lang === "ar" ? "تحرير المعادلة داخل الورقة" : "Edit formula on paper"}
          value={object.label ?? ""}
          readOnly={!editable}
          tabIndex={editable ? 0 : -1}
          spellCheck={object.kind === "sticky"}
          maxLength={MAX_WIDGET_TEXT_LENGTH}
          onChange={event => update({ label: event.target.value.slice(0, MAX_WIDGET_TEXT_LENGTH) })}
          className={fieldClass + " min-h-0 flex-1 resize-none overflow-y-auto whitespace-pre-wrap"}
          style={{ ...inputStyle, fontSize: Math.max(12, Math.round((object.kind === "formula" ? 22 : 21) * scale)) }}
        />
      ) : (
        <>
          <input
            type="text"
            aria-label={lang === "ar" ? "تحرير عنوان العنصر داخل الورقة" : "Edit widget title on paper"}
            value={object.label ?? ""}
            readOnly={!editable}
            tabIndex={editable ? 0 : -1}
            maxLength={MAX_WIDGET_TITLE_LENGTH}
            onChange={event => update({ label: event.target.value.slice(0, MAX_WIDGET_TITLE_LENGTH) })}
            className={fieldClass + " shrink-0 font-bold"}
            style={inputStyle}
          />
          {object.kind === "checklist" && (
            <div className="min-h-0 flex-1 space-y-0.5 overflow-y-auto">
              {(object.items ?? []).map((item, index) => (
                <div key={index} className="flex min-w-0 items-center gap-1">
                  <input type="checkbox" checked={item.checked} disabled={!editable}
                    aria-label={lang === "ar" ? "إنجاز البند " + (index + 1) : "Complete item " + (index + 1)}
                    onChange={event => update({ items: (object.items ?? []).map((old, i) =>
                      i === index ? { ...old, checked: event.target.checked } : old) })}
                    className="size-3 shrink-0 accent-teal-700" />
                  <input type="text" value={item.text} readOnly={!editable}
                    tabIndex={editable ? 0 : -1} maxLength={MAX_WIDGET_CELL_LENGTH}
                    aria-label={lang === "ar" ? "تحرير البند " + (index + 1) : "Edit item " + (index + 1)}
                    onChange={event => update({ items: (object.items ?? []).map((old, i) =>
                      i === index ? { ...old, text: event.target.value.slice(0, MAX_WIDGET_CELL_LENGTH) } : old) })}
                    className={fieldClass + (item.checked ? " line-through opacity-65" : "")}
                    style={inputStyle}
                  />
                </div>
              ))}
              {editable && (
                <div className="flex flex-wrap gap-1">
                  <button type="button" disabled={(object.items?.length ?? 0) >= MAX_WIDGET_ITEMS}
                    onClick={() => update({ items: [...(object.items ?? []), { text: "", checked: false }] })}
                    className="rounded border border-current/20 bg-white/65 px-2 py-1 font-semibold disabled:opacity-40"
                    style={{ fontSize: font }}
                    aria-label={lang === "ar" ? "إضافة بند للقائمة" : "Add checklist item"}>+</button>
                  <button type="button" disabled={!object.items?.length}
                    onClick={() => update({ items: (object.items ?? []).slice(0, -1) })}
                    className="rounded border border-current/20 bg-white/65 px-2 py-1 font-semibold disabled:opacity-40"
                    style={{ fontSize: font }}
                    aria-label={lang === "ar" ? "حذف آخر بند بالقائمة" : "Remove last checklist item"}>−</button>
                </div>
              )}
            </div>
          )}
          {object.kind === "table" && (
            <div className="min-h-0 flex-1 overflow-auto">
              <div className="grid gap-0.5" style={{
                gridTemplateColumns: "repeat(" + (object.cells?.[0]?.length || 2) + ", minmax(0,1fr)",
              }}>
                {(object.cells ?? []).flatMap((row, rowIndex) => row.map((cell, colIndex) => (
                  <input key={rowIndex + "-" + colIndex}
                    type="text"
                    aria-label={(lang === "ar" ? "صف " : "Row ") + (rowIndex + 1) +
                      (lang === "ar" ? " عمود " : " column ") + (colIndex + 1)}
                    value={cell}
                    readOnly={!editable}
                    tabIndex={editable ? 0 : -1}
                    maxLength={MAX_WIDGET_CELL_LENGTH}
                    onChange={event => update({ cells: (object.cells ?? []).map((oldRow, i) =>
                      i === rowIndex ? oldRow.map((old, j) =>
                        j === colIndex ? event.target.value.slice(0, MAX_WIDGET_CELL_LENGTH) : old) : oldRow) })}
                    className={fieldClass + (rowIndex === 0 ? " font-bold" : "")}
                    style={{ ...inputStyle, fontSize: Math.max(10, Math.round(18 * scale)) }}
                  />
                )))}
              </div>
              {editable && (
                <div className="mt-1 flex flex-wrap gap-1">
                  <button type="button" disabled={(object.cells?.length ?? 0) >= MAX_WIDGET_ROWS}
                    onClick={() => update({ cells: [...(object.cells ?? []),
                      Array.from({ length: object.cells?.[0]?.length || 2 }, () => "")] })}
                    className="rounded border border-current/20 bg-white/65 px-1.5 py-1 text-[10px] disabled:opacity-40"
                    aria-label={lang === "ar" ? "إضافة صف بالجدول" : "Add table row"}>+ row</button>
                  <button type="button" disabled={(object.cells?.[0]?.length ?? 0) >= 3}
                    onClick={() => update({ cells: (object.cells ?? []).map(row => [...row, ""]) })}
                    className="rounded border border-current/20 bg-white/65 px-1.5 py-1 text-[10px] disabled:opacity-40"
                    aria-label={lang === "ar" ? "إضافة عمود بالجدول" : "Add table column"}>+ col</button>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </section>
  );
}
