export type Book = {
  id: string; title: string; subtitle?: string; author: string; language: 'English' | 'Urdu' | 'Arabic' | 'Persian' | 'Latin' | 'Multiple'; era: string; century: string; topicTags: string[]; regionTags: string[]; sourceName: string; sourceUrl: string; license: string; pdfUrl?: string; epubUrl?: string; textUrl?: string; coverImage: string; description: string; aiSummary: string; tableOfContents: string[]; relatedPeople: string[]; relatedPlaces: string[]; relatedEvents: string[]; readingOrder: number; metadataOnly?: boolean;
};
export type Topic = {
  id: string; title: string; slug: string; alternateNames: string[]; type: string; era: string; region: string; summary: string; storyModeText: string[]; timeline: { date: string; title: string; description: string }[]; relatedBooks: string[]; relatedPeople: string[]; relatedPlaces: string[]; relatedImages: string[]; relatedMaps: string[]; citations: { label: string; url: string; type: 'Primary source' | 'Secondary source' | 'Reference' }[];
};
export type ImageAsset = { id: string; title: string; imageUrl: string; sourceUrl: string; creator: string; license: string; attribution: string; relatedTopic: string; relatedPlace: string; type: string };
export type Place = { id: string; name: string; currentCountry: string; historicalRegion: string; latitude: number; longitude: number; description: string; relatedBooks: string[]; relatedEvents: string[] };
export type Person = { id: string; name: string; alternateNames: string[]; birthYear?: number; deathYear?: number; region: string; role: string; biography: string; relatedBooks: string[]; relatedEvents: string[]; relatedPlaces: string[] };

