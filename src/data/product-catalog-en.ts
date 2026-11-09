import { LOADER_PLANS_LINE } from '../config/loader-pricing';
import { SPOOFER_PLANS_LINE } from '../config/product-plans';
import type { AcquisitionStep, ProductSlide, SystemRequirement } from './product-types';
import type { Block } from './product-locale-types';
import { valorantLoaderFeatureGroups } from './warzone-feature-groups';
const gameplay = '/images/gameplay';
const products = '/images/products';

/** Cheats product page — four portal menu screenshots (Visuals, World, Aimbot, Misc). */
export const warzoneMenuSlides: ProductSlide[] = [
  {
    src: `${products}/valorant-menu-visuals.webp`,
    alt: 'Player ESP menu screenshot',
    caption: 'Player Visual Options',
    captionDesc: 'Health, shield, agent, rank, box, skeleton, and distance controls.',
  },
  {
    src: `${products}/valorant-menu-world.webp`,
    alt: 'World visual menu screenshot',
    caption: 'World Visual Options',
    captionDesc: 'Abilities, traps, spike timers, and per-agent customization.',
  },
  {
    src: `${products}/valorant-menu-aimbot.webp`,
    alt: 'Aimbot menu screenshot',
    caption: 'Aimbot Options',
    captionDesc: 'FOV, smoothness, stickiness, bone, filter, and draw overlays.',
  },
  {
    src: `${products}/valorant-menu-misc.webp`,
    alt: 'Misc and config menu screenshot',
    caption: 'Misc Options',
    captionDesc: 'Combat mode hotkey, font size, and create or load configs.',
  },
];

/** Home hero only — gameplay captures (not the product gallery). */
const homeHeroGallery = {
  loot: {
    src: `${gameplay}/valorant-pricing-menu.webp`,
    alt: 'Overlay labels and a player box in an urban area',
    caption: 'Player ESP',
    captionDesc: 'Boxes and labels in the same view.',
  },
  playerDistance: {
    src: `${gameplay}/valorant-player-esp-multiple.webp`,
    alt: 'Player ESP showing several figures with distance readouts',
    caption: 'Distance labels',
    captionDesc: 'Several players with distance labels.',
  },
  playerBoxes: {
    src: `${gameplay}/valorant-player-esp-boxes.webp`,
    alt: 'ESP boxes and distance labels on players near a building',
    caption: 'Boxes and distance',
    captionDesc: 'Corner boxes and range readouts.',
  },
  skeletonClose: {
    src: `${gameplay}/valorant-skeleton-esp-close.webp`,
    alt: 'Skeleton ESP with boxes at close range',
    caption: 'Skeleton ESP',
    captionDesc: 'Bone lines and boxes at close range.',
  },
  skeletonIndoor: {
    src: `${gameplay}/valorant-skeleton-esp-indoor.webp`,
    alt: 'Skeleton ESP showing figures indoors',
    caption: 'Indoor skeleton',
    captionDesc: 'Bone lines on indoor targets.',
  },
  healthDoor: {
    src: `${gameplay}/valorant-health-esp-hud.webp`,
    alt: 'Health ESP bars and skeleton boxes near a doorway',
    caption: 'Health ESP',
    captionDesc: 'Health bars and boxes in the same view.',
  },
} as const satisfies Record<string, ProductSlide>;

function homeSlide(...keys: (keyof typeof homeHeroGallery)[]): ProductSlide[] {
  return keys.map((k) => homeHeroGallery[k]);
}

/** Home hero slider only — not the cheats product gallery. */
export const cheatHomeHeroSlides: ProductSlide[] = homeSlide(
  'loot',
  'playerDistance',
  'playerBoxes',
  'skeletonClose',
  'skeletonIndoor',
  'healthDoor',
);

export const acquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Check status',
    desc: 'Read the status page after a Valorant or Vanguard update before you buy. GREEN means the note lists the file to load. RED means wait.',
  },
  {
    num: '02',
    title: 'Pick a plan',
    desc: `${LOADER_PLANS_LINE}. The HWID spoofer uses its own price.`,
  },
  {
    num: '03',
    title: 'Secure checkout',
    desc: 'Complete checkout from the product card. Your license unlocks in the portal with instant delivery.',
  },
  {
    num: '04',
    title: 'Install & verify',
    desc: 'Follow the setup guide, load a conservative preset, and test in a lower-stakes playlist before you use your main profile.',
  },
];

