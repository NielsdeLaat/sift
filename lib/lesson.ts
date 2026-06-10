import type { Question, QuestionType, FeedTestQuestion } from '@/data/questions';
import { roadmap } from '@/data/roadmap';

export const LESSON_SIZE = 5;
export const TEST_SIZE   = 8;

function sectionIndex(sectionId: string): number {
  const idx = roadmap.findIndex(s => s.id === sectionId);
  return idx === -1 ? 0 : idx;
}

/**
 * Builds a cumulative map of QuestionType → max difficulty for all sections
 * up to and including `sectionId`. Each section's typeConfig entries override
 * the previous maximum for that type (only upward — difficulty never decreases).
 */
export function getCumulativeTypeConfig(sectionId: string): Map<QuestionType, number> {
  const currentIdx = sectionIndex(sectionId);
  const map = new Map<QuestionType, number>();
  for (let i = 0; i <= currentIdx; i++) {
    for (const { type, difficulty } of roadmap[i].typeConfig) {
      map.set(type, Math.max(map.get(type) ?? 0, difficulty));
    }
  }
  return map;
}

function pickWithConstraints(available: Question[], size: number): Question[] {
  const pool = [...available].sort(() => Math.random() - 0.5);
  const result: Question[] = [];
  const typeCounts = new Map<QuestionType, number>();
  let lastType: QuestionType | null = null;

  while (result.length < size && pool.length > 0) {
    const validIdx = pool.findIndex(
      q => q.type !== lastType && (typeCounts.get(q.type) ?? 0) < 2,
    );
    const idx = validIdx !== -1 ? validIdx : 0;
    const [picked] = pool.splice(idx, 1);
    result.push(picked);
    typeCounts.set(picked.type, (typeCounts.get(picked.type) ?? 0) + 1);
    lastType = picked.type;
  }

  return result;
}

export function getLessonQuestions(sectionId: string, isTest: boolean, all: Question[]): Question[] {
  if (isTest) {
    const pinned = all.filter(
      (q): q is FeedTestQuestion => q.type === 'feed-test' && q.sectionId === sectionId,
    );
    if (pinned.length > 0) return pinned;
    return all.filter(q => q.type === 'feed-test');
  }

  const typeConfig = getCumulativeTypeConfig(sectionId);
  const available = all.filter(q => {
    if (q.type === 'feed-test') return false;
    const maxDifficulty = typeConfig.get(q.type);
    return maxDifficulty !== undefined && q.difficulty <= maxDifficulty;
  });

  return pickWithConstraints(available, LESSON_SIZE);
}
