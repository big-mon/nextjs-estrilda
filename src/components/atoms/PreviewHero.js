import Image from "next/image";

export function PreviewHero({ title, src, width, height }) {
  return (
    <Image
      src={src}
      alt={title}
      className="filter group-hover:brightness-50"
      objectFit="cover"
      width={width}
      height={height}
    />
  );
}
