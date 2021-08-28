import Link from "next/link";
import { SITE_NAME, AUTHOR, TWITTER } from "../../lib/constants";

export function CopyRight() {
  return (
    <>
      <p className="text-sm text-gray-500 sm:py-2 sm:mt-0 mt-4">
        © {new Date().getFullYear()}{" "}
        <Link href="/">
          <a>{SITE_NAME}</a>
        </Link>{" "}
        -
        <a
          href={`https://twitter.com/${TWITTER}`}
          rel="noopener noreferrer"
          target="_blank"
          className="text-gray-600 ml-1"
        >
          {AUTHOR}
        </a>
      </p>
    </>
  );
}
