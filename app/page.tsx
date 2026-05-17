import Link from 'next/link';
import { SearchBox } from '@/components/SearchBox';
import { BookCard, Section, TopicCard } from '@/components/Cards';
import { CivilizationGraphPreview, ImmersiveWorlds } from '@/components/ImmersiveWorlds';
import { books, topics } from '@/lib/data';

const categories = [
  'Balanced Islamic History',
  'Golden Age of Islam',
  'Crusades & Salahuddin',
  'Ottoman 1453',
  'Ancient Civilizations',
  'Quranic & Biblical Stories',
  'Great Personalities',
  'Philosophy: Socrates & Aristotle',
  'Urdu History Books',
  'Maps & Manuscripts'
];

const collections = [
  'Life of Hazrat Ali',
  'Khalid ibn al-Walid',
  'Husayn ibn Ali and Karbala',
  'Islamic Golden Age Book Series',
  'Salahuddin and the Crusades',
  'Ottoman 1453 and Constantinople',
  'Genghis Khan and the Mongols',
  'Mughals: Babur, Akbar and Tipu Sultan',
  'Ancient Egypt, Mesopotamia, Persia, Greece and Rome'
];

const readerRooms = ['Beginner story', 'Original source', 'Map', 'Timeline', 'People', 'Glossary'];
const highlightedTopics = ['Life of Hazrat Ali','Crusades and Salahuddin','Ottoman 1453','Islamic Golden Age','Genghis Khan','Ancient Egypt and Pharaohs','Ancient Greece','Roman Empire'];

export default function Home() {
  const featuredTopics = highlightedTopics.map((title) => topics.find((topic) => topic.title === title)).filter(Boolean).slice(0, 8);
  const readableBooks = books.filter((book) => !book.metadataOnly).slice(0, 8);

  return (
    <main>
      <section className="relative overflow-hidden px-4 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[.4em] text-gold">The Living History Library</p>
              <h1 className="font-serif text-5xl leading-tight text-vellum md:text-7xl">Enter the Living History Archive</h1>
              <p className="mt-6 max-w-3xl text-xl text-vellum/75">A cinematic civilization atlas with books, living cities, trade routes, daily life, maps, timelines, biographies, Urdu support and deep source-based exploration.</p>
              <div className="mt-9"><SearchBox /></div>
              <p className="mt-4 text-sm text-vellum/55">Balanced policy: early Islamic history is presented respectfully and normally — not Sunni polemic, not Shia polemic, and not dynasty propaganda. Conflicts appear only when historically needed and with source labels.</p>
            </div>
            <div className="archive-card map-grid rounded-[2rem] p-6 shadow-glow">
              <div className="parchment rounded-[1.5rem] p-6">
                <p className="text-sm uppercase tracking-[.3em] text-copper">Reader-first archive</p>
                <h2 className="mt-3 font-serif text-4xl">Search a topic, then enter a reading room.</h2>
                <p className="mt-4 text-ink/75">Each room separates original sources, public-domain/open catalog books, AI-enhanced summaries, maps, timelines, personalities, legends and citations.</p>
                <div className="mt-6 grid grid-cols-2 gap-3 text-sm">{readerRooms.map((x) => <span key={x} className="rounded-xl bg-archive px-3 py-2 text-vellum">{x}</span>)}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="Begin here" title="Choose a friendly history room">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{categories.map((c) => <Link href={`/search?q=${encodeURIComponent(c)}`} key={c} className="archive-card rounded-2xl p-5 text-vellum transition hover:border-gold/60 hover:text-gold">{c}</Link>)}</div>
      </Section>

      <Section eyebrow="Balanced source policy" title="Normal Islamic history, not sectarian argument">
        <div className="grid gap-4 md:grid-cols-3">
          {['Respect sacred figures and communities', 'Separate history, devotional memory and later politics', 'Use neutral wording and show multiple source types'].map((item) => <div key={item} className="parchment rounded-3xl p-6"><h3 className="font-serif text-2xl">{item}</h3><p className="mt-3 text-ink/70">The site avoids one-sided sectarian framing. It explains context, people, places and sources in a calm beginner-friendly style.</p></div>)}
        </div>
      </Section>

      <ImmersiveWorlds />
      <CivilizationGraphPreview />

      <Section eyebrow="Reading paths" title="Featured collections requested by readers">
        <div className="grid gap-4 md:grid-cols-3">{collections.map((c) => <Link href={`/search?q=${encodeURIComponent(c)}`} key={c} className="archive-card rounded-3xl p-5 transition hover:-translate-y-1 hover:border-gold/60"><h3 className="font-serif text-2xl text-vellum">{c}</h3><p className="mt-2 text-sm text-vellum/70">Books, source notes, story mode, timeline, map and reading order.</p></Link>)}</div>
      </Section>

      <Section eyebrow="Readable public-domain books" title="Start reading real books now">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{readableBooks.map((book) => <BookCard key={book.id} book={book} />)}</div>
      </Section>

      <Section eyebrow="Popular rooms" title="Big topics with source-based story mode">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{featuredTopics.map((topic) => topic && <TopicCard key={topic.id} topic={topic} />)}</div>
      </Section>

      <Section eyebrow="Historical atlas" title="Explore by Map">
        <div className="archive-card map-grid relative min-h-[360px] rounded-[2rem] p-8">
          <div className="absolute left-[22%] top-[42%] rounded-full bg-gold px-4 py-2 text-sm font-semibold text-archive">Baghdad</div>
          <div className="absolute left-[47%] top-[28%] rounded-full bg-vellum px-4 py-2 text-sm font-semibold text-archive">Constantinople 1453</div>
          <div className="absolute left-[12%] top-[58%] rounded-full bg-copper px-4 py-2 text-sm font-semibold text-white">Cairo</div>
          <div className="absolute left-[62%] top-[55%] rounded-full bg-gold px-4 py-2 text-sm font-semibold text-archive">Delhi / Mughals</div>
          <Link href="/maps" className="absolute bottom-8 right-8 rounded-2xl border border-gold/40 px-5 py-3 text-gold">Open map archive</Link>
        </div>
      </Section>

      <Section eyebrow="Chronology" title="Ancient to early modern timeline">
        <div className="overflow-x-auto"><div className="flex min-w-[1000px] gap-4">{['3000 BCE Mesopotamia','2500 BCE Indus Valley','550 BCE Ancient Iran','470 BCE Socrates','27 BCE Rome','622 Early Islam','1095 Crusades','1206 Genghis Khan','1453 Ottoman Constantinople','1526 Mughals'].map((e) => <div key={e} className="archive-card min-w-48 rounded-2xl p-4"><div className="mb-3 h-2 rounded bg-gold"/><p>{e}</p></div>)}</div></div>
      </Section>
    </main>
  );
}
