import type { IconName } from '../components/icons/types';
import { ALL_PRODUCTS_PLANS_LINE } from '../config/product-plans';
import { normalizeInternalPath, productPath, ROUTES, localizedPath, localizedRoutes, cheatPath } from '../utils/path-core';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'scripts'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const cheats = link('the menu', productPath('loader'));
const productsHub = link('products page', ROUTES.products);
const hwid = link('HWID Spoofer', productPath('hwid-spoofer'));
export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check if the loader is current?',
    a: 'Read cheats-valorant.org after a VALORANT or Vanguard update. A banner from yesterday is not a current build. Leave the loader closed until the page matches this client.',
  },
  {
    id: 'season-3',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'A big VALORANT update just dropped. When do I open the loader?',
    a: 'Read the status page after that client build, and after every hotfix, before you launch. A saved config from an older build is not a current check. A ban is still possible.',
    aHtml: `Read the ${link('status page', '/status/')} after that client build, and after every hotfix, before you launch. A saved config from an older build is not a current check. A ban is still possible.`,
  },
  {
    id: 'season-2',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Will a game patch change the loader menu overnight?',
    a: 'Game updates can shift maps, modes, and balance. The loader group names on the cheat product page are the reference—read the status note after each client or Vanguard update before you assume your saved preset still matches.',
    aHtml: `Game updates can shift maps, modes, and balance. The loader group names on the cheat product page are the reference—read the ${link('status page', '/status/')} after each client or Vanguard update before you assume your saved preset still matches.`,
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: 'Checkout opens the portal with the loader for the product you paid for. Save a config after you tune it. HVCI, core isolation, TPM, and secure boot stay on.',
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I get banned?',
    a: 'Yes. Vanguard can act on the account. Nothing on this site is a guarantee that a session stays clean.',
  },
  {
    id: 'hwid-ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'What is an HWID flag, and does the cheat key fix it?',
    a: `A hardware flag follows the PC. New accounts can fail on that machine and work on another. That is the ${hwid}, sold separately. It does not undo an account-only restriction, and lifetime on ${cheats} does not include it.`,
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which PCs are supported?',
    a: 'Windows 10 or 11 on Intel or AMD, with HVCI, core isolation, TPM, and secure boot on. macOS and Linux are not supported.',
  },
  {
    id: 'license-move',
    topic: 'products',
    icon: 'faqLicenseMove',
    q: 'Can I move a key to another PC?',
    a: 'Open support with the order email. A machine that fails new accounts is an HWID Spoofer purchase, not a free move of the cheat key.',
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'What is for sale?',
    a: `${cheats} and the ${hwid} are listed on the ${productsHub}. ${ALL_PRODUCTS_PLANS_LINE} They are separate checkouts.`,
  },
  {
    id: 'plans-same-price',
    topic: 'plans',
    icon: 'faqComparePlans',
    q: 'Does $150 lifetime include the spoofer?',
    a: 'No. Lifetime on VALORANT cheats is that product only. The HWID spoofer is a separate key with its own $50 and $150 plans. A shorter plan does not promise a credit toward lifetime.',
    scopes: ['loader', 'hwid-spoofer'],
  },
  {
    id: 'aim-vs-camera',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What does Customizable FOV change?',
    a: 'FOV under Aimbot Options sets how wide the aim cone is. Pair it with Smoothness, Speed, and Stickiness before you raise Draw FOV on stream.',
    scopes: ['loader'],
  },
  {
    id: 'esp-clutter',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'Why does player ESP cover the fight?',
    a: 'Player Visual Options includes health bar, shield bar, agent, rank, box, snapline, skeleton, head circle, equip name, level, and distance. Turn off labels you do not read, or lower Max Distance.',
    scopes: ['loader'],
  },
  {
    id: 'not-dma',
    topic: 'scripts',
    icon: 'faqExternalLoader',
    q: 'Is this a DMA card?',
    a: 'No. VALORANT cheats is a Windows loader from checkout. A DMA device is a different product and is not what this key delivers. Do not run a file that arrived from a search result.',
    scopes: ['loader'],
  },
  {
    id: 'spoofer-scope',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'When is the HWID spoofer the right buy?',
    a: `Use ${hwid} when a new account fails on one PC and works on another. It does not fix an account-only restriction on the same machine.`,
    scopes: ['hwid-spoofer'],
  },
  {
    id: 'stickiness-vs-smooth',
    topic: 'scripts',
    icon: 'faqExternalLoader',
    q: 'Where do I save the menu after I change it?',
    a: 'Misc Options includes Create/Save/Load/Unload Config. Save after you tune Aimbot Options, Player Visual Options, and World Visual Options.',
    scopes: ['loader'],
  },
  {
    id: 'visible-check',
    topic: 'scripts',
    icon: 'faqWhatIsEsp',
    q: 'Can the aimbot ignore downed players?',
    a: 'Visible Check sits in Aimbot Options with Aimbot Filter and Aimbot Bone. Each is a separate toggle in that group.',
    scopes: ['loader'],
  },
  {
    id: 'ignore-knocked',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What does Select Custom Hitbox do?',
    a: 'Aimbot Bone under Aimbot Options picks which bone the assist prefers. Pair it with FOV, Smoothness, Speed, and Stickiness for your preset.',
    scopes: ['loader'],
  },
  {
    id: 'bone-and-filter',
    topic: 'scripts',
    icon: 'faqExternalLoader',
    q: 'What is in World Visual Options?',
    a: 'World Visual Options covers abilities, traps, spike defuse progress and time, per-character customization, and distance caps. Each category has its own toggle.',
    scopes: ['loader'],
  },
  {
    id: 'controller-binds',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Does the menu include a controller bind?',
    a: 'Combat Mode Hotkey in Misc Options hides ability and trap ESP while held. Aimbot Options is separate: Enable Aimbot, FOV, smoothness, and draw overlays.',
    scopes: ['loader'],
  },
  {
    id: 'squad-read',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'How do I mark a player without every label?',
    a: 'Player Visual Options includes box, snapline, skeleton, head circle, agent, rank, equip name, level, and distance. Lower Max Distance if the fight looks crowded.',
    scopes: ['loader'],
  },
  {
    id: 'loot-price-floor',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'How do item labels work?',
    a: 'World Visual Options lists abilities, traps, and spike cues with Show Icon and Show Distance toggles. Font Size lives under Misc Options.',
    scopes: ['loader'],
  },
  {
    id: 'scale-and-crosshair',
    topic: 'scripts',
    icon: 'faqExternalLoader',
    q: 'Where are the crosshair and FOV draw toggles?',
    a: 'Draw FOV and Draw Target Line are under Aimbot Options with Enable Aimbot and Visible Check.',
    scopes: ['loader'],
  },
  {
    id: 'combat-mode',
    topic: 'scripts',
    icon: 'faqExternalLoader',
    q: 'Does item ESP turn the aimbot off?',
    a: 'Combat Mode Hotkey in Misc Options hides ability and trap ESP. Enable Aimbot in Aimbot Options is separate.',
    scopes: ['loader'],
  },
  {
    id: 'encryption-bypass',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'What is in Custom Key Binds?',
    a: 'Menu open, aim holds, head switch, and toggles for players, radar, and items. Color Options and Config Options are separate groups.',
    scopes: ['loader'],
  },
  {
    id: 'blog-default-1',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'Are blog guides official product documentation?',
    a: `Articles explain workflows and link to ${cheats}. The feature list on that page is the checkout source of truth.`,
  },
  {
    id: 'blog-default-2',
    topic: 'blog',
    icon: 'faqBlogDefault2',
    q: 'Need help applying this guide?',
    a: 'Open support with your order email and the article title. Include the exact loader text if something fails.',
  },
  {
    id: 'blog-default-3',
    topic: 'blog',
    icon: 'faqBlogDefault3',
    q: 'Will settings in this article work next patch?',
    a: 'Re-check after every VALORANT or Vanguard update. Reload a saved config instead of copying old slider values from a post.',
  },
  {
    id: 'blog-plan-start',
    topic: 'plans',
    icon: 'faqComparePlans',
    q: 'Which plan should I start with?',
    a: `Start with the 31-day key if you want to try one product before paying once. ${ALL_PRODUCTS_PLANS_LINE} A shorter plan does not include a credit toward lifetime, and a lifetime key on one product does not include the others.`,
  },
  {
    id: 'blog-plan-upgrade',
    topic: 'plans',
    icon: 'faqLicenseMove',
    q: 'Can I upgrade a 31-day key to lifetime?',
    a: 'There is no automatic upgrade. Lifetime is a separate checkout on the same product. The $35 or $50 you already paid is not credited toward the $150 lifetime price.',
  },
  {
    id: 'blog-plan-expire',
    topic: 'plans',
    icon: 'faqAfterBuy',
    q: 'What happens when a plan expires?',
    a: 'A 31-day key stops when that period ends. Buy another 31-day key or a lifetime key on that same product to keep access. Lifetime does not renew. An expired key does not move to a different product.',
  },
  {
    id: 'blog-plan-status',
    topic: 'plans',
    icon: 'faqStatus',
    q: 'Where do I check the current loader status?',
    a: 'Read the status page before you launch. Updated means the note was refreshed. It is not a claim that a session stays clean.',
    aHtml: `Read the ${link('status page', '/status/')} before you launch. Updated means the note was refreshed. It is not a claim that a session stays clean.`,
  },
  {
    id: 'blog-plan-windows',
    topic: 'plans',
    icon: 'faqPlatforms',
    q: 'Which Windows versions are supported?',
    a: 'Windows 10 or 11 on Intel or AMD, with HVCI, core isolation, TPM, and secure boot on. macOS and Linux are not supported.',
  },
  {
    id: 'blog-plan-support',
    topic: 'plans',
    icon: 'faqBlogDefault2',
    q: 'How do support and refunds work?',
    a: 'Open support with your order email. Sales are final once checkout completes. Change-of-mind purchases, account bans, and launches while the status page is not current are not refunded. A fix or refund is only when we confirm a fault on our side. The rules are in the terms.',
    aHtml: `Open ${link('support', '/support/')} with your order email. Sales are final once checkout completes. Change-of-mind purchases, account bans, and launches while the status page is not current are not refunded. A fix or refund is only when we confirm a fault on our side. The rules are in the ${link('terms', '/terms/')}.`,
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['status', 'season-3', 'after-buy', 'ban-risk', 'hwid-ban-risk', 'platforms', 'license-move', 'products-page'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'Browse by category',
  subtitle: 'Plans, visuals, the loader, the spoofer, and setup.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'scripts',
  'safety',
  'products',
  'blog',
  'setup',
];

export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'Answers tied to what you are reading—visit the FAQ page for every topic.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, _kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter((f) => !f.scopes);
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const combined = [...scoped, ...general];
  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

export function getBlogFaqs(_tag: string, _slug: string): SiteFaqItem[] {
  return siteFaqs.filter(
    (f) => f.id.startsWith('blog-default-') || f.id.startsWith('blog-plan-'),
  );
}

export const compareRows = [
  { feature: 'Aimbot Options', icon: 'comparePlayerEsp' as const, lite: true, pro: true, elite: true },
  { feature: 'Player Visual Options', icon: 'compareWardLocator' as const, lite: true, pro: true, elite: true },
  { feature: 'World Visual Options', icon: 'compareZoomHack' as const, lite: true, pro: true, elite: true },
  { feature: 'Misc Options', icon: 'compareCloudBackup' as const, lite: true, pro: true, elite: true },
];
