import { readFile } from 'node:fs/promises';

let cachedArchive;

async function getArchive() {
  if (!cachedArchive) {
    const file = new URL('../../public/archive-data.json', import.meta.url);
    cachedArchive = JSON.parse(await readFile(file, 'utf8'));
  }
  return cachedArchive;
}

function normalize(value = '') {
  return value.toString().toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^\p{L}\p{N}\s-]/gu, ' ').replace(/\s+/g, ' ').trim();
}

function searchItems(items, query, fields) {
  const q = normalize(query);
  if (!q) return items.slice(0, 12);
  return items.filter((item) => normalize(fields.map((field) => Array.isArray(item[field]) ? item[field].join(' ') : item[field]).join(' ')).includes(q)).slice(0, 20);
}

export const handler = async (event) => {
  const archive = await getArchive();
  const q = event.queryStringParameters?.q || '';
  const payload = {
    query: q,
    books: searchItems(archive.books, q, ['title', 'author', 'language', 'era', 'source', 'tags']),
    topics: searchItems(archive.topics, q, ['title', 'era', 'region', 'summary', 'story']),
    personalities: searchItems(archive.personalities, q, ['name', 'role', 'era', 'region', 'story']),
    legends: searchItems(archive.legends, q, ['title', 'culture', 'note', 'hook']),
    policy: 'AI-enhanced summaries are guides only; original books, sources, licenses and citations remain separate.'
  };
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=60'
    },
    body: JSON.stringify(payload)
  };
};
