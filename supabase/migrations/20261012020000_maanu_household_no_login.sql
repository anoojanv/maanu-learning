-- Maanu Learning without a login: one household row, reached only through
-- functions that require its key. Tables have RLS on and no policies, so the
-- public key cannot read or list them directly. The household row itself is
-- created by hand (insert into public.maanu_household (key) values ('...')),
-- so nobody can create new households through the API.
create table public.maanu_household (
  key text primary key check (char_length(key) >= 32),
  state jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table public.maanu_household_answers (
  id bigint generated always as identity primary key,
  household text not null references public.maanu_household (key) on delete cascade,
  learner text not null check (learner in ('aiden', 'aliya')),
  skill_id text not null check (char_length(skill_id) <= 40),
  correct boolean not null,
  score_after integer not null check (score_after between 0 and 100),
  created_at timestamptz not null default now()
);

create index maanu_household_answers_lookup_idx on public.maanu_household_answers (household, learner, created_at desc);

alter table public.maanu_household enable row level security;
alter table public.maanu_household_answers enable row level security;
revoke all on public.maanu_household, public.maanu_household_answers from anon, authenticated;

create function public.maanu_load(p_key text) returns jsonb
language sql stable security definer set search_path = ''
as $$
  select state from public.maanu_household where key = p_key
$$;

-- Saves only to an existing household; returns false for an unknown key.
create function public.maanu_save(p_key text, p_state jsonb) returns boolean
language plpgsql security definer set search_path = ''
as $$
begin
  if pg_column_size(p_state) > 512000 then
    raise exception 'state too large';
  end if;
  update public.maanu_household set state = p_state, updated_at = now() where key = p_key;
  return found;
end;
$$;

create function public.maanu_log_answer(p_key text, p_learner text, p_skill text, p_correct boolean, p_score integer) returns void
language sql security definer set search_path = ''
as $$
  insert into public.maanu_household_answers (household, learner, skill_id, correct, score_after)
  select key, p_learner, p_skill, p_correct, p_score from public.maanu_household where key = p_key
$$;

create function public.maanu_recent_answers(p_key text, p_learner text, p_since timestamptz)
returns table (skill_id text, correct boolean, created_at timestamptz)
language sql stable security definer set search_path = ''
as $$
  select a.skill_id, a.correct, a.created_at
  from public.maanu_household_answers a
  where a.household = p_key and a.learner = p_learner and a.created_at >= p_since
  order by a.created_at
  limit 5000
$$;

revoke all on function public.maanu_load(text), public.maanu_save(text, jsonb),
  public.maanu_log_answer(text, text, text, boolean, integer),
  public.maanu_recent_answers(text, text, timestamptz) from public;
grant execute on function public.maanu_load(text), public.maanu_save(text, jsonb),
  public.maanu_log_answer(text, text, text, boolean, integer),
  public.maanu_recent_answers(text, text, timestamptz) to anon, authenticated;
