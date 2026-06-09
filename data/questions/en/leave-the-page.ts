import type { LeaveThePageQuestion } from '../../questions';

export const leaveThePageQuestions: LeaveThePageQuestion[] = [
  {
    id: 'ltp-d1-1',
    type: 'leave-the-page',
    xp: 60,
    difficulty: 1,
    scenario: 'Placeholder scenario for leave-the-page question difficulty 1.',
    cards: [
      { title: 'Reliable result', source: 'reliablesource.org', snippet: 'Placeholder — this result directly answers the question.' },
      { title: 'Unreliable result', source: 'suspiciousnews.net', snippet: 'Placeholder — this result is not trustworthy.' },
      { title: 'Irrelevant result', source: 'wikipedia.org', snippet: 'Placeholder — this result is not relevant.' },
      { title: 'Partial result', source: 'newspaper.com', snippet: 'Placeholder — this result does not give a definitive answer.' },
    ],
    correctCardIndex: 0,
    explanation: 'Placeholder explanation for difficulty 1.',
  },
  {
    id: 'ltp-d2-1',
    type: 'leave-the-page',
    xp: 70,
    difficulty: 2,
    scenario: 'Placeholder scenario for leave-the-page question difficulty 2.',
    cards: [
      { title: 'Independent research', source: 'researchinstitute.org', snippet: 'Placeholder — this independent research answers the question.' },
      { title: 'Biased result', source: 'lobbied.org', snippet: 'Placeholder — this source has a financial interest.' },
      { title: 'Official source', source: 'government.gov', snippet: 'Placeholder — this is the official government site.' },
      { title: 'Background info', source: 'healthinfo.org', snippet: 'Placeholder — this provides background but no answer.' },
    ],
    correctCardIndex: 0,
    explanation: 'Placeholder explanation for difficulty 2.',
  },
  {
    id: 'ltp-d3-1',
    type: 'leave-the-page',
    xp: 80,
    difficulty: 3,
    scenario: 'Placeholder scenario for leave-the-page question difficulty 3.',
    cards: [
      { title: 'Definitive evidence', source: 'verified.org', snippet: 'Placeholder — this result gives the most direct answer.' },
      { title: 'Misleading source', source: 'fakenews.net', snippet: 'Placeholder — this source is not reliable.' },
      { title: 'Own website', source: 'organisation.org', snippet: 'Placeholder — the own website is not independent.' },
      { title: 'Press release', source: 'news.com', snippet: 'Placeholder — a press release does not give a definitive answer.' },
    ],
    correctCardIndex: 0,
    explanation: 'Placeholder explanation for difficulty 3.',
  },
];
