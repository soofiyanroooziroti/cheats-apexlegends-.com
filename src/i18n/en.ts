import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { LOADER_PLANS_LINE, LOADER_PLANS_SHORT } from '../config/loader-pricing';
import { ALL_PRODUCTS_PLANS_LINE, SPOOFER_PLANS_LINE, SPOOFER_PLANS_SHORT } from '../config/product-plans';
import { PRODUCT_BASE } from '../config/site';
import { productPath } from '../utils/path-core';

const productBase = PRODUCT_BASE;
const featuresHref = `${productPath('loader')}#features`;

export const en: Translations = {
  site: {
    name: 'Apex legends cheats',
    domain: 'cheatsapexlegends.com',
    title: 'Apex Legends cheats',
    description:
      'Aimbot, Player Visuals, World/Loot, and Misc menu groups for Apex Legends on Windows PC. USD pricing.',
    discord: PRIMARY_CHECKOUT_PATH,
  },
  nav: [
    { href: '/', label: 'Home' },
    { href: `${productBase}`, label: 'Products' },
    { href: featuresHref, label: 'Features' },
    { href: '/blog/', label: 'Blog' },
    { href: '/forum/', label: 'Forum' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  headerNavLabels: {
    home: 'Home',
    products: 'Store',
    features: 'Features',
    blog: 'Blog',
    forum: 'Forum',
    faq: 'FAQ',
    support: 'Help',
  },
  navMore: 'More',
  navShort: {
    home: 'Home',
    products: 'Products',
    features: 'Features',
    blog: 'Blog',
    forum: 'Forum',
    faq: 'FAQ',
    support: 'Support',
  },
  hero: {
    status: 'Apex Legends — check status before you load',
    eyebrow: 'Windows PC · Worldwide',
    titleLine1: 'Apex Legends cheats for Windows PC',
    titleLine2: '',
    subtitle: `Apex Legends cheats on Windows include Player ESP, Advanced Aimbot, Loot ESP, No Recoil, EA Javelin Bypass, and Stream Proof on one license. ${LOADER_PLANS_LINE}.`,
    ctaPrimary: 'View products',
    ctaDiscord: 'Buy now',
    modesLabel: 'Modules',
    modes: ['Player visuals', 'Loot readouts', 'Aim tuning', 'Configs'],
    marqueeAria: 'Features and platform support',
    metrics: [
      { label: 'Anti-cheat', strong: 'EA Javelin' },
      { label: 'Platform', strong: 'Windows PC' },
      { label: 'Plans', strong: LOADER_PLANS_SHORT },
      { label: 'Support', strong: '24/7' },
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'Features for Apex Legends on Windows PC',
    subtitle: '',
    subtitleLead: '',
    subtitleLinkLabel: 'full feature list',
    subtitleTail: '',
    seeAllLabel: 'See all features',
    items: [
      { title: '', subtitle: '', bullets: ['Player ESP', 'Advanced Aimbot', 'Weapon ESP'] },
      { title: '', subtitle: '', bullets: ['Health Bar', 'Distance ESP', 'Box ESP'] },
      { title: '', subtitle: '', bullets: ['Skeleton ESP', 'Loot ESP', 'No Recoil'] },
      { title: '', subtitle: '', bullets: ['EA Javelin Bypass', 'Stream Proof', '24/7 Support'] },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'Same menu on every plan — patches, not promises',
    subtitle:
      `One cheat and one HWID spoofer. ${ALL_PRODUCTS_PLANS_LINE} A ban is still possible under EA Javelin Anticheat.`,
    usLabel: 'Apex legends cheats',
    otherLabel: 'Typical provider',
    rows: [
      {
        title: 'Patch-day loader updates',
        desc: 'Check cheatsapexlegends.com after an Apex Legends or Javelin update before you open the loader.',
      },
      {
        title: 'Separate aim sliders',
        desc: 'FOV, smoothing, bone, and the visibility check are separate settings. Change one at a time.',
      },
      {
        title: 'Loader and config help',
        desc: 'Setup questions cover the Windows loader, saved configs, and which product matches a hardware flag versus an account case.',
      },
      {
        title: 'Separate product checkouts',
        desc: 'The cheat and the HWID spoofer stay separate checkouts. Lifetime on the cheat does not add the spoofer.',
      },
      {
        title: 'Saved configs',
        desc: 'The four menu groups stay on one license. The 31-day plan and lifetime unlock the same loader.',
      },
      {
        title: 'HWID is its own product',
        desc: 'A machine that fails new accounts is the spoofer case. Neither tool is included with the cheat key.',
      },
    ],
    metrics: [
      {
        value: 'Javelin',
        title: 'Check after a patch',
        desc: 'Recheck the status label after an Apex Legends or Javelin update before you load.',
      },
      {
        value: '2',
        title: 'Plans on the menu',
        desc: `${LOADER_PLANS_LINE}. The same menu is on both plans.`,
      },
      {
        value: '2',
        title: 'Separate products',
        desc: 'Apex legends cheat and the HWID spoofer. Each one is its own key.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup guide',
    titleLead: 'From checkout to your first drop in just',
    titleHighlight: 'three simple steps',
    intro:
      'Getting started is a status check, checkout, then the portal loader. Read the status page after a Javelin or game update before you launch Apex Legends.',
    ctaPrimary: 'View products',
    ctaSecondary: 'Setup FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    statusStrip: {
      aceStatusCta: 'Check status',
      aceStatusHref: '/status/',
      perks: [
        { icon: 'instantDelivery', label: 'Instant delivery' },
        { icon: 'support247', label: '24/7 support' },
        { icon: 'refresh', label: 'Lifetime updates' },
      ],
    },
    steps: [
      {
        step: 'Step 1',
        title: 'Unlock portal & download loader',
        desc: 'Complete checkout, open your operator dashboard, and pull the latest patch loader build for Windows.',
      },
      {
        step: 'Step 2',
        title: 'Launch & configure modules',
        desc: 'Run the loader, then set player overlays, loot filters, skeleton, health, aim tuning, and streamproof one group at a time.',
      },
      {
        step: 'Step 3',
        title: 'Check status, then launch',
        desc: 'Confirm the status label is GREEN for this client, then open Apex Legends.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform support',
    title: 'Runs on your rig.',
    subtitle: 'Check the status page after an Apex Legends or Javelin update before you load.',
    items: ['Windows 10 & 11', 'Intel or AMD', 'HVCI on', 'Core isolation on', 'TPM on', 'Secure boot on', 'Discord support', 'Config save'],
  },
  cheats: {
    eyebrow: 'Game cheat',
    title: 'Apex legends cheat',
    subtitle: 'Aimbot, Player Visuals, World/Loot, and Misc on one license.',
    viewAll: 'View details',
    explore: 'Explore',
    items: [
      {
        badge: 'Active',
        tier: 'Full suite',
        name: 'Apex Legends',
        title: 'Apex Legends cheat',
        desc: 'A Windows menu with Aimbot, Player Visuals, World/Loot, and Misc groups.',
        features: ['Player ESP', 'Advanced Aimbot', 'Loot ESP'],
        more: 9,
        href: `${productBase}loader/`,
        variant: 'popular',
      },
    ],
  },
  products: {
    eyebrow: 'Products',
    title: 'Store for Apex Legends on PC',
    subtitle: `Apex Legends cheat: ${LOADER_PLANS_LINE}. Apex Legends spoofer: ${SPOOFER_PLANS_LINE}.`,
    viewAll: 'View details',
    get: 'Buy now',
    explore: 'Explore',
    items: [
      {
        badge: 'Active',
        category: 'HWID spoofer',
        title: 'Apex Legends spoofer',
        subtitle: 'Hardware ID recovery',
        desc: 'HWID spoofer with cleaner—rotate disk, MAC, and GPU IDs before relaunching after hardware flags.',
        features: ['Hardware spoofer + cleaner', 'Compatibility scan', 'Verification steps', 'Portal workflow'],
        more: 4,
        href: `${productBase}hwid-spoofer/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Blog',
    title: 'Guides and updates',
    subtitle: 'Preset notes, overlay guides, Javelin comparisons, and pricing answers.',
    latestTitle: 'Latest Apex Legends guides',
    latestSubtitle: 'Filter by topic or sort to find setup guides, feature deep-dives, and patch-day notes.',
    filterAll: 'All articles',
    sortLabel: 'Sort by',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No articles match this filter.',
    emptyCatalog: 'No guides are listed in this view. Open a topic filter or the product page.',
    viewAll: 'View all articles',
    read: 'Read',
    items: [],
  },
  toolkit: {
    eyebrow: 'Software',
    title: 'Organized, easy to configure',
    subtitle: 'Every module is grouped for quick tuning mid-match without tabbing through chaos.',
    items: [
      { num: '01', label: 'Players', title: 'Player overlays', desc: 'Boxes, distance, weapon labels, and color on enemy players.' },
      { num: '02', label: 'Legends', title: 'Legend labels', desc: 'Legend names so team comps are readable at a glance.' },
      { num: '03', label: 'Loot', title: 'Loot filters', desc: 'Tier and category toggles when the menu exposes them.' },
      { num: '04', label: 'Bones', title: 'Skeleton lines', desc: 'Bone lines for posture, head level, and peek direction.' },
      { num: '05', label: 'Health', title: 'Health readouts', desc: 'Health bars or numbers on players.' },
      { num: '06', label: 'Shield', title: 'Shield readouts', desc: 'Shield bars when the overlay exposes them.' },
      { num: '07', label: 'Aim', title: 'Aim tuning', desc: 'FOV, smoothing, bone selection, and a visibility check.' },
      { num: '08', label: 'Capture', title: 'Streamproof overlay', desc: 'Keeps overlays and the menu off typical recordings while you still see them.' },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 easy steps',
    titleBefore: 'From status check to',
    titleHighlight: 'saved profile.',
    subtitle: 'A straight path from the status label to checkout.',
    ctaLabel: 'View products',
    ctaHref: productBase,
    ctaSecondary: 'Setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Read the status label',
        desc: 'GREEN means the note lists the file to load. RED means wait. Read it after an Apex Legends or Javelin update.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Choose the product',
        desc: `Menu: ${LOADER_PLANS_SHORT}. HWID Spoofer: ${SPOOFER_PLANS_SHORT}. Separate keys.`,
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Launch & configure',
        desc: 'Download from the portal. Leave HVCI, core isolation, TPM, and secure boot on.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save your profile',
        desc: 'When the aim cone and the overlay labels feel right, save the config.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Field notes',
    title: 'Built for Apex Legends on Windows PC.',
    items: [
      { num: '01', title: 'Patch-day check', desc: 'Read the status page after a Javelin or client update. A banner from yesterday is not a current build.' },
      { num: '02', title: 'One slider at a time', desc: 'Change FOV, smooth, or distance alone so you know which setting caused the pull or the clutter.' },
      { num: '03', title: 'Separate products', desc: 'The cheat and the HWID spoofer are separate checkouts. Lifetime on one does not unlock the other.' },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'Apex Legends support',
    subtitle: 'Let us know how we can help.',
    channels: [
      {
        icon: 'users',
        title: 'Chat before checkout',
        desc: 'Ask about the cheat or the spoofer before you pay.',
        linkLabel: 'Start checkout',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'messageCircle',
        title: 'Community forum',
        desc: 'Setup, aim, overlays, and plan questions with marked developer replies.',
        linkLabel: 'Open the forum',
        href: '/forum/',
      },
      {
        icon: 'navFaq',
        title: 'Read the FAQ',
        desc: 'Compatibility, bans and setup—before you buy.',
        linkLabel: 'View all FAQ',
        href: '/faq/',
      },
      {
        icon: 'clock',
        title: 'Live operators',
        desc: 'Discord engineers on shift 24/7.',
        linkLabel: 'Open contact page',
        href: '/support/',
      },
    ],
    ticketTitle: 'Include in your ticket',
    ticketItems: [
      { title: 'Order email', desc: 'The address used at checkout on cheatsapexlegends.com.' },
      { title: 'Platform', desc: 'Windows 10 or 11, and whether HVCI, core isolation, TPM, and secure boot are on.' },
      { title: 'Error detail', desc: 'The exact loader message, not a paraphrase.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Straight answers before checkout.',
    subtitle: 'Compatibility, bans and access—no vague promises.',
    items: [
      {
        num: '01',
        q: 'Where do I check if the menu is current?',
        a: 'Read the status page on cheatsapexlegends.com after an Apex Legends or Javelin update. GREEN means load. RED means wait.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Checkout opens the portal with the loader. Save a config after you tune aim and visuals. Leave HVCI, core isolation, TPM, and secure boot on.',
      },
      {
        num: '03',
        q: 'Can I get banned?',
        a: 'Yes. EA Javelin Anticheat can act on the account. Nothing on this site is a guarantee that a session stays clean. Streamproof does not remove that risk.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'Windows 10 or 11 on Intel or AMD, with HVCI, core isolation, TPM, and secure boot on. macOS and Linux are not supported.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'A hardware flag is the HWID Spoofer, sold separately. Open a support ticket with the order email if the same key needs another PC.',
      },
      {
        num: '06',
        q: 'Where are products and utilities listed?',
        a: `${ALL_PRODUCTS_PLANS_LINE} Both are on the products page.`,
      },
    ],
  },
  footer: {
    tagline: 'Apex legends cheats and HWID spoofer for Windows PC. cheatsapexlegends.com',
    explore: 'Explore',
    exploreLinks: [
      { href: '/products/apex-legends-cheats/loader/#features', label: 'Feature overview', ariaLabel: 'Features' },
      { href: '/products/apex-legends-cheats/loader/', label: 'Apex legends cheat', ariaLabel: 'Apex legends cheat' },
      { href: '/products/apex-legends-cheats/', label: 'All products', ariaLabel: 'Products' },
      { href: '/blog/', label: 'Read patch guides', ariaLabel: 'Blog' },
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    moreSites: 'More sites',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About this store',
      description:
        'cheatsapexlegends.com sells an Apex Legends menu and an HWID spoofer, with setup notes and honest ban risk.',
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            'cheatsapexlegends.com sells a Windows menu for Apex Legends and an HWID spoofer. The menu is one product: player overlays, loot readouts, skeleton lines, health and shield bars, aim tuning, and a streamproof overlay option.',
            `${ALL_PRODUCTS_PLANS_LINE} A lifetime key on the menu does not include the spoofer.`,
            'Product names on this site identify what we sell. They are not a claim that the game publisher endorses the software. Delivery is a portal download for Windows 10 or 11. You keep HVCI, core isolation, TPM, and secure boot on, then open the loader only when the site still matches the current client.',
          ],
        },
        {
          heading: 'What we publish',
          paragraphs: [
            'The [menu page](/products/apex-legends-cheats/loader/) lists the module names and the PC requirements: Windows 10 or 11, Intel Core i5 or AMD Ryzen 5 or better, with HVCI, core isolation, TPM, and secure boot left on. The [products page](/products/apex-legends-cheats/) is where you compare the menu and the [HWID Spoofer](/products/apex-legends-cheats/hwid-spoofer/).',
            'Guides on the [blog](/blog/) cover overlay tuning, Javelin patch days, and when a hardware flag is a separate buy from the menu. The [forum](/forum/) is for those same questions, with developer replies marked on the thread. Read the [terms](/terms/) before checkout. Sales are final, including bans.',
            'EA Javelin Anticheat can still act on an account. Nothing here is a guarantee that a session stays clean after the next patch. Check this site after a client update before you open the loader. If the page is not current for that build, leave the software closed.',
            'Status notes on the homepage describe whether the published build still matches the client. They are not a promise that Javelin will ignore the software. If you are unsure, leave the loader closed and read the matching guide on the blog before you queue again.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Loader errors, a key that will not move, and checkout questions go through the [support page](/support/). Include the order email, Windows version, and the exact loader text. Do not turn HVCI, core isolation, TPM, or secure boot off because a chat message from another game said to.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description:
        'How cheatsapexlegends.com handles analytics, cookies, and contact data.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'We may collect standard web analytics such as page views, device type, browser, and approximate region through Google Analytics when enabled. Checkout and license delivery happen on external checkout pages. We do not store payment card data on cheatsapexlegends.com.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics help us understand which guides and product pages are useful so we can improve content and fix broken links. Support tickets may retain the email address and message content you provide until the issue is resolved.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'We use minimal cookies required for analytics. You can block cookies in your browser settings; core site content remains accessible without them.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For privacy questions, use the options on the Support page. Purchase and refund rules are in our Terms & Conditions.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      description:
        'Purchase, license, refund, and use terms for products sold on cheatsapexlegends.com.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: October 2026. By using cheatsapexlegends.com or completing checkout for any product listed here, you agree to these Terms & Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            `We sell an Apex Legends menu and an HWID spoofer. ${ALL_PRODUCTS_PLANS_LINE} Each product is its own license.`,
            'Feature lists on each product page describe what is included at the time of purchase. Modules can change when Apex Legends or Javelin updates. A lifetime menu key does not include the spoofer.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. cheatsapexlegends.com does not process or store payment card numbers.',
            'After purchase, use the portal from your order to download the current loader before you launch Apex Legends. Leave HVCI, core isolation, TPM, and secure boot on.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are for your personal use only. Do not share loader files, portal logins, or license keys. A hardware-ID problem is a separate HWID Spoofer purchase.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'All sales are final once checkout completes. We do not refund change-of-mind purchases, account bans, Javelin penalties, or issues caused by ignoring the setup notes or launching while the site is not current for that patch.',
            'If the product does not work as described on a supported setup—Windows 10 or 11 with HVCI, core isolation, TPM, and secure boot on, and the current loader from the portal—contact us through the Support page. Include your order email, Windows version, and the exact loader text.',
            'We may, at our discretion, offer a fix, replacement access, or partial/full refund when we confirm a fault on our side. We are not obligated to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for Apex Legends can conflict with game updates and EA Javelin Anticheat. You use this software at your own risk, including possible account action.',
            'Check the homepage status banner before every session. Do not join your main server while modules are offline or misaligned after a patch.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. The “Last updated” date at the top will change when we do. Continued use of the site after changes means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For terms, billing, or loader questions, use the buttons on the Support page. See also our Privacy Policy for how we handle site data.',
          ],
        },
      ],
    },
    support: {
      title: 'Apex Legends support',
      description:
        'Loader, HWID spoofer, and checkout help for cheatsapexlegends.com.',
    },
  },
  productCatalog: {
    searchHeading: 'Browse products and plans',
    utilityCategory: 'Utility',
    buyLoader: 'Buy the loader',
    buyHwidSpoofer: 'Buy the HWID spoofer',
  },
  utilitiesPage: {
    title: 'HWID utility',
    subtitle: 'The HWID spoofer is a separate checkout when a hardware flag blocks new accounts on one PC.',
    breadcrumb: 'HWID utility',
    tableAria: 'Utility comparison',
    columnUtility: 'Utility',
    columnBestFor: 'Best for',
    columnProductPage: 'Product page',
    includesLabel: 'Includes:',
    backToProducts: 'Back to products',
    viewCategory: 'View {category}',
    viewDetailsFallback: 'details',
    schemaName: 'HWID utility',
    useCases: {
      'hwid-spoofer':
        'New PC or hardware flag after a ban—reset how your machine appears before a new account.',
    },
  },
  sectionSearch: {
    blogHeading: 'Filter guides by topic',
    supportHeading: 'Browse help topics',
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Try Now',
    browseCheatsMobile: 'Start checkout',
    homeAria: 'Apex legends cheats home',
    checkoutAria: 'Start checkout',
    discordAria: 'Buy apex legends cheats',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
    searchPlaceholder: 'Search products, guides, FAQ…',
    searchEmpty: 'Type to search the site.',
    searchNoResults: 'No results. Try another term.',
    searchCloseAria: 'Close search',
    searchTitle: 'Search',
    searchOpenAria: 'Search site',
    contactSupport: 'Contact support',
    searchResultsAria: 'Search results',
    searchHintNavigate: 'navigate',
    searchHintOpen: 'open',
    searchHintClose: 'close',
    searchKeyboardEnter: 'Enter',
    searchKeyboardEsc: 'Esc',
    primaryNavAria: 'Primary',
    mobileNavAria: 'Mobile',
    shareNavAria: 'Share this page',
    shareOnX: 'Share on X',
    shareOnFacebook: 'Share on Facebook',
    shareOnReddit: 'Share on Reddit',
    prevImage: 'Previous image',
    nextImage: 'Next image',
    heroSlidesAria: 'Hero slides',
    slideLabel: 'Slide {n}',
    prevScreenshot: 'Previous screenshot',
    nextScreenshot: 'Next screenshot',
    loading: 'Loading',
  },
};

/** Core English copy — full site bundle is buildEnBundle() in en-bundle.ts. */
export type EnSource = typeof en;
