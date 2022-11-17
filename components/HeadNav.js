import Link from "next/link";
import useUser from "../lib/useUser";
import {
  MapIcon,
  CubeTransparentIcon,
  TrendingUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import BerandaIcon from "../public/Beranda.svg";
import BeritaIcon from "../public/Berita.svg";
import TesIcon from "../public/Tes.svg";
import ProfileMenu from "./ProfileMenu";

export default function HeadNav() {
  const solutions = [
    {
      name: "Selamat! Lamaran anda diterima",
      description: "17 Oktober 2021 pukul 09:15",
      href: "##",
      icon: BerandaIcon,
    },
    {
      name: "Maaf, Lamaran anda ditolak",
      description: "9 September 2021 pukul 10.08",
      href: "##",
      icon: BeritaIcon,
    },
    {
      name: "Reports",
      description: "Keep track of your growth",
      href: "##",
      icon: TesIcon,
    },
  ];
  const { user } = useUser();

  console.log(user);
  return (
    <nav className="fixed top-0 z-10 w-full bg-gray-50 shadow-sm">
      <div className="flex justify-between items-center py-4 px-8 mx-auto max-w-screen-xl">
        <Link href="/">
          <a className="text-xl font-medium tracking-wide">SnapWork</a>
        </Link>
        <ul className="flex justify-between items-center space-x-4">
          <li className="flex gap-x-2 items-center group">
            <Link href="/">
              <a className="flex items-center space-x-2 font-medium tracking-wider transition duration-150 group-hover:font-semibold group-hover:scale-105 text-md">
                <BerandaIcon className="transition duration-150 scale-0 group-hover:scale-100" />
                <h1>Beranda</h1>
              </a>
            </Link>
          </li>
          <li className="flex gap-x-2 items-center group">
            <Link href="/news">
              <a className="flex items-center space-x-2 font-medium tracking-wider transition duration-150 group-hover:font-semibold group-hover:scale-105 text-md">
                <BeritaIcon className="transition duration-150 scale-0 group-hover:scale-100" />
                <h1>Berita</h1>
              </a>
            </Link>
          </li>
          {user?.isLoggedIn ? (
            <>
              <li className="flex gap-x-2 items-center group">
                <Link href="/quiz/confirmation">
                  <a className="flex items-center space-x-2 font-medium tracking-wider transition duration-150 group-hover:font-semibold group-hover:scale-105 text-md">
                    <TesIcon className="transition duration-150 scale-0 group-hover:scale-100" />
                    <h1>Tes Kepribadian</h1>
                  </a>
                </Link>
              </li>
              <li className="flex gap-x-2 items-center group">
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={`
                ${open ? "" : "text-opacity-90"}
                text-md flex items-center font-medium tracking-wider transition duration-150 group-hover:scale-110 group-hover:font-semibold`}
                      >
                        <TrendingUpIcon className="p-1 mr-2 w-6 h-6 bg-blue-500 rounded-lg transition duration-150 scale-0 group-hover:scale-100 fill-white" />
                        <span>Notifikasi</span>
                        <ChevronDownIcon
                          className={`${
                            open ? "-rotate-180 transform" : "text-opacity-70"
                          }
                  ml-1 h-5 w-5 text-black transition duration-150 ease-in-out group-hover:text-blue-500 group-hover:text-opacity-80`}
                          aria-hidden="true"
                        />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute left-1/2 z-10 px-4 mt-3 w-screen max-w-lg transform -translate-x-1/2">
                          <div className="overflow-hidden rounded-lg ring-1 ring-black ring-opacity-5 shadow-lg">
                            <div className="relative p-7 space-y-0 bg-white">
                              <h1 className="pb-4 text-xl font-medium">
                                Notifikasi
                              </h1>
                              {solutions.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="flex items-center p-2 -m-3 rounded-lg transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50"
                                >
                                  <div className="flex flex-shrink-0 justify-center items-center w-10 h-10 text-white sm:w-12 sm:h-12">
                                    <item.icon aria-hidden="true" />
                                  </div>
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                    <p className="text-base text-gray-500">
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </li>
            </>
          ) : (
            <>
              <li className="flex gap-x-2 items-center group">
                <Link href="/about">
                  <a className="flex font-medium tracking-wider transition duration-150 group-hover:font-semibold group-hover:scale-110 text-md">
                    <CubeTransparentIcon className="p-1 mr-2 w-6 h-6 bg-blue-500 rounded-lg transition duration-150 scale-0 group-hover:scale-100 fill-white" />
                    Tentang Kami
                  </a>
                </Link>
              </li>
              <li className="flex gap-x-2 items-center group">
                <Link href="/faq">
                  <a className="flex font-medium tracking-wider transition duration-150 group-hover:font-semibold group-hover:scale-110 text-md">
                    <CubeTransparentIcon className="p-1 mr-2 w-6 h-6 bg-blue-500 rounded-lg transition duration-150 scale-0 group-hover:scale-100 fill-white" />
                    FAQ
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
        <div className="space-x-6">
          {/* {`${user?.isLoggedIn ? user.userData.name : "guest"}`} */}
          {user?.isLoggedIn ? (
            <ProfileMenu user={user} />
          ) : (
            <>
              <Link href="/login">
                <a className="py-3 px-6 font-medium text-blue-500 rounded-xl transition duration-150 hover:text-blue-600">
                  Sign In
                </a>
              </Link>
              <Link href="/signup">
                <a className="py-3 px-6 font-medium text-white bg-blue-500 rounded-xl transition duration-150 hover:bg-blue-600">
                  Sign Up
                </a>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
