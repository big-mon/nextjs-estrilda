import { HeaderTitle } from "components/molecules/HeaderTitle";
import Link from "next/link";

type Props = {
  home: Boolean;
};

export const Header = ({ home }: Props) => {
  return (
    <>
      <header className="max-w-7xl mx-auto text-gray-600">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <HeaderTitle home={home} />

          <nav className="md:ml-auto hidden sm:flex flex-wrap items-center text-base justify-center">
            <Link href="/post/about">
              <a className="mr-5 hover:text-gray-900">About</a>
            </Link>
            <Link href="/">
              <a className="mr-5 hover:text-gray-900">Second Link</a>
            </Link>
            <Link href="/">
              <a className="mr-5 hover:text-gray-900">Third Link</a>
            </Link>
            <Link href="/">
              <a className="mr-5 hover:text-gray-900">Fourth Link</a>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};
