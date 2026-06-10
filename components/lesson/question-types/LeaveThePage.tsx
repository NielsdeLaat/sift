'use client';

import { useState } from 'react';
import type { LeaveThePageQuestion } from '@/data/questions';
import { isCorrect } from '@/data/questions';
import { ExpandableCard } from '@/components/lesson/ExpandableCard';
import { ContentCard } from '@/components/lesson/ContentCard';
import { Button } from '@/components/Button';
import { useLanguage } from '@/components/LanguageProvider';

interface Props {
  question: LeaveThePageQuestion;
  locked: boolean;
  selectedOption: number | null;
  onSelectOption: (i: number) => void;
  onAnswer: (isCorrect: boolean) => void;
}

export function LeaveThePage({ question, locked, selectedOption, onSelectOption, onAnswer }: Props) {
  const { t } = useLanguage();
  const [step, setStep] = useState<'search' | 'results'>('search');
  const [searchSelected, setSearchSelected] = useState<number | null>(null);
  const [searchConfirmed, setSearchConfirmed] = useState(false);

  function searchOptionClass(i: number): string {
    if (searchConfirmed) {
      if (isCorrect(i, question.correctSearchIndex)) return 'border-accent-green bg-accent-green/15 text-contrast';
      if (searchSelected === i) return 'border-accent-red bg-accent-red/15 text-contrast';
      return 'border-contrast-dark/20 bg-neutral-light text-contrast-dark opacity-40';
    }
    return searchSelected === i
      ? 'border-primary bg-primary/15 text-contrast'
      : 'border-contrast-dark/40 bg-neutral-light text-contrast-dark hover:border-primary/50';
  }

  function optionClass(i: number): string {
    if (locked) {
      if (isCorrect(i, question.correctCardIndex)) return 'border-accent-green bg-accent-green/15';
      if (selectedOption === i) return 'border-accent-red bg-accent-red/15';
      return 'border-contrast-dark/20 bg-neutral-light opacity-40';
    }
    return selectedOption === i
      ? 'border-primary bg-primary/15'
      : 'border-contrast-dark/40 bg-neutral-light hover:border-primary/50';
  }

  if (step === 'search') {
    return (
      <div className="space-y-5">
        <ExpandableCard>
          <ContentCard content={question.content} />
        </ExpandableCard>

        <h2 className="text-contrast font-bold text-xl text-center">
          {t.questions.leaveThePage.searchQuestion}
        </h2>

        <div className="space-y-2">
          {question.searchOptions.map((option, i) => (
            <button
              key={i}
              disabled={searchConfirmed}
              onClick={() => setSearchSelected(i)}
              className={[
                'w-full text-left rounded-xl border-2 px-4 py-3 text-sm font-semibold transition-colors',
                'disabled:pointer-events-none',
                searchOptionClass(i),
              ].join(' ')}
            >
              🔍 {option}
            </button>
          ))}
        </div>

        {searchConfirmed && (
          <div className="bg-neutral-light rounded-2xl p-4">
            <p className="text-contrast text-sm leading-relaxed">{question.searchExplanation}</p>
          </div>
        )}

        {!searchConfirmed && searchSelected !== null && (
          <Button variant="primary" className="w-full" onClick={() => setSearchConfirmed(true)}>
            {t.questions.leaveThePage.searchConfirm}
          </Button>
        )}

        {searchConfirmed && (
          <Button variant="primary" className="w-full" onClick={() => setStep('results')}>
            {t.feedback.continue}
          </Button>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <ExpandableCard>
        <ContentCard content={question.content} />
      </ExpandableCard>

      <h2 className="text-contrast font-bold text-xl text-center">
        {question.question ?? t.questions.leaveThePage.question}
      </h2>

      <div className="space-y-3">
        {question.cards.map((card, i) => (
          <button
            key={i}
            disabled={locked}
            onClick={() => onSelectOption(i)}
            className={[
              'w-full text-left rounded-xl border-2 p-4 transition-colors',
              'disabled:pointer-events-none',
              optionClass(i),
            ].join(' ')}
          >
            <p className={`text-xs font-semibold mb-0.5 ${selectedOption === i ? 'text-primary' : 'text-primary/70'}`}>
              {card.source}
            </p>
            <p className="text-sm font-bold leading-tight mb-1 text-contrast">
              {card.title}
            </p>
            <p className="text-contrast-dark text-xs leading-relaxed line-clamp-2">
              {card.snippet}
            </p>
          </button>
        ))}
      </div>

      {!locked && selectedOption !== null && (
        <Button
          variant="primary"
          className="w-full"
          onClick={() => onAnswer(isCorrect(selectedOption, question.correctCardIndex))}
        >
          {t.questions.leaveThePage.button}
        </Button>
      )}
    </div>
  );
}
