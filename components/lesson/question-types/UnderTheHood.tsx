'use client';

import type { UnderTheHoodQuestion } from '@/data/questions';
import { isCorrect } from '@/data/questions';
import { ContentCard } from '@/components/lesson/ContentCard';
import { Button } from '@/components/Button';
import { useLanguage } from '@/components/LanguageProvider';

interface Props {
  question: UnderTheHoodQuestion;
  locked: boolean;
  selectedOption: number | null;
  onSelectOption: (i: number) => void;
  onAnswer: (isCorrect: boolean) => void;
}

export function UnderTheHood({ question, locked, selectedOption, onSelectOption, onAnswer }: Props) {
  const { t } = useLanguage();

  function optionClass(i: number): string {
    if (locked) {
      if (isCorrect(i, question.correctFlagIndex)) return 'border-accent-green bg-accent-green/15';
      if (selectedOption === i) return 'border-accent-red bg-accent-red/15';
      return 'border-contrast-dark/20 bg-neutral-light opacity-40';
    }
    return selectedOption === i
      ? 'border-primary bg-primary/15'
      : 'border-contrast-dark/40 bg-neutral-light hover:border-primary/50';
  }

  const isMissing = (value: string) =>
    value.startsWith('[NOT FOUND') || value.startsWith('[MISSING') || value.startsWith('[NIET GEVONDEN');

  return (
    <div className="space-y-5">
      <ContentCard content={question.content} />

      <h2 className="text-contrast font-bold text-xl text-center">
        {question.question ?? t.questions.underTheHood.question}
      </h2>

      <div className="space-y-2">
        {question.items.map((item, i) => (
          <button
            key={i}
            disabled={locked}
            onClick={() => onSelectOption(i)}
            className={[
              'w-full text-left rounded-xl border-2 px-4 py-3 transition-colors',
              'disabled:pointer-events-none',
              optionClass(i),
            ].join(' ')}
          >
            <span className="text-contrast-dark text-xs font-semibold uppercase tracking-wide block mb-0.5">
              {item.label}
            </span>
            <span className={`text-sm font-semibold ${isMissing(item.value) ? 'text-accent-red' : 'text-contrast'}`}>
              {item.value}
            </span>
          </button>
        ))}
      </div>

      {!locked && selectedOption !== null && (
        <Button
          variant="primary"
          className="w-full"
          onClick={() => onAnswer(isCorrect(selectedOption, question.correctFlagIndex))}
        >
          {t.questions.underTheHood.button}
        </Button>
      )}
    </div>
  );
}
