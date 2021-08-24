import { htmlToReact } from "../../lib/htmlToReact";

/** 記事本文 */
export function PostBody({ content }) {
  return <>{htmlToReact(content)}</>;
}
