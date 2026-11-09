import fs from 'node:fs';
import path from 'node:path';

const dir = path.join(process.cwd(), 'src/content/blog/en');
const map = {
  'valorant-vanguard-security-2026.md': 'valorant-vanguard-risk-hud.webp',
  'valorant-vanguard-vs-vac.md': 'valorant-vanguard-risk-hud.webp',
  'valorant-xray-tool.md': 'valorant-player-esp-boxes.webp',
  'valorant-cheats-reddit.md': 'valorant-custom-game-hud.webp',
  'valorant-custom-game-cheats.md': 'valorant-custom-game-hud.webp',
  'valorant-player-esp.md': 'valorant-player-esp-multiple.webp',
  'valorant-agent-esp.md': 'valorant-agent-spike-esp-hud.webp',
  'valorant-skeleton-esp.md': 'valorant-skeleton-esp-close.webp',
  'valorant-spike-esp.md': 'valorant-spike-esp-hud.webp',
  'valorant-health-esp.md': 'valorant-health-esp-hud.webp',
  'valorant-rank-esp.md': 'valorant-rank-esp-hud.webp',
  'valorant-aimbot.md': 'valorant-aimbot-hud.webp',
  'valorant-streamproof.md': 'valorant-streamproof-menu.webp',
  'what-is-an-hwid-spoofer.md': 'valorant-hwid-spoofer-hud.webp',
  'what-an-hwid-spoofer-does.md': 'valorant-hwid-spoofer-hud.webp',
  'valorant-cheats-pricing.md': 'valorant-pricing-menu.webp',
  'are-spoofer-and-ugc-necessary.md': 'valorant-player-esp-boxes.webp',
};

for (const [file, img] of Object.entries(map)) {
  const p = path.join(dir, file);
  let text = fs.readFileSync(p, 'utf8');
  text = text.replace(/"image": "\/images\/gameplay\/[^"]+"/, `"image": "/images/gameplay/${img}"`);
  fs.writeFileSync(p, text);
  console.log(`${file} -> ${img}`);
}
