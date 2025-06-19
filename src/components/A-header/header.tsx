'use client';
import * as React from 'react';
import { MegaphoneIcon, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import blacklogo from '../../assets/adhiba.png';
import whitelogo from '../../assets/Adhiba Logo  White.png';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import {
  Bars3Icon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  PaintBrushIcon,
  PencilSquareIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/20/solid';
import { useEffect } from "react";
import Lenis from 'lenis';

const products = [
  {
    name: 'WEBSITE DEVELOPMENT',
    href: '/services/website-development',
    icon: GlobeAltIcon,
  },
  {
    name: 'DIGITAL MARKETING',
    href: '/services/digital-marketing',
    icon: MegaphoneIcon,
  },
  {
    name: 'DESIGNING',
    href: '/services/design-development',
    icon: PaintBrushIcon,
  },
  {
    name: 'APPLICATION DEVELOPMENT',
    href: '/services/app-development',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'SOFTWARE DEVELOPMENT',
    href: '/services/software-development',
    icon: CodeBracketIcon,
  },
  {
    name: 'WEB / CLOUD HOSTING',
    href: '/services/WEB-CLOUD-HOSTING',
    icon: PencilSquareIcon,
  }
];

const callsToAction = [
  { name: 'BOOK demo', href: '/getintouch', icon: PlayCircleIcon },
  { name: 'GET IN TOUCH', href: '/getintouch', icon: PhoneIcon },
];

import { useRouter } from 'next/navigation';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
    setIsDark(!isDark);
  };

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="icon"
      className="relative bg-transparent hover:bg-transparent focus:bg-transparent"
    >
      <Moon
        className={`h-[1.2rem] w-[1.2rem] transition-all ${isDark ? "scale-0 rotate-90" : "scale-100 rotate-0"}`}
      />
      <Sun
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${isDark ? "scale-100 rotate-0" : "scale-0 rotate-90"}`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export default function HEADERIT() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const router = useRouter();   // Initialize router


  const [isOpen, setIsOpen] = useState(false);  // State to control dropdown visibility


  const [open, setOpen] = useState(false);

  const handleNavigation = (href: string) => {
    router.push(href);         // Navigate to the page
    setOpen(false);             // Close the dropdown
  };

  // 
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2, // Slightly higher for extra smoothness
      easing: t => 1 - Math.pow(1 - t, 4), // More natural easing
      smoothWheel: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      window.requestAnimationFrame(raf);
    };

    window.requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white text-gray-900 dark:bg-gray-900 dark:text-white border-t border-b border-gray-300 dark:border-gray-700 transition-colors duration-300 text-transform: uppercase">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between py-3  "
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="logo-link">
              <span suppressHydrationWarning>
                {mounted ? (
                  <Image
                    src={
                      theme === 'dark' || resolvedTheme === 'dark'
                        ? whitelogo
                        : blacklogo
                    }
                    className="logo-image"
                    alt="Adhiba Logo"
                    priority
                  />
                ) : (
                  <Image
                    src={blacklogo} // Default logo during SSR to avoid mismatch
                    className="logo-image"
                    alt="Adhiba Logo"
                    priority
                  />
                )}
              </span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <PopoverGroup className="hidden lg:flex lg:gap-x-12 dark:bg-gray-900 ">
            <Link
              href="/knowus"
              className="text-sm/6 font-semibold text-gray-900 dark:text-white"
            >
              Know us
            </Link>
            <Popover className="relative">
              {({ open, close }) => (
                <>
                  <Popover.Button className="dropdown-it flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 dark:text-white text-transform: uppercase">
                    What We Do
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none text-gray-400 dark:text-gray-300"
                    />
                  </Popover.Button>

                  <Popover.Panel
                    transition
                    className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white dark:bg-gray-900 ring-1 shadow-lg ring-gray-900/5 dark:ring-gray-700 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                  >
                    <div className="p-4">
                      {products.map(item => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={close}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                          <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-800 group-hover:bg-white dark:group-hover:bg-gray-700">
                            <item.icon
                              aria-hidden="true"
                              className="size-6 text-gray-600 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
                            />
                          </div>
                          <div className="flex-auto">
                            <span className="block font-semibold text-gray-900 dark:text-white">
                              {item.name}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 dark:divide-gray-700 bg-gray-50 dark:bg-gray-800">
                      {callsToAction.map(item => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={close}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <item.icon
                            aria-hidden="true"
                            className="size-5 flex-none text-gray-400 dark:text-gray-300"
                          />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </Popover.Panel>
                </>
              )}
            </Popover>


            <Link
              href="/common/Pricing"
              className="text-sm/6 font-semibold text-gray-900 dark:text-white"
            >
              Pricing
            </Link>

            <Link
              href="/gallery"
              className="text-sm/6 font-semibold text-gray-900 dark:text-white"
            >
              Our Work
            </Link>

            <Link
              href="/career"
              className="text-sm/6 font-semibold text-gray-900 dark:text-white"
            >
              Join Us
            </Link>
            <Link
              href="/getintouch"
              className="text-sm/6 font-semibold text-gray-900 dark:text-white"
            >
              Get in Touch
            </Link>
          </PopoverGroup>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
            <ModeToggle />
            <a
              href="/getintouch"
              className="text-sm/6 font-semibold text-gray-900 ms-3 dark:text-white"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>

        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:ring-gray-700 dark:text-white">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                {/* <Image src={whitelogo} className="h-10 w-auto" alt="Logo" /> */}
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-700">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-700">
                      Product
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="size-5 flex-none transition-transform group-data-open:rotate-180"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {[...products, ...callsToAction].map(item => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>

                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-700"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-700"
                  >
                    Marketplace
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-700"
                  >
                    Company
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-700"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </>

  );
}

