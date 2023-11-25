import React, { useState } from "react";
import { BurgerMenu } from "../icons";
import MobileMenu from "./MobileMenu";
import DropDownMenu from "./DropDownMenu";
import Link from "next/link";
import { navigation } from "@/utils/arrays";

export default function Nav({}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="container">
      <nav
        className="flex items-center justify-between w-full pt-5 pb-5 "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Logo - link to git</span>
            <h2 className="text-xl text-zinc-500">{"<OA/>"}</h2>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            aria-label="Open mobile menu"
            className="flex items-center justify-center text-black transition-colors border rounded-md h-11 w-11 border-neutral-200 dark:border-neutral-700 dark:text-white md:hidden"
            onClick={handleMenuToggle}
          >
            <span className="sr-only">Open main menu</span>
            <BurgerMenu
              className="w-6 h-6 dark:text-white"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="hidden md:flex md:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-zinc-500"
            >
              {item.name}
            </Link>
          ))}
          <DropDownMenu />
        </div>
      </nav>
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        handleMenuToggle={handleMenuToggle}
      />
    </header>
  );
}
