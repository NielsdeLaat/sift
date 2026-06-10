'use client';

import { useState } from 'react';
import type { WhoSaysQuestion } from '@/data/questions';
import { isCorrect } from '@/data/questions';
import { ExpandableCard } from '@/components/lesson/ExpandableCard';
import { ContentCard } from '@/components/lesson/ContentCard';
import { Button } from '@/components/Button';
import { useLanguage } from '@/components/LanguageProvider';

interface Props {
  question: WhoSaysQuestion;
  locked: boolean;
  selectedOption: number | null;
  onSelectOption: (i: number) => void;
  onAnswer: (isCorrect: boolean) => void;
}

export function WhoSays({ question, locked, onAnswer }: Props) {
  const { t } = useLanguage();
  const [articleOpen, setArticleOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState<number | null>(null);
  const [noSourceSelected, setNoSourceSelected] = useState(false);

  const hasSelection = selectedSection !== null || noSourceSelected;

  const shadow = 'shadow-[0_2px_8px_rgba(0,0,0,0.35)]';

  function sectionClass(i: number): string {
    if (locked) {
      if (question.correctSectionIndex === i)
        return `text-contrast bg-accent-green/15 ring-1 ring-inset ring-accent-green/50 ${shadow}`;
      if (selectedSection === i)
        return `text-contrast bg-accent-red/15 ring-1 ring-inset ring-accent-red/50 ${shadow}`;
      return 'text-contrast/40';
    }
    return selectedSection === i
      ? `text-contrast bg-primary/15 ring-1 ring-inset ring-primary/50 ${shadow}`
      : `text-contrast bg-neutral-base/20 ring-1 ring-inset ring-white/10 ${shadow} hover:bg-neutral-base/30`;
  }

  function noSourceClass(): string {
    if (locked) {
      if (question.correctSectionIndex === null)
        return 'border-accent-green bg-accent-green/15 text-contrast';
      if (noSourceSelected) return 'border-accent-red bg-accent-red/15 text-contrast';
      return 'border-contrast-dark/20 bg-neutral-light text-contrast opacity-40';
    }
    return noSourceSelected
      ? 'border-primary bg-primary/15 text-contrast'
      : 'border-contrast-dark/40 bg-neutral-light text-contrast hover:border-primary/50';
  }

  function handleConfirm() {
    const correct =
      question.correctSectionIndex === null
        ? noSourceSelected
        : selectedSection !== null && isCorrect(selectedSection, question.correctSectionIndex);
    onAnswer(correct);
  }

  return (
    <div className="space-y-5">
      <ExpandableCard
        onExpandChange={setArticleOpen}
        expandedFooter={
          !locked && selectedSection !== null ? (
            <Button variant="primary" className="w-full" onClick={handleConfirm}>
              {t.questions.whoSays.confirm}
            </Button>
          ) : undefined
        }
      >
        <ContentCard content={question.content}>
          {articleOpen && (
            <div className="px-3 pb-3 space-y-2 mt-1">
              {question.sections.map((section, i) => (
                <button
                  key={i}
                  disabled={locked}
                  onClick={() => { setNoSourceSelected(false); setSelectedSection(i); }}
                  className={[
                    'w-full text-left px-4 py-2.5 text-sm leading-relaxed transition-all rounded-xl',
                    'disabled:pointer-events-none',
                    sectionClass(i),
                  ].join(' ')}
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </ContentCard>
      </ExpandableCard>

      <h2 className="text-contrast font-bold text-xl text-center">
        {question.question ?? t.questions.whoSays.question}
      </h2>

      {!articleOpen && !locked && (
        <p className="text-contrast-dark text-sm text-center">{t.questions.whoSays.cue}</p>
      )}

      <button
        disabled={locked}
        onClick={() => { setSelectedSection(null); setNoSourceSelected(true); }}
        className={[
          'w-full text-left rounded-xl border-2 px-4 py-3 text-sm font-semibold transition-colors',
          'disabled:pointer-events-none',
          noSourceClass(),
        ].join(' ')}
      >
        {t.questions.whoSays.noSource}
      </button>

      {!locked && (noSourceSelected || (selectedSection !== null && !articleOpen)) && (
        <Button variant="primary" className="w-full" onClick={handleConfirm}>
          {t.questions.whoSays.confirm}
        </Button>
      )}
    </div>
  );
}
