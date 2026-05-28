import type { CollaborationQuestion } from '@/data/questions';
import { ArticleCardView } from '@/components/lesson/ArticleCardView';
import { Button } from '@/components/Button';

interface Props {
  question: CollaborationQuestion;
  onAnswer: (isCorrect: boolean) => void;
}

export function Collaboration({ question, onAnswer }: Props) {
  return (
    <div className="space-y-5">
      <ArticleCardView article={question.article} />
      <h2 className="text-text font-bold text-xl text-center">
        Is this article telling the truth?
      </h2>
      <div className="flex gap-3 justify-center">
        <Button variant="yes" onClick={() => onAnswer(question.correctAnswer === 'yes')}>
          Yes
        </Button>
        <Button variant="no" onClick={() => onAnswer(question.correctAnswer === 'no')}>
          No
        </Button>
      </div>
    </div>
  );
}
