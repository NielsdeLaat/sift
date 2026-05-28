// ── Types ─────────────────────────────────────────────────────────────────────

export interface Achievement {
  id: string;
  label: string;
  /** Must match an IconName in the icon registry */
  icon: string;
  earned: boolean;
}

export interface UserState {
  username: string;
  /** Displayed below the username on the profile screen */
  title: string;
  /** Cumulative XP. Level and progress bar are derived from this via lib/levels.ts. */
  xp: number;
  streak: number;
  friends: number;
  /** League tier string, e.g. "Bronze", "Silver", "Gold" */
  league: string;
  achievements: Achievement[];
  /** Path relative to /public, or undefined to show icon fallback */
  avatarUrl?: string;
}

// ── Seed data ─────────────────────────────────────────────────────────────────
// Edit only this object to change all user-facing profile content.
// Level is calculated automatically from xp — see lib/levels.ts.
export const user: UserState = {
  username: "Alex",
  title: "Fact-Checking Novice",
  xp: 4560,
  streak: 4,
  friends: 10,
  league: "Bronze",
  achievements: [
    { id: "first-fact", label: "First Fact", icon: "badgeCheck", earned: true },
    { id: "reader", label: "Reader", icon: "book", earned: true },
    { id: "sleuth", label: "Sleuth", icon: "search", earned: true },
    { id: "expert", label: "Expert", icon: "star", earned: false },
    { id: "AI master", label: "AI Master", icon: "star", earned: false },
  ],
};
