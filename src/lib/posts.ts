import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getAllFilesRecursively } from "../lib/files";
import { PostData, FullPostData, PostTag, PostCategory } from "../models/Post";

const root = process.cwd();
const postDirectoryName = `posts`;

/** 日付の降順でソート */
const dateSortDesc = (date1: string, date2: string) => {
  if (date1 > date2) return -1;
  if (date1 < date2) return 1;
  return 0;
};

/** ファイルパスをWindows環境でも読み込める形式へ整形 */
const filePathConvertForWindows = (prefixPaths: string, file: string) => {
  return file.slice(prefixPaths.length + 1).replace(/\\/g, "/");
};

/** フロントマターから必要なデータのみ抽出 */
const convertFrontMatter = (frontMatter: { [key: string]: any }): PostData => {
  const category: PostCategory = { category: frontMatter.category ?? "" };
  const tags: PostTag[] = frontMatter.tags
    ? frontMatter.tags.map((t: string) => {
        return { tag: t };
      })
    : [];

  const result = {
    slug: frontMatter.slug,
    date: frontMatter.date
      ? new Date(frontMatter.date).toISOString()
      : new Date().toISOString(),
    title: frontMatter.title ?? "",
    description: frontMatter.description ?? "",
    author: frontMatter.author ?? "",
    coverImage: frontMatter.image ?? "",
    category: category,
    tags: tags,
  };
  return result;
};

/** 全てのフロントマター(YAMLで記載した文書情報)を取得 */
export const getAllPostsFrontMatter = (): PostData[] => {
  const prefixPaths = path.join(root, postDirectoryName);
  const files = getAllFilesRecursively(prefixPaths);

  const allFrontMatter: any = [];
  files.forEach((file: any) => {
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

  const sortedData = allFrontMatter.sort((post1: PostData, post2: PostData) =>
    dateSortDesc(
      post1.date ?? new Date().toISOString(),
      post2.date ?? new Date().toISOString()
    )
  );

  return sortedData;
};

/** slugから投稿を取得 */
export const getPostBySlug = async (slug: string): Promise<FullPostData> => {
  const prefixPaths = path.join(root, postDirectoryName);
  const files = getAllFilesRecursively(prefixPaths);

  // slugの一致するデータを取得
  const postData = files
    .map((file: any) => {
      const source = fs.readFileSync(file, "utf8");
      const frontMatter = matter(source);
      return frontMatter;
    })
    .filter((fm: any) => fm.data.slug === slug)[0];

  // 指定したデータ群をpropsとして返却
  const { data } = postData;
  return {
    ...convertFrontMatter(data),
    contentHtml: postData.content,
  };
};

/** categoryから記事を取得(本文なし) */
export const getCategoryPosts = (category: string = "", posts?: PostData[]) => {
  const allPosts = posts ? posts : getAllPostsFrontMatter();
  const filteredPosts = allPosts.filter(
    (p: PostData) => p.category.category.toLowerCase() == category.toLowerCase()
  );

  return filteredPosts;
};

/** tagから記事を取得(本文なし) */
export const getTagPosts = (tag: string, posts?: PostData[]) => {
  const allPosts = posts ? posts : getAllPostsFrontMatter();
  const filteredPosts = allPosts.filter((p: PostData) =>
    p.tags?.map((t: PostTag) => t.tag.toLowerCase()).includes(tag.toLowerCase())
  );

  return filteredPosts;
};
