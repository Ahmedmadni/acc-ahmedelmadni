import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import {
  listAccountingTemplatesFn,
  createAccountingTemplateFn,
  updateAccountingTemplateFn,
  deleteAccountingTemplateFn,
  uploadTemplateFileFn,
  type AccountingTemplateRow,
} from "@/lib/templates/manage.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Pencil, Trash2, Plus, FileSpreadsheet, FileIcon } from "lucide-react";

export const Route = createFileRoute("/_authenticated/admin/templates")({
  head: () => ({
    meta: [
      { title: "إدارة النماذج الجاهزة | المشرف" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminTemplatesPage,
});

const CATEGORIES = ["tax", "declarations", "financial", "vouchers", "tools"] as const;
const CATEGORY_LABEL: Record<(typeof CATEGORIES)[number], string> = {
  tax: "الضرائب والزكاة",
  declarations: "الإقرارات والتعهدات",
  financial: "القوائم المالية",
  vouchers: "السندات والمستندات",
  tools: "الأدوات المحاسبية",
};
const FORMATS = ["Excel", "Word"] as const;

const EMPTY_TEMPLATE: Partial<AccountingTemplateRow> = {
  title_ar: "",
  title_en: "",
  description_ar: "",
  description_en: "",
  how_to_use_ar: "",
  how_to_use_en: "",
  category: "tools",
  format: "Excel",
  pages: 1,
  is_new: false,
  is_official: false,
  related_standard: "",
  file_url: "",
  preview_fields: [],
  sort_order: 0,
  is_published: true,
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs text-white/70">{label}</Label>
      {children}
    </div>
  );
}

function TextListField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string[];
  onChange: (next: string[]) => void;
}) {
  return (
    <Field label={label}>
      <Textarea
        rows={3}
        value={value.join("\n")}
        onChange={(e) =>
          onChange(
            e.target.value
              .split("\n")
              .map((s) => s.trim())
              .filter(Boolean),
          )
        }
        placeholder="سطر لكل عنصر"
        className="bg-[#04101f] border-[#d7aa52]/20"
      />
    </Field>
  );
}

function FileUploadField({
  value,
  onChange,
}: {
  value: string | null | undefined;
  onChange: (url: string) => void;
}) {
  const uploadFn = useServerFn(uploadTemplateFileFn);
  const [busy, setBusy] = useState(false);

  const onFile = async (file: File) => {
    const ext = file.name.split(".").pop()?.toLowerCase();
    if (!ext || !["doc", "docx", "xls", "xlsx", "pdf"].includes(ext)) {
      toast.error("يُسمح فقط بملفات Word أو Excel أو PDF");
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      toast.error("الحد الأقصى 20 ميجابايت");
      return;
    }
    setBusy(true);
    try {
      const buf = await file.arrayBuffer();
      let bin = "";
      const bytes = new Uint8Array(buf);
      for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
      const base64 = btoa(bin);
      const res = await uploadFn({ data: { filename: file.name, base64 } });
      onChange(res.url);
      toast.success("تم رفع الملف");
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <Field label="ملف النموذج (Word / Excel / PDF)">
      <div className="space-y-2">
        {value && (
          <div className="flex items-center gap-2 text-[11px] text-emerald-300">
            <FileIcon className="size-3.5" />
            <span className="truncate">{value}</span>
          </div>
        )}
        <input
          type="file"
          accept=".doc,.docx,.xls,.xlsx,.pdf"
          disabled={busy}
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) onFile(f);
          }}
          className="block w-full text-xs text-white/80 file:mr-2 file:rounded-full file:border-0 file:bg-gradient-to-br file:from-[#f3d28a] file:to-[#b8862e] file:px-3 file:py-1.5 file:text-xs file:font-bold file:text-[#04101f]"
        />
        {busy && <p className="text-xs text-white/60">جارٍ الرفع...</p>}
        <p className="text-[11px] text-white/40">
          إن لم يُرفع ملف، سيظهر للزوار زر "اطلب النموذج عبر واتساب" بدلاً من التحميل المباشر.
        </p>
      </div>
    </Field>
  );
}

