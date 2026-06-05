import type { CSSProperties } from "react";
import Link from "next/link";
import type { LevelNode as LevelNodeType, NodeIcon } from "@/data/roadmap";
import { Icon, type IconName } from "@/components/icons";

interface Props {
  node: LevelNodeType;
  style: CSSProperties;
  href?: string;
}

function resolveIcon(icon: NodeIcon): IconName {
  const map: Record<string, IconName> = {
    check: "check",
    play: "play",
    lock: "lock",
    flag: "flag",
    star: "star",
  };
  return (map[icon] as IconName) ?? "lock";
}

export function LevelNode({ node, style, href }: Props) {
  const isActive = node.status === "completed" || node.status === "current";
  const isCurrent = node.status === "current";

  const sizeClass = isCurrent
    ? "w-20 h-20"
    : isActive
      ? "w-16 h-16"
      : "w-14 h-14";
  const bgClass = isActive ? "bg-primary" : "bg-neutral-light";
  const borderClass = isActive ? "" : "border-2 border-neutral-border";
  const iconColor = isActive ? "text-contrast" : "text-contrast-dark";
  const iconSize =
    node.icon === "play"
      ? isActive
        ? "w-12 h-12"
        : "w-10 h-10"
      : isActive
        ? "w-8 h-8"
        : "w-7 h-7";

  return (
    <div
      className="absolute flex flex-col items-center"
      style={{ ...style, transform: "translate(-50%, -50%)" }}
    >
      {/* Tooltip */}
      {isCurrent && node.label && (
        <div className="mb-2 px-3 py-1.5 bg-neutral-border text-contrast text-sm font-semibold rounded-lg shadow-lg whitespace-nowrap">
          {node.label}
        </div>
      )}

      {/* Circle */}
      {href ? (
        <Link
          href={href}
          className={[
            "flex items-center justify-center rounded-full transition-all",
            sizeClass,
            bgClass,
            borderClass,
            isCurrent ? "shadow-glow-primary animate-glow-pulse" : "",
            isActive && !isCurrent ? "shadow-glow-primary-sm" : "",
          ].join(" ")}
        >
          <Icon
            name={resolveIcon(node.icon)}
            className={`${iconSize} ${iconColor}`}
          />
        </Link>
      ) : (
        <div
          className={[
            "flex items-center justify-center rounded-full transition-all",
            sizeClass,
            bgClass,
            borderClass,
            isCurrent ? "shadow-glow-primary animate-glow-pulse" : "",
            isActive && !isCurrent ? "shadow-glow-primary-sm" : "",
          ].join(" ")}
        >
          <Icon
            name={resolveIcon(node.icon)}
            className={`${iconSize} ${iconColor}`}
          />
        </div>
      )}
    </div>
  );
}
