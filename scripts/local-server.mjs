#!/usr/bin/env node
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const publicDir = join(root, 'public');
const archiveDataPath = join(publicDir, 'archive-data.json');
const port = Number(process.env.PORT || process.argv.find((arg) => arg.startsWith('--port='))?.split('=')[1] || 4173);

const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon'
};

function safePath(urlPath) {
  const requested = decodeURIComponent(urlPath.split('?')[0]);
  const target = requested === '/' ? '/local.html' : requested;
  const clean = normalize(target).replace(/^\.\.(\/|\\|$)/, '');
  return join(publicDir, clean);
}

function normalizeSearch(value = '') {
  return value.toString().toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^\p{L}\p{N}\s-]/gu, ' ').replace(/\s+/g, ' ').trim();
}

function searchItems(items, query, fields) {
  const q = normalizeSearch(query);
  if (!q) return items.slice(0, 12);
  return items.filter((item) => normalizeSearch(fields.map((field) => Array.isArray(item[field]) ? item[field].join(' ') : item[field]).join(' ')).includes(q)).slice(0, 20);
}

async function serveArchiveSearch(request, response) {
  const url = new URL(request.url || '/', `http://localhost:${port}`);
  const query = url.searchParams.get('q') || '';
  const archive = JSON.parse(await readFile(archiveDataPath, 'utf8'));
  const payload = {
    query,
    books: searchItems(archive.books, query, ['title', 'author', 'language', 'era', 'source', 'tags']),
    topics: searchItems(archive.topics, query, ['title', 'era', 'region', 'summary', 'story']),
    personalities: searchItems(archive.personalities, query, ['name', 'role', 'era', 'region', 'story']),
    legends: searchItems(archive.legends, query, ['title', 'culture', 'note', 'hook']),
    policy: 'AI-enhanced summaries are guides only; original books, sources, licenses and citations remain separate.'
  };
  response.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
  response.end(JSON.stringify(payload));
}

const server = createServer(async (request, response) => {
  try {
    const pathname = new URL(request.url || '/', `http://localhost:${port}`).pathname;
    if (pathname === '/api/archive-search' || pathname === '/.netlify/functions/archive-search') {
      await serveArchiveSearch(request, response);
      return;
    }

    const filePath = safePath(request.url || '/');
    const finalPath = existsSync(filePath) ? filePath : join(publicDir, 'local.html');
    const body = await readFile(finalPath);
    const type = contentTypes[extname(finalPath)] || 'application/octet-stream';
    response.writeHead(200, {
      'Content-Type': type,
      'Cache-Control': 'no-store'
    });
    response.end(body);
  } catch (error) {
    response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end(`Local server error: ${error instanceof Error ? error.message : String(error)}`);
  }
});

server.listen(port, () => {
  console.log(`Bayt al-Tareekh local preview is running:`);
  console.log(`  http://localhost:${port}`);
  console.log(`  API: http://localhost:${port}/api/archive-search?q=Abbasid`);
  console.log('Press Ctrl+C to stop the server.');
});
