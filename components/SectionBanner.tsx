'use client';

import { useState, useEffect } from 'react';
import type { Section } from '@/data/roadmap';
import { Icon } from '@/components/icons';
import { SectionInfoModal } from '@/components/SectionInfoModal';

// Combined height of the sticky block (StatusBar ~56px + this banner ~52px).
// Sentinels whose getBoundingClientRect().top is below this threshold are
// considered "not yet reached"; above it means the section is active.
const TRIGGER_Y = 120;

interface Props {
  sections: Section[];
}

export function SectionBanner({ sections }: Props) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [open, setOpen]             = useState(false);

  useEffect(() => {
    function detect() {
      let active = 0;
      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(`section-sentinel-${sections[i].id}`);
        if (!el) continue;
        if (el.getBoundingClientRect().top < TRIGGER_Y) active = i;
      }
      setCurrentIdx(active);
    }

    detect();
    window.addEventListener('scroll', detect, { passive: true });
    return () => window.removeEventListener('scroll', detect);
  }, [sections]);

  const section = sections[currentIdx];

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full text-left bg-surface border-b border-primary/30 px-4 py-2.5 flex items-center gap-3 hover:bg-surface-elevated active:bg-surface-elevated transition-colors"
      >
        <div className="flex-1 min-w-0">
          <p className="text-primary text-xs font-bold uppercase tracking-wider leading-none mb-0.5">
            {section.title}
          </p>
          <p className="text-text text-sm font-semibold leading-tight truncate">
            {section.subtitle}
          </p>
        </div>
        <Icon name="book" className="w-5 h-5 text-primary flex-shrink-0" />
      </button>

      {open && (
        <SectionInfoModal
          sections={sections}
          currentIdx={currentIdx}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
