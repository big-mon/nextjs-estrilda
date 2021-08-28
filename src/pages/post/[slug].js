import { getPostBySlug, getAllPostsFrontMatter } from "../../lib/posts";
import { Article } from "../../components/template/Article";

export default function Page({
  post,
  prev1,
  prev2,
  prev3,
  next1,
  next2,
  next3,
}) {
  const relations = [next1, next2, next3, prev1, prev2, prev3].filter(
    (p) => p != null
  );
  return (
    <>
      <Article post={post} relations={relations} />
    </>
  );
}

/** ビルド時の静的生成 */
export async function getStaticProps({ params }) {
  const allPosts = await getAllPostsFrontMatter();
  const postIndex = allPosts.findIndex((post) => post.slug === params.slug);
  const prev1 = allPosts[postIndex + 1] || null;
  const prev2 = allPosts[postIndex + 2] || null;
  const prev3 = allPosts[postIndex + 3] || null;
  const next1 = allPosts[postIndex - 1] || null;
  const next2 = allPosts[postIndex - 2] || null;
  const next3 = allPosts[postIndex - 3] || null;
  const post = await getPostBySlug(params.slug);

  return { props: { post, prev1, prev2, prev3, next1, next2, next3 } };
}

/** 動的なルーティング対象の一覧を定義 */
export async function getStaticPaths() {
  const posts = await getAllPostsFrontMatter();
  return {
    paths: posts.map((p) => ({
      params: { slug: p.slug },
    })),
    fallback: false,
  };
}
