import type { WhoSaysQuestion } from '../../questions';

export const whoSaysQuestions: WhoSaysQuestion[] = [
  {
    id: 'ws-d1-1',
    type: 'who-says',
    xp: 60,
    difficulty: 1,
    excerpt: 'Placeholder citaat voor wie-zegt-het vraag moeilijkheid 1.',
    highlightedSource: 'Een onbekende bron',
    options: [
      'Onafhankelijk wetenschapper',
      'Gelobbyste denktank',
      'Overheidsinstantie',
      'Gelieerde organisatie',
    ],
    correctIndex: 0,
    explanation: 'Placeholder uitleg voor moeilijkheid 1.',
  },
  {
    id: 'ws-d2-1',
    type: 'who-says',
    xp: 70,
    difficulty: 2,
    excerpt: 'Placeholder citaat voor wie-zegt-het vraag moeilijkheid 2.',
    highlightedSource: 'Een verdachte bron',
    options: [
      'Peer-reviewed onderzoeker',
      'PR-bureau van industrie',
      'Onafhankelijke journalist',
      'Academische instelling',
    ],
    correctIndex: 1,
    explanation: 'Placeholder uitleg voor moeilijkheid 2.',
  },
  {
    id: 'ws-d3-1',
    type: 'who-says',
    xp: 80,
    difficulty: 3,
    excerpt: 'Placeholder citaat voor wie-zegt-het vraag moeilijkheid 3.',
    highlightedSource: 'Een misleidende bron',
    options: [
      'Onafhankelijk lab',
      'Brancheorganisatie met belang',
      'Universiteitsonderzoeker',
      'Overheidscommissie',
    ],
    correctIndex: 1,
    explanation: 'Placeholder uitleg voor moeilijkheid 3.',
  },
];
