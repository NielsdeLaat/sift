'use client';

import { useState } from 'react';
import type { FeedTestQuestion, FeedPost, FeedVerdict } from '@/data/questions';
import { Icon } from '@/components/icons';
import { Button } from '@/components/Button';
import { useLanguage } from '@/components/LanguageProvider';
import type { Translations } from '@/lib/i18n';

interface Props {
  question: FeedTestQuestion;
  onAnswer: (isCorrect: boolean) => void;
}

// ── Verdict chip ──────────────────────────────────────────────────────────────

function VerdictChip({ verdict, tFeed }: { verdict: FeedVerdict; tFeed: Translations['questions']['feedTest'] }) {
  const styles: Record<FeedVerdict, string> = {
    true:       'bg-primary/20 text-primary border border-primary/40',
    false:      'bg-accent/20 text-accent border border-accent/40',
    misleading: 'bg-accent/20 text-accent border border-accent/40',
  };
  const labels: Record<FeedVerdict, string> = {
    true: tFeed.verdicts.true,
    false: tFeed.verdicts.false,
    misleading: tFeed.verdicts.misleading,
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
  const { t } = useLanguage();
  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-neutral-light rounded-2xl p-3 flex gap-3 items-start hover:bg-neutral-border active:bg-neutral-border transition-colors"
    >
      <div className="flex-1 min-w-0 space-y-1.5">
        <div className="flex items-center justify-between gap-2">
          <p className="text-contrast-dark text-xs font-semibold truncate">
            {post.source} · {post.timeAgo}
          </p>
          {verdict && <VerdictChip verdict={verdict} tFeed={t.questions.feedTest} />}
        </div>
        <p className="text-contrast font-bold text-sm leading-snug line-clamp-3">{post.headline}</p>
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
  const { t } = useLanguage();
  const tFeed = t.questions.feedTest;

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
      className="fixed left-1/2 -translate-x-1/2 w-full max-w-[430px] z-40 bg-neutral-base flex flex-col"
      style={{ top: 45, bottom: 0 }}
    >
      {/* Header bar */}
      <div className="shrink-0 flex items-center gap-2 px-3 py-2 border-b border-neutral-light bg-neutral-base/95 backdrop-blur-sm">
        <button
          onClick={onBack}
          className="w-8 h-8 rounded-full bg-neutral-light flex items-center justify-center text-contrast hover:bg-neutral-border transition-colors"
          aria-label={tFeed.backToFeed}
        >
          <Icon name="shrink" className="w-4 h-4" />
        </button>
        <p className="text-contrast-dark text-xs font-semibold truncate">
          {post.source} · {post.timeAgo}
        </p>
      </div>

      {/* Scrollable article body */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-3">
          <h2 className="text-contrast font-bold text-lg leading-snug">{post.headline}</h2>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.imageUrl}
            alt=""
            className="w-full rounded-xl object-cover max-h-52"
          />
          <div className="space-y-3">
            {post.body.split('\n\n').map((para, i) => (
              <p key={i} className="text-contrast-dark text-sm leading-relaxed">{para}</p>
            ))}
          </div>
        </div>
        {/* Spacer so content doesn't hide behind the verdict bar */}
        <div className="h-24" />
      </div>

      {/* Verdict bar */}
      <div className="shrink-0 flex gap-2 px-4 py-4 bg-neutral-base border-t border-neutral-light">
        {verdictButton(
          'false', tFeed.verdicts.false,
          'bg-accent border-accent text-contrast',
          'border-accent text-accent hover:bg-accent/10',
        )}
        {verdictButton(
          'true', tFeed.verdicts.true,
          'bg-primary border-primary text-neutral-base',
          'border-primary text-primary hover:bg-primary/10',
        )}
        {verdictButton(
          'misleading', tFeed.verdicts.misleadingShort,
          'bg-accent border-accent text-contrast',
          'border-accent text-accent hover:bg-accent/10',
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
  const { t } = useLanguage();
  const tFeed = t.questions.feedTest;

  return (
    <div className="space-y-4">
      <div className="text-center space-y-1">
        <p className="text-contrast-dark text-xs font-bold uppercase tracking-widest">{tFeed.results}</p>
        <p className="text-contrast font-bold text-4xl">{score} / {posts.length}</p>
        <p className="text-contrast-dark text-sm">
          {score === posts.length
            ? tFeed.perfectScore
            : tFeed.countIncorrect(posts.length - score)}
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
                'bg-neutral-light rounded-2xl p-4 space-y-2 border',
                correct ? 'border-primary/30' : 'border-accent/30',
              ].join(' ')}
            >
              <div className="flex items-start gap-2">
                <Icon
                  name={correct ? 'yesCheck' : 'noX'}
                  className={`w-5 h-5 flex-shrink-0 mt-0.5 ${correct ? 'text-primary' : 'text-accent'}`}
                />
                <p className="text-contrast font-bold text-sm leading-snug">{post.headline}</p>
              </div>

              <div className="flex items-center gap-2 flex-wrap pl-7">
                <span className="text-contrast-dark text-xs">{tFeed.youLabel}</span>
                {userVerdict && <VerdictChip verdict={userVerdict} tFeed={tFeed} />}
                {!correct && (
                  <>
                    <span className="text-contrast-dark text-xs">{tFeed.correctLabel}</span>
                    <VerdictChip verdict={post.correctVerdict} tFeed={tFeed} />
                  </>
                )}
              </div>

              <p className="text-contrast-dark text-xs leading-relaxed pl-7">
                {post.explanation}
              </p>
            </div>
          );
        })}
      </div>

      <Button variant="primary" className="w-full" onClick={onContinue}>
        {tFeed.continue}
      </Button>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export function FeedTest({ question, onAnswer }: Props) {
  const { t } = useLanguage();
  const tFeed = t.questions.feedTest;

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
        <h2 className="text-contrast font-bold text-xl text-center">
          {tFeed.heading}
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
            {tFeed.seeResults}
          </Button>
        )}
      </div>
    </>
  );
}
