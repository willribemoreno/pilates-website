'use client';

import Link from 'next/link';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { type Session } from 'next-auth';
import { useActionState } from 'react';
import { unauthenticate } from '@/app/lib/actions';
import { useSearchParams } from 'next/navigation';

export default function Navbar(props: {
  navigation: { name: string; href: string }[];
  menuItems: { name: string; href: string }[];
}) {
  const [errorMessage, formAction] = useActionState(unauthenticate, undefined);
  const [session, setSession] = useState<Session>();

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const res = await fetch('/api/auth/session');
        const data = await res.json();
        setSession(data);
        console.log(data);
      } catch (error) {
        console.error('Erro ao buscar a sessão:', error);
      }
    };

    fetchSession();
  }, []);

  function getNameInitials(fullName: string | null | undefined) {
    if (fullName) {
      const firstName = fullName.split(' ')[0];
      const LastName = fullName.split(' ')[1];
      const firstNameLetter = firstName[0];
      const lastNameLetter = LastName[0];

      return `${firstNameLetter}${lastNameLetter}`;
    }
  }
  return (
    <Disclosure as="nav" className="bg-white fixed z-10 w-full rounded-sm">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 font-semibold text-secondary hover:bg-navbar-hover  focus:ring-2 focus:button-hover focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Abrir menu principal</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {props.navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="font-semibold text-secondary hover:bg-navbar-hover hover:text-blue-900 rounded-md px-3 py-2 text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* Profile dropdown */}
          {session?.user && (
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="p-2 relative flex rounded-full border text-sm font-semibold text-secondary hover:bg-navbar-hover hover:text-blue-900 ">
                  {session?.user && getNameInitials(session?.user?.name)}
                </MenuButton>
              </div>
              <form action={formAction}>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  {props.menuItems.map((item) => (
                    <MenuItem key={item.name}>
                      {item.name === 'Deslogar' ? (
                        <button
                          type="submit"
                          className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                        >
                          {item.name}
                        </button>
                      ) : (
                        <a
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                        >
                          {item.name}
                        </a>
                      )}
                    </MenuItem>
                  ))}
                </MenuItems>
              </form>
            </Menu>
          )}
          {!session?.user && (
            <div className="hidden sm:ml-6 sm:block absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:pr-0">
              <Link
                href="/login"
                className="flex items-center gap-5 md:text-base self-start rounded-md px-3 py-2 text-sm font-semibold  text-secondary hover:bg-navbar-hover"
              >
                <span>Log in</span> <ArrowRightIcon className="w-3 md:w-3" />
              </Link>
            </div>
          )}
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
