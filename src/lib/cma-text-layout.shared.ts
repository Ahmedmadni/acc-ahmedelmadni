export type CmaTextBlock = { kind: "text"; text: string } | { kind: "table"; rows: string[][] };

/** Only format explicit, rectangular pipe-delimited rows. Never reconstruct source tables. */
export function splitCmaText(text: string, allowTables: boolean): CmaTextBlock[] {
  if (!allowTables) return [{ kind: "text", text }];
  const lines = text.split("\n");
  const blocks: CmaTextBlock[] = [];
  let prose: string[] = [];
  function flush() {
    if (prose.length) blocks.push({ kind: "text", text: prose.join("\n") });
    prose = [];
  }
  function cells(line: string): string[] | null {
    // Inline semicolons, parentheses containing pipes and broken cells can
    // represent flattened source columns rather than an explicit table.
    if (!line.includes(" | ") || /[;؛]/.test(line) || /\([^)]*\|[^)]*\)/.test(line)) return null;
    const values = line.split(" | ").map(value => value.trim());
    if (values.length < 2 || values.length > 8 || values.some(value => !value || value.includes("|") || value.length > 100)) return null;
    return values;
  }
  for (let i = 0; i < lines.length;) {
    const row = cells(lines[i]);
    if (!row) { prose.push(lines[i++]); continue; }
    let end = i + 1;
    const rows = [row];
    while (end < lines.length) {
      const next = cells(lines[end]);
      if (!next) break;
      rows.push(next);
      end++;
    }
    const numeric = (value: string) => /^[\s$€£¥+−-]*[0-9٠-٩۰-۹][0-9٠-٩۰-۹,.٬٫%٪\s]*$/.test(value);
    const rectangular = rows.length >= 2 && rows.every(r => r.length === row.length);
    const numericColumn = row.some((_, col) => rows.slice(1).every(r => numeric(r[col] ?? "")));
    if (rectangular && numericColumn) {
      flush();
      blocks.push({ kind: "table", rows });
    } else {
      prose.push(...lines.slice(i, end));
    }
    i = end;
  }
  flush();
  return blocks;
}
