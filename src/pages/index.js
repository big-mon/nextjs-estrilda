import { Layout } from "../components/template/LayoutIndex";
import { MoreArticles } from "../components/organisms/MoreArticles";
import { getAllFilesFrontMatter } from "../lib/posts";

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
  const posts = await getAllFilesFrontMatter();
  return {
    props: { posts },
  };
}
