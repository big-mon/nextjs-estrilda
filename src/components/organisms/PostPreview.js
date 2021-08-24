import Link from "next/link";
import { CoverImage } from "../molecules/CoverImage";
import { Date } from "../atoms/Date";

export function PostPreview({
  title,
  date,
  slug,
  category,
  coverImage,
  description,
}) {
  return (
    <>
      <article className="mx-auto mb-8 w-88 group hover:text-blue-800">
        <Link as={`/post/${slug}`} href="/post/[slug]">
          <a>
            <div className="flex flex-wrap content-start h-full border border-gray-200 rounded-md relative">
              <CoverImage
                title={title}
                src={coverImage}
                width={360}
                height={220}
              />
              <div className="p-6">
                <h3 className="text-sm opacity-50 mb-2">
                  {category.length ? category[0] : ""}
                </h3>
                <h2 className="text-lg font-medium mb-2">{title}</h2>
                <p className="mb-10">{description}</p>
                <p className="text-xs opacity-70 absolute bottom-6">
                  <Date dateString={date} />
                </p>
              </div>
            </div>
          </a>
        </Link>
      </article>
    </>
  );
}
