import type { UnderTheHoodQuestion } from '../../questions';

export const underTheHoodQuestions: UnderTheHoodQuestion[] = [
  {
    id: 'uth-d1-1',
    type: 'under-the-hood',
    xp: 70,
    difficulty: 1,
    imageUrl: 'https://picsum.photos/seed/uth-d1-1/800/450',
    claim: 'LIVE on the A28: tractors are blocking the motorway right now! 🚜🚜 #farmersprotest',
    items: [
      { label: 'File type', value: 'JPEG' },
      { label: 'Camera model', value: 'iPhone 14 Pro' },
      { label: 'Date & time taken', value: '[NOT FOUND — metadata stripped]' },
      { label: 'GPS location', value: '[NOT FOUND]' },
      { label: 'Reverse image search', value: 'No prior appearances found' },
    ],
    correctFlagIndex: 2,
    explanation: 'Placeholder explanation for difficulty 1.',
  },
  {
    id: 'uth-d2-1',
    type: 'under-the-hood',
    xp: 80,
    difficulty: 2,
    imageUrl: 'https://picsum.photos/seed/uth-d2-1/800/450',
    claim: 'Eyewitness photo of the riots near the asylum centre, last night.',
    items: [
      { label: 'File type', value: 'JPEG' },
      { label: 'Camera model', value: 'Samsung Galaxy S23' },
      { label: 'Date taken', value: '2024-07-14 08:32:11' },
      { label: 'GPS location', value: '48.8566 N, 2.3522 E (Paris, France)' },
      { label: 'Editing software', value: 'Lightroom Mobile 8.1' },
      { label: 'Reverse image search', value: 'Image on 47 sites; earliest: Reuters, 2024-07-14' },
    ],
    correctFlagIndex: 5,
    explanation: 'Placeholder explanation for difficulty 2.',
  },
];
