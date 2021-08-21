import Link from "next/link";
import { Logo } from "../atoms/Logo";
import { Title } from "../atoms/Title";

export function SiteTitle() {
  return (
    <>
      <Link href="/">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Logo name={process.env.NEXT_PUBLIC_SITE_NAME} />
          <Title name={process.env.NEXT_PUBLIC_SITE_NAME} />
        </a>
      </Link>
    </>
  );
}
