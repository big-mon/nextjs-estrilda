import Logo from "../../../public/favicon.svg";
import Image from "next/image";
import { SITE_NAME } from "../../lib/constants";

export function IconLogo() {
  return (
    <>
      <Image src={Logo} alt={SITE_NAME} width={24} height={24} />
    </>
  );
}
