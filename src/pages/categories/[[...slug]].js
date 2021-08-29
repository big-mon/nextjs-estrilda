import { MoreArticles } from "../../components/template/MoreArticles";
import { getAllPostsFrontMatter, countCategoryPosts } from "../../lib/posts";
import { PER_PAGE } from "../../lib/constants";

export default function Page({ posts, totalPosts, currentPage, category }) {
  return (
    <>
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

  const allPosts = getAllPostsFrontMatter();
  const page = slug[1] ?? 1;
  const category = slug[0] ?? "";

  const filteredPosts = allPosts.filter((p) => p.category == category);
  const posts = filteredPosts.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return {
    props: {
      posts,
      totalPosts: filteredPosts.length,
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
    const pages = Math.ceil(countCategoryPosts(cat) / PER_PAGE);
    return Array.from(Array(pages).keys()).map((page) =>
      page === 0
        ? {
            params: { slug: [cat, (page + 1).toString()] },
          }
        : {
            params: { slug: [cat, (page + 1).toString()] },
          }
    );
  });

  return {
    paths: paths,
    fallback: false,
  };
}

Page.isHome = true;
