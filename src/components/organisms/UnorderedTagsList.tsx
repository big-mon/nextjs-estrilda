import { ListTag } from "components/molecules/ListTag";
import { PostTag } from "models/Post";

type Props = {
  tags?: PostTag[];
};

export const UnorderedTagsList = ({ tags }: Props) => {
  return (
    <>
      {tags ? (
        <div className="max-w-2xl mx-auto border-t py-6">
          <ul className="flex flex-wrap gap-x-8 gap-y-4">
            {tags
              .filter((data) => data)
              .map((tag, index) => (
                <ListTag key={index} name={tag} />
              ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
