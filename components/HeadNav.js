import Link from "next/link";
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
	return (
		<nav className="mx-auto flex max-w-screen-xl items-center justify-between p-8">
			<Link href="/">
				<a className="text-xl font-medium tracking-wide">SnapWork</a>
			</Link>
			<ul className="flex items-center space-x-4">
				<li className="group flex items-center gap-x-2">
					<Link href="/explore">
						<a className="flex text-md font-medium tracking-wider transition duration-150 group-hover:scale-110 group-hover:font-semibold">
							<MapIcon className="mr-2 h-6 w-6 scale-0 rounded-lg bg-orange-500 fill-white p-1 transition duration-150 group-hover:scale-100" />
							Explore
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
                flex items-center text-md font-medium tracking-wider transition duration-150 group-hover:scale-110 group-hover:font-semibold`}
								>
									<TrendingUpIcon className=" mr-2 h-6 w-6 scale-0 rounded-lg bg-orange-500 fill-white p-1 transition duration-150 group-hover:scale-100" />
									<span>Category</span>
									<ChevronDownIcon
										className={`${open ? "" : "text-opacity-70"}
                  ml-1 h-5 w-5 text-black group-hover:text-opacity-80 transition ease-in-out duration-150 group-hover:text-orange-500`}
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
									<Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
										<div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
											<div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
												{solutions.map((item) => (
													<a
														key={item.name}
														href={item.href}
														className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
													>
														<div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
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
											<div className="p-4 bg-gray-50">
												<a
													href="##"
													className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
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
						<a className="flex text-md font-medium tracking-wider transition duration-150 group-hover:scale-110 group-hover:font-semibold">
							<CubeTransparentIcon className="mr-2 h-6 w-6 scale-0 rounded-lg bg-orange-500 fill-white p-1 transition duration-150 group-hover:scale-100" />
							About Us
						</a>
					</Link>
				</li>
			</ul>
			<div className="space-x-6">
				<Link href="/login">
					<a className="rounded-2xl px-6 py-3 font-medium text-orange-500 transition duration-150 hover:text-orange-600">
						Sign In
					</a>
				</Link>
				<Link href="/signup">
					<a className="rounded-2xl bg-orange-500 px-6 py-3 font-medium text-white transition duration-150 hover:bg-orange-600">
						Sign Up
					</a>
				</Link>
			</div>
		</nav>
	);
}

function IconOne() {
	return (
		<svg
			width="48"
			height="48"
			viewBox="0 0 48 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="48" height="48" rx="8" fill="#FFEDD5" />
			<path
				d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
				stroke="#FB923C"
				strokeWidth="2"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
				stroke="#FDBA74"
				strokeWidth="2"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
				stroke="#FDBA74"
				strokeWidth="2"
			/>
		</svg>
	);
}

function IconTwo() {
	return (
		<svg
			width="48"
			height="48"
			viewBox="0 0 48 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="48" height="48" rx="8" fill="#FFEDD5" />
			<path
				d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
				stroke="#FB923C"
				strokeWidth="2"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
				stroke="#FDBA74"
				strokeWidth="2"
			/>
		</svg>
	);
}

function IconThree() {
	return (
		<svg
			width="48"
			height="48"
			viewBox="0 0 48 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="48" height="48" rx="8" fill="#FFEDD5" />
			<rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
			<rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
			<rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
			<rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
			<rect x="29" y="16" width="2" height="20" fill="#FB923C" />
			<rect x="33" y="12" width="2" height="24" fill="#FB923C" />
		</svg>
	);
}
