import { Layout } from "../components/template/LayoutIndex";
import { MoreArticles } from "../components/template/MoreArticles";
import { getAllPostsFrontMatter } from "../lib/posts";

export default function Home({ posts }) {
  return (
    <>
      <Layout>
        <MoreArticles posts={posts} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPostsFrontMatter();
  return {
    props: { posts },
  };
}
