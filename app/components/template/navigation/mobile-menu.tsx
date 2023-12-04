import React, { Fragment } from "react";
import { CloseMenu } from "../../../icons";
import { Dialog, Transition } from "@headlessui/react";
import MobileMenuNavigation from "./mobile-menu-nav";
import MobileMenuDisclosure from "./mobile-menu-disclosure";


interface IMobileMenu {
  isOpen: boolean;
  handleMenuClose: () => void;
}

export default function MobileMenu({ isOpen, handleMenuClose }: IMobileMenu) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-30" onClose={handleMenuClose}>
        <Transition.Child
          as={Fragment}
          enter="transition-all ease-in-out duration-300"
          enterFrom="opacity-0 backdrop-blur-none"
          enterTo="opacity-100 backdrop-blur-[.5px]"
          leave="transition-all ease-in-out duration-200"
          leaveFrom="opacity-100 backdrop-blur-[.5px]"
          leaveTo="opacity-0 backdrop-blur-none"
        >
          <div className="fixed inset-0 bg-black/30" />
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
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-4 py-5 overflow-y-auto transition-transform duration-500 ease-in-out transform bg-white dark:bg-black sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <button
                className="flex items-center justify-center text-black transition-colors border rounded-md h-11 w-11 border-zinc-500 hover:border-zinc-400/50 dark:text-white"
                onClick={handleMenuClose}
                aria-label="Close mobile menu"
              >
                <CloseMenu className="w-6 h-6 dark:text-white" />
              </button>
            </div>

            <div className="flow-root mt-6">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="pt-3 pb-5 space-y-2">
                  <MobileMenuNavigation />
                  <MobileMenuDisclosure />
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
