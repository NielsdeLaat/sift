import type { WhoSaysQuestion } from '../../questions';
import { article } from '../helpers';

export const whoSaysQuestions: WhoSaysQuestion[] = [
  {
    id: 'ws-d1-1',
    type: 'who-says',
    xp: 60,
    difficulty: 1,
    content: article('ws-d1-1', {
      sourceName: 'Health Today',
      domain: 'healthtoday.com',
      headline: 'Daily coffee linked to 20% lower Alzheimer\'s risk, study finds',
      publishedAt: 'May 14, 2024',
      excerpt: 'New research examines the long-term relationship between caffeine intake and cognitive health.',
    }),
    sections: [
      'Researchers at Harvard Medical School published a study in The Lancet tracking 50,000 people over ten years, examining their coffee consumption and cognitive decline.',
      'Participants who drank two to three cups of coffee per day had on average 20% lower risk of Alzheimer\'s disease compared to non-coffee drinkers.',
      'A spokesperson for a major coffee brand said they were pleased with the findings and hoped to fund further research.',
    ],
    correctSectionIndex: 0,
    explanation: 'The first paragraph names the source: Harvard Medical School researchers, published in The Lancet — a peer-reviewed journal. The coffee brand spokesperson has a financial interest and is not an independent source.',
  },
  {
    id: 'ws-d2-1',
    type: 'who-says',
    xp: 70,
    difficulty: 2,
    content: article('ws-d2-1', {
      sourceName: 'EconomyWatch',
      domain: 'economywatch.com',
      headline: 'Report: cheap Chinese solar panels threaten domestic manufacturing jobs',
      publishedAt: 'June 3, 2024',
      excerpt: 'European producers say competitive pressure from Chinese suppliers is intensifying across the green energy market.',
    }),
    sections: [
      'A new report concludes that cheap solar panel imports from China are severely damaging domestic manufacturing and threatening thousands of jobs.',
      'The report was produced by the National Manufacturers Association (NMA), the industry body that represents domestic solar panel producers.',
      'Researchers at MIT acknowledged concerns about fair competition in a separate statement, though they called the report\'s methodology "too limited".',
      'The European Commission said it had received the report and is considering import tariffs.',
    ],
    correctSectionIndex: 1,
    explanation: 'The second paragraph reveals who wrote the report: the NMA, the trade body for the same manufacturers who benefit from the conclusion. That\'s a direct conflict of interest — the source is not independent.',
  },
  {
    id: 'ws-d3-1',
    type: 'who-says',
    xp: 80,
    difficulty: 3,
    content: article('ws-d3-1', {
      sourceName: 'FamilyHealth Blog',
      domain: 'familyhealthblog.com',
      headline: 'Sugar — not genes — is the real cause of ADHD in children',
      publishedAt: 'March 22, 2024',
      excerpt: 'Dietary advice for children with behavioural problems is sparking debate among parents and educators.',
    }),
    sections: [
      'Studies show that sugar is the true cause of ADHD in children, and that genetic factors play a much smaller role than previously thought.',
      'Children who eat less sugar behave noticeably calmer and perform better in school.',
      'Experts recommend parents remove sugar entirely from young children\'s diets as a first step when dealing with behavioural problems.',
    ],
    correctSectionIndex: null,
    explanation: 'No paragraph names a specific study, institution, researcher, or publication. "Studies show" and "experts recommend" are empty phrases with no reference — there is simply no source. When a claim has no identifiable origin, "No source here" is the correct answer.',
  },
];
