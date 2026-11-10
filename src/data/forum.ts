export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  developer?: boolean;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  /** Meta description. Cards keep the shorter excerpt. */
  description: string;
  author: string;
  age: string;
  date: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
  /** Answered threads that should show a closed badge. New patch threads stay open. */
  closed?: boolean;
}

export const FORUM_DEVELOPER = 'StoreStaff';

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

/** Stable filter keys — always derived from English category names. */
export const FORUM_CATEGORY_KEYS: Record<string, string> = {
  General: 'general',
  'Guides & Builds': 'guidesbuilds',
  'Patch Talk': 'patchtalk',
  Community: 'community',
};

export function forumCategoryFilterKey(category: string): string {
  return FORUM_CATEGORY_KEYS[category] ?? category.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function countComments(comments: ForumComment[]): number {
  return comments.reduce(
    (total, comment) => total + 1 + (comment.replies ? countComments(comment.replies) : 0),
    0,
  );
}

function withCounts(post: Omit<ForumPost, 'commentsCount'>): ForumPost {
  return { ...post, commentsCount: countComments(post.comments) };
}

export function forumLastReply(comments: ForumComment[]): { author: string; age: string } | null {
  let last: ForumComment | null = null;
  const walk = (list: ForumComment[]) => {
    for (const comment of list) {
      last = comment;
      if (comment.replies?.length) walk(comment.replies);
    }
  };
  walk(comments);
  return last ? { author: last.author, age: last.age } : null;
}

/** Seeded discussions. Comment ages stay in hours so reply dates land on the thread day. */
const rawPosts: Array<Omit<ForumPost, 'commentsCount'>> = [
  {
    slug: 'refund-if-the-loader-wont-open',
    category: 'Community',
    categoryTone: 'green',
    title: 'If the loader does not open, do I get a refund?',
    excerpt: 'About to buy the 31 day key. If it errors on launch, is the money gone or can support fix it?',
    description:
      'Pre-purchase question on refunds if the Apex Legends loader does not open. Sales are final except when support confirms a fault on our side.',
    author: 'wraithdiff',
    age: '9h ago',
    date: 'Oct 2, 2026',
    upvotes: 64,
    flair: 'Before you buy',
    body: [
      'ngl i am this close to grabbing the 31 day menu but i am scared of an L. if the loader just sits there or throws a red line, do i get the money back or am i cooked?',
      'not trying to be weird about it. just want the rule before i pay. bans, change of mind, all of that.',
    ],
    comments: [
      {
        author: 'OrderDesk',
        age: '7h ago',
        score: 81,
        developer: true,
        body: 'Sales are final once checkout finishes. Change of mind, an account ban, and launching while the status page is not current are not refunded. If we confirm the fault is on our side, we can fix the key or talk a refund. Open support with the order email and the exact loader text. The full rule is on the terms page.',
        replies: [
          {
            author: 'wraithdiff',
            age: '5h ago',
            score: 11,
            body: 'bet. so i read status first, and if it is actually your file that is broken i ticket it. thanks 👍',
          },
        ],
      },
      {
        author: 'octane_main',
        age: '4h ago',
        score: 22,
        body: 'yeah do not buy and then queue on a red day and ask for the money back. that part is on you lol.',
      },
    ],
    sourceTitle: 'Get Round-the-Clock Help with Our 24/7 Support Team',
    sourcePath: '/blog/24-7-support/',
    closed: true,
  },
  {
    slug: '31-day-or-lifetime-before-buying',
    category: 'General',
    categoryTone: 'purple',
    title: '31 day or lifetime? and does the menu include the spoofer?',
    excerpt: 'First buy. $35 vs $150. Friend said lifetime also covers HWID. That sounds cap.',
    description:
      'Before you buy: the menu is $35 for 31 days or $150 lifetime. The HWID spoofer is a separate key and is not included.',
    author: 'lootgoblin_77',
    age: '8h ago',
    date: 'Oct 6, 2026',
    upvotes: 91,
    flair: 'Before you buy',
    body: [
      'ok which plan do people actually start on. i play a few nights a week, not a full split grinder.',
      'also my duo said the lifetime menu key includes the HWID thing. is that real or is he trolling me 😭',
    ],
    comments: [
      {
        author: 'StoreStaff',
        age: '6h ago',
        score: 102,
        developer: true,
        body: 'Start on 31 days if you want to try one product first. The menu is $35 for 31 days or $150 lifetime. The HWID spoofer is its own checkout, $50 for 31 days or $150 lifetime. Lifetime on the menu does not add the spoofer, and the short plan does not turn into credit toward lifetime.',
        replies: [
          {
            author: 'lootgoblin_77',
            age: '4h ago',
            score: 14,
            body: 'W explanation. grabbing 31 days on the menu only. spoofer stays in the cart for later.',
          },
        ],
      },
    ],
    sourceTitle: 'Best Apex Legends Cheats Review & Comparison 2026: Features, Safety & Value',
    sourcePath: '/blog/best-apex-legends-cheats/',
    closed: true,
  },
  {
    slug: 'loader-blank-after-client-update',
    category: 'Patch Talk',
    categoryTone: 'orange',
    title: 'Loader opens but nothing draws after the client update',
    excerpt: 'Game patched, I launched anyway, toggles click, zero boxes. Status was red and I ignored it. my bad.',
    description:
      'After an Apex client update the menu drew nothing because the status label was red. Waiting for green and reloading the portal file fixed it.',
    author: 'bangalore_timer',
    age: '10h ago',
    date: 'Oct 11, 2026',
    upvotes: 73,
    flair: 'Patch day',
    body: [
      'client update dropped, i was already in queue brain. opened the loader, clicked player visuals, screen stayed clean. no boxes, no bars, nothing.',
      'then i actually looked at the status page and it was red. do i delete the file or just wait?',
    ],
    comments: [
      {
        author: 'MenuDev',
        age: '8h ago',
        score: 88,
        developer: true,
        body: 'Close the game and leave the loader closed while the label is red. Red means wait. When the note is green, download the file from your portal again and load that one. Do not grab a copy from a clip or a friend. A green label is the current file. It is not an easy bypass, and an ID ban is not confirmed. In most cases there is no ID ban. An account can still be restricted.',
        replies: [
          {
            author: 'bangalore_timer',
            age: '3h ago',
            score: 19,
            body: 'waited for green, grabbed the portal file, boxes are back. working 100% now. i will not queue on red again lol.',
          },
        ],
      },
      {
        author: 'path_main',
        age: '2h ago',
        score: 15,
        body: 'same patch, same mistake. status first, then launch. the old exe in downloads was the problem.',
      },
    ],
    sourceTitle: 'Are Apex Legends Hacks Safe to Use This Season?',
    sourcePath: '/blog/apex-legends-hacks-safe/',
    closed: true,
  },
  {
    slug: 'box-esp-covering-the-fight',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'Box ESP is eating my screen in a 3 stack',
    excerpt: 'Full boxes plus bones plus loot. I cannot see the player I am shooting. What do you actually leave on?',
    description:
      'Box ESP got too loud in a fight. Thin corners, loot off during the gunfight, and one saved preset fixed the clutter.',
    author: 'horizon_main',
    age: '9h ago',
    date: 'Oct 17, 2026',
    upvotes: 58,
    flair: 'Build help',
    body: [
      'turned on box, skeleton, health, weapon name, and loot all at once like a clown. in a building fight i am looking at text, not the model.',
      'what is the normal preset before i blame the menu. i just want to see people on height without the UI taking the duel.',
    ],
    comments: [
      {
        author: 'StoreStaff',
        age: '7h ago',
        score: 76,
        developer: true,
        body: 'Leave a thin box and a health bar. Turn skeleton, weapon names, and loot off once the fight starts. Loot labels are for the rotate, not the spray. Save that as its own config so you are not rebuilding it every drop.',
        replies: [
          {
            author: 'horizon_main',
            age: '4h ago',
            score: 17,
            body: 'thin box + bar only. loot off when i hear shots. working 100%. i can actually see the head now 😭',
          },
        ],
      },
    ],
    sourceTitle: 'Spot Hidden Enemies Anywhere Using Box ESP',
    sourcePath: '/blog/box-esp/',
    closed: true,
  },
  {
    slug: 'aim-pulls-onto-my-teammate',
    category: 'General',
    categoryTone: 'purple',
    title: 'Aim keeps dragging onto my duo in the same door',
    excerpt: 'Cone is wide and it sticks to the closest body, which is usually my teammate. How do I tighten it?',
    description:
      'Aim assist was pulling onto a teammate because the cone was too wide. A smaller field of view and a saved preset stopped the drag.',
    author: 'gibby_bubble',
    age: '8h ago',
    date: 'Oct 24, 2026',
    upvotes: 69,
    flair: 'Question',
    body: [
      'duo and i hold the same door and the aim just picks him. it is so cringe. i look at the enemy and the camera slides to the bubble next to me.',
      'fov is pretty wide because i copied a clip. is that the whole bug or did i miss a toggle?',
    ],
    comments: [
      {
        author: 'MenuDev',
        age: '6h ago',
        score: 84,
        developer: true,
        body: 'Shrink the aim field of view until the circle only fits the person you are fighting, not the teammate on your shoulder. Turn aim off while you test No Recoil on a wall. Save the smaller cone after one quiet fight. This is not an easy bypass. An ID ban is not confirmed. In most cases there is no ID ban.',
        replies: [
          {
            author: 'gibby_bubble',
            age: '3h ago',
            score: 12,
            body: 'smaller fov fixed the duo drag. working 100% on the door fight. keeping the wide one deleted.',
          },
        ],
      },
    ],
    sourceTitle: 'Lock Onto Enemies Instantly Using Our Apex Legends Aimbot',
    sourcePath: '/blog/apex-legends-aimbot/',
    closed: true,
  },
  {
    slug: 'no-recoil-still-climbs-far',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'No Recoil feels flat up close and still climbs at range',
    excerpt: 'Is the toggle broken on the Wingman, or am I mag-dumping a tiny target? Also is this the same as a Cronus?',
    description:
      'No Recoil is a menu toggle, not a Cronus or recoil script. Close sprays felt flat. Long sprays still need a burst.',
    author: 'fuse_nades',
    age: '9h ago',
    date: 'Oct 30, 2026',
    upvotes: 47,
    flair: 'Build help',
    body: [
      'close range the gun feels stuck to them. the second the fight is across a POI the later bullets walk off. thought the option was bugged.',
      'also someone in my stack said this is just a jitter macro. i do not own a cronus or a strikepack. i only have the menu toggle.',
    ],
    comments: [
      {
        author: 'StoreStaff',
        age: '6h ago',
        score: 63,
        developer: true,
        body: 'The climb at range is leftover kick on a small target. Burst, do not hold the mag across the POI. Test on a wall with aim off so you can see the pattern. Cronus, XIM, Titan, Strikepacks, and recoil scripts are a different ban. This toggle is not those devices. An ID ban on this menu is not confirmed. In most cases there is no ID ban.',
        replies: [
          {
            author: 'fuse_nades',
            age: '3h ago',
            score: 9,
            body: 'wall test made it obvious. short bursts are working 100%. i was just mag dumping like a bot.',
          },
        ],
      },
    ],
    sourceTitle: 'Hit Every Shot by Eliminating Weapon Recoil Entirely',
    sourcePath: '/blog/no-recoil/',
    closed: true,
  },
  {
    slug: 'new-account-fails-on-this-pc',
    category: 'Community',
    categoryTone: 'green',
    title: 'New account fails on this PC but works on my laptop',
    excerpt: 'Is that a confirmed ID ban? Do I buy the menu again or the spoofer?',
    description:
      'A new Apex account failing on one PC and working on another is a hardware-flag pattern. An ID ban is not confirmed. The spoofer is a separate key.',
    author: 'crypto_drone',
    age: '8h ago',
    date: 'Nov 5, 2026',
    upvotes: 112,
    flair: 'HWID',
    body: [
      'old profile got sat. made a new one. it will not get into a match on my main pc. same account loads fine on a laptop that never ran the menu.',
      'is that a confirmed id ban? and does the cheat key fix the pc or do i need the other product?',
    ],
    comments: [
      {
        author: 'OrderDesk',
        age: '6h ago',
        score: 97,
        developer: true,
        body: 'That pattern is the machine, not the profile. An ID ban is not confirmed. In most cases there is no ID ban. When a new account fails on one PC and works on another, that is the HWID spoofer, sold separately. The menu key does not clear it, and the spoofer does not undo an account-only penalty. It is not an easy bypass.',
        replies: [
          {
            author: 'crypto_drone',
            age: '3h ago',
            score: 18,
            body: 'ok so i stop buying a second menu key. spoofer only if the laptop test stays clean. appreciate it.',
          },
        ],
      },
      {
        author: 'loba_bracelet',
        age: '2h ago',
        score: 21,
        body: 'same test here. account ban and pc flag are two different Ls. do not mix the carts.',
      },
    ],
    sourceTitle: 'Discover What an HWID Spoofer Does for Safety',
    sourcePath: '/blog/hwid-spoofer-safety/',
    closed: true,
  },
  {
    slug: 'stream-proof-showed-on-a-discord-clip',
    category: 'Patch Talk',
    categoryTone: 'orange',
    title: 'Stream Proof hid my recording but my duo still clipped the boxes',
    excerpt: 'My local file looks clean. Their discord clip shows the overlay. Is the toggle dead?',
    description:
      'Stream Proof covers your own capture. A teammate recording their screen is outside that toggle. The local test passed after they checked their own file.',
    author: 'valk_drop',
    age: '7h ago',
    date: 'Nov 7, 2026',
    upvotes: 54,
    flair: 'Stream',
    body: [
      'turned stream proof on, recorded in obs, watched it back, no menu. then my duo posted a discord clip from THEIR screen and my boxes are right there. am i tweaking or is the option broken?',
      'i am not live. this was a private clip. still embarrassing ngl.',
    ],
    comments: [
      {
        author: 'MenuDev',
        age: '5h ago',
        score: 70,
        developer: true,
        body: 'Stream Proof is for capture on your PC. It does not hide the overlay from a teammate, a spectator, or their recording. Watch your own file before you go live. If your OBS file is clean, the toggle did its job. Their clip is outside it. This is not an easy bypass, and it does not stop a report.',
        replies: [
          {
            author: 'valk_drop',
            age: '2h ago',
            score: 11,
            body: 'rewatched my file. clean. their clip is just their pov. working 100% on my side. i told them to stop posting my screen 💀',
          },
        ],
      },
    ],
    sourceTitle: 'Stream Safely Without Showing Hacks to Your Audience',
    sourcePath: '/blog/stream-proof/',
    closed: true,
  },
  {
    slug: 'loot-labels-loud-after-season-31',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'Season 31 loot labels are screaming at me in the fight',
    excerpt: 'Strongholds plus ground loot. I left every tier on and now i cannot track. How do you filter it?',
    description:
      'Season 31 Strongholds and loot labels got too loud. Filtering tiers and hiding loot when the fight starts made the overlay readable again.',
    author: 'ash_portal',
    age: '6h ago',
    date: 'Nov 9, 2026',
    upvotes: 41,
    flair: 'Season 31',
    body: [
      'after the season 31 update the ground is covered. bins, boxes, and those stronghold bunkers all have text. i walk into a fight still reading attachments.',
      'akimbo wingman is fun but i do not need every white pistol labeled. what filter are you actually using?',
    ],
    comments: [
      {
        author: 'StoreStaff',
        age: '4h ago',
        score: 52,
        developer: true,
        body: 'Show only the tiers you would swap to, and the ammo you are short on. Strongholds are capturable bunkers, not a free loadout, so do not detour for every label. Hide loot the second someone shoots. Re-check the status page after the client update, then look at one POI before you queue.',
        replies: [
          {
            author: 'ash_portal',
            age: '2h ago',
            score: 8,
            body: 'gold and up, heavy ammo only, loot off in the fight. working 100%. rotate is readable again.',
          },
        ],
      },
    ],
    sourceTitle: 'Secure High-Tier Gear Instantly Using Loot ESP',
    sourcePath: '/blog/loot-esp/',
    closed: true,
  },
];

export const forumPosts: ForumPost[] = rawPosts.map(withCounts);

export function getForumPost(slug: string) {
  return forumPosts.find((post) => post.slug === slug);
}
