-- Maanu Learning (Aiden and Aliya's app) keeps its own data, separate from MA-learning's children.
-- Lives in the MA-learning Supabase project (lgfsihzhqxdglzhbbzrj), which already has public.touch_updated_at().
create table public.maanu_state (
  family_id uuid primary key default auth.uid() references auth.users (id) on delete cascade,
  state jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create trigger maanu_state_touch before update on public.maanu_state
for each row execute function public.touch_updated_at();

create table public.maanu_answers (
  id bigint generated always as identity primary key,
  family_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  learner text not null check (learner in ('aiden', 'aliya')),
  skill_id text not null check (char_length(skill_id) <= 40),
  correct boolean not null,
  score_after integer not null check (score_after between 0 and 100),
  created_at timestamptz not null default now()
);

create index maanu_answers_family_learner_created_idx on public.maanu_answers (family_id, learner, created_at desc);

alter table public.maanu_state enable row level security;
alter table public.maanu_answers enable row level security;

create policy "Families read their Maanu state" on public.maanu_state
  for select to authenticated using (family_id = (select auth.uid()));
create policy "Families create their Maanu state" on public.maanu_state
  for insert to authenticated with check (family_id = (select auth.uid()));
create policy "Families update their Maanu state" on public.maanu_state
  for update to authenticated using (family_id = (select auth.uid())) with check (family_id = (select auth.uid()));

create policy "Families read their Maanu answers" on public.maanu_answers
  for select to authenticated using (family_id = (select auth.uid()));
create policy "Families record Maanu answers" on public.maanu_answers
  for insert to authenticated with check (family_id = (select auth.uid()));

revoke all on public.maanu_state, public.maanu_answers from anon;
