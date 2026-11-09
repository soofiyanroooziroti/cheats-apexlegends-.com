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

export const FORUM_DEVELOPER = 'ValorantStaff';

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

/** Seeded discussions — Valorant keyword map, original replies, no bypass steps. */
const rawPosts: Array<Omit<ForumPost, 'commentsCount'>> = [
  {
    slug: 'vanguard-pre-check-november-2026',
    category: 'Patch Talk',
    categoryTone: 'orange',
    title: 'Vanguard Pre-Check and the November 2026 integrity framework',
    excerpt:
      'Riot’s VCT 2027 notes mention stricter online qualifier checks. What should a ranked player actually re-read?',
    description:
      'A thread on the November 5, 2026 Vanguard Pre-Check announcement and what it means for background software risk.',
    author: 'QualifierWatch',
    age: '3d ago',
    date: 'Nov 5, 2026',
    upvotes: 41,
    flair: '✅ Solved',
    body: [
      'The November blog post talks about automated checks before open qualifiers start.',
      'Does that change what we read on the status page before a normal unrated queue, or is that tournament-only?',
    ],
    comments: [
      {
        author: FORUM_DEVELOPER,
        age: '3d ago',
        score: 26,
        developer: true,
        body: 'Pre-Check is framed for competitive pathways and open qualifiers, not a promise about casual queue behavior. The direction still matters: more software-layer review before play. Read the status label after the note either way. GREEN lists the file. It is not clearance. The Vanguard security timeline on the blog summarizes May DMA enforcement, June on-demand baselines, and this November framework in one place.',
      },
      {
        author: 'QueueGoblin',
        age: '2d ago',
        score: 11,
        body: 'ok so unrated is not magically exempt 😭 i was treating the blog like tournament-only. status page first, then queue. thanks for spelling that out 🙏',
      },
      {
        author: 'NightShiftDuo',
        age: '1d ago',
        score: 7,
        body: 'this thread actually helped. “GREEN lists the file” is the line people keep skipping 💀 bookmarking the timeline post.',
      },
    ],
    sourceTitle: 'Vanguard security timeline (2026)',
    sourcePath: '/blog/valorant-vanguard-security-2026/',
  },
  {
    slug: 'third-party-valorant-cheats-risks',
    category: 'General',
    categoryTone: 'purple',
    title: 'Are third-party Valorant cheats worth the account risk?',
    excerpt: 'Seller pages and forum posts do not say the same thing. I want the gap stated plainly.',
    description:
      'A closed thread on product claims, account risk, and why a status label is not a verified result.',
    author: 'ReadTheFinePrint',
    age: '9 Oct 2026',
    date: 'Oct 9, 2026',
    upvotes: 41,
    closed: true,
    flair: '✅ Solved',
    body: [
      'I keep seeing confident claims next to thin details. I am not asking for a bypass.',
      'What on this store is a published menu, and what is still just a risk?',
    ],
    comments: [
      {
        author: FORUM_DEVELOPER,
        age: '9 Oct 2026',
        score: 28,
        developer: true,
        body: 'The published menu is player ESP, agent ESP, spike ESP, skeleton ESP, health ESP, rank ESP, aimbot, and a streamproof overlay. Vanguard can still act on an account. GREEN on the status page means the note lists the file to load. It is not a verified clean match.',
      },
      {
        author: 'FinePrintFan',
        age: '8 Oct 2026',
        score: 9,
        body: 'seller pages talk like it is already solved 😤 the staff reply is the gap: a listed menu is not a clean-match promise. that tracks.',
      },
    ],
    sourceTitle: 'FAQ',
    sourcePath: '/faq/',
  },
  {
    slug: 'valorant-anti-cheat-vs-cs2',
    category: 'Patch Talk',
    categoryTone: 'orange',
    title: 'Valorant anti-cheat vs CS2: Vanguard and VAC',
    excerpt: 'People compare Vanguard with VAC as if they were the same driver. They are not.',
    description:
      'A closed comparison of Riot Vanguard in Valorant and VAC-related protections in Counter-Strike 2.',
    author: 'CalmlyCompetitive',
    age: '8 Oct 2026',
    date: 'Oct 8, 2026',
    upvotes: 36,
    flair: '🔥 Open',
    body: [
      'I play both games. Advice written for VAC does not map onto Vanguard one to one.',
      'What should a buyer actually treat as different before they load anything?',
    ],
    comments: [],
    sourceTitle: 'Vanguard and VAC notes',
    sourcePath: '/blog/valorant-vanguard-vs-vac/',
  },
  {
    slug: 'valorant-cheat-menu-use-cases',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'What is the Valorant cheat menu actually useful for?',
    excerpt: 'Custom-game practice and a live match menu get mixed together in the same sentence.',
    description:
      'A closed thread separating official custom-game tools from the Windows menu on this store.',
    author: 'SageAdvice',
    age: '7 Oct 2026',
    date: 'Oct 7, 2026',
    upvotes: 29,
    closed: true,
    flair: '✅ Solved',
    body: [
      'I use custom games for lineups. That is a different switch from a third-party overlay.',
      'Which page lists the live menu, and which guide is only about Riot’s custom-game cheats?',
    ],
    comments: [
      {
        author: FORUM_DEVELOPER,
        age: '7 Oct 2026',
        score: 19,
        developer: true,
        body: 'Riot’s custom-game cheats are practice toggles inside the official client. The product page lists the separate Windows menu: player, agent, spike, skeleton, health, and rank ESP, plus aimbot and streamproof. They are not the same control.',
      },
      {
        author: 'LineupLab',
        age: '7 Oct 2026',
        score: 8,
        body: 'wait this is the mix-up i kept making 💀 custom lobby toggles ≠ the Windows menu. product page is the live list.',
      },
      {
        author: 'SageAdvice',
        age: '6 Oct 2026',
        score: 5,
        body: 'solved for me. lineup practice stays in the custom game. the store menu is a different page ✨',
      },
    ],
    sourceTitle: 'Custom game cheats',
    sourcePath: '/blog/valorant-custom-game-cheats/',
  },
  {
    slug: 'valorant-cheat-codes-commands',
    category: 'Community',
    categoryTone: 'green',
    title: 'Does Valorant have cheat codes or console commands?',
    excerpt: 'Some posts still talk about typed commands. I cannot find a console like that.',
    description:
      'A closed thread on whether Valorant uses typed cheat codes or menu-based custom-game tools.',
    author: 'SageAdvice',
    age: '6 Oct 2026',
    date: 'Oct 6, 2026',
    upvotes: 22,
    closed: true,
    flair: '✅ Solved',
    body: [
      'Older FPS games had console commands. Valorant custom games look like menus, not a command line.',
      'Is there a code list, or is that the wrong search?',
    ],
    comments: [
      {
        author: FORUM_DEVELOPER,
        age: '6 Oct 2026',
        score: 16,
        developer: true,
        body: 'There is no public console-code list to paste for live matchmaking. Custom games use Riot’s own menu toggles for practice. This store’s loader is a separate Windows menu, not a typed cheat code.',
      },
      {
        author: 'OldSchoolFPS',
        age: '5 Oct 2026',
        score: 6,
        body: 'yeah i was hunting a console that is not there 😂 menus for practice, separate loader for the store. wrong search, thanks.',
      },
    ],
    sourceTitle: 'Custom game guide',
    sourcePath: '/blog/valorant-custom-game-cheats/',
  },
  {
    slug: 'how-to-turn-on-valorant-custom-game-cheats',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'How do I turn on Valorant custom game cheats?',
    excerpt: 'I want the practice toggles inside a custom lobby, not a third-party download.',
    description:
      'A closed how-to for Riot practice toggles in a custom game, separate from the Windows menu sold here.',
    author: 'LineupLab',
    age: '5 Oct 2026',
    date: 'Oct 5, 2026',
    upvotes: 34,
    flair: '👀 Unanswered',
    body: [
      'I host a custom game for lineup practice. I cannot find a console command.',
      'Where do the official cheat toggles sit, and is that the same thing as this store’s loader?',
    ],
    comments: [],
    sourceTitle: 'Custom game cheats',
    sourcePath: '/blog/valorant-custom-game-cheats/',
  },
  {
    slug: 'valorant-cheats-custom-game',
    category: 'Community',
    categoryTone: 'green',
    title: 'Can Valorant custom game cheats be used in a live match?',
    excerpt: 'Practice toggles and a live overlay keep getting described as one switch.',
    description:
      'A closed thread on why custom-game practice tools stay in that lobby and do not become the live menu.',
    author: 'LineupLab',
    age: '4 Oct 2026',
    date: 'Oct 4, 2026',
    upvotes: 27,
    closed: true,
    flair: '✅ Solved',
    body: [
      'Infinite abilities in a custom game is useful for lineups.',
      'Does that setting carry into a normal match, or is the live menu a different product?',
    ],
    comments: [
      {
        author: FORUM_DEVELOPER,
        age: '4 Oct 2026',
        score: 18,
        developer: true,
        body: 'Riot’s custom-game cheats stay in that lobby. They do not travel into matchmaking. The live menu on this store is a separate Windows license. Read the status label before you load it. GREEN lists the file. It is not a claim that Vanguard will ignore it.',
      },
      {
        author: 'CascadeMain',
        age: '4 Oct 2026',
        score: 10,
        body: 'needed this. infinite util in a custom is for practice only 🎯 it does not ride into a real match.',
      },
      {
        author: 'RankedAndTired',
        age: '3 Oct 2026',
        score: 4,
        body: 'solved. two products, two checkouts, and the status label is still just a list 💚 not a free pass.',
      },
    ],
    sourceTitle: 'Custom game cheats',
    sourcePath: '/blog/valorant-custom-game-cheats/',
  },
  {
    slug: 'lifetime-separate-spoofer',
    category: 'General',
    categoryTone: 'purple',
    title: 'Does the $150 lifetime key include the HWID spoofer?',
    excerpt: 'Three cards at checkout. I want to be sure lifetime on one is not all three.',
    description:
      'The menu is $35 or $150. The HWID spoofer is $50 or $150. Separate keys.',
    author: 'PlanMath',
    age: '3d ago',
    date: 'Nov 4, 2026',
    upvotes: 62,
    closed: true,
    flair: '✅ Solved',
    body: [
      'I am looking at the menu card and the spoofer card. Lifetime is $150 on each.',
      'If I buy lifetime on the menu, does the spoofer unlock too?',
    ],
    comments: [
      {
        author: FORUM_DEVELOPER,
        age: '3d ago',
        score: 40,
        developer: true,
        body: 'No. Lifetime on the menu is only that product. The HWID spoofer is a separate checkout. The menu is $35 for 31 days or $150 lifetime. The spoofer is $50 for 31 days or $150 lifetime.',
      },
      {
        author: 'CheckoutChaos',
        age: '2d ago',
        score: 14,
        body: 'three cards had me spiraling 😭 lifetime on the menu is not a bundle. spoofer is its own $150. appreciate the plain no.',
      },
    ],
    sourceTitle: 'Pricing guide',
    sourcePath: '/blog/valorant-cheats-pricing/',
  },
  {
    slug: 'desktop-vs-laptop-hwid',
    category: 'Community',
    categoryTone: 'green',
    title: 'New account fails on this PC but works on a laptop — which product?',
    excerpt: 'Desktop blocks new profiles; laptop does not. I already have the menu month.',
    description:
      'A hardware-flag pattern matches the HWID spoofer. The menu key does not include it.',
    author: 'SecondRig',
    age: '4d ago',
    date: 'Nov 3, 2026',
    upvotes: 48,
    flair: '👀 Unanswered',
    body: [
      'Fresh accounts fail on the desktop and play on the laptop.',
      'Do I buy the HWID spoofer, or is this an account-only restriction?',
    ],
    comments: [],
    sourceTitle: 'What an HWID spoofer is',
    sourcePath: '/blog/what-is-an-hwid-spoofer/',
  },
];

export const forumPosts: ForumPost[] = rawPosts.map(withCounts);

export function getForumPost(slug: string) {
  return forumPosts.find((post) => post.slug === slug);
}
