import { htmlToReact } from "../../lib/htmlToReact";
import styles from "../../styles/article.module.scss";

/** 記事本文 */
export function PostBody({ content }) {
  return (
    <div className="mx-auto mt-10 mb-8 py-2 max-w-4xl text-lg">
      <div className={styles.content}>{htmlToReact(content)}</div>
    </div>
  );
}
