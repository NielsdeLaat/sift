import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Icon } from '@/components/icons';

export type ButtonVariant = 'primary' | 'outlined' | 'yes' | 'no' | 'circle';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-contrast rounded-full px-8 py-3 shadow-inner-top hover:bg-primary/90 active:bg-primary/80',
  outlined:
    'border-2 border-primary text-primary rounded-full w-36 h-10 hover:bg-primary/10 active:bg-primary/20',
  yes:
    'bg-primary text-contrast rounded-full w-36 h-10 shadow-inner-top hover:bg-primary/90 active:bg-primary/80',
  no:
    'border-2 border-accent text-accent rounded-full w-36 h-10 hover:bg-accent/10 active:bg-accent/20',
  circle:
    'bg-neutral-light w-12 h-12 rounded-full border border-neutral-border hover:bg-neutral-border active:bg-neutral-border/80',
};

export function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        'inline-flex items-center justify-center gap-2 font-bold transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
        'disabled:opacity-50 disabled:pointer-events-none',
        variantClasses[variant],
        className,
      ].join(' ')}
      {...props}
    >
      {variant === 'yes' && <Icon name="yesCheck" className="w-5 h-5" />}
      {variant === 'no'  && <Icon name="noX"      className="w-5 h-5" />}
      {children}
    </button>
  );
}
