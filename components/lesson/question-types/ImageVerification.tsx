import { useState } from 'react';
import type { ImageVerificationQuestion } from '@/data/questions';
import { TellReveal } from '@/components/lesson/TellReveal';
import { Button } from '@/components/Button';

interface Props {
  question: ImageVerificationQuestion;
  locked: boolean;
  onAnswer: (isCorrect: boolean) => void;
}

export function ImageVerification({ question, locked, onAnswer }: Props) {
  const [showTell, setShowTell] = useState(false);

  if (showTell) {
    return <TellReveal imageUrl={question.imageUrl} tell={question.tell} onConfirm={onAnswer} />;
  }

  return (
    <div className="space-y-5">
      <h2 className="text-text font-bold text-xl text-center leading-snug">
        {question.headline}
      </h2>
      <div className="relative w-full aspect-video rounded-xl overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={question.imageUrl} alt="" className="w-full h-full object-cover" />
      </div>
      <p className="text-muted-light text-base text-center font-semibold">
        {question.question ?? 'Does this image support the claim?'}
      </p>
      <div className="flex gap-3 justify-center">
        <Button
          variant="yes"
          disabled={locked}
          onClick={() => onAnswer(question.correctAnswer === 'yes')}
        >
          Yes
        </Button>
        <Button
          variant="no"
          disabled={locked}
          onClick={() => {
            if (question.correctAnswer === 'no') {
              setShowTell(true);
            } else {
              onAnswer(false);
            }
          }}
        >
          No
        </Button>
      </div>
    </div>
  );
}
