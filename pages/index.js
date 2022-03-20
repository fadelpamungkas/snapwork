import Link from "next/link";
import Image from "next/image";
import HeroImage from "../public/hero.png";
import HeadNav from "../components/HeadNav";
import FootNav from "../components/FootNav";
import ReviewCard from "../components/ReviewCard";
import ProductCard from "../components/ProductCard";

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

export async function getStaticProps() {
	const res = await fetch("https://snapwork.herokuapp.com/api/posts");
	const getPost = await res.json();
	const posts = getPost.data.data;
	return {
		props: {
			posts,
		},
	};
}

export default function Index({ posts }) {
	return (
		<>
			<div className="w-full text-gray-900">
				<HeadNav />
				<div className="w-full bg-gradient-to-b from-gray-100 to-gray-200">
					<section className="mx-auto flex max-w-screen-xl justify-between py-28 px-8">
						<div className="max-w-2xl">
							<h1 className="text-6xl font-bold leading-tight">
								Hire best freelancer for any job, online
							</h1>
							<p className="mt-8 max-w-md font-light leading-relaxed text-gray-500">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
								viverra lorem vulputate luctus. Sollicitudin vitae nulla amet
								pellentesque. Nunc magna mauris risus bibendum et, malesuada
								viverra nisl. Facilisis metus purus.
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
						<ProductCard post={posts[2]} />
						<div className="flex flex-col items-start space-y-4">
							<h1 className="rounded-xl bg-orange-500 px-6 py-3 text-white shadow-lg">
								#OurAdvantage
							</h1>
							<h1 className="max-w-xl text-4xl font-bold">
								A whole world of freelance talent at your fingertips
							</h1>
							<p className="mt-8 max-w-md font-light leading-relaxed text-gray-500">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
								viverra lorem vulputate luctus. Sollicitudin vitae nulla amet
								pellentesque.
							</p>
						</div>
					</section>
					<section className="mx-auto flex max-w-screen-xl flex-1 flex-col items-center justify-center py-28 px-8">
						<h1 className="max-w-xl text-4xl font-bold">Why choose us?</h1>
						<p className="mt-8 max-w-md text-center font-light leading-relaxed text-gray-500">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
							viverra lorem vulputate luctus.
						</p>
						<div className="mt-20 flex w-full justify-between gap-8">
							<ReviewCard />
							<div className="mb-40">
								<ReviewCard />
							</div>
							<ReviewCard />
							{/* className="-translate-y-12 transform" */}
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
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</h1>
					</section>
				</div>
				<FootNav />
			</div>
		</>
	);
}
