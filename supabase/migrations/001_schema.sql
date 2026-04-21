-- Migration 001: Schema
-- Run in Supabase SQL editor

create extension if not exists "uuid-ossp";

-- profiles
create table public.profiles (
  id         uuid primary key default uuid_generate_v4(),
  user_id    uuid references auth.users(id) on delete cascade not null unique,
  full_name  text not null default '',
  email      text not null unique,
  role       text not null default 'visitor' check (role in ('admin', 'visitor')),
  created_at timestamptz not null default now()
);

create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (user_id, full_name, email)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    new.email
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- contact_submissions
create table public.contact_submissions (
  id               uuid primary key default uuid_generate_v4(),
  name             text not null,
  email            text not null,
  company          text,
  service_interest text not null,
  message          text not null,
  status           text not null default 'unread' check (status in ('unread', 'read', 'responded')),
  notes            text,
  created_at       timestamptz not null default now()
);

create index idx_submissions_status on public.contact_submissions(status);
create index idx_submissions_created_at on public.contact_submissions(created_at desc);

-- testimonials
create table public.testimonials (
  id             uuid primary key default uuid_generate_v4(),
  author_name    text not null,
  author_role    text not null,
  author_company text not null,
  content        text not null,
  is_active      boolean not null default true,
  created_at     timestamptz not null default now()
);

-- services
create table public.services (
  id          uuid primary key default uuid_generate_v4(),
  name        text not null,
  description text not null,
  features    jsonb not null default '[]',
  tier        text not null check (tier in ('starter', 'growth', 'enterprise')),
  price       text not null,
  is_active   boolean not null default true,
  sort_order  integer not null default 0,
  created_at  timestamptz not null default now()
);

create index idx_services_tier on public.services(tier);
create index idx_services_active on public.services(is_active);
