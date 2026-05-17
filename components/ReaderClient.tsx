'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { books, getReaderPages } from '@/lib/data';

export function ReaderClient({ bookId }: { bookId: string }) {
  const book = books.find((b) => b.id === bookId) ?? books[0];
  const readerPages = getReaderPages(book);
  const [page, setPage] = useState(1);
  const [zoom, setZoom] = useState(100);
  const [mode, setMode] = useState<'light' | 'sepia' | 'dark'>('sepia');
  const [query, setQuery] = useState('');
  const [bookmark, setBookmark] = useState<number | null>(null);

  useEffect(() => {
    const saved = Number(localStorage.getItem(`reader-${book.id}`));
    if (saved >= 1 && saved <= readerPages.length) setPage(saved);
  }, [book.id, readerPages.length]);

  useEffect(() => {
    localStorage.setItem(`reader-${book.id}`, String(page));
  }, [page, book.id]);

  const activePage = readerPages[Math.min(page - 1, readerPages.length - 1)];
  const nextMode = mode === 'sepia' ? 'dark' : mode === 'dark' ? 'light' : 'sepia';
  const matchingPages = query.trim()
    ? readerPages.filter((item) => `${item.heading} ${item.dateRange} ${item.body.join(' ')}`.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <div className="archive-card mb-5 flex flex-wrap items-center justify-between gap-3 rounded-3xl p-4">
        <div>
          <p className="text-gold">Source-aware reader with real study text</p>
          <h1 className="font-serif text-3xl">{book.title}</h1>
          <p className="mt-1 text-sm text-vellum/65">{book.author} • {book.century} • {book.license}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setPage(Math.max(1, page - 1))} className="rounded-xl border border-gold/30 px-3 py-2">Prev</button>
          <button onClick={() => setPage(Math.min(readerPages.length, page + 1))} className="rounded-xl border border-gold/30 px-3 py-2">Next</button>
          <button onClick={() => setZoom(zoom + 10)} className="rounded-xl border border-gold/30 px-3 py-2">Zoom +</button>
          <button onClick={() => setZoom(Math.max(70, zoom - 10))} className="rounded-xl border border-gold/30 px-3 py-2">Zoom -</button>
          <button onClick={() => setMode(nextMode)} className="rounded-xl bg-gold px-3 py-2 text-archive">{mode}</button>
        </div>
      </div>
      <div className="grid gap-5 lg:grid-cols-[240px_1fr_280px]">
        <aside className="archive-card rounded-3xl p-4">
          <h2 className="font-serif text-xl">Pages</h2>
          {readerPages.map((item) => (
            <button key={item.page} onClick={() => setPage(item.page)} className={`mt-3 block w-full rounded-xl p-3 text-left ${item.page === page ? 'bg-gold text-archive' : 'bg-vellum/10 text-vellum'}`}>
              <span className="block text-xs uppercase tracking-[.2em] opacity-70">Page {item.page}</span>
              {item.heading}
            </button>
          ))}
          <div className="mt-5 rounded-2xl border border-vellum/10 p-3 text-sm text-vellum/65">
            Progress: page {page} of {readerPages.length}. {bookmark ? `Bookmark saved on page ${bookmark}.` : 'No bookmark yet.'}
          </div>
        </aside>
        <article className={`reader-page ${mode} min-h-[760px] rounded-3xl p-10 shadow-2xl`} style={{ fontSize: `${zoom}%` }}>
          <p className="text-sm opacity-60">Page {activePage.page} • {zoom}% zoom • {activePage.dateRange}</p>
          <h2 className="mt-4 font-serif text-4xl">{activePage.heading}</h2>
          <div className="mt-6 space-y-5 leading-8">
            {activePage.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="mt-8 rounded-2xl border p-4">
            <p className="font-semibold">Source note</p>
            <p className="mt-2">{activePage.sourceNote}</p>
          </div>
          <p className="mt-4 rounded-2xl border p-4">Citation starter: {book.title}, {book.author}, {book.sourceName}. Add edition, volume and page after opening the catalog record.</p>
        </article>
        <aside className="archive-card rounded-3xl p-4">
          <h2 className="font-serif text-xl">Reader tools</h2>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search reader text…" className="mt-3 w-full rounded-xl bg-vellum px-3 py-2 text-ink" />
          {matchingPages.length > 0 && <div className="mt-3 rounded-2xl bg-vellum/10 p-3 text-sm text-vellum/75">Matches: {matchingPages.map((item) => <button key={item.page} onClick={() => setPage(item.page)} className="mr-2 underline">page {item.page}</button>)}</div>}
          <button onClick={() => setBookmark(page)} className="mt-3 w-full rounded-xl border border-gold/30 py-2">Add bookmark</button>
          <button onClick={() => navigator.clipboard?.writeText(`${book.title} — ${book.author} — ${book.sourceUrl}`)} className="mt-3 w-full rounded-xl border border-gold/30 py-2">Copy citation</button>
          <Link href={book.sourceUrl} className="mt-3 block rounded-xl border border-gold/30 py-2 text-center">Open source page</Link>
          {book.textUrl && <a href={book.textUrl} className="mt-3 block rounded-xl border border-gold/30 py-2 text-center">Open text</a>}
          <p className="mt-4 text-sm text-vellum/60">This panel now shows real source-aware study pages. Full scan/PDF rendering still depends on a legally allowed file URL.</p>
        </aside>
      </div>
    </main>
  );
}
