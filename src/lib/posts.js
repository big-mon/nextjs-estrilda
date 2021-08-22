import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getAllFilesRecursively } from "../lib/files";

const root = process.cwd();
const postsDirectory = path.join(root, "posts");

export function getPostBySlug(slugArray, fields = []) {
  const joinedSlug = slugArray.join("/");
  const realSlug = joinedSlug.replace(/\.md$/, "");

  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") items[field] = realSlug;
    if (field === "content") items[field] = content;

    if (data[field]) items[field] = data[field];
  });

  return items;
}

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

/** 全てのフロントマター(YAMLで記載した文書情報)を取得 */
export async function getAllFilesFrontMatter() {
  const prefixPaths = path.join(root, `posts`);
  const files = getAllFilesRecursively(prefixPaths);

  const allFrontMatter = [];
  files.forEach((file) => {
    // ファイル名を整形
    const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, "/");

    // mdファイル以外を除外
    if (path.extname(fileName) !== ".md") return;

    // フロントマターを取得
    const source = fs.readFileSync(file, "utf8");
    const { data } = matter(source);
    const frontMatter = data;

    // 下書きを除外
    if (frontMatter.draft) return;

    allFrontMatter.push({
      ...frontMatter,
      slug: formatSlug(fileName),
      date: frontMatter.date ? new Date(frontMatter.date).toISOString() : null,
    });
  });

  const sortedData = allFrontMatter.sort((post1, post2) =>
    dateSortDesc(post1.date, post2.date)
  );

  return sortedData;
}
