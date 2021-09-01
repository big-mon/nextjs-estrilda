import { MoreArticles } from "../../components/template/MoreArticles";
import { getAllPostsFrontMatter, getCategoryPosts } from "../../lib/posts";
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
      <SEO category={category} />

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

  // ページ番号とカテゴリーを取得
  const page = slug[1] ?? 1;
  const category = (slug[0] ?? "").toLowerCase();

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
};

/** 動的なルーティング対象の一覧を定義 */
export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPostsFrontMatter();
  const categories = Array.from(
    new Set(posts.flatMap((p) => p.category).filter((category) => category))
  );

  const paths = categories
    .filter((category) => category && category?.category)
    .flatMap((cat) => {
      const pages = Math.ceil(
        getCategoryPosts(cat?.category ?? "", posts).length / PER_PAGE
      );
      return Array.from(Array(pages).keys()).flatMap((page) =>
        page === 0
          ? {
              params: {
                slug: [
                  cat?.category?.toLowerCase() ?? "",
                  (page + 1).toString(),
                ],
              },
            }
          : {
              params: {
                slug: [
                  cat?.category?.toLowerCase() ?? "",
                  (page + 1).toString(),
                ],
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
