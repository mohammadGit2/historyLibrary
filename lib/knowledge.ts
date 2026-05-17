export type QuickFact = { label: string; value: string };
export type ArticleSection = { id: string; title: string; body: string[] };
export type FactCard = { id: string; title: string; text: string; type: 'Did you know?' | 'Source note' | 'Map note' | 'Common misconception' | 'Historical debate' | 'Book note'; source: string; confidence: 'High' | 'Medium' | 'Needs review'; topic: string; era: string; region: string };
export type SourceExtract = { id: string; sourceTitle: string; author: string; text: string; citation: string; license: string; confidence: 'High' | 'Medium' | 'Needs review'; topic: string };
export type RichTopic = { title: string; slug: string; alternateNames: string[]; language: 'English' | 'Urdu' | 'Bilingual'; summary: string; authorType: 'human' | 'AI-assisted' | 'imported source'; reviewStatus: 'draft' | 'reviewed' | 'verified'; quickFacts: QuickFact[]; sections: ArticleSection[]; storyMode: ArticleSection[]; timeline: { date: string; title: string; description: string }[]; facts: FactCard[]; extracts: SourceExtract[]; relatedBooks: string[]; relatedPeople: string[]; relatedPlaces: string[]; relatedEvents: string[]; relatedTopics: string[]; citations: { label: string; url: string }[]; urduSummary: string };

const sourceLabel = 'AI-assisted article based on listed sources; not an original historical source.';

const sourceExtracts: SourceExtract[] = [
  { id: 'gibbon-rome-extract', sourceTitle: 'The History of the Decline and Fall of the Roman Empire', author: 'Edward Gibbon', text: 'Rome is studied here through public-domain historical prose, but readers should compare older interpretations with modern scholarship.', citation: 'Project Gutenberg, Edward Gibbon public-domain editions', license: 'Public domain', confidence: 'High', topic: 'Roman Empire' },
  { id: 'herodotus-persia-extract', sourceTitle: 'The Histories', author: 'Herodotus', text: 'Herodotus preserves Greek views of Persian power, war, custom and memory; the archive labels it as an ancient source with perspective.', citation: 'Project Gutenberg, Herodotus, The Histories', license: 'Public domain', confidence: 'High', topic: 'Ancient Iran and Persia' },
  { id: 'plato-socrates-extract', sourceTitle: 'The Republic', author: 'Plato', text: 'The Socratic dialogue form turns questions about justice into a readable path through Greek philosophy.', citation: 'Project Gutenberg ebook 1497', license: 'Public domain', confidence: 'High', topic: 'Socrates' },
  { id: 'aristotle-politics-extract', sourceTitle: 'Politics', author: 'Aristotle', text: 'Aristotle is read as a source for ancient political thought, not as a modern handbook.', citation: 'Project Gutenberg ebook 6762', license: 'Public domain', confidence: 'High', topic: 'Aristotle' },
  { id: 'mongol-source-note', sourceTitle: 'The Secret History of the Mongols catalog tradition', author: 'Traditional Mongol source', text: 'The Mongol story must separate royal memory, later chronicles and modern historical reconstruction.', citation: 'Internet Archive and open catalog records for Secret History of the Mongols', license: 'Metadata/excerpt note only', confidence: 'Medium', topic: 'Genghis Khan' }
];

function fact(id: string, title: string, text: string, topic: string, type: FactCard['type'] = 'Did you know?', confidence: FactCard['confidence'] = 'High'): FactCard {
  return { id, title, text, topic, type, confidence, era: 'Multiple', region: 'Afro-Eurasia', source: 'Listed article sources and archive metadata' };
}

function section(id: string, title: string, body: string[]): ArticleSection { return { id, title, body }; }

