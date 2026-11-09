import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const root = process.cwd();
const zipPath = path.join(root, 'valorant-24-images.zip');
const srcDir = path.join(root, '_valorant-24-extract');

/** Loader gallery — zadeyo menu tabs (Visuals, World, Aimbot, Misc). */
const MENU_COPY = [
  ['zadeyo-valorant-1-visuals.webp', 'public/images/products/valorant-menu-visuals.webp'],
  ['zadeyo-valorant-2-world.webp', 'public/images/products/valorant-menu-world.webp'],
  ['zadeyo-valorant-3-aimbot.webp', 'public/images/products/valorant-menu-aimbot.webp'],
  ['zadeyo-valorant-4-misc.webp', 'public/images/products/valorant-menu-misc.webp'],
];

const COPY = [
  ...MENU_COPY,
  ['whsatano-valorant-s2.webp', 'public/images/products/valorant-spoofer-hero.webp'],
  ['whsatano-valorant-s2-e756aae18c6c.webp', 'public/images/products/valorant-spoofer-board.webp'],
  ['e2d04148-8891-4e0f-b125-4064685f572f.webp', 'public/images/products/valorant-spoofer-brand.webp'],
  ['cheats-menu-1.webp', 'public/images/gameplay/valorant-pricing-menu.webp'],
  ['cheats-menu-2.webp', 'public/images/gameplay/valorant-streamproof-menu.webp'],
  ['valorant-esp-archway-showdown.webp', 'public/images/gameplay/valorant-player-esp-multiple.webp'],
  ['snowy-industrial-alley-with-esp-overlays.webp', 'public/images/gameplay/valorant-player-esp-boxes.webp'],
  ['valorant-sci-fi-showdown-hud.webp', 'public/images/gameplay/valorant-skeleton-esp-close.webp'],
  ['futuristic-valorant-corridor-battle-hud.webp', 'public/images/gameplay/valorant-skeleton-esp-indoor.webp'],
  ['whsatano-valorant-s1.webp', 'public/images/gameplay/valorant-health-esp-hud.webp'],
  ['zadeyo-valorant-3-world.webp', 'public/images/gameplay/valorant-agent-spike-esp-hud.webp'],
  ['valorant-jett-knives-at-a-belt-1.webp', 'public/images/gameplay/valorant-spike-esp-hud.webp'],
  ['futuristic-fps-corridor-with-aim-assist-overlay.webp', 'public/images/gameplay/valorant-vanguard-risk-hud.webp'],
  ['futuristic-fps-corridor-with-aim-assist-overlay (1).webp', 'public/images/gameplay/valorant-custom-game-hud.webp'],
  ['zadeyo-valorant-2-aimbot.webp', 'public/images/gameplay/valorant-aimbot-hud.webp'],
  ['5-webp-464f6deb34dc1b8af2bf890f1fbf8367.webp', 'public/images/gameplay/valorant-rank-esp-hud.webp'],
  ['whsatano-valorant-s2.webp', 'public/images/gameplay/valorant-hwid-spoofer-hud.webp'],
];

const MENU_DESTS = new Set(MENU_COPY.map(([, dest]) => path.join(root, dest)));

function sha256(filePath) {
  return crypto.createHash('sha256').update(fs.readFileSync(filePath)).digest('hex');
}

function removeResponsiveVariants(destPath) {
  const dir = path.dirname(destPath);
  const base = path.basename(destPath, '.webp');
  if (!fs.existsSync(dir)) return;
  for (const name of fs.readdirSync(dir)) {
    if (name.startsWith(`${base}-`) && name.endsWith('.webp')) {
      fs.unlinkSync(path.join(dir, name));
    }
  }
}

function ensureExtracted() {
  if (fs.existsSync(srcDir) && fs.readdirSync(srcDir).length > 0) return;
  if (!fs.existsSync(zipPath)) {
    console.error('Missing valorant-24-images.zip in project root.');
    process.exit(1);
  }
  fs.mkdirSync(srcDir, { recursive: true });
  const ps = spawnSync(
    'powershell',
    [
      '-NoProfile',
      '-Command',
      `Expand-Archive -Path '${zipPath.replace(/'/g, "''")}' -DestinationPath '${srcDir.replace(/'/g, "''")}' -Force`,
    ],
    { stdio: 'inherit' },
  );
  if (ps.status !== 0) process.exit(ps.status ?? 1);
}

function removeLegacy(dir) {
  if (!fs.existsSync(dir)) return;
  for (const name of fs.readdirSync(dir)) {
    if (!/\.webp$/i.test(name)) continue;
    if (
      /^dayz-/i.test(name) ||
      /^wardogs-/i.test(name) ||
      /^cs2-spoofer-/i.test(name) ||
      name === 'ugc-account-recovery.webp' ||
      /^valorant-ugc-workspace/i.test(name) ||
      /-dayz-/i.test(name) ||
      /^warzone-menu/i.test(name)
    ) {
      const full = path.join(dir, name);
      fs.unlinkSync(full);
      console.log('Removed', path.relative(root, full));
      removeResponsiveVariants(full);
    }
  }
}

function removeStaleMenuProducts() {
  const productsDir = path.join(root, 'public/images/products');
  if (!fs.existsSync(productsDir)) return;
  const keepBases = new Set(
    [...MENU_DESTS].map((p) => path.basename(p, '.webp')),
  );
  keepBases.add('valorant-spoofer-hero');
  keepBases.add('valorant-spoofer-board');
  keepBases.add('valorant-spoofer-brand');

  for (const name of fs.readdirSync(productsDir)) {
    if (!/\.webp$/i.test(name)) continue;
    const base = name.replace(/-\d+\.webp$/i, '').replace(/\.webp$/i, '');
    if (name.includes('menu') && !keepBases.has(base)) {
      fs.unlinkSync(path.join(productsDir, name));
      console.log('Removed stale menu asset', path.relative(root, path.join(productsDir, name)));
    }
  }
}

ensureExtracted();

let updated = 0;
let unchanged = 0;

for (const [from, destRel] of COPY) {
  const fromPath = path.join(srcDir, from);
  const destPath = path.join(root, destRel);
  if (!fs.existsSync(fromPath)) {
    console.warn('Skip (missing in zip):', from);
    continue;
  }
  fs.mkdirSync(path.dirname(destPath), { recursive: true });

  const same = fs.existsSync(destPath) && sha256(fromPath) === sha256(destPath);
  if (same) {
    console.log('Unchanged (kept):', destRel);
    unchanged += 1;
    continue;
  }

  if (fs.existsSync(destPath)) {
    removeResponsiveVariants(destPath);
  }
  fs.copyFileSync(fromPath, destPath);
  console.log('Updated:', destRel);
  updated += 1;
}

for (const dir of [path.join(root, 'public/images/gameplay'), path.join(root, 'public/images/products')]) {
  removeLegacy(dir);
}
removeStaleMenuProducts();

console.log(`Menu/product images: ${updated} updated, ${unchanged} unchanged. Run: npm run optimize:images`);
