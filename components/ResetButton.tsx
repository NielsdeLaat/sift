'use client';

interface Props {
  onReset: () => void;
}

export function ResetButton({ onReset }: Props) {
  return (
    <div className="fixed bottom-16 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-20 pointer-events-none px-4 pb-3 flex justify-end">
      <button
        onClick={onReset}
        className="pointer-events-auto bg-surface/90 backdrop-blur-sm text-muted text-xs font-bold px-3 py-1.5 rounded-full border border-muted/20 hover:border-muted/40 active:scale-95 transition-all"
      >
        Reset demo
      </button>
    </div>
  );
}
