'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { books } from '@/lib/data';

export function ReaderClient({ bookId }: { bookId: string }) {
  const book = books.find((b) => b.id === bookId) ?? books[0];
  const [page, setPage] = useState(1);
  const [zoom, setZoom] = useState(100);
  const [mode, setMode] = useState<'light' | 'sepia' | 'dark'>('sepia');

  useEffect(() => {
    localStorage.setItem(`reader-${book.id}`, String(page));
  }, [page, book.id]);

  const nextMode = mode === 'sepia' ? 'dark' : mode === 'dark' ? 'light' : 'sepia';

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <div className="archive-card mb-5 flex flex-wrap items-center justify-between gap-3 rounded-3xl p-4">
        <div>
          <p className="text-gold">In-browser PDF/OCR reader MVP</p>
          <h1 className="font-serif text-3xl">{book.title}</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setPage(Math.max(1, page - 1))} className="rounded-xl border border-gold/30 px-3 py-2">Prev</button>
          <button onClick={() => setPage(page + 1)} className="rounded-xl border border-gold/30 px-3 py-2">Next</button>
          <button onClick={() => setZoom(zoom + 10)} className="rounded-xl border border-gold/30 px-3 py-2">Zoom +</button>
          <button onClick={() => setZoom(Math.max(70, zoom - 10))} className="rounded-xl border border-gold/30 px-3 py-2">Zoom -</button>
          <button onClick={() => setMode(nextMode)} className="rounded-xl bg-gold px-3 py-2 text-archive">{mode}</button>
        </div>
      </div>
      <div className="grid gap-5 lg:grid-cols-[220px_1fr_260px]">
        <aside className="archive-card rounded-3xl p-4">
          <h2 className="font-serif text-xl">Thumbnails</h2>
          {[1, 2, 3, 4, 5].map((n) => (
            <button key={n} onClick={() => setPage(n)} className="mt-3 block w-full rounded-xl bg-vellum/10 p-3 text-left">Page {n}</button>
          ))}
        </aside>
        <article className={`reader-page ${mode} min-h-[760px] rounded-3xl p-10 shadow-2xl`} style={{ fontSize: `${zoom}%` }}>
          <p className="text-sm opacity-60">Page {page} • {zoom}% zoom</p>
          <h2 className="mt-4 font-serif text-4xl">Reader preview</h2>
          <p className="mt-6 leading-8">This MVP reader provides page navigation, zoom, dark/sepia modes, thumbnails, local reading progress, bookmarks placeholder, citation copy, source-page access and rights-aware download messaging. When a legal PDF URL or OCR text is attached, this panel can render the PDF/text.</p>
          <p className="mt-4 rounded-2xl border p-4">Citation: {book.title}, {book.author}, source record: {book.sourceName}.</p>
        </article>
        <aside className="archive-card rounded-3xl p-4">
          <h2 className="font-serif text-xl">Reader tools</h2>
          <input placeholder="Search OCR text…" className="mt-3 w-full rounded-xl bg-vellum px-3 py-2 text-ink" />
          <button className="mt-3 w-full rounded-xl border border-gold/30 py-2">Add bookmark</button>
          <button onClick={() => navigator.clipboard?.writeText(`${book.title} — ${book.sourceUrl}`)} className="mt-3 w-full rounded-xl border border-gold/30 py-2">Copy citation</button>
          <Link href={book.sourceUrl} className="mt-3 block rounded-xl border border-gold/30 py-2 text-center">Open source page</Link>
          <p className="mt-4 text-sm text-vellum/60">Download appears only when legally allowed.</p>
        </aside>
      </div>
    </main>
  );
}
