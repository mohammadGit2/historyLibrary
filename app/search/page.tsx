import { SearchBox } from '@/components/SearchBox';
import { BookCard, Section, TopicCard } from '@/components/Cards';
import { searchArchive } from '@/lib/search';
import { SourceSeparation } from '@/components/SourceSeparation';

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = '' } = await searchParams;
  const results = searchArchive(q);

  return (
    <main className="py-10">
      <section className="mx-auto max-w-7xl px-4"><p className="text-gold">Archive search</p><h1 className="font-serif text-5xl">{q ? `Results for “${q}”` : 'Search the archive'}</h1><div className="mt-6"><SearchBox compact /></div><div className="mt-4"><a className="inline-flex rounded-2xl bg-gold px-5 py-3 font-semibold text-archive" href={`/research?q=${encodeURIComponent(q || 'Genghis Khan')}`}>Deep Research</a></div>{results.usedFallback && <p className="mt-4 rounded-2xl border border-gold/25 bg-gold/10 p-4 text-vellum/75">No exact local record yet. Showing curated starter records; future versions can query open public APIs after local search.</p>}</section>
      <Section eyebrow="Source separation" title="Trust model"><SourceSeparation /></Section>
      <Section eyebrow="Top summary" title="Topic matches"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{results.topics.map((t) => <TopicCard key={t.id} topic={t} />)}</div></Section>
      <Section eyebrow="Real books & PDFs" title="Books, Urdu records, and metadata"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{results.books.slice(0, 12).map((b) => <BookCard key={b.id} book={b} />)}</div></Section>
      <Section eyebrow="Maps · images · story" title="Result page modules"><div className="grid gap-4 md:grid-cols-3">{['Maps section with markers and overlays', 'Images/manuscripts with license labels', 'Story mode based on listed sources', 'Timeline extraction and citations', 'Related people, places and dynasties', 'Reading bundle recommendations'].map((x) => <div className="archive-card rounded-2xl p-5" key={x}>{x}</div>)}</div></Section>
    </main>
  );
}
