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
    a: 'Read cheatsapexlegends.com after a Javelin update. A banner from yesterday is not a current build. Leave the loader closed until the page matches this client.',
  },
  {
    id: 'season-3',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'A big Apex Legends update just dropped. When do I open the loader?',
    a: 'Read the status page after that client build, and after every hotfix, before you launch. A saved config from an older build is not a current check. A ban is still possible.',
    aHtml: `Read the ${link('status page', '/status/')} after that client build, and after every hotfix, before you launch. A saved config from an older build is not a current check. A ban is still possible.`,
  },
  {
    id: 'season-2',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Will a game patch change the loader menu overnight?',
    a: 'Season updates can change maps and balance. Read the status note after each client or Javelin update before you assume a saved preset still matches.',
    aHtml: `Season updates can change maps and balance. Read the ${link('status page', '/status/')} after each client or Javelin update before you assume a saved preset still matches.`,
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
    a: 'Yes. EA Javelin Anticheat can act on the account. Nothing on this site is a guarantee that a session stays clean.',
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
    a: 'Windows 10 and 11 with HVCI, core isolation, TPM, and secure boot on. macOS and Linux are not supported.',
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
    a: 'No. Lifetime on the menu is that product only. The HWID spoofer is a separate key with its own $50 and $150 plans. A shorter plan does not promise a credit toward lifetime.',
    scopes: ['loader', 'hwid-spoofer'],
  },
  {
    id: 'player-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What does Player ESP show?',
    a: 'Player ESP draws boxes, labels, and distance readouts on enemies. Pair it with Health Bar and Weapon ESP, then lower Max Distance if the screen feels crowded.',
    scopes: ['loader'],
  },
  {
    id: 'aimbot-tune',
    topic: 'scripts',
    icon: 'faqExternalLoader',
    q: 'How do I tune Advanced Aimbot?',
    a: 'Start with a small FOV, moderate smoothing, and Visible Check on. Raise stickiness only after a few unranked matches. Save the preset under configs when it feels stable.',
    scopes: ['loader'],
  },
  {
    id: 'loot-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What does Loot ESP mark?',
    a: 'Loot ESP highlights bins, death boxes, and care packages when those toggles are on. Use tier filters so only the loot you care about stays on screen.',
    scopes: ['loader'],
  },
  {
    id: 'stream-proof',
    topic: 'scripts',
    icon: 'faqExternalLoader',
    q: 'What does Stream Proof do?',
    a: 'Stream Proof keeps overlays and the menu off typical capture tools while you still see them locally. It does not remove ban risk from Javelin or from posting clips.',
    scopes: ['loader'],
  },
  {
    id: 'no-recoil',
    topic: 'scripts',
    icon: 'faqExternalLoader',
    q: 'What does No Recoil change?',
    a: 'No Recoil reduces vertical kick while the option is enabled. Heavy recoil patterns may still need short bursts at range.',
    scopes: ['loader'],
  },
  {
    id: 'javelin-bypass',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'What does EA Javelin Bypass mean here?',
    a: 'It means this build is checked against EA Javelin Anticheat on the status page before release. GREEN means load. RED means wait. It is not a promise that a match stays clean.',
    scopes: ['loader'],
  },
  {
    id: 'weapon-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'Does Weapon ESP show what opponents are holding?',
    a: 'Yes. Weapon ESP lists the weapon name on players when the toggle is on. Turn it off if you only care about boxes and distance.',
    scopes: ['loader'],
  },
  {
    id: 'skeleton-vs-box',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'How are Box ESP and Skeleton ESP different?',
    a: 'Box ESP draws a corner box on the player model. Skeleton ESP draws bone lines for posture and peek direction. Many players run both with Distance ESP.',
    scopes: ['loader'],
  },
  {
    id: 'save-config',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'Where do I save settings after tuning?',
    a: 'Use create, save, and load config in the menu after you set aim, visuals, and loot filters. Reload that file after a patch instead of copying old slider values from a guide.',
    scopes: ['loader'],
  },
  {
    id: 'not-dma',
    topic: 'products',
    icon: 'faqExternalLoader',
    q: 'Is this a DMA card?',
    a: 'No. The menu is a Windows loader from checkout. A DMA device is a different product and is not what this key delivers.',
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
    a: 'Re-check after every Javelin update. Reload a saved config instead of copying old slider values from a post.',
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
  const general = siteFaqs.filter((f) => !f.scopes && f.topic !== 'blog');
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
  { feature: 'Player ESP', icon: 'comparePlayerEsp' as const, lite: true, pro: true, elite: true },
  { feature: 'Advanced Aimbot', icon: 'compareWardLocator' as const, lite: true, pro: true, elite: true },
  { feature: 'Loot ESP', icon: 'compareZoomHack' as const, lite: true, pro: true, elite: true },
  { feature: 'Stream Proof', icon: 'compareCloudBackup' as const, lite: true, pro: true, elite: true },
];
