'use client';

import { useLanguage } from '@/components/LanguageProvider';

interface Props {
  onReset: () => void;
}

export function ResetButton({ onReset }: Props) {
  const { t } = useLanguage();
  return (
    <div className="fixed bottom-16 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-20 pointer-events-none px-4 pb-3 flex justify-end">
      <button
        onClick={onReset}
        className="pointer-events-auto bg-neutral-light/90 backdrop-blur-sm text-contrast-dark text-xs font-bold px-3 py-1.5 rounded-full border border-contrast-dark/20 hover:border-contrast-dark/40 active:scale-95 transition-all"
      >
        {t.ui.resetDemo}
      </button>
    </div>
  );
}
