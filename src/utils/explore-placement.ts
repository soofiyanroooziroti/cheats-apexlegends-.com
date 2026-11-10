import { stripLocaleFromPath } from '../i18n/routing';

/** Home has its own Explore block; article and thread pages stay focused. */
export function shouldShowSitewideExplore(pathname: string): boolean {
  const path = stripLocaleFromPath(pathname);
  if (path === '/') return false;
  if (/^\/blog\/[^/]+\/$/.test(path)) return false;
  if (/^\/forum\/[^/]+\/$/.test(path)) return false;
  return true;
}
