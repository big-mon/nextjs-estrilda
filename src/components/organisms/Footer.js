import { CopyRight } from "../molecules/CopyRight";
import { IconTwitter } from "../atoms/IconTwitter";
import { IconGitHub } from "../atoms/IconGitHub";

export function Footer() {
  return (
    <>
      <footer className="text-gray-600 body-font">
        <div className="container px-8 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <CopyRight
            siteName={process.env.NEXT_PUBLIC_SITE_NAME}
            author={process.env.NEXT_PUBLIC_AUTHOR}
            twitter={process.env.NEXT_PUBLIC_TWITTER}
          />

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              href={`https://twitter.com/${process.env.NEXT_PUBLIC_TWITTER}`}
              rel="noopener noreferrer"
              target="_blank"
              className="ml-3 text-gray-500"
            >
              <IconTwitter />
            </a>
            <a
              href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB}`}
              rel="noopener noreferrer"
              target="_blank"
              className="ml-3 text-gray-500"
            >
              <IconGitHub />
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}
