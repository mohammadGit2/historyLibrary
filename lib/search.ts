import { books, topics } from './data';
const normalize = (value: string) => value.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^\p{L}\p{N}\s-]/gu, ' ').replace(/\s+/g, ' ').trim();
const aliases: Record<string, string[]> = { 'harun rashid':['harun al-rashid'], andalus:['al-andalus'], 'baghdad house wisdom':['house of wisdom','bayt al-hikma'], mughal:['mughal empire'], 'صلاح الدین':['salahuddin ayyubi'], 'عباسی':['abbasid caliphate'], 'اندلس':['al-andalus'] };
export function searchArchive(query: string) {
 const q = normalize(query); const terms = [q, ...(aliases[q] ?? [])].filter(Boolean);
 const topicMatches = topics.filter(t => terms.some(term => normalize([t.title, ...t.alternateNames, t.summary, t.region, t.era].join(' ')).includes(term) || term.includes(normalize(t.title))));
 const bookMatches = books.filter(b => terms.some(term => normalize([b.title,b.author,b.language,b.era,b.century,...b.topicTags,...b.regionTags,b.description].join(' ')).includes(term)));
 return { topics: topicMatches.length ? topicMatches : topics.slice(0,4), books: bookMatches.length ? bookMatches : books.slice(0,8), usedFallback: !topicMatches.length && !bookMatches.length };
}
export function getTopic(slug: string) { return topics.find(t => t.slug === slug); }
export function getBook(id: string) { return books.find(b => b.id === id); }
