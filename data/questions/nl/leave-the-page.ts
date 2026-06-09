import type { LeaveThePageQuestion } from '../../questions';

export const leaveThePageQuestions: LeaveThePageQuestion[] = [
  {
    id: 'ltp-d1-1',
    type: 'leave-the-page',
    xp: 60,
    difficulty: 1,
    scenario: 'Placeholder scenario voor verlaat-de-pagina vraag moeilijkheid 1.',
    cards: [
      { title: 'Betrouwbaar resultaat', source: 'betrouwbarebron.nl', snippet: 'Placeholder — dit resultaat beantwoordt de vraag direct.' },
      { title: 'Onbetrouwbaar resultaat', source: 'verdachtenieuws.nl', snippet: 'Placeholder — dit resultaat is niet betrouwbaar.' },
      { title: 'Irrelevant resultaat', source: 'wikipedia.org', snippet: 'Placeholder — dit resultaat is niet relevant.' },
      { title: 'Gedeeltelijk resultaat', source: 'krant.nl', snippet: 'Placeholder — dit resultaat geeft geen definitief antwoord.' },
    ],
    correctCardIndex: 0,
    explanation: 'Placeholder uitleg voor moeilijkheid 1.',
  },
  {
    id: 'ltp-d2-1',
    type: 'leave-the-page',
    xp: 70,
    difficulty: 2,
    scenario: 'Placeholder scenario voor verlaat-de-pagina vraag moeilijkheid 2.',
    cards: [
      { title: 'Onafhankelijk onderzoek', source: 'onderzoeksinstituut.nl', snippet: 'Placeholder — dit onafhankelijke onderzoek beantwoordt de vraag.' },
      { title: 'Partijdig resultaat', source: 'gelobbyd.nl', snippet: 'Placeholder — deze bron heeft een financieel belang.' },
      { title: 'Officiële bron', source: 'overheid.nl', snippet: 'Placeholder — dit is de officiële overheidssite.' },
      { title: 'Achtergrondinfo', source: 'gezondheidsinfo.nl', snippet: 'Placeholder — dit biedt achtergrond maar geen antwoord.' },
    ],
    correctCardIndex: 0,
    explanation: 'Placeholder uitleg voor moeilijkheid 2.',
  },
  {
    id: 'ltp-d3-1',
    type: 'leave-the-page',
    xp: 80,
    difficulty: 3,
    scenario: 'Placeholder scenario voor verlaat-de-pagina vraag moeilijkheid 3.',
    cards: [
      { title: 'Definitief bewijs', source: 'geverifieerd.nl', snippet: 'Placeholder — dit resultaat geeft het meest directe antwoord.' },
      { title: 'Misleidende bron', source: 'nepnieuws.nl', snippet: 'Placeholder — deze bron is niet betrouwbaar.' },
      { title: 'Eigen website', source: 'organisatie.nl', snippet: 'Placeholder — de eigen website is niet onafhankelijk.' },
      { title: 'Persbericht', source: 'nieuws.nl', snippet: 'Placeholder — een persbericht geeft geen definitief antwoord.' },
    ],
    correctCardIndex: 0,
    explanation: 'Placeholder uitleg voor moeilijkheid 3.',
  },
];
