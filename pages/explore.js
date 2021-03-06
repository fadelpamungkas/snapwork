import Link from "next/link";
import Image from "next/image";
import HeadNav from "../components/HeadNav";
import ProductCard from "../components/ProductCard";
import FootNav from "../components/FootNav";

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

export default function Explore({ posts }) {
	return (
		<>
			<div className="w-full py-8 text-gray-900">
				<HeadNav />
				<div className="w-full bg-gradient-to-b from-gray-100 to-gray-200">
					<section className="mx-auto flex max-w-screen-xl justify-between py-28 px-8">
						<div className="max-w-2xl">
							<div className="flex">
								<h1 className="rounded-xl bg-orange-500 px-6 py-3 text-white shadow-lg">
									#FreedomOfSearch
								</h1>
							</div>
							<h1 className="mt-8 text-4xl font-bold leading-tight">
								Find the perfect freelance service for your business
							</h1>
							<p className="mt-8 max-w-md font-light leading-relaxed text-gray-500">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
								viverra lorem vulputate luctus. Sollicitudin vitae nulla amet
								pellentesque. Nunc magna mauris risus bibendum et, malesuada
								viverra nisl. Facilisis metus purus.
							</p>
						</div>
						<div className="flex flex-1 flex-col">
							{/* <Image
						className="max-w-lg self-end shadow-2xl"
						src={HeroImage}
						alt="hero"
					/> */}
						</div>
					</section>
					<section className="mx-auto max-w-screen-xl py-28 px-8">
						<div className="flex items-baseline justify-between">
							<h1 className=" text-4xl font-bold">Top trending in 3 days</h1>
							<Link href="/explore/all">
								<a className="text-lg text-gray-500 transition duration-150 hover:text-gray-900">
									View Collections
								</a>
							</Link>
						</div>
						<div className="container mx-auto grid gap-8 pt-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
							{posts.map((post) => (
								<div key={post._id}>
									<Link href={`/product/${post._id}`}>
										<a>
											<ProductCard post={post} />
										</a>
									</Link>
								</div>
							))}
						</div>
					</section>

					<section className="mx-auto max-w-screen-xl py-28 px-8">
						<div className="flex items-baseline justify-between">
							<h1 className=" text-4xl font-bold">
								Recommended based on your interests
							</h1>
							<Link href="/explore/all">
								<a className="text-lg text-gray-500 transition duration-150 hover:text-gray-900">
									View Collections
								</a>
							</Link>
						</div>
						<div className="container mx-auto grid gap-8 pt-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
							{posts.map((post) => (
								<div key={post.id}>
									<ProductCard post={post} />
								</div>
							))}
						</div>
					</section>
				</div>
				<FootNav />
			</div>
		</>
	);
}
