import type { Achievement } from '@/data/user';
import { Icon, type IconName } from '@/components/icons';

interface AchievementBadgeProps {
  achievement: Achievement;
}

export function AchievementBadge({ achievement }: AchievementBadgeProps) {
  return (
    <div className="flex flex-col items-center gap-2 min-w-[72px]">
      <div
        className={[
          'w-16 h-16 rounded-full flex items-center justify-center',
          achievement.earned ? 'bg-primary' : 'bg-neutral-border',
        ].join(' ')}
      >
        <Icon
          name={achievement.icon as IconName}
          className={`w-8 h-8 ${achievement.earned ? 'text-contrast' : 'text-contrast-dark'}`}
        />
      </div>
      <span
        className={[
          'text-xs font-bold text-center leading-tight',
          achievement.earned ? 'text-contrast' : 'text-contrast-dark',
        ].join(' ')}
      >
        {achievement.label}
      </span>
    </div>
  );
}
