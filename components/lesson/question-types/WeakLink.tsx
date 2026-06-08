'use client';
import { useState } from 'react';
import type { WeakLinkQuestion } from '@/data/questions';
import { ExpandableCard } from '@/components/lesson/ExpandableCard';
import { Button } from '@/components/Button';

interface Props {
  question: WeakLinkQuestion;
  locked: boolean;
  onAnswer: (score: number) => void;
}

export function WeakLink({ question, locked, onAnswer }: Props) {
  const [step, setStep] = useState<'pillar' | 'verdict'>('pillar');
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);
  const [selectedVerdict, setSelectedVerdict] = useState<number | null>(null);

  const { post } = question;

  function handlePillarTap(i: number) {
    if (locked || selectedPillar !== null) return;
    setSelectedPillar(i);
    if (question.pillars[i].pillar === question.correctPillar) {
      setStep('verdict');
    } else {
      onAnswer(0);
    }
  }

  function handleVerdictConfirm() {
    if (selectedVerdict === null) return;
    onAnswer(selectedVerdict === question.correctVerdictIndex ? 1 : 0.5);
  }

  return (
    <div className="space-y-5">
      <ExpandableCard>
        <div className="bg-neutral-light rounded-2xl p-4 space-y-3">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.avatarUrl}
              alt=""
              className="w-10 h-10 rounded-full object-cover flex-shrink-0"
            />
            <div className="min-w-0">
              <p className="text-contrast font-bold text-sm leading-tight truncate">{post.sourceName}</p>
              <p className="text-contrast-dark text-xs">{post.handle} · {post.followerCount}</p>
            </div>
          </div>
          <p className="text-contrast text-sm leading-relaxed">{post.postText}</p>
        </div>
      </ExpandableCard>

      {step === 'pillar' ? (
        <>
          <h2 className="text-contrast font-bold text-xl text-center">
            {question.question ?? 'Which pillar is the weak link?'}
          </h2>

          <div className="space-y-2">
            {question.pillars.map((pillar, i) => (
              <button
                key={i}
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
          <div className="bg-primary/10 rounded-2xl p-4 border border-primary/30">
            <p className="text-primary text-sm font-semibold leading-relaxed">
              {question.pillarExplanation}
            </p>
          </div>

          <h2 className="text-contrast font-bold text-xl text-center">
            So what&apos;s your verdict?
          </h2>

          <div className="space-y-2">
            {question.verdictOptions.map((option, i) => (
              <button
                key={i}
                disabled={locked}
                onClick={() => setSelectedVerdict(i)}
                className={[
                  'w-full text-left rounded-xl border-2 px-4 py-3 text-sm font-semibold transition-colors',
                  'disabled:pointer-events-none',
                  selectedVerdict === i
                    ? 'border-primary bg-primary/15 text-contrast'
                    : 'border-contrast-dark/40 bg-neutral-light text-contrast-dark hover:border-primary/50',
                ].join(' ')}
              >
                {option}
              </button>
            ))}
          </div>

          {!locked && selectedVerdict !== null && (
            <Button variant="primary" className="w-full" onClick={handleVerdictConfirm}>
              Confirm verdict
            </Button>
          )}
        </>
      )}
    </div>
  );
}
