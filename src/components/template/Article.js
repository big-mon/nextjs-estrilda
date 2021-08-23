import Head from "next/head";
import { PostHeader } from "../organisms/PostHeader";
import { PostHeroImage } from "../organisms/PostHeroImage";
import { PostBody } from "../organisms/PostBody";
import { SITE_NAME } from "../../lib/constants";

export function Article({ post, prev, next }) {
  return (
    <>
      <Head>
        <title>
          {post.title} | {SITE_NAME}
        </title>
      </Head>
      <article className="max-w-5xl mx-auto px-6">
        <PostHeader
          title={post.title}
          category={post.category}
          date={post.date}
        />
        <PostHeroImage src={post.coverImage} title={post.title} />
        <PostBody content={post.contentHtml} />
      </article>
    </>
  );
}
