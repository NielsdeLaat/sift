import type { Question, FeedTestQuestion } from '@/data/questions';
import { roadmap } from '@/data/roadmap';

function sectionIndex(sectionId: string): number {
  const idx = roadmap.findIndex(s => s.id === sectionId);
  return idx === -1 ? 0 : idx;
}

export function getLessonQuestions(sectionId: string, isTest: boolean, all: Question[]): Question[] {
  const currentIdx = sectionIndex(sectionId);
  const available  = all.filter(q => sectionIndex(q.introSection) <= currentIdx);

  if (isTest) {
    const pinned = available.filter(
      (q): q is FeedTestQuestion => q.type === 'feed-test' && q.sectionId === sectionId,
    );
    if (pinned.length > 0) return pinned;
    return available.filter(q => q.type === 'feed-test');
  }

  const regular = available.filter(q => q.type !== 'feed-test');
  return [...regular].sort(() => Math.random() - 0.5).slice(0, 3);
}
