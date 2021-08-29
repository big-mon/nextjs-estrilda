import { MoreArticles } from "../../components/template/MoreArticles";
import { getAllPostsFrontMatter, getCategoryPosts } from "../../lib/posts";
import { PER_PAGE } from "../../lib/constants";
import { SEO } from "../../components/organisms/SEO";

export default function Page({ posts, totalPosts, currentPage, category }) {
  return (
    <>
      <SEO category={category} />

      <MoreArticles
        posts={posts}
        totalPosts={totalPosts}
        currentPage={currentPage}
        category={category}
      />
    </>
  );
}

/** ビルド時の静的生成 */
export function getStaticProps({ params }) {
  const { slug } = params;

  // ページ番号とカテゴリーを取得
  const page = slug[1] ?? 1;
  const category = slug[0] ?? "";

  // 本ページで描画する記事を取得
  const categoryPosts = getCategoryPosts(category);
  const posts = categoryPosts.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return {
    props: {
      posts,
      totalPosts: categoryPosts.length,
      currentPage: page,
      category,
    },
  };
}

/** 動的なルーティング対象の一覧を定義 */
export function getStaticPaths() {
  const posts = getAllPostsFrontMatter();
  const categories = Array.from(
    new Set(posts.map((p) => p.category).filter((p) => p != ""))
  );

  const paths = categories.flatMap((cat) => {
    const pages = Math.ceil(getCategoryPosts(cat, posts).length / PER_PAGE);
    return Array.from(Array(pages).keys()).map((page) =>
      page === 0
        ? {
            params: { slug: [cat.toLowerCase(), (page + 1).toString()] },
          }
        : {
            params: { slug: [cat.toLowerCase(), (page + 1).toString()] },
          }
    );
  });

  return {
    paths: paths,
    fallback: false,
  };
}
