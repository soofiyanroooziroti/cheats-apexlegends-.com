/**
 * Locales included in Astro `i18n` config — keep in sync with src/i18n/config.ts.
 */
export const defaultLocale = 'en';

const allShipLocales = [
  'en',
  'ja',
  'zh-cn',
  'es',
  'ru',
  'pt-br',
  'de',
  'fr',
  'ko',
];

/** `en-only` at build time — English routes + EN sitemap until translations ship. */
export const shipLocales =
  process.env.BUILD_SHIP_LOCALES === 'en-only' ? ['en'] : allShipLocales;

export const nonDefaultShipLocales = shipLocales.filter((l) => l !== defaultLocale);

/** Human-readable names for translate.mjs prompts. */
export const langName = {
  ja: 'Japanese',
  'zh-cn': 'Simplified Chinese',
  es: 'Spanish',
  ru: 'Russian',
  'pt-br': 'Portuguese (Brazil)',
  de: 'German',
  fr: 'French',
  ko: 'Korean',
};

export function localeFromPathname(pathname) {
  const seg = pathname.split('/').filter(Boolean)[0]?.toLowerCase();
  if (seg && nonDefaultShipLocales.includes(seg)) return seg;
  return defaultLocale;
}
