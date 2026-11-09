/**
 * Regenerate public/_redirects from scripts/redirects.mjs + checkout-redirects.mjs.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PATH_REDIRECTS } from './redirects.mjs';
import { CHECKOUT_PATH_REDIRECTS } from '../src/config/checkout-redirects.mjs';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'public', '_redirects');

const lines = [];
for (const [from, to] of PATH_REDIRECTS) {
  lines.push(`${from} ${to} 301`);
}
for (const [from, to] of CHECKOUT_PATH_REDIRECTS) {
  lines.push(`${from} ${to} 302`);
}

fs.writeFileSync(out, `${lines.join('\n')}\n`);
console.log(`Wrote ${lines.length} rules → public/_redirects`);