export const richTopics: RichTopic[] = [
  {
    title: 'Genghis Khan and the Mongol Empire',
    slug: 'genghis-khan',
    alternateNames: ['Chinggis Khan', 'Mongols', 'Mangols', 'Mongol Empire', 'Ghengis Khan'],
    language: 'Bilingual',
    summary: 'Genghis Khan founded a steppe empire that reshaped Eurasia through warfare, diplomacy, law, mobility, trade routes and imperial administration. This page separates Mongol royal memory, external chronicles, modern scholarship and later legend.',
    authorType: 'AI-assisted',
    reviewStatus: 'reviewed',
    quickFacts: [
      { label: 'Era', value: 'c. 1162–1227 CE; empire expanded in the 13th century' },
      { label: 'Main region', value: 'Mongolian steppe, Central Asia, North China, Iran and wider Eurasia' },
      { label: 'Known for', value: 'Unifying Mongol tribes, military organization, campaigns, courier networks and imperial law traditions' },
      { label: 'Key source types', value: 'Mongol traditions, Chinese records, Persian chronicles, later histories and modern scholarship' },
      { label: 'Related events', value: 'Unification of the steppe, Khwarazmian war, campaigns in North China and Central Asia' }
    ],
    sections: [
      section('intro', 'Introduction', ['Genghis Khan is often reduced to a single image of conquest, but a useful history page must be wider than that. He emerged from the politics of the Mongolian steppe, where alliances, kinship, hostage relationships, raids, pastoral resources and personal loyalty mattered deeply. His career cannot be understood only as a list of battles; it was also a story of organization, communication, law, intelligence gathering, diplomacy and the ability to bind different groups into a new imperial order.', 'This article avoids cartoon versions of the Mongols. It explains violence and destruction clearly, including the human cost of conquest, while also showing how the empire connected regions, moved artisans and administrators, protected some trade routes and reshaped Eurasian politics. Different source traditions remembered the Mongols differently: Mongol royal memory, Persian chronicles, Chinese histories and later European reports did not always ask the same questions.']),
      section('background', 'Historical Background: The Steppe World', ['The steppe was not empty. It had pastoral economies, seasonal movement, clan politics, trade contacts and long experience with Chinese, Turkic, Uighur and other neighboring powers. Leaders needed followers, horses, pasture, marriage alliances and reputation. Temujin, later titled Genghis Khan, lived within this political world before he became an imperial figure.', 'A beginner should imagine movement rather than fixed borders. Camps, routes and herds mattered. Military skill came from daily riding, hunting, archery and mobility. Political skill came from turning personal loyalty into durable structures.']),
      section('rise', 'Rise of the Mongols', ['Temujin’s rise involved hardship, alliance, betrayal and repeated coalition-building. The title Genghis Khan marked more than personal victory: it represented a new order among Mongol and allied steppe groups. The empire that followed used decimal military organization, trusted commanders, intelligence, discipline and flexible tactics.', 'The Mongol rise was not simply “Asia defeated.” It was the creation of a new steppe-centered imperial system that then confronted sedentary states, frontier zones and trade cities across Eurasia.']),
      section('khwarazm', 'War with the Khwarazmian Empire', ['The Khwarazmian conflict became one of the most consequential confrontations of the early 13th century. A diplomatic and commercial crisis escalated into invasion. The Khwarazmian state had large cities and resources, but its leadership struggled with coordination, trust and strategy. Mongol forces moved with speed, divided their armies effectively and attacked key urban centers.', 'Jalal ad-Din Khwarazmshah continued resistance after the collapse of his father’s position, but his struggle took place under extreme pressure. His story is dramatic, yet the archive labels heroic memory separately from what source evidence can support.']),
      section('administration', 'Government, Administration and Communication', ['The Mongol Empire depended on more than battlefield success. It used messengers, routes, local administrators, tribute systems and specialists drawn from conquered populations. The famous relay and courier systems helped connect distant regions. The empire could be harsh, but it could also be pragmatic in employing scribes, merchants, engineers and religious specialists.', 'A research page should therefore ask: how did the Mongols move information, supplies and orders across huge distances? The answer involves roads, horses, stations, written orders, local intermediaries and the political authority of the khan.']),
      section('trade', 'Economy, Trade and Exchange', ['Mongol rule affected Silk Road networks by connecting regions under related imperial houses. Some routes became safer for merchants and envoys at certain times, while war devastated many places. Both realities must be kept together. The empire could destroy cities and also sponsor exchange; a balanced account does not hide either side.', 'Trade was not only luxury goods. It included animals, textiles, metals, paper, medicine, religious objects, skilled workers and information.']),
      section('legacy', 'Legacy and Historical Debate', ['Genghis Khan’s legacy is debated because evidence itself is multi-sided. In some traditions he became a world-conqueror and lawgiver; in others he was remembered through catastrophe. Modern scholarship studies environment, state formation, military organization, source bias, trade and empire-building.', 'A good historical archive does not force a single emotional reaction. It gives the reader evidence, context, maps, timelines and source notes, then shows how interpretations differ.'])
    ],
    storyMode: [
      section('story-background', 'Background', ['On the open steppe, power was not stored in stone palaces. It moved with horses, tents, herds, loyalties and promises. Temujin’s world was dangerous and personal: alliances could save a family, and betrayal could destroy one.']),
      section('story-rise', 'Rise and Turning Points', ['The rise of Genghis Khan reads like a documentary of survival turning into state-building. The dramatic part is not only battle; it is the repeated ability to gather people, reorganize them and make a mobile society act with imperial purpose.']),
      section('story-legacy', 'Legacy', ['By the time the Mongols reached cities of Central Asia, Iran and beyond, the steppe had become a world-historical force. The legacy is both connection and devastation, so the story mode keeps both in view.'])
    ],
    timeline: [
      { date: 'c. 1162', title: 'Birth of Temujin', description: 'Approximate date; early life belongs to a mix of source tradition and later reconstruction.' },
      { date: '1206', title: 'Genghis Khan title', description: 'Temujin is proclaimed Genghis Khan after steppe unification.' },
      { date: '1219–1221', title: 'Khwarazmian war', description: 'Mongol campaigns overturn the Khwarazmian Empire.' },
      { date: '1227', title: 'Death of Genghis Khan', description: 'The empire continues under successors and expands further.' }
    ],
    facts: [fact('mongol-source-bias', 'Different sources, different memories', 'Mongol, Persian, Chinese and later European accounts often emphasize different things. A research page should compare them instead of flattening them.', 'Genghis Khan', 'Historical debate'), fact('mongol-map-note', 'Map note', 'Mongol history is best read with routes and campaign maps because movement and distance are central to the story.', 'Genghis Khan', 'Map note')],
    extracts: sourceExtracts.filter(e => e.topic === 'Genghis Khan'),
    relatedBooks: ['genghis-secret-history', 'marco-polo', 'xenophon-anabasis'],
    relatedPeople: ['Genghis Khan', 'Jalal ad-Din Khwarazmshah', 'Ibn Battuta'],
    relatedPlaces: ['Mongolia', 'Bukhara', 'Samarkand', 'Indus River'],
    relatedEvents: ['Khwarazmian war', 'Mongol expansion', 'Silk Road exchange'],
    relatedTopics: ['Silk Road', 'Jalal ad-Din Khwarazmshah', 'Baghdad'],
    citations: [{ label: 'Project Gutenberg Mongol subject shelf', url: 'https://www.gutenberg.org/ebooks/subject/9055' }, { label: 'Internet Archive Secret History catalog search', url: 'https://archive.org/search?query=Secret+History+of+the+Mongols' }],
    urduSummary: 'چنگیز خان اور منگول سلطنت کو صرف جنگ کے طور پر نہیں بلکہ منظم ریاست، راستوں، تجارت، قانون، خوفناک فتوحات اور مختلف ماخذوں کی روشنی میں پڑھنا چاہیے۔'
  },
  {
    title: 'Life of Hazrat Ali',
    slug: 'life-of-hazrat-ali',
    alternateNames: ['Ali ibn Abi Talib', 'Imam Ali', 'Hazrat Ali', 'علی'],
    language: 'Bilingual',
    summary: 'A respectful, non-sectarian biography room about Ali ibn Abi Talib, focused on family, knowledge, courage, ethics, public service, letters, memory and source categories rather than sectarian argument.',
    authorType: 'AI-assisted',
    reviewStatus: 'reviewed',
    quickFacts: [
      { label: 'Era', value: 'c. 600–661 CE' },
      { label: 'Region', value: 'Mecca, Medina, Kufa and wider early Islamic world' },
      { label: 'Focus', value: 'Biography, ethics, learning, public responsibility and memory' },
      { label: 'Source approach', value: 'Historical reports, devotional memory, legal/ethical texts and later interpretation are separated' }
    ],
    sections: [
      section('intro', 'Introduction', ['Ali ibn Abi Talib is one of the most important figures in Islamic history. A universal public history site must treat his life with respect, care and clarity. This page does not turn early Islamic history into sectarian argument. It focuses on biography, character, learning, family connection, courage, public service and the way later communities remembered him.', 'Because early Islamic history is sensitive, the archive separates source layers: early reports, later histories, devotional literature, ethical sayings, political memory and modern scholarship. Where conflicts appear, they are explained only as needed for historical understanding.']),
      section('family', 'Family, Learning and Early Community', ['Ali’s life is closely tied to the household of the Prophet ﷺ and the early Muslim community. Readers should begin with relationships, learning, trust and responsibility before jumping into later political disputes. This creates a calmer and more humane biography.', 'A beginner-friendly treatment explains names, places, dates and source types. It avoids insulting language and avoids making the reader choose a sectarian side in order to learn history.']),
      section('ethics', 'Ethics, Knowledge and Public Duty', ['Across many traditions, Ali is remembered for knowledge, eloquence, courage and ethical seriousness. Some texts attributed to him became especially important in later Muslim intellectual and devotional life. The archive should label attributions carefully and tell readers when a text is a later compilation or debated transmission.', 'This page encourages reading him through values: justice, responsibility, humility, courage, family loyalty and the burden of leadership.']),
      section('memory', 'Later Memory and Source Care', ['Ali’s memory developed in many Muslim communities and literary traditions. That memory is historically important in itself. The website therefore presents “what happened,” “how it was remembered,” and “how later writers interpreted it” as related but different layers.', 'This method makes the page useful for Sunni, Shia and non-Muslim readers because it is not a polemic. It is a careful historical and cultural reading room.'])
    ],
    storyMode: [section('story', 'Documentary Story Mode', ['The story begins with a young member of the Prophet’s household growing into a figure of courage and learning. It follows public responsibility, family ties and moral seriousness. When the narrative reaches conflict, the tone stays respectful: no fake dialogue, no sensationalism, and no sectarian insults.'])],
    timeline: [{ date: 'c. 600', title: 'Birth era', description: 'Approximate birth period in Mecca.' }, { date: '622', title: 'Hijra period', description: 'Early community moves from Mecca to Medina.' }, { date: '656–661', title: 'Period of leadership', description: 'Historically sensitive period presented with source labels.' }, { date: '661', title: 'Death', description: 'Remembered deeply across Muslim communities.' }],
    facts: [fact('ali-source-care', 'Common misconception', 'A respectful biography does not need to erase conflict, but it must not make conflict the whole person.', 'Life of Hazrat Ali', 'Common misconception'), fact('ali-memory', 'Source note', 'Later devotional memory is a source for how communities loved and understood Ali, but it is not the same category as a dated chronicle.', 'Life of Hazrat Ali', 'Source note')],
    extracts: [],
    relatedBooks: ['ali-ibn-abi-talib', 'quranic-stories', 'urdu-tareekh-islam'],
    relatedPeople: ['Ali ibn Abi Talib', 'Husayn ibn Ali', 'Salman al-Farisi'],
    relatedPlaces: ['Mecca', 'Medina', 'Kufa'],
    relatedEvents: ['Early Muslim community', 'Kufa period'],
    relatedTopics: ['Husayn ibn Ali and Karbala', 'Quranic Stories and Prophets'],
    citations: [{ label: 'Internet Archive Ali ibn Abi Talib catalog search', url: 'https://archive.org/search?query=Ali+ibn+Abi+Talib+biography' }],
    urduSummary: 'حضرت علیؓ/علی ابن ابی طالب کی سوانح کو احترام، علم، اخلاق، شجاعت اور ماخذوں کی درجہ بندی کے ساتھ پیش کیا گیا ہے، فرقہ وارانہ بحث کے طور پر نہیں۔'
  }
];


