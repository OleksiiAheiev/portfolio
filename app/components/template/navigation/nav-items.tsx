import { navigation } from "@/utils/arrays";
import Link from "next/link";
import React from "react";

export default function NavItems() {
  return (
    <>
      {navigation.map(({ href, name }) => (
        <Link
          key={href}
          href={href}
          className="text-sm font-semibold leading-6 duration-1000 text-zinc-500 hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-zinc-100"
        >
          {name}
        </Link>
      ))}
    </>
  );
}
