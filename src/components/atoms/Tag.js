import Link from "next/link";

export function Tag({ name, children }) {
  return (
    <>
      <Link href={`/tags/${name.toLowerCase()}/1`}>
        <a>#{children}</a>
      </Link>
    </>
  );
}