const covers = ['#d7a94b','#a9693d','#274869','#62502d','#6b2535','#315142'];
const makeCover = (i: number, title: string) => `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="420" height="620"><rect width="100%" height="100%" fill="${covers[i%covers.length]}"/><path d="M35 42h350v536H35z" fill="none" stroke="#fff8e8" stroke-width="8" opacity=".55"/><path d="M70 90h280M70 125h220M70 490h280" stroke="#fff8e8" stroke-width="6" opacity=".7"/><text x="210" y="285" text-anchor="middle" font-family="Georgia" font-size="34" fill="#fff8e8">${title.replace(/&/g,'and').slice(0,34)}</text><text x="210" y="335" text-anchor="middle" font-family="Georgia" font-size="18" fill="#fff8e8">Bayt al-Tareekh Metadata</text></svg>`)}`;

const bookSeeds = [
['tabari-1','The History of al-Tabari, Vol. 1','Al-Tabari','English','Islamic History','9th–10th c.',['Islamic History','Caliphate','Primary chronicle'],['Middle East'],'Internet Archive','https://archive.org/search?query=History+of+al-Tabari','Source-linked metadata; verify volume rights before hosting','Universal history chronicle in translation; metadata links to public catalog/search pages.'],
['ibn-battuta','The Travels of Ibn Battuta','Ibn Battuta / H. A. R. Gibb','English','Medieval World','14th c.',['Travelers','Islamic World','Rihla'],['Morocco','India','China'],'Internet Archive','https://archive.org/search?query=Travels+of+Ibn+Battuta+Gibb','Public-domain/open catalog links where available','Classic travel account documenting cities, courts and routes across the medieval Islamic world.'],
['muqaddimah','The Muqaddimah','Ibn Khaldun','English','Historiography','14th c.',['Historians','Sociology','Maghrib'],['North Africa'],'Internet Archive','https://archive.org/search?query=Ibn+Khaldun+Muqaddimah','Source-linked metadata; edition rights vary','Foundational work on history, society, dynasties and civilization.'],
['muir-caliphate','The Caliphate: Its Rise, Decline, and Fall','William Muir','English','Islamic History','19th c.',['Caliphate','Umayyads','Abbasids'],['Middle East'],'Project Gutenberg','https://www.gutenberg.org/ebooks/search/?query=caliphate+muir','Public domain in many jurisdictions; verify locally','Older secondary history useful for comparison with modern scholarship.'],
['lane-arabian','Arabian Society in the Middle Ages','Edward William Lane','English','Medieval Islamic civilization','19th c.',['Society','Medieval','Arabic sources'],['Egypt','Arabia'],'Project Gutenberg','https://www.gutenberg.org/ebooks/search/?query=Arabian+Society+Middle+Ages','Public domain','A public-domain window into translated medieval Arabic social material.'],
['masudi','Meadows of Gold','Al-Masudi','English','Islamic History','10th c.',['Historians','Geography','Abbasids'],['Middle East'],'Internet Archive','https://archive.org/search?query=Meadows+of+Gold+Masudi','Metadata only; verify edition rights','Medieval Arabic historical-geographical source associated with the Abbasid age.'],
['baladhuri','Futuh al-Buldan','Al-Baladhuri','English','Islamic History','9th c.',['Conquests','Primary source','Caliphate'],['Middle East','Persia'],'Internet Archive','https://archive.org/search?query=Futuh+al-Buldan','Metadata only; verify edition rights','Important early Arabic source for conquests and administrative history.'],
['gibbon-rome','The History of the Decline and Fall of the Roman Empire','Edward Gibbon','English','Ancient History','18th c.',['Rome','Byzantium','Secondary source'],['Mediterranean'],'Project Gutenberg','https://www.gutenberg.org/ebooks/25717','Public domain','Classic public-domain secondary work; best read critically with modern scholarship.'],
['herodotus','The Histories','Herodotus','English','Ancient History','5th c. BCE',['Greece','Persia','Primary source'],['Mediterranean','Persia'],'Project Gutenberg','https://www.gutenberg.org/ebooks/2707','Public domain','Ancient Greek historical source for Persian wars and wider ethnographic material.'],
['marco-polo','The Travels of Marco Polo','Marco Polo','English','Medieval World','13th c.',['Travelers','Silk Road','Mongols'],['Central Asia','China'],'Project Gutenberg','https://www.gutenberg.org/ebooks/10636','Public domain','Travel narrative relevant to Mongol-era Eurasia and trade routes.'],
['urdu-tareekh-islam','Tareekh-e-Islam catalog record','Multiple Urdu authors','Urdu','Islamic History','Multiple',['Urdu','Islamic History'],['Middle East','South Asia'],'Rekhta / Internet Archive search','https://archive.org/search?query=title%3A%28Tareekh-e-Islam%29','Metadata only — do not host until rights verified','Urdu Islamic history metadata record for legal source connection.'],
['urdu-ibn-khaldun','Muqaddima Ibn Khaldun Urdu catalog record','Ibn Khaldun / translators','Urdu','Historiography','14th c.',['Urdu','Historians'],['North Africa','South Asia'],'Archive catalog search','https://archive.org/search?query=Muqaddima+Ibn+Khaldun+Urdu','Metadata only — rights vary','Urdu-access catalog discovery record linking users to source searches.'],
['plutarch-lives','Plutarch Lives','Plutarch','English','Ancient Biography','1st–2nd c.',['Biography','Alexander','Caesar','Great personalities'],['Greece','Rome'],'Project Gutenberg','https://www.gutenberg.org/ebooks/search/?query=Plutarch+Lives','Public domain editions available','Parallel biographies of Greek and Roman figures; useful for personality studies with source caveats.'],
['homer-iliad','The Iliad','Homer','English','Ancient Epic Tradition','8th c. BCE tradition',['Legend','Troy','Achilles','Epic'],['Aegean','Anatolia'],'Project Gutenberg','https://www.gutenberg.org/ebooks/2199','Public domain','Epic tradition around Troy; displayed as literature/legend, not simple factual chronicle.'],
['homer-odyssey','The Odyssey','Homer','English','Ancient Epic Tradition','8th c. BCE tradition',['Legend','Odysseus','Journey','Epic'],['Mediterranean'],'Project Gutenberg','https://www.gutenberg.org/ebooks/1727','Public domain','Ancient travel-and-return epic for a clearly labeled legends and story tradition section.'],
['mahabharata','The Mahabharata','Vyasa / translated editions','English','Ancient Indian Epic Tradition','Ancient tradition',['India','Legend','Epic','Dharma'],['South Asia'],'Project Gutenberg','https://www.gutenberg.org/ebooks/search/?query=Mahabharata','Public domain editions available','Major South Asian epic tradition; presented respectfully as literary/sacred tradition with genre labels.'],
['ramayana','The Ramayana','Valmiki / translated editions','English','Ancient Indian Epic Tradition','Ancient tradition',['India','Legend','Rama','Epic'],['South Asia'],'Project Gutenberg','https://www.gutenberg.org/ebooks/search/?query=Ramayana','Public domain editions available','Epic tradition of exile, conflict and return; source genre is clearly labeled.'],
['gilgamesh','Epic of Gilgamesh catalog metadata','Ancient Mesopotamian tradition','English','Ancient Mesopotamia','2nd millennium BCE tradition',['Mesopotamia','Legend','Gilgamesh','Epic'],['Iraq'],'Internet Archive','https://archive.org/search?query=Epic+of+Gilgamesh','Metadata only — translation rights vary','Ancient Mesopotamian epic metadata for literature, myth and memory study.'],
['xenophon-anabasis','Anabasis','Xenophon','English','Ancient Greek and Persian History','4th c. BCE',['Persia','Greece','Soldiers','Primary source'],['Persia','Anatolia'],'Project Gutenberg','https://www.gutenberg.org/ebooks/search/?query=Xenophon+Anabasis','Public domain editions available','A dramatic primary-source march through Persian imperial geography.'],
['caesar-commentaries','The Commentaries of Julius Caesar','Julius Caesar','English','Roman Republic','1st c. BCE',['Rome','Gaul','Primary source','Caesar'],['Rome','Gaul'],'Project Gutenberg','https://www.gutenberg.org/ebooks/search/?query=Julius+Caesar+Commentaries','Public domain editions available','First-person Roman political and military text, read critically as self-presentation.'],
['tacitus-annals','The Annals','Tacitus','English','Roman Empire','1st–2nd c.',['Rome','Emperors','Primary source'],['Mediterranean'],'Project Gutenberg','https://www.gutenberg.org/ebooks/search/?query=Tacitus+Annals','Public domain editions available','Roman imperial narrative source for emperors, politics and court drama.'],
['baburnama','Baburnama catalog metadata','Babur','English','Mughal India','16th c.',['Mughal','India','Memoir','Great personalities'],['South Asia'],'Internet Archive','https://archive.org/search?query=Baburnama','Metadata only — verify edition rights','Memoir source metadata for Babur, gardens, battles and early Mughal history.'],
['arabian-nights','The Arabian Nights metadata','Traditional / translated editions','English','Medieval Story Tradition','Medieval',['Arabic literature','Legend','Story worlds'],['Middle East','Persia','India'],'Project Gutenberg','https://www.gutenberg.org/ebooks/search/?query=Arabian+Nights','Public domain editions available','Story tradition for culture and imagination; not presented as factual chronicle.'],
['plato-republic','The Republic','Plato','English','Greek Philosophy','4th c. BCE',['Socrates','Plato','Philosophy','Greece'],['Greece'],'Project Gutenberg','https://www.gutenberg.org/ebooks/1497','Public domain','Dialogues associated with Socrates and Plato; best read as philosophy and historical context together.'],
['aristotle-politics','Politics: A Treatise on Government','Aristotle','English','Greek Philosophy','4th c. BCE',['Aristotle','Philosophy','Politics','Greece'],['Greece'],'Project Gutenberg','https://www.gutenberg.org/ebooks/6762','Public domain','Classical political philosophy source for Aristotle, city-states and ancient Greek thought.'],
['conquest-constantinople','The Fall of Constantinople 1453 catalog','Multiple historians','English','Ottoman / Byzantine History','15th c.',['Ottoman 1453','Constantinople','Mehmed II','Byzantium'],['Anatolia','Balkans'],'Internet Archive','https://archive.org/search?query=Fall+of+Constantinople+1453','Metadata only — verify edition rights','Source pathway for the 1453 conquest with Byzantine, Ottoman and modern perspectives separated.'],
['saladin-crusades','Saladin and the Fall of Jerusalem catalog','Multiple historians','English','Crusades','12th c.',['Salahuddin Ayyubi','Crusades','Jerusalem'],['Levant','Egypt','Syria'],'Internet Archive','https://archive.org/search?query=Saladin+Crusades+Jerusalem','Metadata only — verify edition rights','Reading path for Salahuddin and the Crusades using multiple source traditions.'],
['genghis-secret-history','The Secret History of the Mongols catalog','Traditional Mongol source','English','Mongol Empire','13th c.',['Genghis Khan','Mongols','Steppe'],['Mongolia','Central Asia'],'Internet Archive','https://archive.org/search?query=Secret+History+of+the+Mongols','Metadata only — translation rights vary','Mongol source tradition for Genghis Khan, family politics, steppe warfare and empire-building.'],
['tipu-sultan','Tipu Sultan catalog record','Multiple historians','English / Urdu metadata','South Asian History','18th c.',['Tipu Sultan','Mysore','South Asia'],['India'],'Internet Archive','https://archive.org/search?query=Tipu+Sultan+history','Metadata only — verify rights','Beginner reading path for Mysore, anti-colonial wars, technology and memory around Tipu Sultan.'],
['quranic-stories','Stories of the Prophets catalog metadata','Multiple classical and modern authors','Arabic / Urdu / English metadata','Sacred History Traditions','Multiple',['Quranic stories','Prophets','Scriptural tradition'],['Middle East'],'Internet Archive','https://archive.org/search?query=Stories+of+the+Prophets','Metadata only — verify rights','Respectful source lane for Quranic narratives; presented as sacred tradition and tafsir/history context, not sensationalized fiction.'],
['biblical-stories','King James Bible','Multiple biblical authors / translators','English','Biblical Literature','Ancient tradition',['Biblical stories','Prophets','Ancient Near East'],['Levant','Egypt','Mesopotamia'],'Project Gutenberg','https://www.gutenberg.org/ebooks/10','Public domain','Biblical narratives presented with source labels, ancient Near Eastern context and respectful comparative notes.'],
['khalid-walid','Khalid ibn al-Walid catalog record','Multiple historians','English / Urdu metadata','Early Islamic History','7th c.',['Khalid ibn al-Walid','Military history','Early Islam'],['Arabia','Levant','Iraq'],'Internet Archive','https://archive.org/search?query=Khalid+ibn+al-Walid','Metadata only — verify rights','Neutral military biography path focused on sources, campaigns, geography and context.'],
['ali-ibn-abi-talib','Ali ibn Abi Talib catalog record','Multiple historians','Arabic / Urdu / English metadata','Early Islamic History','7th c.',['Hazrat Ali','Ali ibn Abi Talib','Biography','Ethics'],['Arabia','Iraq'],'Internet Archive','https://archive.org/search?query=Ali+ibn+Abi+Talib+biography','Metadata only — verify rights','Respectful, non-sectarian biography path: family, learning, public service, ethics, letters and later memory are separated by source type.'],
['husayn-karbala','Husayn ibn Ali and Karbala catalog record','Multiple historians','Arabic / Urdu / English metadata','Early Islamic History','7th c.',['Husain a.s','Husayn ibn Ali','Karbala','Memory'],['Iraq','Arabia'],'Internet Archive','https://archive.org/search?query=Husayn+ibn+Ali+Karbala+history','Metadata only — verify rights','Respectful source lane for Husayn ibn Ali and Karbala with clear separation between historical reports, devotional memory and later literature.'],
['salman-farsi','Salman al-Farisi catalog record','Multiple historians','Arabic / Urdu / English metadata','Early Islamic Biography','7th c.',['Salman al-Farisi','Persia','Companions'],['Persia','Arabia'],'Internet Archive','https://archive.org/search?query=Salman+al-Farisi','Metadata only — verify rights','Beginner biography path for Salman al-Farisi, conversion narratives, Persia-Arabia links and source comparison.' ]
];
const moreTitles = ['Abbasid Baghdad Reader','Ottoman Source Reader','Mughal India Bibliography','Al-Andalus Reading Path','House of Wisdom Studies','Salahuddin and the Ayyubids','Crusades Multi-Source Packet','Ancient Egypt Public Texts','Persian Empire Sourcebook','Indus Valley Archaeology Notes','Silk Road Travel Sources','Mongol Empire Reader','Byzantine and Islamic Frontiers','Mamluk Cairo Archive','Seljuk Anatolia Studies','Islamic Golden Age Science','Urdu World History Catalog','Urdu Muslim Scientists Catalog','Arabic Manuscript Studies','Persian Chronicles Catalog','Ottoman Travel Accounts','Medieval Cities Reader','Trade Routes and Pilgrimage','Coins and Inscriptions Guide','Architecture of Islamic Cities','Ancient Mesopotamia Texts','Ancient China Historical Sources','Greek and Roman Crossroads','Fatimid Cairo Studies','Safavid Iran Reader','Central Asian Scholars','Ibn Sina Source Guide','Al-Biruni Source Guide','Al-Khwarizmi Source Guide','Rumi and Persian Literary Worlds','Baburnama Source Metadata','Akbarnama Source Metadata','Delhi Sultanate Reader'];
export const books: Book[] = [
...bookSeeds.map((b, i) => ({ id:b[0] as string, title:b[1] as string, author:b[2] as string, language:b[3] as Book['language'], era:b[4] as string, century:b[5] as string, topicTags:b[6] as string[], regionTags:b[7] as string[], sourceName:b[8] as string, sourceUrl:b[9] as string, license:b[10] as string, coverImage: makeCover(i,b[1] as string), description:b[11] as string, aiSummary:'AI-enhanced summary based on listed sources. This record summarizes catalog metadata and does not replace the original source.', tableOfContents:['Source record','Historical context','Reading notes','Citation guidance'], relatedPeople:[], relatedPlaces:[], relatedEvents:[], readingOrder:i+1, metadataOnly:(b[10] as string).includes('Metadata') || (b[10] as string).includes('metadata') })),
...moreTitles.map((title, idx) => ({ id:`metadata-${idx+1}`, title, author:'Curated metadata team', language: idx%5===0?'Urdu':'English' as Book['language'], era: idx%3===0?'Islamic History':idx%3===1?'Medieval World':'Ancient History', century:'Multiple', topicTags:[title.split(' ')[0], 'Reading bundle candidate','Metadata'], regionTags:['Global'], sourceName:'Open library/catalog connection pending', sourceUrl:'https://archive.org/', license:'Metadata only — no PDF hosted until public-domain/open-license status is verified', coverImage: makeCover(idx+12,title), description:`Starter metadata record for ${title}. It is clearly marked metadata-only so the platform never pretends to host or own unverified books.`, aiSummary:'AI-enhanced summary based on listed sources. Pending curator approval and source verification.', tableOfContents:['Metadata checklist','Rights verification','Recommended sources'], relatedPeople:[], relatedPlaces:[], relatedEvents:[], readingOrder:idx+13, metadataOnly:true }))
];

const topicTitles = ['Abbasid Caliphate','Ottoman 1453','Crusades and Salahuddin','Life of Hazrat Ali','Khalid ibn al-Walid','Husayn ibn Ali and Karbala','Islamic Golden Age','Al-Khwarizmi','Al-Biruni','Salman al-Farisi','Jalal ad-Din Khwarazmshah','Genghis Khan','Mughal Empire','Babur','Akbar','Tipu Sultan','Ancient Egypt and Pharaohs','Mesopotamia and Gilgamesh','Ancient Iran and Persia','Ancient Greece','Socrates','Aristotle','Roman Empire','Quranic Stories and Prophets','Biblical Stories and Ancient Near East','Ibn Battuta','Ibn Khaldun','Baghdad','House of Wisdom','Silk Road'];

const topicDetails: Record<string, Partial<Topic>> = {
  'Life of Hazrat Ali': { alternateNames: ['Ali ibn Abi Talib','Imam Ali','Hazrat Ali'], type: 'Respectful biography', era: 'c. 600–661 CE', region: 'Arabia and Iraq', summary: 'A non-sectarian, respectful biography path focused on family, learning, public service, ethics, letters, governance and later memory with clear source labels.', storyModeText: ['Begin with the household of the Prophet ﷺ and the early community, using careful language and source labels.', 'Read Ali as a person of knowledge, courage, public duty and ethical teaching before entering later political disputes.', 'When conflicts appear, the page separates historical reports, devotional memory, legal traditions and later sectarian interpretation.'] },
  'Husayn ibn Ali and Karbala': { alternateNames: ['Husain a.s','Imam Husayn','Karbala'], type: 'Respectful biography and memory', era: '626–680 CE', region: 'Arabia and Iraq', summary: 'A careful source lane for Husayn ibn Ali and Karbala that treats the subject respectfully without turning the site into sectarian argument.', storyModeText: ['Start with family, values and the public context of the early community.', 'Explain Karbala with dates, geography and source categories, avoiding polemical language.', 'Show how memory, poetry, mourning literature and history developed while keeping citations visible.'] },
  'Crusades and Salahuddin': { alternateNames: ['Saladin','Salahuddin Ayyubi','Crusades'], type: 'Medieval cross-source history', era: '11th–13th centuries', region: 'Levant, Egypt, Syria and Mediterranean', summary: 'A multi-source path for the Crusades and Salahuddin using Muslim, Latin Christian, Byzantine and modern historical perspectives.', storyModeText: ['Follow cities, routes and treaties rather than one-sided slogans.', 'Salahuddin is presented through leadership, coalition-building, Jerusalem and reputation across different source traditions.', 'Readers compare chronicles and modern analysis before entering cinematic story mode.'] },
  'Ottoman 1453': { alternateNames: ['Fall of Constantinople','Conquest of Constantinople','Mehmed II'], type: 'Ottoman / Byzantine history', era: '1453 CE', region: 'Constantinople / Istanbul', summary: 'A focused reading room for 1453 with Ottoman, Byzantine, European and modern scholarship separated.', storyModeText: ['Set the scene with Constantinople, Ottoman statecraft, artillery, walls and sea routes.', 'Tell the siege day-by-day only where source notes support the narration.', 'After the conquest, explain Istanbul, administration, churches, mosques, trade and memory.'] },
  'Islamic Golden Age': { alternateNames: ['Golden Age of Islam','Muslim scientists','Translation movement'], type: 'Books and science series', era: '8th–13th centuries', region: 'Baghdad, Cairo, Cordoba, Central Asia and beyond', summary: 'A beginner-friendly book series for mathematics, astronomy, medicine, geography, philosophy, libraries and translation movements.', storyModeText: ['Begin with paper, libraries and translation, not myths of isolated genius.', 'Move through named scholars such as Al-Khwarizmi, Al-Biruni, Ibn Sina and others with source links.', 'Close with how knowledge travelled through Arabic, Persian, Latin, Hebrew, Sanskrit and other scholarly worlds.'] },
  'Jalal ad-Din Khwarazmshah': { alternateNames: ['Jalaluddin Khwarazm Shah','Jalal al-Din Mangburni'], type: 'Medieval personality', era: '1199–1231 CE', region: 'Central Asia, Iran and India frontier', summary: 'A dramatic but source-labeled biography of resistance, flight and politics during the Mongol expansion.', storyModeText: ['Introduce the Khwarazmian world before the Mongols.', 'Trace Jalal ad-Din through battles, escape, alliances and difficult choices.', 'Separate heroic memory from what chronicles can support.'] },
  'Genghis Khan': { alternateNames: ['Chinggis Khan','Mongol Empire'], type: 'World history personality', era: 'c. 1162–1227 CE', region: 'Mongolia and Eurasia', summary: 'A source-based pathway into Genghis Khan, steppe politics, empire-building, law, war and exchange.', storyModeText: ['Begin with clan politics and the steppe world rather than caricature.', 'Explain campaigns with maps and sources, including the human cost.', 'Show how Mongol rule reshaped Eurasian routes and states.'] },
  'Ancient Egypt and Pharaohs': { alternateNames: ['Pharaohs','Ancient Egypt','Hatshepsut','Cleopatra'], type: 'Ancient civilization', era: 'c. 3000–30 BCE', region: 'Nile Valley', summary: 'A visual reading path for dynasties, scribes, temples, pyramids, pharaohs, inscriptions and daily life.', storyModeText: ['Follow the Nile, scribes and monuments before kings and legends.', 'Use inscriptions, archaeology and museum records as evidence lanes.', 'Keep later tales and modern myths separate from ancient evidence.'] },
  'Quranic Stories and Prophets': { alternateNames: ['Quran stories','Stories of the Prophets','Prophets in Islam'], type: 'Sacred narrative and source study', era: 'Scriptural tradition', region: 'Ancient Near East and Arabia', summary: 'A respectful reader for Quranic stories with tafsir, language notes and historical context clearly labeled.', storyModeText: ['Treat sacred narratives with respect and do not fictionalize them as entertainment.', 'Separate Quranic text, tafsir, hadith reports, historical geography and later storytelling.', 'Offer beginner summaries while always linking back to source categories.'] },
  'Biblical Stories and Ancient Near East': { alternateNames: ['Biblical stories','Bible history','Ancient Near East'], type: 'Sacred narrative and ancient context', era: 'Scriptural tradition', region: 'Levant, Egypt and Mesopotamia', summary: 'A comparative source lane for Biblical narratives, ancient Near Eastern geography, archaeology and public-domain texts.', storyModeText: ['Respect the religious nature of the texts.', 'Separate scripture, later interpretation, archaeology and literary retelling.', 'Connect places such as Egypt, Babylon, Jerusalem and Mesopotamia with maps and source notes.'] }
};

export const topics: Topic[] = topicTitles.map((title, i) => {
 const detail = topicDetails[title] ?? {};
 return {
  id:`topic-${i+1}`,
  title,
  slug:title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''),
  alternateNames: detail.alternateNames ?? [title.replace('al-','')],
  type: detail.type ?? (i < 16 ? 'Islamic / Medieval / World' : 'Ancient / Sources'),
  era: detail.era ?? (i < 16 ? 'Medieval to early modern' : 'Ancient to classical'),
  region: detail.region ?? 'Afro-Eurasia',
  summary: detail.summary ?? `${title} is presented as a source-based room with books, maps, readable story mode, related people, primary/secondary source separation and beginner notes.`,
  storyModeText: detail.storyModeText ?? ['Background: introduce the people, places and source types before dramatic narration.','Main story: tell events clearly with dates, maps and uncertainty labels where needed.','Legacy: show how later memory, literature and scholarship interpreted the topic.'],
  timeline: [{date:i<16?'600–1800 CE':'3000–300 BCE', title:`${title} source room opens`, description:'Starter chronology linked to books, maps and source categories.'},{date:i<16?'Source comparison':'Later reception', title:`${title} reading path`, description:'Readers compare sources before using story mode.'}],
  relatedBooks: books.filter(b => b.topicTags.join(' ').toLowerCase().includes(title.split(' ')[0].toLowerCase()) || b.description.toLowerCase().includes(title.split(' ')[0].toLowerCase())).slice(0,5).map(b=>b.id).concat(books.slice(i, i+2).map(b=>b.id)).slice(0,5),
  relatedPeople: ['Hazrat Ali','Salahuddin Ayyubi','Al-Khwarizmi','Al-Biruni','Genghis Khan','Babur','Akbar','Tipu Sultan'].slice(0,3),
  relatedPlaces: ['Baghdad','Istanbul','Cairo','Jerusalem','Delhi','Rome','Athens'].slice(0,3),
  relatedImages: ['map-abbasid','manuscript-1'],
  relatedMaps: ['source-map','trade-routes'],
  citations: [{label:'Internet Archive catalog search',url:'https://archive.org/',type:'Reference'},{label:'Project Gutenberg public-domain library',url:'https://www.gutenberg.org/',type:'Reference'}]
 };
});

export const images: ImageAsset[] = [
 {id:'manuscript-1',title:'Digitized manuscript folio source lane',imageUrl:makeCover(1,'Manuscript'),sourceUrl:'https://commons.wikimedia.org/',creator:'Creator varies by item',license:'Use only open-license/public-domain images after verification',attribution:'Attribution required from source record',relatedTopic:'House of Wisdom',relatedPlace:'Baghdad',type:'Manuscript'},
 {id:'map-abbasid',title:'Historical map source lane',imageUrl:makeCover(2,'Map Archive'),sourceUrl:'https://commons.wikimedia.org/',creator:'Cartographer varies by item',license:'Open-license/public-domain only',attribution:'Verify per map record',relatedTopic:'Abbasid Caliphate',relatedPlace:'Baghdad',type:'Map'},
 {id:'architecture-1',title:'Islamic architecture image source lane',imageUrl:makeCover(3,'Architecture'),sourceUrl:'https://www.metmuseum.org/art/collection',creator:'Museum record',license:'Follow source license',attribution:'Museum/source attribution required',relatedTopic:'Islamic Golden Age',relatedPlace:'Cairo',type:'Architecture'}
];
export const places: Place[] = [
 {id:'baghdad',name:'Baghdad',currentCountry:'Iraq',historicalRegion:'Abbasid Iraq',latitude:33.3152,longitude:44.3661,description:'Key Abbasid capital and manuscript/book culture hub.',relatedBooks:['tabari-1','masudi'],relatedEvents:['Abbasid foundation','Mongol sack of Baghdad']},
 {id:'cordoba',name:'Cordoba',currentCountry:'Spain',historicalRegion:'Al-Andalus',latitude:37.8882,longitude:-4.7794,description:'Major Andalusi city associated with learning, architecture and libraries.',relatedBooks:['metadata-4'],relatedEvents:['Umayyad Cordoba']},
 {id:'cairo',name:'Cairo',currentCountry:'Egypt',historicalRegion:'Fatimid and Mamluk Egypt',latitude:30.0444,longitude:31.2357,description:'Major Islamic metropolis, archive, mosque and manuscript center.',relatedBooks:['metadata-14'],relatedEvents:['Fatimid Cairo','Mamluk Sultanate']}
];
export const people: Person[] = [
 {id:'ibn-battuta',name:'Ibn Battuta',alternateNames:['Ibn Baṭṭūṭa'],birthYear:1304,deathYear:1369,region:'Morocco / Afro-Eurasia',role:'Traveler',biography:'Traveler whose Rihla is central to medieval world history reading paths.',relatedBooks:['ibn-battuta'],relatedEvents:['Rihla journeys'],relatedPlaces:['Tangier','Delhi','Cairo']},
 {id:'ibn-khaldun',name:'Ibn Khaldun',alternateNames:['Ibn Khaldūn'],birthYear:1332,deathYear:1406,region:'North Africa',role:'Historian',biography:'Historian and thinker associated with the Muqaddimah.',relatedBooks:['muqaddimah'],relatedEvents:['Composition of Muqaddimah'],relatedPlaces:['Tunis','Cairo']},
 {id:'al-biruni',name:'Al-Biruni',alternateNames:['Abu Rayhan al-Biruni'],birthYear:973,deathYear:1048,region:'Khwarazm, Ghazni and India',role:'Scholar and polymath',biography:'A great personality profile for astronomy, geography, languages and India studies; story mode should be source-linked and avoid exaggeration.',relatedBooks:['metadata-31'],relatedEvents:['Study of India','Astronomical measurements'],relatedPlaces:['Khwarazm','Ghazni','India']},
 {id:'al-khwarizmi',name:'Al-Khwarizmi',alternateNames:['Muḥammad ibn Mūsā al-Khwārizmī'],birthYear:780,deathYear:850,region:'Abbasid world',role:'Mathematician and astronomer',biography:'A source-based science personality connected with calculation, astronomy, geography and Baghdad scholarly networks.',relatedBooks:['metadata-32'],relatedEvents:['Abbasid scholarly movement'],relatedPlaces:['Baghdad']},
 {id:'hatshepsut',name:'Hatshepsut',alternateNames:['Maatkare Hatshepsut'],birthYear:-1507,deathYear:-1458,region:'Ancient Egypt',role:'Pharaoh',biography:'Ancient personality story combining kingship, monuments, trade expeditions and the politics of memory.',relatedBooks:['metadata-8'],relatedEvents:['Punt expedition'],relatedPlaces:['Thebes','Deir el-Bahri']},
 {id:'hannibal',name:'Hannibal Barca',alternateNames:['Hannibal'],birthYear:-247,deathYear:-183,region:'Carthage and Mediterranean',role:'General',biography:'His Alpine crossing and Italian campaign make a gripping story when Polybius, Livy and modern analysis are separated.',relatedBooks:['metadata-28'],relatedEvents:['Second Punic War'],relatedPlaces:['Carthage','Alps','Rome']},
 {id:'cleopatra',name:'Cleopatra VII',alternateNames:['Cleopatra Philopator'],birthYear:-69,deathYear:-30,region:'Ptolemaic Egypt',role:'Ruler',biography:'A personality page that separates Roman propaganda, later legend and political history in the age of Caesar and Antony.',relatedBooks:['metadata-8'],relatedEvents:['Fall of Ptolemaic Egypt'],relatedPlaces:['Alexandria','Rome']}
];

export type ReaderPage = {
  page: number;
  heading: string;
  dateRange: string;
  body: string[];
  sourceNote: string;
};

const genericReaderPages = (book: Book): ReaderPage[] => [
  {
    page: 1,
    heading: `${book.title}: source dossier`,
    dateRange: book.century,
    body: [
      `${book.title} is included here as a source-linked reading item for ${book.era}. The record identifies the author, language, catalog location, rights note, historical regions and suggested table of contents before any interpretation is shown.`,
      `Use this first page as the reader's orientation: who produced the work, what kind of evidence it preserves, which places it mentions, and whether the linked edition can be opened as a public-domain or open catalog item.`,
      `The safest reading path is to compare the source record with the related topic pages, maps and chronology instead of treating one book as the whole story.`
    ],
    sourceNote: `${book.sourceName}: ${book.sourceUrl}`
  },
  {
    page: 2,
    heading: 'Reading guide with dates and places',
    dateRange: book.era,
    body: [
      `Main regions in this record: ${book.regionTags.join(', ')}. Related people include ${book.relatedPeople.join(', ') || 'people identified on the matching topic pages'}.`,
      `A reader should track named cities, rulers, routes, dynasties and institutions as separate evidence cards. Dates from the table of contents and topic chronology are shown beside the narrative so uncertain traditions do not look like confirmed events.`,
      `For classroom use, ask: what is primary testimony, what is later scholarship, what is literary memory, and what part of the page is a modern explanatory summary?`
    ],
    sourceNote: `Rights note: ${book.license}`
  },
  {
    page: 3,
    heading: 'Citation and next steps',
    dateRange: 'Study workflow',
    body: [
      `Citation starter: ${book.title}, ${book.author}, ${book.sourceName}. Add edition, translator, volume and page number after opening the source page.`,
      `Next steps: open the source catalog, verify the edition rights, add page-specific notes, then connect the book to maps, images and topic timelines.`,
      book.aiSummary
    ],
    sourceNote: 'This reader page is an original guide to the linked source record, not a replacement for the edition.'
  }
];

