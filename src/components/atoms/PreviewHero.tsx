import Image from "next/image";

type Props = {
  title: string;
  src: string;
  width: number;
  height: number;
};

export const PreviewHero = ({ title, src, width, height }: Props) => {
  const isInternal = src && !src.startsWith("http") && !src.startsWith("/");
  const fixSrc = isInternal ? `/${src}` : src;

  return (
    <>
      {src ? (
        <Image
          src={fixSrc}
          alt={title}
          className="filter group-hover:brightness-50"
          width={width}
          height={height}
          quality={55}
        />
      ) : (
        <></>
      )}
    </>
  );
};
