import { PostPreview } from "../organisms/PostPreview";
import { Pagination } from "../organisms/Pagination";

export function MoreArticles({ posts, totalPosts, currentPage, category }) {
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

      <Pagination
        total={totalPosts}
        current={currentPage}
        category={category}
      />
    </>
  );
}
