export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Valorant Cheats for Windows PC | ESP, Aimbot & Menu',
    description:
      'valorant cheats on Windows: player ESP, aimbot, streamproof overlay, $35 and $150 plans, live Status labels, and Vanguard setup notes before you load.',
  },
  '/products/valorant-cheats/': {
    title: 'Valorant Hacks for PC | Menu $35 & $150',
    description:
      'Valorant hacks for PC: menu $35 or $150 lifetime. HWID spoofer $50 or $150. Separate checkouts.',
  },
  '/products/valorant-cheats/loader/': {
    title: 'Valorant Menu | Aimbot, Player & World Visuals',
    description:
      'Four menu groups: Aimbot Options, Player Visual Options, World Visual Options, and Misc Options. $35 for 31 days or $150 lifetime.',
  },
  '/products/valorant-cheats/hwid-spoofer/': {
    title: 'HWID Spoofer for Hardware Flags on PC',
    description:
      'HWID spoofer for a hardware flag. $50 for 31 days or $150 lifetime. It does not clear an account-only penalty.',
  },
  '/products/valorant-cheats/utilities/': {
    title: 'HWID Spoofer Utility Overview',
    description:
      'When a hardware flag blocks new accounts on one PC, the HWID spoofer is a separate checkout from the menu.',
  },
  '/blog/': {
    title: 'Valorant Guides Hub | ESP, Vanguard, Aimbot & Plans',
    description:
      'Guides on ESP, custom-game toggles, Vanguard versus VAC, aimbot settings, Reddit claims, HWID flags, streamproof overlays, and $35 / $150 checkout notes.',
  },
  '/forum/': {
    title: 'Community Threads on Setup, Risk, and Plans',
    description:
      'Closed threads on third-party risk, Vanguard versus VAC, custom-game toggles, and the HWID spoofer.',
  },
  '/faq/': {
    title: 'FAQ on Plans, Vanguard, and Setup Notes',
    description:
      'Answers on the $35 and $150 plans, Vanguard updates, Windows requirements, hardware flags, and how the menu and spoofer differ.',
  },
  '/support/': {
    title: 'Support for Loader, Checkout, and Setup',
    description:
      'Loader, checkout, and portal help for the menu and the HWID spoofer. Include your order email.',
  },
  '/about/': {
    title: 'About cheats-valorant.org | Delivery, Pricing, Risk',
    description:
      'Who runs this store, what the menu and HWID spoofer include, Windows portal delivery, Vanguard ban risk, and how status and support fit checkout.',
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
    title: 'Status Label and Vanguard Patch Notes',
    description:
      'GREEN means load. RED means wait. May 2026 DMA, June on-demand baselines, and November 2026 integrity notes—read before you launch.',
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
