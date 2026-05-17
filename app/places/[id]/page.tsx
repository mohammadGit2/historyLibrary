import { notFound } from 'next/navigation';
import { places } from '@/lib/data';

type PlacePageProps = {
  params: Promise<{ id: string }>;
};

export default async function PlacePage({ params }: PlacePageProps) {
  const { id } = await params;
  const p = places.find((x) => x.id === id);
  if (!p) notFound();

  return <main className="mx-auto max-w-4xl px-4 py-12"><p className="text-gold">{p.historicalRegion} • {p.currentCountry}</p><h1 className="font-serif text-5xl">{p.name}</h1><p className="mt-6 text-xl leading-9 text-vellum/75">{p.description}</p><div className="archive-card mt-8 rounded-3xl p-6"><h2 className="font-serif text-2xl">Coordinates</h2><p className="mt-3 text-vellum/70">{p.latitude}, {p.longitude}</p></div></main>;
}
