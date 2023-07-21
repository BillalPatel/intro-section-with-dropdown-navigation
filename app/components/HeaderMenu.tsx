"use client";

import React, { useState } from "react";
import Image from "next/image";

import expandArrowIcon from "../../images/icon-arrow-down.svg";
import collapseArrowIcon from "../../images/icon-arrow-up.svg";
import { FeaturesDesktopMenu } from "./FeaturesDesktopMenu";
import { CompanyDesktopMenu } from "./CompanyDesktopMenu";

export function HeaderMenu() {
  const [isFeaturesExpanded, setIsFeaturesExpanded] = useState(false);
  const [isCompanyExpanded, setIsCompanyExpanded] = useState(false);

  function expandFeaturesMenu() {
    setIsFeaturesExpanded(!isFeaturesExpanded);
  }

  function expandCompanyMenu() {
    console.log("ojiejioefijof");
    setIsCompanyExpanded(!isCompanyExpanded);
  }

  return (
    <ul className="mt-5 ml-5 text-[#696969] hidden lg:flex">
      <div
        className="flex flex-row mx-12 cursor-pointer"
        onClick={() => expandFeaturesMenu()}
      >
        <li className=" hover:text-[#141414]">Features</li>
        <Image
          className="expand-arrow h-1.5 w-2.5 flex align-bottom mt-2 ml-2"
          src={isFeaturesExpanded ? collapseArrowIcon : expandArrowIcon}
          width={1000}
          height={1000}
          alt="Arrow icon"
        />
        {isFeaturesExpanded && <FeaturesDesktopMenu />}
      </div>
      <div
        className="flex flex-row cursor-pointer"
        onClick={() => expandCompanyMenu()}
      >
        <li className=" hover:text-[#141414]">Company</li>
        <Image
          onClick={() => expandCompanyMenu()}
          className="expand-arrow h-1.5 w-2.5 flex align-bottom mt-2 ml-2"
          src={isCompanyExpanded ? collapseArrowIcon : expandArrowIcon}
          width={1000}
          height={1000}
          alt="Arrow icon"
        />
        {isCompanyExpanded && <CompanyDesktopMenu />}
      </div>
      <li className="mx-8 hover:text-[#141414] cursor-pointer">Careers</li>
      <li className="mx-8 hover:text-[#141414] cursor-pointer">About</li>
    </ul>
  );
}
