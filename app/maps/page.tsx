import { Section } from '@/components/Cards';
import { historicMapResources, places } from '@/lib/data';

export default function Maps() {
  return (
    <main>
      <Section eyebrow="Historical atlas" title="Maps, routes, cities and historic-map previews">
        <div className="grid gap-5 lg:grid-cols-[1fr_340px]">
          <div className="space-y-5">
            {historicMapResources.map((map) => (
              <article key={map.id} className="archive-card overflow-hidden rounded-[2rem]">
                <div className="grid gap-0 lg:grid-cols-[1.15fr_.85fr]">
                  <iframe
                    title={`${map.title} Google Maps preview`}
                    src={map.embedUrl}
                    className="min-h-[360px] w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="p-6">
                    <p className="text-sm uppercase tracking-[.3em] text-gold">{map.period}</p>
                    <h2 className="mt-2 font-serif text-3xl text-vellum">{map.title}</h2>
                    <p className="mt-3 text-vellum/70">{map.description}</p>
                    <dl className="mt-5 grid gap-3 text-sm text-vellum/70">
                      <div className="rounded-2xl bg-vellum/10 p-3"><dt className="text-gold">Region</dt><dd>{map.region}</dd></div>
                      <div className="rounded-2xl bg-vellum/10 p-3"><dt className="text-gold">Coordinates</dt><dd>{map.center.lat}, {map.center.lng} (zoom {map.center.zoom})</dd></div>
                      <div className="rounded-2xl bg-vellum/10 p-3"><dt className="text-gold">Historic map source</dt><dd>{map.sourceLabel}</dd></div>
                    </dl>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <a href={map.googleMapsUrl} className="rounded-2xl bg-gold px-5 py-3 font-semibold text-archive">Open Google Maps</a>
                      <a href={map.historicMapUrl} className="rounded-2xl border border-gold/40 px-5 py-3 text-gold">Open historic map collection</a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <aside className="space-y-4">
            <div className="archive-card rounded-2xl p-4">
              <p className="text-gold">City pins</p>
              <div className="mt-4 space-y-3">
                {places.map((place) => (
                  <a key={place.id} href={`https://www.google.com/maps/search/?api=1&query=${place.latitude},${place.longitude}`} className="block rounded-2xl bg-vellum/10 p-4 hover:bg-gold/15">
                    <h3 className="font-serif text-2xl">{place.name}</h3>
                    <p className="text-sm text-vellum/65">{place.historicalRegion} • {place.currentCountry}</p>
                    <p className="mt-2 text-sm text-vellum/70">{place.description}</p>
                  </a>
                ))}
              </div>
            </div>
            {['Era', 'Region', 'Civilization', 'Dynasty', 'Topic', 'Source/license'].map((filter) => (
              <div key={filter} className="archive-card rounded-2xl p-4">
                <p className="text-gold">Filter</p>
                <h3 className="font-serif text-2xl">{filter}</h3>
              </div>
            ))}
          </aside>
        </div>
      </Section>
    </main>
  );
}
