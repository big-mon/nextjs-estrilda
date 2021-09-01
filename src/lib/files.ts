import fs from "fs";
import path from "path";

/** 再帰的にディレクトリ内のアイテムを取得 */
export function getAllFilesRecursively(directory: string) {
  return pipe(
    fs.readdirSync,
    map(pipe(pathJoinPrefix(directory), walkDir)),
    flattenArray
  )(directory);
}

function pipe(...fns: any[]) {
  return (arg: any) => fns.reduce((val, fn) => fn(val), arg);
}

function flattenArray(arr: any) {
  return arr.reduce(
    (acc: any, item: any) => [...acc, ...(Array.isArray(item) ? item : [item])],
    []
  );
}

function map(target: any) {
  return (input: any) => input.map(target);
}

const walkDir = (fullPath: string) => {
  return fs.statSync(fullPath).isFile()
    ? fullPath
    : getAllFilesRecursively(fullPath);
};

const pathJoinPrefix = (prefix: string) => {
  return (extraPath: string) => path.join(prefix, extraPath);
};
