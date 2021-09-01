import { MoreArticles } from "../components/template/MoreArticles";
import { getAllPostsFrontMatter } from "../lib/posts";
import { PER_PAGE } from "../lib/constants";
import { SEO } from "../components/organisms/SEO";
import { PostData } from "../../src/models/Post";
import { GetStaticProps } from "next";

type Props = {
  posts: PostData[];
  totalPosts: number;
};

export const Home = ({ posts, totalPosts }: Props) => {
  return (
    <>
      <SEO />
      <MoreArticles posts={posts} totalPosts={totalPosts} currentPage={1} />
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const allPosts = getAllPostsFrontMatter();
  const posts = allPosts.slice(0, PER_PAGE);

  return {
    props: { posts, totalPosts: allPosts.length },
  };
};

export default Home;
