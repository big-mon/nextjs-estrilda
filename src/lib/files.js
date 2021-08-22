import fs from "fs";
import path from "path";

/** 再帰的にディレクトリ内のアイテムを取得 */
export function getAllFilesRecursively(directory) {
  return pipe(
    fs.readdirSync,
    map(pipe(pathJoinPrefix(directory), walkDir)),
    flattenArray
  )(directory);
}

function pipe(...fns) {
  return (arg) => fns.reduce((val, fn) => fn(val), arg);
}

function flattenArray(arr) {
  return arr.reduce(
    (acc, item) => [...acc, ...(Array.isArray(item) ? item : [item])],
    []
  );
}

function map(target) {
  return (input) => input.map(target);
}

function walkDir(fullPath) {
  return fs.statSync(fullPath).isFile()
    ? fullPath
    : getAllFilesRecursively(fullPath);
}

function pathJoinPrefix(prefix) {
  return (extraPath) => path.join(prefix, extraPath);
}
