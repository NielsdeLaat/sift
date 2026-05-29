import type { Question } from '@/data/questions';
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
    return all.filter(q => q.type === 'feed-test');
  }
  const regular = all.filter(q => q.type !== 'feed-test');
  return [...regular].sort(() => Math.random() - 0.5).slice(0, 3);
}
