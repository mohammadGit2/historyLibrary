import { books, topics } from './data';

const normalize = (value: string) => value.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^\p{L}\p{N}\s-]/gu, ' ').replace(/\s+/g, ' ').trim();

const aliases: Record<string, string[]> = {
  'harun rashid': ['harun al-rashid', 'abbasid caliphate'],
  andalus: ['al-andalus'],
  'baghdad house wisdom': ['house of wisdom', 'bayt al-hikma'],
  mughal: ['mughal empire', 'babur', 'akbar'],
  mighal: ['mughal empire', 'babur', 'akbar'],
  saladin: ['salahuddin ayyubi', 'crusades and salahuddin'],
  salahuddin: ['salahuddin ayyubi', 'crusades and salahuddin'],
  'ottoman 1453': ['constantinople', 'ottoman 1453'],
  constantinople: ['ottoman 1453', 'fall of constantinople'],
  'hazrat ali': ['life of hazrat ali', 'ali ibn abi talib'],
  ali: ['life of hazrat ali', 'ali ibn abi talib'],
  husain: ['husayn ibn ali and karbala', 'husain a.s'],
  husayn: ['husayn ibn ali and karbala', 'karbala'],
  'khalid bin walid': ['khalid ibn al-walid'],
  'jaladun khawarzam': ['jalal ad-din khwarazmshah'],
  'genghis khan': ['genghis khan', 'mongol empire'],
  oharaohs: ['ancient egypt and pharaohs', 'pharaohs'],
  pharaohs: ['ancient egypt and pharaohs'],
  mesoposiama: ['mesopotamia and gilgamesh', 'mesopotamia'],
  'al farish': ['salman al-farisi'],
  quran: ['quranic stories and prophets'],
  biblical: ['biblical stories and ancient near east'],
  socrates: ['socrates', 'ancient greece'],
  aristole: ['aristotle', 'ancient greece'],
  'صلاح الدین': ['salahuddin ayyubi'],
  'عباسی': ['abbasid caliphate'],
  'اندلس': ['al-andalus']
};

export function searchArchive(query: string) {
 const q = normalize(query); const terms = [q, ...(aliases[q] ?? [])].filter(Boolean);
 const topicMatches = topics.filter(t => terms.some(term => normalize([t.title, ...t.alternateNames, t.summary, t.region, t.era, ...t.storyModeText].join(' ')).includes(term) || term.includes(normalize(t.title))));
 const bookMatches = books.filter(b => terms.some(term => normalize([b.title,b.author,b.language,b.era,b.century,...b.topicTags,...b.regionTags,b.description,b.sourceName].join(' ')).includes(term)));
 return { topics: topicMatches.length ? topicMatches : topics.slice(0,4), books: bookMatches.length ? bookMatches : books.slice(0,8), usedFallback: !topicMatches.length && !bookMatches.length };
}
export function getTopic(slug: string) { return topics.find(t => t.slug === slug); }
export function getBook(id: string) { return books.find(b => b.id === id); }
