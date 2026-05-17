# Bayt al-Tareekh: The Living History Library

A professional historical digital library MVP for real books, verified metadata, public-domain/open-license source links, maps, manuscripts, timelines, biographies, Urdu support, and citation-aware reading.

## Core principle

The platform must not present fake AI-written history as original content. AI sections are clearly labeled as summaries and must point readers back to source records, rights statements, citations, books, maps, and image attributions.

## MVP features

- Premium archive homepage with hero search, quick categories, featured collections, book of the day, Google Maps/historic-map preview links, and timeline.
- Local static archive data with 50 book/catalog records and 16 starter topics.
- Search experience with alias matching for terms such as `Andalus`, `Harun Rashid`, `Mughal`, Urdu terms, and `Baghdad House Wisdom`.
- Topic pages separating sources, summaries, story mode, timeline, books, maps/images, related people/places, and citations.
- Book detail pages with metadata, license/rights status, table of contents, source links, and metadata-only warnings.
- In-browser reader with navigation, zoom, dark/sepia modes, thumbnails, local progress, citation copy, text search, bookmarks, source notes, and real source-aware study pages instead of generic reader text.
- Urdu mode with RTL layout, Urdu interface labels, and a dedicated stories-only section for events, cities, travel and archaeology rather than biographies.
- Maps, images/manuscripts, timeline, people, places, collections, admin, sources, about, and license-policy pages.

## Open locally without installing packages

This repository now includes a dependency-free local preview server. It uses only Node.js built-in modules and serves `public/local.html`, so it works even when `npm install` is blocked.

```bash
npm run local
```

Then open:

```text
http://localhost:4173
```

You can also choose a port:

```bash
PORT=3000 npm run local
# or
node scripts/local-server.mjs --port=3000
```

## Next.js development

When package installation is available, run the full app with Node 20:

```bash
nvm install 20
nvm use 20
npm install
npm run dev
npm run build
```

If package installation is blocked by the environment registry policy, TypeScript syntax can still be checked with:

```bash
tsc --noEmit
```

## Deploy to Netlify from GitHub

Use the standard Netlify Next.js settings for the main site. Netlify installs dependencies in its build container, so you do **not** need to install anything on your local PC before deploying from GitHub.

Recommended settings for the Netlify review screen:

```text
Team: syedmuhamadbinali
Project name: baitaltaareekh-Syedm
Branch to deploy: main
Base directory: leave empty
Build command: npm run build
Publish directory: .next
Functions directory: netlify/functions
Environment variables: none required for now
```

Node is pinned to version 20 for Netlify in three places so Netlify does not select Node 22 during the build:

- `.nvmrc` contains `20`.
- `package.json` declares `"engines": { "node": ">=20 <21" }`.
- `netlify.toml` sets `NODE_VERSION = "20"`.

If the Netlify UI already has `NODE_VERSION` set to `22`, change it to `20` or delete it so the repository settings can apply.

The repository includes `netlify.toml` with the same production build settings plus a redirect from `/api/archive-search` to the Netlify Function. The function reads `public/archive-data.json` and returns source-safe books, ancient-history topics, great personalities, and clearly labeled legends/story traditions.

After deploy, open:

```text
https://baitaltaareekh-syedm.netlify.app/
https://baitaltaareekh-syedm.netlify.app/api/archive-search?q=Abbasid
```

### Static fallback build

If you ever want the dependency-free static preview instead of the full Next.js app, run this locally or in another hosting provider:

```bash
npm run netlify:build
```

That command copies `public/` into `dist/`. It is a fallback preview path only; the main Netlify deploy should use `npm run build` and `.next`.
