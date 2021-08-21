import Image from "next/image";
import logoPic from "../../../public/icon.svg";

export function Logo() {
  return (
    <>
      <Image
        src={logoPic}
        alt={process.env.NEXT_PUBLIC_SITE_NAME}
        width={25}
        height={25}
      />
    </>
  );
}
