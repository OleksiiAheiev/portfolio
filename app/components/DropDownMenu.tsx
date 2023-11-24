import React, { Fragment } from "react";
import { Check, ChevronDown, Monitor, Moon, SunDim } from "../icons";
import { IAppearance } from "@/lib/types";
import { useTheme } from "next-themes";
import { Popover, Transition } from "@headlessui/react";

export const appearances: IAppearance[] = [
  {
    theme: "System",
    icon: <Monitor className="w-4 h-4" />,
  },
  {
    theme: "Light",
    icon: <SunDim className="w-4 h-4" />,
  },
  {
    theme: "Dark",
    icon: <Moon className="w-4 h-4" />,
  },
];

export default function DropDownMenu() {
  const { theme: currentTheme, setTheme } = useTheme();

  return (
    <Popover className="relative">
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
        <Popover.Panel className="absolute z-10 max-w-md p-3 mt-3 overflow-hidden bg-white shadow-lg dark:bg-inherit -left-8 top-full rounded-3xl ring-1 ring-gray-900/5">
          <div className="p-4">
            {appearances.map(({ theme, icon }) => (
              <button
                key={theme}
                className="flex w-full items-center justify-between rounded px-2 py-1.5 text-sm"
                onClick={() => {
                  setTheme(theme.toLowerCase());
                }}
              >
                <div className="flex items-center space-x-2">
                  <div className="p-1 border rounded-sm border-stone-200">
                    {icon}
                  </div>
                  <span className="text-gray-900 dark:text-zinc-500">
                    {theme}
                  </span>
                </div>
                {currentTheme === theme.toLowerCase() && (
                  <Check className="w-4 h-4" aria-hidden="true" />
                )}
              </button>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
