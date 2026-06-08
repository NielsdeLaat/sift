import { useState } from 'react';
import type { RealOrAiQuestion } from '@/data/questions';
import { TellReveal } from '@/components/lesson/TellReveal';
import { ExpandableImage } from '@/components/lesson/ExpandableImage';
import { Button } from '@/components/Button';

interface Props {
  question: RealOrAiQuestion;
  locked: boolean;
  onAnswer: (isCorrect: boolean) => void;
}

export function RealOrAi({ question, locked, onAnswer }: Props) {
  const [showTell, setShowTell] = useState(false);

  if (showTell && question.tell) {
    return <TellReveal imageUrl={question.imageUrl} tell={question.tell} onConfirm={onAnswer} />;
  }

  return (
    <div className="space-y-5">
      <div className="relative w-full aspect-video rounded-xl overflow-hidden">
        <ExpandableImage src={question.imageUrl} className="w-full h-full object-cover" />
      </div>

      <h2 className="text-contrast font-bold text-xl text-center">
        {question.question ?? 'Is this image real or AI-generated?'}
      </h2>

      <div className="flex gap-3 justify-center">
        <Button
          variant="yes"
          disabled={locked}
          onClick={() => {
            if (question.correctAnswer === 'real') {
              onAnswer(true);
            } else {
              onAnswer(false);
            }
          }}
        >
          Real
        </Button>
        <Button
          variant="no"
          disabled={locked}
          onClick={() => {
            if (question.correctAnswer === 'ai') {
              if (question.tell) {
                setShowTell(true);
              } else {
                onAnswer(true);
              }
            } else {
              onAnswer(false);
            }
          }}
        >
          AI
        </Button>
      </div>
    </div>
  );
}
