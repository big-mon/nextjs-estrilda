import { getPostBySlug, getAllPostsFrontMatter } from "../../lib/posts";
import { Article } from "../../components/template/Article";

export default function Page({ post, prev, next }) {
  return (
    <>
      <Article post={post} prev={prev} next={next} />
    </>
  );
}

/** ビルド時の静的生成 */
export async function getStaticProps({ params }) {
  const allPosts = await getAllPostsFrontMatter();
  const postIndex = allPosts.findIndex((post) => post.slug === params.slug);
  const prev = allPosts[postIndex + 1] || null;
  const next = allPosts[postIndex - 1] || null;
  const post = await getPostBySlug(params.slug);

  return { props: { post, prev, next } };
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
