import { PageButton } from "components/atoms/PageButton";
import { PER_PAGE } from "lib/constants";
import { PostCategory, PostTag } from "models/Post";

type Props = {
  total: number;
  current: number;
  category?: PostCategory;
  tag?: PostTag;
};

/** ページネーション */
export function Pagination({ total, current, category, tag }: Props) {
  const totalPage = Math.ceil(total / PER_PAGE);
  const hasPrev = current - 1 > 0;
  const hasNext = totalPage - current > 0;

  let baseHref = "page";
  if (category) {
    baseHref = `categories/${category}`;
  } else if (tag) {
    baseHref = `tags/${tag}`;
  }

  return (
    <div className="max-w-6xl mx-auto text-right px-6">
      {hasPrev ? (
        <PageButton src={`/${baseHref}/${Number(current) - 1}`}>
          &lt;
        </PageButton>
      ) : (
        <></>
      )}
      {hasNext ? (
        <PageButton src={`/${baseHref}/${Number(current) + 1}`}>
          &gt;
        </PageButton>
      ) : (
        <></>
      )}
    </div>
  );
}
