/**
 * Terms that must stay identical in every locale (translate script + i18n:check).
 * Also exported to scripts/protected-terms.json.
 */

export const PROTECTED_GAME_NAMES = ['VALORANT', 'Vanguard', 'VAC', 'Valorant Cheats'] as const;

export const PROTECTED_SITE_NAMES = [
  'Valorant Cheats',
  'Valorant Hacks',
  'valorant cheats',
  'valorant hacks',
  'cheats-valorant.org',
  'Cheats for Valorant',
  'cheats for valorant',
  'HWID Spoofer',
  'Zadeyo',
] as const;

export const PROTECTED_PRODUCT_NAMES = [
  'Valorant Cheats',
  'Valorant Hacks',
  'Cheats for Valorant',
  'HWID Spoofer',
] as const;

/** SEO / blog primary phrases — never localize (placeholders + i18n:check). */
export const PROTECTED_SEO_KEYWORDS = [
  'valorant aimbot',
  'valorant anti-cheat',
  'valorant cheats reddit',
  'valorant custom game cheats',
  'valorant xray',
  'valorant hacks',
  'valorant cheats',
  'Valorant hacks',
  'Valorant cheats',
  'player esp',
  'agent esp',
  'spike esp',
  'skeleton esp',
  'health esp',
  'rank esp',
  'streamproof overlay',
  'hwid spoofer valorant',
] as const;

export const PROTECTED_CHEAT_TERMS = [
  'Aimbot',
  'ESP',
  'Wallhack',
  'DMA',
  'Cloud DMA',
  'AWS',
  'Loader',
  'HWID',
  'Spoofer',
  'FOV',
  'Skeleton',
  'Box',
  'Head Circle',
  'Health Bar',
  'Snaplines',
  'OOF Arrows',
  '2D Radar',
  'Vehicle ESP',
  'Visible Check',
  'Prediction',
  'Draw FOV',
  'Draw Target Line',
  'Bone Selection',
  'Smooth',
  'No Recoil',
  'No Spread',
  'Full Bright',
  'Crosshair',
  'Stream-Proof',
  'Panic Key',
  'Menu Key',
  'Hotkeys',
  'Config',
  'aimbot',
  'wallhack',
  'chams',
] as const;

export const PROTECTED_KEYS_AND_TECH = [
  'Insert',
  'End',
  'RMB',
  'LMB',
  'Mouse 4',
  'Windows',
  'Windows 10',
  'Windows 11',
  'Intel',
  'AMD',
  'TPM',
  'HVCI',
  'UEFI',
  'PC',
  'Discord',
  'Steam',
  'Secure Boot',
  'Core isolation',
  'core isolation',
  'secure boot',
] as const;

export const PROTECTED_MONEY_AND_VERSIONS = [
  '$35',
  '$50',
  '$150',
  'USD',
  'Lifetime',
  'Monthly',
  '31 days',
  'Lifetime $150',
  '$35 for 31 days',
  '$50 for 31 days',
  'USD · 31-day access',
  'USD · lifetime access',
  'P31D',
  'P99Y',
] as const;

export const PROTECTED_FOOTER_SITES = [
  'Unturned cheats',
  'Aion 2 hack',
  'CS2 cheats',
] as const;

/** Flat list for JSON export and i18n:check (longest first for substring checks). */
export const PROTECTED_TERMS: readonly string[] = [
  ...new Set([
    ...PROTECTED_GAME_NAMES,
    ...PROTECTED_SITE_NAMES,
    ...PROTECTED_PRODUCT_NAMES,
    ...PROTECTED_CHEAT_TERMS,
    ...PROTECTED_KEYS_AND_TECH,
    ...PROTECTED_MONEY_AND_VERSIONS,
    ...PROTECTED_FOOTER_SITES,
    ...PROTECTED_SEO_KEYWORDS,
  ]),
].sort((a, b) => b.length - a.length);
