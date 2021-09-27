import { CopyRight } from "../atoms/CopyRight";
import { IconTwitter } from "../atoms/IconTwitter";
import { IconGitHub } from "../atoms/IconGitHub";
import { TWITTER, GITHUB } from "../../lib/constants";

export const Footer = () => {
  return (
    <>
      <footer className="max-w-6xl mx-auto text-gray-600 body-font">
        <div className="container px-8 pt-16 pb-8 mx-auto flex items-center sm:flex-row flex-col">
          <CopyRight />

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              href={`https://twitter.com/${TWITTER}`}
              rel="noopener noreferrer"
              target="_blank"
              className="ml-3 text-gray-500"
            >
              <IconTwitter />
            </a>
            <a
              href={`https://github.com/${GITHUB}`}
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
};
