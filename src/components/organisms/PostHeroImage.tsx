import { HeroImage } from "../molecules/HeroImage";

type Props = {
  src: string;
  title: string;
};

export const PostHeroImage = ({ src, title }: Props) => {
  const slimSrc = src.replace(
    "/f_auto,q_auto,fl_progressive,c_fill,h_288,w_494/",
    "/"
  );

  return (
    <div className="-mx-6 py-2 max-w-6xl">
      <HeroImage src={slimSrc} title={title} />
    </div>
  );
};
