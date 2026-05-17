export type CivilizationWorld = {
  id: string;
  name: string;
  subtitle: string;
  era: string;
  region: string;
  mood: string;
  portalPrompt: string;
  soundscape: string[];
  dailyLife: string;
  cityExperience: string;
  tradeAndEconomy: string;
  scienceAndCulture: string;
  architecture: string;
  militaryAndStrategy: string;
  mythsAndMemory: string;
  transformation: string;
  simultaneousWorlds: string[];
  routes: { name: string; from: string; to: string; cargo: string; risk: string }[];
  gallery: { title: string; type: string; description: string; source: string; license: string }[];
};

export const civilizationWorlds: CivilizationWorld[] = [
  {
    id: 'abbasid-baghdad',
    name: 'Abbasid Baghdad',
    subtitle: 'Paper, markets, libraries and the city of scholars',
    era: '8th–13th centuries',
    region: 'Iraq and the wider Islamic world',
    mood: 'Ink, river light, copper lamps, bookshops, translators, astronomers and merchants under date-palm shade.',
    portalPrompt: 'Enter Baghdad at dawn: the Tigris is bright, paper sellers are opening their stalls, and a student follows a copyist toward a library court.',
    soundscape: ['Reed pens scraping paper', 'Market criers near the bridge', 'Water wheels and river boats', 'Debate in a bookshop'],
    dailyLife: 'A day in Abbasid Baghdad could move from a mosque lesson to a paper market, from a physician’s house to a perfumer’s stall, from a government office to a poetry gathering. The platform treats this as social history: not only caliphs, but copyists, translators, traders, cooks, boatmen, students and families.',
    cityExperience: 'The city is presented as rings of power and movement: palace, mosque, market, river, residential quarters, caravan traffic and scholarly rooms. Instead of a static paragraph, the reader follows routes through places where books and goods changed hands.',
    tradeAndEconomy: 'Baghdad depended on tax systems, agricultural hinterlands, river movement, long-distance trade, textiles, paper, spices, metalwork and the circulation of credit and information.',
    scienceAndCulture: 'The Golden Age is shown through practices: translation, copying, commentary, astronomical observation, mathematical calculation, medical teaching and multilingual scholarship.',
    architecture: 'Visual modules emphasize round-city memory, mosques, palaces, bridges, libraries, gardens and later manuscript imaginations of Abbasid urban life.',
    militaryAndStrategy: 'Military history is placed in context: frontier zones, provincial armies, court troops, diplomacy and the growing power of regional dynasties.',
    mythsAndMemory: 'Harun al-Rashid and Baghdad also live in literary memory, including story traditions. The site labels court history separately from later tales.',
    transformation: 'Fragmentation, regional dynasties and the Mongol sack of Baghdad in 1258 changed the political world, but Abbasid intellectual memory continued far beyond the city’s fall.',
    simultaneousWorlds: ['Tang and Song China', 'Byzantine frontier worlds', 'Carolingian and post-Carolingian Europe', 'Indian Ocean trading ports'],
    routes: [
      { name: 'Paper and knowledge route', from: 'Central Asia', to: 'Baghdad', cargo: 'Paper techniques, texts, scholars', risk: 'Political instability and long-distance travel' },
      { name: 'Indian Ocean link', from: 'Basra', to: 'India and East Africa', cargo: 'Spices, textiles, medicines, stories', risk: 'Storms, piracy, port taxes' }
    ],
    gallery: [
      { title: 'Bookshop lane reconstruction', type: 'City scene', description: 'A conceptual card for copyists, paper sellers and students.', source: 'Internal educational visualization', license: 'Original site content' },
      { title: 'Translation table', type: 'Knowledge diagram', description: 'Greek, Syriac, Persian, Sanskrit and Arabic knowledge paths.', source: 'Internal source-based diagram', license: 'Original site content' }
    ]
  },
  {
    id: 'andalus-cordoba',
    name: 'Al-Andalus and Cordoba',
    subtitle: 'Courtyards, lamps, poetry, agriculture and translation rooms',
    era: '711–1492 CE',
    region: 'Iberian Peninsula',
    mood: 'Orange blossom courtyards, irrigated gardens, horses in narrow streets, Arabic poetry, Hebrew learning and Latin translation.',
    portalPrompt: 'Walk into Cordoba after sunset: lamps glow near the mosque, water moves through channels, and a traveler hears Arabic, Romance and Hebrew in the same city.',
    soundscape: ['Water channels in gardens', 'Hooves on stone streets', 'Poetry in a courtyard', 'Tools in a leather market'],
    dailyLife: 'The Andalusi experience highlights farmers, artisans, physicians, poets, judges, translators and families. It avoids reducing the civilization to either romance or conflict.',
    cityExperience: 'Cordoba, Granada, Toledo and Seville become explorable nodes with architecture, books, agriculture, crafts and frontier politics.',
    tradeAndEconomy: 'Irrigation, crops, textiles, metalwork, books, horses and Mediterranean trade connect the cities to wider networks.',
    scienceAndCulture: 'Philosophy, medicine, astronomy, poetry and translation moved across Arabic, Hebrew, Latin and Romance environments.',
    architecture: 'Arches, courtyards, gardens, water systems, city walls and palatial spaces form the visual grammar of the section.',
    militaryAndStrategy: 'Frontier warfare, diplomacy, tribute, alliances and changing dynasties are shown without making conflict the only story.',
    mythsAndMemory: 'Al-Andalus is often idealized or demonized; the platform displays coexistence, hierarchy, creativity and conflict as different layers.',
    transformation: 'Political fragmentation, Christian expansion and later expulsions transformed Iberia, while Andalusi memory continued through architecture, music, language and scholarship.',
    simultaneousWorlds: ['Abbasid and post-Abbasid East', 'Latin Christendom', 'Fatimid and later North Africa', 'Mediterranean merchant networks'],
    routes: [{ name: 'Translation corridor', from: 'Toledo', to: 'Latin Europe', cargo: 'Philosophy, medicine, astronomy texts', risk: 'Language barriers and patronage politics' }],
    gallery: [{ title: 'Cordoba night walk', type: 'Atmospheric scene', description: 'Courtyards, lamps and multilingual urban life.', source: 'Internal educational visualization', license: 'Original site content' }]
  },
  {
    id: 'silk-road-caravan',
    name: 'Silk Road Caravan Worlds',
    subtitle: 'Oasis cities, dangerous passes, merchants and stories crossing Eurasia',
    era: 'Ancient to early modern',
    region: 'Eurasia',
    mood: 'Dust, bells, cold passes, oasis lamps, caravanserai fires and languages from many worlds.',
    portalPrompt: 'Join a caravan before sunrise: the camels are loaded, a guide checks water skins, and every traveler knows the next well matters.',
    soundscape: ['Camel bells', 'Wind at a mountain pass', 'Caravanserai cooking fires', 'Merchants bargaining in several languages'],
    dailyLife: 'The Silk Road is experienced through survival: water, animals, contracts, guides, translators, guards, illness, weather, trust and rumor.',
    cityExperience: 'Samarkand, Bukhara, Kashgar, Merv and Baghdad appear as nodes where goods, beliefs, technologies and stories were exchanged.',
    tradeAndEconomy: 'Silk was only one part of a wider system including horses, paper, medicines, metals, dyes, glass, spices, slaves, books and diplomatic gifts.',
    scienceAndCulture: 'Knowledge traveled with people: monks, envoys, physicians, astronomers, scribes and merchants all moved ideas.',
    architecture: 'Caravanserais, city gates, bazaars, storage yards, bridges and desert wells become the visual system.',
    militaryAndStrategy: 'Control of routes meant revenue, intelligence and prestige. Empires guarded, taxed or disrupted movement.',
    mythsAndMemory: 'The Silk Road is not a single romantic highway; it is a shifting network of land and sea routes.',
    transformation: 'Maritime routes, imperial changes and new powers shifted the balance of Eurasian exchange, but route memory survived.',
    simultaneousWorlds: ['Mongol Empire', 'Song and Yuan China', 'Islamic Central Asia', 'Mediterranean ports'],
    routes: [{ name: 'Oasis chain', from: 'Kashgar', to: 'Samarkand', cargo: 'Textiles, horses, paper, stories', risk: 'Desert, bandits, snow and politics' }],
    gallery: [{ title: 'Caravan survival board', type: 'Simulation panel', description: 'Water, animals, weather, guides and route choices.', source: 'Internal educational visualization', license: 'Original site content' }]
  },
  {
    id: 'ottoman-istanbul',
    name: 'Ottoman Istanbul',
    subtitle: 'Harbors, domes, workshops and an imperial city after 1453',
    era: '1453–early modern era',
    region: 'Anatolia, Balkans and Mediterranean',
    mood: 'Harbor calls, domes, timber houses, coffee, court ceremonies, shipyards and markets around the Bosporus.',
    portalPrompt: 'Stand near the harbor: ships unload timber and grain, craftsmen open workshops, and the skyline is being remade by imperial architecture.',
    soundscape: ['Shipyard hammers', 'Harbor gulls', 'Coffeehouse conversation', 'Calligraphy tools and market scales'],
    dailyLife: 'Ottoman Istanbul is explored through neighborhoods, guilds, kitchens, mosques, churches, synagogues, schools, baths, markets and port life.',
    cityExperience: 'The city is a layered museum: Byzantine walls, Ottoman palaces, religious institutions, markets, docks and water routes.',
    tradeAndEconomy: 'Grain, timber, textiles, spices, taxes, guilds and maritime routes made the city a major imperial hub.',
    scienceAndCulture: 'Education, law, calligraphy, astronomy, medicine, architecture, music and manuscript culture shape the urban experience.',
    architecture: 'Domes, courtyards, külliye complexes, fountains, bridges, bathhouses and fortifications are displayed as explorable galleries.',
    militaryAndStrategy: 'The 1453 conquest is shown with walls, artillery, naval movement and logistics, then followed into administration and urban transformation.',
    mythsAndMemory: '1453 is a powerful memory for many communities; the platform avoids triumphalism and explains Ottoman and Byzantine perspectives.',
    transformation: 'Istanbul became an Ottoman capital and later a modern city layered with many pasts.',
    simultaneousWorlds: ['Late Byzantine world', 'Renaissance Italy', 'Mamluk Egypt', 'Timurid and post-Timurid courts'],
    routes: [{ name: 'Bosporus grain route', from: 'Black Sea', to: 'Istanbul', cargo: 'Grain, timber, fish, people', risk: 'Weather, blockade, taxation' }],
    gallery: [{ title: '1453 siege layers', type: 'Battle reconstruction', description: 'Walls, artillery, ships and gates as a layered map.', source: 'Internal educational visualization', license: 'Original site content' }]
  }
];

export const immersiveFactDeck = [
  'In a manuscript economy, a copyist could be as important to knowledge circulation as a modern printer or server.',
  'A caravanserai was not only an inn; it was a security system, warehouse, news exchange and social meeting point.',
  'Many medieval cities were experienced by smell as much as sight: bread ovens, tanneries, spice stalls, animals, smoke and river mud.',
  'Translation movements usually depended on patrons, money, paper, trained readers and multilingual communities—not only individual genius.',
  'A city gate was a border checkpoint, tax point, military structure and storytelling landmark at the same time.'
];
