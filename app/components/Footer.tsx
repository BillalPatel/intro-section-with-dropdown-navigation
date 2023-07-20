import React from "react";
import Image from "next/image";

import databizIcon from "../../images/client-databiz.svg";
import audiophileIcon from "../../images/client-audiophile.svg";
import meetIcon from "../../images/client-meet.svg";
import makerIcon from "../../images/client-maker.svg";

export default function Footer() {
  return (
    <footer className="flex justify-evenly mt-4 mx-10">
      <Image
        className="m-5 h-4 w-auto flex"
        src={databizIcon}
        width={1000}
        height={1000}
        alt="Databiz icon"
      />
      <Image
        className="m-5 h-7 w-auto flex"
        src={audiophileIcon}
        width={1000}
        height={1000}
        alt="Databiz icon"
      />
      <Image
        className="m-5 h-4 w-auto"
        src={meetIcon}
        width={1000}
        height={1000}
        alt="Databiz icon"
      />
      <Image
        className="m-5 h-5 w-auto"
        src={makerIcon}
        width={1000}
        height={1000}
        alt="Databiz icon"
      />
    </footer>
  );
}
