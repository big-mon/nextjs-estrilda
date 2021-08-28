import Head from "next/head";
import { PostHeader } from "../organisms/PostHeader";
import { PostHeroImage } from "../organisms/PostHeroImage";
import { PostBody } from "../organisms/PostBody";
import { RelationalPost } from "../organisms/RelationalPost";
import { SITE_NAME } from "../../lib/constants";

export function Article({ post, relations }) {
  const prevNext = relations.slice(0, 3);

  return (
    <>
      <Head>
        <title>
          {post.title} | {SITE_NAME}
        </title>
      </Head>

      <article className="max-w-5xl mx-auto my-8 px-6">
        <PostHeader
          title={post.title}
          category={post.category}
          date={post.date}
        />
        <PostHeroImage src={post.coverImage} title={post.title} />
        <PostBody content={post.contentHtml} />
      </article>

      <RelationalPost posts={prevNext} />
    </>
  );
}
