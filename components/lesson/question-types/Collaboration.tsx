'use client';

import { useState } from 'react';
import type { CollaborationQuestion } from '@/data/questions';
import { ArticleCardView } from '@/components/lesson/ArticleCardView';
import { ExpandableCard }  from '@/components/lesson/ExpandableCard';
import { InAppBrowser }    from '@/components/lesson/InAppBrowser';
import { Button } from '@/components/Button';

interface Props {
  question: CollaborationQuestion;
  locked: boolean;
  onAnswer: (isCorrect: boolean) => void;
}

export function Collaboration({ question, locked, onAnswer }: Props) {
  const [hasOpened, setHasOpened]     = useState(false);
  const [showBrowser, setShowBrowser] = useState(false);

  function openBrowser() {
    setShowBrowser(true);
    setHasOpened(true);
  }

  return (
    <>
      {showBrowser && (
        <InAppBrowser url={question.browseUrl} onReturn={() => setShowBrowser(false)} />
      )}

      <div className="space-y-5">
        <ExpandableCard>
          <ArticleCardView article={question.article} />
        </ExpandableCard>

        <div className="flex justify-center">
          <Button variant="outlined" onClick={openBrowser} disabled={locked}>
            Browse
          </Button>
        </div>

        <h2 className="text-text font-bold text-xl text-center">
          {question.question ?? 'Is this article telling the truth?'}
        </h2>

        <div className="flex gap-3 justify-center">
          <Button
            variant="no"
            disabled={!hasOpened || locked}
            onClick={() => onAnswer(question.correctAnswer === 'no')}
          >
            No
          </Button>
          <Button
            variant="yes"
            disabled={!hasOpened || locked}
            onClick={() => onAnswer(question.correctAnswer === 'yes')}
          >
            Yes
          </Button>
        </div>
      </div>
    </>
  );
}
