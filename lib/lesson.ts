import type { Question, FeedTestQuestion } from '@/data/questions';
import { roadmap } from '@/data/roadmap';

function isFlagNode(nodeId: string): boolean {
  for (const section of roadmap) {
    const node = section.nodes.find(n => n.id === nodeId);
    if (node) return node.icon === 'flag';
  }
  return false;
}

export function getLessonQuestions(nodeId: string, all: Question[]): Question[] {
  if (isFlagNode(nodeId)) {
    // Prefer questions pinned to this exact node; fall back to any feed-test.
    const pinned = all.filter(
      (q): q is FeedTestQuestion => q.type === 'feed-test' && (q as FeedTestQuestion).nodeId === nodeId,
    );
    if (pinned.length > 0) return pinned;
    return all.filter(q => q.type === 'feed-test');
  }
  const regular = all.filter(q => q.type !== 'feed-test');
  return [...regular].sort(() => Math.random() - 0.5).slice(0, 3);
}
