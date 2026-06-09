import type { ContentItem } from '@/data/questions';

interface Props {
  content: ContentItem;
}

export function ContentCard({ content }: Props) {
  if (content.type === 'article') {
    return (
      <div className="bg-neutral-light rounded-2xl overflow-hidden space-y-0">
        {content.imageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={content.imageUrl} alt="" className="w-full object-cover max-h-44" />
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
          <p className="text-contrast text-sm leading-relaxed">{content.excerpt}</p>
        </div>
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
          <p className="text-contrast-dark text-xs">{social.handle} · {social.followerCount}</p>
        </div>
      </div>
      <p className="text-contrast text-sm leading-relaxed">{social.text}</p>
      {social.imageUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={social.imageUrl} alt="" className="w-full rounded-xl object-cover max-h-44" />
      )}
    </div>
  );
}
