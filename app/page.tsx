import { StatusBar }    from '@/components/StatusBar';
import { SectionBanner } from '@/components/SectionBanner';
import { RoadmapPath }  from '@/components/RoadmapPath';
import { BottomNav }    from '@/components/BottomNav';
import { user }         from '@/data/user';
import { roadmap }      from '@/data/roadmap';

export default function HomePage() {
  return (
    <>
      {/* StatusBar + SectionBanner share a single sticky block */}
      <div className="sticky top-0 z-20">
        <StatusBar user={user} />
        <SectionBanner sections={roadmap} />
      </div>

      <main className="pb-16">
        <RoadmapPath sections={roadmap} />
      </main>

      <BottomNav />
    </>
  );
}
