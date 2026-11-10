import type { SitemapItem } from '@astrojs/sitemap';
import { getBlogPostsForLocale } from '../data/blog/loader';
import { forumPosts } from '../data/forum';
import { blogDateToIso } from '../data/blog/dates';
import { defaultLocale, localeConfig } from '../i18n/config';
import { SITE_URL } from './site';

const nonEnLocalePrefixes = new Set(
  localeConfig.filter((l) => l.code !== defaultLocale).map((l) => l.urlPrefix),
);

/** English-only sitemap by default; set `SITEMAP_ALL_LOCALES=1` when every locale should ship in sitemap. */
const sitemapEnglishOnly =
  process.env.SITEMAP_ALL_LOCALES !== '1' && import.meta.env.SITEMAP_ALL_LOCALES !== '1';

const blogPosts = getBlogPostsForLocale(defaultLocale);

const blogLastmod = new Map(
  blogPosts.map((post) => [`/blog/${post.slug}/`, post.dateIso ?? blogDateToIso(post.date)] as const),
);

const forumLastmod = new Map(
  forumPosts.map((post) => [`/forum/${post.slug}/`, blogDateToIso(post.date)] as const),
);

function pathnameFromUrl(url: string): string {
  const path = new URL(url).pathname;
  return path.endsWith('/') ? path : `${path}/`;
}

function contentLastmod(path: string): string | undefined {
  const blogMatch = path.match(/^(?:\/[a-z]{2}(?:-[a-z]{2})?)?(\/blog\/[^/]+\/)$/);
  if (blogMatch) return blogLastmod.get(blogMatch[1]);
  return forumLastmod.get(path);
}

export function sitemapSerialize(item: SitemapItem): SitemapItem | undefined {
  const path = pathnameFromUrl(item.url);
  item.url = `${SITE_URL}${path}`;

  if (sitemapEnglishOnly) {
    const first = path.split('/').filter(Boolean)[0];
    if (first && nonEnLocalePrefixes.has(first)) return undefined;
  }

  if (
    path.includes('/404') ||
    path.startsWith('/go/') ||
    path.startsWith('/cheats/') ||
    path.startsWith('/contact') ||
    path.includes('/rss.xml')
  ) {
    return undefined;
  }

  const dated = contentLastmod(path);
  if (dated) item.lastmod = dated;
  else delete item.lastmod;

  if (path === '/') {
    item.priority = 1;
    item.changefreq = 'weekly';
    return item;
  }

  if (path === '/blog/') {
    item.priority = 0.9;
    item.changefreq = 'weekly';
    return item;
  }

  if (path === '/forum/') {
    item.priority = 0.8;
    item.changefreq = 'daily';
    return item;
  }

  if (path.startsWith('/forum/')) {
    item.priority = 0.6;
    item.changefreq = 'weekly';
    return item;
  }

  if (path.startsWith('/blog/')) {
    item.priority = 0.7;
    item.changefreq = 'monthly';
    const blogDated = contentLastmod(path);
    if (blogDated) item.lastmod = blogDated;
    else delete item.lastmod;
    return item;
  }

  if (path.startsWith('/products/')) {
    item.priority = 0.8;
    item.changefreq = 'weekly';
    return item;
  }

  if (path === '/status/') {
    item.priority = 0.85;
    item.changefreq = 'weekly';
    return item;
  }

  if (path === '/about/' || path === '/support/' || path === '/privacy/' || path === '/terms/' || path === '/faq/') {
    item.priority = 0.5;
    item.changefreq = 'yearly';
    return item;
  }

  item.priority = 0.6;
  item.changefreq = 'monthly';
  return item;
}
