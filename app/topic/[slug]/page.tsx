import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BookCard, Section } from '@/components/Cards';
import { SourceSeparation } from '@/components/SourceSeparation';
import { books, images } from '@/lib/data';
import { getTopic } from '@/lib/search';
import { getRichTopic } from '@/lib/knowledge';

type TopicPageProps = { params: Promise<{ slug: string }> };

export default async function TopicPage({ params }: TopicPageProps) {
  const { slug } = await params;
  const richTopic = getRichTopic(slug);
  const topic = getTopic(slug);
  if (!richTopic && !topic) notFound();

  if (richTopic) {
    const related = books.filter((book) => richTopic.relatedBooks.includes(book.id)).slice(0, 8);
    return (
      <main className="py-10">
        <section className="mx-auto max-w-7xl px-4">
          <p className="text-gold">{richTopic.reviewStatus} • {richTopic.authorType} • {richTopic.language}</p>
          <h1 className="font-serif text-6xl">{richTopic.title}</h1>
          <p className="mt-5 max-w-4xl text-xl leading-9 text-vellum/75">{richTopic.summary}</p>
          <div className="mt-6 flex flex-wrap gap-3"><Link href={`/research?q=${encodeURIComponent(richTopic.title)}`} className="rounded-2xl bg-gold px-5 py-3 font-semibold text-archive">Deep Research</Link><a href="#story" className="rounded-2xl border border-gold/40 px-5 py-3 text-gold">Story Mode</a><a href="#urdu" className="rounded-2xl border border-gold/40 px-5 py-3 text-gold">Urdu Summary</a></div>
          <div className="mt-7"><SourceSeparation /></div>
        </section>

        <Section eyebrow="Quick facts" title="At a glance">
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">{richTopic.quickFacts.map((fact) => <div className="parchment rounded-2xl p-4" key={fact.label}><p className="text-xs uppercase tracking-widest text-copper">{fact.label}</p><p className="mt-2 font-semibold text-ink">{fact.value}</p></div>)}</div>
        </Section>

        <Section eyebrow="Table of contents" title="Article sections">
          <div className="archive-card rounded-3xl p-6"><div className="grid gap-2 md:grid-cols-3">{richTopic.sections.map((section) => <a className="rounded-xl bg-vellum/10 px-4 py-2 text-vellum/80 hover:text-gold" href={`#${section.id}`} key={section.id}>{section.title}</a>)}</div></div>
        </Section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          {richTopic.sections.map((section) => <article id={section.id} className="mb-10 scroll-mt-24 archive-card rounded-3xl p-7" key={section.id}><h2 className="font-serif text-4xl text-vellum">{section.title}</h2>{section.body.map((paragraph) => <p className="mt-5 text-lg leading-9 text-vellum/75" key={paragraph}>{paragraph}</p>)}</article>)}
        </section>

        <Section eyebrow="Historical fact cards" title="Notes between the lines">
          <div className="grid gap-5 md:grid-cols-2">{richTopic.facts.map((fact) => <div className="parchment rounded-3xl p-6" key={fact.id}><p className="text-sm uppercase tracking-widest text-copper">{fact.type} • {fact.confidence}</p><h3 className="mt-2 font-serif text-2xl">{fact.title}</h3><p className="mt-3 text-ink/75">{fact.text}</p><p className="mt-4 text-xs text-ink/55">Source: {fact.source}</p></div>)}</div>
        </Section>

        <Section eyebrow="Source extracts" title="Readable internal source notes">
          <div className="grid gap-5 md:grid-cols-2">{richTopic.extracts.length ? richTopic.extracts.map((extract) => <blockquote className="archive-card rounded-3xl p-6" key={extract.id}><p className="text-lg leading-8 text-vellum/80">{extract.text}</p><footer className="mt-4 text-sm text-gold">{extract.sourceTitle} — {extract.author}. {extract.license}</footer></blockquote>) : <div className="archive-card rounded-3xl p-6 text-vellum/70">No public-domain extract has been approved yet. The page still stores article content, sources, facts and reading paths internally.</div>}</div>
        </Section>

        <Section eyebrow="Timeline" title="Chronology">
          <div className="space-y-4">{richTopic.timeline.map((event) => <div key={event.title} className="archive-card rounded-2xl p-5"><p className="text-gold">{event.date}</p><h3 className="font-serif text-2xl">{event.title}</h3><p className="text-vellum/70">{event.description}</p></div>)}</div>
        </Section>

        <Section eyebrow="Story mode" title="Documentary narrative" ><div id="story" className="grid gap-5 md:grid-cols-3">{richTopic.storyMode.map((part) => <div className="parchment rounded-3xl p-6" key={part.id}><h3 className="font-serif text-2xl">{part.title}</h3>{part.body.map((paragraph) => <p className="mt-3 text-ink/75" key={paragraph}>{paragraph}</p>)}</div>)}</div></Section>

        <Section eyebrow="Books" title="Related books and reading paths"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{related.map((book) => <BookCard key={book.id} book={book} />)}</div></Section>

        <Section eyebrow="Maps and visuals" title="Visual archive"><div className="grid gap-5 md:grid-cols-3">{images.map((img) => <div className="archive-card rounded-3xl p-4" key={img.id}><img src={img.imageUrl} className="h-48 w-full rounded-2xl object-cover" alt="" /><h3 className="mt-3 font-serif text-xl">{img.title}</h3><p className="text-sm text-vellum/65">{img.license}</p></div>)}</div></Section>

        <Section eyebrow="Urdu" title="اردو خلاصہ"><div id="urdu" className="rtl archive-card rounded-3xl p-6 font-urdu text-xl leading-10 text-vellum/80">{richTopic.urduSummary}</div></Section>

        <Section eyebrow="References" title="Sources and verification"><div className="space-y-3">{richTopic.citations.map((citation) => <a className="block rounded-2xl border border-gold/30 p-4 text-gold" href={citation.url} key={citation.url}>{citation.label}</a>)}</div></Section>
      </main>
    );
  }

  const related = books.filter((b) => topic!.relatedBooks.includes(b.id));
  return <main className="py-10"><section className="mx-auto max-w-7xl px-4"><p className="text-gold">{topic!.type} • {topic!.region}</p><h1 className="font-serif text-6xl">{topic!.title}</h1><p className="mt-5 max-w-4xl text-xl text-vellum/75">{topic!.summary}</p><div className="mt-7"><SourceSeparation /></div></section><Section eyebrow="AI label" title="AI-enhanced summary based on listed sources"><div className="archive-card rounded-3xl p-6"><p className="text-vellum/75">This overview is a guide to verified records, not an original source. Use the citations, books, maps and manuscript links below for study.</p></div></Section><Section eyebrow="Story mode" title="Readable documentary path"><div className="grid gap-4 md:grid-cols-3">{topic!.storyModeText.map((s, i) => <div key={s} className="parchment rounded-3xl p-6"><p className="text-sm uppercase tracking-widest text-copper">Chapter {i + 1}</p><p className="mt-3 text-ink/80">{s}</p></div>)}</div></Section><Section eyebrow="Books" title="Real books, PDFs and Urdu records"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{related.map((b) => <BookCard key={b.id} book={b} />)}</div></Section></main>;
}
