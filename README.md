# cheats-apexlegends-.com

Static Astro site for Apex Legends cheats — multi-locale i18n (build sitemap EN-only until translations ship), blog, forum, status, and product pages.

**Maintainers:** soofiyanroooziroti, Cursor Agent

## Local dev

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env` and set `GEMINI_API_KEY` only if you run `npm run translate`.

## Build (English sitemap)

```bash
set PUBLIC_SITE_URL=https://cheatsapexlegends.com
npm run build:i18n-test
```

To include all locale URLs in `sitemap.xml` later: `set SITEMAP_ALL_LOCALES=1` before build.
