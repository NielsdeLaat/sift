'use client';

import { useState, useEffect } from 'react';
import { StatusBar }    from '@/components/StatusBar';
import { SectionBanner } from '@/components/SectionBanner';
import { RoadmapPath }  from '@/components/RoadmapPath';
import { BottomNav }    from '@/components/BottomNav';
import { ResetButton }  from '@/components/ResetButton';
import { user }         from '@/data/user';
import { roadmap }      from '@/data/roadmap';
import {
  getXpBonus,
  getNodeProgress,
  computeLiveRoadmap,
  resetProgress,
} from '@/lib/store';

export default function HomePage() {
  const [xpBonus,      setXpBonus]      = useState(0);
  const [nodeProgress, setNodeProgress] = useState(0);

  // Hydrate from localStorage after mount (avoids SSR mismatch)
  useEffect(() => {
    setXpBonus(getXpBonus());
    setNodeProgress(getNodeProgress());
  }, []);

  function handleReset() {
    resetProgress();
    setXpBonus(0);
    setNodeProgress(0);
  }

  const liveUser    = { ...user, xp: user.xp + xpBonus };
  const liveRoadmap = computeLiveRoadmap(roadmap, nodeProgress);

  return (
    <>
      <div className="sticky top-0 z-20">
        <StatusBar user={liveUser} />
        <SectionBanner sections={liveRoadmap} />
      </div>

      <main className="pb-16">
        <RoadmapPath sections={liveRoadmap} />
      </main>

      <BottomNav />
      <ResetButton onReset={handleReset} />
    </>
  );
}
