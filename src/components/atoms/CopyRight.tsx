import Link from "next/link";
import { SITE_NAME, OWNER, TWITTER } from "lib/constants";

export const CopyRight = () => {
  return (
    <>
      <p className="text-sm text-gray-500 sm:py-2 sm:mt-0 mt-4">
        © {new Date().getFullYear()} <Link href="/">{SITE_NAME}</Link> -
        <a
          href={`https://twitter.com/${TWITTER}`}
          rel="noopener noreferrer"
          target="_blank"
          className="text-gray-600 ml-1"
        >
          {OWNER}
        </a>
      </p>
    </>
  );
};
