
CREATE TABLE public.clients (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  national_id TEXT,
  company_name TEXT,
  commercial_register TEXT,
  tax_number TEXT,
  business_type TEXT,
  city TEXT DEFAULT 'الرياض',
  notes TEXT,
  status TEXT DEFAULT 'active',
  vat_registered BOOLEAN DEFAULT false,
  zakat_registered BOOLEAN DEFAULT false,
  vat_quarter TEXT,
  client_since DATE DEFAULT CURRENT_DATE,
  last_contact TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.clients TO authenticated;
GRANT ALL ON public.clients TO service_role;
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins manage clients" ON public.clients FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::public.app_role))
  WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));

CREATE TABLE public.client_tags (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id UUID REFERENCES public.clients(id) ON DELETE CASCADE,
  tag TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.client_tags TO authenticated;
GRANT ALL ON public.client_tags TO service_role;
ALTER TABLE public.client_tags ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins manage client_tags" ON public.client_tags FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::public.app_role))
  WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));

CREATE TABLE public.client_services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id UUID REFERENCES public.clients(id) ON DELETE CASCADE,
  service_id TEXT NOT NULL,
  service_name TEXT NOT NULL,
  start_date DATE,
  renewal_date DATE,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.client_services TO authenticated;
GRANT ALL ON public.client_services TO service_role;
ALTER TABLE public.client_services ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins manage client_services" ON public.client_services FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::public.app_role))
  WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));

CREATE TABLE public.whatsapp_log (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id UUID REFERENCES public.clients(id) ON DELETE CASCADE,
  message TEXT NOT NULL,
  sent_at TIMESTAMPTZ DEFAULT NOW(),
  message_type TEXT DEFAULT 'reminder'
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.whatsapp_log TO authenticated;
GRANT ALL ON public.whatsapp_log TO service_role;
ALTER TABLE public.whatsapp_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins manage whatsapp_log" ON public.whatsapp_log FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::public.app_role))
  WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));

CREATE TRIGGER clients_touch_updated_at
  BEFORE UPDATE ON public.clients
  FOR EACH ROW EXECUTE FUNCTION public.kb_touch_updated_at();
