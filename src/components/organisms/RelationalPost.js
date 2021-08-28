import { PostPreview } from "../organisms/PostPreview";

/** 次記事への誘導 */
export function RelationalPost({ posts }) {
  return (
    <div className="w-full bg-gray-200 pt-14 pb-20">
      <p className="text-lg text-center font-semibold mb-10">READ NEXT</p>

      <div className="flex flex-wrap gap-y-8 justify-start max-w-6xl mx-auto">
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
    </div>
  );
}
