# Bayt al-Tareekh: The Living History Library

A professional historical digital library MVP for real books, verified metadata, public-domain/open-license source links, maps, manuscripts, timelines, biographies, Urdu support, and citation-aware reading.

## Core principle

The platform must not present fake AI-written history as original content. AI sections are clearly labeled as summaries and must point readers back to source records, rights statements, citations, books, maps, and image attributions.

## MVP features

- Premium archive homepage with hero search, quick categories, featured collections, book of the day, map preview, and timeline.
- Local static archive data with 50 book/catalog records and 16 starter topics.
- Search experience with alias matching for terms such as `Andalus`, `Harun Rashid`, `Mughal`, Urdu terms, and `Baghdad House Wisdom`.
- Topic pages separating sources, summaries, story mode, timeline, books, maps/images, related people/places, and citations.
- Book detail pages with metadata, license/rights status, table of contents, source links, and metadata-only warnings.
- In-browser reader MVP with navigation, zoom, dark/sepia modes, thumbnails, local progress, citation copy, OCR search placeholder, and rights-aware download messaging.
- Urdu mode with RTL layout and Urdu interface labels.
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

When package installation is available, run the full app with:

```bash
npm install
npm run dev
npm run build
```

If package installation is blocked by the environment registry policy, TypeScript syntax can still be checked with:

```bash
tsc --noEmit
```

## Deploy to Netlify from GitHub

This repo includes a Netlify-ready static build and serverless function setup that does **not** require extra third-party modules for the function runtime.

1. Push the repository to GitHub.
2. In Netlify, choose **Add new site → Import an existing project**.
3. Select the GitHub repository.
4. Netlify will read `netlify.toml` automatically:
   - Build command: `node scripts/build-netlify.mjs`
   - Publish directory: `dist`
   - Functions directory: `netlify/functions`
5. After deploy, open:
   - Site: `https://YOUR-SITE.netlify.app/`
   - Search function: `https://YOUR-SITE.netlify.app/api/archive-search?q=Abbasid`

The Netlify function reads `public/archive-data.json` and returns source-safe books, ancient-history topics, great personalities, and clearly labeled legends/story traditions.
