import type { SocialPost, ArticlePost } from '../questions';

/** Social post with auto-generated picsum avatar. Override avatarUrl for dicebear or custom sources. */
export function social(
  seed: string,
  { avatarUrl, ...rest }: Omit<SocialPost, 'type' | 'avatarUrl'> & { avatarUrl?: string },
): SocialPost {
  return {
    type: 'social',
    avatarUrl: avatarUrl ?? `https://picsum.photos/seed/${seed}/80/80`,
    ...rest,
  };
}

/** Article with auto-generated picsum image. Override imageUrl for local /images/ paths. */
export function article(
  seed: string,
  { imageUrl, ...rest }: Omit<ArticlePost, 'type'>,
): ArticlePost {
  return {
    type: 'article',
    imageUrl: imageUrl ?? `https://picsum.photos/seed/${seed}/800/450`,
    ...rest,
  };
}
