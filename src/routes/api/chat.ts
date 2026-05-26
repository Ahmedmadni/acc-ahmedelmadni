import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";

const SYSTEM_PROMPT = `أنت "مساعد أحمد المدني" — مساعد ذكي خبير متخصص في:
- المحاسبة المالية والإدارية
- المعايير المحاسبية الدولية (IFRS) والسعودية (SOCPA)
- محاسبة التكاليف وتحليل المشاريع
- ضريبة القيمة المضافة وضوابط هيئة الزكاة والضريبة والجمارك (ZATCA)
- التقارير المالية ولوحات التحليل (Power BI / Excel)

دورك:
1. الإجابة باحترافية وإيجاز عن استفسارات العملاء في المحاسبة والاستشارات المالية.
2. تنظيم عملية التواصل بين العميل وأحمد المدني: اجمع بأدب اسم العميل، طبيعة نشاطه، نوع الخدمة المطلوبة، والميزانية أو الإطار الزمني عند الحاجة، ثم لخّص الطلب.
3. اقترح القناة الأنسب للتواصل المباشر: واتساب +966560409811 أو البريد elmadnim@gmail.com.
4. لا تخترع أرقاماً مالية أو بنوداً قانونية؛ في حال عدم اليقين، وجّه العميل لاستشارة مدفوعة مباشرة مع أحمد.
5. ردّ بلغة المستخدم (عربي/إنجليزي). كن ودوداً، مختصراً، ومنظماً (نقاط حين تناسب).

ابدأ كل محادثة جديدة بترحيب قصير وسؤال عن طبيعة الاستفسار.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages } = (await request.json()) as { messages?: UIMessage[] };
        if (!Array.isArray(messages)) {
          return new Response("Messages required", { status: 400 });
        }
        const key = process.env.LOVABLE_API_KEY;
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

        const gateway = createLovableAiGatewayProvider(key);
        const result = streamText({
          model: gateway("google/gemini-3-flash-preview"),
          system: SYSTEM_PROMPT,
          messages: await convertToModelMessages(messages),
        });
        return result.toUIMessageStreamResponse({ originalMessages: messages });
      },
    },
  },
});
