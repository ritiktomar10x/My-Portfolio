# ritiktomar.dev

My personal portfolio. A single-page, terminal-flavored site built from scratch — no template, no theme, no portfolio-builder.

## Why it looks like this

I didn't want another card-grid, gradient-text, "Hi, I'm a developer 👋" page. The site borrows from the tools I actually use all day — a terminal, a CLI, `git log` — and treats that as the visual language instead of decoration bolted on top. A few of the details that took longer than they look:

- The Hero command box isn't just a code snippet — clicking it types out a real boot sequence (`npx ritikdotdev` → resolving → connected → profile), built with cancelable timeouts and an `Escape`-to-close handler, not a GIF.
- The contribution graph is a real GitHub pull at request time (`app/lib/github.ts`), not a static image — total contributions, streaks, and busiest day are all computed server-side from the actual data.
- The visitor counter is backed by Upstash Redis with a cookie-deduped increment, and degrades to rendering nothing (not a broken `0` or a console error) if the env vars aren't set.
- Every hover/press state follows one rule: a flat, non-blurred offset shadow that collapses toward zero on interaction — no soft glows, no `box-shadow` blur, anywhere.
- Motion respects `prefers-reduced-motion` throughout — reveals, the typed terminal sequence, the marquee — each with a real fallback, not just `animation: none`.

## Stack

- [Next.js 16](https://nextjs.org) — App Router, Turbopack, React Server Components
- [React 19](https://react.dev) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Upstash Redis](https://upstash.com) — visitor counter persistence
- Space Grotesk (voice) + JetBrains Mono (system) via `next/font`

## Running it locally

```bash
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000).

The visitor counter needs two env vars in `.env.local` to do anything — without them the counter component just doesn't render, nothing breaks:

```bash
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

Everything else (GitHub contributions, the resume link, the social links) works with zero config.

## Structure

```
app/
├── api/visitor/route.ts   # Redis-backed, cookie-deduped visitor count
├── components/            # one file per section — no shared "UI kit" abstraction
├── lib/
│   ├── github.ts          # contribution-graph data fetch
│   └── color.ts           # hex → rgba helper for accent-tinted shadows
├── layout.tsx             # fonts, metadata, the CRT scanline overlay
└── page.tsx               # section order, nothing else
```

There's no component library, no design-token build step — the design system lives directly in the Tailwind classes, kept consistent by convention rather than abstraction. For a page this size, that's a feature, not a shortcut.

## Scripts

| Command | Does |
|---|---|
| `npm run dev` | Local dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint via `eslint-config-next` |

---

Built and maintained by [Ritik Tomar](https://github.com/ritiktomar10x).
