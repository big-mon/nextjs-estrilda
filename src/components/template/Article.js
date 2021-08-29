import { PostHeader } from "../organisms/PostHeader";
import { PostHeroImage } from "../organisms/PostHeroImage";
import { PostBody } from "../organisms/PostBody";
import { UnorderedTagsList } from "../organisms/UnorderedTagsList";
import { RelationalPost } from "../organisms/RelationalPost";

export function Article({ post, relations }) {
  const prevNext = relations.slice(0, 3);

  return (
    <>
      <article className="max-w-5xl mx-auto my-8 px-6">
        <PostHeader
          title={post.title}
          category={post.category}
          date={post.date}
        />
        <PostHeroImage src={post.coverImage} title={post.title} />
        <PostBody content={post.contentHtml} />
        <UnorderedTagsList tags={post.tags} />
      </article>

      <RelationalPost posts={prevNext} />
    </>
  );
}
