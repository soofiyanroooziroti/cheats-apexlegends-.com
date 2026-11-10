import { nonDefaultLocales, type Locale } from './locales';

function shippedNonDefaultLocales(): readonly Locale[] {
  if (process.env.BUILD_SHIP_LOCALES === 'en-only') return [];
  return nonDefaultLocales;
}

/** Static paths for pages under src/pages/[locale]/* (non-English only). */
export function localeOnlyPaths() {
  return shippedNonDefaultLocales().map((locale) => ({ params: { locale } }));
}

/** Cross-product of slug paths and locales for [locale]/.../[slug] routes. */
export function localeSlugPaths(slugs: string[], localesFilter?: Locale[]) {
  const list = localesFilter ?? shippedNonDefaultLocales();
  return slugs.flatMap((slug) => list.map((locale) => ({ params: { slug, locale } })));
}
