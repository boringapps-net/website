# boringapps.net

The marketing site for [BoringApps.net](https://boringapps.net) — a small label run
by two Australian developers shipping native utilities for macOS, iOS, and Android.

Built with [React Router v7](https://reactrouter.com/) in framework mode,
[Tailwind CSS v4](https://tailwindcss.com/), and Vite. Prerenders to static HTML
on every route — no server runtime, no database. The built artefact is a folder
of files you can drop on any static host.

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build

```bash
npm run build        # emits build/client/
npm run typecheck    # router typegen + tsc --noEmit
```

`build/client/` is the deployable artefact — it contains prerendered HTML for every
route (`/`, `/about`, `/privacy`, `/terms`, and `/apps/:id` plus optional
`/apps/:id/privacy` / `/apps/:id/support` for apps that ship that content), the
favicon bundle, and per-app icons / screenshots copied from `public/`.

## Deploy

Pushes to `main` are built and deployed to GitHub Pages automatically — see
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The live site is at
[boringapps.net](https://boringapps.net) (CNAME → `boringapps-net.github.io`).

## Project layout

```
app/
├── root.tsx                 HTML shell, Header / Footer chrome, favicon links
├── routes.ts                explicit RouteConfig
├── routes/
│   ├── home.tsx             /
│   ├── app.tsx              /apps/:id           (loader → 404 on unknown id)
│   ├── app-privacy.tsx      /apps/:id/privacy
│   ├── app-support.tsx      /apps/:id/support
│   ├── about.tsx            /about
│   ├── privacy.tsx          /privacy
│   └── terms.tsx            /terms
├── components/
└── data/
    ├── apps.ts              the portfolio — single source of truth per app
    └── legal.ts             site-level privacy / terms / company info

public/
├── apps/<id>/icon.png       per-app icon used on the portfolio + detail page
├── apps/<id>/screenshots/   per-app screenshots
├── favicon.{svg,ico}        from app/assets/logo.svg
└── apple-touch-icon.png

react-router.config.ts       ssr: false + prerender list (auto-includes app routes)
```

## Adding a new app

1. Drop the icon at `public/apps/<id>/icon.png`.
2. Drop screenshots at `public/apps/<id>/screenshots/...`.
3. Add an entry to `app/data/apps.ts`. To host privacy / support pages for an
   App Store submission, populate the optional `privacyPolicy` / `support`
   fields — the corresponding routes appear automatically and get prerendered.

## Licence

The site source is published for transparency. The brand, the logo, and the app
imagery are not licensed for re-use — please don't fork this and re-skin it.
