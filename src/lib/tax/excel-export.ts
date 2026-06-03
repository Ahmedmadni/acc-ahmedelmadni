import * as XLSX from "xlsx";

export interface ExcelRow {
  labelAr: string;
  labelEn: string;
  value: number;
}

export function exportDeclarationExcel(opts: {
  fileName: string;
  titleAr: string;
  titleEn: string;
  periodLabel: string;
  inputs: ExcelRow[];
  results: ExcelRow[];
}) {
  const aoa: (string | number)[][] = [];
  aoa.push([opts.titleEn, opts.titleAr]);
  aoa.push(["Period / الفترة", opts.periodLabel]);
  aoa.push([]);
  aoa.push(["INPUTS / المدخلات"]);
  aoa.push(["Label (EN)", "Label (AR)", "Value"]);
  for (const r of opts.inputs) aoa.push([r.labelEn, r.labelAr, r.value]);
  aoa.push([]);
  aoa.push(["RESULTS / النتائج"]);
  aoa.push(["Label (EN)", "Label (AR)", "Value"]);
  for (const r of opts.results) aoa.push([r.labelEn, r.labelAr, r.value]);

  const ws = XLSX.utils.aoa_to_sheet(aoa);
  ws["!cols"] = [{ wch: 32 }, { wch: 32 }, { wch: 18 }];
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Declaration");
  XLSX.writeFile(wb, `${opts.fileName}.xlsx`);
}
