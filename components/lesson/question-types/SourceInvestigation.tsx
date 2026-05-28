import type { SourceInvestigationQuestion } from '@/data/questions';
import { ExpandableCard } from '@/components/lesson/ExpandableCard';
import { Button } from '@/components/Button';

interface Props {
  question: SourceInvestigationQuestion;
  locked: boolean;
  onAnswer: (isCorrect: boolean) => void;
}

export function SourceInvestigation({ question, locked, onAnswer }: Props) {
  const { post } = question;
  return (
    <div className="space-y-5">
      <ExpandableCard>
        <div className="bg-surface rounded-2xl p-4 space-y-3">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.avatarUrl}
              alt=""
              className="w-10 h-10 rounded-full object-cover flex-shrink-0"
            />
            <div className="min-w-0">
              <p className="text-text font-bold text-sm leading-tight truncate">{post.sourceName}</p>
              <p className="text-muted text-xs">{post.handle} · {post.followerCount}</p>
            </div>
          </div>
          <p className="text-text text-sm leading-relaxed">{post.postText}</p>
          {post.postImageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={post.postImageUrl} alt="" className="w-full rounded-xl object-cover max-h-44" />
          )}
        </div>
      </ExpandableCard>

      <h2 className="text-text font-bold text-xl text-center">
        Investigate the source, is it trustworthy?
      </h2>
      <div className="flex gap-3 justify-center">
        <Button
          variant="yes"
          disabled={locked}
          onClick={() => onAnswer(question.correctAnswer === 'yes')}
        >
          Yes
        </Button>
        <Button
          variant="no"
          disabled={locked}
          onClick={() => onAnswer(question.correctAnswer === 'no')}
        >
          No
        </Button>
      </div>
    </div>
  );
}
