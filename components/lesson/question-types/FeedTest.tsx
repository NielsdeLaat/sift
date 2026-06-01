'use client';

import { useState } from 'react';
import type { FeedTestQuestion, FeedPost, FeedVerdict } from '@/data/questions';
import { Icon } from '@/components/icons';
import { Button } from '@/components/Button';

interface Props {
  question: FeedTestQuestion;
  onAnswer: (isCorrect: boolean) => void;
}

// ── Verdict chip ──────────────────────────────────────────────────────────────

function VerdictChip({ verdict }: { verdict: FeedVerdict }) {
  const styles: Record<FeedVerdict, string> = {
    true:       'bg-primary/20 text-primary border border-primary/40',
    false:      'bg-secondary/20 text-secondary border border-secondary/40',
    misleading: 'bg-tertiary/20 text-tertiary border border-tertiary/40',
  };
  const labels: Record<FeedVerdict, string> = {
    true: 'True', false: 'False', misleading: 'Misleading',
  };
  return (
    <span className={`text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap ${styles[verdict]}`}>
      {labels[verdict]}
    </span>
  );
}

// ── Feed card ─────────────────────────────────────────────────────────────────

function FeedCard({
  post, verdict, onClick,
}: { post: FeedPost; verdict: FeedVerdict | undefined; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-surface rounded-2xl p-3 flex gap-3 items-start hover:bg-surface-elevated active:bg-surface-elevated transition-colors"
    >
      <div className="flex-1 min-w-0 space-y-1.5">
        <div className="flex items-center justify-between gap-2">
          <p className="text-muted text-xs font-semibold truncate">
            {post.source} · {post.timeAgo}
          </p>
          {verdict && <VerdictChip verdict={verdict} />}
        </div>
        <p className="text-text font-bold text-sm leading-snug line-clamp-3">{post.headline}</p>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={post.imageUrl}
        alt=""
        className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
      />
    </button>
  );
}

// ── Expanded post overlay ─────────────────────────────────────────────────────

function ExpandedPost({
  post, currentVerdict, onVerdict, onBack,
}: {
  post: FeedPost;
  currentVerdict: FeedVerdict | undefined;
  onVerdict: (v: FeedVerdict) => void;
  onBack: () => void;
}) {
  // No local state — the overlay closes immediately on pick, so currentVerdict prop is the source of truth.
  function verdictButton(
    v: FeedVerdict,
    label: string,
    activeClass: string,
    idleClass: string,
  ) {
    return (
      <button
        key={v}
        onClick={() => onVerdict(v)}
        className={[
          'flex-1 py-2.5 rounded-full border-2 font-bold text-sm transition-colors',
          currentVerdict === v ? activeClass : idleClass,
        ].join(' ')}
      >
        {label}
      </button>
    );
  }

  return (
    <div
      className="fixed left-1/2 -translate-x-1/2 w-full max-w-[430px] z-40 bg-background flex flex-col"
      style={{ top: 45, bottom: 0 }}
    >
      {/* Header bar */}
      <div className="shrink-0 flex items-center gap-2 px-3 py-2 border-b border-surface bg-background/95 backdrop-blur-sm">
        <button
          onClick={onBack}
          className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-text hover:bg-surface-elevated transition-colors"
          aria-label="Back to feed"
        >
          <Icon name="shrink" className="w-4 h-4" />
        </button>
        <p className="text-muted text-xs font-semibold truncate">
          {post.source} · {post.timeAgo}
        </p>
      </div>

      {/* Scrollable article body */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-3">
          <h2 className="text-text font-bold text-lg leading-snug">{post.headline}</h2>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.imageUrl}
            alt=""
            className="w-full rounded-xl object-cover max-h-52"
          />
          <div className="space-y-3">
            {post.body.split('\n\n').map((para, i) => (
              <p key={i} className="text-muted-light text-sm leading-relaxed">{para}</p>
            ))}
          </div>
        </div>
        {/* Spacer so content doesn't hide behind the verdict bar */}
        <div className="h-24" />
      </div>

      {/* Verdict bar */}
      <div className="shrink-0 flex gap-2 px-4 py-4 bg-background border-t border-surface">
        {verdictButton(
          'false', 'False',
          'bg-secondary border-secondary text-text',
          'border-secondary text-secondary hover:bg-secondary/10',
        )}
        {verdictButton(
          'true', 'True',
          'bg-primary border-primary text-background',
          'border-primary text-primary hover:bg-primary/10',
        )}
        {verdictButton(
          'misleading', 'Mislead.',
          'bg-tertiary border-tertiary text-text',
          'border-tertiary text-tertiary hover:bg-tertiary/10',
        )}
      </div>
    </div>
  );
}

