import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBook } from '@/lib/search';

type BookPageProps = {
  params: Promise<{ id: string }>;
};

export default async function BookPage({ params }: BookPageProps) {
  const { id } = await params;
  const book = getBook(id);
  if (!book) notFound();

  return (
    <main className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-[360px_1fr]">
      <img src={book.coverImage} alt="" className="rounded-3xl" />
      <section className="archive-card rounded-3xl p-8">
        <p className="text-gold">{book.language} • {book.era} • {book.century}</p>
        <h1 className="mt-2 font-serif text-5xl">{book.title}</h1>
        <p className="mt-2 text-vellum/70">{book.author}</p>
        {book.metadataOnly && <p className="mt-5 rounded-2xl border border-gold/30 bg-gold/10 p-4 text-gold">Metadata only: no PDF is hosted until rights are verified.</p>}
        <p className="mt-6 text-lg text-vellum/75">{book.description}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl">Book system fields</h2>
            <ul className="mt-3 space-y-2 text-vellum/70">
              <li>Source: <a className="underline" href={book.sourceUrl}>{book.sourceName}</a></li>
              <li>License: {book.license}</li>
              <li>Tags: {book.topicTags.join(', ')}</li>
              <li>Regions: {book.regionTags.join(', ')}</li>
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl">Table of contents</h2>
            <ol className="mt-3 list-decimal pl-5 text-vellum/70">{book.tableOfContents.map((x) => <li key={x}>{x}</li>)}</ol>
          </div>
        </div>
        <p className="mt-6 rounded-2xl bg-vellum/10 p-4 text-vellum/75">{book.aiSummary}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href={`/reader/${book.id}`} className="rounded-2xl bg-gold px-6 py-3 font-semibold text-archive">Open reader</Link>
          <a href={book.sourceUrl} className="rounded-2xl border border-gold/40 px-6 py-3 text-gold">Open source page</a>
        </div>
      </section>
    </main>
  );
}
