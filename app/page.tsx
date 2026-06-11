'use client';

import { useState, useEffect } from 'react';
import { StatusBar }    from '@/components/StatusBar';
import { SectionBanner } from '@/components/SectionBanner';
import { RoadmapPath }  from '@/components/RoadmapPath';
import { BottomNav }    from '@/components/BottomNav';
import { ResetButton }  from '@/components/ResetButton';
import { DemoMenu }     from '@/components/DemoMenu';
import { user }         from '@/data/user';
import { roadmap }      from '@/data/roadmap';
import {
  getXpBonus,
  getNodeProgress,
  computeLiveRoadmap,
  resetProgress,
  jumpToNode,
} from '@/lib/store';

export default function HomePage() {
  const [xpBonus,       setXpBonus]       = useState(0);
  const [nodeProgress,  setNodeProgress]  = useState(0);
  const [demoMenuOpen,  setDemoMenuOpen]  = useState(false);

  // Hydrate from localStorage after mount (avoids SSR mismatch)
  useEffect(() => {
    setXpBonus(getXpBonus());
    setNodeProgress(getNodeProgress());
  }, []);

  // Scroll to the current node after hydration or after jumping to a section
  useEffect(() => {
    document.getElementById('current-node')?.scrollIntoView({ block: 'center', behavior: 'instant' });
  }, [nodeProgress]);

  function handleReset() {
    resetProgress();
    setXpBonus(0);
    setNodeProgress(0);
  }

  function handleJumpTo(progress: number) {
    jumpToNode(progress);
    setXpBonus(0);
    setNodeProgress(progress);
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
      <ResetButton onClick={() => setDemoMenuOpen(true)} />

      {demoMenuOpen && (
        <DemoMenu
          sections={liveRoadmap}
          onJumpTo={handleJumpTo}
          onReset={handleReset}
          onClose={() => setDemoMenuOpen(false)}
        />
      )}
    </>
  );
}
