import type { IconName } from '../components/icons/types';

export const featureIcons: Record<string, IconName> = {
  Aimbot: 'featureAimbot',
  'Aimbot Options': 'featureAimbot',
  Aimbot: 'featureAimbot',
  'Player ESP': 'featureEsp',
  'Player ESP Features': 'featureEsp',
  'Player Visual Options': 'featureEsp',
  'Player Visuals': 'featureEsp',
  'World Visual Options': 'lootEsp',
  'World/Loot': 'lootEsp',
  'Misc Options': 'settings',
  Misc: 'settings',
  'Bots ESP': 'skeletonEsp',
  'Bots ESP Features': 'skeletonEsp',
  'Items ESP': 'lootEsp',
  'Items ESP Options': 'lootEsp',
  Colors: 'layers',
  'Color Options': 'layers',
  'Key Binds': 'settings',
  'Custom Key Binds': 'settings',
  Config: 'compareCloudBackup',
  'Config Options': 'compareCloudBackup',
  'Player visuals': 'featureEsp',
  Loot: 'lootEsp',
  Chams: 'skeletonEsp',
  Camera: 'compareZoomHack',
  Plans: 'featureUtilitySuite',
  'HWID spoofer': 'whyShield',
  'Windows requirements': 'compatWindows',
};

export const whyUsIcons: IconName[] = ['whyShield', 'whyUsers', 'whyMonitor', 'whyHeadphones'];

export const setupStepIcons: IconName[] = ['acqPackage', 'acqSettings', 'acqCheck'];

export const toolkitIcons: Record<string, IconName> = {
  Combat: 'toolkitCombat',
  Vision: 'toolkitVision',
  Radar: 'toolkitRadar',
  Weapons: 'toolkitWeapons',
  Movement: 'toolkitMovement',
  Profiles: 'toolkitProfiles',
};

export const workflowIcons: IconName[] = [
  'workflowAlert',
  'workflowPackage',
  'workflowSettings',
  'workflowCheck',
];

export const fieldNoteIcons: IconName[] = ['fieldCalendar', 'fieldShield', 'fieldHeadphones'];

export const blogTagIcons: Record<string, IconName> = {
  Review: 'navBlog',
  Install: 'settings',
  Safety: 'shield',
  Plans: 'tag',
  Aim: 'crosshair',
  ESP: 'espActive',
  Guide: 'navBlog',
  Guides: 'navBlog',
  Setup: 'settings',
  Features: 'layers',
  Updates: 'refresh',
  Troubleshooting: 'alert',
};

export const heroStatusPills: { icon: IconName; label: string }[] = [
  { icon: 'espActive', label: 'Player ESP' },
  { icon: 'softAim', label: 'Advanced Aimbot' },
  { icon: 'toolkitWeapons', label: 'Weapon ESP' },
  { icon: 'shieldCheck', label: 'Health Bar' },
  { icon: 'compareZoomHack', label: 'Distance ESP' },
  { icon: 'featureEsp', label: 'Box ESP' },
  { icon: 'skeletonEsp', label: 'Skeleton ESP' },
  { icon: 'lootEsp', label: 'Loot ESP' },
  { icon: 'crosshair', label: 'No Recoil' },
  { icon: 'shieldCheck', label: 'EA Javelin Bypass' },
  { icon: 'heroStatStream', label: 'Stream Proof' },
  { icon: 'support247', label: '24/7 Support' },
  { icon: 'instantDelivery', label: 'HWID spoofer' },
  { icon: 'compatWindows', label: 'Windows 10 & 11' },
];

export const heroStatIcons: IconName[] = [
  'heroStatStream',
  'heroStatClock',
  'heroStatUsers',
  'heroStatHeadphones',
];

export const cheatTierIcons: Record<string, IconName> = {
  Lite: 'tierLite',
  Pro: 'tierPro',
  Elite: 'tierElite',
};

export const productCategoryIcons: Record<string, IconName> = {
  'Core product': 'coreProduct',
  'External suite': 'externalSuite',
  'DMA hardware': 'dmaHardware',
  'System utility': 'systemUtility',
  'Account recovery': 'accountRecovery',
  Cosmetic: 'cosmetic',
};

export const acquisitionStepIcons: IconName[] = ['acqPackage', 'acqSettings', 'acqZap', 'acqCheck'];

/** After-purchase timeline on product detail — one distinct icon per step */
export const productAcquisitionStepIcons: IconName[] = [
  'liveStatus',
  'acqPackage',
  'headphones',
  'acqCheck',
];

/** Product detail requirement tiles — prefer compat-style icons where mapped */
export const productRequirementIcons: Partial<Record<IconName, IconName>> = {
  reqWindows: 'compatWindows',
  reqSteam: 'compatSteam',
  reqSettings: 'compatPackage',
  reqWifi: 'compatWifi',
  reqCpu: 'compatMonitor',
  reqRestorePoint: 'compatRefresh',
  reqShieldGuide: 'compatShield',
  reqMailOrder: 'mail',
  reqShieldAccount: 'compatShield',
  reqWifiPortal: 'compatWifi',
};

export function requirementDisplayIcon(icon: IconName): IconName {
  return productRequirementIcons[icon] ?? icon;
}

export const compatibilityIcons: IconName[] = [
  'compatWindows',
  'compatPackage',
  'compatSteam',
  'compatMonitor',
  'compatRefresh',
  'compatWifi',
  'compatDiscord',
  'compatShield',
];
