import { getPostBySlug, getAllPostsFrontMatter } from "../../lib/posts";
import { Article } from "../../components/template/Article";
import { SEO } from "../../components/organisms/SEO";
import { PostData, FullPostData } from "../../models/Post";

type Props = {
  post: FullPostData;
  prev1: PostData;
  prev2: PostData;
  prev3: PostData;
  next1: PostData;
  next2: PostData;
  next3: PostData;
};

export const Page = ({
  post,
  prev1,
  prev2,
  prev3,
  next1,
  next2,
  next3,
}: Props) => {
  const relations = [next1, next2, next3, prev1, prev2, prev3].filter(
    (p) => p != null
  );
  return (
    <>
      <SEO post={post} />

      <Article post={post} relations={relations} />
    </>
  );
};

/** ビルド時の静的生成 */
export const getStaticProps = async ({ params }: any) => {
  const allPosts = getAllPostsFrontMatter();
  const postIndex = allPosts.findIndex((post) => post.slug === params.slug);
  const prev1 = allPosts[postIndex + 1] || null;
  const prev2 = allPosts[postIndex + 2] || null;
  const prev3 = allPosts[postIndex + 3] || null;
  const next1 = allPosts[postIndex - 1] || null;
  const next2 = allPosts[postIndex - 2] || null;
  const next3 = allPosts[postIndex - 3] || null;
  const post = await getPostBySlug(params.slug);

  return { props: { post, prev1, prev2, prev3, next1, next2, next3 } };
};

/** 動的なルーティング対象の一覧を定義 */
export const getStaticPaths = () => {
  const posts = getAllPostsFrontMatter();
  return {
    paths: posts.map((p) => ({
      params: { slug: p.slug },
    })),
    fallback: false,
  };
};

export default Page;
