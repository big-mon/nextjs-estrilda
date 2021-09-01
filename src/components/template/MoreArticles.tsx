import { PostPreview } from "../organisms/PostPreview";
import { Pagination } from "../organisms/Pagination";
import { ArticlesGroup } from "../organisms/ArticlesGroup";
import { PostData, PostCategory, PostTag } from "../../models/Post";

type Props = {
  posts: PostData[];
  totalPosts: number;
  currentPage: number;
  category?: PostCategory;
  tags?: PostTag;
};

export const MoreArticles = ({
  posts,
  totalPosts,
  currentPage,
  category,
  tags,
}: Props) => {
  let groupName = "";
  if (category) {
    groupName = category.toString();
  } else if (tags) {
    groupName = tags.toString();
  }

  return (
    <>
      <ArticlesGroup text={groupName} />

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
        tag={tags}
      />
    </>
  );
};
