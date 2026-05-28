export interface UserState {
  username: string;
  level: number;
  xp: number;
  xpForNextLevel: number;
  streak: number;
  /** Path relative to /public, or undefined to show icon fallback */
  avatarUrl?: string;
}

export const user: UserState = {
  username: 'Thinker',
  level: 4,
  xp: 4250,
  xpForNextLevel: 9000,
  streak: 4,
};
