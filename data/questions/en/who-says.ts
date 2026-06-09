import type { WhoSaysQuestion } from '../../questions';

export const whoSaysQuestions: WhoSaysQuestion[] = [
  {
    id: 'ws-d1-1',
    type: 'who-says',
    xp: 60,
    difficulty: 1,
    excerpt: 'Placeholder quote for who-says question difficulty 1.',
    highlightedSource: 'An unknown source',
    options: [
      'Independent scientist',
      'Lobbied think tank',
      'Government agency',
      'Affiliated organisation',
    ],
    correctIndex: 0,
    explanation: 'Placeholder explanation for difficulty 1.',
  },
  {
    id: 'ws-d2-1',
    type: 'who-says',
    xp: 70,
    difficulty: 2,
    excerpt: 'Placeholder quote for who-says question difficulty 2.',
    highlightedSource: 'A suspicious source',
    options: [
      'Peer-reviewed researcher',
      'Industry PR agency',
      'Independent journalist',
      'Academic institution',
    ],
    correctIndex: 1,
    explanation: 'Placeholder explanation for difficulty 2.',
  },
  {
    id: 'ws-d3-1',
    type: 'who-says',
    xp: 80,
    difficulty: 3,
    excerpt: 'Placeholder quote for who-says question difficulty 3.',
    highlightedSource: 'A misleading source',
    options: [
      'Independent lab',
      'Industry association with interests',
      'University researcher',
      'Government commission',
    ],
    correctIndex: 1,
    explanation: 'Placeholder explanation for difficulty 3.',
  },
];
