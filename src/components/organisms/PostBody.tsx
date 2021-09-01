import { htmlToReact } from "../../lib/htmlToReact";
import styles from "../../styles/article.module.scss";
import { FullPostData } from "../../models/Post";

type Props = {
  content: FullPostData["contentHtml"];
};

/** 記事本文 */
export const PostBody = ({ content }: Props) => {
  return (
    <div className="mx-auto mt-10 mb-8 py-2 max-w-4xl text-lg">
      <div className={styles.content}>{htmlToReact(content)}</div>
    </div>
  );
};
