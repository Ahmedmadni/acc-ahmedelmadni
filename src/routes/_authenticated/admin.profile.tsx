import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import {
  listCertificationsFn,
  createCertificationFn,
  updateCertificationFn,
  deleteCertificationFn,
  type CertificationRow,
  listExperienceItemsFn,
  createExperienceItemFn,
  updateExperienceItemFn,
  deleteExperienceItemFn,
  type ExperienceRow,
  listSkillGroupsFn,
  createSkillGroupFn,
  updateSkillGroupFn,
  deleteSkillGroupFn,
  type SkillGroupRow,
  listSkillItemsFn,
  createSkillItemFn,
  updateSkillItemFn,
  deleteSkillItemFn,
  type SkillItemRow,
  uploadProfileImageFn,
} from "@/lib/profile/manage.functions";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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
import { Pencil, Trash2, Plus, UserCircle2, ImageIcon } from "lucide-react";

export const Route = createFileRoute("/_authenticated/admin/profile")({
  head: () => ({
    meta: [
      { title: "إدارة الملف الشخصي | المشرف" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminProfilePage,
});

function AdminProfilePage() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#04101f] text-white">
      <div className="w-full border-b border-[#d7aa52]/20 px-4 py-4 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <UserCircle2 className="size-5 text-[#f3d28a]" />
            <h1 className="text-base font-extrabold text-[#f3d28a]">
              إدارة الشهادات والخبرات والمهارات
            </h1>
          </div>
          <Link
            to="/about"
            className="rounded-full border border-[#d7aa52]/40 px-3 py-1.5 text-xs font-bold text-[#f3d28a] hover:bg-[#d7aa52]/15"
          >
            عرض الصفحة
          </Link>
        </div>
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-16 py-8">
        <Tabs defaultValue="certifications" className="w-full">
          <TabsList className="bg-[#07182c] border border-[#d7aa52]/20">
            <TabsTrigger value="certifications">الشهادات والدورات</TabsTrigger>
            <TabsTrigger value="experience">الخبرات العملية</TabsTrigger>
            <TabsTrigger value="skills">المهارات</TabsTrigger>
          </TabsList>

          <TabsContent value="certifications" className="mt-6">
            <CertificationsPanel />
          </TabsContent>
          <TabsContent value="experience" className="mt-6">
            <ExperiencePanel />
          </TabsContent>
          <TabsContent value="skills" className="mt-6">
            <SkillsPanel />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs text-white/70">{label}</Label>
      {children}
    </div>
  );
}

/** Textarea where each non-empty line becomes one array entry — the
 * no-code-friendly way to edit a string[] field (bullet points, KPIs, tools). */
function TextListField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string[];
  onChange: (next: string[]) => void;
  placeholder?: string;
}) {
  return (
    <Field label={label}>
      <Textarea
        rows={4}
        value={value.join("\n")}
        onChange={(e) =>
          onChange(
            e.target.value
              .split("\n")
              .map((s) => s.trim())
              .filter(Boolean),
          )
        }
        placeholder={placeholder ?? "سطر لكل عنصر"}
        className="bg-[#04101f] border-[#d7aa52]/20"
      />
    </Field>
  );
}

function ImageUploadField({
  label,
  kind,
  value,
  onChange,
}: {
  label: string;
  kind: "certification" | "experience";
  value: string | null | undefined;
  onChange: (url: string) => void;
}) {
  const uploadFn = useServerFn(uploadProfileImageFn);
  const [busy, setBusy] = useState(false);

  const onFile = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      toast.error("يجب أن يكون الملف صورة");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error("الحد الأقصى 5 ميجابايت");
      return;
    }
    setBusy(true);
    try {
      const buf = await file.arrayBuffer();
      let bin = "";
      const bytes = new Uint8Array(buf);
      for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
      const base64 = btoa(bin);
      const res = await uploadFn({ data: { kind, filename: file.name, base64 } });
      onChange(res.url);
      toast.success("تم رفع الصورة");
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <Field label={label}>
      <div className="flex items-center gap-3">
        <div className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#d7aa52]/25 bg-white/5">
          {value ? (
            <img src={value} alt="" className="size-full object-cover" />
          ) : (
            <ImageIcon className="size-5 text-white/30" />
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          disabled={busy}
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) onFile(f);
          }}
          className="block flex-1 text-xs text-white/80 file:mr-2 file:rounded-full file:border-0 file:bg-gradient-to-br file:from-[#f3d28a] file:to-[#b8862e] file:px-3 file:py-1.5 file:text-xs file:font-bold file:text-[#04101f]"
        />
      </div>
      {busy && <p className="text-xs text-white/60">جارٍ الرفع...</p>}
    </Field>
  );
}

