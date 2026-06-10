import type { ReactNode } from 'react';
import type { ContentItem } from '@/data/questions';

function MediaItem({ url, className }: { url: string; className: string }) {
  if (/\.(mp4|webm|ogg)(\?|$)/i.test(url)) {
    return <video src={url} className={className} autoPlay muted loop playsInline />;
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={url} alt="" className={className} />;
}

interface Props {
  content: ContentItem;
  children?: ReactNode;
}

export function ContentCard({ content, children }: Props) {
  if (content.type === 'article') {
    return (
      <div className="bg-neutral-light rounded-2xl overflow-hidden">
        {content.imageUrl && (
          <MediaItem url={content.imageUrl} className="w-full object-cover max-h-44" />
        )}
        <div className="p-4 space-y-2">
          <div className="flex items-center gap-2">
            {content.sourceLogoUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={content.sourceLogoUrl} alt="" className="h-4 w-auto object-contain" />
            )}
            <span className="text-contrast-dark text-xs font-semibold uppercase tracking-wide">
              {content.sourceName}
            </span>
            {content.publishedAt && (
              <span className="text-contrast-dark/60 text-xs">· {content.publishedAt}</span>
            )}
          </div>
          <p className="text-contrast font-bold text-sm leading-snug">{content.headline}</p>
          {content.byline && (
            <p className="text-contrast-dark text-xs">By {content.byline}</p>
          )}
          {content.excerpt && (
            <p className="text-contrast text-sm leading-relaxed">{content.excerpt}</p>
          )}
        </div>
        {children && (
          <>
            <div className="h-px bg-white/8 mx-4" />
            {children}
          </>
        )}
      </div>
    );
  }

  const social = content;
  return (
    <div className="bg-neutral-light rounded-2xl p-4 space-y-3">
      <div className="flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={social.avatarUrl}
          alt=""
          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
        />
        <div className="min-w-0">
          <p className="text-contrast font-bold text-sm leading-tight truncate">{social.sourceName}</p>
          <p className="text-contrast-dark text-xs">
            {social.handle} · {social.followerCount}
            {social.publishedAt && <> · {social.publishedAt}</>}
          </p>
        </div>
      </div>
      <p className="text-contrast text-sm leading-relaxed">{social.text}</p>
      {social.imageUrl && (
        <MediaItem url={social.imageUrl} className="w-full rounded-xl object-cover max-h-44" />
      )}
      {children && (
        <div className="-mx-4 -mb-4 mt-0">
          <div className="h-px bg-white/8" />
          {children}
        </div>
      )}
    </div>
  );
}
