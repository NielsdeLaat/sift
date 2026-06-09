import type { WeakLinkQuestion } from '../../questions';

export const weakLinkQuestions: WeakLinkQuestion[] = [
  {
    id: 'wl-d1-1',
    type: 'weak-link',
    xp: 80,
    difficulty: 1,
    content: {
      type: 'social',
      avatarUrl: 'https://picsum.photos/seed/wl-d1-1/80/80',
      sourceName: 'Placeholder Account',
      handle: '@placeholder',
      followerCount: '10K followers',
      text: 'Placeholder post for weak-link question difficulty 1.',
    },
    correctPillar: 'when',
    explanation: 'Placeholder explanation for difficulty 1.',
  },
  {
    id: 'wl-d2-1',
    type: 'weak-link',
    xp: 120,
    difficulty: 2,
    content: {
      type: 'article',
      sourceName: 'Placeholder News',
      domain: 'placeholdernews.com',
      headline: 'Placeholder headline for weak-link question difficulty 2.',
      excerpt: 'Placeholder excerpt for weak-link article question difficulty 2.',
    },
    correctPillar: 'who',
    explanation: 'Placeholder explanation for difficulty 2.',
  },
];
