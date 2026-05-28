import { Icon, type IconName } from '@/components/icons';

interface StatCardProps {
  icon: IconName;
  iconClassName?: string;
  value: string;
  label: string;
}

export function StatCard({ icon, iconClassName = 'text-muted', value, label }: StatCardProps) {
  return (
    <div className="bg-surface rounded-2xl flex flex-col items-center justify-center gap-1.5 py-5 px-2">
      <Icon name={icon} className={`w-7 h-7 ${iconClassName}`} />
      <span className="text-text font-extrabold text-2xl leading-none">{value}</span>
      <span className="text-muted text-[11px] font-bold tracking-widest uppercase">{label}</span>
    </div>
  );
}
