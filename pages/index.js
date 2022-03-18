import Link from "next/Link";
import Image from "next/image";
import HeroImage from "../public/hero.png";
import HeadNav from "../components/HeadNav";
import {
	MapIcon,
	TrendingUpIcon,
	ShoppingCartIcon,
	BookmarkIcon,
	CubeTransparentIcon,
} from "@heroicons/react/solid";
import FootNav from "../components/FootNav";

const menus = [
	{ name: "Explore", icon: MapIcon, link: "/explore" },
	{ name: "Category", icon: TrendingUpIcon, link: "/category" },
	{ name: "About Us", icon: CubeTransparentIcon, link: "/about" },
];
const connections = [
	{
		img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80",
	},
	{
		img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80",
	},
	{
		img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80",
	},
	{
		img: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80",
	},
];

export default function index() {
	return (
		<div className="w-full bg-gradient-to-br from-white to-gray-200 text-gray-900">
			<HeadNav />
			<section className="mx-auto flex max-w-screen-xl justify-between py-28 px-8">
				<div className="max-w-2xl">
					<div className="relative w-2/3">
						<input
							id="search"
							type="search"
							className="focus:shadow-outline w-full rounded-lg py-4 px-6 text-sm font-medium leading-none text-gray-800 placeholder-gray-400 shadow-md transition duration-150 hover:shadow-lg focus:border-0 focus:shadow-lg focus:outline-none"
							placeholder="Search for a service"
						/>
						<div className="absolute right-5 top-3.5 cursor-pointer">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</div>
					</div>

					<h1 className="mt-8 text-6xl font-bold leading-tight">
						Hire best freelancer for any job, online
					</h1>
					<p className="mt-8 max-w-md font-light leading-relaxed text-gray-500">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi viverra
						lorem vulputate luctus. Sollicitudin vitae nulla amet pellentesque.
						Nunc magna mauris risus bibendum et, malesuada viverra nisl.
						Facilisis metus purus.
					</p>
					<div className="mt-12 space-x-8">
						<Link href="/login">
							<a className="rounded-2xl bg-orange-500 px-6 py-3.5 font-medium text-white transition duration-150 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-200">
								Get Started
							</a>
						</Link>
						<Link href="/signup">
							<a className="rounded-2xl border border-orange-500 px-6 py-3.5 font-medium text-orange-500 transition duration-150 hover:shadow-xl">
								Learn More
							</a>
						</Link>
					</div>
				</div>
				<div className="flex flex-1 flex-col">
					<Image
						className="max-w-lg self-end shadow-2xl"
						src={HeroImage}
						alt="hero"
					/>
				</div>
			</section>
			<section className="mx-auto flex max-w-screen-xl items-center justify-between py-28 px-8">
				<div className="aspect-square w-64 bg-slate-500"></div>
				<div className="flex flex-col items-start space-y-4">
					<h1 className="rounded-xl bg-orange-500 px-6 py-3 text-white shadow-lg">
						#OurAdvantage
					</h1>
					<h1 className="max-w-xl text-4xl font-bold">
						A whole world of freelance talent at your fingertips
					</h1>
					<p className="mt-8 max-w-md font-light leading-relaxed text-gray-500">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi viverra
						lorem vulputate luctus. Sollicitudin vitae nulla amet pellentesque.
					</p>
				</div>
			</section>
			<section className="mx-auto flex max-w-screen-xl flex-1 flex-col items-center justify-center py-28 px-8">
				<h1 className="max-w-xl text-4xl font-bold">Why choose us?</h1>
				<p className="mt-8 max-w-md text-center font-light leading-relaxed text-gray-500">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi viverra
					lorem vulputate luctus.
				</p>
				<div className="mt-20 flex w-full justify-between gap-8">
					{/* <!-- <postcard />

                <postcard className="-translate-y-12 transform" />

                <postcard /> --> */}
				</div>
			</section>
			<section className="mx-auto flex max-w-screen-xl flex-1 flex-col items-center justify-center space-y-8 py-28 px-8">
				<h1 className="max-w-xl text-4xl font-bold">Review Clients</h1>
				<div className="mt-4 flex items-center justify-center -space-x-2">
					{connections.map((conn) => (
						<div className="h-20 w-20 rounded-full shadow" key={conn.id}>
							<Image
								alt="img"
								src={conn.img}
								height={200}
								width={200}
								className="h-full w-full rounded-full object-cover object-center"
							/>
						</div>
					))}
				</div>
				<h1 className="mt-4 max-w-xl text-center text-sm font-normal text-gray-500">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</h1>
			</section>
			<FootNav />
		</div>
	);
}
