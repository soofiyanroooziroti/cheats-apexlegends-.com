export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Apex legends cheats for Windows PC | Menu & Spoofer',
    description:
      'Apex legends cheats on Windows: player visuals, loot readouts, aim tuning, $35 and $150 plans, live status labels, and EA Javelin setup notes before you load.',
  },
  '/products/apex-legends-cheats/': {
    title: 'Products | Menu $35 & $150 · HWID Spoofer',
    description:
      'Windows menu and HWID spoofer with separate checkouts. Menu $35 for 31 days or $150 lifetime; spoofer $50 or $150.',
  },
  '/products/apex-legends-cheats/loader/': {
    title: 'Apex legends cheat | Aimbot, Player & Loot Visuals',
    description:
      'Four menu groups: Aimbot, Player Visuals, World/Loot, and Misc. $35 for 31 days or $150 lifetime on Windows PC.',
  },
  '/products/apex-legends-cheats/hwid-spoofer/': {
    title: 'Apex legends spoofer | HWID Recovery on PC',
    description:
      'Apex legends spoofer for a hardware flag. $50 for 31 days or $150 lifetime. It does not clear an account-only penalty.',
  },
  '/products/apex-legends-cheats/utilities/': {
    title: 'HWID Spoofer Utility Overview',
    description:
      'When a hardware flag blocks new accounts on one PC, the HWID spoofer is a separate checkout from the menu.',
  },
  '/blog/': {
    title: 'Apex Legends Guides Hub | Setup, Javelin & Plans',
    description:
      'Guides on loader setup, EA Javelin patch days, overlay tuning, Reddit claims, HWID flags, streamproof overlays, and $35 / $150 checkout notes.',
  },
  '/forum/': {
    title: 'Community Threads on Setup, Risk, and Plans',
    description:
      'Closed threads on third-party risk, Javelin versus other anti-cheats, preset tuning, and the HWID spoofer.',
  },
  '/faq/': {
    title: 'FAQ on Plans, Javelin, and Setup Notes',
    description:
      'Answers on the $35 and $150 plans, EA Javelin updates, Windows requirements, hardware flags, and how the menu and spoofer differ.',
  },
  '/support/': {
    title: 'Support for Loader, Checkout, and Setup',
    description:
      'Loader, checkout, and portal help for the menu and the HWID spoofer. Include your order email.',
  },
  '/about/': {
    title: 'About cheatsapexlegends.com | Delivery, Pricing, Risk',
    description:
      'Who runs this store, what the menu and HWID spoofer include, Windows portal delivery, Javelin ban risk, and how status and support fit checkout.',
  },
  '/privacy/': {
    title: 'Privacy notes for analytics, cookies, and contact',
    description:
      'How this store handles analytics, cookies, and contact data. Payment card numbers stay on the checkout provider.',
  },
  '/terms/': {
    title: 'License terms, refunds, and acceptable use',
    description:
      'License terms, acceptable use, and the no-refund rule for the loader and HWID spoofer sold here.',
  },
  '/status/': {
    title: 'Status Label and EA Javelin Patch Notes',
    description:
      'GREEN means load. RED means wait. Store lineup and Javelin patch reminders—read before you launch Apex Legends.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
