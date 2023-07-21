import React from "react";
import Image from "next/image";

import databizIcon from "../../images/client-databiz.svg";
import audiophileIcon from "../../images/client-audiophile.svg";
import meetIcon from "../../images/client-meet.svg";
import makerIcon from "../../images/client-maker.svg";

export default function Footer() {
  return (
    <div className="flex sm:justify-between mt-4 lg:mt-16 sm:mx-auto">
      <Image
        className="mt-5 h-3 lg:h-5"
        src={databizIcon}
        width={1000}
        height={1000}
        alt="Databiz icon"
      />
      <Image
        className="mt-5 lg:mt-3 h-6 lg:h-10"
        src={audiophileIcon}
        width={1000}
        height={1000}
        alt="Audiophile icon"
      />
      <Image
        className="mt-5 h-3 lg:h-5"
        src={meetIcon}
        width={1000}
        height={1000}
        alt="Meet icon"
        unoptimized={false}
      />
      <Image
        className="mt-5 lg:mt-4 h-4 lg:h-7"
        src={makerIcon}
        width={1000}
        height={1000}
        alt="Maker icon"
        unoptimized={true}
        priority
      />
    </div>
  );
}
