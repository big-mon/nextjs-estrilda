import { Tag } from "../atoms/Tag";

export function ListTag({ name }) {
  return (
    <li>
      <Tag name={name}>{name}</Tag>
    </li>
  );
}
