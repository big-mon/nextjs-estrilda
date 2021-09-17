import Image from "next/image";

type Props = {
  title: string | "";
  src: string;
};

export function HeroImage({ title, src }: Props) {
  const image = (
    <>
      {src ? (
        <Image
          src={src}
          alt={title}
          width={1024}
          height={424}
          objectFit="cover"
          priority={false}
          quality={65}
        />
      ) : (
        <></>
      )}
    </>
  );
  return <div className="max-h-hero mx-auto">{image}</div>;
}
