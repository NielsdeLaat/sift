import type { NameTrickQuestion } from '@/data/questions';
import { ExpandableCard } from '@/components/lesson/ExpandableCard';
import { ContentCard } from '@/components/lesson/ContentCard';
import { Button } from '@/components/Button';

interface Props {
  question: NameTrickQuestion;
  locked: boolean;
  selectedOption: number | null;
  onSelectOption: (i: number) => void;
  onAnswer: (isCorrect: boolean) => void;
}

export function NameTrick({ question, locked, selectedOption, onSelectOption, onAnswer }: Props) {
  return (
    <div className="space-y-5">
      <ExpandableCard>
        <ContentCard content={question.content} />
      </ExpandableCard>

      <h2 className="text-contrast font-bold text-xl text-center">
        {question.question ?? 'Which technique is this using?'}
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
          Confirm
        </Button>
      )}
    </div>
  );
}
