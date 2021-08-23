import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";
import remarkSlug from "remark-slug";
import remarkToc from "remark-toc";

export async function markdownToHtml(markdown) {
  const result = await remark()
    .use(remarkGfm)
    .use(remarkSlug)
    .use(remarkToc, { maxDepth: 2 })
    .use(html)
    .process(markdown);
  return result.toString();
}
