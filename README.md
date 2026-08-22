# AmogaDS — System Design Suite

A dedicated Next.js application containing the complete System Design Component Gallery, interactive previews, theme configuration drawer, and full authentication flow (NextAuth with Google OAuth + Supabase Auth).

## Features

- **System Design Gallery**: Full interactive component catalog, responsive viewport previewers (Desktop, Tablet, Mobile), category filters, and live code snippet copy.
- **Authentication**: Email/password, Mobile SMS OTP, and Google OAuth via NextAuth & Supabase Auth.
- **Sidebar Layout**: Single "System Design" overview item, custom App Logo, toggle control, and user profile with Theme & Settings controls.
- **Modern Tech Stack**: Next.js 16 (App Router), React 19, Tailwind CSS v4, Lucide React, Radix UI primitives, Supabase SSR, NextAuth.

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure environment variables**:
   Copy `.env.example` to `.env.local` and provide your Supabase & Google OAuth credentials:
   ```bash
   cp .env.example .env.local
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.
