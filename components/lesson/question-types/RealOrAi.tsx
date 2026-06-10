'use client';

import { useState } from 'react';
import type { RealOrAiQuestion } from '@/data/questions';
import { TellReveal } from '@/components/lesson/TellReveal';
import { ExpandableImage } from '@/components/lesson/ExpandableImage';
import { Button } from '@/components/Button';
import { useLanguage } from '@/components/LanguageProvider';

interface Props {
  question: RealOrAiQuestion;
  locked: boolean;
  onAnswer: (isCorrect: boolean) => void;
}

export function RealOrAi({ question, locked, onAnswer }: Props) {
  const { t } = useLanguage();
  const [showTell, setShowTell] = useState(false);
  const [selected, setSelected] = useState<'real' | 'ai' | null>(null);

  if (showTell && question.tell) {
    return <TellReveal imageUrl={question.imageUrl} tell={question.tell} onConfirm={onAnswer} />;
  }

  function choiceClass(choice: 'real' | 'ai'): string {
    if (locked) {
      if (choice === question.correctAnswer) return '!bg-accent-green ring-2 ring-offset-2 ring-accent-green';
      if (selected === choice) return '!bg-accent-red ring-2 ring-offset-2 ring-accent-red';
      return 'opacity-40';
    }
    return selected === choice ? 'ring-2 ring-offset-2 ring-primary' : '';
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
        {question.question ?? t.questions.realOrAi.question}
      </h2>

      <div className="flex gap-3 justify-center">
        <Button
          variant="yes"
          disabled={!locked && selected !== null}
          className={choiceClass('real')}
          onClick={() => pick('real')}
        >
          {t.questions.realOrAi.real}
        </Button>
        <Button
          variant="no"
          disabled={!locked && selected !== null}
          className={choiceClass('ai')}
          onClick={() => pick('ai')}
        >
          {t.questions.realOrAi.ai}
        </Button>
      </div>
    </div>
  );
}
