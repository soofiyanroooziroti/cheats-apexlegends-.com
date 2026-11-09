/** ISO date (YYYY-MM-DD) — edit when you publish a status refresh. */
export const STATUS_LAST_UPDATED = '2026-11-08';

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

/** Public Vanguard milestones — prepended on every locale (see status-locale.ts). */
export const STATUS_VANGUARD_MILESTONES: StatusUpdateEntry[] = [
  {
    id: 'vct-integrity',
    title: 'VCT 2027 integrity framework',
    icon: 'shield',
    when: 'Nov 5, 2026',
    summary:
      'Riot outlined a Vanguard Pre-Check routine for open-competition qualifiers. Online stacks now face stricter software-layer review and background-process checks before a match. This store does not describe how to pass that review. Read the status label for this menu after the note, and treat tournament rules as separate from a casual queue.',
  },
  {
    id: 'vanguard-on-demand',
    title: 'Vanguard on-demand and Windows 11 baselines',
    icon: 'settings',
    when: 'Jun 2026',
    summary:
      'Vanguard On-Demand Mode can stay off when VALORANT is closed, but turning it on enforces a heavier Windows 11 baseline: HVCI, VBS, and TPM 2.0. That closes common injector loopholes. Leave those features enabled on a build you load against. This page does not document bypass steps.',
  },
  {
    id: 'dma-may-2026',
    title: 'May 22, 2026 — DMA-focused Vanguard update',
    icon: 'alert',
    when: 'May 22, 2026',
    summary:
      'Riot targeted external SATA/NVMe Direct Memory Access setups and related firmware bypasses. Public discussion centered on Windows IOMMU and DMA remapping blocking malicious device DLLs. Riot said legitimate hardware is not physically destroyed; illicit cheat configurations can fail on that PC. This store sells a Windows loader, not a DMA card. The blog post “Vanguard security timeline (2026)” summarizes the same dates.',
  },
];

/** Store lineup notes — newest first after Vanguard milestones on the status page. */
export const STATUS_STORE_NOTES: StatusUpdateEntry[] = [
  {
    id: 'status-label',
    title: 'Status label',
    icon: 'shield',
    when: 'Nov 8, 2026',
    summary:
      'GREEN means this note lists the current file to load. RED means wait. Read this page after a VALORANT or Vanguard update before you launch. The label is not an undetected claim, and it does not mean a match will stay clean.',
  },
  {
    id: 'menu-covers',
    title: 'What the menu covers',
    icon: 'mapHack',
    when: 'Nov 8, 2026',
    summary:
      'The published menu lists Aimbot Options, Player Visual Options, World Visual Options, and Misc Options. Combat Mode Hotkey hides ability and trap ESP. It does not remove Vanguard risk.',
  },
  {
    id: 'pc-requirements',
    title: 'PC requirements',
    icon: 'settings',
    when: 'Nov 8, 2026',
    summary:
      'Windows 10 or 11, Intel Core i5 or AMD Ryzen 5 or better, and the latest VALORANT PC client. Leave HVCI, Core Isolation, TPM, and Secure Boot on.',
  },
  {
    id: 'updated-claim',
    title: '“Updated” is not an undetected claim',
    icon: 'alert',
    when: 'Nov 7, 2026',
    summary:
      'Updated means this note was refreshed. It does not mean the loader is undetected, and it does not mean a match will stay clean after the next Vanguard or game update.',
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
  ...STATUS_VANGUARD_MILESTONES,
  ...STATUS_STORE_NOTES,
];

export const STATUS_ACE_REMINDER =
  'Check this page after each Vanguard or client update — including the May 2026 DMA-focused release and the November 2026 integrity framework. GREEN means load. RED means wait.';

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
  return /Badlands|1\.31|1\.30|Nitrado|Nasdara|BattlEye|DayZ|dayz|Warzone cheats|delta-force|PS5 native|ACE update/i.test(
    text,
  );
}

/** @deprecated Use isLegacyGameStatusBlob */
export const isLegacyDayzStatusBlob = isLegacyGameStatusBlob;
