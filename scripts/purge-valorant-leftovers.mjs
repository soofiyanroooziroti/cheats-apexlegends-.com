/**
 * Strip Valorant-template copy from Apex site locale + SEO + product JSON.
 * Run after rebrand; safe to re-run. Sister-site label "Valorant cheats" is unchanged (external footer only).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const i18nDir = path.join(root, 'src/i18n');
const seoDir = path.join(i18nDir, 'seo');
const productDir = path.join(i18nDir, 'product');

const WRONG_GAME_RE =
  /Valorant Cheats|Valorant Hacks|cheats-valorant\.org|\/products\/valorant-cheats|valorant-cheats|\bVALORANT\b|\bValorant\b|\bVanguard\b/i;

const STRING_REPLACEMENTS = [
  ['cheats-valorant.org', 'cheatsapexlegends.com'],
  ['/products/valorant-cheats/', '/products/apex-legends-cheats/'],
  ['valorant-cheats', 'apex-legends-cheats'],
  ['Valorant Cheats', 'Apex Legends cheats'],
  ['Valorant Hacks', 'Apex Legends cheats'],
  ['Cheats for Valorant', 'Apex legends cheat'],
  ['VALORANT', 'Apex Legends'],
  ['Valorant', 'Apex Legends'],
  ['Vanguard', 'EA Javelin'],
];

function replaceString(value) {
  let out = value;
  for (const [from, to] of STRING_REPLACEMENTS) {
    out = out.split(from).join(to);
  }
  return out;
}

function scrubTree(value) {
  if (typeof value === 'string') return replaceString(value);
  if (Array.isArray(value)) return value.map(scrubTree);
  if (value && typeof value === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      out[k] = scrubTree(v);
    }
    return out;
  }
  return value;
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJsonIfChanged(filePath, before, after) {
  const next = `${JSON.stringify(after, null, 2)}\n`;
  const prev = `${JSON.stringify(before, null, 2)}\n`;
  if (next !== prev) {
    fs.writeFileSync(filePath, next);
    return true;
  }
  return false;
}

function syncCriticalFromEn(localeData, enData) {
  let changed = false;
  const keys = ['site', 'hero', 'nav', 'headerNavLabels', 'navShort', 'exploreSection', 'products'];
  for (const key of keys) {
    if (enData[key] == null) continue;
    const loc = localeData[key];
    const locRaw = JSON.stringify(loc ?? {});
    if (WRONG_GAME_RE.test(locRaw)) {
      localeData[key] = structuredClone(enData[key]);
      changed = true;
    }
  }
  return changed;
}

const enPath = path.join(i18nDir, 'en.json');
const en = fs.existsSync(enPath) ? readJson(enPath) : null;

let touched = 0;

function processFile(filePath, { syncEn = false } = {}) {
  if (!fs.existsSync(filePath)) return;
  if (filePath.endsWith(`${path.sep}en.json`)) return;
  const before = readJson(filePath);
  let data = scrubTree(before);
  if (syncEn && en) {
    syncCriticalFromEn(data, en);
  }
  if (writeJsonIfChanged(filePath, before, data)) touched += 1;
}

for (const name of fs.readdirSync(i18nDir)) {
  if (!name.endsWith('.json') || name === 'glossary.json') continue;
  processFile(path.join(i18nDir, name), { syncEn: name !== 'en.json' });
}

for (const name of fs.readdirSync(seoDir)) {
  if (!name.endsWith('.json')) continue;
  processFile(path.join(seoDir, name));
}

if (fs.existsSync(productDir)) {
  for (const name of fs.readdirSync(productDir)) {
    if (!name.endsWith('.json')) continue;
    processFile(path.join(productDir, name));
  }
}

console.log(`purge-valorant-leftovers: updated ${touched} files`);
