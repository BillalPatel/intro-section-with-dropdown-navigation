"use client";

import React, { useState } from "react";
import Image from "next/image";

import { Logo } from "./components/Logo";
import { HamburgerMenu } from "./components/HamburgerMenu";
import { HeaderMenu } from "./components/HeaderMenu";
import { LoginButton } from "./components/LoginButton";
import { RegisterButton } from "./components/RegisterButton";

import hamburgerMenuIcon from "../images/icon-menu.svg";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  function openHamburgerMenu() {
    setIsHamburgerMenuOpen(true);
  }

  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <body className="bg-[#fafafa]">
        {isHamburgerMenuOpen && (
          <HamburgerMenu />
        )}
        <header className="flex justify-between my-2 lg:mx-7 lg:mt-3">
          <div className="flex">
            <Logo />
            <HeaderMenu />
          </div>
          <div className="hamburger-menu" onClick={() => openHamburgerMenu()}>
            <Image
              className="m-5 h-5 w-auto lg:hidden"
              src={hamburgerMenuIcon}
              width={1000}
              height={1000}
              alt="Hamburger menu icon"
            />
          </div>
          <div className="mx-5 hidden lg:block">
            <LoginButton />
            <RegisterButton />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
