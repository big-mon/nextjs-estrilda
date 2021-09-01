import { Tag } from "../atoms/Tag";
import { PostTag } from "../../models/Post";

type Props = {
  name: PostTag;
};

export const ListTag = ({ name }: Props) => {
  return (
    <li>
      <Tag name={name}>{name.tag}</Tag>
    </li>
  );
};
