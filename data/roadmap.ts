import type { QuestionType } from "./questions";

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
  /** One sentence describing what this section teaches. */
  description: string;
  /** Longer explanation of the theory introduced in this section, shown in the section info modal. */
  theory: string;
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
function lessonNodes(
  sectionNum: number,
  lessonCount: number,
  lessonXp: number,
  testXp: number,
): LevelNode[] {
  const nodes: LevelNode[] = Array.from({ length: lessonCount }, (_, i) => ({
    id: `s${sectionNum}-n${i + 1}`,
    status: "locked" as NodeStatus,
    icon: "play",
    xp: lessonXp,
  }));
  nodes.push({
    id: `s${sectionNum}-n${lessonCount + 1}`,
    status: "locked",
    icon: "flag",
    xp: testXp,
  });
  return nodes;
}

// ── Chapter 1: 12 sections ────────────────────────────────────────────────────
export const roadmap: Section[] = [
  {
    id: "section-1",
    title: "Chapter 1, Section 1",
    subtitle: "Stop and think first",
    description: "Your first introduction to fact-checking — no jargon, just the core habit of pausing before you react.",
    theory:
      "Fact-checking starts with one habit: slow down before you share or react. Misinformation works by triggering fast emotions — surprise, anger, or agreement — before you can think clearly. In this section you'll practise the instinct of pausing to ask 'does this hold up?' You'll look at images, spot misleading framing, and find the weakest point in a claim — without needing any special tools yet.",
    badge: "1",
    nodes: lessonNodes(1, 2, 100, 300),
    typeConfig: [
      { type: "name-trick", difficulty: 1 },
      { type: "real-or-ai", difficulty: 1 },
      { type: "weak-link", difficulty: 1 },
      { type: "leave-the-page", difficulty: 1 },
    ],
  },
  {
    id: "section-2",
    title: "Chapter 1, Section 2",
    subtitle: "Build on what you know",
    description: "More practice on the same skills to build faster, more automatic instincts.",
    theory:
      "Good fact-checkers build habits, not just skills. The more you practise spotting something, the faster your brain flags it automatically. This section reinforces what you've already seen, so your instincts become more reliable before new skills are introduced. Think of it as training your default response — from 'share' to 'check'.",
    badge: "2",
    nodes: lessonNodes(2, 2, 110, 320),
    typeConfig: [],
  },
  {
    id: "section-3",
    title: "Chapter 1, Section 3",
    subtitle: "Learn the names for what you see",
    description: "Start naming the tactics used to mislead — once you can label a trick, it loses its power.",
    theory:
      "Misinformation often relies on specific rhetorical tricks to sound convincing. Once you can name a trick, it loses much of its power over you. Common examples: loaded language uses emotional words to steer your reaction; false equivalence compares two things as if they're equal when they aren't; cherry-picking highlights one true detail while hiding the bigger picture. Naming what you see is the first step to not being fooled by it.",
    badge: "3",
    nodes: lessonNodes(3, 3, 110, 340),
    typeConfig: [{ type: "name-trick", difficulty: 2 }],
  },
  {
    id: "section-4",
    title: "Chapter 1, Section 4",
    subtitle: "Spot what AI gets wrong",
    description: "Practise spotting AI-generated images by learning the specific mistakes AI keeps making.",
    theory:
      "AI image generators create images by predicting what pixels should look like — they don't actually understand what they're drawing. This leads to recurring mistakes: hands often have the wrong number of fingers, text appears garbled, backgrounds repeat unnaturally, and shadows or reflections don't line up. These tell-tale signs appear across different tools, so learning them once gives you a skill that applies broadly.",
    badge: "4",
    nodes: lessonNodes(4, 3, 120, 360),
    typeConfig: [{ type: "real-or-ai", difficulty: 2 }],
  },
  {
    id: "section-5",
    title: "Chapter 1, Section 5",
    subtitle: "Find the evidence in the text",
    description: "Learn to find — and notice the absence of — a source when reading any claim.",
    theory:
      "A claim without a source is just an opinion. When reading something, ask: who is making this claim, and what are they basing it on? A good source is named, relevant, and independent — not just 'experts say' or 'studies show'. Learning to spot when a source is missing — or when the source cited doesn't actually support the claim — is one of the most valuable habits you can build.",
    badge: "5",
    nodes: lessonNodes(5, 4, 120, 380),
    typeConfig: [{ type: "who-says", difficulty: 1 }],
  },
  {
    id: "section-6",
    title: "Chapter 1, Section 6",
    subtitle: "Search smarter, not harder",
    description: "Take verification further with smarter search techniques for checking claims beyond the page.",
    theory:
      "Lateral reading means leaving the page you're reading to check what other sources say about it. Instead of reading a source deeply and judging it from the inside, you open new tabs and search for independent assessments of it. Fact-checkers use this constantly — it's faster and more reliable than trying to evaluate a source on its own terms. The key is knowing what to search and how to interpret the results.",
    badge: "6",
    nodes: lessonNodes(6, 4, 130, 400),
    typeConfig: [{ type: "leave-the-page", difficulty: 2 }],
  },
  {
    id: "section-7",
    title: "Chapter 1, Section 7",
    subtitle: "Expand your deception vocabulary",
    description: "Expand your vocabulary of manipulation tactics to recognise more, faster.",
    theory:
      "The more names you have for manipulation tactics, the faster you can recognise and dismiss them. Beyond the basics: whataboutism deflects criticism by pointing elsewhere ('but what about X?'); a slippery slope claims one step inevitably leads to disaster without evidence; an appeal to authority uses a credible-sounding name as a substitute for real argument. Building this vocabulary makes you harder to deceive.",
    badge: "7",
    nodes: lessonNodes(7, 5, 130, 430),
    typeConfig: [{ type: "name-trick", difficulty: 3 }],
  },
  {
    id: "section-8",
    title: "Chapter 1, Section 8",
    subtitle: "Time and place tell the story",
    description: "Learn to check when and where a photo or story is actually from — context is part of the truth.",
    theory:
      "A photo or video is only meaningful in its original context — when and where it was taken matters as much as what it shows. One of the most common misinformation tactics is reusing old content in a new crisis: a photo from three years ago shared as if it happened today. Checking dates, locations, and original contexts of images is a core skill for anyone dealing with visual media.",
    badge: "8",
    nodes: lessonNodes(8, 5, 140, 450),
    typeConfig: [{ type: "when-or-where", difficulty: 1 }],
  },
  {
    id: "section-9",
    title: "Chapter 1, Section 9",
    subtitle: "Dig deeper into sources",
    description: "Go deeper on evaluating sources and the quality of evidence they actually provide.",
    theory:
      "Not all sources are equally trustworthy. A primary source has direct knowledge — an eyewitness, an official document, the person who conducted the research. A secondary source reports what the primary source said, introducing the risk of distortion. When evaluating a claim, ask: how many steps is this from the original event or data? The more steps, the more carefully it should be read.",
    badge: "9",
    nodes: lessonNodes(9, 6, 140, 470),
    typeConfig: [{ type: "who-says", difficulty: 2 }],
  },
  {
    id: "section-10",
    title: "Chapter 1, Section 10",
    subtitle: "What the image data reveals",
    description: "Start exploring what image files reveal beyond what you can see with your eyes.",
    theory:
      "Every digital image file contains more than just pixels. Metadata — also called EXIF data — is information saved automatically by cameras and devices: the date and time, GPS location, device type, and sometimes editing history. When an image has been manipulated or placed in a false context, the metadata can contradict the claim. Learning to read this data adds a layer of verification that goes beyond what's visible to the eye.",
    badge: "10",
    nodes: lessonNodes(10, 6, 150, 490),
    typeConfig: [{ type: "under-the-hood", difficulty: 1 }],
  },
  {
    id: "section-11",
    title: "Chapter 1, Section 11",
    subtitle: "Subtler signs of AI",
    description: "Train your eye for the subtler, harder-to-spot signs in more convincing AI-generated images.",
    theory:
      "AI image generation is improving fast, but certain failure patterns persist. Even realistic AI images struggle with fine details — stitching on fabric, fur texture, the inside of a mouth, the exact shape of an ear. Out-of-place lighting and overly smooth skin are also common giveaways. Knowing these subtler signs matters because the obvious errors — extra fingers, melting faces — are becoming rarer as the technology improves.",
    badge: "11",
    nodes: lessonNodes(11, 7, 150, 500),
    typeConfig: [{ type: "real-or-ai", difficulty: 3 }],
  },
  {
    id: "section-12",
    title: "Chapter 1, Section 12",
    subtitle: "The five pillars of a claim",
    description: "Learn the five-pillar framework for breaking down and stress-testing any claim.",
    theory:
      "Every claim rests on five pillars: who made it, what it actually says, when it was made, where it came from, and why it's being shared. A claim only holds up if all five are solid. The five-pillar check gives you a structured way to find the weakest point — if the 'who' is anonymous, the 'when' is outdated, or the 'why' suggests a clear agenda, that's where to focus your scrutiny. This framework works on any type of content.",
    badge: "12",
    nodes: lessonNodes(12, 7, 160, 600),
    typeConfig: [{ type: "weak-link", difficulty: 2 }],
  },
];
