import { BookCard, Section } from '@/components/Cards';
import { books } from '@/lib/data';

const shelves = [
  { title: 'Read now: public-domain classics', match: (license: string) => license.toLowerCase().includes('public domain') },
  { title: 'Islamic history and biographies', match: (_: string, tags: string[]) => tags.join(' ').toLowerCase().includes('islam') || tags.join(' ').toLowerCase().includes('hazrat') || tags.join(' ').toLowerCase().includes('khalid') },
  { title: 'Ancient history, philosophy and empires', match: (_: string, tags: string[]) => ['rome','greece','egypt','persia','mesopotamia','aristotle','socrates','plato'].some((term) => tags.join(' ').toLowerCase().includes(term)) },
  { title: 'Legends and sacred story traditions', match: (_: string, tags: string[]) => ['legend','quranic','biblical','epic','prophets'].some((term) => tags.join(' ').toLowerCase().includes(term)) }
];

export default function Books() {
  return (
    <main>
      <Section eyebrow="Reader shelves" title="A real-books library for beginners and book lovers">
        <div className="archive-card rounded-3xl p-6 text-vellum/75">
          <p>Use the badges carefully: <strong>public domain</strong> items can usually be opened through their source pages; <strong>metadata only</strong> records are not hosted until rights are verified. This keeps the library legal and trustworthy.</p>
        </div>
      </Section>
      {shelves.map((shelf) => {
        const shelfBooks = books.filter((book) => shelf.match(book.license, book.topicTags)).slice(0, 8);
        return <Section key={shelf.title} eyebrow="Shelf" title={shelf.title}><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{shelfBooks.map((book) => <BookCard key={book.id} book={book} />)}</div></Section>;
      })}
      <Section eyebrow="Complete catalog" title="All books, PDFs, Urdu records and metadata">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{books.map((book) => <BookCard key={book.id} book={book} />)}</div>
      </Section>
    </main>
  );
}
