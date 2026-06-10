import type { Section, NodeStatus } from '@/data/roadmap';
import type { Lang } from '@/lib/i18n';

const KEYS = {
  XP_BONUS:      'tt_xp_bonus',
  NODE_PROGRESS: 'tt_node_progress',
  LANG:          'tt_lang',
} as const;

function read(key: string, fallback: number): number {
  if (typeof window === 'undefined') return fallback;
  const v = localStorage.getItem(key);
  return v === null ? fallback : Number(v);
}

function write(key: string, value: number): void {
  localStorage.setItem(key, String(value));
}

export function getXpBonus(): number      { return read(KEYS.XP_BONUS, 0); }
export function getNodeProgress(): number { return read(KEYS.NODE_PROGRESS, 0); }

export function getLanguage(): Lang {
  if (typeof window === 'undefined') return 'nl';
  const v = localStorage.getItem(KEYS.LANG);
  return v === 'en' ? 'en' : 'nl';
}

export function setLanguage(lang: Lang): void {
  localStorage.setItem(KEYS.LANG, lang);
}

/** Call once when a lesson ends. Persists XP gain + advances the current node. */
export function completeLesson(xpEarned: number): void {
  write(KEYS.XP_BONUS,      getXpBonus() + xpEarned);
  write(KEYS.NODE_PROGRESS, getNodeProgress() + 1);
}

/** Wipes all session progress back to the seed state. */
export function resetProgress(): void {
  write(KEYS.XP_BONUS,      0);
  write(KEYS.NODE_PROGRESS, 0);
}

/** Jumps to a specific node index (for demo navigation). Clears XP. */
export function jumpToNode(n: number): void {
  write(KEYS.XP_BONUS,      0);
  write(KEYS.NODE_PROGRESS, n);
}

/**
 * Derives a live roadmap from the static seed + how many extra nodes have
 * been completed this session. Node icons and labels are updated accordingly.
 */
export function computeLiveRoadmap(sections: Section[], nodeProgress: number): Section[] {
  const flat = sections.flatMap(s => s.nodes);

  // Index of the first non-completed node in the seed data
  const seedCurrentIdx = flat.findIndex(n => n.status !== 'completed');

  // How far along the flat list the "current" node is now
  const currentIdx =
    seedCurrentIdx === -1
      ? flat.length                                    // all were already complete
      : Math.min(seedCurrentIdx + nodeProgress, flat.length);

  let i = 0;
  return sections.map(section => ({
    ...section,
    nodes: section.nodes.map(node => {
      const idx   = i++;
      const isFlag = node.icon === 'flag';

      let status: NodeStatus;
      let icon: string;
      let label: string | undefined;

      if (idx < currentIdx) {
        status = 'completed';
        icon   = isFlag ? 'flag' : 'check';
        label  = undefined;
      } else if (idx === currentIdx) {
        status = 'current';
        icon   = isFlag ? 'flag' : 'play';
        label  = node.label ?? 'Start';
      } else {
        status = 'locked';
        icon   = isFlag ? 'flag' : 'lock';
        label  = undefined;
      }

      return { ...node, status, icon, label };
    }),
  }));
}
