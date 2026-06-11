import type { WhenOrWhereQuestion } from '../../questions';
import { social } from '../helpers';

export const whenOrWhereQuestions: WhenOrWhereQuestion[] = [
  {
    id: 'wow-d1-1',
    type: 'when-or-where',
    xp: 60,
    difficulty: 1,
    subtype: 'when',
    content: social('wow-d1-1', {
      avatarUrl: 'https://api.dicebear.com/7.x/identicon/svg?seed=wow-en-1',
      sourceName: 'Local Observer',
      handle: '@local_observer',
      followerCount: '2.1K followers',
      text: 'Placeholder text for when-or-where question difficulty 1.',
      imageUrl: 'https://picsum.photos/seed/wow-d1-1/800/450',
    }),
    options: [
      'Last week (as claimed)',
      '2023 — an earlier event',
      '2019 — a different country',
      '2015 — a historical event',
    ],
    correctIndex: 3,
    explanation: 'Placeholder explanation for difficulty 1.',
  },
  {
    id: 'wow-d2-1',
    type: 'when-or-where',
    xp: 70,
    difficulty: 2,
    subtype: 'where',
    content: social('wow-d2-1', {
      avatarUrl: 'https://api.dicebear.com/7.x/identicon/svg?seed=wow-en-2',
      sourceName: 'News Alert',
      handle: '@news_alert',
      followerCount: '8.4K followers',
      text: 'Placeholder text for when-or-where question difficulty 2.',
      imageUrl: 'https://picsum.photos/seed/wow-d2-1/800/450',
    }),
    options: [
      'Location A (as claimed)',
      'Location B — a different place',
      'Location C — a different country',
      'Location D — a different region',
    ],
    correctIndex: 2,
    explanation: 'Placeholder explanation for difficulty 2.',
  },
  {
    id: 'wow-d3-1',
    type: 'when-or-where',
    xp: 80,
    difficulty: 3,
    subtype: 'where',
    content: social('wow-d3-1', {
      avatarUrl: 'https://api.dicebear.com/7.x/identicon/svg?seed=wow-en-3',
      sourceName: 'Breaking Now',
      handle: '@breaking_now',
      followerCount: '15.2K followers',
      text: 'Placeholder text for when-or-where question difficulty 3.',
      imageUrl: 'https://picsum.photos/seed/wow-d3-1/800/450',
    }),
    options: [
      'Location A (as claimed)',
      'Location B',
      'Location C',
      'Location D',
    ],
    correctIndex: 3,
    explanation: 'Placeholder explanation for difficulty 3.',
  },
];
