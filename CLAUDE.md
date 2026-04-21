# AUSH Consulting

## What this is
Full-stack Next.js 16 website for AUSH Consulting — an AI consulting agency.
- **Public site**: `/`, `/about`, `/services`, `/contact`
- **Admin backend**: `/admin`, `/admin/contacts`, `/admin/content`

## Tech Stack
- Next.js 16 App Router, TypeScript (strict)
- Tailwind CSS v4 (no tailwind.config — tokens in globals.css `@theme`)
- shadcn/ui with base-ui primitives
- Supabase (Auth + PostgreSQL) via `@supabase/ssr`
- Resend for transactional email
- Playwright for E2E tests
- Vercel for deployment

## Dev Commands
```bash
npm run dev        # Start dev server on :3000
npm run build      # Production build
npm run lint       # ESLint
npx playwright test              # All E2E tests
npx playwright test --ui         # Interactive test runner
npx playwright test --project="Desktop Chrome"  # Single viewport
```

## Database Setup
Run SQL files in order in Supabase SQL editor:
1. `supabase/migrations/001_schema.sql`
2. `supabase/migrations/002_rls.sql`
3. `supabase/migrations/003_seed.sql` (dev only)

## Creating an Admin User
1. Create user in Supabase Auth dashboard → Authentication → Users → Invite
2. After they set a password, run in Supabase SQL editor:
   ```sql
   UPDATE profiles SET role = 'admin' WHERE email = 'admin@example.com';
   ```

## Environment Variables
See `.env.example` for all required variables. Never commit `.env.local`.

## Key Architecture Decisions
- **Public pages** use ISR (`revalidate = 60`) — testimonials/services fetched from DB
- **`/api/contact`** uses Supabase service role key (bypasses RLS) — form submissions are unauthenticated
- **Server Actions** in `lib/actions/` always call `requireAdmin()` before touching data
- **Tailwind v4**: colors defined as `--color-aush-*` in `@theme inline` block of `globals.css`
- **Admin sidebar** hidden below `lg:` breakpoint

## Design System
Dark theme only. All colors use inline `style` props with hex values for reliability with Tailwind v4.
- Background: `#0C0C0E`
- Surface: `#111113`
- Accent (teal): `#00C2A8`
- Text: `#F5F5F5` / `#A1A1AA` / `#71717A`
- Border: `#1C1C1F`

Design benchmarks: Vercel, Linear, Attio.