export const readerPagesByBookId: Record<string, ReaderPage[]> = {
  'tabari-1': [
    {
      page: 1,
      heading: 'Al-Tabari as a universal chronicle',
      dateRange: 'c. 839–923 CE; Abbasid-era compilation',
      body: [
        'Al-Tabari organized history as a long chain of reports, moving from earlier sacred and imperial memories into the political history of the early Islamic centuries. The reader should notice how reports are attributed, compared and sometimes placed side by side rather than flattened into one voice.',
        'For Bayt al-Tareekh, this means the page is treated as a primary chronicle room: a place to identify transmitters, dates, geography and competing memories before reading a smooth modern story.',
        'Start with the source record, then compare the same event with later historians, maps and modern scholarship.'
      ],
      sourceNote: 'Source record: Internet Archive catalog search for History of al-Tabari editions.'
    },
    {
      page: 2,
      heading: 'How to read early caliphate reports',
      dateRange: '7th–10th century memory and compilation',
      body: [
        'When the reader reaches reports about succession, civil conflict or dynastic politics, the interface should slow the story down. It should mark what the report says, who preserved it, what later communities remembered, and what modern historians debate.',
        'Names, dates and places should be copied into notes before interpretation. This keeps the reader from confusing devotional memory, court history, later polemic and administrative fact.',
        'The reader therefore presents evidence cards beside narrative paragraphs instead of making one hidden editorial judgment.'
      ],
      sourceNote: 'Use with topic pages on early Islamic history, Umayyads and Abbasids.'
    },
    {
      page: 3,
      heading: 'Citation practice',
      dateRange: 'Research workflow',
      body: [
        'A finished citation needs volume, translator, edition, publisher or archive identifier, and page number. This MVP stores the catalog link first so the site does not host uncertain-rights scans.',
        'For a study note, quote only a short line from the edition, then summarize the report in your own words and attach the source-page link.',
        'For story mode, mention uncertainty directly: “one report says,” “later tradition remembers,” or “modern scholarship usually treats this as.”'
      ],
      sourceNote: 'Rights: verify each translation and scan before hosting downloadable files.'
    }
  ],
  'ibn-battuta': [
    {
      page: 1,
      heading: 'The Rihla route begins',
      dateRange: '1325–1354 CE journeys; dictated after return to Morocco',
      body: [
        'Ibn Battuta left Tangier for pilgrimage, then moved through North Africa, Egypt, Syria, Arabia, East Africa, Anatolia, Central Asia, India, the Maldives and beyond. The reader treats every stop as a map point with date, court, road and source-note fields.',
        'The travel narrative is valuable because it records movement between ports, madrasas, caravan routes, judges, rulers and merchants. It is also a literary travel text, so comparison matters.',
        'Open the map panel while reading: Tangier, Cairo, Mecca, Delhi, the Maldives and China should feel like connected route stages rather than isolated anecdotes.'
      ],
      sourceNote: 'Source record: Internet Archive catalog search for Travels of Ibn Battuta / Gibb.'
    },
    {
      page: 2,
      heading: 'Courts, roads and ocean crossings',
      dateRange: '14th-century Afro-Eurasia',
      body: [
        'The story mode should focus on practical historical questions: how a traveler found patronage, how scholars moved between institutions, how ships connected the Indian Ocean, and how political danger shaped travel.',
        'A good reading note separates observed detail from remembered dialogue and later editorial shaping. That distinction makes the adventure more useful, not less exciting.',
        'Because the work crosses many regions, every chapter should carry place tags and route arrows.'
      ],
      sourceNote: 'Related map layers: pilgrimage routes, Indian Ocean ports and Delhi Sultanate context.'
    },
    {
      page: 3,
      heading: 'Reader activity',
      dateRange: 'Map-based study',
      body: [
        'Choose three cities from the route and write one sentence for each: what institution, ruler, market or danger appears there?',
        'Then compare the same place in another source or map. If the detail cannot be verified, label it as travel narrative rather than confirmed administrative history.',
        'The goal is to enjoy the journey while keeping source discipline visible.'
      ],
      sourceNote: 'Citation starter: The Travels of Ibn Battuta, source catalog plus edition details.'
    }
  ],
  'muqaddimah': [
    {
      page: 1,
      heading: 'History as method',
      dateRange: '1377 CE composition context',
      body: [
        'The Muqaddimah asks readers to test historical reports against social, economic and political conditions. In this reader, it belongs in a method room as much as a book room.',
        'Key concepts include group solidarity, dynastic cycles, city life, taxation, craft, education and the causes of political rise and decline.',
        'Read it beside actual dynastic timelines so the theory can be tested rather than admired in isolation.'
      ],
      sourceNote: 'Source record: Internet Archive catalog search for Ibn Khaldun Muqaddimah editions.'
    },
    {
      page: 2,
      heading: 'Questions for every paragraph',
      dateRange: 'Historiography',
      body: [
        'What kind of evidence would confirm this claim? Is the author discussing nomadic power, urban administration, education, luxury, taxation or military organization?',
        'The reader should let students tag claims by theme and then compare those tags with examples from Abbasid, Mamluk, Ottoman, Mughal or North African history.',
        'This makes the text a working historical tool rather than a decorative quotation source.'
      ],
      sourceNote: 'Rights vary by translation; cite the exact edition used.'
    }
  ],
  herodotus: [
    {
      page: 1,
      heading: 'Inquiry, empire and war',
      dateRange: '5th century BCE subject matter and composition',
      body: [
        'Herodotus mixes inquiry, travel memory, oral report, ethnography and war narrative. The reader should display Greek, Persian, Egyptian and wider Mediterranean context through maps and comparison notes.',
        'The Persian Wars are central, but the work also preserves stories about customs, geography and political decisions. Some passages are stronger as cultural memory than as confirmed fact.',
        'Read with map layers for the Aegean, Anatolia, Egypt and Persia.'
      ],
      sourceNote: 'Source record: Project Gutenberg public-domain edition record.'
    },
    {
      page: 2,
      heading: 'Using ancient sources carefully',
      dateRange: 'Ancient history method',
      body: [
        'Do not remove the wonder from the text, but do not confuse wonder with verification. Mark hearsay, authorial judgment, geography and battle narrative separately.',
        'A source-first interface makes ancient history more honest: the user can enjoy a story, inspect a claim and follow citations without leaving the reader.',
        'Pair each major episode with a modern atlas and a primary-source note.'
      ],
      sourceNote: 'Public-domain source; still cite translator and edition.'
    }
  ]
};

