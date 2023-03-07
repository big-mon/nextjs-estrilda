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
            <Link href="/post/about" className="mr-5 hover:text-gray-900">
              About
            </Link>
            <Link href="/" className="mr-5 hover:text-gray-900">
              Second Link
            </Link>
            <Link href="/" className="mr-5 hover:text-gray-900">
              Third Link
            </Link>
            <Link href="/" className="mr-5 hover:text-gray-900">
              Fourth Link
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};
