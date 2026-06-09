import type { FeedTestQuestion } from '../../questions';

function makePosts(id: string) {
  return [
    {
      id: `${id}-p1`,
      source: 'Placeholder Source',
      timeAgo: '2 hours ago',
      headline: 'Placeholder headline — this post is true.',
      imageUrl: `https://picsum.photos/seed/${id}-p1/400/300`,
      body: 'Placeholder body text for a true post.',
      correctVerdict: 'true' as const,
      explanation: 'Placeholder explanation — this post is true.',
    },
    {
      id: `${id}-p2`,
      source: '@PlaceholderAccount',
      timeAgo: '1 hour ago',
      headline: 'Placeholder headline — this post is false.',
      imageUrl: `https://picsum.photos/seed/${id}-p2/400/300`,
      body: 'Placeholder body text for a false post.',
      correctVerdict: 'false' as const,
      explanation: 'Placeholder explanation — this post is false.',
    },
    {
      id: `${id}-p3`,
      source: 'Placeholder Paper',
      timeAgo: '3 hours ago',
      headline: 'Placeholder headline — this post is misleading.',
      imageUrl: `https://picsum.photos/seed/${id}-p3/400/300`,
      body: 'Placeholder body text for a misleading post.',
      correctVerdict: 'misleading' as const,
      explanation: 'Placeholder explanation — this post is misleading.',
    },
  ];
}

export const feedTestQuestions: FeedTestQuestion[] = [
  { id: 'ft-1',  type: 'feed-test', xp: 250, difficulty: 1, sectionId: 'section-1',  posts: makePosts('ft-1')  },
  { id: 'ft-2',  type: 'feed-test', xp: 250, difficulty: 1, sectionId: 'section-2',  posts: makePosts('ft-2')  },
  { id: 'ft-3',  type: 'feed-test', xp: 250, difficulty: 1, sectionId: 'section-3',  posts: makePosts('ft-3')  },
  { id: 'ft-4',  type: 'feed-test', xp: 250, difficulty: 1, sectionId: 'section-4',  posts: makePosts('ft-4')  },
  { id: 'ft-5',  type: 'feed-test', xp: 250, difficulty: 1, sectionId: 'section-5',  posts: makePosts('ft-5')  },
  { id: 'ft-6',  type: 'feed-test', xp: 250, difficulty: 1, sectionId: 'section-6',  posts: makePosts('ft-6')  },
  { id: 'ft-7',  type: 'feed-test', xp: 250, difficulty: 1, sectionId: 'section-7',  posts: makePosts('ft-7')  },
  { id: 'ft-8',  type: 'feed-test', xp: 250, difficulty: 1, sectionId: 'section-8',  posts: makePosts('ft-8')  },
  { id: 'ft-9',  type: 'feed-test', xp: 250, difficulty: 1, sectionId: 'section-9',  posts: makePosts('ft-9')  },
  { id: 'ft-10', type: 'feed-test', xp: 250, difficulty: 1, sectionId: 'section-10', posts: makePosts('ft-10') },
  { id: 'ft-11', type: 'feed-test', xp: 250, difficulty: 1, sectionId: 'section-11', posts: makePosts('ft-11') },
  { id: 'ft-12', type: 'feed-test', xp: 500, difficulty: 1, sectionId: 'section-12', posts: makePosts('ft-12') },
];
