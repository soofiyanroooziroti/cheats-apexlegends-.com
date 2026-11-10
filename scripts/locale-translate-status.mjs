import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { shipLocales, defaultLocale, langName } from './locale-ship.mjs';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

const run = spawnSync('node', ['scripts/translate.mjs'], {
  cwd: root,
  encoding: 'utf8',
  env: { ...process.env, TRANSLATE_DRY_RUN: '1' },
});

const lines = run.stdout.split('\n');
const pending = [];
for (const line of lines) {
  const m = line.trim().match(/^- (.+) \((.+)\)$/);
  if (!m) continue;
  const rel = m[1].replace(/\\/g, '/');
  const kind = m[2];
  const locale = localeFromDest(rel, kind);
  pending.push({ rel, kind, locale });
}

const locales = shipLocales.filter((l) => l !== defaultLocale);
const byLocale = Object.fromEntries(locales.map((l) => [l, []]));
for (const p of pending) {
  if (byLocale[p.locale]) byLocale[p.locale].push(p);
}

console.log('Locale translation status (cheats_apexlegends_.com)\n');
const complete = [];
const partial = [];

for (const locale of locales) {
  const missing = byLocale[locale];
  const name = langName[locale] ?? locale;
  if (missing.length === 0) {
    complete.push(locale);
    console.log(`✓ ${locale} (${name}) — COMPLETE (all translate slots up to date)`);
  } else {
    partial.push(locale);
    const kinds = [...new Set(missing.map((m) => m.kind))].sort().join(', ');
    console.log(`✗ ${locale} (${name}) — ${missing.length} job(s) left [${kinds}]`);
    for (const j of missing.slice(0, 6)) {
      console.log(`    · ${j.kind}: ${j.rel}`);
    }
    if (missing.length > 6) console.log(`    · … +${missing.length - 6} more`);
  }
}

console.log('\n---');
console.log(`Complete: ${complete.length ? complete.join(', ') : '(none)'}`);
console.log(`Incomplete: ${partial.length ? partial.join(', ') : '(none)'}`);

function localeFromDest(rel, kind) {
  const blog = rel.match(/^src\/content\/blog\/([^/]+)\//);
  if (blog) return blog[1];
  const product = rel.match(/^src\/i18n\/product\/([^/]+)\.json$/);
  if (product) return product[1];
  const seo = rel.match(/^src\/i18n\/seo\/([^/]+)\.json$/);
  if (seo) return seo[1];
  const forum = rel.match(/^src\/i18n\/forum\/([^/]+)\.json$/);
  if (forum) return forum[1];
  const main = rel.match(/^src\/i18n\/([^/]+)\.json$/);
  if (main) return main[1];
  return '?';
}
