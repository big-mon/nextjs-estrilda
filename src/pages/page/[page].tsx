import { MoreArticles } from "../../components/template/MoreArticles";
import { getAllPostsFrontMatter } from "../../lib/posts";
import { PER_PAGE } from "../../lib/constants";
import { GetStaticPaths, GetStaticProps } from "next";
import { PostData } from "../../models/Post";
import { SEO } from "../../components/organisms/SEO";

type Props = {
  posts: PostData[];
  totalPosts: number;
  currentPage: number;
};

export const Page = ({ posts, totalPosts, currentPage }: Props) => {
  return (
    <>
      <SEO />

      <MoreArticles
        posts={posts}
        totalPosts={totalPosts}
        currentPage={currentPage}
      />
    </>
  );
};

/** ビルド時の静的生成 */
export const getStaticProps: GetStaticProps = ({ params }: any) => {
  const allPosts = getAllPostsFrontMatter();
  const page = params.page;
  const posts = allPosts.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return {
    props: { posts, totalPosts: allPosts.length, currentPage: page },
  };
};

/** 動的なルーティング対象の一覧を定義 */
export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPostsFrontMatter();

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  const pages = range(1, Math.ceil(posts.length / PER_PAGE));

  return {
    paths: pages.map((p) => ({
      params: { page: p.toString() },
    })),
    fallback: false,
  };
};

export default Page;
