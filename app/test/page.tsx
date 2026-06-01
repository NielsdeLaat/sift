'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { questions as allQuestions } from '@/data/questions';
import type { Question } from '@/data/questions';
import { LessonHeader }     from '@/components/lesson/LessonHeader';
import { QuestionRenderer } from '@/components/lesson/QuestionRenderer';
import { FeedbackBanner }   from '@/components/lesson/FeedbackBanner';
import { Icon }             from '@/components/icons';
import { Button }           from '@/components/Button';

const SELF_CONTAINED_TYPES = new Set(['feed-test']);

export default function TestPage() {
  const router       = useRouter();
  const searchParams = useSearchParams();

  const [lessonQuestions, setLessonQuestions] = useState<Question[]>([]);
  const [answers, setAnswers]                 = useState<(boolean | null)[]>([]);

  useEffect(() => {
    const qParam = searchParams.get('q');
    let questions: Question[];
    if (qParam) {
      const ids      = qParam.split(',').map(s => s.trim());
      const filtered = ids
        .map(id => allQuestions.find(q => q.id === id))
        .filter((q): q is Question => q !== undefined);
      questions = filtered.length > 0 ? filtered : allQuestions.filter(q => q.type !== 'feed-test').slice(0, 3);
    } else {
      questions = [...allQuestions.filter(q => q.type !== 'feed-test')]
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
    }
    setLessonQuestions(questions);
    setAnswers(Array(questions.length).fill(null));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [qIndex, setQIndex]         = useState(0);
  const [phase, setPhase]           = useState<'answering' | 'feedback' | 'complete'>('answering');
  const [selectedOption, setOption] = useState<number | null>(null);

  if (lessonQuestions.length === 0) return null;

  const TOTAL    = lessonQuestions.length;
  const question = lessonQuestions[qIndex];
  const locked   = answers[qIndex] !== null;
  const explanation: string | undefined =
    'tell' in question        ? question.tell.explanation :
    'explanation' in question ? question.explanation      :
    undefined;

  function calcXp(arr: (boolean | null)[]): number {
    return lessonQuestions.reduce((sum, q, i) => sum + (arr[i] === true ? q.xp : 0), 0);
  }

  function handleAnswer(isCorrect: boolean) {
    const updated = answers.map((a, i) => (i === qIndex ? isCorrect : a));
    setAnswers(updated);
    if (SELF_CONTAINED_TYPES.has(question.type)) {
      if (qIndex < TOTAL - 1) {
        setQIndex(qIndex + 1);
        setPhase('answering');
        setOption(null);
      } else {
        setPhase('complete');
      }
    } else {
      setPhase('feedback');
    }
  }

  const xpEarned = calcXp(answers);

  function advance() {
    if (qIndex < TOTAL - 1) {
      setQIndex(qIndex + 1);
      setPhase('answering');
      setOption(null);
    } else {
      setPhase('complete');
    }
  }

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
          locked={locked}
          selectedOption={selectedOption}
          onAnswer={handleAnswer}
          onSelectOption={setOption}
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
            <h1 className="text-text font-bold text-3xl">Done!</h1>
            <p className="text-muted-light text-base">Test run complete.</p>
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
