import Link from "next/Link";
import Image from "next/image";
import HeadNav from "../components/HeadNav";
import ProductCard from "../components/ProductCard";
import FootNav from "../components/FootNav";

// const response = await fetch("https://snapwork.herokuapp.com/login", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//         email: "bonbon@gmail.com",
//         password: "bonbon",
//     }),
// });
// const data = await response.json();
// console.log(data);
// async () => {
// 	const getPosts = await fetch("https://snapwork.herokuapp.com/api/posts");
// 	const posts = await getPosts.json();
// 	console.log(posts);
// };

export async function getStaticProps() {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library
	const res = await fetch("https://snapwork.herokuapp.com/api/posts");
	const getPost = await res.json();
	const posts = getPost.data.data;

	// By returning { props: { posts } }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			posts,
		},
	};
}

export default function Explore({ posts }) {
	return (
		<div className="w-full bg-gradient-to-br from-white to-gray-200 text-gray-900">
			<HeadNav />
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
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi viverra
						lorem vulputate luctus. Sollicitudin vitae nulla amet pellentesque.
						Nunc magna mauris risus bibendum et, malesuada viverra nisl.
						Facilisis metus purus.
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
						<a className="text-lg text-gray-500 hover:text-gray-900 transition duration-150">
							View Collections
						</a>
					</Link>
				</div>
				<div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
					{posts.map((post) => (
						<div key={post.id}>
							<ProductCard post={post} />
						</div>
					))}
				</div>
			</section>

			<FootNav />
		</div>
	);
}
