import Image from "next/image";

type Props = {
  title: string;
  src: string;
  width: number;
  height: number;
};

export const PreviewHero = ({ title, src, width, height }: Props) => {
  return (
    <>
      {src ? (
        <Image
          src={src}
          alt={title}
          className="filter group-hover:brightness-50"
          objectFit="cover"
          width={width}
          height={height}
        />
      ) : (
        <></>
      )}
    </>
  );
};
