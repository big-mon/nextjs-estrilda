import React from "react";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import { CustomLink } from "../components/molecules/CustomLink";
import { PostImage } from "../components/molecules/PostImage";

/** 指定したタグをReactコンポーネントに変換する定義 */
const processor = unified()
  .use(rehypeParse, { fragment: true })
  .use(rehypeReact, {
    createElement: React.createElement,
    components: {
      a: CustomLink,
      img: PostImage,
    },
  });

/** HTMLをReactコンポーネントに変換 */
export function htmlToReact(html) {
  return processor.processSync(html).result;
}
