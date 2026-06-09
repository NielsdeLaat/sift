'use client';

import type { UnderTheHoodQuestion } from '@/data/questions';
import { ExpandableImage } from '@/components/lesson/ExpandableImage';
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

  const isMissing = (value: string) =>
    value.startsWith('[NOT FOUND') || value.startsWith('[MISSING');

  return (
    <div className="space-y-5">
      <div className="relative w-full aspect-video rounded-xl overflow-hidden">
        <ExpandableImage src={question.imageUrl} className="w-full h-full object-cover" />
      </div>

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
              selectedOption === i
                ? 'border-primary bg-primary/15'
                : 'border-contrast-dark/40 bg-neutral-light hover:border-primary/50',
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
          onClick={() => onAnswer(selectedOption === question.correctFlagIndex)}
        >
          {t.questions.underTheHood.button}
        </Button>
      )}
    </div>
  );
}
