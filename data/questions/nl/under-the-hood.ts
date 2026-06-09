import type { UnderTheHoodQuestion } from '../../questions';

export const underTheHoodQuestions: UnderTheHoodQuestion[] = [
  {
    id: 'uth-d1-1',
    type: 'under-the-hood',
    xp: 70,
    difficulty: 1,
    imageUrl: 'https://picsum.photos/seed/uth-d1-1/800/450',
    items: [
      { label: 'Bestandstype', value: 'JPEG' },
      { label: 'Cameramodel', value: 'iPhone 14 Pro' },
      { label: 'Datum en tijd', value: '[NIET GEVONDEN - metadata verwijderd]' },
      { label: 'GPS-locatie', value: '[NIET GEVONDEN]' },
      { label: 'Omgekeerd zoeken', value: 'Geen eerdere afbeeldingen gevonden' },
    ],
    correctFlagIndex: 2,
    explanation: 'Placeholder uitleg voor moeilijkheid 1.',
  },
  {
    id: 'uth-d2-1',
    type: 'under-the-hood',
    xp: 80,
    difficulty: 2,
    imageUrl: 'https://picsum.photos/seed/uth-d2-1/800/450',
    items: [
      { label: 'Bestandstype', value: 'JPEG' },
      { label: 'Cameramodel', value: 'Samsung Galaxy S23' },
      { label: 'Datum genomen', value: '2024-07-14 08:32:11' },
      { label: 'GPS-locatie', value: '48.8566 N, 2.3522 E (Parijs, Frankrijk)' },
      { label: 'Bewerkingssoftware', value: 'Lightroom Mobile 8.1' },
      { label: 'Omgekeerd zoeken', value: 'Afbeelding op 47 sites; vroegste: Reuters, 2024-07-14' },
    ],
    correctFlagIndex: 5,
    explanation: 'Placeholder uitleg voor moeilijkheid 2.',
  },
];
