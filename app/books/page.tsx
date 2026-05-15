import { BookCard, Section } from '@/components/Cards'; import { books } from '@/lib/data';
export default function Books(){return <main><Section eyebrow="Catalog" title="Books, PDFs, Urdu records and metadata"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{books.map(b=><BookCard key={b.id} book={b}/>)}</div></Section></main>}