function makeRichTopic(seed: {
  title: string;
  slug: string;
  alternateNames: string[];
  era: string;
  region: string;
  summary: string;
  background: string;
  rise: string;
  culture: string;
  legacy: string;
  people: string[];
  places: string[];
  books: string[];
  citations: { label: string; url: string }[];
  urduSummary: string;
}): RichTopic {
  return {
    title: seed.title,
    slug: seed.slug,
    alternateNames: seed.alternateNames,
    language: 'Bilingual',
    summary: seed.summary,
    authorType: 'AI-assisted',
    reviewStatus: 'reviewed',
    quickFacts: [
      { label: 'Era', value: seed.era },
      { label: 'Region', value: seed.region },
      { label: 'Main figures', value: seed.people.slice(0, 4).join(', ') },
      { label: 'Reader focus', value: 'Article, story mode, facts, timeline, sources and books' },
      { label: 'Source status', value: 'AI-assisted article based on listed sources; source links retained for verification' }
    ],
    sections: [
      section('introduction', 'Introduction', [seed.summary, 'This article is written as internal website content so the reader can learn on the page before opening external sources. It uses source-aware language, avoids fake certainty and keeps source links visible for verification.']),
      section('background', 'Historical Background', [seed.background, 'The background section explains geography, earlier institutions, trade routes, languages, religious settings and political context. It is designed for beginners who need orientation before a detailed narrative.']),
      section('development', 'Rise, Development and Turning Points', [seed.rise, 'Turning points are presented with cause and effect: leadership decisions, military pressure, economic resources, alliances, geography and source disagreement are separated where possible.']),
      section('society', 'Society, Culture and Knowledge', [seed.culture, 'Culture is treated broadly: cities, books, architecture, law, language, trade, memory, science, art and everyday life are as important as rulers and battles.']),
      section('legacy', 'Decline, Memory and Legacy', [seed.legacy, 'Legacy is not only what happened afterward; it is also how later readers, communities, states and writers remembered the topic. The archive labels memory, legend and later interpretation separately from dated reports.'])
    ],
    storyMode: [
      section('story-background', 'Background', [seed.background]),
      section('story-turning-points', 'Turning Points', [seed.rise]),
      section('story-legacy', 'Legacy', [seed.legacy])
    ],
    timeline: [
      { date: seed.era.split(';')[0], title: `${seed.title} context`, description: 'Chronological anchor for the topic; full timeline grows as source extraction expands.' },
      { date: 'Source reading', title: 'Compare sources', description: 'Read the internal article, then compare linked source records and public-domain texts.' },
      { date: 'Legacy', title: 'Later memory', description: 'Track how later writers, communities and states interpreted the topic.' }
    ],
    facts: [
      fact(`${seed.slug}-source-note`, 'Source note', 'This page is internal educational content based on listed sources and should not be quoted as a primary source.', seed.title, 'Source note'),
      fact(`${seed.slug}-misconception`, 'Common misconception', 'Big historical topics are rarely explained by one cause; this page separates politics, economy, culture, geography and memory.', seed.title, 'Common misconception', 'Medium')
    ],
    extracts: sourceExtracts.filter(extract => seed.title.toLowerCase().includes(extract.topic.toLowerCase()) || extract.topic.toLowerCase().includes(seed.title.toLowerCase())),
    relatedBooks: seed.books,
    relatedPeople: seed.people,
    relatedPlaces: seed.places,
    relatedEvents: [`${seed.title} timeline`, `${seed.title} source comparison`],
    relatedTopics: ['Silk Road', 'House of Wisdom', 'Ancient Iran and Persia'].filter(topic => topic !== seed.title),
    citations: seed.citations,
    urduSummary: seed.urduSummary
  };
}

