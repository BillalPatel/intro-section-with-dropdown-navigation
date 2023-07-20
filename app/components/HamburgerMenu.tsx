import React from "react";
import Image from "next/image";

import closeMenuIcon from "../../images/icon-close-menu.svg";
import expandArrowIcon from "../../images/icon-arrow-down.svg";

export default function HamburgerMenu() {
  return (
    <div className="hamburger-menu h-screen w-4/6 bg-white text-[#696969] font-semibold absolute top-0 right-0 justify-end">
      <div className="flex justify-end">
        <Image
          className="m-5 h-9 w-auto mt-7 mr-5"
          src={closeMenuIcon}
          width={1000}
          height={1000}
          alt="Close hamburger menu icon"
        />
      </div>
      <ul className="text-xl ml-9 mt-10 leading-[3rem]">
        <div className="flex flex-row">
          <li className="">Features</li>
          <Image
            className="expand-arrow h-2 w-4 flex align-center mt-5 ml-6"
            src={expandArrowIcon}
            width={1000}
            height={1000}
            alt="Down arrow icon"
          />
        </div>
        <div className="flex flex-row">
          <li className="">Company</li>
          <Image
            className="expand-arrow h-2 w-4 flex align-center mt-5 ml-6"
            src={expandArrowIcon}
            width={1000}
            height={1000}
            alt="Down arrow icon"
          />
        </div>
        <li className="">Careers</li>
        <li className="">About</li>
      </ul>
      <div className="btn-container text-xl flex flex-col mt-5 mx-3">
        <button className="m-5">Login</button>
        {/* <button className="m-5 border-white border-solid border-width rounded-2xl bg-gray-600">Register</button> */}
        <button className="mx-auto p-3 w-4/5 border-text-[#696969] outline rounded-2xl">
          Register
        </button>
      </div>
    </div>
  );
}
