export default function Sources() {
  const principles = [
    'Real source first: public-domain books, open catalog records, museum/archive pages and verified metadata are preferred over invented summaries.',
    'Neutral Islamic history: the site does not push Sunni polemic, Shia polemic, dynasty propaganda or anti-dynasty propaganda. Sensitive events are explained calmly with source labels.',
    'Sacred narratives: Quranic and Biblical stories are treated respectfully as scripture/tradition, with tafsir/commentary, geography, archaeology and later storytelling separated.',
    'Legends and tales: Gilgamesh, Homeric epics, Shahnameh heroes and similar material are clearly marked as literary or cultural traditions, not simple factual biographies.',
    'AI summaries: every AI-enhanced explanation is a guide based on listed sources, never a replacement for the original text.'
  ];

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <p className="text-gold">Source policy</p>
      <h1 className="font-serif text-5xl">Sources, citations, balance and reliability</h1>
      <div className="archive-card mt-8 space-y-4 rounded-3xl p-6 text-vellum/75">
        <p>Bayt al-Tareekh uses public-domain, open-license, permission-safe or source-linked metadata records. Copyrighted books are not hosted without permission. External records remain links until curators verify rights.</p>
        <p>Every reader room separates primary sources, secondary sources, AI summaries, user notes, images/maps and citations.</p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {principles.map((principle, index) => <div className="parchment rounded-3xl p-5" key={principle}><p className="text-sm uppercase tracking-widest text-copper">Rule {index + 1}</p><p className="mt-3 text-ink/80">{principle}</p></div>)}
      </div>
    </main>
  );
}
