import Image from "next/image";

export function HeroImage({ title, src }) {
  const image = (
    <Image src={src} alt={title} width={1024} height={424} objectFit="cover" />
  );
  return <div className="max-h-hero h-screen mx-auto">{image}</div>;
}
