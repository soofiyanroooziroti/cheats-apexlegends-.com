/** Static path redirects (301). Keys are pathname without query/hash. */
const HUB = '/products/apex-legends-cheats/';
const LOADER = '/products/apex-legends-cheats/loader/';
const SPOOFER = '/products/apex-legends-cheats/hwid-spoofer/';
const UTILITIES = '/products/apex-legends-cheats/utilities/';
const FEATURES = '/products/apex-legends-cheats/loader/#features';

export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', HUB],
  ['/cheats/', HUB],
  ['/blogs', '/blog/'],
  ['/blogs/', '/blog/'],
  ['/reviews', '/forum/'],
  ['/reviews/', '/forum/'],
  ['/refunds', '/terms/'],
  ['/refunds/', '/terms/'],
  ['/features', FEATURES],
  ['/features/', FEATURES],
  ['/products/apex-legends-cheats', HUB],
  ['/products/apex-legends-cheats/loader', LOADER],
  ['/products/apex-legends-cheats/loader/', LOADER],
  ['/products/apex-legends-cheats/hwid-spoofer', SPOOFER],
  ['/products/apex-legends-cheats/hwid-spoofer/', SPOOFER],
  ['/products/apex-legends-cheats/utilities', UTILITIES],
  ['/products/apex-legends-cheats/utilities/', UTILITIES],
  ['/blog/are-spoofer-and-ugc-necessary', '/blog/what-an-hwid-spoofer-does/'],
  ['/blog/are-spoofer-and-ugc-necessary/', '/blog/what-an-hwid-spoofer-does/'],
  ['/forum/hwid-vs-ugc-pattern', '/forum/desktop-vs-laptop-hwid/'],
  ['/forum/hwid-vs-ugc-pattern/', '/forum/desktop-vs-laptop-hwid/'],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
