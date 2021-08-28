import { PostPreview } from "../organisms/PostPreview";

/** 次記事への誘導 */
export function RelationalPost({ posts }) {
  return (
    <div className="w-full flex flex-wrap gap-y-8 bg-gray-200 py-20">
      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          date={post.date}
          slug={post.slug}
          coverImage={post.coverImage}
          description={post.description}
          category={post.category}
        />
      ))}
    </div>
  );
}
