import { SITE_NAME } from "../../lib/constants";

export function Title() {
  return (
    <>
      <h1 className="ml-3 text-xl">{SITE_NAME}</h1>
    </>
  );
}
