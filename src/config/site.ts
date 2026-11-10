function normalizeSiteUrl(input: string): { url: string; host: string } {
  const trimmed = input.trim().replace(/\/+$/, '');
  const url = new URL(trimmed.includes('://') ? trimmed : `https://${trimmed}`);
  return { url: url.origin, host: url.hostname };
}

const fromEnv = import.meta.env?.PUBLIC_SITE_URL?.trim();
const fallback = 'https://cheatsapexlegends.com';
const resolved = normalizeSiteUrl(fromEnv || fallback);

/** Public origin (https://…), no trailing slash — sitemap and default canonical base. */
export const SITE_URL = resolved.url;

const htmlOriginEnv = import.meta.env?.PUBLIC_HTML_ORIGIN?.trim();
/** Optional crawl host for canonical/hreflang (Workers preview) without changing sitemap origin. */
export const HTML_ORIGIN = htmlOriginEnv
  ? normalizeSiteUrl(htmlOriginEnv).url
  : SITE_URL;
/** Hostname only — IndexNow, cookies, etc. */
export const SITE_DOMAIN = resolved.host;
export const PRODUCT_BASE = '/products/apex-legends-cheats/';
export const TITLE_PREFIX = 'Apex legends cheats';
export const SUPPORT_EMAIL = '';
export const DISCORD_INVITE_URL = 'https://discord.com/invite/2gMnnaPWq';
