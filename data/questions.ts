export type QuestionType =
  | 'collaboration'
  | 'manipulation-tactics'
  | 'evidence-checking'
  | 'ai-detection'
  | 'source-investigation'
  | 'image-verification';

export interface TellRegion {
  top: number;
  left: number;
  width: number;
  height: number;
  explanation: string;
}

export interface ArticleCard {
  imageUrl: string;
  sourceTag: string;
  headline: string;
  body: string;
}

export interface SocialPost {
  avatarUrl: string;
  sourceName: string;
  handle: string;
  followerCount: string;
  postText: string;
  postImageUrl?: string;
}

interface BaseQuestion {
  id: string;
  type: QuestionType;
  xp: number;
}

export interface CollaborationQuestion extends BaseQuestion {
  type: 'collaboration';
  article: ArticleCard;
  correctAnswer: 'yes' | 'no';
  explanation: string;
}

export interface ManipulationTacticsQuestion extends BaseQuestion {
  type: 'manipulation-tactics';
  article: ArticleCard;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
}

export interface EvidenceCheckingQuestion extends BaseQuestion {
  type: 'evidence-checking';
  article: ArticleCard;
  snippets: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
}

export interface AiDetectionQuestion extends BaseQuestion {
  type: 'ai-detection';
  imageUrl: string;
  correctAnswer: 'yes' | 'no';
  tell: TellRegion;
}

export interface SourceInvestigationQuestion extends BaseQuestion {
  type: 'source-investigation';
  post: SocialPost;
  correctAnswer: 'yes' | 'no';
  explanation: string;
}

export interface ImageVerificationQuestion extends BaseQuestion {
  type: 'image-verification';
  headline: string;
  imageUrl: string;
  correctAnswer: 'yes' | 'no';
  tell: TellRegion;
}

export type Question =
  | CollaborationQuestion
  | ManipulationTacticsQuestion
  | EvidenceCheckingQuestion
  | AiDetectionQuestion
  | SourceInvestigationQuestion
  | ImageVerificationQuestion;

export const questions: Question[] = [
  {
    id: 'q1',
    type: 'collaboration',
    xp: 50,
    article: {
      imageUrl: 'https://picsum.photos/seed/collaboration/800/450',
      sourceTag: 'Environment',
      headline: 'Running in San Francisco is strengthening the reef!',
      body: 'Deep-sea explorers have recently uncovered what appears to be a sprawling, ancient metropolitan complex hidden beneath the Pacific Ocean floor. Utilising advanced sonar mapping and autonomous drones, the team identified distinct geometric structures that defy natural geological formation. Initial analysis suggests the ruins could predate known civilisations, sparking intense debate among historians and marine archaeologists alike.',
    },
    correctAnswer: 'no',
    explanation: 'The headline links running with reef health — these are unrelated topics. The article describes underwater ruins, not running or reefs. Classic clickbait mismatch.',
  },
  {
    id: 'q2',
    type: 'manipulation-tactics',
    xp: 60,
    article: {
      imageUrl: 'https://picsum.photos/seed/manipulation-tactics/800/450',
      sourceTag: 'Health & Wellness',
      headline: 'Scientists FINALLY admit: lemon water reverses ageing!',
      body: 'A small pilot study of 12 participants found that drinking lemon water daily for a week "showed no negative effects." The researchers, employed by a citrus beverage company, noted participants "felt more refreshed." No peer review has taken place. Previous studies involving thousands of participants found no anti-ageing effect from lemon water.',
    },
    options: [
      'Uses emotional language and exaggeration',
      'Presents a balanced summary of research',
      'Omits contradictory large-scale studies',
      'Incorrectly attributes quotes',
    ],
    correctIndex: 2,
    explanation: 'The article buries the fact that large independent studies found no effect. Omitting contradictory evidence is a common bias technique that makes weak findings appear definitive.',
  },
  {
    id: 'q3',
    type: 'evidence-checking',
    xp: 60,
    article: {
      imageUrl: 'https://picsum.photos/seed/evidence-checking/800/450',
      sourceTag: 'Breaking News',
      headline: 'Paris hit by record 45 cm snowfall — traffic at standstill',
      body: 'Commuters in Paris faced severe disruptions on Tuesday after the city recorded 45 cm of snowfall overnight — the heaviest fall in over 130 years. Many drivers abandoned vehicles on major motorways. Weather experts described conditions as "exceptional." Local authorities urged residents to stay indoors. The Eiffel Tower was temporarily closed to visitors for safety reasons.',
    },
    snippets: [
      'the city recorded 45 cm of snowfall overnight — the heaviest fall in over 130 years',
      'Many drivers abandoned vehicles on major motorways',
      'Weather experts described conditions as "exceptional."',
      'The Eiffel Tower was temporarily closed to visitors for safety reasons',
    ],
    correctIndex: 0,
    explanation: 'Only the first snippet contains a specific, verifiable measurement (45 cm) that directly supports the "record snowfall" headline. The others describe effects, not evidence of the record itself.',
  },
  {
    id: 'q4',
    type: 'ai-detection',
    xp: 70,
    imageUrl: 'https://picsum.photos/seed/ai-detection/800/600',
    correctAnswer: 'yes',
    tell: {
      top: 54,
      left: 58,
      width: 20,
      height: 22,
      explanation: 'The left hand has six fingers — a common artefact in AI-generated images where the model struggles to render hands consistently.',
    },
  },
  {
    id: 'q5',
    type: 'source-investigation',
    xp: 50,
    post: {
      avatarUrl: 'https://picsum.photos/seed/source-investigation/80/80',
      sourceName: 'Global Tricks Network',
      handle: '@GlobalTricksNet',
      followerCount: '1.2K followers',
      postText: 'BREAKING: LEMON WATER reverses aging in 30 days! Top researchers have just confirmed that natural lemon healers have known for centuries. Drinking warm lemon water every morning directly resets your biological clock. #StayYoung #NaturalHealth #MiraCure',
      postImageUrl: 'https://picsum.photos/seed/source-investigation/400/300',
    },
    correctAnswer: 'no',
    explanation: 'The account has very few followers, uses all-caps clickbait language, cites no actual research or institutions, and promotes hashtags associated with misinformation campaigns.',
  },
  {
    id: 'q6',
    type: 'image-verification',
    xp: 70,
    headline: 'Huge snowfall in Paris — traffic struggling',
    imageUrl: 'https://picsum.photos/seed/image-verification/800/500',
    correctAnswer: 'no',
    tell: {
      top: 8,
      left: 4,
      width: 42,
      height: 18,
      explanation: 'The banners in this image are written in German, not French. This photograph was taken at a protest in Berlin, not at a Paris snowstorm.',
    },
  },
];
