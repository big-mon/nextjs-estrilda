import { PostPreview } from "../organisms/PostPreview";

export function MoreArticles({ posts }) {
  return (
    <>
      <div className="max-w-6xl mx-auto my-8 flex flex-wrap gap-y-8">
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
    </>
  );
}
