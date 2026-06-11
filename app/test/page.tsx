'use client';

export const dynamic = 'force-dynamic';

import { Suspense, useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { getQuestions } from '@/data/questionBank';
import type { Question } from '@/data/questions';
import { SELF_CONTAINED_TYPES, calcXp } from '@/lib/lesson';
import { LessonHeader }     from '@/components/lesson/LessonHeader';
import { QuestionRenderer } from '@/components/lesson/QuestionRenderer';
import { FeedbackBanner }   from '@/components/lesson/FeedbackBanner';
import { Icon }             from '@/components/icons';
import { Button }           from '@/components/Button';
import { useLanguage }      from '@/components/LanguageProvider';


export default function TestPage() {
  return (
    <Suspense>
      <TestPageContent />
    </Suspense>
  );
}

function TestPageContent() {
  const router       = useRouter();
  const searchParams = useSearchParams();
  const { lang, t }  = useLanguage();

  const [lessonQuestions, setLessonQuestions] = useState<Question[]>([]);
  const [answers, setAnswers]                 = useState<(number | null)[]>([]);

  useEffect(() => {
    const allQuestions = getQuestions(lang);
    const q = searchParams.get('q') ?? '';

    let questions: Question[];
    const exact = allQuestions.find(r => r.id === q);
    if (exact) {
      questions = [exact];
    } else {
      const pool = allQuestions.filter(r => r.id.startsWith(q + '-'));
      const pick = pool[Math.floor(Math.random() * pool.length)];
      questions = pick ? [pick] : [];
    }

    setLessonQuestions(questions);
    setAnswers(Array(questions.length).fill(null));
    setQIndex(0);
    setPhase('answering');
    setOption(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  const [qIndex, setQIndex]         = useState(0);
  const [phase, setPhase]           = useState<'answering' | 'feedback' | 'complete'>('answering');
  const [selectedOption, setOption] = useState<number | null>(null);

  if (lessonQuestions.length === 0) return null;

  const TOTAL    = lessonQuestions.length;
  const question = lessonQuestions[qIndex];
  const locked   = answers[qIndex] !== null;
  const explanation: string | undefined =
    'explanation' in question ? (question as { explanation: string }).explanation : undefined;

  function handleAnswer(score: boolean | number) {
    const numScore = typeof score === 'boolean' ? (score ? 1 : 0) : score;
    const updated = answers.map((a, i) => (i === qIndex ? numScore : a));
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

  const xpEarned = calcXp(lessonQuestions, answers);

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
            <h1 className="text-contrast font-bold text-3xl">{t.pages.testDone}</h1>
            <p className="text-contrast-dark text-base">{t.pages.testRunComplete}</p>
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
    </div>
  );
}
