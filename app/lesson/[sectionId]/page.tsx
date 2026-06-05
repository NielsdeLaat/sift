'use client';

import { useState, useEffect } from 'react';
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

// Types that show their own feedback UI — skip the FeedbackBanner and advance directly.
const SELF_CONTAINED_TYPES = new Set(['feed-test']);

export default function LessonPage() {
  const router        = useRouter();
  const { sectionId } = useParams<{ sectionId: string }>();
  const searchParams  = useSearchParams();
  const isTest        = searchParams.get('type') === 'test';

  // Computed client-side only — Math.random() in getLessonQuestions causes
  // SSR/hydration mismatch if run in useMemo (which executes on the server too).
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
      questions = filtered.length > 0 ? filtered : getLessonQuestions(sectionId, isTest, allQuestions);
    } else {
      questions = getLessonQuestions(sectionId, isTest, allQuestions);
    }
    // Batch both updates so the component never renders with mismatched lengths
    setLessonQuestions(questions);
    setAnswers(Array(questions.length).fill(null));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [qIndex, setQIndex]         = useState(0);
  const [phase, setPhase]           = useState<'answering' | 'feedback' | 'complete'>('answering');
  const [selectedOption, setOption] = useState<number | null>(null);

  // Don't render until the client has selected questions
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
      // FeedTest shows its own results screen — advance directly without FeedbackBanner.
      if (qIndex < TOTAL - 1) {
        setQIndex(qIndex + 1);
        setPhase('answering');
        setOption(null);
      } else {
        completeLesson(calcXp(updated));
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
      completeLesson(xpEarned);
      setPhase('complete');
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-neutral-base">
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
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-base/95 px-6 gap-6">
          <Icon name="trophy" className="w-16 h-16 text-primary animate-glow-pulse" />
          <div className="text-center space-y-1">
            <h1 className="text-contrast font-bold text-3xl">
              {isTest ? 'Section Test Complete!' : 'Lesson Complete!'}
            </h1>
            <p className="text-contrast-dark text-base">Great work on this lesson.</p>
          </div>
          <div className="flex items-center gap-2 bg-neutral-light rounded-2xl px-6 py-4">
            <Icon name="zap" className="w-7 h-7 text-accent" />
            <span className="text-contrast font-bold text-2xl">+{xpEarned} XP</span>
          </div>
          <Button variant="primary" className="w-full max-w-xs" onClick={() => router.push('/')}>
            Continue
          </Button>
        </div>
      )}
    </div>
  );
}
