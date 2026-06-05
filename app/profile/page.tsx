import { BottomNav } from "@/components/BottomNav";
import { Icon } from "@/components/icons";
import { StatCard } from "@/components/StatCard";
import { AchievementBadge } from "@/components/AchievementBadge";
import { Button } from "@/components/Button";
import { user } from "@/data/user";
import { getLevelFromXP } from "@/lib/levels";

export default function ProfilePage() {
  const level = getLevelFromXP(user.xp);

  return (
    <>
      {/* ── Top bar ──────────────────────────────────────────────── */}
      <header className="sticky top-0 z-20 bg-neutral-base flex items-center justify-between px-5 pt-10 pb-4">
        <h1 className="text-contrast font-bold text-xl">Profile</h1>
        <div className="flex items-center gap-4">
          <button
            aria-label="Edit profile"
            className="text-contrast-dark hover:text-contrast transition-colors"
          >
            <Icon name="edit" className="w-5 h-5" />
          </button>
          <button
            aria-label="Settings"
            className="text-contrast-dark hover:text-contrast transition-colors"
          >
            <Icon name="settings" className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* ── Scrollable content ───────────────────────────────────── */}
      <main className="pb-20 px-4 space-y-5">
        {/* ── Identity block ───────────────────────────────────── */}
        <section className="flex flex-col items-center gap-3 pt-4 pb-2">
          {/* Avatar + level badge */}
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-neutral-border border-[3px] border-contrast/20 flex items-center justify-center overflow-hidden">
              {user.avatarUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={user.avatarUrl}
                  alt={user.username}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Icon name="profile" className="w-14 h-14 text-contrast-dark" />
              )}
            </div>
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-accent text-contrast text-sm font-extrabold px-4 py-1 rounded-full whitespace-nowrap shadow-lg">
              Lv {level}
            </span>
          </div>

          {/* Name + title */}
          <div className="flex flex-col items-center gap-1 mt-2">
            <h2 className="text-contrast font-extrabold text-2xl">
              {user.username}
            </h2>
            <p className="text-contrast-dark text-sm">{user.title}</p>
          </div>

          {/* XP pill */}
          <div className="bg-neutral-light border border-neutral-border rounded-full px-8 py-3 mt-1">
            <span className="text-contrast font-extrabold text-2xl tracking-wide">
              {user.xp.toLocaleString()} XP
            </span>
          </div>
        </section>

        {/* ── Stats row ────────────────────────────────────────── */}
        <section className="grid grid-cols-3 gap-3" aria-label="Stats">
          <StatCard
            icon="flame"
            iconClassName="text-accent"
            value={String(user.streak)}
            label="Streak"
          />
          <StatCard
            icon="people"
            value={String(user.friends)}
            label="Friends"
          />
          <StatCard icon="trophy" value={user.league} label="League" />
        </section>

        {/* ── Add Friends ──────────────────────────────────────── */}
        <Button variant="primary" className="w-full py-4">
          Add Friends
        </Button>

        {/* ── Achievements ─────────────────────────────────────── */}
        <section
          className="bg-neutral-light border border-neutral-border rounded-2xl p-5"
          aria-label="Achievements"
        >
          <h3 className="text-contrast font-bold text-lg mb-5">Achievements</h3>
          {/* 4-column grid: every 4th badge starts a new row automatically */}
          <div className="grid grid-cols-4 gap-x-2 gap-y-5">
            {user.achievements.map((achievement) => (
              <AchievementBadge
                key={achievement.id}
                achievement={achievement}
              />
            ))}
          </div>
        </section>
      </main>

      <BottomNav />
    </>
  );
}
