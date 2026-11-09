/**
 * Editorial queue only. Do not publish these as empty posts.
 * Paste finished prose into src/content/blog/en/{slug}.md when a draft is ready.
 * Skip anything that promises "undetected", invents reviews, or gives a bypass procedure.
 */
export const PLANNED_BLOG_TOPICS = [
  {
    slug: 'valorant-vanguard-security-2026',
    workingTitle: 'Valorant Vanguard security updates in 2026',
    intent:
      'Primary term: valorant anti-cheat. May DMA, June on-demand, November Pre-Check. Risk context only.',
  },
  {
    slug: 'valorant-vanguard-vs-vac',
    workingTitle: 'Valorant anti-cheat vs CS2: Vanguard and VAC',
    intent:
      'Primary term: valorant anti-cheat. Compare names and risk only. Do not describe detection internals or a bypass.',
  },
  {
    slug: 'valorant-cheats-reddit',
    workingTitle: 'Valorant cheats on Reddit: myths versus the published menu',
    intent:
      'Primary term: valorant cheats reddit. Stick to this store’s modules and prices. No invented thread quotes.',
  },
  {
    slug: 'what-an-hwid-spoofer-does',
    workingTitle: 'HWID spoofer for Valorant after a hardware flag',
    intent:
      'Primary term: hwid spoofer valorant. Hardware flag versus account penalty. No safety promise.',
  },
  {
    slug: 'valorant-aimbot',
    workingTitle: 'Aimbot FOV, smoothing, bone, and visibility',
    intent:
      'Primary term: valorant aimbot. Explain controls already on the product page. No abuse steps.',
  },
] as const;
