'use client';

import { useState } from 'react';
import { Icon } from '@/components/icons';
import { Button } from '@/components/Button';
import { useLanguage } from '@/components/LanguageProvider';

interface Props {
  isCorrect: boolean;
  explanation?: string;
  onContinue: () => void;
}

export function FeedbackBanner({ isCorrect, explanation, onContinue }: Props) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <div
      className={[
        'fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-50',
        'px-5 pt-4 pb-6 flex flex-col gap-3 border-t',
        isCorrect
          ? 'bg-neutral-base border-accent-green'
          : 'bg-neutral-base border-accent-red',
      ].join(' ')}
    >
      <div className="flex items-center gap-2">
        <Icon
          name={isCorrect ? 'yesCheck' : 'noX'}
          className={`w-6 h-6 flex-shrink-0 ${isCorrect ? 'text-accent-green' : 'text-accent-red'}`}
        />
        <p className={`font-bold text-base leading-tight ${isCorrect ? 'text-accent-green' : 'text-accent-red'}`}>
          {isCorrect ? t.feedback.correct : t.feedback.incorrect}
        </p>
      </div>
      {open && explanation && (
        <p className="text-contrast-dark text-sm leading-relaxed">{explanation}</p>
      )}
      <div className="flex gap-3">
        {explanation && (
          <Button variant="outlined" className="flex-1 h-12" onClick={() => setOpen(o => !o)}>
            {open ? t.feedback.hideExplanation : t.feedback.showExplanation}
          </Button>
        )}
        <Button variant="primary" className={`h-12 ${explanation ? 'flex-1' : 'w-full'}`} onClick={onContinue}>
          {t.feedback.continue}
        </Button>
      </div>
    </div>
  );
}
