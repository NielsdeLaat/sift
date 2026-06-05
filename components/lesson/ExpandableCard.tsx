'use client';

import { useState, type ReactNode } from 'react';
import { Icon } from '@/components/icons';

const COLLAPSED_HEIGHT = 272;

export function ExpandableCard({ children }: { children: ReactNode }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* ── Collapsed preview ── */}
      <div className="relative rounded-2xl overflow-hidden" style={{ maxHeight: COLLAPSED_HEIGHT }}>
        {children}

        {/* Fade gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, var(--color-surface))' }}
        />

        {/* Expand button */}
        <button
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-neutral-base/60 backdrop-blur-sm flex items-center justify-center text-contrast hover:bg-neutral-base/80 transition-colors"
          onClick={() => setExpanded(true)}
          aria-label="Expand"
        >
          <Icon name="expand" className="w-4 h-4" />
        </button>
      </div>

      {/* ── Expanded overlay ── */}
      <div
        className={[
          'fixed left-1/2 -translate-x-1/2 w-full max-w-[430px] z-40',
          'bg-neutral-base overflow-y-auto',
          'transition-transform duration-300 ease-out',
          expanded ? 'translate-y-0' : 'translate-y-full pointer-events-none',
        ].join(' ')}
        style={{ top: 45, bottom: 0 }}
      >
        {/* Sticky shrink bar */}
        <div className="sticky top-0 z-10 flex justify-end px-3 py-2 bg-neutral-base/95 backdrop-blur-sm">
          <button
            className="w-8 h-8 rounded-full bg-neutral-light flex items-center justify-center text-contrast hover:bg-neutral-border transition-colors"
            onClick={() => setExpanded(false)}
            aria-label="Collapse"
          >
            <Icon name="shrink" className="w-4 h-4" />
          </button>
        </div>

        <div className="pb-8">
          {children}
        </div>
      </div>
    </>
  );
}
