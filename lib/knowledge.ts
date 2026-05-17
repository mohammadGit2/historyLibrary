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
