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

export function TellReveal({ imageUrl, tell, onGotIt }: Props) {
  const [hover, setHover]       = useState<Pos | null>(null);
  const [placed, setPlaced]     = useState<Pos | null>(null);
  const [revealed, setRevealed] = useState(false);

  function posFromMouse(e: React.MouseEvent<HTMLDivElement>): Pos {
    const rect = e.currentTarget.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  function handleTouchEnd(e: React.TouchEvent<HTMLDivElement>) {
    if (revealed) return;
    e.preventDefault(); // suppress the subsequent synthetic click
    const rect  = e.currentTarget.getBoundingClientRect();
    const touch = e.changedTouches[0];
    if (touch) setPlaced({ x: touch.clientX - rect.left, y: touch.clientY - rect.top });
  }

  return (
    <div className="space-y-5">
      <h2 className="text-text font-bold text-xl text-center">
        {revealed ? "Here's the tell" : 'Select the tell'}
      </h2>

      <div
        className="relative w-full aspect-video rounded-xl overflow-hidden select-none"
        style={{ cursor: revealed ? 'default' : 'none' }}
        onMouseMove={e => { if (!revealed) setHover(posFromMouse(e)); }}
        onMouseLeave={() => setHover(null)}
        onClick={e => { if (!revealed) setPlaced(posFromMouse(e)); }}
        onTouchEnd={handleTouchEnd}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageUrl} alt="" className="w-full h-full object-cover pointer-events-none" draggable={false} />

        {/* Hover circle — follows cursor (hidden after reveal and on touch) */}
        {hover && !revealed && (
          <div
            className="absolute w-10 h-10 rounded-full pointer-events-none transition-none"
            style={{
              left:      hover.x,
              top:       hover.y,
              transform: 'translate(-50%, -50%)',
              boxShadow: placed
                ? '0 0 0 2px rgba(255,255,255,0.35)'
                : '0 0 0 2px rgba(255,255,255,0.75)',
            }}
          />
        )}

        {/* Placed circle — user's guess (hidden after reveal) */}
        {placed && !revealed && (
          <div
            className="absolute w-10 h-10 rounded-full pointer-events-none"
            style={{
              left:      placed.x,
              top:       placed.y,
              transform: 'translate(-50%, -50%)',
              boxShadow: '0 0 0 2.5px #16B0A6, 0 0 12px rgba(22,176,166,0.55)',
            }}
          />
        )}

        {/* Correct tell region — shown after reveal */}
        {revealed && (
          <div
            className="absolute pointer-events-none rounded-lg animate-pulse"
            style={{
              top:             `${tell.top}%`,
              left:            `${tell.left}%`,
              width:           `${tell.width}%`,
              height:          `${tell.height}%`,
              backgroundColor: 'rgba(22,176,166,0.20)',
              boxShadow:       '0 0 0 2.5px #16B0A6, inset 0 0 0 1px rgba(22,176,166,0.5)',
            }}
          />
        )}
      </div>

      {revealed ? (
        <>
          <p className="text-muted-light text-sm text-center leading-relaxed px-2">
            {tell.explanation}
          </p>
          <Button variant="primary" className="w-full" onClick={onGotIt}>
            Got It
          </Button>
        </>
      ) : placed ? (
        <Button variant="primary" className="w-full" onClick={() => setRevealed(true)}>
          Confirm
        </Button>
      ) : (
        <p className="text-muted-light text-sm text-center">
          Tap the part of the image that looks off
        </p>
      )}
    </div>
  );
}
