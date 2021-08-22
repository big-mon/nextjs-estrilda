import Image from "next/image";
import logoPic from "../../../public/icon.svg";
import { SITE_NAME } from "../../lib/constants";

export function Logo() {
  return (
    <>
      <Image src={logoPic} alt={SITE_NAME} width={25} height={25} />
    </>
  );
}
