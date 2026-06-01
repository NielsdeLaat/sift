'use client';

import { useRef, useState } from 'react';
import type { TellRegion } from '@/data/questions';
import { Button } from '@/components/Button';

interface Pos { x: number; y: number }

interface Props {
  imageUrl: string;
  tell: TellRegion;
  onConfirm: (isCorrect: boolean) => void;
}

const CIRCLE_RADIUS = 20; // w-10 = 40px diameter → radius 20px

export function TellReveal({ imageUrl, tell, onConfirm }: Props) {
  const containerRef            = useRef<HTMLDivElement>(null);
  const [hover, setHover]       = useState<Pos | null>(null);
  const [placed, setPlaced]     = useState<Pos | null>(null);
  const [revealed, setRevealed] = useState(false);

  function posFromMouse(e: React.MouseEvent<HTMLDivElement>): Pos {
    const rect = e.currentTarget.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  function handleTouchEnd(e: React.TouchEvent<HTMLDivElement>) {
    if (revealed) return;
    e.preventDefault();
    const rect  = e.currentTarget.getBoundingClientRect();
    const touch = e.changedTouches[0];
    if (touch) setPlaced({ x: touch.clientX - rect.left, y: touch.clientY - rect.top });
  }

  function handleConfirm() {
    if (!placed || !containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();

    const rectLeft   = (tell.left  / 100) * width;
    const rectTop    = (tell.top   / 100) * height;
    const rectRight  = rectLeft + (tell.width  / 100) * width;
    const rectBottom = rectTop  + (tell.height / 100) * height;

    // Nearest point on the tell rectangle to the circle center
    const nearestX = Math.max(rectLeft, Math.min(placed.x, rectRight));
    const nearestY = Math.max(rectTop,  Math.min(placed.y, rectBottom));
    const dx = placed.x - nearestX;
    const dy = placed.y - nearestY;
    const isOverlapping = dx * dx + dy * dy <= CIRCLE_RADIUS * CIRCLE_RADIUS;

    setRevealed(true);
    onConfirm(isOverlapping);
  }

  return (
    <div className="space-y-5">
      <h2 className="text-text font-bold text-xl text-center">
        {revealed ? "Here's the tell" : 'Select the tell'}
      </h2>

      <div
        ref={containerRef}
        className="relative w-full aspect-video rounded-xl overflow-hidden select-none"
        style={{ cursor: revealed ? 'default' : 'none' }}
        onMouseMove={e => { if (!revealed) setHover(posFromMouse(e)); }}
        onMouseLeave={() => setHover(null)}
        onClick={e => { if (!revealed) setPlaced(posFromMouse(e)); }}
        onTouchEnd={handleTouchEnd}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageUrl} alt="" className="w-full h-full object-cover pointer-events-none" draggable={false} />

        {/* Hover circle — follows cursor */}
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

        {/* Placed circle — stays visible after reveal so user can compare */}
        {placed && (
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

      {!revealed && (
        placed ? (
          <Button variant="primary" className="w-full" onClick={handleConfirm}>
            Confirm
          </Button>
        ) : (
          <p className="text-muted-light text-sm text-center">
            Tap the part of the image that looks off
          </p>
        )
      )}
    </div>
  );
}
