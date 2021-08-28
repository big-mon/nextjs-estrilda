import { MoreArticles } from "../../components/template/MoreArticles";
import { getAllPostsFrontMatter } from "../../lib/posts";
import { PER_PAGE } from "../../lib/constants";

export default function Page({ posts, totalPosts, currentPage }) {
  return (
    <>
      <MoreArticles
        posts={posts}
        totalPosts={totalPosts}
        currentPage={currentPage}
      />
    </>
  );
}

/** ビルド時の静的生成 */
export async function getStaticProps({ params }) {
  const allPosts = await getAllPostsFrontMatter();
  const page = params.page;
  const posts = allPosts.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return {
    props: { posts, totalPosts: allPosts.length, currentPage: page },
  };
}

/** 動的なルーティング対象の一覧を定義 */
export async function getStaticPaths() {
  const posts = await getAllPostsFrontMatter();

  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  const pages = range(1, Math.ceil(posts.length / PER_PAGE));

  return {
    paths: pages.map((p) => ({
      params: { page: p.toString() },
    })),
    fallback: false,
  };
}

Page.isHome = true;