// ── Results view ──────────────────────────────────────────────────────────────

function ResultsView({
  posts, verdicts, score, onContinue,
}: {
  posts: FeedPost[];
  verdicts: Record<string, FeedVerdict>;
  score: number;
  onContinue: () => void;
}) {
  return (
    <div className="space-y-4">
      <div className="text-center space-y-1">
        <p className="text-muted-light text-xs font-bold uppercase tracking-widest">Results</p>
        <p className="text-text font-bold text-4xl">{score} / {posts.length}</p>
        <p className="text-muted-light text-sm">
          {score === posts.length
            ? 'Perfect — you caught them all!'
            : `${posts.length - score} incorrect`}
        </p>
      </div>

      <div className="space-y-3">
        {posts.map(post => {
          const userVerdict = verdicts[post.id];
          const correct = userVerdict === post.correctVerdict;
          return (
            <div
              key={post.id}
              className={[
                'bg-surface rounded-2xl p-4 space-y-2 border',
                correct ? 'border-primary/30' : 'border-secondary/30',
              ].join(' ')}
            >
              <div className="flex items-start gap-2">
                <Icon
                  name={correct ? 'yesCheck' : 'noX'}
                  className={`w-5 h-5 flex-shrink-0 mt-0.5 ${correct ? 'text-primary' : 'text-secondary'}`}
                />
                <p className="text-text font-bold text-sm leading-snug">{post.headline}</p>
              </div>

              <div className="flex items-center gap-2 flex-wrap pl-7">
                <span className="text-muted text-xs">You:</span>
                {userVerdict && <VerdictChip verdict={userVerdict} />}
                {!correct && (
                  <>
                    <span className="text-muted text-xs">→ Correct:</span>
                    <VerdictChip verdict={post.correctVerdict} />
                  </>
                )}
              </div>

              <p className="text-muted-light text-xs leading-relaxed pl-7">
                {post.explanation}
              </p>
            </div>
          );
        })}
      </div>

      <Button variant="primary" className="w-full" onClick={onContinue}>
        Continue
      </Button>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export function FeedTest({ question, onAnswer }: Props) {
  const [expandedId, setExpandedId]     = useState<string | null>(null);
  const [verdicts, setVerdicts]         = useState<Record<string, FeedVerdict>>({});
  const [showResults, setShowResults]   = useState(false);

  const { posts } = question;
  const allMarked  = posts.every(p => verdicts[p.id] !== undefined);
  const score      = posts.filter(p => verdicts[p.id] === p.correctVerdict).length;
  const activePost = expandedId ? posts.find(p => p.id === expandedId) ?? null : null;

  function recordVerdict(postId: string, verdict: FeedVerdict) {
    setVerdicts(prev => ({ ...prev, [postId]: verdict }));
    setExpandedId(null);
  }

  if (showResults) {
    return (
      <ResultsView
        posts={posts}
        verdicts={verdicts}
        score={score}
        onContinue={() => onAnswer(score === posts.length)}
      />
    );
  }

  return (
    <>
      {activePost && (
        <ExpandedPost
          post={activePost}
          currentVerdict={verdicts[activePost.id]}
          onVerdict={(v) => recordVerdict(activePost.id, v)}
          onBack={() => setExpandedId(null)}
        />
      )}

      <div className="space-y-3">
        <h2 className="text-text font-bold text-xl text-center">
          Read each post and judge it
        </h2>
        <div className="space-y-2">
          {posts.map(post => (
            <FeedCard
              key={post.id}
              post={post}
              verdict={verdicts[post.id]}
              onClick={() => setExpandedId(post.id)}
            />
          ))}
        </div>
        {allMarked && (
          <Button variant="primary" className="w-full" onClick={() => setShowResults(true)}>
            See Results
          </Button>
        )}
      </div>
    </>
  );
}
