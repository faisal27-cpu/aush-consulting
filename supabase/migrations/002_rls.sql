-- Migration 002: Row Level Security

create or replace function public.is_admin()
returns boolean as $$
  select exists (
    select 1 from public.profiles
    where user_id = auth.uid()
    and role = 'admin'
  );
$$ language sql security definer stable;

-- profiles RLS
alter table public.profiles enable row level security;

create policy "profiles: user reads own"
  on public.profiles for select
  using (user_id = auth.uid());

create policy "profiles: admin reads all"
  on public.profiles for select
  using (public.is_admin());

create policy "profiles: user updates own"
  on public.profiles for update
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

-- contact_submissions RLS
alter table public.contact_submissions enable row level security;

create policy "submissions: admin reads all"
  on public.contact_submissions for select
  using (public.is_admin());

create policy "submissions: admin updates"
  on public.contact_submissions for update
  using (public.is_admin());

-- Inserts come via service_role key in API route — bypasses RLS

-- testimonials RLS
alter table public.testimonials enable row level security;

create policy "testimonials: public reads active"
  on public.testimonials for select
  using (is_active = true);

create policy "testimonials: admin reads all"
  on public.testimonials for select
  using (public.is_admin());

create policy "testimonials: admin inserts"
  on public.testimonials for insert
  with check (public.is_admin());

create policy "testimonials: admin updates"
  on public.testimonials for update
  using (public.is_admin());

create policy "testimonials: admin deletes"
  on public.testimonials for delete
  using (public.is_admin());

-- services RLS
alter table public.services enable row level security;

create policy "services: public reads active"
  on public.services for select
  using (is_active = true);

create policy "services: admin reads all"
  on public.services for select
  using (public.is_admin());

create policy "services: admin inserts"
  on public.services for insert
  with check (public.is_admin());

create policy "services: admin updates"
  on public.services for update
  using (public.is_admin());

create policy "services: admin deletes"
  on public.services for delete
  using (public.is_admin());
