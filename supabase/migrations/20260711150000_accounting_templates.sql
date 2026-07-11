-- Admin-manageable "ready accounting templates" library, replacing the
-- hardcoded TEMPLATES array previously in src/routes/library.templates.tsx
-- so Ahmed can add/edit/remove templates (including uploading the actual
-- Word/Excel file) from /admin/templates without touching code.

CREATE TABLE public.accounting_templates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_ar text NOT NULL,
  title_en text NOT NULL,
  description_ar text NOT NULL,
  description_en text NOT NULL,
  how_to_use_ar text,
  how_to_use_en text,
  category text NOT NULL DEFAULT 'tools'
    CHECK (category IN ('tax','declarations','financial','vouchers','tools')),
  format text NOT NULL DEFAULT 'Excel' CHECK (format IN ('Excel','Word')),
  pages int NOT NULL DEFAULT 1,
  is_new boolean NOT NULL DEFAULT false,
  is_official boolean NOT NULL DEFAULT false,
  related_standard text,
  file_url text,
  preview_fields text[] NOT NULL DEFAULT '{}',
  sort_order int NOT NULL DEFAULT 0,
  is_published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.accounting_templates TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.accounting_templates TO authenticated;
GRANT ALL ON public.accounting_templates TO service_role;

ALTER TABLE public.accounting_templates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "accounting_templates_read_published" ON public.accounting_templates
  FOR SELECT TO public USING (is_published = true);
CREATE POLICY "accounting_templates_admin_read_all" ON public.accounting_templates
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'::app_role));
CREATE POLICY "accounting_templates_admin_insert" ON public.accounting_templates
  FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(),'admin'::app_role));
CREATE POLICY "accounting_templates_admin_update" ON public.accounting_templates
  FOR UPDATE TO authenticated USING (public.has_role(auth.uid(),'admin'::app_role));
CREATE POLICY "accounting_templates_admin_delete" ON public.accounting_templates
  FOR DELETE TO authenticated USING (public.has_role(auth.uid(),'admin'::app_role));

CREATE TRIGGER accounting_templates_touch
  BEFORE UPDATE ON public.accounting_templates
  FOR EACH ROW EXECUTE FUNCTION public.kb_touch_updated_at();

CREATE INDEX idx_accounting_templates_category ON public.accounting_templates(category);
CREATE INDEX idx_accounting_templates_published ON public.accounting_templates(is_published);

-- Public bucket for the uploaded template files (Word/Excel) — public so the
-- existing "download directly" UX keeps working without signed URLs.
INSERT INTO storage.buckets (id, name, public)
VALUES ('template-files', 'template-files', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "template_files_public_read" ON storage.objects
  FOR SELECT USING (bucket_id = 'template-files');

CREATE POLICY "template_files_admin_write" ON storage.objects
  FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'template-files' AND public.has_role(auth.uid(),'admin'::app_role));

CREATE POLICY "template_files_admin_update" ON storage.objects
  FOR UPDATE TO authenticated
  USING (bucket_id = 'template-files' AND public.has_role(auth.uid(),'admin'::app_role));

CREATE POLICY "template_files_admin_delete" ON storage.objects
  FOR DELETE TO authenticated
  USING (bucket_id = 'template-files' AND public.has_role(auth.uid(),'admin'::app_role));

-- ============ Seed: migrate the 13 existing hardcoded templates + 7 new
-- ones covering the most commonly searched-for accounting forms (receipt/
-- payment vouchers, purchase order, quotation, payroll register, trial
-- balance, petty cash log) to reach a curated top-20 library. ============

INSERT INTO public.accounting_templates
  (title_ar, title_en, description_ar, description_en, how_to_use_ar, how_to_use_en,
   category, format, pages, is_new, is_official, related_standard, file_url, preview_fields, sort_order)
