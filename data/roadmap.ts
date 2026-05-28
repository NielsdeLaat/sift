export type NodeStatus = 'completed' | 'current' | 'locked';
export type NodeIcon = 'check' | 'play' | 'lock' | 'flag' | 'star' | string;

export interface LevelNode {
  id: string;
  status: NodeStatus;
  icon: NodeIcon;
  /** XP awarded on completion. 0 for checkpoint nodes. */
  xp: number;
  /** Tooltip text shown on the current node. */
  label?: string;
}

export interface Section {
  id: string;
  /** Short label used in the section divider between sections (e.g. "Section 1"). */
  title: string;
  /** Descriptive subtitle shown in the sticky section banner. */
  subtitle: string;
  /** Short badge label rendered as a small circle at section start (e.g. "L"). */
  badge?: string;
  nodes: LevelNode[];
}

// ── Seed data matching the home-screen design ─────────────────────────────────
// To add more nodes or sections, edit ONLY this file.
// The roadmap path and page length update automatically.
export const roadmap: Section[] = [
  {
    id: 'section-1',
    title: 'Section 1',
    subtitle: 'The basic skills of fact-checking',
    badge: 'L',
    nodes: [
      { id: 's1-n1', status: 'completed', icon: 'check', xp: 100 },
      { id: 's1-n2', status: 'completed', icon: 'check', xp: 150 },
      { id: 's1-n3', status: 'current',   icon: 'play',  xp: 200, label: 'Start Next' },
      { id: 's1-n4', status: 'locked',    icon: 'lock',  xp: 200 },
      { id: 's1-n5', status: 'locked',    icon: 'flag',  xp: 0 },
    ],
  },
  {
    id: 'section-2',
    title: 'Section 2',
    subtitle: 'Identifying misleading sources',
    nodes: [
      { id: 's2-n1', status: 'locked', icon: 'lock', xp: 250 },
      { id: 's2-n2', status: 'locked', icon: 'lock', xp: 250 },
    ],
  },
];
