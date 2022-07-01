import Link from "next/link";
import useUser from "../lib/useUser";
import {
  MapIcon,
  TrendingUpIcon,
  ShoppingCartIcon,
  BookmarkIcon,
  CubeTransparentIcon,
} from "@heroicons/react/solid";

import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import Image from "next/image";
import SoftwareDevelopmentIcon from "../public/SoftwareDevelopment.svg";
import WebDevelopmentIcon from "../public/WebDevelopment.svg";
import DataScienceIcon from "../public/DataScience.svg";
import SystemAnalystIcon from "../public/SystemAnalyst.svg";
import ITConsultantIcon from "../public/ITConsultant.svg";
import CybersecurityIcon from "../public/Cybersecurity.svg";
import ProfileMenu from "./ProfileMenu";

const solutions = [
  {
    name: "Software Development",
    description: "Measure actions your users take",
    href: "##",
    image: SoftwareDevelopmentIcon,
  },
  {
    name: "Website Development",
    description: "Create your own targeted content",
    href: "##",
    image: WebDevelopmentIcon,
  },
  {
    name: "Data Science",
    description: "Keep track of your growth",
    href: "##",
    image: DataScienceIcon,
  },
  {
    name: "System Analyst",
    description: "Keep track of your growth",
    href: "##",
    image: SystemAnalystIcon,
  },
  {
    name: "IT Consultant",
    description: "Keep track of your growth",
    href: "##",
    image: ITConsultantIcon,
  },
  {
    name: "Cybersecurity",
    description: "Keep track of your growth",
    href: "##",
    image: CybersecurityIcon,
  },
];

export default function HeadNav() {
  const { user } = useUser();

  console.log(user);
  return (
    <nav className="fixed top-0 z-10 w-full bg-gray-50 shadow-sm">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between py-4 px-8">
        <Link href="/">
          <a className="text-xl font-medium tracking-wide">SnapWork</a>
        </Link>
        <ul className="flex items-center justify-between space-x-4">
          {/* <div className="w-full">
            <input
              id="search"
              type="search"
              name="q"
              className=" w-full rounded-lg py-3.5 px-4 text-sm font-medium leading-none text-gray-800 placeholder-gray-400 shadow-sm transition duration-150 hover:shadow-md focus:border-0 focus:outline-none"
              placeholder="Search for a service"
            />
          </div> */}
          <li className="group flex items-center gap-x-2">
            <Link href="/">
              <a className="text-md flex font-medium tracking-wider transition duration-150 group-hover:scale-110 group-hover:font-semibold">
                <MapIcon className="mr-2 h-6 w-6 scale-0 rounded-lg bg-blue-500 fill-white p-1 transition duration-150 group-hover:scale-100" />
                Beranda
              </a>
            </Link>
          </li>
          <li className="group flex items-center gap-x-2">
            <Link href="/">
              <a className="text-md flex font-medium tracking-wider transition duration-150 group-hover:scale-110 group-hover:font-semibold">
                <MapIcon className="mr-2 h-6 w-6 scale-0 rounded-lg bg-blue-500 fill-white p-1 transition duration-150 group-hover:scale-100" />
                Tentang Kami
              </a>
            </Link>
          </li>
          <li className="group flex items-center gap-x-2">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`
                ${open ? "" : "text-opacity-90"}
                text-md flex items-center font-medium tracking-wider transition duration-150 group-hover:scale-110 group-hover:font-semibold`}
                  >
                    <TrendingUpIcon className=" mr-2 h-6 w-6 scale-0 rounded-lg bg-blue-500 fill-white p-1 transition duration-150 group-hover:scale-100" />
                    <span>Tentang Kami</span>
                    <ChevronDownIcon
                      className={`${open ? "-rotate-180 transform" : "text-opacity-70"
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
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50"
                            >
                              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                {/* <item.icon aria-hidden="true" /> */}
                                <Image
                                  src={item.image}
                                  width={35}
                                  height={35}
                                  alt={item.title}
                                />
                              </div>
                              <div className="ml-4">
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="bg-gray-50 p-4">
                          <a
                            href="##"
                            className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50"
                          >
                            <span className="flex items-center">
                              <span className="text-sm font-medium text-gray-900">
                                Documentation
                              </span>
                            </span>
                            <span className="block text-sm text-gray-500">
                              Start integrating products and tools
                            </span>
                          </a>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </li>
          <li className="group flex items-center gap-x-2">
            <Link href="/about">
              <a className="text-md flex font-medium tracking-wider transition duration-150 group-hover:scale-110 group-hover:font-semibold">
                <CubeTransparentIcon className="mr-2 h-6 w-6 scale-0 rounded-lg bg-blue-500 fill-white p-1 transition duration-150 group-hover:scale-100" />
                FAQ
              </a>
            </Link>
          </li>
        </ul>
        <div className="space-x-6">
          {/* {`${user?.isLoggedIn ? user.userData.name : "guest"}`} */}
          {user?.isLoggedIn ? (
            <ProfileMenu user={user} />
          ) : (
            <>
              <Link href="/login">
                <a className="rounded-2xl px-6 py-3 font-medium text-blue-500 transition duration-150 hover:text-blue-600">
                  Sign In
                </a>
              </Link>
              <Link href="/signup">
                <a className="rounded-2xl bg-blue-500 px-6 py-3 font-medium text-white transition duration-150 hover:bg-blue-600">
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
