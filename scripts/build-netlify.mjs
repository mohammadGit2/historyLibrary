#!/usr/bin/env node
import { cp, mkdir, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = join(root, 'dist');
await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(join(root, 'public'), dist, { recursive: true });
console.log('Netlify static preview built in dist/');
console.log('Functions are served from netlify/functions with no third-party runtime modules.');
