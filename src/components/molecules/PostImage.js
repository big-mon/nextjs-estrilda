import Image from "next/image";

/** 投稿画像をImage化 */
export function PostImage({ title, src }) {
  const slimSrc = src.replace("/t_postimage,f_auto/", "/");

  return (
    <div className="relative max-h-hero h-screen my-8">
      <Image src={slimSrc} alt={title} layout="fill" objectFit="contain" />
    </div>
  );
}
