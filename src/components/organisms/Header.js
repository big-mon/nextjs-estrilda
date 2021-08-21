import { SiteTitle } from "../molecules/SiteTitle";

export function Header() {
  return (
    <>
      <header className="text-gray-600">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <SiteTitle siteName={process.env.NEXT_PUBLIC_SITE_NAME} />

          <nav className="md:ml-auto hidden sm:flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">First Link</a>
            <a className="mr-5 hover:text-gray-900">Second Link</a>
            <a className="mr-5 hover:text-gray-900">Third Link</a>
            <a className="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav>
        </div>
      </header>
    </>
  );
}
