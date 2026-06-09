export type QuestionType =
  | "name-trick"
  | "real-or-ai"
  | "leave-the-page"
  | "who-says"
  | "under-the-hood"
  | "when-or-where"
  | "weak-link"
  | "feed-test";

export interface TellRegion {
  top: number;
  left: number;
  width: number;
  height: number;
  explanation: string;
}

export interface SocialPost {
  type: "social";
  avatarUrl: string;
  sourceName: string;
  handle: string;
  followerCount: string;
  text: string;
  imageUrl?: string;
}

export interface ArticlePost {
  type: "article";
  sourceName: string;
  domain?: string;
  sourceLogoUrl?: string;
  headline: string;
  byline?: string;
  publishedAt?: string;
  excerpt: string;
  imageUrl?: string;
}

/** A social-media post or a news article — used as the stimulus in question types that show content. */
export type ContentItem = SocialPost | ArticlePost;

export interface SearchResultCard {
  title: string;
  source: string;
  snippet: string;
}

export interface EvidenceItem {
  label: string;
  value: string;
}

export type WeakPillar = "who" | "what" | "when" | "where" | "why";


interface BaseQuestion {
  id: string;
  type: QuestionType;
  xp: number;
  /** 1 = easiest; higher = harder. Sections gate questions by this value. */
  difficulty: number;
  /** Override the default question prompt shown above the answer controls. */
  question?: string;
}

export interface NameTrickQuestion extends BaseQuestion {
  type: "name-trick";
  content: ContentItem;
  options: [string, string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3 | 4;
  explanation: string;
}

export interface RealOrAiQuestion extends BaseQuestion {
  type: "real-or-ai";
  imageUrl: string;
  correctAnswer: "real" | "ai";
  /** Optional interactive tell shown via TellReveal after a correct AI identification. */
  tell?: TellRegion;
  explanation: string;
}

export interface LeaveThePageQuestion extends BaseQuestion {
  type: "leave-the-page";
  scenario: string;
  cards: SearchResultCard[];
  correctCardIndex: number;
  explanation: string;
}

export interface WhoSaysQuestion extends BaseQuestion {
  type: "who-says";
  excerpt: string;
  highlightedSource: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface UnderTheHoodQuestion extends BaseQuestion {
  type: "under-the-hood";
  imageUrl: string;
  /** All tappable evidence items (metadata rows + reverse-search result). */
  items: EvidenceItem[];
  correctFlagIndex: number;
  explanation: string;
}

export interface WhenOrWhereQuestion extends BaseQuestion {
  type: "when-or-where";
  subtype: "when" | "where";
  imageUrl?: string;
  text?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface WeakLinkQuestion extends BaseQuestion {
  type: "weak-link";
  content: ContentItem;
  correctPillar: WeakPillar;
  /** Shown in the FeedbackBanner after the round. */
  explanation: string;
}

export type FeedVerdict = "true" | "false" | "misleading";

export interface FeedPost {
  id: string;
  source: string;
  timeAgo: string;
  headline: string;
  imageUrl: string;
  body: string;
  correctVerdict: FeedVerdict;
  explanation: string;
}

export interface FeedTestQuestion extends BaseQuestion {
  type: "feed-test";
  /** When set, this question is only served to this specific roadmap section's test. */
  sectionId?: string;
  posts: FeedPost[];
}

export type Question =
  | NameTrickQuestion
  | RealOrAiQuestion
  | LeaveThePageQuestion
  | WhoSaysQuestion
  | UnderTheHoodQuestion
  | WhenOrWhereQuestion
  | WeakLinkQuestion
  | FeedTestQuestion;

// ── Question data (split by type for maintainability) ─────────────────────────
import { nameTrickQuestions }    from './questions/name-trick';
import { realOrAiQuestions }     from './questions/real-or-ai';
import { leaveThePageQuestions } from './questions/leave-the-page';
import { whoSaysQuestions }      from './questions/who-says';
import { underTheHoodQuestions } from './questions/under-the-hood';
import { whenOrWhereQuestions }  from './questions/when-or-where';
import { weakLinkQuestions }     from './questions/weak-link';
import { feedTestQuestions }     from './questions/feed-test';

export const questions: Question[] = [
  ...nameTrickQuestions,
  ...realOrAiQuestions,
  ...leaveThePageQuestions,
  ...whoSaysQuestions,
  ...underTheHoodQuestions,
  ...whenOrWhereQuestions,
  ...weakLinkQuestions,
  ...feedTestQuestions,
];
