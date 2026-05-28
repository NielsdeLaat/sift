import { Icon } from '@/components/icons';
import { Button } from '@/components/Button';

interface Props {
  isCorrect: boolean;
  onContinue: () => void;
}

export function FeedbackBanner({ isCorrect, onContinue }: Props) {
  return (
    <div
      className={[
        'fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-30',
        'px-5 pt-4 pb-6 flex flex-col gap-3 border-t',
        isCorrect
          ? 'bg-primary/15 border-primary/40'
          : 'bg-secondary/15 border-secondary/40',
      ].join(' ')}
    >
      <div className="flex items-center gap-2">
        <Icon
          name={isCorrect ? 'yesCheck' : 'noX'}
          className={`w-6 h-6 ${isCorrect ? 'text-primary' : 'text-secondary'}`}
        />
        <span
          className={`font-bold text-base ${isCorrect ? 'text-primary' : 'text-secondary'}`}
        >
          {isCorrect ? 'Correct!' : 'Incorrect'}
        </span>
      </div>
      <Button variant="primary" className="w-full" onClick={onContinue}>
        Continue
      </Button>
    </div>
  );
}
