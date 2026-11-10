/**
 * Blog featured images (1200×630 WebP) from apex-22-images.zip + frontmatter patch.
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = path.join(root, '_apex22_extract');
const zipPath = path.join(root, 'apex-22-images.zip');
const blogOut = path.join(root, 'public/images/blog');
const blogMdRoot = path.join(root, 'src/content/blog');
const intrinsicPath = path.join(root, 'src/data/image-intrinsic.json');

const W = 1200;
const H = 630;

async function ensureExtracted() {
  if (fs.existsSync(path.join(srcDir, 'apex1.webp'))) return;
  fs.mkdirSync(srcDir, { recursive: true });
  const { execSync } = await import('node:child_process');
  execSync(
    `powershell -NoProfile -Command "Expand-Archive -LiteralPath '${zipPath.replace(/'/g, "''")}' -DestinationPath '${srcDir.replace(/'/g, "''")}' -Force"`,
    { stdio: 'inherit' },
  );
}

function findSource(name) {
  const direct = path.join(srcDir, name);
  if (fs.existsSync(direct)) return direct;
  throw new Error(`Missing source: ${name}`);
}

const LETTERBOX = { r: 10, g: 12, b: 16, alpha: 1 };

/** Fit full source into 1200×630 without cropping (dark letterbox). */
async function pipelineFromJob(job) {
  const input = findSource(job.src);
  return sharp(input).resize(W, H, {
    fit: 'contain',
    background: LETTERBOX,
    position: 'centre',
  });
}

/** @type {Array<{ slug: string; out: string; alt: string; src: string; extract?: (meta: sharp.Metadata) => object; position?: string }>} */
const JOBS = [
  {
    slug: 'apex-legends-esp',
    out: 'apex-legends-esp-kings-canyon-left-sector.webp',
    alt: 'Apex Legends ranked match with squad tags and zone timer in Kings Canyon',
    src: 'apex1.webp',
    position: 'left',
  },
  {
    slug: 'apex-legends-aimbot',
    out: 'apex-legends-aimbot-menu-smoothing-fov.webp',
    alt: 'Apex Legends cheat menu Aimbot tab with smoothing, FOV, and bone options',
    src: 'zadeyo-apexlegends-2-aimbot.webp',
  },
  {
    slug: 'skeleton-esp',
    out: 'skeleton-esp-bone-lines-firefight.webp',
    alt: 'Apex Legends fight with skeleton ESP bone lines on targets through cover',
    src: 'apex8.webp',
    position: 'centre',
  },
  {
    slug: 'box-esp',
    out: 'box-esp-corner-boxes-teamfight.webp',
    alt: 'Apex Legends team fight with corner box ESP on multiple players',
    src: 'apex10.webp',
    position: 'right',
  },
  {
    slug: 'health-bar-overlay',
    out: 'health-bar-overlay-shield-readout.webp',
    alt: 'Apex Legends engagement with shield and health bar ESP above enemies',
    src: 'apex3.webp',
    position: 'centre',
  },
  {
    slug: 'distance-esp',
    out: 'distance-esp-meter-labels-ring.webp',
    alt: 'Apex Legends ring fight with distance ESP readouts on spotted players',
    src: 'apex2.webp',
    position: 'top',
  },
  {
    slug: 'loot-esp',
    out: 'loot-esp-world-loot-menu.webp',
    alt: 'Apex Legends World and Loot menu with weapon and supply ESP toggles',
    src: 'zadeyo-apexlegends-2-world.webp',
  },
  {
    slug: 'weapon-esp',
    out: 'weapon-esp-visuals-menu-full.webp',
    alt: 'Apex Legends Player Visuals menu showing Weapon ESP and Held Weapon toggles',
    src: 'zadeyo-apexlegends-1-visuals.webp',
  },
  {
    slug: 'no-recoil',
    out: 'no-recoil-aimbot-menu-full.webp',
    alt: 'Apex Legends Aimbot menu with recoil control and weapon options',
    src: 'zadeyo-apexlegends-2-aimbot.webp',
  },
  {
    slug: 'stream-proof',
    out: 'stream-proof-misc-menu-full.webp',
    alt: 'Apex Legends Misc menu with stream-proof, menu keys, and config options',
    src: 'zadeyo-apexlegends-4-misc.webp',
  },
  {
    slug: 'ea-javelin-bypass',
    out: 'ea-javelin-bypass-squad-push-ap2.webp',
    alt: 'Apex Legends squad push through industrial cover with HUD callouts',
    src: 'ap2.webp',
    position: 'left',
  },
  {
    slug: 'apex-legends-hacks-safe',
    out: 'apex-legends-hacks-safe-rooftop-ap2.webp',
    alt: 'Apex Legends rooftop angle with team labels and zone pressure on screen',
    src: 'ap2.webp',
    position: 'right',
  },
  {
    slug: 'apex-legends-dma',
    out: 'apex-legends-dma-long-range-ap2.webp',
    alt: 'Apex Legends long-range fight with player markers across open ground',
    src: 'ap2.webp',
    position: 'top',
  },
  {
    slug: 'best-apex-legends-cheats',
    out: 'best-apex-legends-cheats-endgame-ap4.webp',
    alt: 'Apex Legends endgame scramble with squad ESP and kill feed pressure',
    src: 'ap4.webp',
    position: 'centre',
  },
  {
    slug: 'hwid-spoofer-safety',
    out: 'hwid-spoofer-safety-rotation-ap4.webp',
    alt: 'Apex Legends team rotation between buildings before the next engagement',
    src: 'ap4.webp',
    position: 'left',
  },
  {
    slug: 'apex-legend-cheating-ranked',
    out: 'apex-ranked-climb-leaderboard-ap4.webp',
    alt: 'Apex Legends ranked match with scoreboard pressure and zone closing in',
    src: 'ap4.webp',
    position: 'right',
  },
  {
    slug: '24-7-support',
    out: '24-7-support-loader-help-ap4.webp',
    alt: 'Apex Legends in-game scene with squad HUD used as support guide cover',
    src: 'ap4.webp',
    position: 'top',
  },
];

