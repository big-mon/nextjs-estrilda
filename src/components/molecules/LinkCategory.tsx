import Link from "next/link";
import { PostCategory } from "models/Post";

type Props = {
  name: PostCategory;
};

export function LinkCategory({ name }: Props) {
  const text: string = name.category;

  return (
    <>
      {text == "" ? (
        <></>
      ) : (
        <Link href={`/categories/${text.toLowerCase()}/1`}>
          <a className="hover:text-blue-800">{text}</a>
        </Link>
      )}
    </>
  );
}
