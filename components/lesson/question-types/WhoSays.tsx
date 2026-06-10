'use client';

import type { WhoSaysQuestion } from '@/data/questions';
import { isCorrect } from '@/data/questions';
import { Button } from '@/components/Button';
import { useLanguage } from '@/components/LanguageProvider';

interface Props {
  question: WhoSaysQuestion;
  locked: boolean;
  selectedOption: number | null;
  onSelectOption: (i: number) => void;
  onAnswer: (isCorrect: boolean) => void;
}

function highlightSource(excerpt: string, source: string): React.ReactNode {
  const idx = excerpt.indexOf(source);
  if (idx === -1) return excerpt;
  return (
    <>
      {excerpt.slice(0, idx)}
      <mark className="bg-primary/20 text-primary rounded px-0.5 not-italic">{source}</mark>
      {excerpt.slice(idx + source.length)}
    </>
  );
}

export function WhoSays({ question, locked, selectedOption, onSelectOption, onAnswer }: Props) {
  const { t } = useLanguage();

  function optionClass(i: number): string {
    if (locked) {
      if (isCorrect(i, question.correctIndex)) return 'border-accent-green bg-accent-green/15 text-contrast';
      if (selectedOption === i) return 'border-accent-red bg-accent-red/15 text-contrast';
      return 'border-contrast-dark/20 bg-neutral-light text-contrast-dark opacity-40';
    }
    return selectedOption === i
      ? 'border-primary bg-primary/15 text-contrast'
      : 'border-contrast-dark/40 bg-neutral-light text-contrast-dark hover:border-primary/50';
  }

  return (
    <div className="space-y-5">
      <div className="bg-neutral-light rounded-2xl p-4 border-l-4 border-primary/40">
        <p className="text-contrast text-sm leading-relaxed italic">
          {highlightSource(question.excerpt, question.highlightedSource)}
        </p>
      </div>

      <h2 className="text-contrast font-bold text-xl text-center">
        {question.question ?? t.questions.whoSays.question}
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
              optionClass(i),
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
          onClick={() => onAnswer(isCorrect(selectedOption, question.correctIndex))}
        >
          {t.questions.whoSays.confirm}
        </Button>
      )}
    </div>
  );
}
