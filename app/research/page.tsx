import Link from 'next/link';
import { buildDeepResearch } from '@/lib/knowledge';

type ResearchPageProps = { searchParams: Promise<{ q?: string }> };

export default async function ResearchPage({ searchParams }: ResearchPageProps) {
  const { q = 'Genghis Khan' } = await searchParams;
  const research = buildDeepResearch(q);
  const topic = research.topic;
  return (
    <main className="py-10">
      <section className="mx-auto max-w-5xl px-4">
        <p className="text-gold">Deep Research • AI-assisted draft based on listed sources</p>
        <h1 className="font-serif text-5xl md:text-6xl">{research.title}</h1>
        <p className="mt-5 text-xl leading-9 text-vellum/75">This page is generated from internal article sections, source notes, fact cards, timeline entries and citations. It does not invent certainty; uncertain or debated points should be reviewed by a human curator.</p>
        <div className="mt-6 flex flex-wrap gap-3"><Link href={`/topic/${topic.slug}`} className="rounded-2xl bg-gold px-5 py-3 font-semibold text-archive">Open full topic page</Link><a href="#references" className="rounded-2xl border border-gold/40 px-5 py-3 text-gold">References</a></div>
      </section>
      <section className="mx-auto max-w-5xl px-4 py-10">
        {research.sections.map((section) => <article className="archive-card mb-6 rounded-3xl p-7" key={section.id}><h2 className="font-serif text-3xl text-vellum">{section.title}</h2>{section.body.map((paragraph) => <p className="mt-4 text-lg leading-9 text-vellum/75" key={paragraph}>{paragraph}</p>)}</article>)}
      </section>
      <section className="mx-auto max-w-5xl px-4 py-8">
        <h2 className="font-serif text-4xl">Timeline</h2>
        <div className="mt-5 space-y-4">{topic.timeline.map((event) => <div className="archive-card rounded-2xl p-5" key={event.title}><p className="text-gold">{event.date}</p><h3 className="font-serif text-2xl">{event.title}</h3><p className="text-vellum/70">{event.description}</p></div>)}</div>
      </section>
      <section className="mx-auto max-w-5xl px-4 py-8" id="references">
        <h2 className="font-serif text-4xl">References and further reading</h2>
        <div className="mt-5 space-y-3">{topic.citations.map((citation) => <a className="block rounded-2xl border border-gold/30 p-4 text-gold" href={citation.url} key={citation.url}>{citation.label}</a>)}</div>
      </section>
    </main>
  );
}
