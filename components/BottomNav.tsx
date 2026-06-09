"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon, type IconName } from "@/components/icons";
import { useLanguage } from "@/components/LanguageProvider";

export function BottomNav() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const TABS: { icon: IconName; label: string; href: string }[] = [
    { icon: "home", label: t.nav.home, href: "/" },
    { icon: "puzzle", label: t.nav.dailyPuzzle, href: "/puzzles" },
    { icon: "leaderboard", label: t.nav.leaderboard, href: "/leaderboard" },
    { icon: "profile", label: t.nav.profile, href: "/profile" },
  ];

  return (
    // fixed to viewport bottom, centred within the 430px phone shell
    <nav
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-30 bg-neutral-light border-t border-neutral-border"
      aria-label="Main navigation"
    >
      <ul className="flex items-center justify-around h-16 px-2">
        {TABS.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <li key={tab.href} className="flex-1">
              <Link
                href={tab.href}
                aria-label={tab.label}
                aria-current={isActive ? "page" : undefined}
                className="flex items-center justify-center h-16"
              >
                <div
                  className={[
                    "w-11 h-11 flex items-center justify-center rounded-full transition-colors duration-150",
                    isActive ? "bg-primary" : "",
                  ].join(" ")}
                >
                  <Icon
                    name={tab.icon}
                    className={[
                      "w-6 h-6 transition-colors duration-150",
                      "text-contrast",
                    ].join(" ")}
                  />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
