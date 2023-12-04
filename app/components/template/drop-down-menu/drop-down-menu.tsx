import React, { Fragment } from "react";
import { ChevronDown } from "../../../icons";
import { useTheme } from "next-themes";
import { Popover, Transition } from "@headlessui/react";
import AppearanceButton from "./appearance-button";
import { appearances } from "../navigation/mobile-menu-disclosure";

export default function DropDownMenu() {
  const { theme: currentTheme } = useTheme();

  return (
    <Popover className="relative ">
      <Popover.Button className="flex items-center text-sm font-semibold leading-6 text-gray-900 dark:text-zinc-500 gap-x-1">
        Appearance
        <ChevronDown
          className="flex-none w-5 h-5 text-gray-400 dark:text-gray-100"
          aria-hidden="true"
        />
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
        <Popover.Panel className="absolute z-10 max-w-md p-3 mt-3 overflow-hidden bg-transparent shadow-lg dark:bg-inherit -left-8 top-full rounded-3xl ring-1 ring-gray-900/5">
          <div className="p-4">
            {appearances.map(({ theme, icon }) => (
              <AppearanceButton
                key={theme}
                theme={theme}
                icon={icon}
                currentTheme={currentTheme}
              />
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
