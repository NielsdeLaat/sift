import type { QuestionType } from './questions';

export type NodeStatus = "completed" | "current" | "locked";
export type NodeIcon = "check" | "play" | "lock" | "flag" | "star" | string;

export interface LevelNode {
  id: string;
  status: NodeStatus;
  icon: NodeIcon;
  /** XP awarded on completion. 0 for checkpoint nodes. */
  xp: number;
  /** Tooltip text shown on the current node. */
  label?: string;
}

export interface SectionTypeConfig {
  type: QuestionType;
  /** Maximum difficulty unlocked for this type in this section (cumulative). */
  difficulty: number;
}

export interface Section {
  id: string;
  /** Short label used in the section divider between sections (e.g. "Section 1"). */
  title: string;
  /** Descriptive subtitle shown in the sticky section banner. */
  subtitle: string;
  /** One or two sentences describing what this section teaches, shown in the section info modal. */
  description: string;
  /** Short badge label rendered as a small circle at section start (e.g. "L"). */
  badge?: string;
  nodes: LevelNode[];
  /**
   * New or increased type-difficulty entries for this section.
   * getCumulativeTypeConfig() accumulates these across all sections up to the current one.
   */
  typeConfig: SectionTypeConfig[];
}

// ── Helper to generate lesson nodes ──────────────────────────────────────────
function lessonNodes(sectionNum: number, lessonCount: number, lessonXp: number, testXp: number): LevelNode[] {
  const nodes: LevelNode[] = Array.from({ length: lessonCount }, (_, i) => ({
    id: `s${sectionNum}-n${i + 1}`,
    status: 'locked' as NodeStatus,
    icon: 'play',
    xp: lessonXp,
  }));
  nodes.push({
    id: `s${sectionNum}-n${lessonCount + 1}`,
    status: 'locked',
    icon: 'flag',
    xp: testXp,
  });
  return nodes;
}

