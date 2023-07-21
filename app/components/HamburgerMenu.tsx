"use client";

import React, { useState } from "react";
import Image from "next/image";
import "animate.css";

import { LoginButton } from "./LoginButton";
import { RegisterButton } from "./RegisterButton";

import closeMenuIcon from "../../images/icon-close-menu.svg";
import todoListIcon from "../../images/icon-todo.svg";
import calendarIcon from "../../images/icon-calendar.svg";
import remindersIcon from "../../images/icon-reminders.svg";
import planningIcon from "../../images/icon-planning.svg";
import { ExpandedMenuItem } from "./ExpandedMenuItem";

export function HamburgerMenu(props: any) {
  const { setOpen } = props;
  const [isFeaturesExpanded, setIsFeaturesExpanded] = useState(false);
  const [isCompanyExpanded, setIsCompanyExpanded] = useState(false);

  function closeHamburgerMenu() {
    setOpen(false);
  }

  function expandFeaturesMenu() {
    setIsFeaturesExpanded(!isFeaturesExpanded);
  }

  function expandCompanyMenu() {
    setIsCompanyExpanded(!isCompanyExpanded);
  }

  return (
    <>
      <div
        className="grey-overlay h-full w-full bg-[rgba(0,0,0,0.6)] absolute inset-0"
        onClick={() => {
          closeHamburgerMenu();
        }}
      ></div>
      <div className="hamburger-menu animate__animated animate__fadeInRight animate__faster h-screen w-4/6 bg-white text-[#696969] font-semibold absolute top-0 right-0 justify-end">
        <div className="flex justify-end">
          <Image
            onClick={() => closeHamburgerMenu()}
            className="m-5 h-6 w-auto mt-6 mr-6"
            src={closeMenuIcon}
            width={1000}
            height={1000}
            alt="Close hamburger menu icon"
          />
        </div>
        <ul className="text-base ml-9 mt-6 leading-[2.5rem]">
          <div onClick={() => expandFeaturesMenu()}>
            <ExpandedMenuItem text={"Features"} />
          </div>
          {isFeaturesExpanded && (
            <div className="expanded-menu-items">
              <ul className="flex flex-col mt-5 mb-2 ml-5">
                <li className="flex flex-row">
                  <Image
                    className="h-5 w-auto mr-3 mb-1 flex self-center"
                    src={todoListIcon}
                    width={1000}
                    height={1000}
                    alt="Expanded menu items"
                  />
                  Todo List
                </li>
                <li className="flex flex-row">
                  <Image
                    className="h-5 w-auto mr-3 mb-1 flex self-center"
                    src={calendarIcon}
                    width={1000}
                    height={1000}
                    alt="Expanded menu items"
                  />
                  Calendar
                </li>
                <li className="flex flex-row">
                  <Image
                    className="h-5 w-auto mr-3 mb-1 flex self-center"
                    src={remindersIcon}
                    width={1000}
                    height={1000}
                    alt="Expanded menu items"
                  />
                  Reminders
                </li>
                <li className="flex flex-row">
                  <Image
                    className="h-5 w-auto mr-3 mb-1 flex self-center"
                    src={planningIcon}
                    width={1000}
                    height={1000}
                    alt="Expanded menu items"
                  />
                  Planning
                </li>
              </ul>
            </div>
          )}
          <div onClick={() => expandCompanyMenu()}>
            <ExpandedMenuItem text={"Company"} />
          </div>
          {isCompanyExpanded && (
            <div className="expanded-menu-items">
              <ul className="flex flex-col mb-2 ml-5">
                <li className="">History</li>
                <li className="">Our Team</li>
                <li className="">Blog</li>
              </ul>
            </div>
          )}
          <li className="">Careers</li>
          <li className="">About</li>
        </ul>
        <div className="btn-container text-sm flex flex-col mt-1 mx-3">
          <LoginButton />
          <RegisterButton />
        </div>
      </div>
    </>
  );
}
