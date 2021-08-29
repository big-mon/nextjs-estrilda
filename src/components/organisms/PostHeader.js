import { Date } from "../atoms/Date";
import { LinkCategory } from "../molecules/LinkCategory";

export function PostHeader({ title, category, date }) {
  return (
    <div className="mx-auto py-2 max-w-2xl">
      <div className="font-medium text-lg text-gray-600 mb-5">
        <LinkCategory name={category} />
      </div>
      <h1 className="text-3xl font-semibold mb-8">{title}</h1>
      <div className="opacity-70 font-light mb-6">
        <Date dateString={date} />
      </div>
    </div>
  );
}