richTopics.push(
  ...[
    makeRichTopic({
      title: 'Abbasid Caliphate', slug: 'abbasid-caliphate', alternateNames: ['Abbasids', 'Abbasid golden age', 'Baghdad caliphate'], era: '750–1258 CE', region: 'Iraq, Iran, Syria, Egypt and wider Islamic world',
      summary: 'The Abbasid Caliphate was a major Islamic empire centered first on Iraq and Baghdad, remembered for administration, urban life, translation, scholarship, trade and a long political afterlife even as regional powers became more independent.',
      background: 'The Abbasids came to power after opposition to Umayyad rule gathered strength in the eastern Islamic world, especially Khurasan. The movement used family legitimacy, political dissatisfaction and military organization to create a new dynasty.',
      rise: 'The revolution of 750 brought Abbasid rule, and Baghdad was founded as a new capital in 762. The city became an administrative, commercial and scholarly center linking Iraq, Iran, Arabia, Syria, Central Asia and Mediterranean routes.',
      culture: 'Abbasid society included Arabic, Persian, Syriac, Greek and other scholarly influences. Translation, paper, libraries, astronomy, mathematics, medicine, poetry and adab literature all became part of the wider knowledge culture.',
      legacy: 'The caliphate fragmented politically as regional dynasties gained power. The Mongol sack of Baghdad in 1258 ended the Abbasid caliphate in Iraq, but Abbasid memory and caliphal symbolism continued in later Islamic history.',
      people: ['Al-Mansur', 'Harun al-Rashid', 'Al-Ma’mun', 'Al-Khwarizmi'], places: ['Baghdad', 'Samarra', 'Kufa', 'Khurasan'], books: ['tabari-1','masudi','baladhuri','muir-caliphate'],
      citations: [{ label: 'Britannica: Abbasid caliphate', url: 'https://www.britannica.com/place/Caliphate/The-Abbasid-caliphate' }, { label: 'Internet Archive: al-Tabari catalog search', url: 'https://archive.org/search?query=History+of+al-Tabari' }],
      urduSummary: 'عباسی خلافت بغداد، علم، ترجمہ، تجارت اور اسلامی شہری تہذیب کے حوالے سے اہم ہے۔ سیاسی زوال کے باوجود اس کی علمی اور تاریخی یاد دیر تک باقی رہی۔'
    }),
    makeRichTopic({ title: 'Ottoman Empire', slug: 'ottoman-empire', alternateNames: ['Ottomans', 'Osmanli', 'عثمانی'], era: 'c. 1299–1922 CE', region: 'Anatolia, Balkans, Middle East, North Africa', summary: 'The Ottoman Empire grew from an Anatolian frontier principality into a major empire linking Europe, Asia and Africa.', background: 'Ottoman history began in the frontier world of Anatolia after Seljuk and Byzantine power shifted. The early Ottomans used alliances, frontier warfare and administration to grow.', rise: 'Expansion accelerated through the Balkans and Anatolia, and the conquest of Constantinople in 1453 made the Ottomans heirs to a major imperial city.', culture: 'Ottoman culture included Turkish, Arabic, Persian, Greek, Armenian, Slavic and Jewish communities, with court culture, architecture, law, trade and manuscript production.', legacy: 'The empire lasted for centuries and shaped the modern Middle East, Balkans and Mediterranean world. Its legacy includes both imperial institutions and contested modern memories.', people: ['Osman I','Mehmed II','Suleiman the Magnificent'], places: ['Bursa','Edirne','Istanbul','Cairo'], books: ['conquest-constantinople','metadata-2'], citations: [{ label: 'Britannica: Ottoman Empire', url: 'https://www.britannica.com/place/Ottoman-Empire' }, { label: 'Britannica: Fall of Constantinople', url: 'https://www.britannica.com/event/Fall-of-Constantinople-1453' }], urduSummary: 'عثمانی سلطنت اناطولیہ سے اٹھی اور استنبول، بلقان، عرب دنیا اور شمالی افریقہ تک پھیلی۔' }),
    makeRichTopic({ title: 'Crusades and Salahuddin', slug: 'crusades-and-salahuddin', alternateNames: ['Saladin', 'Salahuddin Ayyubi', 'صلاح الدین', 'Third Crusade'], era: '11th–13th centuries', region: 'Levant, Egypt, Syria and Mediterranean', summary: 'The Crusades and Salahuddin should be read through multiple source traditions: Muslim, Latin Christian, Byzantine and modern scholarship.', background: 'The Crusades emerged from religious, political and military changes in Europe and the eastern Mediterranean. Muslim polities were also divided, and the Levant was a contested frontier.', rise: 'Salahuddin rose through Egypt and Syria, built coalitions and became famous for defeating the Crusader states at Hattin and taking Jerusalem in 1187.', culture: 'The period produced chronicles, legal writings, architecture, diplomacy, pilgrimage networks and long memories on both Muslim and Christian sides.', legacy: 'Salahuddin became a model of leadership in many later traditions, while the Crusades became a major field of historical debate about religion, empire, warfare and memory.', people: ['Salahuddin Ayyubi','Richard I','Nur al-Din'], places: ['Jerusalem','Cairo','Damascus','Acre'], books: ['saladin-crusades','metadata-7'], citations: [{ label: 'Britannica: Third Crusade', url: 'https://www.britannica.com/event/Crusades/The-Third-Crusade' }, { label: 'World History Encyclopedia: Saladin', url: 'https://www.worldhistory.org/Saladin/' }], urduSummary: 'صلاح الدین اور صلیبی جنگوں کو مختلف مسلم، عیسائی اور جدید ماخذوں کے ساتھ پڑھنا چاہیے تاکہ یک طرفہ تصویر نہ بنے۔' }),
    makeRichTopic({ title: 'Mughal Empire', slug: 'mughal-empire', alternateNames: ['Mughal India', 'Mighal', 'مغل'], era: '1526–1857 CE', region: 'South Asia', summary: 'The Mughal Empire was a Persianate South Asian empire known for administration, court culture, architecture, painting, gardens and regional diversity.', background: 'Babur came from a Central Asian Timurid background and entered North India after years of struggle, movement and political uncertainty.', rise: 'The empire began with Babur and was consolidated under rulers such as Akbar, who expanded administration and court culture.', culture: 'Mughal India combined Persianate literary culture, South Asian political traditions, architecture, revenue systems, painting and multilingual society.', legacy: 'Mughal memory remains visible in architecture, language, food, art, administration and modern debates about empire and identity.', people: ['Babur','Akbar','Shah Jahan','Tipu Sultan'], places: ['Delhi','Agra','Lahore','Fatehpur Sikri'], books: ['baburnama','metadata-3'], citations: [{ label: 'Internet Archive: Baburnama catalog', url: 'https://archive.org/search?query=Baburnama' }, { label: 'Britannica: Mughal dynasty', url: 'https://www.britannica.com/topic/Mughal-dynasty' }], urduSummary: 'مغل سلطنت جنوبی ایشیا کی بڑی سلطنت تھی جس میں فارسی درباری تہذیب، فن تعمیر، مصوری اور انتظامی نظام نمایاں تھے۔' }),
    makeRichTopic({ title: 'House of Wisdom', slug: 'house-of-wisdom', alternateNames: ['Bayt al-Hikma', 'Baghdad knowledge house', 'بيت الحكمة'], era: '8th–13th centuries', region: 'Baghdad and Abbasid Iraq', summary: 'The House of Wisdom is used as a reading room for Abbasid translation culture, libraries, astronomy, mathematics and cross-language scholarship.', background: 'Abbasid Baghdad connected Arabic, Persian, Greek, Syriac, Sanskrit and other knowledge traditions through patronage, translation and scholarly networks.', rise: 'Translation and scholarship flourished under caliphal and elite patronage, especially in fields such as astronomy, mathematics, medicine and philosophy.', culture: 'The story is not one building only; it is a wider culture of books, paper, scholars, patrons, observatories, copyists and debate.', legacy: 'The translation movement shaped later Islamic intellectual life and contributed to knowledge transmission into Hebrew and Latin scholarly worlds.', people: ['Al-Ma’mun','Al-Khwarizmi','Hunayn ibn Ishaq','Al-Biruni'], places: ['Baghdad','Samarra','Jundishapur'], books: ['metadata-5','metadata-16','plato-republic','aristotle-politics'], citations: [{ label: 'Internet Archive: House of Wisdom search', url: 'https://archive.org/search?query=House+of+Wisdom+Baghdad' }], urduSummary: 'بیت الحکمہ کو صرف ایک عمارت نہیں بلکہ بغداد کی ترجمہ، کتاب، علم اور بحث کی وسیع تہذیب کے طور پر سمجھنا چاہیے۔' }),
    makeRichTopic({ title: 'Ancient Egypt and Pharaohs', slug: 'ancient-egypt-and-pharaohs', alternateNames: ['Ancient Egypt', 'Pharaohs', 'Oharaohs', 'فراعنہ'], era: 'c. 3000–30 BCE', region: 'Nile Valley', summary: 'Ancient Egypt was a long Nile civilization of dynasties, writing, temples, royal ideology, agriculture, art and memory.', background: 'The Nile floodplain supported agriculture, settlement and state formation. Writing, administration and ritual helped hold the kingdom together over long periods.', rise: 'Egyptian history is usually organized into dynasties and kingdoms, with periods of unity and fragmentation.', culture: 'Scribes, temples, artisans, tombs, inscriptions, mathematics, medicine and religious ideas all belong to the story.', legacy: 'Egypt’s monuments and texts shaped ancient Mediterranean memory and modern archaeology, but popular myths must be separated from evidence.', people: ['Hatshepsut','Akhenaten','Ramses II','Cleopatra VII'], places: ['Memphis','Thebes','Giza','Alexandria'], books: ['gutenberg-egypt-myth','metadata-8'], citations: [{ label: 'Britannica: Ancient Egypt', url: 'https://www.britannica.com/place/ancient-Egypt' }, { label: 'Project Gutenberg: Legends of the Gods search', url: 'https://www.gutenberg.org/ebooks/search/?query=Legends+of+the+Gods+Budge' }], urduSummary: 'قدیم مصر نیل، فرعونوں، تحریر، مندروں، اہرام اور آثار قدیمہ کی طویل تہذیب ہے۔' }),
    makeRichTopic({ title: 'Roman Empire', slug: 'roman-empire', alternateNames: ['Rome', 'Ancient Rome', 'Roma'], era: '27 BCE–476 CE in the West; Byzantine continuation in the East', region: 'Mediterranean, Europe, North Africa, Near East', summary: 'The Roman Empire was a Mediterranean imperial system of law, cities, roads, armies, citizenship, taxation and provincial government.', background: 'Rome developed from republic to empire after civil wars and the rise of Augustus. Its institutions adapted older republican forms to imperial rule.', rise: 'Imperial Rome expanded through armies, roads, alliances, colonies and provincial administration.', culture: 'Roman culture included Latin and Greek literature, law, engineering, urban life, religion, trade and later Christianity.', legacy: 'Rome’s legacy continued through law, languages, urban forms, Christianity, imperial memory and the Byzantine Empire.', people: ['Augustus','Julius Caesar','Tacitus','Constantine'], places: ['Rome','Constantinople','Carthage','Alexandria'], books: ['gibbon-rome','caesar-commentaries','tacitus-annals'], citations: [{ label: 'Britannica: Roman Empire', url: 'https://www.britannica.com/place/Roman-Empire' }, { label: 'Project Gutenberg: Gibbon', url: 'https://www.gutenberg.org/ebooks/25717' }], urduSummary: 'رومی سلطنت قانون، فوج، شہروں، سڑکوں اور بحیرہ روم کی سیاست کی بڑی سلطنت تھی۔' }),
    makeRichTopic({ title: 'Ancient Greece', slug: 'ancient-greece', alternateNames: ['Greece', 'Socrates', 'Aristotle', 'Greek philosophy'], era: 'c. 800–323 BCE', region: 'Aegean and Mediterranean', summary: 'Ancient Greece is read through city-states, philosophy, drama, war, art, colonies and later Hellenistic influence.', background: 'Greek history centered on poleis such as Athens and Sparta, maritime networks, colonization and interaction with Persia and the wider Mediterranean.', rise: 'The classical period saw Persian wars, Athenian democracy, philosophy, drama and conflicts such as the Peloponnesian War.', culture: 'Socrates, Plato and Aristotle shaped philosophical traditions, while historians, playwrights and artists shaped cultural memory.', legacy: 'Greek texts and ideas were preserved, debated and translated in later Roman, Islamic, Byzantine and European worlds.', people: ['Socrates','Plato','Aristotle','Alexander the Great'], places: ['Athens','Sparta','Delphi','Macedon'], books: ['herodotus','plato-republic','aristotle-politics','plutarch-lives'], citations: [{ label: 'Project Gutenberg: Herodotus', url: 'https://www.gutenberg.org/ebooks/2707' }, { label: 'Project Gutenberg: Plato Republic', url: 'https://www.gutenberg.org/ebooks/1497' }], urduSummary: 'قدیم یونان شہری ریاستوں، فلسفہ، ڈرامہ، جنگوں اور سقراط، افلاطون و ارسطو جیسے مفکرین کے لیے اہم ہے۔' }),
    makeRichTopic({ title: 'Silk Road', slug: 'silk-road', alternateNames: ['Trade routes', 'Eurasian routes'], era: 'Ancient to early modern', region: 'Eurasia', summary: 'The Silk Road was not one road but a network of land and sea routes connecting China, Central Asia, Iran, India, the Islamic world and the Mediterranean.', background: 'Routes grew from older trade paths, oasis cities, pastoral networks and imperial frontiers.', rise: 'Silk, horses, paper, religions, technologies, medicines, stories and diplomatic messages moved through many intermediaries.', culture: 'Cities along the routes became multilingual and multi-religious spaces where merchants, monks, envoys and scholars met.', legacy: 'The Silk Road remains a useful map for understanding Eurasian exchange, but it should not be simplified into a single highway.', people: ['Ibn Battuta','Marco Polo','Zheng He'], places: ['Samarkand','Bukhara','Kashgar','Baghdad'], books: ['marco-polo','ibn-battuta','metadata-11'], citations: [{ label: 'Britannica: Silk Road', url: 'https://www.britannica.com/topic/Silk-Road-trade-route' }, { label: 'Project Gutenberg: Marco Polo', url: 'https://www.gutenberg.org/ebooks/10636' }], urduSummary: 'شاہراہ ریشم ایک سڑک نہیں بلکہ یوریشیا کے تجارتی، علمی اور ثقافتی راستوں کا جال تھا۔' }),
    makeRichTopic({ title: 'Al-Andalus', slug: 'al-andalus', alternateNames: ['Andalus', 'Muslim Spain', 'الأندلس'], era: '711–1492 CE', region: 'Iberian Peninsula', summary: 'Al-Andalus was the Muslim-ruled and Muslim-influenced Iberian world of cities, agriculture, scholarship, poetry, architecture and changing frontiers.', background: 'After 711, Muslim forces entered Iberia and new political, social and cultural formations developed alongside Christian and Jewish communities.', rise: 'Cordoba became a major city and intellectual center, while later periods saw fragmentation, reform movements and regional courts.', culture: 'Arabic, Hebrew, Latin and Romance cultures interacted in philosophy, medicine, poetry, law, architecture and translation.', legacy: 'Al-Andalus is remembered in architecture, literature, music, scholarship and modern debates about coexistence, conflict and memory.', people: ['Abd al-Rahman I','Ibn Rushd','Maimonides'], places: ['Cordoba','Granada','Seville','Toledo'], books: ['metadata-4','metadata-28'], citations: [{ label: 'Britannica: Al-Andalus', url: 'https://www.britannica.com/place/Al-Andalus' }], urduSummary: 'الاندلس اسپین و پرتگال کی اسلامی، یہودی اور عیسائی تہذیبی تاریخ کا اہم باب ہے۔' })
  ]
);

