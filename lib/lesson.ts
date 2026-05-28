import type { Question } from '@/data/questions';

// ── SWAP POINT: replace this function body to change lesson composition ──────
export function getLessonQuestions(nodeId: string, all: Question[]): Question[] {
  void nodeId;
  return [...all].sort(() => Math.random() - 0.5).slice(0, 3);
}
