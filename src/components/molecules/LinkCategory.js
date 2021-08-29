import Link from "next/link";

export function LinkCategory({ name }) {
  return (
    <Link href={`/categories/${name}/1`}>
      <a>{name}</a>
    </Link>
  );
}
