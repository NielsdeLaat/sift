'use client';

import { useState } from 'react';
import type { Section } from '@/data/roadmap';
import { Icon } from '@/components/icons';
import { useLanguage } from '@/components/LanguageProvider';
import { getSectionText } from '@/lib/i18n';

interface Props {
  sections: Section[];
  onJumpTo: (nodeProgress: number) => void;
  onReset: () => void;
  onClose: () => void;
}

type View = 'main' | 'skip' | 'test';

function computeNodeProgress(sections: Section[], sectionIdx: number, goToTest: boolean): number {
  let count = 0;
  for (let i = 0; i < sectionIdx; i++) {
    count += sections[i].nodes.length;
  }
  if (goToTest) {
    count += sections[sectionIdx].nodes.length - 1;
  }
  return count;
}

function Sheet({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/50" onClick={onClose} />
      <div
        className="fixed bottom-16 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-50 bg-neutral-base rounded-t-3xl"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </>
  );
}

export function DemoMenu({ sections, onJumpTo, onReset, onClose }: Props) {
  const { lang, t } = useLanguage();
  const [view, setView] = useState<View>('main');

  function handleSectionClick(idx: number) {
    onJumpTo(computeNodeProgress(sections, idx, view === 'test'));
    onClose();
  }

  if (view === 'main') {
    return (
      <Sheet onClose={onClose}>
        <div className="flex items-center justify-between px-5 pt-4 pb-4">
          <p className="text-contrast font-bold text-lg">{t.ui.demoOptions}</p>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-neutral-light flex items-center justify-center text-contrast-dark hover:bg-neutral-border transition-colors"
            aria-label="Close"
          >
            <Icon name="close" className="w-4 h-4" />
          </button>
        </div>

        <div className="px-5 pb-6 space-y-2">
          <button
            onClick={() => setView('skip')}
            className="w-full flex items-center gap-3 bg-neutral-light rounded-2xl px-4 py-3.5 hover:bg-neutral-border transition-colors text-left"
          >
            <Icon name="play" className="w-5 h-5 text-primary flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-contrast font-semibold text-sm">{t.ui.skipToSection}</p>
              <p className="text-contrast-dark text-xs mt-0.5">{t.ui.skipToSectionDesc}</p>
            </div>
            <Icon name="chevronRight" className="w-4 h-4 text-contrast-dark flex-shrink-0" />
          </button>

          <button
            onClick={() => setView('test')}
            className="w-full flex items-center gap-3 bg-neutral-light rounded-2xl px-4 py-3.5 hover:bg-neutral-border transition-colors text-left"
          >
            <Icon name="flag" className="w-5 h-5 text-primary flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-contrast font-semibold text-sm">{t.ui.goToSectionTest}</p>
              <p className="text-contrast-dark text-xs mt-0.5">{t.ui.goToSectionTestDesc}</p>
            </div>
            <Icon name="chevronRight" className="w-4 h-4 text-contrast-dark flex-shrink-0" />
          </button>

          <button
            onClick={() => { onReset(); onClose(); }}
            className="w-full flex items-center gap-3 bg-accent-red/10 rounded-2xl px-4 py-3.5 hover:bg-accent-red/20 transition-colors text-left"
          >
            <Icon name="noX" className="w-5 h-5 text-accent-red flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-accent-red font-semibold text-sm">{t.ui.resetDemo}</p>
              <p className="text-accent-red/70 text-xs mt-0.5">{t.ui.resetDemoDesc}</p>
            </div>
          </button>
        </div>
      </Sheet>
    );
  }

  return (
    <Sheet onClose={onClose}>
      <div className="flex items-center gap-3 px-5 pt-4 pb-3">
        <button
          onClick={() => setView('main')}
          className="w-9 h-9 rounded-full bg-neutral-light flex items-center justify-center text-contrast-dark hover:bg-neutral-border transition-colors flex-shrink-0"
          aria-label={t.ui.back}
        >
          <Icon name="chevronLeft" className="w-4 h-4" />
        </button>
        <p className="text-contrast font-bold text-base flex-1">
          {view === 'skip' ? t.ui.skipToSection : t.ui.goToSectionTest}
        </p>
        <button
          onClick={onClose}
          className="w-9 h-9 rounded-full bg-neutral-light flex items-center justify-center text-contrast-dark hover:bg-neutral-border transition-colors flex-shrink-0"
          aria-label="Close"
        >
          <Icon name="close" className="w-4 h-4" />
        </button>
      </div>

      <div className="px-5 pb-6 overflow-y-auto max-h-[60vh] space-y-2">
        {sections.map((section, idx) => {
          const text = getSectionText(section.id, lang, {
            title: section.title,
            subtitle: section.subtitle,
            description: section.description,
            theory: section.theory,
          });
          return (
            <button
              key={section.id}
              onClick={() => handleSectionClick(idx)}
              className="w-full flex items-center gap-3 bg-neutral-light rounded-2xl px-4 py-3 hover:bg-neutral-border transition-colors text-left"
            >
              <span className="w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0">
                {section.badge}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-contrast-dark text-xs font-medium">{text.title}</p>
                <p className="text-contrast font-semibold text-sm leading-snug truncate">{text.subtitle}</p>
              </div>
              <Icon name="chevronRight" className="w-4 h-4 text-contrast-dark flex-shrink-0" />
            </button>
          );
        })}
      </div>
    </Sheet>
  );
}
