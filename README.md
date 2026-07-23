# AdminHub — Admin Dashboard (Project 2)

A modern, responsive admin dashboard built with React, TypeScript, and Vite. Features a full suite of pages including dashboard analytics, user management, notifications, and settings — with light/dark mode support.

## Tech Stack

- **React 19** + **TypeScript** — strongly typed UI components
- **Vite** — fast dev server and build tooling
- **React Router v7** — client-side routing with protected routes
- **Recharts** — interactive charts (area, bar, line, pie, radial)
- **Lucide React** — clean, consistent icon set
- **CSS Variables** — theming with a full color system and dark mode

## Features

### Pages
1. **Login** — mock authentication gate (any email + password works)
2. **Dashboard** — KPI cards, revenue area chart, traffic pie chart, user activity chart, recent activity feed
3. **Analytics** — revenue trend line chart, sales-by-category bar chart, weekly activity bar chart, conversion funnel radial chart
4. **Users** — searchable, filterable, paginated data table with role/status badges and row actions
5. **Notifications** — filterable notification list with read/unread states and mark-all-read
6. **Settings** — toggle switches for notifications, security, and profile management

### Cross-cutting
- **Dark / Light mode** — persisted to localStorage, toggle in the topbar and login page
- **Responsive design** — sidebar collapses to an overlay drawer on mobile, grids reflow at breakpoints
- **Protected routes** — unauthenticated users are redirected to login
- **Design system** — 6+ color ramps (primary, secondary, accent, success, warning, error) plus neutrals, 8px spacing, consistent radius scale

## Getting Started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview the build
```

## Project Structure

```
src/
├── components/        # Reusable UI (Layout, Sidebar, Topbar, Card, KpiCard)
├── context/           # ThemeProvider + auth helpers
├── data/              # Mock data for all pages
├── pages/             # One file per route
├── styles/            # Component CSS
├── App.tsx            # Router + route definitions
├── main.tsx           # Entry point
└── index.css          # Global tokens + reset
```

## Design Decisions

- **CSS custom properties** drive all theming, so dark mode is a single `data-theme` attribute swap on `<html>` — no re-render needed for colors.
- **Mock data** lives in a single module (`data/mockData.ts`) so swapping to a real API later is a one-file change.
- **Auth is localStorage-based** for demo simplicity — the `RequireAuth` wrapper makes it trivial to replace with real Supabase/JWT auth later.

## Deliverables Checklist

- [x] Dashboard with KPI cards and multiple chart types
- [x] Analytics page with 4 chart variants
- [x] Users page with search, filter, pagination
- [x] Notifications page with read/unread management
- [x] Settings page with toggle switches
- [x] Login page with mock auth
- [x] Dark/light mode toggle (persisted)
- [x] Responsive layout (mobile sidebar drawer)
- [x] Protected routes
- [x] TypeScript strict mode, zero build errors
- [x] README documentation
