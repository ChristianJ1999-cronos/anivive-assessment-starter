# Anivive — Technical Assessment

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). You should see a dashboard with a recent activity feed.

---

## Your Task

**Add a notifications panel to the application.**

An API endpoint at `GET /api/notifications` already exists and returns notification data. Users should be able to view their notifications and mark them as read.

As part of your implementation, include a `useEffect` in your notifications component that does something useful when the unread count changes — for example, updating the document title or reflecting the count somewhere in the UI.

That's the brief. How you interpret and implement it is up to you.

---

## Before You Start

Spend time reading the existing code before writing any. There are established patterns — the expectation is that your code looks like it belongs next to what's already here.

Things worth reading:

- `src/app/(main)/layout.tsx` — how the page shell is structured
- `src/components/header/` — a client component using Redux
- `src/components/activity-feed/` — a server component with async data fetching
- `src/components/sidebar/` — how collapsed state is read from Redux
- `src/redux/` — how the store, hooks, and slices are set up
- `src/hooks/` — any existing hooks
- `src/types/index.ts` — shared types

---

## Guidelines

- **3 hours max.** Stop when the time is up.
- **The build must pass.** Run `npm run build` before submitting and make sure it completes without errors.
- TypeScript strict mode is enabled — no `as any`, types must be correct.
- Follow the CSS conventions you see: SCSS modules, kebab-case class names, CSS variables for values, no inline `style` attributes.
- `"use client"` should only appear where you genuinely need it.
- The feature does not need to be visually polished, but it should be functional.

---

## Notes

Leave a brief `NOTES.md` explaining:

- Any decisions you made that were not obvious from the code
- What you would do differently with more time
- Anything you did not get to

---

## Submission

Click **Use this template** at the top of this repository to create your own copy, then share the link to your repo when you're done.
