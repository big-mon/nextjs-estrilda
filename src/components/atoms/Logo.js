import Image from "next/image";
import logoPic from "../../../public/icon.svg";

export function Logo({ name }) {
  return (
    <>
      <Image src={logoPic} alt={name} width={25} height={25} />
    </>
  );
}
