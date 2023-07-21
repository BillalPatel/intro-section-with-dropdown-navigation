import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";

import HamburgerMenu from "./components/HamburgerMenu";
import { LoginButton } from "./components/LoginButton";
import { RegisterButton } from "./components/RegisterButton";

import logo from "../images/logo.svg";
import hamburgerMenuIcon from "../images/icon-menu.svg";

export const metadata: Metadata = {
  title: "Intro Section With Dropdown Navigation",
  description: "Challenge from frontendmentor.io",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <body>
        <HamburgerMenu />
        <header className="flex justify-between my-2 lg:mx-7">
          <Image
            className="m-5 h-7 w-auto"
            src={logo}
            width={1000}
            height={1000}
            alt="Logo"
          />
          <div className="hamburger-menu">
            <Image
              className="m-5 h-5 w-auto lg:hidden"
              src={hamburgerMenuIcon}
              width={1000}
              height={1000}
              alt="Hamburger menu icon"
              // onClick={() => {
              //   openHamburgerMenu();
              // }}
            />
          </div>
          <div>
            <LoginButton />
            <RegisterButton />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
