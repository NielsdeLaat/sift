import { Icon, type IconName } from '@/components/icons';

interface StatCardProps {
  icon: IconName;
  iconClassName?: string;
  value: string;
  label: string;
}

export function StatCard({ icon, iconClassName = 'text-contrast-dark', value, label }: StatCardProps) {
  return (
    <div className="bg-neutral-light border border-neutral-border rounded-2xl flex flex-col items-center justify-center gap-2 py-5 px-2">
      <div className="bg-neutral-border rounded-xl p-2">
        <Icon name={icon} className={`w-6 h-6 ${iconClassName}`} />
      </div>
      <span className="text-contrast font-extrabold text-2xl leading-none">{value}</span>
      <span className="text-contrast-dark text-[11px] font-bold tracking-widest uppercase">{label}</span>
    </div>
  );
}
