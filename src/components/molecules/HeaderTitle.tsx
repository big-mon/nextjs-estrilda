import Link from "next/link";
import { IconLogo } from "components/atoms/IconLogo";
import { SiteTitle } from "components/atoms/SiteTitle";

type Props = {
  home: Boolean;
};

export const HeaderTitle = ({ home }: Props) => {
  return (
    <>
      <Link
        href="/"
        className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      >
        <IconLogo />
        <SiteTitle home={home} />
      </Link>
    </>
  );
};
