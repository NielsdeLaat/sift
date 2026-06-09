'use client';

import { useRouter } from 'next/navigation';
import { Icon } from '@/components/icons';
import { useLanguage } from '@/components/LanguageProvider';
import type { Lang } from '@/lib/i18n';

export default function SettingsPage() {
  const router = useRouter();
  const { lang, setLang, t } = useLanguage();

  const options: { value: Lang; label: string }[] = [
    { value: 'nl', label: t.settings.dutch },
    { value: 'en', label: t.settings.english },
  ];

  return (
    <>
      <header className="sticky top-0 z-20 bg-neutral-base flex items-center gap-3 px-5 pt-10 pb-4 border-b border-neutral-light">
        <button
          onClick={() => router.back()}
          className="text-contrast-dark hover:text-contrast transition-colors"
          aria-label="Terug / Back"
        >
          <Icon name="close" className="w-5 h-5" />
        </button>
        <h1 className="text-contrast font-bold text-xl">{t.settings.title}</h1>
      </header>

      <main className="px-5 py-6 space-y-6">
        <section className="bg-neutral-light border border-neutral-border rounded-2xl p-5 space-y-3">
          <h2 className="text-contrast font-bold text-base">{t.settings.language}</h2>
          <div className="flex gap-3">
            {options.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setLang(value)}
                className={[
                  'flex-1 py-3 rounded-xl border-2 font-bold text-sm transition-colors',
                  lang === value
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-neutral-border bg-neutral-base text-contrast-dark hover:border-primary/40',
                ].join(' ')}
              >
                {label}
              </button>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
