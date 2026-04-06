# Anthony Leuterio | Real Estate Coaching Platform

A Next.js 15 application with Supabase backend for Anthony Leuterio's real estate coaching business.

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint
```

Visit `http://localhost:3000`

Copy `.env.example` to `.env.local` and add your Supabase URL and anon key before using auth or the dashboard.

---

## ☁ Production (Vercel)

Step-by-step deploy instructions, environment variables, and troubleshooting: **[VERCEL.md](./VERCEL.md)**.

---

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── (dashboard)/       # Protected dashboard routes
│   ├── (public)/          # Public pages (coaching, programs, etc.)
│   └── api/               # API routes
├── src/
│   ├── components/        # React components
│   ├── context/           # React context providers
│   ├── hooks/             # Custom hooks
│   ├── lib/               # Utilities (Supabase, CMS)
│   └── middleware.ts      # Auth middleware
├── supabase/              # Database schemas
└── public/                # Static assets
```

---

## 🔐 Authentication

- Powered by **Supabase Auth** with SSR support
- Dashboard routes protected by middleware
- Login at `/login`

---

## 🛠 Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Supabase** (Database & Auth)
- **Framer Motion**
- **Lucide React**

---

## 🗄 Supabase Setup

1. Create a project on [Supabase.com](https://supabase.com)
2. Run `supabase/supabase_schema.sql` in the SQL Editor
3. Run `node supabase/init_supabase.js` to initialize the admin user (after configuring the service role key)
4. In the Supabase dashboard, open **Project Settings → API** and copy **Project URL** and the **anon public** key into `.env.local` (see `.env.example`). Do not commit secrets to git.

### 👤 Admin user

After running `node supabase/init_supabase.js` with your **service role** key configured, sign in with the admin account you created (not committed here). If credentials were ever exposed in git history, rotate keys in Supabase and update Vercel/local env.

---

## 📝 Routes

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/coaching` | Coaching Overview |
| `/coaching/core` | Core Coaching |
| `/coaching/programs` | Programs |
| `/coaching/testimonials` | Testimonials |
| `/programs/bootcamp` | Prospecting Bootcamp |
| `/programs/leads-accelerator` | Leads Accelerator |
| `/programs/roadmap` | Recruiting Roadmap |
| `/coaches` | Our Coaches |
| `/blog` | Blog |
| `/about` | Biography |
| `/dashboard` | Dashboard (Protected) |
| `/properties` | Properties (Protected) |
| `/settings` | CMS Settings (Protected) |
| `/login` | Login |

---

© 2026 Anthony Leuterio. All rights reserved.
