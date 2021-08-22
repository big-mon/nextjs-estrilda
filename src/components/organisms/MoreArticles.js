import { PostPreview } from "./PostPreview";

export function MoreArticles({ posts }) {
  return (
    <>
      <div>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              date={post.date}
              slug={post.slug}
              coverImage={post.image}
              description={post.description}
              category={post.categories}
            />
          ))}
        </div>
      </div>
    </>
  );
}
