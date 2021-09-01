/** 本文を含まない記事データ */
export type PostData = {
  slug: string;
  date: string;
  title: string | "";
  description: string | "";
  author?: string;
  coverImage: string | "";
  category: PostCategory;
  tags?: PostTag[];
};

/** 本文データを含む記事データ */
export type FullPostData = PostData & {
  contentHtml: string;
};

/** 記事のカテゴリー情報 */
export type PostCategory = {
  category: string;
};

/** 記事のタグ情報 */
export type PostTag = {
  tag: string;
};
