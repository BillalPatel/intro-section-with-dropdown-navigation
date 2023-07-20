import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";

import HamburgerMenu from "../app/components/HamburgerMenu";
import Footer from "../app/components/Footer";

import logo from "../images/logo.svg";
import hamburgerMenuIcon from "../images/icon-menu.svg";

const inter = Inter({ subsets: ["latin"] });

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
        <header className="flex justify-between my-2">
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
            />
          </div>
        </header>
        {children}
      </body>
      <Footer />
    </html>
  );
}