// ── Chapter 1: 12 sections ────────────────────────────────────────────────────
export const roadmap: Section[] = [
  {
    id: 'section-1',
    title: 'The Pause',
    subtitle: 'Stop before you share',
    description: 'Learn the most important fact-checking habit: pause before reacting. Practice spotting name tricks, judging real vs. AI images, and finding the weak link in a claim.',
    badge: '1',
    nodes: lessonNodes(1, 2, 100, 300),
    typeConfig: [
      { type: 'name-trick',    difficulty: 1 },
      { type: 'real-or-ai',   difficulty: 1 },
      { type: 'weak-link',    difficulty: 1 },
      { type: 'leave-the-page', difficulty: 1 },
    ],
  },
  {
    id: 'section-2',
    title: 'Tricks in Disguise',
    subtitle: 'Spot manipulation in plain sight',
    description: 'Go deeper on name tricks and the rhetorical tactics used to make false claims sound credible. You\'ll start to recognise common patterns across different types of misinformation.',
    badge: '2',
    nodes: lessonNodes(2, 2, 110, 320),
    typeConfig: [
      { type: 'name-trick', difficulty: 2 },
    ],
  },
  {
    id: 'section-3',
    title: 'Don\'t Cry Fake',
    subtitle: 'Not every altered image is AI',
    description: 'Sharpen your eye for AI-generated imagery while avoiding the trap of crying fake too quickly. Real images can be misleading; AI images can be subtle.',
    badge: '3',
    nodes: lessonNodes(3, 3, 110, 340),
    typeConfig: [
      { type: 'real-or-ai', difficulty: 2 },
    ],
  },
  {
    id: 'section-4',
    title: 'Leave the Page',
    subtitle: 'Don\'t trust a single source',
    description: 'Practise the habit of lateral reading — leaving the page to check what others say about a source or claim. A true story is easy to verify; a false one often isn\'t.',
    badge: '4',
    nodes: lessonNodes(4, 3, 120, 360),
    typeConfig: [
      { type: 'leave-the-page', difficulty: 2 },
    ],
  },
  {
    id: 'section-5',
    title: 'Check the Handle',
    subtitle: 'Who is really posting this?',
    description: 'Go further with lateral reading: investigate account authenticity by searching for the handle, profile picture, and domain. Not every account is who it claims to be.',
    badge: '5',
    nodes: lessonNodes(5, 4, 120, 380),
    typeConfig: [
      { type: 'leave-the-page', difficulty: 3 },
    ],
  },
  {
    id: 'section-6',
    title: 'Who Said That?',
    subtitle: 'Trace the claim to its source',
    description: 'Introduce the IMVAIN framework for evaluating sources. Learn to identify whether a quoted source — expert, eyewitness, or anonymous — is reliable enough to trust.',
    badge: '6',
    nodes: lessonNodes(6, 4, 130, 400),
    typeConfig: [
      { type: 'who-says', difficulty: 1 },
    ],
  },
  {
    id: 'section-7',
    title: 'Weigh the Source',
    subtitle: 'Some voices count more than others',
    description: 'Go deeper on source quality. Practise distinguishing primary sources from second-hand reports, and learn when to trust an official statement versus a viral screenshot.',
    badge: '7',
    nodes: lessonNodes(7, 5, 130, 430),
    typeConfig: [
      { type: 'who-says', difficulty: 2 },
    ],
  },
  {
    id: 'section-8',
    title: 'Under the Hood',
    subtitle: 'Inspect the metadata',
    description: 'Learn to read image metadata and reverse-search results to spot context manipulation. An old photo placed in a new crisis is one of the most common forms of visual misinformation.',
    badge: '8',
    nodes: lessonNodes(8, 5, 140, 450),
    typeConfig: [
      { type: 'under-the-hood', difficulty: 1 },
    ],
  },
  {
    id: 'section-9',
    title: 'When Was This?',
    subtitle: 'Time is part of the truth',
    description: 'Practise identifying when an image or story is from. Repurposed old content is a key misinformation tactic in fast-moving crises.',
    badge: '9',
    nodes: lessonNodes(9, 6, 140, 470),
    typeConfig: [
      { type: 'when-or-where', difficulty: 1 },
    ],
  },
  {
    id: 'section-10',
    title: 'Where Was This?',
    subtitle: 'Location matters as much as timing',
    description: 'Extend your verification skills to location. Photos and videos are often misattributed to a different place — learning to spot the signs protects you from geographic misinformation.',
    badge: '10',
    nodes: lessonNodes(10, 6, 150, 490),
    typeConfig: [
      { type: 'when-or-where', difficulty: 2 },
    ],
  },
  {
    id: 'section-11',
    title: 'Find the Weak Link',
    subtitle: 'Every claim has a breaking point',
    description: 'Master the full weak-link analysis: identify which pillar of a story fails under scrutiny and reach a confident verdict. This is the core fact-checker\'s move.',
    badge: '11',
    nodes: lessonNodes(11, 7, 150, 500),
    typeConfig: [
      { type: 'weak-link', difficulty: 2 },
    ],
  },
  {
    id: 'section-12',
    title: 'The Full Feed',
    subtitle: 'Everything at once',
    description: 'Apply every skill you\'ve built across all question types at higher difficulty. The final section mirrors the real information environment: fast, mixed, and designed to mislead.',
    badge: '12',
    nodes: lessonNodes(12, 7, 160, 600),
    typeConfig: [
      { type: 'name-trick',     difficulty: 3 },
      { type: 'real-or-ai',    difficulty: 3 },
      { type: 'weak-link',     difficulty: 3 },
      { type: 'leave-the-page', difficulty: 4 },
      { type: 'who-says',      difficulty: 3 },
      { type: 'under-the-hood', difficulty: 2 },
      { type: 'when-or-where', difficulty: 3 },
    ],
  },
];