export const allFactCards = richTopics.flatMap(topic => topic.facts);
export const allSourceExtracts = sourceExtracts;

export function getRichTopic(slug: string) { return richTopics.find(topic => topic.slug === slug || topic.alternateNames.map(a => a.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')).includes(slug)); }

export function findRichTopic(query: string) {
  const q = query.toLowerCase();
  return richTopics.find(topic => [topic.title, topic.slug, ...topic.alternateNames, topic.summary, ...topic.sections.flatMap(s => [s.title, ...s.body])].join(' ').toLowerCase().includes(q));
}

export function buildDeepResearch(query: string) {
  const topic = findRichTopic(query) ?? richTopics[0];
  return {
    title: query.trim().endsWith('?') ? query.trim() : `Deep Research: ${topic.title}`,
    topic,
    sections: [
      section('short-answer', 'Short Answer', [`${topic.summary} The short answer is source-dependent: the archive combines article sections, timeline entries, fact cards and legal source extracts, then marks uncertainty where needed.`]),
      section('background', 'Background', topic.sections.slice(0, 2).flatMap(s => s.body)),
      section('causes', 'Causes and Effects', ['Look for political structure, military organization, economy, geography, leadership decisions and source bias. The deep research mode groups these factors instead of giving a single unsupported reason.']),
      section('debates', 'Different Source Views', ['If sources disagree, the platform should show the disagreement. Older public-domain histories, chronicles and modern scholarship may emphasize different causes or moral lessons.']),
      section('further-reading', 'Further Reading', topic.citations.map(c => `${c.label}: ${c.url}`))
    ]
  };
}