function AdminTemplatesPage() {
  const qc = useQueryClient();
  const listFn = useServerFn(listAccountingTemplatesFn);
  const createFn = useServerFn(createAccountingTemplateFn);
  const updateFn = useServerFn(updateAccountingTemplateFn);
  const deleteFn = useServerFn(deleteAccountingTemplateFn);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["admin-templates"],
    queryFn: () => listFn(),
  });
  const items = data?.items ?? [];

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Partial<AccountingTemplateRow> | null>(null);

  const openCreate = () => {
    setEditing({ ...EMPTY_TEMPLATE, sort_order: items.length });
    setDialogOpen(true);
  };
  const openEdit = (item: AccountingTemplateRow) => {
    setEditing(item);
    setDialogOpen(true);
  };

  const saveMut = useMutation({
    mutationFn: async (form: Partial<AccountingTemplateRow>) => {
      const payload = {
        title_ar: form.title_ar ?? "",
        title_en: form.title_en ?? "",
        description_ar: form.description_ar ?? "",
        description_en: form.description_en ?? "",
        how_to_use_ar: form.how_to_use_ar || null,
        how_to_use_en: form.how_to_use_en || null,
        category: form.category ?? "tools",
        format: form.format ?? "Excel",
        pages: form.pages ?? 1,
        is_new: form.is_new ?? false,
        is_official: form.is_official ?? false,
        related_standard: form.related_standard || null,
        file_url: form.file_url || null,
        preview_fields: form.preview_fields ?? [],
        sort_order: form.sort_order ?? 0,
        is_published: form.is_published ?? true,
      };
      if (form.id) return updateFn({ data: { id: form.id, patch: payload } });
      return createFn({ data: payload });
    },
    onSuccess: () => {
      toast.success("تم الحفظ");
      qc.invalidateQueries({ queryKey: ["admin-templates"] });
      setDialogOpen(false);
    },
    onError: (e) => toast.error((e as Error).message),
  });

  const delMut = useMutation({
    mutationFn: (id: string) => deleteFn({ data: { id } }),
    onSuccess: () => {
      toast.success("تم الحذف");
      qc.invalidateQueries({ queryKey: ["admin-templates"] });
    },
    onError: (e) => toast.error((e as Error).message),
  });

  const togMut = useMutation({
    mutationFn: (v: { id: string; is_published: boolean }) =>
      updateFn({ data: { id: v.id, patch: { is_published: v.is_published } } }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin-templates"] }),
    onError: (e) => toast.error((e as Error).message),
  });

  return (
    <div dir="rtl" className="min-h-screen bg-[#04101f] text-white">
      <div className="w-full border-b border-[#d7aa52]/20 px-4 py-4 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <FileSpreadsheet className="size-5 text-[#f3d28a]" />
            <h1 className="text-base font-extrabold text-[#f3d28a]">
              إدارة النماذج المحاسبية الجاهزة
            </h1>
          </div>
          <Link
            to="/library/templates"
            className="rounded-full border border-[#d7aa52]/40 px-3 py-1.5 text-xs font-bold text-[#f3d28a] hover:bg-[#d7aa52]/15"
          >
            عرض الصفحة
          </Link>
        </div>
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-16 py-8">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-sm text-white/60">
            عدد النماذج: <span className="font-bold text-white">{items.length}</span>
          </div>
          <Button
            onClick={openCreate}
            className="bg-gradient-to-br from-[#f3d28a] to-[#b8862e] text-[#04101f] hover:opacity-90"
          >
            <Plus className="size-4" />
            إضافة نموذج
          </Button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#d7aa52]/20 bg-[#07182c]">
          <table className="w-full text-sm">
            <thead className="bg-white/[0.04] text-right text-white/60">
              <tr>
                <th className="p-3">العنوان</th>
                <th className="p-3">التصنيف</th>
                <th className="p-3">الصيغة</th>
                <th className="p-3">ملف</th>
                <th className="p-3">منشور</th>
                <th className="p-3">إجراءات</th>
              </tr>
            </thead>
            <tbody>
              {isLoading && (
                <tr>
                  <td colSpan={6} className="p-6 text-center text-white/40">
                    جارٍ التحميل...
                  </td>
                </tr>
              )}
              {isError && (
                <tr>
                  <td colSpan={6} className="p-6 text-center text-red-300">
                    تعذّر تحميل النماذج. حاول تحديث الصفحة.
                  </td>
                </tr>
              )}
              {!isLoading && !isError && items.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-6 text-center text-white/40">
                    لا توجد نماذج بعد. اضغط "إضافة" لبدء الإضافة.
                  </td>
                </tr>
              )}
              {items.map((it) => (
                <tr key={it.id} className="border-t border-white/5">
                  <td className="p-3">
                    <div className="font-bold text-white">{it.title_ar}</div>
                    {it.title_en && <div className="text-xs text-white/40">{it.title_en}</div>}
                  </td>
                  <td className="p-3 text-xs">{CATEGORY_LABEL[it.category]}</td>
                  <td className="p-3 text-xs text-white/60">{it.format}</td>
                  <td className="p-3 text-xs">
                    {it.file_url ? (
                      <span className="text-emerald-300">مرفوع</span>
                    ) : (
                      <span className="text-white/40">واتساب</span>
                    )}
                  </td>
                  <td className="p-3">
                    <Switch
                      checked={it.is_published}
                      onCheckedChange={(v) => togMut.mutate({ id: it.id, is_published: v })}
                    />
                  </td>
                  <td className="p-3">
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label={`تعديل ${it.title_ar}`}
                        onClick={() => openEdit(it)}
                      >
                        <Pencil className="size-4 text-[#f3d28a]" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label={`حذف ${it.title_ar}`}
                        onClick={() => {
                          if (confirm(`حذف "${it.title_ar}"؟`)) delMut.mutate(it.id);
                        }}
                      >
                        <Trash2 className="size-4 text-red-400" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent
          className="max-h-[90vh] overflow-y-auto bg-[#07182c] text-white sm:max-w-2xl"
          dir="rtl"
        >
          <DialogHeader>
            <DialogTitle className="text-[#f3d28a]">
              {editing?.id ? "تعديل نموذج" : "إضافة نموذج"}
            </DialogTitle>
          </DialogHeader>
          {editing && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <Field label="العنوان (عربي) *">
                  <Input
                    value={editing.title_ar ?? ""}
                    onChange={(e) => setEditing({ ...editing, title_ar: e.target.value })}
                    className="bg-[#04101f] border-[#d7aa52]/20"
                  />
                </Field>
                <Field label="العنوان (إنجليزي) *">
                  <Input
                    value={editing.title_en ?? ""}
                    onChange={(e) => setEditing({ ...editing, title_en: e.target.value })}
                    className="bg-[#04101f] border-[#d7aa52]/20"
                  />
                </Field>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Field label="الوصف (عربي) *">
                  <Textarea
                    rows={2}
                    value={editing.description_ar ?? ""}
                    onChange={(e) => setEditing({ ...editing, description_ar: e.target.value })}
                    className="bg-[#04101f] border-[#d7aa52]/20"
                  />
                </Field>
                <Field label="الوصف (إنجليزي) *">
                  <Textarea
                    rows={2}
                    value={editing.description_en ?? ""}
                    onChange={(e) => setEditing({ ...editing, description_en: e.target.value })}
                    className="bg-[#04101f] border-[#d7aa52]/20"
                  />
                </Field>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Field label="طريقة الاستخدام (عربي) — سطر لكل خطوة">
                  <Textarea
                    rows={4}
                    value={editing.how_to_use_ar ?? ""}
                    onChange={(e) => setEditing({ ...editing, how_to_use_ar: e.target.value })}
                    className="bg-[#04101f] border-[#d7aa52]/20"
                  />
                </Field>
                <Field label="طريقة الاستخدام (إنجليزي)">
                  <Textarea
                    rows={4}
                    value={editing.how_to_use_en ?? ""}
                    onChange={(e) => setEditing({ ...editing, how_to_use_en: e.target.value })}
                    className="bg-[#04101f] border-[#d7aa52]/20"
                  />
                </Field>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Field label="التصنيف">
                  <Select
                    value={editing.category ?? "tools"}
                    onValueChange={(v) =>
                      setEditing({ ...editing, category: v as AccountingTemplateRow["category"] })
                    }
                  >
                    <SelectTrigger className="bg-[#04101f] border-[#d7aa52]/20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {CATEGORIES.map((c) => (
                        <SelectItem key={c} value={c}>
                          {CATEGORY_LABEL[c]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
                <Field label="الصيغة">
                  <Select
                    value={editing.format ?? "Excel"}
                    onValueChange={(v) =>
                      setEditing({ ...editing, format: v as AccountingTemplateRow["format"] })
                    }
                  >
                    <SelectTrigger className="bg-[#04101f] border-[#d7aa52]/20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {FORMATS.map((f) => (
                        <SelectItem key={f} value={f}>
                          {f}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Field label="عدد الصفحات/الأوراق">
                  <Input
                    type="number"
                    min={1}
                    value={editing.pages ?? 1}
                    onChange={(e) => setEditing({ ...editing, pages: Number(e.target.value) })}
                    className="bg-[#04101f] border-[#d7aa52]/20"
                  />
                </Field>
                <Field label="المعيار المرتبط (اختياري، مثال: ZATCA VAT)">
                  <Input
                    value={editing.related_standard ?? ""}
                    onChange={(e) => setEditing({ ...editing, related_standard: e.target.value })}
                    className="bg-[#04101f] border-[#d7aa52]/20"
                  />
                </Field>
              </div>

              <TextListField
                label="الحقول الأساسية المعروضة كبطاقات (سطر لكل حقل)"
                value={editing.preview_fields ?? []}
                onChange={(v) => setEditing({ ...editing, preview_fields: v })}
              />

              <FileUploadField
                value={editing.file_url}
                onChange={(url) => setEditing({ ...editing, file_url: url })}
              />

              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <Switch
                    checked={editing.is_new ?? false}
                    onCheckedChange={(v) => setEditing({ ...editing, is_new: v })}
                  />
                  <Label className="text-xs text-white/70">وسم "جديد"</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Switch
                    checked={editing.is_official ?? false}
                    onCheckedChange={(v) => setEditing({ ...editing, is_official: v })}
                  />
                  <Label className="text-xs text-white/70">وسم "متوافق ZATCA"</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Switch
                    checked={editing.is_published ?? true}
                    onCheckedChange={(v) => setEditing({ ...editing, is_published: v })}
                  />
                  <Label className="text-xs text-white/70">منشور على الموقع</Label>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button
              onClick={() => editing && saveMut.mutate(editing)}
              disabled={
                saveMut.isPending ||
                !editing?.title_ar ||
                !editing?.title_en ||
                !editing?.description_ar ||
                !editing?.description_en
              }
              className="bg-gradient-to-br from-[#f3d28a] to-[#b8862e] text-[#04101f]"
            >
              {saveMut.isPending ? "جارٍ الحفظ..." : "حفظ"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
