import type { ManipulationTacticsQuestion } from '@/data/questions';
import { ArticleCardView } from '@/components/lesson/ArticleCardView';
import { Button } from '@/components/Button';

interface Props {
  question: ManipulationTacticsQuestion;
  selectedOption: number | null;
  onSelectOption: (i: number) => void;
  onAnswer: (isCorrect: boolean) => void;
}

export function ManipulationTactics({ question, selectedOption, onSelectOption, onAnswer }: Props) {
  return (
    <div className="space-y-5">
      <ArticleCardView article={question.article} />
      <h2 className="text-text font-bold text-xl text-center">
        In what way is this article influencing the reader?
      </h2>
      <div className="space-y-2">
        {question.options.map((option, i) => (
          <button
            key={i}
            onClick={() => onSelectOption(i)}
            className={[
              'w-full text-left rounded-xl border-2 px-4 py-3 text-sm font-semibold transition-colors',
              selectedOption === i
                ? 'border-primary bg-primary/15 text-text'
                : 'border-muted/40 bg-surface text-muted-light hover:border-primary/50',
            ].join(' ')}
          >
            {option}
          </button>
        ))}
      </div>
      {selectedOption !== null && (
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
