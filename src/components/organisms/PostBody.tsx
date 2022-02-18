import styles from "styles/article.module.scss";
import "highlight.js/styles/github-dark.css";
import { FullPostData } from "models/Post";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import CustomLink from "components/molecules/CustomLink";
import CodeBlock from "components/molecules/CodeBlock";

type Props = {
  content: FullPostData["contentHtml"];
};

/** 記事本文 */
export const PostBody = ({ content }: Props) => {
  const convertResult = (
    <ReactMarkdown
      className="max-w-2xl mx-auto text-lg leading-loose"
      remarkPlugins={[remarkGfm, remarkBreaks]}
      rehypePlugins={[[rehypeHighlight, { ignoreMissing: true }], rehypeRaw]}
      components={{
        a: CustomLink,
        code: CodeBlock,
      }}
    >
      {content}
    </ReactMarkdown>
  );

  return (
    <div className="mx-auto mt-10 mb-8 py-2 max-w-4xl text-lg">
      <div className={styles.content}>{convertResult}</div>
    </div>
  );
};
