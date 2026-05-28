'use client';

import { useState } from 'react';
import type { TellRegion } from '@/data/questions';
import { Button } from '@/components/Button';

interface Pos { x: number; y: number }

interface Props {
  imageUrl: string;
  tell: TellRegion;
  onGotIt: () => void;
}

export function TellReveal({ imageUrl, onGotIt }: Props) {
  const [hover, setHover]   = useState<Pos | null>(null);
  const [placed, setPlaced] = useState<Pos | null>(null);

  function getRelativePos(e: React.MouseEvent<HTMLDivElement>): Pos {
    const rect = e.currentTarget.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    setHover(getRelativePos(e));
  }

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    setPlaced(getRelativePos(e));
  }

  return (
    <div className="space-y-5">
      <h2 className="text-text font-bold text-xl text-center">Select the tell</h2>

      <div
        className="relative w-full aspect-video rounded-xl overflow-hidden select-none"
        style={{ cursor: 'none' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHover(null)}
        onClick={handleClick}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageUrl} alt="" className="w-full h-full object-cover pointer-events-none" draggable={false} />

        {/* Hover circle — follows cursor */}
        {hover && (
          <div
            className="absolute w-10 h-10 rounded-full pointer-events-none transition-none"
            style={{
              left:      hover.x,
              top:       hover.y,
              transform: 'translate(-50%, -50%)',
              boxShadow: placed ? '0 0 0 2px rgba(255,255,255,0.35)' : '0 0 0 2px rgba(255,255,255,0.75)',
            }}
          />
        )}

        {/* Placed circle */}
        {placed && (
          <div
            className="absolute w-10 h-10 rounded-full pointer-events-none shadow-glow-primary-sm"
            style={{
              left:      placed.x,
              top:       placed.y,
              transform: 'translate(-50%, -50%)',
              boxShadow: '0 0 0 2.5px #16B0A6, 0 0 12px rgba(22,176,166,0.55)',
            }}
          />
        )}
      </div>

      {placed ? (
        <Button variant="primary" className="w-full" onClick={onGotIt}>
          Confirm
        </Button>
      ) : (
        <p className="text-muted-light text-sm text-center">
          Click on the part of the image that looks off
        </p>
      )}
    </div>
  );
}
