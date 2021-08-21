import Link from "next/link";

export function CopyRight() {
  return (
    <>
      <p className="text-sm text-gray-500 sm:py-2 sm:mt-0 mt-4">
        © {new Date().getFullYear()}{" "}
        <Link href="/">
          <a>{process.env.NEXT_PUBLIC_SITE_NAME}</a>
        </Link>{" "}
        -
        <a
          href={`https://twitter.com/${process.env.NEXT_PUBLIC_TWITTER}`}
          rel="noopener noreferrer"
          target="_blank"
          className="text-gray-600 ml-1"
        >
          {process.env.NEXT_PUBLIC_AUTHOR}
        </a>
      </p>
    </>
  );
}
