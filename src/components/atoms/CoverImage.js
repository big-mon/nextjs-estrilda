import Image from "next/image";

export function CoverImage({ title, src, width, height }) {
  const image = (
    <Image
      src={src}
      alt={title}
      className="filter group-hover:brightness-50"
      objectFit="cover"
      width={width}
      height={height}
    />
  );
  return <div>{image}</div>;
}