export const utilitySlides = {
  spoofer: [
    {
      src: '/images/products/valorant-spoofer-hero.webp',
      alt: 'HWID spoofer on Windows PC',
      caption: 'HWID spoofer',
      captionDesc: 'Hardware fingerprint tools before you relaunch.',
    },
    {
      src: '/images/products/valorant-spoofer-board.webp',
      alt: 'Phoenix Satano HWID spoofer hardware fingerprint rotation on Windows PC',
      caption: 'Phoenix board',
      captionDesc: 'Disk, MAC, and GPU ID rotation.',
    },
    {
      src: '/images/products/valorant-spoofer-brand.webp',
      alt: 'Phoenix WH-Satano spoofer branding on Windows PC',
      caption: 'Phoenix WH',
      captionDesc: 'Spoofer workspace used on every store.',
    },
  ],
} as const;

export const cheatsContent = {
  images: [...warzoneMenuSlides],
  goodToKnow:
    'Valorant and Vanguard update often. Read the status page before you load. GREEN means the note lists this file. RED means wait. Overlay behavior can change after a patch.',
  limitations:
    'Third-party software can violate game terms and lead to bans. You use this software at your own risk. Compatibility can change after a game, Vanguard, or Windows update. Streamproof does not remove that risk.',
  systemRequirements: [
    {
      icon: 'reqWindows',
      text: 'HVCI ON · CORE ISOLATION ON · TPM ON · SECURE BOOT ON',
    },
    {
      icon: 'reqWindows',
      text: 'Windows 10 or 11 on supported builds',
    },
    { icon: 'reqCpu', text: 'Intel Core i5 or AMD Ryzen 5 or better' },
    {
      icon: 'reqWifi',
      text: 'Stable internet · latest VALORANT PC client',
    },
    {
      icon: 'reqShieldGuide',
      text: 'Client: official VALORANT PC client',
    },
  ] as SystemRequirement[],
  featureGroups: valorantLoaderFeatureGroups,
  overview: {
    title: 'A Windows menu for VALORANT',
    paragraphs: [
      'One license covers Aimbot Options, Player Visual Options, World Visual Options, and Misc Options—the same menu on every plan.',
      `Read the status page before you load. ${LOADER_PLANS_LINE}.`,
    ],
  },
  body: [
    { type: 'h2', text: 'Menu groups included' },
    {
      type: 'p',
      text: 'Four menu groups on one license: Aimbot Options, Player Visual Options, World Visual Options, and Misc Options. Open the feature list on this page for every toggle.',
    },
    { type: 'h2', text: 'Plans' },
    {
      type: 'p',
      text: 'The 31-day plan is $35. Lifetime is $150 once. About four 31-day renewals at $35 equal lifetime.',
    },
  ] as Block[],
};

export const spooferContent = {
  images: [...utilitySlides.spoofer],
  goodToKnow:
    'HWID tools change how your PC fingerprint appears. They do not clear an account-only penalty. Read the portal notes before you launch VALORANT again.',
  limitations:
    'Spoofing carries technical risk and may violate game terms. Results vary by ban type and driver setup. Use only on systems you own.',
  systemRequirements: [
    { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator rights.' },
    { icon: 'reqRestorePoint', text: 'Create a restore point before running hardware tools.' },
    { icon: 'reqWifi', text: 'Stable internet for activation and verification steps.' },
  ] as SystemRequirement[],
  fullFeatures: [
    'Hardware spoofer with cleaner',
    'Disk serial and MAC rotation',
    'GPU ID profile tools',
    'Compatibility scan',
    'Verification checklist',
    'Portal step-by-step workflow',
    'Discord setup support',
  ],
  overview: {
    title: 'HWID recovery workflow',
    paragraphs: [
      'HWID Spoofer is a separate key for a hardware flag. It rotates disk, MAC, and GPU identifiers on a PC you own. It is not included with the menu.',
      `${SPOOFER_PLANS_LINE}. It does not fix an account-only restriction on the same machine.`,
    ],
  },
  body: [
    { type: 'h2', text: 'When to use it' },
    {
      type: 'p',
      text: 'Use when fresh accounts fail on one PC but work elsewhere—not for account-only bans. Pair with conservative cheat presets after verification.',
    },
    { type: 'h2', text: 'Plans' },
    {
      type: 'p',
      text: SPOOFER_PLANS_LINE,
    },
  ] as Block[],
};

