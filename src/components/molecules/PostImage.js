import Image from "next/image";

/** 投稿画像をImage化 */
export function PostImage({ title, src, alt }) {
  const slimSrc = src.replace("/t_postimage,f_auto/", "/");

  return (
    <figure className="my-8">
      <div className="relative max-h-hero h-screen">
        <Image src={slimSrc} alt={alt} layout="fill" objectFit="contain" />
      </div>
      {title ? (
        <figcaption className="max-w-2xl mx-auto p-2 text-center text-gray-600 text-base">
          {title}
        </figcaption>
      ) : (
        <></>
      )}
    </figure>
  );
}
