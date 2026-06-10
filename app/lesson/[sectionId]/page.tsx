'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import { getQuestions } from '@/data/questions';
import type { Question } from '@/data/questions';
import { getLessonQuestions } from '@/lib/lesson';
import { LessonHeader }     from '@/components/lesson/LessonHeader';
import { QuestionRenderer } from '@/components/lesson/QuestionRenderer';
import { FeedbackBanner }   from '@/components/lesson/FeedbackBanner';
import { Icon }             from '@/components/icons';
import { Button }           from '@/components/Button';
import { completeLesson }   from '@/lib/store';
import { useLanguage }      from '@/components/LanguageProvider';

// Types that show their own feedback UI — skip the FeedbackBanner and advance directly.
const SELF_CONTAINED_TYPES = new Set(['feed-test']);

// A test score below this fraction shows "Try Again" instead of completing the section.
const PASS_THRESHOLD = 0.6;

export default function LessonPage() {
  const router        = useRouter();
  const { sectionId } = useParams<{ sectionId: string }>();
  const searchParams  = useSearchParams();
  const isTest        = searchParams.get('type') === 'test';
  const { lang, t }   = useLanguage();

  // Computed client-side only — Math.random() in getLessonQuestions causes
  // SSR/hydration mismatch if run in useMemo (which executes on the server too).
  const [lessonQuestions, setLessonQuestions] = useState<Question[]>([]);
  const [answers, setAnswers]                 = useState<(number | null)[]>([]);

  useEffect(() => {
    const allQuestions = getQuestions(lang);
    const questions = getLessonQuestions(sectionId, isTest, allQuestions);
    setLessonQuestions(questions);
    setAnswers(Array(questions.length).fill(null));
    setQIndex(0);
    setPhase('answering');
    setOption(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  const [qIndex, setQIndex]         = useState(0);
  const [phase, setPhase]           = useState<'answering' | 'feedback' | 'complete' | 'failed'>('answering');
  const [selectedOption, setOption] = useState<number | null>(null);

  // Don't render until the client has selected questions
  if (lessonQuestions.length === 0) return null;

  const TOTAL    = lessonQuestions.length;
  const question = lessonQuestions[qIndex];
  const locked   = answers[qIndex] !== null;
  const explanation: string | undefined =
    'explanation' in question ? (question as { explanation: string }).explanation : undefined;

  function calcXp(arr: (number | null)[]): number {
    return lessonQuestions.reduce((sum, q, i) => sum + Math.round(q.xp * (arr[i] ?? 0)), 0);
  }

  function handleAnswer(score: boolean | number) {
    const numScore = typeof score === 'boolean' ? (score ? 1 : 0) : score;
    const updated = answers.map((a, i) => (i === qIndex ? numScore : a));
    setAnswers(updated);
    if (SELF_CONTAINED_TYPES.has(question.type)) {
      // FeedTest shows its own results screen — advance directly without FeedbackBanner.
      if (qIndex < TOTAL - 1) {
        setQIndex(qIndex + 1);
        setPhase('answering');
        setOption(null);
      } else {
        finishLesson(updated);
      }
    } else {
      setPhase('feedback');
    }
  }

  function finishLesson(finalAnswers: (number | null)[]) {
    const xp = calcXp(finalAnswers);
    const totalPossible = lessonQuestions.reduce((sum, q) => sum + q.xp, 0);
    if (isTest) {
      const passed = totalPossible > 0 && xp / totalPossible >= PASS_THRESHOLD;
      if (passed) {
        completeLesson(xp);
        setPhase('complete');
      } else {
        setPhase('failed');
      }
    } else {
      completeLesson(xp);
      setPhase('complete');
    }
  }

  const xpEarned = calcXp(answers);

  function advance() {
    if (qIndex < TOTAL - 1) {
      setQIndex(qIndex + 1);
      setPhase('answering');
      setOption(null);
    } else {
      finishLesson(answers);
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
          key={question.id}
          question={question}
          locked={locked}
          selectedOption={selectedOption}
          onAnswer={handleAnswer}
          onSelectOption={setOption}
        />
      </main>

      {phase === 'feedback' && (
        <FeedbackBanner
          isCorrect={(answers[qIndex] ?? 0) > 0}
          explanation={explanation}
          onContinue={advance}
        />
      )}

      {phase === 'complete' && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-base/95 px-6 gap-6">
          <Icon name="trophy" className="w-16 h-16 text-primary animate-glow-pulse" />
          <div className="text-center space-y-1">
            <h1 className="text-contrast font-bold text-3xl">
              {isTest ? t.lesson.sectionTestComplete : t.lesson.complete}
            </h1>
            <p className="text-contrast-dark text-base">{t.lesson.greatWork}</p>
          </div>
          <div className="flex items-center gap-2 bg-neutral-light rounded-2xl px-6 py-4">
            <Icon name="zap" className="w-7 h-7 text-accent" />
            <span className="text-contrast font-bold text-2xl">+{xpEarned} XP</span>
          </div>
          <Button variant="primary" className="w-full max-w-xs" onClick={() => router.push('/')}>
            {t.lesson.continue}
          </Button>
        </div>
      )}

      {phase === 'failed' && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-base/95 px-6 gap-6">
          <Icon name="close" className="w-16 h-16 text-accent animate-glow-pulse" />
          <div className="text-center space-y-1">
            <h1 className="text-contrast font-bold text-3xl">{t.lesson.notQuite}</h1>
            <p className="text-contrast-dark text-base">
              {t.lesson.needPercentage(Math.round(PASS_THRESHOLD * 100))}
            </p>
          </div>
          <Button variant="primary" className="w-full max-w-xs" onClick={() => router.push('/')}>
            {t.lesson.tryAgain}
          </Button>
        </div>
      )}
    </div>
  );
}
