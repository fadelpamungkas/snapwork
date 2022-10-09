import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import useUser from "../lib/useUser";
import fetchJson from "../lib/fetchJson";
import {
  ChevronDownIcon,
  CogIcon,
  LogoutIcon,
  UserIcon,
  AnnotationIcon,
  IdentificationIcon,
} from "@heroicons/react/outline";
import UserAvatar from "../public/avuser.png";
import Link from "next/link";
import Image from "next/image";

export default function ProfileMenu({ user }) {
  const { mutateUser } = useUser();
  const router = useRouter();
  const handleLogout = async (event) => {
    event.preventDefault();
    mutateUser(await fetchJson("/api/logout", { method: "POST" }), false);
    router.push("/");
  };

  return (
    <div className="w-full">
      <Menu as="div" className="inline-block text-left">
        {({ open }) => (
          <>
            <Menu.Button className="inline-flex justify-center items-center p-1 pr-4 space-x-2 w-full text-sm font-medium text-white bg-blue-500 rounded-3xl transition duration-150 hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 group">
              <Image
                src={UserAvatar}
                alt=""
                width={30}
                height={30}
                className="rounded-full"
              />
              <span>{user.userData.name}</span>
              {user.userData.role == "admin" && (
                <span className="uppercase">{user.userData.role}</span>
              )}
              <ChevronDownIcon
                className={`${
                  open ? "-rotate-180 transform" : "text-opacity-100"
                }
                  h-5 w-5 text-white transition duration-150 ease-in-out group-hover:text-rose-50 group-hover:text-opacity-80`}
                aria-hidden="true"
              />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute z-10 mt-2 w-52 bg-white rounded-xl ring-1 ring-black ring-opacity-5 shadow-lg focus:outline-none red-500">
                <div className="py-1 px-1">
                  {user.userData.role === "admin" ? (
                    <>
                      <Menu.Item>
                        <Link href="/admin/dashboard" passHref>
                          <a className="flex items-center py-2 px-2 w-full text-sm text-gray-700 rounded-md transition duration-75 hover:text-white hover:bg-blue-600 group">
                            <UserIcon className="mr-2 w-5 h-5 text-red-500 group-hover:text-white" />
                            Admin Dashboard
                          </a>
                        </Link>
                      </Menu.Item>
                    </>
                  ) : (
                    <>
                      {user.userData.role === "mitra" ? (
                        <Menu.Item>
                          <Link href="/profileCompany" passHref>
                            <a className="flex items-center py-2 px-2 w-full text-sm text-gray-700 rounded-md transition duration-75 hover:text-white hover:bg-blue-600 group">
                              <UserIcon className="mr-2 w-5 h-5 text-red-500 group-hover:text-white" />
                              Profile
                            </a>
                          </Link>
                        </Menu.Item>
                      ) : (
                        <>
                          <Menu.Item>
                            <Link href="/profile" passHref>
                              <a className="flex items-center py-2 px-2 w-full text-sm text-gray-700 rounded-md transition duration-75 hover:text-white hover:bg-blue-600 group">
                                <UserIcon className="mr-2 w-5 h-5 text-red-500 group-hover:text-white" />
                                Profile
                              </a>
                            </Link>
                          </Menu.Item>
                          <Menu.Item>
                            <Link href="/company_register" passHref>
                              <a className="flex items-center py-2 px-2 w-full text-sm text-gray-700 rounded-md transition duration-75 hover:text-white hover:bg-blue-600 group">
                                <IdentificationIcon className="mr-2 w-5 h-5 text-red-500 group-hover:text-white" />
                                Daftar Perusahaan
                              </a>
                            </Link>
                          </Menu.Item>
                        </>
                      )}
                      <Menu.Item>
                        <Link href="/profile" passHref>
                          <a className="flex items-center py-2 px-2 w-full text-sm text-gray-700 rounded-md transition duration-75 hover:text-white hover:bg-blue-600 group">
                            <CogIcon className="mr-2 w-5 h-5 text-red-500 group-hover:text-white" />
                            Settings
                          </a>
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link href="/faq" passHref>
                          <a className="flex items-center py-2 px-2 w-full text-sm text-gray-700 rounded-md transition duration-75 hover:text-white hover:bg-blue-600 group">
                            <AnnotationIcon className="mr-2 w-5 h-5 text-red-500 group-hover:text-white" />
                            FAQ
                          </a>
                        </Link>
                      </Menu.Item>
                    </>
                  )}
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={handleLogout}
                        className={`${
                          active ? "bg-blue-600 text-white" : "text-gray-700"
                        } group group flex w-full items-center rounded-md px-2 py-2 text-sm transition duration-75 hover:text-white`}
                      >
                        <LogoutIcon className="mr-2 w-5 h-5 text-red-500 group-hover:text-white" />
                        Logout
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  );
}

function ArchiveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function ArchiveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function MoveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function MoveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
}

function DeleteInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function DeleteActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
}
