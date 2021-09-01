import Link from "next/link";
import { IconLogo } from "../atoms/IconLogo";
import { SiteTitle } from "../atoms/SiteTitle";

type Props = {
  home: Boolean;
};

export const HeaderTitle = ({ home }: Props) => {
  return (
    <>
      <Link href="/">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <IconLogo />
          <SiteTitle home={home} />
        </a>
      </Link>
    </>
  );
};
