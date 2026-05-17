import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BookCard, Section } from '@/components/Cards';
import { SourceSeparation } from '@/components/SourceSeparation';
import { books, images } from '@/lib/data';
import { getTopic } from '@/lib/search';

type TopicPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function TopicPage({ params }: TopicPageProps) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();
  const related = books.filter((b) => topic.relatedBooks.includes(b.id));

  return (
    <main className="py-10">
      <section className="mx-auto max-w-7xl px-4">
        <p className="text-gold">{topic.type} • {topic.region}</p>
        <h1 className="font-serif text-6xl">{topic.title}</h1>
        <p className="mt-5 max-w-4xl text-xl text-vellum/75">{topic.summary}</p>
        <div className="mt-7"><SourceSeparation /></div>
      </section>
      <Section eyebrow="AI label" title="AI-enhanced summary based on listed sources"><div className="archive-card rounded-3xl p-6"><p className="text-vellum/75">This overview is a guide to verified records, not an original source. Use the citations, books, maps and manuscript links below for study.</p></div></Section>
      <Section eyebrow="Story mode" title="Readable documentary path"><div className="grid gap-4 md:grid-cols-3">{topic.storyModeText.map((s, i) => <div key={s} className="parchment rounded-3xl p-6"><p className="text-sm uppercase tracking-widest text-copper">Chapter {i + 1}</p><p className="mt-3 text-ink/80">{s}</p></div>)}</div></Section>
      <Section eyebrow="Timeline" title="Chronology"><div className="space-y-4">{topic.timeline.map((e) => <div key={e.title} className="archive-card rounded-2xl p-5"><p className="text-gold">{e.date}</p><h3 className="font-serif text-2xl">{e.title}</h3><p className="text-vellum/70">{e.description}</p></div>)}</div></Section>
      <Section eyebrow="Books" title="Real books, PDFs and Urdu records"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{related.map((b) => <BookCard key={b.id} book={b} />)}</div></Section>
      <Section eyebrow="Maps & manuscripts" title="Visual archive"><div className="grid gap-5 md:grid-cols-3">{images.map((img) => <div className="archive-card rounded-3xl p-4" key={img.id}><img src={img.imageUrl} className="h-48 w-full rounded-2xl object-cover" alt="" /><h3 className="mt-3 font-serif text-xl">{img.title}</h3><p className="text-sm text-vellum/65">{img.license}</p></div>)}</div></Section>
      <Section eyebrow="Related knowledge graph" title="People, places, dynasties, events"><div className="grid gap-4 md:grid-cols-3"><div className="archive-card rounded-2xl p-5"><h3 className="text-gold">People</h3>{topic.relatedPeople.map((p) => <p key={p}>{p}</p>)}</div><div className="archive-card rounded-2xl p-5"><h3 className="text-gold">Places</h3>{topic.relatedPlaces.map((p) => <p key={p}>{p}</p>)}</div><div className="archive-card rounded-2xl p-5"><h3 className="text-gold">Citations</h3>{topic.citations.map((c) => <Link className="block underline" key={c.url} href={c.url}>{c.label} ({c.type})</Link>)}</div></div></Section>
    </main>
  );
}
