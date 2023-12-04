"use client";

import React, { useState } from "react";
import { BurgerMenu } from "../../../icons";
import DropDownMenu from "../drop-down-menu/drop-down-menu";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import NavItems from "./nav-items";

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
            <h2 className="text-xl duration-1000 text-zinc-500 hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-zinc-100">{"<OA/>"}</h2>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            aria-label="Open mobile menu"
            className="flex items-center justify-center transition-colors duration-1000 border rounded-md h-11 w-11 border-zinc-500 hover:border-zinc-400/50 text-zinc-950 dark:text-zinc-500 dark:hover:text-zinc-100 md:hidden "
            onClick={hendleMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <BurgerMenu
              className="w-6 h-6 dark:text-zinc-100"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="hidden md:flex md:gap-x-12">
          <NavItems />
          <DropDownMenu />
        </div>
      </nav>
      <MobileMenu isOpen={isOpen} handleMenuClose={handleMenuClose} />
    </header>
  );
}
