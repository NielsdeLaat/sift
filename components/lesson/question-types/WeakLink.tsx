'use client';
import { useState } from 'react';
import type { WeakLinkQuestion, WeakPillar } from '@/data/questions';

const PILLARS: { pillar: WeakPillar; label: string }[] = [
  { pillar: 'who',   label: 'Who?'   },
  { pillar: 'what',  label: 'What?'  },
  { pillar: 'when',  label: 'When?'  },
  { pillar: 'where', label: 'Where?' },
  { pillar: 'why',   label: 'Why?'   },
];
import { ExpandableCard } from '@/components/lesson/ExpandableCard';
import { ContentCard } from '@/components/lesson/ContentCard';
import { Button } from '@/components/Button';

interface Props {
  question: WeakLinkQuestion;
  locked: boolean;
  onAnswer: (score: number) => void;
}

export function WeakLink({ question, locked, onAnswer }: Props) {
  const [step, setStep] = useState<'pillar' | 'explain'>('pillar');
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);
  const [explanationText, setExplanationText] = useState('');

  function handlePillarTap(i: number) {
    if (locked || selectedPillar !== null) return;
    setSelectedPillar(i);
    const correct = PILLARS[i].pillar === question.correctPillar;
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
            {question.question ?? 'Which pillar is the weak link?'}
          </h2>

          <div className="space-y-2">
            {PILLARS.map((pillar, i) => (
              <button
                key={pillar.pillar}
                disabled={locked || selectedPillar !== null}
                onClick={() => handlePillarTap(i)}
                className={[
                  'w-full text-left rounded-xl border-2 px-4 py-3 transition-colors',
                  'disabled:pointer-events-none',
                  selectedPillar === i
                    ? 'border-primary bg-primary/15'
                    : 'border-contrast-dark/40 bg-neutral-light hover:border-primary/50',
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
            Why is this pillar the weak link?
          </h2>

          <textarea
            disabled={locked}
            value={explanationText}
            onChange={(e) => setExplanationText(e.target.value)}
            placeholder="Explain in your own words…"
            rows={4}
            className="w-full rounded-xl border-2 border-contrast-dark/40 bg-neutral-light px-4 py-3 text-sm text-contrast placeholder:text-contrast-dark/50 focus:border-primary focus:outline-none resize-none disabled:pointer-events-none"
          />

          {!locked && explanationText.trim().length > 0 && (
            <Button variant="primary" className="w-full" onClick={handleExplainConfirm}>
              Submit
            </Button>
          )}
        </>
      )}
    </div>
  );
}
