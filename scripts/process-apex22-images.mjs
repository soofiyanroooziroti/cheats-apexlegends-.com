/**
 * Hero (1280×720, ≤90KB) + product gallery WebPs from apex-22-images.zip sources.
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = path.join(root, '_apex22_extract');
const zipPath = path.join(root, 'apex-22-images.zip');

const HERO_OUT = path.join(root, 'public/images/hero');
const PRODUCT_OUT = path.join(root, 'public/images/products');
const HERO_WIDTHS = [320, 640, 1280];

const HERO_JOBS = [
  { file: 'apex10.webp', out: 'apex-legends-hero-ranked-hud.webp' },
  { file: 'ap2.webp', out: 'apex-legends-hero-squad-combat.webp' },
  { file: 'apex8.webp', out: 'apex-legends-hero-legend-kit.webp' },
  { file: 'apex1.webp', out: 'apex-legends-hero-kings-canyon.webp', crop169: true },
  { file: 'apex2.webp', out: 'apex-legends-hero-endgame-ring.webp', crop169: true },
  { file: 'ap4.webp', out: 'apex-legends-hero-team-rotation.webp' },
];

/** Loader product gallery — full frames, same order as the product page. */
const PRODUCT_JOBS = [
  { file: 'zadeyo-apexlegends-3-aimbot.webp', out: 'apex-legends-menu-aimbot-full.webp' },
  { file: 'zadeyo-apexlegends-3-world.webp', out: 'apex-legends-menu-world-full.webp' },
  { file: 'zadeyo-apexlegends-1-visuals.webp', out: 'apex-legends-menu-visuals-full.webp' },
  { file: 'zadeyo-apexlegends-4-misc.webp', out: 'apex-legends-menu-misc-full.webp' },
];

async function ensureExtracted() {
  if (fs.existsSync(path.join(srcDir, 'apex10.webp'))) return;
  fs.mkdirSync(srcDir, { recursive: true });
  await import('node:child_process').then(({ execSync }) => {
    execSync(
      `powershell -NoProfile -Command "Expand-Archive -LiteralPath '${zipPath.replace(/'/g, "''")}' -DestinationPath '${srcDir.replace(/'/g, "''")}' -Force"`,
      { stdio: 'inherit' },
    );
  });
}

function findSource(name) {
  const direct = path.join(srcDir, name);
  if (fs.existsSync(direct)) return direct;
  const nested = fs
    .readdirSync(srcDir, { recursive: true })
    .map((f) => path.join(srcDir, f))
    .find((p) => path.basename(p).toLowerCase() === name.toLowerCase());
  if (nested && fs.existsSync(nested)) return nested;
  throw new Error(`Missing source: ${name}`);
}

async function writeHeroWebp(input, outputPath, crop169 = false) {
  let pipeline = sharp(input);
  if (crop169) {
    pipeline = pipeline.resize(1280, 720, { fit: 'cover', position: 'center' });
  } else {
    pipeline = pipeline.resize(1280, 720, { fit: 'cover', position: 'center' });
  }
  let quality = 86;
  let buffer;
  for (let i = 0; i < 12; i++) {
    buffer = await pipeline.webp({ quality, effort: 6 }).toBuffer();
    if (buffer.length <= 90 * 1024 || quality <= 48) break;
    quality -= 4;
  }
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, buffer);
  const kb = (buffer.length / 1024).toFixed(1);
  console.log(`hero ${path.basename(outputPath)} ${kb}KB q=${quality}`);

  const base = outputPath.replace(/\.webp$/i, '');
  for (const w of HERO_WIDTHS) {
    if (w === 1280) continue;
    const out = `${base}-${w}.webp`;
    await sharp(buffer)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: Math.min(quality + 4, 88), effort: 4 })
      .toFile(out);
  }
}

async function writeProductWebp(input, outputPath) {
  const meta = await sharp(input).metadata();
  let quality = 84;
  let buffer;
  const pipeline = sharp(input);
  for (let i = 0; i < 10; i++) {
    buffer = await pipeline.clone().webp({ quality, effort: 5 }).toBuffer();
    if (buffer.length <= 200 * 1024 || quality <= 50) break;
    quality -= 5;
  }
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, buffer);
  console.log(
    `product ${path.basename(outputPath)} ${(buffer.length / 1024).toFixed(1)}KB ${meta.width}x${meta.height}`,
  );
  return { width: meta.width ?? 1280, height: meta.height ?? 720 };
}

async function main() {
  await ensureExtracted();
  fs.mkdirSync(HERO_OUT, { recursive: true });
  fs.mkdirSync(PRODUCT_OUT, { recursive: true });

  const dimensions = { hero: [], product: [] };

  for (const job of HERO_JOBS) {
    const input = findSource(job.file);
    const out = path.join(HERO_OUT, job.out);
    await writeHeroWebp(input, out, job.crop169);
    dimensions.hero.push({ out: job.out, width: 1280, height: 720 });
  }

  for (const job of PRODUCT_JOBS) {
    const input = findSource(job.file);
    const out = path.join(PRODUCT_OUT, job.out);
    const dim = await writeProductWebp(input, out);
    dimensions.product.push({ out: job.out, ...dim });
  }

  fs.writeFileSync(
    path.join(root, 'src/data/apex-image-dimensions.json'),
    `${JSON.stringify(dimensions, null, 2)}\n`,
  );
  console.log('process-apex22-images: done');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