export const getReaderPages = (book: Book) => readerPagesByBookId[book.id] ?? genericReaderPages(book);

export type HistoricMapResource = {
  id: string;
  title: string;
  period: string;
  region: string;
  description: string;
  center: { lat: number; lng: number; zoom: number };
  googleMapsUrl: string;
  embedUrl: string;
  historicMapUrl: string;
  sourceLabel: string;
};

export const historicMapResources: HistoricMapResource[] = [
  {
    id: 'abbasid-baghdad',
    title: 'Abbasid Baghdad and the round-city memory',
    period: '762–1258 CE',
    region: 'Iraq / Abbasid world',
    description: 'Preview modern Baghdad in Google Maps while linking outward to open historic-map collections for Abbasid Iraq, the Tigris and medieval Islamic geography.',
    center: { lat: 33.3152, lng: 44.3661, zoom: 6 },
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=33.3152,44.3661',
    embedUrl: 'https://www.google.com/maps?q=33.3152,44.3661&z=6&output=embed',
    historicMapUrl: 'https://www.loc.gov/maps/?fa=location:iraq|subject:middle+east',
    sourceLabel: 'Library of Congress map collections'
  },
  {
    id: 'andalus-cordoba',
    title: 'Cordoba, Al-Andalus and western Mediterranean routes',
    period: '8th–15th centuries CE',
    region: 'Iberia / Mediterranean',
    description: 'Preview Cordoba and compare it with historic map collections for Spain, Andalusia and Mediterranean travel corridors.',
    center: { lat: 37.8882, lng: -4.7794, zoom: 7 },
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=37.8882,-4.7794',
    embedUrl: 'https://www.google.com/maps?q=37.8882,-4.7794&z=7&output=embed',
    historicMapUrl: 'https://www.davidrumsey.com/luna/servlet/view/search?q=Andalusia%20Cordoba',
    sourceLabel: 'David Rumsey Map Collection search'
  },
  {
    id: 'ibn-battuta-route',
    title: 'Ibn Battuta travel-route study map',
    period: '1325–1354 CE',
    region: 'Tangier to Cairo, Mecca, Delhi and Indian Ocean',
    description: 'Use the embedded modern map as a route anchor, then attach historical atlas links for medieval roads, pilgrimage routes and ports.',
    center: { lat: 30.0444, lng: 31.2357, zoom: 4 },
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=30.0444,31.2357',
    embedUrl: 'https://www.google.com/maps?q=30.0444,31.2357&z=4&output=embed',
    historicMapUrl: 'https://commons.wikimedia.org/wiki/Category:Maps_of_Ibn_Battuta_travels',
    sourceLabel: 'Wikimedia Commons historic route maps'
  }
];

