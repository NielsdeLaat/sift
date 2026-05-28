import type { ArticleCard } from '@/data/questions';

export function ArticleCardView({ article }: { article: ArticleCard }) {
  return (
    <div className="bg-surface rounded-2xl overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={article.imageUrl} alt="" className="w-full h-44 object-cover" />
      <div className="p-4 space-y-1.5">
        <span className="text-xs font-bold text-primary uppercase tracking-wider">
          {article.sourceTag}
        </span>
        <h2 className="text-text font-bold text-base leading-snug">{article.headline}</h2>
        <div className="space-y-3">
          {article.body.split('\n\n').map((para, i) => (
            <p key={i} className="text-muted-light text-sm leading-relaxed">{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
