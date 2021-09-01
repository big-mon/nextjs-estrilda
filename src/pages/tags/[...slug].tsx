import { MoreArticles } from "../../components/template/MoreArticles";
import { getAllPostsFrontMatter, getTagPosts } from "../../lib/posts";
import { PER_PAGE } from "../../lib/constants";
import { SEO } from "../../components/organisms/SEO";
import { PostCategory, PostData, PostTag } from "../../models/Post";
import { GetStaticProps, GetStaticPaths } from "next";

type Props = {
  posts: PostData[];
  totalPosts: number;
  currentPage: number;
  category: PostCategory;
  tags: PostTag;
};

export const Page = ({
  posts,
  totalPosts,
  currentPage,
  category,
  tags,
}: Props) => {
  return (
    <>
      <SEO tag={tags} />

      <MoreArticles
        posts={posts}
        totalPosts={totalPosts}
        currentPage={currentPage}
        category={category}
        tags={tags}
      />
    </>
  );
};

/** ビルド時の静的生成 */
export const getStaticProps: GetStaticProps = ({ params }: any) => {
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
};

/** 動的なルーティング対象の一覧を定義 */
export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPostsFrontMatter();
  const tags = Array.from(
    new Set(posts.flatMap((p) => p.tags).filter((tag) => tag?.tag))
  );

  const paths = tags
    .filter((tag) => tag)
    .flatMap((tag) => {
      const pages = Math.ceil(
        getTagPosts(tag?.tag ?? "", posts).length / PER_PAGE
      );
      return Array.from(Array(pages).keys()).map((page) =>
        page === 0
          ? {
              params: {
                slug: [tag?.tag?.toLowerCase() ?? "", (page + 1).toString()],
              },
            }
          : {
              params: {
                slug: [tag?.tag?.toLowerCase() ?? "", (page + 1).toString()],
              },
            }
      );
    });

  return {
    paths: paths,
    fallback: false,
  };
};

export default Page;