export type UrduStory = {
  id: string;
  title: string;
  era: string;
  date: string;
  location: string;
  readingTime: string;
  kind: 'واقعہ' | 'سفر' | 'شہر' | 'روایت';
  sourceBasis: string;
  paragraphs: string[];
};

export const urduStories: UrduStory[] = [
  {
    id: 'baghdad-library-night',
    title: 'بغداد کی ایک علمی رات',
    era: 'عباسی دور',
    date: 'تیسری/نویں صدی عیسوی',
    location: 'بغداد',
    readingTime: '۵ منٹ',
    kind: 'شہر',
    sourceBasis: 'عباسی بغداد، کتب خانوں اور ترجمہ تحریک سے متعلق تاریخی مواد پر مبنی تعلیمی کہانی؛ سوانح نہیں۔',
    paragraphs: [
      'دجلہ کے کنارے شام اتر رہی تھی۔ بازار کی آوازیں مدھم ہو رہی تھیں مگر کاتبوں کی روشنیاں ابھی بجھی نہ تھیں۔ ایک نوجوان قاری نے اپنے استاد سے پوچھا کہ کتاب صرف لفظوں کا نام ہے یا سفر کا؟ استاد نے مسکرا کر کہا: کتاب وہ راستہ ہے جس پر پچھلے زمانوں کی آوازیں ہمارے شہر تک آتی ہیں۔',
      'اس رات مجلس میں یونانی، فارسی اور عربی اصطلاحات پر بحث ہوئی۔ کسی نے ستاروں کا ذکر کیا، کسی نے طب کا، اور کسی نے پوچھا کہ تاریخ لکھتے وقت روایت اور مشاہدہ کیسے الگ کیے جائیں۔ جواب ملا: پہلے نام، جگہ اور تاریخ محفوظ کرو، پھر رائے قائم کرو۔',
      'کہانی کا مقصد کسی ایک عالم کی سوانح بیان کرنا نہیں بلکہ بغداد کے علمی ماحول کو محسوس کرانا ہے؛ وہ ماحول جس میں ترجمہ، بحث، نقل نویسی اور اختلاف سب ایک ہی شہر کے روزمرہ علم کا حصہ تھے۔'
    ]
  },
  {
    id: 'cordoba-bridge-morning',
    title: 'قرطبہ کے پل پر صبح',
    era: 'اندلس',
    date: 'چوتھی/دسویں صدی عیسوی',
    location: 'قرطبہ',
    readingTime: '۴ منٹ',
    kind: 'شہر',
    sourceBasis: 'اندلسی شہری زندگی، پل، بازار، مسجد اور کتابی ثقافت کے عمومی تاریخی تناظر پر مبنی کہانی؛ سوانح نہیں۔',
    paragraphs: [
      'صبح کے وقت پل پر قدموں کی چاپ گونج رہی تھی۔ ایک طرف کاریگر دکان کھول رہے تھے، دوسری طرف طالب علم کتابیں بغل میں دبائے درس کی طرف جا رہے تھے۔ شہر کی رونق صرف عمارتوں میں نہیں بلکہ راستوں، پانی، بازار اور مدرسوں کے ربط میں تھی۔',
      'ایک مسافر نے دریا کے پار سے شہر کو دیکھا تو اسے لگا جیسے پتھر، پانی اور لفظ ایک ساتھ سانس لے رہے ہوں۔ مگر راوی نے فوراً یاد دلایا کہ ہر خوبصورت منظر کے پیچھے انتظام، محنت، ٹیکس، سیاست اور زمانے کی تبدیلی بھی ہوتی ہے۔',
      'یہ کہانی قرطبہ کو ایک زندہ تاریخی جگہ کے طور پر پڑھنے کی دعوت دیتی ہے: نقشہ دیکھیں، تاریخ نوٹ کریں، پھر شہر کی روایت کو ماخذ کے ساتھ جوڑیں۔'
    ]
  },
  {
    id: 'traveler-caravan-choice',
    title: 'قافلے کا مشکل فیصلہ',
    era: 'قرون وسطیٰ کا سفر',
    date: 'آٹھویں/چودھویں صدی عیسوی',
    location: 'شمالی افریقہ سے مصر کی راہ',
    readingTime: '۶ منٹ',
    kind: 'سفر',
    sourceBasis: 'رحلہ نگاری، حج کے راستوں، قافلوں اور مسافروں کے خطرات کے تاریخی تناظر پر مبنی تعلیمی کہانی؛ سوانح نہیں۔',
    paragraphs: [
      'قافلہ دو راستوں کے سامنے رکا۔ ایک راستہ چھوٹا تھا مگر پانی کم ملتا تھا؛ دوسرا لمبا تھا مگر کارواں سراؤں کی خبر بہتر تھی۔ سردار نے جلدی فیصلہ نہ کیا۔ اس نے اونٹوں کی حالت، مسافروں کی تعداد، موسم اور اگلے کنویں کا فاصلہ پوچھا۔',
      'ایک نوجوان نے کہا کہ بہادری تیز چلنے میں ہے۔ بزرگ مسافر نے جواب دیا کہ تاریخ میں بہت سی ناکامیاں تیزی سے نہیں بلکہ بے خبری سے پیدا ہوئیں۔ راستہ وہ چنو جس کی خبر زیادہ معتبر ہو۔',
      'یہ قصہ کسی ایک مشہور مسافر کی زندگی نہیں سناتا؛ یہ بتاتا ہے کہ سفر کی تاریخ میں نقشہ، موسم، پانی، خبر اور اجتماعی فیصلہ کتنے اہم تھے۔'
    ]
  },
  {
    id: 'indus-seal-reader',
    title: 'مہر پر بنا ہوا نشان',
    era: 'وادیٔ سندھ',
    date: 'تقریباً 2600–1900 قبل مسیح',
    location: 'موہنجو دڑو / ہڑپہ',
    readingTime: '۵ منٹ',
    kind: 'واقعہ',
    sourceBasis: 'آثارِ قدیمہ، مہروں، شہری منصوبہ بندی اور غیر پڑھی گئی تحریر کے تناظر پر مبنی تعلیمی کہانی؛ سوانح نہیں۔',
    paragraphs: [
      'مٹی ہٹاتے ہوئے ایک چھوٹی سی مہر ہاتھ آئی۔ اس پر جانور کی شبیہ اور چند نشان تھے۔ مزدور نے اسے صرف خوبصورت چیز سمجھا، مگر محقق نے کہا کہ چھوٹی چیزیں کبھی کبھی بڑے سوال کھول دیتی ہیں۔',
      'کیا یہ تجارت کی نشانی تھی؟ کسی خاندان یا ادارے کی علامت؟ یا کسی ایسی تحریر کا حصہ جسے ہم ابھی پڑھ نہیں سکتے؟ جواب یقینی نہیں تھا، اس لیے نوٹ بک میں امکان کو امکان ہی لکھا گیا۔',
      'یہ کہانی بچوں اور بڑوں کو یاد دلاتی ہے کہ قدیم تاریخ میں خاموش شواہد بھی بولتے ہیں، مگر ہمیں ان کی آواز اپنی طرف سے گھڑنی نہیں چاہیے۔'
    ]
  }
];
