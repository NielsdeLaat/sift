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
  const [selected, setSelected] = useState<'real' | 'ai' | null>(null);

  if (showTell && question.tell) {
    return <TellReveal imageUrl={question.imageUrl} tell={question.tell} onConfirm={onAnswer} />;
  }

  function pick(choice: 'real' | 'ai') {
    if (locked || selected !== null) return;
    setSelected(choice);
    if (choice === 'real') {
      onAnswer(question.correctAnswer === 'real');
    } else {
      if (question.correctAnswer === 'ai') {
        if (question.tell) { setShowTell(true); return; }
        onAnswer(true);
      } else {
        onAnswer(false);
      }
    }
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
          disabled={locked || selected !== null}
          className={selected === 'real' ? 'ring-2 ring-offset-2 ring-primary' : ''}
          onClick={() => pick('real')}
        >
          Real
        </Button>
        <Button
          variant="no"
          disabled={locked || selected !== null}
          className={selected === 'ai' ? 'ring-2 ring-offset-2 ring-primary' : ''}
          onClick={() => pick('ai')}
        >
          AI
        </Button>
      </div>
    </div>
  );
}
