import { MoreArticles } from "../components/template/MoreArticles";
import { getAllPostsFrontMatter } from "../lib/posts";
import { PER_PAGE } from "../lib/constants";

export default function Home({ posts, totalPosts }) {
  return (
    <>
      <MoreArticles posts={posts} totalPosts={totalPosts} currentPage={1} />
    </>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllPostsFrontMatter();
  const posts = allPosts.slice(0, PER_PAGE);

  return {
    props: { posts, totalPosts: allPosts.length },
  };
}

Home.isHome = true;
