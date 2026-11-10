export const defaultLocale = 'en' as const;

export interface LocaleConfigEntry {
  code: string;
  urlPrefix: string;
  nativeName: string;
  shortLabel: string;
  hreflang: string;
  htmlLang: string;
  dir: 'ltr' | 'rtl';
  ogLocale: string;
  /** When true, use system UI fonts only (no Manrope/Rajdhani files). */
  systemFontsOnly?: boolean;
}

/**
 * Shipped languages — fill non-English copy with `npm run translate`.
 * URL prefix matches `code` (valcheats-style locale routes).
 */
export const localeConfig: readonly LocaleConfigEntry[] = [
  {
    code: 'en',
    urlPrefix: '',
    nativeName: 'English',
    shortLabel: 'EN',
    hreflang: 'en',
    htmlLang: 'en',
    dir: 'ltr',
    ogLocale: 'en_US',
  },
  {
    code: 'ja',
    urlPrefix: 'ja',
    nativeName: '日本語',
    shortLabel: 'JA',
    hreflang: 'ja',
    htmlLang: 'ja',
    dir: 'ltr',
    ogLocale: 'ja_JP',
    systemFontsOnly: true,
  },
  {
    code: 'zh-cn',
    urlPrefix: 'zh-cn',
    nativeName: '简体中文',
    shortLabel: 'ZH-Hans',
    hreflang: 'zh-Hans',
    htmlLang: 'zh-Hans',
    dir: 'ltr',
    ogLocale: 'zh_CN',
    systemFontsOnly: true,
  },
  {
    code: 'es',
    urlPrefix: 'es',
    nativeName: 'Español',
    shortLabel: 'ES',
    hreflang: 'es',
    htmlLang: 'es',
    dir: 'ltr',
    ogLocale: 'es_ES',
  },
  {
    code: 'ru',
    urlPrefix: 'ru',
    nativeName: 'Русский',
    shortLabel: 'RU',
    hreflang: 'ru',
    htmlLang: 'ru',
    dir: 'ltr',
    ogLocale: 'ru_RU',
  },
  {
    code: 'pt-br',
    urlPrefix: 'pt-br',
    nativeName: 'Português (Brasil)',
    shortLabel: 'PT-BR',
    hreflang: 'pt-BR',
    htmlLang: 'pt-BR',
    dir: 'ltr',
    ogLocale: 'pt_BR',
  },
  {
    code: 'de',
    urlPrefix: 'de',
    nativeName: 'Deutsch',
    shortLabel: 'DE',
    hreflang: 'de',
    htmlLang: 'de',
    dir: 'ltr',
    ogLocale: 'de_DE',
  },
  {
    code: 'fr',
    urlPrefix: 'fr',
    nativeName: 'Français',
    shortLabel: 'FR',
    hreflang: 'fr',
    htmlLang: 'fr',
    dir: 'ltr',
    ogLocale: 'fr_FR',
  },
  {
    code: 'ko',
    urlPrefix: 'ko',
    nativeName: '한국어',
    shortLabel: 'KO',
    hreflang: 'ko',
    htmlLang: 'ko',
    dir: 'ltr',
    ogLocale: 'ko_KR',
    systemFontsOnly: true,
  },
] as const satisfies readonly LocaleConfigEntry[];
