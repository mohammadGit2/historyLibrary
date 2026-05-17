import { civilizationWorlds } from '@/lib/civilizations';

export default function WorldsPage() {
  return (
    <main className="py-10">
      <section className="mx-auto max-w-7xl px-4">
        <p className="text-gold">Immersive civilization atlas</p>
        <h1 className="font-serif text-6xl">Living Historical Worlds</h1>
        <p className="mt-5 max-w-4xl text-xl leading-9 text-vellum/75">Explore civilizations as environments: markets, routes, architecture, soundscapes, ordinary lives, scholarship, warfare, memory and transformation.</p>
      </section>
      {civilizationWorlds.map((world) => (
        <section id={world.id} key={world.id} className="mx-auto max-w-7xl scroll-mt-24 px-4 py-12">
          <div className="archive-card rounded-[2rem] p-7">
            <p className="text-gold">{world.era} • {world.region}</p>
            <h2 className="mt-2 font-serif text-5xl text-vellum">{world.name}</h2>
            <p className="mt-2 text-xl text-gold/90">{world.subtitle}</p>
            <p className="mt-5 text-lg leading-9 text-vellum/75">{world.mood}</p>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {[['Day in the life', world.dailyLife], ['City experience', world.cityExperience], ['Trade and economy', world.tradeAndEconomy], ['Science and culture', world.scienceAndCulture], ['Architecture', world.architecture], ['Military and strategy', world.militaryAndStrategy], ['Myths and memory', world.mythsAndMemory], ['Decline and transformation', world.transformation], ['What existed simultaneously?', world.simultaneousWorlds.join(' • ')]].map(([title, text]) => <article className="parchment rounded-3xl p-5" key={title}><h3 className="font-serif text-2xl">{title}</h3><p className="mt-3 text-ink/75">{text}</p></article>)}
            </div>
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <div className="rounded-3xl border border-gold/25 p-5"><h3 className="font-serif text-3xl text-vellum">Routes and simulations</h3>{world.routes.map((route) => <div className="mt-4 rounded-2xl bg-vellum/10 p-4" key={route.name}><p className="text-gold">{route.name}</p><p className="text-vellum/75">{route.from} → {route.to}</p><p className="text-vellum/60">Cargo: {route.cargo}. Risk: {route.risk}.</p></div>)}</div>
              <div className="rounded-3xl border border-gold/25 p-5"><h3 className="font-serif text-3xl text-vellum">Visual gallery</h3>{world.gallery.map((item) => <div className="mt-4 rounded-2xl bg-vellum/10 p-4" key={item.title}><p className="text-gold">{item.type}</p><h4 className="text-xl text-vellum">{item.title}</h4><p className="text-vellum/65">{item.description}</p><p className="mt-2 text-xs text-vellum/45">{item.source} • {item.license}</p></div>)}</div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
