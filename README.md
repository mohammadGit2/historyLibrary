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

## Development

```bash
npm install
npm run dev
npm run build
```

If package installation is blocked by the environment registry policy, TypeScript syntax can still be checked with:

```bash
tsc --noEmit
```
