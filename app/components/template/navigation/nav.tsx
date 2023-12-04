"use client";

import React, { useState } from "react";
import { BurgerMenu } from "../../../icons";
import DropDownMenu from "../drop-down-menu/drop-down-menu";
import Link from "next/link";
import { navigation } from "@/utils/arrays";
import MobileMenu from "./mobile-menu";

export default function Navigation({}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  const hendleMenuOpen = () => {
    setIsOpen(true);
  };

  return (
    <header className="container z-20">
      <nav
        className="flex items-center justify-between w-full pt-5 pb-5 animate-title"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Logo - link to git</span>
            <h2 className="text-xl text-black dark:text-white">{"<OA/>"}</h2>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            aria-label="Open mobile menu"
            className="flex items-center justify-center text-black transition-colors border rounded-md h-11 w-11 border-zinc-500 hover:border-zinc-400/50 dark:text-white md:hidden"
            onClick={hendleMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <BurgerMenu
              className="w-6 h-6 dark:text-white"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="hidden md:flex md:gap-x-12">
          {navigation.map(({ href, name }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-zinc-500"
            >
              {name}
            </Link>
          ))}
          <DropDownMenu />
        </div>
      </nav>
      <MobileMenu isOpen={isOpen} handleMenuClose={handleMenuClose} />
    </header>
  );
}
