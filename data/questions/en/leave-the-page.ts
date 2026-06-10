import type { LeaveThePageQuestion } from '../../questions';

export const leaveThePageQuestions: LeaveThePageQuestion[] = [
  {
    id: 'ltp-d1-1',
    type: 'leave-the-page',
    xp: 60,
    difficulty: 1,
    content: {
      type: 'article',
      sourceName: 'Placeholder News',
      domain: 'placeholder-news.com',
      imageUrl: 'https://picsum.photos/seed/ltp-d1-1/800/450',
      headline: 'Placeholder headline for leave-the-page question difficulty 1.',
      excerpt: 'Placeholder excerpt for leave-the-page article question difficulty 1.',
    },
    searchOptions: [
      'placeholder topic search A',
      'placeholder-news.com reliable',
      'placeholder topic search B',
      'placeholder topic search C',
    ],
    correctSearchIndex: 1,
    searchExplanation: 'Placeholder search explanation for difficulty 1.',
    cards: [
      {
        title: 'Placeholder result A',
        source: 'placeholder-news.com',
        snippet: 'Placeholder snippet A.',
      },
      {
        title: 'Placeholder result B — fact-check',
        source: 'factcheck.org',
        snippet: 'Placeholder snippet B.',
      },
      {
        title: 'Placeholder result C',
        source: 'example.com',
        snippet: 'Placeholder snippet C.',
      },
      {
        title: 'Placeholder result D',
        source: 'social.com',
        snippet: 'Placeholder snippet D.',
      },
    ],
    correctCardIndex: 1,
    explanation: 'Placeholder explanation for difficulty 1.',
  },
];
