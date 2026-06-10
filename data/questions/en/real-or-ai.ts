import type { RealOrAiQuestion } from '../../questions';

export const realOrAiQuestions: RealOrAiQuestion[] = [
  {
    id: 'rai-d1-1',
    type: 'real-or-ai',
    xp: 50,
    difficulty: 1,
    imageUrl: 'https://picsum.photos/seed/rai-d1-1/800/450',
    correctAnswer: 'ai',
    tell: {
      top: 55,
      left: 20,
      width: 30,
      height: 25,
    },
    explanation: 'Placeholder explanation — this is an AI image (difficulty 1).',
  },
  {
    id: 'rai-d2-1',
    type: 'real-or-ai',
    xp: 60,
    difficulty: 2,
    imageUrl: 'https://picsum.photos/seed/rai-d2-1/800/450',
    correctAnswer: 'real',
    explanation: 'Placeholder explanation — this is a real image (difficulty 2).',
  },
  {
    id: 'rai-d3-1',
    type: 'real-or-ai',
    xp: 80,
    difficulty: 3,
    imageUrl: 'https://picsum.photos/seed/rai-d3-1/800/450',
    correctAnswer: 'real',
    explanation: 'Placeholder explanation — this is a real image (difficulty 3).',
  },
];
