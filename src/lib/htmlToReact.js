import React from "react";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import Link from "next/link";

/** 指定したタグをReactコンポーネントに変換する定義 */
const processor = unified()
  .use(rehypeParse, { fragment: true })
  .use(rehypeReact, {
    createElement: React.createElement,
    components: {
      a: Link,
    },
  });

/** HTMLをReactコンポーネントに変換 */
export function htmlToReact(html) {
  return processor.processSync(html).result;
}
