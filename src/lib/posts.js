import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getAllFilesRecursively } from "../lib/files";
import remark from "remark";
import html from "remark-html";

const root = process.cwd();
const postDirectoryName = `posts`;

/** slugを整形 */
function formatSlug(slug) {
  return slug.replace(/\.md$/, "");
}

/** 日付の降順でソート */
function dateSortDesc(date1, date2) {
  if (date1 > date2) return -1;
  if (date1 < date2) return 1;
  return 0;
}

function filePathConvertForWindows(prefixPaths, file) {
  return file.slice(prefixPaths.length + 1).replace(/\\/g, "/");
}

function convertFrontMatter(frontMatter) {
  const result = {
    slug: frontMatter.slug,
    date: frontMatter.date ? new Date(frontMatter.date).toISOString() : null,
    title: frontMatter.title ?? "",
    description: frontMatter.description ?? "",
    author: frontMatter.author ?? "",
    coverImage: frontMatter.image ?? "",
    category: frontMatter.categories ?? [],
    tags: frontMatter.tags ?? [],
  };
  return result;
}

/** 全てのフロントマター(YAMLで記載した文書情報)を取得 */
export async function getAllPostsFrontMatter() {
  const prefixPaths = path.join(root, postDirectoryName);
  const files = getAllFilesRecursively(prefixPaths);

  const allFrontMatter = [];
  files.forEach((file) => {
    // ファイル名を整形
    const fileName = filePathConvertForWindows(prefixPaths, file);

    // mdファイル以外を除外
    if (path.extname(fileName) !== ".md") return;

    // フロントマターを取得
    const source = fs.readFileSync(file, "utf8");
    const { data } = matter(source);
    const frontMatter = data;

    // 下書きを除外
    if (frontMatter.draft) return;

    allFrontMatter.push(convertFrontMatter(frontMatter));
  });

  const sortedData = allFrontMatter.sort((post1, post2) =>
    dateSortDesc(post1.date, post2.date)
  );

  return sortedData;
}

/** slugから投稿を取得 */
export async function getPostBySlug(slug) {
  const prefixPaths = path.join(root, postDirectoryName);
  const files = getAllFilesRecursively(prefixPaths);

  const source = fs.readFileSync(files[0], "utf8");

  const frontMatter = matter(source);
  const processedContent = await remark()
    .use(html)
    .process(frontMatter.content);
  const contentHtml = processedContent.toString();

  const { data } = frontMatter;
  return {
    ...convertFrontMatter(data),
    contentHtml: contentHtml,
  };
}
