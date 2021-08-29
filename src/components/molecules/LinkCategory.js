import Link from "next/link";

export function LinkCategory({ name }) {
  return (
    <Link href={`/categories/${name}/1`}>
      <a className="hover:text-blue-800">{name}</a>
    </Link>
  );
}