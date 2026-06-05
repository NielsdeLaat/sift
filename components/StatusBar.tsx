import type { UserState } from "@/data/user";
import { getLevelFromXP, getLevelProgress } from "@/lib/levels";
import { Icon } from "@/components/icons";

interface Props {
  user: UserState;
}

export function StatusBar({ user }: Props) {
  const level = getLevelFromXP(user.xp);
  const xpPct = getLevelProgress(user.xp);

  return (
    <header className="bg-neutral-base border-b border-neutral-light flex items-center gap-3 px-4 py-3">
      {/* ── Avatar + level badge ─────────────────────────────── */}
      <div className="relative shrink-0">
        <div className="w-11 h-11 rounded-full bg-neutral-light border-2 border-neutral-border flex items-center justify-center overflow-hidden">
          {user.avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={user.avatarUrl}
              alt={user.username}
              className="w-full h-full object-cover"
            />
          ) : (
            <Icon name="profile" className="w-7 h-7 text-contrast-dark" />
          )}
        </div>
        <span className="absolute -bottom-1 -left-1 bg-accent text-neutral-base text-[10px] font-extrabold px-1.5 py-0.5 rounded-full leading-none whitespace-nowrap">
          Lv {level}
        </span>
      </div>

      {/* ── XP label + progress bar ───────────────────────────── */}
      <div className="flex-1 flex flex-col items-center gap-1.5">
        <span className="text-contrast font-extrabold text-lg leading-none tracking-wide">
          {user.xp.toLocaleString()} XP
        </span>
        <div className="w-full h-2 rounded-full bg-neutral-border overflow-hidden">
          <div
            className="h-full rounded-full bg-accent transition-all duration-500"
            style={{ width: `${xpPct}%` }}
          />
        </div>
      </div>

      {/* ── Streak ───────────────────────────────────────────── */}
      <div className="shrink-0 flex items-center gap-1">
        <span className="text-contrast font-extrabold text-lg leading-none">
          {user.streak}
        </span>
        <Icon name="flame" className="w-6 h-6 text-accent" />
      </div>
    </header>
  );
}
