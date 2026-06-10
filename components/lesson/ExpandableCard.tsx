'use client';

import { useState, type ReactNode } from 'react';
import { Icon } from '@/components/icons';
import { useLanguage } from '@/components/LanguageProvider';

const COLLAPSED_HEIGHT = 272;

export function ExpandableCard({ children, onExpandChange, expandedFooter }: { children: ReactNode; onExpandChange?: (open: boolean) => void; expandedFooter?: ReactNode }) {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  function open()  { setExpanded(true);  onExpandChange?.(true);  }
  function close() { setExpanded(false); onExpandChange?.(false); }

  return (
    <>
      {/* ── Collapsed preview ── */}
      <div
        role="button"
        tabIndex={0}
        className="relative rounded-2xl overflow-hidden cursor-pointer"
        style={{ maxHeight: COLLAPSED_HEIGHT }}
        onClick={open}
        onKeyDown={(e) => e.key === 'Enter' || e.key === ' ' ? open() : undefined}
        aria-label={t.ui.expand}
      >
        {children}

        {/* Fade gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, var(--color-surface))' }}
        />

        {/* Expand icon (decorative, whole card is tappable) */}
        <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-neutral-base/60 backdrop-blur-sm flex items-center justify-center text-contrast pointer-events-none">
          <Icon name="expand" className="w-4 h-4" />
        </div>
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
            onClick={close}
            aria-label={t.ui.collapse}
          >
            <Icon name="shrink" className="w-4 h-4" />
          </button>
        </div>

        <div className={expandedFooter ? 'pb-0' : 'pb-8'}>
          {children}
        </div>
        {expandedFooter && (
          <div className="sticky bottom-0 px-4 py-3 bg-neutral-base/95 backdrop-blur-sm border-t border-white/8">
            {expandedFooter}
          </div>
        )}
      </div>
    </>
  );
}
