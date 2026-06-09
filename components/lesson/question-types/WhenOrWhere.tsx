'use client';

import type { WhenOrWhereQuestion } from '@/data/questions';
import { ExpandableImage } from '@/components/lesson/ExpandableImage';
import { Button } from '@/components/Button';
import { useLanguage } from '@/components/LanguageProvider';

interface Props {
  question: WhenOrWhereQuestion;
  locked: boolean;
  selectedOption: number | null;
  onSelectOption: (i: number) => void;
  onAnswer: (isCorrect: boolean) => void;
}

export function WhenOrWhere({ question, locked, selectedOption, onSelectOption, onAnswer }: Props) {
  const { t } = useLanguage();

  const subtypeLabel = question.subtype === 'when'
    ? t.questions.whenOrWhere.whenQuestion
    : t.questions.whenOrWhere.whereQuestion;

  return (
    <div className="space-y-5">
      {question.imageUrl && (
        <div className="relative w-full aspect-video rounded-xl overflow-hidden">
          <ExpandableImage src={question.imageUrl} className="w-full h-full object-cover" />
        </div>
      )}

      {question.text && (
        <div className="bg-neutral-light rounded-2xl p-4">
          <p className="text-contrast text-sm leading-relaxed">{question.text}</p>
        </div>
      )}

      <h2 className="text-contrast font-bold text-xl text-center">
        {question.question ?? subtypeLabel}
      </h2>

      <div className="space-y-2">
        {question.options.map((option, i) => (
          <button
            key={i}
            disabled={locked}
            onClick={() => onSelectOption(i)}
            className={[
              'w-full text-left rounded-xl border-2 px-4 py-3 text-sm font-semibold transition-colors',
              'disabled:pointer-events-none',
              selectedOption === i
                ? 'border-primary bg-primary/15 text-contrast'
                : 'border-contrast-dark/40 bg-neutral-light text-contrast-dark hover:border-primary/50',
            ].join(' ')}
          >
            {option}
          </button>
        ))}
      </div>

      {!locked && selectedOption !== null && (
        <Button
          variant="primary"
          className="w-full"
          onClick={() => onAnswer(selectedOption === question.correctIndex)}
        >
          {t.questions.whenOrWhere.confirm}
        </Button>
      )}
    </div>
  );
}
