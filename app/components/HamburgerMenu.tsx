"use client";

import React, { useState } from "react";
import Image from "next/image";

import closeMenuIcon from "../../images/icon-close-menu.svg";
import expandArrowIcon from "../../images/icon-arrow-down.svg";
import collapseArrowIcon from "../../images/icon-arrow-up.svg";

export default function HamburgerMenu() {
  const [isFeaturesExpanded, setIsFeaturesExpanded] = useState(false);
  const [isCompanyExpanded, setIsCompanyExpanded] = useState(false);

  function expandFeaturesMenu() {
    setIsFeaturesExpanded(!isFeaturesExpanded);
  }

  function expandCompanyMenu() {
    setIsCompanyExpanded(!isCompanyExpanded);
  }

  return (
    <>
      <div className="grey-overlay h-full w-full bg-[rgba(0,0,0,0.5)] absolute inset-0"></div>
      <div className="hamburger-menu h-screen w-4/6 bg-white text-[#696969] font-semibold absolute top-0 right-0 justify-end">
        <div className="flex justify-end">
          <Image
            className="m-5 h-6 w-auto mt-7 mr-8"
            src={closeMenuIcon}
            width={1000}
            height={1000}
            alt="Close hamburger menu icon"
          />
        </div>
        <ul className="text-base ml-9 mt-10 leading-[2.5rem]">
          <div className="flex flex-row" onClick={() => expandFeaturesMenu()}>
            <li className="">Features</li>
            <Image
              className="expand-arrow h-1.5 w-2.5 flex align-center mt-5 ml-6"
              src={isFeaturesExpanded ? collapseArrowIcon : expandArrowIcon}
              width={1000}
              height={1000}
              alt="Arrow icon"
            />
            {isFeaturesExpanded && <div className="flex">Hello</div>}
          </div>
          <div className="flex flex-row" onClick={() => expandCompanyMenu()}>
            <li className="">Company</li>
            <Image
              className="expand-arrow h-1.5 w-2.5 flex align-center mt-5 ml-6"
              src={isFeaturesExpanded ? collapseArrowIcon : expandArrowIcon}
              width={1000}
              height={1000}
              alt="Down arrow icon"
            />
            {isCompanyExpanded && <div className="flex">Hello</div>}
          </div>
          <li className="">Careers</li>
          <li className="">About</li>
        </ul>
        <div className="btn-container text-sm flex flex-col mt-5 mx-3">
          <button className="m-5">Login</button>
          {/* <button className="m-5 border-white border-solid border-width rounded-2xl bg-gray-600">Register</button> */}
          <button className="mx-auto p-3 w-4/5 border-text-[#696969] outline outline-[#696969] outline-2 rounded-2xl">
            Register
          </button>
        </div>
      </div>
    </>
  );
}