VALUES
(
  'نموذج إقرار ضريبة القيمة المضافة VAT', 'VAT Return Template',
  'نموذج Excel جاهز لإعداد الإقرار الضريبي الربع سنوي، يشمل جدول المبيعات والمشتريات وحساب الضريبة الصافية تلقائياً وفق متطلبات زاتكا.',
  'Ready Excel template for quarterly VAT return preparation, includes sales/purchases schedule and automatic net tax calculation per ZATCA requirements.',
  E'1. أدخل بيانات المبيعات الخاضعة للضريبة في الجدول الأول\n2. أدخل بيانات المشتريات في الجدول الثاني\n3. سيحسب النموذج الضريبة الصافية تلقائياً\n4. انقل الأرقام النهائية إلى منصة زاتكا عند التقديم',
  E'1. Enter taxable sales in the first table\n2. Enter purchases in the second table\n3. Net tax is calculated automatically\n4. Transfer final figures to ZATCA portal when submitting',
  'tax', 'Excel', 3, true, true, 'ZATCA VAT', NULL,
  ARRAY['إجمالي المبيعات','ضريبة المخرجات','ضريبة المدخلات','صافي الضريبة'], 0
),
(
  'نموذج الإقرار الزكوي السنوي', 'Annual Zakat Return Template',
  'نموذج Excel لحساب وعاء الزكاة السنوي للشركات والمؤسسات، يشمل الأصول الزكوية والخصوم والنسبة المستحقة وفق متطلبات هيئة الزكاة.',
  'Excel template to calculate the annual zakat base for companies and establishments.',
  E'1. أدخل قيم الأصول الزكوية من الميزانية\n2. أدخل الالتزامات المخصومة\n3. سيحسب النموذج الوعاء والزكاة المستحقة تلقائياً\n4. راجع الأرقام مع محاسبك قبل التقديم',
  E'1. Enter zakat assets from balance sheet\n2. Enter deductible liabilities\n3. Template auto-calculates base and due zakat\n4. Review with your accountant before submission',
  'tax', 'Excel', 2, false, true, 'ZATCA Zakat', NULL,
  ARRAY['الأصول الزكوية','الخصوم المخصومة','وعاء الزكاة','الزكاة المستحقة (2.5%)'], 1
),
(
  'قائمة استعداد الإقرار الضريبي — VAT + زكاة', 'Tax Return Readiness Checklist',
  'قائمة مرجعية Excel تشمل جميع متطلبات إقرار VAT الربع سنوي وإقرار الزكاة السنوي والضريبة المستقطعة، مع جدول المواعيد والغرامات.',
  'Comprehensive checklist covering VAT, Zakat, and WHT requirements with deadlines and penalties.',
  E'1. طباعة القائمة أو فتحها قبل كل إقرار\n2. علّم على كل بند بعد إتمامه\n3. تأكد من اكتمال جميع البنود قبل التقديم\n4. احتفظ بنسخة موقعة كمرجع',
  E'1. Print or open before each declaration\n2. Check each item after completion\n3. Ensure all items are done before submission\n4. Keep a signed copy as reference',
  'tax', 'Excel', 1, true, false, 'ZATCA', NULL,
  ARRAY['بنود VAT','بنود الزكاة','المواعيد','الغرامات'], 2
),
(
  'خطاب إقرار وتعهد بعدم وجود نشاط', 'No Activity Declaration Letter',
  'نموذج Word رسمي للإقرار بعدم ممارسة أي نشاط تجاري خلال فترة محددة، يُستخدم للجهات الحكومية والبنوك وهيئة الزكاة.',
  'Official Word template declaring no business activity during a specified period.',
  E'1. افتح النموذج وعدّل بيانات الشركة في الحقول المحددة\n2. حدد الفترة الزمنية المقصودة\n3. اطبع على ورق الشركة الرسمي\n4. وقّع وختم من المفوض بالتوقيع',
  E'1. Open template and update company details\n2. Specify the time period\n3. Print on official company letterhead\n4. Sign and stamp by authorized signatory',
  'declarations', 'Word', 1, false, false, NULL, NULL,
  ARRAY['اسم الشركة','رقم السجل التجاري','الفترة الزمنية','التوقيع والختم'], 3
),
(
  'إقرار عدم تعيين مراجع حسابات', 'No Auditor Appointment Declaration',
  'نموذج Word رسمي يُقر فيه صاحب المنشأة بعدم وجود مراجع حسابات معين، يُطلب عند تسجيل بعض الخدمات أو إغلاق السجل التجاري.',
  'Official Word template declaring no appointed auditor.',
  E'1. أدخل بيانات الشركة والمسؤول\n2. حدد السبب من عدم التعيين\n3. اطبع وارفق بالمعاملة المطلوبة\n4. وقّع أمام الجهة الرسمية إن لزم',
  E'1. Enter company and responsible person details\n2. State reason for no appointment\n3. Print and attach to required transaction\n4. Sign before official entity if required',
  'declarations', 'Word', 1, false, false, NULL, NULL,
  ARRAY['بيانات الشركة','بيانات المفوض','سبب عدم التعيين','التوقيع'], 4
),
(
  'خطاب تفويض محاسب قانوني', 'CPA Authorization Letter',
  'نموذج Word لتفويض محاسب قانوني للتعامل مع هيئة الزكاة والضريبة والجمارك أو الجهات المالية نيابةً عن الشركة.',
  'Word template authorizing a CPA to deal with ZATCA or financial entities on behalf of the company.',
  E'1. أدخل بيانات الشركة وبيانات المحاسب المفوَّض\n2. حدد صلاحيات التفويض بدقة\n3. حدد مدة التفويض\n4. اطبع على ورق الشركة ووقّع وختم',
  E'1. Enter company and authorized accountant details\n2. Specify authorization scope precisely\n3. Set authorization period\n4. Print on letterhead, sign and stamp',
  'declarations', 'Word', 1, true, false, 'ZATCA', NULL,
  ARRAY['بيانات الشركة','بيانات المحاسب','نطاق الصلاحيات','مدة التفويض'], 5
),
(
  'نموذج القوائم المالية المفرّغ', 'Blank Financial Statements Template',
  'نموذج Word شامل ومُفرّغ للقوائم المالية الأساسية (المركز المالي، الدخل، التدفقات النقدية، حقوق الملكية) — جاهز للتعبئة وفق معايير IFRS.',
  'Comprehensive blank Word template for primary financial statements (balance sheet, income, cash flow, equity) ready for IFRS-compliant fill-in.',
  E'1. حمّل النموذج وافتحه في Word\n2. عبّئ بيانات الشركة في الترويسة\n3. أدخل أرقام كل قائمة في الجداول المخصصة\n4. راجع التوازن قبل الإرسال للاعتماد',
  E'1. Download and open in Word\n2. Fill company details in header\n3. Enter figures into each statement''s table\n4. Verify balances before approval',
  'financial', 'Word', 6, true, false, 'IFRS', NULL,
  ARRAY['المركز المالي','قائمة الدخل','التدفقات النقدية','حقوق الملكية'], 6
),
(
  'نموذج قائمة المركز المالي (الميزانية)', 'Balance Sheet Template',
  'نموذج Excel جاهز لإعداد قائمة المركز المالي وفق معايير IFRS، يشمل الأصول المتداولة وغير المتداولة والخصوم وحقوق الملكية بتنسيق احترافي.',
  'Excel template for balance sheet preparation per IFRS standards.',
  E'1. أدخل أرصدة الحسابات من ميزان المراجعة\n2. تحقق من توازن الأصول مع الخصوم وحقوق الملكية\n3. طبّق معادلة: الأصول = الخصوم + حقوق الملكية\n4. صدّر بصيغة PDF للتقارير الرسمية',
  E'1. Enter account balances from trial balance\n2. Verify assets equal liabilities plus equity\n3. Apply: Assets = Liabilities + Equity\n4. Export as PDF for official reports',
  'financial', 'Excel', 1, false, false, 'IAS 1', NULL,
  ARRAY['الأصول المتداولة','الأصول غير المتداولة','الخصوم','حقوق الملكية'], 7
),
(
  'نموذج قائمة الدخل الشامل', 'Comprehensive Income Statement',
  'نموذج Excel لإعداد قائمة الدخل الشامل وفق IAS 1، يشمل الإيرادات والمصروفات وإجمالي الربح وصافي الدخل وبنود الدخل الشامل الآخر.',
  'Excel template for comprehensive income statement per IAS 1.',
  E'1. أدخل الإيرادات التشغيلية وغير التشغيلية\n2. أدخل تكلفة البضاعة المباعة والمصروفات\n3. سيحسب النموذج إجمالي الربح وصافي الدخل تلقائياً\n4. أضف بنود الدخل الشامل الآخر إن وجدت',
  E'1. Enter operating and non-operating revenues\n2. Enter COGS and expenses\n3. Template auto-calculates gross profit and net income\n4. Add OCI items if applicable',
  'financial', 'Excel', 1, false, false, 'IAS 1', NULL,
  ARRAY['الإيرادات','تكلفة المبيعات','مجمل الربح','صافي الدخل'], 8
),
(
  'نموذج قائمة التدفقات النقدية', 'Cash Flow Statement Template',
  'نموذج Excel لإعداد قائمة التدفقات النقدية بالطريقة الغير مباشرة وفق IAS 7، يشمل التدفقات التشغيلية والاستثمارية والتمويلية.',
  'Excel template for indirect cash flow statement per IAS 7.',
  E'1. ابدأ بصافي الربح من قائمة الدخل\n2. أضف التعديلات للبنود غير النقدية\n3. أدخل التغيرات في رأس المال العامل\n4. أضف التدفقات الاستثمارية والتمويلية',
  E'1. Start with net profit\n2. Add adjustments for non-cash items\n3. Enter working capital changes\n4. Add investing and financing flows',
  'financial', 'Excel', 1, false, false, 'IAS 7', NULL,
  ARRAY['التدفقات التشغيلية','التدفقات الاستثمارية','التدفقات التمويلية','صافي التغير النقدي'], 9
),
(
  'فاتورة ضريبية متوافقة مع زاتكا', 'ZATCA-Compliant Tax Invoice',
  'نموذج Excel لإصدار فواتير ضريبية متوافقة مع متطلبات زاتكا، يشمل جميع الحقول الإلزامية: رقم السجل الضريبي، نسبة VAT 15%، والإجمالي شامل الضريبة.',
  'Excel template for ZATCA-compliant tax invoices.',
  E'1. أدخل بيانات الشركة في الرأسية\n2. أدخل بيانات العميل والمنتجات/الخدمات\n3. سيحسب النموذج VAT وإجمالي الفاتورة تلقائياً\n4. طبع أو صدّر PDF وارسل للعميل',
  E'1. Enter company details in header\n2. Enter client info and products\n3. Template auto-calculates VAT and total\n4. Print or export PDF',
  'vouchers', 'Excel', 1, true, true, 'ZATCA', NULL,
  ARRAY['بيانات البائع','بيانات المشتري','المنتجات والكميات','VAT 15%'], 10
),
(
  'جدول إهلاك الأصول الثابتة', 'Fixed Assets Depreciation Schedule',
  'نموذج Excel لحساب إهلاك الأصول الثابتة بطرق متعددة: القسط الثابت، المتناقص، وعدد الوحدات، مع جدول تتبع القيمة الدفترية لكل أصل.',
  'Excel template for fixed asset depreciation using multiple methods.',
  E'1. أدخل بيانات الأصل: التكلفة، القيمة التخريدية، العمر الإنتاجي\n2. اختر طريقة الإهلاك\n3. سيولّد النموذج جدول الإهلاك الكامل تلقائياً\n4. استخدم الأرقام في القيود المحاسبية الشهرية',
  E'1. Enter asset data\n2. Select depreciation method\n3. Template auto-generates schedule\n4. Use in monthly entries',
  'tools', 'Excel', 2, false, false, 'IAS 16', NULL,
  ARRAY['تكلفة الأصل','العمر الإنتاجي','طريقة الإهلاك','القيمة الدفترية'], 11
),
(
  'نموذج التسوية البنكية', 'Bank Reconciliation Template',
  'نموذج Excel لإجراء التسوية الشهرية بين رصيد كشف الحساب البنكي ورصيد دفتر النقدية، مع تتبع الشيكات المعلقة والإيداعات قيد التحصيل.',
  'Excel template for monthly bank reconciliation.',
  E'1. أدخل رصيد كشف البنك في نهاية الشهر\n2. أضف/اطرح التعديلات على رصيد البنك\n3. أدخل رصيد دفتر النقدية وعدّله\n4. يجب أن يتساوى الرصيدان المعدلان',
  E'1. Enter bank ending balance\n2. Adjust bank balance\n3. Enter and adjust cash book\n4. Both balances must match',
  'tools', 'Excel', 1, false, false, NULL, NULL,
  ARRAY['رصيد البنك','شيكات معلقة','إيداعات قيد التحصيل','الرصيد المعدل'], 12
),
(
  'نموذج سند قبض', 'Cash Receipt Voucher Template',
  'نموذج Word وExcel لإثبات استلام الشركة مبلغاً نقدياً من عميل أو مدين، يشمل اسم الدافع والمبلغ بالأرقام والحروف وسبب الاستلام والتوقيع.',
  'Word/Excel template documenting cash received from a customer or debtor.',
  E'1. أدخل اسم الدافع والتاريخ\n2. أدخل المبلغ بالأرقام والحروف\n3. اذكر سبب الاستلام (سداد فاتورة، دفعة مقدمة...)\n4. وقّع من المستلم وسلّم نسخة للدافع',
  E'1. Enter payer name and date\n2. Enter amount in figures and words\n3. State the reason for receipt\n4. Sign and give a copy to the payer',
  'vouchers', 'Word', 1, true, false, NULL, NULL,
  ARRAY['اسم الدافع','المبلغ بالأرقام والحروف','سبب الاستلام','التوقيع'], 13
),
(
  'نموذج سند صرف', 'Payment Voucher Template',
  'نموذج Word وExcel لإثبات صرف مبلغ نقدي لمورد أو موظف أو أي طرف آخر، يشمل اسم المستفيد والمبلغ وسبب الصرف وتوقيع المعتمد.',
  'Word/Excel template documenting a cash payment made to a supplier, employee, or other party.',
  E'1. أدخل اسم المستفيد والتاريخ\n2. أدخل المبلغ بالأرقام والحروف\n3. اذكر سبب الصرف وربطه بالمستند المرجعي\n4. اعتماد وتوقيع المسؤول المالي',
  E'1. Enter payee name and date\n2. Enter amount in figures and words\n3. State the reason and reference document\n4. Approval and signature by finance officer',
  'vouchers', 'Word', 1, true, false, NULL, NULL,
  ARRAY['اسم المستفيد','المبلغ بالأرقام والحروف','سبب الصرف','اعتماد الصرف'], 14
),
(
  'نموذج أمر شراء', 'Purchase Order Template',
  'نموذج Excel لإصدار أوامر الشراء للموردين، يشمل بيانات المورد والأصناف والكميات والأسعار وشروط التسليم والدفع.',
  'Excel template for issuing purchase orders to suppliers.',
  E'1. أدخل بيانات المورد ورقم أمر الشراء\n2. أضف الأصناف والكميات والأسعار\n3. حدد شروط التسليم والدفع\n4. اعتمد الأمر وأرسله للمورد',
  E'1. Enter supplier details and PO number\n2. Add items, quantities, and prices\n3. Specify delivery and payment terms\n4. Approve and send to supplier',
  'vouchers', 'Excel', 1, true, false, NULL, NULL,
  ARRAY['بيانات المورد','الأصناف والكميات','الأسعار','شروط التسليم'], 15
),
(
  'نموذج عرض سعر', 'Price Quotation Template',
  'نموذج Word وExcel احترافي لإعداد عروض الأسعار للعملاء، يشمل تفاصيل المنتجات أو الخدمات والأسعار ومدة صلاحية العرض.',
  'Professional Word/Excel template for preparing client price quotations.',
  E'1. أدخل بيانات العميل ورقم العرض\n2. أضف المنتجات أو الخدمات والأسعار\n3. حدد مدة صلاحية العرض وشروط الدفع\n4. أرسل العرض للعميل موقعاً',
  E'1. Enter client details and quotation number\n2. Add products/services and prices\n3. Set validity period and payment terms\n4. Send the signed quotation to the client',
  'vouchers', 'Word', 1, false, false, NULL, NULL,
  ARRAY['بيانات العميل','المنتجات/الخدمات','الأسعار','مدة الصلاحية'], 16
),
(
  'كشف رواتب الموظفين', 'Employee Payroll Register',
  'نموذج Excel شامل لإعداد كشف رواتب شهري يضم الراتب الأساسي والبدلات واشتراكات التأمينات الاجتماعية GOSI والخصومات وصافي الراتب لكل موظف.',
  'Comprehensive Excel template for a monthly payroll register including basic salary, allowances, GOSI contributions, deductions, and net pay per employee.',
  E'1. أدخل بيانات الموظفين والراتب الأساسي والبدلات\n2. سيحسب النموذج اشتراك التأمينات (GOSI) تلقائياً\n3. أضف أي خصومات أخرى (سلف، غياب...)\n4. راجع صافي الرواتب قبل الاعتماد والصرف',
  E'1. Enter employee data, basic salary, and allowances\n2. GOSI contributions are calculated automatically\n3. Add any other deductions\n4. Review net pay before approval and disbursement',
  'vouchers', 'Excel', 2, true, false, 'GOSI', NULL,
  ARRAY['الراتب الأساسي','البدلات','اشتراك GOSI','صافي الراتب'], 17
),
(
  'نموذج ميزان المراجعة', 'Trial Balance Template',
  'نموذج Excel لإعداد ميزان المراجعة قبل إقفال الفترة، يعرض أرصدة جميع الحسابات المدينة والدائنة والتحقق من توازنها قبل إعداد القوائم المالية.',
  'Excel template for preparing a trial balance before period close, listing all debit and credit balances and verifying they balance before financial statements are prepared.',
  E'1. انسخ أرصدة الحسابات الختامية من دفتر الأستاذ\n2. صنّف كل رصيد كمدين أو دائن\n3. سيتحقق النموذج من تساوي إجمالي المدين مع الدائن\n4. استخدم الميزان كأساس لإعداد القوائم المالية',
  E'1. Copy closing account balances from the general ledger\n2. Classify each balance as debit or credit\n3. The template verifies total debits equal total credits\n4. Use the trial balance as the basis for financial statements',
  'financial', 'Excel', 1, false, false, 'IAS 1', NULL,
  ARRAY['اسم الحساب','مدين','دائن','الإجمالي'], 18
),
(
  'سجل العهدة النقدية (المصروفات النثرية)', 'Petty Cash Log Template',
  'نموذج Excel لتتبع حركة العهدة النقدية اليومية للمصروفات الصغيرة، يشمل الرصيد الافتتاحي والمصروفات المدعومة بالفواتير والرصيد الختامي.',
  'Excel template for tracking daily petty cash movements for small expenses, including opening balance, receipted expenses, and closing balance.',
  E'1. أدخل الرصيد الافتتاحي للعهدة\n2. سجّل كل مصروف نثري مع رقم الفاتورة والتاريخ\n3. سيحسب النموذج الرصيد الختامي تلقائياً\n4. اطلب تغذية العهدة عند الوصول للحد الأدنى',
  E'1. Enter the opening petty cash balance\n2. Log each small expense with receipt number and date\n3. Closing balance is calculated automatically\n4. Request replenishment when reaching the minimum threshold',
  'tools', 'Excel', 1, false, false, NULL, NULL,
  ARRAY['الرصيد الافتتاحي','المصروفات النثرية','رقم الفاتورة','الرصيد الختامي'], 19
);
