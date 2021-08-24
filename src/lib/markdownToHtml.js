import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import remarkSlug from "remark-slug";
import remarkToc from "remark-toc";

/** MarkdownをHTMLへ変換 */
export async function markdownToHtml(markdown) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkSlug)
    .use(remarkToc, { maxDepth: 2 })
    .use(remarkRehype)
    .use(rehypeSanitize, defaultSchema)
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}
