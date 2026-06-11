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
}

export interface SocialPost {
  type: "social";
  avatarUrl: string;
  sourceName: string;
  handle: string;
  followerCount: string;
  publishedAt?: string;
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

export function isCorrect<T>(selected: T, correct: T | T[]): boolean {
  return Array.isArray(correct) ? correct.includes(selected) : selected === correct;
}

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
  options: [string, string, string, string, ...string[]];
  correctIndex: number | number[];
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
  content: ContentItem;
  searchOptions: [string, string, string, string, ...string[]];
  correctSearchIndex: number | number[];
  searchExplanation: string;
  cards: SearchResultCard[];
  correctCardIndex: number | number[];
  explanation: string;
}

export interface WhoSaysQuestion extends BaseQuestion {
  type: "who-says";
  content: ContentItem;
  sections: string[];
  correctSectionIndex: number | null;
  explanation: string;
}

export interface UnderTheHoodQuestion extends BaseQuestion {
  type: "under-the-hood";
  content: ContentItem;
  /** All tappable evidence items (metadata rows + reverse-search result). */
  items: EvidenceItem[];
  correctFlagIndex: number | number[];
  explanation: string;
}

export interface WhenOrWhereQuestion extends BaseQuestion {
  type: "when-or-where";
  subtype: "when" | "where";
  content?: ContentItem;
  options: string[];
  correctIndex: number | number[];
  explanation: string;
}

export interface WeakLinkQuestion extends BaseQuestion {
  type: "weak-link";
  content: ContentItem;
  correctPillar: WeakPillar | WeakPillar[];
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

