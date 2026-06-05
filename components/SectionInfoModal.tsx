'use client';

import { useState } from 'react';
import type { Section } from '@/data/roadmap';
import { Icon } from '@/components/icons';

interface Props {
  sections: Section[];
  currentIdx: number;
  onClose: () => void;
}

type Tab = 'this' | 'all';

function getSectionStatus(section: Section): 'completed' | 'active' | 'locked' {
  const statuses = section.nodes.map(n => n.status);
  if (statuses.every(s => s === 'completed')) return 'completed';
  if (statuses.some(s => s === 'current')) return 'active';
  return 'locked';
}

function StatusBadge({ status }: { status: 'completed' | 'active' | 'locked' }) {
  if (status === 'completed') {
    return (
      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
        Done
      </span>
    );
  }
  if (status === 'active') {
    return (
      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
        Current
      </span>
    );
  }
  return (
    <span className="text-xs font-bold text-contrast-dark bg-neutral-border px-2 py-0.5 rounded-full">
      Locked
    </span>
  );
}

export function SectionInfoModal({ sections, currentIdx, onClose }: Props) {
  const [tab, setTab] = useState<Tab>('this');
  const current = sections[currentIdx];
  const totalXp = current.nodes.reduce((sum, n) => sum + n.xp, 0);

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-50 bg-black/50" onClick={onClose} />

      {/* Bottom sheet */}
      <div
        className="fixed bottom-16 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-50 bg-neutral-base rounded-t-3xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-5 pt-4 pb-3">
          <div className="flex-1 min-w-0 pr-3">
            <p className="text-primary text-xs font-bold uppercase tracking-wider leading-none mb-0.5">
              {current.title}
            </p>
            <p className="text-contrast font-bold text-lg leading-tight">{current.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-neutral-light flex items-center justify-center text-contrast-dark hover:bg-neutral-border transition-colors flex-shrink-0"
            aria-label="Close"
          >
            <Icon name="close" className="w-4 h-4" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mx-5 p-1 bg-neutral-light rounded-xl mb-4">
          {(['this', 'all'] as Tab[]).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={[
                'flex-1 py-2 rounded-lg text-sm font-semibold transition-colors',
                tab === t ? 'bg-neutral-base text-contrast shadow-sm' : 'text-contrast-dark hover:text-contrast',
              ].join(' ')}
            >
              {t === 'this' ? 'This Section' : 'All Sections'}
            </button>
          ))}
        </div>

        {/* Scrollable content */}
        <div className="px-5 pb-6 overflow-y-auto max-h-[60vh] space-y-3">
          {tab === 'this' ? (
            <>
              <p className="text-contrast-dark text-sm leading-relaxed">{current.description}</p>
              <div className="flex items-center gap-2 bg-neutral-light rounded-xl px-4 py-3">
                <Icon name="zap" className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-contrast font-semibold text-sm">{totalXp} XP available in this section</span>
              </div>
            </>
          ) : (
            <div className="space-y-3">
              {sections.map(section => {
                const status = getSectionStatus(section);
                const sectionXp = section.nodes.reduce((s, n) => s + n.xp, 0);
                const isActive = status === 'active';
                return (
                  <div
                    key={section.id}
                    className={[
                      'rounded-2xl p-4 border space-y-2',
                      isActive ? 'border-primary/40 bg-primary/5' : 'border-neutral-light bg-neutral-light',
                    ].join(' ')}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className={`text-xs font-bold uppercase tracking-wider ${isActive ? 'text-primary' : 'text-contrast-dark'}`}>
                        {section.title}
                      </p>
                      <StatusBadge status={status} />
                    </div>
                    <p className="text-contrast font-semibold text-sm leading-snug">{section.subtitle}</p>
                    <p className="text-contrast-dark text-xs leading-relaxed">{section.description}</p>
                    <div className="flex items-center gap-1.5 pt-0.5">
                      <Icon name="zap" className="w-3.5 h-3.5 text-accent" />
                      <span className="text-contrast-dark text-xs font-semibold">{sectionXp} XP</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
