-- Publicly readable machine translations of built-in CMA questions.
-- Writes only through a server-held service-role key (never through a client).
create table if not exists public.cma_question_translations (
  question_id text primary key,
  source_hash text not null,
  question_ar text not null,
  choices_ar jsonb not null,
  explanation_ar text not null,
  status text not null default 'machine' check (status in ('machine', 'reviewed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint cma_translation_choices_are_four check (
    jsonb_typeof(choices_ar) = 'array' and jsonb_array_length(choices_ar) = 4
  ),
  constraint cma_translation_question_id_format check (
    question_id ~ '^cma-gleim-2025-vol[12]-su[0-9]+-s[0-9]+-q[0-9]{3}$'
  )
);

alter table public.cma_question_translations enable row level security;
revoke all on public.cma_question_translations from anon, authenticated;
grant select on public.cma_question_translations to anon, authenticated;
grant all on public.cma_question_translations to service_role;
drop policy if exists "Read CMA translations" on public.cma_question_translations;
create policy "Read CMA translations" on public.cma_question_translations
  for select to anon, authenticated using (true);

-- Server-only request audit / quota tracking. No public read/write policies.
create table if not exists public.cma_translation_requests (
  id bigint generated always as identity primary key,
  question_id text not null,
  user_id uuid not null references auth.users(id) on delete cascade,
  requested_at timestamptz not null default now()
);
create index if not exists cma_translation_requests_user_day
  on public.cma_translation_requests(user_id, requested_at);
create index if not exists cma_translation_requests_day
  on public.cma_translation_requests(requested_at);

alter table public.cma_translation_requests enable row level security;
revoke all on public.cma_translation_requests from anon, authenticated;
grant all on public.cma_translation_requests to service_role;

comment on table public.cma_question_translations is
  'Non-authoritative Arabic presentation translations; English source and correct answer remain canonical.';
comment on table public.cma_translation_requests is
  'Server-only quota audit; no user-facing question attempts or personal question answers stored.';
