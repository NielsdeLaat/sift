import { StatusBar }    from '@/components/StatusBar';
import { RoadmapPath }  from '@/components/RoadmapPath';
import { BottomNav }    from '@/components/BottomNav';
import { user }         from '@/data/user';
import { roadmap }      from '@/data/roadmap';

export default function HomePage() {
  return (
    <>
      <StatusBar user={user} />

      {/*
        pb-16 clears the fixed bottom nav (h-16).
        overflow-y-auto lets the roadmap scroll while the nav stays pinned.
      */}
      <main className="pb-16">
        <RoadmapPath sections={roadmap} />
      </main>

      <BottomNav />
    </>
  );
}
