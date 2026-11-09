const LOCALE_PREFIX = /^\/(fr|tr|pt-br|es|de|pl|th)(?=\/|$)/;

function barePath(pathname: string): string {
  const stripped = pathname.replace(LOCALE_PREFIX, '') || '/';
  if (stripped === '/') return '/';
  return stripped.endsWith('/') ? stripped : `${stripped}/`;
}

/** One descriptive alt per audited URL so the logo is not an empty image. */
export function logoAltForPath(pathname: string): string {
  const path = barePath(pathname);

  if (path === '/') return 'Valorant Cheats – logo';
  if (path === '/products/valorant-cheats/') return 'VALORANT – logo';
  if (path === '/products/valorant-cheats/loader/') return 'Player ESP – logo';
  if (path === '/blog/') return 'Guides – logo';
  if (path === '/forum/') return 'Forum – logo';
  if (path === '/faq/') return 'Faq – logo';
  if (path === '/support/') return 'Support – logo';
  return 'Valorant Cheats logo';
}
