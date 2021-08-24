import { HeroImage } from "../molecules/HeroImage";

export function PostHeroImage({ src, title }) {
  return (
    <div className="-mx-6 py-2 max-w-6xl">
      <HeroImage src={src} title={title} />
    </div>
  );
}
