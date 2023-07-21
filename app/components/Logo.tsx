import Image from "next/image";

import logo from "../../images/logo.svg";

export function Logo() {
  return (
    <Image
      className="m-5 h-7 w-auto"
      src={logo}
      width={1000}
      height={1000}
      alt="Logo"
    />
  );
}
