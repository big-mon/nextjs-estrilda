import Link from "next/link";
import { PostTag } from "../../models/Post";

type Props = {
  name: PostTag;
  children: React.ReactNode;
};

export const Tag = ({ name, children }: Props) => {
  return (
    <>
      <Link href={`/tags/${name.tag.toLowerCase()}/1`}>
        <a>#{children}</a>
      </Link>
    </>
  );
};
