import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";

export default function Navbar(props: {
  navigation: { name: string; href: string; current: boolean }[];
  menuItems: { name: string; href: string }[];
}) {
  return (
    <Disclosure as="nav" className="bg-white fixed z-10 w-full rounded-sm">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 font-semibold text-secondary hover:bg-navbar-hover  focus:ring-2 focus:button-hover focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Abrir menu principal</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {props.navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={clsx(
                      item.current
                        ? "font-semibold bg-navbar-hover text-secondary"
                        : "font-semibold text-secondary hover:bg-navbar-hover hover:text-blue-900",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:block absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:pr-0">
            <Link
              href="/login"
              className="flex items-center gap-5 md:text-base self-start rounded-md px-3 py-2 text-sm font-semibold  text-secondary hover:bg-navbar-hover"
            >
              <span>Log in</span> <ArrowRightIcon className="w-3 md:w-3" />
            </Link>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {props.navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className="text-secondary hover:bg-navbar-hover block rounded-md px-3 py-2 text-base font-medium"
            >
              {item.name}
            </DisclosureButton>
          ))}
          <DisclosureButton
            as="a"
            href="/login"
            className=" text-secondary hover:bg-navbar-hover block rounded-md px-3 py-2 text-base font-medium"
          >
            Log in
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
