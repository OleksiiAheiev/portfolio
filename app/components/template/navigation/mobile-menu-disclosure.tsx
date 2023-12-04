import React, { Fragment } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDown, Monitor, Moon, SunDim } from "@/app/icons";
import AppearanceButton from "../drop-down-menu/appearance-button";
import { useTheme } from "next-themes";
import { IAppearance } from "@/lib/types";

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

export default function MobileMenuDisclosure() {
  const { theme: currentTheme } = useTheme();

  return (
    <Disclosure as="div" className="-mx-3">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
            Appearance
            <ChevronDown
              className={`${
                open ? "scale-y-[-1] transform" : "h-5 w-5 flex-none"
              } h-5 w-5 transition-all duration-300`}
              aria-hidden="true"
            />
          </Disclosure.Button>
          <Transition
            as={Fragment}
            enter="transition duration-300 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="mt-2 space-y-2 transition-all duration-300">
              {appearances.map(({ theme, icon }) => (
                <AppearanceButton
                  key={theme}
                  theme={theme}
                  icon={icon}
                  currentTheme={currentTheme}
                />
              ))}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
