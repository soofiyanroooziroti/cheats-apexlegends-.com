/** Primary keyword per core URL (null = no dedicated keyword). */
export const PAGE_KEYWORDS: Record<string, string | null> = {
  '/': 'apex legends cheats',
  '/products/apex-legends-cheats/': null,
  '/products/apex-legends-cheats/loader/': 'apex legends cheat',
  '/products/apex-legends-cheats/hwid-spoofer/': 'apex legends spoofer',
  '/blog/': null,
};

export const PRODUCT_H1: Record<string, string> = {
  loader: 'Apex Legends cheat',
  'hwid-spoofer': 'Apex Legends spoofer',
};

export const PRODUCT_PAGE_KEYWORDS: Record<string, string> = {
  loader: 'apex legends cheat',
  'hwid-spoofer': 'apex legends spoofer',
};

/** Reserved for blog URLs — do not use these phrases as a second core-page keyword. */
export const RESERVED_BLOG_KEYWORDS = [
  'apex legends hacks',
  'apex legends aimbot',
  'apex legends esp',
  'apex legends dma',
  'apex legend cheating',
  'best apex legends cheats',
  'apex anticheat',
] as const;

export function primaryKeywords(): string[] {
  return Object.values(PAGE_KEYWORDS).filter((k): k is string => Boolean(k));
}
