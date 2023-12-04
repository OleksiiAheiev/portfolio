import React, { Fragment } from "react";
import { ChevronDown } from "../../../icons";
import { Popover, Transition } from "@headlessui/react";
import PopoverItems from "./popover-items";

export default function DropDownMenu() {
  return (
    <Popover className="relative ">
      <Popover.Button className="flex items-center text-sm font-semibold leading-6 duration-1000 gap-x-1 text-zinc-500 hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-zinc-100 ">
        Appearance
        <ChevronDown className="flex-none w-5 h-5 " aria-hidden="true" />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition duration-300 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel className="absolute z-10 max-w-md p-3 mt-3 overflow-hidden bg-transparent shadow-lg dark:bg-inherit -left-8 top-full rounded-3xl ring-1 ring-zinc-900/5">
          <PopoverItems />
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
