import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import useUser from "../lib/useUser";
import fetchJson from "../lib/fetchJson";
import {
	CogIcon,
	LogoutIcon,
	UserIcon,
	ChartBarIcon,
	SwitchHorizontalIcon,
} from "@heroicons/react/solid";

export default function ProfileMenu({ user }) {
	const { mutateUser } = useUser({
		redirectTo: "/",
		redirectIfFound: true,
	});
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
						<Menu.Button className="group inline-flex w-full justify-center rounded-3xl bg-red-500 px-6 py-3 text-sm font-medium text-white transition duration-150 hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
							{user.userData.name}
							<ChevronDownIcon
								className={`${
									open ? "-rotate-180 transform" : "text-opacity-100"
								}
                  ml-1 h-5 w-5 text-white transition duration-150 ease-in-out group-hover:text-rose-50 group-hover:text-opacity-80`}
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
							<Menu.Items className="absolute z-10 mt-2 w-52 divide-y divide-red-400 rounded-xl bg-red-500 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
								<div className="px-1 py-1 ">
									<Menu.Item>
										{({ active }) => (
											<button
												className={`${
													active ? "bg-red-600 text-white" : "text-red-100"
												} group flex w-full items-center rounded-md px-2 py-2 text-sm transition duration-150`}
											>
												<UserIcon className="mr-2 h-5 w-5" />
												Profile
											</button>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<button
												className={`${
													active ? "bg-red-600 text-white" : "text-red-100"
												} group flex w-full items-center rounded-md px-2 py-2 text-sm transition duration-150`}
											>
												<SwitchHorizontalIcon className="mr-2 h-5 w-5" />
												Transaction
											</button>
										)}
									</Menu.Item>
								</div>
								<div className="px-1 py-1">
									<Menu.Item>
										{({ active }) => (
											<button
												className={`${
													active ? "bg-red-600 text-white" : "text-red-100"
												} group flex w-full items-center rounded-md px-2 py-2 text-sm transition duration-150`}
											>
												<ChartBarIcon className="mr-2 h-5 w-5" />
												Dashboard
											</button>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<button
												className={`${
													active ? "bg-red-600 text-white" : "text-red-100"
												} group flex w-full items-center rounded-md px-2 py-2 text-sm transition duration-150`}
											>
												<CogIcon className="mr-2 h-5 w-5" />
												Settings
											</button>
										)}
									</Menu.Item>
								</div>
								<div className="px-1 py-1">
									<Menu.Item>
										{({ active }) => (
											<button
												onClick={handleLogout}
												className={`${
													active ? "bg-red-600 text-white" : "text-red-100"
												} group flex w-full items-center rounded-md px-2 py-2 text-sm transition duration-150`}
											>
												<LogoutIcon className="mr-2 h-5 w-5" />
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
