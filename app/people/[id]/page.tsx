import { notFound } from 'next/navigation';
import { people } from '@/lib/data';

type PersonPageProps = {
  params: Promise<{ id: string }>;
};

export default async function PersonPage({ params }: PersonPageProps) {
  const { id } = await params;
  const p = people.find((x) => x.id === id);
  if (!p) notFound();

  return <main className="mx-auto max-w-4xl px-4 py-12"><p className="text-gold">{p.role} • {p.region}</p><h1 className="font-serif text-5xl">{p.name}</h1><p className="mt-6 text-xl leading-9 text-vellum/75">{p.biography}</p><div className="archive-card mt-8 rounded-3xl p-6"><h2 className="font-serif text-2xl">Related places and events</h2><p className="mt-3 text-vellum/70">{[...p.relatedPlaces, ...p.relatedEvents].join(' • ')}</p></div></main>;
}
