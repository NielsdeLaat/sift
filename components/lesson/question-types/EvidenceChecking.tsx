'use client';

import { useState, useEffect, useCallback } from 'react';
import type { EvidenceCheckingQuestion } from '@/data/questions';
import { ArticleCardView } from '@/components/lesson/ArticleCardView';
import { ExpandableCard }  from '@/components/lesson/ExpandableCard';
import { Button }          from '@/components/Button';
import { Icon }            from '@/components/icons';

interface Props {
  question: EvidenceCheckingQuestion;
  locked: boolean;
  onAnswer: (isCorrect: boolean) => void;
}

export function EvidenceChecking({ question, locked, onAnswer }: Props) {
  const [selecting, setSelecting]     = useState(false);
  const [selectedText, setSelectedText] = useState('');

  const closeSelecting = useCallback(() => {
    setSelecting(false);
    setSelectedText('');
    window.getSelection()?.removeAllRanges();
  }, []);

  // Track text selection changes while overlay is open
  useEffect(() => {
    if (!selecting) return;
    function onSelectionChange() {
      setSelectedText(window.getSelection()?.toString().trim() ?? '');
    }
    document.addEventListener('selectionchange', onSelectionChange);
    return () => document.removeEventListener('selectionchange', onSelectionChange);
  }, [selecting]);

  // Safety: close overlay when the answer is locked (e.g. parent resets)
  useEffect(() => {
    if (locked) closeSelecting();
  }, [locked, closeSelecting]);

  function handleConfirmEvidence() {
    closeSelecting();
    onAnswer(question.correctAnswer === 'evidence');
  }

  function handleNoEvidence() {
    onAnswer(question.correctAnswer === 'none');
  }

  return (
    <div className="space-y-5">
      <ExpandableCard>
        <ArticleCardView article={question.article} />
      </ExpandableCard>

      <h2 className="text-text font-bold text-xl text-center">
        {question.question ?? 'What evidence in the article supports the headline?'}
      </h2>

      {!locked && (
        <div className="flex gap-3">
          <Button variant="outlined" className="flex-1" onClick={() => setSelecting(true)}>
            Select Evidence
          </Button>
          <Button variant="outlined" className="flex-1" onClick={handleNoEvidence}>
            No Evidence
          </Button>
        </div>
      )}

      {/* ── Selecting overlay ─────────────────────────────────────── */}
      {selecting && (
        <div
          className="fixed left-1/2 -translate-x-1/2 w-full max-w-[430px] z-40 bg-background flex flex-col"
          style={{ top: 45, bottom: 0 }}
        >
          {/* Top bar */}
          <div className="shrink-0 flex justify-end px-3 py-2 bg-background/95 backdrop-blur-sm border-b border-surface">
            <button
              className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-text hover:bg-surface-elevated transition-colors"
              onClick={closeSelecting}
              aria-label="Close"
            >
              <Icon name="shrink" className="w-4 h-4" />
            </button>
          </div>

          {/* Scrollable article with text selection enabled */}
          <div className="flex-1 overflow-y-auto select-text">
            <ArticleCardView article={question.article} />
          </div>

          {/* Sticky bottom action bar */}
          <div className="shrink-0 flex gap-3 px-4 py-4 bg-background border-t border-surface">
            <Button variant="outlined" className="flex-1" onClick={closeSelecting}>
              Stop Selecting
            </Button>
            <Button
              variant="primary"
              className="flex-1"
              disabled={!selectedText}
              onClick={handleConfirmEvidence}
            >
              Confirm Evidence
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