// ============= Certifications =============
const EMPTY_CERT: Partial<CertificationRow> = {
  title_ar: "",
  title_en: "",
  issuer_ar: "",
  issuer_en: "",
  issue_date: "",
  image_url: "",
  credential_url: "",
  sort_order: 0,
  is_published: true,
};

function CertificationsPanel() {
  const qc = useQueryClient();
  const listFn = useServerFn(listCertificationsFn);
  const createFn = useServerFn(createCertificationFn);
  const updateFn = useServerFn(updateCertificationFn);
  const deleteFn = useServerFn(deleteCertificationFn);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["admin-certifications"],
    queryFn: () => listFn(),
  });
  const items = data?.items ?? [];

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Partial<CertificationRow> | null>(null);

  const openCreate = () => {
    setEditing({ ...EMPTY_CERT, sort_order: items.length });
    setDialogOpen(true);
  };
  const openEdit = (item: CertificationRow) => {
    setEditing(item);
    setDialogOpen(true);
  };

  const saveMut = useMutation({
    mutationFn: async (form: Partial<CertificationRow>) => {
      const payload = {
        title_ar: form.title_ar ?? "",
        title_en: form.title_en ?? "",
        issuer_ar: form.issuer_ar || null,
        issuer_en: form.issuer_en || null,
        issue_date: form.issue_date || null,
        image_url: form.image_url || null,
        credential_url: form.credential_url || null,
        sort_order: form.sort_order ?? 0,
        is_published: form.is_published ?? true,
      };
      if (form.id) return updateFn({ data: { id: form.id, patch: payload } });
      return createFn({ data: payload });
    },
    onSuccess: () => {
      toast.success("تم الحفظ");
      qc.invalidateQueries({ queryKey: ["admin-certifications"] });
      setDialogOpen(false);
    },
    onError: (e) => toast.error((e as Error).message),
  });

  const delMut = useMutation({
    mutationFn: (id: string) => deleteFn({ data: { id } }),
    onSuccess: () => {
      toast.success("تم الحذف");
      qc.invalidateQueries({ queryKey: ["admin-certifications"] });
    },
    onError: (e) => toast.error((e as Error).message),
  });

  const togMut = useMutation({
    mutationFn: (v: { id: string; is_published: boolean }) =>
      updateFn({ data: { id: v.id, patch: { is_published: v.is_published } } }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin-certifications"] }),
    onError: (e) => toast.error((e as Error).message),
  });

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div className="text-sm text-white/60">
          عدد الشهادات: <span className="font-bold text-white">{items.length}</span>
        </div>
        <Button
          onClick={openCreate}
          className="bg-gradient-to-br from-[#f3d28a] to-[#b8862e] text-[#04101f] hover:opacity-90"
        >
          <Plus className="size-4" />
          إضافة شهادة
        </Button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[#d7aa52]/20 bg-[#07182c]">
        <table className="w-full text-sm">
          <thead className="bg-white/[0.04] text-right text-white/60">
            <tr>
              <th className="p-3">الصورة</th>
              <th className="p-3">العنوان</th>
              <th className="p-3">الجهة المانحة</th>
              <th className="p-3">التاريخ</th>
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
                  تعذّر تحميل الشهادات. حاول تحديث الصفحة.
                </td>
              </tr>
            )}
            {!isLoading && !isError && items.length === 0 && (
              <tr>
                <td colSpan={6} className="p-6 text-center text-white/40">
                  لا توجد شهادات بعد. اضغط "إضافة" لبدء الإضافة.
                </td>
              </tr>
            )}
            {items.map((it) => (
              <tr key={it.id} className="border-t border-white/5">
                <td className="p-3">
                  <div className="flex size-10 items-center justify-center overflow-hidden rounded-lg border border-[#d7aa52]/20 bg-white/5">
                    {it.image_url ? (
                      <img src={it.image_url} alt="" className="size-full object-cover" />
                    ) : (
                      <ImageIcon className="size-4 text-white/25" />
                    )}
                  </div>
                </td>
                <td className="p-3">
                  <div className="font-bold text-white">{it.title_ar}</div>
                  {it.title_en && <div className="text-xs text-white/40">{it.title_en}</div>}
                </td>
                <td className="p-3 text-xs text-white/60">{it.issuer_ar ?? "—"}</td>
                <td className="p-3 text-xs text-white/60">{it.issue_date ?? "—"}</td>
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

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent
          className="max-h-[90vh] overflow-y-auto bg-[#07182c] text-white sm:max-w-2xl"
          dir="rtl"
        >
          <DialogHeader>
            <DialogTitle className="text-[#f3d28a]">
              {editing?.id ? "تعديل شهادة" : "إضافة شهادة"}
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
                <Field label="الجهة المانحة (عربي)">
                  <Input
                    value={editing.issuer_ar ?? ""}
                    onChange={(e) => setEditing({ ...editing, issuer_ar: e.target.value })}
                    className="bg-[#04101f] border-[#d7aa52]/20"
                  />
                </Field>
                <Field label="الجهة المانحة (إنجليزي)">
                  <Input
                    value={editing.issuer_en ?? ""}
                    onChange={(e) => setEditing({ ...editing, issuer_en: e.target.value })}
                    className="bg-[#04101f] border-[#d7aa52]/20"
                  />
                </Field>
                <Field label="التاريخ (نص حر، مثال: 2024)">
                  <Input
                    value={editing.issue_date ?? ""}
                    onChange={(e) => setEditing({ ...editing, issue_date: e.target.value })}
                    className="bg-[#04101f] border-[#d7aa52]/20"
                  />
                </Field>
                <Field label="رابط التحقق من الشهادة (اختياري)">
                  <Input
                    value={editing.credential_url ?? ""}
                    onChange={(e) => setEditing({ ...editing, credential_url: e.target.value })}
                    className="bg-[#04101f] border-[#d7aa52]/20"
                    placeholder="https://"
                  />
                </Field>
              </div>

              <ImageUploadField
                label="صورة الشهادة"
                kind="certification"
                value={editing.image_url}
                onChange={(url) => setEditing({ ...editing, image_url: url })}
              />

              <div className="flex items-center gap-2">
                <Switch
                  checked={editing.is_published ?? true}
                  onCheckedChange={(v) => setEditing({ ...editing, is_published: v })}
                />
                <Label className="text-xs text-white/70">منشورة على الموقع</Label>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button
              onClick={() => editing && saveMut.mutate(editing)}
              disabled={saveMut.isPending || !editing?.title_ar || !editing?.title_en}
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

// ============= Experience =============
const EMPTY_EXP: Partial<ExperienceRow> = {
  role_ar: "",
  role_en: "",
  company_ar: "",
  company_en: "",
  company_logo_url: "",
  date_ar: "",
  date_en: "",
  points_ar: [],
  points_en: [],
  sort_order: 0,
  is_published: true,
};

function ExperiencePanel() {
  const qc = useQueryClient();
  const listFn = useServerFn(listExperienceItemsFn);
  const createFn = useServerFn(createExperienceItemFn);
  const updateFn = useServerFn(updateExperienceItemFn);
  const deleteFn = useServerFn(deleteExperienceItemFn);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["admin-experience"],
    queryFn: () => listFn(),
  });
  const items = data?.items ?? [];

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Partial<ExperienceRow> | null>(null);

  const openCreate = () => {
    setEditing({ ...EMPTY_EXP, sort_order: items.length });
    setDialogOpen(true);
  };
  const openEdit = (item: ExperienceRow) => {
    setEditing(item);
    setDialogOpen(true);
  };

  const saveMut = useMutation({
    mutationFn: async (form: Partial<ExperienceRow>) => {
      const payload = {
        role_ar: form.role_ar ?? "",
        role_en: form.role_en ?? "",
        company_ar: form.company_ar ?? "",
        company_en: form.company_en ?? "",
        company_logo_url: form.company_logo_url || null,
        date_ar: form.date_ar ?? "",
        date_en: form.date_en ?? "",
        points_ar: form.points_ar ?? [],
        points_en: form.points_en ?? [],
        sort_order: form.sort_order ?? 0,
        is_published: form.is_published ?? true,
      };
      if (form.id) return updateFn({ data: { id: form.id, patch: payload } });
      return createFn({ data: payload });
    },
    onSuccess: () => {
      toast.success("تم الحفظ");
      qc.invalidateQueries({ queryKey: ["admin-experience"] });
      setDialogOpen(false);
    },
    onError: (e) => toast.error((e as Error).message),
  });

  const delMut = useMutation({
    mutationFn: (id: string) => deleteFn({ data: { id } }),
    onSuccess: () => {
      toast.success("تم الحذف");
      qc.invalidateQueries({ queryKey: ["admin-experience"] });
    },
    onError: (e) => toast.error((e as Error).message),
  });

  const togMut = useMutation({
    mutationFn: (v: { id: string; is_published: boolean }) =>
      updateFn({ data: { id: v.id, patch: { is_published: v.is_published } } }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin-experience"] }),
    onError: (e) => toast.error((e as Error).message),
  });

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div className="text-sm text-white/60">
          عدد الخبرات: <span className="font-bold text-white">{items.length}</span>
        </div>
        <Button
          onClick={openCreate}
          className="bg-gradient-to-br from-[#f3d28a] to-[#b8862e] text-[#04101f] hover:opacity-90"
        >
          <Plus className="size-4" />
          إضافة خبرة
        </Button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[#d7aa52]/20 bg-[#07182c]">
        <table className="w-full text-sm">
          <thead className="bg-white/[0.04] text-right text-white/60">
            <tr>
              <th className="p-3">الوظيفة</th>
              <th className="p-3">الجهة</th>
              <th className="p-3">التاريخ</th>
              <th className="p-3">منشورة</th>
              <th className="p-3">إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && (
              <tr>
                <td colSpan={5} className="p-6 text-center text-white/40">
                  جارٍ التحميل...
                </td>
              </tr>
            )}
            {isError && (
              <tr>
                <td colSpan={5} className="p-6 text-center text-red-300">
                  تعذّر تحميل الخبرات. حاول تحديث الصفحة.
                </td>
              </tr>
            )}
            {!isLoading && !isError && items.length === 0 && (
              <tr>
                <td colSpan={5} className="p-6 text-center text-white/40">
                  لا توجد خبرات بعد. اضغط "إضافة" لبدء الإضافة.
                </td>
              </tr>
            )}
            {items.map((it) => (
              <tr key={it.id} className="border-t border-white/5">
                <td className="p-3">
                  <div className="font-bold text-white">{it.role_ar}</div>
                  {it.role_en && <div className="text-xs text-white/40">{it.role_en}</div>}
                </td>
                <td className="p-3 text-xs text-white/60">{it.company_ar}</td>
                <td className="p-3 text-xs text-white/60">{it.date_ar}</td>
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
                      aria-label={`تعديل ${it.role_ar}`}
                      onClick={() => openEdit(it)}
                    >
                      <Pencil className="size-4 text-[#f3d28a]" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label={`حذف ${it.role_ar}`}
                      onClick={() => {
                        if (confirm(`حذف "${it.role_ar}"؟`)) delMut.mutate(it.id);
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

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent
          className="max-h-[90vh] overflow-y-auto bg-[#07182c] text-white sm:max-w-2xl"
          dir="rtl"
        >
          <DialogHeader>
            <DialogTitle className="text-[#f3d28a]">
              {editing?.id ? "تعديل خبرة" : "إضافة خبرة"}
            </DialogTitle>
          </DialogHeader>
          {editing && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <Field label="المسمى الوظيفي (عربي) *">
                  <Input
                    value={editing.role_ar ?? ""}
                    onChange={(e) => setEditing({ ...editing, role_ar: e.target.value })}
                    className="bg-[#04101f] border-[#d7aa52]/20"
                  />
                </Field>
                <Field label="المسمى الوظيفي (إنجليزي) *">
                  <Input
                    value={editing.role_en ?? ""}
                    onChange={(e) => setEditing({ ...editing, role_en: e.target.value })}
                    className="bg-[#04101f] border-[#d7aa52]/20"
                  />
                </Field>
                <Field label="الشركة (عربي) *">
                  <Input
                    value={editing.company_ar ?? ""}
                    onChange={(e) => setEditing({ ...editing, company_ar: e.target.value })}
                    className="bg-[#04101f] border-[#d7aa52]/20"
                  />
                </Field>
                <Field label="الشركة (إنجليزي) *">
                  <Input
                    value={editing.company_en ?? ""}
                    onChange={(e) => setEditing({ ...editing, company_en: e.target.value })}
                    className="bg-[#04101f] border-[#d7aa52]/20"
                  />
                </Field>
                <Field label="الفترة (عربي، مثال: 2023 — 2024) *">
                  <Input
                    value={editing.date_ar ?? ""}
                    onChange={(e) => setEditing({ ...editing, date_ar: e.target.value })}
                    className="bg-[#04101f] border-[#d7aa52]/20"
                  />
                </Field>
                <Field label="الفترة (إنجليزي) *">
                  <Input
                    value={editing.date_en ?? ""}
                    onChange={(e) => setEditing({ ...editing, date_en: e.target.value })}
                    className="bg-[#04101f] border-[#d7aa52]/20"
                  />
                </Field>
              </div>

              <ImageUploadField
                label="شعار الشركة (اختياري)"
                kind="experience"
                value={editing.company_logo_url}
                onChange={(url) => setEditing({ ...editing, company_logo_url: url })}
              />

              <div className="grid grid-cols-2 gap-3">
                <TextListField
                  label="أبرز المهام (عربي) — سطر لكل نقطة"
                  value={editing.points_ar ?? []}
                  onChange={(v) => setEditing({ ...editing, points_ar: v })}
                />
                <TextListField
                  label="أبرز المهام (إنجليزي)"
                  value={editing.points_en ?? []}
                  onChange={(v) => setEditing({ ...editing, points_en: v })}
                />
              </div>

              <div className="flex items-center gap-2">
                <Switch
                  checked={editing.is_published ?? true}
                  onCheckedChange={(v) => setEditing({ ...editing, is_published: v })}
                />
                <Label className="text-xs text-white/70">منشورة على الموقع</Label>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button
              onClick={() => editing && saveMut.mutate(editing)}
              disabled={
                saveMut.isPending ||
                !editing?.role_ar ||
                !editing?.company_ar ||
                !editing?.date_ar ||
                !editing?.date_en
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

// ============= Skills =============
const EMPTY_GROUP: Partial<SkillGroupRow> = {
  heading_ar: "",
  heading_en: "",
  sort_order: 0,
  is_published: true,
};

const EMPTY_ITEM: Partial<SkillItemRow> = {
  group_id: "",
  name_ar: "",
  name_en: "",
  level: 80,
  desc_ar: "",
  desc_en: "",
  tools: [],
  kpis_ar: [],
  kpis_en: [],
  sort_order: 0,
};

function SkillsPanel() {
  const qc = useQueryClient();
  const listGroupsFn = useServerFn(listSkillGroupsFn);
  const createGroupFn = useServerFn(createSkillGroupFn);
  const updateGroupFn = useServerFn(updateSkillGroupFn);
  const deleteGroupFn = useServerFn(deleteSkillGroupFn);
  const listItemsFn = useServerFn(listSkillItemsFn);
  const createItemFn = useServerFn(createSkillItemFn);
  const updateItemFn = useServerFn(updateSkillItemFn);
  const deleteItemFn = useServerFn(deleteSkillItemFn);

  const groupsQ = useQuery({ queryKey: ["admin-skill-groups"], queryFn: () => listGroupsFn() });
  const itemsQ = useQuery({ queryKey: ["admin-skill-items"], queryFn: () => listItemsFn() });
  const groups = groupsQ.data?.groups ?? [];
  const items = itemsQ.data?.items ?? [];

  const [groupDialogOpen, setGroupDialogOpen] = useState(false);
  const [editingGroup, setEditingGroup] = useState<Partial<SkillGroupRow> | null>(null);
  const [itemDialogOpen, setItemDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Partial<SkillItemRow> | null>(null);

  const openCreateGroup = () => {
    setEditingGroup({ ...EMPTY_GROUP, sort_order: groups.length });
    setGroupDialogOpen(true);
  };
  const openEditGroup = (g: SkillGroupRow) => {
    setEditingGroup(g);
    setGroupDialogOpen(true);
  };
  const openCreateItem = (groupId: string) => {
    setEditingItem({
      ...EMPTY_ITEM,
      group_id: groupId,
      sort_order: items.filter((i) => i.group_id === groupId).length,
    });
    setItemDialogOpen(true);
  };
  const openEditItem = (it: SkillItemRow) => {
    setEditingItem(it);
    setItemDialogOpen(true);
  };

  const saveGroupMut = useMutation({
    mutationFn: async (form: Partial<SkillGroupRow>) => {
      const payload = {
        heading_ar: form.heading_ar ?? "",
        heading_en: form.heading_en ?? "",
        sort_order: form.sort_order ?? 0,
        is_published: form.is_published ?? true,
      };
      if (form.id) return updateGroupFn({ data: { id: form.id, patch: payload } });
      return createGroupFn({ data: payload });
    },
    onSuccess: () => {
      toast.success("تم الحفظ");
      qc.invalidateQueries({ queryKey: ["admin-skill-groups"] });
      setGroupDialogOpen(false);
    },
    onError: (e) => toast.error((e as Error).message),
  });

  const deleteGroupMut = useMutation({
    mutationFn: (id: string) => deleteGroupFn({ data: { id } }),
    onSuccess: () => {
      toast.success("تم الحذف");
      qc.invalidateQueries({ queryKey: ["admin-skill-groups"] });
      qc.invalidateQueries({ queryKey: ["admin-skill-items"] });
    },
    onError: (e) => toast.error((e as Error).message),
  });

  const togGroupMut = useMutation({
    mutationFn: (v: { id: string; is_published: boolean }) =>
      updateGroupFn({ data: { id: v.id, patch: { is_published: v.is_published } } }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin-skill-groups"] }),
    onError: (e) => toast.error((e as Error).message),
  });

  const saveItemMut = useMutation({
    mutationFn: async (form: Partial<SkillItemRow>) => {
      const payload = {
        group_id: form.group_id ?? "",
        name_ar: form.name_ar ?? "",
        name_en: form.name_en ?? "",
        level: form.level ?? 80,
        desc_ar: form.desc_ar || null,
        desc_en: form.desc_en || null,
        tools: form.tools ?? [],
        kpis_ar: form.kpis_ar ?? [],
        kpis_en: form.kpis_en ?? [],
        sort_order: form.sort_order ?? 0,
      };
      if (form.id) return updateItemFn({ data: { id: form.id, patch: payload } });
      return createItemFn({ data: payload });
    },
    onSuccess: () => {
      toast.success("تم الحفظ");
      qc.invalidateQueries({ queryKey: ["admin-skill-items"] });
      setItemDialogOpen(false);
    },
    onError: (e) => toast.error((e as Error).message),
  });

  const deleteItemMut = useMutation({
    mutationFn: (id: string) => deleteItemFn({ data: { id } }),
    onSuccess: () => {
      toast.success("تم الحذف");
      qc.invalidateQueries({ queryKey: ["admin-skill-items"] });
    },
    onError: (e) => toast.error((e as Error).message),
  });

  const isLoading = groupsQ.isLoading || itemsQ.isLoading;
  const isError = groupsQ.isError || itemsQ.isError;

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div className="text-sm text-white/60">
          عدد المجموعات: <span className="font-bold text-white">{groups.length}</span>
        </div>
        <Button
          onClick={openCreateGroup}
          className="bg-gradient-to-br from-[#f3d28a] to-[#b8862e] text-[#04101f] hover:opacity-90"
        >
          <Plus className="size-4" />
          إضافة مجموعة مهارات
        </Button>
      </div>

      {isLoading && <p className="p-6 text-center text-white/40">جارٍ التحميل...</p>}
      {isError && (
        <p className="p-6 text-center text-red-300">تعذّر تحميل المهارات. حاول تحديث الصفحة.</p>
      )}
      {!isLoading && !isError && groups.length === 0 && (
        <p className="p-6 text-center text-white/40">
          لا توجد مجموعات مهارات بعد. اضغط "إضافة" لبدء الإضافة.
        </p>
      )}

      <div className="space-y-5">
        {groups.map((g) => {
          const groupItems = items.filter((i) => i.group_id === g.id);
          return (
            <div key={g.id} className="rounded-2xl border border-[#d7aa52]/20 bg-[#07182c] p-4">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <div className="font-bold text-[#f3d28a]">{g.heading_ar}</div>
                  <div className="text-xs text-white/40">{g.heading_en}</div>
                </div>
                <div className="flex items-center gap-2">
                  <Switch
                    checked={g.is_published}
                    onCheckedChange={(v) => togGroupMut.mutate({ id: g.id, is_published: v })}
                  />
                  <Button variant="ghost" size="icon" onClick={() => openEditGroup(g)}>
                    <Pencil className="size-4 text-[#f3d28a]" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      if (confirm(`حذف مجموعة "${g.heading_ar}" وكل مهاراتها؟`))
                        deleteGroupMut.mutate(g.id);
                    }}
                  >
                    <Trash2 className="size-4 text-red-400" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-[#d7aa52]/30 text-[#f3d28a]"
                    onClick={() => openCreateItem(g.id)}
                  >
                    <Plus className="size-3.5" />
                    مهارة
                  </Button>
                </div>
              </div>

              {groupItems.length === 0 ? (
                <p className="text-xs text-white/40">لا توجد مهارات في هذه المجموعة بعد.</p>
              ) : (
                <div className="overflow-x-auto rounded-xl border border-white/8">
                  <table className="w-full text-sm">
                    <thead className="bg-white/[0.03] text-right text-white/50">
                      <tr>
                        <th className="p-2.5 font-medium">المهارة</th>
                        <th className="p-2.5 font-medium">بالإنجليزية</th>
                        <th className="p-2.5 font-medium">المستوى</th>
                        <th className="p-2.5 font-medium">إجراءات</th>
                      </tr>
                    </thead>
                    <tbody>
                      {groupItems.map((it) => (
                        <tr key={it.id} className="border-t border-white/5">
                          <td className="p-2.5 font-bold text-white">{it.name_ar}</td>
                          <td className="p-2.5 text-xs text-white/50">{it.name_en}</td>
                          <td className="p-2.5">
                            <div className="flex items-center gap-2">
                              <div className="h-1.5 w-16 overflow-hidden rounded-full bg-white/10">
                                <div
                                  className="h-full rounded-full bg-gradient-to-r from-[#f3d28a] to-[#b8862e]"
                                  style={{ width: `${it.level}%` }}
                                />
                              </div>
                              <span className="text-xs tabular-nums text-white/60">
                                {it.level}%
                              </span>
                            </div>
                          </td>
                          <td className="p-2.5">
                            <div className="flex gap-1">
                              <Button
                                variant="ghost"
                                size="icon"
                                aria-label={`تعديل ${it.name_ar}`}
                                onClick={() => openEditItem(it)}
                              >
                                <Pencil className="size-4 text-[#f3d28a]" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                aria-label={`حذف ${it.name_ar}`}
                                onClick={() => {
                                  if (confirm(`حذف مهارة "${it.name_ar}"؟`))
                                    deleteItemMut.mutate(it.id);
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
              )}
            </div>
          );
        })}
      </div>

      {/* Group dialog */}
      <Dialog open={groupDialogOpen} onOpenChange={setGroupDialogOpen}>
        <DialogContent className="bg-[#07182c] text-white sm:max-w-lg" dir="rtl">
          <DialogHeader>
            <DialogTitle className="text-[#f3d28a]">
              {editingGroup?.id ? "تعديل مجموعة" : "إضافة مجموعة مهارات"}
            </DialogTitle>
          </DialogHeader>
          {editingGroup && (
            <div className="space-y-4">
              <Field label="اسم المجموعة (عربي) *">
                <Input
                  value={editingGroup.heading_ar ?? ""}
                  onChange={(e) => setEditingGroup({ ...editingGroup, heading_ar: e.target.value })}
                  className="bg-[#04101f] border-[#d7aa52]/20"
                />
              </Field>
              <Field label="اسم المجموعة (إنجليزي) *">
                <Input
                  value={editingGroup.heading_en ?? ""}
                  onChange={(e) => setEditingGroup({ ...editingGroup, heading_en: e.target.value })}
                  className="bg-[#04101f] border-[#d7aa52]/20"
                />
              </Field>
              <div className="flex items-center gap-2">
                <Switch
                  checked={editingGroup.is_published ?? true}
                  onCheckedChange={(v) => setEditingGroup({ ...editingGroup, is_published: v })}
                />
                <Label className="text-xs text-white/70">منشورة على الموقع</Label>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button
              onClick={() => editingGroup && saveGroupMut.mutate(editingGroup)}
              disabled={
                saveGroupMut.isPending || !editingGroup?.heading_ar || !editingGroup?.heading_en
              }
              className="bg-gradient-to-br from-[#f3d28a] to-[#b8862e] text-[#04101f]"
            >
              {saveGroupMut.isPending ? "جارٍ الحفظ..." : "حفظ"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Item dialog */}
      <Dialog open={itemDialogOpen} onOpenChange={setItemDialogOpen}>
        <DialogContent
          className="max-h-[90vh] overflow-y-auto bg-[#07182c] text-white sm:max-w-2xl"
          dir="rtl"
        >
          <DialogHeader>
            <DialogTitle className="text-[#f3d28a]">
              {editingItem?.id ? "تعديل مهارة" : "إضافة مهارة"}
            </DialogTitle>
          </DialogHeader>
          {editingItem && (
            <div className="space-y-4">
              <Field label="المجموعة *">
                <Select
                  value={editingItem.group_id ?? ""}
                  onValueChange={(v) => setEditingItem({ ...editingItem, group_id: v })}
                >
                  <SelectTrigger className="bg-[#04101f] border-[#d7aa52]/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {groups.map((g) => (
                      <SelectItem key={g.id} value={g.id}>
                        {g.heading_ar}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>

              <div className="grid grid-cols-2 gap-3">
                <Field label="اسم المهارة (عربي) *">
                  <Input
                    value={editingItem.name_ar ?? ""}
                    onChange={(e) => setEditingItem({ ...editingItem, name_ar: e.target.value })}
                    className="bg-[#04101f] border-[#d7aa52]/20"
                  />
                </Field>
                <Field label="اسم المهارة (إنجليزي) *">
                  <Input
                    value={editingItem.name_en ?? ""}
                    onChange={(e) => setEditingItem({ ...editingItem, name_en: e.target.value })}
                    className="bg-[#04101f] border-[#d7aa52]/20"
                  />
                </Field>
              </div>

              <Field label={`مستوى الإتقان: ${editingItem.level ?? 80}%`}>
                <Input
                  type="range"
                  min={0}
                  max={100}
                  value={editingItem.level ?? 80}
                  onChange={(e) =>
                    setEditingItem({ ...editingItem, level: Number(e.target.value) })
                  }
                  className="accent-[#d7aa52]"
                />
              </Field>

              <div className="grid grid-cols-2 gap-3">
                <Field label="وصف مختصر (عربي)">
                  <Textarea
                    rows={2}
                    value={editingItem.desc_ar ?? ""}
                    onChange={(e) => setEditingItem({ ...editingItem, desc_ar: e.target.value })}
                    className="bg-[#04101f] border-[#d7aa52]/20"
                  />
                </Field>
                <Field label="وصف مختصر (إنجليزي)">
                  <Textarea
                    rows={2}
                    value={editingItem.desc_en ?? ""}
                    onChange={(e) => setEditingItem({ ...editingItem, desc_en: e.target.value })}
                    className="bg-[#04101f] border-[#d7aa52]/20"
                  />
                </Field>
              </div>

              <TextListField
                label="الأدوات المستخدمة — سطر لكل أداة (مثال: Excel)"
                value={editingItem.tools ?? []}
                onChange={(v) => setEditingItem({ ...editingItem, tools: v })}
              />

              <div className="grid grid-cols-2 gap-3">
                <TextListField
                  label="مؤشرات الإنجاز KPIs (عربي)"
                  value={editingItem.kpis_ar ?? []}
                  onChange={(v) => setEditingItem({ ...editingItem, kpis_ar: v })}
                />
                <TextListField
                  label="مؤشرات الإنجاز KPIs (إنجليزي)"
                  value={editingItem.kpis_en ?? []}
                  onChange={(v) => setEditingItem({ ...editingItem, kpis_en: v })}
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button
              onClick={() => editingItem && saveItemMut.mutate(editingItem)}
              disabled={
                saveItemMut.isPending ||
                !editingItem?.group_id ||
                !editingItem?.name_ar ||
                !editingItem?.name_en
              }
              className="bg-gradient-to-br from-[#f3d28a] to-[#b8862e] text-[#04101f]"
            >
              {saveItemMut.isPending ? "جارٍ الحفظ..." : "حفظ"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
