import type { CSSProperties } from 'react';

interface Props {
  title: string;
  style: CSSProperties;
}

export function SectionDivider({ title, style }: Props) {
  return (
    <div
      className="absolute left-0 right-0 flex items-center gap-3 px-6"
      style={{ ...style, transform: 'translateY(-50%)' }}
    >
      <div className="flex-1 h-px bg-contrast-dark/30" />
      <span className="text-contrast-dark text-sm font-semibold shrink-0 tracking-wide">{title}</span>
      <div className="flex-1 h-px bg-contrast-dark/30" />
    </div>
  );
}
