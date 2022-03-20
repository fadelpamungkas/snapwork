/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useState } from "react";
import Carousel from "../../components/Carousel";
import FootNav from "../../components/FootNav";
import HeadNav from "../../components/HeadNav";
import TierCard from "../../components/TierCard";

// export async function getStaticPaths() {
// 	return {
// 		paths: [{ params: { id: "1" } }],
// 		fallback: true, // false or 'blocking'
// 	};
// }

export async function getServerSideProps(context) {
	const id = context.query.id;
	const res = await fetch("https://snapwork.herokuapp.com/api/post/" + id);
	const getProduct = await res.json();
	const product = getProduct.data.data;
	return {
		props: {
			product,
		},
	};
}
export default function Product({ product }) {
	const router = useRouter();
	const { id } = router.query;

	console.log(product);

	return (
		<body className="w-full text-gray-900">
			<HeadNav />
			<div className="w-full bg-gradient-to-b from-gray-100 to-gray-200">
				<div className="mx-auto max-w-screen-xl py-8 px-8">
					<section className="border-b-2 border-gray-300 ">
						<h1 className=" text-4xl font-semibold">{product.title}</h1>
						<div className="flex items-center justify-start py-4">
							<h1 className="whitespace-pre text-lg font-medium">
								{product.authorName},{" "}
							</h1>
							<h1 className="text-lg font-medium text-gray-500">
								{product.category}
							</h1>
						</div>
					</section>
					<section className="grid grid-cols-3 gap-8 border-b-2 border-gray-300 py-8">
						<div className="col-span-2">
							<Carousel />
							<h1 className="mt-12 text-2xl font-semibold">Gig Description</h1>
							<h1 className="whitespace-pre-line py-4 text-base font-normal">{`{product.content} = ${product.content}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam id blandit eget nunc, in tempus tempor. Euismod ipsum ut nisi ac aliquet senectus sagittis vel semper. Egestas integer integer enim duis. Sit augue nisi interdum malesuada ornare in ultrices amet pellentesque. Rhoncus proin hac ipsum sagittis cras senectus vitae ultrices id. Pharetra diam auctor malesuada et sit nulla tempor nunc id. Tellus aliquet lectus quisque volutpat sollicitudin eget pharetra gravida tristique. Pharetra montes, rhoncus, mauris lectus quis purus enim interdum auctor. Adipiscing tellus faucibus ante ut neque. Integer tincidunt vivamus neque eu, lectus sed scelerisque sagittis, fermentum. Blandit in praesent arcu scelerisque aliquam mauris vestibulum gravida sed. Rutrum duis habitant hendrerit sed.

                            - Discussion(custom order)
                            - Scope of work (custom order)
                            - Gig purchase
                            - Answering requirement questions
                            - Brainstorming for design
                            - Layout design and then revision process
                            - Finalize Layout and upload to the website or sandbox (as required)
                            - Free support for error or bugs`}</h1>
						</div>
						<div className="colspan-1">
							<TierCard />
						</div>
					</section>
				</div>
			</div>
			<FootNav />
		</body>
	);
}
