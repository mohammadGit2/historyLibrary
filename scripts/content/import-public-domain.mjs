#!/usr/bin/env node
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const [, , inputPath = 'public/archive-data.json'] = process.argv;
const raw = JSON.parse(await readFile(inputPath, 'utf8'));
const outDir = 'data/imports';
await mkdir(outDir, { recursive: true });
const index = {
  importedAt: new Date().toISOString(),
  notes: 'Import scaffold: add public-domain full text/OCR only when license is verified. Metadata-only records stay metadata-only.',
  books: raw.books.map((book) => ({ id: book.id, title: book.title, sourceUrl: book.sourceUrl, canStoreText: /public domain/i.test(book.license) }))
};
await writeFile(join(outDir, 'import-index.json'), JSON.stringify(index, null, 2));
console.log(`Prepared ${index.books.length} metadata records for legal text/OCR review.`);
