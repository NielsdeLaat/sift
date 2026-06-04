import { Button } from '@/components/Button';

interface Props {
  url: string;
  onReturn: () => void;
}

export function InAppBrowser({ url, onReturn }: Props) {
  return (
    <div
      className="fixed left-1/2 -translate-x-1/2 w-full max-w-[430px] z-40 bg-white flex flex-col"
      style={{ top: 45, bottom: 0 }}
    >
      <iframe
        src={url}
        className="flex-1 w-full border-none"
        title="Browser"
      />
      <div className="px-4 py-3 bg-neutral-base border-t border-neutral-light">
        <Button variant="primary" className="w-full" onClick={onReturn}>
          Return
        </Button>
      </div>
    </div>
  );
}