function splitFrontmatter(raw) {
  const normalized = raw.replace(/\r\n/g, '\n');
  if (!normalized.startsWith('---\n')) return null;
  const end = normalized.indexOf('\n---\n', 4);
  if (end === -1) return null;
  return {
    json: normalized.slice(4, end),
    body: normalized.slice(end + 5),
  };
}

function patchBlogFrontmatter() {
  const bySlug = Object.fromEntries(JOBS.map((j) => [j.slug, j]));
  let count = 0;

  function walk(dir) {
    for (const name of fs.readdirSync(dir)) {
      const p = path.join(dir, name);
      if (fs.statSync(p).isDirectory()) walk(p);
      else if (name.endsWith('.md')) {
        const parts = splitFrontmatter(fs.readFileSync(p, 'utf8'));
        if (!parts) continue;
        let data;
        try {
          data = JSON.parse(parts.json);
        } catch {
          continue;
        }
        const job = bySlug[data.slug];
        if (!job) continue;
        const image = `/images/blog/${job.out}`;
        const locale = path.relative(blogMdRoot, p).split(path.sep)[0] ?? 'en';
        data.image = image;
        if (locale === 'en' || !data.imageAlt) data.imageAlt = job.alt;
        const out = `---\n${JSON.stringify(data, null, 2)}\n---\n${parts.body}`;
        fs.writeFileSync(p, out, 'utf8');
        count += 1;
      }
    }
  }

  walk(blogMdRoot);
  return count;
}

async function main() {
  await ensureExtracted();
  fs.mkdirSync(blogOut, { recursive: true });

  const intrinsic = fs.existsSync(intrinsicPath)
    ? JSON.parse(fs.readFileSync(intrinsicPath, 'utf8'))
    : {};

  for (const job of JOBS) {
    const dest = path.join(blogOut, job.out);
    const pipe = await pipelineFromJob(job);
    await pipe.webp({ quality: 84, effort: 5 }).toFile(dest);
    const kb = (fs.statSync(dest).size / 1024).toFixed(1);
    console.log(`cover ${job.out} ${kb}KB`);
    const url = `/images/blog/${job.out}`;
    intrinsic[url] = { width: W, height: H };
  }

  fs.writeFileSync(intrinsicPath, `${JSON.stringify(intrinsic, null, 2)}\n`);

  const patched = patchBlogFrontmatter();
  console.log(`Patched ${patched} blog markdown file(s); wrote ${path.relative(root, intrinsicPath)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
