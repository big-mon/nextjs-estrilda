import { PageButton } from "../atoms/PageButton";
import { PER_PAGE } from "../../lib/constants";

/** ページネーション */
export function Pagination({ total, current, category, tag }) {
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
