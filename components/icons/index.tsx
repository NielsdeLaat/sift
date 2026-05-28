import type { SVGProps } from 'react';
import { HomeIcon }        from './svgs/HomeIcon';
import { PuzzleIcon }      from './svgs/PuzzleIcon';
import { LeaderboardIcon } from './svgs/LeaderboardIcon';
import { ProfileIcon }     from './svgs/ProfileIcon';
import { CheckIcon }       from './svgs/CheckIcon';
import { PlayIcon }        from './svgs/PlayIcon';
import { LockIcon }        from './svgs/LockIcon';
import { FlagIcon }        from './svgs/FlagIcon';
import { StarIcon }        from './svgs/StarIcon';
import { FlameIcon }       from './svgs/FlameIcon';
import { CloseIcon }       from './svgs/CloseIcon';
import { SearchIcon }      from './svgs/SearchIcon';
import { EditIcon }        from './svgs/EditIcon';
import { YesCheckIcon }    from './svgs/YesCheckIcon';
import { NoXIcon }         from './svgs/NoXIcon';
import { SettingsIcon }    from './svgs/SettingsIcon';
import { TrophyIcon }      from './svgs/TrophyIcon';
import { PeopleIcon }      from './svgs/PeopleIcon';
import { BookIcon }        from './svgs/BookIcon';
import { BadgeCheckIcon }  from './svgs/BadgeCheckIcon';
import { SparklesIcon }    from './svgs/SparklesIcon';
import { ZapIcon }         from './svgs/ZapIcon';
import { ExpandIcon }      from './svgs/ExpandIcon';
import { ShrinkIcon }      from './svgs/ShrinkIcon';

// ── Registry ─────────────────────────────────────────────────────────────────
// To swap any icon: replace its .tsx file in svgs/ OR point this line to a
// different component. Components must use `currentColor` so they inherit theme
// colour from their container.
const registry = {
  home:        HomeIcon,
  puzzle:      PuzzleIcon,
  leaderboard: LeaderboardIcon,
  profile:     ProfileIcon,
  check:       CheckIcon,
  play:        PlayIcon,
  lock:        LockIcon,
  flag:        FlagIcon,
  star:        StarIcon,
  flame:       FlameIcon,
  close:       CloseIcon,
  search:      SearchIcon,
  edit:        EditIcon,
  yesCheck:    YesCheckIcon,
  noX:         NoXIcon,
  settings:    SettingsIcon,
  trophy:      TrophyIcon,
  people:      PeopleIcon,
  book:        BookIcon,
  badgeCheck:  BadgeCheckIcon,
  sparkles:    SparklesIcon,
  zap:         ZapIcon,
  expand:      ExpandIcon,
  shrink:      ShrinkIcon,
} as const;

export type IconName = keyof typeof registry;

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}

// Single entry-point for every icon in the app.
// Never import an icon file directly inside a screen component.
export function Icon({ name, ...props }: IconProps) {
  const Component = registry[name];
  return <Component {...props} />;
}
