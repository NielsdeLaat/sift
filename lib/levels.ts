/**
 * Level progression table.
 * Index = level - 1, value = cumulative XP required to reach that level.
 * Edit this array to tune the difficulty curve; everything else derives from it.
 */
export const LEVEL_THRESHOLDS = [
  0,      // Lv 1
  1000,   // Lv 2
  2500,   // Lv 3
  4000,   // Lv 4
  6000,   // Lv 5
  8500,   // Lv 6
  12000,  // Lv 7
  16000,  // Lv 8
  21000,  // Lv 9
  27000,  // Lv 10
] as const;

export const MAX_LEVEL = LEVEL_THRESHOLDS.length;

/** Returns 1–10 based on cumulative XP. */
export function getLevelFromXP(xp: number): number {
  let level = 0;
  for (const threshold of LEVEL_THRESHOLDS) {
    if (xp >= threshold) level++;
    else break;
  }
  return level;
}

/** XP required to have reached the current level. */
export function getCurrentLevelXP(xp: number): number {
  const level = getLevelFromXP(xp);
  return LEVEL_THRESHOLDS[level - 1];
}

/** XP required to reach the next level (capped at max). */
export function getNextLevelXP(xp: number): number {
  const level = getLevelFromXP(xp);
  if (level >= MAX_LEVEL) return LEVEL_THRESHOLDS[MAX_LEVEL - 1];
  return LEVEL_THRESHOLDS[level];
}

/** Progress through the current level as a 0–100 percentage. */
export function getLevelProgress(xp: number): number {
  if (getLevelFromXP(xp) >= MAX_LEVEL) return 100;
  const start = getCurrentLevelXP(xp);
  const end   = getNextLevelXP(xp);
  return Math.round(((xp - start) / (end - start)) * 100);
}
