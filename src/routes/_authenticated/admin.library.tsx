import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import {
  listLibraryItemsFn,
  createLibraryItemFn,
  updateLibraryItemFn,
  deleteLibraryItemFn,
  togglePublishItemFn,
  generateLibraryItemAIFn,
  createManualArticleFn,
  listArticleCategoriesFn,
  updateArticleFn,
  deleteArticleFn,
  uploadLibraryPdfFn,
  type LibraryItemRow,
} from "@/lib/library/manage.functions";
import { listAdminArticlesFn, reviewArticleFn } from "@/lib/knowledge/generate.functions";
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
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Pencil, Trash2, Plus, BookOpen } from "lucide-react";

export const Route = createFileRoute("/_authenticated/admin/library")({
  head: () => ({
    meta: [{ title: "إدارة المكتبة | المشرف" }, { name: "robots", content: "noindex, nofollow" }],
  }),
  component: AdminLibraryPage,
});

const ITEM_TYPES = ["course", "book", "video", "external_link", "tool"] as const;
type ItemType = (typeof ITEM_TYPES)[number];

const TYPE_LABEL: Record<ItemType, string> = {
  course: "كورس",
  book: "كتاب",
  video: "فيديو",
  external_link: "رابط",
  tool: "أداة",
};

const CATEGORIES = ["fundamentals", "reporting", "tax", "audit", "software", "certifications"];

const EMPTY_FORM: Partial<LibraryItemRow> = {
  type: "course",
  title_ar: "",
  title_en: "",
  description_ar: "",
  description_en: "",
  category_slug: "fundamentals",
  url: "",
  cover_image: "",
  author: "",
  provider: "",
  level: "beginner",
  duration_hours: 0,
  is_free: true,
  price: 0,
  tags: [],
  sort_order: 0,
  is_published: false,
};

function AdminLibraryPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#151412] text-[#FCFBF9]">
      <div className="w-full border-b border-[#A88765]/20 px-4 py-4 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <BookOpen className="size-5 text-[#c9a986]" />
            <h1 className="font-display text-base font-extrabold text-[#c9a986]">
              لوحة إدارة المكتبة
            </h1>
          </div>
          <Link
            to="/library"
            className="rounded-full border border-[#A88765]/40 px-3 py-1.5 text-xs font-bold text-[#c9a986] hover:bg-[#A88765]/15"
          >
            عرض المكتبة
          </Link>
        </div>
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-16 py-8">
        <Tabs defaultValue="articles" className="w-full">
          <TabsList className="bg-[#1C1B19] border border-[#A88765]/20">
            <TabsTrigger value="articles">المقالات</TabsTrigger>
            <TabsTrigger value="course">كورسات</TabsTrigger>
            <TabsTrigger value="book">كتب</TabsTrigger>
            <TabsTrigger value="video">فيديوهات</TabsTrigger>
            <TabsTrigger value="external_link">روابط</TabsTrigger>
            <TabsTrigger value="tool">أدوات</TabsTrigger>
          </TabsList>

          <TabsContent value="articles" className="mt-6">
            <ArticlesPanel />
          </TabsContent>
          {ITEM_TYPES.map((t) => (
            <TabsContent key={t} value={t} className="mt-6">
              <LibraryPanel type={t} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

// ============= Library Panel =============
function LibraryPanel({ type }: { type: ItemType }) {
  const qc = useQueryClient();
  const listFn = useServerFn(listLibraryItemsFn);
  const createFn = useServerFn(createLibraryItemFn);
  const updateFn = useServerFn(updateLibraryItemFn);
  const deleteFn = useServerFn(deleteLibraryItemFn);
  const pubFn = useServerFn(togglePublishItemFn);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["admin-library"],
    queryFn: () => listFn(),
  });

  const items = (data?.items ?? []).filter((i) => i.type === type);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Partial<LibraryItemRow> | null>(null);

  const openCreate = () => {
    setEditing({ ...EMPTY_FORM, type });
    setDialogOpen(true);
  };
  const openEdit = (item: LibraryItemRow) => {
    setEditing(item);
    setDialogOpen(true);
  };

  const saveMut = useMutation({
    mutationFn: async (form: Partial<LibraryItemRow>) => {
      const payload = sanitizeForm(form, type);
      if (form.id) {
        return updateFn({ data: { id: form.id, patch: payload } });
      }
      return createFn({ data: payload });
    },
    onSuccess: () => {
      toast.success("تم الحفظ");
      qc.invalidateQueries({ queryKey: ["admin-library"] });
      setDialogOpen(false);
    },
    onError: (e) => toast.error((e as Error).message),
  });

  const delMut = useMutation({
    mutationFn: (id: string) => deleteFn({ data: { id } }),
    onSuccess: () => {
      toast.success("تم الحذف");
      qc.invalidateQueries({ queryKey: ["admin-library"] });
    },
    onError: (e) => toast.error((e as Error).message),
  });

  const togMut = useMutation({
    mutationFn: (v: { id: string; is_published: boolean }) => pubFn({ data: v }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin-library"] }),
    onError: (e) => toast.error((e as Error).message),
  });

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div className="text-sm text-white/60">
          عدد العناصر: <span className="font-bold text-white">{items.length}</span>
        </div>
        <Button
          onClick={openCreate}
          className="bg-gradient-to-br from-[#c2a079] to-[#7c6045] text-[#1C1B19] hover:opacity-90"
        >
          <Plus className="size-4" />
          إضافة {TYPE_LABEL[type]}
        </Button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[#A88765]/20 bg-[#FCFBF9]">
        <table className="w-full text-sm">
          <thead className="bg-[#F5F1EB] text-right text-[#6B6259]">
            <tr>
              <th className="p-3">العنوان</th>
              <th className="p-3">التصنيف</th>
              <th className="p-3">الجهة</th>
              <th className="p-3">المستوى</th>
              <th className="p-3">منشور</th>
              <th className="p-3">إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && (
              <tr>
                <td colSpan={6} className="p-6 text-center text-[#8a8078]">
                  جارٍ التحميل...
                </td>
              </tr>
            )}
            {isError && (
              <tr>
                <td colSpan={6} className="p-6 text-center text-red-600">
                  تعذّر تحميل العناصر. حاول تحديث الصفحة.
                </td>
              </tr>
            )}
            {!isLoading && !isError && items.length === 0 && (
              <tr>
                <td colSpan={6} className="p-6 text-center text-[#8a8078]">
                  لا توجد عناصر بعد. اضغط "إضافة" لبدء الإضافة.
                </td>
              </tr>
            )}
            {items.map((it) => (
              <tr key={it.id} className="border-t border-[#A88765]/10">
                <td className="p-3">
                  <div className="font-bold text-[#1C1B19]">{it.title_ar}</div>
                  {it.title_en && <div className="text-xs text-[#8a8078]">{it.title_en}</div>}
                </td>
                <td className="p-3 text-xs text-[#2e2a25]">{it.category_slug}</td>
                <td className="p-3 text-xs text-[#6B6259]">{it.provider ?? "—"}</td>
                <td className="p-3 text-xs text-[#6B6259]">{it.level ?? "—"}</td>
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
                      <Pencil className="size-4 text-[#7c6045]" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label={`حذف ${it.title_ar}`}
                      onClick={() => {
                        if (confirm(`حذف "${it.title_ar}"؟`)) delMut.mutate(it.id);
                      }}
                    >
                      <Trash2 className="size-4 text-red-600" />
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
          className="max-h-[90vh] overflow-y-auto bg-[#1C1B19] text-[#FCFBF9] sm:max-w-2xl"
          dir="rtl"
        >
          <DialogHeader>
            <DialogTitle className="text-[#c9a986]">
              {editing?.id ? "تعديل" : "إضافة"} {TYPE_LABEL[type]}
            </DialogTitle>
          </DialogHeader>
          {editing && (
            <ItemForm
              value={editing}
              onChange={setEditing}
              onSubmit={() => saveMut.mutate(editing)}
              submitting={saveMut.isPending}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ============= Item Form (with AI assist) =============
function ItemForm({
  value,
  onChange,
  onSubmit,
  submitting,
}: {
  value: Partial<LibraryItemRow>;
  onChange: (v: Partial<LibraryItemRow>) => void;
  onSubmit: () => void;
  submitting: boolean;
}) {
  const aiFn = useServerFn(generateLibraryItemAIFn);
  const [aiTopic, setAiTopic] = useState("");

  const aiMut = useMutation({
    mutationFn: () =>
      aiFn({
        data: {
          type: value.type as ItemType,
          topic: aiTopic,
          category_slug: value.category_slug ?? "fundamentals",
          url: value.url || null,
        },
      }),
    onSuccess: ({ suggestion }) => {
      onChange({
        ...value,
        title_ar: suggestion.title_ar,
        title_en: suggestion.title_en,
        description_ar: suggestion.description_ar,
        description_en: suggestion.description_en,
        tags: suggestion.tags,
        level: suggestion.level,
        provider: suggestion.provider ?? value.provider,
        author: suggestion.author ?? value.author,
      });
      toast.success("تم التوليد بالذكاء الاصطناعي");
    },
    onError: (e) => toast.error((e as Error).message),
  });

  return (
    <div className="space-y-4">
      {/* AI assist */}
      <div className="rounded-xl border border-[#A88765]/30 bg-[#A88765]/5 p-3">
        <div className="mb-2 flex items-center gap-2 text-xs font-bold text-[#c9a986]">
          <Sparkles className="size-4" /> توليد بالذكاء الاصطناعي
        </div>
        <div className="flex gap-2">
          <Input
            placeholder="موضوع أو وصف مختصر..."
            value={aiTopic}
            onChange={(e) => setAiTopic(e.target.value)}
            className="bg-[#24211E] border-[#A88765]/25 text-[#FCFBF9]"
          />
          <Button
            type="button"
            onClick={() => aiMut.mutate()}
            disabled={aiTopic.length < 3 || aiMut.isPending}
            className="bg-gradient-to-br from-[#c2a079] to-[#7c6045] text-[#1C1B19]"
          >
            {aiMut.isPending ? "..." : "توليد"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Field label="العنوان (عربي) *">
          <Input
            value={value.title_ar ?? ""}
            onChange={(e) => onChange({ ...value, title_ar: e.target.value })}
            className="bg-[#24211E] border-[#A88765]/25"
          />
        </Field>
        <Field label="العنوان (إنجليزي)">
          <Input
            value={value.title_en ?? ""}
            onChange={(e) => onChange({ ...value, title_en: e.target.value })}
            className="bg-[#24211E] border-[#A88765]/25"
          />
        </Field>

        <Field label="التصنيف">
          <Select
            value={value.category_slug ?? "fundamentals"}
            onValueChange={(v) => onChange({ ...value, category_slug: v })}
          >
            <SelectTrigger className="bg-[#24211E] border-[#A88765]/25">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {CATEGORIES.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field label="المستوى">
          <Select
            value={value.level ?? "beginner"}
            onValueChange={(v) => onChange({ ...value, level: v })}
          >
            <SelectTrigger className="bg-[#24211E] border-[#A88765]/25">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">مبتدئ</SelectItem>
              <SelectItem value="intermediate">متوسط</SelectItem>
              <SelectItem value="advanced">متقدم</SelectItem>
            </SelectContent>
          </Select>
        </Field>

        <Field label="الرابط (URL)">
          <Input
            value={value.url ?? ""}
            onChange={(e) => onChange({ ...value, url: e.target.value })}
            placeholder="https://..."
            className="bg-[#24211E] border-[#A88765]/25"
          />
        </Field>
        <Field label="رابط الصورة (cover)">
          <Input
            value={value.cover_image ?? ""}
            onChange={(e) => onChange({ ...value, cover_image: e.target.value })}
            placeholder="https://..."
            className="bg-[#24211E] border-[#A88765]/25"
          />
        </Field>
        {value.type === "book" && (
          <Field label="ملف PDF (للكتب)">
            <PdfUploadField value={value} onChange={onChange} />
          </Field>
        )}

        <Field label="الجهة/المنصة">
          <Input
            value={value.provider ?? ""}
            onChange={(e) => onChange({ ...value, provider: e.target.value })}
            placeholder="Coursera, YouTube, ..."
            className="bg-[#24211E] border-[#A88765]/25"
          />
        </Field>
        <Field label="المؤلف/المحاضر">
          <Input
            value={value.author ?? ""}
            onChange={(e) => onChange({ ...value, author: e.target.value })}
            className="bg-[#24211E] border-[#A88765]/25"
          />
        </Field>

        <Field label="المدة (ساعات)">
          <Input
            type="number"
            value={value.duration_hours ?? 0}
            onChange={(e) => onChange({ ...value, duration_hours: Number(e.target.value) })}
            className="bg-[#24211E] border-[#A88765]/25"
          />
        </Field>
        <Field label="الترتيب">
          <Input
            type="number"
            value={value.sort_order ?? 0}
            onChange={(e) => onChange({ ...value, sort_order: Number(e.target.value) })}
            className="bg-[#24211E] border-[#A88765]/25"
          />
        </Field>

        <Field label="مجاني">
          <div className="flex h-9 items-center">
            <Switch
              checked={value.is_free ?? true}
              onCheckedChange={(v) => onChange({ ...value, is_free: v })}
            />
          </div>
        </Field>
        <Field label="السعر">
          <Input
            type="number"
            value={value.price ?? 0}
            onChange={(e) => onChange({ ...value, price: Number(e.target.value) })}
            disabled={value.is_free}
            className="bg-[#24211E] border-[#A88765]/25"
          />
        </Field>
      </div>

      <Field label="وصف (عربي)">
        <Textarea
          value={value.description_ar ?? ""}
          onChange={(e) => onChange({ ...value, description_ar: e.target.value })}
          rows={3}
          className="bg-[#24211E] border-[#A88765]/25"
        />
      </Field>
      <Field label="وصف (إنجليزي)">
        <Textarea
          value={value.description_en ?? ""}
          onChange={(e) => onChange({ ...value, description_en: e.target.value })}
          rows={3}
          className="bg-[#24211E] border-[#A88765]/25"
        />
      </Field>

      <Field label="الوسوم (مفصولة بفواصل)">
        <Input
          value={(value.tags ?? []).join(", ")}
          onChange={(e) =>
            onChange({
              ...value,
              tags: e.target.value
                .split(",")
                .map((s) => s.trim())
                .filter(Boolean),
            })
          }
          className="bg-[#24211E] border-[#A88765]/25"
        />
      </Field>

      <div className="flex items-center justify-between rounded-xl border border-[#A88765]/20 bg-[#24211E] p-3">
        <Label className="text-sm">نشر فوري</Label>
        <Switch
          checked={value.is_published ?? false}
          onCheckedChange={(v) => onChange({ ...value, is_published: v })}
        />
      </div>

      <DialogFooter>
        <Button
          onClick={onSubmit}
          disabled={submitting || !value.title_ar}
          className="bg-gradient-to-br from-[#c2a079] to-[#7c6045] text-[#1C1B19]"
        >
          {submitting ? "...يحفظ" : "حفظ"}
        </Button>
      </DialogFooter>
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

function sanitizeForm(form: Partial<LibraryItemRow>, type: ItemType): Record<string, unknown> {
  return {
    type,
    title_ar: form.title_ar ?? "",
    title_en: form.title_en || null,
    description_ar: form.description_ar || null,
    description_en: form.description_en || null,
    category_slug: form.category_slug ?? "fundamentals",
    url: form.url || null,
    cover_image: form.cover_image || null,
    author: form.author || null,
    provider: form.provider || null,
    level: form.level || null,
    duration_hours: form.duration_hours ?? null,
    is_free: form.is_free ?? true,
    price: form.is_free ? null : (form.price ?? 0),
    tags: form.tags ?? [],
    sort_order: form.sort_order ?? 0,
    is_published: form.is_published ?? false,
  };
}

// ============= Articles Panel =============
const STATUS_LABEL: Record<string, string> = {
  draft: "مسودة",
  pending_review: "بانتظار المراجعة",
  approved: "موافق",
  published: "منشور",
  rejected: "مرفوض",
};

function ArticlesPanel() {
  const qc = useQueryClient();
  const listFn = useServerFn(listAdminArticlesFn);
  const updFn = useServerFn(updateArticleFn);
  const delFn = useServerFn(deleteArticleFn);
  const revFn = useServerFn(reviewArticleFn);
  const createFn = useServerFn(createManualArticleFn);
  const categoriesFn = useServerFn(listArticleCategoriesFn);

  const [page, setPage] = useState(0);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["admin-articles", page],
    queryFn: () => listFn({ data: { page } }),
  });
  const articles = data?.articles ?? [];
  const categories = useQuery({
    queryKey: ["admin-article-categories"],
    queryFn: () => categoriesFn(),
  });

  const [createOpen, setCreateOpen] = useState(false);
  const [manualForm, setManualForm] = useState({
    slug: "",
    category_id: "",
    title_ar: "",
    title_en: "",
    excerpt_ar: "",
    excerpt_en: "",
    content_ar: "",
    meta_title: "",
    meta_description: "",
    author_name: "أحمد المدني",
    reading_minutes: 5,
    status: "draft" as "draft" | "published",
  });

  const [editOpen, setEditOpen] = useState(false);
  const [editing, setEditing] = useState<{ id: string; title_ar: string; status: string } | null>(
    null,
  );
  const [titleEdit, setTitleEdit] = useState("");
  const [statusEdit, setStatusEdit] = useState<string>("draft");

  const upd = useMutation({
    mutationFn: (v: {
      id: string;
      patch: {
        title_ar?: string;
        status?: "draft" | "pending_review" | "approved" | "published" | "rejected";
      };
    }) => updFn({ data: v }),
    onSuccess: () => {
      toast.success("تم التحديث");
      qc.invalidateQueries({ queryKey: ["admin-articles"] });
      setEditOpen(false);
    },
    onError: (e) => toast.error((e as Error).message),
  });

  const del = useMutation({
    mutationFn: (id: string) => delFn({ data: { id } }),
    onSuccess: () => {
      toast.success("تم الحذف");
      qc.invalidateQueries({ queryKey: ["admin-articles"] });
    },
    onError: (e) => toast.error((e as Error).message),
  });

  const review = useMutation({
    mutationFn: (v: { id: string; action: "approve" | "reject" }) => revFn({ data: v }),
    onSuccess: () => {
      toast.success("تم");
      qc.invalidateQueries({ queryKey: ["admin-articles"] });
    },
    onError: (e) => toast.error((e as Error).message),
  });

  const createManual = useMutation({
    mutationFn: () => createFn({ data: manualForm }),
    onSuccess: () => {
      toast.success("تمت إضافة المقال يدويًا");
      qc.invalidateQueries({ queryKey: ["admin-articles"] });
      setCreateOpen(false);
      setManualForm({
        slug: "",
        category_id: "",
        title_ar: "",
        title_en: "",
        excerpt_ar: "",
        excerpt_en: "",
        content_ar: "",
        meta_title: "",
        meta_description: "",
        author_name: "أحمد المدني",
        reading_minutes: 5,
        status: "draft",
      });
    },
    onError: (e) => toast.error((e as Error).message),
  });

  const openEdit = (a: { id: string; title_ar: string; status: string }) => {
    setEditing(a);
    setTitleEdit(a.title_ar);
    setStatusEdit(a.status);
    setEditOpen(true);
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div className="text-sm text-white/60">
          عدد المقالات: <span className="font-bold text-white">{articles.length}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            onClick={() => setCreateOpen(true)}
            className="bg-[#FCFBF9] text-[#1C1B19] hover:bg-[#F5F1EB]"
          >
            <Plus className="size-4" /> إضافة مقال يدويًا
          </Button>
          <Link
            to="/admin/knowledge"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-[#c2a079] to-[#7c6045] px-4 py-2 text-sm font-bold text-[#1C1B19]"
          >
            <Sparkles className="size-4" /> توليد مقال جديد بالـ AI
          </Link>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[#A88765]/20 bg-[#FCFBF9]">
        <table className="w-full text-sm">
          <thead className="bg-[#F5F1EB] text-right text-[#6B6259]">
            <tr>
              <th className="p-3">العنوان</th>
              <th className="p-3">الحالة</th>
              <th className="p-3">المصدر</th>
              <th className="p-3">إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && (
              <tr>
                <td colSpan={4} className="p-6 text-center text-[#8a8078]">
                  جارٍ التحميل...
                </td>
              </tr>
            )}
            {isError && (
              <tr>
                <td colSpan={4} className="p-6 text-center text-red-600">
                  تعذّر تحميل المقالات. حاول تحديث الصفحة.
                </td>
              </tr>
            )}
            {articles.map((a) => (
              <tr key={a.id} className="border-t border-[#A88765]/10">
                <td className="p-3 font-bold text-[#1C1B19]">{a.title_ar}</td>
                <td className="p-3">
                  <Badge variant="outline" className="border-[#A88765]/40 text-[#7c6045]">
                    {STATUS_LABEL[a.status] ?? a.status}
                  </Badge>
                </td>
                <td className="p-3 text-xs text-[#6B6259]">{a.generation_source}</td>
                <td className="p-3">
                  <div className="flex gap-1">
                    {a.status === "pending_review" && (
                      <>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => review.mutate({ id: a.id, action: "approve" })}
                          className="text-emerald-700 hover:text-emerald-800"
                        >
                          موافقة
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => review.mutate({ id: a.id, action: "reject" })}
                          className="text-red-700 hover:text-red-800"
                        >
                          رفض
                        </Button>
                      </>
                    )}
                    <Button
                      size="icon"
                      variant="ghost"
                      aria-label={`تعديل ${a.title_ar}`}
                      onClick={() => openEdit(a)}
                    >
                      <Pencil className="size-4 text-[#7c6045]" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      aria-label={`حذف ${a.title_ar}`}
                      onClick={() => {
                        if (confirm(`حذف "${a.title_ar}"؟`)) del.mutate(a.id);
                      }}
                    >
                      <Trash2 className="size-4 text-red-600" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {data && data.total > data.pageSize && (
          <div className="flex items-center justify-between border-t border-[#A88765]/15 p-3 text-sm text-[#6B6259]">
            <span>
              {page * data.pageSize + 1}–{Math.min((page + 1) * data.pageSize, data.total)} من{" "}
              {data.total}
            </span>
            <div className="flex gap-2">
              <button
                disabled={page === 0}
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                className="rounded-full border border-[#A88765]/40 px-3 py-1.5 text-xs font-bold text-[#c9a986] hover:bg-[#A88765]/15 disabled:opacity-30"
              >
                السابق
              </button>
              <button
                disabled={(page + 1) * data.pageSize >= data.total}
                onClick={() => setPage((p) => p + 1)}
                className="rounded-full border border-[#A88765]/40 px-3 py-1.5 text-xs font-bold text-[#c9a986] hover:bg-[#A88765]/15 disabled:opacity-30"
              >
                التالي
              </button>
            </div>
          </div>
        )}
      </div>

      <Dialog open={createOpen} onOpenChange={setCreateOpen}>
        <DialogContent
          className="max-h-[90vh] max-w-3xl overflow-y-auto bg-[#1C1B19] text-[#FCFBF9]"
          dir="rtl"
        >
          <DialogHeader>
            <DialogTitle className="text-[#c9a986]">إضافة مقال يدويًا</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="العنوان بالعربية *">
              <Input
                value={manualForm.title_ar}
                onChange={(e) =>
                  setManualForm((f) => ({ ...f, title_ar: e.target.value }))
                }
                className="border-[#A88765]/25 bg-[#24211E]"
              />
            </Field>
            <Field label="العنوان بالإنجليزية">
              <Input
                value={manualForm.title_en}
                onChange={(e) =>
                  setManualForm((f) => ({ ...f, title_en: e.target.value }))
                }
                className="border-[#A88765]/25 bg-[#24211E]"
                dir="ltr"
              />
            </Field>
            <Field label="الرابط المختصر بالإنجليزية *">
              <Input
                value={manualForm.slug}
                onChange={(e) =>
                  setManualForm((f) => ({
                    ...f,
                    slug: e.target.value.toLowerCase().replace(/\s+/g, "-"),
                  }))
                }
                placeholder="article-title"
                className="border-[#A88765]/25 bg-[#24211E]"
                dir="ltr"
              />
            </Field>
            <Field label="التصنيف *">
              <Select
                value={manualForm.category_id}
                onValueChange={(category_id) =>
                  setManualForm((f) => ({ ...f, category_id }))
                }
              >
                <SelectTrigger className="border-[#A88765]/25 bg-[#24211E]">
                  <SelectValue
                    placeholder={categories.isLoading ? "جارٍ التحميل..." : "اختر التصنيف"}
                  />
                </SelectTrigger>
                <SelectContent>
                  {categories.data?.categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name_ar}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <div className="sm:col-span-2">
              <Field label="الملخص بالعربية *">
                <Textarea
                  value={manualForm.excerpt_ar}
                  onChange={(e) =>
                    setManualForm((f) => ({ ...f, excerpt_ar: e.target.value }))
                  }
                  className="border-[#A88765]/25 bg-[#24211E]"
                  rows={3}
                />
              </Field>
            </div>
            <div className="sm:col-span-2">
              <Field label="محتوى المقال بالعربية * (افصل الفقرات بسطر فارغ)">
                <Textarea
                  value={manualForm.content_ar}
                  onChange={(e) =>
                    setManualForm((f) => ({ ...f, content_ar: e.target.value }))
                  }
                  className="min-h-64 border-[#A88765]/25 bg-[#24211E]"
                />
              </Field>
            </div>
            <Field label="اسم الكاتب">
              <Input
                value={manualForm.author_name}
                onChange={(e) =>
                  setManualForm((f) => ({ ...f, author_name: e.target.value }))
                }
                className="border-[#A88765]/25 bg-[#24211E]"
              />
            </Field>
            <Field label="مدة القراءة بالدقائق">
              <Input
                type="number"
                min={1}
                max={120}
                value={manualForm.reading_minutes}
                onChange={(e) =>
                  setManualForm((f) => ({ ...f, reading_minutes: Number(e.target.value) }))
                }
                className="border-[#A88765]/25 bg-[#24211E]"
              />
            </Field>
            <Field label="الحالة">
              <Select
                value={manualForm.status}
                onValueChange={(status: "draft" | "published") =>
                  setManualForm((f) => ({ ...f, status }))
                }
              >
                <SelectTrigger className="border-[#A88765]/25 bg-[#24211E]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">مسودة</SelectItem>
                  <SelectItem value="published">نشر مباشرة</SelectItem>
                </SelectContent>
              </Select>
            </Field>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setCreateOpen(false)}>
              إلغاء
            </Button>
            <Button
              type="button"
              disabled={
                createManual.isPending ||
                !manualForm.category_id ||
                !manualForm.title_ar ||
                !manualForm.slug ||
                manualForm.excerpt_ar.length < 10 ||
                manualForm.content_ar.length < 20
              }
              onClick={() => createManual.mutate()}
              className="bg-gradient-to-br from-[#c2a079] to-[#7c6045] text-[#1C1B19]"
            >
              {createManual.isPending
                ? "جارٍ الحفظ..."
                : manualForm.status === "published"
                  ? "حفظ ونشر"
                  : "حفظ كمسودة"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="bg-[#1C1B19] text-[#FCFBF9]" dir="rtl">
          <DialogHeader>
            <DialogTitle className="text-[#c9a986]">تعديل المقال</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <Field label="العنوان (عربي)">
              <Input
                value={titleEdit}
                onChange={(e) => setTitleEdit(e.target.value)}
                className="bg-[#24211E] border-[#A88765]/25"
              />
            </Field>
            <Field label="الحالة">
              <Select value={statusEdit} onValueChange={setStatusEdit}>
                <SelectTrigger className="bg-[#24211E] border-[#A88765]/25">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(STATUS_LABEL).map(([k, l]) => (
                    <SelectItem key={k} value={k}>
                      {l}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
          </div>
          <DialogFooter>
            <Button
              onClick={() => {
                if (!editing) return;
                upd.mutate({
                  id: editing.id,
                  patch: {
                    title_ar: titleEdit,
                    status: statusEdit as
                      | "draft"
                      | "pending_review"
                      | "approved"
                      | "published"
                      | "rejected",
                  },
                });
              }}
              className="bg-gradient-to-br from-[#c2a079] to-[#7c6045] text-[#1C1B19]"
            >
              حفظ
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function PdfUploadField({
  value,
  onChange,
}: {
  value: Partial<LibraryItemRow>;
  onChange: (next: Partial<LibraryItemRow>) => void;
}) {
  const uploadFn = useServerFn(uploadLibraryPdfFn);
  const [busy, setBusy] = useState(false);

  if (!value.id) {
    return <p className="text-xs text-white/60">احفظ العنصر أولاً ثم ارفع ملف PDF.</p>;
  }

  const onFile = async (file: File) => {
    if (file.type !== "application/pdf") {
      toast.error("يجب أن يكون الملف PDF");
      return;
    }
    if (file.size > 50 * 1024 * 1024) {
      toast.error("الحد الأقصى 50 ميجابايت");
      return;
    }
    setBusy(true);
    try {
      const buf = await file.arrayBuffer();
      let bin = "";
      const bytes = new Uint8Array(buf);
      for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
      const base64 = btoa(bin);
      const res = await uploadFn({ data: { id: value.id!, filename: file.name, base64 } });
      onChange({ ...value, pdf_path: res.path });
      toast.success("تم رفع الملف");
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="space-y-2">
      {value.pdf_path && (
        <div className="text-[11px] text-emerald-300">PDF محفوظ: {value.pdf_path}</div>
      )}
      <input
        type="file"
        accept="application/pdf"
        disabled={busy}
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) onFile(f);
        }}
        className="block w-full text-xs text-white/80 file:mr-2 file:rounded-full file:border-0 file:bg-gradient-to-br file:from-[#c2a079] file:to-[#7c6045] file:px-3 file:py-1.5 file:text-xs file:font-bold file:text-[#1C1B19]"
      />
      {busy && <p className="text-xs text-white/60">جارٍ الرفع...</p>}
    </div>
  );
}
