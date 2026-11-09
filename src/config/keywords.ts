/** Primary keyword per core URL (null = no dedicated keyword). */
export const PAGE_KEYWORDS: Record<string, string | null> = {
  '/': 'valorant cheats',
  '/products/valorant-cheats/': 'valorant hacks',
  '/products/valorant-cheats/loader/': null,
  '/products/valorant-cheats/hwid-spoofer/': null,
  '/blog/': null,
};

export const PRODUCT_H1: Record<string, string> = {
  loader: 'Cheats for Valorant',
  'hwid-spoofer': 'HWID Spoofer',
};

export const PRODUCT_PAGE_KEYWORDS: Record<string, string> = {};

/** Reserved for blog URLs — do not use these phrases as a second core-page keyword. */
export const RESERVED_BLOG_KEYWORDS = [
  'player esp',
  'agent esp',
  'spike esp',
  'skeleton esp',
  'health esp',
  'rank esp',
  'valorant aimbot',
  'streamproof overlay',
  'valorant xray',
  'valorant custom game cheats',
  'valorant anti-cheat',
  'valorant cheats reddit',
  'hwid spoofer valorant',
  'cheats for valorant',
  'valorant hacks',
] as const;

export function primaryKeywords(): string[] {
  return Object.values(PAGE_KEYWORDS).filter((k): k is string => Boolean(k));
}
