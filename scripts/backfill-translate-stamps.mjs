/**
 * One-off: mark already-finished translate jobs so npm run translate does not redo them.
 */
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { nonDefaultShipLocales } from './locale-ship.mjs';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

function sha(filePath) {
  return createHash('sha256').update(fs.readFileSync(filePath)).digest('hex').slice(0, 16);
}

function readStamps() {
  const p = path.join(root, '.translate-stamps.json');
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch {
    return {};
  }
}

const stamps = readStamps();
const locales = nonDefaultShipLocales;

for (const locale of locales) {
  const pairs = [
    ['json', 'src/i18n/en.json', `src/i18n/${locale}.json`],
    ['forum-ui', 'src/i18n/en.json', `src/i18n/${locale}.json`],
    ['status-ui', 'src/i18n/en.json', `src/i18n/${locale}.json`],
    ['seo', 'src/i18n/seo/en.json', `src/i18n/seo/${locale}.json`],
    ['forum', 'src/i18n/forum/en.json', `src/i18n/forum/${locale}.json`],
    ['product', 'src/i18n/product/en.json', `src/i18n/product/${locale}.json`],
  ];
  for (const [kind, srcRel, destRel] of pairs) {
    const src = path.join(root, srcRel);
    const dest = path.join(root, destRel);
    if (!fs.existsSync(src) || !fs.existsSync(dest)) continue;
    const key = `${destRel}#${kind}`;
    if (stamps[key]?.srcSha === sha(src)) continue;
    if (locale === 'ja' && ['json', 'forum-ui', 'status-ui', 'seo'].includes(kind)) {
      stamps[key] = { srcSha: sha(src), at: 'backfill' };
    }
  }
}

const blogEn = path.join(root, 'src/content/blog/en');
if (fs.existsSync(blogEn)) {
  for (const file of fs.readdirSync(blogEn).filter((f) => f.endsWith('.md'))) {
    const src = path.join(blogEn, file);
    const srcH = sha(src);
    const enRaw = fs.readFileSync(src, 'utf8');
    const en = JSON.parse(enRaw.slice(3, enRaw.indexOf('\n---', 3)));
    for (const locale of locales) {
      const dest = path.join(root, 'src/content/blog', locale, file);
      if (!fs.existsSync(dest)) continue;
      const raw = fs.readFileSync(dest, 'utf8');
      const locData = JSON.parse(raw.slice(3, raw.indexOf('\n---', 3)));
      if (locData.title && locData.title !== en.title) {
        const key = `src/content/blog/${locale}/${file}#blog`;
        stamps[key] = { srcSha: srcH, at: 'backfill' };
      }
    }
  }
}

fs.writeFileSync(path.join(root, '.translate-stamps.json'), `${JSON.stringify(stamps, null, 2)}\n`);
console.log(`backfill-translate-stamps: ${Object.keys(stamps).length} stamp(s)`);
