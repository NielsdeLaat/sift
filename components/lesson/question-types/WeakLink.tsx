'use client';
import { useState } from 'react';
import type { WeakLinkQuestion, WeakPillar } from '@/data/questions';
import { isCorrect } from '@/data/questions';
import { ExpandableCard } from '@/components/lesson/ExpandableCard';
import { ContentCard } from '@/components/lesson/ContentCard';
import { Button } from '@/components/Button';
import { useLanguage } from '@/components/LanguageProvider';

const PILLAR_KEYS: WeakPillar[] = ['who', 'what', 'when', 'where', 'why'];

interface Props {
  question: WeakLinkQuestion;
  locked: boolean;
  selectedOption: number | null;
  onSelectOption: (i: number) => void;
  onAnswer: (score: number) => void;
}

export function WeakLink({ question, locked, selectedOption, onSelectOption, onAnswer }: Props) {
  const { t } = useLanguage();
  const [step, setStep] = useState<'pillar' | 'explain'>('pillar');
  const [explanationText, setExplanationText] = useState('');

  const pillars = PILLAR_KEYS.map(key => ({
    pillar: key,
    label: t.questions.weakLink.pillars[key],
  }));

  function optionClass(i: number): string {
    if (locked) {
      if (isCorrect(pillars[i].pillar, question.correctPillar)) return 'border-accent-green bg-accent-green/15';
      if (selectedOption === i) return 'border-accent-red bg-accent-red/15';
      return 'border-contrast-dark/20 bg-neutral-light opacity-40';
    }
    return selectedOption === i
      ? 'border-primary bg-primary/15'
      : 'border-contrast-dark/40 bg-neutral-light hover:border-primary/50';
  }

  function handlePillarTap(i: number) {
    if (locked || selectedOption !== null) return;
    onSelectOption(i);
    const correct = isCorrect(pillars[i].pillar, question.correctPillar);
    if (!correct) {
      onAnswer(0);
      return;
    }
    if (question.difficulty === 1) {
      onAnswer(1);
    } else {
      setStep('explain');
    }
  }

  function handleExplainConfirm() {
    onAnswer(1);
  }

  return (
    <div className="space-y-5">
      <ExpandableCard>
        <ContentCard content={question.content} />
      </ExpandableCard>

      {step === 'pillar' ? (
        <>
          <h2 className="text-contrast font-bold text-xl text-center">
            {question.question ?? t.questions.weakLink.question}
          </h2>

          <div className="space-y-2">
            {pillars.map((pillar, i) => (
              <button
                key={pillar.pillar}
                disabled={locked || selectedOption !== null}
                onClick={() => handlePillarTap(i)}
                className={[
                  'w-full text-left rounded-xl border-2 px-4 py-3 transition-colors',
                  'disabled:pointer-events-none',
                  optionClass(i),
                ].join(' ')}
              >
                <p className="text-contrast font-semibold text-sm">{pillar.label}</p>
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="text-contrast font-bold text-xl text-center">
            {t.questions.weakLink.whyQuestion}
          </h2>

          <textarea
            disabled={locked}
            value={explanationText}
            onChange={(e) => setExplanationText(e.target.value)}
            placeholder={t.questions.weakLink.placeholder}
            rows={4}
            className="w-full rounded-xl border-2 border-contrast-dark/40 bg-neutral-light px-4 py-3 text-sm text-contrast placeholder:text-contrast-dark/50 focus:border-primary focus:outline-none resize-none disabled:pointer-events-none"
          />

          {!locked && explanationText.trim().length > 0 && (
            <Button variant="primary" className="w-full" onClick={handleExplainConfirm}>
              {t.questions.weakLink.submit}
            </Button>
          )}
        </>
      )}
    </div>
  );
}
