import { MoreArticles } from "../components/template/MoreArticles";
import { getAllPostsFrontMatter } from "../lib/posts";

export default function Home({ posts }) {
  return (
    <>
      <MoreArticles posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPostsFrontMatter();
  return {
    props: { posts },
  };
}

Home.isHome = true;
