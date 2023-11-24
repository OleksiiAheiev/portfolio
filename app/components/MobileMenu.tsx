import React, { Fragment } from "react";
import { useTheme } from "next-themes";
import { Check, ChevronDown, CloseMenu } from "../icons";
import { appearances } from "./DropDownMenu";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import Link from "next/link";
import { navigation } from "@/utils/arrays";

interface IMobileMenu {
  mobileMenuOpen: boolean;
  handleMenuToggle: () => void;
}

export default function MobileMenu({
  mobileMenuOpen,
  handleMenuToggle,
}: IMobileMenu) {
  const { theme: currentTheme, setTheme } = useTheme();

  return (
    <Transition show={mobileMenuOpen}>
      <Dialog onClose={handleMenuToggle} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="transition-all ease-in-out duration-300"
          enterFrom="opacity-0 backdrop-blur-none"
          enterTo="opacity-100 backdrop-blur-[.5px]"
          leave="transition-all ease-in-out duration-200"
          leaveFrom="opacity-100 backdrop-blur-[.5px]"
          leaveTo="opacity-0 backdrop-blur-none"
        >
          <div
            className="fixed inset-0 bg-black/30"
            aria-hidden="true"
            onClick={handleMenuToggle}
          />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition-all ease-in-out duration-300"
          enterFrom="translate-x-[100%]"
          enterTo="translate-x-0"
          leave="transition-all ease-in-out duration-200"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-[100%]"
        >
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-4 py-5 overflow-y-auto bg-white dark:bg-black sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transform transition-transform ease-in-out duration-500">
            <div className="flex items-center justify-between">
              <button
                className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white"
                onClick={handleMenuToggle}
                aria-label="Close mobile menu"
              >
                <CloseMenu className="w-6 h-6 dark:text-white" />
              </button>
            </div>

            <div className="flow-root mt-6">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="pb-5 pt-3 space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg dark:text-gray-100"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                          Appearance
                          <ChevronDown
                            className={`${
                              open
                                ? "scale-y-[-1] transform"
                                : "h-5 w-5 flex-none"
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
                              <Disclosure.Button
                                key={theme}
                                className="flex items-center py-2 pl-6 pr-3 space-x-5 text-sm font-semibold leading-7"
                                onClick={() => {
                                  setTheme(theme.toLowerCase());
                                }}
                              >
                                <div className="flex items-center space-x-2">
                                  <div className="p-1 border rounded-sm border-stone-200">
                                    {icon}
                                  </div>
                                  <span className="text-gray-900 dark:text-gray-100">
                                    {theme}
                                  </span>
                                </div>
                                {currentTheme === theme.toLowerCase() && (
                                  <Check className="w-4 h-4" />
                                )}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
