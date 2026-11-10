/** ISO date (YYYY-MM-DD) — edit when you publish a status refresh. */
export const STATUS_LAST_UPDATED = '2026-11-10';

export interface StatusUpdateEntry {
  /** Stable id for locale JSON + translate resume (optional in legacy arrays). */
  id?: string;
  title: string;
  /** Display range or date, e.g. Oct 22–24, 2026 */
  when: string;
  summary: string;
  /** Site icon key. Locale notes without one fall back by list order. */
  icon?: 'shield' | 'mapHack' | 'zap' | 'settings' | 'alert' | 'tag';
}

/** EA Javelin Anticheat notes — prepended on every locale (see status-locale.ts). */
export const STATUS_JAVELIN_NOTES: StatusUpdateEntry[] = [
  {
    id: 'ranked-exploit-enforcement',
    title: 'Ranked exploit suspensions',
    icon: 'alert',
    when: 'Nov 4, 2026',
    summary:
      'After the Season 31 Cipher Patch, Respawn suspended 906 accounts for up to 365 days for a matchmaking exploit that skipped Ranked entry costs. Those were account suspensions, not a confirmed ID ban. This page does not describe the exploit, and this menu is not an easy bypass of that rule. In most cases there is no ID ban. Read the label after the patch before you launch.',
  },
  {
    id: 'season-31-gameplay',
    title: 'Season 31 client changes',
    icon: 'mapHack',
    when: 'Nov 3, 2026',
    summary:
      'Season 31 added Strongholds (capturable loot bunkers), Akimbo Wingman on heavy ammo, a Crypto rework with a 360-degree drone scan, and pre-match Legend bans in Diamond and above. New modes and weapons move on-screen labels. Re-read this page after the client update, then check one overlay before you queue.',
  },
  {
    id: 'javelin-transition',
    title: 'PC anti-cheat is EA Javelin',
    icon: 'shield',
    when: 'Sep 29, 2026',
    summary:
      'Respawn replaced Easy Anti-Cheat on PC with EA Javelin Anticheat. The client targets kernel-level tools and other third-party software. This menu is not an easy bypass. An ID ban is not confirmed. In most cases there is no ID ban. An account can still be restricted. GREEN means the note lists this file. RED means wait.',
  },
  {
    id: 'hardware-macro-bans',
    title: 'Adapters and recoil scripts banned',
    icon: 'zap',
    when: 'Mar 4–Jul 9, 2026',
    summary:
      'External input adapters (Cronus, XIM, Titan, Strikepacks) and recoil-cancel scripts, including jitter-aim macros and RC filters, are banned on PC and console. Those devices are not this menu. An ID ban on this menu is not confirmed. In most cases there is no ID ban. Read the status label before you launch.',
  },
];

/** Store lineup notes — newest first after Javelin notes on the status page. */
export const STATUS_STORE_NOTES: StatusUpdateEntry[] = [
  {
    id: 'status-label',
    title: 'Status label',
    icon: 'shield',
    when: 'Nov 8, 2026',
    summary:
      'GREEN means this note lists the current file to load. RED means wait. Read this page after an Apex Legends or Javelin update before you launch. The label is not an undetected claim, and it does not mean a match will stay clean.',
  },
  {
    id: 'menu-covers',
    title: 'What the menu covers',
    icon: 'mapHack',
    when: 'Nov 8, 2026',
    summary:
      'The published menu lists Aimbot, Player Visuals, World/Loot, and Misc. Combat Mode Hotkey hides loot and world overlays. It does not remove Javelin risk.',
  },
  {
    id: 'pc-requirements',
    title: 'PC requirements',
    icon: 'settings',
    when: 'Nov 8, 2026',
    summary:
      'Windows 10 or 11, Intel Core i5 or AMD Ryzen 5 or better, and the latest Apex Legends PC client. Leave HVCI, Core Isolation, TPM, and Secure Boot on.',
  },
  {
    id: 'updated-claim',
    title: '“Updated” is not an undetected claim',
    icon: 'alert',
    when: 'Nov 7, 2026',
    summary:
      'Updated means this note was refreshed. It does not mean the loader is undetected, and it does not mean a match will stay clean after the next Javelin or game update.',
  },
  {
    id: 'plans',
    title: 'Plans stay on separate cards',
    icon: 'tag',
    when: 'Nov 7, 2026',
    summary:
      'The menu is $35 for 31 days or $150 lifetime. The HWID spoofer is $50 for 31 days or $150 lifetime. A lifetime key on one product does not include the other.',
  },
];

/** Newest first — neutral patch notes only (no undetected / working claims). */
export const STATUS_RECENT_UPDATES: StatusUpdateEntry[] = [
  ...STATUS_JAVELIN_NOTES,
  ...STATUS_STORE_NOTES,
];

export const STATUS_ACE_REMINDER =
  'Check this page after each Javelin or client update. GREEN means load. RED means wait.';

const LOCALE_DATE: Partial<Record<string, string>> = {
  en: 'en-US',
  fr: 'fr-FR',
  it: 'it-IT',
  de: 'de-DE',
  es: 'es-ES',
  cs: 'cs-CZ',
  ru: 'ru-RU',
  'zh-cn': 'zh-CN',
  ja: 'ja-JP',
  pl: 'pl-PL',
  'pt-br': 'pt-BR',
};

/** Format YYYY-MM-DD for display (static at build). */
export function formatStatusUpdated(
  isoDate: string = STATUS_LAST_UPDATED,
  locale?: string | null,
): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate);
  if (!match) return isoDate;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const tag = locale && LOCALE_DATE[locale] ? LOCALE_DATE[locale] : 'en-US';
  return new Intl.DateTimeFormat(tag, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

/** Drop stale template copy from other games still present in locale JSON. */
export function isLegacyGameStatusBlob(text: string): boolean {
  return /Badlands|1\.31|1\.30|Nitrado|Nasdara|BattlEye|DayZ|dayz|Warzone cheats|delta-force|PS5 native|ACE update|Vanguard|VALORANT|valorant/i.test(
    text,
  );
}

/** @deprecated Use isLegacyGameStatusBlob */
export const isLegacyDayzStatusBlob = isLegacyGameStatusBlob;
