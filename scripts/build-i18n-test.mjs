/**
 * English-only static build (sitemap + routes) until locales are translated.
 * Set BUILD_SHIP_LOCALES=all before astro build to ship every locale again.
 */
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const env = {
  ...process.env,
  BUILD_SHIP_LOCALES: process.env.BUILD_SHIP_LOCALES ?? 'en-only',
  PUBLIC_SITE_URL: process.env.PUBLIC_SITE_URL ?? 'https://cheatsapexlegends.com',
};

function run(cmd, args) {
  const r = spawnSync(cmd, args, { cwd: root, stdio: 'inherit', env, shell: true });
  if (r.status !== 0) process.exit(r.status ?? 1);
}

run('node', ['scripts/optimize-images.mjs']);
run('npx', ['astro', 'build']);
run('node', ['scripts/prune-dist-images.mjs']);
run('node', ['scripts/finalize-sitemap.mjs']);
