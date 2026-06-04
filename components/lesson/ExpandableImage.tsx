'use client';

// TODO(mobile): replace this component's lightbox with a mobile-native design.
// All expandable images across question types go through this single file.

import { useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  src: string;
  alt?: string;
  className?: string;
}

export function ExpandableImage({ src, alt = '', className }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={className}
        onClick={() => setOpen(true)}
        style={{ cursor: 'zoom-in' }}
      />

      {open && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full object-contain select-none"
            onClick={e => e.stopPropagation()}
          />
          <button
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 text-white text-xl flex items-center justify-center hover:bg-white/30 transition-colors"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            ✕
          </button>
        </div>,
        document.body,
      )}
    </>
  );
}
