import { ListTag } from "../molecules/ListTag";

export function UnorderedTagsList({ tags }) {
  return (
    <div className="max-w-2xl mx-auto border-t py-6">
      <ul className="flex flex-wrap gap-x-8 gap-y-4">
        {tags.map((tag) => (
          <ListTag key={tag} name={tag} />
        ))}
      </ul>
    </div>
  );
}
