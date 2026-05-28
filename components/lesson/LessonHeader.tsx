import { Icon } from '@/components/icons';

interface Props {
  totalQuestions: number;
  answers: (boolean | null)[];
  onClose: () => void;
}

export function LessonHeader({ totalQuestions, answers, onClose }: Props) {
  return (
    <div className="sticky top-0 z-20 bg-background flex items-center gap-3 px-4 py-3 border-b border-surface">
      <button
        onClick={onClose}
        className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-muted hover:text-text transition-colors"
        aria-label="Exit lesson"
      >
        <Icon name="close" className="w-5 h-5" />
      </button>

      <div className="flex-1 flex gap-1.5">
        {Array.from({ length: totalQuestions }).map((_, i) => (
          <div
            key={i}
            className={[
              'h-2 flex-1 rounded-full transition-colors duration-300',
              answers[i] !== null ? 'bg-primary' : 'bg-muted/30',
            ].join(' ')}
          />
        ))}
      </div>

      <Icon name="flag" className="flex-shrink-0 w-5 h-5 text-muted" />
    </div>
  );
}
