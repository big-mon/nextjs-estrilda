import { MoreArticles } from "../../components/template/MoreArticles";
import { getAllPostsFrontMatter, getTagPosts } from "../../lib/posts";
import { PER_PAGE } from "../../lib/constants";
import { SEO } from "../../components/organisms/SEO";
import Head from "next/head";

export default function Page({ posts, totalPosts, currentPage, tags }) {
  return (
    <>
      <SEO tag={tags} />

      <MoreArticles
        posts={posts}
        totalPosts={totalPosts}
        currentPage={currentPage}
        tags={tags}
      />
    </>
  );
}

/** ビルド時の静的生成 */
export function getStaticProps({ params }) {
  const { slug } = params;

  // ページ番号とタグを取得
  const page = slug[1] ?? 1;
  const tag = (slug[0] ?? "").toLowerCase();

  // 本ページで描画する記事を取得
  const tagPosts = getTagPosts(tag);
  const posts = tagPosts.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return {
    props: {
      posts,
      totalPosts: tagPosts.length,
      currentPage: page,
      tags: tag,
    },
  };
}

/** 動的なルーティング対象の一覧を定義 */
export function getStaticPaths() {
  const posts = getAllPostsFrontMatter();
  const tags = Array.from(
    new Set(posts.flatMap((p) => p.tags).filter((p) => p != ""))
  );

  const paths = tags.flatMap((tag) => {
    const pages = Math.ceil(getTagPosts(tag, posts).length / PER_PAGE);
    return Array.from(Array(pages).keys()).map((page) =>
      page === 0
        ? {
            params: { slug: [tag.toLowerCase(), (page + 1).toString()] },
          }
        : {
            params: { slug: [tag.toLowerCase(), (page + 1).toString()] },
          }
    );
  });

  return {
    paths: paths,
    fallback: false,
  };
}
