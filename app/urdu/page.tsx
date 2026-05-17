import { BookCard, Section } from '@/components/Cards';
import { books, urduStories } from '@/lib/data';

const labels = ['تلاش کریں', 'اردو کہانیاں', 'اسلامی تاریخ', 'قدیم تاریخ', 'نقشے', 'مخطوطات', 'حوالہ جات', 'مطالعہ شروع کریں'];

export default function Urdu() {
  return (
    <main className="rtl font-urdu">
      <Section eyebrow="Urdu mode" title="اردو تاریخی کہانیاں — سوانح نہیں">
        <div className="archive-card rounded-3xl p-6">
          <p className="text-xl leading-10 text-vellum/80">
            یہ صفحہ خاص طور پر اردو کہانی موڈ کے لئے ہے: یہاں واقعات، شہروں، سفر، آثارِ قدیمہ اور علمی ماحول کی مختصر تاریخی کہانیاں ہیں۔ یہ شخصیات کی سوانح عمری نہیں بلکہ ماخذ سے وابستہ تعلیمی بیانیہ ہے۔
          </p>
          <div className="mt-5 flex flex-wrap gap-3">{labels.map((label) => <span key={label} className="rounded-full bg-gold/15 px-4 py-2 text-gold">{label}</span>)}</div>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {urduStories.map((story) => (
            <article key={story.id} className="archive-card rounded-3xl p-6">
              <div className="flex flex-wrap items-center gap-2 text-sm text-gold">
                <span className="rounded-full bg-gold/15 px-3 py-1">{story.kind}</span>
                <span>{story.date}</span>
                <span>•</span>
                <span>{story.readingTime}</span>
              </div>
              <h2 className="mt-4 font-serif text-3xl text-vellum">{story.title}</h2>
              <p className="mt-2 text-vellum/65">{story.era} • {story.location}</p>
              <div className="mt-5 space-y-4 text-lg leading-10 text-vellum/80">
                {story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <p className="mt-5 rounded-2xl border border-gold/30 bg-gold/10 p-4 text-sm leading-8 text-gold">ماخذی بنیاد: {story.sourceBasis}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section eyebrow="Urdu books" title="اردو کتب اور ماخذی ریکارڈ">
        <div className="grid gap-5 md:grid-cols-3">{books.filter((book) => book.language === 'Urdu').map((book) => <BookCard key={book.id} book={book} />)}</div>
      </Section>
    </main>
  );
}
