import { SITE_NAME } from "../../lib/constants";

export function SiteTitle({ home }) {
  return (
    <>
      {home ? (
        <h1 className="ml-3 text-xl">{SITE_NAME}</h1>
      ) : (
        <span className="ml-3 text-xl">{SITE_NAME}</span>
      )}
    </>
  );
}
