import type { ProductFeatureGroup } from './product-types';

/** Loader feature list — single catalog group for the cheat product page. */
export const apexLoaderFeatureGroups: ProductFeatureGroup[] = [
  {
    name: 'Included features',
    items: [
      {
        name: 'Player ESP',
        desc: 'Shows enemy players with overlays you can tune in the menu.',
      },
      {
        name: 'Advanced Aimbot',
        desc: 'Smoothing, FOV, and bone selection for aim assist.',
      },
      {
        name: 'Weapon ESP',
        desc: 'Displays weapon names on players when the option is on.',
      },
      {
        name: 'Health Bar',
        desc: 'Health and shield bars on targets in your view.',
      },
      {
        name: 'Distance ESP',
        desc: 'Distance readouts on players you are tracking.',
      },
      {
        name: 'Box ESP',
        desc: 'Corner boxes around players in the overlay.',
      },
      {
        name: 'Skeleton ESP',
        desc: 'Bone lines for posture, head level, and peek direction.',
      },
      {
        name: 'Loot ESP',
        desc: 'Loot tiers, death boxes, and supply bins when enabled.',
      },
      {
        name: 'No Recoil',
        desc: 'Cuts weapon kick while the option is enabled.',
      },
      {
        name: 'EA Javelin Bypass',
        desc: 'Built for EA Javelin Anticheat builds listed on the status page.',
      },
      {
        name: 'Stream Proof',
        desc: 'Keeps overlays off typical recordings while you still see them.',
      },
      {
        name: '24/7 Support',
        desc: 'Discord help for loader, checkout, and portal questions.',
      },
    ],
  },
];
