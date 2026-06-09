'use client';

import type { LeaveThePageQuestion } from '@/data/questions';
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

  return (
    <div className="space-y-5">
      <div className="bg-neutral-light rounded-2xl p-4">
        <p className="text-contrast text-sm leading-relaxed">{question.scenario}</p>
      </div>

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
              selectedOption === i
                ? 'border-primary bg-primary/15'
                : 'border-contrast-dark/40 bg-neutral-light hover:border-primary/50',
            ].join(' ')}
          >
            {/* Search-result card layout */}
            <p className={`text-xs font-semibold mb-0.5 ${selectedOption === i ? 'text-primary' : 'text-primary/70'}`}>
              {card.source}
            </p>
            <p className={`text-sm font-bold leading-tight mb-1 ${selectedOption === i ? 'text-contrast' : 'text-contrast'}`}>
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
          onClick={() => onAnswer(selectedOption === question.correctCardIndex)}
        >
          {t.questions.leaveThePage.button}
        </Button>
      )}
    </div>
  );
}
