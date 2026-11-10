import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { splitJsonIntoChunks } from './translate-json-chunks.mjs';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const DELAY = Number(process.env.TRANSLATE_DELAY_MS ?? 2500);
/** Typical Gemini round-trip seen in local runs (seconds). */
const API_SEC = Number(process.env.TRANSLATE_EST_API_SEC ?? 12);

const dry = process.env.TRANSLATE_DRY_RUN === '1';
if (!dry) {
  process.env.TRANSLATE_DRY_RUN = '1';
}

const { spawnSync } = await import('node:child_process');
const list = spawnSync('node', ['scripts/translate.mjs'], {
  cwd: root,
  encoding: 'utf8',
  env: { ...process.env, TRANSLATE_DRY_RUN: '1' },
});

const jobLines = list.stdout
  .split('\n')
  .map((l) => l.trim())
  .filter((l) => l.startsWith('- '));

const enI18n = JSON.parse(fs.readFileSync(path.join(root, 'src/i18n/en.json'), 'utf8'));
const productEn = JSON.parse(fs.readFileSync(path.join(root, 'src/i18n/product/en.json'), 'utf8'));

let chunks = 0;
let blogs = 0;
const breakdown = [];

for (const line of jobLines) {
  const m = line.match(/^- (.+) \((.+)\)$/);
  if (!m) continue;
  const rel = m[1].replace(/\\/g, '/');
  const kind = m[2];

  if (kind === 'blog') {
    blogs += 1;
    breakdown.push({ kind, file: rel, calls: 1 });
    continue;
  }

  let obj;
  let maxKeys = Number(process.env.TRANSLATE_JSON_CHUNK_KEYS ?? 40);
  if (kind === 'forum-ui') {
    obj = { forum: enI18n.forum };
  } else if (kind === 'status-ui') {
    obj = { status: enI18n.status };
    maxKeys = 220;
  } else if (kind === 'product') {
    obj = productEn;
  } else if (kind === 'seo') {
    maxKeys = Number(process.env.TRANSLATE_SEO_CHUNK_KEYS ?? 10);
    obj = JSON.parse(fs.readFileSync(path.join(root, 'src/i18n/seo/en.json'), 'utf8'));
  } else {
    obj = enI18n;
  }

  const n = splitJsonIntoChunks(obj, maxKeys).length;
  chunks += n;
  breakdown.push({ kind, file: rel, calls: n });
}

const apiCalls = chunks + blogs;
/** Each chunk/blog: delay before/after in translate-json-chunks ≈ delayMs per chunk + job tail. */
const delayOnlySec = (apiCalls * DELAY + jobLines.length * DELAY) / 1000;
const apiOnlySec = apiCalls * API_SEC;
const totalSec = delayOnlySec + apiOnlySec;
const minSec = totalSec * 0.85;
const maxSec = totalSec * 1.35 + blogs * 25; // retries on long blogs

console.log(`Pending jobs: ${jobLines.length}`);
console.log(`API calls (est.): ${apiCalls} (${chunks} JSON chunks + ${blogs} blogs)`);
console.log(`Delays alone: ~${Math.round(delayOnlySec / 60)} min`);
console.log(`API time (@${API_SEC}s/call): ~${Math.round(apiOnlySec / 60)} min`);
console.log(`TOTAL estimate: ~${Math.round(minSec / 60)}–${Math.round(maxSec / 60)} min (${fmt(minSec)} – ${fmt(maxSec)})`);
console.log('');
console.log('Largest jobs:');
breakdown
  .sort((a, b) => b.calls - a.calls)
  .slice(0, 8)
  .forEach((j) => console.log(`  ${j.calls}× ${j.kind} ${j.file}`));

function fmt(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.round(sec % 60);
  return `${m}m ${s}s`;
}
