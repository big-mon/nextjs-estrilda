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
          priority={false}
          quality={65}
          fill
          className="object-contain"
        />
      ) : (
        <></>
      )}
    </>
  );
  return (
    <div className="max-h-hero mx-auto relative aspect-video">{image}</div>
  );
}
