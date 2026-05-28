import type { EvidenceCheckingQuestion } from '@/data/questions';
import { ArticleCardView } from '@/components/lesson/ArticleCardView';
import { ExpandableCard }  from '@/components/lesson/ExpandableCard';
import { Button } from '@/components/Button';

interface Props {
  question: EvidenceCheckingQuestion;
  locked: boolean;
  selectedOption: number | null;
  onSelectOption: (i: number) => void;
  onAnswer: (isCorrect: boolean) => void;
}

export function EvidenceChecking({ question, locked, selectedOption, onSelectOption, onAnswer }: Props) {
  return (
    <div className="space-y-5">
      <ExpandableCard>
        <ArticleCardView article={question.article} />
      </ExpandableCard>

      <h2 className="text-text font-bold text-xl text-center">
        What evidence in this article supports the headline?
      </h2>
      <div className="space-y-2">
        {question.snippets.map((snippet, i) => (
          <button
            key={i}
            disabled={locked}
            onClick={() => onSelectOption(i)}
            className={[
              'w-full text-left rounded-xl border-2 px-4 py-3 text-sm leading-relaxed transition-colors',
              'disabled:pointer-events-none',
              selectedOption === i
                ? 'border-primary bg-primary/15 text-text font-semibold'
                : 'border-muted/40 bg-surface text-muted-light hover:border-primary/50',
            ].join(' ')}
          >
            &ldquo;{snippet}&rdquo;
          </button>
        ))}
      </div>
      {!locked && selectedOption !== null && (
        <Button
          variant="primary"
          className="w-full"
          onClick={() => onAnswer(selectedOption === question.correctIndex)}
        >
          Confirm Evidence
        </Button>
      )}
    </div>
  );
}
