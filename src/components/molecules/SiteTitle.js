import Link from "next/link";
import { Logo } from "./Logo";
import { Title } from "../atoms/Title";

export function SiteTitle({ home }) {
  return (
    <>
      <Link href="/">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Logo />
          <Title home={home} />
        </a>
      </Link>
    </>
  );
}
