import type { TellRegion } from '@/data/questions';
import { Button } from '@/components/Button';

interface Props {
  imageUrl: string;
  tell: TellRegion;
  onGotIt: () => void;
}

export function TellReveal({ imageUrl, tell, onGotIt }: Props) {
  return (
    <div className="space-y-5">
      <h2 className="text-text font-bold text-xl text-center">Select the tell</h2>

      <div className="relative w-full aspect-video rounded-xl overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageUrl} alt="" className="w-full h-full object-cover" />
        <div
          className="absolute ring-2 ring-primary rounded-sm animate-glow-pulse"
          style={{
            top:    `${tell.top}%`,
            left:   `${tell.left}%`,
            width:  `${tell.width}%`,
            height: `${tell.height}%`,
          }}
        />
      </div>

      <p className="text-muted-light text-sm leading-relaxed text-center px-2">
        {tell.explanation}
      </p>

      <Button variant="primary" className="w-full" onClick={onGotIt}>
        Got it!
      </Button>
    </div>
  );
}
