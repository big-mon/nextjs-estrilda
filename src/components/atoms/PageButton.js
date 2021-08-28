import Link from "next/link";

export function PageButton({ src, children }) {
  return (
    <button className="mx-2 border rounded-full border-gray-600 px-4 py-1 hover:bg-gray-600 hover:text-white">
      <Link href={src}>
        <a>{children}</a>
      </Link>
    </button>
  );
}
