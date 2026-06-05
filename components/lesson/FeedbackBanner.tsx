import { Icon } from '@/components/icons';
import { Button } from '@/components/Button';

interface Props {
  isCorrect: boolean;
  explanation?: string;
  onContinue: () => void;
}

export function FeedbackBanner({ isCorrect, explanation, onContinue }: Props) {
  return (
    <div
      className={[
        'fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-30',
        'px-5 pt-4 pb-6 flex flex-col gap-3 border-t',
        isCorrect
          ? 'bg-neutral-base border-accent-green'
          : 'bg-neutral-base border-accent-red',
      ].join(' ')}
    >
      <div className="flex items-start gap-2">
        <Icon
          name={isCorrect ? 'yesCheck' : 'noX'}
          className={`w-6 h-6 flex-shrink-0 mt-0.5 ${isCorrect ? 'text-accent-green' : 'text-accent-red'}`}
        />
        <div className="space-y-0.5">
          <p className={`font-bold text-base leading-tight ${isCorrect ? 'text-accent-green' : 'text-accent-red'}`}>
            {isCorrect ? 'Correct!' : 'Incorrect'}
          </p>
          {explanation && (
            <p className="text-contrast-dark text-sm leading-relaxed">{explanation}</p>
          )}
        </div>
      </div>
      <Button variant="primary" className="w-full" onClick={onContinue}>
        Continue
      </Button>
    </div>
  );
}
