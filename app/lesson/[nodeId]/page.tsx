'use client';

import { useState, useMemo } from 'react';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import { questions as allQuestions } from '@/data/questions';
import type { Question } from '@/data/questions';
import { getLessonQuestions } from '@/lib/lesson';
import { LessonHeader }     from '@/components/lesson/LessonHeader';
import { QuestionRenderer } from '@/components/lesson/QuestionRenderer';
import { FeedbackBanner }   from '@/components/lesson/FeedbackBanner';
import { Icon }             from '@/components/icons';
import { Button }           from '@/components/Button';
import { completeLesson }   from '@/lib/store';

const TWO_PAGE_TYPES = new Set(['ai-detection', 'image-verification']);

export default function LessonPage() {
  const router       = useRouter();
  const { nodeId }   = useParams<{ nodeId: string }>();
  const searchParams = useSearchParams();

  const lessonQuestions = useMemo((): Question[] => {
    const qParam = searchParams.get('q');
    if (qParam) {
      const ids = qParam.split(',').map(s => s.trim());
      const filtered = ids
        .map(id => allQuestions.find(q => q.id === id))
        .filter((q): q is Question => q !== undefined);
      if (filtered.length > 0) return filtered;
    }
    return getLessonQuestions(nodeId, allQuestions);
  }, [nodeId, searchParams]);

  const TOTAL = lessonQuestions.length;

  const [qIndex, setQIndex]           = useState(0);
  const [page, setPage]               = useState(0);
  const [phase, setPhase]             = useState<'answering' | 'feedback' | 'complete'>('answering');
  const [answers, setAnswers]         = useState<(boolean | null)[]>(Array(TOTAL).fill(null));
  const [selectedOption, setOption]   = useState<number | null>(null);

  const question   = lessonQuestions[qIndex];
  const isTwoPage  = TWO_PAGE_TYPES.has(question.type);
  const locked     = answers[qIndex] !== null;
  const explanation: string | undefined =
    'tell' in question        ? question.tell.explanation :
    'explanation' in question ? question.explanation      :
    undefined;

  function handleAnswer(isCorrect: boolean) {
    const updated = answers.map((a, i) => (i === qIndex ? isCorrect : a));
    setAnswers(updated);

    if (isTwoPage) {
      setTimeout(() => {
        setPage(1);
      }, 400);
    } else {
      setPhase('feedback');
    }
  }

  function handlePageAdvance() {
    setPhase('feedback');
  }

  function advance() {
    if (qIndex < TOTAL - 1) {
      setQIndex(qIndex + 1);
      setPage(0);
      setPhase('answering');
      setOption(null);
    } else {
      completeLesson(xpEarned);
      setPhase('complete');
    }
  }

  const xpEarned = lessonQuestions.reduce(
    (sum, q, i) => sum + (answers[i] === true ? q.xp : 0),
    0,
  );

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <LessonHeader
        totalQuestions={TOTAL}
        answers={answers}
        onClose={() => router.push('/')}
      />

      <main className="flex-1 overflow-y-auto px-4 pt-5 pb-36">
        <QuestionRenderer
          question={question}
          page={page}
          locked={locked}
          selectedOption={selectedOption}
          onAnswer={handleAnswer}
          onSelectOption={setOption}
          onPageAdvance={handlePageAdvance}
        />
      </main>

      {phase === 'feedback' && (
        <FeedbackBanner
          isCorrect={answers[qIndex] as boolean}
          explanation={explanation}
          onContinue={advance}
        />
      )}

      {phase === 'complete' && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/95 px-6 gap-6">
          <Icon name="trophy" className="w-16 h-16 text-primary animate-glow-pulse" />
          <div className="text-center space-y-1">
            <h1 className="text-text font-bold text-3xl">Lesson Complete!</h1>
            <p className="text-muted-light text-base">Great work on this lesson.</p>
          </div>
          <div className="flex items-center gap-2 bg-surface rounded-2xl px-6 py-4">
            <Icon name="zap" className="w-7 h-7 text-secondary" />
            <span className="text-text font-bold text-2xl">+{xpEarned} XP</span>
          </div>
          <Button variant="primary" className="w-full max-w-xs" onClick={() => router.push('/')}>
            Continue
          </Button>
        </div>
      )}
    </div>
  );
}
