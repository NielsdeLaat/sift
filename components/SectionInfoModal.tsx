'use client';

import { useState } from 'react';
import type { Section } from '@/data/roadmap';
import { Icon } from '@/components/icons';
import { useLanguage } from '@/components/LanguageProvider';
import { getSectionText } from '@/lib/i18n';

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
  const { t } = useLanguage();
  if (status === 'completed') {
    return (
      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
        {t.sectionInfo.done}
      </span>
    );
  }
  if (status === 'active') {
    return (
      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
        {t.sectionInfo.current}
      </span>
    );
  }
  return (
    <span className="text-xs font-bold text-contrast-dark bg-neutral-border px-2 py-0.5 rounded-full">
      {t.sectionInfo.locked}
    </span>
  );
}

function TheoryView({ section, totalXp }: { section: Section; totalXp: number }) {
  const { lang, t } = useLanguage();
  const text = getSectionText(section.id, lang, {
    title: section.title,
    subtitle: section.subtitle,
    description: section.description,
    theory: section.theory,
  });
  return (
    <div className="space-y-3">
      <p className="text-contrast-dark text-sm leading-relaxed">{text.description}</p>
      <div className="bg-neutral-light rounded-2xl p-5 space-y-2">
        <p className="text-contrast text-[15px] leading-relaxed">{text.theory}</p>
      </div>
      <div className="flex items-center gap-2 bg-neutral-light rounded-xl px-4 py-3">
        <Icon name="zap" className="w-5 h-5 text-accent flex-shrink-0" />
        <span className="text-contrast font-semibold text-sm">
          {t.sectionInfo.xpAvailable(totalXp)}
        </span>
      </div>
    </div>
  );
}

export function SectionInfoModal({ sections, currentIdx, onClose }: Props) {
  const { lang, t } = useLanguage();
  const [tab, setTab] = useState<Tab>('this');
  const [detailSection, setDetailSection] = useState<Section | null>(null);

  const isDetailView = tab === 'all' && detailSection !== null;
  const currentSection = sections[currentIdx];
  const headerSection = isDetailView ? detailSection! : currentSection;
  const headerText = getSectionText(headerSection.id, lang, {
    title: headerSection.title,
    subtitle: headerSection.subtitle,
    description: headerSection.description,
    theory: headerSection.theory,
  });

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
          <div className="flex items-start gap-2 flex-1 min-w-0 pr-3">
            {isDetailView && (
              <button
                onClick={() => setDetailSection(null)}
                className="w-9 h-9 rounded-full bg-neutral-light flex items-center justify-center text-contrast-dark hover:bg-neutral-border transition-colors flex-shrink-0 mt-0.5"
                aria-label="Back"
              >
                <Icon name="chevronLeft" className="w-4 h-4" />
              </button>
            )}
            <div className="flex-1 min-w-0">
              <p className="text-primary text-xs font-bold uppercase tracking-wider leading-none mb-0.5">
                {headerText.title}
              </p>
              <p className="text-contrast font-bold text-lg leading-tight">{headerText.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-neutral-light flex items-center justify-center text-contrast-dark hover:bg-neutral-border transition-colors flex-shrink-0"
            aria-label="Close"
          >
            <Icon name="close" className="w-4 h-4" />
          </button>
        </div>

        {/* Tabs — hidden while viewing a detail from "all sections" */}
        {!isDetailView && (
          <div className="flex gap-1 mx-5 p-1 bg-neutral-light rounded-xl mb-4">
            {(['this', 'all'] as Tab[]).map(tabKey => (
              <button
                key={tabKey}
                onClick={() => setTab(tabKey)}
                className={[
                  'flex-1 py-2 rounded-lg text-sm font-semibold transition-colors',
                  tab === tabKey ? 'bg-neutral-base text-contrast shadow-sm' : 'text-contrast-dark hover:text-contrast',
                ].join(' ')}
              >
                {tabKey === 'this' ? t.sectionInfo.thisSection : t.sectionInfo.allSections}
              </button>
            ))}
          </div>
        )}

        {/* Scrollable content */}
        <div className="px-5 pb-6 overflow-y-auto max-h-[60vh]">
          {tab === 'this' ? (
            <TheoryView
              section={currentSection}
              totalXp={currentSection.nodes.reduce((sum, n) => sum + n.xp, 0)}
            />
          ) : isDetailView ? (
            <TheoryView
              section={detailSection!}
              totalXp={detailSection!.nodes.reduce((sum, n) => sum + n.xp, 0)}
            />
          ) : (
            <div className="space-y-2">
              {sections.map(section => {
                const status = getSectionStatus(section);
                const sectionXp = section.nodes.reduce((s, n) => s + n.xp, 0);
                const isActive = status === 'active';
                const sectionText = getSectionText(section.id, lang, {
                  title: section.title,
                  subtitle: section.subtitle,
                  description: section.description,
                  theory: section.theory,
                });
                return (
                  <button
                    key={section.id}
                    onClick={() => setDetailSection(section)}
                    className={[
                      'w-full text-left rounded-2xl px-4 py-3 border transition-colors',
                      isActive
                        ? 'border-primary/40 bg-primary/5 hover:bg-primary/10'
                        : 'border-neutral-light bg-neutral-light hover:bg-neutral-border',
                    ].join(' ')}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <p className={`text-xs font-bold uppercase tracking-wider ${isActive ? 'text-primary' : 'text-contrast-dark'}`}>
                        {sectionText.title}
                      </p>
                      <StatusBadge status={status} />
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-contrast font-semibold text-sm leading-snug">{sectionText.subtitle}</p>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <Icon name="zap" className="w-3.5 h-3.5 text-accent" />
                        <span className="text-contrast-dark text-xs font-semibold">
                          {t.sectionInfo.xpShort(sectionXp)}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
