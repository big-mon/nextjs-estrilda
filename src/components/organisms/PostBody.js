import { htmlToReact } from "../../lib/htmlToReact";

/** 記事本文 */
export function PostBody({ content }) {
  return (
    <div className="mx-auto mt-14 mb-8 py-2 max-w-2xl text-xl">
      {htmlToReact(content)}
    </div>
  );
}
