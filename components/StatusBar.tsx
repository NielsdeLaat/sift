import type { UserState } from '@/data/user';
import { Icon } from '@/components/icons';

interface Props {
  user: UserState;
}

export function StatusBar({ user }: Props) {
  const xpPct = Math.min(100, Math.round((user.xp / user.xpForNextLevel) * 100));

  return (
    <header className="sticky top-0 z-20 bg-background border-b border-surface flex items-center gap-3 px-4 py-3">

      {/* ── Avatar + level badge ─────────────────────────────── */}
      <div className="relative shrink-0">
        <div className="w-11 h-11 rounded-full bg-surface border-2 border-surface-elevated flex items-center justify-center overflow-hidden">
          {user.avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={user.avatarUrl}
              alt={user.username}
              className="w-full h-full object-cover"
            />
          ) : (
            <Icon name="profile" className="w-7 h-7 text-muted" />
          )}
        </div>
        <span className="absolute -bottom-1 -left-1 bg-secondary text-text text-[10px] font-extrabold px-1.5 py-0.5 rounded-full leading-none whitespace-nowrap">
          Lv {user.level}
        </span>
      </div>

      {/* ── XP label + progress bar ───────────────────────────── */}
      <div className="flex-1 flex flex-col items-center gap-1.5">
        <span className="text-primary font-extrabold text-lg leading-none tracking-wide">
          {user.xp.toLocaleString()} XP
        </span>
        <div className="w-full h-2 rounded-full bg-surface-elevated overflow-hidden">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500"
            style={{ width: `${xpPct}%` }}
          />
        </div>
      </div>

      {/* ── Streak ───────────────────────────────────────────── */}
      <div className="shrink-0 flex items-center gap-1">
        <span className="text-text font-extrabold text-lg leading-none">{user.streak}</span>
        <Icon name="flame" className="w-6 h-6 text-secondary" />
      </div>
    </header>
  );
}
