import type { ImageVerificationQuestion } from '@/data/questions';
import { TellReveal } from '@/components/lesson/TellReveal';
import { Button } from '@/components/Button';

interface Props {
  question: ImageVerificationQuestion;
  page: number;
  onAnswer: (isCorrect: boolean) => void;
  onPageAdvance: () => void;
}

export function ImageVerification({ question, page, onAnswer, onPageAdvance }: Props) {
  if (page === 1) {
    return <TellReveal imageUrl={question.imageUrl} tell={question.tell} onGotIt={onPageAdvance} />;
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
        Does this image support the claim?
      </p>
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
