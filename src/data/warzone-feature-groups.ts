import type { ProductFeatureGroup } from './product-types';

/** Loader menu groups — names match the published Valorant menu. */
function item(name: string, desc?: string) {
  return { name, desc: desc ?? 'Listed on the loader menu for supported builds.' };
}

export const valorantLoaderFeatureGroups: ProductFeatureGroup[] = [
  {
    name: 'Aimbot Options',
    items: [
      item('Enable Aimbot'),
      item('Smoothness'),
      item('Speed'),
      item('FOV'),
      item('Stickiness'),
      item('Aimbot Filter'),
      item('Aimbot Bone'),
      item('Visible Check'),
      item('Draw FOV'),
      item('Draw Target Line'),
    ],
  },
  {
    name: 'Player Visual Options',
    items: [
      item('Health Bar'),
      item('Shield Bar'),
      item('Agent'),
      item('Rank'),
      item('Max Distance'),
      item('Box'),
      item('Snapline'),
      item('View Direction'),
      item('Skeleton'),
      item('Head Circle'),
      item('Equip Name'),
      item('Level'),
      item('Distance'),
    ],
  },
  {
    name: 'World Visual Options',
    items: [
      item('Ability'),
      item('Trap'),
      item('Spike', 'Defuse progress and time readouts when the menu exposes them.'),
      item('Show Icon'),
      item('Show Distance'),
      item('Max. Distance'),
      item('Customization for each Character'),
      item('All Abilities & Traps for each Character'),
    ],
  },
  {
    name: 'Misc Options',
    items: [
      item('Combat Mode Hotkey', 'Hides ability and trap ESP while held.'),
      item('Font Size'),
      item('Create/Save/Load/Unload Config'),
    ],
  },
];
