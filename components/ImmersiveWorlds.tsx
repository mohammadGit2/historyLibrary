import Link from 'next/link';
import { civilizationWorlds, immersiveFactDeck } from '@/lib/civilizations';

export function ImmersiveWorlds() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <p className="mb-2 text-sm uppercase tracking-[.35em] text-gold">Civilization portals</p>
      <h2 className="mb-6 font-serif text-4xl text-vellum md:text-6xl">Step inside living historical worlds</h2>
      <div className="grid gap-6 lg:grid-cols-2">
        {civilizationWorlds.map((world, index) => (
          <Link href={`/worlds#${world.id}`} key={world.id} className="archive-card immersive-card group relative overflow-hidden rounded-[2rem] p-6 transition hover:-translate-y-1 hover:border-gold/70">
            <div className="absolute inset-0 opacity-30 map-grid" />
            <div className="relative">
              <div className="mb-5 flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-gold"><span>World {index + 1}</span><span>•</span><span>{world.era}</span><span>•</span><span>{world.region}</span></div>
              <h3 className="font-serif text-3xl text-vellum md:text-4xl">{world.name}</h3>
              <p className="mt-2 text-lg text-gold/90">{world.subtitle}</p>
              <p className="mt-4 text-vellum/75 leading-8">{world.portalPrompt}</p>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {world.soundscape.slice(0, 4).map((sound) => <span key={sound} className="rounded-2xl border border-vellum/10 bg-vellum/5 px-4 py-3 text-sm text-vellum/75">{sound}</span>)}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-8 rounded-[2rem] border border-gold/25 bg-gold/10 p-6">
        <p className="text-sm uppercase tracking-[.35em] text-gold">Random historical fact</p>
        <p className="mt-3 text-2xl font-serif text-vellum">{immersiveFactDeck[0]}</p>
      </div>
    </section>
  );
}

export function CivilizationGraphPreview() {
  const links = ['Books', 'Cities', 'Routes', 'Scholars', 'Markets', 'Architecture', 'Daily life', 'Memory'];
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <p className="mb-2 text-sm uppercase tracking-[.35em] text-gold">Living graph</p>
      <h2 className="mb-6 font-serif text-4xl text-vellum md:text-6xl">Civilizations are connected systems</h2>
      <div className="archive-card relative overflow-hidden rounded-[2rem] p-8 map-grid">
        <div className="grid gap-4 md:grid-cols-4">
          {links.map((item, i) => <div key={item} className="rounded-3xl border border-gold/25 bg-archive/80 p-5 text-center"><div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-archive font-bold">{i + 1}</div><h3 className="font-serif text-2xl text-vellum">{item}</h3></div>)}
        </div>
        <p className="mt-6 max-w-4xl text-vellum/70">The platform now treats each civilization as a network: cities connect to routes, routes connect to markets, markets connect to books, books connect to scholars, and all of them connect to ordinary daily life.</p>
      </div>
    </section>
  );
}
