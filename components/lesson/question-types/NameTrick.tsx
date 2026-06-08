import type { NameTrickQuestion } from '@/data/questions';
import { ExpandableCard } from '@/components/lesson/ExpandableCard';
import { Button } from '@/components/Button';

interface Props {
  question: NameTrickQuestion;
  locked: boolean;
  selectedOption: number | null;
  onSelectOption: (i: number) => void;
  onAnswer: (isCorrect: boolean) => void;
}

export function NameTrick({ question, locked, selectedOption, onSelectOption, onAnswer }: Props) {
  const { post } = question;
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
          {post.postImageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={post.postImageUrl} alt="" className="w-full rounded-xl object-cover max-h-44" />
          )}
        </div>
      </ExpandableCard>

      <h2 className="text-contrast font-bold text-xl text-center">
        {question.question ?? 'Which technique is this post using?'}
      </h2>

      <div className="space-y-2">
        {question.options.map((option, i) => (
          <button
            key={i}
            disabled={locked}
            onClick={() => onSelectOption(i)}
            className={[
              'w-full text-left rounded-xl border-2 px-4 py-3 text-sm font-semibold transition-colors',
              'disabled:pointer-events-none',
              selectedOption === i
                ? 'border-primary bg-primary/15 text-contrast'
                : 'border-contrast-dark/40 bg-neutral-light text-contrast-dark hover:border-primary/50',
            ].join(' ')}
          >
            {option}
          </button>
        ))}
      </div>

      {!locked && selectedOption !== null && (
        <Button
          variant="primary"
          className="w-full"
          onClick={() => onAnswer(selectedOption === question.correctIndex)}
        >
          Confirm
        </Button>
      )}
    </div>
  );
}
