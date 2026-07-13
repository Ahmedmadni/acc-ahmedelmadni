-- Reusable custom WhatsApp message templates for the CRM messenger. When
-- Ahmed types a one-off custom message to a client, he can opt in to save it
-- here so it always shows up alongside the built-in VAT/Zakat templates in
-- future messages, instead of being lost after that one send.
CREATE TABLE public.crm_message_templates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  label TEXT NOT NULL,
  message TEXT NOT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.crm_message_templates TO authenticated;
GRANT ALL ON public.crm_message_templates TO service_role;

ALTER TABLE public.crm_message_templates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins manage crm_message_templates" ON public.crm_message_templates FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::public.app_role))
  WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));
