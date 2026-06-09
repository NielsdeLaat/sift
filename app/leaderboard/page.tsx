'use client';

import { BottomNav } from '@/components/BottomNav';
import { useLanguage } from '@/components/LanguageProvider';

export default function LeaderboardPage() {
  const { t } = useLanguage();
  return (
    <>
      <main className="flex items-center justify-center min-h-[calc(100dvh-4rem)] pb-16">
        <p className="text-contrast-dark font-semibold text-lg">{t.pages.leaderboard}</p>
      </main>
      <BottomNav />
    </>
  );
}
