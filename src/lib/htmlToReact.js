import React from "react";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import { CustomLink } from "../components/molecules/CustomLink";
import { PostImage } from "../components/molecules/PostImage";
import { amazonBlockConvert } from "./amazonBlockConvert";
import { AmazonItem } from "../components/organisms/AmazonItem";

/** 指定したタグをReactコンポーネントに変換する定義 */
const processor = unified()
  .use(rehypeParse, { fragment: true })
  .use(rehypeReact, {
    createElement: React.createElement,
    components: {
      a: CustomLink,
      img: PostImage,
      amazon: AmazonItem,
    },
  });

/** HTMLをReactコンポーネントに変換 */
export function htmlToReact(html) {
  // 独自タグを文字列からHTMLタグに変換
  const replaced = amazonBlockConvert(html);

  return processor.processSync(replaced).result;
}
